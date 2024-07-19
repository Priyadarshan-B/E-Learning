import { useRef } from 'react';

const useNavbarScroll = () => {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    course: useRef(null),
    slot: useRef(null),
    contact: useRef(null),
  };

  const handleScroll = (section) => {
    const ref = sectionRefs[section]?.current;
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`No reference found for section: ${section}`);
    }
  };

  return { sectionRefs, handleScroll };
};

export { useNavbarScroll };
