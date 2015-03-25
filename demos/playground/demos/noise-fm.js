// LFNoise randomly changing the pitch of a sine
// oscillator every quarter second.

flock.synth({
    synthDef: {
        ugen: "flock.ugen.sinOsc",
        mul: 0.25,
        freq: {
            ugen: "flock.ugen.lfNoise",
            freq: 4,
            mul: 400,
            add: 450
        }
    }
});
