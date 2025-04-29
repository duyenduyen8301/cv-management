import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import LOGO from "@/assets/images/logo.png";
export default function Footer() {
	return (
		<footer className="w-full bg-darkgreen text-white py-12">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div className="w-20 h-20">
								<img
									src={LOGO}
									alt="Logo"
									className="w-full h-full object-contain"
								/>
							</div>
							<h3 className="text-xl font-bold">RecruitPro</h3>
						</div>
						<p className="text-white/80">
							The leading platform for finding and hiring top talent across
							industries.
						</p>
						<div className="flex space-x-4">
							<Link
								href="#"
								className="text-white hover:text-accent1 transition-colors"
							>
								<Facebook size={20} />
							</Link>
							<Link
								href="#"
								className="text-white hover:text-accent1 transition-colors"
							>
								<Twitter size={20} />
							</Link>
							<Link
								href="#"
								className="text-white hover:text-accent1 transition-colors"
							>
								<Instagram size={20} />
							</Link>
							<Link
								href="#"
								className="text-white hover:text-accent1 transition-colors"
							>
								<Linkedin size={20} />
							</Link>
						</div>
					</div>

					<div>
						<h4 className="font-medium mb-4 text-lg">Quick Links</h4>
						<ul className="space-y-3">
							<li>
								<Link
									href="/"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/cvs"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									Search CVs
								</Link>
							</li>
							<li>
								<Link
									href="/pricing"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium mb-4 text-lg">Services</h4>
						<ul className="space-y-3">
							<li>
								<Link
									href="/services/cv-search"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									CV Search
								</Link>
							</li>
							<li>
								<Link
									href="/services/recruitment"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									Recruitment Services
								</Link>
							</li>
							<li>
								<Link
									href="/services/talent-pool"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									Talent Pool
								</Link>
							</li>
							<li>
								<Link
									href="/services/employer-branding"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									Employer Branding
								</Link>
							</li>
							<li>
								<Link
									href="/services/hr-consulting"
									className="text-white/80 hover:text-accent1 transition-colors"
								>
									HR Consulting
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium mb-4 text-lg">Contact Us</h4>
						<address className="not-italic space-y-3 text-white/80">
							<p className="flex items-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mr-2 mt-1 flex-shrink-0"
								>
									<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
									<circle cx="12" cy="10" r="3" />
								</svg>
								123 Recruitment St, San Francisco, CA 94103
							</p>
							<p className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mr-2 flex-shrink-0"
								>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
								(123) 456-7890
							</p>
							<p className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mr-2 flex-shrink-0"
								>
									<rect width="20" height="16" x="2" y="4" rx="2" />
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
								</svg>
								info@recruitpro.com
							</p>
						</address>
					</div>
				</div>

				<div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
					<p>© {new Date().getFullYear()} RecruitPro. All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link href="/terms" className="hover:text-white transition-colors">
							Terms of Service
						</Link>
						<Link
							href="/privacy"
							className="hover:text-white transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/cookies"
							className="hover:text-white transition-colors"
						>
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
