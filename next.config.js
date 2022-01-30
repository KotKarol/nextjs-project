module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/salons',
          permanent: true,
        },
      ]
    },
  }