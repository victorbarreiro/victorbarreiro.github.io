import { FiGithub, FiExternalLink } from 'react-icons/fi'

// Template for projects - replace with actual data
const projects = [
  {
    title: "InterpretableDL-RS",
    description: "An open-source framework for developing and evaluating interpretable deep learning models in remote sensing applications.",
    tags: ["Python", "PyTorch", "Remote Sensing", "Interpretability"],
    links: {
      github: "https://github.com/victorxbd/interpretabledl-rs",
      demo: "https://demo.interpretabledl-rs.org"
    },
    status: "active"
  },
  {
    title: "EarthVision Toolkit",
    description: "A collection of tools and utilities for processing and analyzing Earth Observation data using deep learning.",
    tags: ["Python", "Computer Vision", "Data Processing"],
    links: {
      github: "https://github.com/victorxbd/earthvision-toolkit"
    },
    status: "active"
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <div className="space-y-12">
      {/* Projects Overview */}
      <section>
        <h1 className="section-title">Projects</h1>
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg leading-relaxed">
            I develop and maintain several open-source projects focused on making AI and remote sensing 
            more accessible and interpretable. These tools are designed to help researchers and practitioners 
            in the field of Earth Observation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status Badge */}
                {project.status && (
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mb-4">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-primary-600"
                    aria-label="View on GitHub"
                  >
                    <FiGithub className="h-6 w-6" />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-primary-600"
                    aria-label="View Demo"
                  >
                    <FiExternalLink className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contributing Section */}
      <section className="bg-neutral-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Contributing</h2>
        <p className="text-neutral-600 mb-4">
          I welcome contributions to any of my open-source projects. Whether you're interested in 
          adding new features, fixing bugs, or improving documentation, your help is valuable.
        </p>
        <p className="text-neutral-600">
          Feel free to open issues or submit pull requests on GitHub. For larger contributions, 
          it's best to discuss the changes first through an issue.
        </p>
      </section>
    </div>
  )
} 