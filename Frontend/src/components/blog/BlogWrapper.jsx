
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Search, Calendar, ArrowRight, Sparkles, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialBlogs = [
    {
        id: 1,
        title: "Amarnath Cave – Where Whispered Lord Shiva",
        subtitle:
            "Discover the eternal abode of Lord Shiva nestled in the snow-clad Himalayas. Each step toward Amarnath Cave is a journey through devotion, where silence speaks the language of faith and surrender.",
        image:
            "https://i0.wp.com/www.opindia.com/wp-content/uploads/2025/07/cave-dharamsaar-1.jpg?resize=696%2C398&ssl=1",
        date: "Oct 15, 2025",
        category: "Spiritual Journey",
        readTime: "5 min read",
        trending: true,
        gradient: "from-orange-500 to-pink-500",
    },
    {
        id: 2,
        title:
            "Mata Vaishno Devi – Mother of Knowledge; Destroyer of The Demon of Lust",
        subtitle:
            "Mata Vaishno Devi is the divine embodiment of wisdom and strength, guiding devotees toward purity of thought and purpose. Her sacred abode in the Trikuta mountains radiates energy that transforms hearts with devotion.",
        image:
            "https://wpblogassets.paytm.com/travelblog/uploads/2024/10/Vaishno-Devi-Temple-scaled.jpg",
        date: "Oct 14, 2025",
        category: "Music & Arts",
        readTime: "7 min read",
        trending: true,
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        id: 3,
        title: "Sacred Places Across India",
        subtitle:
            "India is a land where every corner breathes spirituality and divine stories. From Kashi to Rameshwaram, each sacred site connects us to the timeless spirit of devotion and cultural unity.",
        image: "https://www.epicyatra.com/wp-content/uploads/2024/09/header.jpg",
        date: "Oct 13, 2025",
        category: "Travel",
        readTime: "6 min read",
        trending: false,
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        id: 4,
        title: "Haridwar – Gateway To Hari (Vishnu) And Hara (Maheshwara)",
        subtitle:
            "Haridwar stands as the sacred confluence where faith meets the divine flow of the Ganga. Known as the gateway to the gods, this ancient city invites seekers to cleanse their soul and awaken their spiritual essence.",
        image:
            "https://propacity.com/blogs/wp-content/uploads/2024/05/ganga-Arti-1.jpg",
        date: "Oct 12, 2025",
        category: "Philosophy",
        readTime: "8 min read",
        trending: false,
        gradient: "from-amber-500 to-orange-500",
    },
    {
        id: 5,
        title: "Festivals of Unity",
        subtitle:
            "India’s festivals are living symbols of togetherness, joy, and divine celebration. Whether it’s Diwali’s light or Holi’s colors, each festival unites hearts and reminds us of the oneness in diversity.",
        image: "https://htoindia.com/wp-content/uploads/2025/02/India-Fastival.jpg",
        date: "Oct 11, 2025",
        category: "Festivals",
        readTime: "4 min read",
        trending: true,
        gradient: "from-rose-500 to-pink-500",
    },
    {
        id: 6,
        title: "Kedarnath – The Holiest of The Holy Destination",
        subtitle:
            "Kedarnath, nestled amidst the mighty Himalayas, stands as a beacon of Lord Shiva’s grace and resilience. Its divine presence teaches us to endure life’s storms with faith, courage, and humility.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpd1ksAJ_KGY22EHGz36egevlQNo6QDlmlw&s",
        date: "Oct 10, 2025",
        category: "Wellness",
        readTime: "6 min read",
        trending: false,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: 7,
        title: "The Essence of Philosophy in Hindu Scriptures",
        subtitle:
            "Ancient Indian philosophy reveals the eternal truth of existence and self-realization. The teachings of the Vedas and Upanishads inspire seekers to look inward, discover peace, and embrace the divine unity of all beings.",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Raja_Ravi_Varma_-_Sankaracharya.jpg/220px-Raja_Ravi_Varma_-_Sankaracharya.jpg",
        date: "Oct 9, 2025",
        category: "Philosophy",
        readTime: "7 min read",
        trending: false,
        gradient: "from-yellow-500 to-lime-500",
    },
    {
        id: 8,
        title: "Festival of Lights – Symbol of Hope and Renewal",
        subtitle:
            "Diwali, the festival of lights, celebrates the victory of good over evil and knowledge over ignorance. It reminds us that even the smallest lamp can dispel the deepest darkness when lit with faith and love.",
        image:
            "https://static.toiimg.com/thumb/msid-105129473,width-748,height-499,resizemode=4,imgsize-85732/.jpg",
        date: "Oct 8, 2025",
        category: "Festivals",
        readTime: "5 min read",
        trending: true,
        gradient: "from-red-500 to-yellow-500",
    },
    {
        id: 9,
        title: "The Spiritual Wellness of Meditation",
        subtitle:
            "Meditation is the bridge that connects the restless mind with eternal peace. In every breath of awareness, we experience healing, balance, and the presence of the divine within us.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7ftkVSe0BbGPqhoDL4EJ1N-ZfhOQDAvzbQ&s",
        date: "Oct 7, 2025",
        category: "Wellness",
        readTime: "6 min read",
        trending: false,
        gradient: "from-green-500 to-emerald-500",
    },
];


export default function BlogWrapper() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(initialBlogs.map(blog => blog.category))];

    const filteredBlogs = initialBlogs.filter(
        (blog) => {
            const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
            return matchesSearch && matchesCategory;
        }
    );

    return (
        <section className="relative mt-6 py-20 bg-gradient-to-b from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-5">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
                        <Sparkles size={16} />
                        <span>Discover Sacred Stories</span>
                    </div>
                    <h2 className=" relative text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent mb-5">
                        Bharat Bhakti Yatra Blog

                    </h2>
                    <p className="text-md text-gray-500 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Embark on a spiritual journey that connects devotees across the digital realm,
                        fostering unity and devotion in our sacred traditions.
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="flex flex-col lg:flex-col gap-4 justify-between items-center mb-12 ">
                    {/* Search Bar */}
                    <div className="relative w-full lg:max-w-2xl">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search sacred stories..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition "
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-end mt-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 
        ${selectedCategory === category
                                        ? "bg-gradient-to-r from-orange-500 via-orange-500 to-rose-500 text-white shadow-md shadow-orange-400/30 scale-105"
                                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-orange-400 hover:text-orange-600 dark:hover:border-orange-400"
                                    }
      `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                    {filteredBlogs.map((blog, index) => (
                        <Card
                            key={blog.id}
                            className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Trending Badge */}
                            {blog.trending && (
                                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-lg">
                                    <TrendingUp size={14} />
                                    <span>Published</span>
                                </div>
                            )}

                            {/* Image Section */}
                            <div className="relative h-56 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Category Badge */}
                                <div className="absolute bottom-4 left-4 z-10">
                                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-semibold text-gray-800 dark:text-white">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{blog.date}</span>
                                    </div><Clock size={14} />

                                    <span>{blog.readTime}</span>
                                </div>

                                <h3 className="text-md font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                                    {blog.title}
                                </h3>

                                <p className="text-sm text-gray-500 dark:text-gray-300 mb-4 line-clamp-2">
                                    {blog.subtitle}
                                </p>
                                   
                                {/* Read More Button */}
                                <div className="flex justify-between items-center">
                                    <Button
                                        variant="ghost"
                                        className="group/btn p-0 px-3 py-3 rounded-full font-semibold 
             bg-gradient-to-r from-orange-500 via-orange-500 to-rose-500 cursor-pointer
             text-white shadow-md transition-all duration-300 
             hover:shadow-lg hover:scale-105 
             hover:from-rose-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white"
                                    >
                                        <span className="flex items-center gap-2">
                                            Read More

                                        </span>
                                    </Button>
                                    <ArrowRight
                                        size={16}
                                        className="rounded-full border h-8 w-8 p-2"
                                    />
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${blog.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                        </Card>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredBlogs.length === 0 && (
                    <div className="text-center py-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                            <Search size={32} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            No blogs found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}

                {/* Load More Section */}
                {filteredBlogs.length > 0 && (
                    <div className="text-center mt-12">
                        <Button className="px-8 py-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-600 hover:to-orange-400 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300">
                            Load More Stories
                        </Button>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
}