import { useState } from 'react'

const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived']

export default function BottomTabs() {
  const [activeTab, setActiveTab] = useState('All Orders')

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[48px] border-t border-gray-200 bg-white text-sm text-gray-600 z-50">
      <div className="flex items-center h-full tab-container">
        <div className="h-full w-[32px]"></div>

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 rounded-sm font-semibold transition-all duration-150 ${
              activeTab === tab
                ? 'bg-[#E8F0E9] text-green-900 border-t-2 border-[#4B6A4F]'
                : ''
            }`}
          >
            <div className="flex justify-between items-center gap-2">{tab}</div>
          </button>
        ))}

        <button className="ml-2 px-3 text-xl text-gray-400 hover:text-black">+</button>
      </div>
    </div>
  )
}
