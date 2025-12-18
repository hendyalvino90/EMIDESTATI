"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Shield, Eye, Cookie, Lock, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  EMI DESTATI
                </h1>
                <p className="text-xs text-gray-600">Privacy Policy</p>
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
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-700 text-lg">
            Kebijakan Privasi untuk <span className="font-semibold text-amber-600">EMI DESTATI</span>
          </p>
          <p className="text-gray-600 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Eye className="w-5 h-5" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Di <span className="font-semibold text-amber-600">EMI DESTATI</span>, kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.
              </p>
              <p className="text-gray-700">
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Cookie className="w-5 h-5" />
                Informasi yang Kami Kumpulkan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Informasi Pribadi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nama lengkap</li>
                  <li>Nomor telepon</li>
                  <li>Alamat email</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pembayaran</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Informasi Non-Pribadi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Data browser dan perangkat</li>
                  <li>Alamat IP</li>
                  <li>Informasi penggunaan website</li>
                  <li>Cookies dan data tracking</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Lock className="w-5 h-5" />
                Penggunaan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami menggunakan informasi yang kami kumpulkan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Memproses dan menyelesaikan pesanan Anda</li>
                <li>Memberikan layanan pelanggan yang lebih baik</li>
                <li>Mengirimkan informasi produk dan promosi</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Memastikan keamanan transaksi dan data pribadi</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Shield className="w-5 h-5" />
                Keamanan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold text-amber-600">EMI DESTATI</span> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Update rutin sistem keamanan</li>
                <li>Monitoring keamanan 24/7</li>
                <li>Komplain dan pelaporan insiden keamanan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third Party Services */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Cookie className="w-5 h-5" />
                Layanan Pihak Ketiga
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami dapat menggunakan layanan pihak ketiga untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Pemrosesan pembayaran (payment gateway)</li>
                <li>Layanan pengiriman</li>
                <li>Analytics dan tracking website</li>
                <li>Marketing dan promosi</li>
              </ul>
              <p className="text-gray-700">
                Semua layanan pihak ketiga yang kami gunakan telah melalui proses due diligence untuk memastikan keamanan data Anda.
              </p>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Eye className="w-5 h-5" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mengakses data pribadi Anda</li>
                <li>Memperbarui informasi pribadi Anda</li>
                <li>Menghapus data pribadi Anda</li>
                <li>Menolak pemasaran langsung</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Shield className="w-5 h-5" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, silakan hubungi:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-700 mb-2">EMI DESTATI</p>
                <p className="text-gray-700">📱 085353876139</p>
                <p className="text-gray-700">📧 privacy@emidestati.com</p>
                <p className="text-gray-700">📍 SIMPANG LANCANG, Desa/Kelurahan III Koto Aur Malintang Selatan,</p>
                <p className="text-gray-700">Kec. IV Koto Aur Malintang, Kab. Padang Pariaman, Prov. Sumatera Barat</p>
                <p className="text-gray-700">📋 25585</p>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Eye className="w-5 h-5" />
                Pembaruan Kebijakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Notifikasi di website</li>
                <li>Email kepada pengguna terdaftar</li>
                <li>Pemberitahuan langsung di toko</li>
              </ul>
              <p className="text-gray-700">
                Penggunaan lanjutan dari layanan kami setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Separator className="my-8" />
          <p className="text-gray-600 mb-4">
            Terima kasih telah mempercayai <span className="font-semibold text-amber-600">EMI DESTATI</span> dengan data pribadi Anda.
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