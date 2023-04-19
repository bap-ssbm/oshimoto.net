import SocialIcons from "./components/ui/SocialIcons";
import MainTitle from "./components/enterPg/MainTitle";

import MainImgWrapper from "./components/enterPg/MainImgWrapper";


export default function Home() {
  return (
    <main className='w-full min-h-full bg-black fixed top-0 left-0 z-[100] flex flex-col items-center justify-center'>

      <MainImgWrapper />
      <MainTitle />

      <div className="w-full absolute bottom-10 flex justify-center">
        <SocialIcons big={true}/>
      </div>

    </main>

  )
}
