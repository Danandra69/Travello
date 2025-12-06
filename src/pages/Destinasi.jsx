export default function Destinasi() {
  const data = [
    {
      nama: "Bali",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      deskripsi: "Pantai & wisata budaya.",
    },
    {
      nama: "Bandung",
      img: "https://images.unsplash.com/photo-1541417904950-b855846fe074",
      deskripsi: "Kota dingin penuh kuliner.",
    },
    {
      nama: "Lombok",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      deskripsi: "Pantai jernih & gunung Rinjani.",
    },

    {
      nama: "Jakarta",
      img: "https://images.unsplash.com/photo-1541417904950-b855846fe074",
      deskripsi: "Kota metropolitan dengan banyak hiburan.",
    },
    {
      nama: "Surabaya",
      img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
      deskripsi: "Kota modern dengan sejarah panjang.",
    },
    {
      nama: "Malang",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      deskripsi: "Dingin, nyaman, dengan wisata alam.",
    },
    {
      nama: "Medan",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      deskripsi: "Dekat Danau Toba & budaya Batak.",
    },
    {
      nama: "Makassar",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      deskripsi: "Pantai Losari & kuliner khas.",
    },
    {
      nama: "Banyuwangi",
      img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
      deskripsi: "Kawah Ijen & wisata alam eksotis.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Destinasi Populer</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="
              bg-white 
              shadow-md
              hover:shadow-xl 
              rounded-2xl 
              overflow-hidden 
              transform 
              hover:-translate-y-1 
              transition 
              duration-300
            "
          >
            <img
              src={item.img}
              className="w-full h-32 object-cover transition duration-300 hover:scale-105"
            />

            <div className="p-3">
              <h2 className="text-lg font-bold">{item.nama}</h2>
              <p className="text-gray-600 text-sm">{item.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
