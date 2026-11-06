export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-600">
      <p>© {new Date().getFullYear()} Abdul Haleem. All rights reserved.</p>
      <p className="mt-1">
        Designed & Built by{" "}
        <span className="text-accent font-medium">Abdul Haleem</span>
      </p>
    </footer>
  );
}