import { useState, useEffect } from 'react';

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
}

interface CodingStats {
  leetcode: LeetCodeStats;
  geeksforgeeks: {
    totalSolved: number;
    dataStructures: number;
    algorithms: number;
    interviewPrep: number;
    potdStreak: number;
  };
  combinedTotal: number;
  loading: boolean;
  error: string | null;
}

const LEETCODE_API = 'https://leetcode-stats-api.herokuapp.com/rashu1813';

export function useCodingStats(): CodingStats {
  const [stats, setStats] = useState<CodingStats>({
    leetcode: {
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      acceptanceRate: 0,
      ranking: 0,
    },
    geeksforgeeks: {
      totalSolved: 202, // Static for now as GFG doesn't have public API
      dataStructures: 82,
      algorithms: 71,
      interviewPrep: 49,
      potdStreak: 52,
    },
    combinedTotal: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(LEETCODE_API);
        const data = await response.json();
        
        if (data.status === 'success') {
          const leetcodeStats = {
            totalSolved: data.totalSolved || 0,
            easySolved: data.easySolved || 0,
            mediumSolved: data.mediumSolved || 0,
            hardSolved: data.hardSolved || 0,
            acceptanceRate: data.acceptanceRate || 0,
            ranking: data.ranking || 0,
          };

          setStats(prev => ({
            ...prev,
            leetcode: leetcodeStats,
            combinedTotal: leetcodeStats.totalSolved + prev.geeksforgeeks.totalSolved,
            loading: false,
          }));
        } else {
          throw new Error('Failed to fetch LeetCode stats');
        }
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        // Fallback to last known values
        setStats(prev => ({
          ...prev,
          leetcode: {
            totalSolved: 176,
            easySolved: 53,
            mediumSolved: 114,
            hardSolved: 9,
            acceptanceRate: 49.08,
            ranking: 716870,
          },
          combinedTotal: 176 + prev.geeksforgeeks.totalSolved,
          loading: false,
          error: 'Unable to fetch latest stats. Showing last known values.',
        }));
      }
    };

    fetchLeetCodeStats();
    
    // Refresh every 30 minutes
    const interval = setInterval(fetchLeetCodeStats, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return stats;
}