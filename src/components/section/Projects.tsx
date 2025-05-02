'use client';

import { JSX, useState } from 'react';
import {
  Bot,
  Server,
  Database,
  Flame,
  Code2,
  Atom,
  Layers,
  CloudCog,
} from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@components/ui/badge';
import { Button } from '@components/ui/button';
import { Card, CardContent } from '@components/ui/card';
import { Input } from '@components/ui/input';
import { Typography } from '@components/ui/typography';

// Map technologies to lucide icons
const techIcons: Record<string, JSX.Element> = {
  React: <Atom className="w-4 h-4 mr-1" />,
  'Node.js': <Server className="w-4 h-4 mr-1" />,
  MongoDB: <Database className="w-4 h-4 mr-1" />,
  Firebase: <Flame className="w-4 h-4 mr-1" />,
  TypeScript: <Code2 className="w-4 h-4 mr-1" />,
  'Next.js': <Layers className="w-4 h-4 mr-1" />,
  GraphQL: <Bot className="w-4 h-4 mr-1" />,
  PostgreSQL: <CloudCog className="w-4 h-4 mr-1" />,
};

// Project data
const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution with mobile apps and admin dashboard',
    image: 'project.png',
    tech: ['React', 'Node.js', 'MongoDB'],
    codeLink: '#',
    previewLink: '#',
  },
  {
    title: 'Healthcare App',
    description:
      'Telemedicine platform connecting patients with healthcare providers',
    image: 'project.png',
    tech: ['React', 'Firebase', 'TypeScript'],
    codeLink: '#',
    previewLink: '#',
  },
  {
    title: 'Social Network',
    description: 'Modern social networking platform with real-time features',
    image: 'project.png',
    tech: ['Next.js', 'GraphQL', 'PostgreSQL'],
    codeLink: '#',
    previewLink: '#',
  },
  {
    title: 'Healthcare App',
    description:
      'Telemedicine platform connecting patients with healthcare providers',
    image: 'project.png',
    tech: ['React', 'Firebase', 'TypeScript'],
    codeLink: '#',
    previewLink: '#',
  },
  {
    title: 'Social Network',
    description: 'Modern social networking platform with real-time features',
    image: 'project.png',
    tech: ['Next.js', 'GraphQL', 'PostgreSQL'],
    codeLink: '#',
    previewLink: '#',
  },
];

export default function ProjectSection() {
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section id="projects" className="site_spacing py-18">
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>

      <Input
        placeholder="Search projects..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-8 w-full max-w-sm"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <Card
            key={idx}
            className="flex flex-col overflow-hidden rounded-2xl shadow-md py-0">
            <div className="relative w-full h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              />
            </div>
            <CardContent className="pb-5 space-y-4">
              <Typography variant="h3" className="text-xl font-semibold">
                {project.title}
              </Typography>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center px-2 py-1 text-sm">
                    {techIcons[tech]}
                    <span>{tech}</span>
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="default" className="flex items-center w-1/2">
                  <span>&lt;/&gt;</span> View Code
                </Button>
                <Button variant="secondary" className="w-1/2">
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
