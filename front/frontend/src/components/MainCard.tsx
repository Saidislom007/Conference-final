import { Button } from "../../@/components/ui/button";
import { AspectRatioDemo } from "./ImageDemo";

export default function MainCard() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
      <div className="bg-white border border-gray-100/80 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Chap taraf: Matnlar va Tugmalar */}
        <div className="flex-1 space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-orange-500 via-amber-600 to-indigo-600 bg-clip-text text-transparent">
            Konferensiya
          </h1>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Ilmiy-uslubiy konferensiyalar uchun maqola topshirish, sho'ba tanlash, status kuzatish va admin tekshiruv jarayonlarini bitta platformada boshqaring.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition-all"
            >
              Konferensiyalarni ko'rish
            </Button>

            <Button 
              variant="ghost" 
              className="bg-blue-50/80 hover:bg-blue-100 text-blue-600 font-semibold px-6 py-2.5 rounded-xl border-none transition-all"
            >
              Ro'yxatdan o'tish
            </Button>
          </div>
        </div>

        {/* O'ng taraf: Rasm yoki Illyustratsiya konteyneri */}
        <div className="w-full md:w-[45%] bg-linear-to-br from-blue-50/50 to-indigo-50/30 p-2 sm:p-4 rounded-2xl border border-blue-100/50">
          <div className="overflow-hidden rounded-xl">
            <AspectRatioDemo />
          </div>
        </div>

      </div>
    </div>
  );
}