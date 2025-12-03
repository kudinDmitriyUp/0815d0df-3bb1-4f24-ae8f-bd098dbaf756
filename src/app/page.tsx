"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Video, Users, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="CreativeUGC"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803608508-e0m5xy7c.jpg"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Authentic UGC Content That Converts"
          description="We create genuine user-generated content that connects with audiences and drives real engagement for your brand."
          tag="UGC Experts"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803609210-o6380e3i.jpg",
              imageAlt: "UGC production studio"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803609852-mtzor47r.jpg",
              imageAlt: "Content creator filming"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803610542-s3w4ehuy.jpg",
              imageAlt: "Creative team collaboration"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803611183-edn6mxeg.jpg",
              imageAlt: "Professional video editing"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803609210-o6380e3i.jpg",
              imageAlt: "Final content showcase"
            }
          ]}
          buttons={[
            { text: "See Our Work", href: "portfolio" },
            { text: "Start a Project", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Building Trust Through Authentic Content That Your Audience Actually Loves"
          metrics={[
            {
              icon: Sparkles,
              label: "Brands Partnered",
              value: "150+"
            },
            {
              icon: Video,
              label: "Videos Produced",
              value: "5000+"
            },
            {
              icon: Users,
              label: "Content Creators",
              value: "200+"
            },
            {
              icon: TrendingUp,
              label: "Average Engagement Lift",
              value: "340%"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSix
          title="Our UGC Production Process"
          description="We combine creative expertise with strategic storytelling to deliver content that resonates with real audiences."
          tag="How We Work"
          features={[
            {
              id: 1,
              title: "Concept & Strategy",
              description: "We develop authentic content concepts aligned with your brand values and target audience insights.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803609852-mtzor47r.jpg"
            },
            {
              id: 2,
              title: "Creator Selection",
              description: "We match your project with experienced creators who genuinely connect with your target demographic.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803610542-s3w4ehuy.jpg"
            },
            {
              id: 3,
              title: "Production",
              description: "Professional filming, authentic performances, and real-world scenarios that feel genuine and relatable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803611183-edn6mxeg.jpg"
            },
            {
              id: 4,
              title: "Post-Production",
              description: "Skilled editing and refinement to enhance quality while maintaining the authentic UGC feel your audience expects.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803609210-o6380e3i.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Featured UGC Campaigns"
          description="Explore successful campaigns that drove real results for leading brands across industries."
          tag="Our Portfolio"
          products={[
            {
              id: "1",
              brand: "Lifestyle",
              name: "Authentic Morning Routine Series",
              price: "8.2M Impressions",
              rating: 5,
              reviewCount: "450K",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803609852-mtzor47r.jpg",
              imageAlt: "Morning routine UGC content"
            },
            {
              id: "2",
              brand: "Tech",
              name: "Product Unboxing Collection",
              price: "6.5M Impressions",
              rating: 5,
              reviewCount: "380K",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803611183-edn6mxeg.jpg",
              imageAlt: "Tech product unboxing"
            },
            {
              id: "3",
              brand: "Fashion",
              name: "Try-On Haul Videos",
              price: "9.1M Impressions",
              rating: 5,
              reviewCount: "520K",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803609210-o6380e3i.jpg",
              imageAlt: "Fashion try-on content"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Partners Say"
          description="Hear from brands we've worked with about the impact of authentic UGC content."
          tag="Client Love"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Marketing Director",
              company: "Fashion Brand Co",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803611979-n3moixqv.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Marcus Thompson",
              role: "CMO",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803612726-830m8e1s.jpg",
              imageAlt: "Marcus Thompson"
            },
            {
              id: "3",
              name: "Jessica Williams",
              role: "Brand Manager",
              company: "Lifestyle Collective",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803613564-cirshz68.jpg",
              imageAlt: "Jessica Williams"
            },
            {
              id: "4",
              name: "David Rodriguez",
              role: "VP Marketing",
              company: "Premium Goods LLC",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803614381-9m4me9hi.jpg",
              imageAlt: "David Rodriguez"
            },
            {
              id: "5",
              name: "Emma Stone",
              role: "Creative Lead",
              company: "Digital Brands Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803628145-nyj0vupw.jpg",
              imageAlt: "Emma Stone"
            },
            {
              id: "6",
              name: "James Mitchell",
              role: "Director of Growth",
              company: "Startup Ventures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803628884-vwzotcih.jpg",
              imageAlt: "James Mitchell"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="clients" data-section="clients">
        <SocialProofTwo
          title="Trusted by Industry Leaders"
          description="We partner with the world's most innovative brands to create authentic content."
          tag="Our Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803674236-xhhene06.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803675053-8ttkkm2e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803675859-omyukn5f.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803676962-zoefjcmd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803677640-6noymig0.jpg"
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions About UGC"
          description="Learn more about how user-generated content can transform your marketing strategy."
          tag="FAQ"
          faqs={[
            {
              id: "1",
              title: "What exactly is UGC and how does it differ from influencer marketing?",
              content: "UGC is authentic content created by real users that features your product. Unlike influencer marketing where creators promote products to their followers, UGC content is typically licensed from creators and used across multiple platforms. It feels more genuine and relatable because it comes from real users rather than paid promoters."
            },
            {
              id: "2",
              title: "How long does it take to produce UGC content?",
              content: "Typically, a UGC project takes 2-4 weeks from concept to delivery. This includes strategy development, creator selection, production scheduling, filming, and post-production editing. Rush options are available for urgent campaigns at premium rates."
            },
            {
              id: "3",
              title: "How do you ensure the content aligns with my brand guidelines?",
              content: "We work closely with your team to understand your brand voice, values, and visual guidelines. Each project begins with a detailed briefing and strategy session. We provide creative direction to our creators and conduct quality reviews throughout production."
            },
            {
              id: "4",
              title: "Can I use UGC content on paid social media channels?",
              content: "Absolutely! That's one of the key advantages of UGC content. Since we create content without influencer restrictions, you can use it on all your owned channels, including paid advertising, organic posts, and even website content."
            },
            {
              id: "5",
              title: "What platforms do you create content for?",
              content: "We create content optimized for all major platforms: TikTok, Instagram Reels, YouTube Shorts, Facebook, LinkedIn, and Pinterest. Each piece is tailored to platform-specific best practices and audience preferences."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764803629818-3ibc6he7.jpg"
          imageAlt="Customer support team"
          mediaPosition="left"
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Create Authentic Content?"
          description="Let's discuss how UGC can transform your marketing strategy. Reach out today for a free consultation."
          inputPlaceholder="your@email.com"
          buttonText="Send Inquiry"
          termsText="We respect your privacy. We'll only use your email to discuss your project needs."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="CreativeUGC"
          copyrightText="© 2025 CreativeUGC. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "UGC Production", href: "#services" },
                { label: "Content Strategy", href: "#services" },
                { label: "Creator Network", href: "#portfolio" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#blog" },
                { label: "Careers", href: "#careers" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}