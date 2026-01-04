import React from 'react';
import { CheckCircle2 } from 'lucide-react';


const Thank = ()=>{
    const componentStyles = {
        body: { 
            fontFamily: "'Inter', sans-serif", 
            backgroundColor: "#0f172a", 
            color: "#f8fafc", 
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            margin: 0,
        },
        glass: { 
            background: "rgba(30, 41, 59, 0.7)", 
            backdropFilter: "blur(10px)", 
            border: "1px solid rgba(255, 255, 255, 0.1)", 
        },
        gradientText: { 
            background: "linear-gradient(90deg, #38bdf8, #818cf8)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent", 
            backgroundClip: "text",
        }
    };

    return (
        <div style={componentStyles.body}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 blur-[120px] -z-10"></div>

            <div className="max-w-md w-full mx-4 text-center">
                <div style={componentStyles.glass} className="p-10 rounded-3xl shadow-2xl space-y-6">
                    
                    <div className="flex justify-center">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center animate-check">
                            <CheckCircle2 className="w-12 h-12 text-blue-400" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 style={componentStyles.gradientText} className="text-4xl font-bold">Thank You!</h1>
                        <p className="text-slate-400 text-lg">
                            Your application for the Jyamiti Tutor Program has been submitted successfully.
                        </p>
                        <p className="text-slate-500 text-sm">
                            Our recruitment team will review your profile and contact you for the interview stage shortly.
                        </p>
                    </div>

                    <div className="pt-4">
                        <a href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 group">
                            <i data-lucide="arrow-left" className="w-4 h-4 transition-transform group-hover:-translate-x-1"></i>
                            Back to Homepage
                        </a>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .animate-check {
                    animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes scaleIn {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
}

export default Thank;