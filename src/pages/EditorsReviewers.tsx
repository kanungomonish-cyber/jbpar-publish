import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingShapes from "@/components/FloatingShapes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EditorsReviewers = () => {
  // Actual editors data
  const editors = [
    {
      name: "Dr. Stephanie Rocky Okolo",
      role: "Professor",
      organization: "Initiative for Cognitive Therapies and Mental Health (CTMH)/University of the People",
      email: "emailry@comlkena.org",
      phone: "+1254 214-0468",
      address: "817 Snow Bird Dr., Harker Heights, Texas, USA",
      country: "USA",
      pincode: "76548",
      image: "/editors/Stephanie.jpg"
    },
    {
      name: "Jaka Vadnjal",
      role: "Professor",
      organization: "Euro-Mediterranean University",
      email: "jaka.vadnjal@emuni.ai",
      phone: "+38641630839",
      address: "Kidričevo nabrežje 2, Piran Slovenia",
      country: "Slovenia",
      pincode: "6300",
      image: "/editors/Jaka v.JPG"
    },
    {
      name: "Arpita Soni",
      role: "Senior IEEE",
      organization: "IEEE",
      email: "arpitasoni@ieee.org",
      phone: "6789759544",
      address: "Eudoxia Research Centre IEEE",
      country: "USA",
      pincode: "28027",
      image: "/editors/Arpita Soni[1].jpg"
    },
    {
      name: "Dr. Vijay Birchha",
      role: "Asst. Professor Senior Grade-1",
      organization: "VIT Bhopal University",
      email: "vijaybirchha@vtbhopal.ac.in",
      phone: "+919826065780",
      address: "VIT Bhopal University, Bhopal-Indore Highway Kothrkaïm, Sehore Madriya Pradesh - 466114 India",
      country: "India",
      pincode: "466114",
      image: "/editors/vijay birccha.jpg"
    },
    {
      name: "Dr. Diwakar Tripathi",
      role: "Assistant Professor (Grade-I)",
      organization: "National Institute of Technology Jamshedpur, Jharkhand, India",
      email: "Diwakar.cse@nitjsr.ac.in",
      phone: "+919993335916",
      address: "Dept. of CSE, National Institute of Technology Jamshedpur, Adityapur, Jharkhand",
      country: "India",
      pincode: "832014",
      image: "/editors/Diwakar.jpg"
    }
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {editors.map((editor, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow bg-white/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col items-center text-center">
                        {editor.name === "Dr. Diwakar Tripathi" ? (
                          <div className="mb-4">
                            <Avatar className="h-32 w-32 rounded-full ring-2 ring-primary/10">
                              <AvatarImage 
                                src="/editors/Diwakar.jpg" 
                                alt={editor.name} 
                                className="object-cover w-full h-full"
                                style={{
                                  imageRendering: 'crisp-edges',
                                  objectFit: 'cover',
                                  objectPosition: 'center 75%'
                                }}
                              />
                              <AvatarFallback className="bg-primary/10 text-primary text-2xl font-medium">
                                DDT
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        ) : (
                          <div className="mb-4">
                            <Avatar className="h-32 w-32 rounded-full ring-2 ring-primary/10">
                              <AvatarImage 
                                src={editor.image} 
                                alt={editor.name} 
                                className="object-cover w-full h-full"
                                style={{
                                  imageRendering: 'crisp-edges',
                                  objectFit: 'cover'
                                }}
                              />
                              <AvatarFallback className="bg-primary/10 text-primary text-2xl font-medium">
                                {editor.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900">{editor.name}</CardTitle>
                          <p className="text-sm text-primary/90 font-medium mt-1">{editor.role}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-2 text-center">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-gray-900">Organization</span><br/>
                          {editor.organization}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-gray-900">Email</span><br/>
                          <a href={`mailto:${editor.email}`} className="text-primary hover:text-primary/80">
                            {editor.email}
                          </a>
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-gray-900">Phone</span><br/>
                          <a href={`tel:${editor.phone}`} className="text-primary hover:text-primary/80">
                            {editor.phone}
                          </a>
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-gray-900">Address</span><br/>
                          {editor.address}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-gray-900">Country</span><br/>
                          {editor.country} - {editor.pincode}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
