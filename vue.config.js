module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/style/_cards.scss";
            @import "@/style/_colors.scss";
            @import "@/style/_fonts.scss";
            @import "@/style/_miscUI.scss";
  `,
      },
    },
  },
};
