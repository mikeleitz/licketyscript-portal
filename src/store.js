import { DomainFactory } from './domain/LicketyScriptDomainFactory'

export const store = {
  state: {
    nextTempId: -1,
    nextOptionId: 1,
    verboseCommandId: 0,
    quietCommandId: 0,
    scriptForm: {
      scriptName: '',
      shellType: 'BASH',
      scriptInputs: [
      ]
    },
    scriptInProgress: DomainFactory.createBashScript()
  },
  getNextScriptId: function () {
    let newScriptId = this.state.nextTempId
    this.state.nextTempId -= 1
    return newScriptId
  },
  getNextOptionId: function () {
    let nextOptionId = this.state.nextOptionId
    this.state.nextOptionId += 1
    return nextOptionId
  }
}
