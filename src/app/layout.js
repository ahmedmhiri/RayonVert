import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Green Factory - Solar Panel Business',
  description: 'Renewable energy solutions with solar panels and wind turbines',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}