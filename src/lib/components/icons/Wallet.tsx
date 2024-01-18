import { cn } from "@/lib/utils";

export const Wallet = ({ className }: { className?: string }) => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(`bg-[#25292E] ${className}`)}
    >
      <path
        d="M0.515333 2.25C1.0629 1.76569 1.76898 1.49887 2.5 1.5H11.5C12.2607 1.5 12.9553 1.78333 13.4847 2.25C13.4238 1.76662 13.1885 1.3221 12.8231 0.999883C12.4577 0.677665 11.9872 0.499914 11.5 0.5H2.5C2.0128 0.499914 1.54233 0.677665 1.1769 0.999883C0.811478 1.3221 0.576233 1.76662 0.515333 2.25ZM0.515333 4.25C1.0629 3.76569 1.76898 3.49887 2.5 3.5H11.5C12.2607 3.5 12.9553 3.78333 13.4847 4.25C13.4238 3.76662 13.1885 3.3221 12.8231 2.99988C12.4577 2.67767 11.9872 2.49991 11.5 2.5H2.5C2.0128 2.49991 1.54233 2.67767 1.1769 2.99988C0.811478 3.3221 0.576233 3.76662 0.515333 4.25ZM2.5 4.5C1.96957 4.5 1.46086 4.71071 1.08579 5.08579C0.710714 5.46086 0.5 5.96957 0.5 6.5V10.5C0.5 11.0304 0.710714 11.5391 1.08579 11.9142C1.46086 12.2893 1.96957 12.5 2.5 12.5H11.5C12.0304 12.5 12.5391 12.2893 12.9142 11.9142C13.2893 11.5391 13.5 11.0304 13.5 10.5V6.5C13.5 5.96957 13.2893 5.46086 12.9142 5.08579C12.5391 4.71071 12.0304 4.5 11.5 4.5H9C8.86739 4.5 8.74022 4.55268 8.64645 4.64645C8.55268 4.74022 8.5 4.86739 8.5 5C8.5 5.39782 8.34196 5.77936 8.06066 6.06066C7.77936 6.34196 7.39782 6.5 7 6.5C6.60218 6.5 6.22064 6.34196 5.93934 6.06066C5.65804 5.77936 5.5 5.39782 5.5 5C5.5 4.86739 5.44732 4.74022 5.35355 4.64645C5.25979 4.55268 5.13261 4.5 5 4.5H2.5Z"
        fill="white"
      />
    </svg>
  );
};
