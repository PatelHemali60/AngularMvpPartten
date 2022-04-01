export class upload {
    public idx: number;
    public file: any;

    constructor(
        idx: number,
        file: any,

    ) {
        this.idx = idx;
        this.file = file;
    }
}

export class files {
    public id: number;
    public name: any;

    constructor(
        id: number,
        name: File,
    ) {
        this.id = id;
        this.name = name;
    }
}