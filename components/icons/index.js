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

const MoneyFace = props => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 13C26 20.1796 20.1796 26 13 26C5.82111 26 0 20.1796 0 13C0 5.82111 5.82111 0 13 0C20.1796 0 26 5.82111 26 13Z"
        fill="#FFCC4D"
      />
      <path
        d="M5.05554 15.3566C5.05554 18.2195 8.37488 21.8566 13 21.8566C17.6251 21.8566 20.9444 18.2455 20.9444 15.3566C20.9444 15.3566 13.4817 17.3471 5.05554 15.3566Z"
        fill="#664500"
      />
      <path
        d="M8.66669 16.6133V21.6406C8.66669 23.8073 10.1111 25.974 13 25.974C15.8889 25.974 17.3334 23.8073 17.3334 21.6406V16.6429C12.7899 17.576 8.66669 16.6133 8.66669 16.6133Z"
        fill="#5D9040"
      />
      <path
        d="M8.87178 8.90501C8.32578 8.69412 7.80939 8.49479 7.80939 8.2059C7.80939 7.72995 8.44784 7.7054 8.57567 7.7054C9.02706 7.7054 9.25167 7.8744 9.44956 8.0239C9.60123 8.13873 9.75867 8.25718 9.9775 8.25718C10.3848 8.25718 10.5704 7.97045 10.5704 7.70395C10.5704 7.1724 9.919 6.79684 9.22856 6.6394V6.35557C9.22856 5.98145 8.9245 5.6774 8.55039 5.6774C8.17628 5.6774 7.87223 5.98145 7.87223 6.35557V6.66323C7.046 6.90373 6.53973 7.51112 6.53973 8.2774C6.53973 9.22423 7.47356 9.61279 8.29761 9.95512C8.88767 10.2007 9.44523 10.4325 9.44523 10.7943C9.44523 11.0587 9.113 11.3447 8.57639 11.3447C8.03473 11.3447 7.72417 11.128 7.44973 10.9373C7.2605 10.8052 7.08139 10.6802 6.86761 10.6802C6.55706 10.6802 6.31439 10.9417 6.31439 11.2753C6.31439 11.7657 6.98678 12.2547 7.87223 12.4266V12.766C7.87223 13.1401 8.17628 13.4435 8.55039 13.4435C8.9245 13.4435 9.22856 13.1394 9.22856 12.766L9.22495 12.4063C10.1609 12.1788 10.7142 11.5238 10.7142 10.6304C10.7149 9.6164 9.69295 9.22207 8.87178 8.90501ZM19.279 10.6427C19.279 9.62868 18.2571 9.23434 17.4359 8.91729C16.8899 8.7064 16.3742 8.50707 16.3742 8.21818C16.3742 7.74223 17.0127 7.71768 17.1405 7.71768C17.5919 7.71768 17.8158 7.88668 18.0144 8.03618C18.1668 8.15101 18.3235 8.26945 18.5416 8.26945C18.9497 8.26945 19.1353 7.98273 19.1353 7.71623C19.1353 7.18395 18.4838 6.80912 17.7934 6.65168V6.36857C17.7934 5.99445 17.4886 5.6904 17.1152 5.6904C16.7411 5.6904 16.4363 5.99445 16.4363 6.36857V6.67623C15.6108 6.91673 15.1038 7.52412 15.1038 8.2904C15.1038 9.23723 16.0377 9.62579 16.8617 9.96812C17.4518 10.2137 18.0093 10.4455 18.0093 10.8073C18.0093 11.0717 17.6778 11.3577 17.1412 11.3577C16.5996 11.3577 16.289 11.141 16.0153 10.9503C15.8253 10.8182 15.6462 10.6932 15.4332 10.6932C15.1219 10.6932 14.8792 10.9547 14.8792 11.2883C14.8792 11.7787 15.5516 12.2677 16.4363 12.4396V12.779C16.4363 13.1524 16.7418 13.4565 17.1159 13.4565C17.4901 13.4565 17.7934 13.1524 17.7934 12.779L17.7912 12.4193C18.7265 12.1904 19.279 11.5361 19.279 10.6427Z"
        fill="#664500"
      />
      <path
        d="M15.145 22.4387C15.145 21.4507 14.1491 21.0657 13.3489 20.7566C12.8166 20.5515 12.3132 20.3565 12.3132 20.0756C12.3132 19.6112 12.935 19.5881 13.06 19.5881C13.4998 19.5881 13.7187 19.7535 13.9122 19.8986C14.0603 20.0106 14.2141 20.1261 14.4272 20.1261C14.8244 20.1261 15.0057 19.8459 15.0057 19.5866C15.0057 19.0688 14.3708 18.7026 13.697 18.5488V18.2722C13.697 17.9075 13.4002 17.6106 13.0354 17.6106C12.6707 17.6106 12.3739 17.9075 12.3739 18.2722V18.5719C11.5686 18.8059 11.0746 19.3988 11.0746 20.1456C11.0746 21.0686 11.9853 21.4478 12.7884 21.7815C13.364 22.0205 13.9072 22.2466 13.9072 22.599C13.9072 22.8568 13.5836 23.1356 13.06 23.1356C12.532 23.1356 12.2294 22.9247 11.9622 22.7377C11.778 22.6091 11.6033 22.4871 11.3953 22.4871C11.0927 22.4871 10.855 22.7427 10.855 23.0677C10.855 23.5466 11.5101 24.0225 12.3732 24.1901V24.5216C12.3732 24.8856 12.67 25.1817 13.0354 25.1817C13.4002 25.1817 13.6963 24.8856 13.6963 24.5216L13.6941 24.1706C14.6063 23.9474 15.145 23.309 15.145 22.4387Z"
        fill="white"
      />
    </svg>
  );
};

const SadFace = props => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 13C26 20.1796 20.1796 26 13 26C5.82111 26 0 20.1796 0 13C0 5.82111 5.82111 0 13 0C20.1796 0 26 5.82111 26 13Z"
        fill="#FFCC4D"
      />
      <path
        d="M12.5031 12.7198C12.376 12.6165 12.1947 12.6136 12.0625 12.7097C12.0539 12.7162 11.1525 13.3611 9.38886 13.3611C7.62592 13.3611 6.72386 12.7162 6.71664 12.7111C6.58447 12.6122 6.40247 12.6151 6.27536 12.7176C6.14681 12.8202 6.10347 12.9964 6.16992 13.1466C6.21325 13.2441 7.25325 15.5278 9.38886 15.5278C11.5252 15.5278 12.5645 13.2441 12.6078 13.1466C12.6743 12.9971 12.6309 12.8224 12.5031 12.7198ZM19.7253 12.7198C19.5982 12.6165 19.4176 12.6129 19.2847 12.7097C19.2761 12.7162 18.374 13.3611 16.6111 13.3611C14.8489 13.3611 13.9461 12.7162 13.9389 12.7111C13.8067 12.6122 13.6254 12.6151 13.4976 12.7176C13.369 12.8202 13.3257 12.9964 13.3921 13.1466C13.4355 13.2441 14.4755 15.5278 16.6111 15.5278C18.7474 15.5278 19.7867 13.2441 19.83 13.1466C19.8965 12.9971 19.8531 12.8224 19.7253 12.7198ZM15.8889 20.2223H10.1111C9.71242 20.2223 9.38886 19.8994 9.38886 19.5C9.38886 19.1006 9.71242 18.7778 10.1111 18.7778H15.8889C16.2882 18.7778 16.6111 19.1006 16.6111 19.5C16.6111 19.8994 16.2882 20.2223 15.8889 20.2223ZM4.33331 10.1111C3.93464 10.1111 3.61108 9.78758 3.61108 9.38892C3.61108 8.99097 3.93247 8.66814 4.33042 8.6667C4.44308 8.66525 6.90803 8.60458 8.81181 6.06669C9.05086 5.74892 9.50297 5.68247 9.82292 5.92225C10.1421 6.16131 10.2064 6.61414 9.96736 6.93336C7.61075 10.075 4.46619 10.1111 4.33331 10.1111ZM21.6666 10.1111C21.5337 10.1111 18.3899 10.075 16.0333 6.93336C15.7935 6.61414 15.8585 6.16131 16.1777 5.92225C16.4962 5.68175 16.9484 5.74747 17.1881 6.06669C19.0955 8.60964 21.5655 8.66597 21.6702 8.6667C22.0675 8.67103 22.3881 8.99603 22.386 9.39253C22.3845 9.79047 22.0639 10.1111 21.6666 10.1111Z"
        fill="#664500"
      />
    </svg>
  );
};

const ChevronDown = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#718096"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { RepeatBlock, Repeat, Plus, MoneyFace, SadFace, ChevronDown };
