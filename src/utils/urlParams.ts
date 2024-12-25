interface Names {
  recipient: string;
  sender: string;
}

export const getNamesFromUrl = (): Names => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    recipient: urlParams.get('name') || urlParams.get('n') || 'Amig@',
    sender: urlParams.get('author') || urlParams.get('a') || 'Anónimo'
  };
};


export const createShareableUrl = (recipient: string, sender: string): string => {
  const baseUrl = 'https://felizannonuevo.vercel.app/'; //domain
  const encodedRecipient = encodeURIComponent(recipient);
  const encodedSender = encodeURIComponent(sender);
  return `${baseUrl}?n=${encodedRecipient}&a=${encodedSender}`;
};