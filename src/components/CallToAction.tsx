import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import ContactForm from './contact/ContactForm'
import { cn } from '@/lib/utils'

interface CtaProps {
    label: string
    buttonClass?: string
}

export default function CallToAction({ label, buttonClass }: CtaProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="cta" className={cn(buttonClass)}>
                    {label}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader className="text-white">
                    <DialogTitle>Get In Touch</DialogTitle>
                </DialogHeader>
                <ContactForm />
            </DialogContent>
        </Dialog>
    )
}
