"use client";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { usePathname } from 'next/navigation';
=======
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
<<<<<<< HEAD
=======
>>>>>>> f281ae9 (first commit)
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
<<<<<<< HEAD
} from "@heroicons/react/24/outline";
=======
<<<<<<< HEAD
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
=======
} from "@heroicons/react/24/outline";
>>>>>>> f281ae9 (first commit)
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
<<<<<<< HEAD
  { name: "Home", href: "/dashboard", icon: HomeIcon },
=======
<<<<<<< HEAD
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
<<<<<<< HEAD
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
=======
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
=======
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
>>>>>>> f281ae9 (first commit)
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)
];

export default function NavLinks() {
  const pathname = usePathname();
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> f281ae9 (first commit)
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
<<<<<<< HEAD
        return (
=======
<<<<<<< HEAD
        return ( 
=======
        return (
>>>>>>> f281ae9 (first commit)
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
<<<<<<< HEAD
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              pathname === link.href && "bg-sky-100 text-blue-600"
            )}
          >
=======
<<<<<<< HEAD
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            pathname === link.href && "bg-sky-100 text-blue-600"
            )}
                       >
=======
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              pathname === link.href && "bg-sky-100 text-blue-600"
            )}
          >
>>>>>>> f281ae9 (first commit)
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
