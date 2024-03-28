export const truncateSentence = (sentence: string, maxLength: number = 30) => {
    if (sentence.length > maxLength) {
      return sentence.slice(0, maxLength) + '...';
    }
    return sentence;
  }