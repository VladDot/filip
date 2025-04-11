export const scrollToSection = (id: string, offset = -82) => {
  const element = document.getElementById(id.replace('#', ''));
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
