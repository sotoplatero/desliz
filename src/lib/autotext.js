import Konva from 'konva-node'
// const { loadImage } = require('canvas')

export default async function autotext({
	x,
	y,
	t,
	h,
    w,
	p = 0,
    align = 'center',
	color = '#000000',
}) {

	x = x || p
	y = y || p
    const author = t.match(/@\w+/)?.join()
    t = t.replace(/@\w+/,'')    

    var textbox = new Konva.Text({
        x: 0,
        y: 0,
        padding: p,
        text: t,
        fontSize: 300,
        // fontFamily: 'Calibri',
        fontWeight: 900,
        // lineHeight: 0.85,
        fill: color,
        width: w,
        align: align
    });  

    var tArr = t.replace(/\s+/,' ').split(/[\s\n]+/);
    const ratioAuthor = 4.25
    const sizeAuthor = !!author ? (textbox.fontSize() / ratioAuthor) : 0
    const marginLeftTextAuthor = 30

    do {
        textbox.fontSize( textbox.fontSize() - 1 )
    } while ( 
        (textbox.getHeight() > h - ( 2 * sizeAuthor ) ) ||
        tArr.length != textbox.textArr.map( el => el.text ).join(' ').split(/\s/).length
    )

    if (!author) {
        const fixY = ( h - textbox.getHeight() ) / 2
        textbox.y( fixY )
    }

    var groupText = new Konva.Group({
        x: x,
        y: y,
    });

    groupText.add(textbox)

    // if (author) {

    //     const url = `https://unavatar.vercel.app/twitter/${author.replace(/@/,'')}`
    //     const avatar = await loadImage(url)

    //     var avatarAuthor = new Konva.Image({
    //         x: padding,
    //         y: padding,
    //         image: avatar,
    //         width: sizeAuthor,
    //         height: sizeAuthor
    //     });
    //     // var avatarAuthor = new Konva.Circle({
    //     //     x: 0,
    //     //     y: 0,
    //     //     fillPatternImage: avatar,
    //     //     width: sizeAuthor,
    //     //     height: sizeAuthor
    //     // })
        

    //     var textAuthor = new Konva.Text({
    //         x: padding + esizeAuthor + marginLeftTextAuthor,
    //         y: padding,
    //         padding: 0,
    //         text: author,
    //         fontSize: sizeAuthor,
    //         fontFamily: 'Calibri',
    //         fill: color,
    //     });

    //     const widthAvatarAndAuthor = textAuthor.getWidth() + sizeAuthor + marginLeftTextAuthor
    //     const xAvatar = {
    //         center: (w - (widthAvatarAndAuthor + padding) )/2,
    //         rigth: (w - (widthAvatarAndAuthor + padding)),
    //         left: 0,
    //     }[ align ]

    //     var groupAuthor = new Konva.Group({
    //         x: xAvatar,
    //         y: h - (sizeAuthor ),
    //     });

    //     groupAuthor.add(avatarAuthor)
    //     groupAuthor.add(textAuthor)

    //     groupText.add(groupAuthor)
    // }

    return groupText	
}