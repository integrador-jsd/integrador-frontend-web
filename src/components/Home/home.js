import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './home.scss';

class Home extends Component {

    state = {
        users: [], images: [
            {
                name: 'Gestión de Auxiliares',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqNeIW6BBOHgnMxB8XqSkgYY0QeNGpr5j5Xay92OV6lJMKeghI',
                to: '/users'
            },
            {
                name: 'Gestión de Sectores',
                src: 'https://pbs.twimg.com/profile_images/1130889236549386240/yDs28ka8_400x400.png',
                to: '/sections'
            },
            {
                name: 'Solicitudes',
                src: 'https://www.formarte.edu.co/blog/wp-content/uploads/2017/07/2017-07-18-800x500.jpg',
                to: '/users'
            }
        ]
    };

    listOptions = () => {
        return this.state.images.map(({ name, src, to }) => {
            return (
                <List.Item key={name} className="option">
                    <Link to={to}>
                        <Image className="img" src={src} />
                    </Link>
                    <div className="name">
                        <p>{name}</p>
                    </div>
                </List.Item>
            );
        });
    }

    render() {
        return (
            <List horizontal>
                {this.listOptions()}
            </List>
        );
    }
}

export default Home;
