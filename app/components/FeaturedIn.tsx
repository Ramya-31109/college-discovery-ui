import React from 'react';

const featuredData = [
  { 
    id: 1, 
    outlet: 'The Indian Express', 
    logo: '/logos/ind.png', // Path to your file in public/logos
    desc: 'Bengaluru-based startup Appx app to guide students to find best career path...', 
    date: '02 DEC 2025', 
    color: 'border-red-500',
    accent: 'bg-red-50'
  },
  { 
    id: 2, 
    outlet: 'Moneycontrol', 
    logo: '/logos/mc.png',
    desc: 'Bengaluru startup launches an app to simplify college applications.', 
    date: '10 DEC 2025', 
    color: 'border-blue-500',
    accent: 'bg-blue-50'
  },
  { 
    id: 3, 
    outlet: 'Deccan Herald', 
    logo: '/logos/dh.png',
    desc: 'Bengaluru techie creates app to simplify college hunt for students.', 
    date: '15 DEC 2025', 
    color: 'border-yellow-500',
    accent: 'bg-yellow-50'
  },
  { 
    id: 4, 
    outlet: 'The Tribune', 
    logo: '/logos/tb.png',
    desc: 'Appx: Simplifying College Admissions For Every Student in India.', 
    date: '20 DEC 2025', 
    color: 'border-green-600',
    accent: 'bg-green-50'
  },
];

export default function FeaturedIn() {
  return (
    <section className="min-h-screen bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">Media Coverage</span>
          <h2 className="text-4xl font-black text-slate-900">
            We're <span className="text-blue-600">featured in</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredData.map((item) => (
            <div 
              key={item.id} 
              className={`group bg-white rounded-[2rem] p-8 border-b-4 ${item.color} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between`}
            >
              <div>
                {/* LOGO CONTAINER */}
                {/* LOGO CONTAINER - Updated for Big/Bold look */}
            <div className="h-30 w-full mb-12 flex items-start justify-start">
              <img 
                src={item.logo} 
                alt={item.outlet} 
                className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
            </div>

                <p className="text-slate-800 text-base font-bold leading-relaxed mb-8">
                  "{item.desc}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  {item.date}
                </span>
                {/* Brand Name Label */}
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${item.accent} ${item.color.replace('border', 'text')}`}>
                  {item.outlet}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}