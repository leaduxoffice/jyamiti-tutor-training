import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';

const SelectedTutors = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialStatus = queryParams.get('status') || 'selected';
    
    const [tutors, setTutors] = useState([]);
    const [statusFilter, setStatusFilter] = useState(initialStatus);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        minExperience: '',
        maxExperience: '',
        hasLaptop: '',
        hasBroadband: '',
        qualification: ''
    });
    const [modal, setModal] = useState({
        isOpen: false,
        tutorId: null,
        action: '',
        title: '',
        message: ''
    });

    useEffect(() => {
        fetchTutors();
    }, [statusFilter, page, filters]);

    const fetchTutors = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page,
                limit: 10,
                status: statusFilter,
                ...filters
            });
            
            const response = await axios.get(`http://localhost:5000/api/tutors/search?${params}`);
            setTutors(response.data.tutors);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching tutors:', error);
        }
        setLoading(false);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
        setPage(1);
    };

    const clearFilters = () => {
        setFilters({
            minExperience: '',
            maxExperience: '',
            hasLaptop: '',
            hasBroadband: '',
            qualification: ''
        });
        setPage(1);
    };

    const showConfirmation = (tutorId, action, tutorName) => {
        const messages = {
            interview: {
                title: 'Schedule Interview',
                message: `Are you sure you want to schedule an interview for "${tutorName}"?`
            },
            reject: {
                title: 'Remove from Program',
                message: `Are you sure you want to remove "${tutorName}" from the ${statusFilter === 'selected' ? 'training program' : 'interview list'}?`
            }
        };

        setModal({
            isOpen: true,
            tutorId,
            action,
            title: messages[action].title,
            message: messages[action].message
        });
    };

    const handleConfirm = async () => {
        if (!modal.tutorId) return;

        try {
            let status;
            switch(modal.action) {
                case 'interview':
                    status = 'interview';
                    break;
                case 'reject':
                    status = 'rejected';
                    break;
                default:
                    return;
            }

            await axios.patch(`http://localhost:5000/api/tutors/${modal.tutorId}/status`, { status });
            fetchTutors();
            setModal({ isOpen: false, tutorId: null, action: '', title: '', message: '' });
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <div className="p-8">
            <ConfirmationModal
                isOpen={modal.isOpen}
                onClose={() => setModal({ ...modal, isOpen: false })}
                onConfirm={handleConfirm}
                title={modal.title}
                message={modal.message}
                actionType={modal.action}
            />

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">
                        {statusFilter === 'selected' ? 'Training Program' : 'Interview Scheduled'}
                    </h1>
                    <p className="text-slate-400">
                        {statusFilter === 'selected' 
                            ? 'Tutors selected for training program' 
                            : 'Tutors scheduled for interview'}
                    </p>
                </div>
                <div className="flex gap-4">
                    <select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            setPage(1);
                        }}
                        className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
                    >
                        <option value="selected">Training Program</option>
                        <option value="interview">Interview Scheduled</option>
                    </select>
                    <Link 
                        to="/admin" 
                        className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
                    >
                        Back to Dashboard
                    </Link>
                </div>
            </div>

            {/* Filter Section */}
            <div className="bg-slate-800 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Filter Tutors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Min Experience</label>
                        <input
                            type="number"
                            name="minExperience"
                            value={filters.minExperience}
                            onChange={handleFilterChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2"
                            placeholder="0 years"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Max Experience</label>
                        <input
                            type="number"
                            name="maxExperience"
                            value={filters.maxExperience}
                            onChange={handleFilterChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2"
                            placeholder="50 years"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Laptop</label>
                        <select
                            name="hasLaptop"
                            value={filters.hasLaptop}
                            onChange={handleFilterChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2"
                        >
                            <option value="">All</option>
                            <option value="true">Available</option>
                            <option value="false">Not Available</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Broadband</label>
                        <select
                            name="hasBroadband"
                            value={filters.hasBroadband}
                            onChange={handleFilterChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2"
                        >
                            <option value="">All</option>
                            <option value="true">Available</option>
                            <option value="false">Not Available</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Qualification</label>
                        <input
                            type="text"
                            name="qualification"
                            value={filters.qualification}
                            onChange={handleFilterChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2"
                            placeholder="Search qualification"
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={clearFilters}
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                    >
                        Clear Filters
                    </button>
                    <button
                        onClick={fetchTutors}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                    >
                        Apply Filters
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-8">Loading...</div>
            ) : (
                <>
                    <div className="overflow-x-auto bg-slate-800 rounded-lg">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="text-left p-4">Name</th>
                                    <th className="text-left p-4">Contact</th>
                                    <th className="text-left p-4">Qualification</th>
                                    <th className="text-left p-4">Experience</th>
                                    <th className="text-left p-4">Equipment</th>
                                    <th className="text-left p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tutors.map(tutor => (
                                    <tr key={tutor._id} className="border-b border-slate-700 hover:bg-slate-750">
                                        <td className="p-4">
                                            <div>
                                                <div className="font-medium">{tutor.name}</div>
                                                <div className="text-sm text-slate-400">{tutor.gender}, {tutor.age} years</div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="text-sm">
                                                <div>{tutor.email}</div>
                                                <div>{tutor.phone}</div>
                                            </div>
                                        </td>
                                        <td className="p-4">{tutor.qualification}</td>
                                        <td className="p-4">
                                            <div className="font-bold">{tutor.experience} years</div>
                                            {tutor.prev_organisation && (
                                                <div className="text-sm text-slate-400">{tutor.prev_organisation}</div>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            <div className="space-y-1">
                                                {tutor.laptop ? (
                                                    <span className="inline-block bg-green-900 text-green-200 text-xs px-2 py-1 rounded">
                                                        Laptop ✓
                                                    </span>
                                                ) : (
                                                    <span className="inline-block bg-red-900 text-red-200 text-xs px-2 py-1 rounded">
                                                        No Laptop
                                                    </span>
                                                )}
                                                {tutor.broadband ? (
                                                    <span className="inline-block bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded ml-1">
                                                        Broadband ✓
                                                    </span>
                                                ) : (
                                                    <span className="inline-block bg-red-900 text-red-200 text-xs px-2 py-1 rounded ml-1">
                                                        No Broadband
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-wrap gap-2">
                                                {statusFilter === 'selected' && (
                                                    <button
                                                        onClick={() => showConfirmation(tutor._id, 'interview', tutor.name)}
                                                        className="bg-purple-600 hover:bg-purple-500 px-3 py-1 rounded text-sm transition-colors"
                                                    >
                                                        Schedule Interview
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => showConfirmation(tutor._id, 'reject', tutor.name)}
                                                    className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded text-sm transition-colors"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1 || loading}
                            className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Previous
                        </button>
                        <span className="text-slate-300">
                            Page {page} of {totalPages} • {tutors.length} tutors
                        </span>
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages || loading}
                            className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Next
                        </button>
                    </div>

                    {tutors.length === 0 && !loading && (
                        <div className="text-center py-8 text-slate-400">
                            No tutors found matching your filters.
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default SelectedTutors;