import { DribbbleIcon, MailIcon, MapPinIcon } from 'lucide-react';
import Link from 'next/link';
import { GithubSvg, LinkedInSvg } from '@assets/svgs';
import { Button } from '@components/ui/button';
import { Card, CardContent } from '@components/ui/card';
import { Checkbox } from '@components/ui/checkbox';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Textarea } from '@components/ui/textarea';

export default function ContactSection() {
  return (
    <section id="contact" className="flex items-center justify-center">
      <div className="site_spacing w-full">
        <div className="py-16 grid lg:grid-cols-2 gap-16 md:gap-10">
          <div>
            <div className="flex flex-col gap-y-5">
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                Contact
              </h2>
              <b>Let’s work together!</b>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground">
                I’m always open to discussing exciting new projects, creative
                collaborations, or any opportunity where I can contribute to
                turning bold ideas into reality.
                <br />
                <br />
                Whether you’re building something from scratch, refining an
                existing concept, or just want to brainstorm possibilities, I’d
                love to be part of your journey.
                <br />
                <br />
                Let’s connect, share visions, and create something meaningful
                together.
                <br />
                <br />
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 py-5 pb-7">
              <div>
                <div className="flex flex-row items-center gap-x-3">
                  <div className="h-8 w-8 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <MailIcon height={15} width={15} />
                  </div>
                  <h3 className="font-semibold text-xl">Email</h3>
                </div>
                <Link
                  className="font-medium text-primary"
                  href="mailto:ranvijaychouhan12@gmail.com">
                  ranvijaychouhan12@gmail.com
                </Link>
              </div>
              <div>
                <div className="flex flex-row items-center gap-x-3">
                  <div className="h-8 w-8 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <MapPinIcon height={15} width={15} />
                  </div>
                  <h3 className="font-semibold text-xl">Location</h3>
                </div>
                <Link
                  className="font-medium text-primary"
                  href="https://map.google.com"
                  target="_blank">
                  Bangalore, India.
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <Link href="">
                <LinkedInSvg />
              </Link>
              <Link href="">
                <GithubSvg />
              </Link>
              <Link href="">
                <DribbbleIcon />
              </Link>
              <Link href="">
                <MailIcon />
              </Link>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-accent shadow-none">
            <CardContent className="p-6 md:p-10">
              <form>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      placeholder="First name"
                      id="firstName"
                      className="mt-1.5 bg-white h-11 shadow-none"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      placeholder="Last name"
                      id="lastName"
                      className="mt-1.5 bg-white h-11 shadow-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      id="email"
                      className="mt-1.5 bg-white h-11 shadow-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      className="mt-1.5 bg-white shadow-none"
                      rows={6}
                    />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <Checkbox id="acceptTerms" defaultChecked />
                    <Label htmlFor="acceptTerms">
                      You agree to our{' '}
                      <Link href="#" className="underline">
                        terms and conditions
                      </Link>
                      .
                    </Label>
                  </div>
                </div>
                <Button className="mt-6 w-full" size="lg">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
