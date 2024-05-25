import React from 'react'

const LandlordDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          left
        </aside>
        
        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
          right
        </div>
      </div>
    </main>
  )
}

export default LandlordDetailPage