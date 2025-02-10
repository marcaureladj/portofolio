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
           <iframe src="https://calendly.com/marcaureladj/discutons-de-votre-projet" width="100%" height="600" frameborder="0"></iframe>

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
