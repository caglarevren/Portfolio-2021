import React from 'react'
import Card from 'react-bootstrap/Card'

const BlogCard = ({ blogContent }) => {
    return (
        <Card className='blog-card-container'>
            <Card.Img
                variant='top'
                src={blogContent.image}
                alt={blogContent.image_alt}
            />
            <Card.Body>
                <Card.Title>{blogContent.title}</Card.Title>
                <Card.Text>{blogContent.info}</Card.Text>
                <div className='blog-footer-container'>
                    <img
                        src={blogContent.avatarImg}
                        alt={blogContent.avatar_img_alt}
                        className='blog-avatar'
                    />
                    <div className='blog-footer-text'>
                        <small className='blog-author'>Çağlar Evren</small>
                        <small className='blog-date-readtime'>
                            {blogContent.date}
                        </small>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BlogCard
