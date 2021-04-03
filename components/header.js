import Link from 'next/link'

  export default  class Header extends React.Component {

    state = {isExpanded: false};

    handleClick = e => {
      e.preventDefault();
      this.setState(prevState => ({
        isExpanded: !prevState.isExpanded
      }))
    };

  render() {
  return (
    <header className="bg-beach-green">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 md:p-8">
        <Link href="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="text-xl font-bold tracking-tight">
              Doko
              </span>
          </h1>
        </Link>

        <nav
          className={ ` ${
            this.state.isExpanded ? `` : `hidden sm:contents`
          } flex flex-col sm:flex-row justify-between text-white font-extrabold w-2/3`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/about`,
              title: `A Propos`,
            }
          ].map((link) => (
            <Link
              key={link.title}
              href={link.route}
            >
              <a>{link.title}</a>
            </Link>
          ))}
        </nav>

         <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded sm:hidden"
          onClick={this.handleClick}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

      </div>
    </header>
  )};
          }