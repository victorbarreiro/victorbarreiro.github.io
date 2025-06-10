import { FiExternalLink, FiFileText } from 'react-icons/fi'

// Template for publications - replace with actual data
const publications = [
  {
    title: "Interpretable Deep Learning for Remote Sensing: A Case Study",
    authors: "Barreiro Domínguez, V.X., et al.",
    year: 2024,
    venue: "IEEE Transactions on Geoscience and Remote Sensing",
    status: "under review",
    links: {
      arxiv: "https://arxiv.org/abs/XXXX.XXXXX",
      pdf: "/papers/paper1.pdf"
    }
  },
  // Add more publications here
]

// Research areas
const researchAreas = [
  {
    title: "Interpretable AI",
    description: "Developing transparent and explainable deep learning models for Earth Observation applications, focusing on model interpretability and decision-making processes."
  },
  {
    title: "Sample Efficiency",
    description: "Researching methods to improve deep learning model performance with limited training data, particularly in remote sensing scenarios where labeled data is scarce."
  },
  {
    title: "Remote Sensing Pipelines",
    description: "Designing efficient and robust deep learning pipelines for processing and analyzing Earth Observation data, with emphasis on practical applications and real-world deployment."
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
            My research focuses on interpretable generative models, sample efficiency, and deep learning pipelines 
            for remote sensing data, aiming to enhance the reliability and understanding of AI applied to Earth Observation.
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
            <div key={index} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <p className="text-neutral-600 mb-2">{pub.authors}</p>
                  <p className="text-neutral-500">
                    {pub.venue} ({pub.year})
                    {pub.status && (
                      <span className="ml-2 px-2 py-1 text-sm bg-yellow-100 text-yellow-800 rounded">
                        {pub.status}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex space-x-4">
                  {pub.links.arxiv && (
                    <a
                      href={pub.links.arxiv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                      aria-label="View on arXiv"
                    >
                      <FiExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {pub.links.pdf && (
                    <a
                      href={pub.links.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                      aria-label="Download PDF"
                    >
                      <FiFileText className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thesis Work */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Thesis Work</h2>
        <div className="card">
          <h3 className="text-xl font-semibold mb-3">
            PhD Thesis: Interpretable Deep Learning for Earth Observation
          </h3>
          <p className="text-neutral-600 mb-4">
            My doctoral research focuses on developing interpretable deep learning models for Earth Observation applications, 
            with particular emphasis on model transparency and practical deployment in environmental monitoring scenarios.
          </p>
          <p className="text-neutral-500">
            Expected completion: 2025
          </p>
        </div>
      </section>
    </div>
  )
} 