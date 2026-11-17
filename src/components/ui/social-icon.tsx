import type { SocialLink } from "@/content/footer";

/** Icônes sociales monochromes (currentColor), 28 px. */
const paths: Record<SocialLink["id"], string> = {
  facebook:
    "M5 3h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-6.2v-8.1h2.7l.5-3.2h-3.2V11.600c0-.9.4-1.700 1.800-1.700h1.500V7.100s-1.300-.2-2.600-.2c-2.600 0-4.200 1.600-4.200 4.400v2.400H9.600v3.200h2.700V25H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
  linkedin:
    "M5 3h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm1.900 8.200v8.600h2.800v-8.600H6.900zm1.400-4.100a1.600 1.600 0 1 0 0 3.200 1.600 1.600 0 0 0 0-3.200zm3.100 4.100v8.600h2.800v-4.500c0-1.200.5-1.900 1.500-1.900s1.300.7 1.300 1.800v4.600h2.800v-5.200c0-2.300-1.100-3.600-3-3.600-1.200 0-2 .6-2.400 1.200v-1h-3z",
  instagram:
    "M9 3h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6zm0 2.200A3.800 3.800 0 0 0 5.200 9v10A3.800 3.800 0 0 0 9 22.800h10a3.800 3.800 0 0 0 3.800-3.800V9A3.800 3.800 0 0 0 19 5.200H9zM14 8.800a5.200 5.200 0 1 1 0 10.400 5.200 5.200 0 0 1 0-10.400zm0 2.200a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.400-3.500a1.200 1.200 0 1 1 0 2.400 1.200 1.200 0 0 1 0-2.400z",
};

export default function SocialIcon({ id, className }: { id: SocialLink["id"]; className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      fillRule="evenodd"
      className={className}
    >
      <path d={paths[id]} />
    </svg>
  );
}
