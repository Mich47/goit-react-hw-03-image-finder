import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { STATUS } from 'constants/status.constants';
import { getPosts } from 'services/posts.service';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    status: STATUS.idle, // 'idle', 'loading', 'success', 'error',
  };

  componentDidMount() {
    // this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    const { images, page, query } = this.state;
    console.log('page ', images);
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchData();
    }
    console.log('prevState.page ', prevState);
  }

  fetchData = async () => {
    const { page, query } = this.state;
    const params = {
      q: query,
      page,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    };
    try {
      const data = await getPosts(params);

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        status: STATUS.success,
      }));
    } catch (error) {
      console.log('error ->', error);
      this.setState({ status: STATUS.error });
    }
  };

  handleSubmitForm = (event, searchImage) => {
    event.preventDefault();

    this.setState({
      images: [],
      page: 1,
      query: searchImage,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      console.log('prevState ', prevState);
      console.log('thisState ', this.state);
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmitForm={this.handleSubmitForm}></Searchbar>
        <ImageGallery images={images} onOpen={this.handleToggleModalForm} />
        <Button onClick={this.handleLoadMore}>Load more</Button>
      </>
    );
  }
}
