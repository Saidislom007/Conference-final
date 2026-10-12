import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [selectedLang, setSelectedLang] = useState("O'zbek");
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (

    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Chap taraf: Logo va Sayt nomi */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="http://172.16.223.209:6010/static/main/images/mvd-academy-logo.png"
            alt="IIV akademiyasi logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-slate-900 font-extrabold text-lg sm:text-xl tracking-tight">
            IIV akademiyasi
          </span>
        </a>

        {/* O'ng taraf: Til va Menyular */}
        <div className="flex items-center gap-3 sm:gap-6">

          {/* Til tanlash (Language Switcher Dropdown) */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-2xl px-3 py-1.5 shadow-sm hover:border-gray-300 transition-all focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                UZ
              </div>
              <div className="flex flex-col text-left leading-none pr-1">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  LANGUAGE
                </span>
                <span className="text-xs font-semibold text-slate-800 mt-0.5">
                  {selectedLang}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-500 ml-1" />
            </button>

            {/* Dropdown Menyu */}
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50">
                <button
                  onClick={() => { setSelectedLang("O'zbek"); setIsLangOpen(false); }}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  O'zbek
                </button>
                <button
                  onClick={() => { setSelectedLang("Русский"); setIsLangOpen(false); }}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  Русский
                </button>
                <button
                  onClick={() => { setSelectedLang("English"); setIsLangOpen(false); }}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* Bosh sahifa (Aktiv havola) */}
          <a
            href="/"
            className="bg-blue-50/80 hover:bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-2xl text-sm transition-all border border-blue-100/50"
          >
            Bosh sahifa
          </a>

          {/* Konferensiyalar */}
          <a
            href="/conferences"
            className="text-slate-800 font-medium text-sm hover:text-blue-600 transition-colors px-2 py-2"
          >
            Konferensiyalar
          </a>
          <a
            href="/register"
            className="text-slate-800 font-medium text-sm hover:text-blue-600 transition-colors px-2 py-2"
          >
            Ro'yxatdan o'tish
          </a>
          <a
            href="/login"
            className="text-slate-800 font-medium text-sm hover:text-blue-600 transition-colors px-2 py-2"
          >
            Kirish
          </a>
        </div>
      </div>
    </header>
  );
}