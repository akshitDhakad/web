import { Check } from "lucide-react";
import Link from "next/link";

import { LOAN_STEPS } from "@/features/loan/constants/loan";
import { cn } from "@/lib/utils";

interface LoanStepperProps {
  currentStep: 1 | 2 | 3;
}

export function LoanStepper({ currentStep }: LoanStepperProps) {
  return (
    <div className="stepper-widget mt-8 px-3 sm:mt-0 sm:px-0">
      <ul>
        {LOAN_STEPS.map((step) => {
          const isActive = step.step === currentStep;
          const isComplete = step.step < currentStep;

          return (
            <li
              key={step.step}
              className={cn(isActive && "active", isComplete && "complete", step.step === 1 && "mt-0")}
            >
              <Link href={step.href}>
                <span className="number">
                  <span className="step-check" aria-hidden>
                    <Check size={14} />
                  </span>
                  <span className="step-label">{step.step}</span>
                </span>
                {step.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
