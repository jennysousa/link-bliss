import { describe, expect, it } from "vitest";

import { Route } from "@/routes/__root";

type HeadFn = (ctx: never) => { scripts?: Array<{ children?: string }> };

function inlineScripts() {
  const head = (Route.options as unknown as { head?: HeadFn }).head?.({} as never);
  return (head?.scripts ?? []).map((script) => script.children ?? "").join("\n");
}

describe("Analytics installed on the page", () => {
  it("loads Microsoft Clarity for project z2tt0pf0q5", () => {
    const js = inlineScripts();
    expect(js).toContain("clarity.ms/tag/");
    expect(js).toContain("z2tt0pf0q5");
  });

  it("loads Google Tag Manager for container GTM-WFLHGVNM", () => {
    const js = inlineScripts();
    expect(js).toContain("googletagmanager.com/gtm.js");
    expect(js).toContain("GTM-WFLHGVNM");
    // The dataLayer query must reach the container intact, or tags stop firing.
    expect(js).toContain("'&l='+l");
  });
});
