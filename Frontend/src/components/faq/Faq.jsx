import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaSearch,
    FaChevronDown,
    FaChevronUp,
    FaRobot,
    FaCalculator,
    FaChartBar,
    FaLightbulb,
    FaCog,
    FaShieldAlt,
    FaThumbsUp,
    FaThumbsDown,
    FaQuestionCircle,
    FaEnvelope,
    FaComments
} from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const FaqPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [expandedItems, setExpandedItems] = useState(new Set());
    const [feedback, setFeedback] = useState({});

    const categories = [
        { id: "all", name: "All Questions", icon: <FaQuestionCircle /> },
        { id: "features", name: "Features", icon: <FaChartBar /> },
        { id: "technical", name: "Technical", icon: <FaCog /> },
        { id: "AI & Tracking", name: "AI & Tracking", icon: <FaRobot /> },
        { id: "account", name: "Account & Privacy", icon: <FaShieldAlt /> }
    ];




    const filteredFAQs = faqData.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleExpanded = (id) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedItems(newExpanded);
    };

    const handleFeedback = (faqId, isHelpful) => {
        setFeedback(prev => ({
            ...prev,
            [faqId]: isHelpful
        }));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-80 h-80 bg-red-200/20 dark:bg-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute top-40 left-20 w-80 h-80 bg-red-200/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 min-h-screen pt-8">
                <div className="text-center mb-12 px-6 lg:px-8 pt-40">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Explore frequently asked questions about the features and functionality of Bharat Bhakti Yatra.
                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-12">
                    {/* Search Bar */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative max-w-2xl mx-auto">
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8C4DCF] focus:border-transparent transition-all shadow-sm"
                            />
                        </div>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        className="mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    variants={itemVariants}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all border ${activeCategory === category.id
                                        ? "bg-orange-500 text-white border-orange-600 shadow-lg"
                                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category.icon}
                                    <span>{category.name}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* FAQ Items */}
                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence>
                            {filteredFAQs.map((faq) => (
                                <motion.div
                                    key={faq.id}
                                    variants={itemVariants}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <button
                                        onClick={() => toggleExpanded(faq.id)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-semibold text-gray-800 text-lg pr-4">
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: expandedItems.has(faq.id) ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaChevronDown className="text-orange-600" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {expandedItems.has(faq.id) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6">
                                                    <p className="text-gray-600 leading-relaxed mb-4">
                                                        {faq.answer}
                                                    </p>

                                                    {/* Feedback Section */}
                                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                                        <span className="text-sm text-gray-500">Was this helpful?</span>
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={() => handleFeedback(faq.id, true)}
                                                                className={`p-2 rounded-full transition-colors ${feedback[faq.id] === true
                                                                    ? "bg-green-100 text-green-600"
                                                                    : "bg-gray-100 text-gray-500 hover:bg-green-50"
                                                                    }`}
                                                            >
                                                                <FaThumbsUp size={14} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleFeedback(faq.id, false)}
                                                                className={`p-2 rounded-full transition-colors ${feedback[faq.id] === false
                                                                    ? "bg-red-100 text-red-600"
                                                                    : "bg-gray-100 text-gray-500 hover:bg-red-50"
                                                                    }`}
                                                            >
                                                                <FaThumbsDown size={14} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* No Results */}
                    {filteredFAQs.length === 0 && (
                        <motion.div
                            className="text-center py-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <FaQuestionCircle className="mx-auto text-6xl text-gray-300 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No questions found</h3>
                            <p className="text-gray-600">Try adjusting your search or browse different categories</p>
                        </motion.div>
                    )}

                    {/* Contact Support Section */}
                    <motion.div
                        className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Still need help?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Can’t find what you’re looking for? Our support team is here to help you get the best experience with Bharat Bhakti Yatra.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-rose-500 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaEnvelope />
                                Contact Support
                            </motion.button>
                            <motion.button
                                onClick={() => navigate('/auth')}
                                className="flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaComments />
                                Join Community
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;