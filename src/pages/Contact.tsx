import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingShapes from "@/components/FloatingShapes";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyy8W0GiQDCwHrlWLVR34PTEnd8ASWEo2V_6JaS9_FMmKlJavG9XFezPkrX8_IGvyGZ/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    try {
      // Submit to Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We will respond within 24-48 hours.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingShapes />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with our editorial team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-1">
                    <a 
                      href="mailto:editor.jbpar@gmail.com" 
                      className="text-primary hover:underline"
                    >
                      editor.jbpar@gmail.com
                    </a>
                    <a 
                      href="mailto:editor@jbpar.org" 
                      className="text-primary hover:underline"
                    >
                      editor@jbpar.org
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+919039960573" 
                    className="text-primary hover:underline"
                  >
                    +91 90399 60573
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A88, Vaibhav Nagar<br />
                    Kanadia Road<br />
                    Indore, MP 452017<br />
                    India
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We typically respond within 24-48 hours during business days.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Editor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Editor-in-Chief</p>
                  <p className="text-sm text-muted-foreground mt-1">Journal of Business Practice and Academic Research</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    You can also send a message to us by submitting the below form.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input 
                        id="name" 
                        name="name"
                        required 
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        required
                        placeholder="Enter message subject"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        required
                        rows={6}
                        placeholder="Enter your message"
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Common Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">Submission Questions</h4>
                      <p className="text-sm text-muted-foreground">
                        For questions about manuscript submission, please refer to our{" "}
                        <a href="/guidelines" className="text-primary hover:underline">
                          Author Guidelines
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Review Process</h4>
                      <p className="text-sm text-muted-foreground">
                        Our peer review typically takes 4-6 weeks. You will be notified at each stage.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Publication Fees</h4>
                      <p className="text-sm text-muted-foreground">
                        JBPAR is an open-access journal. Fee information is provided upon manuscript acceptance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Contact;
