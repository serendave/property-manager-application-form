export interface HouseProps {
  className?: string;
}

const House = ({ className }: HouseProps) => {
  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 1000'
      className={className}
    >
      <defs>
        <style>
          {`
            .cls-1 {
              fill: #000;
              stroke-width: 0px;
            }
          `}
        </style>
      </defs>
      <path
        className='cls-1'
        d='m238.29,505.91v327.71c0,8.43,6.86,15.2,15.45,15.2h163.57v-143.66c0-8.43,6.86-15.28,15.45-15.28h134.4c8.59,0,15.45,6.86,15.45,15.28v143.66h163.65c8.59,0,15.45-6.77,15.45-15.2v-327.79l-261.62-229.16-261.79,229.24Z'
      />
      <polygon
        className='cls-1'
        points='501.49 151.18 500.08 152.83 498.51 151.18 127.27 476.42 166.34 520.03 500.08 227.76 833.66 520.03 872.73 476.42 501.49 151.18'
      />
      <polygon
        className='cls-1'
        points='332.39 198.02 238.29 198.02 238.29 336.56 331.56 253.12 332.39 198.02'
      />
    </svg>
  );
};

export default House;
