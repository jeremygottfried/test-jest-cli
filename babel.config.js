module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        "modules": "auto",
        "targets": {
          "browsers": "> 1%"
        },
        "forceAllTransforms": true,
        "corejs": "3.2.1",
        "useBuiltIns": "entry"
      }
    ],
    "@babel/react"
  ];
  const plugins = [
    "@babel/syntax-dynamic-import",
    "@babel/proposal-object-rest-spread"
  ];

  const env = {
    "test": {
      "plugins": [
        ["@babel/plugin-transform-runtime",
          {
            "regenerator": true
          }
        ]
      ]
    }
  }

  return {
    presets,
    plugins,
    env
  };
};
