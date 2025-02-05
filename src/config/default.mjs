export default {
    rateLimit: {
        defaultAlgorithm: "fixed",
        tiers: {
            free: {
                limit: 5,
                windowMs: 60000
            },
            premium: {
                limit: 20,
                windowMs: 60000
            },
            admin: {
                limit: 50,
                windowMs: 60000
            }
        },
        redisPersistence: true,
        logging: true,
        customMessage: "Too many requests. Please slow down."
    }
};

// final prompt

Half-Hackathon 2025: A Journey of Learning & Growth 🚀



💡 8 hours of coding, brainstorming, and pushing our limits—Team Infinity took on the challenge of building an API Rate Limiting System, competing against degree students and higher-education participants!

Although we weren’t the winners, we built something powerful and competed at an impressive level! 🔥



🎯 What We Built: SpeedGuard (API Rate Limiting Library)

🔹 A robust rate-limiting middleware for Node.js & Express.js

🔹 Supports multiple algorithms: Fixed Window, Sliding Window, Token Bucket, Leaky Bucket

🔹 Redis-powered for high performance & scalability

🔹 Exponential backoff to prevent abusive retries

🔹 Fully customizable & easy to integrate



💡 Key Learnings

✅ Solving real-world security challenges

✅ Optimizing API performance under load

✅ Collaborating effectively under tight deadlines



💬 Open to feedback and collaboration!

A huge thanks to Rajkot Information Technology Association and B H Gardi College of Engineering & Technology for hosting such an amazing event and to my incredible teammates Krish Bhensdadia, Krrish Chandegara, Milan Gohil and Niranjan Maru  for their dedication! 💙


📢 Call to Action:

If you’re building scalable APIs and need a robust rate-limiting solution. We’re open to feedback, collaboration, and new ideas. Let’s connect and build something amazing together!



#Hackathon #CyberSecurity #APIRateLimiting #TeamInfinity #Learning #Growth #Developers #TechCommunity