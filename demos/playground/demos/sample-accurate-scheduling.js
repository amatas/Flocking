// Schedules a series of input changes.
// Composition by Colin Clark.

flock.synth({
    synthDef: {
        ugen: "flock.ugen.out",
        sources: {
            ugen: "flock.ugen.change",
            initial: {
                ugen: "flock.ugen.sin",
                freq: {
                    ugen: "flock.ugen.xLine",
                    start: 211,
                    end: 200,
                    duration: 1
                }
            },
            target: {
                ugen: "flock.ugen.change",
                initial: {
                    ugen: "flock.ugen.lfSaw",
                    freq:  {
                        ugen: "flock.ugen.xLine",
                        start: 200,
                        end: 90,
                        duration: 30
                    },
                    mul: 1.0
                },
                target: {
                    ugen: "flock.ugen.change",
                    initial: {
                        ugen: "flock.ugen.sin",
                        freq: {
                            ugen: "flock.ugen.xLine",
                            start: 200,
                            end: 211,
                            duration: 30
                        }
                    },
                    target: {
                        ugen: "flock.ugen.sin",
                        freq: {
                            ugen: "flock.ugen.change",
                            initial: {
                                ugen: "flock.ugen.sin",
                                freq: 200,
                                mul: 111
                            },
                            target: {
                                ugen: "flock.ugen.xLine",
                                start: 200,
                                end: 211,
                                duration: 45
                            },
                            time: 35,
                            crossfade: 10
                        },
                        mul: {
                            ugen: "flock.ugen.line",
                            start: 1.0,
                            end: 0.0,
                            duration: 47.5
                        }
                    },
                    time: 25,
                    crossfade: 20
                }
            },
            time: 2.0,
            crossfade: 15.0
        }
    }
});
