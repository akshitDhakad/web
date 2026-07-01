import Image from "next/image";

interface BlogDetailHeroProps {
  title: string;
  author: string;
  date: string;
}

export function BlogDetailHero({ title, author, date }: BlogDetailHeroProps) {
  return (
    <section className="breadcrumb-area" aria-label="Post hero">
      <div
        className="breadcrumb-widget breadcrumb-widget-2 pt-200 pb-145"
        style={{ backgroundImage: "url(/img/breadcrumb/bg-3.jpg)" }}
      >
        <div className="shapes">
          <div className="one-shape shape-3">
            <Image
              src="/img/breadcrumb/Polygon-3.png"
              alt=""
              width={120}
              height={120}
              aria-hidden
            />
          </div>
          <div className="one-shape shape-4">
            <Image
              src="/img/breadcrumb/Polygon-4.png"
              alt=""
              width={120}
              height={120}
              aria-hidden
            />
          </div>
        </div>
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="breadcrumb-content pt-50">
              <h1>{title}</h1>
              <div className="post-info mt-5">
                <div className="autor mr-20">
                  <Image
                    src="/img/blog/user-profile.png"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                  />
                  <span>{author}</span>
                </div>
                <div className="date">
                  <Image
                    src="/img/blog/calendar-outline.png"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                  />
                  <span>{date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
