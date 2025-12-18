"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FileText, ShoppingCart, AlertCircle, Clock, RefreshCw, Shield, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  EMI DESTATI
                </h1>
                <p className="text-xs text-gray-600">Terms & Conditions</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                  <Home className="w-4 h-4 mr-2" />
                  Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Syarat & Ketentuan
            </span>
          </h1>
          <p className="text-gray-700 text-lg">
            Syarat dan Ketentuan Layanan untuk <span className="font-semibold text-amber-600">EMI DESTATI</span>
          </p>
          <p className="text-gray-600 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <FileText className="w-5 h-5" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Selamat datang di <span className="font-semibold text-amber-600">EMI DESTATI</span>! 
                Syarat dan Ketentuan ini mengatur penggunaan layanan kami, termasuk pembelian produk roti dan kue secara online maupun offline.
              </p>
              <p className="text-gray-700">
                Dengan menggunakan layanan kami, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini.
              </p>
            </CardContent>
          </Card>

          {/* Product Information */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <ShoppingCart className="w-5 h-5" />
                Informasi Produk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Kualitas Produk</h3>
                <p className="text-gray-700">
                  Kami berkomitmen untuk menyediakan produk roti dan kue dengan kualitas terbaik:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                  <li>Produk dibuat fresh setiap hari</li>
                  <li>Bahan-bahan berkualitas premium</li>
                  <li>Standar kebersihan dan keamanan pangan</li>
                  <li>Tanpa pengawet berbahaya</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Deskripsi Produk</h3>
                <p className="text-gray-700">
                  Kami berusaha untuk memberikan deskripsi produk yang akurat. Namun, 
                  variasi warna dan bentuk dapat terjadi karena proses pembuatan manual.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Alergen</h3>
                <p className="text-gray-700">
                  Produk kami dapat mengandung alergen seperti gluten, susu, telur, dan kacang-kacangan. 
                  Harap informasikan alergi Anda saat melakukan pemesanan.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ordering Process */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <ShoppingCart className="w-5 h-5" />
                Proses Pemesanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cara Pemesanan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Pemesanan via WhatsApp: 085353876139</li>
                  <li>Pemesanan langsung di toko</li>
                  <li>Pemesanan via website (coming soon)</li>
                  <li>Pemesanan minimal 2 jam sebelum pengambilan</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Konfirmasi Pesanan</h3>
                <p className="text-gray-700">
                  Setiap pemesanan akan dikonfirmasi melalui WhatsApp atau telepon. 
                  Pesanan dianggap sah setelah menerima konfirmasi dari kami.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Pembayaran</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Pembayaran tunai (COD)</li>
                  <li>Transfer bank</li>
                  <li>E-wallet (OVO, GoPay, Dana)</li>
                  <li>Pembayaran lunas sebelum pengiriman</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <ShoppingCart className="w-5 h-5" />
                Harga dan Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Kebijakan Harga</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Harga dapat berubah sewaktu-waktu</li>
                  <li>Harga belum termasuk ongkos kirim</li>
                  <li>Diskon dan promo berlaku sesuai syarat dan ketentuan</li>
                  <li>Harga khusus untuk pesanan besar (bulk order)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Biaya Tambahan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Ongkos kirim sesuai jarak</li>
                  <li>Biaya kemasan khusus</li>
                  <li>Biaya dekorasi tambahan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Clock className="w-5 h-5" />
                Pengiriman dan Pengambilan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Jam Operasional</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Setiap Hari: 06:00 - 21:00 WIB</li>
                  <li>Pesanan online: 07:00 - 20:00 WIB</li>
                  <li>Pengiriman: 08:00 - 19:00 WIB</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Layanan Pengiriman</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Pengiriman dalam kota Padang Pariaman</li>
                  <li>Kerjasama dengan jasa ekspedisi untuk luar kota</li>
                  <li>Pengiriman khusus untuk kue ulang tahun</li>
                  <li>Estimasi waktu pengiriman: 1-3 jam</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Pengambilan di Toko</h3>
                <p className="text-gray-700">
                  Pesanan dapat diambil di toko kami setelah menerima konfirmasi siap. 
                  Harap membawa bukti pemesanan saat pengambilan.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <AlertCircle className="w-5 h-5" />
                Pembatalan dan Pengembalian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Kebijakan Pembatalan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Pembatalan 24 jam sebelum pengambilan: full refund</li>
                  <li>Pembatalan 12-24 jam sebelum: refund 50%</li>
                  <li>Pembatalan kurang dari 12 jam: tidak ada refund</li>
                  <li>Pembatalan karena kesalahan kami: full refund</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Kebijakan Pengembalian</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Pengembalian jika produk cacat atau tidak sesuai</li>
                  <li>Klaim pengembalian maksimal 2 jam setelah pengiriman</li>
                  <li>Produk harus dalam kondisi utuh</li>
                  <li>Bukti foto/video diperlukan untuk klaim</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Product Warranty */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Shield className="w-5 h-5" />
                Garansi Produk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Masa Simpan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Roti manis: 2-3 hari (suhu ruang)</li>
                  <li>Kue basah: 1-2 hari (suhu ruang)</li>
                  <li>Kue kering: 1-2 minggu (wadah tertutup)</li>
                  <li>Kue ulang tahun: 2-3 hari (kulkas)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Garansi Kualitas</h3>
                <p className="text-gray-700">
                  Kami menjamin kualitas produk yang kami jual. Jika Anda menemukan masalah dengan kualitas produk,
                  silakan hubungi kami segera untuk penggantian atau refund.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Shield className="w-5 h-5" />
                Hak Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Semua konten di website dan materi promosi <span className="font-semibold text-amber-600">EMI DESTATI</span> 
                dilindungi oleh hak cipta dan merek dagang.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Nama "EMI DESTATI" adalah merek dagang terdaftar</li>
                <li>Resep produk adalah rahasia dagang</li>
                <li>Foto produk dilindungi hak cipta</li>
                <li>Dilarang menggandakan konten tanpa izin</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <AlertCircle className="w-5 h-5" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold text-amber-600">EMI DESTATI</span> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Keterlambatan pengiriman karena faktor eksternal</li>
                <li>Kerusakan produk selama pengiriman pihak ketiga</li>
                <li>Alergi atau reaksi alergi terhadap produk</li>
                <li>Kerugian tidak langsung dari penggunaan produk</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <FileText className="w-5 h-5" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-700 mb-2">EMI DESTATI</p>
                <p className="text-gray-700">📱 085353876139</p>
                <p className="text-gray-700">📧 info@emidestati.com</p>
                <p className="text-gray-700">📍 SIMPANG LANCANG, Desa/Kelurahan III Koto Aur Malintang Selatan,</p>
                <p className="text-gray-700">Kec. IV Koto Aur Malintang, Kab. Padang Pariaman, Prov. Sumatera Barat</p>
                <p className="text-gray-700">📋 25585</p>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Shield className="w-5 h-5" />
                Perjanjian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Dengan menggunakan layanan <span className="font-semibold text-amber-600">EMI DESTATI</span>, 
                Anda menyatakan bahwa:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</li>
                <li>Anda berusia minimal 18 tahun atau memiliki izin orang tua</li>
                <li>Informasi yang Anda berikan adalah akurat dan lengkap</li>
                <li>Anda akan menggunakan layanan kami secara bertanggung jawab</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Separator className="my-8" />
          <p className="text-gray-600 mb-4">
            Terima kasih telah memilih <span className="font-semibold text-amber-600">EMI DESTATI</span> sebagai partner kuliner Anda!
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}