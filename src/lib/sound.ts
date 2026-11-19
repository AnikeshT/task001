// Ultra-lightweight Web Audio sound engine for luxury tactile feedback (0 external audio files needed)

class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  // Soft wooden / luxury mechanical click
  public playClick(freq = 600) {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // Audio autoplay restrictions
    }
  }

  // Soft harmonic chime for destination selection
  public playChime() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5 triad
      freqs.forEach((f, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, this.ctx!.currentTime + i * 0.04);

        gain.gain.setValueAtTime(0.04, this.ctx!.currentTime + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + i * 0.04 + 0.18);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(this.ctx!.currentTime + i * 0.04);
        osc.stop(this.ctx!.currentTime + i * 0.04 + 0.18);
      });
    } catch {
      // Audio error
    }
  }
}

export const sound = new SoundEngine();
