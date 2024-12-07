import {Document} from 'mongoose';

export class HelloWorldDocument extends Document {
  title: string;
  sulg: string;
  description: string | null;
  url: string | null;
  language_short: string | null;
  code: string;

  constructor(
    title: string,
    sulg: string,
    description: string | null,
    url: string | null,
    language_short: string | null,
    code: string,
  ) {
    super();
    this.title = title;
    this.sulg = sulg;
    this.description = description;
    this.url = url;
    this.language_short = language_short;
    this.code = code;
  }
}
