import React from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import Navbar from './components/Navbar';
import Scene from './components/Scene';
import SectionWrapper from './components/SectionWrapper';
import { SKILL_LIST, PROJECTS, TOOL_ICONS } from './constants';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Database, Cpu, Palette } from 'lucide-react';

// Icons mapping helper
const getIcon = (name: string) => {
    switch(name) {
        case 'Figma': return <Palette size={32} />;
        case 'Github': return <Github size={32} />;
        case 'Git': return <Code2 size={32} />;
        case 'Terminal': return <Terminal size={32} />;
        default: return <Cpu size={32} />;
    }
}

const HeroSection = () => {
  const { content, isRTL } = useApp();
  
  return (
    <div id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <Scene />
      
      <div className="container mx-auto px-6 lg:px-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl flex-1"
            >
                <h2 className="text-xl text-primary font-semibold mb-2">{content.hero.greeting}</h2>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                    {content.hero.name}.
                </h1>
                <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
                    {content.hero.role}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
                    {content.hero.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                    <a 
                        href="#contact"
                        className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
                    >
                        {content.hero.ctaPrimary}
                    </a>
                    <a 
                        href="#projects"
                        className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {content.hero.ctaSecondary}
                    </a>
                </div>
            </motion.div>

            {/* Code Image Block */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 hidden lg:block w-full max-w-xl"
            >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-gray-900">
                    {/* Window Controls */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 text-xs text-gray-400 font-mono">developer_portfolio.tsx</div>
                    </div>
                    {/* Image */}
                    <div className="relative group">
                         <img 
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80" 
                            alt="Coding Environment" 
                            className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
    const { content } = useApp();
    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white relative inline-block">
                        {content.about.title}
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                        {content.about.p1}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                        {content.about.p2}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
                        <div className="text-4xl font-bold text-primary mb-2">5+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{content.about.stats.experience}</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
                        <div className="text-4xl font-bold text-secondary mb-2">20+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{content.about.stats.projects}</div>
                    </div>
                    <div className="col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
                        <div className="text-4xl font-bold text-green-500 mb-2">15+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{content.about.stats.clients}</div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

const SkillsSection = () => {
    const { content } = useApp();
    return (
        <SectionWrapper id="skills" className="bg-gray-50 dark:bg-slate-900/50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{content.skills.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILL_LIST.map((skill, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                    >
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className="bg-primary h-2.5 rounded-full"
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}

const ToolsSection = () => {
    const { content } = useApp();
    return (
        <SectionWrapper id="tools">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">{content.tools.title}</h2>
                <p className="text-gray-500 dark:text-gray-400">{content.tools.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {TOOL_ICONS.map((tool, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -10 }}
                        className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 aspect-square"
                    >
                        <div className="text-gray-700 dark:text-gray-200 mb-3">
                            {getIcon(tool.icon)}
                        </div>
                        <span className="font-medium text-sm">{tool.name}</span>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}

const ProjectsSection = () => {
    const { content, language } = useApp();
    
    return (
        <SectionWrapper id="projects" className="bg-gray-50 dark:bg-slate-900/50">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{content.projects.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project) => (
                    <motion.div 
                        key={project.id}
                        whileHover={{ y: -10 }}
                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} title={`View ${project.title} on GitHub`} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live`} title={`Open ${project.title} live`} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                                {language === 'en' ? project.descEn : project.descAr}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}

const ContactSection = () => {
    const { content } = useApp();
    return (
        <SectionWrapper id="contact">
            <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{content.contact.title}</h2>
                 <p className="text-gray-600 dark:text-gray-300 mb-10">{content.contact.subtitle}</p>
                 
                 <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a href="mailto:mohamedaymannn70@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-primary group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <div className="text-left rtl:text-right">
                            <div className="text-sm text-gray-500">{content.contact.email}</div>
                            <div className="font-semibold">mohamedaymannn70@gmail.com</div>
                        </div>
                    </a>
                    
                    <a href="https://github.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group">
                        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-900 dark:text-white group-hover:scale-110 transition-transform">
                            <Github size={24} />
                        </div>
                        <div className="text-left rtl:text-right">
                            <div className="text-sm text-gray-500">{content.contact.github}</div>
                            <div className="font-semibold">@mohamed-dev</div>
                        </div>
                    </a>

                    <a href="https://linkedin.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-700 group-hover:scale-110 transition-transform">
                            <Linkedin size={24} />
                        </div>
                        <div className="text-left rtl:text-right">
                            <div className="text-sm text-gray-500">{content.contact.linkedin}</div>
                            <div className="font-semibold">Mohamed Engineer</div>
                        </div>
                    </a>
                 </div>
            </div>
        </SectionWrapper>
    )
}

const Footer = () => {
    const { content } = useApp();
    return (
        <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Mohamed. Built with React, Three.js & Tailwind.
                </p>
            </div>
        </footer>
    )
}

const AppContent = () => {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ToolsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;