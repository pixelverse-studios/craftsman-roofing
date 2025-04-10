import { cn } from '@/lib/utils'

const FullHeightRedBackgroundImg = ({ className }: { className: string }) => (
    <div
        className={cn('absolute inset-0 bg-cover bg-center z-[-1]', className)}
        style={{ backgroundImage: 'url("/media/BG_Red.png")' }}
    >
        <div className="absolute inset-0" />
    </div>
)

export default FullHeightRedBackgroundImg
