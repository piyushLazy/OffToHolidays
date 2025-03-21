"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/FooterLayout";
import Background from "@/app/blogs/assets/bg.png";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import LoadingAnimation from "@/assets/LoadingAnimation.json";
import Placeholder from "@/app/blogs/assets/placeholder.png";
import { GoClock } from "react-icons/go";
import { motion } from "framer-motion";
import {useRouter} from "next/navigation"
import he from "he"
import Image from 'next/image'
interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  content: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
  featuredImage?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
 const router̥  = useRouter()
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://blog.lazyatra.com/wp-json/wp/v2/posts?_embed");
        const data = await res.json();
        setPosts(data);
        console.log("API Response:", data); // Log the full API response
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const truncateContent = (content: string, wordLimit: number) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return content;
  };

  const formattedPosts = posts.map((post: Post) => ({
    id: post.id,
    title: post.title.rendered, // Access the rendered title
    excerpt: post.excerpt.rendered, // Access the rendered excerpt
    date: post.date,
    content: truncateContent(post.content.rendered, 20), // Access the rendered content
    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || Placeholder.src,
    link: post?.link, // Use the direct link from the API
  }));

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <Lottie options={{ animationData: LoadingAnimation }} height={400} width={400} />
        </div>
      ) : (
        <>
          <div
            className="relative w-full h-[200px] max-sm:h-[150px] md:h-[200px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Background.src})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="h-full w-full flex items-end p-4 max-sm:p-2 md:pl-16 justify-start">
              <h4 className="relative font-serif text-white text-2xl max-sm:text-xl md:text-4xl z-20">
                Blogs
              </h4>
            </div>
          </div>
          <nav className="text-gray-600 text-md mb-4 mx-4 max-sm:mx-2 md:ml-18 md:mt-6">
            <span>Home</span> &gt; <span className="text-blue-500">Blogs</span>
          </nav>
        </>
      )}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {formattedPosts.map((post, index) => (
  <motion.div
  key={post.id}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  whileHover="hover"
  transition={{ delay: index * 0.1 }}
  className="bg-white p-4 shadow rounded-lg cursor-pointer"
>
              {post.featuredImage && (
                <div className="flex justify-center"    onClick = { ()=> (router̥.push(`blog/${post?.id}`))}>
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-72 object-cover rounded-md"
                    onError={(e) => {
                      e.currentTarget.src = Placeholder.src;
                    }}
                    height = {100}
                    width = {100}
                  
                    objectFit="cover"
                    priority
                  />
                </div>
              )}
              <div className="flex items-center mt-2">
                <GoClock className="text-2xl text-gray-950" />
                <p className="text-gray-500 ml-2">{new Date(post.date).toDateString()}</p>
              </div>
              <h6 onClick = { ()=> (router̥.push(`blog/${post?.id}`))} className="cursor-pointer text-md font-semibold mt-2">{he.decode(post.title)}</h6>
              <div
                className="text-gray-600 font-sans mt-2"
                dangerouslySetInnerHTML={{ __html: post.content }} // Render HTML content
              />
              <p
              onClick = { ()=> (router̥.push(`blog/${post?.id}`))}
                className="text-blue-400 font-serif mt-2 inline-block"
              
              >
                Read More &gt;&gt;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="bg-white p-4 shadow rounded-lg h-fit sticky top-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded-md mb-4" />
          <ul className="space-y-2">
            {["All", "Advise", "Andaman", "Bihar", "Festivals", "Hotel Reviews", "Hotels", "Itinerary"].map((category, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="md:mx-36 mx-6">
        <Footer/>
      </div>
    </>
  );
}