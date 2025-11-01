"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bed, Building, Building2, Calendar, ChefHat, Crown, Dumbbell, Mail, MapPin, MessageSquare, Sparkles, Star, TrendingUp, Trophy, Users, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Suites", id: "suites" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "Location", id: "location" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Haven Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Discover unparalleled elegance and world-class hospitality at Grand Haven Hotel, where every moment becomes an extraordinary memory"
          tag="5-Star Excellence"
          tagIcon={Crown}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Virtual Tour",
              href: "tour"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel lobby with marble floors and crystal chandeliers"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Timeless Elegance"
          description="For over three decades, Grand Haven Hotel has been the pinnacle of luxury hospitality, offering discerning guests an oasis of sophistication in the heart of the city"
          tag="Heritage"
          tagIcon={Building}
          bulletPoints={[
            {
              title: "Prime Location",
              description: "Located in the prestigious downtown district with stunning city and harbor views",
              icon: MapPin
            },
            {
              title: "Award-Winning Service",
              description: "Recognized globally for exceptional hospitality and personalized guest experiences",
              icon: Award
            },
            {
              title: "Michelin Dining",
              description: "Three world-class restaurants featuring internationally acclaimed chefs",
              icon: ChefHat
            }
          ]}
          imageSrc="https://images.pexels.com/photos/15447099/pexels-photo-15447099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Haven Hotel exterior at golden hour"
          imagePosition="right"
        />
      </div>

      <div id="suites" data-section="suites">
        <ProductCardThree
          title="Luxurious Accommodations"
          description="Choose from our collection of elegantly appointed suites and rooms, each designed to provide the ultimate in comfort and sophistication"
          tag="Premium Suites"
          tagIcon={Bed}
          products={[
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "$2,500/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite with king bed and city view",
              initialQuantity: 1
            },
            {
              id: "executive",
              name: "Executive Suite",
              price: "$1,200/night",
              imageSrc: "https://images.pexels.com/photos/8089070/pexels-photo-8089070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive suite living area with modern furnishings",
              initialQuantity: 1
            },
            {
              id: "deluxe",
              name: "Deluxe King Room",
              price: "$650/night",
              imageSrc: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe room with king bed and elegant decor",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our comprehensive collection of luxury amenities designed to enhance every aspect of your stay"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Infinity Pool & Spa",
              description: "Rooftop infinity pool with panoramic city views and full-service spa offering rejuvenating treatments",
              icon: Waves
            },
            {
              title: "Fitness Center",
              description: "State-of-the-art 24-hour fitness facility with personal training and wellness programs",
              icon: Dumbbell
            },
            {
              title: "Business Center",
              description: "Fully equipped business center with meeting rooms and high-speed internet throughout",
              icon: Building2
            },
            {
              title: "Concierge Services",
              description: "Dedicated concierge team available 24/7 to assist with reservations and local recommendations",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Excellence in Numbers"
          description="Our commitment to exceptional service is reflected in our outstanding guest satisfaction ratings and industry recognition"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "satisfaction",
              icon: Star,
              title: "Guest Satisfaction",
              value: "98%"
            },
            {
              id: "bookings",
              icon: Calendar,
              title: "Annual Guests",
              value: "50,000+"
            },
            {
              id: "awards",
              icon: Trophy,
              title: "Industry Awards",
              value: "25+"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read testimonials from our valued guests who have experienced the exceptional hospitality and luxury that defines Grand Haven Hotel"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Wellington",
              role: "CEO",
              company: "Wellington Industries",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Wellington"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              company: "Chen Capital Partners",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Creative Director",
              company: "Rodriguez Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Rodriguez"
            },
            {
              id: "4",
              name: "James Morrison",
              role: "Managing Partner",
              company: "Morrison & Associates",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Morrison"
            },
            {
              id: "5",
              name: "Victoria Sterling",
              role: "Executive Producer",
              company: "Sterling Entertainment",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7959589/pexels-photo-7959589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Victoria Sterling"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Experience Grand Haven Hotel"
          description="Subscribe to our newsletter for exclusive offers, event announcements, and insider access to the finest luxury experiences"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails from Grand Haven Hotel. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/7821340/pexels-photo-7821340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel concierge desk with marble surfaces"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Haven Hotel"
          columns={[
            {
              items: [
                { label: "Accommodations", href: "suites" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Events", href: "events" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Location", href: "location" },
                { label: "Guest Reviews", href: "reviews" },
                { label: "Careers", href: "careers" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Group Bookings", href: "groups" },
                { label: "Special Offers", href: "offers" },
                { label: "Loyalty Program", href: "loyalty" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}