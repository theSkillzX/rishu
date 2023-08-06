import { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container p-0 mt-4'>
    <div className="border rounded-lg mb-4 w-[80%] m-auto p-1">
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <span className="text-gray-900 scale-150">
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && (
        <div className="px-4 py-2  dark:bg-darkwhite">
          <p>{content}</p>
        </div>
      )}
      </div>
    </div>
  );
};

const Acc = () => {
  const accordions = [
    {
      title: ' What is SkillzX?',
      content: 'SkillzX is an innovative edtech startup that offers a wide range of online courses and learning programs designed to enhance your skills and knowledge in various fields. Our platform provides a flexible and interactive learning environment to help you achieve your educational and career goals.',
    },
    {
      title: ' How does SkillzX work?',
      content: ' SkillzX provides a user-friendly platform where you can browse and enroll in different courses. Once enrolled, you gain access to the course materials, including video lessons, quizzes, assignments, and more. You can learn at your own pace, and our experienced instructors are available to assist you throughout your learning journey.',
    },
    {
      title: 'What type of courses does SkillzX offer?',
      content: 'SkillzX offers a diverse selection of courses covering topics such as programming, data science, design, marketing, business, language learning, and more. We continuously update and expand our course catalog to meet the evolving demands of the job market.',
    },
    {
      title: 'Can I get a certificate after completing a course?',
      content: "Yes, upon successful completion of a course, you will receive a course completion certificate. Our certificates are widely recognized and can add value to your resume and professional profile.",
    },
    {
      title: ' How do I enroll in a course?',
      content: "Enrolling in a course is easy! Simply browse our course catalog, select the course you're interested in, and click the Enroll button. You will be guided through the payment process and gain instant access to the course materials.",
    },
  ];

  return (
    <div className="container mx-auto py-4">
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.title}
          title={accordion.title}
          content={accordion.content}
        />
      ))}
    </div>
  );
};

export default Acc;