export function BackIcon({ color = "#42688B", onClick }) {
  return (
    <svg
      width="16"
      height="28"
      viewBox="0 0 16 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: "pointer", margin: "10px 16px" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4142 0.585786C16.1953 1.36683 16.1953 2.63317 15.4142 3.41421L4.82843 14L15.4142 24.5858C16.1953 25.3668 16.1953 26.6332 15.4142 27.4142C14.6332 28.1953 13.3668 28.1953 12.5858 27.4142L0.585786 15.4142C-0.195262 14.6332 -0.195262 13.3668 0.585786 12.5858L12.5858 0.585786C13.3668 -0.195262 14.6332 -0.195262 15.4142 0.585786Z"
        fill={color}
      />
    </svg>
  );
}

export function CancelIcon({ onClick }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: "pointer", margin: "10px " }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.4142 3.41421C28.1953 2.63317 28.1953 1.36683 27.4142 0.585786C26.6332 -0.195262 25.3668 -0.195262 24.5858 0.585786L14 11.1716L3.41421 0.585786C2.63317 -0.195262 1.36683 -0.195262 0.585786 0.585786C-0.195262 1.36683 -0.195262 2.63317 0.585786 3.41421L11.1716 14L0.585786 24.5858C-0.195262 25.3668 -0.195262 26.6332 0.585786 27.4142C1.36683 28.1953 2.63317 28.1953 3.41421 27.4142L14 16.8284L24.5858 27.4142C25.3668 28.1953 26.6332 28.1953 27.4142 27.4142C28.1953 26.6332 28.1953 25.3668 27.4142 24.5858L16.8284 14L27.4142 3.41421Z"
        fill="#42688B"
      />
    </svg>
  );
}

export function WriteIcon({ onClick }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: "pointer", margin: "10px " }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0089 3.00889C23.2718 2.74603 23.6283 2.59836 24 2.59836C24.3718 2.59836 24.7283 2.74603 24.9911 3.00889C25.254 3.27175 25.4017 3.62827 25.4017 4.00001C25.4017 4.37175 25.254 4.72826 24.9911 4.99113L13.361 16.6213L10.718 17.282L11.3787 14.6391L23.0089 3.00889ZM24 0.0983582C22.9652 0.0983582 21.9728 0.509424 21.2411 1.24113L9.36614 13.1161C9.20594 13.2763 9.0923 13.477 9.03735 13.6968L7.78735 18.6968C7.68086 19.1228 7.80567 19.5734 8.11614 19.8839C8.42662 20.1944 8.87723 20.3192 9.3032 20.2127L14.3032 18.9627C14.523 18.9077 14.7237 18.7941 14.8839 18.6339L26.7589 6.75889C27.4906 6.02719 27.9017 5.03479 27.9017 4.00001C27.9017 2.96523 27.4906 1.97283 26.7589 1.24113C26.0272 0.509424 25.0348 0.0983582 24 0.0983582ZM4 2.75001C3.00544 2.75001 2.05161 3.1451 1.34835 3.84836C0.645088 4.55162 0.25 5.50545 0.25 6.50001V24C0.25 24.9946 0.645088 25.9484 1.34835 26.6517C2.05161 27.3549 3.00544 27.75 4 27.75H21.5C22.4946 27.75 23.4484 27.3549 24.1517 26.6517C24.8549 25.9484 25.25 24.9946 25.25 24V15.25C25.25 14.5597 24.6904 14 24 14C23.3096 14 22.75 14.5597 22.75 15.25V24C22.75 24.3315 22.6183 24.6495 22.3839 24.8839C22.1495 25.1183 21.8315 25.25 21.5 25.25H4C3.66848 25.25 3.35054 25.1183 3.11612 24.8839C2.8817 24.6495 2.75 24.3315 2.75 24V6.50001C2.75 6.16849 2.8817 5.85055 3.11612 5.61613C3.35054 5.38171 3.66848 5.25001 4 5.25001H12.75C13.4404 5.25001 14 4.69037 14 4.00001C14 3.30966 13.4404 2.75001 12.75 2.75001H4Z"
        fill="#42688B"
      />
    </svg>
  );
}
