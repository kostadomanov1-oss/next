import { type TeamMember, teamMemberSchema } from "@/schemas/team";

const rawTeam: TeamMember[] = [
  {
    id: "1",
    name: { ru: "Иван Смирнов", en: "Ivan Smirnov" },
    role: { ru: "Генеральный директор", en: "CEO" },
    image: "/images/team-1.jpg",
  },
  {
    id: "2",
    name: { ru: "Андрей Волков", en: "Andrey Volkov" },
    role: { ru: "Главный инженер", en: "Chief Engineer" },
    image: "/images/team-2.jpg",
  },
  {
    id: "3",
    name: { ru: "Елена Новикова", en: "Elena Novikova" },
    role: { ru: "Руководитель проектов", en: "Project Manager" },
    image: "/images/team-3.jpg",
  },
];

export const team: TeamMember[] = rawTeam.map((t) =>
  teamMemberSchema.parse(t),
);
