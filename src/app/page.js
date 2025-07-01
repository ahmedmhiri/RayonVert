import Image from 'next/image';
import '@/app/globals.css';

export default function Home() {
  return (
    <div className="d-flex position-relative" style={{ minHeight: 'calc(100vh - 100px)' }}>
      <div className="bg-success" style={{ flex: 0.4 }}></div>
      <div style={{ flex: 0.8, position: 'relative' }}>
        <Image src="/solor/wide-panale.jpg" alt="Solar panels" layout="fill" objectFit="cover" />
      </div>
      <div className="bg-warning p-4 position-absolute" style={{ top: '50%', left: '30%', transform: 'translate(-50%, -50%)', zIndex: 2, maxWidth: '400px', height :"400px", fontSize: '23px', borderRadius:"10px" }}>
        <h2>Renewable Energy</h2>
        <p>
          Techniques for harvesting solar energy, wind energy, and even the tidal
          movements of the ocean have been around for decades, but the importance of
          improving their
        </p>
        <a href="#" className="fw-bold text-dark">Read More</a>
      </div>
    </div>
  );
}