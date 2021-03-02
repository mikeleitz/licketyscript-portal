<template>
  <div>
    <div class="min-h-screen bg-white">
      <nav class="bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavBar/>
        </div>
      </nav>

      <main>
        <div class="py-16 max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-hidden">
          <div class="hidden lg:block lg:absolute lg:h-full lg:w-full">
            <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
              <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none"
                   viewBox="0 0 404 384">
                <defs>
                  <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20"
                           patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
              </svg>
              <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404"
                   height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
                           patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
              </svg>
              <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none"
                   viewBox="0 0 404 384">
                <defs>
                  <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20"
                           patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"/>
              </svg>
            </div>
          </div>
          <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg max-w-prose mx-auto">
              <h1>
                <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">How To</span>
                <span
                    class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Use Lickety Script</span>
              </h1>
            </div>
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <h2>Part one : the Lickety Script app</h2>
              <p>For part one, you use the Lickety Script application to generate your script.</p>

              <h3>Navigate to Lickety Script</h3>
              <p>Use the menu to get there.</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/00-application-selected.png" alt="">

              <h3>Enter the script's name</h3>
              <p>This is the command that will you want to execute on the command line. e.g. my-script.sh. This example script is executed with add-two-numbers.sh. So the name is add-two-numbers.</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/01-script-name.png" alt="">

              <h3>Enter the script's argument</h3>
              <p>The script in this example has two args: num-one and num-two.</p>

              <h4>Enter argument num-one and its details</h4>
              <p>Click the add button to create a new argument.</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/02-new-arg-1.png" alt="">

              <h4>Enter details in the detail section</h4>
              <p>Change the name to num-one. Add short name as -o and relevant help text. Toggle the validation to required.</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/03-new-arg-detail-1.png" alt="">


              <h4>Add argument num-two and enter its details</h4>
              <p>Click the add button to create a new argument and enter details as before but for num-two. Short name as t, help text, and toggle validation to required.</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/04-new-arg-detail-2.png" alt="">

              <h3>Click the create script button</h3>
              <p>This will download aa zip file with script framework. This zip file will contain everything you need to install and run your script -- minus your custom code that you haven't written yet</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/05-downloaded-file-2.png" alt="">

              <h3>Inspect the zip file's contents</h3>
              <p>On Linux/Mac you can run 'unzip -l add-two-numbers.zip' to show you the contents. If yours looks like this, part one is complete. Move to part two. If it doesn't then something is broken and let me know about it <a href="https://twitter.com/mleitz1">on twitter</a></p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/06-download-zip-list.png" alt="">
            </div>
            <div class="mt-6 prose pr ose-indigo prose-lg text-gray-500 mx-auto">
              <h2>Part two : Install the script</h2>
              <p>Once you have the zip file, you can install it on your computer.</p>

              <h3>Unzip and make installer.sh executable</h3>
              <p>Run the following commands.</p>
              <ol>
                <li>unzip add-two-numbers.zip</li>
                <li>cd add-two-numbers</li>
                <li>chmod +x installer.sh</li>
                <li>./installer.sh</li>
              </ol>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/07-unzip.png" alt="">
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/08-make-installer-executable.png" alt="">
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/09-install-script.png" alt="">

              <h3>Update your path</h3>
              <p>The installer puts the files in various subdirectories in $HOME/.lickety-script.</p>
              <p>Update your $HOME/.bash_profile to include the following lines.</p>
              <ol>
                <li>export PATH=$HOME/.lickety-script/bin:$PATH</li>
                <li>export LICKETY_SCRIPT_HOME=$HOME/.lickety-script/</li>
              </ol>
              <p>Reload your shell or run 'source $HOME/.bash_profile'</p>

              <h3>Run the script</h3>
              <p>Run 'add-two-numbers.sh -h'</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/10-run-script-help.png" alt="">

              <p>Test run with arguments.</p>
              <p>Run with arguments set and in verbose mode: 'add-two-numbers.sh -v --num-one 5 --num-two 3'</p>

              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/11-script-test-run.png" alt="">

            </div>
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <h2>Part three : Implement</h2>

              <h3>Locate install directory</h3>
              <p>Go to script's directory in the Lickety Script home directory in : 'cd $HOME/.lickety-script/scripts/add-two-numbers'</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/12-add-two-numbers-directory.png" alt="">

              <h3>Edit main script file</h3>
              <p>Edit the main script file and add your implementation. In this example we're adding two numbers together and we'll use the Linux command 'bc'.</p>
              <p>Edit the file with vi or your favorite text editor. 'vi add-two-numbers.sh'</p>
              <p>Add the line 'bc "$NUM_DASH_ONE_ARG + $NUM_DASH_TWO_ARG"' at the bottom of the add-two-numbers.sh file. Save the file.</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/13-add-addition-logic.png" alt="">

              <h3>Run it!</h3>
              <p>Give it a test run with 'add-two-numbers.sh -o 6 -t 3' and see the result.</p>
              <img class="object-cover shadow-lg rounded-lg" src="@/assets/how-to/14-run-it.png" alt="">

              <h3>You're done</h3>
              <p>You can see how Lickety Script takes care of all the parsing, validation, and help menu creation. It leaves you with the task of the script's implementation.</p>
              <p>Now you can start experimenting and building your own scripts much faster and easier than before.</p>
              <p>If you run into any issues or have any questions, please let me know on one of the various channels.</p>
              <p><a href="https://www.linkedin.com/in/mike-leitz">LinkedIn</a></p>
              <p><a href="https://twitter.com/mleitz1">Twitter</a></p>
              <p><a href="https://github.com/mikeleitz/licketyscript-portal">Lickety-Script Github</a></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar";

export default {
  name: 'About',
  components: {
    NavBar,
  },
  metaInfo() {
    return {
      title: "Lickety Script - About",
      meta: [
        {
          name: 'description',
          content: 'Lickety Script is a framework for creating Bash scripts. You: Write your specific script logic. Lickety Script: Handles the rest: parsing input, validating input, displaying help.'
        },
        {property: 'og:title', content: "Lickety Script - The web application for creating Bash scripts easily!"},
        {property: 'og:site_name', content: 'Lickety Script'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
      ]
    }
  }
}
</script>
