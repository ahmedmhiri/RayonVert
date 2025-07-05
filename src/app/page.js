import Image from 'next/image';
import '@/app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="d-flex position-relative" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <div className="bg-success" style={{ flex: 0.4 }}></div>
        <div style={{ flex: 0.8, position: 'relative' }}>
          <Image src="/solor/wide-panale.jpg" alt="Solar panels" layout="fill" objectFit="cover" />
        </div>
        <div className="bg-warning p-4 position-absolute" style={{
          top: '50%', left: '30%', transform: 'translate(-50%, -50%)',
          zIndex: 2, maxWidth: '400px', height: "400px", fontSize: '23px', borderRadius: "10px"
        }}>
          <h2>Renewable Energy</h2>
          <p>
            Techniques for harvesting solar energy, wind energy, and even the tidal
            movements of the ocean have been around for decades, but the importance of
            improving them
          </p>
          <a href="#" className="fw-bold text-dark">Read More</a>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">
          <span className="fw-bold">The </span>
          <span style={{ color: 'orange', fontWeight: 'bold' }}>Services </span>
          <span className="fw-bold">We Provide</span>
        </h2>
        <p className="text-center mb-5">
          We provide renewable energy solutions tailored to meet your needs.<br />
          Our capacities range from <strong>3kW to 1 Megawatt systems</strong>.
        </p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-3 bg-success text-white h-100 rounded">
              <h5>Solar Hybrid Solutions (Residential)</h5>
              <p>5kW to 100kW</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-success text-white h-100 rounded">
              <h5>Lithium Batteries, Storage Hybrid Power Packs</h5>
              <p>Capacity varies based on solution</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-success text-white h-100 rounded">
              <h5>Energy Management Solutions</h5>
              <p>Custom solutions</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-success text-white h-100 rounded">
              <h5>Commercial & Industrial Solar Hybrid Systems</h5>
              <p>50kW to 1 Megawatt</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-success text-white h-100 rounded">
              <h5>Mini Grid Solutions</h5>
              <p>100kW to 1 Megawatt</p>
            </div>
          </div>
        </div>
      </div>

      {/* Positive Impact Section */}
      <div className="container py-5">
        <h2 className="text-center mb-5">
          <span className="fw-bold">A </span>
          <span style={{ color: 'orange', fontWeight: 'bold' }}>Positive </span>
          <span style={{ color: 'gold', fontWeight: 'bold' }}>Impact </span>
          <span className="fw-bold">For Your Home</span>
        </h2>

        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div className="bg-primary p-3 mb-3 rounded">
                <Image src="/solor/coin_.png" alt="Cost Effective" width={40} height={40} />
              </div>
              <h5>Cost-Effective Solutions</h5>
              <p className="text-muted">
                Our renewable energy solutions are not only environmentally friendly, but also cost-effective.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div className="bg-primary p-3 mb-3 rounded">
                <Image src="/solor/cpu.png" alt="Technology" width={40} height={40} />
              </div>
              <h5>Advanced Technology</h5>
              <p className="text-muted">
                We utilize the latest technology in renewable energy to provide the most efficient and effective solutions.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div className="bg-primary p-3 mb-3 rounded">
                <Image src="/icons/custom.png" alt="Customizable" width={40} height={40} />
              </div>
              <h5>Customizable Solutions</h5>
              <p className="text-muted">
                Every customer has unique energy needs and requirements. That's why we offer customizable renewable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
