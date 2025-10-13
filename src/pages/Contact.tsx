import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
                  <a 
                    href="mailto:editor.jbpar@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    editor.jbpar@gmail.com
                  </a>
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
                  <p className="font-semibold">Dr. Bhawna Nigam</p>
                  <p className="text-sm text-muted-foreground mt-1">Editor-in-Chief</p>
                </CardContent>
              </Card>
            </div>

            {/* Google Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you shortly
                  </p>
                </CardHeader>
                <CardContent>
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd8xqRj9yVKQXZHJN5HvRxYB3MqNzKp4wL5eT6vU7xW9yA1zQ/viewform?embedded=true"
                    width="100%" 
                    height="1200"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg"
                  >
                    Loading form...
                  </iframe>
                  
                  {/* Note: The above iframe URL is a placeholder. For actual implementation, 
                      create a Google Form with the required fields and replace this URL */}
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> This form is connected to our response system. 
                      All submissions are automatically logged and you will receive a confirmation email. 
                      For urgent matters, please contact us directly via email or phone.
                    </p>
                  </div>
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
