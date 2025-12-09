// lib/constants.ts

export type Event = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};

export const events: Event[] = [
    {
        image: "/images/event1.png",
        title: "Next.js Global Summit 2025",
        slug: "nextjs-global-summit-2025",
        location: "San Francisco, USA",
        date: "2025-07-12",
        time: "09:00",
    },
    {
        image: "/images/event2.png",
        title: "Tokyo AI Hackathon",
        slug: "tokyo-ai-hackathon-2025",
        location: "Tokyo, Japan",
        date: "2025-08-03",
        time: "10:00",
    },
    {
        image: "/images/event3.png",
        title: "React Developers Meetup",
        slug: "react-developers-meetup",
        location: "Berlin, Germany",
        date: "2025-06-25",
        time: "18:30",
    },
    {
        image: "/images/event4.png",
        title: "Cloud & DevOps Conference",
        slug: "cloud-devops-conference",
        location: "London, UK",
        date: "2025-09-10",
        time: "11:00",
    },
    {
        image: "/images/event5.png",
        title: "Open Source Community Day",
        slug: "open-source-community-day",
        location: "Online",
        date: "2025-05-30",
        time: "16:00",
    },
];
