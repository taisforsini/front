import { useEffect, useState } from "react";
import api from "../apis/api";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const postsResponse = await api.get("/posts");
        console.log(postsResponse);

        if (postsResponse.data.length) {
          setPosts([...postsResponse.data]);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  return (
    <div>
      {" "}
      {posts.length
        ? posts.map((post) => {
            return (
              <div
                key={post._id}
                className="card mb-3"
                style={{ maxWidth: "50wv" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={post.image}
                      className="img-fluid rounded-start"
                      alt="Destiny"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <strong>Destino:</strong> {post.title}
                      </h5>
                      <p className="card-text">{post.content}</p>
                      <p className="card-text">
                        <strong>Prós: </strong> {post.pros}
                      </p>
                      <p className="card-text">
                        <strong>Contras: </strong>
                        {post.cons}
                      </p>
                      <p className="card-text">
                        <strong>Total gasto: </strong>
                        {post.tripCost}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{post.createdAt}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
    // <div class="container p-5" style={{ backgroundColor: "#fffdf0" }}>
    //   <div class="row">
    //     <div class="col-sm-3 " style={{ backgroundColor: "#f2bb9c" }}>
    //       Perfil foto <br />
    //       Perfil foto <br />
    //       Perfil foto <br />
    //       Perfil foto <br />
    //       texto texto texto texto <br />
    //       texto texto texto texto <br />
    //       texto texto texto texto <br />
    //       texto texto texto texto <br />
    //       texto texto texto texto <br />
    //     </div>
    //     <div class="col-sm-9">
    //       <h2 className="m-5 text-center">Viagens da comunidade</h2>

    //       <div
    //         className="col-sm-10 m-5 d-flex justify-content-center"
    //         style={{ backgroundColor: "#fffdf0" }}
    //       >
    //         <PostCard />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Feed;

<div style={{ backgroundColor: "#fffdf0" }}>
  <div className="container p-5 ">
    <div className="row">
      <div className="col-2 " style={{ backgroundColor: "#f2bb9c" }}>
        .col-4 this 4-column-wide div gets wrapped onto a new line as one
        contiguous unit.
      </div>
      <div className="col-10" style={{ backgroundColor: "#fffdf0" }}>
        .col-8 Subsequent columns continue along the new line.
      </div>
    </div>
  </div>
</div>;
