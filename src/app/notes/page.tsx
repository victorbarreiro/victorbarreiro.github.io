import { FiCalendar, FiTag } from 'react-icons/fi'
import Link from 'next/link'

// This would typically come from a database or CMS
const notes = [
  {
    title: "A beleza da convolución",
    excerpt: "Análisis da conexión entre a convolución en análise funcional e teoría de sinais coas redes convolucionais, explicando a implementación dunha rede convolucional a través dun perceptrón.",
    date: "2023-10-15",
    tags: ["Deep Learning", "Convolución", "Matemáticas", "Redes Neuronais"],
    slug: "abelezada-convolucion"
  }
]

const categories = [
  "Mathematics",
  "Computer Architecture",
  "Deep Learning",
  "Research Notes"
]

export default function Notes() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="section-title">Notes</h1>
        <p className="text-lg text-neutral-600 max-w-3xl">
          A collection of technical notes, mathematical derivations, and research insights, 
          particularly focused on computer architecture and deep learning. These notes serve 
          as a personal knowledge base and may be useful for others working in similar areas.
        </p>
      </header>

      <section className="space-y-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="tag"
            >
              <FiTag className="mr-2" />
              {category}
            </button>
          ))}
        </div>

        <div className="grid-custom">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="card card-hover group"
            >
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 mb-3">
                {note.title}
              </h2>
              <p className="text-neutral-600 mb-4 line-clamp-3">
                {note.excerpt}
              </p>
              <div className="article-meta">
                <span className="flex items-center">
                  <FiCalendar className="mr-2" />
                  {new Date(note.date).toLocaleDateString('gl-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                  >
                    <FiTag className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
} 