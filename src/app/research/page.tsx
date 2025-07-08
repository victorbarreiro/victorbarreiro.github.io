import { FiExternalLink, FiFileText, FiLink } from 'react-icons/fi'

// Template for publications - replace with actual data
const publications = [
  {
    title: "GAN-based data augmentation for the classification of remote sensing multispectral images",
    authors: "Barreiro Domínguez, V.X., Goldar Dieste, A., Blanco Heras, D., Argüello, F.",
    year: 2024,
    venue: "XXXIV Jornadas de Paralelismo (JP2024), en el marco de las Jornadas SARTECO 2024",
    status: "published",
    links: {
      pdf: "https://zenodo.org/records/13837003/files/mDAGAN_from_sarteco.pdf?download=1",
      doi: "https://doi.org/10.5281/zenodo.13837003"
    }
  }
]

// Research areas
const researchAreas = [
  {
    title: "Data augmentation for remote sensing",
    description: "Techniques to generate synthetic data for remote sensing applications, with a focus on solving the data scarcity and data imbalance."
  }
]

export default function Research() {
  return (
    <div className="space-y-12">
      {/* Research Overview */}
      <section>
        <h1 className="section-title">Research</h1>
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg leading-relaxed">
            Currently, my research focuses on the development of generative artificial intelligence models for data augmentation and diversification in remote sensing. I work on the development of generative models such as diffusion models (DDPM) and have worked on GANs, adapting them to contexts, data sparsity and data imbalance. In parallel, I am starting to explore structural analysis and interpretability approaches with the aim of better understanding how foundational models behave in complex geospatial environments, and thus facilitating their efficient and reliable adaptation to concrete applications. My medium-term goal is to build a research framework that combines synthetic data generation, dynamic analysis of neural architectures and quantitative explainability in the context of Earth observation.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-neutral-600">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Publications</h2>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="card group">
              <div className="flex flex-col">
                {/* Contenido principal */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors duration-200">
                    {pub.title}
                  </h3>
                  <p className="text-neutral-600">{pub.authors}</p>
                  <p className="text-neutral-500">
                    {pub.venue} ({pub.year})
                  </p>
                </div>

                {/* Footer con links y status */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-200">
                  {/* Links a la izquierda */}
                  <div className="flex gap-4">
                  {pub.links.pdf && (
                    <a
                      href={pub.links.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="icon-button"
                      aria-label="Download PDF"
                        title="Download PDF"
                    >
                      <FiFileText className="h-5 w-5" />
                    </a>
                  )}
                  {pub.links.doi && (
                    <a
                      href={pub.links.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="icon-button"
                      aria-label="View DOI"
                        title="View DOI"
                    >
                      <FiLink className="h-5 w-5" />
                    </a>
                    )}
                  </div>
                  
                  {/* Status a la derecha */}
                  {pub.status && (
                    <span className="tag tag-info">
                      {pub.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 