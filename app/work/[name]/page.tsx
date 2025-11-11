import { Work } from '@/app/lib/definitions';
import { TechIcon } from '@/app/ui/TechIcons';
export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params; // 👈 precisa resolver a promise
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/works/works.json`);
  const works: Work[] = await res.json();
  const work = works.find((work) => work.nome === decodeURIComponent(name));

  return (
    <main className="flex flex-col px-12 pt-20">
      <h1 className="text-2xl">/trabalhos/{work?.nome}</h1>
      <div className="p-8">
        <img className="rounded-lg" src={baseUrl + work?.coverImage} alt="" />
      </div>
      <div>
        <div className="inline-flex items-center gap-2 rounded-md border border-zinc-500 p-4 w-auto">
          <h2 className="whitespace-nowrap font-semibold">Skills:</h2>
          <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide">
            {work.techs.map((tech) => (
              <div key={tech} className="shrink-0">
                <TechIcon name={tech} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4">{work?.description}</p>
      <div className="mt-4 flex flex-col gap-2">
        <span>Inicio: {work?.inicio}</span>
        <span>Fim: {work?.fim}</span>
        <span>Cargo: {work?.cargo}</span>
        <span>Local: {work?.empresa}</span>
      </div>
    </main>
  );
}
