import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const googleMapsUrl = "https://maps.google.com/?q=25.913816,93.724701";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store contact inquiry in session storage
    const contacts = JSON.parse(sessionStorage.getItem('contactInquiries') || '[]');
    const newContact = {
      ...formData,
      timestamp: new Date().toISOString(),
    };
    contacts.push(newContact);
    sessionStorage.setItem('contactInquiries', JSON.stringify(contacts));

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91-9612154551",
      subdetails: "Mon-Fri 8am-6pm, Sat 9am-4pm",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@tyremax.com",
      subdetails: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "I Vikheshe Sumi Road, Dimapur",
      subdetails: "Nagaland - 797112",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-zinc-700 text-center hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-4">
                  <Icon className="size-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-white font-medium mb-1">{info.details}</p>
                <p className="text-zinc-400 text-sm">{info.subdetails}</p>
              </div>
            );
          })}
        </div>

        {/* Payment / Bank Details */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                <CreditCard className="size-6" />
              </div>
              <h2 className="text-2xl font-bold">Bank Details</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                <span className="text-zinc-400">Account Name</span>
                <span className="font-semibold">New Gold Star Tyres</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                <span className="text-zinc-400">Account Number</span>
                <span className="font-semibold font-mono">5496119027</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-zinc-400">IFSC Code</span>
                <span className="font-semibold font-mono">CBIN0282589</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700 p-8 md:p-12">
            {!isSubmitted ? (
              <>
                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-zinc-400 mb-8">
                  Fill out the form below and we'll get back to you shortly
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="+91-9612154551"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white min-h-[150px]"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full md:w-auto px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 text-lg"
                  >
                    <Send className="mr-2 size-5" />
                    Send Message
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="size-24 text-green-500 mb-6 animate-bounce" />
                <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                <p className="text-zinc-400 text-center text-lg">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700 p-4">
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold mb-2">Visit Our Store</h3>
              <p className="text-zinc-400">
                I Vikheshe Sumi Road, Dimapur, Nagaland - 797112
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-zinc-700 h-96">
              <iframe
                title="Store Location Map"
                src="https://maps.google.com/maps?q=25.913816,93.724701&z=15&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
