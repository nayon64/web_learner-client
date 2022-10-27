import React from 'react';

const FAQ = () => {
	return (
		 <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              WEB LEARNER
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Learn</span>
            </span>{' '}
            With web learner. This is provied most popular course.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            All the world in our hand. We can get any information in a short time. Why don't you use them. So, start now to learning,
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                1. What is online learning like?
              </p>
              <p className="text-gray-700">
                For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people.
                <br />
                <br />
                 Point out that there are different types of online courses and programs, and that they'll have to decide which is best for them.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                2. Can I learn at my own pace?
              </p>
              <p className="text-gray-700">
                This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available.
                <br />
                <br />
                Today's world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                3. Are you accredited or licensed by educational organizations?
              </p>
              <p className="text-gray-700">
                There isn't always a need for licensing or accreditation for online courses. However, some programs do require it. Either way, people will usually ask what type of training or background you have, as well as any licensing that's available if that's relevant.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                4. Does online learning really work?
              </p>
              <p className="text-gray-700">
				There’s always a skeptic, and when it comes to online learning, there are often several of them.
				<br/>
				<br/>
				Everyone wants to know if online courses “really work”—and that’s a hard question to answer because there are several factors to consider. On a general basis, yes, online learning can be effective.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                5. What types of assignments do you give?
              </p>
              <p className="text-gray-700">
                Like knowing the format of online learning, people often want to know the type of work they’ll be doing when they take online courses.
                <br />
                <br />
                Be sure to provide a glimpse of what you offer here and link to previous projects or assignments if you can. You can also link to course or program pages. 
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                6. What are the requirements to take the courses or sign up with your website?
              </p>
              <p className="text-gray-700">
                People will want to know how to get started. You can link them to the pages on your website that help them through that process, but you’ll also want to take the time to explain it to them here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
};

export default FAQ;