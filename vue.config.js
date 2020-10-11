module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/styles/variables.sass"\n@import "@/assets/styles/fonts.sass"\n@import "@/assets/styles/mixins.sass"'
            }
        }
    }
}