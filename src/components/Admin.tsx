import React, { useEffect, useState } from "react";
import { ArrowLeft, Trash2, Calendar, Phone, Mail, User } from "lucide-react";

interface Registration {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await fetch("/api/registrations");
      const data = await response.json();
      setRegistrations(data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <a href="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </a>
            <h1 className="text-3xl font-black uppercase tracking-tighter">상담 신청 현황</h1>
          </div>
          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-4 py-2 rounded-full">
            총 {registrations.length}건
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : registrations.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-gray-500 uppercase tracking-widest font-bold">신청 내역이 없습니다.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {registrations.map((reg) => (
              <div key={reg.id} className="bg-[#1a1a1a] border border-white/5 p-8 rounded-2xl hover:border-amber-500/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black">
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{reg.name}</h3>
                      <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(reg.created_at).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-sm">
                      <Phone size={14} className="text-amber-500" /> {reg.phone}
                    </div>
                    {reg.email && (
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-sm">
                        <Mail size={14} className="text-amber-500" /> {reg.email}
                      </div>
                    )}
                  </div>
                </div>
                {reg.message && (
                  <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{reg.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
