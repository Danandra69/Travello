export default function Tips() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tips Travelling</h1>

      {/* TIPS UTAMA */}
      <div className="space-y-4">
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-2">🧳 Packing</h2>
          <p className="text-gray-700">
            Bawa barang seperlunya, gunakan packing cube, dan pisahkan barang
            penting.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-2">📱 Dokumentasi</h2>
          <p className="text-gray-700">
            Scan atau foto dokumen penting (KTP, tiket, booking) dan simpan di
            cloud.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-2">💰 Budget</h2>
          <p className="text-gray-700">
            Atur budget harian agar tidak boros saat berlibur.
          </p>
        </div>
      </div>

      {/* PERALATAN WAJIB */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-3">Peralatan Wajib Travelling</h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Powerbank</li>
          <li>Botol minum</li>
          <li>Obat pribadi</li>
          <li>Jaket ringan</li>
          <li>Charger & kabel cadangan</li>
        </ul>
      </div>

      {/* HINDARI */}
      <div className="mt-8 mb-4">
        <h2 className="text-xl font-bold mb-3 text-red-500">
          Hindari Ini Saat Travelling
        </h2>

        <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
          <ul className="list-disc ml-6 text-red-700 space-y-2">
            <li>Membawa barang terlalu banyak.</li>
            <li>Menaruh dompet di saku belakang.</li>
            <li>Terlalu percaya pada orang asing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
