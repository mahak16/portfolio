
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="project-card rounded-xl overflow-hidden h-[500px] border relative group">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-[50%] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-300/50 via-transperent to-transperent dark:from-black/80 dark:to-transparent  transition-opacity duration-300 flex flex-col justify-end  p-6">
        <h3 className="dark:text-white text-gray-500 text-xl font-semibold ">{project.title}</h3>
        <p className="dark:text-white/80 text-gray-500 my-2 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 my-2">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} variant="secondary" className="bg-white/20 dark:text-white text-gray-500 hover:bg-white/30">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-3 mt-3">
          {project.githubLink && (
            <Button asChild size="sm" className="bg-portfolio-teal hover:bg-portfolio-teal/90">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <Github size={14} /> Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'All' | 'js' | 'react'|'next'|'ai';
  githubLink?: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Bubble Game",
    description: "An interactive bubble game with scoring and multiple difficulty levels.",
    image: "/Bubble.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "js",
    githubLink: "https://github.com/mahak16/js_practice/tree/8254b2848ed7fe60457b29be3b8059a9cf01ae51/Bubble%20Game"
  },
  {
    id: 2,
    title: "AI Based Study Planner",
    description: "An intelligent planner that uses AI to create personalized study schedules based on learning styles.",
    image: "/Study.png",
    technologies: ["React", "Vite", "Bolt.ai", "HTML", "CSS", "TypeScript"],
    category: "ai",
    githubLink: "https://github.com/mahak16/demo"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    image: "/PortfolioSS.png",
    technologies: ["react", "Tailwind CSS", "Three.js"],
    category: "next",
    githubLink: "https://github.com/mahakjiwnani/portfolio"
  },
  {
    id: 4,
    title: "AI Integrated Chatbot",
    description: "An intelligent chatbot that provides personalized responses using natural language processing.",
    image: "/Chatbot.png",
    technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "API"],
    category: "ai",
    githubLink: "https://github.com/mahakjiwnani/ai-chatbot"
  },
  {
    id: 4,
    title: "E-commerce website",
    description: "A responsive e-commerce site using React.js and Tailwind CSS, gaining strong experience in API integration and dynamic UI development.",
    image: "/KaryasidhiSS.png",
    technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "API"],
    category: "react",
    githubLink: "https://github.com/mahak16/karyasidhi"
  },
  {
    id: 1,
    title: "Currency converter",
    description: "Developed a currency converter using JavaScript, enabling real-time exchange rate conversion through API integration.",
    image: "/currConv.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "js",
    githubLink: "https://github.com/mahak16/js_practice/tree/master/curr_cnvtr"
  },
  {
    id: 1,
    title: "Music Classes Website",
    description: "Developed a currency converter using JavaScript, enabling real-time exchange rate conversion through API integration.",
    image: "/music.png",
    technologies: ["HTML", "tailwind css", "Next","Acertainity UI"],
    category: "js",
    githubLink: "https://github.com/mahak16/MusicClass"
  },
  
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = projects.filter(
    project => activeTab === "all" || project.category === activeTab
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Explore my latest work in web development and artificial intelligence. 
          Each project represents my passion for creating innovative solutions.
        </p>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="js">JavaScript</TabsTrigger>
              <TabsTrigger value="react">React Js</TabsTrigger>
              <TabsTrigger value="next">Next Js</TabsTrigger>
              <TabsTrigger value="ai">AI integrated</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="js" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="react" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="next" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
