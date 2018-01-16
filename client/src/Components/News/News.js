import React, { Component } from "react";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch("/api/newsdata")
      .then(res => res.json())
      .then(newsData =>
        this.setState({ news: newsData.news }, () =>
          console.log(`News fetched from API`, newsData)
        )
      );
  }

  render() {
    return (
      <div className={""}>
        <h1>Inshorts-News</h1>
        <ul>
          {this.state.news.map(news => (
            <div>
            <li>{news.title}</li>
            <li><img src={news.img}/></li>
            </div>
          ))}

        </ul>

      </div>
    );
  }
}

export default News;
