import  { useState, useEffect } from 'react';

const BeautifulWelcomeSection = () => {
  // Sample user data
  const users = [
    { id: 1, img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 4, img: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: 5, img: "https://randomuser.me/api/portraits/women/90.jpg" },
  ];

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the target date (e.g., January 1, 2025)
  useEffect(() => {
    const calculateTimeLeft = () => {
  const targetDate = new Date("2025-05-17T11:00:00");
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime(); // 👈 getTime() devuelve el número de milisegundos

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial calculation

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 font-sans">
      {/* Logo/Branding */}
      <div className="flex flex-col items-center mb-8">
        <img 
          className="h-12 w-12 rounded-full object-cover mb-4 border border-gray-200"
          src="https://images.unsplash.com/photo-1743883986319-bebbb3a897da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" 
          alt="Brand logo"
        />
        <span className="text-sm text-gray-500 tracking-wider">AVAILABLE IN EARLY 2025</span>
      </div>

      {/* Main Content */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-4 leading-tight">
          Get Early Access
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
          Be among the first to join and experience all in one platform. Find your favorite places to eat, enjoy and have fun.
        </p>

        {/* Email Input */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <button className="absolute right-2 top-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors">
              Join
            </button>
          </div>
        </div>

        {/* Joined Users */}
        <div className="mb-16">
          <p className="text-gray-500 text-sm mb-4">ALREADY JOINED</p>
          <div className="flex justify-center items-center -space-x-2">
            {users.map(user => (
              <img 
                key={user.id}
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                src={user.img}
                alt={`User ${user.id}`}
              />
            ))}
            <div className="h-10 w-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500">
              +154
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className=' mb-16'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-2xl font-medium text-gray-800 mb-1">{timeLeft.days}</p>
            <p className="text-gray-500 text-sm">Days</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-2xl font-medium text-gray-800 mb-1">{timeLeft.hours}</p>
            <p className="text-gray-500 text-sm">Hours</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-2xl font-medium text-gray-800 mb-1">{timeLeft.minutes}</p>
            <p className="text-gray-500 text-sm">Minutes</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-2xl font-medium text-gray-800 mb-1">{timeLeft.seconds}</p>
            <p className="text-gray-500 text-sm">Seconds</p>
          </div>
        </div>
            <p className="text-sm text-gray-500 tracking-wider ">LEFT UNTIL FULL RELEASED</p>

        </div>
        


        {/* Video Player */}
        <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video max-w-3xl mx-auto shadow-md">
          <video 
            className="w-full h-full object-cover" 
            controls
            poster="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.1.0&auto=format&fit=crop&w=1350&q=80"
          >
            <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default BeautifulWelcomeSection;