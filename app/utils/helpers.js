export const copyToClipboard = async (content) => {
  await navigator.clipboard.writeText(content)
};

export const getTime = (time) => {
  const diff = (Date.now() - time) / 1000;

  if (diff < 60)
    return `${Math.round(diff)} secs ago`;

  if (diff > 60 && diff < 3600)
    return `${Math.round(diff / 60)} mins ago`;

  return `${Math.round(diff / 3600)} hours ago`;  
}

export const hideCharacter = (str, size = 10) => {
  return str.substring(0, size) + (str.length > size ? '...' : '');
}
