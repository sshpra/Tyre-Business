import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export interface Tyre {
  id: string;
  brand: string;
  model: string;
  size: string;
  type: string;
  price: number;
  season: string;
  speedRating: string;
  loadIndex: string;
  image: string;
}

interface TyreInquiryFormProps {
  tyre: Tyre;
  isOpen: boolean;
  onClose: () => void;
}

export function TyreInquiryForm({ tyre, isOpen, onClose }: TyreInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "4",
    vehicleModel: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiries = JSON.parse(sessionStorage.getItem("tyreInquiries") || "[]");
    const newInquiry = {
      ...formData,
      tyre: { brand: tyre.brand, model: tyre.model, size: tyre.size, price: tyre.price },
      timestamp: new Date().toISOString(),
    };
    inquiries.push(newInquiry);
    sessionStorage.setItem("tyreInquiries", JSON.stringify(inquiries));
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", phone: "", quantity: "4", vehicleModel: "", message: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Inquire About This Tyre</DialogTitle>
              <DialogDescription className="text-zinc-400">
                {tyre.brand} {tyre.model} - {tyre.size}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label htmlFor="email">Email *</Label>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white"
                    placeholder="+91-7005564025"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicleModel">Vehicle Model *</Label>
                <Input
                  id="vehicleModel"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800 border-zinc-700 text-white"
                  placeholder="e.g., Toyota Camry 2020"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Notes</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 text-white min-h-[100px]"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-zinc-400">Estimated Total</span>
                  <span className="text-2xl font-bold text-orange-500">
                    ${(tyre.price * parseInt(formData.quantity || "1")).toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-zinc-500">
                  Price is an estimate and may vary. Final quote will be provided after review.
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="bg-transparent border-zinc-700 text-white hover:bg-zinc-800"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/50"
                >
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <CheckCircle className="size-20 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Inquiry Submitted!</h3>
            <p className="text-zinc-400 text-center">
              Thank you for your interest. We'll contact you shortly with more details.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
