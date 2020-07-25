import React from 'react';
import {
    StyleSheet, 
    View, 
    SafeAreaView,
    FlatList,
    Dimensions
} from 'react-native'
import {Post} from '../types'
import PostCard, {PostCardProps} from '../components/PostCard'

type ListScrollPageProps = {
    posts: PostCardProps[]
}

export default class ListScrollPage extends React.Component<ListScrollPageProps> {
    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.backgroundContainer} />
                <SafeAreaView>
                        <FlatList
                            showsVerticalScrollIndicator= {false}
                            contentContainerStyle = {styles.flatCardList}
                            data = {this.props.posts}
                            renderItem = {({item}) => <PostCard {...item} />}
                            keyExtractor= {(_, index) => `card${index}`}
                            ItemSeparatorComponent = {() => <View style={styles.cardSeparator}></View>}
                        />
                    </SafeAreaView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    backgroundContainer: {
        position: 'absolute',

        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,

        borderBottomColor: '#ffffff',
        borderBottomWidth: 50,
        backgroundColor: '#306574'
    },
    flatCardList: {
        paddingTop: 45,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 18
    },
    cardSeparator: {
        height: 20
    }
})