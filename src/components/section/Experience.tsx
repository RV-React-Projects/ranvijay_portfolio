import { TOTAL_EXPERIENCE } from '@constant/MyData';
import { experienceData } from '@data/Experience';
import TimelineCard from './TimelineCard';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted site_spacing">
      <div className="container py-16 mx-auto">
        <div className="flex flex-row items-center mb-10">
          <h2 className="text-3xl font-bold flex items-center text-center">
            Professional Experience
          </h2>
          <h6 className="text-xl font-light ml-5">{TOTAL_EXPERIENCE}</h6>
        </div>
        <div className="relative">
          {experienceData.map((item, index) => (
            <TimelineCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
