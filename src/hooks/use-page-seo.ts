import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

const usePageSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | I-Lab Manufacturing & Engineering`;
    
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      const prevDesc = metaDesc?.getAttribute("content") || "";
      if (metaDesc) metaDesc.setAttribute("content", description);
      return () => {
        document.title = prevTitle;
        if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      };
    }
    
    return () => { document.title = prevTitle; };
  }, [title, description]);
};

export default usePageSEO;
