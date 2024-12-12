import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00]/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-lg mb-4"
        >
          Bonjour, je suis Marc-Aurel ADJAHOSSOU ADIFFON
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            DÉVELOPPEUR 
            <br />
            INFORMATIQUE & <span className="text-[#00FF00]">DESIGNER</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto"
        >
          Spécialisé dans le développement web, mobile, desktop et IA, ainsi que dans le graphisme 
          et le montage vidéo, je donne vie à vos idées à travers des solutions innovantes et esthétiques.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <a 
            href="#contact" 
            className="glass-card px-8 py-4 text-[#00FF00] hover:bg-[#00FF00] hover:text-white transition-all duration-300"
          >
            Discutons de votre projet →
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#00FF00]/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#00CC00]/10 rounded-full filter blur-3xl" />
    </section>
  );
};

export default Hero;
