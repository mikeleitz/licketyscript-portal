job("build and publish vuejs version of mikeleitz.com") {
    docker {
        build {
            file = "./Dockerfile"
        }

        push("leadtechnologist.registry.jetbrains.space/p/sws/static-website-containers/mikeleitz-vuejs") {
            tag = "0.\$JB_SPACE_EXECUTION_NUMBER"
        }

    }
}
