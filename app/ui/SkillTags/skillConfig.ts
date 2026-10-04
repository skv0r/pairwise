export type SkillCategory =
    | "javascript"
    | "java"
    | "mobile"
    | "backend"
    | "design"
    | "ml"
    | "devops"
    | "systems"
    | "product";

type SkillMeta = {
    category: SkillCategory;
    icon: string;
};

const skills: Record<string, SkillMeta> = {
    JavaScript: { category: "javascript", icon: "/icons/skills/javascript.svg" },
    TypeScript: { category: "javascript", icon: "/icons/skills/typescript.svg" },
    React: { category: "javascript", icon: "/icons/skills/react.svg" },
    "Next.js": { category: "javascript", icon: "/icons/skills/nextjs.svg" },
    Java: { category: "java", icon: "/icons/skills/java.svg" },
    Spring: { category: "java", icon: "/icons/skills/spring.svg" },
    Kotlin: { category: "mobile", icon: "/icons/skills/kotlin.svg" },
    Swift: { category: "mobile", icon: "/icons/skills/swift.svg" },
    Python: { category: "backend", icon: "/icons/skills/python.svg" },
    Go: { category: "backend", icon: "/icons/skills/go.svg" },
    "C++": { category: "systems", icon: "/icons/skills/cplusplus.svg" },
    ML: { category: "ml", icon: "/icons/skills/tensorflow.svg" },
    UX: { category: "design", icon: "/icons/skills/ux.svg" },
    Figma: { category: "design", icon: "/icons/skills/figma.svg" },
    Product: { category: "product", icon: "/icons/skills/product.svg" },
    DevOps: { category: "devops", icon: "/icons/skills/docker.svg" },
};

const fallback: SkillMeta = {
    category: "backend",
    icon: "/icons/skills/go.svg",
};

export function getSkillMeta(skill: string): SkillMeta {
    return skills[skill] ?? fallback;
}
