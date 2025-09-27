import { BaseMessage } from "./baseMessage";

export class Message implements BaseMessage {
    readonly sender: string;
    readonly body: string;
    readonly date: Date;

    constructor(sender: string, body: string, date: Date) {
        this.sender = sender;
        this.body = body;
        this.date = date;
    }
}