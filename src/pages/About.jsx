import React from "react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4 px-6 text-center">
        Tentang Travello
      </h1>
      <p className="text-lg max-w-2xl mx-auto">
        Travello adalah platform travelling yang membantu Anda menemukan
        destinasi terbaik, mendapatkan tips perjalanan, dan merencanakan liburan
        dengan lebih mudah.
      </p>

      {/* Visi & Misi */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Visi & Misi Kami
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Visi */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Visi</h3>
            <p>
              Menjadi platform travelling terpercaya yang memudahkan siapa pun
              menemukan pengalaman perjalanan yang menyenangkan dan tak
              terlupakan.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Misi</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Menyediakan informasi destinasi secara ringkas dan akurat.
              </li>
              <li>
                Memberikan tips yang membantu wisatawan pemula maupun
                berpengalaman.
              </li>
              <li>Mengenalkan keindahan wisata lokal & internasional.</li>
              <li>
                Mempermudah perencanaan liburan hanya dalam beberapa klik.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kenapa Memilih Travello */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Kenapa Memilih Travello?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">Informasi Terpercaya</h3>
            <p>
              Kami menampilkan destinasi yang sudah dikurasi agar Anda tidak
              salah pilih.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">Tips Berguna</h3>
            <p>
              Dapatkan tips perjalanan mulai dari hemat biaya, perlengkapan,
              hingga itinerary.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 shadow rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">Ramah Pengguna</h3>
            <p>
              Tampilan sederhana dan mudah digunakan untuk semua kalangan
              wisatawan.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Tujuan Kami</h2>
        <p className="max-w-3xl mx-auto">
          Travello hadir untuk menginspirasi dan mempermudah perjalanan Anda,
          baik untuk liburan, petualangan, maupun eksplorasi budaya. Kami
          percaya bahwa setiap orang berhak mendapatkan pengalaman perjalanan
          terbaik.
        </p>
      </section>
    </div>
  );
}
