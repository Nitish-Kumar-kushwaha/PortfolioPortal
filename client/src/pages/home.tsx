import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCodingStats } from "@/hooks/use-coding-stats";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code, 
  Laptop,
  Menu,
  X,
  Send,
  CheckCircle,
  ExternalLink,
  Building,
  Calendar,
  Heart,
  Star,
  Zap,
  Award,
  Badge as BadgeIcon,
  DollarSign,
  Briefcase
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const codingStats = useCodingStats();

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 64; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !subject || !message) {
      toast({
        title: "Please fill in all fields",
        description: "All form fields are required.",
        variant: "destructive",
      });
      return;
    }

    // Create email content
    const emailSubject = encodeURIComponent(`Portfolio Contact: ${subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    
    // Open default email client
    const mailtoLink = `mailto:nitishkumarkushwaha2509@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoLink, '_blank');

    toast({
      title: "Email client opened!",
      description: "Your message has been prepared in your default email client.",
    });

    // Reset form
    e.currentTarget.reset();
  };

  useEffect(() => {
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">NK</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection('experience')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                  Experience
                </button>
                <button onClick={() => scrollToSection('problem-solving')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                  Problem Solving
                </button>
                <button onClick={() => scrollToSection('skills')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                  Skills
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                  Contact
                </button>
              </div>
              <ModeToggle />
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ModeToggle />
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200 w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200 w-full text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('problem-solving')} className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200 w-full text-left">
                Problem Solving
              </button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200 w-full text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200 w-full text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200 w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Dynamic Background */}
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-slate-900/90 dark:to-slate-800/90"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 floating-animation"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 floating-animation" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            {/* Enhanced Professional Avatar */}
            <div className="w-40 h-40 mx-auto mb-8 rounded-full gradient-bg flex items-center justify-center text-white text-5xl font-bold shadow-2xl pulse-glow relative">
              <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm"></div>
              <span className="relative z-10">NK</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Nitish Kushwaha</span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
              <span className="typing-animation">Software Engineer & Full-Stack Developer</span>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Results-driven Software Engineer with hands-on experience in building scalable web applications and 
              backend systems using Java, Spring Boot, React.js, and Kafka. Passionate about clean code, design patterns, 
              and delivering high-impact enterprise solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Mail className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Get In Touch</span>
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://drive.google.com/file/d/19lDcKD0iKz4bW1GEkRpKLHmQaeaaabw0/view?usp=sharing', '_blank')} 
                className="relative inline-flex items-center px-10 py-4 border-2 border-transparent bg-gradient-to-r from-green-600 to-teal-600 p-0.5 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg group"
              >
                <div className="bg-white dark:bg-slate-900 rounded-full px-8 py-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Download Resume</span>
                </div>
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('experience')} 
                className="relative inline-flex items-center px-10 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg group"
              >
                <div className="bg-white dark:bg-slate-900 rounded-full px-8 py-3 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">View My Work</span>
                </div>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/Nitish-Kumar-kushwaha" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-4 bg-white/20 dark:bg-slate-800/70 rounded-full border border-white/30 dark:border-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Github className="w-7 h-7 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="https://linkedin.com/in/nitishkumarkushwaha" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-4 bg-white/20 dark:bg-slate-800/70 rounded-full border border-white/30 dark:border-slate-700/70 hover:border-blue-300 dark:hover:border-blue-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Linkedin className="w-7 h-7 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="https://leetcode.com/u/rashu1813/" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-4 bg-white/20 dark:bg-slate-800/70 rounded-full border border-white/30 dark:border-slate-700/70 hover:border-orange-300 dark:hover:border-orange-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Code className="w-7 h-7 text-slate-600 dark:text-slate-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="https://geeksforgeeks.org/user/nitishkumarkushwaha1813/" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-4 bg-white/20 dark:bg-slate-800/70 rounded-full border border-white/30 dark:border-slate-700/70 hover:border-green-300 dark:hover:border-green-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Laptop className="w-7 h-7 text-slate-600 dark:text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Passionate about building scalable solutions and optimizing system performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="relative card-hover-effect bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="text-center relative">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold shadow-lg pulse-glow">
                    <span className="relative z-10">NK</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Software Engineer</h3>
                  <p className="text-slate-600 dark:text-slate-300">Building enterprise solutions with passion and precision</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">My Journey</h3>
              
              {/* Journey Timeline */}
              <div className="space-y-8">
                {/* Education */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Academic Excellence</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Graduated with a <span className="font-semibold text-blue-600 dark:text-blue-400">Bachelor's in Computer Science Engineering</span> from 
                      <span className="font-medium"> KLS Gogte Institute of Technology</span> with an outstanding 
                      <span className="font-semibold text-green-600 dark:text-green-400"> CGPA of 9.05/10.0</span>, 
                      building a strong foundation in full-stack development and backend architecture.
                    </p>
                  </div>
                </div>

                {/* Professional Experience */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Enterprise Impact</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Currently driving innovation at <span className="font-semibold text-blue-600 dark:text-blue-400">Zaggle Prepaid Ocean Services Ltd</span>, 
                      where I've made significant contributions to multiple enterprise platforms including 
                      <span className="font-medium"> Travel SVC, EMS (Expense Management System), and Propel (Rewards & Recognition Platform)</span>. 
                      My expertise lies in building scalable microservices and optimizing system performance for real-world impact.
                    </p>
                  </div>
                </div>

                {/* Philosophy & Passion */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Core Philosophy</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Passionate about <span className="font-semibold text-purple-600 dark:text-purple-400">clean code, design patterns, and continuous learning</span>. 
                      I believe in crafting maintainable, efficient solutions that not only meet today's requirements but scale seamlessly with 
                      business growth and evolving user demands. Every line of code is an opportunity to build something better.
                    </p>
                  </div>
                </div>

                {/* Location & Availability */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-slate-800 dark:text-white font-medium">
                      Based in Hyderabad, India
                    </span>
                    <span className="text-slate-600 dark:text-slate-300">•</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Key Achievements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10x</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">API Performance Improvement</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">40%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Incident Reduction</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10K+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Users Served</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Migration Success</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">Professional Experience</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Building enterprise solutions and driving technical excellence with cutting-edge technologies
            </p>
          </div>

          {/* Current Role */}
          <div className="mb-12 animate-on-scroll">
            <Card className="shadow-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Software Engineer</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">Zaggle Prepaid Ocean Services Ltd</p>
                      <p className="text-slate-600 dark:text-slate-400">Hyderabad, India</p>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 shadow-md px-4 py-2">
                      Oct 2023 - Present
                    </Badge>
                  </div>
                </div>

                {/* Project Sections */}
                <div className="space-y-8">
                  {/* Travel SVC */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500 pl-6 pr-4 py-4 rounded-r-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-800 dark:text-white">Travel SVC</h4>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">May 2025 - Present</p>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Architected and implemented a <strong className="text-blue-600 dark:text-blue-400">Kafka-based notification service</strong>, enabling scalable, real-time alerting across systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Orchestrated backend event handling using <strong className="text-cyan-600 dark:text-cyan-400">Kafka</strong> for improved system responsiveness and decoupling</span>
                      </li>
                    </ul>
                  </div>

                  {/* EMS */}
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-l-4 border-green-500 pl-6 pr-4 py-4 rounded-r-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-800 dark:text-white">EMS (Expense Management System)</h4>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">Oct 2024 - Present</p>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Designed and deployed a <strong className="text-green-600 dark:text-green-400">high-throughput email service</strong> within the EMS platform, reliably serving over <strong className="text-teal-600 dark:text-teal-400">10,000 users</strong></span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Diagnosed and resolved critical production issues, reducing incident frequency by over <strong className="text-green-600 dark:text-green-400">40%</strong></span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Led the migration of a business-critical module from <strong className="text-red-600 dark:text-red-400">Ruby on Rails</strong> to <strong className="text-green-600 dark:text-green-400">Spring Boot</strong>, boosting performance and reducing technical debt</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Spearheaded API performance optimization efforts, achieving a <strong className="text-teal-600 dark:text-teal-400">10x improvement</strong> in response times for key endpoints</span>
                      </li>
                    </ul>
                  </div>

                  {/* Propel */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500 pl-6 pr-4 py-4 rounded-r-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-800 dark:text-white">Propel (Rewards & Recognition Platform)</h4>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">Oct 2023 - Oct 2024</p>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Delivered comprehensive end-to-end solutions, encompassing both <strong className="text-purple-600 dark:text-purple-400">React.js</strong> and <strong className="text-pink-600 dark:text-pink-400">Redux-Saga</strong> for robust UI development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Developed and integrated <strong className="text-purple-600 dark:text-purple-400">backend APIs</strong> to support dynamic UI functionalities and business workflows</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Collaborated closely with <strong className="text-pink-600 dark:text-pink-400">enterprise clients</strong> to understand unique requirements and tailor platform features</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Internship */}
          <div className="animate-on-scroll">
            <Card className="shadow-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Frontend Developer Intern</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">Zaggle Prepaid Ocean Services Ltd (Prismberry Inc.)</p>
                      <p className="text-slate-600 dark:text-slate-400">Noida, India</p>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-md px-4 py-2">
                      Apr 2023 - Sep 2023
                    </Badge>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700/30">
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Designed and implemented frontend modules for <strong className="text-orange-600 dark:text-orange-400">NGIFMS</strong> and <strong className="text-red-600 dark:text-red-400">DNPF</strong> platforms using Angular, TypeScript, and RxJS</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Delivered dynamic, responsive UI components aligned with <strong className="text-orange-600 dark:text-orange-400">financial application standards</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Coordinated with backend developers to ensure seamless <strong className="text-red-600 dark:text-red-400">API consumption</strong> and optimised performance</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section id="problem-solving" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Problem Solving</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Consistent practice and competitive programming achievements
            </p>
          </div>

          {/* Platform Stats */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* LeetCode Stats */}
            <Card className="shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">LeetCode</h3>
                      <p className="text-slate-600">@rashu1813</p>
                    </div>
                  </div>
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                    {codingStats.loading ? 'Loading...' : 'Active'}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {codingStats.loading ? '...' : `${codingStats.leetcode.acceptanceRate.toFixed(1)}%`}
                    </div>
                    <div className="text-sm text-slate-600">Acceptance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {codingStats.loading ? '...' : `${Math.floor(codingStats.leetcode.ranking / 1000)}K+`}
                    </div>
                    <div className="text-sm text-slate-600">Global Ranking</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Easy</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-2 bg-green-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((codingStats.leetcode.easySolved / 885) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {codingStats.loading ? '...' : codingStats.leetcode.easySolved}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Medium</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-2 bg-yellow-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((codingStats.leetcode.mediumSolved / 1877) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {codingStats.loading ? '...' : codingStats.leetcode.mediumSolved}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Hard</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                        <div 
                          className="h-2 bg-red-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((codingStats.leetcode.hardSolved / 848) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {codingStats.loading ? '...' : codingStats.leetcode.hardSolved}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Total Count */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                      {codingStats.loading ? '...' : codingStats.leetcode.totalSolved}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Total Problems Solved</div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://leetcode.com/u/rashu1813/', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* GeeksforGeeks Stats */}
            <Card className="shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">GeeksforGeeks</h3>
                      <p className="text-slate-600">@nitishkumarkushwaha1813</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Regular</Badge>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">52</div>
                    <div className="text-sm text-slate-600">POTD Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">450+</div>
                    <div className="text-sm text-slate-600">Institute Rank</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Data Structures</span>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                      {codingStats.geeksforgeeks.dataStructures} solved
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Algorithms</span>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                      {codingStats.geeksforgeeks.algorithms} solved
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Interview Prep</span>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {codingStats.geeksforgeeks.interviewPrep} solved
                    </Badge>
                  </div>
                </div>

                {/* Total Count */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                      {codingStats.geeksforgeeks.totalSolved}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Total Problems Solved</div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://geeksforgeeks.org/user/nitishkumarkushwaha1813/', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Combined Total Card */}
          <div className="mb-12 animate-on-scroll">
            <Card className="shadow-lg border-2 border-blue-200 dark:border-blue-700/50 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Total Problem Solving</h3>
                    <p className="text-slate-600 dark:text-slate-400">Combined Platform Statistics</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {codingStats.loading ? '...' : codingStats.combinedTotal}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Total Problems Solved</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      LeetCode ({codingStats.loading ? '...' : codingStats.leetcode.totalSolved}) + GeeksforGeeks ({codingStats.geeksforgeeks.totalSolved})
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">2</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Active Platforms</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">Consistent practice across both</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {codingStats.geeksforgeeks.potdStreak}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Current POTD Streak</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">Daily coding practice</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex justify-center space-x-4">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 px-4 py-2">
                      LeetCode: {codingStats.loading ? '...' : codingStats.leetcode.totalSolved} solved
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 px-4 py-2">
                      GeeksforGeeks: {codingStats.geeksforgeeks.totalSolved} solved
                    </Badge>
                  </div>
                  {codingStats.error && (
                    <div className="mt-4 text-center">
                      <div className="text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full inline-block">
                        {codingStats.error}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Achievements */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">Consistent Solver</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Maintained daily coding practice with {codingStats.loading ? '...' : codingStats.combinedTotal} problems solved across platforms
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">Algorithm Expert</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Strong foundation in DSA with focus on trees, graphs, and dynamic programming</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">Interview Ready</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Solved company-specific problems and maintained high acceptance rates</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Technologies and tools I use to build amazing software
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card className="relative card-hover-effect bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 animate-on-scroll overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Programming Languages</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Java</span>
                    <span className="skill-indicator skill-expert">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">JavaScript</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">TypeScript</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Ruby</span>
                    <span className="skill-indicator skill-intermediate">Intermediate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Frameworks */}
            <Card className="relative card-hover-effect bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 animate-on-scroll overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <Laptop className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Frameworks</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Spring Boot</span>
                    <span className="skill-indicator skill-expert">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">React.js</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Angular</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Redux-Saga</span>
                    <span className="skill-indicator skill-intermediate">Intermediate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="relative card-hover-effect bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 animate-on-scroll overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Databases</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">PostgreSQL</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">SQL</span>
                    <span className="skill-indicator skill-expert">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">JPA</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">DBMS</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Development Tools */}
            <Card className="relative card-hover-effect bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 animate-on-scroll overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Development Tools</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Kafka</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Git</span>
                    <span className="skill-indicator skill-expert">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Postman</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">AWS S3</span>
                    <span className="skill-indicator skill-intermediate">Intermediate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Concepts */}
            <Card className="relative card-hover-effect bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 animate-on-scroll overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Concepts</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Microservices</span>
                    <span className="skill-indicator skill-expert">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">RESTful APIs</span>
                    <span className="skill-indicator skill-expert">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Design Patterns</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Data Structures</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operating Systems */}
            <Card className="relative card-hover-effect bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200 animate-on-scroll overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-slate-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Tools & Systems</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Linux (Ubuntu)</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Windows</span>
                    <span className="skill-indicator skill-expert">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Cloud Watch</span>
                    <span className="skill-indicator skill-intermediate">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Agile</span>
                    <span className="skill-indicator skill-advanced">Advanced</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="mt-16 animate-on-scroll">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Java Full Stack Development</h4>
                  <p className="text-blue-100 mb-2">Masters Program - Simplilearn</p>
                  <p className="text-sm text-blue-200">2023</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">The Complete 2021 Web Development Bootcamp</h4>
                  <p className="text-green-100 mb-2">Udemy</p>
                  <p className="text-sm text-green-200">2023</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Showcase of my recent work and personal projects that demonstrate my skills
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile Bazzar Project */}
            <Card className="group relative card-hover-effect shadow-2xl border border-slate-200 dark:border-slate-700 animate-on-scroll overflow-hidden bg-white dark:bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zM14 21h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
                    </svg>
                  </div>
                  <p className="text-blue-700 dark:text-blue-300 font-semibold">Mobile E-Commerce</p>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">Mobile Bazzar</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">Dynamic e-commerce platform for mobile products with advanced search, sorting, detailed product views, and seamless cart functionality. Built with modern React.js and Next.js.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200">React.js</Badge>
                  <Badge className="bg-gradient-to-r from-gray-800 to-black text-white hover:from-black hover:to-gray-900 transition-all duration-200">Next.js</Badge>
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">TypeScript</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href="https://mobile-bazzar.vercel.app/" target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                      Live Demo <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    <a href="https://github.com/Nitish-Kumar-kushwaha/MobileBazzar" target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transform hover:scale-105 transition-all duration-200">
                      <Github className="w-3 h-3 mr-1" /> Code
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pokemon Project */}
            <Card className="group relative card-hover-effect shadow-2xl border border-slate-200 dark:border-slate-700 animate-on-scroll overflow-hidden bg-white dark:bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="h-48 bg-gradient-to-br from-red-100 to-yellow-200 dark:from-red-900/30 dark:to-yellow-800/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
                    </svg>
                  </div>
                  <p className="text-red-700 dark:text-red-300 font-semibold">Pokemon Explorer</p>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-red-600 transition-colors duration-300">Pokemon Explorer</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">Explore Pokémon types with ease! Features detailed descriptions, seamless pagination, and captivating interface. Powered by Next.js for quick loading and React for interactivity.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200">React</Badge>
                  <Badge className="bg-gradient-to-r from-gray-800 to-black text-white hover:from-black hover:to-gray-900 transition-all duration-200">Next.js</Badge>
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">TypeScript</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href="https://portfolio-portal-4dxv.vercel.app/" target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-sm font-medium rounded-full hover:from-red-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                      Live Demo <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    <a href="https://github.com/Nitish-Kumar-kushwaha/Pokemon" target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transform hover:scale-105 transition-all duration-200">
                      <Github className="w-3 h-3 mr-1" /> Code
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sporty Shoes Project */}
            <Card className="group relative card-hover-effect shadow-2xl border border-slate-200 dark:border-slate-700 animate-on-scroll overflow-hidden bg-white dark:bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-200 dark:from-green-900/30 dark:to-blue-800/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2,18H7V20H17V18H22L20,8H19V7A2,2 0 0,0 17,5H7A2,2 0 0,0 5,7V8H4L2,18M7,7H17V8H7V7M4.5,10H19.5L18.5,16H5.5L4.5,10Z"/>
                    </svg>
                  </div>
                  <p className="text-green-700 dark:text-green-300 font-semibold">Full-Stack E-Commerce</p>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-green-600 transition-colors duration-300">Sporty Shoes</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">Full-stack sporty shoe e-commerce web app with sleek Next.js & React.js frontend, robust Spring Boot backend. TypeScript ensures bug-resistant, reliable codebase.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200">React.js</Badge>
                  <Badge className="bg-gradient-to-r from-gray-800 to-black text-white hover:from-black hover:to-gray-900 transition-all duration-200">Next.js</Badge>
                  <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-200">Spring Boot</Badge>
                  <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-200">Java</Badge>
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">TypeScript</Badge>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/Nitish-Kumar-kushwaha/sportyshoes" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium rounded-full hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Frontend <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <a href="https://github.com/Nitish-Kumar-kushwaha/sport-shoes" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transform hover:scale-105 transition-all duration-200">
                    <Github className="w-3 h-3 mr-1" /> Backend
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Interested in working together? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <a href="mailto:nitishkumarkushwaha2509@gmail.com" className="text-slate-600 hover:text-blue-600">
                      nitishkumarkushwaha2509@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <a href="tel:+918429128085" className="text-slate-600 hover:text-green-600">
                      +91 8429128085
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-slate-800 mb-4">Find me on</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/nitishkumarkushwaha" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Nitish-Kumar-kushwaha" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transform hover:scale-105 transition-all duration-200">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://leetcode.com/u/rashu1813/" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center hover:bg-orange-600 transform hover:scale-105 transition-all duration-200">
                    <Code className="w-5 h-5" />
                  </a>
                  <a href="https://geeksforgeeks.org/user/nitishkumarkushwaha1813/" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 transform hover:scale-105 transition-all duration-200">
                    <Laptop className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <Card className="bg-slate-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell me about your project or just say hi!"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send via Email Client
                      </Button>
                      
                      <div className="text-center">
                        <p className="text-sm text-slate-500 mb-2">Or reach out directly:</p>
                        <div className="flex justify-center space-x-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open('mailto:nitishkumarkushwaha2509@gmail.com', '_blank')}
                            className="text-xs"
                          >
                            <Mail className="w-3 h-3 mr-1" />
                            Email
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open('https://linkedin.com/in/nitishkumarkushwaha', '_blank')}
                            className="text-xs"
                          >
                            <Linkedin className="w-3 h-3 mr-1" />
                            LinkedIn
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open('tel:+918429128085', '_blank')}
                            className="text-xs"
                          >
                            <Phone className="w-3 h-3 mr-1" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Nitish Kushwaha</h3>
            <p className="text-slate-400 dark:text-slate-300 mb-6">Building the future, one line of code at a time.</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://linkedin.com/in/nitishkumarkushwaha" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Nitish-Kumar-kushwaha" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/rashu1813/" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors duration-200">
                <Code className="w-5 h-5" />
              </a>
              <a href="https://geeksforgeeks.org/user/nitishkumarkushwaha1813/" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors duration-200">
                <Laptop className="w-5 h-5" />
              </a>
            </div>
            
            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Nitish Kushwaha. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
