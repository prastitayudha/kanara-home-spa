import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Clock, Star, Sparkles, Baby, HandHeart, Activity, Phone, MapPin, MessageCircle, Instagram, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "@assets/generated_images/hero_background_baby_spa.png";
import massagePhoto from "@assets/generated_images/baby_massage_service_photo.png";
import spaSetup from "@assets/generated_images/baby_spa_treatment_setup.png";
import therapyPhoto from "@assets/generated_images/baby_therapy_session_photo.png";
import productsDisplay from "@assets/generated_images/baby_care_products_display.png";
import happyMother from "@assets/generated_images/happy_mother_and_baby.png";
import sleepingBaby from "@assets/generated_images/peaceful_sleeping_baby_portrait.png";
import spaInterior from "@assets/generated_images/baby_spa_room_interior.png";
import waterTherapy from "@assets/generated_images/baby_water_therapy_joyful.png";
import therapistPhoto from "@assets/generated_images/professional_therapist_portrait.png";
import footMassage from "@assets/generated_images/baby_foot_massage_closeup.png";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Sparkles,
      title: "Baby Spa",
      description: "Terapi relaksasi dengan air hangat untuk meningkatkan kualitas tidur dan perkembangan motorik bayi",
      image: spaSetup,
    },
    {
      icon: HandHeart,
      title: "Baby Massage",
      description: "Pijat lembut profesional untuk melancarkan peredaran darah dan memperkuat bonding",
      image: massagePhoto,
    },
    {
      icon: Baby,
      title: "BAPIL (Baby Pilates)",
      description: "Latihan ringan untuk merangsang perkembangan otot dan koordinasi bayi dengan aman",
      image: waterTherapy,
    },
    {
      icon: Activity,
      title: "Baby Therapy",
      description: "Terapi fisik khusus untuk mendukung milestone perkembangan bayi dengan pendekatan holistik",
      image: therapyPhoto,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Terapis Bersertifikat",
      description: "Tim profesional terlatih dengan sertifikasi nasional dan pengalaman puluhan bayi",
    },
    {
      icon: Heart,
      title: "Aman & Higienis",
      description: "Sterilisasi peralatan dan protokol kebersihan ketat untuk keamanan buah hati",
    },
    {
      icon: Clock,
      title: "Fleksibel & Nyaman",
      description: "Layanan di rumah Anda, jadwal sesuai kenyamanan keluarga",
    },
  ];

  const packages = [
    {
      name: "Paket Basic",
      price: "Rp 150.000",
      duration: "45 menit",
      features: [
        "Baby Massage",
        "1 Sesi Perawatan",
        "Produk Baby Oil",
        "Konsultasi Dasar",
      ],
      popular: false,
    },
    {
      name: "Paket Premium",
      price: "Rp 250.000",
      duration: "60 menit",
      features: [
        "Baby Spa + Massage",
        "1 Sesi Perawatan",
        "Produk Premium",
        "BAPIL Ringan",
        "Konsultasi Lengkap",
        "Foto Dokumentasi",
      ],
      popular: true,
    },
    {
      name: "Paket Therapy",
      price: "Rp 350.000",
      duration: "90 menit",
      features: [
        "Full Baby Spa Treatment",
        "Baby Massage Lengkap",
        "Baby Therapy Khusus",
        "BAPIL Program",
        "Produk Premium Set",
        "Konsultasi Ahli",
        "Video Tutorial",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Ibu Sarah",
      role: "Mama dari Baby Kenzie",
      content: "Kenzie jadi lebih tenang tidurnya sejak rutin baby spa dengan KANARA. Terapisnya sangat gentle dan profesional!",
      rating: 5,
      image: happyMother,
    },
    {
      name: "Ibu Diana",
      role: "Mama dari Baby Alisha",
      content: "Pelayanan di rumah sangat membantu! Alisha jadi lebih aktif dan ceria setelah rutin massage. Highly recommended!",
      rating: 5,
      image: therapistPhoto,
    },
    {
      name: "Ibu Maya",
      role: "Mama dari Baby Farrel",
      content: "KANARA sangat memperhatikan detail kebersihan dan keamanan. Farrel selalu happy setiap sesi spa. Terima kasih!",
      rating: 5,
      image: sleepingBaby,
    },
  ];

  const galleryImages = [
    { src: massagePhoto, alt: "Baby massage session" },
    { src: spaSetup, alt: "Baby spa setup" },
    { src: waterTherapy, alt: "Baby water therapy" },
    { src: footMassage, alt: "Baby foot massage" },
    { src: productsDisplay, alt: "Premium baby products" },
    { src: spaInterior, alt: "Spa interior" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section 
        id="hero" 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            data-testid="text-hero-title"
          >
            Perawatan Premium untuk Buah Hati Tercinta
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto font-light"
            data-testid="text-hero-subtitle"
          >
            Layanan baby spa, massage, dan terapi profesional di kenyamanan rumah Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="rounded-full"
              onClick={() => window.open('https://wa.me/628123456789?text=Halo%20KANARA,%20saya%20ingin%20booking%20baby%20spa', '_blank')}
              data-testid="button-booking-hero"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Booking Sekarang
            </Button>
            <Button 
              size="lg" 
              variant="ctaOverlay" 
              className="rounded-full"
              onClick={() => scrollToSection('packages')}
              data-testid="button-packages-hero"
            >
              Lihat Paket
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up">
              <Badge className="mb-4 font-decorative text-sm" data-testid="badge-about">Tentang Kami</Badge>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#8A6E63]" data-testid="text-about-title">
                KANARA Baby Spa Home Care
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description">
                Kami hadir untuk memberikan perawatan terbaik bagi buah hati Anda dengan layanan profesional langsung di rumah. 
                Setiap sentuhan penuh kehangatan, setiap gerakan penuh perhatian.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dengan tim terapis bersertifikat dan peralatan premium, KANARA berkomitmen menciptakan pengalaman spa yang aman, 
                nyaman, dan menyenangkan untuk mendukung tumbuh kembang optimal si kecil.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
              <img 
                src={happyMother} 
                alt="Happy mother and baby" 
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                data-testid="img-about-1"
              />
              <img 
                src={spaInterior} 
                alt="Spa interior" 
                className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8"
                data-testid="img-about-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 font-decorative text-sm" data-testid="badge-services">Layanan Kami</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#8A6E63]" data-testid="text-services-title">
              Layanan Premium untuk Si Kecil
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rangkaian perawatan lengkap yang dirancang khusus untuk kenyamanan dan perkembangan optimal bayi Anda
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 border-card-border"
                data-testid={`card-service-${index}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-service-${index}`}
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#8A6E63]" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 font-decorative text-sm" data-testid="badge-benefits">Keunggulan Kami</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#8A6E63]" data-testid="text-benefits-title">
              Kenapa Memilih KANARA?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-benefit-${index}`} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-[#8A6E63]" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 font-decorative text-sm" data-testid="badge-packages">Paket Layanan</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#8A6E63]" data-testid="text-packages-title">
              Pilih Paket yang Tepat
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai pilihan paket untuk memenuhi kebutuhan perawatan buah hati Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 ${
                  pkg.popular ? 'border-primary border-2 shadow-xl' : ''
                }`}
                data-testid={`card-package-${index}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg font-decorative text-sm font-medium">
                    Terpopuler
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-serif text-[#8A6E63] mb-2" data-testid={`text-package-name-${index}`}>
                    {pkg.name}
                  </CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary" data-testid={`text-package-price-${index}`}>{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">/ {pkg.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2" data-testid={`feature-package-${index}-${fIndex}`}>
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6 rounded-full" 
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => window.open(`https://wa.me/628123456789?text=Halo%20KANARA,%20saya%20ingin%20booking%20${pkg.name}`, '_blank')}
                    data-testid={`button-package-${index}`}
                  >
                    Pilih Paket Ini
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 font-decorative text-sm" data-testid="badge-testimonials">Testimoni</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#8A6E63]" data-testid="text-testimonials-title">
              Cerita Para Mama
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kepercayaan dan kepuasan keluarga adalah kebanggaan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-testimonial-${index}`} data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                      data-testid={`img-testimonial-${index}`}
                    />
                    <div>
                      <h4 className="font-semibold text-[#8A6E63]" data-testid={`text-testimonial-name-${index}`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 font-decorative text-sm" data-testid="badge-gallery">Galeri</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#8A6E63]" data-testid="text-gallery-title">
              Momen Berharga Bersama KANARA
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
                data-testid={`gallery-item-${index}`}
                data-aos="fade-in"
                data-aos-delay={index * 80}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-gallery-${index}`}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-6 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <Badge className="mb-4 font-decorative text-sm" data-testid="badge-booking">Cara Booking</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#8A6E63]" data-testid="text-booking-title">
              Mudah & Cepat
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6" data-aos="fade-up" data-aos-delay="100" data-testid="card-booking-step-0">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#8A6E63]" data-testid="text-booking-step-0-title">Hubungi Kami</h3>
              <p className="text-muted-foreground text-sm" data-testid="text-booking-step-0-description">
                Chat via WhatsApp untuk konsultasi dan pilih paket
              </p>
            </Card>
            <Card className="text-center p-6" data-aos="fade-up" data-aos-delay="200" data-testid="card-booking-step-1">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#8A6E63]" data-testid="text-booking-step-1-title">Jadwalkan</h3>
              <p className="text-muted-foreground text-sm" data-testid="text-booking-step-1-description">
                Tentukan waktu sesuai kenyamanan Anda
              </p>
            </Card>
            <Card className="text-center p-6" data-aos="fade-up" data-aos-delay="300" data-testid="card-booking-step-2">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#8A6E63]" data-testid="text-booking-step-2-title">Nikmati Layanan</h3>
              <p className="text-muted-foreground text-sm" data-testid="text-booking-step-2-description">
                Terapis datang ke rumah Anda
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="rounded-full"
              onClick={() => window.open('https://wa.me/628123456789?text=Halo%20KANARA,%20saya%20ingin%20konsultasi', '_blank')}
              data-testid="button-booking-main"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Booking via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-up">
              <h2 className="font-serif text-4xl font-bold mb-6 text-[#8A6E63]" data-testid="text-contact-title">
                Area Layanan & Jam Operasional
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-area">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#8A6E63]" data-testid="text-contact-area-title">Area Layanan</h3>
                    <p className="text-muted-foreground" data-testid="text-contact-area-description">
                      Jakarta Selatan, Jakarta Pusat, Jakarta Barat, Tangerang Selatan, dan sekitarnya
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="contact-hours">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#8A6E63]" data-testid="text-contact-hours-title">Jam Operasional</h3>
                    <p className="text-muted-foreground" data-testid="text-contact-hours-description">
                      Senin - Minggu: 08.00 - 20.00 WIB<br />
                      (Booking H-1 untuk hasil optimal)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="contact-info">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#8A6E63]" data-testid="text-contact-info-title">Kontak</h3>
                    <p className="text-muted-foreground" data-testid="text-contact-info-description">
                      WhatsApp: +62 812-3456-789<br />
                      Email: hello@kanara.id
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-primary/5" data-aos="fade-up" data-aos-delay="200" data-testid="card-contact-commitment">
              <h3 className="font-serif text-2xl font-bold mb-6 text-[#8A6E63]" data-testid="text-contact-commitment-title">
                Siap Memberikan yang Terbaik
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-contact-commitment-description">
                KANARA berkomitmen untuk terus memberikan layanan terbaik dengan standar kebersihan tinggi, 
                terapis profesional, dan perhatian penuh untuk setiap bayi yang kami rawat.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1" data-testid="badge-stat-0">✓ 100+ Keluarga Bahagia</Badge>
                <Badge variant="secondary" className="px-3 py-1" data-testid="badge-stat-1">✓ Terapis Bersertifikat</Badge>
                <Badge variant="secondary" className="px-3 py-1" data-testid="badge-stat-2">✓ Produk Premium</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-title">
            Berikan yang Terbaik untuk Buah Hati Anda
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Hubungi kami sekarang dan jadwalkan sesi pertama dengan harga spesial
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="rounded-full"
            onClick={() => window.open('https://wa.me/628123456789?text=Halo%20KANARA,%20saya%20tertarik%20dengan%20promo', '_blank')}
            data-testid="button-cta-final"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat Sekarang
          </Button>
        </div>
      </section>

      <footer className="py-12 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-4 text-[#8A6E63]">KANARA</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Baby Spa Home Care premium yang mengutamakan kenyamanan, keamanan, dan kebahagiaan buah hati Anda.
              </p>
              <div className="flex gap-3">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full"
                  onClick={() => window.open('https://instagram.com/kanara.babyspa', '_blank')}
                  data-testid="button-instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full"
                  onClick={() => window.open('https://wa.me/628123456789', '_blank')}
                  data-testid="button-whatsapp-footer"
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full"
                  onClick={() => window.location.href = 'mailto:hello@kanara.id'}
                  data-testid="button-email"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#8A6E63]">Layanan</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors" data-testid="button-footer-service-baby-spa">
                    Baby Spa
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors" data-testid="button-footer-service-baby-massage">
                    Baby Massage
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors" data-testid="button-footer-service-bapil">
                    BAPIL
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors" data-testid="button-footer-service-baby-therapy">
                    Baby Therapy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#8A6E63]">Kontak</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+62 812-3456-789</li>
                <li>hello@kanara.id</li>
                <li className="pt-2 text-sm">
                  Jakarta & Tangerang Selatan
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
            <p>&copy; 2025 KANARA Baby Spa Home Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
