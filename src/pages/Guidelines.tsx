import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingShapes from "@/components/FloatingShapes";

const Guidelines = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingShapes />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Author Guidelines</h1>
            <p className="text-xl opacity-90">
              Manuscript Preparation and Submission Requirements
            </p>
          </div>
        </div>
      </section>

      {/* Guidelines Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Manuscript Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Original Research Articles</h4>
                  <p className="text-muted-foreground">Word limit: 6,000-8,000 words (including references)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Case Studies</h4>
                  <p className="text-muted-foreground">Word limit: 4,000-6,000 words</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Review Articles</h4>
                  <p className="text-muted-foreground">Word limit: 5,000-7,000 words</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Conceptual Papers</h4>
                  <p className="text-muted-foreground">Word limit: 4,000-6,000 words</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Formatting Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>File format: Microsoft Word (.doc or .docx)</li>
                  <li>Font: Times New Roman, 12-point</li>
                  <li>Line spacing: Double-spaced throughout</li>
                  <li>Margins: 1 inch (2.54 cm) on all sides</li>
                  <li>Page numbers: Bottom center, starting from title page</li>
                  <li>Language: English (US or UK, but consistent throughout)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manuscript Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Title Page</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Article title (concise and informative)</li>
                    <li>Author names and affiliations</li>
                    <li>Corresponding author email</li>
                    <li>ORCID iD (recommended)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Abstract</h4>
                  <p className="text-muted-foreground">150-250 words, structured or unstructured</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Keywords</h4>
                  <p className="text-muted-foreground">4-6 keywords for indexing</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Main Text</h4>
                  <p className="text-muted-foreground">
                    Typically includes: Introduction, Literature Review, Methodology, Results, 
                    Discussion, Conclusion
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5. References</h4>
                  <p className="text-muted-foreground">APA 7th edition style (preferred)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>References and Citations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  JBPAR follows the APA 7th edition citation style. All sources cited in the text 
                  must appear in the reference list, and vice versa.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Example In-text Citation:</h4>
                  <p className="text-sm font-mono">(Smith & Jones, 2023)</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Example Reference:</h4>
                  <p className="text-sm font-mono">
                    Smith, J., & Jones, M. (2023). Business innovation strategies. 
                    Journal of Management, 45(2), 123-145. https://doi.org/10.xxxx/xxxx
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tables and Figures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Number tables and figures consecutively</li>
                  <li>Provide clear, descriptive captions</li>
                  <li>Ensure high resolution (minimum 300 dpi for images)</li>
                  <li>Submit figures in editable format when possible</li>
                  <li>Cite the source if not original</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All submissions must be original and not under consideration elsewhere</li>
                  <li>Manuscripts undergo plagiarism screening using iThenticate or similar tools</li>
                  <li>Similarity index should be below 20% (excluding references and quotes)</li>
                  <li>Authors must declare any conflicts of interest</li>
                  <li>Ethical approval must be obtained for studies involving human participants</li>
                  <li>Data availability statement is encouraged</li>
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

export default Guidelines;
