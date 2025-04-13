'use client';

import { IExperienceItem } from '@data/Experience';

export function TimelineCard({
  title,
  company,
  location,
  duration,
  responsibilities,
  technologies,
  projects,
}: IExperienceItem) {
  return (
    <div className="pb-10">
      <div className="bg-card border shadow-md rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-1">
          {company} • {location}
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 mb-3">
          {responsibilities.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="mb-2">
          <span className="font-medium text-sm text-muted-foreground">
            Technologies:
          </span>
          <div className="flex flex-wrap gap-2 mt-1">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-muted text-sm px-2 py-1 rounded-md border text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="font-medium text-sm text-muted-foreground">
            Key Projects:
          </span>
          <div className="flex flex-wrap gap-2 mt-1">
            {projects.map((proj, i) => (
              <span
                key={i}
                className="bg-muted text-sm px-2 py-1 rounded-md border text-muted-foreground">
                {proj}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceTimeline({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative">{children}</div>;
}
