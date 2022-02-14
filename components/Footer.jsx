export default function Footer () {
    return(
        <div className="md:grid grid-cols-4 px-6 py-8">
            <div className="col-span-2 space-y-2 mb-2">
                <p className="text-2xl font-medium">About us</p>
                <p>We are a team of nurses, doctors technologists and excecutives
                    dedicated to help nurses find jobs that they love.
                </p>
                <p>All copyrights reserved &copy;2020 - Health Explore</p>
            </div>
            <div className="col-span-1 space-y-2 mb-2">
                <p className="text-2xl font-medium">Sitemap</p>
                <p>Nurses</p>
                <p>Employers</p>
                <p>Social networking</p>
                <p>Jobs</p>
            </div>
            <div className="col-span-1 space-y-2 mb-2">
                <p className="text-2xl font-medium">Privacy</p>
                <p>Terms of use</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
            </div>
        </div>
    )
}