import React, { useEffect, useRef, useState } from 'react';
import Review from '../molecules/form-steps/review.molecule';
import Step1 from '../molecules/form-steps/step-1.molecule';
import Step2 from '../molecules/form-steps/step-2.molecule';
import Step3 from '../molecules/form-steps/step-3.molecule';
import Step4 from '../molecules/form-steps/step-4.molecule';

interface Props {
  product?: any;
}

export const MultiStepForm: React.FC<Props> = ({ product }) => {
  const [step, setStep] = useState(1);

  const usePrevious = (value: any) => {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

  const prevStep = usePrevious(step);
  const props = { step, prevStep, setStep };
  // @ts-ignore
  switch (step) {
    case 1:
      return <Step1 {...props} statistics={product?.category?.statistics} />;
    case 2:
      return <Step2 {...props} />;
    case 3:
      return <Step3 {...props} />;
    case 4:
      return <Step4 {...props} statistics={product?.category?.statistics} />;
    case 5:
      return <Review productId={product.id} {...props} />;
    default:
      return (
        <div>
          <h1>Multi step form</h1>
        </div>
      );
  }
};

export default MultiStepForm;
