import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award,
  Target,
  Brain,
  Globe,
  Shield,
  Sparkles
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  const categories = [
    {
      icon: Target,
      title: "Strategy, Leadership & Innovation",
      description: "Business strategy, leadership practices, innovation management, digital transformation"
    },
    {
      icon: TrendingUp,
      title: "Marketing, Consumer Behavior & International Business",
      description: "Marketing strategy, consumer psychology, branding, e-commerce, global trade"
    },
    {
      icon: Users,
      title: "Human Capital, Organizational Behavior & Ethics",
      description: "HR management, workplace wellbeing, CSR, diversity and organizational culture"
    },
    {
      icon: Shield,
      title: "Finance, Governance & Sustainability",
      description: "Corporate finance, FinTech, ESG frameworks, ethical finance and governance"
    },
    {
      icon: Brain,
      title: "Technology, AI & Business Transformation",
      description: "AI, machine learning, blockchain, Industry 4.0, supply chain innovation"
    }
  ];

  const metrics = [
    { label: "Review Duration", value: "4-6 weeks", icon: Award },
    { label: "Publication Type", value: "Open Access", icon: Globe },
    { label: "Peer Review", value: "Double-Blind", icon: Shield },
    { label: "Impact", value: "Global Reach", icon: Sparkles }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Journal of Business Practice<br />and Academic Research
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Bridging Academic Knowledge with Professional Practice
            </p>
            <p className="text-lg mb-10 opacity-80 max-w-3xl mx-auto">
              An international, peer-reviewed, multidisciplinary, open-access journal dedicated 
              to advancing the integration of academic research and business practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/submit">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Submit Your Research
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              JBPAR serves as a platform for scholars, doctoral candidates, and industry professionals 
              to share high-quality research, applied studies, and practice-driven insights that contribute 
              to both theory and real-world impact. We support doctoral and postdoctoral researchers in 
              disseminating their work to a global audience while showcasing practitioner insights that 
              inspire academic inquiry and practical application.
            </p>
          </div>

          {/* Research Categories */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Research Categories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-2 hover:border-primary/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-base leading-tight">
                          {category.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Share Your Research?</h3>
            <p className="text-lg mb-8 opacity-90">
              Join our global community of researchers and practitioners. Submit your manuscript today 
              and contribute to bridging the gap between academic knowledge and professional practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/submit">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Submit Manuscript
                </Button>
              </Link>
              <Link to="/guidelines">
                <Button size="lg" variant="outline" className="text-lg px-8 border-white/30 hover:bg-white/10">
                  View Guidelines
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
