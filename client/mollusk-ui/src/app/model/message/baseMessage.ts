export interface BaseMessage {
  readonly sender: string;
  readonly body: string;
  readonly date: Date;
}