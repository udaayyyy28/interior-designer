"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-white text-luxury-charcoal overflow-x-hidden font-sans">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative">
        <div className="pl-0 relative text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <span className="h-[1px] w-6 bg-luxury-bronze" />
            <span className="text-[10px] tracking-[0.4em] text-luxury-bronze uppercase font-medium">
              Salon Dialogue · Co-Creation
            </span>
            <span className="h-[1px] w-6 bg-luxury-bronze" />
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-light tracking-tight text-luxury-charcoal leading-[1.05] max-w-4xl mx-auto uppercase">
            Let&rsquo;s formulate your <br />
            <span className="italic font-light text-luxury-bronze">signature space.</span>
          </h1>
        </div>
      </section>

      {/* Main Grid: Split Screen Widescreen Picture Left & Elegant Form Right */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 items-stretch">
        {/* Left Column: Massive Full-Height Rounded Image Frame */}
        <div className="lg:col-span-6 relative min-h-[450px] lg:min-h-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-luxury-beige bg-white group">
          <Image
            src="/images/project_villa.png"
            alt="Jubilee Hills Salon Render"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-700" />
          <div className="absolute inset-6 border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />
          
          {/* Floating Details Stamp */}
          <div className="absolute bottom-10 left-10 text-white z-10">
            <span className="text-[9px] tracking-[0.25em] uppercase font-semibold block mb-1">
              Atelier Jubilee Hills
            </span>
            <h3 className="font-sans text-xl font-light uppercase tracking-tight">
              A private design sanctuary.
            </h3>
          </div>
        </div>

        {/* Right Column: Clean White Rounded Form & Info Card */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-luxury-beige p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-sm">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <span className="h-[1px] w-6 bg-luxury-bronze" />
              <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-semibold">
                Design Questionnaire
              </span>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col relative group">
                  <label htmlFor="name" className="text-[9px] tracking-widest text-luxury-grey uppercase mb-1 font-medium group-focus-within:text-luxury-bronze">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-b border-luxury-beige bg-transparent py-2 focus:outline-none focus:border-luxury-bronze transition-colors duration-300 text-sm text-luxury-charcoal font-light placeholder:text-luxury-grey/30"
                    placeholder="e.g. Sanjay Reddy"
                  />
                </div>
                
                <div className="flex flex-col relative group">
                  <label htmlFor="phone" className="text-[9px] tracking-widest text-luxury-grey uppercase mb-1 font-medium group-focus-within:text-luxury-bronze">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="border-b border-luxury-beige bg-transparent py-2 focus:outline-none focus:border-luxury-bronze transition-colors duration-300 text-sm text-luxury-charcoal font-light placeholder:text-luxury-grey/30"
                    placeholder="e.g. +91 99515 17419"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col relative group">
                  <label htmlFor="email" className="text-[9px] tracking-widest text-luxury-grey uppercase mb-1 font-medium group-focus-within:text-luxury-bronze">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-b border-luxury-beige bg-transparent py-2 focus:outline-none focus:border-luxury-bronze transition-colors duration-300 text-sm text-luxury-charcoal font-light placeholder:text-luxury-grey/30"
                    placeholder="e.g. sanjay@reddy.com"
                  />
                </div>
                
                <div className="flex flex-col relative group">
                  <label htmlFor="service" className="text-[9px] tracking-widest text-luxury-grey uppercase mb-1 font-medium">
                    Required Solution
                  </label>
                  <select
                    id="service"
                    className="border-b border-luxury-beige bg-transparent py-2 focus:outline-none focus:border-luxury-bronze transition-colors duration-300 text-sm text-luxury-charcoal font-light cursor-pointer [&>option]:bg-white [&>option]:text-luxury-charcoal"
                  >
                    <option value="residential">Residential Interiors</option>
                    <option value="villa">Luxury Villa Design</option>
                    <option value="kitchen">Modular Kitchens</option>
                    <option value="office">Commercial Office</option>
                    <option value="styling">Space Planning</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col relative group pb-4">
                <label htmlFor="message" className="text-[9px] tracking-widest text-luxury-grey uppercase mb-1 font-medium group-focus-within:text-luxury-bronze">
                  Project Brief
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="border-b border-luxury-beige bg-transparent py-2 focus:outline-none focus:border-luxury-bronze transition-colors duration-300 text-sm text-luxury-charcoal font-light resize-none placeholder:text-luxury-grey/30"
                  placeholder="Outline your villa location, size, and style..."
                />
              </div>

              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="w-full inline-flex items-center justify-center space-x-3 text-[10px] tracking-[0.25em] uppercase bg-luxury-charcoal text-white py-4 hover:bg-luxury-bronze transition-all duration-500 cursor-pointer rounded-full font-semibold shadow-sm"
              >
                <span>Submit Atelier Inquiry</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

          {/* Quick Info Grid */}
          <div className="mt-10 pt-8 border-t border-luxury-beige grid grid-cols-2 gap-4 text-left">
            <div>
              <span className="text-[9px] tracking-widest text-luxury-grey uppercase block mb-1">
                Studio Line
              </span>
              <a href="tel:+918121347879" className="text-xs text-luxury-charcoal hover:text-luxury-bronze transition-colors font-medium">
                +91 81213 47879
              </a>
            </div>
            <div>
              <span className="text-[9px] tracking-widest text-luxury-grey uppercase block mb-1">
                WhatsApp Chat
              </span>
              <a href="https://wa.me/918121347879" target="_blank" rel="noreferrer" className="text-xs text-luxury-charcoal hover:text-luxury-bronze transition-colors font-medium">
                Start Live Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Address & Interactive Map section: Highly visual rounded map frame */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-luxury-beige p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-sm">
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="flex items-center space-x-3">
              <span className="h-[1px] w-6 bg-luxury-bronze" />
              <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-semibold">
                Hyderabad Atelier
              </span>
            </div>
            
            <div>
              <h3 className="font-sans text-2xl font-light text-luxury-charcoal uppercase tracking-tight mb-3">
                Jubilee Hills Salon
              </h3>
              <div className="flex items-start space-x-3 text-xs text-luxury-grey leading-relaxed">
                <MapPin size={16} className="text-luxury-bronze shrink-0 mt-0.5" />
                <span className="font-light">
                  Plot no 112/A, Road No 44, CBI Colony,<br />
                  Jubilee Hills, Hyderabad, Telangana 500033
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs text-luxury-grey">
              <Clock size={14} className="text-luxury-bronze shrink-0" />
              <span className="font-light">Monday — Saturday: 10:00 AM — 7:30 PM</span>
            </div>
          </div>

          {/* Large Map Frame */}
          <div className="lg:col-span-7 aspect-[21/9] md:aspect-[16/7] w-full border border-luxury-beige rounded-[2rem] md:rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative shadow-sm">
            <iframe
              title="Bitspace Interiors Hyderabad Studio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8272990928236!2d78.39958047587889!3d17.420088902534575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97470fcf1eb3%3A0xe10214a1a5b46e3!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
