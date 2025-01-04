interface Project {
    name: string;
    description: string;
    tech: string[];
    link?: string;
    // image: string;
}

export const projects: Project[] = [
    {
        name: "Smart Kantin",
        description: "Food Order App for Canteen system using Android app",
        tech: ["Android", "Kotlin", "PHP", "Laravel", "Midtrans"],
        // link: "https://github.com/yourusername/smart-home",
        // image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Kamus Gen-Z",
        description: "Gen-Z Dictionary system with Android app",
        tech: ["Android", "Jetpack Compose", "Kotlin"],
        link: "https://github.com/GoodGuyzaxx/Apps-Kamus-GenZ",
        // image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "wE'Sc (WildExplorer's Companion)",
        description: "an app designed to help explorers and nature lovers in their experiences in the wild",
        tech: ["Android", "Kotlin", "Tensor-Flow Lite"],
        link: "https://github.com/CH2-PS061/WeScApp",
        // image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
    }
];