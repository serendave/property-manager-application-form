interface EditIconProps {
  className?: string;
}

const EditIcon = ({ className }: EditIconProps) => {
  return (
    <svg
      enableBackground='new 0 0 48 48'
      id='Layer_4'
      version='1.1'
      viewBox='0 0 48 48'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
    >
      <g>
        <rect
          height='10.373'
          transform='matrix(-0.7073 0.707 -0.707 -0.7073 76.2081 -18.93)'
          width='6.526'
          x='38.761'
          y='1.127'
        />
        <polygon points='33.942,7.09 10.721,30.311 10.659,30.311 0.003,40.965 0.003,41.025 0.003,47.66 8.03,47.66 17.354,38.336    17.354,38.309 41.258,14.405  ' />
      </g>
    </svg>
  );
};

export default EditIcon;
