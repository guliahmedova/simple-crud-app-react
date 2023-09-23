import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost, editPost } from '../redux/postsSlice';

const Posts = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateDesc, setUpdateDesc] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState(null);
    const posts = useSelector((state) => state.posts.items);
    const dispatch = useDispatch();

    return (
        <div className='post'>
            <div className="form">
                <input type="text"
                    value={title} onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter Post Title' />
                <input type="text" value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder='Enter Post Desc' />
                <button onClick={() => {
                    dispatch(addPost({ id: posts.length + 1, title: title, desc: desc }))
                    setTitle('');
                    setDesc('');
                }} className='button-86'>Add Post</button>
            </div>

            <div className="posts">
                {posts.length > 0 ? posts.map(post => <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.desc}</p>
                    <button onClick={() => {
                        setIsEdit(true)
                        setId(post.id)
                    }} className='button-87'>Edit</button>
                    <button onClick={() => dispatch(deletePost(post.id))} className='button-87'>Delete</button>
                    <br />
                    {isEdit && id === post.id && (
                        <>
                            <input type="text" onChange={(e) => setUpdateTitle(e.target.value)} placeholder='Edit Post Title' />
                            <input type="text" onChange={(e) => setUpdateDesc(e.target.value)} placeholder='Edit Post Desc' />
                            <button onClick={() => {
                                dispatch(editPost({ id: post.id, title: updateTitle, desc: updateDesc }))
                                setUpdateDesc('');
                                setUpdateTitle('');
                                setIsEdit(false);
                            }} className='button-87'>Edit</button>
                        </>
                    )}
                </div>) : <span>There is not Post !</span>}
            </div>
        </div>
    )
}

export default Posts