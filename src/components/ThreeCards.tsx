import React from 'react';
import Image from 'next/image';

export type ThreeCardsVariant = 'elevated' | 'flat';

type Card = {
  title: string;
  description: string;
  imageUrl: string;
  ctaLabel: string;
  onCtaClick?: () => void;
  ctaHref?: string;
};

export interface ThreeCardsProps {
  cards: Card[];
  variant?: ThreeCardsVariant; // elevated = stronger shadow
  className?: string;
}

const ThreeCards: React.FC<ThreeCardsProps> = ({ cards, variant = 'elevated', className = '' }) => {
  const cardShadow = variant === 'elevated' ? 'shadow-xl' : 'shadow'; // change strength here

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {cards.slice(0, 3).map((card, idx) => (
        <div key={idx} className={`rounded-xl bg-white overflow-hidden ${cardShadow} flex flex-col`}>
          {/* Image: change aspect ratio or object-fit here */}
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src={card.imageUrl}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>

          {/* Content: adjust spacing and colors here */}
          <div className="p-4 flex flex-col gap-2 flex-1">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>

            {/* CTA at bottom-left */}
            <div className="mt-auto">
              {card.ctaHref ? (
                <a
                  href={card.ctaHref}
                  className="inline-flex items-center text-sm px-3 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  {card.ctaLabel}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={card.onCtaClick}
                  className="inline-flex items-center text-sm px-3 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  {card.ctaLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeCards;
