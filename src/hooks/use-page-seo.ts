import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const usePageSEO = ({ title, description, keywords, canonical }: SEOProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | I-Lab Manufacturing & Engineering, Bhopal`;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      const prevDesc = metaDesc?.getAttribute("content") || "";
      if (metaDesc) metaDesc.setAttribute("content", description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", description);

      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", title);

      if (keywords) {
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        const prevKeywords = metaKeywords?.getAttribute("content") || "";
        if (metaKeywords) metaKeywords.setAttribute("content", keywords);
      }

      if (canonical) {
        let link = document.querySelector('link[rel="canonical"]');
        if (link) link.setAttribute("href", canonical);
      }

      return () => {
        document.title = prevTitle;
        if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      };
    }

    return () => { document.title = prevTitle; };
  }, [title, description, keywords, canonical]);
};

export default usePageSEO;
