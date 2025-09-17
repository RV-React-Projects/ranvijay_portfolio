'use client';

import { cloneElement } from 'react';
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
  const start = moment(startDate, DATE_FORMATE, true);
  const end = endDate ? moment(endDate, DATE_FORMATE, true) : moment();

  const validStart = start.isValid() ? start.clone() : moment(startDate);
  const validEnd = end.isValid()
    ? end.clone()
    : endDate
      ? moment(endDate)
      : moment();

  const formattedStartDate = validStart.format(DATE_FORMATE);
  const formattedEndDate = validEnd.format(DATE_FORMATE);

  const years = validEnd.diff(validStart, 'years');
  const startForCalc = validStart.clone().add(years, 'years');

  const months = validEnd.diff(startForCalc, 'months');

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
          className="text-lg font-semibold text-primary mb-1 flex flex-row">
          <p className="text-sm">{company}</p>
          <p className="text-sm text-foreground"> • {location}</p>
        </Link>
        <ul className="list-disc list-inside text-sm space-y-1 mb-3">
          {responsibilities.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="mb-2">
          <span className="font-medium text-sm text-green-600">
            Technologies/Tools Used:
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
          <span className="font-medium text-sm text-green-600">
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
                    { link: proj.ios, Icon: <AppStoreSvg /> },
                    { link: proj.android, Icon: <PlayStoreSvg /> },
                    { link: proj.web, Icon: <Globe color="#3458e9" /> },
                  ].map(
                    ({ link, Icon }, index) =>
                      link && (
                        <Link
                          key={index}
                          href={link}
                          className="group"
                          target="_blank">
                          {cloneElement(Icon, { height: 20, width: 20 })}
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
