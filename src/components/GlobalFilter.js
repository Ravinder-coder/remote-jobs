import React from 'react'

const GlobalFilter = ({filter, setFilter}) => {
  return (
    <div class="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search"
          class="border rounded-l-lg p-2 outline-none"
          value={filter || ''}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button class="bg-rose-600 text-white rounded-r-lg p-2 hover:bg-rose-700 focus:outline-none">
          Search
        </button>
      </div>
  )
}

export default GlobalFilter