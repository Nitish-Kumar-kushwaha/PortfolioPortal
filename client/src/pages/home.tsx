import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
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
  ExternalLink
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

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

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
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
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-800">NK</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors duration-200 font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors duration-200 font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection('experience')} className="hover:text-blue-600 transition-colors duration-200 font-medium">
                  Experience
                </button>
                <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition-colors duration-200 font-medium">
                  Skills
                </button>
                <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors duration-200 font-medium">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors duration-200 font-medium">
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors duration-200 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors duration-200 w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors duration-200 w-full text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors duration-200 w-full text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors duration-200 w-full text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors duration-200 w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Professional Avatar */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              NK
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="gradient-text">Nitish Kumar</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 mb-4 font-medium">Software Engineer</p>
            
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Results-driven Software Engineer with hands-on experience in building scalable web applications and 
              backend systems using Java, Spring Boot, React.js, and Kafka. Passionate about clean code, design patterns, 
              and delivering high-impact enterprise solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('experience')} 
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                <Code className="w-4 h-4 mr-2" />
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Nitish-Kumar-kushwaha" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-600 hover:text-slate-900 transform hover:scale-110 transition-all duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/nitishkumarkushwaha" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://leetcode.com/u/rashu1813/" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-600 hover:text-orange-500 transform hover:scale-110 transition-all duration-200">
                <Code className="w-6 h-6" />
              </a>
              <a href="https://geeksforgeeks.org/user/nitishkumarkushwaha1813/" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-600 hover:text-green-600 transform hover:scale-110 transition-all duration-200">
                <Laptop className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Passionate about building scalable solutions and optimizing system performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                    NK
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Software Engineer</h3>
                  <p className="text-slate-600">Building enterprise solutions</p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">My Journey</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I'm a dedicated Software Engineer based in Hyderabad, India, with a strong foundation in full-stack development 
                  and backend architecture. I graduated with a Bachelor's in Computer Science Engineering from KLS Gogte Institute 
                  of Technology with a CGPA of 9.05/10.0.
                </p>
                <p>
                  Currently working at Zaggle Prepaid Ocean Services Ltd, I've contributed to multiple enterprise platforms 
                  including Travel SVC, EMS (Expense Management System), and Propel (Rewards & Recognition Platform). 
                  My work focuses on building scalable microservices, optimizing system performance, and delivering robust solutions.
                </p>
                <p>
                  I'm passionate about clean code, design patterns, and continuous learning. I believe in writing maintainable, 
                  efficient code that scales with business growth and user demands.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Achievements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-blue-600">10x</div>
                      <div className="text-sm text-slate-600">API Performance Improvement</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-green-600">40%</div>
                      <div className="text-sm text-slate-600">Incident Reduction</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-purple-600">10K+</div>
                      <div className="text-sm text-slate-600">Users Served</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-orange-50 border-orange-200">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-orange-600">100%</div>
                      <div className="text-sm text-slate-600">Migration Success</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Building enterprise solutions and driving technical excellence
            </p>
          </div>

          {/* Current Role */}
          <div className="mb-12 animate-on-scroll">
            <Card className="shadow-lg border border-slate-200">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Software Engineer</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">Zaggle Prepaid Ocean Services Ltd</p>
                    <p className="text-slate-600">Hyderabad, India</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Oct 2023 - Present
                    </Badge>
                  </div>
                </div>

                {/* Project Sections */}
                <div className="space-y-8">
                  {/* Travel SVC */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">Travel SVC</h4>
                    <p className="text-sm text-slate-500 mb-4">Oct 2024 - Present</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        Architected and implemented a Kafka-based notification service, enabling scalable, real-time alerting across systems
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        Orchestrated backend event handling using Kafka for improved system responsiveness and decoupling
                      </li>
                    </ul>
                  </div>

                  {/* EMS */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">EMS (Expense Management System)</h4>
                    <p className="text-sm text-slate-500 mb-4">Oct 2024 - Present</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        Designed and deployed a high-throughput email service within the EMS platform, reliably serving over 10,000 users
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        Diagnosed and resolved critical production issues, reducing incident frequency by over 40%
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        Led the migration of a business-critical module from Ruby on Rails to Spring Boot, boosting performance and reducing technical debt
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        Spearheaded API performance optimization efforts, achieving a 10x improvement in response times for key endpoints
                      </li>
                    </ul>
                  </div>

                  {/* Propel */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">Propel (Rewards & Recognition Platform)</h4>
                    <p className="text-sm text-slate-500 mb-4">Oct 2023 - Oct 2024</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        Delivered comprehensive end-to-end solutions, encompassing both React.js and Redux-Saga for robust UI development
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        Developed and integrated backend APIs to support dynamic UI functionalities and business workflows
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        Collaborated closely with enterprise clients to understand unique requirements and tailor platform features
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Internship */}
          <div className="animate-on-scroll">
            <Card className="shadow-lg border border-slate-200">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Frontend Developer Intern</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">Zaggle Prepaid Ocean Services Ltd (Prismberry Inc.)</p>
                    <p className="text-slate-600">Noida, India</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      Apr 2023 - Sep 2023
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Designed and implemented frontend modules for NGIFMS and DNPF platforms using Angular, TypeScript, and RxJS
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Delivered dynamic, responsive UI components aligned with financial application standards
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Coordinated with backend developers to ensure seamless API consumption and optimised performance
                  </li>
                </ul>
              </CardContent>
            </Card>
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
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-800">Programming Languages</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Java</span>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Expert</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">JavaScript</span>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">TypeScript</span>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Ruby</span>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Intermediate</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Frameworks */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Laptop className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-800">Frameworks</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Spring Boot</span>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Expert</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">React.js</span>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Angular</span>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Redux-Saga</span>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Intermediate</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-slate-800">Databases</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">PostgreSQL</span>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">SQL</span>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Expert</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">JPA</span>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">DBMS</span>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Advanced</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Development Tools */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-semibold text-slate-800">Development Tools</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Kafka</span>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Git</span>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Expert</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Postman</span>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">AWS S3</span>
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Intermediate</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Concepts */}
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-teal-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-slate-800">Concepts</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Microservices</span>
                    <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Expert</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">RESTful APIs</span>
                    <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Expert</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Design Patterns</span>
                    <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Data Structures</span>
                    <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Advanced</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operating Systems */}
            <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-semibold text-slate-800">Operating Systems</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Linux (Ubuntu)</span>
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Windows</span>
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Expert</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Cloud Watch</span>
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Intermediate</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Agile</span>
                    <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Advanced</Badge>
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
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Showcase of my recent work and personal projects (Coming Soon)
            </p>
          </div>

          {/* Project Placeholder Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <Laptop className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                  <p className="text-blue-700 font-medium">Enterprise Dashboard</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Enterprise Dashboard</h3>
                <p className="text-slate-600 mb-4">A comprehensive dashboard built with React.js and Spring Boot for data visualization and analytics.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">React.js</Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Spring Boot</Badge>
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">PostgreSQL</Badge>
                </div>
                <div className="flex justify-between">
                  <Button variant="link" className="text-blue-600 hover:text-blue-700 font-medium p-0">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-800 p-0">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-green-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" clipRule="evenodd" />
                  </svg>
                  <p className="text-green-700 font-medium">E-Commerce Platform</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">E-Commerce Platform</h3>
                <p className="text-slate-600 mb-4">A full-stack e-commerce solution with payment integration and real-time inventory management.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">React.js</Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Node.js</Badge>
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">MongoDB</Badge>
                </div>
                <div className="flex justify-between">
                  <Button variant="link" className="text-blue-600 hover:text-blue-700 font-medium p-0">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-800 p-0">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-purple-600 mx-auto mb-2" />
                  <p className="text-purple-700 font-medium">Task Management App</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Task Management App</h3>
                <p className="text-slate-600 mb-4">A collaborative task management application with real-time updates and team collaboration features.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Angular</Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Java</Badge>
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Redis</Badge>
                </div>
                <div className="flex justify-between">
                  <Button variant="link" className="text-blue-600 hover:text-blue-700 font-medium p-0">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-800 p-0">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center mt-12 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              More projects coming soon! Check back for updates.
            </div>
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

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Nitish Kumar Kushwaha</h3>
            <p className="text-slate-400 mb-6">Building the future, one line of code at a time.</p>
            
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
                © 2024 Nitish Kumar Kushwaha. All rights reserved. | 
                <span className="text-slate-300 ml-1">Designed with ❤️ using React.js & Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
