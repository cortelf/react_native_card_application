import React from 'react';
import {
    StyleSheet, 
    View,
    ScrollView, 
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    SafeAreaView
} from 'react-native';
import {Post as PostType} from '../types';
import PeopleIcon from '../assets/icons/PeopleGray';
import Favorites2Icon from '../assets/icons/Favorites2';
import StartChatIcon from '../assets/icons/StartChat';
import Share24Icon from '../assets/icons/Share24';

export default class Post extends React.Component<PostType> {
    state = {
        bodyExpanded: false
    };

    renderBottomBarPhoto(left, right) {
        if (left) {
            if (this.props.fliendCallUsers.length === 0) {
                return  <Image source={require("../assets/icons/UnknowAnimal.png")} />
            }
            else if (this.props.fliendCallUsers.length === 1) {
                return  <Image style={styles.bottomBarPhoto} source={{uri: this.props.fliendCallUsers[0].photo}} />
            }
            else {
                return ( 
                <View style={styles.manyPhotoView}>
                    <Image style={styles.manyPhotoViewFirst} source={{uri: this.props.fliendCallUsers[0].photo}} />
                    <Image style={[styles.manyPhotoViewSecondLeft, styles.bottomBarPhoto]} source={{uri: this.props.fliendCallUsers[1].photo}} />
                </View>
                )
            }
        }
        if (right) {
            if (this.props.reTalkUsers.length === 0) {
                return  <Image source={require("../assets/icons/UnknowAnimal.png")} />
            }
            else if (this.props.reTalkUsers.length === 1) {
                return  <Image style={styles.bottomBarPhoto} source={{uri: this.props.reTalkUsers[0].photo}} />
            }
            else {
                return ( 
                <View style={styles.manyPhotoView}>
                    <Image style={[styles.manyPhotoViewSecondRight, styles.bottomBarPhoto]} source={{uri: this.props.reTalkUsers[1].photo}} />
                    <Image style={styles.manyPhotoViewFirst} source={{uri: this.props.reTalkUsers[0].photo}} />
                    
                </View>
                )
            }
        }
        
    }

    render() {
        return (
            <>
            {/* <SafeAreaView> */}
                <ScrollView style={styles.mainScroller}>
                    <View style={styles.tagContainer}>
                        {this.props.keywords.map((word, index) =>
                         <View style={styles.tagItem} key={`tag${index}`}>
                             <Text style={styles.tagText}>{word}</Text>
                         </View>
                         )}
                    </View>
                    <View style={styles.iconsContainer}>
                        <View style={styles.iconItemPart}>
                            <View style={styles.iconItemBase}>
                                <PeopleIcon />
                                <Text style={styles.iconText}>{this.props.peopleCount}</Text>
                            </View>
                            {this.props.onlineCount > 0 &&
                                <View style={[styles.iconItemBase, styles.iconTextOnline]}>
                                    <Text style={styles.iconTextOnlineText}>{this.props.onlineCount} Online</Text>
                                </View>
                            }
                        </View>
                        <View style={styles.iconItemPart}>
                            <View style={[styles.iconItemBase, styles.iconCommentsCountContainer]}>
                                <StartChatIcon />
                                <Text style={styles.iconText}>{this.props.comments.length}</Text>
                            </View>
                            <View style={styles.iconItemBase}>
                                <Favorites2Icon />
                                <Text style={styles.iconText}>{this.props.bookmarksCount}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                    <View style={styles.postBody}>
                        <Text style={styles.postBodyText}>
                            {this.props.body.length > 70 && !this.state.bodyExpanded 
                                ? this.props.body.slice(0, 67) + "...  " 
                                : this.props.body}
                                {
                                (this.props.body.length > 70 && !this.state.bodyExpanded) && 
                                    <TouchableWithoutFeedback onPress={() => this.setState({bodyExpanded: true})}>
                                        <Text style={styles.expandText}>expand</Text>
                                    </TouchableWithoutFeedback>
                                }
                        </Text>
                        
                    </View>
                    <View style={styles.authorInformationContainer}>
                        <View style={styles.authorAvaterPart}>
                            <Image style={styles.authorAvatarImage} source={{uri: this.props.author.photo}}/>
                            <View style={styles.authorNameContainer}>
                                <Text style={styles.authorPositionText}>Topic creator</Text>
                                <Text style={styles.authorNameText}>{this.props.author.name}</Text>
                            </View>
                        </View>
                       <TouchableOpacity style={styles.shareButtonContainer} onPress={this.props.onShareTap}>
                            <Text style={styles.shareButtonText}>Share</Text>
                            <Share24Icon />
                       </TouchableOpacity>
                    </View>
                    <View style={styles.children}>
                        {this.props.children}
                    </View>
                </ScrollView>
                {/* </SafeAreaView> */}
                <View style={styles.bottomBarContainer}>
                    <TouchableOpacity style={styles.bottomBarLeftContainer} onPress={this.props.onFriendCallTap}>
                        <View style={styles.bottomBarAvatarContainer}>
                            {this.renderBottomBarPhoto(true, false)}
                            <Text style={{...styles.bottomBarLeftText, right: this.props.fliendCallUsers.length > 1 ? 12 : 0}}>Friend call</Text>
                        </View>
                        <Image style={styles.bottomBarLeftLine} source={require("../assets/images/bootom_line.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBarRightContainer} onPress={this.props.onReTalkTap}>
                        <Image style={styles.bottomBarRightLine} source={require("../assets/images/top_line.png")} />
                        <View style={styles.bottomBarAvatarContainerRight}>
                            {this.renderBottomBarPhoto(false, true)}
                            <Text style={{...styles.bottomBarRightText, right: this.props.reTalkUsers.length > 1 ? 12 : 0}}>New ReTalking</Text>
                        </View>
                    </TouchableOpacity>
                    <Image style={styles.bottomAbsoluteWrapper} source={require("../assets/images/monkey.png")} />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    tagContainer: {
        marginTop: 25,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tagItem: {
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 7,
        marginRight: 10,
        marginBottom: 15,
        backgroundColor: 'rgba(74, 137, 145, 0.15)'
    },
    tagText: {
        fontFamily: "FuturaBookC",
        color: '#434272',
        fontSize: 14
    },
    mainScroller: {
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    titleText: {
        fontFamily: "CeraPro-Black",
        fontSize: 32,
        color: '#434272',

        marginTop: 22
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: 5
    },
    iconItemBase: {
        paddingVertical: 6,
        flexDirection: 'row',
    },
    iconTextOnline: {
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: '#DDF9C7',

        marginLeft: 5
    },
    iconText: {
        fontFamily: "FuturaBookC",
        color: '#9BC2C9',
        fontSize: 14,

        marginLeft: 5
    },
    iconTextOnlineText: {
        fontFamily: "FuturaBookC",
        color: '#44B01E',
        fontSize: 14,
    },
    iconItemPart: {
        flexDirection: 'row',
    },
    iconCommentsCountContainer: {
        marginRight: 50
    },
    postBody: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    postBodyText: {
        fontFamily: "FuturaBookC",
        color: '#434272',
        fontSize: 18,
    },
    expandText: {
        fontFamily: "FuturaBookC",
        color: '#4F959E',
        fontSize: 18,
        textAlign: 'justify'
    },
    authorInformationContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',

        marginTop: 20,
        alignItems: 'flex-end'
    },
    authorAvatarImage: {
        height: 70,
        width: 70,
        borderRadius: 300,
        borderWidth: 2,
        borderColor: '#EB674B'
    },
    authorAvaterPart: {
        flexDirection: 'row',
    },
    authorNameContainer: {
        marginLeft: 10,
        justifyContent: 'flex-end'
    },
    authorPositionText: {
        fontFamily: "FuturaBookC",
        color: '#9BC2C9',
        fontSize: 14,
    },
    authorNameText: {
        fontFamily: "FuturaBookC",
        color: '#AB453D',
        fontSize: 16,

        marginTop: 2
    },
    shareButtonContainer: {
        paddingVertical: 16,
        paddingHorizontal: 13,
        backgroundColor: '#EBF3F4',
        justifyContent: 'flex-end',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    shareButtonText: {
        fontFamily: "FuturaBookC",
        color: '#9BC2C9',
        fontSize: 14,
        marginRight: 10,

        marginTop: 2,
        
    },
    bottomBarContainer: {
        backgroundColor: '#EB674B',
        
        flexDirection: 'row',
        
    },
    bottomBarLeftContainer: {
        borderRightColor: '#AB453D',
        borderRightWidth: 1,
        flex: 1,
        paddingTop:23,
        paddingBottom: 24,

        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    bottomBarRightContainer: {
        borderLeftColor: '#AB453D',
        borderLeftWidth: 1,
        flex: 1,
        paddingBottom:33,
        paddingTop: 24
    },
    bottomBarAvatarContainer: {
        width: 157,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'white'
    },
    bottomBarLeftText: {
        marginLeft: 5,
        fontFamily: "FuturaBookC",
        color: '#ffffff',
        fontSize: 14,
    },
    bottomBarLeftLine: {
        top: -15
    },
    bottomAbsoluteWrapper: {
        flex: 1,
        position: 'absolute',
        height: 40,
        width: 40,
        zIndex: 999,
        //backgroundColor: 'green',
        right: Dimensions.get('window').width /2 -20,
        top: 25
    },
    bottomBarRightLine: {
        top: 0
    },
    bottomBarAvatarContainerRight: {
        width: 157,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        //justifyContent: 'flex-end',
        //backgroundColor: 'white',

        top: -13
    },
    bottomBarRightText: {
        marginRight: 5,
        fontFamily: "FuturaBookC",
        color: '#ffffff',
        fontSize: 14,
    },
    manyPhotoView: {
        flexDirection: 'row'
    },
    manyPhotoViewFirst: {
        borderWidth: 1,
        height: 34,
        width: 34,
        borderRadius: 300,
        borderColor: '#EB674B'
    },
    manyPhotoViewSecondLeft: {
        right: 12,
        zIndex: -7
    },
    manyPhotoViewSecondRight: {
        right: -12,
        zIndex: -7
    },
    bottomBarPhoto: {
        height: 32,
        width: 32,
        borderRadius: 300
    },
    children: {
        marginTop: 40,
        paddingBottom: 10
    }

})