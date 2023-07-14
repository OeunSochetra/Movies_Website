"use client"
import Container from './Container'
import { useState } from 'react'

const Mypage: React.FC = () => {

  const [currentPages, setCurrentPage] = useState(1);
  const totalPage = 6;

  const handlePageChange = (page: Number) => {
    setCurrentPage(page);
  };
  
  return (
    <Container>
    <div className='flex justify-center mt-4'>
    {
      Array.from({length: totalPage},(_, index) => (
        <button 
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className={`px-2 py-1 rounded-md mx-1 ${currentPages === index + 1 ?
        'bg-[#ed1c25ff] text-white' : ' text-white'}`}
        >
          {index + 1}
        </button>
      ) )
    }
    </div>
    </Container>
  )
}

export default Mypage
