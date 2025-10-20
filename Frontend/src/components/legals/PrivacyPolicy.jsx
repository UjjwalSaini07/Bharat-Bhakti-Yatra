import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Lock,
  Eye,
  AlertCircle,
  Cookie,
  Bell,
  UserCheck,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: `
      <p>Welcome to <strong>Bharat Bhakti Yatra's Privacy Policy</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.</p>

      <p>By using <strong>Bharat Bhakti Yatra</strong>, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.</p>

      <p>This Privacy Policy applies to all users including:</p>
      <ul class="list-disc pl-6">
        <li>Those who browse the platform</li>
        <li>Registered users who book puja services</li>
        <li>Pandits who provide services</li>
        <li>Visitors to our blog</li>
      </ul>

      <p>We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
    `,
    },
    {
      id: 2,
      title: "Information We Collect",
      content: `
      <p>We collect several types of information from users of our services. When you register or book services, we collect personal details such as name, email, phone number, date of birth, address, birth details for kundli and astrological services, gotra and family details for puja sankalp, and payment information.</p>

      <p>When you access our platform, we automatically collect certain information including:</p>
      <ul class="list-disc pl-6">
        <li>IP address, browser type, device type, operating system</li>
        <li>Pages visited, time spent on pages, navigation patterns</li>
        <li>With your permission, location data to provide accurate muhurat calculations</li>
      </ul>

      <p>We also store your communications with us, including emails, chat messages, support inquiries, and feedback. If you connect social media accounts, we may receive basic profile information as permitted by your privacy settings. Transaction records and billing addresses are maintained, though complete card details are not stored and are handled by secure payment gateways.</p>
    `,
    },
    {
      id: 3,
      title: "How We Use Your Information",
      content: `
      <p>We use collected information to provide and improve our services. This includes:</p>
      <ul class="list-disc pl-6">
        <li>Processing puja bookings and connecting you with pandits</li>
        <li>Performing Sankalp with your details, sending confirmations and reminders</li>
        <li>Generating kundli reports and providing astrological guidance</li>
      </ul>

      <p>We create and manage your account, authenticate identity, process payments, maintain booking history, and provide customer support. We also send service notifications, booking updates, festival reminders, blog updates, and promotional offers with your consent.</p>

      <p>Additionally, we analyze usage data to improve platform functionality, fix problems, develop new features, and personalize recommendations. Your information is also used to detect fraud, protect user rights, enforce terms, comply with legal obligations, and resolve disputes.</p>
    `,
    },
    {
      id: 4,
      title: "Security of Your Information",
      content: `
      <p>We implement technical and organizational measures to protect your information. This includes SSL/TLS encryption, secure servers, firewalls, PCI-compliant payment gateways, and regular security assessments.</p>

      <p>Only authorized personnel access personal information. Employees are trained on security practices and have limited access based on their roles. Information is stored on secure servers with regular backups and encryption for sensitive data.</p>

      <p><strong>Card information is not stored</strong> on our servers. Payment processing is handled by PCI-compliant processors. While we implement security measures, you also play a role in protecting your information. Please use strong passwords, do not share credentials, log out from shared devices, and <strong>report suspicious activity to <a href="mailto:xyz@outlook.com" class="text-orange-600 font-bold hover:underline">
  xyz@outlook.com
</a></strong>.</p>
    `,
    },
    {
      id: 5,
      title: "Cookies",
      content: `
      <p>We use cookies and tracking technologies to enhance your experience. Cookies are small text files stored on your device that help us recognize you and remember preferences.</p>

      <p>Types of cookies we use include:</p>
      <ul class="list-disc pl-6">
        <li><strong>Essential cookies:</strong> for platform functionality</li>
        <li><strong>Performance cookies:</strong> to understand visitor interaction</li>
        <li><strong>Functional cookies:</strong> to remember preferences</li>
        <li><strong>Marketing cookies:</strong> for relevant advertisements</li>
      </ul>

      <p>You can control cookies through browser settings, though disabling essential cookies may affect functionality. Some cookies come from third-party services like analytics providers and payment processors.</p>
    `,
    },
    {
      id: 6,
      title: "Changes to This Privacy Policy",
      content: `
      <p>We may modify this Privacy Policy to reflect changes in practices, technology, or legal requirements. We notify you of material changes via email, platform notices, or account dashboard. The "Last Updated" date indicates when changes were made.</p>

      <p>We encourage you to review this policy periodically. Continued use after changes constitutes acceptance. For significant changes, we provide at least 30 days' notice before they take effect. If you disagree with changes, you may close your account.</p>
    `,
    },
    {
      id: 7,
      title: "Contact Us",
      content: `
      <p>For questions or concerns regarding this Privacy Policy, contact us at <strong><a href="mailto:xyz@outlook.com" class="text-orange-600 font-bold hover:underline">
  xyz@outlook.com
</a></strong> for privacy inquiries, data requests, and concerns. You can reach us by phone at <strong><a href="tel:+9199999999" class="text-orange-600 font-bold hover:underline">
  +91 9999999999
</a>
</strong> for urgent privacy matters.</p>

      <p>Our postal address is:</p>
      <p><strong>Bharat Bhakti Yatra<br>
      123 Temple Road, Connaught Place<br>
      New Delhi, Delhi 110001, India</strong></p>

      <p>We respond to privacy inquiries within <strong>7 business days</strong>. We may verify your identity before processing requests to protect your privacy.</p>
    `,
    },
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className=" relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-600 to-orange-600 py-20">
        <div className="absolute inset-0 opacity-90">
          <img
            src="/assets/hinduism/PrivacyPolicy/image.png"
            alt="Temple Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-amber-600/30 to-orange-700/50"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Lock className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Privacy Policy
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and
            protect your personal information.
          </p>

          <div className="mt-8 flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white border border-white/20">
              <AlertCircle className="w-4 h-4" />
              <span>Last Updated: October 17, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Important Notice */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Your Privacy Matters
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At Bharat Bhakti Yatra, we are committed to protecting your
                privacy and ensuring the security of your personal information.
                This policy explains how we handle your data with the utmost
                care and respect, especially when dealing with sensitive
                spiritual and personal matters.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-orange-100 transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-orange-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {section.id}
                  </span>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-6 h-6 text-orange-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedSection === section.id && (
                <div className="px-6 pb-6">
                  <div className="pl-14 pr-4">
                    <div className="prose prose-lg max-w-none">
                      {section.content.split("\n\n").map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-gray-700 leading-relaxed mb-4"
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        ></p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Privacy Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-amber-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-full opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500"></div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Secure & Protected
            </h3>
            <p className="text-gray-600 text-sm">
              Your data is encrypted and stored securely with industry-standard
              protection measures.
            </p>
          </div>

          <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-amber-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-full opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500"></div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <UserCheck className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Manage Your Data
            </h3>
            <p className="text-gray-600 text-sm">
              Access, update, or delete your personal information anytime
              through your account settings.
            </p>
          </div>

          <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-amber-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-full opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500"></div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Transparent Updates
            </h3>
            <p className="text-gray-600 text-sm">
              We'll notify you of any changes to our privacy practices and
              respect your choices.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Questions About Your Privacy?
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Our privacy team is here to address your concerns and help you
            understand how we protect your information.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg">
            Contact Privacy Team
          </button>
        </div>

        {/* Agreement Confirmation */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            By using Bharat Bhakti Yatra, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
