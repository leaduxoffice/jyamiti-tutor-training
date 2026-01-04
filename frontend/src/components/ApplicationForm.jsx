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
        phone: '',
        onlineteaching:false,
        broadband: false,
        laptop: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/tutors', formData);
            navigate('/thankyou');
        } catch (error) {
            alert('Error submitting application: ' + error.message);
        }
    };

    return (
        
          <>
                <h1 className="text-3xl font-bold mb-2">Tutor Application</h1>
                <p className="text-slate-400 mb-8">Fill out the form below to apply as a tutor</p>
                
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
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
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
                        <input 
                            type="text" 
                            name="phone" 
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
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