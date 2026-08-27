import Header from '../components/Header/Header';
import Main from '../components/Main/Main'
import PopBrowse from '../components/PopBrowse/PopBrowse'
import PopNewCard from '../components/PopNewCard/PopNewCard'

function MainPage() {

  return (
    <>
        <div class="wrapper">
            <div class="pop-exit" id="popExit">
                <div class="pop-exit__container">
                    <div class="pop-exit__block">
                        <div class="pop-exit__ttl">
                            <h2>Выйти из аккаунта?</h2>
                        </div>
                        <form class="pop-exit__form" id="formExit" action="#">
                            <div class="pop-exit__form-group">
                                <button class="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
                                <button class="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <PopNewCard></PopNewCard>

            <PopBrowse></PopBrowse>

            <Header></Header>

            <Main></Main>

        </div>
    </>
  )
}

export default MainPage