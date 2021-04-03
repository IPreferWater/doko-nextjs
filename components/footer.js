import { InstagramIcon } from '@components/icons/instagram-icon'
import { FacebookIcon } from '@components/icons/facebook-icon'
import Link from 'next/link'


function Footer() {
    return (
        <footer className="bg-beach-green text-white">


            <div className="flex justify-between p-8">

                <nav className="flex flex-col">
                    <h1 className="text-center">Suivez moi</h1>
                    <div className="m-2 flex flex-row ">
                        <Link href={"https://www.instagram.com/clementinestla"}>
                            <a className="px-4" target="_blank">
                                <InstagramIcon />
                            </a>
                        </Link>

                        <Link href={"https://www.facebook.com/search/top?q=clementine%20conceptstore"}>
                            <a className="px-4" target="_blank">
                                <FacebookIcon />
                            </a>
                        </Link>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;