export const SITE_NAME = 'ScaleGuide';
export const SITE_DESCRIPTION = 'Complex Kubernetes topics made simple. Real-world examples, interactive playgrounds, and AI-guided recommendations for autoscaling and deployment strategies.';

export const TOPICS = [
  {
    label: 'Autoscaling',
    items: [
      { label: 'Deep Dive', href: '/docs', description: 'HPA, VPA, Cluster Autoscaler, KEDA' },
      { label: 'Playground', href: '/visualize', description: 'Interactive scaling simulations' },
    ],
  },
  {
    label: 'Deployments',
    items: [
      { label: 'Deep Dive', href: '/deployment-strategies', description: 'Blue-Green, Canary, Rolling, and more' },
      { label: 'Playground', href: '/deployment-strategies/visualize', description: 'Watch deployments in action' },
    ],
  },
] as const;

export const DOC_NAV = {
  title: 'Autoscaling',
  items: [
    { slug: 'hpa', title: 'Horizontal Pod Autoscaler', shortTitle: 'HPA' },
    { slug: 'vpa', title: 'Vertical Pod Autoscaler', shortTitle: 'VPA' },
    { slug: 'cluster-autoscaler', title: 'Cluster Autoscaler', shortTitle: 'Cluster' },
    { slug: 'keda', title: 'KEDA', shortTitle: 'KEDA' },
  ],
} as const;

export const DEPLOYMENT_NAV = {
  title: 'Deployment Strategies',
  items: [
    { slug: 'blue-green', title: 'Blue-Green Deployment', shortTitle: 'Blue-Green' },
    { slug: 'canary', title: 'Canary Deployment', shortTitle: 'Canary' },
    { slug: 'rolling-update', title: 'Rolling Update', shortTitle: 'Rolling' },
    { slug: 'recreate', title: 'Recreate Deployment', shortTitle: 'Recreate' },
    { slug: 'ab-testing', title: 'A/B Testing Deployment', shortTitle: 'A/B Testing' },
    { slug: 'shadow', title: 'Shadow (Dark) Deployment', shortTitle: 'Shadow' },
  ],
} as const;
