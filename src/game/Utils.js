export class UtilClass {
	static SPRITEWIDTH = 32;
	static SPRITEHEIGHT = 32;
	static SPRITEHEIGHTLARGE = 64;
	static pixelCoordsFromLogicCoords(x, y) {
		var xNew = x * this.SPRITEWIDTH + this.SPRITEWIDTH / 2;
		var yNew = y * this.SPRITEHEIGHT + this.SPRITEHEIGHT / 2
		return [xNew, yNew];
	}
	
}