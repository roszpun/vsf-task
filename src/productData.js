export default {
    title: "Tiffany Fitness Tee",
    price: {
        value: 34.44,
        unit: "$"
    },
    id: "WS09",
    images: {
        red: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws09-red_main.jpg',
        blue: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws09-blue_main.jpg',
        white: 'https://demo.storefrontcloud.io/img/600/744/resize/w/s/ws09-white_main.jpg'
    },
    variants: {
        colors: {
            type: "color",
            title: "Color",
            values: [{
                    value: "blue",
                    text: "Blue"
                },
                {
                    value: "red",
                    text: "Red"
                },
                {
                    value: "white",
                    text: "White"
                }
            ]
        },
        sizes: {
            type: "size",
            title: "Size",
            values: [{
                    value: "xs",
                    text: "XS"
                }, {
                    value: "s",
                    text: "S"
                },
                {
                    value: "m",
                    text: "M",
                },
                {
                    value: "l",
                    text: "L"
                },
                {
                    value: "xl",
                    text: "XL"
                }
            ]
        }
    }
}