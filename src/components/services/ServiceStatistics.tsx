import { FullHeightRedBackgroundImg } from '../backgroundLayer'

export default function ServiceStatistics({ children }: { children: any }) {
    return (
        <section className="relative h-fit max-w-7xl p-8 mx-auto my-8 bg-white z-[0]">
            <FullHeightRedBackgroundImg className="rounded-xl shadow-xl" />
            <div className="">{children}</div>
        </section>
    )
}
