import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose, // Import DialogClose for the X button
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react'; // Import X icon

interface FreeTrialModalProps {
  // We might not need props if triggered by DialogTrigger externally
  // isOpen: boolean;
  // onClose: () => void;
}

// Note: This component now expects to be rendered inside a <Dialog> component,
// and triggered by an external <DialogTrigger>.
const FreeTrialModal: React.FC<FreeTrialModalProps> = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic (e.g., API call)
    console.log('Form submitted with email:', email);
    // Optionally close the modal on submit
    // onClose(); // This would need onClose prop if not using DialogClose
  };

  return (
    <DialogContent className="bg-athena-navy-light border-athena-cream/10 text-athena-cream sm:max-w-[480px]">
      {/* Custom Close Button */}
      <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </DialogClose>

      <DialogHeader className="pt-6 text-center">
        <DialogTitle className="text-2xl sm:text-3xl font-semibold text-athena-cream">
          Start Your Free Trial
        </DialogTitle>
        <DialogDescription className="text-athena-cream/80 text-base sm:text-lg mt-2 px-4">
          Try out our elite assistants, completely free for 14 days. No credit card required.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="px-6 py-4 space-y-6">
        <div className="space-y-2">
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-athena-navy border-athena-cream/20 text-athena-cream focus:border-athena-green focus:ring-athena-green placeholder:text-athena-cream/50"
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full bg-athena-green hover:bg-athena-green/90 text-black font-semibold text-lg py-3"
          >
            Submit
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default FreeTrialModal; 