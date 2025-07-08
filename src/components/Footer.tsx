'use client'

import Link from 'next/link'
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'
import { SiGooglescholar, SiOrcid } from 'react-icons/si'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/victorbarreiro',
    icon: FiGithub,
    color: 'hover:text-[#333]',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: FiLinkedin,
    color: 'hover:text-[#0077B5]',
  },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=YOUR_ID',
    icon: SiGooglescholar,
    color: 'hover:text-[#4285F4]',
  },
  {
    name: 'ORCID',
    href: 'https://orcid.org/0009-0008-2167-2005',
    icon: SiOrcid,
    color: 'hover:text-[#A6CE39]',
  },
  {
    name: 'Email',
    href: 'mailto:victorxesus.barreiro.dominguez@usc.es',
    icon: FiMail,
    color: 'hover:text-primary-600',
  },
]

const institutionalLinks = [
  {
    name: 'CiTIUS Research Center',
    href: 'https://citius.gal/es/team/victor-xesus-barreiro-dominguez/',
    description: 'Centro Singular de Investigación en Tecnoloxías Intelixentes da USC',
  },
  {
    name: 'USC Faculty Directory',
    href: 'https://www.usc.gal/es/departamento/electronica-computacion/directorio/victor-xesus-barreiro-dominguez-677719',
    description: 'University of Santiago de Compostela',
  },
]

const quickLinks = [
  { name: 'About', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Projects', href: '/projects' },
  { name: 'Notes', href: '/notes' },
  //{ name: 'Engineering', href: '/engineering' },
  //{ name: 'CV & Contact', href: '/cv' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-neutral-600 transition-all duration-200 p-2 rounded-lg hover:bg-white hover:shadow-soft ${item.color}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Institutional Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
              Institutional
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {institutionalLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-lg border border-neutral-200 hover:border-primary-200 hover:shadow-soft transition-all duration-200"
                  whileHover={{ y: -2 }}
                >
                  <h4 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600">
                    {item.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-600 text-sm">
              © {new Date().getFullYear()} Víctor Xesús Barreiro Domínguez. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 