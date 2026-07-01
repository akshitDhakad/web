"use client";

export function BlogCommentForm() {
  return (
    <div className="blog-leave-reply">
      <h4 className="blog-widget-title mb-10">Leave a Reply</h4>
      <p className="pt-2">
        Your email address will not be published. Required fields are marked *
      </p>

      <form
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="floating-input">
            <input className="form-control" type="text" placeholder="Full name" id="f-name" />
            <label htmlFor="f-name">Full name*</label>
          </div>
          <div className="floating-input">
            <input className="form-control" type="email" placeholder="email" id="email-address" />
            <label htmlFor="email-address">email*</label>
          </div>
          <div className="floating-input lg:col-span-2">
            <input
              className="form-control"
              type="url"
              placeholder="Website (Optional)"
              id="websiteInfo"
            />
            <label htmlFor="websiteInfo">Website (Optional)</label>
          </div>
          <div className="floating-input lg:col-span-2">
            <textarea
              className="form-control"
              placeholder="Comment type..."
              cols={30}
              rows={5}
              id="commentInfo"
            />
            <label htmlFor="commentInfo">Comment type...</label>
          </div>
          <div className="lg:col-span-2">
            <input type="checkbox" id="checkRadio" />
            <label className="check-label" htmlFor="checkRadio">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <div className="col-span-full">
            <button className="theme-btn mt-35" type="submit">
              Post Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
