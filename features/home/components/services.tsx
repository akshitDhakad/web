import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CounterStat } from "@/components/animations/counter-stat";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionTitle } from "@/components/common/section-title";
import { containerClassName } from "@/components/layout/container";
import {
  SERVICE_COMPARISON_ROWS,
  SERVICE_STATS,
  type ComparisonValue,
} from "@/features/home/constants/service-comparison";

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (value === "check") {
    return <CheckCircle2 className="icon-check mx-auto" size={20} aria-label="Yes" />;
  }
  if (value === "cross") {
    return <XCircle className="icon-cross mx-auto" size={20} aria-label="No" />;
  }
  return <>{value}</>;
}

export function Services() {
  return (
    <section className="services-area bg-white pt-120 pb-120" aria-label="Service comparisons">
      <div className={containerClassName}>
        <SectionTitle
          className="mb-45"
          eyebrow="_SERVICE COMPARISONS"
          title={
            <>
              Our better <span className="underline-shape">services</span>
            </>
          }
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
        />

        <FadeIn>
          <div className="table-responsive overflow-x-auto">
            <table className="comparison-table mb-0">
              <thead>
                <tr>
                  <th className="feature-head" scope="col" />
                  <th className="feature-item" scope="col">
                    <Image
                      src="/img/logo/Logo-2.png"
                      alt="Banca"
                      width={100}
                      height={32}
                      className="mx-auto h-auto w-auto"
                    />
                  </th>
                  <th className="feature-item" scope="col">
                    Other Companies
                  </th>
                </tr>
              </thead>
              <tbody>
                {SERVICE_COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <th className="feature-head" scope="row">
                      {row.feature}
                    </th>
                    <td className="feature-item">
                      <ComparisonCell value={row.banca} />
                    </td>
                    <td className="feature-item">
                      <ComparisonCell value={row.others} />
                    </td>
                  </tr>
                ))}
                <tr>
                  <th className="feature-head bg-transparent" scope="row" />
                  <td className="feature-item bg-transparent p-0">
                    <Link href="#" className="theme-btn">
                      <span>Get started now</span>
                      <ArrowRight size={18} aria-hidden />
                    </Link>
                  </td>
                  <td className="feature-item bg-transparent" />
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>

        <div className="pt-120 stat-view">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
            {SERVICE_STATS.map((stat, index) => (
              <FadeIn
                key={stat.label}
                delay={0.1 + index * 0.15}
                className={`stat-col ${index === 0 ? "border-end" : ""} ${index === 2 ? "border-start" : ""}`}
              >
                <CounterStat
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
                <p>{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
