// Server-only Firestore client for the gcp3_cache collection.
// Uses firebase-admin with Application Default Credentials (ADC) on Netlify,
// or a service account key JSON supplied via GOOGLE_APPLICATION_CREDENTIALS_JSON.
//
// Required env vars (set in Netlify UI or .env.local):
//   GCP_PROJECT_ID                      — e.g. "ttb-lang1"
//   GOOGLE_APPLICATION_CREDENTIALS_JSON — full service-account key JSON as a string
//                                         (optional if running on GCP with ADC)

import { initializeApp, getApps, cert, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function initAdmin() {
  if (getApps().length > 0) return;

  const projectId = process.env.GCP_PROJECT_ID;
  const credJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;

  if (credJson) {
    let serviceAccount: Record<string, unknown>;
    try {
      serviceAccount = JSON.parse(credJson);
    } catch (err) {
      throw new Error(
        `GOOGLE_APPLICATION_CREDENTIALS_JSON is not valid JSON: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
    }
    initializeApp({ credential: cert(serviceAccount), projectId });
  } else {
    // Fallback to ADC (works when deployed on GCP or with gcloud auth locally)
    initializeApp({ credential: applicationDefault(), projectId });
  }
}

export function getDb() {
  initAdmin();
  return getFirestore();
}
