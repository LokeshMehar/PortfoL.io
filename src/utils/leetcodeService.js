// This service fetches LeetCode statistics using a free API endpoint
// You can replace it with your own API or backend service if needed

export const fetchLeetCodeStats = async (username) => {
  try {
    // There are several public APIs available, but they may change or be rate-limited
    // One commonly used endpoint:
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    const data = await response.json();
    
    if (data && !data.status) {
      return {
        totalSolved: data.totalSolved,
        easy: data.easySolved,
        medium: data.mediumSolved,
        hard: data.hardSolved,
        acceptanceRate: data.acceptanceRate,
        ranking: data.ranking
      };
    }
    
    throw new Error('Failed to fetch LeetCode stats');
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    
    // Return fallback data if the API fails
    return {
      totalSolved: 90,
      easy: 50,
      medium: 30,
      hard: 10,
      acceptanceRate: "65.8%",
      ranking: 100000
    };
  }
};

// If you can't use the API or want a backup option, use static data
export const getStaticLeetCodeStats = () => {
  return {
    totalSolved: 90,    // Replace with your actual numbers
    easy: 50,
    medium: 30,
    hard: 10,
    acceptanceRate: "65.8%",
    ranking: 100000
  };
};