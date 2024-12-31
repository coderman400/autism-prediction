import React from 'react';
import fast from '../../assets/fast.png';
import accurate from '../../assets/accurate.png';
import secret from '../../assets/secret.png';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const ValueCard = ({ id }) => {
  const values = {
    1: { 
      title: "Quick and Easy", 
      desc: "Finish the test in under a minute!", 
      img: fast // Image for card 1
    },
    2: { 
      title: "Accurate Results", 
      desc: "Get reliable results based on your responses.",
      img: accurate // Image for card 2
    },
    3: { 
      title: "Confidential", 
      desc: "Your information is kept private and secure.",
      img: secret // Image for card 3
    },
  };

  const { title, desc, img } = values[id];

  return (
    <Card className="w-80 h-64 text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center h-full">
        <img src={img} alt={title} className="max-w-full opacity-80 max-h-full object-contain" />
      </CardContent>
    </Card>
  );
};

export default ValueCard;
