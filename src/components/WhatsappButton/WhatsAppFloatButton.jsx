export default function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/523322334834"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <img src="/assets/whatsapp.webp" alt="WhatsApp Ares Code" className="w-8 h-8 object-contain drop-shadow-lg" />
    </a>
  );
}
