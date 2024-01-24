import { redirect } from "next/navigation";

interface DeleteProps {
  params: {
    id: string;
  };
}

async function fetchTeam(id: string) {
  await fetch(`http://localhost:3333/product/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default async function Delete({ params }: DeleteProps) {
  const res = await fetchTeam(params.id);
  redirect("/");
}
