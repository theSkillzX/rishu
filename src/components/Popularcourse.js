import React from "react";
import code from "../assets/code.jpeg";
import code1 from "../assets/code1.jpg";
import code2 from "../assets/code2.jpg";

const Blog = () => {
  return (
    <section className="py-0 md:py-0 bg-white dark:text-gray " id="courses">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-5xl text-berry font-bold">Popular Courses</h2>
          <p className="font-serif text-sm dark:text-gray-400 rounded-2xl">
            Explore our latest courses
          </p>
        </div>
        <div className="w-[80%] m-auto grid grid-cols-1  gap-x-12 gap-y-8 lg:grid-cols-3 ">
          {/* First card */}
          <article className="flex flex-col rounded-xl bg-darkwhite3">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-full dark:bg-gray-500 rounded-2xl"
                src={code2}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xl tracking-wider uppercase hover:underline dark:text-berry font-bold"
              >
                3D Designing - Basic Course and Figma Basic
              </a>
              <h3 className="flex-1 py-2 text-sm font-semibold leading-snug">
                Don't miss the chance to join our 3D Designing Masterclass led
                by Aditya Sir, Alongside learning top-notch website designing
                using Figma, Enroll now to gain creative expertise.
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span className="text-lg font-medium text-berry">₹ 4,999</span>
                <a href="/Pages">
                  <button class="bg-berry  text-white font-bold py-2 px-4 rounded mr-0 focus:bg-mauve ">
                    Enroll Now
                  </button>
                </a>
              </div>
            </div>
          </article>
          {/* Second card */}
          <article className="flex flex-col bg-darkwhite3 rounded-lg">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-full rounded-2xl dark:bg-gray-500"
                src={code1}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xl tracking-wider uppercase hover:underline dark:text-berry font-bold"
              >
                MERN Stack Web Development
              </a>
              <h3 className="flex-1 py-2 text-sm font-semibold leading-snug">
                Ignite your web development journey with our captivating MERN
                Stack lecture. Master the art of building dynamic web
                applications using MongoDB, Express.js, React.js, and Node.js.
                Join us now and unleash your potential in the world of web
                development.
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span className="text-lg font-medium text-berry">₹ 4,999</span>
                <a href="/Pages">
                  <button class="bg-berry  text-white font-bold py-2 px-4 rounded mr-0 focus:bg-mauve ">
                    Enroll Now
                  </button>
                </a>
              </div>
            </div>
          </article>
          {/* Third card */}
          <article className="flex flex-col rounded-2xl bg-darkwhite3">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-full rounded-2xl dark:bg-gray-500"
                src={code}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xl tracking-wider uppercase hover:underline dark:text-berry font-bold"
              >
                C and C++ for Everybody Specialization
              </a>
              <h3 className="flex-1 py-2 text-sm font-semibold leading-snug">
                Master C and C++ programming with our specialized courses. Level
                up your coding skills and unlock endless possibilities in
                software development. Enroll now and become a proficient
                programmer.
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span className="text-lg font-medium text-berry">₹ 4,999</span>
                <a href="/Pages">
                  <button class="bg-berry  text-white font-bold py-2 px-4 rounded mr-0 focus:bg-mauve ">
                    Enroll Now
                  </button>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
