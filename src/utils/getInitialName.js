const getInitialName = (name) => {
  const parts = name?.split(' ');
  if (parts?.length === 1) {
    return parts[0]?.charAt(0)?.toUpperCase();
  }
  if (parts?.length >= 2) {
    const firstName = parts?.[0];
    const lastName = parts?.[parts?.length - 1];
    return `${firstName?.charAt(0)?.toUpperCase()} ${lastName
      ?.charAt(0)
      ?.toUpperCase()}`;
  }
  return name;
};

export default getInitialName;
