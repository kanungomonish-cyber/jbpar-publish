import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingShapes from "@/components/FloatingShapes";

const Submit = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Submission Received",
        description: "Your manuscript has been successfully submitted. You will receive a confirmation email shortly.",
      });
    }, 2000);
  };

  const categories = [
    "Strategy, Leadership & Innovation",
    "Marketing, Consumer Behavior & International Business",
    "Human Capital, Organizational Behavior & Ethics",
    "Finance, Governance & Sustainability",
    "Technology, AI & Business Transformation"
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingShapes />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Upload className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Your Manuscript</h1>
            <p className="text-xl opacity-90">
              Join our community of researchers and practitioners
            </p>
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Submission Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Prepare", desc: "Format your manuscript according to guidelines" },
                { step: "2", title: "Submit", desc: "Fill out the form and upload your files" },
                { step: "3", title: "Review", desc: "Double-blind peer review (4-6 weeks)" },
                { step: "4", title: "Publish", desc: "Accepted papers published online" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Manuscript Submission Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Author Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Author Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="affiliation">Institution/Affiliation *</Label>
                      <Input id="affiliation" required />
                    </div>

                    <div>
                      <Label htmlFor="orcid">ORCID iD (Optional)</Label>
                      <Input id="orcid" placeholder="0000-0000-0000-0000" />
                    </div>
                  </div>

                  {/* Manuscript Details */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Manuscript Details
                    </h3>

                    <div>
                      <Label htmlFor="title">Article Title *</Label>
                      <Input id="title" required />
                    </div>

                    <div>
                      <Label htmlFor="category">Research Category *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat, index) => (
                            <SelectItem key={index} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="abstract">Abstract (150-250 words) *</Label>
                      <Textarea 
                        id="abstract" 
                        rows={6} 
                        required
                        placeholder="Provide a concise summary of your research"
                      />
                    </div>

                    <div>
                      <Label htmlFor="keywords">Keywords (4-6 keywords, comma-separated) *</Label>
                      <Input 
                        id="keywords" 
                        required
                        placeholder="e.g., innovation, leadership, digital transformation"
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Upload className="h-5 w-5 text-primary" />
                      File Upload
                    </h3>

                    <div>
                      <Label htmlFor="manuscript">Manuscript File (Word document) *</Label>
                      <Input id="manuscript" type="file" accept=".doc,.docx" required />
                      <p className="text-sm text-muted-foreground mt-1">
                        Maximum file size: 10MB
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="figures">Figures/Tables (Optional)</Label>
                      <Input id="figures" type="file" multiple />
                    </div>

                    <div>
                      <Label htmlFor="supplementary">Supplementary Materials (Optional)</Label>
                      <Input id="supplementary" type="file" multiple />
                    </div>
                  </div>

                  {/* Declarations */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-semibold">Declarations</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Checkbox id="originality" required />
                        <Label htmlFor="originality" className="text-sm leading-relaxed cursor-pointer">
                          I confirm that this manuscript is original work and has not been published 
                          elsewhere, nor is it under consideration for publication in another journal.
                        </Label>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox id="ethics" required />
                        <Label htmlFor="ethics" className="text-sm leading-relaxed cursor-pointer">
                          I confirm that all ethical guidelines have been followed and necessary 
                          approvals obtained for this research.
                        </Label>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox id="conflict" required />
                        <Label htmlFor="conflict" className="text-sm leading-relaxed cursor-pointer">
                          I declare any conflicts of interest or state that there are none.
                        </Label>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox id="copyright" required />
                        <Label htmlFor="copyright" className="text-sm leading-relaxed cursor-pointer">
                          I agree to transfer copyright to JBPAR upon acceptance, under Creative 
                          Commons Attribution (CC BY) license.
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing Submission...</>
                      ) : (
                        <>
                          <CheckCircle2 className="mr-2 h-5 w-5" />
                          Submit Manuscript
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="mt-8 border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Before You Submit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ensure your manuscript follows the <a href="/guidelines" className="text-primary hover:underline">author guidelines</a></li>
                  <li>• Check that similarity index is below 15%</li>
                  <li>• Verify all author information is complete and accurate</li>
                  <li>• Review the peer review process and publication timeline</li>
                  <li>• You will receive an automated confirmation email upon submission</li>
                  <li>• Editorial team will respond within 48-72 hours</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Submit;
