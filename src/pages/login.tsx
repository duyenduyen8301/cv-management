import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { login } from "@/lib/auth";
import { setCookie } from "cookies-next";
import { motion } from "framer-motion";

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const success = await login(email, password);
			if (success) {
				setCookie("auth", "true");
				router.navigate({ to: "/mypage/cv-management" });
			} else {
				setError("Invalid email or password");
			}
		} catch (err) {
			setError("An error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col md:flex-row">
			{/* Left Column - Image */}
			<motion.div
				className="md:w-1/2 bg-darkgreen relative hidden md:block"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<div className="absolute inset-0 flex items-center justify-center p-10">
					<img
						src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250402_1628_Gi%E1%BB%9Bi%20Thi%E1%BB%87u%20Tuy%E1%BB%83n%20D%E1%BB%A5ng_simple_compose_01jqtx9gmbfpe8tb7q5vrke827-3Gv2lCXJ2OWpCVVpFaXkdDbWISlvOq.png"
						alt="Recruitment illustration"
						className="max-w-full max-h-full object-contain"
					/>
				</div>
				<div className="absolute inset-0 bg-gradient-to-r from-darkgreen/90 to-darkgreen/70 flex flex-col justify-between p-10 text-white">
					<div>
						<h1 className="text-3xl font-bold">RecruitPro</h1>
					</div>
					<div className="max-w-md">
						<h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
						<p className="text-lg opacity-90">
							Log in to access your account and continue your recruitment
							journey. Find the best talent for your organization or discover
							exciting job opportunities.
						</p>
					</div>
				</div>
			</motion.div>

			{/* Right Column - Login Form */}
			<motion.div
				className="md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white"
				initial={{ x: 50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				<div className="w-full max-w-md">
					<div className="text-center mb-8">
						<h1 className="text-2xl font-bold text-darkgreen mb-2">
							Log in to your account
						</h1>
						<p className="text-gray-600">
							Enter your credentials to access your account
						</p>
					</div>

					{error && (
						<div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
							{error}
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="email" className="text-darkgreen">
								Email
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="name@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
							/>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="password" className="text-darkgreen">
									Password
								</Label>
								<Link
									href="/forgot-password"
									className="text-sm text-accent1 hover:underline"
								>
									Forgot password?
								</Link>
							</div>
							<Input
								id="password"
								type="password"
								placeholder="••••••••"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen"
							/>
						</div>

						<div className="flex items-center space-x-2">
							<Checkbox
								id="remember"
								checked={rememberMe}
								onCheckedChange={(checked) =>
									setRememberMe(checked === "indeterminate" ? false : checked)
								}
							/>
							<label
								htmlFor="remember"
								className="text-sm text-gray-600 cursor-pointer"
							>
								Remember me
							</label>
						</div>

						<motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
							<Button
								type="submit"
								className="w-full bg-darkgreen hover:bg-darkgreen/90"
								disabled={loading}
							>
								{loading ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Logging in...
									</>
								) : (
									"Log in"
								)}
							</Button>
						</motion.div>

						<div className="text-center mt-6">
							<p className="text-gray-600">
								Don't have an account?{" "}
								<Link href="/register" className="text-accent1 hover:underline">
									Sign up
								</Link>
							</p>
						</div>
					</form>
				</div>
			</motion.div>
		</div>
	);
}
