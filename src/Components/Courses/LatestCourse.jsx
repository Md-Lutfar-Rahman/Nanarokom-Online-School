import React, { useState } from 'react';

const allCourses = [
    {
      id: 1,
      title: "Web Development Basics",
      description: "Learn the fundamentals of HTML, CSS, and JavaScript.",
      category: "Latest",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Advanced React Techniques",
      description: "Build powerful React applications with advanced techniques.",
      category: "Popular",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "JavaScript for Beginners",
      description: "A comprehensive introduction to JavaScript programming.",
      category: "Most Sell",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Upcoming Data Science Bootcamp",
      description: "A complete bootcamp on data science starting next month.",
      category: "Upcoming",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "Machine Learning Fundamentals",
      description: "An introduction to machine learning and its applications.",
      category: "Latest",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      title: "UI/UX Design Essentials",
      description: "Learn to design user-friendly interfaces and experiences.",
      category: "Popular",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      title: "Full-Stack Development Bootcamp",
      description: "Become a full-stack developer with this intensive course.",
      category: "Most Sell",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 8,
      title: "Cloud Computing with AWS",
      description: "Understand the basics of cloud computing using AWS.",
      category: "Upcoming",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 9,
      title: "Python Programming for All",
      description: "Learn Python from the ground up, for any skill level.",
      category: "Latest",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 10,
      title: "Cybersecurity Basics",
      description: "An introductory course on protecting systems from cyber threats.",
      category: "Most Sell",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 11,
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform apps using Flutter.",
      category: "Popular",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 12,
      title: "Blockchain Technology and Applications",
      description: "Explore the fundamentals of blockchain and its applications.",
      category: "Upcoming",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 13,
      title: "Data Structures & Algorithms",
      description: "Master essential data structures and algorithms.",
      category: "Most Sell",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 14,
      title: "SEO & Digital Marketing",
      description: "Boost your website’s visibility with SEO and marketing strategies.",
      category: "Popular",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 15,
      title: "Artificial Intelligence for Beginners",
      description: "A beginner-friendly course on AI and its real-world applications.",
      category: "Latest",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];
  
function LatestCourse() {
  const [selectedCategory, setSelectedCategory] = useState("Latest");

   // Function to save course info to local storage
   const handleEnroll = (course) => {
    const courseInfo = { id: course.id, name: course.title };
    const storedCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    // Add new course info to the array
    storedCourses.push(courseInfo);
    // Save updated array to local storage
    localStorage.setItem('enrolledCourses', JSON.stringify(storedCourses));
    alert(`Enrollment Successful! You have successfully enrolled in "${course.title}". Check your enrolled courses anytime!`);

  };


  // Filter courses based on the selected category
  const filteredCourses = allCourses.filter(course => course.category === selectedCategory);

  return (
   <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Our Courses</h2>
        
        {/* Category Filters */}
        <div className="flex justify-center mb-8 space-x-4">
          {["Latest", "Upcoming", "Popular", "Most Sell"].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              
              {/* Course Image */}
              <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
              
              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex justify-between">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300">
                    Learn More
                  </button>
                  <button 
                    onClick={() => handleEnroll(course)} 
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestCourse;
