import React from 'react'
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testim = [
    {name: 'Reda Nahab', text: 'A good person, professional, he has good qualities and he masters his job well.', rating: 5},
    {name: 'Yasser Boukhal', text: `Competent and attentive dentist mashallah, The best one in Tangier.`, rating: 5},
    {name: 'Khouloud Mazouz', text: 'Very competent doctor with warm service and comprehensive care!', rating: 5},
];
type Props = {}
type Testimonial = {name: string, text: string, rating: number}

function Reviews({}: Props) {
  return (
    <div className='flex flex-col bg-blue rounded-2xl p-4 md:p-6 lg:px-14 text-xs gap-8 lg:gap-16'>
      <span className='uppercase text-purple text-xs -ml-4'>testimonial</span>
      <h2 className='text-3xl pl-3 -ml-4'>What people think of us.</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto'>
        {testim.map((e:Testimonial, i:number) => (
          <div className='p-10 bg-white flex flex-col justify-between rounded-2xl text-center gap-6 items-center' key={i}>
            <span className='text-lg'>{e.name}</span>
            <div className='text-slate-500 flex gap-2'>
              <FaQuoteLeft className='self-start w-4'/>
              <p>{e.text}</p>
              <FaQuoteRight className='self-end w-4'/>
            </div>
            <div className='grid grid-cols-5 gap-2'>
              {[...Array(e.rating)].map((e, i) => <FaStar key={i} className="text-lg text-orange"/>)}
              {[...Array(5-e.rating)].map((e, i) => <FaStar key={i} className="text-lg text-slate-400"/>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews