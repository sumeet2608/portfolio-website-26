import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Star, Award, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: '1st Rank in B.Sc. Computer Science',
      institution: 'GN Khalsa College',
      year: '2023',
      description: 'Achieved first rank in Bachelor of Science (Computer Science) program with outstanding academic performance.',
      icon: Trophy,
      category: 'Academic Excellence',
      highlight: true,
      details: [
        'CGPI of 8.85 out of 10',
        'Consistent top performance across all subjects',
        'Recognition for programming and technical skills'
      ]
    },
    {
      title: '2nd Rank in MCA Semester II',
      institution: 'GNIMS',
      year: '2024',
      description: 'Secured second position in MCA second semester with exceptional academic performance.',
      icon: Medal,
      category: 'Academic Excellence',
      highlight: false,
      details: [
        'Advanced coursework in software development',
        'Excellence in database management and web technologies',
        'Strong foundation in system design principles'
      ]
    },
    {
      title: '3rd Rank Overall in MCA Program',
      institution: 'GNIMS',
      year: '2023-2025',
      description: 'Currently maintaining third rank overall in the Master of Computer Applications program.',
      icon: Star,
      category: 'Academic Excellence',
      highlight: false,
      details: [
        'Current CGPI of 9.42',
        'Consistent performance across all semesters',
        'Strong grasp of advanced computer science concepts'
      ]
    }
  ];

  const stats = [
    {
      number: '3',
      label: 'Academic Ranks',
      description: 'Consistent academic excellence',
      icon: Trophy
    },
    {
      number: '9.42',
      label: 'Current CGPI',
      description: 'MCA Program',
      icon: Star
    },
    {
      number: '8.85',
      label: 'B.Sc. CGPI',
      description: 'Computer Science',
      icon: Award
    },
    {
      number: '100%',
      label: 'Success Rate',
      description: 'Project completion',
      icon: Target
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header animate-fade-in">Achievements & Recognition</h2>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label}
                className="portfolio-card text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={achievement.title}
                className={`portfolio-card animate-slide-in-left ${achievement.highlight ? 'ring-2 ring-primary/50' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${achievement.highlight ? 'bg-gradient-hero' : 'bg-muted'}`}>
                      <Icon className={`w-6 h-6 ${achievement.highlight ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 leading-tight">{achievement.title}</CardTitle>
                      <div className="space-y-1">
                        <Badge variant={achievement.highlight ? 'default' : 'secondary'}>
                          {achievement.category}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {achievement.institution} • {achievement.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div>
                    <h5 className="font-medium mb-2 text-primary">Key Highlights</h5>
                    <ul className="space-y-1">
                      {achievement.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Motivational Quote */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="portfolio-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4 animate-glow" />
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Excellence is not a skill, it's an attitude. These achievements reflect my commitment 
                to continuous learning and dedication to mastering the art of software development."
              </blockquote>
              <div className="text-primary font-semibold">- Sumeet Singh</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;