import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'motion/react'

const Projects = () => {
  const multiColGrid =
    PROJECTS.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''

  return (
    <div id="projects" className="border-b border-neutral-900 pb-16">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-zinc-500"
      >
        Projects
      </motion.h2>

      {/* Grid: centers single card, uses 2/3 cols when there are more */}
      <div className={`grid gap-8 place-items-center ${multiColGrid}`}>
        {PROJECTS.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="w-full max-w-md bg-neutral-900/40 border border-neutral-800 rounded-2xl p-4 flex flex-col hover:bg-neutral-900/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-52 object-cover rounded-2xl"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 mb-2 w-full rounded-full bg-neutral-900/60 px-4 py-2 text-center text-base font-semibold text-neutral-100">
              {proj.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-neutral-400 mb-3">
              {proj.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-purple-400 border border-purple-700/40"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-auto flex gap-3">
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center rounded-full bg-purple-600 px-3 py-2 text-xs sm:text-sm font-medium text-white hover:bg-purple-500 transition-colors"
                >
                  Live Project
                </a>
              )}

              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center rounded-full border border-purple-500 px-3 py-2 text-xs sm:text-sm font-medium text-purple-300 hover:bg-purple-500/10 transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
