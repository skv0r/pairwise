import Image from "next/image";
import { getSkillMeta } from "./skillConfig";
import styles from "./SkillTags.module.css";

type SkillTagsProps = Readonly<{
    skills: string[];
    className?: string;
}>;

const SkillTags = ({ skills, className }: SkillTagsProps) => {
    const listClass = className
        ? `${styles.list} ${className}`
        : styles.list;

    return (
        <ul className={listClass}>
            {skills.map((skill) => {
                const { category, icon } = getSkillMeta(skill);

                return (
                    <li
                        key={skill}
                        className={`${styles.tag} ${styles[`tag_category_${category}`]}`}
                    >
                        <Image
                            src={icon}
                            alt=""
                            width={14}
                            height={14}
                            className={styles.tag__icon}
                            aria-hidden
                        />
                        <span className={styles.tag__label}>{skill}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default SkillTags;
