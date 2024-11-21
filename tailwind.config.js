tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                '2xs': '286px',
            },
            height: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '28': '7.5rem',
            },
            colors: {
                'light': '#e2e8f0',
                'dark': '#171717',
                'bg-red': '#b91c1c',
                'border-light': '#404040',
                'border-dark': '#d4d4d4',
                'card-bg-dark': '#262626',
                // 'card-bg-light': '#d5dbe2',
            },
            // boxShadow: {
            //     'shadow-light': '0 1px 3px 0 rgb(255 255 255 / 0.1), 0 1px 2px -1px rgb(255 255 255 / 0.1)',
            // }
        }
    }
}