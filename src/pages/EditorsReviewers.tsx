import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingShapes from "@/components/FloatingShapes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EditorsReviewers = () => {
  // Sample data - replace with actual editors and reviewers
  const editors = [
    {
      name: "Editorial Chief",
      role: "Editor-in-Chief",
      expertise: "Business Strategy, Leadership",
      image: "", // Add image URL here
    },
    // Add more editors as needed
  ];

  const reviewers = [
    {
      name: "Sample Reviewer",
      expertise: "Finance, Corporate Governance",
      affiliation: "University Name",
      image: "", // Add image URL here
    },
    // Add more reviewers as needed
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingShapes />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Editors & Reviewers</h1>
            <p className="text-xl opacity-90">
              Our Distinguished Editorial and Review Team
            </p>
          </div>
        </div>
      </section>

      {/* Editors Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Editorial Board</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {editors.map((editor, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={editor.image} alt={editor.name} />
                          <AvatarFallback className="bg-primary/10 text-primary text-lg">
                            {editor.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{editor.name}</CardTitle>
                          <p className="text-sm text-primary font-medium">{editor.role}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Expertise:</span> {editor.expertise}
                      </p>
                    </CardContent>
                  </Card>
                ))}

                {/* Placeholder card for adding new editors */}
                <Card className="border-dashed bg-muted/30">
                  <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                    <Users className="h-12 w-12 mb-3 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground text-center">
                      Additional editors will be listed here
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Reviewers Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Reviewers</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviewers.map((reviewer, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={reviewer.image} alt={reviewer.name} />
                          <AvatarFallback className="bg-primary/10 text-primary text-lg">
                            {reviewer.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{reviewer.name}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Expertise:</span> {reviewer.expertise}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Affiliation:</span> {reviewer.affiliation}
                      </p>
                    </CardContent>
                  </Card>
                ))}

                {/* Placeholder card for adding new reviewers */}
                <Card className="border-dashed bg-muted/30">
                  <CardContent className="p-8 flex flex-col items-center justify-center min-h-[200px]">
                    <Users className="h-12 w-12 mb-3 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground text-center">
                      Additional reviewers will be listed here
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default EditorsReviewers;
