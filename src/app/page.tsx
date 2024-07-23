import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { SocialLink } from '@/components/SocialLink'
import { imagePath } from '@/lib/image'

export const metadata: Metadata = {
  title: 'Tanner Welsh',
  description:
    "Hi! I'm Tanner, a software engineer & educator living in Colorado.",
}

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs lg:max-w-none">
            <Image
              src={imagePath('portrait-bw.jpg')}
              alt="Portrait of Tanner"
              width="1024"
              height="1024"
              className="aspect-square w-fit rounded-md bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Howdy, folks.
          </h1>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            I&rsquo;m Tanner, a software engineer &amp; lover of learning.
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              There are not many things I enjoy more than learning new things. I
              have been lucky enough in my professional life to work with some
              great people to build startups in education and social science.
            </p>
            <p>
              As a full-stack engineer, I focus on writing low-complexity,
              thoughtful, and readable code. If forced to pick a favorite
              language, I would likely opt for Ruby. These days I mostly work in
              TypeScript.
            </p>
            <p>
              As an educator, I strive to design curricula and environments that
              are human-scale, contextualized, and highly effective. My most
              recent project is a course focused on helping early-career
              software engineers learn how to read and understand code more
              effectively.
            </p>
            <p>
              When not on my computer or steeping in a good book, I can be found
              wandering the wild with my bike or backpack.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/tannerwelsh"
              icon={GitHubIcon}
              className="mt-4"
            >
              Coding on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/tannerwelsh"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Businessing on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/oysterbubble"
              icon={InstagramIcon}
              className="mt-4"
            >
              Noodling on Instagram
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
