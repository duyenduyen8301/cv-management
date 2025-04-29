import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { setCookie } from "cookies-next";
import { motion } from "framer-motion";

export default function RegisterPage() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		agreeTerms: false,
	});
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<{
		name?: string;
		email?: string;
		password?: string;
		confirmPassword?: string;
		agreeTerms?: string;
	}>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const validateForm = () => {
		const newErrors: {
			name?: string;
			email?: string;
			password?: string;
			confirmPassword?: string;
			agreeTerms?: string;
		} = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
		}

		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		if (!formData.agreeTerms) {
			newErrors.agreeTerms = "You must agree to the terms and conditions";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		console.log("Registration data:", formData);

		setCookie("auth", "true");
		router.navigate({ to: "/mypage/applications" });
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
						<h2 className="text-2xl font-bold mb-4">Join Our Platform</h2>
						<p className="text-lg opacity-90">
							Create an account to start your recruitment journey. Find the best
							talent for your organization or discover exciting job
							opportunities.
						</p>
					</div>
				</div>
			</motion.div>

			{/* Right Column - Registration Form */}
			<motion.div
				className="md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white"
				initial={{ x: 50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				<div className="w-full max-w-md">
					<div className="text-center mb-8">
						<h1 className="text-2xl font-bold text-darkgreen mb-2">
							Create an account
						</h1>
						<p className="text-gray-600">Fill in your details to get started</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="name" className="text-darkgreen">
								Full Name
							</Label>
							<Input
								id="name"
								name="name"
								placeholder="John Smith"
								value={formData.name}
								onChange={handleChange}
								className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${
									errors.name ? "border-red-500" : ""
								}`}
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-1">{errors.name}</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="email" className="text-darkgreen">
								Email
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="name@example.com"
								value={formData.email}
								onChange={handleChange}
								className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${
									errors.email ? "border-red-500" : ""
								}`}
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">{errors.email}</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="password" className="text-darkgreen">
								Password
							</Label>
							<Input
								id="password"
								name="password"
								type="password"
								placeholder="••••••••"
								value={formData.password}
								onChange={handleChange}
								className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${
									errors.password ? "border-red-500" : ""
								}`}
							/>
							{errors.password && (
								<p className="text-red-500 text-sm mt-1">{errors.password}</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="confirmPassword" className="text-darkgreen">
								Confirm Password
							</Label>
							<Input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								placeholder="••••••••"
								value={formData.confirmPassword}
								onChange={handleChange}
								className={`border-darkgreen/20 focus:border-darkgreen focus:ring-darkgreen ${
									errors.confirmPassword ? "border-red-500" : ""
								}`}
							/>
							{errors.confirmPassword && (
								<p className="text-red-500 text-sm mt-1">
									{errors.confirmPassword}
								</p>
							)}
						</div>

						<div className="flex items-center space-x-2">
							<Checkbox
								id="agreeTerms"
								name="agreeTerms"
								checked={formData.agreeTerms}
								onCheckedChange={(checked: boolean) =>
									setFormData({ ...formData, agreeTerms: checked as boolean })
								}
								className={errors.agreeTerms ? "border-red-500" : ""}
							/>
							<label
								htmlFor="agreeTerms"
								className={`text-sm text-gray-600 cursor-pointer ${errors.agreeTerms ? "text-red-500" : ""}`}
							>
								I agree to the{" "}
								<Link href="/terms" className="text-accent1 hover:underline">
									Terms of Service
								</Link>{" "}
								and{" "}
								<Link href="/privacy" className="text-accent1 hover:underline">
									Privacy Policy
								</Link>
							</label>
						</div>
						{errors.agreeTerms && (
							<p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>
						)}

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
										Creating account...
									</>
								) : (
									"Create account"
								)}
							</Button>
						</motion.div>

						<div className="text-center mt-6">
							<p className="text-gray-600">
								Already have an account?{" "}
								<Link to="/login" className="text-accent1 hover:underline">
									Log in
								</Link>
							</p>
						</div>
					</form>
				</div>
			</motion.div>
		</div>
	);
}
