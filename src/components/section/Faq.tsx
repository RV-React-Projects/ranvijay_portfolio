import { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';

type FaqItem = {
  answer: ReactNode;
  question: string;
};

const faq: FaqItem[] = [
  {
    question: 'What kind of development work do you specialize in?',
    answer: (
      <div>
        I specialize in full-stack JavaScript development with a strong focus on{' '}
        <strong>React, React Native, TypeScript, and Tailwind CSS</strong>. I
        build performant, accessible, and scalable web and mobile applications.
        <br />
        <br />
        My backend stack includes{' '}
        <strong>Node.js, Express, MongoDB, Firebase</strong>, and more. I also
        use <strong>Next.js</strong> for SSR/static apps and tools like Redux
        Toolkit, Zustand, Prisma, and others.
        <br />
        <br />
        Whether it’s a mobile app, a SaaS dashboard, or a personal portfolio — I
        deliver production-ready solutions.
      </div>
    ),
  },
  {
    question: 'Do you take freelance or contract-based work?',
    answer: (
      <div>
        <strong>Yes</strong>, I’m open to freelance or short-term contract work
        depending on the project scope, timeline, and availability.
        <br />
        <br />I usually take on projects that involve{' '}
        <strong>UI development</strong>,{' '}
        <strong>React Native app architecture</strong>,{' '}
        <strong>API integrations</strong>, or{' '}
        <strong>full-stack solutions</strong>. Share your project idea and I’ll
        let you know the next steps!
      </div>
    ),
  },
  {
    question: 'What tech stack do you use most often?',
    answer: (
      <div>
        Here’s what I typically work with:
        <br />
        <br />
        <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS,
        ShadCN UI, Framer Motion.
        <br />
        <strong>Mobile:</strong> React Native, Expo, Firebase, Realm DB.
        <br />
        <strong>Backend:</strong> Node.js, Express, MongoDB, Prisma, Supabase.
        <br />
        <strong>Tools:</strong> Git, GitHub, VSCode, Figma, Vercel, Postman.
        <br />
        <br />I adapt based on project requirements but these are my core tools.
      </div>
    ),
  },
  {
    question: 'Can you help build a complete product from scratch?',
    answer: (
      <div>
        <strong>Absolutely!</strong> I’ve helped startups and individuals build
        entire MVPs and apps from scratch.
        <br />
        <br />
        From UI/UX integration and frontend/backend development to APIs,
        hosting, and deployment — I can handle the complete stack. Whether it’s
        a dashboard, mobile app, or portfolio, I build with quality and
        scalability in mind.
      </div>
    ),
  },
  {
    question: 'Do you create content or share knowledge?',
    answer: (
      <div>
        <strong>Yes!</strong> I run a developer-focused YouTube channel called{' '}
        <strong>Debugg Now</strong>, where I share tutorials and content on:
        <br />
        - React / Next.js
        <br />
        - React Native
        <br />
        - Full-stack projects
        <br />
        - Productivity tips and developer tools
        <br />
        - DSA and problem-solving
        <br />
        <br />I also post on GitHub, Twitter, and other platforms — follow along
        for more!
      </div>
    ),
  },
  {
    question: 'What is Debugg Now and who is it for?',
    answer: (
      <div>
        <strong>Debugg Now</strong> is my YouTube channel created for developers
        — especially beginners to intermediates — who want to learn how to build
        real-world apps.
        <br />
        <br />I share practical, project-based tutorials, short videos, and
        breakdowns of full-stack apps using React, Next.js, React Native, and
        more.
      </div>
    ),
  },
  {
    question: 'How can I collaborate or hire you for a project?',
    answer: (
      <div>
        Feel free to reach out through:
        <br />
        <br />- <strong>Email:</strong> ranvijaychauhan12@gmail.com
        <br />- <strong>LinkedIn / GitHub:</strong> Links are on my portfolio
        <br />- <strong>Contact Form:</strong> Available on my site
        <br />
        <br />
        Just include a brief overview of your idea, tech stack, timeline, and
        I’ll get back with suggestions and availability.
      </div>
    ),
  },
  {
    question: 'Can you review or improve my existing code?',
    answer: (
      <div>
        <strong>Yes!</strong> I offer one-time or ongoing code reviews for
        projects in React, React Native, Node.js, and more.
        <br />
        <br />
        I’ll help you improve performance, refactor components, enhance UI/UX,
        or suggest best practices — depending on your needs.
      </div>
    ),
  },
  {
    question: 'What kind of content are you planning next?',
    answer: (
      <div>
        Upcoming content on <strong>Debugg Now</strong> will include:
        <br />
        - Full-stack SaaS app tutorials
        <br />
        - Mobile-first React Native projects
        <br />
        - Auth & API integration guides
        <br />
        - Real-world interview prep content for frontend devs
        <br />
        - Shorts and live debugging sessions
        <br />
        <br />
        You can always drop a suggestion in comments or email me!
      </div>
    ),
  },
];

export default function FaqSection() {
  return (
    <section id="FAQ" className="site_spacing bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-foreground">
          Questions & Answers
        </h2>
        <Accordion
          type="single"
          className="w-full mx-auto mt-6"
          defaultValue="question-0">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg text-foreground">
                {question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-base leading-relaxed">{answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
