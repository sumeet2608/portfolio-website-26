import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'GNIMS (Guru Nanak Institute of Management Studies)',
      period: '2023 – 2025',
      cgpi: '9.42',
      status: 'Ongoing',
      description: 'Specializing in advanced software development, database management, and system design.',
      subjects: [
        'Advanced Web Development',
        'Database Management Systems',
        'Software Engineering',
        'Data Structures & Algorithms',
        'System Design',
        'Computer Networks'
      ],
      achievements: [
        '2nd Rank in MCA Semester II',
        '3rd Rank overall in MCA program',
        'Consistent academic excellence with 9.42 CGPI'
      ]
    },
    {
      degree: 'Bachelor of Science (Computer Science)',
      institution: 'GN Khalsa College',
      period: '2020 – 2023',
      cgpi: '8.85',
      status: 'Completed',
      description: 'Strong foundation in computer science fundamentals and programming.',
      subjects: [
        'Programming in C/C++',
        'Java Programming',
        'Web Technologies',
        'Database Systems',
        'Computer Graphics',
        'Operating Systems'
      ],
      achievements: [
        '1st Rank in B.Sc. Computer Science',
        'Outstanding academic performance with 8.85 CGPI',
        'Active participation in coding competitions'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (H.S.C)',
      institution: 'Maharashtra State Board',
      period: '2019 – 2020',
      percentage: '66%',
      status: 'Completed',
      description: 'Science stream with focus on Mathematics and Computer Science.',
      subjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Computer Science',
        'English'
      ]
    },
    {
      degree: 'Secondary School Certificate (S.S.C)',
      institution: 'Maharashtra State Board',
      period: '2017 – 2018',
      percentage: '87.80%',
      status: 'Completed',
      description: 'Strong academic foundation with excellent performance.',
      achievements: [
        'Scored 87.80% in SSC examination',
        'Excellence in Mathematics and Science subjects'
      ]
    }
  ];

  const getGradeColor = (grade: string) => {
    const numGrade = parseFloat(grade);
    if (numGrade >= 9) return 'text-success';
    if (numGrade >= 8) return 'text-accent';
    if (numGrade >= 7) return 'text-secondary';
    return 'text-muted-foreground';
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-header animate-fade-in">Educational Journey</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="timeline-item animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-dot animate-glow"></div>
                
                <Card className="portfolio-card ml-6">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          {edu.degree}
                        </CardTitle>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <BookOpen className="w-4 h-4" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {edu.cgpi && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            <span className={getGradeColor(edu.cgpi)}>CGPI: {edu.cgpi}</span>
                          </Badge>
                        )}
                        {edu.percentage && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            <span className={getGradeColor(edu.percentage.replace('%', ''))}>
                              {edu.percentage}
                            </span>
                          </Badge>
                        )}
                        <Badge variant={edu.status === 'Ongoing' ? 'default' : 'secondary'}>
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {edu.subjects && (
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Key Subjects</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {edu.subjects.map((subject) => (
                            <div key={subject} className="skill-chip text-xs">
                              {subject}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {edu.achievements && (
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Achievements</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Academic Performance Summary */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="portfolio-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-center mb-6 text-primary">Academic Excellence</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">9.42</div>
                  <div className="text-sm text-muted-foreground">Current MCA CGPI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">8.85</div>
                  <div className="text-sm text-muted-foreground">B.Sc. CGPI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Academic Ranks</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;