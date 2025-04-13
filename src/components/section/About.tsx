'use client';

import {
  AndroidSvg,
  iOSSvg,
  JavaScriptSvg,
  NextJsSvg,
  NodeSvg,
  ReactSvg,
  ReduxSvg,
  TypeScriptSvg,
  VsCodeSvg,
} from '@assets/svgs';
import { Card, CardContent } from '@components/ui/card';
import { Typography } from '@components/ui/typography';

export const skillsData = [
  { label: 'React Native', Svg: ReactSvg },
  { label: 'React', Svg: ReactSvg },
  { label: 'TypeScript', Svg: TypeScriptSvg },
  { label: 'JavaScript', Svg: JavaScriptSvg },
  { label: 'Android', Svg: AndroidSvg },
  { label: 'iOS', Svg: iOSSvg },
  { label: 'Next.js', Svg: NextJsSvg },
  { label: 'Expo', Svg: ReduxSvg },
  { label: 'Node.js', Svg: NodeSvg },
  { label: 'VS Code', Svg: VsCodeSvg },
];

export default function AboutSection() {
  // flatten all skills across categories

  return (
    <section id="about" className="w-full bg-muted py-20">
      <div className="site_spacing flex flex-col lg:flex-row items-start justify-between gap-20">
        {/* LEFT - TEXT + TECH */}
        <div className="lg:w-1/2  gap-20">
          <Typography variant="h2" className="mb-6">
            About Me
          </Typography>

          <Typography variant="p" className="mb-4 text-lg">
            I&apos;m a passionate <b>Mobile & Web Developer</b> with over{' '}
            <b>3 years of experience</b> building clean, scalable, and
            high-performance applications. I’ve worked with startups and
            enterprises, delivering products that users love.
          </Typography>

          <Typography variant="p" className="mb-4 text-lg">
            My expertise lies in crafting intuitive UIs, building cross-platform
            apps, and integrating scalable backend services. I thrive in
            collaborative environments and always aim to turn ideas into
            impactful digital experiences.
          </Typography>

          <Typography variant="p" className="my-10 text-lg">
            <b>Tools + Technologies</b> I love to working with:
          </Typography>

          <div className="flex flex-wrap gap-6">
            {skillsData.map(({ label, Svg }) => (
              <div key={label} className="flex items-center gap-2">
                <Svg className="w-6 h-6" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - STATS CARDS */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-[40%]">
          {[
            { count: '30+', label: 'Projects Completed' },
            { count: '15+', label: 'Happy Clients' },
            { count: '3+', label: 'Years Experience' },
            { count: '5+', label: 'Companies Worked' },
          ].map(stat => (
            <Card key={stat.label} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <p className="text-2xl font-bold">{stat.count}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
