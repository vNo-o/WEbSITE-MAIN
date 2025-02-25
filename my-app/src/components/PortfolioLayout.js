import React, { useEffect, useState } from "react";

export default function PortfolioLayout() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const floatingTexts = [
    "/formalized education in hindustani and european classical traditions",
    "/cultivated rejection of establishments and prescriptions",
    "/fascinated with total saturation",
    "/active audiences, interactive spaces",
    "/collaboration-oriented"
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative overflow-hidden">
      {/* Background Floating Text */}
      <div className="absolute inset-0 text-gray-300 text-4xl font-bold opacity-10 pointer-events-none select-none">
        {floatingTexts.map((text, i) => (
          <p
            key={i}
            className="absolute whitespace-nowrap"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(${Math.random() * 50 - 25}px, ${scrollY}px) rotate(-5deg)`,
              animation: `float ${10 + i * 2}s infinite ease-in-out`
            }}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Asymmetrical Content Grid */}
      <div className="grid grid-cols-73 grid-rows-40 gap-4 h-screen max-w-7xl mx-auto">
        {/* Header */}
        <div className="col-start-50 col-end-73 row-start-2 row-end-5 bg-white p-6 shadow-xl rounded-2xl text-right">
          <h1 className="text-5xl font-black">V Noel</h1>
          <p className="text-xl text-gray-600 mt-2">Multidisciplinary Creator</p>
          <p className="text-sm text-gray-500 mt-4">1994<br/>JameshedPur, IN → Bengaluru, IN ↔ Maastricht, NL</p>
        </div>

        {/* About Sections */}
        <div className="col-start-5 col-end-35 row-start-8 row-end-10 bg-white p-6 shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-700">V Noel is a multidisciplinary creator.</p>
        </div>

        <div className="col-start-40 col-end-65 row-start-6 row-end-12 bg-white shadow-xl rounded-2xl overflow-hidden">
          <iframe 
            src="https://www.youtube.com/embed/wbQ0z_7YfFc" 
            className="w-full h-full"
            allowFullScreen
          />
        </div>

        {/* Dynamic Content Blocks */}
        <div className="col-start-10 col-end-30 row-start-18 row-end-24 bg-white p-6 shadow-xl rounded-2xl">
          <p className="text-gray-700">His post-colonial sound identity explores universal expressions of urban phenomenon.</p>
        </div>

        {[
          "aTSHp2jDX40", 
          "wIxh1KUAoGM", 
          "aZ8ExAYxsjg", 
          "LqsRwxWiBYI", 
          "ciDFIlWx974?start=1083"
        ].map((video, i) => (
          <div 
            key={i}
            className={`col-start-${(i * 13) % 73} col-end-${((i * 13) + 25) % 73} row-start-${(i * 8) % 40} row-end-${((i * 8) + 6) % 40} bg-white shadow-xl rounded-2xl overflow-hidden`}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video}`}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        ))}

        {/* Contact Section */}
        <div className="col-start-60 col-end-73 row-start-15 row-end-18 bg-white p-6 shadow-xl rounded-2xl text-right">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">
            For collaborations or inquiries:<br/>
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}