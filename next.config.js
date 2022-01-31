module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/salons",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
