import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Remplacez cette URL par l'URL de votre script PHP sur votre serveur cPanel
      const response = await fetch('http://marcaureladj.echolab-ai.com/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { label: "Lieu", value: "Lokossa, Mono, Bénin" },
    { label: "Email", value: "marcaureladj@gmail.com" },
    { label: "Téléphone", value: "+229 95 41 34 47" }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez <span className="text-[#00FF00]">Moi</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Vous avez un projet ou une idée en tête ? N'hésitez pas à me contacter pour en discuter.
            Je serais ravi de collaborer avec vous pour concrétiser vos idées.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass-card w-full px-4 py-3 bg-[#00FF00]/5 border border-[#00FF00]/20 focus:border-[#00FF00] outline-none transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-card w-full px-4 py-3 bg-[#00FF00]/5 border border-[#00FF00]/20 focus:border-[#00FF00] outline-none transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="glass-card w-full px-4 py-3 bg-[#00FF00]/5 border border-[#00FF00]/20 focus:border-[#00FF00] outline-none transition-colors duration-300"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 text-white font-medium rounded-lg 
                  ${isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-[#00CC00] hover:bg-[#00FF00]'} 
                  transition-colors duration-300`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 hover-card"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{info.label}</span>
                    <span className="text-white">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Réseaux Sociaux</h3>
              <div className="flex space-x-4">
                <a
                  href="#linkedin"
                  className="text-[#00FF00] hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#github"
                  className="text-[#00FF00] hover:text-white transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href="#facebook"
                  className="text-[#00FF00] hover:text-white transition-colors duration-300"
                >
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
