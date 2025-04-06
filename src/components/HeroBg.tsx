export default function HeroBg() {
    return (
        <div
            style={{
                backgroundImage: 'url("/media/home/Hero_BG.png")'
            }}
            className={`absolute inset-0 bg-cover bg-center`}
        >
            <div className="absolute inset-0" />
        </div>
    )
}
