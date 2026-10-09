import React, { useState, type FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { schoolData } from '../data/schoolData';
import { SectionHeader } from '../components/SectionHeader';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    classInterested: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    const { name, parentName, phone, email, studentName, classInterested, message } = formData;

    // Validate required fields
    if (!name.trim() || !phone.trim() || !studentName.trim() || !classInterested) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all mandatory fields (Your Name, Phone Number, Student Name, and Class Interested In).',
      });
      setIsSubmitting(false);
      return;
    }

    // Phone validation
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    if (cleanPhone.length < 10) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid 10-digit mobile phone number.',
      });
      setIsSubmitting(false);
      return;
    }

    // Prepare mailto payload
    const subject = encodeURIComponent(
      `Admission Enquiry: ${classInterested} - Student: ${studentName}`
    );
    const body = encodeURIComponent(
      `Sri Vivekananda School Admission Enquiry\n` +
      `==========================================\n` +
      `Contact Person: ${name}\n` +
      `Parent/Guardian Name: ${parentName || 'Same as contact'}\n` +
      `Student Name: ${studentName}\n` +
      `Class Interested In: ${classInterested}\n` +
      `Phone Number: ${phone}\n` +
      `Email Address: ${email || 'Not provided'}\n\n` +
      `Message / Queries:\n${message || 'Please share admission details and fee structure for the 2026-2027 academic year.'}\n`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message:
          'Opening your email application to send this enquiry directly to the school administration (vivekanandaspt@gmail.com). You can also call us directly at +91 99656 36999 or +91 95970 61909.',
      });
      window.location.href = `mailto:${schoolData.emails.official}?subject=${subject}&body=${body}`;
    }, 400);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          badge="Get In Touch"
          title="CONTACT OUR SCHOOL"
          subtitle="We Welcome Your Enquiries & Campus Visits"
          description="Have questions about admissions, academic programs, bus routes, or curriculum? Reach out to our school office via phone, email, WhatsApp, or through the enquiry form below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus Address Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Campus Address
                  </h3>
                  <p className="text-sm font-bold text-blue-700 mt-0.5">
                    {schoolData.schoolName}
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {schoolData.address.street}, {schoolData.address.village} – {schoolData.address.pincode}
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Direct Call Numbers */}
              <div className="pt-4 border-t border-slate-200/70 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Phone size={14} className="text-amber-500" />
                  <span>Official Phone Numbers</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {schoolData.phoneNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-700 font-bold text-xs text-slate-800 transition-all group"
                      title={`Call ${phone}`}
                    >
                      <span>{phone}</span>
                      <Phone size={12} className="text-slate-400 group-hover:text-blue-600" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Email Addresses */}
              <div className="pt-4 border-t border-slate-200/70 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Mail size={14} className="text-blue-600" />
                  <span>Official Email</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <a
                    href={`mailto:${schoolData.emails.official}`}
                    className="text-xs font-bold text-blue-700 hover:underline break-all block"
                  >
                    {schoolData.emails.official}
                  </a>
                  <p className="text-[10px] text-slate-400 mt-1 leading-snug">
                    {schoolData.emails.note}
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${schoolData.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Sri Vivekananda School, I would like to enquire about admissions for 2026–2027.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp ({schoolData.primaryPhone})</span>
                </a>
              </div>
            </div>

            {/* Google Maps / Location Confirmation Placeholder */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-400">
                <MapPin size={20} />
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  Location & Directions
                </h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Sri Vivekananda School is situated in SKR Nagar along the Singarapettai main approach road,
                providing easy access from Singarapettai bus stop and surrounding localities.
              </p>

              {/* Roadside Building Photo Reference */}
              <div className="rounded-xl overflow-hidden border border-slate-700/80 my-2">
                <img
                  src="/images/campus/school-building-roadside.jpeg"
                  alt="Sri Vivekananda School building roadside approach"
                  className="w-full h-36 object-cover"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-[11px] text-slate-400 flex items-start gap-2">
                <AlertCircle size={14} className="text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Map Coordinates: Interactive GPS pin will be updated upon official GIS coordinates confirmation.
                  Follow signs to SKR Nagar, Singarapettai – 635 307.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Admission & Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-lg">
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
                  <Send size={12} className="text-blue-700" />
                  <span>Online Admission Enquiry</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Send an Admission Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fill in the details below. Our admissions coordinator will get in touch with you shortly.
                </p>
              </div>

              {formStatus.message && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-xs flex items-start gap-2.5 ${
                    formStatus.type === 'success'
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'bg-red-50 text-red-900 border border-red-200'
                  }`}
                  role="alert"
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="text-red-600 mt-0.5 shrink-0" />
                  )}
                  <p>{formStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. R. Kumar"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>

                  {/* Parent / Guardian Name */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Father / Mother Name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 99656 36999"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Student Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Child's Full Name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>

                  {/* Class Interested In */}
                  <div>
                    <label
                      htmlFor="classInterested"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Class Interested In <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="classInterested"
                      name="classInterested"
                      value={formData.classInterested}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-2xs"
                    >
                      <option value="">Select a Grade / Standard</option>
                      <option value="Pre-KG">Pre-KG (2.5 – 3.5 yrs)</option>
                      <option value="LKG">LKG (3.5 – 4.5 yrs)</option>
                      <option value="UKG">UKG (4.5 – 5.5 yrs)</option>
                      <option value="Standard I">Standard I (5.5 – 6.5 yrs)</option>
                      <option value="Standard II">Standard II</option>
                      <option value="Standard III">Standard III</option>
                      <option value="Standard IV">Standard IV</option>
                      <option value="Standard V">Standard V</option>
                      <option value="Standard VI">Standard VI (Class 6)</option>
                      <option value="Standard VII">Standard VII (Class 7)</option>
                      <option value="Standard VIII">Standard VIII (Class 8)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Message / Enquiries
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ask about school bus facilities, admission procedures, or schedule a campus visit..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-2xs"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing Enquiry...' : 'SUBMIT ADMISSION ENQUIRY'}
                </button>

                <p className="text-[11px] text-slate-500 text-center pt-2">
                  🔒 We respect your privacy. Enquiry information is transmitted securely and never shared publicly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
