import "./Comments.scss";
import React from "react";
import ListComment from "./containers/list-comment";

function Comments() {
  return (
    <div>
      <div>
        <div className="contenedor-comments">
          
          <div className="tareas-lista-comments">
            <ListComment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
