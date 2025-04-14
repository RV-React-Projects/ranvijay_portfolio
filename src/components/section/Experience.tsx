import { experienceData } from '@data/Experience';
import { ExperienceTimeline, TimelineCard } from './TimelineCard';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted site_spacing">
      <div className="container py-16 mx-auto">
        <h2 className="text-3xl font-bold mb-10">Professional Experience</h2>
        <ExperienceTimeline>
          {experienceData.map((item, index) => (
            <TimelineCard key={index} {...item} />
          ))}
        </ExperienceTimeline>
      </div>
    </section>
  );
}
