import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { STATUS } from 'constants/status.constants';
import { getPosts } from 'services/posts.service';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],

    status: STATUS.idle, // 'idle', 'loading', 'success', 'error',
    isModal: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {}

  fetchData = async (query = '', page = 1) => {
    const params = {
      q: query,
      page,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    };
    try {
      const data = await getPosts(params);
      // console.log('data ', data);
      this.setState({ images: data.hits, status: STATUS.success });
    } catch (error) {
      // console.log('error ', error);
      this.setState({ status: STATUS.error });
    }
  };

  handleSubmitForm = (event, searchImage) => {
    event.preventDefault();
    this.fetchData(searchImage);
  };

  handleToggleModalForm = () => {
    this.setState(prevState => ({ isModal: !prevState.isModal }));
    console.log('this.state.isModal ', this.state.isModal);
  };

  render() {
    const { images, isModal } = this.state;
    // console.log('images render ', images);
    return (
      <>
        <Searchbar onSubmitForm={this.handleSubmitForm}></Searchbar>
        <ImageGallery images={images} onOpen={this.handleToggleModalForm} />
        <Button>Load more</Button>
        {isModal && <Modal onClose={this.handleToggleModalForm} />}
        {/* <Section title="Phonebook">
          <ContactForm onSubmit={this.handleSubmitForm} />
        </Section>
        <Section title="Contacts" headingLevel="h2">
        </Section> */}
      </>
    );
  }
}
