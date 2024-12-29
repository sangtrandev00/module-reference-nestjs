import { Injectable } from "@nestjs/common";

@Injectable()
export class ExampleService {
    constructor() { }

    doSomething() {
        return `do something!`
    }

}