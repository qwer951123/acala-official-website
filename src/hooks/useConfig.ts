import { useContext } from "react";
import { ConfigContext } from "@/provider/config";
import { SiteConfig } from "@/types";

export default (): SiteConfig => {
    return useContext(ConfigContext) as SiteConfig;
}
