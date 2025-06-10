import Link from 'next/link'
import { FiGithub, FiMail } from 'react-icons/fi'
import { SiGooglescholar, SiOrcid } from 'react-icons/si'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/victorbarreiro',
    icon: FiGithub,
  },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=YOUR_ID',
    icon: SiGooglescholar,
  },
  {
    name: 'ORCID',
    href: 'https://orcid.org/0009-0008-2167-2005',
    icon: SiOrcid,
  },
  {
    name: 'Email',
    href: 'mailto:victorxesus.barreiro.dominguez@usc.es',
    icon: FiMail,
  },
]

const institutionalLinks = [
  {
    name: 'CiTIUS Research Center',
    href: 'https://citius.gal/es/team/victor-xesus-barreiro-dominguez/',
  },
  {
    name: 'USC Faculty Directory',
    href: 'https://www.usc.gal/es/departamento/electronica-computacion/directorio/victor-xesus-barreiro-dominguez-677719',
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Institutional Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Institutional
            </h3>
            <ul className="space-y-2">
              {institutionalLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-center text-neutral-500 text-sm">
            © {new Date().getFullYear()} Víctor Xesús Barreiro Domínguez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 