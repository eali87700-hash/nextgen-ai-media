import React, { useState } from 'react';

export default function AINewsPlatform() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // محاكاة معالجة محرك الذكاء الاصطناعي لروابط يوتيوب
  const handleAIGenerate = (e) => {
    e.preventDefault();
    if (!youtubeUrl) return;
    
    setIsProcessing(true);
    setGeneratedArticle(null);

    setTimeout(() => {
      setIsProcessing(false);
      setGeneratedArticle({
        title: 'تحليل عاجل: التطورات الأخيرة في الساحة بناءً على التغطية المرئية',
        category: 'السياسة والتريندات',
        summary: 'قام محرك الذكاء الاصطناعي باستخلاص النص الصوتي من مقطع YouTube المحدد، وتحليله، ثم صياغة هذا المقال الإخباري المستقل الجاهز للنشر مع تضمين الفيديو.',
        views: '1K+',
        videoId: 'dQw4w9WgXcQ'
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans rtl">
      {/* Top Banner Ad */}
      <div className="bg-slate-900 border-b border-slate-800 text-center py-2 text-xs text-slate-500">
        مساحة إعلانية علوية (AdSense / Mediavine Banner 728x90)
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 sticky top-0 bg-slate-950/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="bg-red-600 text-white font-black px-3 py-1 rounded-lg text-sm animate-pulse">AI LIVE</span>
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-400 to-indigo-500">
              المنصة الإخبارية الذكية | AI News Pulse
            </h1>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-lg text-sm transition">
            ربط قناة YouTube
          </button>
        </div>
      </header>

      {/* AI Youtube Processing Engine (المحرك الذكي) */}
      <section className="bg-slate-900/80 border-b border-slate-800 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            محرك الذكاء الاصطناعي لتحويل فيديوهات YouTube إلى مقالات إخبارية
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            أدخل رابط فيديو من يوتيوب (سياسة، رياضة، أنمي، أفلام) وسيقوم المحرك بتلخيصه وصياغة خبر صحفي متكامل تلقائياً.
          </p>

          <form onSubmit={handleAIGenerate} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input 
              type="text" 
              placeholder="ضع رابط فيديو YouTube هنا..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-xl flex-grow max-w-xl focus:outline-none focus:border-indigo-500"
            />
            <button 
              type="submit"
              disabled={isProcessing}
              className="bg-gradient-to-r from-red-600 to-indigo-600 hover:from-red-500 hover:to-indigo-500 text-white font-bold px-8 py-3 rounded-xl transition shadow-lg disabled:opacity-50"
            >
              {isProcessing ? 'جاري التحليل بالذكاء الاصطناعي...' : 'مولّد الأخبار الذكي'}
            </button>
          </form>

          {/* Result Box */}
          {generatedArticle && (
            <div className="mt-8 bg-slate-950 border border-indigo-500/40 p-6 rounded-2xl text-right animate-fade-in">
              <span className="bg-indigo-900/50 text-indigo-400 text-xs px-3 py-1 rounded-full font-mono">
                {generatedArticle.category}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2">{generatedArticle.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{generatedArticle.summary}</p>
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-800">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${generatedArticle.videoId}`}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main News Grid & Sidebar Monetization */}
      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold border-r-4 border-indigo-500 pr-3">أحدث الأخبار المولّدة تلقائياً</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
              <div className="h-36 bg-gradient-to-br from-purple-900 to-slate-900 rounded-xl mb-3 flex items-center justify-center font-bold text-sm">
                [أنمي سينما]
              </div>
              <h4 className="font-bold text-base mb-2">تغطية ذكية: تحليل العرض التشويقي الأول لأضخم أفلام الأنمي</h4>
              <p className="text-xs text-slate-400">مُلخّص تلقائي من المقطع الرسمي على YouTube بواسطة AI.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
              <div className="h-36 bg-gradient-to-br from-emerald-900 to-slate-900 rounded-xl mb-3 flex items-center justify-center font-bold text-sm">
                [رياضة عالمية]
              </div>
              <h4 className="font-bold text-base mb-2">ملخص المؤتمر الصحفي للمدرب عقب انتهاء مباراة القمة</h4>
              <p className="text-xs text-slate-400">تفريغ تلقائي للتعليق الصوتي وتحويله لنص صحفي.</p>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center text-slate-500 h-60 flex items-center justify-center">
            مساحة إعلانات جانبية (Google AdSense 300x250)
          </div>
        </aside>
      </main>
    </div>
  );
}
