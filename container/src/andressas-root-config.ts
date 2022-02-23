import { registerApplication, start } from "single-spa";



registerApplication({
  name: "@andressas/mf-header",
  app: () => System.import("@andressas/mf-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@andressas/mf-main",
  app: () => System.import("@andressas/mf-main"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@andressas/mf-images",
  app: () => System.import("@andressas/mf-images"),
  activeWhen: ["/"]
});


start({
  urlRerouteOnly: true,
});
