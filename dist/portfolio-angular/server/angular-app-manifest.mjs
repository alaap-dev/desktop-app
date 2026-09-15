
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/desktop-app',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 14340, hash: '6872037f0fc8d1324885a7e2c41a3869bf3ec7605d95171ce63330201958e0c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: 'd76355439b94ca0fd38faf57d6d386598ac6a1b6c77eefc86567c9dba23b89cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-NF3XY2KU.css': {size: 13727, hash: 'D1RcHh+joq0', text: () => import('./assets-chunks/styles-NF3XY2KU_css.mjs').then(m => m.default)}
  },
};
