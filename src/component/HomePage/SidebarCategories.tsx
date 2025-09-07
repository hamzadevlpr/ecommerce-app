import { Menu } from 'lucide-react';
import React from 'react'

export default function SidebarCategories() {
    const categories = [
        "Orthodontics",
        "Equipments",
        "Disposables",
        "Oral-Surgery",
        "Periodontics",
        "Prostodontics",
        "Restorative",
        "Endodontics",
        "Others"
    ];
    const randomColors = [
        "bg-[#14a085]", "bg-[#e67e22]", "bg-[#8e44ad]", "bg-[#3498db]", "bg-[#e74c3c]", "bg-[#2ecc71]", "bg-[#f39c12]", "bg-[#1abc9c]", "bg-[#9b59b6]"
    ];
    return (
        <div className="lg:col-span-3 col-span-12 bg-white rounded-lg">
            <div className="flex gap-2 items-center mb-4">
                <Menu />
                <h2 className="font-medium text-sm">Browse Categories</h2>
            </div>
            <ul className="">
                {categories.map((cat, i) => (
                    <li
                        key={cat}
                        className={`text-white text-sm font-medium px-6 py-2 cursor-pointer hover:opacity-80 transition ${randomColors[i]}`}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    )
}
