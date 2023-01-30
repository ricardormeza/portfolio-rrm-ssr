import client from '@sanity/client';

export const sanityClient = client({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-01-29',
    useCdn:typeof document !== 'undefined',
});

// const data = await client.fetch(groq`*[]`)