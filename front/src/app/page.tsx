'use client'
import es from "../app/utils/locales/es";
import en from "../app/utils/locales/en";
import { usePathname } from "next/navigation";
import Sidenav from './components/Sidebar/Sidenav';

export default function HomePage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = locale === "es" ? es : en;

  return (
    <>
      <Sidenav />
      <h1>{t.home.title}</h1>
    </>
  );
}
