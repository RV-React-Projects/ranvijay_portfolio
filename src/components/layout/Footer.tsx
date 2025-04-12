import moment from 'moment';

export default function Footer() {
  const currentYear = moment().year();

  return (
    <footer className="w-full text-center py-6 border-t border-gray-300 mt-10 bg-gray-900">
      <p className="text-sm text-gray-400">
        © {currentYear} Ranvijay Kumar Singh. All rights reserved!
      </p>
    </footer>
  );
}
