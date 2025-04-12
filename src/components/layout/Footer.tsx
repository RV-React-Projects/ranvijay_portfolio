'use client';
import moment from 'moment';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Footer() {
  const currentYear = moment().year();
  const segment = useSelectedLayoutSegment();
  const isNotFound = segment === '/_not-found';

  return isNotFound ? null : (
    <footer className="w-full text-center py-6 border-t border-gray-300 bg-gray-900">
      <p className="text-sm text-gray-400">
        © {currentYear} Ranvijay Kumar Singh. All rights reserved!
      </p>
    </footer>
  );
}
