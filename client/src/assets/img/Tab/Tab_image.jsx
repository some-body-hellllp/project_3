export function HomeIcon({ page }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7674 1.51331C15.316 1.16223 14.684 1.16223 14.2326 1.51331L2.98257 10.2633C2.67809 10.5001 2.5 10.8643 2.5 11.25V25C2.5 25.9946 2.89509 26.9484 3.59835 27.6517C4.30161 28.3549 5.25544 28.75 6.25 28.75H11.25H18.75H23.75C24.7446 28.75 25.6984 28.3549 26.4017 27.6517C27.1049 26.9484 27.5 25.9946 27.5 25V11.25C27.5 10.8643 27.3219 10.5001 27.0174 10.2633L15.7674 1.51331ZM20 26.25H23.75C24.0815 26.25 24.3995 26.1183 24.6339 25.8839C24.8683 25.6495 25 25.3315 25 25V11.8614L15 4.08358L5 11.8614V25C5 25.3315 5.1317 25.6495 5.36612 25.8839C5.60054 26.1183 5.91848 26.25 6.25 26.25H10V15C10 14.3096 10.5596 13.75 11.25 13.75H18.75C19.4404 13.75 20 14.3096 20 15V26.25ZM12.5 26.25V16.25H17.5V26.25H12.5Z"
        fill={page === "home" ? "#1F5F99" : "#545454"}
      />
    </svg>
  );
}

export function HumanIcon({ page }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 8.75C11.25 6.67893 12.9289 5 15 5C17.0711 5 18.75 6.67893 18.75 8.75C18.75 10.8211 17.0711 12.5 15 12.5C12.9289 12.5 11.25 10.8211 11.25 8.75ZM15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5ZM10 17.5C8.3424 17.5 6.75268 18.1585 5.58058 19.3306C4.40848 20.5027 3.75 22.0924 3.75 23.75V26.25C3.75 26.9404 4.30964 27.5 5 27.5C5.69036 27.5 6.25 26.9404 6.25 26.25V23.75C6.25 22.7554 6.64509 21.8016 7.34835 21.0984C8.05161 20.3951 9.00544 20 10 20H20C20.9946 20 21.9484 20.3951 22.6516 21.0984C23.3549 21.8016 23.75 22.7554 23.75 23.75V26.25C23.75 26.9404 24.3096 27.5 25 27.5C25.6904 27.5 26.25 26.9404 26.25 26.25V23.75C26.25 22.0924 25.5915 20.5027 24.4194 19.3306C23.2473 18.1585 21.6576 17.5 20 17.5H10Z"
        fill={page === "account" ? "#1F5F99" : "#545454"}
      />
    </svg>
  );
}

export function LocationIcon({ page }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.25C9.76641 1.25 9.54778 1.31407 9.36074 1.4256L0.629826 6.4147C0.240358 6.63725 0 7.05143 0 7.5V27.5C0 27.9456 0.237198 28.3575 0.622591 28.5811C1.00798 28.8048 1.4833 28.8064 1.87017 28.5853L10.0393 23.9172L19.4184 28.6068C19.5807 28.6922 19.7641 28.743 19.9586 28.7493C19.9724 28.7498 19.9862 28.75 20 28.75C20.2336 28.75 20.4522 28.6859 20.6393 28.5744L29.3702 23.5853C29.7596 23.3628 30 22.9486 30 22.5V2.5C30 2.05441 29.7628 1.64252 29.3774 1.41886C28.992 1.19521 28.5167 1.19362 28.1298 1.4147L19.9607 6.08279L10.5815 1.39322C10.4078 1.30176 10.21 1.25 10 1.25ZM21.25 25.346L27.5 21.7746V4.65398L21.25 8.2254V25.346ZM18.75 8.27254L11.25 4.52254V21.7275L18.75 25.4775V8.27254ZM2.5 8.2254L8.75 4.65398V21.7746L2.5 25.346V8.2254Z"
        fill={page === "location" ? "#1F5F99" : "#545454"}
      />
    </svg>
  );
}

export function QRIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.59835 1.59835C2.30161 0.895088 3.25544 0.5 4.25 0.5H8C8.69036 0.5 9.25 1.05964 9.25 1.75C9.25 2.44036 8.69036 3 8 3H4.25C3.91848 3 3.60054 3.1317 3.36612 3.36612C3.1317 3.60054 3 3.91848 3 4.25V8C3 8.69036 2.44036 9.25 1.75 9.25C1.05964 9.25 0.5 8.69036 0.5 8V4.25C0.5 3.25544 0.895088 2.30161 1.59835 1.59835ZM16.75 1.75C16.75 1.05964 17.3096 0.5 18 0.5H21.75C22.7446 0.5 23.6984 0.895088 24.4017 1.59835C25.1049 2.30161 25.5 3.25544 25.5 4.25V8C25.5 8.69036 24.9404 9.25 24.25 9.25C23.5596 9.25 23 8.69036 23 8V4.25C23 3.91848 22.8683 3.60054 22.6339 3.36612C22.3995 3.1317 22.0815 3 21.75 3H18C17.3096 3 16.75 2.44036 16.75 1.75ZM1.75 16.75C2.44036 16.75 3 17.3096 3 18V21.75C3 22.0815 3.1317 22.3995 3.36612 22.6339C3.60054 22.8683 3.91848 23 4.25 23H8C8.69036 23 9.25 23.5596 9.25 24.25C9.25 24.9404 8.69036 25.5 8 25.5H4.25C3.25544 25.5 2.30161 25.1049 1.59835 24.4017C0.895088 23.6984 0.5 22.7446 0.5 21.75V18C0.5 17.3096 1.05964 16.75 1.75 16.75ZM24.25 16.75C24.9404 16.75 25.5 17.3096 25.5 18V21.75C25.5 22.7446 25.1049 23.6984 24.4017 24.4017C23.6984 25.1049 22.7446 25.5 21.75 25.5H18C17.3096 25.5 16.75 24.9404 16.75 24.25C16.75 23.5596 17.3096 23 18 23H21.75C22.0815 23 22.3995 22.8683 22.6339 22.6339C22.8683 22.3995 23 22.0815 23 21.75V18C23 17.3096 23.5596 16.75 24.25 16.75Z"
        fill="#545454"
      />
    </svg>
  );
}

export function StampIcon({ page }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 1.25C13.7185 1.25 12.4554 1.63752 11.4997 2.51835C10.5273 3.41456 10 4.70526 10 6.25C10 7.77972 10.405 8.61884 10.7897 9.29205L10.8518 9.40033C11.126 9.87764 11.25 10.0934 11.25 10.625V15H8.125C6.96468 15 5.85188 15.4609 5.03141 16.2814C4.21094 17.1019 3.75 18.2147 3.75 19.375V21.25C3.75 21.913 4.01339 22.5489 4.48223 23.0178C4.95108 23.4866 5.58696 23.75 6.25 23.75H23.75C24.413 23.75 25.0489 23.4866 25.5178 23.0178C25.9866 22.5489 26.25 21.913 26.25 21.25V19.375C26.25 18.2238 25.797 17.1043 24.9714 16.2786L24.9703 16.2775C24.5632 15.8715 24.0802 15.5497 23.5487 15.3305C23.0175 15.1114 22.4485 14.9991 21.874 15H18.75V10.625C18.75 10.0934 18.874 9.87764 19.1482 9.40033L19.2103 9.29205C19.595 8.61884 20 7.77972 20 6.25C20 4.92392 19.4732 3.65215 18.5355 2.71447C17.5979 1.77678 16.3261 1.25 15 1.25ZM16.25 15V10.625C16.25 9.41407 16.6654 8.69767 16.9709 8.17097L16.971 8.17078C16.9946 8.13 17.0176 8.09035 17.0397 8.0517C17.28 7.63116 17.5 7.22028 17.5 6.25C17.5 5.58696 17.2366 4.95107 16.7678 4.48223C16.2989 4.01339 15.663 3.75 15 3.75C14.2065 3.75 13.5946 3.98748 13.194 4.35665C12.8102 4.71044 12.5 5.29474 12.5 6.25C12.5 7.22028 12.72 7.63116 12.9603 8.0517C12.9824 8.0904 13.0054 8.13009 13.0291 8.17093L13.0291 8.17097C13.3346 8.69767 13.75 9.41406 13.75 10.625V15H16.25ZM12.5 17.5L8.125 17.5C7.62772 17.5 7.15081 17.6975 6.79917 18.0492C6.44754 18.4008 6.25 18.8777 6.25 19.375V21.25H23.75V19.375C23.75 18.8765 23.5532 18.3963 23.2042 18.047C23.0299 17.8732 22.823 17.7355 22.5955 17.6416C22.3677 17.5477 22.1236 17.4996 21.8772 17.5L17.5 17.5H12.5ZM6.25 26.25C5.55964 26.25 5 26.8096 5 27.5C5 28.1904 5.55964 28.75 6.25 28.75H23.75C24.4404 28.75 25 28.1904 25 27.5C25 26.8096 24.4404 26.25 23.75 26.25H6.25Z"
        fill={page === "stamp" ? "#1F5F99" : "#545454"}
      />
    </svg>
  );
}
