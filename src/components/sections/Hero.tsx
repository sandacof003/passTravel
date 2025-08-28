import Button from '../ui/Button';

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10">
                  Announcing our next-generation B2B travel solutions
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Transform Your Business Travel Experience
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Elevate your corporate travel with our premium B2B tour packages and custom solutions. Experience seamless planning, exclusive deals, and exceptional service.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button variant="primary" size="lg">
                  Explore Tours
                </Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900/80 absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900" />
      </div>
    </div>
  );
}
