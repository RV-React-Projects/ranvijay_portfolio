'use client';

import { Globe } from 'lucide-react';
import moment from 'moment';
import Link from 'next/link';
import { AppStoreSvg, PlayStoreSvg } from '@assets/svgs';
import { IExperienceItem } from '@data/Experience';
import { DATE_FORMATE } from 'constant/MyData';

export default function TimelineCard({
  title,
  company,
  location,
  responsibilities,
  technologies,
  projects,
  startDate,
  endDate,
  isCurrent,
  companyURL,
}: IExperienceItem) {
  const start = moment(startDate);
  const end = endDate ? moment(endDate) : moment();

  // These are still needed for display!
  const formattedStartDate = start.format(DATE_FORMATE);
  const formattedEndDate = end.format(DATE_FORMATE);

  // Now calculating duration
  const years = end.diff(start, 'years');
  start.add(years, 'years');

  const months = end.diff(start, 'months');

  const parts = [];
  if (years) parts.push(`${years} Year${years > 1 ? 's' : ''}`);
  if (months) parts.push(`${months} Mon'${months > 1 ? 's' : ''}`);

  const totalDuration = parts.join(' ');

  return (
    <div className="pb-10">
      <div className="bg-card border shadow-md rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">
            {formattedStartDate} - {isCurrent ? 'Present ' : formattedEndDate}({' '}
            {totalDuration} )
          </span>
        </div>
        <Link
          href={companyURL}
          target="_blank"
          className="text-lg font-semibold text-green-600">
          <p className="text-sm mb-1">
            {company} • {location}
          </p>
        </Link>
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
              <div
                key={i}
                className="flex flex-row bg-muted rounded-md border items-center px-2 py-1">
                <span className="text-sm text-muted-foreground cursor-pointer">
                  {proj.title}
                </span>
                <div className="flex flex-row gap-2 ml-2">
                  {[
                    { link: proj.ios, Icon: AppStoreSvg },
                    { link: proj.android, Icon: PlayStoreSvg },
                    { link: proj.web, Icon: Globe },
                  ].map(
                    ({ link, Icon }, index) =>
                      link && (
                        <Link
                          key={index}
                          href={link}
                          className="group"
                          target="_blank">
                          <Icon height={20} width={20} />
                        </Link>
                      ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
