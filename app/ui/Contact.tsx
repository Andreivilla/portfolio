'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'O campo nome é obrigatório.';
    if (!formData.email.trim())
      newErrors.email = 'O campo email é obrigatório.';
    if (!formData.message.trim())
      newErrors.message = 'A mensagem não pode estar vazia.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'andreivilla63@gmail.com',
        },
        'YOUR_USER_ID',
      )
      .then(() => {
        setStatus('✅ Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('❌ Erro ao enviar. Tente novamente.');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-gray-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          form ~/c/email
        </h2>

        {/* Nome */}
        <div>
          <label className="block text-sm mb-1">
            Seu nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-gray-100 focus:outline-none focus:border-green-500"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1">
            Seu email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-gray-100 focus:outline-none focus:border-green-500"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-sm mb-1">
            Mensagem <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-gray-100 focus:outline-none focus:border-green-500"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Rodapé */}
        <p className="text-xs text-zinc-500 italic">campo obrigatório *</p>

        {/* Botão */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-lime-400 text-black font-semibold py-2 rounded-md hover:bg-lime-500 transition-all"
        >
          <span>✈️</span> Enviar
        </button>

        {/* Status */}
        {status && (
          <p
            className={`text-center text-sm mt-3 ${
              status.includes('✅') ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
