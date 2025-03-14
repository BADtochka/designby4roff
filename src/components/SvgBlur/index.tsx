export default function SvgBlur() {
  return (
    <>
      {/* SVG Filter Definition */}
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='100%' height='100%'>
        <defs>
          <filter id='custom-blur'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='5' />
          </filter>
        </defs>
        <text
          fill='white'
          className='text-white transition-all duration-300 hover:[filter:url(#custom-blur)] hover:filter'
        >
          Hover over me for SVG blur!
        </text>
      </svg>

      {/* Blurred Element */}
    </>
  );
}
