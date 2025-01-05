import React, { useState, useEffect } from 'react';

const TypewriterText = () => {
  const [text, setText] = useState('');
  const fullText = 'Portfolio';
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
      } else {
        setText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : fullText.slice(0, prev.length + 1)
        );
      }
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <span className="font-bold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;