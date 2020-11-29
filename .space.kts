job("build and publish vuejs version of mikeleitz.com") {
    docker {
        build {
            file = "./Dockerfile"
        }

        push("leadtechnologist.registry.jetbrains.space/p/lsc/leadtechnologist-containers/licketyscript-portal") {
            tag = "0.\$JB_SPACE_EXECUTION_NUMBER"
        }

    }
}
