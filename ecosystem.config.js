module.exports = {
  apps: [
    {
      name: "vg_erp_2019",
      script: "./node_modules/.bin/ts-node",
      args: "-r tsconfig-paths/register src/server.ts",
      ignore_watch: ["uploads", "downloads"],
      instances: "1",
      exec_mode: "cluster",
      env: {
        production: true
      }
    }
  ]
};
