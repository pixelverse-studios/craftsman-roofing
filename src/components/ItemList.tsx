import { cn } from '@/lib/utils'

export default function ItemList({
    items,
    itemClass,
    imgClass
}: {
    items: string[] | JSX.Element[]
    itemClass?: string
    imgClass?: string
}) {
    return (
        <ul className="space-y-4">
            {items.map((item, id) => (
                <li
                    key={id}
                    className={cn('grid grid-cols-[2rem_1fr] gap-4', itemClass)}
                >
                    <img
                        src="/media/icons/RoofTop_Icon.svg"
                        alt="roof-top icon"
                        className={cn('h-8 w-8', imgClass)}
                    />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}
