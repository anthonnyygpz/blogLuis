// import { Footer } from "./footer";
import { Navbar } from "./navbar";

export const DefaultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </>
  );
};
