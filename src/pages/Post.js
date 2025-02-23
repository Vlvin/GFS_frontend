import { useEffect, useState } from 'react';
import AuthAPI from '../scripts/AuthAPI';
import Question from './Question';


const toggleLike = async (likes, liked) => {

}

export default function Post({ model = { id: -1, author: { id: "", email: "", userName: "" }, title: "", description: "", questions: [], likes: [] } }) {
  const token = localStorage.getItem("token");
  const [authorized, setAuthorized] = useState(null);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (authorized !== null) return;
    const auth = async () =>
      setAuthorized((token === null) || (await AuthAPI.authorize()));
    auth();
  }, [token, authorized]);
  const onFormSubmit = (e) => {
    e.preventDefault();

  }
  //           
  return (
    <>
      <div className="container h-100 border border-dark p-1">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-10 col-lg-10">
            <div>
              <h3 className='fw-bold title'>{model.title}</h3>
              <h5 className='description'>{model.description}</h5>
              <form onSubmit={onFormSubmit}>
                {
                  model.questions?.map((q, key) =>
                    <Question model={q} key={key} />
                  )
                }
                <a href={`/users/${model.author.id}`}>By: {model.author.userName}</a>

                <br />
                <div>
                  <input
                    className={`btn fw-bold text-dark ${authorized ? '' : 'disabled'} ${liked ? "bg-danger" : "bg-secondary"}`}
                    type="button"
                    onClick={async () => { setLiked(!liked); await toggleLike(); }}
                    id="likeButton"
                    value="&#128420;"
                    disabled={!authorized} />
                  <input
                    className={`float-right btn btn-success ${authorized ? '' : 'disabled'}`}
                    type='submit'
                    id='submitButton'
                    value="submit"
                    disabled={!authorized} />
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>


    </>
  )
}
