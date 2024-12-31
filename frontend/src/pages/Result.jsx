import React from "react";
import ResultSection from "@/components/ResultSection";
import Emphasize from "@/components/Emphasize";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
const autisticContent = {
  sections: [
    {
      title: "What does this mean?",
      description:
        "You should probably get a diagnosis for Autism Spectrum Disorder if you haven't already. It is a neurological and developmental disorder that affects how you interact with others, communicate, learn and behave. It can be diagnosed at any age but generally show symptoms within the first two years of life.",
      subdesc:"About 1 in 100 children has autism but it is often not diagnosed until much later in late teens or in the 20s. Abilities of autistic people vary and evolve over time, while some can live independently, others have severe disabilities and require life-long support. It is not a disorder that can be cured, but several treatments help improve the quality of life.",
        emphasize: {
        text: '"Autism is not a processing error. Its a different operating system."',
        subtext: "Sarah Hendrickx",
      },
    },
    {
      title: "Is this accurate?",
      description:
        "This result was achieved through a Machine Learning model (RF) trained on a screening dataset of ~800 participants. The final classification report showed an overall accuracy of 83.25%, so take this result with a grain of salt. ",
        subdesc:"Due to a class imbalance in positively autistic cases, there is a much higher chance of error when given a 'Not Autistic' diagnosis. However, an 'Autistic' diagnosis has better chances of being accurate. If you would like to receive a much more accurate diagnosis, I kindly advice you visit a reputable mental health institution in your area.",
      emphasize: {
        text: '"And still, I rise."',
        subtext: "Maya Angelou",
        withBg: true,
      },
    },
  ],
};

const notAutisticContent = {
    sections: [
      {
        title: "What does this mean?",
        description:
          "You most likely don't have autism, which makes life easier. It is a neurological and developmental disorder that affects how you interact with others, communicate, learn and behave. It can be diagnosed at any age but generally show symptoms within the first two years of life.",
        subdesc:"About 1 in 100 children has autism but it is often not diagnosed until much later in late teens or in the 20s. Abilities of autistic people vary and evolve over time, while some can live independently, others have severe disabilities and require life-long support. It is not a disorder that can be cured, but several treatments help improve the quality of life.",
          emphasize: {
          text: '"The only disability in life is a bad attitude."',
          subtext: "Scott Hamilton",
        },
      },
      {
        title: "Is this accurate?",
        description:
          "This result was achieved through a Machine Learning model (RF) trained on a screening dataset of ~800 participants. The final classification report showed an overall accuracy of 83.25%, so take this result with a grain of salt. ",
          subdesc:"Due to a class imbalance in positively autistic cases, there is a much higher chance of error when given a 'Not Autistic' diagnosis. However, an 'Autistic' diagnosis has better chances of being accurate. If you would like to receive a much more accurate diagnosis, I kindly advice you visit a reputable mental health institution in your area.",
        emphasize: {
          text: '"And still, I rise."',
          subtext: "Maya Angelou",
          withBg: true,
        },
      },
    ],
  };

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {prediction} = location.state || {}
    let autistic = false;
    if(prediction == "yes"){
        autistic = true
    }
    let content = {}
    if(autistic){
        content = autisticContent
    }else{
        content = notAutisticContent
    }
  return (
    <div className="min-h-[90vh] flex flex-col w-full items-center">
      <ResultSection autistic={autistic}/>
      {content.sections.map((section, index) => (
        <div
          key={index}
          className="w-full md:w-2/3 px-20 flex flex-col gap-8 align-middle justify-center mt-24"
        >
          <p className="text-2xl md:text-4xl font-semibold">{section.title}</p>
          <p className="text-md md:text-xl">{section.description}</p>
          <p className="text-md md:text-xl">{section.subdesc}</p>
          <Emphasize
            text={section.emphasize.text}
            subtext={section.emphasize.subtext}
            color={autistic? 'secondary': 'primary'}
            withBg={section.emphasize.withBg || false}
          />
        </div>
      ))}
      <Button variant={autistic? '' : 'secondary'} onClick={()=> navigate('/')} className="w-64 h-16 text-2xl mt-10">Retake the Test</Button>
    </div>
  );
};

export default Result;
 