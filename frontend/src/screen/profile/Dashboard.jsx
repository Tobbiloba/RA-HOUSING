// @ts-nocheck
import React, {useEffect} from "react";
import { SlRefresh } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import { TbBus } from "react-icons/tb";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { OrderTable } from "@/components/profile/table/OrderTable";
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrder } from '@/action/order';
import Loading from '@/components/Loading';
import { CircularProgress } from '@mui/material';
const items = [
  {
    name: "Total Booking",
    number: 299,
    icon: <SlRefresh className="text-[20px]"/>,
  },
  {
    name: "Pending Booking",
    number: 299,
    icon: <BsCart2 className="text-[20px]"/>,
  },
  {
    name: "Processing Booking",
    number: 299,
    icon: <TbBus className="text-[24px]"/>,
  },
  {
    name: "Declined Booking",
    number: 299,
    icon: <IoCheckmarkDoneSharp className="text-[20px]"/>,
  },
];

const orders = [
  {

  }
]
const Dashboard = () => {
  const dispatch = useDispatch()
  const { loading, details} = useSelector((state) => state.getUserOrder)

  console.log(loading, details)
  const data = JSON.parse(sessionStorage.getItem("userInfo"));
  console.log(data._id)

  useEffect(() => {
    dispatch(getUserOrder(data._id))
  }, [])
  return (
    <div className="bg-white exo p-3 rounded-md">
      <div>
        <h1 className="text-xl font-[600]">Dashboard</h1>

        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              className={`border ${
                index == 0
                  ? "bg-green-100"
                  : index == 1
                  ? "bg-slate-100"
                  : index == 2
                  ? "bg-slate-100"
                  : "bg-red-100"
              }
              flex flex-row justify- gap-6 items-center px-4 h-[5.5rem] rounded-md`}
              key={index}
            >
              <div className="border bg-white/60 w-10 h-10 justify-center flex items-center rounded-full ">{item.icon}</div>
              <div>
                <p className=" text-[14px] mb-1">{item.name}</p>
                <h1 className="text-xl font-[600]">{item.number}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
      {
        loading ? <div className='pb-[2rem] flex justify-center'>
          <CircularProgress />
        </div> : !loading && details.length > 0 ? <div>
          <h1 className="text-xl mb-4 font-[600]">All Orders</h1>
      <OrderTable orders={details}/>
      </div> : !loading && details.length == 0 && <div className='flex items-center gap-4 flex-col justify-center'>
        
        <img src='https://cdn-icons-png.flaticon.com/128/10967/10967123.png' className='w-24'/>
        {/* <h1 className='text-xl mt-6'>No order yet</h1> */}
        </div>
      }
      </div>
    </div>
  );
};

export default Dashboard;
