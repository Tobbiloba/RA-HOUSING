import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { BiListUl } from 'react-icons/bi'
import { IoPeopleOutline } from 'react-icons/io5'
import { MdOutlineLockOpen } from 'react-icons/md'
import { CiLogout } from 'react-icons/ci'
import { Link, useLocation } from 'react-router-dom'
const links = [
  {
    name: 'Dashboard',
    link: '/user/dashboard',
    icon: <HiMenuAlt1 />,
  },
  {
    name: 'My Orders',
    link: '/user/orders',
    icon: <BiListUl />,
  },
  {
    name: 'Update Profile',
    link: '/user/update-profile',
    icon: <IoPeopleOutline />,
  },
  {
    name: 'Change Password',
    link: '/user/change-password',
    icon: <MdOutlineLockOpen />,
  },
  {
    name: 'Logout',
    link: '/user/logout', // Update the link to the logout endpoint
    icon: <CiLogout />,
  },
]

const Sidebar = () => {
  const location = useLocation()
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logging out...')
  }

  const pathname = location.pathname.split('/')[2]
  // console.log(pathname)

  return (
    <div className="exo flex flex-col gap-0 h-fit bg-white shadow-md pb-4  lg:pb-6 pt-4 lg:pt-6 text-slate-500 px-6 sm:w-[30rem] lg:min-w-[17.5rem] lg:max-w-[20rem] xl:px-4">
      {links.map((link, index) => {
        if (pathname == link.link.split('/')[1]) {
          console.log('match')
        }
        // console.log(link.link.split('/')[1])
        return (
          <div
            key={index}
            className={`${pathname === link.link.split('/')[2] ? 'bg-slate-500 text-white' : ''}`}
          >
            <Link
              to={link.link}
              onClick={link.name === 'Logout' ? handleLogout : null}
              className="flex flex-row gap-6 cursor-pointer hover:bg-slate-100 text-[13px] px-3 py-3 hover:text-slate-900"
            >
              {/* <img src={link.icon} alt={link.name} className='w-5 h-5'/> */}
              <div className="text-[20px]">{link.icon}</div>

              {link.name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar
