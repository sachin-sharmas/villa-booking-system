import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="border-t bg-[#020917] text-[rgb(170,183,201)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold  from-primary to-luxury bg-clip-text text-[#CBA034]">
              Villa Oasis
            </h3>
            <p className="text-muted-foreground">
              Discover luxury vacation rentals in the world's most beautiful
              destinations. Creating unforgettable experiences since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">FB</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">TW</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">IG</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LI</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-[#CBA034] transition-colors">Home</a>
              <a href="/villas" className="block text-muted-foreground hover:text-[#CBA034] transition-colors">Browse Villas</a>
              <a href="/about" className="block text-muted-foreground hover:text-[#CBA034] transition-colors">About Us</a>
              <a href="/contact" className="block text-muted-foreground hover:text-[#CBA034] transition-colors">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary hover:text-[#CBA034] transition-colors">Villa Management</a>
              <a href="#" className="block text-muted-foreground hover:text-primary hover:text-[#CBA034] transition-colors">Concierge Services</a>
              <a href="#" className="block text-muted-foreground hover:text-primary hover:text-[#CBA034] transition-colors">Travel Planning</a>
              <a href="#" className="block text-muted-foreground hover:text-primary hover:text-[#CBA034] transition-colors">Property Investment</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <span>📍 123 Luxury Avenue, Paradise Island</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>📞 +1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>✉️ info@villaoasis.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Villa Oasis. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
