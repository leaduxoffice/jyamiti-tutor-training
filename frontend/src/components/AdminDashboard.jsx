import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/tutors/stats');
            setStats(response.data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-8 text-center">Loading statistics...</div>;
    if (!stats) return <div className="p-8 text-center">Failed to load statistics</div>;

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-slate-400">Tutor Application Management System</p>
                </div>
                <div className="flex gap-4">
                    <Link 
                        to="/admin/tutors" 
                        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors"
                    >
                        All Applications
                    </Link>
                    <Link 
                        to="/admin/selected" 
                        className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition-colors"
                    >
                        Training Program
                    </Link>
                    <Link 
                        to="/admin/selected?status=interview" 
                        className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg transition-colors"
                    >
                        Interview Scheduled
                    </Link>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-slate-400 text-sm mb-2">Total Applications</h3>
                    <p className="text-3xl font-bold">{stats.total}</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-slate-400 text-sm mb-2">Pending Review</h3>
                    <p className="text-3xl font-bold text-yellow-500">{stats.pending}</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-slate-400 text-sm mb-2">In Training Program</h3>
                    <p className="text-3xl font-bold text-green-500">{stats.selected}</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-slate-400 text-sm mb-2">Interview Scheduled</h3>
                    <p className="text-3xl font-bold text-purple-500">{stats.interview}</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-slate-400 text-sm mb-2">online expereinced</h3>
                    <p className="text-3xl font-bold text-blue-500">{stats.onlineexpcount}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Experience Distribution */}
                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Experience Distribution</h3>
                    <div className="space-y-3">
                        {stats.experienceDistribution && stats.experienceDistribution.length > 0 ? (
                            stats.experienceDistribution.map((item, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-slate-300">{item.range}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold">{item.count} applicants</span>
                                        <div className="w-32 bg-slate-700 rounded-full h-2">
                                            <div 
                                                className="bg-blue-500 h-2 rounded-full" 
                                                style={{ 
                                                    width: `${(item.count / stats.total) * 100}%` 
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-slate-400 text-center py-4">No experience data available</p>
                        )}
                    </div>
                </div>

                {/* Equipment Stats */}
                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Equipment Availability</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-slate-300">Laptop for Teaching</span>
                                <span className="font-bold">{stats.equipmentStats.laptopCount} / {stats.total}</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div 
                                    className="bg-green-500 h-2 rounded-full" 
                                    style={{ 
                                        width: `${(stats.equipmentStats.laptopCount / stats.total) * 100}%` 
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-slate-300">High-speed Broadband</span>
                                <span className="font-bold">{stats.equipmentStats.broadbandCount} / {stats.total}</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div 
                                    className="bg-blue-500 h-2 rounded-full" 
                                    style={{ 
                                        width: `${(stats.equipmentStats.broadbandCount / stats.total) * 100}%` 
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Gender Distribution</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span>Male</span>
                            <span className="font-bold">{stats.genderStats.male}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Female</span>
                            <span className="font-bold">{stats.genderStats.female}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Other</span>
                            <span className="font-bold">{stats.genderStats.other}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Average Experience</h3>
                    <p className="text-4xl font-bold text-center py-4">
                        {stats.avgExperience.toFixed(1)} years
                    </p>
                </div>

                <div className="bg-slate-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Application Status</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-yellow-500">Pending</span>
                            <span>{stats.pending}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-green-500">In Training</span>
                            <span>{stats.selected}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-purple-500">Interview</span>
                            <span>{stats.interview}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-red-500">Rejected</span>
                            <span>{stats.rejected}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;