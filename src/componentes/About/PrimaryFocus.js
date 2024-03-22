import React from 'react';
import styles from './Primary.css'

const PrimaryFocus = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>Primary Focus</h3>
      <div className="primary-container">
        <div className="item">
          <h4>Web Design & Development</h4>
          <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
        </div>
        <div className="item">
          <h4>Mobile Apps & Games</h4>
          <p>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
        </div>
        <div className="item">
          <h4>Development Solutions</h4>
          <p>Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.</p>
        </div>
        <div className="item">
          <h4>Marketing & SEO</h4>
          <p>Using SEO and marketing strategies to boost online visibility and promote products or services.</p>
        </div>
      </div>
      <h3>Exploring Creativity</h3>
      <div className="primary-container">
        <div className="item">
          <h4>Visual Storytelling</h4>
          <p>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually. </p>
        </div>
        <div className="item">
          <h4>Digital Content Creation</h4>
          <p>Creatiing dynamic digital content, such as 3D models, graphics or animations. </p>
      </div>
    </div>
    </div>
  );
};

export default PrimaryFocus;
