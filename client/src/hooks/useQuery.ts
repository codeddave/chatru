import { useLocation } from "react-router-dom";
import "url-search-params-polyfill";

export function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}
