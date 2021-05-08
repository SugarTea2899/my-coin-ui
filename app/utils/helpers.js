export const copyToClipboard = async (content) => {
  await navigator.clipboard.writeText(content)
};
