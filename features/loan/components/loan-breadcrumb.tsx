import Link from "next/link";

import { cn } from "@/lib/utils";

interface LoanBreadcrumbProps {
  title: string;
  contentClassName?: string;
  widgetClassName?: string;
}

export function LoanBreadcrumb({
  title,
  contentClassName = "loan-pt-85",
  widgetClassName = "page-pt-200 loan-pb-110",
}: LoanBreadcrumbProps) {
  return (
    <section className="breadcrumb-area loan-breadcrumb">
      <div
        className={cn("breadcrumb-widget", widgetClassName)}
        style={{ backgroundImage: "url(/img/breadcrumb/bg-1.png)" }}
      >
        <div className="container">
          <div className={cn("breadcrumb-content", contentClassName)}>
            <h1>{title}</h1>
            <ul>
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/loan">pages</Link>
              </li>
              <li>loan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
