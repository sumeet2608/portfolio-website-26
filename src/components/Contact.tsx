import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sumeetwebdeveloper.26@gmail.com',
      link: 'mailto:sumeetwebdeveloper.26@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9167471055',
      link: 'tel:9167471055'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sumeet-singh-668516273',
      color: 'text-blue-600'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      link: 'https://shorturl.at/wo4yJ',
      color: 'text-primary'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header animate-fade-in">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="portfolio-card hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl animate-fade-in">Let's Connect!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed animate-fade-in">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply have a conversation about technology and development. 
                  Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div 
                        key={info.label} 
                        className="flex items-center gap-4 hover-scale animate-slide-in-left"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="p-3 bg-gradient-hero rounded-lg animate-glow">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-primary hover:text-primary/80 transition-colors story-link"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="pt-6 border-t border-border animate-fade-in">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={social.label}
                          variant="outline"
                          size="sm"
                          className="hover:scale-110 transition-all duration-300 animate-scale-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          asChild
                        >
                          <a href={social.link} target="_blank" rel="noopener noreferrer">
                            <Icon className={`w-4 h-4 ${social.color}`} />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Facts */}
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-primary">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Available for internship opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Open to collaborations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Currently pursuing MCA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>MEAN Stack specialist</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="contact-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="contact-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="contact-input resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full hero-button"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="portfolio-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking for a dedicated developer, want to collaborate on a project, 
                or have an exciting opportunity to share, I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="hero-button" asChild>
                  <a href="mailto:sumeetwebdeveloper.26@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" className="hover:scale-105 transition-transform" asChild>
                  <a href="https://www.linkedin.com/in/sumeet-singh-668516273" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;