import React, { useState, useMemo } from 'react';
import { Search, Calendar, MapPin, Star, Clock, Users, Heart, Filter, ChevronRight, Sparkles, BookOpen, Shield, Flame, Award, TrendingUp, Gift, Flower2 } from 'lucide-react';

const Pujas = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [expandedPuja, setExpandedPuja] = useState(null);
  const [sortOption, setSortOption] = useState('popularity');

  const categories = [
    'All',
    'Daily Pujas',
    'Special Occasions',
    'Planetary',
    'Festivals',
    'Life Events',
    'Health & Wellness'
  ];

  const pujas = [
    {
      id: 1,
      name: 'Maha Mrityunjaya Jaap',
      category: 'Health & Wellness',
      description: 'Powerful healing ritual for health, longevity, and protection from negativity',
      fullDescription: 'The Maha Mrityunjaya Jaap is one of the most powerful mantras in Hindu spirituality, dedicated to Lord Shiva in his form as the conqueror of death. This sacred ritual involves the chanting of the Maha Mrityunjaya Mantra 108 times or in multiples thereof, creating powerful vibrations that promote healing, longevity, and spiritual awakening. This ancient practice has been passed down through generations and is mentioned in the Rigveda, making it one of the oldest healing mantras known to humanity.',
      ritualDetails: 'The ceremony begins with Ganesh Puja for removing obstacles, followed by Kalash Sthapana (establishing the sacred pot), Sankalpa (taking the vow), and the main Jaap. The ritual includes offering of bilva leaves, flowers, and abhishekam with holy water, milk, honey, ghee, and curd to the Shiva Lingam. The sacred space is purified with incense and camphor, creating an atmosphere conducive to divine intervention and healing.',
      duration: '2-3 hours',
      price: 2100,
      rating: 4.9,
      reviews: 342,
      image: 'https://panditjiujjain.com/wp-content/uploads/2021/03/maha-mratyunjay-jaap.png',
      popular: true,
      deity: 'Lord Shiva',
      benefits: ['Health & Healing', 'Protection', 'Longevity', 'Inner Peace', 'Spiritual Growth', 'Disease Prevention'],
      materials: ['Rudraksha Mala', 'Bilva Leaves', 'Sacred Water', 'Incense', 'Camphor', 'Flowers']
    },
    {
      id: 2,
      name: 'Lakshmi Puja',
      category: 'Daily Pujas',
      description: 'Invoke the blessings of Goddess Lakshmi for wealth, prosperity, and abundance',
      fullDescription: 'Lakshmi Puja is a sacred ritual dedicated to Goddess Lakshmi, the divine embodiment of wealth, prosperity, fortune, and abundance. This beautiful ceremony invokes the gracious presence of Maha Lakshmi into your home and life, bringing not just material wealth but also spiritual richness, peace of mind, and overall well-being. The Goddess is honored with sixteen traditional offerings (Shodashopachara) including flowers, incense, lamp, and special foods that please her divine nature.',
      ritualDetails: 'The puja commences with cleaning and decorating the puja space with rangoli and flowers. A kalash is established with water, coins, and betel leaves. The main ritual includes recitation of Lakshmi Ashtottara Shatanamavali (108 names), offering of lotus flowers, lighting of ghee lamps, and performing aarti. Special mantras are chanted to invoke prosperity in all aspects of life - health, wealth, relationships, and spiritual growth.',
      duration: '1.5 hours',
      price: 1500,
      rating: 4.8,
      reviews: 567,
      image: 'https://i.pinimg.com/736x/97/f0/02/97f0020e5ae9db316493ff258b3c7fb2.jpg',
      popular: true,
      deity: 'Goddess Lakshmi',
      benefits: ['Wealth', 'Prosperity', 'Success', 'Abundance', 'Financial Stability', 'Business Growth'],
      materials: ['Lotus Flowers', 'Gold Coins', 'Rice', 'Turmeric', 'Kumkum', 'Ghee Lamps']
    },
    {
      id: 3,
      name: 'Ganesh Chaturthi Puja',
      category: 'Festivals',
      description: 'Complete ritual to celebrate Lord Ganesha, remover of obstacles and harbinger of success',
      fullDescription: 'Ganesh Chaturthi Puja is one of the most joyous and significant Hindu festivals celebrating the birth of Lord Ganesha, the elephant-headed deity who is revered as the remover of obstacles, patron of arts and sciences, and the deva of intellect and wisdom. This elaborate ceremony involves the installation of a beautiful Ganesha idol, daily worship for several days, and finally the immersion ceremony. The festival brings together families and communities in devotion, creating an atmosphere of joy, devotion, and spiritual upliftment.',
      ritualDetails: 'The puja begins with Pranapratishtha (infusing life into the idol) followed by Shodashopachara Puja with sixteen sacred offerings. Daily rituals include morning and evening aarti, offering of modaks (Ganesha\'s favorite sweet), durva grass, and red flowers. The ceremony includes chanting of Ganesha Atharvashirsha, Sankat Nashak Ganesha Stotra, and 108 names. The festival culminates with the visarjan (immersion) ceremony on the final day.',
      duration: '3 hours',
      price: 3500,
      rating: 4.9,
      reviews: 891,
      image: 'https://images.news18.com/ibnlive/uploads/2025/08/image-2025-08-2598bc6132ac5847e0e18d19e8ed396c.jpg',
      popular: true,
      deity: 'Lord Ganesha',
      benefits: ['Remove Obstacles', 'New Beginnings', 'Wisdom', 'Success', 'Intelligence', 'Career Growth'],
      materials: ['Ganesha Idol', 'Modak', 'Durva Grass', 'Red Flowers', 'Coconut', 'Fruits']
    },
    {
      id: 4,
      name: 'Navagraha Shanti Puja',
      category: 'Planetary',
      description: 'Appease the nine planetary deities for harmony and balance in life',
      fullDescription: 'The Navagraha Shanti Puja is a comprehensive Vedic ritual performed to appease and honor the nine celestial bodies (Navagrahas) that govern different aspects of human life according to Hindu astrology. These nine planets - Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu - exert powerful influences on our destiny, health, relationships, career, and spiritual journey. This sacred ceremony helps neutralize negative planetary effects, enhance positive influences, and bring balance and harmony to one\'s life path.',
      ritualDetails: 'The elaborate ceremony involves establishing nine separate altars for each planet with their specific colored cloths, offerings, and mantras. Each planet is invoked individually with their beej mantras and offered their favorite items. The ritual includes homam (fire ceremony) with specific woods and herbs for each planet, followed by abhishekam and aarti. The pandit performs Graha Shanti mantras and conducts a comprehensive puja to balance all planetary energies in your horoscope.',
      duration: '4 hours',
      price: 5100,
      rating: 4.7,
      reviews: 234,
      image: 'https://nyganeshtemple.org/wp-content/uploads/2016/01/Sri_Navagraha-1.jpeg',
      popular: false,
      deity: 'Nine Planets',
      benefits: ['Planetary Peace', 'Life Balance', 'Remove Doshas', 'Fortune', 'Career Success', 'Health'],
      materials: ['9 Colored Cloths', 'Sesame Seeds', 'Grains', 'Gemstones', 'Sacred Woods', 'Herbs']
    },
    {
      id: 5,
      name: 'Satyanarayan Puja',
      category: 'Special Occasions',
      description: 'Auspicious ceremony for success, prosperity, and fulfillment of desires',
      fullDescription: 'Satyanarayan Puja is one of the most popular and accessible Hindu religious ceremonies, dedicated to Lord Vishnu in his form as Satyanarayan, the embodiment of truth and righteousness. This beautiful and spiritually enriching ritual can be performed on any auspicious occasion - new business ventures, housewarmings, weddings, childbirth, or simply to express gratitude for life\'s blessings. The puja includes the recitation of the Satyanarayan Katha, five sacred stories that illustrate the glory and compassion of Lord Vishnu.',
      ritualDetails: 'The ceremony begins with Ganesh Puja and Punyahavachanam (purification), followed by Kalash Sthapana. The main ritual includes the worship of Lord Satyanarayan with banana, betel leaves, and panchamrit (mixture of five sacred foods). The pandit recites the Satyanarayan Katha while devotees listen with devotion. After the katha, prasad made from banana, sugar, and ghee is distributed to all participants, symbolizing the blessings of the Lord.',
      duration: '2 hours',
      price: 2500,
      rating: 4.8,
      reviews: 445,
      image: 'https://m.media-amazon.com/images/I/91Gqi1dysYL.jpg',
      popular: true,
      deity: 'Lord Vishnu',
      benefits: ['Success', 'Prosperity', 'Peace', 'Fulfillment', 'Family Harmony', 'Divine Grace'],
      materials: ['Banana', 'Betel Leaves', 'Panchamrit', 'Yellow Cloth', 'Tulsi', 'Prasad Items']
    },
    {
      id: 6,
      name: 'Griha Pravesh Puja',
      category: 'Life Events',
      description: 'Sacred housewarming ceremony for positive energy in your new home',
      fullDescription: 'Griha Pravesh Puja is an ancient and essential Hindu ritual performed when entering a new home for the first time. This sacred ceremony purifies the space, removes any negative energies, and invokes divine blessings for peace, prosperity, and happiness in the new dwelling. The ritual establishes a harmonious relationship between the inhabitants and the space, transforming a mere building into a sacred home filled with positive vibrations. According to Vastu Shastra, performing this puja ensures that the home becomes a sanctuary of peace and abundance.',
      ritualDetails: 'The comprehensive ceremony includes Ganesh Puja, Kalash Sthapana, Vastu Puja to honor the presiding deity of the land and structure, and Navagraha Puja for planetary blessings. The pandit performs Agni Puja (fire ceremony) to purify the space, followed by the ceremonial entry where the lady of the house enters first carrying a kalash filled with rice and water. Sacred cow is welcomed, lamps are lit in all rooms, and the home is sanctified with holy water and sacred chants.',
      duration: '3 hours',
      price: 4500,
      rating: 4.9,
      reviews: 178,
      image: 'https://i.ytimg.com/vi/zi9GCAZwfXA/maxresdefault.jpg',
      popular: false,
      deity: 'Multiple Deities',
      benefits: ['Home Blessing', 'Positive Energy', 'Protection', 'Harmony', 'Prosperity', 'Peace'],
      materials: ['Kalash', 'Mango Leaves', 'Coconut', 'Turmeric', 'Milk', 'Sacred Threads']
    },
    {
      id: 7,
      name: 'Rudrabhishek',
      category: 'Daily Pujas',
      description: 'Sacred bathing ritual of Shiva Lingam with holy substances for divine blessings',
      fullDescription: 'Rudrabhishek is a profound and deeply spiritual ritual dedicated to Lord Shiva in his fierce and benevolent form as Rudra. This ancient ceremony involves the ceremonial bathing (abhishekam) of the Shiva Lingam with various sacred substances while chanting powerful Vedic mantras from the Rudram and Chamakam. The ritual is considered highly auspicious and is believed to grant devotees their heartfelt wishes while removing sins, past karma, and obstacles. The vibrations created during Rudrabhishek are said to purify not just the individual but also the surrounding environment.',
      ritualDetails: 'The sacred ritual begins with meditation and invocation of Lord Ganesha, followed by the main abhishekam where the Shiva Lingam is bathed sequentially with water from sacred rivers, milk, yogurt, honey, ghee, sugar, and finally water again. Each substance is poured while chanting specific mantras from the Vedas. Bilva leaves, considered most dear to Lord Shiva, are offered throughout. The ceremony concludes with camphor aarti, distribution of vibhuti (sacred ash), and prasadam.',
      duration: '1.5 hours',
      price: 1800,
      rating: 4.8,
      reviews: 523,
      image: 'https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_SGpKqH4Y_202404181504220.jpg',
      popular: true,
      deity: 'Lord Shiva',
      benefits: ['Divine Blessings', 'Purification', 'Spiritual Growth', 'Peace', 'Success', 'Wisdom'],
      materials: ['Milk', 'Honey', 'Ghee', 'Yogurt', 'Bilva Leaves', 'Vibhuti']
    },
    {
      id: 8,
      name: 'Durga Saptashati Path',
      category: 'Festivals',
      description: 'Powerful recitation of 700 verses praising Goddess Durga for protection and strength',
      fullDescription: 'The Durga Saptashati Path, also known as Devi Mahatmyam or Chandi Path, is the recitation of 700 powerful verses that narrate the glory and victory of Goddess Durga over evil forces. This sacred text from the Markandeya Purana is considered one of the most potent scriptures in Hindu tradition, containing the essence of divine feminine energy (Shakti). The path describes how the Goddess manifests in different forms to protect dharma and destroy negativity, making it an ultimate source of strength, courage, and divine protection for devotees.',
      ritualDetails: 'The comprehensive ceremony spans several hours and includes the complete recitation of all thirteen chapters (adhyayas) of the Durga Saptashati. The ritual begins with elaborate Devi Puja, followed by chapter-wise recitation with prescribed rituals. Kumari Puja (worship of young girls as manifestations of the Goddess) is performed, along with offerings of red flowers, sindoor, and special bhog. The path includes Kavach (protective armor), Argala, Kilak, and Ratri Suktam. The ceremony concludes with powerful aarti and distribution of prasad.',
      duration: '5 hours',
      price: 6500,
      rating: 4.9,
      reviews: 412,
      image: 'https://images.news18.com/ibnkhabar/uploads/2025/09/image-2025-09-93375f9dda7945c88d48fcdfb037f28a.jpg?impolicy=website&width=640&height=480',
      popular: true,
      deity: 'Goddess Durga',
      benefits: ['Protection', 'Strength', 'Victory', 'Courage', 'Removal of Negativity', 'Success'],
      materials: ['Red Flowers', 'Sindoor', 'Fruits', 'Sweets', 'Incense', 'Sacred Text']
    },
    {
      id: 9,
      name: 'Hanuman Chalisa Path',
      category: 'Daily Pujas',
      description: 'Devotional hymn recitation for strength, courage, and removal of fears',
      fullDescription: 'The Hanuman Chalisa is one of the most beloved devotional hymns in Hinduism, composed by the 16th-century poet-saint Goswami Tulsidas. This beautiful composition of 40 verses (chalisa means forty) describes the glory, virtues, and exploits of Lord Hanuman, the devoted servant of Lord Rama and symbol of ultimate devotion, strength, and selfless service. Reciting the Chalisa with faith and devotion is believed to remove all obstacles, fears, and negative influences while bestowing courage, wisdom, and divine protection.',
      ritualDetails: 'The path ceremony begins with Ganesh Vandana and Guru Vandana, followed by Hanuman Chalisa recitation (typically 11 times or multiples thereof). The ritual includes offering of sindoor, red flowers, coconut, and Hanuman\'s favorite prasad - besan laddu. Incense and camphor are lit, and the sacred dhuni (sacred fire associated with Hanuman) is honored. Devotees sit in meditation while the powerful verses are chanted, creating an atmosphere charged with divine energy. The ceremony concludes with aarti and distribution of prasad.',
      duration: '1 hour',
      price: 800,
      rating: 4.7,
      reviews: 689,
      image: 'https://m.media-amazon.com/images/I/91g04uOT9YL.jpg',
      popular: true,
      deity: 'Lord Hanuman',
      benefits: ['Courage', 'Strength', 'Protection', 'Devotion', 'Success', 'Mental Peace'],
      materials: ['Sindoor', 'Red Flowers', 'Besan Laddu', 'Coconut', 'Ghee Lamp', 'Incense']
    }
  ];

  const filteredPujas = pujas.filter(puja => {
    const matchesCategory = selectedCategory === 'All' || puja.category === selectedCategory;
    const matchesSearch = puja.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         puja.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         puja.deity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Apply sorting on the filtered list
  const sortedPujas = useMemo(() => {
    const arr = [...filteredPujas];
    switch (sortOption) {
      case 'price_asc':
        return arr.sort((a, b) => a.price - b.price);
      case 'price_desc':
        return arr.sort((a, b) => b.price - a.price);
      case 'rating':
        return arr.sort((a, b) => b.rating - a.rating);
      case 'popularity':
      default:
        // Popularity: prefer 'popular' flag first, then by reviews
        return arr.sort((a, b) => {
          const p = (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
          if (p !== 0) return p;
          return b.reviews - a.reviews;
        });
    }
  }, [filteredPujas, sortOption]);

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50">
      {/* Top Main Hero Section with Full Screen Background */}
      <div className="relative overflow-hidden min-h-screen flex items-center pt-20">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img 
            src="https://m.media-amazon.com/images/I/81PS6h7bS8L._UF894,1000_QL80_.jpg" 
            alt="Temple Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/60 via-amber-700/50 to-orange-800/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white font-medium mb-6">
            <Flower2 className="w-5 h-5" />
            <span>Sacred Vedic Traditions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Experience Divine Blessings Through
            <span className="block mt-2 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
              Authentic Vedic Pujas
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Connect with ancient wisdom and divine energies through meticulously performed rituals by learned pandits.
            Each ceremony is conducted with pure devotion, traditional accuracy, and spiritual authenticity to bring
            positive transformations in your life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white border border-white/20">
              <Award className="w-5 h-5" />
              <span>Verified Pandits</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white border border-white/20">
              <Shield className="w-5 h-5" />
              <span>100% Authentic Rituals</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white border border-white/20">
              <Star className="w-5 h-5 fill-white" />
              <span>10,000+ Satisfied Devotees</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12">
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search pujas, deities, benefits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-orange-200 focus:border-orange-400 focus:outline-none transition-colors shadow-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-4 py-2 rounded-full border-2 border-orange-200 focus:border-orange-400 focus:outline-none bg-white shadow-sm"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price_asc">Sort by Price: Low to High</option>
                <option value="price_desc">Sort by Price: High to Low</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-400 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sortedPujas.map(puja => (
            <div
              key={puja.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-orange-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={puja.image}
                  alt={puja.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {puja.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                    <TrendingUp className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <button
                  onClick={() => toggleFavorite(puja.id)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition-all shadow-lg"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.includes(puja.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <Flame className="w-5 h-5" />
                    <span className="font-semibold text-lg">{puja.deity}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
                    {puja.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-gray-700">{puja.rating}</span>
                    <span className="text-gray-500 text-sm">({puja.reviews})</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">{puja.name}</h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {puja.description}
                </p>

                {expandedPuja === puja.id && (
                  <div className="mb-4 space-y-3">
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-orange-600" />
                        About This Ritual
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{puja.fullDescription}</p>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Ritual Details
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{puja.ritualDetails}</p>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <Gift className="w-4 h-4 text-green-600" />
                        Sacred Materials Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {puja.materials.map((material, idx) => (
                          <span key={idx} className="text-xs bg-white text-green-700 px-3 py-1 rounded-full border border-green-200 font-medium">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setExpandedPuja(expandedPuja === puja.id ? null : puja.id)}
                  className="text-orange-600 font-medium text-sm mb-4 hover:text-orange-700 transition-colors flex items-center gap-1"
                >
                  {expandedPuja === puja.id ? 'Show Less' : 'Learn More'}
                  <ChevronRight className={`w-4 h-4 transition-transform ${expandedPuja === puja.id ? 'rotate-90' : ''}`} />
                </button>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">{puja.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">Expert Pandits</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Divine Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {puja.benefits.slice(0, 4).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 px-3 py-1.5 rounded-full border border-amber-200 font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                    {puja.benefits.length > 4 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">
                        +{puja.benefits.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">₹{puja.price}</span>
                    <span className="text-gray-500 text-sm ml-1">onwards</span>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 font-semibold flex items-center gap-2 shadow-lg group">
                    Book Now
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPujas.length === 0 && (
          <div className="text-center py-20">
            <div className="text-7xl mb-6">🙏</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-3">No Pujas Found</h3>
            <p className="text-gray-600 text-lg">Try adjusting your search or filter criteria to discover more sacred rituals</p>
          </div>
        )}

        {/* Bottom Consultation Section with Rounded Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 rounded-3xl p-12 text-white text-center mb-16 shadow-2xl">
          {/* Background Image Container */}
          <div className="absolute inset-0">
            <img 
              src="https://m.media-amazon.com/images/I/81PS6h7bS8L._UF894,1000_QL80_.jpg" 
              alt="Temple Background" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-700/70 via-amber-700/60 to-orange-800/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Calendar className="w-10 h-10" />
            </div>

            <h2 className="text-4xl font-bold mb-4">Need Personalized Spiritual Guidance?</h2>

            <p className="text-xl mb-4 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Not sure which puja is right for you? Our experienced pandits are here to help you choose the perfect ritual
              based on your birth chart, current life situation, and spiritual goals.
            </p>

            <p className="text-lg mb-8 opacity-80 max-w-xl mx-auto">
              Schedule a free consultation to discuss your needs and receive personalized recommendations for your spiritual journey.
            </p>

            <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-orange-50 transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-xl text-lg">
              <Calendar className="w-6 h-6" />
              Schedule Free Consultation
            </button>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Why Choose Our Puja Services?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the authentic power of Vedic rituals performed with devotion, knowledge, and traditional precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Verified Expert Pandits</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our pandits are highly qualified scholars with deep knowledge of Vedic scriptures, Sanskrit mantras, and traditional rituals.
                Each pandit has undergone rigorous training and has years of experience performing authentic ceremonies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                They bring not just expertise, but genuine devotion and spiritual energy to every ritual they perform, ensuring maximum divine blessings.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Flexible Scheduling Options</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Book pujas at your convenience with our flexible scheduling system. Choose to have ceremonies performed at your home,
                at sacred temples, or even participate virtually through live video streaming.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work with your schedule and provide muhurat (auspicious time) recommendations based on Vedic astrology for maximum benefits.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Authentic Rituals</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every ceremony is performed following traditional Vedic guidelines with proper pronunciation of mantras, correct ritual procedures,
                and authentic sacred materials. We never compromise on the integrity of our spiritual services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All rituals include proper Sankalp (sacred vow) with your name and gotra, ensuring the divine blessings are directed specifically to you.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-3xl p-12 mb-12 border-2 border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full mb-6">
              <Flower2 className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Sacred Journey of a Vedic Puja
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Every Vedic puja is a carefully orchestrated spiritual ceremony that follows ancient traditions passed down through millennia.
              The process begins with purification of the space and the participants, followed by invocation of Lord Ganesha to remove obstacles.
              The main deity is then invoked with powerful mantras, offered sacred items, and worshipped with complete devotion.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Throughout the ceremony, specific mantras from the Vedas are chanted with perfect pronunciation and rhythm, creating powerful
              vibrations that resonate with cosmic energies. These sound vibrations, combined with the sacred fire (when applicable),
              offerings, and focused intention, create a bridge between the physical and spiritual realms.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              The ceremony concludes with aarti (offering of light), distribution of prasad (blessed food), and the carrying forward of
              divine blessings into your daily life. Each ritual is not just a religious ceremony, but a transformative spiritual experience
              that brings positive changes in consciousness, energy, and life circumstances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pujas;