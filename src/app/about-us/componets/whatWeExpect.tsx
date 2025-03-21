'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    title: 'Set Clear Expectations',
    description:
      'We can enjoy the trip best when we know the expectations from the trip...',
  },
  {
    title: 'Define Your Budget',
    description:
      'Most of us hesitate to reveal our budget, or there’s a mismatch between our budget and expectations...',
  },
  {
    title: 'Review The Offer',
    description:
      'Trust us, but not blindly. Since we haven’t met in person, we encourage you to review our offer...',
  },
  {
    title: 'Share Accurate Information',
    description:
      'While most travelers provide us with the necessary information, some may overlook or delay...',
  },
];

const AnimatedList = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Dynamic container height calculation
  const cardHeight = 150; // Approximate height of each card
  const overlap = 75; // Overlap by half the card height
  const containerHeight = items.length * cardHeight - (items.length - 1) * overlap + 100; // Extra space

  return (
    <div className="flex max-sm:flex-col gap-6 p-8 mt-14 max-sm:p-4 max-sm:mt-10">
      {/* Title and description */}
      <div className="max-sm:w-full">
        <h2 className="text-3xl max-sm:text-2xl font-bold">What We Expect from You</h2>
        <p className="text-gray-600 max-w-lg text-base max-sm:text-sm">
          Great travel experiences are a two-way street. To ensure your journey is as magical as planned, we encourage you to:
        </p>
      </div>

      {/* Scrollable Container with Responsive Height */}
      <div
        ref={containerRef}
        className="overflow-y-auto relative scrollbar-hide max-sm:h-64 h-auto"
        style={{ height: `${containerHeight}px` }} // Dynamic height
      >
        {items.map((item, index) => (
          <AnimatedCard
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            scrollYProgress={scrollYProgress}
            cardHeight={cardHeight}
            overlap={overlap}
          />
        ))}
      </div>
    </div>
  );
};

import { MotionValue } from 'framer-motion';

interface AnimatedCardProps {
  index: number;
  title: string;
  description: string;
  scrollYProgress: MotionValue<number>;
  cardHeight: number;
  overlap: number;
}

const AnimatedCard = ({ index, title, description, scrollYProgress, cardHeight, overlap }: AnimatedCardProps) => {
  const cardRef = useRef(null);

  // Calculate the top position for overlapping
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [index * cardHeight, index * (overlap + 20)] // Add small extra spacing
  );
  
  return (
    <motion.div
      ref={cardRef}
      style={{ top }}
      className="p-6 bg-white rounded-xl shadow-lg border-l-12 border-blue-400 sticky w-full mb-4 max-sm:p-4"
    >
      <h3 className="font-serif text-lg  max-sm:text-sm">{title}</h3>
      <p className="text-gray-600 mt-2 max-sm:text-sm">{description}</p>
    </motion.div>
  );
};

export default AnimatedList;
