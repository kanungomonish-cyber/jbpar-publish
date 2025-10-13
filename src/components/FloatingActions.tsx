import { useState } from "react";
import { Send, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 300);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <Link to="/submit">
        <Button
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-all animate-float"
        >
          <Send className="h-5 w-5 mr-2" />
          Submit
        </Button>
      </Link>

      <Link to="/contact">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <Mail className="h-5 w-5" />
        </Button>
      </Link>

      {showScrollTop && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="rounded-full shadow-lg hover:shadow-xl transition-all animate-fade-in"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default FloatingActions;
