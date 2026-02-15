"use client";

import {useEffect, useState} from "react";
import {siteContent} from "@/data/content";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BookText, CalendarDays, ExternalLink} from "lucide-react";
import {Spinner} from "@/components/ui/spinner";

interface MediumPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    categories: string[];
}

const MEDIUM_USERNAME = siteContent.contact.medium.split("@")[1];
const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`;

export function Blog() {
    const [posts, setPosts] = useState<MediumPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(6);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch blog posts");
                }
                const data = await response.json();
                if (data.status === "ok") {
                    setPosts(data.items);
                } else {
                    throw new Error(data.message || "Failed to parse blog posts");
                }
            } catch (err) {
                console.error("Error fetching Medium posts:", err);
                setError("Could not load blog posts. Please check back later.");
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return (
        <section id="blog" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Spinner size="lg"/>
                        <span className="ml-3 text-lg text-muted-foreground">Loading posts...</span>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-red-500 mb-4">{error}</p>
                        <Button variant="outline" onClick={() => window.location.reload()}>
                            Try Again
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.slice(0, visibleCount).map((post) => (
                                <Card key={post.guid}
                                      className="flex flex-col h-full hover:shadow-md transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                                        <CardDescription className="flex items-center gap-2">
                                            <CalendarDays className="h-4 w-4"/>
                                            {new Date(post.pubDate).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <div
                                            className="text-muted-foreground text-sm line-clamp-3 mb-4"
                                            dangerouslySetInnerHTML={{
                                                __html: post.description.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...'
                                            }}
                                        />
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="outline" className="w-full group" asChild>
                                            <a href={post.link} target="_blank" rel="noopener noreferrer">
                                                Read More
                                                <ExternalLink
                                                    className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>

                        {visibleCount < posts.length && (
                            <div className="mt-12 flex justify-center">
                                <Button onClick={loadMore} size="lg">
                                    Load More Posts
                                </Button>
                            </div>
                        )}
                    </>
                )}

                <div className="mt-12 text-center">
                    <Button variant="ghost" asChild>
                        <a href={siteContent.contact.medium} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-2">
                            <BookText className="h-5 w-5"/>
                            View all stories on Medium
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
