import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { motion } from 'motion/react';

const schema = z.object({
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z.string().min(6, { message: 'Confirm password must be at least 6 characters' }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type ResetPasswordInputs = z.infer<typeof schema>;

export default function ResetPassword() {
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { token } = useParams<{ token: string }>();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordInputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: ResetPasswordInputs) => {
        try {
            setIsLoading(true);
            setErrorMsg('');

            const response = await axios.put(`http://localhost:5000/api/auth/reset-password/${token}`, {
                password: data.password
            });

            setSuccessMsg('Your password has been successfully reset. Redirecting to dashboard...');

            // Store new token
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.accessToken);

            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);

        } catch (err: any) {
            setErrorMsg(err.response?.data?.message || 'Invalid or expired token.');
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
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Set new password</h1>
                    <p className="text-sm text-gray-500 mt-2">Your new password must be different to previously used passwords.</p>
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">New password</label>
                            <input
                                {...register('password')}
                                type="password"
                                placeholder="••••••••"
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400"
                            />
                            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                            <input
                                {...register('confirmPassword')}
                                type="password"
                                placeholder="••••••••"
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400"
                            />
                            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-gray-900 hover:bg-black text-white rounded-xl font-medium transition-colors focus:ring-4 focus:ring-gray-200 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Resetting...' : 'Reset password'}
                        </button>
                    </form>
                )}

            </motion.div>
        </div>
    );
}
