import Brand from '../Brand'

const Navbar = () => {
  const handleNewsletterFocus = () => {
    const newsletterInput = document.getElementById('newsletter-input')

    if (newsletterInput) {
      newsletterInput.focus()

      newsletterInput.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <header>
      <nav className="bg-white w-full md:static md:text-sm">
        <div className="custom-screen items-center mx-auto flex justify-between py-3 md:py-5">
          <Brand />
          <button
            onClick={handleNewsletterFocus}
            className="px-4 py-2 rounded-lg font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 transition-colors duration-150"
          >
            Iscriviti alla Newsletter
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
