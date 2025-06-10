import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-100 shadow-lg">
            <Image
              src="/images/profile.jpg"
              alt="Víctor Xesús Barreiro Domínguez"
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
          Víctor Xesús Barreiro Domínguez
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
          PhD candidate in Applied AI for Remote Sensing
          <br />
          <span className="text-primary-600">CiTIUS - Centro Singular de Investigación en Tecnoloxías Intelixentes da USC</span>
        </p>
        <p className="text-base md:text-lg text-neutral-500">
          Research Group in Computer Architectures
          <br />
          University of Santiago de Compostela
        </p>
      </section>

      {/* About Section */}
      <section className="prose prose-neutral max-w-none">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            I am a PhD student and researcher at CiTIUS, focusing on interpretable deep learning models for Earth Observation. 
            My work bridges theoretical advances in AI with practical applications in remote sensing and environmental monitoring.
          </p>
          
          <p className="text-lg leading-relaxed">
            My research interests lie at the intersection of computer vision, deep learning, and remote sensing, 
            with a particular focus on developing interpretable and efficient AI models for Earth Observation applications. 
            I am passionate about creating AI solutions that are not only technically sound but also understandable and 
            accessible to the scientific community.
          </p>

          <p className="text-lg leading-relaxed">
            Alongside my formal research, I write about philosophical and engineering aspects of AI, 
            exploring the broader implications and practical challenges of implementing AI systems in real-world scenarios.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          href="/research"
          className="card group hover:border-primary-200 transition-all duration-200"
        >
          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
            Research
          </h2>
          <p className="text-neutral-600 mb-4">
            Explore my research in interpretable AI and remote sensing applications.
          </p>
          <div className="flex items-center text-primary-600">
            Learn more
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link 
          href="/projects"
          className="card group hover:border-primary-200 transition-all duration-200"
        >
          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
            Projects
          </h2>
          <p className="text-neutral-600 mb-4">
            Discover my open-source projects and technical contributions.
          </p>
          <div className="flex items-center text-primary-600">
            View projects
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>

      {/* Institutional Links */}
      <section className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
        <h2 className="text-xl font-semibold mb-4 text-neutral-900">Institutional Links</h2>
        <div className="space-y-4">
          <a
            href="https://citius.gal/es/team/victor-xesus-barreiro-dominguez/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary-600 hover:text-primary-700 transition-colors"
          >
            CITIUS Research Group Profile
          </a>
          <a
            href="https://www.usc.gal/es/departamento/electronica-computacion/directorio/victor-xesus-barreiro-dominguez-677719"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary-600 hover:text-primary-700 transition-colors"
          >
            USC Faculty Directory
          </a>
        </div>
      </section>
    </div>
  )
} 