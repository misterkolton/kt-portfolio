import Link from "next/link"
import MainGolfLogo from "../components/Icons/MainGolfLogo"

const getData = async () => {
  const query = `
query LandingPage {
  landingPage(where: {route: "landing"}) {
    title
    description
    mainAction {
      title
      href
    }
    pages {
      description
      title
      slug
      shouldSpanFullWidth
    }
    route
    pageSectionTitle
  }
}
  `

  const body = { query }
  const res = await fetch(`${process.env.API_ENDPOINT}`, {
    method: "POST",
    body: JSON.stringify(body),
  })
  const { data } = await res.json()
  return data
}

export default async function Landing() {
  const data = await getData()

  console.log(data)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white font-sans">
      <div className="w-full max-w-screen-lg text-center">
        {/* Header */}
        <header className="bg-emerald-300 p-4">
          <div className="flex w-full justify-center items-center">
            <MainGolfLogo />
          </div>
          <h1 className="text-4xl font-extrabold mb-2">
            Welcome to Fantasy Golf
          </h1>
          <p className="text-lg mb-4">{data.landingPage.description}</p>
          <div className="flex w-full justify-center items">
            <Link href={`/${data.landingPage.mainAction.href}`}>
              <div className="bg-emerald-50 hover:bg-slate-50 text-gray-900 py-2 px-4 rounded-full font-semibold transition duration-300 ease-in-out shadow-md w-fit">
                {data.landingPage.mainAction.title}
              </div>
            </Link>
          </div>
        </header>
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 text-center">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-row-auto">
            {data.landingPage.pages.map((page) => {
              console.log(page)
              return (
                <Link
                  className={`grid ${
                    page.shouldSpanFullWidth ? "col-span-2" : "col-span-1"
                  }`}
                  href={`/${page.slug}`}
                >
                  <div
                    key={page.slug}
                    className=" bg-white p-6 rounded-lg shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out h-full"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-slate-800">
                      {page.title}
                    </h3>
                    <p className="text-lg text-slate-800">{page.description}</p>
                  </div>
                </Link>
              )
            })}
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-gray-800 p-4 w-full">
          <div className="container mx-auto text-center">
            <p className="text-gray-300 text-sm">Contact</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
