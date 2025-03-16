import { useState, useEffect, useRef } from "react";
import "./Statistics.css";

function Statistics() {
  const stats = [
    { label: "Donations Received", end: 101 },
    { label: "Projects Completed", end: 13 },
    { label: "Families Benefited", end: 56 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAnimations();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startAnimations = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.end;
      const duration = 6000;

      // const increment = Math.ceil(end / (duration / 16));

      let increment = 1;
      if (end > 100) {
        increment = Math.ceil(end / 400);
      } else if (end > 50) {
        increment = Math.ceil(end / 200);
      }

      const startTime = performance.now();

      const animate = currentTime => {
        const elapsed = currentTime - startTime;
        if (elapsed >= duration) {
          setCounts(prev => updateCount(prev, index, end));
          return;
        }

        start += increment;
        if (start > end) start = end;
        setCounts(prev => updateCount(prev, index, start));
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  };

  const updateCount = (prevCounts, index, value) => {
    const newCounts = [...prevCounts];
    newCounts[index] = value;
    return newCounts;
  };

  // return (
  //   <>
  //     <h2 style={{ textAlign: "center" }}>These are my stats</h2>
  //     <div
  //       className={`statistics-container ${isVisible ? "visible" : ""}`}
  //       ref={containerRef}
  //     >
  //       {stats.map((stat, index) => (
  //         <div key={index} className='stat-item'>
  //           <span className='stat-number'>{counts[index]}+</span>
  //           <span className='stat-label'>{stat.label}</span>
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );

  return (
    <div
      className={`statistics-container ${isVisible ? "visible" : ""}`}
      ref={containerRef}
    >
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        Impact we were able to make
      </h1>
      <div className='stats-wrapper'>
        {stats.map((stat, index) => (
          <div key={index} className='stat-item'>
            <span className='stat-number'>{counts[index]}+</span>
            <span className='stat-label'>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
