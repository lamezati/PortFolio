import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: "North Carolina State University",
      degree: "Computer Science, Concentration: Cyber Security Bachelor's",
      period: "Aug 25, 2023 - Present",
      location: "Raleigh"
    },
    {
      school: "Ragsdale High School",
      degree: "Degree in High School",
      period: "Aug 25, 2021 - June 9, 2023",
      location: "Jamestown",
      gpa: "4.3"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 last:mb-0 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start justify-between flex-col md:flex-row md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold">{edu.school}</h3>
                  </div>
                  <p className="text-gray-600 mt-2">{edu.degree}</p>
                  {edu.gpa && (
                    <p className="text-gray-600 mt-1">GPA: {edu.gpa}</p>
                  )}
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="text-gray-600 mt-1">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;