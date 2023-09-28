namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const gamberetto = SpriteKind.create()
    export const gamberetto1 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (omino_verde.vy == 0) {
        omino_verde.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gamberetto1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    crazy_tickexe = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    crazy_tickexe,
    [img`
        . . f f f . . . . . f f f . . . 
        . f f 2 f . . . . . f 3 f . . . 
        . f 2 2 f . . . . . f 3 3 f . . 
        . f 2 2 f f f f f f f 3 3 f . . 
        . f 2 f 4 4 4 4 4 4 4 f 3 f . . 
        . f f f f f f f f f f f f f . . 
        . d f f 2 f f f f f 2 f f d . . 
        . d f f f f f f f f f f f d . . 
        f f f 4 4 4 4 4 4 4 4 4 f f f . 
        f d f 4 2 5 4 4 5 2 5 4 f d f . 
        f d f 4 2 5 2 5 5 2 4 4 f d f . 
        f d f 4 4 5 2 5 5 4 4 4 f d f . 
        . 2 . f 4 4 4 4 4 4 4 f . 2 . . 
        . 5 2 . f f f f f f f . 2 2 . . 
        2 5 4 . f . . . . f . . 5 4 2 . 
        . 2 . f f . . . . f f . 2 5 2 . 
        `,img`
        . . f f f . . . . . f f f . . . 
        . f f 2 f . . . . . f 3 f . . . 
        . f 2 2 f . . . . . f 3 3 f . . 
        . f 2 2 f f f f f f f 3 3 f . . 
        . f 2 f 4 4 4 4 4 4 4 f 3 f . . 
        . f f f f f f f f f f f f f . . 
        . d f f 2 f f f f f 2 f f d . . 
        . d f f f f f f f f f f f d . . 
        f f f 4 4 4 4 4 4 4 4 4 f f f . 
        f d f 4 2 5 4 4 5 2 5 4 f d f . 
        f d f 4 2 5 2 5 5 2 4 4 f d f . 
        f d f 4 4 5 2 5 5 4 4 4 f d f . 
        . 2 . f 4 4 4 4 4 4 4 f . 2 . . 
        . 2 2 . f f f f f f f . 2 2 . . 
        2 5 . . f . . . . f . . . 4 2 . 
        . 2 . f f . . . . f f . 2 5 . . 
        `,img`
        . . f f f . . . . . f f f . . . 
        . f f 2 f . . . . . f 3 f . . . 
        . f 2 2 f . . . . . f 3 3 f . . 
        . f 2 2 f f f f f f f 3 3 f . . 
        . f 2 f 4 4 4 4 4 4 4 f 3 f . . 
        . f f f f f f f f f f f f f . . 
        . d f f 2 f f f f f 2 f f d . . 
        . d f f f f f f f f f f f d . . 
        f f f 4 4 4 4 4 4 4 4 4 f f f . 
        f d f 4 2 5 4 4 5 2 5 4 f d f . 
        f d f 4 2 5 2 5 5 2 4 4 f d f . 
        f d f 4 4 5 2 5 5 4 4 4 f d f . 
        . 2 . f 4 4 4 4 4 4 4 f . 2 . . 
        . 2 2 . f f f f f f f . 2 2 2 . 
        2 5 2 . f . . . . f . . 2 5 2 . 
        5 4 5 f f . . . . f f . 5 4 5 . 
        `],
    150,
    true
    )
    crazy_tickexe.setPosition(omino_verde.x + 80, omino_verde.y - 80)
    crazy_tickexe.follow(omino_verde)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (omino_verde.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let crazy_tickexe: Sprite = null
let gamberetto: Sprite = null
let coin: Sprite = null
let omino_verde: Sprite = null
scene.setBackgroundColor(9)
omino_verde = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f . f . f . . . . . . 
    . . . . f 2 f 2 f 2 f . . . . . 
    . . f f f f f f f f f f . . . . 
    . . f 7 7 7 7 7 7 7 7 f . . . . 
    . . f 7 f 7 7 f 7 f 7 f . . . . 
    . . f 7 f 7 f f 7 f 7 f . . . . 
    . . f 7 7 7 7 7 7 7 7 f . . . . 
    . . f 7 7 f f f 7 7 7 f . . . . 
    . . f 7 7 7 7 7 7 7 7 f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . . f . . . . f . . . . . . 
    . . . f f . . . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(omino_verde, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
omino_verde.ay = 300
scene.cameraFollowSprite(omino_verde)
info.setLife(3)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 1 f . . . . 
        . . f 5 5 4 4 4 4 5 5 1 f . . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 1 f . . . . 
        . . f 5 5 4 4 4 4 5 5 1 f . . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 1 f . . . . . 
        . . . f 5 5 4 4 5 5 1 f . . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 1 f . . . . . 
        . . . . f 5 4 4 5 5 f . . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 1 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f f f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f f f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 1 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 1 f . . . . . 
        . . . . f 5 4 4 5 5 f . . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 1 f . . . . . 
        . . . f 5 5 4 4 5 5 1 f . . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 1 f . . . . 
        . . f 5 5 4 4 4 4 5 5 1 f . . . 
        . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        gamberetto = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 4 2 2 . . . . . 
            . . . . . . 2 2 4 4 2 2 2 . . . 
            . . . 2 4 2 2 2 4 4 2 1 f 2 2 . 
            . . 2 2 4 4 2 2 2 4 2 f f 2 . . 
            . 2 2 2 2 4 2 2 2 4 2 2 2 2 2 2 
            . 2 2 2 2 . . . . 2 2 2 2 . 2 . 
            . 2 4 4 . . . . . . . 2 . . 2 . 
            . 4 4 4 . . . . . . . . . . 2 . 
            . 2 2 2 2 2 2 . . . . . . 2 2 . 
            . 2 2 4 4 . . . . . 2 2 2 2 . . 
            . . 4 4 2 2 2 2 . . . . . . . . 
            . . . 2 2 2 . . . . . . . . . . 
            `, SpriteKind.gamberetto1)
        tiles.placeOnTile(gamberetto, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
game.onUpdate(function () {
    omino_verde.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . f 2 f 2 f 2 f . . . . . 
        . . f f f f f f f f f f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 f 7 7 f 7 f 7 f . . . . 
        . . f 7 f 7 f f 7 f 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 f f f 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . . f . . . . f . . . . . . 
        . . . f f . . . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (omino_verde.vy < 0) {
        omino_verde.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f . f . f . . . . . . 
            . . . . f 2 f 2 f 2 f . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f f f 7 7 f 7 f f f . . . . 
            . . f 7 7 7 f f 7 7 7 f . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f 7 7 7 f 7 7 7 7 f . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f . . . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (omino_verde.vy > 0) {
        omino_verde.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f . f . f . . . . . . 
            . . . . f 2 f 2 f 2 f . . . . . 
            . . . . f 2 f 2 f 2 f . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f 7 f 7 7 f 7 f 7 f . . . . 
            . . f 7 7 7 f f 7 7 7 f . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f 7 7 7 7 f 7 7 7 f . . . . 
            . . f 7 7 7 7 f 7 7 7 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . . f . . . . f . . . . . . 
            . . . . f . . . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (omino_verde.x % 2 == 0) {
        omino_verde.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f . f . f . . . . . . 
            . . . . f 2 f 2 f 2 f . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f 7 f 7 7 f 7 f 7 f . . . . 
            . . f 7 f 7 f f 7 f 7 f . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f 7 7 f f f 7 7 7 f . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . . f . . . . f . . . . . . 
            . . . . f f . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
    if (omino_verde.vx < 0) {
        omino_verde.image.flipX()
    }
})
