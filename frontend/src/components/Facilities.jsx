import React from 'react';
// import Wave from '../assets/svg';
import FacilitiesCard from './FacilitiesCard';
// import Wave from '../assets/Concrete-TIle.svg';

const Wave = ({color}) => {
    return(
        <div className="absolute right-0 -bottom-2 z-10 w-[100%]">
            <svg fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L21.8,101.3C43.6,139,87,213,131,224C174.5,235,218,181,262,170.7C305.5,160,349,192,393,176C436.4,160,480,96,524,74.7C567.3,53,611,75,655,101.3C698.2,128,742,160,785,181.3C829.1,203,873,213,916,186.7C960,160,1004,96,1047,64C1090.9,32,1135,32,1178,37.3C1221.8,43,1265,53,1309,80C1352.7,107,1396,149,1418,170.7L1440,192L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
        </div>
        
    )
}

const Facilities = () => {
    const facilities = [
        {
            id: 1,
            title: 'Concrete Tile',
            text: 'The property boasts state-of-the-art amenities, including a sleek fitness center, smart home technology.',
            img: 'https://wpolive.com/suqat/wp-content/uploads/2023/09/Concrete-Tile.svg'
        },
        {
            id: 2,
            title: 'Family Room',
            text: 'Spacious family room with cozy décor, ample seating, and entertainment options for quality bonding.',
            img: 'https://wpolive.com/suqat/wp-content/uploads/2023/09/Family-Room.svg'
        },
        {
            id: 3,
            title: 'Guest Quaters',
            text: 'Elegant guest quarters with all the comforts of home, ensuring a memorable stay for visitors.',
            img: 'https://wpolive.com/suqat/wp-content/uploads/2023/09/Heated-Floors.svg'
        },
        {
            id: 4,
            title: 'Heated Floors',
            text: 'Heated floors provide a warm, cozy ambiance, especially in colder seasons, enhancing comfort.',
            img: 'https://wpolive.com/suqat/wp-content/uploads/2023/09/Concrete-Tile.svg'
        },
        {
            id: 5,
            title: 'Ocean View',
            text: 'Ocean view from every room, creating a serene and captivating backdrop for an unforgettable stay.',
            img: 'https://wpolive.com/suqat/wp-content/uploads/2023/09/Ocean-View.svg'
        },
        {
            id: 6,
            title: 'Swimming Pool',
            text: 'The sparkling swimming pool offers a refreshing escape, complete with loungers, and stunning views.',
            img: 'https://wpolive.com/suqat/wp-content/uploads/2023/09/Swimming-Pool.svg'
        },
    ]
  return (
    <div className='flex exo flex-row my-24 gap-12 px-[2rem] sm:px-[1rem] items-center justify-center'>
        <div className='container flex-col flex lg:flex-row gap-12'>
        <div className='relative lg:min-w-[20rem] lg:w-[30%] lg:max-w-[25rem] md:w-[100%]'>
        <img src='/left-image.jpg' alt='wave' className='w-[100%] h-[100%]'/>
        <Wave />
      </div>
      <div className='flex-1 flex flex-col gap-8'>
        <div className='flex flex-row flex-wrap items-center justify-center md:justify-between md:items-center md:flex-nowrap  '>
            <h1 className='lg:text-6xl text-5xl min-w-[25rem] mb-8 md:mb-0 font-[600] md:w-[40%] text-center md:text-start'>MODERN FACILITIES OF THE PROPERTY.</h1>
            <img src='/title2.jpg' className='w-[100%] md:w-fit'/>
        </div>

        <div className='grid sm:grid-cols-2 gap-x-8 gap-y-16 mt-8'>
        {/* <FacilitiesCard />
        <FacilitiesCard />
        <FacilitiesCard />
        <FacilitiesCard />
        <FacilitiesCard />
        <FacilitiesCard /> */}

        {
            facilities.map((item) => (
                <FacilitiesCard key={item.id} item={item}/>
            ))
        }
        </div>
      </div>
        </div>
    
    </div>
  );
}

export default Facilities;
