import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Globe, BookOpen, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const About = () => {
  const categories = [
    {
      title: "Strategy, Leadership & Innovation",
      description: "This category explores the frameworks, decisions, and leadership approaches that shape competitive advantage and organizational success. We welcome research on business strategy, leadership practices, innovation management, digital transformation strategy, organizational culture, and change management that bridges theory with practical impact."
    },
    {
      title: "Marketing, Consumer Behavior & International Business",
      description: "Focused on the evolving dynamics of markets and consumers, this track invites studies on marketing strategy, consumer psychology, branding, and customer experience. Topics also include digital and social media marketing, e-commerce, international trade, globalization, and cross-cultural business practices that drive growth in diverse business environments."
    },
    {
      title: "Human Capital, Organizational Behavior & Ethics",
      description: "This category highlights the people dimension of business. Submissions may address human resource management, employee development, workforce retention, workplace well-being, and organizational behavior. We also encourage research on ethics, corporate social responsibility (CSR), diversity and inclusion, and the role of human capital in shaping resilient organizations."
    },
    {
      title: "Finance, Governance & Sustainability",
      description: "Dedicated to financial decision-making and responsible business practices, this track covers corporate finance, investment strategies, accounting, auditing, and risk management. It also embraces studies on corporate governance, financial technology (FinTech), ESG frameworks, business sustainability, and the integration of ethical finance into long-term value creation."
    },
    {
      title: "Technology, AI & Business Transformation",
      description: "This category examines how emerging technologies transform business models and operations. Topics include Artificial Intelligence, Generative AI, machine learning, blockchain, business analytics, and digital ecosystems. We also welcome research on Industry 4.0, supply chain innovations, RegTech, FinTech, and the role of technology in driving organizational agility and competitiveness."
    }
  ];

  const commitments = [
    {
      icon: Users,
      title: "Supporting Researchers",
      text: "Supporting doctoral and postdoctoral researchers in disseminating their work to a global audience."
    },
    {
      icon: Globe,
      title: "Practitioner Insights",
      text: "Showcasing practitioner insights that can inspire academic inquiry and practical application."
    },
    {
      icon: BookOpen,
      title: "Interdisciplinary Dialogue",
      text: "Encouraging interdisciplinary dialogue across business, management, social sciences, and technology."
    },
    {
      icon: Award,
      title: "Open Access",
      text: "Promoting open-access publishing to ensure that research is freely available and impactful worldwide."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aim & Scope</h1>
            <p className="text-xl opacity-90">
              Advancing the Integration of Academic Research and Business Practice
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <p className="text-lg leading-relaxed mb-6">
                The Journal of Business Practice and Academic Research (JBPAR) is an international, 
                peer-reviewed, multidisciplinary, open-access journal dedicated to advancing the 
                integration of academic research and business practice. The journal serves as a platform 
                for scholars, doctoral candidates, and industry professionals to share high-quality research, 
                applied studies, and practice-driven insights that contribute to both theory and real-world impact.
              </p>
            </div>

            {/* Aim Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Aim</h2>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                JBPAR aims to bridge the gap between academic knowledge and professional practice by 
                publishing original research, case studies, conceptual papers, and reviews that are both 
                theoretically rigorous and practically relevant. By doing so, the journal provides a unique 
                space where doctoral researchers, academics, policymakers, and business leaders can exchange 
                knowledge, drive innovation, and address emerging challenges in today's dynamic environment.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-6">The journal is committed to:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {commitments.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 p-3 h-fit rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                We uphold a rigorous double-blind peer-review process to maintain academic integrity 
                and publication quality.
              </p>
            </div>

            {/* Scope Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Scope</h2>
              <p className="text-lg leading-relaxed mb-8">
                JBPAR welcomes contributions across a wide range of disciplines, with a focus on applied, 
                practice-oriented, and multidisciplinary research. Areas of interest include, but are not 
                limited to:
              </p>

              <div className="space-y-6">
                {categories.map((category, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
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

export default About;
