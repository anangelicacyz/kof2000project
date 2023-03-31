// ⬅➡⬆⬇↗↘↙↖↩↪⤴🟠🟡🟢🔵🔴

const kofHeroes =[
    { 
        name: 'K´', 
        team: 'Hero team',
        image: './assets/1kof-2000-k.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Spot Pile', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'KneeStrike', instructions: ' ⬅/➡ + 🔵(H)'}
            ], 
            extramoves:[
                {name: 'One inch', instructions: '➡ + 🟡(L)',},
                {name: 'Knee Asssault', instructions: '➡ +🟢 (L)(Overhead)',},

            ],
            desperationMoves: [
                {name: 'Eine Trigger', instructions: '⬇↘➡ + 🟡(L)🔴(H)',},
                {name: 'Second shoot', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Second shell', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Eine Trigger Blackout', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Crow Bite', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Tsuika Kougeki', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Minute Spike', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Blackout', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Heat Drive', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Chain Driver', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Chain Driver', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Narrow spike', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Narrow spike', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Maxima', 
        team: 'Hero Team',
        image: './assets/2kof-2000-maxima.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Vanessa', 
        team: 'Hero Team',
        image: './assets/3kof-2000-vanessa.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Ramon', 
        team: 'Hero Team',
        image: './assets/4kof-2000-ramon.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Benimaru', 
        team: 'Hero Team',
        image: './assets/5kof-2000-benimaru.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Shingo Yabuki', 
        team: 'Hero Team',
        image: './assets/6kof-2000-shingo-yabuki.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Lin', 
        team: 'Hero Team',
        image: './assets/7kof-2000-lin.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Seth', 
        team: 'Hero Team',
        image: './assets/8kof-2000-seth.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Ryo Sakazaki', 
        team: 'Hero Team',
        image: './assets/9kof-2000-ryo-sakazaki.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Robert Garcia', 
        team: 'Hero Team',
        image: './assets/10kof-2000-robert-garcia.png',
        description: {
            birthplace: 'Mexico',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Takuma Sakazaki', 
        team: 'Hero Team',
        image: './assets/11kof-2000-takuma-sakazaki.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'King', 
        team: 'Hero Team',
        image: './assets/12kof-2000-king.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Leona Heidern', 
        team: 'Hero Team',
        image: './assets/13kof-2000-leona-heidern.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Ralf', 
        team: 'Hero Team',
        image: './assets/14kof-2000-ralf.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'clark', 
        team: 'Hero Team',
        image: './assets/15kof-2000-clark.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Whip', 
        team: 'Hero Team',
        image: './assets/16kof-2000-whip.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Terry Bogard', 
        team: 'Hero Team',
        image: './assets/17kof-2000-terry-bogard.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Andy Bogard', 
        team: 'Hero Team',
        image: './assets/18kof-2000-andy-bogard.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Joe Higashi', 
        team: 'Hero Team',
        image: './assets/19kof-2000-joe-higashi.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Blue Mary', 
        team: 'Hero Team',
        image: './assets/20kof-2000-blue-mary.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Kim Kaphwan', 
        team: 'Hero Team',
        image: './assets/21kof-2000-kim-kaphwan.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Chang', 
        team: 'Hero Team',
        image: './assets/22kof-2000-chang.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Choi', 
        team: 'Hero Team',
        image: './assets/23kof-2000-choi.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Jhun', 
        team: 'Hero Team',
        image: './assets/24kof-2000-jhun.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Mai shiranui', 
        team: 'Hero Team',
        image: './assets/25kof-2000-mai-shiranui.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Yuri Sakazaki', 
        team: 'Hero Team',
        image: './assets/26kof-2000-yuri-sakazaki.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Kasumi Todoh', 
        team: 'Hero Team',
        image: './assets/27kof-2000-kasumi-todoh.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Hinako', 
        team: 'Hero Team',
        image: './assets/28kof-2000-hinako.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Athena Asamiya', 
        team: 'Hero Team',
        image: './assets/29kof-2000-athena-asamiya.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Sie Kensou', 
        team: 'Hero Team',
        image: './assets/30kof-2000-sie-kensou.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Chin Gentsai', 
        team: 'Hero Team',
        image: './assets/31kof-2000-chin-gentsai.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Bao', 
        team: 'Hero Team',
        image: './assets/32kof-2000-bao.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Kyo Kusanagi', 
        team: 'Hero Team',
        image: './assets/33kof-2000-kyo-kusanagi.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Iori Yagami', 
        team: 'Hero Team',
        image: './assets/34kof-2000-iori-yagami.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Kula Diamond', 
        team: 'Hero Team',
        image: './assets/35kof-2000-kula-diamond.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
    { 
        name: 'Zero', 
        team: 'Hero Team',
        image: './assets/36kof-2000-zero.png',
        description: {
            birthplace: 'Desconocido',
            heigthWeight: '1.83m - 65kg',
            Birthday: 'Desconocido',
            figthStyle: 'Lucha violenta' 
        },
        moves: {
            releases: [
                {name: 'Dynamite Drop', instructions: '⬅/➡ + 🔴(H)'},
                {name: 'Choking Vise', instructions: ' ⬅/➡ + 🔵(H'}
            ], 
            extramoves:[
                {name: 'Mongolian Chop', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M9 Kata Maxima Missile', instructions: '⬅/➡ + 🔴(H)',},

            ],
            desperationMoves: [
                {name: 'M4 Kata Vapor Cannon', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 1: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Double Bomber', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Bulldog Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'System 3: Maxima Scramble', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Centoun Press', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M11 Kata Dangerous Arch', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'M19 kata Blitz Cannon', instructions: '⬅/➡ + 🔴(H)',},

            ],
            superDesperationMoves: [
                {name: 'Bunker buster', instructions: '⬅/➡ + 🔴(H)',},
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            maxSuperdesperationMoves : [
                {name: 'Maxima Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            strikerMove: [
                {name: 'Revenger', instructions: '⬅/➡ + 🔴(H)',},

            ],
            extraStrikeMove: [
                {name: 'Gallows', instructions: '⬅/➡ + 🔴(H)',},

            ]
        }
    },
]

export default kofHeroes
       


