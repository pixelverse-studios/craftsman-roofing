export {}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'gmp-place-autocomplete': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >
        }
    }

    interface HTMLElementTagNameMap {
        'gmp-place-autocomplete': HTMLElement
    }
}
