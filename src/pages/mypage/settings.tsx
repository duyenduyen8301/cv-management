import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

export default function SettingsPage() {
	const [emailNotifications, setEmailNotifications] = useState({
		messages: true,
		applications: true,
		profileViews: true,
		jobRecommendations: true,
		marketingEmails: false,
	});

	const [pushNotifications, setPushNotifications] = useState({
		messages: true,
		applications: true,
		profileViews: false,
		jobRecommendations: false,
	});

	return (
		<div className="p-8">
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-darkgreen">Settings</h1>
				<p className="text-darkgreen/70">
					Manage your account settings and preferences
				</p>
			</div>

			<Tabs defaultValue="account">
				<TabsList className="mb-6">
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					<TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
					<TabsTrigger value="billing">Billing</TabsTrigger>
				</TabsList>

				<TabsContent value="account">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<Card>
							<CardHeader className="px-6 py-4 border-b">
								<CardTitle className="text-lg text-darkgreen">
									Account Information
								</CardTitle>
							</CardHeader>
							<CardContent className="p-6 space-y-4">
								<div className="space-y-2">
									<Label htmlFor="name">Full Name</Label>
									<Input id="name" defaultValue="John Smith" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email Address</Label>
									<Input id="email" defaultValue="john.smith@example.com" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="phone">Phone Number</Label>
									<Input id="phone" defaultValue="+1 (555) 123-4567" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="location">Location</Label>
									<Input id="location" defaultValue="New York, NY" />
								</div>
								<Button className="w-full bg-darkgreen hover:bg-darkgreen/90">
									Save Changes
								</Button>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="px-6 py-4 border-b">
								<CardTitle className="text-lg text-darkgreen">
									Password
								</CardTitle>
							</CardHeader>
							<CardContent className="p-6 space-y-4">
								<div className="space-y-2">
									<Label htmlFor="current-password">Current Password</Label>
									<Input id="current-password" type="password" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="new-password">New Password</Label>
									<Input id="new-password" type="password" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="confirm-password">Confirm New Password</Label>
									<Input id="confirm-password" type="password" />
								</div>
								<Button className="w-full bg-darkgreen hover:bg-darkgreen/90">
									Update Password
								</Button>
							</CardContent>
						</Card>
					</div>

					<Card className="mt-6">
						<CardHeader className="px-6 py-4 border-b">
							<CardTitle className="text-lg text-darkgreen">
								Linked Accounts
							</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
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
											>
												<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
												<rect width="4" height="12" x="2" y="9" />
												<circle cx="4" cy="4" r="2" />
											</svg>
										</div>
										<div>
											<h3 className="font-medium text-darkgreen">LinkedIn</h3>
											<p className="text-sm text-darkgreen/70">
												Connect your LinkedIn account
											</p>
										</div>
									</div>
									<Button
										variant="outline"
										className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
									>
										Connect
									</Button>
								</div>

								<Separator />

								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
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
											>
												<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
												<path d="M9 18c-4.51 2-5-2-7-2" />
											</svg>
										</div>
										<div>
											<h3 className="font-medium text-darkgreen">GitHub</h3>
											<p className="text-sm text-darkgreen/70">
												Connect your GitHub account
											</p>
										</div>
									</div>
									<Button
										variant="outline"
										className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
									>
										Connect
									</Button>
								</div>

								<Separator />

								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
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
											>
												<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
											</svg>
										</div>
										<div>
											<h3 className="font-medium text-darkgreen">Facebook</h3>
											<p className="text-sm text-darkgreen/70">
												Connect your Facebook account
											</p>
										</div>
									</div>
									<Button
										variant="outline"
										className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
									>
										Connect
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader className="px-6 py-4 border-b">
							<CardTitle className="text-lg text-red-500">
								Danger Zone
							</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium text-darkgreen">Delete Account</h3>
									<p className="text-sm text-darkgreen/70">
										Once you delete your account, there is no going back. Please
										be certain.
									</p>
								</div>
								<Button variant="destructive">Delete Account</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="notifications">
					<Card>
						<CardHeader className="px-6 py-4 border-b">
							<CardTitle className="text-lg text-darkgreen">
								Email Notifications
							</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">Messages</h3>
										<p className="text-sm text-darkgreen/70">
											Receive email notifications for new messages
										</p>
									</div>
									<Switch
										checked={emailNotifications.messages}
										onCheckedChange={(checked) =>
											setEmailNotifications({
												...emailNotifications,
												messages: checked,
											})
										}
									/>
								</div>

								<Separator />

								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">Applications</h3>
										<p className="text-sm text-darkgreen/70">
											Receive email notifications for application status updates
										</p>
									</div>
									<Switch
										checked={emailNotifications.applications}
										onCheckedChange={(checked) =>
											setEmailNotifications({
												...emailNotifications,
												applications: checked,
											})
										}
									/>
								</div>

								<Separator />

								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">
											Profile Views
										</h3>
										<p className="text-sm text-darkgreen/70">
											Receive email notifications when someone views your
											profile
										</p>
									</div>
									<Switch
										checked={emailNotifications.profileViews}
										onCheckedChange={(checked) =>
											setEmailNotifications({
												...emailNotifications,
												profileViews: checked,
											})
										}
									/>
								</div>

								<Separator />

								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">
											Job Recommendations
										</h3>
										<p className="text-sm text-darkgreen/70">
											Receive email notifications for job recommendations based
											on your profile
										</p>
									</div>
									<Switch
										checked={emailNotifications.jobRecommendations}
										onCheckedChange={(checked) =>
											setEmailNotifications({
												...emailNotifications,
												jobRecommendations: checked,
											})
										}
									/>
								</div>

								<Separator />

								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">
											Marketing Emails
										</h3>
										<p className="text-sm text-darkgreen/70">
											Receive marketing emails about new features and promotions
										</p>
									</div>
									<Switch
										checked={emailNotifications.marketingEmails}
										onCheckedChange={(checked) =>
											setEmailNotifications({
												...emailNotifications,
												marketingEmails: checked,
											})
										}
									/>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader className="px-6 py-4 border-b">
							<CardTitle className="text-lg text-darkgreen">
								Push Notifications
							</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">Messages</h3>
										<p className="text-sm text-darkgreen/70">
											Receive push notifications for new messages
										</p>
									</div>
									<Switch
										checked={pushNotifications.messages}
										onCheckedChange={(checked) =>
											setPushNotifications({
												...pushNotifications,
												messages: checked,
											})
										}
									/>
								</div>

								<Separator />

								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">Applications</h3>
										<p className="text-sm text-darkgreen/70">
											Receive push notifications for application status updates
										</p>
									</div>
									<Switch
										checked={pushNotifications.applications}
										onCheckedChange={(checked) =>
											setPushNotifications({
												...pushNotifications,
												applications: checked,
											})
										}
									/>
								</div>

								<Separator />

								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">
											Profile Views
										</h3>
										<p className="text-sm text-darkgreen/70">
											Receive push notifications when someone views your profile
										</p>
									</div>
									<Switch
										checked={pushNotifications.profileViews}
										onCheckedChange={(checked) =>
											setPushNotifications({
												...pushNotifications,
												profileViews: checked,
											})
										}
									/>
								</div>

								<Separator />

								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">
											Job Recommendations
										</h3>
										<p className="text-sm text-darkgreen/70">
											Receive push notifications for job recommendations based
											on your profile
										</p>
									</div>
									<Switch
										checked={pushNotifications.jobRecommendations}
										onCheckedChange={(checked) =>
											setPushNotifications({
												...pushNotifications,
												jobRecommendations: checked,
											})
										}
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="privacy">
					<Card>
						<CardHeader className="px-6 py-4 border-b">
							<CardTitle className="text-lg text-darkgreen">
								Privacy Settings
							</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<div className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="profile-visibility">Profile Visibility</Label>
									<Select defaultValue="public">
										<SelectTrigger id="profile-visibility" className="w-full">
											<SelectValue placeholder="Select visibility" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="public">
												Public - Visible to everyone
											</SelectItem>
											<SelectItem value="registered">
												Registered Users - Visible to registered users only
											</SelectItem>
											<SelectItem value="private">
												Private - Visible only to companies you apply to
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="contact-info-visibility">
										Contact Information Visibility
									</Label>
									<Select defaultValue="registered">
										<SelectTrigger
											id="contact-info-visibility"
											className="w-full"
										>
											<SelectValue placeholder="Select visibility" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="public">
												Public - Visible to everyone
											</SelectItem>
											<SelectItem value="registered">
												Registered Users - Visible to registered users only
											</SelectItem>
											<SelectItem value="private">
												Private - Visible only to companies you apply to
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">
											Show Online Status
										</h3>
										<p className="text-sm text-darkgreen/70">
											Allow others to see when you're online
										</p>
									</div>
									<Switch defaultChecked />
								</div>

								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">
											Allow Profile Indexing
										</h3>
										<p className="text-sm text-darkgreen/70">
											Allow search engines to index your profile
										</p>
									</div>
									<Switch defaultChecked />
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader className="px-6 py-4 border-b">
							<CardTitle className="text-lg text-darkgreen">Security</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-darkgreen">
											Two-Factor Authentication
										</h3>
										<p className="text-sm text-darkgreen/70">
											Add an extra layer of security to your account
										</p>
									</div>
									<Button
										variant="outline"
										className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
									>
										Enable
									</Button>
								</div>

								<Separator />

								<div>
									<h3 className="font-medium text-darkgreen mb-2">
										Active Sessions
									</h3>
									<div className="space-y-3">
										<div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
											<div>
												<p className="text-sm font-medium text-darkgreen">
													Current Session
												</p>
												<p className="text-xs text-darkgreen/70">
													New York, USA • Chrome on Windows
												</p>
											</div>
											<Badge
												variant="outline"
												className="bg-green-50 text-green-600 border-green-200"
											>
												Active
											</Badge>
										</div>
										<div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
											<div>
												<p className="text-sm font-medium text-darkgreen">
													Mobile App
												</p>
												<p className="text-xs text-darkgreen/70">
													New York, USA • iPhone 13
												</p>
											</div>
											<Button
												variant="ghost"
												size="sm"
												className="h-7 text-xs text-red-500 hover:text-red-600 hover:bg-red-50"
											>
												Revoke
											</Button>
										</div>
									</div>
								</div>

								<Separator />

								<div>
									<h3 className="font-medium text-darkgreen mb-2">
										Login History
									</h3>
									<div className="space-y-3">
										<div className="flex items-center justify-between">
											<div>
												<p className="text-sm font-medium text-darkgreen">
													Today, 10:30 AM
												</p>
												<p className="text-xs text-darkgreen/70">
													New York, USA • Chrome on Windows
												</p>
											</div>
											<div className="flex items-center text-green-600">
												<div className="w-2 h-2 bg-green-600 rounded-full mr-1"></div>
												<span className="text-xs">Successful</span>
											</div>
										</div>
										<div className="flex items-center justify-between">
											<div>
												<p className="text-sm font-medium text-darkgreen">
													Yesterday, 8:15 PM
												</p>
												<p className="text-xs text-darkgreen/70">
													New York, USA • iPhone 13
												</p>
											</div>
											<div className="flex items-center text-green-600">
												<div className="w-2 h-2 bg-green-600 rounded-full mr-1"></div>
												<span className="text-xs">Successful</span>
											</div>
										</div>
										<div className="flex items-center justify-between">
											<div>
												<p className="text-sm font-medium text-darkgreen">
													April 15, 2023, 3:45 PM
												</p>
												<p className="text-xs text-darkgreen/70">
													Boston, USA • Chrome on Mac
												</p>
											</div>
											<div className="flex items-center text-red-600">
												<AlertCircle className="h-3 w-3 mr-1" />
												<span className="text-xs">Failed</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="billing">
					<Card>
						<CardHeader className="px-6 py-4 border-b">
							<CardTitle className="text-lg text-darkgreen">
								Current Plan
							</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<div className="flex items-center justify-between mb-6">
								<div>
									<h3 className="font-medium text-xl text-darkgreen">
										Free Plan
									</h3>
									<p className="text-sm text-darkgreen/70">
										Basic features for job seekers
									</p>
								</div>
								<Badge
									variant="outline"
									className="bg-blue-50 text-blue-600 border-blue-200"
								>
									Current Plan
								</Badge>
							</div>

							<div className="space-y-2 mb-6">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-green-600 mr-2"
									>
										<path d="M20 6 9 17l-5-5" />
									</svg>
									<span className="text-darkgreen">Up to 3 CV uploads</span>
								</div>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-green-600 mr-2"
									>
										<path d="M20 6 9 17l-5-5" />
									</svg>
									<span className="text-darkgreen">Basic job search</span>
								</div>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-green-600 mr-2"
									>
										<path d="M20 6 9 17l-5-5" />
									</svg>
									<span className="text-darkgreen">Email support</span>
								</div>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-red-500 mr-2"
									>
										<path d="M18 6 6 18" />
										<path d="m6 6 12 12" />
									</svg>
									<span className="text-darkgreen/70">
										Advanced CV analytics
									</span>
								</div>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-red-500 mr-2"
									>
										<path d="M18 6 6 18" />
										<path d="m6 6 12 12" />
									</svg>
									<span className="text-darkgreen/70">
										Priority application submissions
									</span>
								</div>
							</div>

							<Button className="w-full bg-darkgreen hover:bg-darkgreen/90">
								Upgrade to Premium
							</Button>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader className="px-6 py-4 border-b">
							<CardTitle className="text-lg text-darkgreen">
								Premium Plans
							</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="border border-darkgreen/20 rounded-lg p-6">
									<h3 className="font-medium text-xl text-darkgreen mb-2">
										Premium
									</h3>
									<p className="text-2xl font-bold text-darkgreen mb-4">
										$9.99
										<span className="text-sm font-normal text-darkgreen/70">
											/month
										</span>
									</p>
									<div className="space-y-2 mb-6">
										<div className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-green-600 mr-2"
											>
												<path d="M20 6 9 17l-5-5" />
											</svg>
											<span className="text-darkgreen">
												Unlimited CV uploads
											</span>
										</div>
										<div className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-green-600 mr-2"
											>
												<path d="M20 6 9 17l-5-5" />
											</svg>
											<span className="text-darkgreen">
												Advanced job search
											</span>
										</div>
										<div className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-green-600 mr-2"
											>
												<path d="M20 6 9 17l-5-5" />
											</svg>
											<span className="text-darkgreen">CV analytics</span>
										</div>
										<div className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-green-600 mr-2"
											>
												<path d="M20 6 9 17l-5-5" />
											</svg>
											<span className="text-darkgreen">Priority support</span>
										</div>
									</div>
									<Button
										variant="outline"
										className="w-full border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
									>
										Choose Plan
									</Button>
								</div>

								<div className="border border-accent2 rounded-lg p-6 relative">
									<div className="absolute -top-3 right-4 bg-accent2 text-white px-3 py-1 rounded-full text-xs font-medium">
										Popular
									</div>
									<h3 className="font-medium text-xl text-darkgreen mb-2">
										Pro
									</h3>
									<p className="text-2xl font-bold text-darkgreen mb-4">
										$19.99
										<span className="text-sm font-normal text-darkgreen/70">
											/month
										</span>
									</p>
									<div className="space-y-2 mb-6">
										<div className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-green-600 mr-2"
											>
												<path d="M20 6 9 17l-5-5" />
											</svg>
											<span className="text-darkgreen">
												All Premium features
											</span>
										</div>
										<div className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-green-600 mr-2"
											>
												<path d="M20 6 9 17l-5-5" />
											</svg>
											<span className="text-darkgreen">
												Priority application submissions
											</span>
										</div>
										<div className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-green-600 mr-2"
											>
												<path d="M20 6 9 17l-5-5" />
											</svg>
											<span className="text-darkgreen">
												CV optimization tools
											</span>
										</div>
										<div className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-green-600 mr-2"
											>
												<path d="M20 6 9 17l-5-5" />
											</svg>
											<span className="text-darkgreen">
												1-on-1 career coaching
											</span>
										</div>
									</div>
									<Button className="w-full bg-accent2 hover:bg-accent2/90 text-white">
										Choose Plan
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="mt-6">
						<CardHeader className="px-6 py-4 border-b">
							<CardTitle className="text-lg text-darkgreen">
								Payment Methods
							</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<p className="text-darkgreen/70 mb-4">
								No payment methods added yet.
							</p>
							<Button
								variant="outline"
								className="border-darkgreen/20 text-darkgreen hover:bg-darkgreen hover:text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mr-2"
								>
									<rect width="20" height="14" x="2" y="5" rx="2" />
									<line x1="2" x2="22" y1="10" y2="10" />
								</svg>
								Add Payment Method
							</Button>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
