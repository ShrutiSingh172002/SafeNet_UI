// src/pages/ServiceDetail.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

import windowsImg from '../assets/windows_antivirus.jpeg';
import macImg from '../assets/mac_antivirus.jpg';
import androidImg from '../assets/android_security.jpeg';
import iosImg from '../assets/ios_protection.jpg';
import enterpriseImg from '../assets/enterprise_security.jpeg';
import webImg from '../assets/web_protection.png';
import vpnImg from '../assets/vpn_firewall.jpg';
import emailImg from '../assets/email_protection.jpg';

const serviceDetails = {
  1: {
    title: "Windows Antivirus",
    description:
      "Secure your enterprise with industry-leading protection. Safeguard your systems against viruses, ransomware, spyware, and phishing, with AI-driven real-time scanning and advanced threat intelligence.",
    features: [
      "AI-powered threat detection",
      "Zero-day attack protection",
      "Seamless integration with enterprise systems",
      "Centralized control with detailed threat reports",
      "24/7 Priority Support with SLA Guarantee"
    ],
    pricing: "$9/year",
    contact: {
      phone: "+1 (877) 593-3790",
      email: "safenetcare@gmail.com",
    },
    image: windowsImg,
  },
  2: {
    title: "Mac Antivirus",
    description:
      "Advanced protection tailored for macOS. Defend against malware, phishing, and spyware with cutting-edge detection designed specifically for Mac users.",
    features: [
      "Advanced macOS threat detection",
      "Privacy and phishing protection",
      "Lightweight, seamless performance",
      "Real-time scanning for zero interruptions",
      "Expert macOS security support"
    ],
    pricing: "$14/year",
    contact: {
      phone: "+1 (877) 593-3790",
      email: "safenetcare@gmail.com",
    },
    image: macImg,
  },
  3: {
    title: "Android Security",
    description:
      "Protect your Android devices from mobile threats like malicious apps, adware, and unsafe downloads.",
    features: [
      "Real-time malicious app detection",
      "Adware and unsafe link blocking",
      "App permissions monitoring",
      "Mobile anti-phishing for safe browsing",
      "Privacy guard to secure sensitive data"
    ],
    pricing: "$8/year",
    contact: {
      phone: "+1 (877) 593-3790",
      email: "safenetcare@gmail.com",
    },
    image: androidImg,
  },
  4: {
    title: "iOS Protection",
    description:
      "Enjoy secure browsing and online privacy for your iPhone or iPad. Block phishing sites, safeguard sensitive info, and browse with confidence.",
    features: [
      "Phishing website blocker",
      "Identity & data protection tools",
      "Lightweight, battery-optimized security",
      "Instant threat alerts",
      "iOS-dedicated customer support"
    ],
    pricing: "$10/year",
    contact: {
      phone: "+1 (877) 593-3790",
      email: "safenetcare@gmail.com",
    },
    image: iosImg,
  },
  5: {
    title: "Enterprise Security",
    description:
      "Enterprise-grade cybersecurity designed for businesses. Multi-layered defense with endpoint protection and centralized security management.",
    features: [
      "Advanced AI-driven threat intelligence",
      "Endpoint and server protection",
      "Detailed compliance & security reports",
      "Easy deployment across the organization",
      "24/7 Enterprise SLA Support & Dedicated Managers"
    ],
    pricing: "Custom Packages | Dedicated IT Support",
    contact: {
      phone: "+1 (877) 593-3790",
      email: "safenetcare@gmail.com",
    },
    image: enterpriseImg,
  },
  6: {
    title: "Web Protection",
    description:
      "Browse the internet with confidence by blocking malicious websites, phishing links, and deceptive downloads.",
    features: [
      "AI-powered malicious site blocking",
      "Phishing protection in real-time",
      "Protection for online transactions & data",
      "Works silently without slowing down browsing",
      "Compatible with all major browsers"
    ],
    pricing: "$6/year",
    contact: {
      phone: "+1 (877) 593-3790",
      email: "safenetcare@gmail.com",
    },
    image: webImg,
  },
  7: {
    title: "Firewall & VPN",
    description:
      "Enjoy complete online privacy and anonymity with our powerful firewall combined with secure VPN access.",
    features: [
      "Military-grade encryption",
      "High-speed, unlimited VPN bandwidth",
      "Protection against hackers & surveillance",
      "Secure access to geo-blocked content",
      "VPN Servers in 40+ Countries"
    ],
    pricing: "$18/year",
    contact: {
      phone: "+1 (877) 593-3790",
      email: "safenetcare@gmail.com",
    },
    image: vpnImg,
  },
  8: {
    title: "Email Protection",
    description:
      "Protect your inbox from phishing attacks, malware-laden attachments, and spam.",
    features: [
      "Spam, malware & phishing protection",
      "Real-time attachment scanning",
      "Safeguard personal and business accounts",
      "Intelligent filters for better inbox organization",
      "Protects against Business Email Compromise (BEC)"
    ],
    pricing: "$7/year",
    contact: {
      phone: "+1 (877) 593-3790",
      email: "safenetcare@gmail.com",
    },
    image: emailImg,
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  // 👇 Add scroll to top when `id` changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <div className="service-detail not-found">Service not found.</div>;

  return (
    <div className="service-detail">
      <h2 className="heading-blue">{service.title}</h2>
      <img src={service.image} alt={service.title} className="service-image" />
      <p className="description">{service.description}</p>

      <ul className="feature-list">
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="price-purchase">
        <span className="pricing-tag">{service.pricing}</span>
        <button className="purchase-btn">Purchase Now</button>
      </div>

      <div className="contact-info">
        <p>{service.contact.phone}</p>
        <p>{service.contact.email}</p>
      </div>

      {/* Other Services Section */}
      <div className="other-services">
        <h3>Other Services</h3>
        <ul>
          {Object.entries(serviceDetails)
            .filter(([key]) => key !== id)
            .map(([key, s]) => (
              <li key={key}>
                <Link to={`/services/${key}`}>{s.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetail;
