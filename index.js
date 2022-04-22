module.exports = {
  name: 'plugin-silence-pnp',
  factory: require => ({
    hooks: {
      setupScriptEnvironment(project, scriptEnv) {
        scriptEnv.PNP_DEBUG_LEVEL = '0';
      },
    },
  }),
};
