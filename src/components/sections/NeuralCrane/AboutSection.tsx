import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="relative bg-[#0F0F13] py-[120px] overflow-hidden" id="about">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "linear", repeatType: "mirror" }}
          style={{ willChange: "transform", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            ¿Qué es NeuralCrane?
          </h2>
          <p className="mt-4 text-lg text-[#BBBBBB] max-w-[800px] mx-auto">
            Plataforma inteligente para la gestión de grúas en tiempo real. NeuralCrane automatiza la asignación, seguimiento y control de servicios, optimizando recursos y reduciendo costos.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "linear", repeatType: "mirror" }}
            style={{ willChange: "transform", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          >
            <img
              src="/images/neuralcrane-dashboard.png"
              alt="Dashboard NeuralCrane"
              className="w-full rounded-2xl shadow-lg border border-white/10"
              loading="lazy"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "linear", repeatType: "mirror" }}
            style={{ willChange: "transform", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Automatización Total</h3>
              <p className="text-[#BBBBBB]">
                NeuralCrane elimina tareas manuales, desde la asignación de unidades hasta la generación de reportes y facturación.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Visibilidad Completa</h3>
              <p className="text-[#BBBBBB]">
                Monitorea cada servicio y unidad en tiempo real, con métricas clave y alertas inteligentes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Integración y Escalabilidad</h3>
              <p className="text-[#BBBBBB]">
                Integra fácilmente con sistemas ERP, GPS y plataformas de asistencia. Escala tu operación sin límites.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
