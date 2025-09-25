import React, { useState } from 'react';

const About = () => {

  const getCardStyle = (baseColor) => ({
    border: `2px solid ${baseColor}`,
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    backgroundColor: 'white',
    cursor: 'pointer'
  });

  const [hoverIndex, setHoverIndex] = useState(null);

  const cards = [
    {
      title: 'Efficient Note Management',
      text: 'NoteBook helps you create, edit, and delete notes effortlessly, keeping everything organized in one place.',
      color: '#007bff' // blue
    },
    {
      title: 'User-Friendly Interface',
      text: 'The app provides a seamless and intuitive experience for all users.',
      color: '#28a745' // green
    },
    {
      title: 'Focus on Your Ideas',
      text: 'NoteBook allows you to focus on your ideas instead of worrying about organization.',
      color: '#ffc107' // yellow
    },
    {
      title: 'Stay Organized',
      text: 'Start using NoteBook today and enjoy a smarter, more organized way to keep track of your thoughts!',
      color: '#17a2b8' // teal
    },
    {
      title: 'Secure Notes',
      text: 'All your notes are safely stored and accessible only to you, ensuring privacy and security.',
      color: '#6f42c1' // purple
    },
    {
      title: 'Quick Search & Access',
      text: 'Easily find your notes with fast search and organized categories for effortless navigation.',
      color: '#fd7e14' // orange
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>About NoteBook</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...getCardStyle(card.color),
              transform: hoverIndex === index ? 'translateY(-5px)' : 'translateY(0)',
              boxShadow: hoverIndex === index ? '0 8px 20px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.1)',
              flex: '0 0 300px'
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h5 style={{ marginBottom: '10px' }}>{card.title}</h5>
            <p style={{ margin: 0 }}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;
