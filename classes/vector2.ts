interface Vector {
    x: number;
    y: number;
}

class Vector2 implements Vector {
    constructor(
        public x: number,
        public y: number
    ) {}

    public static from(vector: Vector) {
        return new Vector2(vector.x, vector.y);
    }

    public toString(): string {
        return `{ ${this.x}, ${this.y} }`;
    }

    public equals(other: Vector): boolean {
        return this.x === other.x && this.y === other.y;
    }

    public createClone(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    public add(other: Vector) {
        this.x += other.x;
        this.y += other.y;

        return this;
    }

    public sub(other: Vector) {
        this.x -= other.x;
        this.y -= other.y;

        return this;
    }

    public multiply(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;

        return this;
    }

    public divide(scalar: number) {
        this.x /= scalar;
        this.y /= scalar;

        return this;
    }

    public getCross(other: Vector): number {
        return this.x * other.y - this.y * other.x;
    }

    public getDot(other: Vector): number {
        return this.x * other.x + this.y * other.x;
    }
}