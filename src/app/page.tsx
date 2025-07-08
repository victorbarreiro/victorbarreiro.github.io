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
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto text-center">
          PhD candidate in Applied AI for Remote Sensing
          <br />
          <span className="text-primary-600">CiTIUS - Centro Singular de Investigación en Tecnoloxías Intelixentes</span>
        </p>
        <p className="text-base md:text-lg text-neutral-500 text-center">
          Research Group in Computer Architectures
          <br />
          University of Santiago de Compostela
        </p>
      </section>

      {/* About Section */}
      <section className="prose prose-neutral max-w-none">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-justify">
            I have a degree in Computer Engineering (2018-2022) from the Universidade de Santiago de Compostela and I have completed the Master in Artificial Intelligence (2022-2024) at the same university. I have done professional internships at the Galician Automotive Technology Center (CTAG) and at GRADIANT, the Galician Telecommunications Technology Center, where I worked on artificial intelligence projects.
          </p>
          
          <p className="text-lg leading-relaxed text-justify">
My research career began at CiTIUS, where I obtained an initiation contract that allowed me to develop my Master's Thesis in collaboration with the center. Currently, I am carrying out my PhD at CiTIUS, funded by the University Teacher Training grants (FPU 2022) of the Spanish Government. My research interests include deep learning and generative models applied to remote sensing and multispectral image processing.
          </p>

          <p className="text-lg leading-relaxed text-justify">
            Alongside my formal research, I write about philosophical and engineering aspects of AI, 
            exploring the broader implications and practical challenges of implementing AI systems in real-world scenarios.
          </p>

          {/* Funding & Scholarships Section */}
          <div>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-primary-700">Funding & Scholarships</h2>
            <ul className="space-y-3">
              <li className="text-justify">
                <span className="font-semibold">2023</span> — <b>University Teaching Training Scholarship 2022</b> (Ministry of Science, Innovation, and Universities). Competitive public call.<br/>
                <span className="italic">Funding for a full-time PhD contract to conduct research and develop academic training with the goal of becoming a university professor.</span>
              </li>
              <li className="text-justify">
                <span className="font-semibold">2022-2023</span> — <b>Master's Talent Scholarship for People with Disabilities</b> (Fundación ONCE). Competitive public call.
              </li>
              <li className="text-justify">
                <span className="font-semibold">2021-2022</span> — <b>Undergraduate Scholarship for People with Disabilities</b> (Fundación Adecco). Competitive public call.
              </li>
              <li className="text-justify">
                <span className="font-semibold">2021-2022</span> — <b>Fundación Universia Scholarship 2021-2022 for People with Disabilities</b>. Competitive public call.
              </li>
              <li className="text-justify">
                <span className="font-semibold">2020-2021</span> — <b>Undergraduate Scholarship for People with Disabilities</b> (Fundación Adecco). Competitive public call.
              </li>
              <li className="text-justify">
                <span className="font-semibold">2020-2021</span> — <b>Fundación Universia Scholarship 2020-2021 for People with Disabilities</b>. Competitive public call.
              </li>
            </ul>
          </div>

          {/* Internships & Positions Section */}
          <div>
            <h2 className="text-xl font-semibold mt-10 mb-6 text-primary-700">Internships & Positions</h2>
            <div className="space-y-6">
              {/* FPU Predoctoral Researcher (actual) */}
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-3">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    Predoctoral Researcher (FPU)
                  </span>
                  <span className="text-sm text-neutral-500">2023 — Present</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  PhD Candidate in Applied AI for Remote Sensing
                </h3>
                <p className="text-neutral-700 mb-3">
                  <b>CiTIUS</b> — Computer Architecture Area, Multispectral and Hyperspectral Image Group
                </p>
                <p className="text-neutral-600 text-sm mb-2">
                  Research on deep learning and generative models for multispectral remote sensing imagery and ecosystem analysis.
                </p>
                {/* IBM Research Stay as subelement */}
                <div className="ml-4 mt-4 border-l-4 border-primary-100 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-2">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                      Research Stay
                    </span>
                    <span className="text-xs text-neutral-500">May 2025 — Jul 2025</span>
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">
                    Visiting Researcher — IBM Research Zurich (AI for Climate Impact group)
                  </div>
                  <div className="text-neutral-600 text-xs">
                    Research stay focused on AI methods for climate impact analysis and mitigation, collaborating with the ACT group on innovative solutions for environmental challenges.
                  </div>
                </div>
              </div>

              {/* Research Initiation Investigator */}
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-3">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    Research Position
                  </span>
                  <span className="text-sm text-neutral-500">Jan 2023 — Oct 2023</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Research Initiation Investigator
                </h3>
                <p className="text-neutral-700 mb-3">
                  <b>CiTIUS</b> — Computer Architecture Area, Multispectral and Hyperspectral Image Group
                </p>
                <p className="text-neutral-600 text-sm">
                  Improved deep learning classification models for multispectral remote sensing imagery. Adapted Dataloaders and DAGAN models to multispectral data, achieving enhanced classifier performance for ecosystem analysis.
                </p>
              </div>

              {/* NLP Internship */}
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-3">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    NLP Internship
                  </span>
                  <span className="text-sm text-neutral-500">Jul 2022 — Sep 2022</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Intelligent Systems Intern
                </h3>
                <p className="text-neutral-700 mb-3">
                  <b>GRADIANT</b> — NLP Division, Intelligent Systems Department
                </p>
                <p className="text-neutral-600 text-sm">
                  Enhanced automatic Q&A generation systems in Spanish. Developed translation verification tools using NLLB models and improved English reading comprehension datasets. Received recommendation letter for Master's in AI.
                </p>
              </div>

              {/* Computer Vision Internship */}
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-3">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    Computer Vision Internship
                  </span>
                  <span className="text-sm text-neutral-500">Mar 2022 — May 2022</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  ADAS Systems Intern
                </h3>
                <p className="text-neutral-700 mb-3">
                  <b>CTAG</b> — Advanced Driver Assistance Systems, Vision Systems
                </p>
                <p className="text-neutral-600 text-sm">
                  Developed traffic sign classification system using SVM models. Analyzed RGB, HSV, LAB color spaces and HOG/HAAR descriptors for CPU-optimized execution. Achieved high accuracy with low computational overhead.
                </p>
              </div>
            </div>
          </div>
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
          href="/notes"
          className="card group hover:border-primary-200 transition-all duration-200"
        >
          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
            Notes
          </h2>
          <p className="text-neutral-600 mb-4">
            Technical notes, mathematical derivations, and research insights on computer architecture and deep learning.
          </p>
          <div className="flex items-center text-primary-600">
            Read notes
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>
    </div>
  )
} 