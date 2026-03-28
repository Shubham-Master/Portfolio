'use client';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export interface ICta {
  btn: string;
  className: string;
  children: React.ReactNode;
}
const CTA = ({ btn, children, className }: ICta) => {
  const isDirectLink = /^(mailto:|tel:|https?:\/\/)/.test(btn);

  useEffect(() => {
    if (isDirectLink) {
      return;
    }

    (async function () {
      const cal = await getCalApi({});
      cal("ui", { "theme": "dark", "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [isDirectLink])

  if (isDirectLink) {
    const isExternalHttp = /^https?:\/\//.test(btn);

    return (
      <a
        href={btn}
        className={className}
        target={isExternalHttp ? "_blank" : undefined}
        rel={isExternalHttp ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${className}`} data-cal-config='{"layout":"month_view"}' data-cal-link={btn}>
      {children}
    </button>
  )
};



export default CTA;
