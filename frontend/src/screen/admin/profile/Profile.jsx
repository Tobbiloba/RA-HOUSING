// @ts-nocheck
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PieChart from '@/components/admin/chart/PieChart'
import { getAdminInfo } from '@/action/admin'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAdminInfo())
  }, [])

  const { detail, loading } = useSelector(state => state?.getAdminInfo)
  return (
    <>
      {loading ? (
        <div className="flex justify-center py-6">
          <CircularProgress />
        </div>
      ) : (
        detail && (
          <div className="exo pb-8 w-[100%] p-[] md:p-[2rem] flex">
            <div className=" h-fit w-[100%] relative bg-slate-900 p-[1rem] flex flex-col lg:flex-row gap-[5%]">
              <div className="lg:max-w-[25rem] w-[100%] h-fit">
                <div className="lg:h-[27.5rem] relative overflow-hidden bg-slate-800 p-2 flex flex-col justify-between">
                  <img
                    src={detail.user?.profile_img}
                    className="h-auto max-h-[100%] w-auto"
                  />
                  <div className="text-center top-0 left-0 bg-black/50 absolute p-[1rem]">
                    <h1 className="text-2xl text-white">
                      {detail.user.firstname} {detail.user.lastname}
                    </h1>
                    <p className="text-[13px] text-white mt-1">
                      {detail.user.email}
                    </p>
                  </div>
                  <div></div>
                </div>

                <div className="h-[10.5.5rem] text-[14px] text-white bg-slate-800">
                  <h1 className="h-[3.5rem] border-b cursor-pointer border-l-4  flex items-center px-4">
                    Profile
                  </h1>
                  <h1 className="h-[3.5rem] border-b cursor-pointer flex items-center px-4">
                    Recent Activity
                  </h1>
                  <h1
                    className="h-[3.5rem] flex cursor-pointer items-center px-4"
                    onClick={() => navigate('/admin/profile/update-profile')}
                  >
                    Edit Profile
                  </h1>
                </div>
              </div>

              <div className="flex-1 text-[14px]">
                <div className="md:p-[1rem]">
                  <h1 className="text-[16px] p-[2rem] lg:p-0 text-slate-200">
                    Bio Graph
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-2  gap-y-[2rem] text-white p-[1rem] md:mt-[1rem] bg-slate-800">
                    <div className="flex gap-2 items-center">
                      <h1 className="text-[14px]">First Name:</h1>
                      <p className="text-[17px]">{detail.user.firstname}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h1 className="text-[14px]">Last Name:</h1>
                      <p className="text-[17px]">{detail.user.lastname}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <h1 className="text-[14px]">Username:</h1>
                      <p className="text-[17px]">{detail.user.username}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <h1 className="text-[14px]">Country:</h1>
                      <p className="text-[17px]">{detail.user.country}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <h1 className="text-[14px]">State:</h1>
                      <p className="text-[17px]">{detail.user.state}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h1 className="text-[14px]">City:</h1>
                      <p className="text-[17px]">{detail.user.city}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 mt-[1.75rem]">
                  <h1 className="text-[16px] p-[1rem] md:px-[1rem] md:p-0 text-slate-200">
                    Informations
                  </h1>

                  <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 xl:grid-cols-3 gap-y-[2rem] text-white md:p-[1rem] mt-[1rem]">
                    <PieChart
                      title="PROPERTIES"
                      value={detail.propertyCount}
                      series={[detail.propertyCount, 100]}
                      colors={['black', 'white']}
                      bg="#1e293b"
                    />
                    <PieChart
                      title="EMPLOYEE"
                      value={detail.user.employee.length}
                      series={[detail.user.employee.length, 100]}
                      colors={['black', 'white']}
                      bg="#1e293b"
                    />
                    <PieChart
                      title="ORDERS"
                      value={detail.orderCount}
                      series={[detail.orderCount, 105]}
                      colors={['black', 'white']}
                      bg="#1e293b"
                    />
                    <PieChart
                      title="COUPONS"
                      value={detail.couponCount}
                      series={[detail.couponCount, 100]}
                      colors={['black', 'white']}
                      bg="#1e293b"
                    />
                    <PieChart
                      title="NOTIFICATIONS"
                      value={detail.notificationCount}
                      series={[detail.notificationCount, 100]}
                      colors={['black', 'white']}
                      bg="#1e293b"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default Profile
