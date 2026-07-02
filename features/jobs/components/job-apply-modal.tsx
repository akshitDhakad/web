"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { JobMeta } from "@/features/jobs/components/job-meta";
import type { JobDetail } from "@/features/jobs/types/job";

interface JobApplyModalProps {
  job: JobDetail;
  open: boolean;
  onClose: () => void;
}

export function JobApplyModal({ job, open, onClose }: JobApplyModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <button
        type="button"
        className="job-application-modal-backdrop border-0"
        aria-label="Close apply modal"
        onClick={onClose}
      />
      <div
        className="job-application-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-title"
        ref={dialogRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div>
                <h4 id="apply-modal-title" className="job-title">
                  {job.title}
                </h4>
                <JobMeta job={job} />
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  onClose();
                }}
              >
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="label" htmlFor="apply-first-name">
                      First Name<span>*</span>
                    </label>
                    <input id="apply-first-name" className="form-control" type="text" required />
                  </div>
                  <div>
                    <label className="label" htmlFor="apply-last-name">
                      Last Name<span>*</span>
                    </label>
                    <input id="apply-last-name" className="form-control" type="text" required />
                  </div>
                  <div>
                    <label className="label" htmlFor="apply-email">
                      Email<span>*</span>
                    </label>
                    <input id="apply-email" className="form-control" type="email" required />
                  </div>
                  <div>
                    <label className="label" htmlFor="apply-phone">
                      Phone Number<span>*</span>
                    </label>
                    <input id="apply-phone" className="form-control" type="tel" required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="label" htmlFor="apply-message">
                      Message to the recruiter:
                    </label>
                    <textarea className="form-control" id="apply-message" rows={4} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="label mb-0">Attach Your Resume</label>
                    <p className="support mb-2">
                      Files Supported : (.doc, .docx, .pdf, .rtf, .txt. Max size 10MB)
                    </p>
                    <div className="dropzone">
                      <Image src="/img/icon_upload.svg" alt="" width={48} height={48} aria-hidden />
                      <h4>Drag and Drop files here</h4>
                      <p>or browse to</p>
                      <div className="theme-btn theme-btn-primary_alt page-mt-10 inline-block">
                        Choose File
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between md:col-span-2">
                    <button
                      type="button"
                      className="theme-btn theme-btn-primary_alt inline-flex items-center gap-2"
                      onClick={onClose}
                    >
                      <ArrowLeft size={16} aria-hidden /> back
                    </button>
                    <button type="submit" className="theme-btn theme-btn-primary_alt">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
