import Container from "./components/Container";
import { Rock_Salt } from 'next/font/google'
import { Kaushan_Script } from "next/font/google";

const rocksalt = Rock_Salt({ subsets: ['latin'], weight: '400' })
const satisfy = Kaushan_Script({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <Container>
      <div className="text-7xl flex-col text-center space-y-2 mt-12">
        <p className={satisfy.className}>Celestine</p>
        <p className={rocksalt.className}>Eatsthe Ave</p>
      </div>
    </Container>
  );
}