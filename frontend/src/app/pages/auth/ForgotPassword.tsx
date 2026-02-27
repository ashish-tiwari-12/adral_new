import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router';
import axios from 'axios';
import { motion } from 'motion/react';

const schema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
});

type ForgotPasswordInputs = z.infer<typeof schema>;

export default function ForgotPassword() {
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordInputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: ForgotPasswordInputs) => {
        try {
            setIsLoading(true);
            setErrorMsg('');
            setSuccessMsg('');

            const response = await axios.post('http://localhost:5000/api/auth/forgot-password', data);

            setSuccessMsg(response.data.message || 'If that email is in our system, we have sent a reset link.');
        } catch (err: any) {
            setErrorMsg(err.response?.data?.message || 'Something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] p-4 font-sans text-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Forgot password?</h1>
                    <p className="text-sm text-gray-500 mt-2">No worries, we'll send you reset instructions.</p>
                </div>

                {errorMsg && (
                    <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg ring-1 ring-red-100">
                        {errorMsg}
                    </div>
                )}

                {successMsg && (
                    <div className="mb-4 text-sm text-green-700 bg-green-50 p-4 rounded-lg ring-1 ring-green-100 flex items-start">
                        <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{successMsg}</span>
                    </div>
                )}

                {!successMsg && (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="you@example.com"
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400"
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-gray-900 hover:bg-black text-white rounded-xl font-medium transition-colors focus:ring-4 focus:ring-gray-200 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sending...' : 'Reset password'}
                        </button>
                    </form>
                )}

                <div className="mt-8 text-center">
                    <Link to="/login" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to log in
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
