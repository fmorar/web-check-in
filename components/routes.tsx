// Auth Imports
import { IRoute } from '@/types/types';
import {
  HiOutlineHome,
  HiOutlineCog8Tooth,
  HiOutlineBuildingOffice
} from 'react-icons/hi2';


export const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    path: '/dashboard/main',
    icon: <HiOutlineHome className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />,
    collapse: false
  },
  {
    name: 'My properties',
    path: '/dashboard/properties',
    icon: (
      <HiOutlineBuildingOffice className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false,
    disabled: false
  },
  {
    name: 'Profile Settings',
    path: '/dashboard/settings',
    icon: (
      <HiOutlineCog8Tooth className="-mt-[7px] h-4 w-4 stroke-2 text-inherit" />
    ),
    collapse: false
  }

];
