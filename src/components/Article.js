import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired
    }

    state = {
        isOpen: false
    }
/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
*/

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        const {article} = this.props
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
                <h2 onClick = {() => this.setState({})}>click me</h2>
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {text, comments} = this.props.article

        return (
            <section>
                {text}
                <CommentList comments={comments}/>
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}