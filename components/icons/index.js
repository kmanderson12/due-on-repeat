const RepeatBlock = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="27" height="27" rx="3" fill="#9AE6B4" />
      <g clipPath="url(#clip0)">
        <path
          d="M17.1667 3.83331L20.5 7.16665L17.1667 10.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 12.1667V10.5C5.5 9.61597 5.85119 8.76812 6.47631 8.143C7.10143 7.51788 7.94928 7.16669 8.83333 7.16669H20.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.83333 22.1667L5.5 18.8333L8.83333 15.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 13.8333V15.5C20.5 16.384 20.1488 17.2319 19.5237 17.857C18.8986 18.4821 18.0507 18.8333 17.1667 18.8333H5.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect x="3" y="3" width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Repeat = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3333 0.666656L14 3.33332L11.3333 5.99999"
        stroke="#718096"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7.33334V6.00001C2 5.29277 2.28095 4.61449 2.78105 4.11439C3.28115 3.61429 3.95942 3.33334 4.66667 3.33334H14"
        stroke="#718096"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66667 15.3333L2 12.6667L4.66667 10"
        stroke="#718096"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.66666V9.99999C14 10.7072 13.719 11.3855 13.219 11.8856C12.7189 12.3857 12.0406 12.6667 11.3333 12.6667H2"
        stroke="#718096"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Plus = () => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3.75V14.25"
        stroke="#EDF2F7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 9H14.25"
        stroke="#EDF2F7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { RepeatBlock, Repeat, Plus };
