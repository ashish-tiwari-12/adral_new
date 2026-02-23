import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

export function Waitlist() {
    const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // Send to local Node/Express backend
            const response = await fetch("http://localhost:5000/api/waitlist/join", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus("success");
            } else {
                setStatus("error");
                alert(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            alert("Network error. Could not connect to the server.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (status === "success") {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="max-w-md w-full text-center space-y-6 bg-green-50/50 p-10 rounded-3xl border border-green-100"
                >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-serif tracking-tight text-foreground">You're on the list!</h1>
                    <p className="text-muted-foreground font-light text-lg">
                        Thanks for your interest, {formData.name || 'friend'}. We've sent a confirmation to {formData.email}.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full hover:bg-black/80 transition-all font-medium mt-4"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/[0.02] rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <Link to="/" className="text-muted-foreground hover:text-foreground mb-12 inline-block text-sm font-light transition-colors">
                    &larr; Back to home
                </Link>

                <div className="space-y-2 mb-10">
                    <h1 className="text-4xl sm:text-5xl font-serif tracking-tight text-foreground">
                        Join the Waitlist
                    </h1>
                    <p className="text-muted-foreground font-light text-lg">
                        Get early access to the agent-native control room.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-white shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                            disabled={status === "loading"}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.com"
                            className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-white shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                            disabled={status === "loading"}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="mobile" className="text-sm font-medium text-foreground ml-1">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-5 py-4 rounded-2xl border border-black/10 bg-white shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                            disabled={status === "loading"}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full group py-4 mt-4 bg-black text-white rounded-2xl hover:bg-black/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 font-medium text-lg shadow-xl shadow-black/10"
                    >
                        {status === "loading" ? "Processing..." : "Secure My Spot"}
                        {status !== "loading" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                </form>

                <p className="text-center text-xs text-muted-foreground mt-8 font-light">
                    We respect your privacy. No spam, ever.
                </p>
            </motion.div>
        </div>
    );
}
