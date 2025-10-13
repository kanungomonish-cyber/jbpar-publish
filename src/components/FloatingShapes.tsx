const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float" 
           style={{ animationDelay: '0s', animationDuration: '6s' }} />
      <div className="absolute top-40 right-20 w-24 h-24 bg-accent/5 rounded-full animate-float" 
           style={{ animationDelay: '1s', animationDuration: '7s' }} />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full animate-float" 
           style={{ animationDelay: '2s', animationDuration: '8s' }} />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent/5 rounded-full animate-float" 
           style={{ animationDelay: '1.5s', animationDuration: '6.5s' }} />
      
      {/* Floating squares */}
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-primary/5 rotate-45 animate-float" 
           style={{ animationDelay: '0.5s', animationDuration: '7s' }} />
      <div className="absolute bottom-1/3 left-20 w-16 h-16 bg-accent/5 rotate-12 animate-float" 
           style={{ animationDelay: '2.5s', animationDuration: '6s' }} />
    </div>
  );
};

export default FloatingShapes;
