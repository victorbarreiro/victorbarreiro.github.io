import { FiCalendar, FiTag, FiFileText } from 'react-icons/fi'
import Link from 'next/link'

// This would typically come from a database or CMS
const notes = [
  {
    title: "A beleza da convolución - The beauty of convolution",
    excerpt: "This document analyzes the mathematical connection between classical convolution operations from signal theory and convolutional neural networks. The author demonstrates that convolutional layers are mathematically equivalent to standard perceptrons with constrained weight matrices—specifically, weights that are shared across spatial locations with many connections set to zero. By representing images as discrete functions and showing how convolution kernels correspond to these weight-sharing patterns, the document explains why convolutional networks, while not more expressive than multilayer perceptrons, are dramatically more efficient to train due to significant parameter reduction. The work bridges theoretical signal processing with practical deep learning implementations, providing mathematical insight into why convolutional architectures excel in computer vision tasks.",
    date: "2023-10-01",
    tags: ["Deep Learning", "Signal Processing", "Computer Vision", "Mathematics"],
    slug: "a-beleza-da-convolucion",
    links: {
      english: "https://drive.google.com/file/d/1ihjEzGtkrN-jGkai5oveXhAvnxb-01Kt/view?usp=sharing",
      galician: "https://drive.google.com/file/d/1s1n8iIvJtyW2wV31YDxEh0yMnMN3lQW7/view?usp=sharing"
    },
    image: "/images/notes/convolution-overview.png"
  }
]

const categories = [
  "Matemáticas",
  "Arquitectura de Computadores",
  "Deep Learning",
  "Visión por Computador",
  "Notas de Investigación"
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
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
          {notes.map((note) => (
            <div key={note.slug} className="card hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-3 sm:mb-4">
                    {note.title}
                  </h2>
                  {note.image && (
                    <img 
                      src={note.image} 
                      alt="Convolution overview: image, function, and equations" 
                      className="w-full h-auto max-h-48 sm:max-h-56 object-contain my-3 sm:my-4 rounded border" 
                    />
                  )}
                  <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                    {note.excerpt}
                  </p>
                </div>

                <div className="mt-auto space-y-3 sm:space-y-4">
                  {/* Date and Links */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-neutral-200">
                    <div className="flex items-center text-xs sm:text-sm text-neutral-500">
                      <FiCalendar className="mr-2 h-4 w-4" />
                      {new Date(note.date).toLocaleDateString('gl-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    {note.links && (
                      <div className="flex gap-4 sm:gap-6">
                        {note.links.english && (
                          <a
                            href={note.links.english}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs sm:text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                            title="English version"
                          >
                            <FiFileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            <span>English</span>
                          </a>
                        )}
                        {note.links.galician && (
                          <a
                            href={note.links.galician}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs sm:text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                            title="Galician version"
                          >
                            <FiFileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Galician</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-neutral-100 text-neutral-700"
                      >
                        <FiTag className="mr-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 