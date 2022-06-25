module.exports = {
  extends: ["next", "prettier"],
  rules: {
    "react/no-unescaped-entities": "warn",
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
  },
};
