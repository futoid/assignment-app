import {Montserrat, Lato, Poppins, Figtree} from 'next/font/google';

export const montserrat = Montserrat({
    subsets : ['latin'],
    variable : '--font-montserrat',
});

export const lato = Lato({
    subsets : ['latin'],
    variable : '--font-lato',
    weight : ['400', '700']
});

export const poppins = Poppins({
    subsets : ['latin'],
    variable : '--font-poppins',
    weight : ['400', '700']
});

export const figtree = Figtree({
    subsets : ['latin'],
    variable : '--font-figtree',
})



