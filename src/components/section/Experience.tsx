import moment from 'moment';
import { DATE_FORMATE, START_DATE } from '@constant/MyData';
import { experienceData } from '@data/Experience';
import TimelineCard from './TimelineCard';

export default function ExperienceSection() {
  const start = moment(START_DATE, DATE_FORMATE);
  const end = moment();
  const years = end.diff(start, 'years');
  start.add(years, 'years');
  const months = end.diff(start, 'months');

  const parts = [];
  if (years) parts.push(`${years} Year${years > 1 ? 's' : ''}`);
  if (months) parts.push(`${months} Mon'${months > 1 ? 's' : ''}`);

  // const totalDuration = parts.join(' ');

  return (
    <section id="experience" className="bg-muted site_spacing">
      <div className="container py-16 mx-auto">
        <div className="flex flex-row items-center mb-10">
          <h2 className="text-3xl font-bold flex items-center text-center">
            Professional Experience
          </h2>
          <h6 className="text-xl font-light ml-5">
            ( {years}.{months} + Years. )
          </h6>
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
