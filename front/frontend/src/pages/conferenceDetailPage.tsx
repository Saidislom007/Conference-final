import { ScrollArea } from "../../@/components/ui/scroll-area"
import { Button } from '../../@/components/ui/button';
import Navbar from '../components/Navbar'
export default function ConferenceDetailPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
                <h1 className="text-3xl font-bold text-gray-900">“Huquqni muhofaza qilish faoliyatida sun’iy intellektni qo‘llash, zamonaviy kibertahdidlami o‘rganish va raqamli kriminalistikaning dolzarb masalalari” mavzusi bo‘yicha xalqaro ilmiy-amaliy konferensiya</h1>
                <p className="mt-4 text-gray-700">Ilmiy-amaliy konferensiya</p>
                <div className="flex ">
                    <div className="flex flex-col space-y-4 w-full">
                        <div className="mt-6 *:space-y-4 border p-6 bg-white rounded-lg shadow-md">
                            <img src="http://172.16.223.209:6010/media/conferences/huquqni-mu/04c8947d-b565-46b0-b78d-3077d76036f3.png" alt="Conference" className="w-full h-74 object-cover rounded-lg shadow-md" />
                            <h2 className="text-2xl font-semibold text-gray-800">Tadbir tafsilotlari</h2>
                            <p className="mt-2 text-gray-600">
                                Ushbu konferensiya sun’iy intellekt, kibertahdidlar va raqamli kriminalistika sohalaridagi eng so‘nggi tadqiqotlar va amaliy tajribalarni muhokama qilish uchun mo‘ljallangan. Tadbirda soha mutaxassislari, ilmiy xodimlar va amaliyotchilar ishtirok etadi.
                            </p>
                        </div>
                        <div className="mt-6 *:space-y-4 border p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">Umumiy Word to'plami</h2>
                            <p className="mt-2 text-gray-600">Konferensiyaga yuborilgan maqolalar ketma-ket bitta Word faylga yig'iladi.</p>
                            <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Word faylni yuklab olish</Button>
                            <div className="mt-4">
                                <article className="prose prose-sm max-w-none">
                                    <h3>Konferensiya ishtirokchilari:</h3>
                                </article>
                                <ScrollArea className="h-150 w-full rounded-md border mt-2">
                                    <div className="p-4">
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



                                    </div>
                                </ScrollArea>
                            </div>
                        </div>

                        <div className="mt-6 *:space-y-4 border p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">Sho'balar</h2>
                            <div className="mt-6 *:space-y-4 border p-6 bg-white rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-gray-800">Sho'ba 1</h2>
                                <p className="mt-2 text-gray-600">Sho'ba 1 bo'yicha konferensiya tafsilotlari.</p>
                                <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sho'ba 1 tafsilotlarini ko'rish</Button>
                            </div>
                            <div className="mt-6 *:space-y-4 border p-6 bg-white rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-gray-800">Sho'ba 2</h2>
                                <p className="mt-2 text-gray-600">Sho'ba 2 bo'yicha konferensiya tafsilotlari.</p>
                                <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sho'ba 2 tafsilotlarini ko'rish</Button>
                            </div>
                            <div className="mt-6 *:space-y-4 border p-6 bg-white rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-gray-800">Sho'ba 3</h2>
                                <p className="mt-2 text-gray-600">Sho'ba 3 bo'yicha konferensiya tafsilotlari.</p>
                                <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sho'ba 3 tafsilotlarini ko'rish</Button>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col space-y-4 w-full ml-4">
                        <div className="mt-6 *:space-y-4 border p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">Muhim sanalar</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Start: 15.04.2026</li>
                                <li>End: 25.04.2026</li>
                                <li>Maqola yuborish muddatlari: 23.04.2026 01:59</li>
                            </ul>
                            <Button className="mt-4 bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600">Maqola yuborish muddati tugagan</Button>
                        </div>
                        <div className="mt-6 *:space-y-4 border p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800">Qisqa statistika</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Sho'balar: 3</li>
                                <li>Maqolalar: 24</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
}