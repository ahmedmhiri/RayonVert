import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <div className="bg-primary text-white py-1 px-3 d-flex justify-content-end align-items-center" style={{ fontSize: '14px' }}>
        <span className="me-3">info@mhiri.com</span>
        <span className="me-3">+1 800 125 1234</span>
        <a href="#contact" className="text-white text-decoration-underline">Contact Us</a>
      </div>
      <div className="d-flex justify-content-between align-items-center p-3 bg-white">
        <div className="d-flex align-items-center">
          <Image src="/logo/logo.jpg" alt="Green Factory Logo" width={50} height={50} />
          <h4 className="ms-2 mb-0">Green Factory</h4>
        </div>
        <nav>
          <a href="#" className="me-3 fw-bold text-dark">Home</a>
          <a href="#" className="me-3 fw-bold text-dark">Services</a>
          <a href="#" className="fw-bold text-dark">About Our Company</a>
        </nav>
      </div>
    </div>
  );
}
