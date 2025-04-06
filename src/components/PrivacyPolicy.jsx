import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. What information do we collect?",
    content:
      "The kind of Personal Information that we collect from you will depend on how you use the website. The Personal Information which we collect and hold about you may include:\nemail address\nname\nphone number\naddress"
  },
  {
    title: "2. Types of information",
    content:
      "The Privacy Act 1998 (Cth) (Privacy Act) defines types of information, including Personal Information and Sensitive Information.\nPersonal Information means information or an opinion about an identified individual or an individual who is reasonably identifiable:\n(a) whether the information or opinion is true or not; and\n(b) whether the information or opinion is recorded in a material form or not.\n\nIf the information does not disclose your identity or enable your identity to be ascertained, it will in most cases not be classified as \"Personal Information\" and will not be subject to this privacy policy.\n\nSensitive Information is defined in the Privacy Act as including information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.\n\nSensitive Information will be used by us only:\n(a) for the primary purpose for which it was obtained;\n(b) for a secondary purpose that is directly related to the primary purpose; and\n(c) with your consent or where required or authorised by law."
  },
  {
    title: "3. How we collect your Personal Information",
    content:
      "(a) We may collect Personal Information from you whenever you input such information into the Website, related app or provide it to Us in any other way.\n(b) We may also collect cookies from your computer which enable us to tell when you use the Website and also to help customise your Website experience. As a general rule, however, it is not possible to identify you personally from our use of cookies.\n(c) We generally don’t collect Sensitive Information, but when we do, we will comply with the preceding paragraph.\n(d) Where reasonable and practicable we collect your Personal Information from you only. However, sometimes we may be given information from a third party, in cases like this we will take steps to make you aware of the information that was provided by a third party."
  },
  {
    title: "4. Purpose of collection",
    content:
      "(a) We collect Personal Information to provide you with the best service experience possible on the Website and keep in touch with you about developments in our business.\n(b) We customarily only disclose Personal Information to our service providers who assist us in operating the Website. Your Personal Information may also be exposed from time to time to maintenance and support personnel acting in the normal course of their duties.\n(c) By using our Website, you consent to the receipt of direct marketing material. We will only use your Personal Information for this purpose if we have collected such information direct from you, and if it is material of a type which you would reasonably expect to receive from use. We do not use sensitive Personal Information in direct marketing activity. Our direct marketing material will include a simple means by which you can request not to receive further communications of this nature, such as an unsubscribe button link."
  },
  {
    title: "5. Security, Access and correction",
    content:
      "(a) We store your Personal Information in a way that reasonably protects it from unauthorised access, misuse, modification or disclosure. When we no longer require your Personal Information for the purpose for which we obtained in, we will take reasonable steps to destroy and anonymise or de-identify it. Most of the Personal Information that is stored in our client files and records will be kept for a maximum of 7 years to fulfill our record keeping obligations.\n(b) The Australian Privacy Principles:\n(i) permit you to obtain access to the Personal Information we hold about you in certain circumstances (Australian Privacy Principle 12); and\n(ii) allow you to correct inaccurate Personal Information subject to certain exceptions (Australian Privacy Principle 13).\n(c) Where you would like to obtain such access, please contact us in writing on the contact details set out at the bottom of this privacy policy."
  },
  {
    title: "6. Complaint procedure",
    content:
      "If you have a complaint concerning the manner in which we maintain the privacy of your Personal Information, please contact us as on the contact details set out at the bottom of this policy. All complaints will be considered by Suman Kharel and we may seek further information from you to clarify your concerns. If we agree that your complaint is well founded, we will, in consultation with you, take appropriate steps to rectify the problem. If you remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian Information Commissioner."
  },
  {
    title: "7. Overseas transfer",
    content:
      "Your Personal Information will not be disclosed to recipients outside Australia unless you expressly request us to do so. If you request us to transfer your Personal Information to an overseas recipient, the overseas recipient will not be required to comply with the Australian Privacy Principles and we will not be liable for any mishandling of your information in such circumstances."
  },
  {
    title: "8. How to contact us about privacy",
    content:
      "If you have any queries, or if you seek access to your Personal Information, or if you have a complaint about our privacy practices, you can contact us through: admin@ohmbiomedical.com.au."
  }
];

const fixedDate = "April 6, 2025";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-justify">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center text-[#130f32] mb-2"
      >
        Website Privacy Policy
      </motion.h1>

      <p className="text-center text-sm text-gray-600 mb-10">
        Last Updated: {fixedDate}
      </p>

      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-[#130f32] mb-2">
            {section.title}
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {section.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
