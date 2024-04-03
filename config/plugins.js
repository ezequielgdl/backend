module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          serviceAccount: require(env("FIREBASE_ADMIN_KEY")),
          bucket: env("STORAGE_BUCKET_URL"),
          sortInStorage: true, // true | false
          debug: false, // true | false
        },
      },
    },
  };
};

// require("../mnami-e5c83-firebase-adminsdk-iv8ws-0c07e6e5c1.json")
