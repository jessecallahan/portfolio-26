"use client";

import { Grid, Tab, Tabs } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];


export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const activeIndex = navLinks.findIndex((link) => link.to === pathname);
  const value = activeIndex === -1 ? false : activeIndex;

  function handleChange(
    _event: React.SyntheticEvent,
    newValue: number,
  ) {
    router.push(navLinks[newValue].to);
  }

  return (
    <Grid>
      <Tabs value={value} onChange={handleChange} aria-label="navigation">
        {navLinks.map((link, index) => (
          <Tab key={link.to} label={link.label} value={index} />
        ))}
      </Tabs>
    </Grid>
  );
}