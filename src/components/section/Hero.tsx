import { Download, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { Typography } from '@components/ui/typography';

export default function HeroSection() {
  return (
    <section id="home" className="site_spacing min-h-screen w-full flex py-12">
      <div className="w-full flex flex-col justify-between md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col gap-y-4 text-center md:text-left md:mt-0 sm:mt-10">
            <Typography variant="p" affects="lead" className="text-gray-500">
              👋 Hello there!
            </Typography>
            <Typography
              variant="h1"
              className="flex items-end gap-2 self-center md:self-start text-left">
              <Typography
                variant="p"
                className="text-gray-400 text-2xl font-medium">
                I&apos;m
              </Typography>
              Ranvijay
            </Typography>
            <Typography
              variant="p"
              affects="lead"
              className="text-gray-500 max-w-[80%] md:max-w-[90%] text-md self-center md:self-start text-left">
              I specialize in building fast, scalable, and user-focused web and
              mobile applications using React Native, React, and TypeScript.
              <br />
              <br />
              Whether you&apos;re starting from scratch, scaling a product, or
              looking to refine your UI/UX — I&apos;m here to help bring your
              vision to life.
            </Typography>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <Button
              asChild
              variant="default"
              className="bg-gray-900 text-white hover:bg-gray-800">
              <Link
                href="/Ranvijay-CV.pdf"
                download
                className="flex items-center gap-2">
                <Download size={18} />
                Download CV
              </Link>
            </Button>
            <Button asChild variant="secondary" className=" hover:bg-gray-200">
              <Link href="#contact" className="flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Image
            src="user_profile.jpg"
            alt="Ranvijay"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
