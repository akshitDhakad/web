import type { ReactNode } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { LoanBreadcrumb } from "@/features/loan/components/loan-breadcrumb";
import { LoanStepper } from "@/features/loan/components/loan-stepper";
import { cn } from "@/lib/utils";

interface LoanApplicationLayoutProps {
  currentStep: 1 | 2 | 3;
  title: string;
  breadcrumbContentClass?: string;
  breadcrumbWidgetClass?: string;
  sectionClassName?: string;
  children: ReactNode;
}

export function LoanApplicationLayout({
  currentStep,
  title,
  breadcrumbContentClass,
  breadcrumbWidgetClass,
  sectionClassName,
  children,
}: LoanApplicationLayoutProps) {
  return (
    <>
      <LoanBreadcrumb
        title={title}
        contentClassName={breadcrumbContentClass}
        widgetClassName={breadcrumbWidgetClass}
      />

      <section className={cn("loan-deatils-area bg_disable loan-pt-130 loan-pb-120", sectionClassName)}>
        <div className="container">
          <div className="loan-application-grid">
            <aside className="loan-application-sidebar">
              <LoanStepper currentStep={currentStep} />
            </aside>

            <div className="loan-application-main">
              <FadeIn>
                <div className="loan-details-widget">{children}</div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
