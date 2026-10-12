import { Button } from '../../@/components/ui/button';
import Navbar from '../components/Navbar'
import { Badge } from '../../@/components/ui/badge';
import { CardImage } from '../components/CardImage'
export default function ShobaDetailPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-white ">
                <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
                    <div className="bg-[#074380] border border-gray-100/80 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                        {/* Chap taraf: Matnlar va Tugmalar */}
                        <div className="flex-1 space-y-4 max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight ">
                                Kiberjinoyatchilikka qarshi kurashishning huquqiy masalalari
                            </h1>

                            <p className=" text-sm md:text-base leading-relaxed">
                                “Huquqni muhofaza qilish faoliyatida sun’iy intellektni qo‘llash, zamonaviy kibertahdidlami o‘rganish va raqamli kriminalistikaning dolzarb masalalari” mavzusi bo‘yicha xalqaro ilmiy-amaliy konferensiya konferensiyasining alohida sho'basi. Bu yerda aynan shu sho'baga tegishli maqolalar jamlanadi va bir qarashda ko'rinadi.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <Button
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition-all"
                                >
                                    Konferensiyaga qaytish
                                </Button>

                            </div>
                        </div>

                        {/* O'ng taraf: Rasm yoki Illyustratsiya konteyneri */}
                        <div className="w-full md:w-[45%] bg-gradient-to-br p-2 sm:p-4 rounded-2xl border-none">
                            <div className="overflow-hidden rounded-xl">
                                <img src="http://172.16.223.209:6010/media/conferences/huquqni-mu/04c8947d-b565-46b0-b78d-3077d76036f3.png" alt="Conference" className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>
                    <h1 className="text-3xl font-bold mt-8 text-black">Sho'ba Tafsilotlari</h1>
                    <div className="flex">
                        <div className="bg-gray-100/80  border border-gray-100/80 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                            <Badge variant="destructive" className="bg-blue-500 text-white px-4 py-2 mb-10 ">
                                KUTUBXONA
                            </Badge>
                            <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10">
                                    <CardImage />
                                    <CardImage />
                                    <CardImage />
                                    <CardImage />
                                    <CardImage />
                                    <CardImage />
                                    <CardImage />
                                    <CardImage />

                                </div>

                        </div>
                        <div className="bg-[#074380] border border-gray-100/80 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
}