var unidades = {
    'Longitud': {
        'grupo': 'Longitud',
        'unidades': [
            'kilometro',
            'metro',
            'centimetro',
            'milimetro',
            'micrometro',
            'nanometro',
            'milla',
            'yarda',
            'pie',
            'pulgada'
        ],
        'equivalencias': {
            'kilometro': {
                'kilometro': 1,
                'metro': 1000,
                'centimetro': 100000,
                'milimetro': 1e+6,
                'micrometro': 1e+9,
                'nanometro': 1e+12,
                'milla': 0.621371,
                'yarda': 1093.61,
                'pie': 3280.84,
                'pulgada': 39370.1
            },
            'metro': {
                'kilometro': 0.001,
                'metro': 1,
                'centimetro': 100,
                'milimetro': 1000,
                'micrometro': 1e+6,
                'nanometro': 1e+9,
                'milla': 0.000621371,
                'yarda': 1.09361,
                'pie': 3.28084,
                'pulgada': 39.3701
            },
            'centimetro': {
                'kilometro': 1e-5,
                'metro': 0.01,
                'centimetro': 1,
                'milimetro': 10,
                'micrometro': 10000,
                'nanometro': 1e+7,
                'milla': 6.2137e-6,
                'yarda': 0.0109361,
                'pie': 0.0328084,
                'pulgada': 0.393701
            },
            'milimetro': {
                'kilometro': 1e-6,
                'metro': 0.001,
                'centimetro': 0.1,
                'milimetro': 1,
                'micrometro': 1000,
                'nanometro': 1e+6,
                'milla': 6.2137e-7,
                'yarda': 0.00109361,
                'pie': 0.00328084,
                'pulgada': 0.0393701
            },
            'micrometro': {
                'kilometro': 1e-9,
                'metro': 1e-6,
                'centimetro': 1e-4,
                'milimetro': 0.001,
                'micrometro': 1,
                'nanometro': 1000,
                'milla': 6.2137e-10,
                'yarda': 1.0936e-6,
                'pie': 3.2808e-6,
                'pulgada': 3.937e-5
            },
            'nanometro': {
                'kilometro': 1e-12,
                'metro': 1e-9,
                'centimetro': 1e-7,
                'milimetro': 1e-6,
                'micrometro': 0.001,
                'nanometro': 1,
                'milla': 6.2137e-13,
                'yarda': 1.0936e-9,
                'pie': 3.2808e-9,
                'pulgada': 3.937e-8
            },
            'milla': {
                'kilometro': 1.60934,
                'metro': 1609.34,
                'centimetro': 160934,
                'milimetro': 1.609e+6,
                'micrometro': 1.609e+9,
                'nanometro': 1.609e+12,
                'milla': 1,
                'yarda': 1760,
                'pie': 5280,
                'pulgada': 63360
            },
            'yarda': {
                'kilometro': 0.0009144,
                'metro': 0.9144,
                'centimetro': 91.44,
                'milimetro': 914.4,
                'micrometro': 914400,
                'nanometro': 9.144e+8,
                'milla': 0.000568182,
                'yarda': 1,
                'pie': 3,
                'pulgada': 36
            },
            'pie': {
                'kilometro': 0.0003048,
                'metro': 0.3048,
                'centimetro': 30.48,
                'milimetro': 304.8,
                'micrometro': 304800,
                'nanometro': 3.048e+8,
                'milla': 0.000189394,
                'yarda': 0.333333,
                'pie': 1,
                'pulgada': 12
            },
            'pulgada': {
                'kilometro': 2.54e-5,
                'metro': 0.0254,
                'centimetro': 2.54,
                'milimetro': 25.4,
                'micrometro': 25400,
                'nanometro': 2.54e+7,
                'milla': 1.5783e-5,
                'yarda': 0.0277778,
                'pie': 0.0833333,
                'pulgada': 1
            }
        }
    },
    'Masa': {
        'grupo': 'Masa',
        'unidades': [
            'tonelada',
            'kilogramo',
            'gramo',
            'miligramo',
            'microgramo',
            'tonelada larga',
            'tonelada corta',
            'stone',
            'libra',
            'onza'
        ],
        'equivalencias': {
            'tonelada': {
                'tonelada': 1,
                'kilogramo': 1000,
                'gramo': 1e+6,
                'miligramo': 1e+9,
                'microgramo': 1e+12,
                'tonelada larga': 0.984207,
                'tonelada corta': 1.10231,
                'stone': 157.473,
                'libra': 2204.62,
                'onza': 35274
            },
            'kilogramo': {
                'tonelada': 0.001,
                'kilogramo': 1,
                'gramo': 1000,
                'miligramo': 1e+6,
                'microgramo': 1e+9,
                'tonelada larga': 0.000984207,
                'tonelada corta': 0.00110231,
                'stone': 0.157473,
                'libra': 2.20462,
                'onza': 35.274
            },
            'gramo': {
                'tonelada': 1e-6,
                'kilogramo': 0.001,
                'gramo': 1,
                'miligramo': 1000,
                'microgramo': 1e+6,
                'tonelada larga': 9.8421e-7,
                'tonelada corta': 1.1023e-6,
                'stone': 0.000157473,
                'libra': 0.00220462,
                'onza': 0.035274
            },
            'miligramo': {
                'tonelada': 1e-9,
                'kilogramo': 1e-6,
                'gramo': 0.001,
                'miligramo': 1,
                'microgramo': 1000,
                'tonelada larga': 9.8421e-10,
                'tonelada corta': 1.1023e-9,
                'stone': 1.5747e-7,
                'libra': 2.2046e-6,
                'onza': 3.5274e-5
            },
            'microgramo': {
                'tonelada': 1e-12,
                'kilogramo': 1e-9,
                'gramo': 1e-6,
                'miligramo': 0.001,
                'microgramo': 1,
                'tonelada larga': 9.8421e-13,
                'tonelada corta': 1.1023e-12,
                'stone': 1.5747e-10,
                'libra': 2.2046e-9,
                'onza': 3.5274e-8
            },
            'tonelada larga': {
                'tonelada': 1.01605,
                'kilogramo': 1016.05,
                'gramo': 1.016e+6,
                'miligramo': 1.016e+9,
                'microgramo': 1.016e+12,
                'tonelada larga': 1,
                'tonelada corta': 1.12,
                'stone': 160,
                'libra': 2240,
                'onza': 35840
            },
            'tonelada corta': {
                'tonelada': 0.907185,
                'kilogramo': 907.185,
                'gramo': 907185,
                'miligramo': 9.072e+8,
                'microgramo': 9.072e+11,
                'tonelada larga': 0.892857,
                'tonelada corta': 1,
                'stone': 142.857,
                'libra': 2000,
                'onza': 32000
            },
            'stone': {
                'tonelada': 0.00635029,
                'kilogramo': 6.35029,
                'gramo': 6350.29,
                'miligramo': 6.35e+6,
                'microgramo': 6.35e+9,
                'tonelada larga': 0.00625,
                'tonelada corta': 0.007,
                'stone': 1,
                'libra': 14,
                'onza': 224
            },
            'libra': {
                'tonelada': 0.000453592,
                'kilogramo': 0.453592,
                'gramo': 453.592,
                'miligramo': 453592,
                'microgramo': 4.536e+8,
                'tonelada larga': 0.000446429,
                'tonelada corta': 0.0005,
                'stone': 0.0714286,
                'libra': 1,
                'onza': 16
            },
            'onza': {
                'tonelada': 2.835e-5,
                'kilogramo': 0.0283495,
                'gramo': 28.3495,
                'miligramo': 28349.5,
                'microgramo': 2.835e+7,
                'tonelada larga': 2.7902e-5,
                'tonelada corta': 3.125e-5,
                'stone': 0.00446429,
                'libra': 0.0625,
                'onza': 1
            }
        }
    },
    'Volumen': {
        'grupo': 'Volumen',
        'unidades': [
            'metro cubico',
            'litro',
            'mililitro',
            'pie cubico',
            'pulgada cubica'
        ],
        'equivalencias': {
            'metro cubico': {
                'metro cubico': 1,
                'litro': 1000,
                'mililitro': 1e+6,
                'pie cubico': 35.3147,
                'pulgada cubica': 61023.7
            },
            'litro': {
                'metro cubico': 0.001,
                'litro': 1,
                'mililitro': 1000,
                'pie cubico': 0.0353147,
                'pulgada cubica': 61.0237
            },
            'mililitro': {
                'metro cubico': 1e-6,
                'litro': 0.001,
                'mililitro': 1,
                'pie cubico': 3.5315e-5,
                'pulgada cubica': 0.0610237
            },
            'pie cubico': {
                'metro cubico': 0.0283168,
                'litro': 28.3168,
                'mililitro': 28316.8,
                'pie cubico': 1,
                'pulgada cubica': 1728
            },
            'pulgada cubica': {
                'metro cubico': 1.6387e-5,
                'litro': 0.0163871,
                'mililitro': 16.3871,
                'pie cubico': 0.000578704,
                'pulgada cubica': 1
            }
        }
    },
    'Area': {
        'grupo': 'Area',
        'unidades': [
            'kilometro cuadrado',
            'metro cuadrado',
            'milla cuadrada',
            'yarda cuadrada',
            'pie cuadrado',
            'pulgada cuadrada',
            'hectarea',
            'acre'
        ],
        'equivalencias': {
            'kilometro cuadrado': {
                'kilometro cuadrado': 1,
                'metro cuadrado': 1e+6,
                'milla cuadrada': 0.386102,
                'yarda cuadrada': 1.196e+6,
                'pie cuadrado': 1.076e+7,
                'pulgada cuadrada': 1.55e+9,
                'hectarea': 100,
                'acre': 247.105
            },

            'metro cuadrado': {
                'kilometro cuadrado': 1e-6,
                'metro cuadrado': 1,
                'milla cuadrada': 3.861e-7,
                'yarda cuadrada': 1.19599,
                'pie cuadrado': 10.7639,
                'pulgada cuadrada': 1550,
                'hectarea': 1e-4,
                'acre': 0.000247105
            },

            'milla cuadrada': {
                'kilometro cuadrado': 2.58999,
                'metro cuadrado': 2.59e+6,
                'milla cuadrada': 1,
                'yarda cuadrada': 3.098e+6,
                'pie cuadrado': 2.788e+7,
                'pulgada cuadrada': 4.014e+9,
                'hectarea': 258.999,
                'acre': 640
            },

            'yarda cuadrada': {
                'kilometro cuadrado': 8.3613e-7,
                'metro cuadrado': 0.836127,
                'milla cuadrada': 3.2283e-7,
                'yarda cuadrada': 1,
                'pie cuadrado': 9,
                'pulgada cuadrada': 1296,
                'hectarea': 8.3613e-5,
                'acre': 0.000206612
            },

            'pie cuadrado': {
                'kilometro cuadrado': 9.2903e-8,
                'metro cuadrado': 0.092903,
                'milla cuadrada': 3.587e-8,
                'yarda cuadrada': 0.111111,
                'pie cuadrado': 1,
                'pulgada cuadrada': 144,
                'hectarea': 9.2903e-6,
                'acre': 2.2957e-5
            },

            'pulgada cuadrada': {
                'kilometro cuadrado': 6.4516e-10,
                'metro cuadrado': 0.00064516,
                'milla cuadrada': 2.491e-10,
                'yarda cuadrada': 0.000771605,
                'pie cuadrado': 0.00694444,
                'pulgada cuadrada': 1,
                'hectarea': 6.4516e-8,
                'acre': 1.5942e-7
            },

            'hectarea': {
                'kilometro cuadrado': 0.01,
                'metro cuadrado': 10000,
                'milla cuadrada': 0.00386102,
                'yarda cuadrada': 11959.9,
                'pie cuadrado': 107639,
                'pulgada cuadrada': 1.55e+7,
                'hectarea': 1,
                'acre': 2.47105
            },

            'acre': {
                'kilometro cuadrado': 0.00404686,
                'metro cuadrado': 4046.86,
                'milla cuadrada': 0.0015625,
                'yarda cuadrada': 4840,
                'pie cuadrado': 43560,
                'pulgada cuadrada': 6.273e+6,
                'hectarea': 0.404686,
                'acre': 1
            }
        }
    }
};