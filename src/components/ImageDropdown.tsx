import { useState, useEffect, useRef } from "react";

type ImageOption = {
  id: number;
  label?: string;
  src: string;
};

interface Props {
  images: ImageOption[];
  columns?: number;
  onSelect?: (image: ImageOption) => void;
  selectedItems?: ImageOption[];
  alignLeft?: boolean;
  alignRight?: boolean;
  dropUp?: boolean;
  hideSelectedLabel?: boolean;
  selectedImageSize?: string;
}

export default function ImageDropdown({
  images,
  columns = 3,
  onSelect,
  selectedItems = [],
  alignLeft = false,
  selectedImageSize,
  alignRight= false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const [selected, setSelected] = useState<null | ImageOption>(null);
  const ref = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const rowThreshold = 3;
  const maxVisibleItems = columns * rowThreshold;
  const enableScroll = (images.length + selectedItems.length) > maxVisibleItems;

  const columnClass = columns === 2 ? "grid-cols-2 w-[216px]" : "grid-cols-3 w-[324px]";
  const scrollClass = enableScroll ? "max-h-[324px] overflow-y-auto" : "";

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => {
    if (open && ref.current && dropdownRef.current) {
      const buttonRect = ref.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.scrollHeight;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;
      setDropUp(dropdownHeight > spaceBelow && spaceAbove > dropdownHeight);
    }
  }, [open]);

  const handleSelect = (item: ImageOption) => {
    setSelected(item);
    setOpen(false);
    onSelect?.(item);
  };

  const alignmentClass = alignRight
  ? "right-[25%]" // Adjust this value as needed for a nice inward look
  : alignLeft
  ? "right-0 -translate-x-2"
  : alignRight
  ? "left-auto right-0"
  : "left-0";

  const allOptions = [...images, ...selectedItems];

  return (
    <div className="relative w-full h-full" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center w-full h-full"
      >
        {selected ? (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={selected.src}
              alt="Selected"
              className={`${selectedImageSize || "w-full h-full"} object-cover rounded`}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-white flex items-center justify-center text-gray-300 text-2xl">
            +
          </div>
        )}
      </button>
        
      {open && (
        <div
          ref={dropdownRef}
          className={`absolute ${dropUp ? "bottom-full mb-2" : "mt-1"} ${ alignLeft ? "right-0" : "left-0"
          } bg-white border shadow-lg rounded grid gap-2 p-2 z-10 ${columnClass} ${scrollClass}`}
        >

          {allOptions.map((item) => (
            <div
              key={item.id + item.src}
              onClick={() => handleSelect(item)}
              className="cursor-pointer hover:bg-gray-100 p-1 rounded w-[100px] h-[100x]"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
