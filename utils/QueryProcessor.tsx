export default function QueryProcessor(query: string): string {
    // Handle 'Which of the following numbers is the largest' queries
    const largestMatch = query.match(/which of the following numbers is the largest: ([\d, ]+)/i);
    if (largestMatch) {
      const numbers = largestMatch[1]
        .split(',')
        .map(n => parseInt(n.trim(), 10))
        .filter(n => !isNaN(n));
      if (numbers.length > 0) {
        return `${Math.max(...numbers)}`;
      }
    }
  const lowerQuery = query.toLowerCase();

  // Handle 'what is X plus Y' queries
  const plusMatch = lowerQuery.match(/what is (\d+) plus (\d+)/);
  if (plusMatch) {
    const x = parseInt(plusMatch[1], 10);
    const y = parseInt(plusMatch[2], 10);
    return `${x + y}`;
  }

  if (lowerQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerQuery.includes("name")) {
    return "MichaelYan34";
  }

  if (lowerQuery.includes("andrew id")) {
    return "tingxiay";
  }

  return "";
}
