<<<<<<< HEAD
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
=======
<<<<<<< HEAD

import '@/app/ui/global.css';
import { inter} from "@/app/ui/fonts";
=======
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
>>>>>>> f281ae9 (first commit)
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
<<<<<<< HEAD
    </html>
=======
<<<<<<< HEAD
          </html>
=======
    </html>
>>>>>>> f281ae9 (first commit)
>>>>>>> 036468f (fix: replace bcrypt with bcryptjs)
  );
}
