import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold">Erdogan Kervanli's Interactive CV</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-6">
                {children}
            </main>
        </div>
    );
};

export default Layout;
