import React from "react"
import {
    StyleSheet, View
} from 'react-native';
import {Post as PostType} from "../types"
import Post from "../components/Post";
import Comments from "../components/Comments";

export default class PostPage extends React.Component<PostType> {
    render() {
        return (
            <View style={styles.rootContainer}>
                <Post {...this.props}>
                    <Comments comments={this.props.comments} />
                </Post>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});