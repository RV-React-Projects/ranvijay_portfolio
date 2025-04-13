'use client';

import {
  AndroidSvg,
  BackEndSvg,
  CssSvg,
  DartSvg,
  ExpoSvg,
  FigmaSvg,
  FireBaseSvg,
  FlutterSvg,
  FrontEndSvg,
  GithubSvg,
  GitSvg,
  GraphQlSvg,
  HtmlSvg,
  iOSSvg,
  JavaScriptSvg,
  MongoDBSvg,
  NestJsSvg,
  NextJsSvg,
  NodeSvg,
  PythonSvg,
  ReactSvg,
  ReduxSvg,
  SassSvg,
  TailwindSvg,
  ToolSvg,
  TypeScriptSvg,
  VsCodeSvg,
  XdSvg,
} from '@assets/svgs';
import { Card, CardContent } from '@components/ui/card';
import { Typography } from '@components/ui/typography';

const skillsData = [
  {
    category: 'Frontend Development',
    Icon: FrontEndSvg,
    skills: [
      { label: 'React Native', Icon: ReactSvg },
      { label: 'React', Icon: ReactSvg },
      { label: 'Next.js', Icon: NextJsSvg },
      { label: 'TypeScript', Icon: TypeScriptSvg },
      { label: 'JavaScript', Icon: JavaScriptSvg },
      { label: 'Redux', Icon: ReduxSvg },
      { label: 'Expo', Icon: ExpoSvg },
      { label: 'iOS', Icon: iOSSvg },
      { label: 'Android', Icon: AndroidSvg },
      { label: 'Flutter', Icon: FlutterSvg },
      { label: 'Dart', Icon: DartSvg },
      { label: 'HTML', Icon: HtmlSvg },
      { label: 'CSS', Icon: CssSvg },
      { label: 'SCSS', Icon: SassSvg },
      { label: 'Tailwind.css', Icon: TailwindSvg },
    ],
  },
  {
    category: 'Backend Development',
    Icon: BackEndSvg,
    skills: [
      { label: 'Node.js', Icon: NodeSvg },
      { label: 'Express', Icon: NodeSvg },
      { label: 'Mongo DB', Icon: MongoDBSvg },
      { label: 'Nest Js', Icon: NestJsSvg },
      { label: 'Python', Icon: PythonSvg },
      { label: 'Firebase', Icon: FireBaseSvg },
      { label: 'SuperBase', Icon: FireBaseSvg },
      { label: 'GraphQL', Icon: GraphQlSvg },
      { label: 'MySQL', Icon: GraphQlSvg },
      { label: 'PostgreSQL', Icon: GraphQlSvg },
    ],
  },
  {
    category: 'Tools & Design',
    Icon: ToolSvg,
    skills: [
      { label: 'Figma', Icon: FigmaSvg },
      { label: 'Adobe XD', Icon: XdSvg },
      { label: 'Git', Icon: GitSvg },
      { label: 'Git Hub', Icon: GithubSvg },
      { label: 'VS Code', Icon: VsCodeSvg },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 site_spacing">
      <Typography variant="h2" className="text-left mb-12">
        Skills & Technologies
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-[300px]">
        {skillsData.map(({ category, skills }, i) => (
          <Card key={category + i} className="rounded-xl shadow-xl">
            <CardContent>
              <Typography variant="h4" className="mb-6">
                {category}
              </Typography>

              <div className="grid grid-cols-3 sm:grid-cols-3  gap-y-6">
                {skills.map(({ label, Icon }, i) => (
                  <div key={label + i} className="flex flex-col items-center">
                    <Icon height={30} width={30} />
                    <Typography
                      variant="p"
                      className="text-sm text-center font-medium mt-1">
                      {label}
                    </Typography>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
