import main from './Main.module.css';

export const Main = () => {
  return (
    <section className={main.main__content}>
      <img className='img__content' src='https://spreekbeurtenplein.nl/wp-content/uploads/2021/03/spreekbeurt-tijger.jpg' />

      <div>
        <div>img</div>
        <div>Profile</div>
      </div>
      <div>
        <div>Post</div>
        <div>Input</div>
        <div>Button</div>
      </div>
      <div>
        Posts
      </div>

    </section>
  )
}
