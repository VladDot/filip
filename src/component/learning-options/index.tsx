'use client';

import { useState } from 'react';

import { Title } from '../title';
import { mockCards } from './mock-config';
import { CardOptions } from './card-options';
import { FeedbackForm } from '../feedback-form';

export const LearningOptions = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="learning_options" className="mb-20 px-5 sm:mb-24 md:mb-28 lg:mb-40">
      <div className="relative z-[4] m-auto mb-5 text-center sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        <Title className="max-w-[651px]" text="Обери формат навчання, який підходить саме тобі" />
      </div>
      <div className="even:[&_div_.lastItem]:last:bg-brightBg relative z-10 m-auto flex w-full flex-col items-stretch gap-5 sm:w-fit xl:flex-row [&_div_.lastItem]:odd:bg-white">
        {mockCards.map((card, index) => (
          <CardOptions key={`${card.title}_${index}`} {...card} onClick={() => setIsOpen(true)} />
        ))}
      </div>
      <FeedbackForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};
