"use client"

interface CarouselNavigationProps {
  onLeftClick: () => void
  onRightClick: () => void
}

export default function CarouselNavigation({ onLeftClick, onRightClick }: CarouselNavigationProps) {
  return (
    <div className="z-50 fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-1 sm:gap-2">
      <button
        id="btn-left"
        onClick={onLeftClick}
        className="bg-black size-2 sm:size-3 rounded-full hover:scale-110 active:scale-95 transition-transform cursor-pointer"
        aria-label="Previous item"
      ></button>
      <button
        className="bg-black size-2 sm:size-3 rounded-full hover:scale-110 transition-transform"
        aria-label="Current position"
      ></button>
      <button
        id="btn-right"
        onClick={onRightClick}
        className="bg-black size-2 sm:size-3 rounded-full hover:scale-110 active:scale-95 transition-transform cursor-pointer"
        aria-label="Next item"
      ></button>
    </div>
  )
}

