
import React from 'react';
import { Code, Laptop, Lightbulb, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/context/ThemeProvider';

const About = () => {
  const { theme } = useTheme();
  const highlights = [
    {
      icon: <Code className="text-portfolio-teal" size={24} />,
      title: 'Web Development',
      description: 'Passionate about creating responsive and interactive web experiences'
    },
    {
      icon: <Lightbulb className="text-portfolio-purple" size={24} />,
      title: 'AI Enthusiast',
      description: 'Exploring the possibilities of artificial intelligence and machine learning'
    },
    {
      icon: <Laptop className="text-portfolio-teal" size={24} />,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges with creative solutions'
    },
    {
      icon: <GraduationCap className="text-portfolio-purple" size={24} />,
      title: 'Continuous Learner',
      description: 'Always expanding my knowledge in the ever-evolving tech landscape'
    }
  ];

  return (
    <section id="about" className={`section-padding ${theme === 'dark' ? 'bg-gray-900' : 'bg-portfolio-light'}`}>
      <div className="container mx-auto md:px-10 px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-20 items-center">
         <div className="space-y-6">
  <p className="text-lg ">
    Hi, I'm <span className="font-semibold text-portfolio-purple">Mahak Jiwnani</span> — an IT student and frontend developer passionate about building clean, user-focused digital experiences.
  </p>
  <p>
    I specialize in creating responsive and visually engaging interfaces using technologies like React and Next.js. My interest in web development grew from a love for design and problem-solving — turning ideas into interactive, functional web solutions.
  </p>
  <p>
    I’m a quick learner who enjoys exploring new tools, staying current with design trends, and continuously improving my skills to build meaningful web experiences.
  </p>
  <p>
    Outside of coding, you’ll find me participating in hackathons, diving into creative side projects, and collaborating with other tech enthusiasts.
  </p>
</div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className={`hover:shadow-md transition duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white'}`}>
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-full mb-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
