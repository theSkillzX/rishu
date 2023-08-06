import React from "react";
import code from "../assets/code.jpeg";
import code1 from "../assets/code1.jpg";
import code2 from "../assets/code2.jpg";

const Category = () => {
  return (
    <section
      className="py-0 md:py-0 bg-white dark:text-gray mt-20"
      id="courses"
    >
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-5xl text-berry font-bold">Courses Category</h2>
          <p className="font-serif text-sm dark:text-gray-400 rounded-2xl">
            Discover, Learn, Excel: SkillzX - Your Journey to Skillful Success
          </p>
        </div>
        <div className="w-[80%] m-auto grid grid-cols-1  gap-x-12 gap-y-8 lg:grid-cols-4 ">
          <article className="flex flex-col rounded-xl bg-darkwhite3">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
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
                Harmony of Strings & Keys
              </a>
              <h3 className="flex-1 py-2 text-sm font-semibold leading-snug">
                "Experience the Harmony of Strings & Keys with our music courses
                at SkillzX. Learn to play musical instruments like strings and
                keys, unlocking your creativity and passion for music."
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 flex flex-col items-center justify-center">
                <a href="/Pages">
                  <button class="bg-berry  text-white font-bold py-2 px-4 rounded mr-0 focus:bg-mauve ">
                    Enroll Now
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-xl bg-darkwhite3">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
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
                Entrepreneurship
              </a>
              <h3 className="flex-1 py-2 text-sm font-semibold leading-snug">
                "Discover the path to success with our Entrepreneurship course
                at SkillzX. Learn essential skills, strategies, and insights to
                launch and grow your own business confidently."
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 flex flex-col items-center justify-center">
                <a href="/Pages">
                  <button class="bg-berry  text-white font-bold py-2 px-4 rounded mr-0 focus:bg-mauve ">
                    Enroll Now
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-xl bg-darkwhite3">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
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
                Animation & 3D Designing
              </a>
              <h3 className="flex-1 py-2 text-sm font-semibold leading-snug">
                "Discover the world of 3D designing, bringing imagination to
                life, and craft captivating visuals with SkillzX's Graphic
                Designing course, excelling in digital communication."
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 flex flex-col items-center justify-center">
                <a href="/Pages">
                  <button class="bg-berry  text-white font-bold py-2 px-4 rounded mr-0 focus:bg-mauve ">
                    Enroll Now
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col rounded-xl bg-darkwhite3">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
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
                Development and Coding
              </a>
              <h3 className="flex-1 py-2 text-sm font-semibold leading-snug">
                "Embark on a journey of Development and Programming with
                SkillzX. Learn the art of coding, build innovative projects, and
                become a skilled developer ready for the tech industry."
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 flex flex-col items-center justify-center">
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

export default Category;
