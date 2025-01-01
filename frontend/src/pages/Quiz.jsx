import React from 'react'
import ValueCard from "../components/ui/ValueCard";
import QuestionsSection from "../components/QuestionsSection";
const Quiz = () => {
  useEffect(() => {
    const wakeBackend = async () => {
      try {
        await axios.get('https://autism-prediction-fmft.onrender.com'); 
        console.log('Backend woken up!');
      } catch (error) {
        console.error('Error waking up the backend:', error);
      }
    };

    wakeBackend();
  }, []); 
  return (
    <div className="flex flex-col w-full justify-center items-center align-middle">
    <div className="bg-secondary h-40 flex w-full justify-center items-center text-center">
      <p className="text-5xl text-white font-semibold">Find out if you have Autism.</p>
    </div>

    <section className="bg-white h-52 mb-0 md:mb-40 w-full relative">
      <div className="absolute hidden md:flex z-20 justify-center w-full gap-10">
        <ValueCard id={1} />
        <ValueCard id={2}/>
        <ValueCard id={3}/>
      </div>
      <div
        className="bg-secondary absolute w-full h-20"
        style={{
          clipPath:
            "polygon(0 0,100% 0,100% calc(100% - 20px),calc(50% + 320px) 100%,47% calc(100% - 15px),calc(50% - 310px) 100%,0 calc(100% - 15px))",
        }}
      ></div>
    </section>
      <QuestionsSection />
    
  </div>
  )
}

export default Quiz