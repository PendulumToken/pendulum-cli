export class NumberUtils {
  
  static round(value: number, scale: number): number {
    let factor = Math.pow(10, scale); 
    return Math.round(value * factor) / factor;
  }

  static format(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
}