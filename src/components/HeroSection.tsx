"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5.5L+", label: "Patients Treated" },
  { value: "98+", label: "Years of Legacy" },
  { value: "100%", label: "Confidential" },
  { value: "24/7", label: "Online Consult" },
];

export function HeroSection({ city }: { city: string }) {
  return (
    <section className="relative w-full bg-[#FAF9F6] text-[#0F2922] font-sans pt-20 pb-16 lg:pt-32 lg:pb-24 border-b border-[#E8E6DF]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Content - Typography Driven */}
          <div className="flex-1 flex flex-col space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#0F2922]"></span>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#0F2922]">
                Established 1926
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-medium leading-[1.05] tracking-tight text-[#0F2922]">
              The Trusted Name in <br className="hidden md:block" />
              Men&apos;s Health.
            </h1>

            <p className="text-lg md:text-xl text-[#4A5E58] leading-relaxed max-w-2xl font-medium">
              Discreet, evidence-based care under the expertise of Dr. Rajesh Maghnani. 
              Comprehensive natural treatments delivering lasting results with total confidentiality in {city}.
            </p>

            {/* Shadcn-like CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A4D3E] disabled:pointer-events-none disabled:opacity-50 bg-[#1A4D3E] text-white hover:bg-[#1A4D3E]/90 shadow-sm h-12 px-8"
              >
                Book Appointment
              </Link>
              
              <a
                href="tel:+919936604444"
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A4D3E] disabled:pointer-events-none disabled:opacity-50 border border-[#E8E6DF] bg-white text-[#0F2922] hover:bg-[#F2F0E9] hover:text-[#0F2922] shadow-sm h-12 px-8"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Clinic
              </a>
              
              <a
                href="https://wa.me/919936604444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366] disabled:pointer-events-none disabled:opacity-50 bg-transparent text-[#0F2922] hover:bg-[#25D366]/10 h-12 px-6"
              >
                <svg className="w-5 h-5 mr-2 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Standard Metrics Grid - Solid lines, no gradients */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 mt-6 border-t border-[#E8E6DF]">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-3xl font-bold text-[#0F2922] tracking-tight">{s.value}</span>
                  <span className="text-sm font-medium text-[#4A5E58] mt-2">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Architectural, Solid Image Block (No floating overlays, no squircle borders) */}
          <div className="lg:w-5/12 w-full mt-12 lg:mt-0 relative">
            {/* Simple solid background block for depth */}
            <div className="absolute top-4 -right-4 md:top-8 md:-right-8 w-full h-full bg-[#1A4D3E] hidden md:block"></div>
            
            <div className="relative w-full aspect-[4/5] bg-[#E8E6DF] overflow-hidden group">
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Rajesh Maghnani — Senior Sexologist"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              
              {/* Grounded Information Plate */}
              <div className="absolute bottom-0 left-0 w-full bg-white border-t border-[#E8E6DF] p-6 lg:p-8">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-12 bg-[#1A4D3E]"></div>
                  <div>
                    <h3 className="text-[#0F2922] font-bold text-xl">Dr. Rajesh Maghnani</h3>
                    <p className="text-[#4A5E58] font-medium text-sm mt-1">Senior Sexologist • 50+ Years Expert Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}


