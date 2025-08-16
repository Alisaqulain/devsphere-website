import "./globals.css";

export const metadata = {
  title: "Devsphere Solutions",
  description: "We deliver Web, App & CRM solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
