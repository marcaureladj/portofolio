import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement",
      skills: [
        { name: "Frontend", items: "HTML5, CSS3, JavaScript, React" },
        { name: "Backend", items: "PHP, MySQL, Node.js, Django" },
        { name: "Mobile", items: "React Native" },
        { name: "Intelligence Artificielle", items: "Python, Machine Learning, Deep Learning" }
      ]
    },
    {
      title: "Graphisme",
      skills: [
        { name: "Logiciels", items: "Adobe Photoshop, Illustrator, InDesign" },
        { name: "Création", items: "Identité visuelle, affiches publicitaires, design UI/UX" }
      ]
    },
    {
      title: "Montage Vidéo",
      skills: [
        { name: "Logiciels", items: "Adobe Premiere Pro, After Effects" },
        { name: "Compétences", items: "Création de vidéos promotionnelles, storytelling visuel" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-[#00FF00]">Compétences</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Grâce à ma polyvalence, je combine compétences techniques et créativité pour offrir des solutions complètes adaptées aux besoins des projets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover-card"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#00FF00]">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <div className="glass-card bg-[#00FF00]/5 p-3 rounded-lg">
                      <p className="text-gray-400 text-sm">{skill.items}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
