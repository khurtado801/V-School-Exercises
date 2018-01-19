import React from 'react'
import BlogPost from '../BlogList/BlogPost';


    function BlogList(props) {
        let bloglist = [{
            title: 'Man must explore, and this is exploration at its greatest',
            subtitle: 'Problems look mighty small from 150 miles up',
            date: 'September 24, 2017'
        },{
            title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.',
            subtitle: '',
            date: 'September 18, 2017'
        }, {
            title: 'Science has not yet mastered prophecy',
            subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
            date: 'August 24, 2017'
        }, {
            title: 'Failure is not an option',
            subtitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
            date: 'July 8, 2017'
        }];
        
        return (
            <div>
                {bloglist.map((blog, index) => {
                    return <BlogPost{...blog} key={index}></BlogPost>;
                    })
                }
            </div>
        )
    }
export default BlogList