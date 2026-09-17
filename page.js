import React, { useState } from 'react';

export default function NextGenAIAgency() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState('video');
  const [videoCount, setVideoCount] = useState(10);

  const samples = [
    {
      id: 1,
      category: 'ecommerce',
      title: 'إعلان متجر عطور فاخرة',
      tool: 'Runway Gen-2 + ElevenLabs',
      desc: 'فيديو إعلاني ديناميكي مدته 15 ثانية يحث على الشراء المباشر مع تعليق صوتي احترافي.',
      previewBg: 'from-amber-500 to-purple-900',
    },
    {
      id: 2,
      category: 'medical',
      title: 'استشارة عيادة تجميل وطب أسنان',
      tool: 'HeyGen AI Avatar',
      desc: 'متحدث افتراضي بالذكاء الاصطناعي يوجه النصائح الطبية ويدعو لحجز الاستشارة.',
      previewBg: 'from-blue-600 to-teal-800',
    },
    {
      id: 3,
      category: 'realestate',
      title: 'جولة سينمائية لعقار فاخر',
      tool: 'Midjourney + Luma Dream Machine',
      desc: 'تحويل صور التصميم الداخلي إلى مشاهد متحركة بأسلوب سينمائي مبهر.',
      previewBg: 'from-emerald-600 to-slate-900',
    },
    {
      id: 4,
      category: 'b2b',
      title: 'فيديو توعوي لشركة استشارات',
      tool: 'ChatGPT + CapCut AI Engine',
      desc: 'مقطع B-Roll استراتيجي يعرض حلول النمو التجاري وزيادة مبيعات B2B.',
      previewBg: 'from-indigo-600 to-slate-900',
    }
  ];

  const calculatePrice = () => {
    let base = selectedService === 'video' ? 100 : selectedService === 'automation' ? 200 : 300;
    return base * videoCount;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans rtl">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          NextGen AI Media
        </div>
        <div className="flex gap-6 items-center font-medium">
          <a href="#portfolio" className="hover:text-indigo-400 transition">معرض النماذج</a>
          <a href="#calculator" className="hover:text-indigo-400 transition">حاسبة الأسعار</a>
          <a href="#domain" className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-full text-white shadow-lg transition">
            حجز استشارة
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 max-w-4xl mx-auto">
        <span className="bg-indigo-950 text-indigo-400 text-sm px-4 py-1.5 rounded-full border border-indigo-800/50 mb-6 inline-block font-semibold">
          وكالة الخدمات الرقمية المدعومة بالذكاء الاصطناعي
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
          صناعة محتوى إعلاني وحلول ذكية <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            تضاعف مبيعات عملك
          </span>
        </h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          نستغل أحدث أدوات الذكاء الاصطناعي لإنشاء إعلانات فيديو قصيرة، أتمتة جلب العملاء، وبناء منصات رقمية تتطور باستمرار.
        </p>
      </section>

      {/* Smart Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">معرض النماذج المجانية (AI Showcase)</h2>
        <p className="text-slate-400 text-center mb-10">نماذج إعلانية تفاعلية صُممت بالكامل بواسطة أدوات الذكاء الاصطناعي</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {samples.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-indigo-500/50 transition duration-300">
              <div className={`h-48 bg-gradient-to-br ${item.previewBg} flex items-center justify-center p-4 text-center font-bold text-lg text-white shadow-inner`}>
                [{item.title}]
              </div>
              <div className="p-5">
                <span className="text-xs bg-slate-800 text-indigo-400 px-2.5 py-1 rounded-md font-mono mb-3 inline-block">
                  {item.tool}
                </span>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{item.desc}</p>
                <button className="w-full bg-slate-800 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg text-sm transition">
                  عرض النموذج الكامل
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Calculator */}
      <section id="calculator" className="bg-slate-900/60 border border-slate-800 my-16 py-12 px-6 rounded-3xl max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">حاسبة الخدمات والتكلفة التقديرية</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">نوع الخدمة:</label>
              <select 
                value={selectedService} 
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 p-3 rounded-xl text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="video">إنتاج فيديوهات قصيرة (Reels/TikTok)</option>
                <option value="automation">أتمتة جلب العملاء والمبيعات (AI Agents)</option>
                <option value="full">بناء منصة متكاملة + إدارة تسويقية</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">عدد المقاطع/المشاريع شهرياً: ({videoCount})</label>
              <input 
                type="range" 
                min="5" 
                max="30" 
                value={videoCount} 
                onChange={(e) => setVideoCount(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>
          </div>
          <div className="bg-slate-950 p-8 rounded-2xl border border-indigo-500/30 text-center">
            <span className="text-slate-400 text-sm block mb-2">التكلفة التقديرية للاشتراك الشهري:</span>
            <span className="text-5xl font-extrabold text-indigo-400">${calculatePrice()}</span>
            <span className="text-xs text-slate-500 block mt-3">تتضمن التعديلات غير المحدودة وإدارة الحملات</span>
          </div>
        </div>
      </section>
    </div>
  );
}
