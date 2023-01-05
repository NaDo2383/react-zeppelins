import './App.css';
import Navbar from './components/nav';
import BlogPost from './components/blogpost';
import NewsCat from './components/categories';
import NewsCards from './components/newscards';
import Footer from './components/footer';

function Zeppelins() {
  const data = {
    nav: ['PORTFOLIO', 'BLOG', 'CV', 'STORE', 'FREELANCE', 'ABOUT ME', 'CONTACT'],
    nav1: ['ALL', 'UI Design', 'UX Design', 'Product Design', 'Articles', 'Tutoials', 'News']
  }

  let cards = { data: [] };

  for (let i = 0; i < 6; i++) {
    if (i % 2 !== 1) {
      cards.data.push(<div className='card'>
        <img src={require('./components/pic/Rectangle 124.png')} alt='' className='cardImg' />
        <div className='cardDate'>NOV 23 2020</div>
        <h3 className='cardHeader'>This way is wrong about UI Design.</h3>
        <div className='cardText'>
          A quick guide to assisting users in the challenging steps from learning
          about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.
        </div>
        <a href='#' className='cardBtn'>READ MORE</a>
      </div>)
    } else {
      cards.data.push(<div className='card'>
        <img src={require('./components/pic/Rectangle 124 (1).png')} alt='' className='cardImg' />
        <div className='cardDate'>NOV 23 2020</div>
        <h3 className='cardHeader'>This way is wrong about UI Design.</h3>
        <div className='cardText'>
          A quick guide to assisting users in the challenging steps from learning
          about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.
        </div>
        <a href='#' className='cardBtn'>READ MORE</a>
      </div>)
    }
  }

  return (
    <section>
      <Navbar navBarCat={data.nav} />
      <BlogPost />
      <NewsCat nav1={data.nav1} />
      <NewsCards cards={cards.data} />
      <Footer />
    </section>
  );
}

export default Zeppelins;
