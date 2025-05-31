'use client';

import { useState } from 'react';

import { mockCards } from '@/mock-data';

import { Title } from '../title';
import { CardOptions } from './card-options';
import { FeedbackForm } from '../feedback-form';

export const LearningOptions = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState<string | null>(null);

  return (
    <section id="learning_options" className="mb-20 px-5 sm:mb-24 md:mb-28 lg:mb-40">
      <div className="relative z-[4] m-auto mb-5 text-center sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        <Title className="max-w-[651px]" text="Які є формати навчання" />
      </div>
      <div className="even:[&_div_.lastItem]:last:bg-brightBg relative z-10 m-auto flex flex-wrap items-stretch gap-5 sm:w-fit xl:flex-row [&_div_.lastItem]:odd:bg-white">
        {mockCards.map((card, index) => (
          <CardOptions
            {...card}
            setActionType={setActionType}
            key={`${card.title}_${index}`}
            onClick={() => setIsOpen(true)}
          />
        ))}
      </div>
      <FeedbackForm isOpen={isOpen} setIsOpen={setIsOpen} actionType={actionType} />
    </section>
  );
};
