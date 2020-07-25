import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import {Post} from '../types';
import PeopleIcon from '../assets/icons/People';
import Favorites2Icon from '../assets/icons/Favorites2';
import StartChatIcon from '../assets/icons/StartChat';
import ShareIcon from '../assets/icons/Share';

export type PostCardProps = {
    onCardTap: () => void
} & Post

export default class PostCard extends React.Component<PostCardProps> {
    renderTags() {
        let tags = this.props.keywords;
        let tagsToRender = tags.length > 2 ? tags.slice(0, 2) : tags;

        let tagsRendered = tagsToRender.map((tag, index) => {
            let endTagName = tag.length > 10 ? tag.slice(0, 7) + "..." : tag;

            return (
                <View key={index} style={styles.tagContainer}>
                    <Text style={styles.tagText}>{endTagName}</Text>
                </View>
            );
        });

        return (
            <View style={styles.tagsSplitted}>
                {tagsRendered}
                {tags.length - tagsToRender.length !== 0 &&
                    <View style={styles.tagsAreaCountContainer}>
                        <Text style={styles.tagText}>{`+${tags.length - tagsToRender.length} areas`}</Text>
                    </View>  
                }
            </View>
        );
    }

    renderCardButton(title, rightBorder, letBorder, onTap) {
        return (
            <TouchableOpacity style={{...styles.cardButtonItem, borderRightWidth: rightBorder ? 1 : 0, borderLeftWidth: letBorder ? 1 : 0}} onPress={onTap}>
                <Text style={styles.cardButtonText}>{title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.tagsHeader}>
                    {this.renderTags()}
                </View>
                <View style={styles.cardBody}>
                    <TouchableWithoutFeedback onPress={this.props.onCardTap}>
                        <View style={styles.cardInformation}>
                            <View style={styles.cardInformationHeader}>
                                <View style={styles.cardInformationHeaderItemBase}>
                                    <View style={[styles.cardInformationHeaderOnlineCountContainer, styles.cardInformationHeaderItem, styles.cardInformationHeaderItemBase]}>
                                        <PeopleIcon />
                                        <Text style={[styles.cardInformationHeaderItemTextBase, styles.cardInformationHeaderItemTextOnline]}>{`${this.props.onlineCount} Online`}</Text>
                                    </View>
                                    <View style={styles.cardInformationHeaderItem}>
                                        <Text style={[styles.cardInformationHeaderItemTextBase, styles.cardInformationHeaderItemText]}>{`of ${this.props.peopleCount}`}</Text>
                                    </View>
                                </View>
                                <View style={[styles.cardInformationHeaderItemBase, styles.cardInformationHeaderItem]}>
                                    <Favorites2Icon />
                                    <Text style={[styles.cardInformationHeaderItemTextBase, styles.cardInformationHeaderItemText]}>{this.props.bookmarksCount}</Text>
                                </View>
                                <View style={[styles.cardInformationHeaderItemBase, styles.cardInformationHeaderItem]}>
                                    <StartChatIcon />
                                    <Text style={[styles.cardInformationHeaderItemTextBase, styles.cardInformationHeaderItemText]}>{this.props.comments.length}</Text>
                                </View>
                            </View>
                            <Text style={styles.cardInformationTitleText}>{this.props.title}</Text>
                            <View style={styles.cardInformationBottomBar}>
                                <View style={styles.cardInformationAuthorContainer}>
                                    <Image source={{uri: this.props.author.photo}} style={styles.cardInformationAuthorPhoto} />
                                    <Text style={styles.cardInformationAuthorText}>{this.props.author.name}</Text>
                                </View>
                                <TouchableOpacity onPress={this.props.onShareTap}>
                                    <ShareIcon />
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                <View style={styles.cardButtons}>
                    {this.renderCardButton("Friend call", true, false, this.props.onFriendCallTap)}
                    {this.renderCardButton("New ReTalking", false, true, this.props.onReTalkTap)}
                </View>
                </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    rootContainer: {

    },
    tagsHeader: {
        minHeight: 32,
        marginHorizontal: 25,

        flexDirection: 'row'
    },
    tagContainer: {
        minHeight: 32,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(45, 68, 74, 0.4)',

        marginRight: 10,
    },
    tagText: {
        fontFamily: "Futura Book",
        color: '#ffffff',
        fontSize: 14
    },
    tagsSplitted: {
        flexDirection: 'row'
    },
    tagsAreaCountContainer: {
        justifyContent: 'center'
    },
    cardBody: {
        backgroundColor: '#ffffff',
        borderRadius: 25,
        overflow: "hidden"
    },
    cardInformation: {
        padding: 15
    },
    cardInformationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardInformationHeaderItemBase: {
        flexDirection: 'row'
    },
    cardInformationHeaderItem: {
        paddingVertical: 6
    },
    cardInformationHeaderOnlineCountContainer: {
        backgroundColor: '#DDF9C7',
        paddingHorizontal: 10,
        borderRadius: 20
    },
    cardInformationHeaderItemTextBase: {
        marginLeft: 5,
        fontFamily: "Futura Book",
        fontSize: 14
    },
    cardInformationHeaderItemTextOnline: {
        color: "#44B01E"
    },
    cardInformationHeaderItemText: {
        color: "#9BC2C9"
    },
    cardInformationTitleText: {
        fontFamily: "Cera Pro Black",
        fontSize: 16,
        color: '#434272',

        marginTop: 16
    },
    cardInformationBottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        marginTop: 12
    },
    cardInformationAuthorContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardInformationAuthorPhoto: {
        borderRadius: 700,
        height: 32,
        width: 32
    },
    cardInformationAuthorText: {
        color: '#A161E0',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: "Futura Demi",
        marginLeft: 5
    },
    cardButtons: {
        flexDirection: 'row',
    },
    cardButtonItem: {
        flex: 1,
        backgroundColor: "#EB674B",
        paddingVertical: 8,
        alignItems: 'center',
        borderColor: '#AB453D'
    },
    cardButtonText: {
        fontFamily: "Futura Book",
        color: '#ffffff',
        fontSize: 14
    }
})