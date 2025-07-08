import { FiDownload, FiMail, FiMapPin, FiGlobe, FiGithub } from 'react-icons/fi'
import { SiLinkedin, SiGooglescholar, SiOrcid } from 'react-icons/si'

// Template for CV sections - replace with actual data
const cvSections = {
  education: [
    {
      degree: "PhD in Computer Science",
      institution: "University of Santiago de Compostela",
      period: "2021 - Present",
      details: "Focus on Interpretable AI for Earth Observation"
    },
    // Add more education entries
  ],
  experience: [
    {
      role: "Research Assistant",
      institution: "CiTIUS - Centro Singular de Investigación en Tecnoloxías Intelixentes da USC",
      period: "2021 - Present",
      details: "Developing interpretable deep learning models for remote sensing applications"
    },
    // Add more experience entries
  ],
  teaching: [
    {
      course: "Fundamentals of Computers",
      institution: "University of Santiago de Compostela",
      period: "2023 - Present",
      role: "Teaching Assistant",
      topics: [
        "Introduction to Computer Architecture",
        "Information Representation",
        "Instruction Repertoire",
        "Computer Arithmetic",
        "The Processor: Data Path and Control Unit",
        "The memory hierarchy",
        "Input/Output"
      ]
    }
  ]
}

export default function CV() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-6">
        <h1 className="section-title">CV & Contact</h1>
        <div className="flex justify-center space-x-4">
          <a
            href="/cv/victor-barreiro-cv.pdf"
            className="btn-primary inline-flex items-center"
            download
          >
            <FiDownload className="mr-2" />
            Download CV
          </a>
        </div>
      </section>

      {/* Contact Information */}
      <section className="card">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <FiMail className="text-primary-600 mr-3" />
              <a href="mailto:victorxesus.barreiro.dominguez@usc.es" className="text-neutral-600 hover:text-primary-600">
                victorxesus.barreiro.dominguez@usc.es
              </a>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-primary-600 mr-3" />
              <span className="text-neutral-600">
                CiTIUS - Centro Singular de Investigación en Tecnoloxías Intelixentes da USC<br />
                University of Santiago de Compostela<br />
                Santiago de Compostela, Spain
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <FiGithub className="text-primary-600 mr-3" />
              <a
                href="https://github.com/victorbarreiro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600"
              >
                GitHub Profile
              </a>
            </div>
            <div className="flex items-center">
              <SiOrcid className="text-primary-600 mr-3" />
              <a
                href="https://orcid.org/0009-0008-2167-2005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600"
              >
                ORCID Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CV Sections */}
      <section className="space-y-8">
        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-6">
            {cvSections.education.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                <p className="text-neutral-600 mb-2">{item.institution}</p>
                <p className="text-neutral-500 mb-2">{item.period}</p>
                <p className="text-neutral-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {cvSections.experience.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
                <p className="text-neutral-600 mb-2">{item.institution}</p>
                <p className="text-neutral-500 mb-2">{item.period}</p>
                <p className="text-neutral-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Teaching</h2>
          <div className="space-y-6">
            {cvSections.teaching.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-2">{item.course}</h3>
                <p className="text-neutral-600 mb-2">{item.institution}</p>
                <p className="text-neutral-500 mb-2">{item.period}</p>
                <p className="text-neutral-600">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="card">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
} 