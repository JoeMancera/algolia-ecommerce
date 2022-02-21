// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Endpoint: /api/hello
// this endpoint help us to regenerate a specific page when we change the content on the Google Sheets
// Documentation here:  https://nextjs.org/blog/next-12-1#on-demand-incremental-static-regeneration-beta

export default async function handler(req, res) {
  if(req.headers['x-secret'] === process.env.REVALIDATE_SECRET){
    await res.unstable_revalidate('/projects')
    return res.json({revalidate: true})
  } else {
    return res.status(401).end()
  }
}