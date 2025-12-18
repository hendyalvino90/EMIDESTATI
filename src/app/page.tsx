"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Phone, Mail, MapPin, Clock, Star, Cake, Coffee, Cookie, Wheat } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  const products = [
    {
      name: "Roti Manis Premium",
      description: "Roti lembut dengan berbagai pilihan rasa premium",
      price: "Rp 15.000 - Rp 35.000",
      icon: <Wheat className="w-8 h-8" />
    },
    {
      name: "Kue Ulang Tahun",
      description: "Kue spesial untuk moment berharga Anda",
      price: "Rp 150.000 - Rp 500.000",
      icon: <Cake className="w-8 h-8" />
    },
    {
      name: "Pastry & Cookies",
      description: "Berbagai pilihan pastry dan cookies lezat",
      price: "Rp 10.000 - Rp 50.000",
      icon: <Cookie className="w-8 h-8" />
    },
    {
      name: "Kopi & Minuman",
      description: "Minuman segar untuk menemani hidangan Anda",
      price: "Rp 8.000 - Rp 25.000",
      icon: <Coffee className="w-8 h-8" />
    }
  ]

  const testimonials = [
    {
      name: "Budi Santoso",
      rating: 5,
      comment: "Rotinya sangat lembut dan rasanya enak sekali! Favorit keluarga kami."
    },
    {
      name: "Siti Nurhaliza",
      rating: 5,
      comment: "Kue ulang tahun untuk anak saya sangat bagus dan rasanya luar biasa."
    },
    {
      name: "Ahmad Fauzi",
      rating: 5,
      comment: "Pelayanan ramah dan produk selalu fresh. Recommended!"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <Wheat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  EMI DESTATI
                </h1>
                <p className="text-xs text-gray-600">Roti & Kue Premium</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveTab('home')}
                className={`font-medium transition-colors ${activeTab === 'home' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
              >
                Beranda
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className={`font-medium transition-colors ${activeTab === 'about' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
              >
                Tentang
              </button>
              <button 
                onClick={() => setActiveTab('products')}
                className={`font-medium transition-colors ${activeTab === 'products' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
              >
                Produk
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`font-medium transition-colors ${activeTab === 'contact' ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
              >
                Kontak
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50"></div>
        <div className="relative container mx-auto text-center">
          <div className="inline-block mb-6">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-sm">
              🍞 Toko Roti & Kue Premium
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
              EMI DESTATI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Hidangan Lezat dari Hati untuk Keluarga Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8">
              Pesan Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50 px-8">
              Lihat Menu
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-700">Tentang Kami</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Kenapa Memilih <span className="text-amber-600">EMI DESTATI</span>?
              </h2>
              <p className="text-gray-700 mb-6">
                EMI DESTATI adalah usaha rumahan yang telah berpengalaman dalam industri roti dan kue. 
                Kami menggunakan bahan-bahan pilihan berkualitas tinggi untuk menghasilkan produk yang 
                lezat dan bergizi.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">Bahan berkualitas premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">Resep tradisional & modern</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">Dibuat fresh setiap hari</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="EMI DESTATI Logo" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-700">Produk Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hidangan <span className="text-amber-600">Lezat</span> untuk Anda
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Berbagai pilihan roti, kue, dan pastry yang dibuat dengan cinta dan bahan berkualitas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-amber-100">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-amber-600 mb-3">{product.price}</p>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-700">Testimoni Pelanggan</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata <span className="text-amber-600">Pelanggan</span> Kami
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-amber-100">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold text-amber-600">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-700">Kontak Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi <span className="text-amber-600">EMI DESTATI</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-amber-700">Informasi Kontak</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">085353876139</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">emi.destati@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700 text-sm">
                      SIMPANG LANCANG, Desa/Kelurahan III Koto Aur Malintang Selatan,
                      Kec. IV Koto Aur Malintang, Kab. Padang Pariaman, Prov. Sumatera Barat
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">Setiap Hari: 06:00 - 21:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-amber-700">Pesan Sekarang</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Pesan via WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50">
                    <Mail className="w-4 h-4 mr-2" />
                    Kirim Email
                  </Button>
                  <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50">
                    <MapPin className="w-4 h-4 mr-2" />
                    Buka di Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
              EMI DESTATI
            </h3>
            <p className="text-gray-400">Roti & Kue Premium</p>
          </div>
          <Separator className="my-4 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 EMI DESTATI. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy">
                <button className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Privacy Policy
                </button>
              </Link>
              <Link href="/terms">
                <button className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Terms & Conditions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}