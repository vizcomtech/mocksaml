import { fetchPrivateKey, fetchPublicKey } from 'utils';

const appUrl =
  process.env.APP_URL ||
  `https://${process.env.VERCEL_BRANCH_URL}` ||
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` ||
  'http://localhost:4000';
const entityId = process.env.ENTITY_ID || 'https://saml.example.com/entityid';
const availableDomains = (process.env.AVAILABLE_DOMAINS || 'example.com,example.org')
  .split(',')
  .map((d: string) => d.trim())
  .filter(Boolean);
const privateKey = fetchPrivateKey();
const publicKey = fetchPublicKey();

const config = {
  appUrl,
  entityId,
  availableDomains,
  privateKey,
  publicKey,
};

export default config;
