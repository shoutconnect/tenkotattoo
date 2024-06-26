export default function Btn({ text, href, target }) {
  return (
    <a
      href={href}
      target={target}
      class="relative px-6 py-2 overflow-hidden font-medium text-[#ed028c] bg-neutral-800 shadow-inner group"
    >
      <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#ed028c] group-hover:w-full ease"></span>
      <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#ed028c] group-hover:w-full ease"></span>
      <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#ed028c] group-hover:h-full ease"></span>
      <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#ed028c] group-hover:h-full ease"></span>
      <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#ed028c] opacity-0 group-hover:opacity-100"></span>
      <span class="relative transition-colors duration-300 delay-200 group-hover:text-neutral-50 ease">
        <p className="uppercase font-extrabold">{text}</p>
      </span>
    </a>
  );
}
