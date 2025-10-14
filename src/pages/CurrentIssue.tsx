import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingShapes from "@/components/FloatingShapes";

const CurrentIssue = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingShapes />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Current Issue</h1>
            <p className="text-xl opacity-90">
              Latest Research and Publications
            </p>
          </div>
        </div>
      </section>

      {/* Current Issue Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Issue Information */}
            <Card className="mb-8 border-primary/30">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  Volume 1, Issue 1 - October 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Published: 5th October 2025
                </p>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Full Issue
                </Button>
              </CardContent>
            </Card>

            {/* Articles List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Articles in This Issue</h2>
              
              {/* Sample Article - Replace with actual content */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Sample Article Title</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    Author Name(s) | Pages: 1-15
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Abstract: This is a sample abstract text that describes the research article. 
                    The actual content will be replaced with real article information.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Add more articles as needed */}
              <Card className="bg-muted/30 border-dashed">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    More articles will be added as they are published.
                  </p>
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

export default CurrentIssue;
