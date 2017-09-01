import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';
import '../../styles/pc.less';

class PublicList extends Component {

  constructor(){
    super();
    this.state = {
      data:''
    }
  }

  componentWillMount() {
    let self = this;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`;
    fetch(actionUrl).then(function(response) {
      return response.json()
    }).then(function(json) {
      self.setState({ data: json });
    });
  }

  render(){
    const {data} = this.state;
    const dataList = data.length ?
      data.map((item,index)=>(
        <section key={index} className="imgs-list">
          <Link to={`/details/${item.uniquekey}`}>
            <img src={item.thumbnail_pic_s} alt=""/>
          </Link>
          <section>
            <h3>
              <Link to={`/details/${item.uniquekey}`}>{item.title}</Link>
            </h3>
            <span>{item.author_name}</span>
            <span>{item.date}</span>
          </section>
        </section>
      )):' ';
    return (
      <section className="list-box">
        {dataList}
      </section>
    );
  }
}

export default PublicList;
