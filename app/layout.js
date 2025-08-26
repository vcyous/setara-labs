import "./globals.css";

export const metadata = {
  title: "Setara Labs - Digital Solutions",
  description: "Your partner in digital transformation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
