import Image from "next/image";
import Animate from "../Common/Animate";

const EMPHASIS = "text-lg font-semibold mt-6";
const BODY = "mt-2 text-lg text-gray-700 leading-relaxed";

export default function OffersContent({ data }) {
  return (
    <div className="space-y-8 p-4 md:p-10">
      {data.map((section, index) => {
        const hasBanner = Boolean(section.banner);

        return (
          <section
            key={index}
            className={`grid gap-8 md:gap-12 ${
              hasBanner ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            } pb-5`}>
            {/* CONTENT */}
            <div className="space-y-6">
              {section.title && (
                <Animate>
                  <h1 className="text-2xl md:text-4xl font-semibold">
                    {section.title}
                  </h1>
                </Animate>
              )}

              {section.subtitle && (
                <Animate>
                  <p className="text-2xl md:text-4xl font-semibold mt-6">
                    {section.subtitle}
                  </p>
                </Animate>
              )}

              {section.paraTitle && (
                <Animate>
                  <p className={EMPHASIS}>{section.paraTitle}</p>
                </Animate>
              )}

              {section.paragraph && (
                <Animate>
                  <p className={BODY}>{section.paragraph}</p>
                </Animate>
              )}

              {section.lists?.map((list, i) => (
                <div key={i} className="space-y-4">
                  {list.listTitle && (
                    <Animate>
                      <p className={EMPHASIS}>{list.listTitle}</p>
                    </Animate>
                  )}

                  {list.listSubTitle && (
                    <Animate>
                      <p className={EMPHASIS}>{list.listSubTitle}</p>
                    </Animate>
                  )}

                  {list.listContent && (
                    <Animate>
                      <p className={BODY}>{list.listContent}</p>
                    </Animate>
                  )}

                  {list.listElements && (
                    <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                      {list.listElements.map((el, idx) => (
                        <Animate key={idx}>
                          <li>{el}</li>
                        </Animate>
                      ))}
                    </ul>
                  )}

                  {list.listFooter && (
                    <Animate>
                      <p className={BODY}>{list.listFooter}</p>
                    </Animate>
                  )}
                </div>
              ))}

              {section.footer?.map((foot, fIdx) => (
                <div key={fIdx}>
                  {foot.footerTitle && (
                    <Animate>
                      <p className={EMPHASIS}>{foot.footerTitle}</p>
                    </Animate>
                  )}

                  {foot.footerContent && (
                    <Animate>
                      <p className={BODY}>{foot.footerContent}</p>
                    </Animate>
                  )}
                </div>
              ))}
            </div>

            {/* BANNER */}
            {hasBanner && (
              <Animate>
                <div className="relative w-full h-[260px] md:h-full rounded-xl overflow-hidden">
                  <Image
                    src={section.banner}
                    alt="banner"
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />

                  {/* mild vignette for polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </Animate>
            )}
          </section>
        );
      })}
    </div>
  );
}
