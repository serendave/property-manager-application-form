interface HomeIconProps {
  className?: string;
}

const HomeIcon = ({ className }: HomeIconProps) => {
  return (
    <svg
      enableBackground='new 0 0 48 48'
      height='48px'
      version='1.1'
      viewBox='0 0 48 48'
      width='48px'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
    >
      <g id='Expanded'>
        <g>
          <g>
            <path d='M42,48H28V35h-8v13H6V27c0-0.552,0.447-1,1-1s1,0.448,1,1v19h10V33h12v13h10V28c0-0.552,0.447-1,1-1s1,0.448,1,1V48z' />
          </g>
          <g>
            <path d='M47,27c-0.249,0-0.497-0.092-0.691-0.277L24,5.384L1.691,26.723c-0.399,0.381-1.032,0.368-1.414-0.031     c-0.382-0.399-0.367-1.032,0.031-1.414L24,2.616l23.691,22.661c0.398,0.382,0.413,1.015,0.031,1.414     C47.526,26.896,47.264,27,47,27z' />
          </g>
          <g>
            <path d='M39,15c-0.553,0-1-0.448-1-1V8h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h8v8C40,14.552,39.553,15,39,15z' />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default HomeIcon;
