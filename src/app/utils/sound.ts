export class SoundEngine {
  private static ctx: AudioContext | null = null;

  private static getCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  static playSuccess() {
    try {
      const ctx = this.getCtx();
      const playTone = (freq: number, start: number, dur: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.15, start + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
        
        osc.start(start);
        osc.stop(start + dur);
      };

      const now = ctx.currentTime;
      // Play a nice rising major chord for success
      playTone(523.25, now, 0.4);       // C5
      playTone(659.25, now + 0.1, 0.6); // E5
      playTone(783.99, now + 0.2, 0.8); // G5
      playTone(1046.50, now + 0.3, 1.0); // C6
    } catch (e) {
      console.warn("Audio not supported or blocked", e);
    }
  }

  static playPop() {
    try {
      const ctx = this.getCtx();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      // Changed from a rising sine wave (bubble) to a short, sharp, modern click/tap
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.03);
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, now);
      filter.frequency.exponentialRampToValueAtTime(100, now + 0.03);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {
      console.warn("Audio not supported or blocked", e);
    }
  }

  static playSwoosh() {
    try {
      const ctx = this.getCtx();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.2);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.2);
      
      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      console.warn("Audio not supported or blocked", e);
    }
  }

  static playAlert() {
    try {
      const ctx = this.getCtx();
      const now = ctx.currentTime;

      const playPulse = (start: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(880, start);
        osc.frequency.setValueAtTime(660, start + 0.1);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1800, start);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.12, start + 0.02);
        gain.gain.setValueAtTime(0.12, start + 0.08);
        gain.gain.linearRampToValueAtTime(0, start + 0.18);

        osc.start(start);
        osc.stop(start + 0.2);
      };

      // Three urgent pulses
      playPulse(now);
      playPulse(now + 0.25);
      playPulse(now + 0.5);
    } catch (e) {
      console.warn("Audio not supported or blocked", e);
    }
  }

  static playScanning() {
    try {
      const ctx = this.getCtx();
      const now = ctx.currentTime;
      
      const osc1 = ctx.createOscillator(); // High pitch data
      const osc2 = ctx.createOscillator(); // Low drone
      const gain = ctx.createGain();
      
      osc1.type = 'square';
      osc1.frequency.setValueAtTime(800, now);
      
      // Fast LFO to create rapid data warble
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(15, now);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(150, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc1.frequency);
      
      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(60, now);
      
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.value = 8;
      
      // Slow LFO for filter sweep
      const sweepLfo = ctx.createOscillator();
      sweepLfo.frequency.setValueAtTime(0.5, now);
      const sweepGain = ctx.createGain();
      sweepGain.gain.setValueAtTime(800, now);
      sweepLfo.connect(sweepGain);
      sweepGain.connect(filter.frequency);
      
      osc1.connect(filter);
      osc2.connect(filter);
      
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.1);
      
      osc1.start(now);
      osc2.start(now);
      lfo.start(now);
      sweepLfo.start(now);
      
      return () => {
        try {
          const stopTime = ctx.currentTime;
          gain.gain.linearRampToValueAtTime(0, stopTime + 0.2);
          setTimeout(() => {
            try {
              osc1.stop();
              osc2.stop();
              lfo.stop();
              sweepLfo.stop();
            } catch (e) {}
          }, 300);
        } catch (e) {}
      };
    } catch (e) {
      console.warn("Audio not supported or blocked", e);
      return () => {};
    }
  }
}
