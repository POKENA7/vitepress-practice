import DefaultTheme from "vitepress/theme";
import TodayDate from "./TodayDate.vue";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("TodayDate", TodayDate);
  },
} satisfies Theme;
