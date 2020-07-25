import React from 'react'
import {
    Svg,
    Path,
    LinearGradient,
    Defs,
    Stop,
    Rect,
    Pattern,
    Use,
    Image,
    SvgUri
} from 'react-native-svg'

function AuthorPostAvatar() {
    return (
        <Svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<Path d="M0 35C0 15.7037 15.6427 0 34.939 0C54.2353 0 69.8781 15.7037 69.8781 35C69.8781 54.2963 54.2353 70 34.939 70C15.6427 70 0 54.2963 0 35Z" fill="url(#paint0_linear)"/>
<Path d="M34.939 34H69.8781V62C69.8781 66.4183 66.2963 70 61.8781 70H34.939V34Z" fill="url(#paint1_linear)"/>
<Path d="M0 36H34.939V70H8C3.58173 70 0 66.4183 0 62V36Z" fill="url(#paint2_linear)"/>
<Rect x="1.99652" y="2" width="65.885" height="66" rx="32.9425" fill="url(#pattern0)"/>
<Path d="M0 55H12C16.4183 55 20 58.5817 20 63V70H8C3.58172 70 0 66.4183 0 62V55Z" fill="url(#paint3_linear)"/>
<Path d="M70 56H50C45.5817 56 42 59.5817 42 64V70H62C66.4183 70 70 66.4183 70 62V56Z" fill="url(#paint4_linear)"/>
<Defs>
<Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<Use href="#image0" transform="translate(-0.000872543) scale(0.000978267)"/> 
</Pattern>
<LinearGradient id="paint0_linear" x1="34.939" y1="0" x2="34.939" y2="70" gradientUnits="userSpaceOnUse">
<Stop offset="0.354167" stop-color="#EB674B"/>
<Stop offset="0.354267" stop-color="#EB674B"/>
</LinearGradient>
<LinearGradient id="paint1_linear" x1="52.4085" y1="34" x2="52.4085" y2="70" gradientUnits="userSpaceOnUse">
<Stop offset="0.354167" stop-color="#EB674B"/>
<Stop offset="0.354267" stop-color="#EB674B"/>
</LinearGradient>
<LinearGradient id="paint2_linear" x1="17.4695" y1="36" x2="17.4695" y2="70" gradientUnits="userSpaceOnUse">
<Stop offset="0.354167" stop-color="#EB674B"/>
<Stop offset="0.354267" stop-color="#EB674B"/>
</LinearGradient>
<LinearGradient id="paint3_linear" x1="10" y1="55" x2="10" y2="70" gradientUnits="userSpaceOnUse">
<Stop offset="0.354167" stop-color="#EB674B"/>
<Stop offset="0.354267" stop-color="#EB674B"/>
</LinearGradient>
<LinearGradient id="paint4_linear" x1="56" y1="56" x2="56" y2="70" gradientUnits="userSpaceOnUse">
<Stop offset="0.354167" stop-color="#EB674B"/>
<Stop offset="0.354267" stop-color="#EB674B"/>
</LinearGradient>
<SvgUri
    id="image0"
    width="1080px"
    height="1080px"
    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
  />
</Defs>
</Svg>

    )
}
export default AuthorPostAvatar;