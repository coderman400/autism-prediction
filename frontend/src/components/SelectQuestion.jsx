import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const SelectQuestion = () => {
    const question = {
        "question": "What's your ethnicity?",
        "placeholder": "Select ethnicity",
        "options": [
            { value: "white-european", label: "White-European" },
            { value: "middle eastern", label: "Middle Eastern" },
            { value: "asian", label: "Asian" },
            { value: "black", label: "Black" },
            { value: "south asian", label: "South Asian" },
            { value: "pasifika", label: "Pasifika" },
            { value: "latino", label: "Latino" },
            { value: "hispanic", label: "Hispanic" },
            { value: "turkish", label: "Turkish" },
            { value: "others", label: "Others" },
        ]
    }
    const question2 = {
        "question": "What's your country of residence?",
        "placeholder": "Select country",
        "options": [
            "Afghanistan", "Angola", "Argentina", "Armenia", "Aruba",
            "Australia", "Austria", "Azerbaijan", "Bahamas", "Bangladesh",
            "Belgium", "Bolivia", "Brazil", "Burundi", "Canada",
            "China", "Cyprus", "Czech Republic", "Egypt", "Ethiopia",
            "France", "Germany", "Iceland", "India", "Iran", "Iraq",
            "Ireland", "Italy", "Japan", "Jordan", "Kazakhstan",
            "Malaysia", "Mexico", "Nicaragua", "Niger", "Netherlands",
            "New Zealand", "Oman", "Pakistan", "Romania", "Russia",
            "Saudi Arabia", "Serbia", "Sierra Leone", "South Africa", "Spain",
            "Sri Lanka", "Sweden", "Tonga", "Turkey", "Ukraine",
            "United Arab Emirates", "United Kingdom", "United States", "Viet Nam", "Others"
        ].sort().map(country => ({ value: country.toLowerCase(), label: country }))
    }
  return (
    <div className='mb-20 text-center flex justify-center flex-row gap-20 text-2xl w-full align-middle items-center'>
        <p>{question2.question} </p>
        <Select>
            <SelectTrigger className="w-[180px] p-6">
                <SelectValue placeholder={question2.placeholder}/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {question2.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
  )
}

export default SelectQuestion
