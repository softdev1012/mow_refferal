export const truncateSentence = (sentence: string, maxLength: number = 30) => {
    if (sentence.length > maxLength) {
      return sentence.slice(0, maxLength) + '...';
    }
    return sentence;
}

export const hasRole = (role: string) : boolean => {
    const roles = JSON.parse(localStorage.getItem('user') as string)?.roles;
    for (var i in roles) {
      if (roles[i] === role) return true;
    }
    return false;
}

export const getUserId = () : string => {
  const id = JSON.parse(localStorage.getItem('user') as string)?._id;
  return id;
}

export const shorDate = (dateStr: string) : string => {
  const date = new Date(dateStr);

  const formattedDateString = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  return formattedDateString;
}
