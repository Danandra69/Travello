import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      {/* HERO SECTION */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Travello</h1>
        <p className="text-gray-600 mb-4">
          Temukan destinasi terbaik untuk liburanmu.
        </p>

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="w-full rounded-xl shadow-md object-cover max-h-[220px] md:max-h-[320px]"
        />

        <Link
          to="/destinasi"
          className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg shadow"
        >
          Lihat Destinasi
        </Link>
      </div>

      {/* CATEGORY SECTION */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-3">Kategori Populer</h2>

        <div className="grid grid-cols-3 gap-3">
          {[
            {
              name: "Pantai",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            },
            {
              name: "Gunung",
              img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            },
            {
              name: "Kota",
              img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
              <img src={item.img} className="h-20 w-full object-cover" />
              <p className="font-semibold text-center p-1">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* REKOMENDASI DESTINASI */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-3">Rekomendasi Untukmu</h2>

        <div className="space-y-4">
          {[
            {
              nama: "Bali",
              img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
              deskripsi: "Pulau surga dengan budaya unik.",
            },
            {
              nama: "Jogja",
              img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
              deskripsi: "Kota pelajar dengan sejarah kaya.",
            },
            {
              nama: "Lombok",
              img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
              deskripsi: "Pantai bening & gunung megah.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
              <img src={item.img} className="w-full h-32 object-cover" />
              <div className="p-3">
                <h3 className="font-bold text-lg">{item.nama}</h3>
                <p className="text-gray-600 text-sm">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold">Siap berpetualang?</h3>
        <Link
          to="/destinasi"
          className="inline-block mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg shadow"
        >
          Mulai Sekarang
        </Link>
      </div>
    </div>
  );
}
