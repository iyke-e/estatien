import Button from '@/components/ui/Button'
import React from 'react'

interface faqCardProp {
    question: string,
    response: string,
}

const FaqCard = ({ question, response }: faqCardProp) => {
    return (
        <div className={`w-full rounded-lg p-5 border space-y-4 border-gray-15`}>
            <h3 className="text-xl mb-8">{question}</h3>
            <p className='mb-5'>{response}</p>
            <Button btntype='black'>
                Read More
            </Button>
        </div>
    )
}

export default FaqCard