import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { motion } from 'motion/react';

const Certifications = () => {
  const multiColGrid =
    CERTIFICATIONS.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : '';

  return (
    <div
      id="certifications"
      className="border-b border-neutral-900 pb-16 pt-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl text-zinc-500"
      >
        Certifications
      </motion.h2>

      <div className={`grid gap-8 place-items-center ${multiColGrid}`}>
        {CERTIFICATIONS.map((cert, i) => {
          const Logo = cert.logo;
          const HoverLogo = cert.hoverLogo || cert.logo;

          return (
            <motion.a
              key={cert.id ?? i}
              href={cert.url || '#'}
              target={cert.url ? '_blank' : undefined}
              rel={cert.url ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group w-full max-w-xs rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-neutral-900 to-purple-950/70 p-6 flex flex-col items-center justify-center hover:border-purple-500/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon swap on hover */}
              <div className="relative mb-4 h-16 w-16 flex items-center justify-center">
                <Logo
                  className="absolute h-10 w-10 text-neutral-200 opacity-100 group-hover:opacity-0 transition-opacity duration-200"
                />
                <HoverLogo
                  className="absolute h-10 w-10 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-purple-400 mb-1 text-center">
                {cert.provider}
              </p>

              <h3 className="text-center text-sm sm:text-base font-semibold text-neutral-100">
                {cert.title}
              </h3>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
