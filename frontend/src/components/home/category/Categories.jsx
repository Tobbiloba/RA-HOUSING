// @ts-nocheck
import { getPropertyByType } from '@/action/property'
import React, { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { FaBath } from 'react-icons/fa'
import { IoBedSharp } from 'react-icons/io5'
import { SlSizeActual } from 'react-icons/sl'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FaLocationDot } from 'react-icons/fa6'
import { FreeMode, Pagination } from 'swiper/modules'
import { addCommasToNumber } from '@/components/utils'
import { Link } from 'react-router-dom'
const LazyLoadedImage = lazy(
  () => import('../../common/lazy loading/LazyLoadedImage'),
)

const DiscoveryLoadingCard = () => {
  return (
    <div className="h-[25rem] w-[100%]">
      <div className="w-[100%] h-[15rem] bg-slate-400 animate-pulse"></div>
      <div className="p-[1rem]">
        <div className="h-8 w-[100%] bg-slate-400 animate-pulse"></div>
        <div className="h-5 w-[80%] bg-slate-400 animate-pulse mt-8"></div>
        <div className="h-5 w-[60%] bg-slate-400 animate-pulse mt-4"></div>
      </div>
    </div>
  )
}
const SwiperContainer = () => {
  const one = useMediaQuery({ maxWidth: 508 })
  const two = useMediaQuery({ maxWidth: 788 })
  const three = useMediaQuery({ maxWidth: 920 })
  const four = useMediaQuery({ minWidth: 1024 })

  const { properties, loading } = useSelector(state => state.propertyType)
  const num = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <Swiper
        slidesPerView={one ? 1 : two ? 2 : three ? 3 : four && 4}
        spaceBetween={30}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper pb-[2rem]"
      >
        {loading
          ? num.map(index => (
              <SwiperSlide
                key={index}
                className="hover:border-b hover:shadow-md border-slate-500 "
              >
                {' '}
                <DiscoveryLoadingCard key={index} />
              </SwiperSlide>
            ))
          : properties &&
            properties.length > 0 &&
            properties.map((property, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="hover:border-b cursor-pointer rounded-b-xl h-[27.5rem] hover:shadow-md border-slate-500 "
                >
                  <div className="relative h-[15rem] overflow-hidden">
                    <div className="w-[100%] relative rounded-xl overflow-hidden h-[15rem]">
                      <Suspense
                        fallback={<div className="h-[15rem] overflow-hidden rounded-md w-[100%]"></div>}
                      >
                        <LazyLoadedImage
                          src={
                            property?.property_information?.property_images[0]
                          }
                          className="h-[100%]"
                        />
                      </Suspense>
                    </div>
                    <div className="w-[100%] h-[100%] rounded-xl z-[50] bg-black/50 absolute top-0 left-0"></div>
                  </div>
                
                  <div className=" p-[1.25rem] flex flex-col justify-between h-[12.5rem] flex-1">
                    <div className="flex flex-col justify-between">
                    <Link to={`/properties/property-detail/${encodeURIComponent(property?._id)}`}>
                      <p className="text-[18px] h-[4rem] text-slate-600 flex items-center font-[600]">
                        {property.property_information?.property_name}{' '}
                      </p>
                      </Link>
                      <p className="text-[16px] mt-1 flex justify-end items-center gap-1 text-slate-600 font-[600]">
                        ₦{' '}
                        {addCommasToNumber(
                          property?.property_information?.pricing,
                        )}{' '}
                        {/* <span className="text-slate-500 text-[13px]">/ night</span> */}
                      </p>
                    </div>

                    <div className="flex text-slate-400 flex-row mt-2 gap-4 items-center justify-between">
                      <p className="text-[14px] gap-3 items-center  flex flex-row">
                        <FaBath className="text-slate-400" />
                        {property.property_information?.property_no_bathrooms}
                      </p>
                      <p className="text-[14px] gap-3 items-center  flex flex-row">
                        <IoBedSharp className="text-slate-400" />
                        {property.property_information?.property_no_bedrooms}
                      </p>
                      <p className="text-[14px]  gap-3 items-center  flex flex-row">
                        <SlSizeActual className="text-slate-400" />
                        {property.property_information?.property_size}
                      </p>
                    </div>

                    <div className="flex mt-4 text-slate-500 flex-row items-center gap-3">
                      <FaLocationDot className="text-slate-500" />
                      <h1 className="text-[16px]">
                        {property.property_information?.property_location.city}
                      </h1>
                    </div>
                    {/* </div> */}
                  </div>
                </SwiperSlide>
              )
            })}
      </Swiper>
    </>
  )
}

const Categories = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPropertyByType('Apartment'))
  }, [])

  return (
    <div className="flex items-center justify-center exo bg-gray-100 h-fit py-6 lg:py-12 ">
      <div className="md:container px-[1rem] flex-col w-[100%] flex">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="font-[600] lg:text-5xl text-slate-500 md:tex-4xl text-3xl">
              Discover Our Featured <br /> Properties
            </h1>
            <p className="mt-2 text-[15px] font-[600] text-slate-700">
              Discover best deals for your future house
            </p>
          </div>

          <button className="border rounded-md px-8 w-fit mt-4 md:mt-0 py-2 text-slate-700 border-slate-700 text-[15px]">
            See More
          </button>
        </div>

        <div className="mt-7 ">
          <SwiperContainer />
        </div>
      </div>
    </div>
  )
}

export default Categories
