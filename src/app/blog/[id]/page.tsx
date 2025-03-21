"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import Footer from "@/components/footer/FooterLayout";
import Navbar from "@/components/navbar/Navbar";
import LoadingAnimation from "@/assets/LoadingAnimation.json";
import dynamic from "next/dynamic";
import { GoClock } from "react-icons/go";
import Image from 'next/image'
import he from "he";
import Placeholder from "@/app/blogs/assets/placeholder.png"; // Adjust the path as necessary
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

const BlogPost = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extract blog ID from URL
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    saveInfo: false,
  });
  const [hasCommented, setHasCommented] = useState(false);
  const [mostRecentPost, setMostRecentPost] = useState<Array<{ id: number; title: { rendered: string }; date: string; featuredImage: string }>>([]);
  interface Post {
    content: { rendered: string };
    title: { rendered: string };
    _embedded?: {
      "wp:featuredmedia"?: [{ source_url: string }];
    };
  }
  
  const [post, setPost] = useState<Post | null>(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const commentedBefore = localStorage.getItem("hasCommented");
    if (commentedBefore === "true") {
      setHasCommented(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (hasCommented) {
      toast.error("You have already submitted a comment!", { autoClose: 3000 });
      return;
    }

    if (!formData.name || !formData.email || !formData.comment) {
      toast.error("All fields are required!", { autoClose: 3000 });
      return;
    }

    console.log("Submitted Data:", formData);
    localStorage.setItem("hasCommented", "true");
    setHasCommented(true);
    toast.success("Comment submitted successfully!", { autoClose: 3000 });
    setFormData({ name: "", email: "", comment: "", saveInfo: false });
  };

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://blog.lazyatra.com/wp-json/wp/v2/posts/${id}?_embed`);
        const data = await res.json();
        setPost(data);

        if (data._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
          setFeaturedImage(data._embedded["wp:featuredmedia"][0].source_url);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://blog.lazyatra.com/wp-json/wp/v2/posts?_embed");
        const data = await res.json();

        const sortedPosts = data
          .sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 3)
          .map((post: { _embedded?: { "wp:featuredmedia"?: [{ source_url: string }] } }) => ({
            ...post,
            featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || Placeholder.src,
          }));

        setMostRecentPost(sortedPosts);
        console.log("mostRecentPosts are:", sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const renderContentWithAnimations = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = DOMPurify.sanitize(html);

    tempDiv.querySelectorAll("img").forEach((img) => {
      const wrapper = document.createElement("div");
      wrapper.className = "relative group my-4 overflow-hidden rounded-lg shadow-lg";
      img.className = "w-full max-h-[300px] sm:max-h-[400px] object-cover transition-transform duration-300 group-hover:scale-105";
      wrapper.appendChild(img.cloneNode(true));
      img.replaceWith(wrapper);
    });

    return { __html: tempDiv.innerHTML };
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" />
      {loading ? (
        <div className="flex justify-center w-full items-center h-screen">
          <Lottie
            options={{
              animationData: LoadingAnimation,
              loop: true,
              autoplay: true,
            }}
            height={200}
            width={200}
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row mx-4 md:mx-16 justify-around mt-8 md:mt-16 gap-8 md:gap-10">
          {/* Main Content */}
          <div className=" md:max-w-3xl max-sm:max-w-xl">
            {post && <h3 className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-tight tracking-tight">{he.decode(post.title.rendered)}</h3>}

            {featuredImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative group my-8 overflow-hidden rounded-lg shadow-lg"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={featuredImage}
                  alt="Blog Featured"
                  className="w-full h-auto md:max-h-[500px] object-cover"
                />
              </motion.div>
            )}

            <div
              className="prose prose-sm md:prose-lg prose-gray max-w-full leading-relaxed space-y-6"
              dangerouslySetInnerHTML={renderContentWithAnimations(post?.content?.rendered || "")}
            />

            <style jsx global>{`
              .wp-block-embed-youtube iframe {
                @apply w-full h-48 sm:h-64 md:h-96 rounded-lg shadow-lg;
              }
            `}</style>

            {/* Comment Form */}
            <div className="max-w-2xl mx-auto mt-8 md:mt-12 p-4 md:p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Leave A Comment</h2>
              <p className="text-gray-500 text-sm mb-4">
                Your email address will not be published. Required fields are marked *
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name*</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email*</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Comment*</label>
                  <textarea
                    name="comment"
                    placeholder="Type your Comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    rows={4}
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-600">Save my name, and email in this browser for the next time I comment.</label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full transition-all bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-serif shadow-lg duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Recent Blogs Sidebar */}
          <div className="w-full md:max-w-2xl mt-8 md:mt-0">
            <h4 className="font-sans text-2xl md:text-4xl text-gray-800">Most recent blogs</h4>
            {mostRecentPost.map((recentPost, index) => (
              <motion.div
                key={recentPost.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className="mt-6 md:mt-12"
              >
                {recentPost.featuredImage && (
                  <div className="flex justify-center" onClick={() => router.push(`${recentPost?.id}`)}>
                    <Image
                      src={recentPost?.featuredImage}
                      alt={recentPost?.title.rendered}
                      className="w-full h-48 md:w-96 md:h-44 object-cover rounded-md"
                      onError={(e) => {
                        e.currentTarget.src = Placeholder.src;
                      }}
                      height = {100}
                      width = {100}
                    />
                  </div>
                )}
                <div className="flex items-center mt-2">
                  <GoClock className="text-xl md:text-2xl text-gray-950" />
                  <p className="text-gray-500 ml-2 text-sm md:text-base">{new Date(recentPost.date).toDateString()}</p>
                </div>
                <h6 onClick={() => router.push(`${recentPost?.id}`)} className="text-md cursor-pointer font-semibold mt-2">{he.decode(recentPost?.title.rendered)}</h6>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="md:mx-36 mx-4">
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;