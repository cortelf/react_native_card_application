import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image, 
    TextInput
} from "react-native";
import {PostComment} from '../types';
import Moment from 'moment'

export type CommentsProps = {
    comments: PostComment[]
}

export default class Comments extends React.Component<CommentsProps> {
    render() {
        return (
            <View>
                <Text style={styles.titleText}>Comments</Text>
                <View style={styles.addCommentContainer}>
                    <Image style={styles.monkeyIcon} source={require("../assets/images/monkey.png")} />
                    <TextInput style={styles.commentInput} placeholderTextColor="#8DABAD" placeholder="Add a comment..." />
                </View>
                <View style={styles.commentsBlock}>
                    {this.props.comments.map((comment, index) =>
                        <View key={index} style={styles.commentContainer}>
                            <View style={styles.commentinformationContainer}>
                                <Image  style={styles.commentAuthorAvatar} source={{uri: comment.author.photo}} />
                                <View style={styles.commentAuthorInformationContainer}>
                                    <Text style={styles.commentAuthorNameText}>{comment.author.name}</Text>
                                    <Text style={styles.commentAuthorDateText}>{Moment(comment.date).format('DD MMM YYYY [in] HH:mm')}</Text>
                                </View>
                            </View>
                            <Text style={styles.commentText}>{comment.text}</Text>
                        </View>
                        )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: "FuturaDemiC",
        color: '#434272',
        fontSize: 24,
    },
    addCommentContainer: {
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: '#EBF3F4',
        flexDirection: 'row',
        paddingHorizontal: 4,
        paddingVertical: 4,
        alignItems:'center'
    },
    monkeyIcon: {
        height: 32,
        width: 32
    },
    commentInput: {
        fontFamily: "FuturaDemiC",
        color: '#434272',
        fontSize: 14,
        padding:  0,
        marginLeft: 5,
        paddingRight: 20
    },
    commentsBlock: {
        marginTop: 10
    },
    commentContainer: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: '#EBF3F4',
        padding: 15
    },
    commentinformationContainer: {
        flexDirection: 'row'
    },
    commentAuthorAvatar: {
        height: 32,
        width: 32,

        borderRadius: 300
    },
    commentAuthorInformationContainer: {
        marginLeft: 5,
        justifyContent: 'flex-end'
    },
    commentAuthorNameText: {
        fontFamily: "CeraPro-Bold",
        fontSize: 14,
        color: '#434272',
    },
    commentAuthorDateText: {
        fontFamily: "CeraPro-Regular",
        fontSize: 12,
        color: '#8DABAD',
    },
    commentText: {
        fontFamily: "FuturaBookC",
        color: '#434272',
        fontSize: 16,

        marginTop: 10
    }
})