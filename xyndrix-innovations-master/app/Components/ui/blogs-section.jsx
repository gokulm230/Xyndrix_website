"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

gsap.registerPlugin(ScrollTrigger);

// Expandable Card Components
const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const BlogsSection = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const [active, setActive] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(0); // Default to first blog
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const blogs = [
    {
      title: "The Journey Behind Xyndrix",
      description:
        "Discover how Xyndrix started its mission to transform businesses through innovative digital solutions.",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      ctaText: "Read More",
      ctaLink:
        "https://medium.com/@xyndrixinfo/the-journey-behind-xyndrix-312a2508c1dc",
      category: "Company Story",
      date: "Oct 20, 2024",
      readTime: "5 min read",
      content: () => {
        return (
          <div>
            <p className="mb-4">
              From vision to reality - explore our remarkable journey in digital
              transformation. Xyndrix started with a simple yet powerful vision:
              to transform businesses through innovative digital solutions and
              cutting-edge technology.
            </p>
            <p className="mb-4">
              Our journey began with understanding the challenges businesses
              face in today's rapidly evolving digital landscape. We realized
              that many companies struggle to keep up with technological
              advancements while maintaining their core operations.
            </p>
            <p>
              This insight led us to create comprehensive solutions that not
              only address immediate needs but also prepare businesses for
              future challenges and opportunities.
            </p>
          </div>
        );
      },
    },
    {
      title: "Modern Web Development Trends",
      description:
        "Explore the cutting-edge technologies shaping the future of web development.",
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      ctaText: "Read More",
      ctaLink: "#",
      category: "Technology",
      date: "Oct 15, 2024",
      readTime: "7 min read",
      content: () => {
        return (
          <div>
            <p className="mb-4">
              The web development landscape is constantly evolving, with new
              frameworks, tools, and methodologies emerging regularly.
              Understanding these trends is crucial for building modern,
              efficient, and scalable applications.
            </p>
            <p className="mb-4">
              From progressive web apps to serverless architecture, from AI
              integration to advanced CSS features, developers today have more
              powerful tools than ever before.
            </p>
            <p>
              Learn about the latest technologies that are defining the future
              of web development and how they can benefit your next project.
            </p>
          </div>
        );
      },
    },
    {
      title: "Digital Transformation Success",
      description:
        "Real-world examples of digital transformation success stories and strategies.",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      ctaText: "Read More",
      ctaLink: "#",
      category: "Case Studies",
      date: "Oct 10, 2024",
      readTime: "6 min read",
      content: () => {
        return (
          <div>
            <p className="mb-4">
              Digital transformation is more than just adopting new technologies
              - it's about fundamentally changing how businesses operate and
              deliver value to customers.
            </p>
            <p className="mb-4">
              Through detailed case studies, we explore how companies across
              various industries have successfully navigated their digital
              transformation journeys, overcoming challenges and achieving
              remarkable results.
            </p>
            <p>
              Discover the strategies, tools, and mindset shifts that drive
              successful digital transformation initiatives.
            </p>
          </div>
        );
      },
    },
    {
      title: "AI & Machine Learning in Business",
      description:
        "How artificial intelligence is revolutionizing business operations across industries.",
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      ctaText: "Read More",
      ctaLink: "#",
      category: "AI & Innovation",
      date: "Oct 5, 2024",
      readTime: "8 min read",
      content: () => {
        return (
          <div>
            <p className="mb-4">
              Artificial Intelligence and Machine Learning are no longer
              futuristic concepts - they're powerful tools that businesses are
              using today to gain competitive advantages, improve efficiency,
              and create better customer experiences.
            </p>
            <p className="mb-4">
              From predictive analytics to automated customer service, from
              supply chain optimization to personalized marketing, AI is
              transforming every aspect of business operations.
            </p>
            <p>
              Explore real-world applications of AI and ML technologies and
              understand how they can be leveraged to drive business growth and
              innovation.
            </p>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                    <div className="flex items-center text-xs text-neutral-500 mt-2">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full mr-2">
                        {active.category}
                      </span>
                      <time>{active.date}</time>
                      <span className="mx-2">•</span>
                      <span>{active.readTime}</span>
                    </div>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div ref={containerRef} className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <span className="inline-block py-2 px-4 bg-blue-50 text-blue-600 font-semibold rounded-full mb-4 border border-blue-200">
              Latest Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Our <span className="text-blue-600">Blog</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and stories from
              the world of technology and digital transformation.
            </p>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Selected Blog Content */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={blogs[selectedBlog].src}
                  alt={blogs[selectedBlog].title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {blogs[selectedBlog].category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {blogs[selectedBlog].date}
                  </span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">
                    {blogs[selectedBlog].readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogs[selectedBlog].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {blogs[selectedBlog].description}
                </p>
                <div className="text-gray-700 leading-relaxed mb-6">
                  {typeof blogs[selectedBlog].content === "function"
                    ? blogs[selectedBlog].content()
                    : blogs[selectedBlog].content}
                </div>
                <a
                  href={blogs[selectedBlog].ctaLink}
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {blogs[selectedBlog].ctaText}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Blog List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                More Articles
              </h3>
              {blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelectedBlog(index)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                    selectedBlog === index
                      ? "bg-blue-50 border-blue-200 shadow-md"
                      : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <div className="flex gap-4">
                    <img
                      src={blog.src}
                      alt={blog.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            selectedBlog === index
                              ? "bg-blue-200 text-blue-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {blog.category}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {blog.date}
                        </span>
                      </div>
                      <h4
                        className={`font-semibold text-sm mb-1 truncate ${
                          selectedBlog === index
                            ? "text-blue-900"
                            : "text-gray-900"
                        }`}
                      >
                        {blog.title}
                      </h4>
                      <p
                        className={`text-xs line-clamp-2 ${
                          selectedBlog === index
                            ? "text-blue-700"
                            : "text-gray-600"
                        }`}
                      >
                        {blog.description}
                      </p>
                    </div>
                    {selectedBlog === index && (
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsSection;
