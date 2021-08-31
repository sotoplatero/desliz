import marked from 'marked'

export default  function(slide) {

    const replaceTitle = '<h2 class="font-bold text-5xl sm:text-7xl text-center mb-8 capitalize">$1</h2>'
    const replaceUser = '<a href="https://twitter.com/$1" class="underline font-semibold">$&</a>'
    const replaceURL = '<a href="https://$1" class="underline font-semibold">$1</a>'

    if ( (slide.match(/\|/g) || []).length > 1 ) {
        slide = '## ' + slide
    }
    // const body = marked( lines.replace(/\|/g,'\n') )
    return marked( slide.replace(/\|/g,'\n') )

    // return slide 
    //     .replace(/^([\w\s]+)\./,replaceTitle)
    //     .replace(/@([a-zA-Z0-9]+)/, replaceUser)
    //     .replace(/\[(([a-z0-9]+\.)+[a-z]{2,3})\]+/ig, replaceURL)
}