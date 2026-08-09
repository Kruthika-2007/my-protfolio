// src/components/GitHubStats/GitHubStats.jsx

import { useState, useEffect } from 'react';
import './GitHubStats.css';

function GitHubStats() {
    const username = 'Kruthika-2007';

    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchStats() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://api.github.com/users/${username}`
                );

                if (!response.ok) {
                    throw new Error('GitHub profile not found');
                }

                const data = await response.json();
                setStats(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    if (loading) {
        return <p>Loading GitHub Profile...</p>;
    }

    if (error) {
        return (
            <p style={{ color: 'red' }}>
                Error: {error}
            </p>
        );
    }

    if (!stats) {
        return null;
    }

    return (
        <div className="github-stats">

            <img
                src={stats.avatar_url}
                alt="Kruthika GitHub Avatar"
                width="100"
                style={{ borderRadius: '50%' }}
            />

            <div className="stats-info">

                <h3>{stats.name || username}</h3>

                {stats.bio && (
                    <p>{stats.bio}</p>
                )}

                <p>
                    Public Repos:{' '}
                    <strong>{stats.public_repos}</strong>
                </p>

                <p>
                    Followers:{' '}
                    <strong>{stats.followers}</strong>
                </p>

                <p>
                    Following:{' '}
                    <strong>{stats.following}</strong>
                </p>

                {stats.location && (
                    <p>
                        📍 {stats.location}
                    </p>
                )}

                <a
                    href={stats.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View My GitHub →
                </a>

            </div>
        </div>
    );
}

export default GitHubStats;