
//starting data
var DATA = {};

DATA.brinleys = [
    {fresh: true},
    {fresh: true},
    {fresh: true}
];


DATA.levels = [
    {
        id: 0,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'You are Captain Brinley of the city guard in Farrax.'},
            {icon: null, text: 'For the past twelve years you have protected the city from many dangers.'},
            {icon: null, text: 'Tonight you walk through the city\'s streets once again.'},
            {icon: null, text: 'A chilling scream breaks the dark silence.'},
            {icon: null, text: 'Rushing down an alley you find a man being devoured by a scaly creature.'},
            {icon: null, text: 'A young girl is cowering against a wall.'},
            {icon: null, text: 'She is still screaming.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'demon-guard.png',
                    start: {x: 1, y: 1}
                }
            ]
        ],
        arena: [[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-ruin2","rot":180,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-roots3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"o-skeleton1","rot":0,"w":false},{"id":"w-brick2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-path1","rot":90,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick1","rot":270,"w":true},{"id":"w-path2","rot":90,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-roots3","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-brick1","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-brick1","rot":180,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-ruin3","rot":270,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}]]
    },
    {
        id: 1,
        dust: '0xaaaaaa',
        lines: [
            {icon: 'brinley', text: 'Be calm, good lass, the beast is dead.'},
            {icon: null, text: 'The girl trembles at your feet, her eyes locked on her father\'s corpse.'},
            {icon: null, text: 'A strange wind carries the torn pedals of the city\'s beautiful Carnial trees.'},
            {icon: 'brinley', text: 'It is as if the air itself is bleeding...'},
            {icon: null, text: 'The beast\'s claw marks are easy to follow in the soft earth.'},
            {icon: null, text: 'You follow them to the old temple.'},
            {icon: null, text: 'You hear fighting from within...'},
            {icon: null, text: 'The priest is being strangled by one of his acolytes!'},
            {icon: 'priest', text: 'Brinley! Help! Ahggkk!'}
        ],
        start: {x: 1, y: 7},
        mobs: [
            [
                {
                    id: 'acolyte.png',
                    start: {x: 2, y: 4}
                }
            ]
        ],
        arena: [[{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":270,"w":true},{"id":"w-brick2","rot":180,"w":true}],[{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"o-rock1","rot":0,"w":false},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick1","rot":180,"w":true}],[{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true}],[{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":270,"w":true},{"id":"o-rock1","rot":90,"w":false},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick2","rot":270,"w":true}],[{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":0,"w":true}],[{"id":"w-brick1","rot":180,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"o-rock1","rot":180,"w":false},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":180,"w":true}],[{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":0,"w":true}],[{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"o-rock1","rot":270,"w":false},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true}],[{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":180,"w":true}]]
    },
    {
        id: 2,
        dust: '0xd83535',
        lines: [
            {icon: 'priest', text: 'Thank you Brinley.'},
            {icon: 'priest', text: 'My acolyte was insane.'},
            {icon: 'priest', text: 'He has performed an ancient ritual of evil.'},
            {icon: 'priest', text: 'A great monster has been awakened.'},
            {icon: 'priest', text: 'It is gathering strength somewhere deep below this temple.'},
            {icon: 'brinley', text: 'I killed a creature...'},
            {icon: 'priest', text: 'That was one of his guardians.'},
            {icon: 'priest', text: 'Quickly! You must kill the others, I hear them outside!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'demon-guard.png',
                    start: {x: 1, y: 3}
                },
                {
                    id: 'demon-guard.png',
                    start: {x: 3, y: 5}
                }
            ]
        ],
        arena: [[{"id":"w-ruin4","rot":270,"w":true},{"id":"w-tile4","rot":0,"w":true},{"id":"w-tile3","rot":0,"w":true},{"id":"w-tile2","rot":0,"w":true},{"id":"w-ruin4","rot":0,"w":true}],[{"id":"o-bush1","rot":0,"w":false},{"id":"w-tile1","rot":0,"w":true},{"id":"w-tile3","rot":90,"w":true},{"id":"w-tile1","rot":90,"w":true},{"id":"o-bush2","rot":0,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-tile2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-tile4","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-tile3","rot":180,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"o-bush1","rot":270,"w":false},{"id":"w-tile1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-tile2","rot":270,"w":true},{"id":"w-tile3","rot":0,"w":true},{"id":"w-tile4","rot":90,"w":true},{"id":"w-tile4","rot":180,"w":true},{"id":"w-tile1","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"o-bush2","rot":180,"w":false},{"id":"w-tile3","rot":270,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-tile2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}]]
    },
    {
        id: 3,
        dust: '0xd83535',
        lines: [
            {icon: 'priest', text: 'You must brace yourself Brinley.'},
            {icon: 'priest', text: 'All manner of evil will be drawn here soon.'},
            {icon: 'brinley', text: 'Can we not slay this monster now while it\'s still weak?'},
            {icon: 'priest', text: 'Alas, no.'},
            {icon: 'priest', text: 'The chamber is hidden and magically sealed.'},
            {icon: 'priest', text: 'According to legend, three servants will arrive with tokens.'},
            {icon: 'priest', text: 'Only with these tokens can the beast\'s chamber be opened.'},
            {icon: 'brinley', text: 'Stand aside Priest, something is coming.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'wolf.png',
                    start: {x: 1, y: 3}
                },
                {
                    id: 'wolf.png',
                    start: {x: 3, y: 3}
                }
            ]
        ],
        arena: [[{"id":"w-ruin4","rot":270,"w":true},{"id":"w-tile4","rot":0,"w":true},{"id":"w-tile3","rot":0,"w":true},{"id":"w-tile2","rot":0,"w":true},{"id":"w-ruin4","rot":0,"w":true}],[{"id":"o-bush1","rot":0,"w":false},{"id":"w-tile1","rot":0,"w":true},{"id":"w-tile3","rot":90,"w":true},{"id":"w-tile1","rot":90,"w":true},{"id":"o-bush2","rot":0,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-tile2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-tile4","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-tile3","rot":180,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"o-bush1","rot":270,"w":false},{"id":"w-tile1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-tile2","rot":270,"w":true},{"id":"w-tile3","rot":0,"w":true},{"id":"w-tile4","rot":90,"w":true},{"id":"w-tile4","rot":180,"w":true},{"id":"w-tile1","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"o-bush2","rot":180,"w":false},{"id":"w-tile3","rot":270,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-tile2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}]]
    },
    {
        id: 4,
        dust: '0xd83535',
        lines: [
            {icon: 'brinley', text: 'Strange, wolves attacking in the city.'},
            {icon: 'priest', text: 'Yes, as I said, the monster below is drawing all power it can.'},
            {icon: 'priest', text: 'It will turn many things into it\'s servants.'},
            {icon: 'brinley', text: 'Could we not take the tokens ourselves and never release the monster?'},
            {icon: 'priest', text: 'We could try, but our town would be under constant attack.'},
            {icon: 'priest', text: 'We could not hold off the monstrous assult forever.'},
            {icon: 'priest', text: 'Behind you!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'wolf.png',
                    start: {x: 0, y: 8}
                },
                {
                    id: 'wolf.png',
                    start: {x: 2, y: 8}
                },
                {
                    id: 'wolf.png',
                    start: {x: 4, y: 8}
                }
            ]
        ],
        arena: [[{"id":"w-ruin4","rot":270,"w":true},{"id":"w-tile4","rot":0,"w":true},{"id":"w-tile3","rot":0,"w":true},{"id":"w-tile2","rot":0,"w":true},{"id":"w-ruin4","rot":0,"w":true}],[{"id":"o-bush1","rot":0,"w":false},{"id":"w-tile1","rot":0,"w":true},{"id":"w-tile3","rot":90,"w":true},{"id":"w-tile1","rot":90,"w":true},{"id":"o-bush2","rot":0,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-tile2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-tile4","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-tile3","rot":180,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"o-bush1","rot":270,"w":false},{"id":"w-tile1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-tile2","rot":270,"w":true},{"id":"w-tile3","rot":0,"w":true},{"id":"w-tile4","rot":90,"w":true},{"id":"w-tile4","rot":180,"w":true},{"id":"w-tile1","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"o-bush2","rot":180,"w":false},{"id":"w-tile3","rot":270,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-tile2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}]]
    },
    {
        id: 5,
        dust: '0xd83535',
        lines: [
            {icon: 'brinley', text: 'My men and I will patrol the streets for danger until the tokens can be gathered.'},
            {icon: 'priest', text: 'Very well, I will see what more I can learn of this ritual.'},
            {icon: null, text: 'Stepping into the street you feel a chill down your spine.'},
            {icon: null, text: 'Who or what will these token bearers be?'},
            {icon: null, text: 'A masked man emerges from the shadows ahead of you...'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'bandit.png',
                    start: {x: 2, y: 2}
                }
            ]
        ],
        arena: [[{"id":"w-ruin1","rot":0,"w":true},{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-ruin3","rot":180,"w":true}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-ruin3","rot":0,"w":true}],[{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true}],[{"id":"o-fence1","rot":180,"w":false},{"id":"o-fence2","rot":0,"w":false},{"id":"w-brick1","rot":180,"w":true},{"id":"o-fence2","rot":0,"w":false},{"id":"o-fence1","rot":180,"w":false}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-brick1","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-ruin1","rot":180,"w":true}],[{"id":"w-path1","rot":90,"w":true},{"id":"w-path1","rot":270,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"w-path1","rot":90,"w":true}],[{"id":"w-ruin2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-ruin2","rot":180,"w":true}],[{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true}],[{"id":"w-ruin2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"o-fence1","rot":0,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin2","rot":270,"w":true}]]
    },
    {
        id: 6,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'The sun is barely rising and you\'ve already killed many enemies.'},
            {icon: null, text: 'Standing near the western edge of town you hear the low growls just in time.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'wolf.png',
                    start: {x: 1, y: 5}
                },
                {
                    id: 'frog.png',
                    start: {x: 2, y: 2}
                },
                {
                    id: 'wolf.png',
                    start: {x: 3, y: 5}
                }
            ]
        ],
        arena: [[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"o-bush1","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-bush1","rot":90,"w":false},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"o-bush2","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"o-fence1","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true},{"id":"o-fence1","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"o-fence1","rot":0,"w":false}],[{"id":"w-dots1","rot":180,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots1","rot":270,"w":true},{"id":"w-dots1","rot":0,"w":true},{"id":"w-dots1","rot":180,"w":true},{"id":"w-dots1","rot":90,"w":true}]]
    },
    {
        id: 7,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'You can hear some of your guards fighting towards the town square.'},
            {icon: null, text: 'The Farrax Fountain, the beautiful center piece of town is shattered.'},
            {icon: null, text: 'Several guards lay dead.'},
            {icon: null, text: 'A huge ogre turns his gaze on you.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'ogre.png',
                    start: {x: 3, y: 3}
                }
            ]
        ],
        arena: [[{"id":"w-ruin4","rot":270,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-ruin4","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-skeleton1","rot":90,"w":false}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":180,"w":true},{"id":"o-glass2","rot":0,"w":false},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":180,"w":true},{"id":"o-glass1","rot":0,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"o-glass2","rot":90,"w":false},{"id":"w-path1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-ruin4","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-ruin4","rot":90,"w":true}]]
    },
    {
        id: 8,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'A guard crawls out from under a pile of rubble.'},
            {icon: null, text: 'He is in bad shape.'},
            {icon: 'guard', text: 'Sir, it was, gasp, too strong.'},
            {icon: 'guard', text: 'The priest, the temple, gasp, go.'},
            {icon: 'guard', text: 'Tell my wife, ack...'},
            {icon: null, text: 'An arrow pierces the mans back.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'bandit.png',
                    start: {x: 0, y: 2}
                },
                {
                    id: 'bandit2.png',
                    start: {x: 4, y: 2}
                }
            ]
        ],
        arena: [[{"id":"w-ruin4","rot":270,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-ruin4","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-skeleton1","rot":90,"w":false}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":180,"w":true},{"id":"o-glass2","rot":0,"w":false},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":180,"w":true},{"id":"o-glass1","rot":0,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"o-glass2","rot":90,"w":false},{"id":"w-path1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-ruin4","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-ruin4","rot":90,"w":true}]]
    },
    {
        id: 9,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'The sun is up but you are weary.'},
            {icon: null, text: 'The temple looms ahead of you.'},
            {icon: null, text: 'You hear more fighting in some distant street.'},
            {icon: null, text: 'The priest yelling something and pointing behind you.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'marauder.png',
                    start: {x: 2, y: 8}
                },
                {
                    id: 'marauder2.png',
                    start: {x: 4, y: 8}
                }
            ]
        ],
        arena: [[{"id":"w-ruin4","rot":270,"w":true},{"id":"w-tile4","rot":0,"w":true},{"id":"w-tile3","rot":0,"w":true},{"id":"w-tile2","rot":0,"w":true},{"id":"w-ruin4","rot":0,"w":true}],[{"id":"o-bush1","rot":0,"w":false},{"id":"w-tile1","rot":0,"w":true},{"id":"w-tile3","rot":90,"w":true},{"id":"w-tile1","rot":90,"w":true},{"id":"o-bush2","rot":0,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-tile2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-tile4","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-tile3","rot":180,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"o-bush1","rot":270,"w":false},{"id":"w-tile1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-tile2","rot":270,"w":true},{"id":"w-tile3","rot":0,"w":true},{"id":"w-tile4","rot":90,"w":true},{"id":"w-tile4","rot":180,"w":true},{"id":"w-tile1","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"o-bush2","rot":180,"w":false},{"id":"w-tile3","rot":270,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-tile2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}]]
    },
    {
        id: 10,
        dust: '0xaaaaaa',
        lines: [
            {icon: 'priest', text: 'Brinely! You look terrible...'},
            {icon: 'brinley', text: 'Have you learned anything new priest?'},
            {icon: 'priest', text: 'I have! But rest a few hours first, your men will hold a while without you.'},
            {icon: null, text: 'You slump down in a corner of the temple doorway.'},
            {icon: null, text: 'Staring up at the ceiling you see a fly struggling in a spider\'s web.'},
            {icon: null, text: 'You wonder if you are in a similar position.'},
            {icon: null, text: 'Are you struggling but already dead?'},
            {icon: null, text: 'You fall into a restless sleep.'},
            {icon: null, text: '...'},
            {icon: null, text: 'You awake to darkness.'},
            {icon: null, text: 'The priest is screaming your name.'},
            {icon: null, text: 'He is cornered by two bandits!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'bandit2.png',
                    start: {x: 3, y: 0}
                },
                {
                    id: 'bandit2.png',
                    start: {x: 4, y: 1}
                }
            ]
        ],
        arena: [[{"id":"w-ruin1","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-ruin1","rot":90,"w":false}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-ruin4","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"o-well1","rot":0,"w":false},{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin4","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":270,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin1","rot":180,"w":true}]]
    },
    {
        id: 11,
        dust: '0xd83535',
        lines: [
            {icon: 'priest', text: 'You are a heavy sleeper Brinley!'},
            {icon: 'priest', text: 'I have learned much of the first token bearer.'},
            {icon: 'priest', text: 'He will come from the north, and appear as an old man.'},
            {icon: 'priest', text: 'He will likely be guarded so be careful.'},
            {icon: null, text: 'You set off north.'},
            {icon: null, text: 'The town seems more quiet than it did earlier.'},
            {icon: null, text: 'Are the guards gaining the upper hand?'},
            {icon: null, text: 'Or have they all been killed?'},
            {icon: null, text: 'An arrow glances off your helmet!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'bandit.png',
                    start: {x: 2, y: 2}
                },
                {
                    id: 'marauder.png',
                    start: {x: 1, y: 0}
                },
                {
                    id: 'marauder2.png',
                    start: {x: 1, y: 5}
                }
            ]
        ],
        arena: [[{"id":"w-roots3","rot":90,"w":true},{"id":"w-roots2","rot":0,"w":true},{"id":"w-roots1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots2","rot":90,"w":true}],[{"id":"w-roots1","rot":90,"w":true},{"id":"o-cart1","rot":0,"w":false},{"id":"o-cart2","rot":0,"w":false},{"id":"w-roots3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-roots2","rot":270,"w":true},{"id":"o-cart4","rot":0,"w":false},{"id":"o-cart3","rot":0,"w":false},{"id":"w-roots2","rot":90,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-roots1","rot":180,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true},{"id":"w-roots1","rot":90,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-roots3","rot":90,"w":true}],[{"id":"w-roots2","rot":270,"w":true},{"id":"w-roots3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true}],[{"id":"o-rock3","rot":0,"w":false},{"id":"o-rock4","rot":0,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-roots1","rot":270,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-roots3","rot":90,"w":true},{"id":"w-roots2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots1","rot":270,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots3","rot":0,"w":true}]]
    },
    {
        id: 12,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'In a field just north of town you sit on a stone wall to wait.'},
            {icon: null, text: 'You can hear bees flying between flowers and a cool breeze under your armor.'},
            {icon: null, text: 'Funny, you\'ve never heard bees this loud before.'},
            {icon: null, text: 'Swarms!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'bees.png',
                    start: {x: 1, y: 3}
                },
                {
                    id: 'bees.png',
                    start: {x: 3, y: 3}
                }
            ]
        ],
        arena: [[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-thorns1","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"o-thorns1","rot":180,"w":false}],[{"id":"o-thorns1","rot":90,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"o-thorns1","rot":270,"w":false}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-rock4","rot":0,"w":false},{"id":"o-rock3","rot":0,"w":false},{"id":"w-tile3","rot":0,"w":true},{"id":"o-rock3","rot":0,"w":false},{"id":"o-rock2","rot":90,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}]]
    },
    {
        id: 13,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'You look up to see three figures approach.'},
            {icon: null, text: 'Their eyes are sad as they shuffle towards you.'},
            {icon: null, text: 'Then they attack.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'slave.png',
                    start: {x: 1, y: 4}
                },
                {
                    id: 'slave.png',
                    start: {x: 2, y: 3}
                },
                {
                    id: 'slave.png',
                    start: {x: 3, y: 4}
                }
            ],
            [
                {
                    id: 'bandit3.png',
                    start: {x: 2, y:3}
                }
            ]
        ],
        arena: [[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-thorns1","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"o-thorns1","rot":180,"w":false}],[{"id":"o-thorns1","rot":90,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"o-thorns1","rot":270,"w":false}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-rock4","rot":0,"w":false},{"id":"o-rock3","rot":0,"w":false},{"id":"w-tile3","rot":0,"w":true},{"id":"o-rock3","rot":0,"w":false},{"id":"o-rock2","rot":90,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}]]
    },
    {
        id: 14,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'You find the token in the old man\'s robes.'},
            {icon: null, text: 'It\'s heavy and seems to buzz in your hands.'},
            {icon: null, text: 'You start back to the temple to find the priest.'},
            {icon: null, text: 'Two bodies are strewn in the street.'},
            {icon: null, text: 'But they rise and attack as you near them!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'marauder.png',
                    start: {x: 2, y: 3}
                },
                {
                    id: 'marauder2.png',
                    start: {x: 4, y: 0}
                }
            ]
        ],
        arena: [[{"id":"w-ruin1","rot":0,"w":true},{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-ruin3","rot":180,"w":true}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-ruin3","rot":0,"w":true}],[{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true}],[{"id":"o-fence1","rot":180,"w":false},{"id":"o-fence2","rot":0,"w":false},{"id":"w-brick1","rot":180,"w":true},{"id":"o-fence2","rot":0,"w":false},{"id":"o-fence1","rot":180,"w":false}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-brick1","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-ruin1","rot":180,"w":true}],[{"id":"w-path1","rot":90,"w":true},{"id":"w-path1","rot":270,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"w-path1","rot":90,"w":true}],[{"id":"w-ruin2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-ruin2","rot":180,"w":true}],[{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true}],[{"id":"w-ruin2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"o-fence1","rot":0,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin2","rot":270,"w":true}]]
    },
    {
        id: 15,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'The priest is waiting for you in the temple.'},
            {icon: 'priest', text: 'Good! You have found the token.'},
            {icon: 'priest', text: 'One of your guards came to see me a while ago.'},
            {icon: 'priest', text: 'I do not think we can hold much longer.'},
            {icon: 'priest', text: 'Look for the next token to the west.'},
            {icon: null, text: 'The market square is surreal, bright and deserted.'},
            {icon: null, text: 'Perhaps the worst is waiting till nightfall.'},
            {icon: null, text: 'Perhaps not...'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'bandit.png',
                    start: {x: 4, y: 6}
                },
                {
                    id: 'marauder.png',
                    start: {x: 1, y: 3}
                },
                {
                    id: 'marauder2.png',
                    start: {x: 4, y: 7}
                }
            ]
        ],
        arena: [[{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-path2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-path2","rot":90,"w":true}],[{"id":"w-dots2","rot":90,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path1","rot":180,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"o-fence2","rot":0,"w":false},{"id":"w-path1","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-dots2","rot":90,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path1","rot":180,"w":true},{"id":"w-dots2","rot":0,"w":true}],[{"id":"w-path2","rot":90,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true}]]
    },
    {
        id: 16,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'The west edge of Farrax leads into the forest.'},
            {icon: null, text: 'From beneath the underbrush leap three furious frogs!'},
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'frog.png',
                    start: {x: 1, y: 3}
                },
                {
                    id: 'frog.png',
                    start: {x: 3, y: 0}
                },
                {
                    id: 'frog.png',
                    start: {x: 0, y: 0}
                }
            ]
        ],
        arena: [[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-thorns1","rot":0,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-bush2","rot":0,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"o-thorns1","rot":90,"w":false}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-thorns1","rot":180,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-path2","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"o-branch1","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-path1","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}]]
    },
    {
        id: 17,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'You can\'t see far into the trees but there\'s a glimmer of movement.'},
            {icon: null, text: 'Then you hear the sound of footsteps on dry leaves.'},
            {icon: null, text: 'Three more of the sad-eyed men approach.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'slave.png',
                    start: {x: 1, y: 4}
                },
                {
                    id: 'slave.png',
                    start: {x: 2, y: 3}
                },
                {
                    id: 'slave.png',
                    start: {x: 3, y: 4}
                }
            ],
            [
                {
                    id: 'spider.png',
                    start: {x: 2, y: 1}
                }
            ]
        ],
        arena: [[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-thorns1","rot":0,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-bush2","rot":0,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"o-thorns1","rot":90,"w":false}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-thorns1","rot":180,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-path2","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"o-branch1","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-path1","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}]]
    },
    {
        id: 18,
        dust: '0xd83535',
        lines: [
            {icon: 'brinley', text: 'A horrid beast, did it always lurk in those woods?'},
            {icon: null, text: 'Who are these poor men who accompany the token bearers?'},
            {icon: null, text: 'What manner of terrible ritual could summon these horrors?'},
            {icon: null, text: 'You set out once more for the temple.'},
            {icon: null, text: 'The priest may know more about what is going on.'},
            {icon: 'brinley', text: 'Agh! More frogs!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'frog.png',
                    start: {x: 4, y: 0}
                },
                {
                    id: 'frog.png',
                    start: {x: 4, y: 1}
                },
                {
                    id: 'frog.png',
                    start: {x: 3, y: 1}
                }
            ],
            [
                {
                    id: 'snake.png',
                    start: {x: 4, y: 0}
                },
                {
                    id: 'snake.png',
                    start: {x: 3, y: 1}
                }
            ]
        ],
        arena: [[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"o-bubbles2","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"o-plant1","rot":0,"w":false},{"id":"o-bubbles5","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"o-bubbles6","rot":90,"w":false},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-water2","rot":0,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-water3","rot":0,"w":false},{"id":"o-water1","rot":0,"w":false}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"o-water2","rot":0,"w":false},{"id":"o-plant1","rot":180,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"o-water2","rot":180,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}]]
    },
    {
        id: 19,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'You find the priest pacing in the temple.'},
            {icon: 'priest', text: 'Did you get the token? Excellent!'},
            {icon: 'priest', text: 'The next and last will be coming from the south, fetch it my friend.'},
            {icon: 'brinley', text: 'Hold on priest...'},
            {icon: 'brinley', text: 'I\'ll go no further until I know more about our attackers.'},
            {icon: 'priest', text: 'There is no time!'},
            {icon: 'priest', text: 'If this evil is not destroyed soon it will be disasterous!'},
            {icon: 'priest', text: 'That is all you need to know! Find the last token.'},
            {icon: null, text: 'You consider wringing the truth from the priest.'},
            {icon: null, text: 'Instead you turn snarling a curse and hurry south.'},
            {icon: null, text: 'Houses line the streets from the temple to the edge of Farrax.'},
            {icon: null, text: 'Many haphazard structures loom over your head.'},
            {icon: null, text: 'You can feel eyes on your back as you run over the bricks.'},
            {icon: null, text: 'Someone dislodges a heavy stone and it smashes just in front of you.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'bandit2.png',
                    start: {x: 2, y: 3}
                },
                {
                    id: 'marauder.png',
                    start: {x: 0, y: 7}
                }
            ],
            [
                {
                    id: 'bandit.png',
                    start: {x: 4, y: 1}
                },
                {
                    id: 'bandit.png',
                    start: {x: 0, y: 3}
                }
            ],
            [
                {
                    id: 'marauder2.png',
                    start: {x: 4, y: 8}
                }
            ]
        ],
        arena: [[{"id":"w-ruin4","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true}],[{"id":"w-ruin1","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path1","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-ruin1","rot":180,"w":true}],[{"id":"w-ruin3","rot":270,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-path1","rot":180,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-ruin1","rot":270,"w":true}],[{"id":"w-ruin4","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-ruin3","rot":90,"w":true}],[{"id":"w-ruin2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin2","rot":180,"w":true}],[{"id":"w-ruin3","rot":270,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots1","rot":0,"w":true},{"id":"w-ruin3","rot":90,"w":true}],[{"id":"w-ruin1","rot":180,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"o-rock2","rot":180,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true}],[{"id":"w-ruin1","rot":90,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-ruin1","rot":0,"w":true}],[{"id":"w-ruin4","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-ruin1","rot":180,"w":true}]]
    },
    {
        id: 20,
        dust: '0xd83535',
        lines: [
            {icon: 'brinley', text: 'Some of these thieves are from Farrax!'},
            {icon: 'brinley', text: 'The scum!'},
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'bandit2.png',
                    start: {x: 0, y: 8}
                },
                {
                    id: 'marauder.png',
                    start: {x: 4, y: 8}
                },
                {
                    id: 'marauder2.png',
                    start: {x: 4, y: 6}
                }
            ]
        ],
        arena: [[{"id":"w-ruin4","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true}],[{"id":"w-ruin1","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path1","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-ruin1","rot":180,"w":true}],[{"id":"w-ruin3","rot":270,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-path1","rot":180,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-ruin1","rot":270,"w":true}],[{"id":"w-ruin4","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-ruin3","rot":90,"w":true}],[{"id":"w-ruin2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin2","rot":180,"w":true}],[{"id":"w-ruin3","rot":270,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots1","rot":0,"w":true},{"id":"w-ruin3","rot":90,"w":true}],[{"id":"w-ruin1","rot":180,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"o-rock2","rot":180,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true}],[{"id":"w-ruin1","rot":90,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-ruin1","rot":0,"w":true}],[{"id":"w-ruin4","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-ruin1","rot":180,"w":true}]]
    },
    {
        id: 21,
        dust: '0x6daa99',
        lines: [
            {icon: null, text: 'The cemetery lies ahead.'},
            {icon: null, text: 'What horrors await you there?'},
            {icon: null, text: 'What choice do you have?'},
            {icon: null, text: 'The sun casts small shadows beneath old stone graves.'},
            {icon: null, text: 'The mournful leaves of the Gravelock trees flutter in the wind.'},
            {icon: null, text: 'Two green hands stab up through the earth.'},
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'ghoul.png',
                    start: {x: 3, y: 5}
                },
                {
                    id: 'ghoul.png',
                    start: {x: 1, y: 4}
                }
            ]
        ],
        arena: [[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"o-graves1","rot":0,"w":false},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-path1","rot":270,"w":true},{"id":"w-path1","rot":270,"w":true},{"id":"w-roots3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-graves1","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-roots1","rot":0,"w":true},{"id":"w-roots3","rot":90,"w":true}],[{"id":"w-roots2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-path1","rot":90,"w":true},{"id":"w-roots3","rot":270,"w":true},{"id":"w-path1","rot":90,"w":true}],[{"id":"w-path1","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-graves1","rot":90,"w":false}],[{"id":"w-path1","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-graves1","rot":90,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true}],[{"id":"w-roots3","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-path1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}]]
    },
    {
        id: 22,
        dust: '0x6daa99',
        lines: [
            {icon: 'brinley', text: 'If the monster beneath the temple can raise the dead...'},
            {icon: 'brinley', text: 'It must be very powerful indeed.'},
            {icon: null, text: 'More corpses push their way up through the rotten soil'},
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'ghoul.png',
                    start: {x: 1, y: 6}
                },
                {
                    id: 'ghoul.png',
                    start: {x: 2, y: 2}
                }
            ],
            [
                {
                    id: 'lich.png',
                    start: {x: 2, y: 3}   
                }
            ]
        ],
        arena: [[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"o-graves1","rot":0,"w":false},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-path1","rot":270,"w":true},{"id":"w-path1","rot":270,"w":true},{"id":"w-roots3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-graves1","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-roots1","rot":0,"w":true},{"id":"w-roots3","rot":90,"w":true}],[{"id":"w-roots2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-path1","rot":90,"w":true},{"id":"w-roots3","rot":270,"w":true},{"id":"w-path1","rot":90,"w":true}],[{"id":"w-path1","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-graves1","rot":90,"w":false}],[{"id":"w-path1","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-graves1","rot":90,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true}],[{"id":"w-roots3","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-path1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}]]
    },
    {
        id: 23,
        dust: '0x6daa99',
        lines: [
            {icon: 'brinley', text: 'By the gods! That lich was beautiful!'},
            {icon: 'brinley', text: 'When I die I\'ll make her mine for eternity.'},
            {icon: 'brinley', text: 'Ugh do these things never rest!'},
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'ghoul.png',
                    start: {x: 3, y: 5}
                },
                {
                    id: 'ghoul.png',
                    start: {x: 1, y: 4}
                }
            ],
            [
                {
                    id: 'ghost.png',
                    start: {x: 4, y: 4}
                },
                {
                    id: 'ghost.png',
                    start: {x: 0, y: 4}
                }  
            ]
        ],
        arena: [[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"o-graves1","rot":0,"w":false},{"id":"w-path1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-path1","rot":270,"w":true},{"id":"w-path1","rot":270,"w":true},{"id":"w-roots3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-graves1","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-roots1","rot":0,"w":true},{"id":"w-roots3","rot":90,"w":true}],[{"id":"w-roots2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-path1","rot":90,"w":true},{"id":"w-roots3","rot":270,"w":true},{"id":"w-path1","rot":90,"w":true}],[{"id":"w-path1","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-graves1","rot":90,"w":false}],[{"id":"w-path1","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-graves1","rot":90,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true}],[{"id":"w-roots3","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-path1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}]]
    },
    {
        id: 24,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'On the far side of the graveyard you stop to rest.'},
            {icon: null, text: 'Just over a hill to the south you hear heavy feet heading your way.'},
            {icon: null, text: 'A massive white ape lumbers into view.'},
            {icon: 'brinley', text: 'Where are your slaves, foul token-bearer?'},
            {icon: null, text: 'The beast points at its mouth.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'ape.png',
                    start: {x: 1, y: 3}
                }
            ]
        ],
        arena: [[{"id":"o-bubbles6","rot":0,"w":false},{"id":"o-bubbles4","rot":90,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"o-bubbles5","rot":0,"w":false},{"id":"o-bubbles2","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-bubbles1","rot":180,"w":false},{"id":"w-roots3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-plant1","rot":90,"w":false}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"o-bush1","rot":0,"w":false}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"o-plant1","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-roots3","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-roots2","rot":90,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-bush2","rot":90,"w":false},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true}]]
    },
    {
        id: 25,
        dust: '0x6daa99',
        lines: [
            {icon: null, text: 'The beasts body falls to the ground in a crumpled ruin.'},
            {icon: null, text: 'How many men can say they\'ve slain a legendary creature such as that?'},
            {icon: null, text: 'You turn to face the cemetery once more.'},
            {icon: null, text: 'There is a path going around but it would take too long to travel.'},
            {icon: null, text: 'The sun is just above the treetops and the shadows are long.'},
            {icon: null, text: 'You step softly between the graves.'},
            {icon: null, text: 'A mausoleum door creaks open and bandaged heads peak out.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'mummy.png', //mummy
                    start: {x: 0, y: 1}
                }
            ],
            [
                {
                    id: 'ghoul.png',
                    start: {x: 3, y: 5}
                },
                {
                    id: 'mummy.png', //mummy
                    start: {x: 4, y: 4}
                }
            ]
        ],
        arena: [[{"id":"o-graves1","rot":0,"w":false},{"id":"o-fence1","rot":270,"w":false},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-roots3","rot":0,"w":true}],[{"id":"w-dots1","rot":0,"w":true},{"id":"w-ruin4","rot":270,"w":true},{"id":"w-path1","rot":270,"w":true},{"id":"w-ruin2","rot":270,"w":true},{"id":"w-dots1","rot":180,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots1","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-roots2","rot":90,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"o-graves1","rot":90,"w":false}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-graves1","rot":90,"w":false},{"id":"w-dots1","rot":180,"w":true}],[{"id":"o-fence1","rot":180,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-graves1","rot":0,"w":false},{"id":"w-ruin2","rot":0,"w":true},{"id":"w-path1","rot":90,"w":true},{"id":"w-ruin4","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-dots1","rot":270,"w":true},{"id":"w-dots1","rot":90,"w":true},{"id":"w-roots1","rot":0,"w":true},{"id":"w-path1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-dots1","rot":0,"w":true},{"id":"w-dots1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}]]
    },
    {
        id: 26,
        dust: '0x6daa99',
        lines: [
            {icon: null, text: 'A familiar face appears...'},
            {icon: 'brinley', text: 'Ah hah! My lovely!'},
            {icon: 'brinley', text: 'I see you cannot bear to be parted from me for long.'},
            {icon: 'brinley', text: 'Do not be embarrassed, I feel the same!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'lich.png',
                    start: {x: 2, y: 5}
                }
            ]
        ],
        arena: [[{"id":"o-graves1","rot":0,"w":false},{"id":"o-fence1","rot":270,"w":false},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-roots3","rot":0,"w":true}],[{"id":"w-dots1","rot":0,"w":true},{"id":"w-ruin4","rot":270,"w":true},{"id":"w-path1","rot":270,"w":true},{"id":"w-ruin2","rot":270,"w":true},{"id":"w-dots1","rot":180,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots1","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-roots2","rot":90,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"o-graves1","rot":90,"w":false}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-graves1","rot":90,"w":false},{"id":"w-dots1","rot":180,"w":true}],[{"id":"o-fence1","rot":180,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-graves1","rot":0,"w":false},{"id":"w-ruin2","rot":0,"w":true},{"id":"w-path1","rot":90,"w":true},{"id":"w-ruin4","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-dots1","rot":270,"w":true},{"id":"w-dots1","rot":90,"w":true},{"id":"w-roots1","rot":0,"w":true},{"id":"w-path1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-dots1","rot":0,"w":true},{"id":"w-dots1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}]]
    },
    {
        id: 27,
        dust: '0x6daa99',
        lines: [
            {icon: 'brinley', text: 'This graveyard will be a mess by the time this is over...'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'ghoul.png',
                    start: {x: 0, y: 7}
                },
                {
                    id: 'ghoul.png',
                    start: {x: 1, y: 6}
                },
                {
                    id: 'ghoul.png',
                    start: {x: 4, y: 2}
                }
            ]
        ],
        arena: [[{"id":"o-graves1","rot":0,"w":false},{"id":"o-fence1","rot":270,"w":false},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path1","rot":0,"w":true},{"id":"w-roots3","rot":0,"w":true}],[{"id":"w-dots1","rot":0,"w":true},{"id":"w-ruin4","rot":270,"w":true},{"id":"w-path1","rot":270,"w":true},{"id":"w-ruin2","rot":270,"w":true},{"id":"w-dots1","rot":180,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots1","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-roots2","rot":90,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"o-graves1","rot":90,"w":false}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-graves1","rot":90,"w":false},{"id":"w-dots1","rot":180,"w":true}],[{"id":"o-fence1","rot":180,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-graves1","rot":0,"w":false},{"id":"w-ruin2","rot":0,"w":true},{"id":"w-path1","rot":90,"w":true},{"id":"w-ruin4","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-dots1","rot":270,"w":true},{"id":"w-dots1","rot":90,"w":true},{"id":"w-roots1","rot":0,"w":true},{"id":"w-path1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-dots1","rot":0,"w":true},{"id":"w-dots1","rot":180,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}]]
    },
    {
        id: 28,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'Exiting the cemetery you make your way to the main road leading into town.'},
            {icon: null, text: 'You opt for speed over subtlety and sprint down the roads center.'},
            {icon: null, text: 'You are nearly back to the temple when you hear the twang of bows.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'bandit.png',
                    start: {x: 2, y: 1}
                },
                {
                    id: 'bandit.png',
                    start: {x: 4, y: 2}
                }
            ],
            [
                {
                    id: 'bandit2.png',
                    start: {x: 2, y: 0}
                },
                {
                    id: 'marauder.png',
                    start: {x: 0, y: 7}
                }
            ]
        ],
        arena: [[{"id":"w-grass3","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-brick2","rot":270,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-stumps1","rot":90,"w":false},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-brick2","rot":180,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-brick1","rot":180,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-brick2","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-brick2","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-brick1","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"o-stumps1","rot":180,"w":false}]]
    },
    {
        id: 29,
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'Exhausted, you kneel using your sword as a crutch.'},
            {icon: null, text: 'For a while you just stare off at nothing.'},
            {icon: null, text: '...'},
            {icon: null, text: 'You wake up with a start.'},
            {icon: null, text: 'You\'re surrounded!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'marauder.png',
                    start: {x: 0, y: 0}
                },
                {
                    id: 'marauder.png',
                    start: {x: 4, y: 0}
                },
                {
                    id: 'marauder.png',
                    start: {x: 1, y: 1}
                },
                {
                    id: 'marauder2.png',
                    start: {x: 2, y: 2}
                },
                {
                    id: 'marauder2.png',
                    start: {x: 0, y: 7}
                },
                {
                    id: 'marauder2.png',
                    start: {x: 4, y: 7}
                }
            ]
        ],
        arena: [[{"id":"w-ruin1","rot":0,"w":true},{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-ruin3","rot":180,"w":true}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-ruin3","rot":0,"w":true}],[{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true}],[{"id":"o-fence1","rot":180,"w":false},{"id":"o-fence2","rot":0,"w":false},{"id":"w-brick1","rot":180,"w":true},{"id":"o-fence2","rot":0,"w":false},{"id":"o-fence1","rot":180,"w":false}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-brick1","rot":90,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-ruin1","rot":180,"w":true}],[{"id":"w-path1","rot":90,"w":true},{"id":"w-path1","rot":270,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"w-path1","rot":90,"w":true}],[{"id":"w-ruin2","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-ruin2","rot":180,"w":true}],[{"id":"w-brick1","rot":270,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick1","rot":90,"w":true}],[{"id":"w-ruin2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"o-fence1","rot":0,"w":false},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin2","rot":270,"w":true}]]
    },
    {
        id: 30,
        dust: '0xd83535',
        lines: [
            {icon: 'guard', text: 'Captain Brinley!'},
            {icon: 'guard', text: 'We\'ll take it from here sir, get to the temple.'},
            {icon: 'brinley', text: 'Thank you, men.'},
            {icon: null, text: 'An immense sense of pride washes over you.'},
            {icon: null, text: 'You trained those men, and now they are heros.'},
            {icon: null, text: 'Turning you run for the temple.'},
            {icon: null, text: 'A new wave of energy renews your tired limbs.'},
            {icon: null, text: 'And just in time!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'marauder.png',
                    start: {x: 4, y: 1}
                },
                {
                    id: 'marauder.png',
                    start: {x: 3, y: 2}
                }
            ],
            [
                {
                    id: 'marauder.png',
                    start: {x: 2, y: 0}
                },
                {
                    id: 'marauder.png',
                    start: {x: 2, y: 8}
                }
            ]
        ],
        arena: [[{"id":"w-brick2","rot":180,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-brick1","rot":0,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-brick1","rot":90,"w":true}],[{"id":"w-dots2","rot":270,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-brick2","rot":270,"w":true},{"id":"o-fence1","rot":90,"w":false},{"id":"w-brick2","rot":180,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":270,"w":true},{"id":"w-dots2","rot":0,"w":true}],[{"id":"w-dots2","rot":90,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick1","rot":180,"w":true},{"id":"w-brick2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick2","rot":270,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick1","rot":90,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-brick2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-brick2","rot":270,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"o-fence1","rot":180,"w":false},{"id":"o-fence1","rot":180,"w":false},{"id":"w-brick1","rot":90,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true}],[{"id":"w-brick2","rot":0,"w":true},{"id":"w-brick1","rot":0,"w":true},{"id":"w-brick2","rot":90,"w":true},{"id":"w-brick2","rot":180,"w":true},{"id":"w-brick2","rot":90,"w":true}],[{"id":"o-fence1","rot":180,"w":false},{"id":"o-fence1","rot":180,"w":false},{"id":"w-brick1","rot":270,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-dots2","rot":0,"w":true}]]
    },
    {
        id: 31,
        dust: '0xaaaaaa',
        lines: [
            {icon: null, text: 'The priest is waiting for you on the temple steps.'},
            {icon: null, text: 'He snatches the third token from your hands.'},
            {icon: null, text: 'You call out to him but he ignores you and races deeper into the temple.'},
            {icon: null, text: 'The inside of the temple is black as night, no torches are lit.'},
            {icon: null, text: 'You hear the priests low chanting in the distance.'},
            {icon: null, text: 'You walk through halls and down steps while your eyes adjust.'},
            {icon: null, text: 'Finally you come to a large room with a rough dirt floor.'},
            {icon: null, text: 'Fires are lit in the corners and you see three familiar faces.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'slave.png',
                    start: {x: 0, y: 2}
                },
                {
                    id: 'slave.png',
                    start: {x: 2, y: 2}
                },
                {
                    id: 'slave.png',
                    start: {x: 4, y: 2}
                }
            ]
        ],
        arena: [[{"id":"w-ruin1","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-ruin1","rot":90,"w":false}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-ruin4","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"o-well1","rot":0,"w":false},{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin4","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":270,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin1","rot":180,"w":true}]]
    },
    {
        id: 32,
        dust: '0xaaaaaa',
        lines: [
            {icon: 'priest', text: 'You never disappoint, Brinley.'},
            {icon: 'priest', text: 'I am the fourth token bearer!'},
            {icon: 'priest', text: 'I initiated the awakening ritual, my fool of an acolyte tried to stop me.'},
            {icon: 'priest', text: 'But you took care of him! Hah!'},
            {icon: 'priest', text: 'You are too late to stop the monster now.'},
            {icon: 'priest', text: 'My monster! I have summoned him, I will control him!'},
            {icon: 'priest', text: 'I will rule over this pathetic land.'},
            {icon: null, text: 'You realize now how obvious this all was.'},
            {icon: null, text: 'The priest assembles the tokens and places them on the ground.'},
            {icon: null, text: 'He is laughing like a maniac.'},
            {icon: null, text: 'The floor erupts with tentacles!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'tentacle.png',
                    start: {x: 3, y: 1}
                },
                {
                    id: 'tentacle.png',
                    start: {x: 1, y: 2}
                },
                {
                    id: 'tentacle.png',
                    start: {x: 3, y: 4}
                },
                {
                    id: 'tentacle.png',
                    start: {x: 4, y: 6}
                },
                {
                    id: 'tentacle.png',
                    start: {x: 1, y: 7}
                },
                {
                    id: 'tentacle.png',
                    start: {x: 2, y: 8}
                }
            ]
        ],
        arena: [[{"id":"w-ruin1","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-ruin1","rot":90,"w":false}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-ruin4","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"o-well1","rot":0,"w":false},{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin4","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":270,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin1","rot":180,"w":true}]]
    },
    {
        id: 'boss', //33
        dust: '0xaaaaaa',
        lines: [
            {icon: 'priest', text: 'Behold the creature of your doom!'},
            {icon: 'priest', text: 'Baheehaheehoo!'},
            {icon: null, text: 'The ground begins to shift and crack.'},
            {icon: null, text: 'An otherworldly horror emerges from beneath the temple floor.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'young-demon.png',
                    start: {x: 2, y: 5}
                },
                {
                    id: 'tentacle.png',
                    start: {x: 1, y: 2}
                },
                {
                    id: 'tentacle.png',
                    start: {x: 3, y: 2}
                },
                {
                    id: 'tentacle.png',
                    start: {x: 2, y: 6}
                }
            ]
        ],
        arena: [[{"id":"w-ruin1","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-ruin1","rot":90,"w":false}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-ruin4","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"o-well1","rot":0,"w":false},{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin4","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":270,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin1","rot":180,"w":true}]]
    },
    {
        id: 'arena', //34
        dust: '0xd83535',
        lines: [
            {icon: 'priest', text: 'Ah, Brinley, you are awake!'},
            {icon: 'priest', text: 'You\'ve been out a week you know.'},
            {icon: 'priest', text: 'You have missed much, all the nearby territories now bow to me.'},
            {icon: 'priest', text: 'You are still the people\'s hero though.'},
            {icon: 'priest', text: 'They think you will save them.'},
            {icon: 'priest', text: 'So I have devised this wonderful game.'},
            {icon: 'priest', text: 'Every day you will fight in this arena.'},
            {icon: 'priest', text: 'Every day people will watch.'},
            {icon: 'priest', text: 'Some days you will win, others you will lose.'},
            {icon: 'priest', text: 'You may challenge The Creature any time you wish.'},
            {icon: 'priest', text: 'The people will come to understand that you will not save them.'},
            {icon: 'priest', text: 'You will fight, you will lose, you will grow old, and you will die.'},
            {icon: 'priest', text: 'All in this arena!'},
            {icon: 'priest', text: 'Bwaheheoeooe!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            []
        ],
        arena: []
    },
    {
        id: 'priest', //35
        dust: '0xd83535',
        lines: [
            {icon: 'priest', text: 'Noooooo!'},
            {icon: 'priest', text: 'This cannot beeee!'},
            {icon: 'priest', text: 'Die you miserable fool!'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            [
                {
                    id: 'priest.png',
                    start: {x: 2, y: 3}
                }
            ]
        ],
        arena: [[{"id":"w-ruin1","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-ruin1","rot":90,"w":false}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-ruin4","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true},{"id":"o-well1","rot":0,"w":false},{"id":"w-path2","rot":90,"w":true},{"id":"w-path2","rot":90,"w":true}],[{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin4","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-ruin4","rot":270,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-ruin1","rot":270,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-path2","rot":0,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-ruin1","rot":180,"w":true}]]
    },
    {
        id: 'last', //36
        dust: '0xd83535',
        lines: [
            {icon: null, text: 'Exhausted, you lay down and lookup at the cloudless sky.'},
            {icon: null, text: 'You can hear the people cheering your name.'},
            {icon: null, text: 'You have defeated the demon.'},
            {icon: null, text: 'Enjoy your rest.'}
        ],
        start: {x: 2, y: 7},
        mobs: [
            []
        ],
        arena: []
    }
];



DATA.mobs = [
    {
        id: 'demon-guard.png',
        hitter: 'claw2.png',
        life: 1,
        damage: 1,
        ranged: false,
        moveSpeed: 500,
        attackSpeed: 1000,
        initiative: 0.3
    },
    {
        id: 'acolyte.png',
        hitter: 'sword2.png',
        life: 1,
        damage: 1,
        ranged: false,
        moveSpeed: 400,
        attackSpeed: 1000,
        initiative: 0.8
    },
    {
        id: 'wolf.png',
        hitter: false,
        life: 2,
        damage: 1.4,
        ranged: false,
        moveSpeed: 200,
        attackSpeed: 800,
        initiative: 0.8
    },
    {
        id: 'bandit.png',
        hitter: 'sword2.png',
        rangedSprite: 'arrow2.png',
        life: 2,
        damage: 2,
        ranged: true,
        moveSpeed: 400,
        attackSpeed: 1000,
        initiative: 0.8
    },
    {
        id: 'bandit2.png',
        hitter: 'sword2.png',
        rangedSprite: 'arrow2.png',
        life: 2,
        damage: 2,
        ranged: true,
        moveSpeed: 400,
        attackSpeed: 1000,
        initiative: 0.8
    },
    {
        id: 'marauder.png',
        hitter: 'club.png',
        life: 2.4,
        damage: 1,
        ranged: false,
        moveSpeed: 200,
        attackSpeed: 800,
        initiative: 0.8
    },
    {
        id: 'marauder2.png',
        hitter: 'club.png',
        life: 2.4,
        damage: 1,
        ranged: false,
        moveSpeed: 200,
        attackSpeed: 800,
        initiative: 0.8
    },
    {
        id: 'ogre.png',
        hitter: 'club.png',
        rangedSprite: 'stone.png',
        life: 3,
        damage: 3,
        ranged: true,
        moveSpeed: 600,
        attackSpeed: 800,
        initiative: 0.9
    },
    {
        id: 'frog.png',
        hitter: 'claw1.png',
        life: 2,
        damage: 1,
        ranged: false,
        moveSpeed: 200,
        attackSpeed: 800,
        initiative: 0.8
    },
    {
        id: 'snake.png',
        hitter: false,
        life: 1,
        damage: 2,
        ranged: false,
        moveSpeed: 200,
        attackSpeed: 800,
        initiative: 0.8
    },
    {
        id: 'bees.png',
        hitter: 'bee.png',
        life: 1,
        damage: 2,
        ranged: false,
        moveSpeed: 200,
        attackSpeed: 600,
        initiative: 0.8
    },
    {
        id: 'slave.png',
        hitter: 'sickle.png',
        life: 2.5,
        damage: 2,
        ranged: false,
        moveSpeed: 600,
        attackSpeed: 600,
        initiative: 0.8
    },
    {
        id: 'bandit3.png',
        hitter: 'sickle.png',
        life: 3,
        damage: 3,
        ranged: false,
        moveSpeed: 200,
        attackSpeed: 600,
        initiative: 1
    },
    {
        id: 'spider.png',
        hitter: false,
        rangedSprite: 'poison.png',
        life: 2.6,
        damage: 3.6,
        ranged: true,
        moveSpeed: 200,
        attackSpeed: 600,
        initiative: 1
    },
    {
        id: 'ghoul.png',
        hitter: 'hand2.png',
        life: 3,
        damage: 1.2,
        ranged: false,
        moveSpeed: 1000,
        attackSpeed: 1000,
        initiative: 0.5
    },
    {
        id: 'mummy.png',
        hitter: false,
        life: 4,
        damage: 1,
        ranged: false,
        moveSpeed: 1000,
        attackSpeed: 1000,
        initiative: 0.5
    },
    {
        id: 'lich.png',
        hitter: 'plasma.png',
        rangedSprite: 'plasma.png',
        life: 3,
        damage: 3,
        ranged: true,
        moveSpeed: 400,
        attackSpeed: 600,
        initiative: 0.6
    },
    {
        id: 'ghost.png',
        hitter: false,
        life: 2,
        damage: 1,
        ranged: false,
        moveSpeed: 1000,
        attackSpeed: 1000,
        initiative: 0.5
    },
    {
        id: 'mud-monster.png',
        hitter: false,
        life: 3,
        damage: 1,
        ranged: false,
        moveSpeed: 1000,
        attackSpeed: 1000,
        initiative: 0.5
    },
    {
        id: 'ape.png',
        hitter: 'hand1.png',
        life: 3.6,
        damage: 3.3,
        ranged: false,
        moveSpeed: 800,
        attackSpeed: 400,
        initiative: 1
    },
    {
        id: 'tentacle.png',
        hitter: false,
        life: 1,
        damage: 1,
        ranged: false,
        moveSpeed: 400,
        attackSpeed: 400,
        initiative: 1
    },
    {
        id: 'young-demon.png',
        hitter: 'tentacle.png',
        rangedSprite: 'poison.png',
        life: 5,
        damage: 4,
        ranged: true,
        moveSpeed: 400,
        attackSpeed: 400,
        initiative: 1
    },
    {
        id: 'priest.png',
        hitter: 'sickle.png',
        life: 0.2,
        damage: 0.2,
        ranged: false,
        moveSpeed: 400,
        attackSpeed: 400,
        initiative: 1
    }
]


DATA.arenaLines = [
    {icon: 'priest', text: 'Here comes your opponents for today!'},
    {icon: 'priest', text: 'Maybe today is the day you die Brinley!'},
    {icon: 'priest', text: 'There are many people to watch you fail today!'},
    {icon: 'priest', text: 'Another territory surrendered to me last night!'},
    {icon: 'priest', text: 'The people\'s hope fades Brinley!'},
    {icon: 'priest', text: 'Try not to lose an arm out there today!'},
    {icon: 'priest', text: 'How long do you think you can keep this up?'},
    {icon: 'priest', text: 'Tough match for today!'},
    {icon: 'priest', text: 'Every day you remain here my power grows!'}
];

DATA.arenaMobs = {
    humans: [
        'bandit.png',
        'bandit2.png',
        'marauder.png',
        'marauder2.png',
        'ghoul.png',
        'ghost.png',
        'mummy.png'
    ],
    creatures: [
        'wolf.png',
        'frog.png',
        'bees.png',
        'snake.png',
        'mud-monster.png'
    ]
};

DATA.arenaMaps = [
    [[{"id":"w-grass3","rot":0,"w":true},{"id":"o-fence1","rot":0,"w":false},{"id":"o-fence1","rot":0,"w":false},{"id":"o-fence1","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-roots3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-skeleton1","rot":180,"w":false},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-roots2","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"o-skeleton1","rot":270,"w":false},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots1","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"o-fence1","rot":0,"w":false},{"id":"o-fence1","rot":0,"w":false},{"id":"o-fence1","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true}]],
    [[{"id":"w-dots1","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots1","rot":90,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"o-thorns2","rot":0,"w":false},{"id":"w-dots2","rot":90,"w":true},{"id":"o-thorns2","rot":90,"w":false},{"id":"w-dots2","rot":180,"w":true}],[{"id":"w-dots1","rot":180,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots1","rot":0,"w":true},{"id":"w-dots1","rot":90,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":180,"w":true},{"id":"w-dots1","rot":90,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots1","rot":180,"w":true}],[{"id":"w-dots1","rot":0,"w":true},{"id":"w-dots2","rot":180,"w":true},{"id":"o-skeleton1","rot":0,"w":false},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots1","rot":0,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots1","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-dots1","rot":180,"w":true}],[{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots1","rot":180,"w":true},{"id":"w-dots1","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true}],[{"id":"w-dots2","rot":270,"w":true},{"id":"o-thorns2","rot":180,"w":false},{"id":"w-dots1","rot":90,"w":true},{"id":"o-thorns2","rot":270,"w":false},{"id":"w-dots2","rot":0,"w":true}],[{"id":"w-dots1","rot":90,"w":true},{"id":"w-dots2","rot":270,"w":true},{"id":"w-dots2","rot":0,"w":true},{"id":"w-dots2","rot":90,"w":true},{"id":"w-dots2","rot":270,"w":true}]],
    [[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots1","rot":90,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"o-water2","rot":0,"w":false},{"id":"o-bubbles5","rot":0,"w":false},{"id":"o-water3","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"o-water4","rot":0,"w":false},{"id":"o-water2","rot":0,"w":false},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-roots1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass2","rot":0,"w":true},{"id":"o-water3","rot":0,"w":false},{"id":"o-bubbles4","rot":180,"w":false},{"id":"o-water4","rot":0,"w":false},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"o-water4","rot":0,"w":false},{"id":"o-water2","rot":0,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-roots1","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}]],
    [[{"id":"w-grass2","rot":0,"w":true},{"id":"w-ruin1","rot":90,"w":true},{"id":"w-ruin3","rot":90,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-ruin3","rot":270,"w":true},{"id":"w-ruin4","rot":90,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-ruin4","rot":180,"w":true},{"id":"w-ruin2","rot":180,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"o-cart3","rot":180,"w":false},{"id":"o-cart4","rot":180,"w":false},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"o-cart2","rot":180,"w":false},{"id":"o-cart1","rot":180,"w":false},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-ruin4","rot":270,"w":true},{"id":"w-ruin3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-ruin3","rot":90,"w":true},{"id":"w-ruin1","rot":0,"w":true},{"id":"w-grass3","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}],[{"id":"w-grass3","rot":0,"w":true},{"id":"w-ruin3","rot":180,"w":true},{"id":"w-ruin4","rot":0,"w":true},{"id":"o-skeleton1","rot":90,"w":false},{"id":"w-grass1","rot":0,"w":true}],[{"id":"w-grass1","rot":0,"w":true},{"id":"w-ruin1","rot":90,"w":true},{"id":"w-ruin2","rot":0,"w":true},{"id":"w-grass1","rot":0,"w":true},{"id":"w-grass2","rot":0,"w":true}]]
];

