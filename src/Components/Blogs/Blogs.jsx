const Blogs = () => {
  return (
      <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="w-full">
                  <article className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl bg-white">
                      <img
                          alt="Interior Design Tips"
                          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                          className="h-64 w-full object-cover"
                      />

                      <div className="p-6">
                          <time dateTime="2024-02-15" className="block text-xs text-gray-500">15th Feb 2024</time>

                          <a href="#" className="block mt-2 hover:underline">
                              <h3 className="text-xl font-semibold text-gray-900">Essential Tips for Modern Interior Design</h3>
                          </a>

                          <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-600">
                              Discover the key principles of modern interior design, from space optimization to color psychology. 
                              Learn how to transform your living space into a harmonious environment that reflects your personality.
                          </p>

                          <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                              Read More
                              <span aria-hidden="true" className="block transition-all group-hover:translate-x-0.5">→</span>
                          </a>
                      </div>
                  </article>
              </div>

              <div className="w-full">
                  <article className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl bg-white">
                      <img
                          alt="Contemporary Design Trends"
                          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                          className="h-64 w-full object-cover"
                      />

                      <div className="p-6">
                          <time dateTime="2024-02-14" className="block text-xs text-gray-500">14th Feb 2024</time>

                          <a href="#" className="block mt-2 hover:underline">
                              <h3 className="text-xl font-semibold text-gray-900">2024 Contemporary Design Trends</h3>
                          </a>

                          <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-600">
                              Explore the latest trends in contemporary interior design. From sustainable materials to smart home integration,
                              discover what's shaping modern living spaces this year.
                          </p>

                          <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                              Read More
                              <span aria-hidden="true" className="block transition-all group-hover:translate-x-0.5">→</span>
                          </a>
                      </div>
                  </article>
              </div>
          </div>

          <div className="flex gap-4 mb-8">
              <div className="w-4/5">
                  <article className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl bg-white">
                      <img
                          alt="Minimalist Living Spaces"
                          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                          className="h-72 w-full object-cover transition group-hover:grayscale-[50%]"
                      />

                      <div className="p-6">
                          <time dateTime="2024-02-13" className="block text-xs text-gray-500">13th Feb 2024</time>

                          <a href="#" className="block hover:underline">
                              <h3 className="text-2xl font-semibold text-gray-900">The Art of Minimalist Living</h3>
                          </a>

                          <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-600">
                              Embrace the beauty of simplicity with our guide to minimalist living. Learn how to create 
                              spaces that are both functional and aesthetically pleasing while maintaining a clutter-free environment.
                          </p>

                          <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                              Read More
                              <span aria-hidden="true" className="block transition-all group-hover:translate-x-0.5">→</span>
                          </a>
                      </div>
                  </article>
              </div>
              <div className="w-1/5">
                  <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] h-full">
                      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 h-full">
                          <time dateTime="2024-02-12" className="block text-xs text-gray-500">12th Feb 2024</time>

                          <a href="#">
                              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                  Quick Tips for Home Organization
                              </h3>
                          </a>

                          <div className="mt-4 flex flex-wrap gap-1">
                              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                  Organization
                              </span>

                              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                  Lifestyle
                              </span>
                          </div>
                      </div>
                  </article>
              </div>
          </div>

          <div className="flex gap-4">
              <div className="w-1/2">
                  <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 h-full">
                      <span className="inline-block rounded bg-blue-600 p-2 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                      </span>

                      <a href="#">
                          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                              Sustainable Interior Design Practices
                          </h3>
                      </a>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                          Discover eco-friendly approaches to interior design. Learn about sustainable materials, 
                          energy-efficient solutions, and how to create environmentally conscious living spaces.
                      </p>

                      <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                          Read More
                          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">→</span>
                      </a>
                  </article>
              </div>

              <div className="w-1/2">
                  <article className="flex bg-white transition hover:shadow-xl h-full">
                      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                          <time dateTime="2024-02-11" className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                              <span>2024</span>
                              <span className="w-px flex-1 bg-gray-900/10"></span>
                              <span>Feb 11</span>
                          </time>
                      </div>

                      <div className="hidden sm:block sm:basis-56">
                          <img
                              alt="Color Theory in Design"
                              src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                              className="aspect-square h-full w-full object-cover"
                          />
                      </div>

                      <div className="flex flex-1 flex-col justify-between">
                          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                              <a href="#">
                                  <h3 className="font-bold uppercase text-gray-900">
                                      Understanding Color Theory in Interior Design
                                  </h3>
                              </a>

                              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                  Master the art of color combinations in interior design. Learn how different colors affect mood,
                                  space perception, and create harmonious environments in your home.
                              </p>
                          </div>

                          <div className="sm:flex sm:items-end sm:justify-end">
                              <a href="#" className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                                  Read Blog
                              </a>
                          </div>
                      </div>
                  </article>
              </div>
          </div>
      </div>
  );
};

export default Blogs;