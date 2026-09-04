import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MapPin } from 'lucide-react';

const notifications = [
  { name: 'Carlos M.', location: 'Bogotá, Colombia', product: 'Acceso Completo' },
  { name: 'Ana G.', location: 'Ciudad de México, México', product: 'Acceso Completo' },
  { name: 'Felipe R.', location: 'Santiago, Chile', product: 'Plan Básico' },
  { name: 'Lucía T.', location: 'Madrid, España', product: 'Acceso Completo' },
  { name: 'Jorge P.', location: 'Buenos Aires, Argentina', product: 'Acceso Completo' },
  { name: 'Valentina S.', location: 'Lima, Perú', product: 'Plan Básico' },
  { name: 'Mateo L.', location: 'Quito, Ecuador', product: 'Acceso Completo' },
  { name: 'Camila D.', location: 'Monterrey, México', product: 'Acceso Completo' },
  { name: 'Sebastián V.', location: 'Medellín, Colombia', product: 'Plan Básico' },
  { name: 'Martina F.', location: 'Montevideo, Uruguay', product: 'Acceso Completo' }
];

export default function PurchaseNotification() {
  const [current, setCurrent] = useState(notifications[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Retraso inicial antes de la primera notificación
    const initialDelay = setTimeout(() => {
      triggerNotification();
      // Luego configurar el intervalo cada 10 segundos
      const interval = setInterval(() => {
        triggerNotification();
      }, 10000); // 10 segundos
      
      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, []);

  const triggerNotification = () => {
    const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
    setCurrent(randomNotif);
    setIsVisible(true);

    // Ocultar después de 4.5 segundos
    setTimeout(() => {
      setIsVisible(false);
    }, 4500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100/50 p-4 max-w-[340px] w-full flex items-start gap-4">
            <div className="bg-green-100 p-2.5 rounded-full mt-0.5 shrink-0 shadow-inner">
              <CheckCircle2 className="text-green-600 w-6 h-6" strokeWidth={2.5} />
            </div>
            <div className="flex-1 pt-0.5">
              <p className="text-[13px] text-gray-600 font-medium leading-tight">
                <span className="font-black text-gray-900">{current.name}</span> acaba de adquirir
              </p>
              <p className="text-base font-black text-[#d9441a] mt-0.5 mb-1 leading-snug tracking-tight">
                {current.product}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                <MapPin size={12} strokeWidth={2.5} />
                {current.location}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
