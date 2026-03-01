import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Hash, 
  Camera, 
  Mail, 
  Menu, 
  Phone, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Zap,
  Gauge,
  Leaf,
  Settings,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Car,
  Bus,
  Navigation
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 bg-amber-500 flex flex-col items-center justify-center text-black font-bold leading-none p-1">
            <span className="text-[10px] tracking-widest mb-1">오색</span>
            <span className="text-sm tracking-tighter">모터스</span>
          </div>
          <button className="hidden lg:flex items-center gap-2 text-white hover:text-amber-500 transition-colors">
            <Menu size={24} />
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#company" className="text-xs font-bold tracking-[0.2em] text-white hover:text-amber-500 uppercase transition-colors">회사소개</a>
          <a href="#product" className="text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-amber-500 uppercase transition-colors">제품소개</a>
          <a href="#technology" className="text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-amber-500 uppercase transition-colors">기술소개</a>
          <a href="#cases" className="text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-amber-500 uppercase transition-colors">장착사례</a>
          <a href="#support" className="text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-amber-500 uppercase transition-colors">고객지원</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:0543345826" className="bg-amber-500 text-black text-xs font-bold tracking-wider px-6 py-3 uppercase hover:bg-amber-400 transition-all flex items-center gap-2">
            <Phone size={14} />
            054 334 5826
          </a>
          <button className="md:hidden p-2 text-white flex items-center justify-center">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8 z-40">
      <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors flex items-center justify-center"><Users size={18} /></a>
      <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors flex items-center justify-center"><Hash size={18} /></a>
      <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors flex items-center justify-center"><Camera size={18} /></a>
      <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors flex items-center justify-center"><Mail size={18} /></a>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:h-screen lg:min-h-[800px] flex items-center overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent opacity-50"></div>

      <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-12"
        >
          <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-4">무동력터보 기술로 연비와 성능을 동시에</span>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white uppercase leading-[1.1] tracking-tighter mb-8 break-keep">
            연비 절감과<br />
            출력 향상을 동시에
          </h1>
          
          <div className="border-l-2 border-amber-500 pl-6 mb-10">
            <p className="text-white font-bold uppercase tracking-wider text-sm mb-2">무동력터보 기술로 차량 효율을 개선합니다</p>
            <p className="text-amber-500 font-medium text-sm">연료 절감 · 출력 향상 · 가속 응답 개선 · 매연 감소</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="#support" className="bg-amber-500 text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
              지금 상담하세요
            </a>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
              연료비 절감의 시작은 <span className="text-white">오색모터스</span>입니다
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[600px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1617469767053-d3b508a0d825?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Luxury Car Performance" 
            className="w-full h-full object-cover object-center grayscale-[10%] contrast-110 shadow-2xl shadow-black/50 rounded-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent"></div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};

const KeyEffects = () => {
  const effects = [
    { title: "연비 개선", icon: <Gauge size={24} /> },
    { title: "출력 향상", icon: <Zap size={24} /> },
    { title: "가속 페달 응답성 개선", icon: <Navigation size={24} /> },
    { title: "매연 감소", icon: <Leaf size={24} /> },
    { title: "엔진 부하 완화", icon: <Settings size={24} /> },
    { title: "장거리 운행 효율 증가", icon: <ArrowRight size={24} /> },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {effects.map((effect, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white/5 border border-white/5 flex flex-col items-center text-center group hover:border-amber-500/30 transition-all"
            >
              <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                {effect.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 break-keep">
                {effect.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyIntro = () => {
  return (
    <section id="company" className="py-32 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Company Workshop" 
              className="w-full h-[500px] object-cover grayscale brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-amber-500 p-12 hidden lg:block">
              <h3 className="text-4xl font-black text-black uppercase leading-none">SINCE<br />2024</h3>
            </div>
          </motion.div>

          <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Company Introduction</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase mb-8 leading-tight">
              엔진 개조 없이<br />
              경제성과 성능을 동시에
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 break-keep">
              오색모터스는 무동력터보 기반 차량 성능 개선 튜닝 전문 브랜드입니다. 
              엔진 구조 변경 없이 공기 흐름을 최적화하여 연료 연소 효율을 높이고 
              연비 절감과 출력 향상을 동시에 실현합니다.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 break-keep">
              경제성과 실용성을 동시에 추구하는 실용형 차량 성능 개선 솔루션을 제공하며, 
              지속 가능한 주행 환경을 위한 친환경 기술을 선도합니다.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-amber-500"></div>
              <span className="text-xs font-bold text-white uppercase tracking-widest">오색모터스 그룹</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductIntro = () => {
  return (
    <section id="product" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Product Introduction</span>
          <h2 className="text-4xl font-black text-white uppercase tracking-tight">무동력터보 시스템</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-[#111111] p-12 lg:p-20 border border-white/5 relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">혁신적인 공기 흐름 최적화</h3>
                <p className="text-gray-400 leading-relaxed mb-8 break-keep">
                  무동력터보 시스템은 외부 동력 없이 공기 흐름을 최적화하여 연료 연소 효율을 높이는 장치입니다. 
                  엔진으로 유입되는 공기에 강력한 와류를 형성하여 연료와의 혼합비를 극대화합니다.
                </p>
                <ul className="space-y-4">
                  {[
                    "연비 절감 효과",
                    "출력 향상 및 토크 증대",
                    "가속 반응 속도 개선",
                    "매연 및 유해 가스 감소"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none">
                <img 
                  src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>

          <div className="bg-amber-500 p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-black text-black uppercase mb-6 leading-tight">
              실용적인<br />차량 튜닝<br />솔루션
            </h3>
            <p className="text-black/70 text-sm font-medium leading-relaxed mb-8 break-keep">
              복잡한 개조 없이 장착만으로 즉각적인 성능 변화를 경험하세요. 
              오색모터스의 기술은 당신의 드라이빙을 더 경제적이고 강력하게 만듭니다.
            </p>
            <a href="#support" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-2 hover:gap-4 transition-all">
              상담 예약하기 <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnologyIntro = () => {
  const techs = [
    { 
      title: "연소 효율 개선", 
      desc: "공기 와류 형성을 통한 연료의 완전 연소 유도",
      icon: <Settings size={32} />
    },
    { 
      title: "엔진 반응성 향상", 
      desc: "저속 및 중속 영역에서의 가속 응답성 즉각 개선",
      icon: <Zap size={32} />
    },
    { 
      title: "출력 보조 효과", 
      desc: "엔진 부하를 줄여주어 가용 출력을 극대화",
      icon: <Gauge size={32} />
    },
    { 
      title: "배기가스 감소", 
      desc: "불완전 연소를 방지하여 탄소 배출량 획기적 절감",
      icon: <Leaf size={32} />
    },
  ];

  return (
    <section id="technology" className="py-32 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Technology</span>
            <h2 className="text-4xl font-black text-white uppercase mb-8 leading-tight">
              공기 흐름 개선을 통한<br />연소 효율 향상 기술
            </h2>
            <div className="space-y-6">
              {[
                "외부 동력 없이 작동",
                "차량 구조 변경 없이 장착 가능",
                "유지비 부담 없음",
                "친환경 연소 효율 개선"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm text-gray-400 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {techs.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all"
              >
                <div className="text-amber-500 mb-6">{tech.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4">{tech.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed break-keep">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ApplicableVehicles = () => {
  const vehicles = [
    { name: "승용차", icon: <Car size={40} /> },
    { name: "SUV", icon: <Navigation size={40} /> },
    { name: "화물차", icon: <Truck size={40} /> },
    { name: "영업용 차량", icon: <Bus size={40} /> },
    { name: "장거리 운행 차량", icon: <Navigation size={40} /> },
  ];

  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Applicable Vehicles</span>
          <h2 className="text-4xl font-black text-white uppercase tracking-tight">적용 가능 차량</h2>
          <p className="text-gray-500 mt-4 text-sm font-medium uppercase tracking-widest">거의 모든 내연기관 차량에 장착 가능합니다</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {vehicles.map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center gap-6 p-10 bg-[#111111] border border-white/5 group hover:border-amber-500/30 transition-all"
            >
              <div className="text-gray-600 group-hover:text-amber-500 transition-colors">
                {v.icon}
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">{v.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstallationGallery = () => {
  const installations = [
    { id: 1, title: "SUV 장착 사례", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "세단 장착 사례", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "트럭 장착 사례", image: "https://images.unsplash.com/photo-1586191582151-f73872dfd183?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "스포츠카 장착 사례", image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section id="cases" className="py-32 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Installation Cases</span>
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">다양한 차종에 적용 가능</h2>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">장착 후 기대 효과</p>
            <div className="flex gap-4 text-[10px] font-bold text-amber-500 uppercase tracking-widest">
              <span>가속 반응 개선</span>
              <span>엔진 부담 감소</span>
              <span>연료비 절감</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {installations.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-8 left-8">
                <span className="text-white text-xs font-bold tracking-widest uppercase">{item.title}</span>
                <div className="w-0 group-hover:w-full h-[1px] bg-amber-500 mt-2 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="support" className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="h-20 w-20 bg-white/5 border border-white/10 flex flex-col items-center justify-center text-white font-bold leading-none p-1 mb-10">
              <span className="text-xs tracking-widest text-gray-400 mb-1">오색</span>
              <span className="text-lg tracking-tighter">모터스</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-tight">지금 상담하세요</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-12 max-w-md break-keep">
              장착 상담, 차량별 맞춤 진단, 성능 개선 안내 및 유지 관리 상담까지 
              오색모터스의 전문가가 친절하게 안내해 드립니다.
            </p>

            <div className="grid grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">오시는 길</h4>
                <p className="text-sm text-white font-medium">경상북도 영천시</p>
                <p className="text-sm text-gray-400 mt-1">북안면 운북로 2044</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">문의처</h4>
                <p className="text-sm text-white font-medium">054 334 5826</p>
                <p className="text-sm text-gray-400 mt-1">woo1004@naver.com</p>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center justify-center"><Users size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center justify-center"><Hash size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors flex items-center justify-center"><Camera size={18} /></a>
            </div>
          </div>

          <div className="bg-[#111111] p-10 lg:p-16 border border-white/5">
            <h4 className="text-lg font-bold text-white mb-8 uppercase tracking-tight">상담 신청</h4>
            <ContactForm />
          </div>
        </div>

        <div className="border-t border-white/5 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© 2024 오색모터스. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/admin" className="text-xs text-gray-700 hover:text-amber-500 transition-colors">관리자</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">개인정보처리방침</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <CheckCircle2 size={48} className="text-amber-500 mx-auto mb-4" />
        <h5 className="text-xl font-bold text-white mb-2">신청이 완료되었습니다!</h5>
        <p className="text-gray-400 text-sm">확인 후 빠르게 연락드리겠습니다.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 text-amber-500 text-xs font-bold uppercase tracking-widest border-b border-amber-500 pb-1"
        >
          추가 문의하기
        </button>
      </div>
    );
  }

  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div className="col-span-1">
        <label className="sr-only">이름</label>
        <input 
          required
          type="text" 
          placeholder="이름" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-[#0a0a0a] border border-white/10 text-white text-xs px-4 py-4 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-gray-600" 
        />
      </div>
      <div className="col-span-1">
        <label className="sr-only">이메일</label>
        <input 
          type="email" 
          placeholder="이메일" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-[#0a0a0a] border border-white/10 text-white text-xs px-4 py-4 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-gray-600" 
        />
      </div>
      <div className="col-span-2">
        <label className="sr-only">연락처</label>
        <input 
          required
          type="tel" 
          placeholder="연락처" 
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-[#0a0a0a] border border-white/10 text-white text-xs px-4 py-4 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-gray-600" 
        />
      </div>
      <div className="col-span-2">
        <label className="sr-only">문의내용</label>
        <textarea 
          rows={4} 
          placeholder="문의내용을 입력해주세요." 
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#0a0a0a] border border-white/10 text-white text-xs px-4 py-4 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-gray-600"
        ></textarea>
      </div>
      <div className="col-span-2">
        <button 
          disabled={status === "loading"}
          type="submit" 
          className="w-full bg-amber-500 text-black font-bold uppercase text-xs tracking-widest py-5 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10 disabled:opacity-50"
        >
          {status === "loading" ? "전송 중..." : "메시지 전송"}
        </button>
        {status === "error" && (
          <p className="text-red-500 text-[10px] mt-2 text-center uppercase font-bold tracking-widest">오류가 발생했습니다. 다시 시도해 주세요.</p>
        )}
      </div>
    </form>
  );
};

export { Navbar, SocialSidebar, Hero, KeyEffects, CompanyIntro, ProductIntro, TechnologyIntro, ApplicableVehicles, InstallationGallery, Footer };
