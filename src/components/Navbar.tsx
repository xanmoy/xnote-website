import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between">
                <Link href="/">
                    <span className="text-white font-bold">XNote</span>
                </Link>
                <div className="flex space-x-4">
                    <Link href="#features">
                        <span className="text-gray-300">Features</span>
                    </Link>
                    <Link href="#installation">
                        <span className="text-gray-300">Installation</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
