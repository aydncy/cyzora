import './globals.css';

export const metadata = {
  title: 'OVWI',
  description: 'Webhook verification infrastructure',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
