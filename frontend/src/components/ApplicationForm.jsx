import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        gender: 'Male',
        email: '',
        qualification: '',
        age: '',
        experience: '',
        prev_organisation: '',
        countryCode: '+91', // Default to India
        phone: '',
        onlineteaching: false,
        broadband: false,
        laptop: false
    });
    
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    // Country codes with flag emojis
    const countryCodes = [
        { code: '+91', country: 'India', flag: '🇮🇳' },
        { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
        { code: '+44', country: 'UK', flag: '🇬🇧' },
        { code: '+61', country: 'Australia', flag: '🇦🇺' },
        { code: '+971', country: 'UAE', flag: '🇦🇪' },
        { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
        { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
        { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
        { code: '+65', country: 'Singapore', flag: '🇸🇬' },
        { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
        { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
        { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
        { code: '+977', country: 'Nepal', flag: '🇳🇵' },
        { code: '+33', country: 'France', flag: '🇫🇷' },
        { code: '+49', country: 'Germany', flag: '🇩🇪' },
        { code: '+81', country: 'Japan', flag: '🇯🇵' },
        { code: '+82', country: 'South Korea', flag: '🇰🇷' },
        { code: '+86', country: 'China', flag: '🇨🇳' },
        { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear errors when user starts typing
        if (name === 'phone') {
            setPhoneError('');
        }
        if (name === 'email') {
            setEmailError('');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone, countryCode) => {
        // Remove all non-digit characters
        const cleanPhone = phone.replace(/\D/g, '');
        
        // Basic validation rules for different country codes
        const phoneRules = {
            '+91': { // India
                minLength: 10,
                maxLength: 10,
                regex: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit Indian mobile number (starting with 6-9)'
            },
            '+1': { // USA/Canada
                minLength: 10,
                maxLength: 10,
                regex: /^[2-9]\d{2}[2-9]\d{6}$/,
                message: 'Enter a valid 10-digit US/Canada phone number'
            },
            '+44': { // UK
                minLength: 10,
                maxLength: 10,
                regex: /^7\d{9}$/,
                message: 'Enter a valid UK mobile number (starting with 7)'
            },
            '+61': { // Australia
                minLength: 9,
                maxLength: 9,
                regex: /^4\d{8}$/,
                message: 'Enter a valid Australian mobile number (9 digits, starting with 4)'
            },
            '+971': { // UAE
                minLength: 9,
                maxLength: 9,
                regex: /^5\d{8}$/,
                message: 'Enter a valid UAE mobile number (9 digits, starting with 5)'
            },
            '+92': { // Pakistan
                minLength: 10,
                maxLength: 10,
                regex: /^3\d{9}$/,
                message: 'Enter a valid Pakistan mobile number (10 digits, starting with 3)'
            },
            '+880': { // Bangladesh
                minLength: 10,
                maxLength: 10,
                regex: /^1\d{9}$/,
                message: 'Enter a valid Bangladesh mobile number (10 digits, starting with 1)'
            },
            '+94': { // Sri Lanka
                minLength: 9,
                maxLength: 9,
                regex: /^7\d{8}$/,
                message: 'Enter a valid Sri Lankan mobile number (9 digits, starting with 7)'
            },
            '+65': { // Singapore
                minLength: 8,
                maxLength: 8,
                regex: /^[89]\d{7}$/,
                message: 'Enter a valid Singapore mobile number (8 digits, starting with 8 or 9)'
            },
            '+60': { // Malaysia
                minLength: 9,
                maxLength: 10,
                regex: /^1\d{8,9}$/,
                message: 'Enter a valid Malaysian mobile number (9-10 digits, starting with 1)'
            },
            '+93': { // Afghanistan
                minLength: 9,
                maxLength: 9,
                regex: /^7\d{8}$/,
                message: 'Enter a valid Afghan mobile number (9 digits, starting with 7)'
            },
            '+975': { // Bhutan
                minLength: 8,
                maxLength: 8,
                regex: /^[17]\d{7}$/,
                message: 'Enter a valid Bhutan mobile number (8 digits, starting with 1 or 7)'
            },
            '+977': { // Nepal
                minLength: 10,
                maxLength: 10,
                regex: /^9\d{9}$/,
                message: 'Enter a valid Nepali mobile number (10 digits, starting with 9)'
            }
        };

        const rule = phoneRules[countryCode];
        
        if (!rule) {
            // Generic validation for other countries
            if (cleanPhone.length < 6) {
                return { isValid: false, message: 'Phone number is too short' };
            }
            if (cleanPhone.length > 15) {
                return { isValid: false, message: 'Phone number is too long' };
            }
            if (!/^\d+$/.test(cleanPhone)) {
                return { isValid: false, message: 'Phone number must contain only digits' };
            }
            return { isValid: true, message: '' };
        }

        if (cleanPhone.length < rule.minLength) {
            return { isValid: false, message: `Phone number must be at least ${rule.minLength} digits` };
        }
        if (cleanPhone.length > rule.maxLength) {
            return { isValid: false, message: `Phone number cannot exceed ${rule.maxLength} digits` };
        }
        if (!rule.regex.test(cleanPhone)) {
            return { isValid: false, message: rule.message };
        }

        return { isValid: true, message: '' };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate email
        if (formData.email && !validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        // Validate phone
        const phoneValidation = validatePhone(formData.phone, formData.countryCode);
        if (!phoneValidation.isValid) {
            setPhoneError(phoneValidation.message);
            return;
        }

        // Prepare data for submission (combine country code and phone)
        const submissionData = {
            ...formData,
            phone: `${formData.countryCode} ${formData.phone.replace(/\D/g, '')}` // Store with country code
        };

        try {
            await axios.post('http://localhost:5000/api/tutors', submissionData);
            navigate('/thankyou');
        } catch (error) {
            alert('Error submitting application: ' + error.message);
        }
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Allow only digits, spaces, hyphens, and parentheses
        const cleanValue = value.replace(/[^\d\s\-()]/g, '');
        setFormData(prev => ({
            ...prev,
            phone: cleanValue
        }));
        setPhoneError('');
    };

    return (
        <>
            <h1 className="text-3xl font-bold mb-2">Tutor Application</h1>
            <p className="text-slate-400 mb-8">Your teaching journey starts here—complete the form below to apply</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Full Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Gender</label>
                        <select 
                            name="gender" 
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label className="block text-sm text-slate-400 mb-1">Email address</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-slate-700 border ${emailError ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500`}
                    />
                    {emailError && (
                        <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Qualification</label>
                        <input 
                            type="text" 
                            name="qualification" 
                            placeholder="e.g. MSc Mathematics"
                            value={formData.qualification}
                            onChange={handleChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Age</label>
                        <input 
                            type="number" 
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            min="18"
                            max="100"
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-slate-400 mb-1">Experience (Years)</label>
                    <input 
                        type="number" 
                        name="experience" 
                        min="0" 
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>

                {formData.experience > 0 && (
                    <div id="prevOrgField">
                        <label className="block text-sm text-slate-400 mb-1">Current/Previous Organisation</label>
                        <input 
                            type="text" 
                            name="prev_organisation"
                            value={formData.prev_organisation}
                            onChange={handleChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                )}
                
                <div>
                    <label className="block text-sm text-slate-400 mb-1">WhatsApp number</label>
                    <div className="flex gap-2">
                        <div className="w-1/3">
                            <select 
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            >
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.flag} {country.code} ({country.country})
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-2/3">
                            <input 
                                type="text" 
                                name="phone" 
                                required
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                placeholder={formData.countryCode === '+91' ? "9876543210" : "Enter phone number"}
                                className={`w-full bg-slate-700 border ${phoneError ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500`}
                            />
                        </div>
                    </div>
                    {phoneError && (
                        <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                    )}
                    <p className="text-xs text-slate-400 mt-1">
                        Example: {formData.countryCode === '+91' ? '9876543210' : 
                                 formData.countryCode === '+1' ? '5551234567' : 
                                 formData.countryCode === '+44' ? '7123456789' : 
                                 formData.countryCode === '+971' ? '501234567' : 
                                 'Enter phone number'}
                    </p>
                </div>
                
                <div className="space-y-3 pt-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                            type="checkbox" 
                            name="onlineteaching" 
                            checked={formData.onlineteaching}
                            onChange={handleChange}
                            className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500"
                        />
                        <span className="text-sm text-slate-300">I have online teaching experience</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                            type="checkbox" 
                            name="broadband" 
                            checked={formData.broadband}
                            onChange={handleChange}
                            className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500"
                        />
                        <span className="text-sm text-slate-300">I have high-speed broadband connectivity</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                            type="checkbox" 
                            name="laptop" 
                            checked={formData.laptop}
                            onChange={handleChange}
                            className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500"
                        />
                        <span className="text-sm text-slate-300">I have a functioning laptop for teaching</span>
                    </label>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-bold transition-all mt-4">
                    Submit Application
                </button>
            </form>
        </>
    );
};

export default ApplicationForm;