import type { Plugin } from "vite";
import { defineConfig } from "vite";

const NavLinkPatch = (): Plugin => ({
  name: "override-target-blank",
  enforce: "pre",
  transform: (code, id) => {
    if (id.endsWith("VPLink.vue")) {
      return code.replace("_blank", "_self");
    }
  },
});

const LinkSponsor = (): Plugin => ({
  name: "change-sponsor-functionality",
  enforce: "pre",
  transform: (code, id) => {
    if (id.endsWith("VPTeamMembersItem.vue")) {
      return code.replace('<VPIconHeart class="sp-icon" /> Sponsor', "View");
    }
  },
});

export default defineConfig({
  plugins: [NavLinkPatch(), LinkSponsor()],
});
