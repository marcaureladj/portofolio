import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Identité visuelle",
      description: "Je crée des identités visuelles mémorables qui connectent avec votre audience à travers un design unique.",
      icon: "A"
    },
    {
      title: "Design Graphique",
      description: "Je fournis un design graphique captivant qui attire l'attention et communique efficacement.",
      icon: "T"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quels <span className="text-[#00FF00]">Services</span> je propose ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover-card"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-[#00FF00]/10 text-[#00FF00]">
                <span className="text-2xl font-bold">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
