import React from "react";

const ParagraphOutput = ({ data }) => {
  if (!data) return "";

  return (
    <ins
      className="adsbygoogle"
      style={{
        ...(data.width ? { width: data.width } : {}),
        ...(data.height ? { height: data.height } : {}),
        display: "block",
      }}
      data-ad-client={data.adClient}
      data-ad-slot={data.adSlot}
      data-ad-format={data.adFormat}
      {...(data.fullWidthResponsive
        ? { "data-full-width-responsive": "true" }
        : {})}
    />
  );
};

export default ParagraphOutput;
