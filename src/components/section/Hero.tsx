import { Download, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="site_spacing min-h-screen w-full flex">
      <div className="w-full flex flex-col justify-between md:flex-row items-center gap-12 transition-colors duration-300">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            👋 Hello, I’m
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Ranvijay
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
            Full Stack Developer | React Native Enthusiast
          </h2>
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            I build fast, scalable, and delightful mobile & web apps using{' '}
            <span className="font-semibold text-blue-600">React Native</span>,{' '}
            <span className="font-semibold text-cyan-600">React</span>, and{' '}
            <span className="font-semibold text-blue-700">TypeScript</span>.
            <br />I transform ideas into high-impact digital products with
            smooth UX and pixel-perfect UIs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
            <Button asChild variant="default" className="px-6 py-3">
              <Link href="#contact" className="flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="secondary" className="px-6 py-3">
              <Link
                href="/Ranvijay-CV.pdf"
                download
                className="flex items-center gap-2">
                <Download size={18} />
                Download CV
              </Link>
            </Button>
            <Button asChild variant="outline" className="px-6 py-3">
              <Link href="#projects" className="flex items-center gap-2">
                🚀 View Projects
              </Link>
            </Button>
          </div>
        </div>
        {/* Right Image */}
        <div className="rounded-xl overflow-hidden shadow-xl">
          {/* <Image
            src="user_profile.jpg"
            alt="Ranvijay"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          /> */}
        </div>
        {/* <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col gap-y-6 text-center md:text-left md:mt-0 sm:mt-10">
            <Typography
              variant="p"
              affects="lead"
              className="text-gray-500 mt-28 md:mt-0 text-lg">
              👋 Hello there!
            </Typography>
            <Typography
              variant="h1"
              className="flex flex-wrap items-end gap-2 self-center md:self-start text-left text-4xl font-bold">
              <Typography
                variant="p"
                className="text-gray-400 text-2xl font-medium">
                I&apos;m
              </Typography>
              <span className="text-black font-extrabold">Ranvijay</span>
              <Typography
                variant="p"
                className="text-gray-400 text-2xl font-medium">
                Kumar Singh
              </Typography>
            </Typography>
            <Typography
              variant="p"
              affects="lead"
              className="text-gray-600 max-w-[90%] text-md self-center md:self-start text-left leading-relaxed">
              <span className="font-semibold text-gray-700">
                Full Stack Developer
              </span>{' '}
              — I specialize in building fast, scalable, and user-focused mobile
              and web applications using
              <span className="font-semibold text-blue-500"> React Native</span>
              ,<span className="font-semibold text-cyan-500"> React</span>, and
              <span className="font-semibold text-blue-600"> TypeScript</span>.
              <br />
              <br />I turn complex ideas into powerful digital solutions —
              optimized for{' '}
              <span className="font-semibold text-black">speed</span>,{' '}
              <span className="font-semibold text-black">scalability</span>, and{' '}
              <span className="font-semibold text-black">
                exceptional user experience
              </span>
              . Let’s bring your ideas to life — starting today.
            </Typography>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
            <Button
              asChild
              variant="secondary"
              className="hover:bg-gray-200 transition-all duration-200">
              <Link
                href="#contact"
                className="flex items-center gap-2 hover:text-gray-900">
                <Mail size={18} />
                <Typography>Contact Me</Typography>
              </Link>
            </Button>
            <Button
              asChild
              variant="default"
              className="bg-primary hover:bg-orange-600 transition-all duration-200">
              <Link
                href="/Ranvijay-CV.pdf"
                download
                className="flex items-center gap-2">
                <Download size={18} />
                <Typography>Download CV</Typography>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hover:border-gray-400 transition-all duration-200">
              <Link href="#projects" className="flex items-center gap-2">
                <span>🚀</span>
                <Typography>View Projects</Typography>
              </Link>
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
