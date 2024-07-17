import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

export function MainHeroCarousel() {
  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        autoPlay={{ delay: 5000, disableOnInteraction: false }}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[600px] w-full overflow-hidden">
              <img
                src="https://utfs.io/f/a6397bed-3a00-42ac-b845-86de975df6e4-1d.png"
                alt="Image 1"
                width="1920"
                height="600"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center text-primary-foreground">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Welcome to United Roblox!
                </h1>
                <p className="max-w-[700px] text-lg md:text-xl">
                  Welcome to our Roblox Aviation Group! We are thrilled to have
                  you aboard. Whether you are a seasoned pilot or just starting
                  your aviation journey, our community is here to support and
                  share the skies with you. Fly high and have fun!
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[600px] w-full overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Hero Image 2"
                width="1920"
                height="600"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center text-primary-foreground">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Unleash Your Creativity
                </h1>
                <p className="max-w-[700px] text-lg md:text-xl">
                  Discover a platform that empowers you to build stunning web
                  applications with ease. Unlock your full potential.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore Features
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[600px] w-full overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Hero Image 3"
                width="1920"
                height="600"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center text-primary-foreground">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Accelerate Your Web Development
                </h1>
                <p className="max-w-[700px] text-lg md:text-xl">
                  Streamline your workflow and focus on building innovative web
                  applications with our powerful platform.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-primary transition-colors">
          <ChevronLeftIcon className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </div>
        <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-primary transition-colors">
          <ChevronRightIcon className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </div>
        <div className="swiper-pagination absolute bottom-4 flex justify-center gap-2 text-primary-foreground" />
      </Carousel>
    </section>
  );
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
