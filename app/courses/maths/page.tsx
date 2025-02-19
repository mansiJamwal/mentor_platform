import Navbar from "@/app/components/navbar";
import EnrollNow from "@/app/components/enroll_now";
import Head from "next/head";
export default function English() {
  return (
    <div>
      <Head>
                <title>Maths Course for KG to 10th | AtoInfinity Hub</title>
                <meta name="description" content="Boost your child's Maths skills with our interactive course for KG to 10th grade. Problem-solving, real-world applications, and structured learning at AtoInfinity Hub." />
                <meta name="keywords" content="Maths course, KG to 10th, problem-solving, interactive learning, algebra, trigonometry, real-world maths, AtoInfinity Hub" />
                <meta name="author" content="AtoInfinity Hub" />
                <meta property="og:title" content="Maths Course for KG to 10th | AtoInfinity Hub" />
                <meta property="og:description" content="Master Maths with interactive learning, real-world applications, and structured problem-solving at AtoInfinity Hub." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com/maths" />
      </Head>
      <Navbar></Navbar>

      <div className="bg-[#f2f4fc] pt-14 pb-5 text-center">
        <h1 className="text-4xl font-bold">Maths Course</h1>
        <p className="mt-4 text-lg">For Students from KG to 10th</p>
      </div>

      <div className="bg-[#f2f4fc] pb-14 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg mb-4">
            Our Math course is carefully designed to build a strong foundation in mathematical concepts for students from
            Kindergarten to Grade 10, ensuring they develop critical problem-solving skills at every stage of their learning
            journey. For younger students, the course introduces basic number sense, shapes, patterns, and simple arithmetic
            through interactive activities and fun games, making learning enjoyable and engaging. As students advance, they delve
            deeper into concepts like fractions, decimals, geometry, and algebra, with a focus on logical reasoning and real-life
            applications. In the upper grades, the curriculum emphasizes advanced topics such as trigonometry, statistics, and
            quadratic equations, preparing students for higher-level problem-solving and competitive exams. This structured
            approach ensures that students not only excel in mathematics but also develop a lifelong appreciation for analytical
            thinking and practical problem-solving skills.
          </p>
        </div>
      </div>
      

      <div className="max-w-6xl mx-auto px-8 pt-10 pb-14">
        <h2 className="text-4xl font-bold text-center mb-10">Key Points</h2>

        <div className="flex justify-center flex-wrap gap-10">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
            <h3 className="text-xl font-semibold text-[#43438b] mb-4">Foundations in Mathematics</h3>
            <p className="text-lg text-gray-700">
              We believe a strong foundation in math is essential for critical thinking and problem-solving. Our course focuses on
              building essential numerical and analytical skills.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
            <h3 className="text-xl font-semibold text-[#43438b] mb-4">Engaging and Practical Learning</h3>
            <p className="text-lg text-gray-700">
              Our curriculum makes math fun and relatable through interactive activities, puzzles, and real-world applications of
              mathematical concepts.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
            <h3 className="text-xl font-semibold text-[#43438b] mb-4">Age-Appropriate Techniques</h3>
            <p className="text-lg text-gray-700">
              Designed for students from KG to Grade 10, our teaching methods are tailored to each age group, gradually introducing
              more advanced concepts as they progress.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
            <h3 className="text-xl font-semibold text-[#43438b] mb-4">Building Problem-Solving Confidence</h3>
            <p className="text-lg text-gray-700">
              Our course aims to empower students to approach mathematical problems with confidence and develop skills that prepare
              them for academic and real-life challenges.
            </p>
          </div>
        </div>

        <p className="mt-10 text-lg text-center text-gray-700">
          If you&apos;re a student from KG to 10th grade looking to strengthen your Maths skills, AtoInfinity Hub is here to guide
          you. Start your journey with us today and lay the groundwork for a brighter future filled with endless opportunities!
        </p>
      </div>

      <div className="bg-yellow-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">Affordable Maths Learning for Students</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* KG to 5th Fee Structure */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300">
              <h2 className="text-lg font-bold">KG to 5th</h2>
              <div className="flex justify-between" >
                <p className="text-gray-700 text-sm mb-4">2 Days/Week: ₹3500/month</p>
                <p className="text-gray-700 text-sm line-through">₹4000/month</p>
              </div>
              <div className="flex justify-between" >
                <p className="text-gray-700 text-sm mb-4">3 Days/Week: ₹5000/month</p>
                <p className="text-gray-700 text-sm line-through">₹6000/month</p>
              </div>
              <div className="flex justify-between" >
              <p className="text-gray-700 text-sm mb-4">5 Days/Week: ₹7500/month</p>
              <p className="text-gray-700 text-sm line-through">₹9000/month</p>
              </div>
            </div>

            {/* 6th to 10th Fee Structure */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300">
              <h2 className="text-lg font-bold">6th to 10th</h2>
              <div className="flex justify-between">
                  <p className="text-gray-700 text-sm mb-4">2 Days/Week: ₹4000/month</p>
                  <p className="text-gray-700 text-sm line-through">₹5000/month</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 text-sm mb-4">3 Days/Week: ₹5500/month</p>
                <p className="text-gray-700 text-sm line-through">₹7000/month</p>
              </div>

             <div className="flex justify-between">
                <p className="text-gray-700 text-sm mb-4">5 Days/Week: ₹8000/month</p>
                <p className="text-gray-700 text-sm line-through">₹10000/month</p>
             </div > 
            </div>
          </div>

            <div className="flex justify-center mt-8 space-x-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  🗓️
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Flexible Leaves
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  🕒
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Adjustable Schedule
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  🔄
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Easy Refunds
                </p>
              </div>
            </div>
          </div>
        </div>
  

      <EnrollNow></EnrollNow>
    </div>
  );
}
