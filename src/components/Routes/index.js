import React from 'react';

const Demo = React.lazy(() => import('../Demo'));

const routes = [
    { path: '/demo', exact: false, name: 'Demo', component: Demo },
];

export default routes;