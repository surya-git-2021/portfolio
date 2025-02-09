import React, { useEffect, useState } from 'react';
import profileInfo from '../data/profile.json';
import contributor1 from '../assets/contributor1.jpg';

const RecommendationsSection = () => {
    const [activeTab, setActiveTab] = useState('received');
    const { received, given } = profileInfo;
    const [activeArr, setActiveArr] = useState(received);
    useEffect(() => {
        setActiveArr(activeTab === 'received' ? received : given);
    }, [activeTab, given, received]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
            {/* Header with buttons */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Recommendations</h2>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
                <div className="flex gap-8">
                    <button
                        className={`pb-2 px-1 ${activeTab === 'received'
                                ? 'border-b-2 border-green-600 text-green-600 font-medium'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('received')}
                    >
                        Received
                    </button>
                    <button
                        className={`pb-2 px-1 ${activeTab === 'given'
                                ? 'border-b-2 border-green-600 text-green-600 font-medium'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('given')}
                    >
                        Given
                    </button>
                </div>
            </div>

            {/* Recommendations List */}
            <div className="space-y-8">
                {activeArr.map((recommendation, index) => (
                    <div key={index} className="space-y-4">
                        {/* Author Info */}
                        <div className="flex gap-4">
                            <img
                                src={contributor1}
                                alt={recommendation.author.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-medium">{recommendation.author.name}</h3>
                                    <span className="text-gray-500 text-sm">· {recommendation.author.relationship}</span>
                                </div>
                                <p className="text-gray-600">{recommendation.author.title}</p>
                                <p className="text-gray-500 text-sm">
                                    {recommendation.date}, {recommendation.connection}
                                </p>
                            </div>
                        </div>

                        {/* Recommendation Content */}
                        <div className="space-y-4 text-gray-700">
                            {recommendation.content.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Empty State */}
                {activeArr.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                        No recommendations {activeTab} yet
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecommendationsSection;