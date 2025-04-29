// vite.config.ts
import { TanStackRouterVite } from "file:///D:/Project/Base/reactjs-base/node_modules/.pnpm/@tanstack+router-plugin@1.51.6_vite@5.4.2_@types+node@22.5.1_less@4.2.0_terser@5.31.6__webpack@5.94.0_esbuild@0.21.5_/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
import react from "file:///D:/Project/Base/reactjs-base/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_@swc+helpers@0.5.12_vite@5.4.2_@types+node@22.5.1_less@4.2.0_terser@5.31.6_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "node:path";
import { normalizePath } from "file:///D:/Project/Base/reactjs-base/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1_less@4.2.0_terser@5.31.6/node_modules/vite/dist/node/index.js";
import { viteStaticCopy } from "file:///D:/Project/Base/reactjs-base/node_modules/.pnpm/vite-plugin-static-copy@1.0.6_vite@5.4.2_@types+node@22.5.1_less@4.2.0_terser@5.31.6_/node_modules/vite-plugin-static-copy/dist/index.js";
import { defineConfig } from "file:///D:/Project/Base/reactjs-base/node_modules/.pnpm/vitest@2.0.5_@types+node@22.5.1_jsdom@25.0.0_less@4.2.0_terser@5.31.6/node_modules/vitest/dist/config.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve("./src/assets/locales")),
          dest: normalizePath(path.resolve("./dist"))
        }
      ]
    })
  ],
  server: {
    host: true,
    strictPort: true
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    css: true
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXEJhc2VcXFxccmVhY3Rqcy1iYXNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXEJhc2VcXFxccmVhY3Rqcy1iYXNlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0L0Jhc2UvcmVhY3Rqcy1iYXNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVGFuU3RhY2tSb3V0ZXJWaXRlIH0gZnJvbSBcIkB0YW5zdGFjay9yb3V0ZXItcGx1Z2luL3ZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVQYXRoIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tIFwidml0ZS1wbHVnaW4tc3RhdGljLWNvcHlcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVzdC9jb25maWdcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0cGx1Z2luczogW1xyXG5cdFx0cmVhY3QoKSxcclxuXHRcdFRhblN0YWNrUm91dGVyVml0ZSgpLFxyXG5cdFx0dml0ZVN0YXRpY0NvcHkoe1xyXG5cdFx0XHR0YXJnZXRzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3JjOiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShcIi4vc3JjL2Fzc2V0cy9sb2NhbGVzXCIpKSxcclxuXHRcdFx0XHRcdGRlc3Q6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKFwiLi9kaXN0XCIpKSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSksXHJcblx0XSxcclxuXHRzZXJ2ZXI6IHtcclxuXHRcdGhvc3Q6IHRydWUsXHJcblx0XHRzdHJpY3RQb3J0OiB0cnVlLFxyXG5cdH0sXHJcblx0dGVzdDoge1xyXG5cdFx0ZW52aXJvbm1lbnQ6IFwianNkb21cIixcclxuXHRcdHNldHVwRmlsZXM6IFtcIi4vdml0ZXN0LnNldHVwLnRzXCJdLFxyXG5cdFx0Y3NzOiB0cnVlLFxyXG5cdH0sXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0YWxpYXM6IHtcclxuXHRcdFx0XCJAXCI6IFwiL3NyY1wiLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4USxTQUFTLDBCQUEwQjtBQUNqVCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsc0JBQXNCO0FBQy9CLFNBQVMsb0JBQW9CO0FBRzdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLG1CQUFtQjtBQUFBLElBQ25CLGVBQWU7QUFBQSxNQUNkLFNBQVM7QUFBQSxRQUNSO0FBQUEsVUFDQyxLQUFLLGNBQWMsS0FBSyxRQUFRLHNCQUFzQixDQUFDO0FBQUEsVUFDdkQsTUFBTSxjQUFjLEtBQUssUUFBUSxRQUFRLENBQUM7QUFBQSxRQUMzQztBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDYjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0wsYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLG1CQUFtQjtBQUFBLElBQ2hDLEtBQUs7QUFBQSxFQUNOO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDTjtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
