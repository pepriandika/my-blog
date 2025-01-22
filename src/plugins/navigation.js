export default {
  install(app) {
    app.config.globalProperties.$navigateToPost = (router, id) => {
      router.push(`/post/${id}`);
    };
  }
};
