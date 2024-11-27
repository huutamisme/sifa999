"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactFormValues {
    fullName: string;
    address: string;
    phoneNumber: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>();

    const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
        console.log("Form Data: ", data);
        toast.success('Đã gửi form liên hệ thành công!');
        reset();
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Form liên hệ</h2>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Họ và Tên */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Họ và tên
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        {...register("fullName", { required: "Họ và tên là bắt buộc." })}
                        className={`w-full px-4 py-2 border rounded-md ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                </div>

                {/* Địa chỉ */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Địa chỉ
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        {...register("address", { required: "Địa chỉ là bắt buộc." })}
                        className={`w-full px-4 py-2 border rounded-md ${errors.address ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>

                {/* Số điện thoại */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Số điện thoại
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="tel"
                        {...register("phoneNumber", {
                            required: "Số điện thoại là bắt buộc.",
                            pattern: {
                                value: /^[0-9]{10,11}$/,
                                message: "Số điện thoại không hợp lệ.",
                            },
                        })}
                        className={`w-full px-4 py-2 border rounded-md ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email là bắt buộc.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Email không hợp lệ.",
                            },
                        })}
                        className={`w-full px-4 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Chủ đề */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Chủ đề
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        {...register("subject", { required: "Chủ đề là bắt buộc." })}
                        className={`w-full px-4 py-2 border rounded-md ${errors.subject ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                </div>

                {/* Nội dung */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Nội dung
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                        {...register("message", { required: "Nội dung là bắt buộc." })}
                        rows={4}
                        className={`w-full px-4 py-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"}`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Gửi
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
