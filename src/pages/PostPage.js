import React from "react"
import {
    StyleSheet, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Post as PostType} from "../types"
import Post from "../components/Post";
import Comments from "../components/Comments";

export default class PostPage extends React.Component<PostType> {
    render() {
        //const insets = useSafeAreaInsets();
        return (
            <SafeAreaView edges={['right', 'top', 'left']} style={{...styles.rootContainer}}>
                <Post {...this.props}>
                    <Comments comments={this.props.comments} />
                </Post>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 0
    }
});