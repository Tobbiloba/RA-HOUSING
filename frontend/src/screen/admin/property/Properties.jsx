// @ts-nocheck

import React, { useEffect, useState } from 'react'
import { HiArrowLongDown, HiArrowLongUp } from 'react-icons/hi2'
import { CircularProgress } from '@mui/material'
import Dropdown from '../../../components/home/Dropdown'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProperties } from '../../../action/property'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { FaArrowRightLong } from "react-icons/fa6";
const PropertyCard = ({ item }) => {
  return (
    <div
      key={item._id}
      className="max-w-[25rem] exo h-fit bg-slate-  overflow-hidden"
    >
      <div className="relative ">
        <div className="max-h-[20rem] overflow-hidden">
          <img
            src={item.property_information.property_images[0]}
            // src="https://res.cloudinary.com/dlbcrsq2l/image/upload/v1706052744/qi3u1ym753mgojhfsxr5.jpg"
            className="min-h-[17.5rem] w-[100%]"
          />
        </div>
        <h1 className="absolute top-4 right-4 text-[11px] bg-black/60 border border-slate-500 text-white px-2 py-1">
          {item.property_information.peoperty_bedrooms} For Rent
        </h1>
        <p className="absolute top-4 border bg-black/60 border-slate-600 text-[11px] left-4 text-white px-2 py-1">
          {item.property_information.property_location.country},{' '}
          {item.property_information.property_location.state}
        </p>
      </div>

      <div className="bg-slate-900 shadow-xl text-white mt-2 p-4">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl">{item.property_information.property_name}</h1>
          <h1 className="text-[15px]">
          ₦{item.property_information.pricing}
          </h1>
        </div>

        <p className="mt-2 text-[13px] h-[4rem] overflow-hidden overflow-ellipsis">
          {item.property_information.property_description}
        </p>

        <div className="flex flex-row gap-8 mt-4">
          <div className="flex flex-row gap-3 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2642/2642358.png"
              className="w-8 h-8"
            />
            <p className="text-white text-[14px]">
              {item.property_information.property_no_bedrooms} rooms
            </p>
          </div>
          {/*  */}
          <div className="flex flex-row gap-3 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3289/3289779.png"
              className="w-8 h-8"
            />
            <p className="text-white text-[14px]">
              {item.property_information.property_no_bathrooms} baths
            </p>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4350/4350287.png"
              className="w-8 h-8"
            />
            <p className="text-white text-[14px]">
              {item.property_information.property_size[0]}
            </p>
          </div>
        </div>

        <div className="mt-2">
          <div className="mt-10 flex justify-center">
            <Link to={`/admin/properties/detail/${encodeURIComponent(item._id)}`}>
              <button className="flex items-center gap-5 text-[13px] px-6 py-2 text-white font-[400]">
                
                <p className='text-[15px]'>View Detail</p>
                <FaArrowRightLong className='text-white text-xl'/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const AdminProperties = () => {
  const dispatch = useDispatch()
  const [option, setOption] = useState('All')
  const [sortBy, setSortBy] = useState(true)

  const options = [
    'Apartment',
    'Villa',
    'Farmhouse',
    'Condos',
    'Townhouse',
    'Duplex',
    'Studio',
    'Chalet',
  ]

  useEffect(() => {
    dispatch(getMyProperties())
  }, [])

  const { properties, loading } = useSelector(state => state?.myProperties)

  const itemsPerPage = 8
  const totalItems = properties?.length
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  return (
    <div className="exo">
      <div className="pt-6 items-center relative first-line:flex-wrap gap-y-6 pb-4 px-4 bg-slate-800 mt-0 md:px-[2%] flex flex-row justify-between">
        <div className="flex flex-row gap-6 flex-wrap">
          <div className="flex flex-row flex-wrap gap-4">
            <button
              className="px-5 py-3 h-fit text-[15px] bg-slate-900  text-white flex flex-row gap-5 cursor-pointer items-center"
              onClick={() => setSortBy(!sortBy)}
            >
              Sort Price
              {sortBy ? <HiArrowLongDown /> : <HiArrowLongUp />}
            </button>
            <input
              placeholder="Search by title"
              className="min-w-[17rem] py-3 h-fit bg-transparent border px-3 border-slate-900 text-white placeholder-text-white "
            />
            <div>
              <Dropdown
                data={options}
                state={option}
                setState={setOption}
                height="border border-slate-900 py-3 h-fit px-3 w-32  text-[14px] text-slate-500"
              />
            </div>
          </div>
          <Link to="/admin/properties/create">
            <button className=" text-[15px] gap-5 flex text-white bg-slate-900 px-5 py-3 items-center">
              <IoMdAdd className="text-[22px]" /> Add Property
            </button>
          </Link>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="mt-6 flex justify-center">
            <CircularProgress />
          </div>
        ) : properties?.length ? (
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-x-12 mt-20 p-[1rem] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12">
              {properties.slice(startIndex, endIndex).map((property, index) => (
                <div className="w-[100%]" key={startIndex + index}>
                  <PropertyCard item={property} />
                  {/* lol */}
                </div>
              ))}
            </div>

            <div className="mt-20 w-[100%] items-center flex justify-end gap-5 p-[1rem]">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`${
                  currentPage === 1
                    ? 'bg-slate-400 cursor-not-allowed text-slate-100'
                    : 'bg-slate-300 shadow-md text-slate-500'
                }   text-[24px] p-2`}
              >
                <IoIosArrowBack />
              </button>
              <span className="text-slate-100">{currentPage} </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={endIndex >= totalItems}
                className={`${
                  endIndex >= totalItems
                    ? 'bg-slate-400 cursor-not-allowed text-slate-100'
                    : 'bg-slate-300 shadow-md text-slate-500'
                }  text-[24px] p-2`}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[100%] h-[80vh] flex items-center justify-center flex-col">
            <img src="/empty.png" className="w-[40rem] object-contain" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono text-slate-300">
              No property
            </h1>
            <p className="text-[15px] mt-3 text-slate-500 text-center">
              Seems like you havent added any properties yet. Ready to begin?{' '}
              <br /> Click the button below to start adding your first property.
            </p>
            <Link to="/admin/properties/create">
              <button className=" mt-6 text-[15px] gap-5 flex text-white bg-slate-900 px-5 py-3 items-center">
                <IoMdAdd className="text-[22px]" /> Add Property
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminProperties
