import Image from "next/image";
import BottomAppBar from "./components/BottomAppBar";


export default function Home() {
  return (
    <div>
      <h1 className='flex h-screen items-center justify-center font-bold text-4xl'>
        this is test page !!
      </h1>
      <BottomAppBar />
    </div>
  );
}
