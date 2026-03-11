export default async function handler(req, res) {
  try {

    const response = await fetch(
      process.env.SUPABASE_URL + "/rest/v1/",
      {
        headers: {
          apikey: process.env.SUPABASE_ANON_KEY
        }
      }
    )

    const data = await response.text()

    res.status(200).json({
      message: "Supabase ping successful",
      status: response.status
    })

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }
}