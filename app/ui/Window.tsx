import { ReactNode } from 'react';

export function Window({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="bg-brand-gray-800 w-full text-brand-white p-0 max-w-md md:max-w-xl mx-auto border border-brand-gray-600 rounded shadow-">
      <div className="relative flex items-center justify-center p-2 border-b border-brand-gray-300 bg-brand-gray-700 rounded-t-md">
        <p className="text-sm">
          <span className="inline sm:inline">~/guest/</span>
          {title}
        </p>
      </div>

      <div className="mt-2 p-2">{children}</div>
    </div>
  );
}
