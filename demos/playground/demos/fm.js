flock.synth({
	synthDef: {
        ugen: "flock.ugen.sin",
        freq: {
            ugen: "flock.ugen.value",
            rate: "audio",
            value: 400,
            add: {
                ugen: "flock.ugen.sin",
                freq: {
                    ugen: "flock.ugen.mouse.cursor",
                    mul: 124,
                    add: 62,
                },
                mul: {
                    ugen: "flock.ugen.mouse.cursor",
                    mul: 100,
                    add: 100,
                    options: {
                        axis: "y"
                    }
                }
            }
        },
        mul: 0.3
	}
});
