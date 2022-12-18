export class Writer {
	private _tool: Tool | null = null

	constructor(private _name: string) {}

	get name(): string {
		return this._name
	}

	set tool(tool: Tool | null) {
		this._tool = tool
	}

	get tool(): Tool | null {
		return this._tool
	}

	write(): void {
		if (this.tool === null) {
			console.log('I cannot write without a tool')
			return
		}
		this.tool.write()
	}
}

export abstract class Tool {
	constructor(private _name: string) {}

	abstract write(): void

	get name(): string {
		return this._name
	}
}

export class Pen extends Tool {
	write(): void {
		console.log(`${this.name} is writing`)
	}
}

export class TypeWriter extends Tool {
	write(): void {
		console.log(`${this.name} is typing`)
	}
}

const writer = new Writer('Bruno')
const pen = new Pen('Bic')
const typeWriter = new TypeWriter('IBM')

// console.log(writer.name)
// console.log(pen.name)
// console.log(typeWriter.name)

writer.write()

writer.tool = pen
writer.write()

writer.tool = typeWriter
writer.write()