import { BiSearch } from 'react-icons/bi'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-2 px-6 border-b">
      <div className="flex items-center justify-between gap-2">
        {/* Left section: Logo + Breadcrumb */}
        <div className="flex items-center w-[343px] gap-4">
          {/* SVG Logo */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 4C20.5449 4 22 5.45507 22 7.25V16.75C22 18.5449 20.5449 20 18.75 20H5.25C3.45507 20 2 18.5449 2 16.75V7.25C2 5.45507 3.45507 4 5.25 4H18.75ZM5.25 5.5C4.2835 5.5 3.5 6.2835 3.5 7.25V16.75C3.5 17.7165 4.2835 18.5 5.25 18.5H14.5V5.5H5.25Z" fill="#618666"/>
</svg>

          {/* Breadcrumb */}
          <nav className="breadcrumb flex items-center text-sm text-gray-600 gap-4">
            <a href="#" className="cursor-pointer capitalize text-[#AFAFAF]">
              workspace
            </a>
            <span className="text-gray-400">{'>'}</span>
            <a href="#" className="cursor-pointer capitalize text-[#AFAFAF] text-sm">
              folder 2
            </a>
            <span className="text-gray-400">{'>'}</span>
            <a href="#" className="cursor-pointer capitalize text-[#121212] text-sm font-medium">
              Spreadsheet 3
            </a>

            {/* Dots icon (as SVG) */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="ml-2"
            >
              <path
                d="M6.45832 10C6.45832 10.8054 5.80541 11.4583 4.99999 11.4583C4.19457 11.4583 3.54166 10.8054 3.54166 10C3.54166 9.19459 4.19457 8.54167 4.99999 8.54167C5.80541 8.54167 6.45832 9.19459 6.45832 10ZM11.4583 10C11.4583 10.8054 10.8054 11.4583 9.99999 11.4583C9.19457 11.4583 8.54166 10.8054 8.54166 10C8.54166 9.19459 9.19457 8.54167 9.99999 8.54167C10.8054 8.54167 11.4583 9.19459 11.4583 10ZM15 11.4583C15.8054 11.4583 16.4583 10.8054 16.4583 10C16.4583 9.19459 15.8054 8.54167 15 8.54167C14.1946 8.54167 13.5417 9.19459 13.5417 10C13.5417 10.8054 14.1946 11.4583 15 11.4583Z"
                fill="#AFAFAF"
              />
            </svg>
          </nav>
        </div>

        {/* Right section: Search + Notification + Avatar */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative w-[165px] h-[40px]">
            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            <input
              className="pl-9 pr-3 py-1.5 w-full h-full border rounded-md text-sm text-gray-700 bg-gray-50 placeholder:text-gray-400"
              placeholder="Search within sheet"
            />
          </div>

          {/* Notification bell */}
          <button className="relative cursor-pointer">
            <span className="absolute -top-1 -right-1 bg-[#4B6A4F] text-white text-[10px] px-1.5 rounded-full">
              2
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99622C16.0499 1.99622 19.3567 5.19097 19.4958 9.24528L19.5 9.49622V13.5932L20.88 16.7492C20.949 16.9071 20.9847 17.0776 20.9847 17.25C20.9847 17.9404 20.425 18.5 19.7347 18.5L15 18.5015C15 20.1583 13.6568 21.5015 12 21.5015C10.4023 21.5015 9.09633 20.2526 9.00508 18.6778L8.99954 18.4992L4.27485 18.5C4.10351 18.5 3.93401 18.4648 3.77685 18.3965C3.14365 18.1215 2.8533 17.3852 3.12834 16.752L4.49999 13.5941V9.49612C4.50059 5.34132 7.85208 1.99622 12 1.99622ZM13.4995 18.4992L10.5 18.5015C10.5 19.3299 11.1716 20.0015 12 20.0015C12.7797 20.0015 13.4204 19.4066 13.4931 18.646L13.4995 18.4992ZM12 3.49622C8.67983 3.49622 6.00047 6.17048 5.99999 9.49622V13.9059L4.65601 17H19.3525L18 13.9068L18.0001 9.50908L17.9964 9.28388C17.8853 6.0504 15.2416 3.49622 12 3.49622Z"
                fill="#121212"
              />
            </svg>
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="/profile.png"
              alt="profile"
              className="w-9 h-9 rounded-full object-cover border border-gray-300"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-medium text-xs text-[#121212] truncate max-w-[70px]">
                John Doe
              </span>
              <span className="text-xs text-[#757575] truncate max-w-[70px]">
                john.doe@test.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
