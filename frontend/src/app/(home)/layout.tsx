import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
    title: "Savour Spire",
    description: "Quality Products",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <div>
                <div className="bg-purple-200 text-center py-2 mb-0">
                    Get 5% off on Purchase of ₹599
                </div>
                <Header />
                {children}
                <Footer />
            </div>
    );
}
