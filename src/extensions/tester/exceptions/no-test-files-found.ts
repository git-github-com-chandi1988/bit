import { PaperError } from '../../cli';

export class NoTestFilesFound extends PaperError {
  constructor(private testRegex: string) {
    super();
  }

  report() {
    return `no test files for regex: '${this.testRegex}' found for any of the components in the workspace.`;
  }
}
