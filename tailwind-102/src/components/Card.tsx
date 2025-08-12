import React from 'react'

export type Coffee = {
    id: number;
    title: string;
    description: string;
    ingredients: string | string[];
    image: string;
}
export type Props = {
    kahve: Coffee;
}

const Card = ({ kahve }: Props) => {
    const ingredients = typeof kahve.ingredients === "string" ? kahve.ingredients.split(",") : kahve.ingredients;

    return (
        <div>
            <div className="flex flex-col m-4 shadow rounded-xl p-4 bg-white max-w-96">
                <img className="rounded-t-xl" src={kahve.image} />
                <div className="flex flex-col p-4">
                    <span className="text-xl">{kahve.title}</span>
                    <span className="text-base text-slate-500">{kahve.description}</span>
                    <span className="flex gap-4">{ingredients.map((x) => (
                        <span className="text-orange-500 bg-orange-100 px-2 py-0 rounded border-orange-500 border">{x}</span>))}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
