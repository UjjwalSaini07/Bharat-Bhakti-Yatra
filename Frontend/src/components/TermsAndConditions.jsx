import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  FileText,
  Scale,
  AlertCircle,
} from "lucide-react";

const TermsAndConditions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
  {
    id: 1,
    title: 'Introduction',
    content: `<p>Welcome to <strong>Bharat Bhakti Yatra</strong>! By using our platform, you agree to these Terms and Conditions. Please read them carefully.</p>

<p>We provide Vedic puja booking services connecting devotees with verified pandits for authentic spiritual ceremonies. By accessing our services, you acknowledge that you have read and agreed to be bound by these Terms and our <strong>Privacy Policy</strong>. We reserve the right to modify these terms, and continued use constitutes acceptance of changes.</p>`
  },
  {
    id: 2,
    title: 'Use of Services',
    content: `<p>You must be at least 18 years old to use our services. By using Bharat Bhakti Yatra, you represent that you meet this requirement and have legal capacity to enter these Terms.</p>

<p><strong>Permitted Uses:</strong> Browse puja services, book ceremonies, communicate with pandits, make payments, and access spiritual resources for lawful purposes only.</p>

<p><strong>Prohibited Activities:</strong> Illegal activities, impersonation, harmful code, unauthorized system access, data harvesting, platform interference, or any violation of applicable laws.</p>

<p><strong>Booking & Payments:</strong> Bookings are subject to availability and confirmation. Payments must be made through our secure gateway. Confirmed bookings lock in the agreed price.</p>

<p><strong>Cancellation Policy:</strong></p>
<ul style="list-style: disc; padding-left: 20px;">
  <li>48+ hours before: Full refund</li>
  <li>24-48 hours before: 50% refund</li>
  <li>Less than 24 hours: Non-refundable (unless pandit unavailable)</li>
</ul>`
  },
  {
    id: 3,
    title: 'User Accounts',
    content: `<p>You must create an account to access certain features. You are responsible for maintaining confidentiality of your credentials and all account activities.</p>

<p><strong>Registration:</strong> Provide accurate, current information. Update promptly if changes occur. Do not use another person's account.</p>

<p><strong>Security:</strong> You are solely responsible for safeguarding your password. Notify us immediately of any unauthorized access. We recommend strong passwords and two-factor authentication.</p>

<p><strong>Termination:</strong> We reserve the right to suspend or terminate your account for violating these Terms, fraudulent activity, or to protect our platform. You may also terminate anytime by contacting support.</p>

<p><strong>Account Data:</strong> Your account stores booking history, payment information, preferences, and communications. You can access, modify, or delete your data per our <strong>Privacy Policy</strong>.</p>`
  },
  {
    id: 4,
    title: 'Intellectual Property',
    content: `<p>All platform content—text, graphics, logos, audio, video, data, and software—is our property or supplied by our licensors, protected by Indian and international copyright and trademark laws.</p>

<p><strong>Trademarks:</strong> Bharat Bhakti Yatra and our logos are protected marks. Do not use without written permission. Other marks are the property of their respective owners.</p>

<p><strong>User Content:</strong> When you submit reviews, comments, or photos, you grant us a non-exclusive, worldwide, royalty-free license to use and display such content. You retain ownership and can delete anytime.</p>

<p><strong>Restrictions:</strong> Do not copy, reproduce, distribute, modify, or create derivatives from our content without permission. No reverse engineering or decompiling of our software.</p>

<p><strong>Copyright Infringement:</strong> We respect intellectual property rights. Report alleged infringement with detailed information to our support team.</p>`
  },
  {
    id: 5,
    title: 'Limitation of Liability',
    content: `<p>To the fullest extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or goodwill.</p>

<p><strong>Service Availability:</strong> We strive for high availability but do not guarantee uninterrupted service. Unavailability due to maintenance or circumstances beyond our control is not our liability.</p>

<p><strong>Spiritual Outcomes:</strong> While pandits perform authentic Vedic rituals with expertise, we make no guarantees about specific spiritual outcomes. Results depend on faith, karma, and individual factors.</p>

<p><strong>Third-Party Links:</strong> We are not responsible for third-party websites, content, or services linked from our platform. Use at your own risk.</p>

<p><strong>Maximum Liability:</strong> Our total liability does not exceed amounts you paid us in the six months before the claim, or ₹10,000, whichever is less. You indemnify us from claims arising from your use or Terms violations.</p>`
  },
  {
    id: 6,
    title: 'Termination',
    content: `<p>We reserve the right to suspend or terminate your access anytime, with or without cause or notice. Upon termination, your service rights immediately cease.</p>

<p><strong>Grounds for Termination:</strong> Violation of Terms, fraudulent or illegal activities, abuse of pandits or staff, repeated unjustified cancellations, or legal requirements.</p>

<p><strong>Effect of Termination:</strong> Surviving provisions include ownership, disclaimers, indemnity, and liability limitations. Your booking history and payment information may be retained per legal requirements.</p>

<p><strong>User-Initiated Termination:</strong> Contact support to terminate your account. We deactivate accounts within 48 hours. Note: Termination does not automatically cancel pending bookings.</p>

<p><strong>Post-Termination:</strong> Cease all service use and delete obtained materials. Outstanding payment obligations remain. We may retain information for legal or regulatory purposes.</p>`
  },
  {
    id: 7, 
    title: 'Pandit Services & Quality',
    content: `<p>All pandits are carefully verified for knowledge, experience, and adherence to traditional Vedic practices. We act as a platform and are not directly responsible for ceremony conduct.</p>

<p><strong>Verification:</strong> Pandits undergo thorough background checks, qualification validation, reference checks, and ongoing performance monitoring based on user feedback.</p>

<p><strong>Quality Standards:</strong> Pandits must follow authentic Vedic procedures, use proper Sanskrit, employ traditional materials, and maintain professional conduct.</p>

<p><strong>User Feedback & Disputes:</strong> We encourage honest reviews to maintain quality and assist users. We investigate serious complaints and mediate disputes between users and pandits.</p>

<p><strong>Performance Management:</strong> We regularly review pandit performance. Those with consistently poor ratings or standard violations may be removed from our platform.</p>`
  },
  {
    id: 8, 
    title: 'Governing Law & Dispute Resolution',
    content: `<p>These Terms are governed by Indian law. Any disputes are subject to the exclusive jurisdiction of Mumbai, Maharashtra courts.</p>

<p><strong>Dispute Resolution Process:</strong> Contact customer support first for amicable resolution. If unsuccessful, parties agree to attempt mediation before litigation.</p>

<p><strong>Arbitration:</strong> Disputes not resolved through support or mediation may proceed to binding arbitration under the Arbitration and Conciliation Act, 1996, conducted in Mumbai in English.</p>

<p><strong>Class Action Waiver:</strong> All proceedings are individual, not class actions or consolidated proceedings.</p>

<p><strong>Time Limitation:</strong> Any claim must be filed within one year of arising, or it is forever barred.</p>`
  },
  {
    id: 9,
    title: 'Amendments & Updates',
    content: `<p>We reserve the right to modify these Terms anytime. Changes are effective immediately upon posting unless otherwise stated.</p>

<p><strong>Notification:</strong> Material changes are communicated via email, platform notifications, or prominent notices. Continued use constitutes acceptance.</p>

<p><strong>Your Responsibility:</strong> Review these Terms periodically for updates. Disagreement with modifications means you should discontinue use and close your account.</p>

<p><strong>Record Keeping:</strong> Previous versions are archived and available upon request for transparency and compliance.</p>`
  },
];



  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-600 to-orange-600 py-20">
        <div className="absolute inset-0 opacity-70">
          <img
            src="/assets/hinduism/TermsAndCondition/image2.jpg"
            alt="Temple Background"
            className="w-full h-full object-cover object-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-amber-600/30 to-orange-700/50"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Scale className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Terms And Conditions
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our spiritual
            services platform
          </p>

          <div className="mt-8 flex justify-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white border border-white/20">
              <AlertCircle className="w-4 h-4" />
              <span>Last Updated: October 17, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Important Notice */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Bharat Bhakti Yatra's services, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms and Conditions. If you do not agree with
                any part of these terms, please do not use our services.
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

        {/* Footer Notice */}
        <div className="mt-12 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Shield className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Questions About Our Terms?
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            If you have any questions or concerns about these Terms and
            Conditions, our support team is here to help you.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </div>

        {/* Agreement Confirmation */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            By continuing to use Bharat Bhakti Yatra, you acknowledge that you
            have read and agree to these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
