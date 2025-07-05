import React from 'react';

// About Page Component
function AboutPage() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Khokhar Welfare Foundation</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="mb-4">
            The Khokhar Welfare Foundation was established with a vision to create a more equitable and compassionate world. 
            We believe that every individual deserves access to basic necessities like food, shelter, education, and healthcare.
          </p>
          <p>
            Through our various programs and initiatives, we strive to uplift marginalized communities, empower vulnerable groups, 
            and provide sustainable solutions to pressing social issues.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p>
            To be a beacon of hope and change in society by addressing critical humanitarian needs and fostering long-term development 
            through collaborative efforts and innovative approaches.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Key Activities</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Organizing educational programs for underprivileged children</li>
            <li>Providing medical assistance and organizing health camps</li>
            <li>Distributing food and essential supplies during emergencies</li>
            <li>Supporting orphanages and elderly care homes</li>
            <li>Promoting women's empowerment through skill development programs</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
          <p>
            Since our inception, we have touched the lives of thousands through our various initiatives. Our work spans across multiple 
            regions, focusing on both urban and rural areas where the need is greatest. We measure our success not just in numbers, but 
            in the tangible improvement of lives and communities.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400">Integrity</h4>
              <p>We uphold the highest standards of honesty and transparency in all our operations.</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
              <h4 className="font-semibold text-green-600 dark:text-green-400">Compassion</h4>
              <p>We approach every challenge with empathy and understanding for those we serve.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-md">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400">Excellence</h4>
              <p>We strive for excellence in everything we do, ensuring maximum impact and efficiency.</p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-md">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400">Collaboration</h4>
              <p>We believe in working together with communities, partners, and volunteers to achieve common goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutPage;