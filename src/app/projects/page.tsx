import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi'
import Image from 'next/image'

type ProjectLinks = {
  github?: string;
  pdf?: string;
  demo?: string;
}

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLinks;
  status: "Completed" | "In Development";
  image?: string;
}

// Template for projects - replace with actual data
const projects: Project[] = [
  {
    title: "Bachelor's Thesis - Tracking system for obtaining training data for detecting online misinformation",
    description: "This work explores the use of supervised natural language processing (NLP) models to address online misinformation, with a focus on health-related content in search engine results. Given the lack of suitable datasets, I developed a custom web crawler to collect and label general-domain data by truthfulness. These datasets were used to train several NLP classifiers, which were then evaluated on health misinformation data from the 2021 TREC Health Misinformation Track.",
    tags: ["NLP", "Web Crawler", "Misinformation", "Machine Learning"],
    links: {
      pdf: "https://drive.google.com/file/d/1V5SN8W0piWwJiKqMz3QT0D2gHX41Hcks/view?usp=sharing",
      github: "https://github.com/Vxbd/RastVer/blob/main/RastVer/spiders/New.py",
    },
    status: "Completed"
  },
  {
    title: "Master's Thesis - GAN-based data augmentation for the classification of remote sensing multispectral images",
    description: "Research on the application of Generative Adversarial Networks (GANs) for data augmentation in remote sensing image classification tasks. The work focuses on improving classification performance by generating synthetic multispectral images that maintain the spectral characteristics of the original data.",
    tags: ["Deep Learning", "GANs", "Remote Sensing", "Computer Vision", "Data Augmentation"],
    links: {
      pdf: "https://zenodo.org/records/13837003",
      github: "https://github.com/victorxbd/earthvision-toolkit"
    },
    status: "Completed"
  },
  {
    title: "Master's Project - Comparative Analysis of Control Methods for Wall-Following in TurtleBot3",
    description: "This Master's project explored wall-following behaviors for the TurtleBot3 Burger mobile robot, comparing rule-based, PID, and machine learning (ANN, Decision Tree) control approaches. Evaluated in Webots simulations, the PID controller demonstrated superior robustness and generalizability compared to rule-based and less effective ML methods. The work highlights the complexities of applying ML in robotics and favors PID for its explainability and adaptable precision.",
    tags: ["Robotics", "Mobile Robots", "Wall Following", "PID Control", "Machine Learning", "Robot Control", "TurtleBot3", "Webots"],
    links: {
      pdf: "https://drive.google.com/file/d/1qFvG2OEIxTOGsv9_x8SAXhUnY6fky2E0/view?usp=sharing"
    },
    status: "Completed",
    image: "/images/projects/roboticssummary.png"
  },
  {
    title: "Master's Project - Multi-Agent Book Auction System with JADE Framework",
    description: "This project presents a carefully designed book auction system using the JADE framework. It features an auctioneer agent and reactive/deliberative bidding agents. The architecture includes class diagrams and swimlane diagrams to clarify structure and interactions. Agent behaviors are formally modeled with mathematical functions that define bidding logic based on interest, aggressiveness, and budget. Extensive experimentation evaluates different agent configurations, highlighting the impact of behavior types on auction dynamics.",
    tags: ["Multi-Agent Systems", "JADE Framework", "Agent Design", "Behavioral Modeling", "Auction Simulation", "System Diagrams", "Experimental Evaluation"],
    links: {
      pdf: "https://drive.google.com/file/d/1qFvG2OEIxTOGsv9_x8SAXhUnY6fky2E0/view?usp=sharing"
    },
    image: "/images/projects/massummary.png",
    status: "Completed"
  },
  {
    title: "Compiler Optimization Study",
    description: "Study of different optimization levels used by the GCC compiler, with particular focus on loop unrolling optimization techniques. The project involved implementation, experimentation, and detailed explanation of compiler optimization mechanisms.",
    tags: ["Assembly", "C", "Python", "Compiler Optimization"],
    links: {
      github: "https://github.com/Vxbd/CompiladoresOptimizacion",
      pdf: "https://github.com/Vxbd/CompiladoresOptimizacion/blob/main/BarreiroDominguez_1B%20(1).pdf"      
    },
    status: "Completed"
  },
//  {
//    title: "Ant Colony Optimization (ACO) for Traveling Salesman Problem",
//    description: "Implementation and evaluation of a swarm intelligence-based metaheuristic for an NP-Hard problem. The project focused on programming the metaheuristic for the Traveling Salesman Problem case and tuning the model's hyperparameters.",
//    tags: ["Python", "Metaheuristics", "Swarm Intelligence", "Optimization"],
//    links: {
//      github: "https://github.com/Vxbd/Colonias"
//    },
//    status: "Completed"
//  },
  {
    title: "Multicore Programming and SIMD Extensions",
    description: "Implementation of an algorithm with floating-point vectors using different optimization levels and study of the results. The project focused on parallel programming techniques and SIMD (Single Instruction Multiple Data) extensions.",
    tags: ["C", "OpenMP", "AVX", "Parallel Computing", "SIMD"],
    links: {
      github: "https://github.com/Vxbd/ArqCompP2_PMN-SIMD"
    },
    status: "Completed"
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
            Some of the projects I have carried out prior to my current line of research.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card group">
            <div className="flex flex-col h-full">
              {/* Contenido principal */}
              <div className="flex-grow space-y-4">
                {/* Título */}
                <h2 className="text-2xl font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors duration-200">
                  {project.title}
                </h2>

                {/* Imagen del proyecto si existe */}
                {project.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                )}

                {/* Descripción */}
                <p className="text-neutral-600 text-justify">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {/* Estado como primera etiqueta */}
                  {project.status && (
                    <span className={`tag ${
                      project.status === "Completed" 
                        ? "tag-success" 
                        : "tag-info"
                    }`}>
                      {project.status}
                    </span>
                  )}
                  {/* Resto de etiquetas */}
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="tag tag-neutral"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex justify-end gap-4 mt-6 pt-4 border-t border-neutral-200">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                    aria-label="View on GitHub"
                    title="View on GitHub"
                  >
                    <FiGithub className="h-5 w-5" />
                  </a>
                )}
                {project.links.pdf && (
                  <a
                    href={project.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                    aria-label="View PDF"
                    title="View PDF"
                  >
                    <FiFileText className="h-5 w-5" />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                    aria-label="View Demo"
                    title="View Demo"
                  >
                    <FiExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  )
} 