/*
 *  Copyright (c) 2020, Michael Leitz
 *  <p/>
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  <p/>
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  <p/>
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/*
This mixin creates a new instance of 'data' for each component. To share values across instances, it's using state.
 */

import {store} from '../../../store'

export default {
    created: function () {
    },
    data() {
        return {
            storeState: store.state,
            scriptInProgress: store.state.scriptInProgress,
            thisScriptInput: null,
            selectedBashOptionId: '',
            showArgDetail: false,
            longName: '',
            shortName: '',
            helpText: ''
        }
    },
    watch: {
        selectedBashOptionId: function (val, oldVal) {
            console.info('Selecting new bash option. old bash option id: ' + oldVal + '; new bash option id: ' + val)
            let bashOption = this.scriptInProgress.getOptionById(this.selectedBashOptionId)
            this.thisScriptInput = bashOption

            this.longName ='zxc'
            this.shortName='zxc'
            this.helpText='zxc'

            if (bashOption != null) {
                console.info('Showing arg detail')
                this.showArgDetail = true
            }
        },
        longName: function(val) {
            console.info('new longname ' + val)
            if (this.thisScriptInput != null) {
                this.thisScriptInput.longName = val
            }
        },
        shortName: function(val) {
            console.info('new shortname ' + val)
            if (this.thisScriptInput != null) {
                this.thisScriptInput.shortName = val
            }
        },
        helpText: function(val) {
            console.info('new help text ' + val)
            if (this.thisScriptInput != null) {
                this.thisScriptInput.helpText = val
            }
        },
    }
}
