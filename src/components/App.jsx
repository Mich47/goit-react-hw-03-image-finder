import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { STATUS } from 'constants/status.constants';
import { getPosts } from 'services/posts.service';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ThreeDots } from 'react-loader-spinner';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    totalPages: 0,
    query: '',
    status: STATUS.idle, // 'idle', 'loading', 'success', 'error',
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { page, query } = this.state;
    this.setState({ status: STATUS.loading });
    // Параметри URI
    const params = {
      q: query,
      page,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    };
    try {
      const data = await getPosts(params);

      //Якщо картинок менше ніж у пагінації,
      // то totalPages = 1, інакше - (data.totalHits - 1)
      const totalPages = data.total > params.per_page ? data.totalHits - 1 : 1;

      this.setState(prevState => ({
        totalPages,
        // Дані додаємо у масив, а не перезаписуємо
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
    const { query } = this.state;
    // Якщо пошуковий запит не змінився, нічого не робимо
    if (searchImage !== query)
      this.setState({
        images: [],
        page: 1,
        query: searchImage,
      });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, page, totalPages, status } = this.state;

    return (
      <>
        <Searchbar
          status={status} //Для того щоб робити кнопку пошуку неактивною
          onSubmitForm={this.handleSubmitForm}
        ></Searchbar>
        <ImageGallery images={images} onOpen={this.handleToggleModalForm} />
        {page < totalPages && status === STATUS.success && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
        {status === STATUS.loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#07c"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              height: '34px',
              paddingTop: '16px',
              paddingBottom: '32px',
            }}
            wrapperClassName=""
            visible={true}
          />
        )}
      </>
    );
  }
}
