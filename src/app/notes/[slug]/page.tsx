import { notFound } from 'next/navigation'
import { FiCalendar, FiTag, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import { Metadata } from 'next'
import Script from 'next/script'

// This would typically come from a database or CMS
const notes = [
  {
    title: "A beleza da convolución",
    excerpt: "Análisis da conexión entre a convolución en análise funcional e teoría de sinais coas redes convolucionais, explicando a implementación dunha rede convolucional a través dun perceptrón.",
    date: "2023-10-15",
    tags: ["Deep Learning", "Convolución", "Matemáticas", "Redes Neuronais"],
    slug: "abelezada-convolucion",
    content: `
      <article class="article-content">
        <div class="article-header">
          <h1>A beleza da convolución</h1>
          <div class="article-meta">
            <span class="author">Víctor Xesús Barreiro Domínguez</span>
            <span class="date">Outubro 2023</span>
          </div>
        </div>

        <div class="toc">
          <h2>Índice</h2>
          <ul>
            <li><a href="#introduction">1. Introdución</a></li>
            <li><a href="#image-function">2. Imaxe como función</a>
              <ul>
                <li><a href="#domain-dimensions">2.1 Dimensións do dominio</a></li>
              </ul>
            </li>
            <li><a href="#convolution">3. Convolución</a></li>
            <li><a href="#perceptron-convolution">4. Perceptrón como convolución numérica</a>
              <ul>
                <li><a href="#neuron-layer">4.1 Neurona e capa do perceptrón</a></li>
                <li><a href="#discrete-convolution">4.2 Convolución discreta</a></li>
                <li><a href="#convolutional-networks">4.3 Redes convolucionais: Unha capa convolucional - Unha convolución</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <section id="introduction">
          <h2>1. Introdución</h2>
          <p>Neste documento, quero presentar a conexión entre a idea de convolución empregada en análise funcional e teoría de sinais coas redes convolucionais. Do mesmo xeito, explicaremos como sería posible implementar unha rede convolucional a través dun perceptrón. Desta forma, entenderemos por que as redes non son formalmente máis expresivas que un perceptrón multicapa pero na práctica son máis fáciles de adestrar e moito máis eficientes.</p>
        </section>

        <section id="image-function">
          <h2>2. Imaxe como función</h2>
          <p>Esta aproximación é a máis común en visión por computador cando aplicamos numerosas técnicas xa que nos permite aplicar ferramentas matemáticas de forma moi intuitiva, como veremos.</p>
          
          <p>Un aspecto a comentar é que na maioría dos casos falaremos de funcións continuas xa que para moitos lectores teñen maior intuición nestes contextos - todo o mundo terá intuición sobre educación diferencial pero probablemente moitos non oíron o termo ecuación en diferencias. As implementacións que despois traballarán coa natureza discreta relativamente transparente.</p>
          
          <p>Desta forma podemos definir unha imaxe en branco e negro como unha función \\(f: \\mathbb{R}^{2} \\longrightarrow \\mathbb{R}\\), onde temos:</p>
          
          <div class="equation">
            $$f(x, y) \\in [0,1] \\text{ onde } x \\in [0,\\text{anchura}] \\wedge y \\in [0,\\text{altura}]$$
          </div>
          
          <p>Probablemente ante esta formalización calquera con tendencia ao rigor se verá golpeado pola forma de definila sobre un dominio <em>continuo</em> cando unha imaxe dixital é claramente discreta. Neste sentido, hai que sinalar que definila así facilítanos abordar outras cuestións e é algo xustificable.</p>
          
          <div class="figure">
            <div class="figure-content">
              <div class="figure-item">
                <div class="figure-image image-circle"></div>
                <div class="figure-caption">Imaxe</div>
              </div>
              <div class="figure-item">
                <div class="figure-image function-3d"></div>
                <div class="figure-caption">Función</div>
              </div>
            </div>
          </div>
          
          <p>Por unha banda, se quixésemos ser rigorosos poderíamos facer unha interpolación entre os valores que temos dos píxeles da imaxe para obter unha función nese dominio continuo; con todo, non é usual xa que moitas das técnicas que veremos terán implementacións discretas para aplicar a imaxes reais. Por outra banda, é máis sinxelo mostralo con estes dominios onde físicos, matemáticos e enxeñeiros poden sentirse cómodos lendo.</p>
          
          <p>Respecto ao co-dominio, temos imaxes con valores nese intervalo [0,1] onde a precisión dependerá do nivel de precisión que o noso sensor é capaz de capturar e a representación máquina. A idea sería equivalente para imaxes nun dominio enteiro de [0, 255].</p>

          <h3 id="domain-dimensions">2.1 Dimensións do dominio</h3>
          <p>Neste caso podemos engadir unha dimensión extra ao noso dominio que nos permite ver diferentes bandas como as dunha imaxe RGB convencional.</p>
          
          <div class="equation">
            $$f(x, y, b) \\text{ onde } b \\in \\{\\text{bandas}\\}$$
          </div>
          
          <p>Aínda que podería pensarse que non ten excesivo sentido falar dun continuo aquí, en realidade non o estamos indicando, é importante sinalar que podería telo. Nun contexto teórico, en realidade esta nova dimensión \\(b\\) o que nos está permitindo é mover no dominio da frecuencia do sinal que estamos procesando, a diferenza de \\(x\\) e \\(y\\) que nos permiten mover no dominio espacial capturado nesta proxección.</p>
          
          <p>Outra aproximación importante nesta liña de engadir dimensións á nosa función imaxe é engadir a dimensión temporal, a idea de vídeo. Así temos:</p>
          
          <div class="equation">
            $$f(x, y, t) \\text{ onde } t \\in [t_{0}, t_{f}]$$
          </div>
          
          <p>Nun vídeo gravado, \\(t\\) está composto de todos os fotogramas e onde a resolución sería o <span class="highlight">frame rate</span>. Do mesmo xeito, na práctica non parece contribuir moito falar dun dominio continuo nesta dimensión do dominio da nosa función, xa que os sistemas electrónicos teñen latencia capturando imaxes. Pola contra, volvemos atopalo moi útil pola familiaridade.</p>
        </section>

        <section id="convolution">
          <h2>3. Convolución</h2>
          <p>Na análise funcional, a convolución é unha operación empregada para combinar dúas funcións e producir unha terceira función que representa a forma en que unha función "inflúe" na outra. A convolución de dúas funcións \\(f\\) e \\(g\\) defínese como:</p>
          
          <div class="equation">
            $$(f * g)(t) = \\int_{-\\infty}^{\\infty} f(\\tau) \\cdot g(t - \\tau) \\, d\\tau$$
          </div>
          
          <p>onde \\(t\\) é a variable independente e \\(\\tau\\) é unha variable de integración. A convolución é esencialmente un produto integral entre \\(f(\\tau)\\) e \\(g(t - \\tau)\\) despois de desprazar e reflectir \\(g\\) e logo "deslizar" ao longo de \\(t\\). Esta operación pode verse como unha forma de medir a "interacción" entre \\(f\\) e \\(g\\) en diferentes puntos de \\(t\\).</p>
          
          <div class="important">
            Nota relevante: é <strong>conmutativa</strong>, <strong>asociativa</strong> e <strong>distributiva</strong>. Coidado - é importante parar e pensar na idea e notar que é moi diferente de multiplicar dúas funcións, xa que esta é unha confusión común cando se leen explicacións sobre redes convolucionais.
          </div>
          
          <div class="figure">
            <div class="convolution-example">
              <h4>Visualización do exemplo de convolución</h4>
              <p>f(τ) * g(t-τ) → Desprazamento → Multiplicación → Integración</p>
            </div>
            <div class="figure-caption">Exemplo de convolución</div>
          </div>
        </section>

        <section id="perceptron-convolution">
          <h2>4. Perceptrón como convolución numérica</h2>
          
          <h3 id="neuron-layer">4.1 Neurona e capa do perceptrón</h3>
          <p>Unha neurona do perceptrón ten a definición mostrada na ecuación (1). Onde a entrada é un vector \\(X \\in \\mathbb{R}^n\\), con compoñentes \\(x_i\\), e a saída é \\(y \\in \\mathbb{R}\\).</p>
          
          <div class="equation">
            $$\\text{neurona}(X) = f_{\\text{act}}\\left(\\sum_{i=1}^{n} w_i \\cdot x_i + b\\right) \\quad \\text{(1)}$$
          </div>
          
          <p>De agora en diante teremos \\(\\text{neurona}: \\mathbb{R}^n \\rightarrow \\mathbb{R}\\). Unha nota relevante é que normalmente intentaremos ter as entradas normalizadas e intentaremos normalizar a saída das capas para que en lugar de \\(\\mathbb{R}\\) teñamos \\([0,1]\\).</p>
          
          <div class="neural-diagram">
            <h4>Esquema da neurona</h4>
            <div class="neural-schema">
              <div class="neural-input">
                <strong>Entrada</strong><br>
                x₁ · w₁<br>
                x₂ · w₂<br>
                x₃ · w₃<br>
                ⋮<br>
                xₙ · wₙ
              </div>
              <div class="neural-arrow">→</div>
              <div class="neural-sum">
                <div class="sum-circle">Σ</div>
                <small>SUMA</small>
              </div>
              <div class="neural-arrow">→</div>
              <div class="neural-output">
                <strong>Saída</strong><br>
                f<sub>act</sub>(Σ(xᵢ · wᵢ))
              </div>
            </div>
          </div>
          
          <p>Se agora facemos unha capa de neuronas podemos velo como unha función vectorial, \\(\\text{Capa}: \\mathbb{R}^n \\rightarrow \\mathbb{R}^k\\) onde \\(k\\) é o número de saídas. Así temos a definición na ecuación (2), onde \\(X\\) é o vector con todos os \\(x_i\\).</p>
          
          <div class="equation">
            $$\\text{Capa}(X) := (\\text{neurona}_{j=0}(X), \\text{neurona}_{j=1}(X), \\ldots, \\text{neurona}_{j=k}(X)) \\quad \\text{(2)}$$
          </div>

          <h3 id="discrete-convolution">4.2 Convolución discreta</h3>
          <div class="note">
            <strong>Nota importante:</strong> Non continuaremos usando os mesmos índices que nas seccións anteriores.
          </div>
          
          <p>Agora imos recuperar a convolución, e ter en conta que a nosa función de partida é discreta, xa que cando dixitalizamos calquera sinal estamos discretizándoo. Note que estamos discretizando o dominio, non o co-dominio.</p>
          
          <p>A integral segue sendo a mesma, pero neste caso podemos calculala directamente xa que podemos percorrer todo o dominio sumando o valor que toma a nosa función para cada elemento do dominio.</p>
          
          <p>Así temos, a convolución discreta de dúas sucesións \\(f[n]\\) e \\(g[n]\\) defínese como:</p>
          
          <div class="equation">
            $$(f * g)[n] = \\sum_{k=-\\infty}^{\\infty} f[k] \\cdot g[n - k] \\quad \\text{(3)}$$
          </div>
          
          <p>Onde:</p>
          <ul>
            <li>\\(f[n]\\) é unha sucesión, a miúdo chamada "sinal de entrada".</li>
            <li>\\(g[n]\\) é outra sucesión, a miúdo chamada "filtro".</li>
            <li>\\((f * g)[n]\\) é a sucesión resultante da convolución.</li>
          </ul>
          
          <p>O índice \\(n\\) representa a posición na sucesión resultante. A suma realízase sobre todos os posibles valores de \\(k\\). É importante ter en conta que as dúas funcións (ou sucesións) poden ter diferentes dominios.</p>
          
          <p>En convolucións discretas é usual falar de sucesións. É importante ter en conta que unha sucesión é unha función con dominio en \\(\\mathbb{N}\\).</p>
          
          <p>Isto é importante xa que unha imaxe é un sinal ou función con dominio de dimensión 2 (normalmente) e discreto.</p>

          <h3 id="convolutional-networks">4.3 Redes convolucionais: Unha capa convolucional - Unha convolución</h3>
          <p>No noso caso o que imos facer é ter a nosa imaxe como entrada (xa vimos que podemos interpretala como unha función) e calcular a función que actuará como <span class="highlight">filtro</span>.</p>
          
          <p>Chamaremos á nova función que imos calcular para realizar a nosa convolución un <span class="highlight">kernel</span>. Hai que sinalar que na implementación non só faremos a suma ponderada como vimos na Definición (3), engadiremos unha función de activación ao valor de saída. Engadir esta función dános máis expresividade ao extraer información concatenando capas, pero para a nosa explicación non é relevante máis alá de que todo encaixa mellor como se ve na figura de equivalencia.</p>
          
          <p>Agora debemos recoller a función \\(\\text{Capa}\\) que definimos antes na Definición (2). Unha forma de implementar a convolución a través do perceptrón sería fixar a 0 todos os pesos \\(w_i\\) que corresponden a píxeles que non inflúen no cálculo do novo píxel de saída. Os pesos que non tomen o valor 0 compartirán os mesmos valores pero cun desprazamento. Nas figuras non estamos usando <em>padding</em> polo que o tamaño do vector de saída diminúe respecto ao tamaño do vector de entrada (dominio da función de entrada e a función de saída). Habitualmente úsase 0 <em>padding</em> e un desprazamento <em>stride</em> de 1.</p>
          
          <div class="figure">
            <div class="convolution-example-2d">
              <h4>Convolución discreta sobre un vector</h4>
              <div class="convolution-vectors">
                <div class="vector input">Vector de entrada: [1, 2, 3, 4, 5]</div>
                <div class="operator">*</div>
                <div class="vector kernel">Kernel: [1, 0, -1]</div>
                <div class="operator">=</div>
                <div class="vector output">Saída: [-1, -2, -2]</div>
              </div>
            </div>
            <div class="figure-caption">Convolución discreta sobre un vector</div>
          </div>
          
          <div class="figure">
            <div class="equivalence-box">
              <h4>Equivalencia entre neurona restrinxida e paso de convolución</h4>
              <p>Unha neurona con restricións de peso ≡ Un paso de convolución discreta</p>
            </div>
            <div class="figure-caption">Equivalencia entre unha neurona con restricións de peso e un paso de convolución discreta</div>
          </div>
          
          <p>Tomando todo o anterior e recollendo a nosa entrada como un vector \\(X\\), e unha función \\(g\\) que imos calcular. A nosa función \\(g\\) son en realidade os pesos \\(w_i\\), é suficiente impoñer restricións ás neuronas convencionais. Para detallar a situación podemos escribir todos os pesos da capa a través dunha matriz \\(\\mathbb{W}\\) (Matriz 1) onde o primeiro índice \\(j \\in \\{0,\\ldots,k\\}\\) indica a neurona e o segundo índice \\(i \\in \\{0,\\ldots,n\\}\\) indica a entrada da capa que afecta. Coa mesma idea, podemos impoñer restricións á matriz de pesos para obter a convolución (Matriz 2), onde é importante sinalar que \\(w_{j,i} = w_{j-1, i-1}\\). Desta forma, vemos o desprazamento do <span class="highlight">kernel</span>.</p>
          
          <div class="equation">
            <h4>Matriz de pesos xeral dunha capa</h4>
            $$\\mathbb{W} = \\begin{bmatrix}
            w_{11} & w_{12} & \\ldots & w_{1n} \\\\
            w_{21} & w_{22} & \\ldots & w_{2n} \\\\
            \\vdots & \\vdots & \\ddots & \\vdots \\\\
            w_{k1} & w_{k2} & \\ldots & w_{kn}
            \\end{bmatrix}$$
          </div>
          
          <div class="equation">
            <h4>Matriz de pesos equivalente a aplicar convolución discreta</h4>
            $$\\mathbb{G} = \\begin{bmatrix}
            g_{1} & g_{2} & g_{3} & 0 &\\ldots & 0 \\\\
            0 & g_{1} & g_{2} & g_{3} &\\ldots & 0 \\\\
            \\vdots & \\vdots & \\vdots & \\vdots & \\ddots & \\vdots\\\\
            0 & 0 & 0 & g_{1} & g_{2} & g_{3}
            \\end{bmatrix}$$
          </div>
          
          <div class="note">
            <strong>Nota 1:</strong> Estamos ignorando o bias de cada neurona xa que non ten valor para o noso caso. Con todo, note que tamén se pode usar na convolución. En calquera caso, pode verse cun peso \\(w_b\\) que se multiplica por un \\(x_b := 1\\).
          </div>
          
          <p>A gran vantaxe desta estratexia é que reducimos enormemente o número de parámetros que necesitamos adestrar e almacenar en cada capa mentres mellor entendemos o que está aprendendo o noso modelo.</p>
          
          <p>Hai que sinalar que cando falamos dunha imaxe, xa non falamos de convolución nunha soa dimensión, pola contra temos dúas dimensións. É usual, en moitos campos, falar de imaxe como un sinal 2D.</p>
          
          <div class="figure">
            <div class="convolution-2d-example">
              <h4>Exemplo de convolución 2D</h4>
              <div class="convolution-grid">
                <div class="grid-item">
                  <div class="grid-label">Imaxe I</div>
                  <div class="grid-matrix">
                    <!-- Grid content will be styled with CSS -->
                  </div>
                </div>
                <div class="grid-operator">*</div>
                <div class="grid-item">
                  <div class="grid-label">Kernel</div>
                  <div class="grid-kernel">
                    <!-- Kernel content will be styled with CSS -->
                  </div>
                </div>
                <div class="grid-operator">=</div>
                <div class="grid-item">
                  <div class="grid-label">Saída</div>
                  <div class="grid-output">
                    <!-- Output content will be styled with CSS -->
                  </div>
                </div>
              </div>
            </div>
            <div class="figure-caption">Exemplo de convolución 2D</div>
          </div>
        </section>
      </article>
    `
  }
] as const

// Generate static params for all notes
export async function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }))
}

// Generate metadata for each note
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const note = notes.find(n => n.slug === params.slug)
  if (!note) return {}

  return {
    title: note.title,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: 'article',
      publishedTime: note.date,
      tags: [...note.tags],
    },
  }
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = notes.find((note) => note.slug === params.slug)

  if (!note) {
    notFound()
  }

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.min.js"
        strategy="afterInteractive"
      />
      <article className="space-y-8">
        <Link 
          href="/notes"
          className="inline-flex items-center text-neutral-600 hover:text-primary-600 mb-8"
        >
          <FiArrowLeft className="mr-2" />
          Volver a Notas
        </Link>

        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: note.content }}
        />
      </article>
    </>
  )
} 