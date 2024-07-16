export default function List() {
    return (
      <div className="list">
       
          <div class="title" contenteditable="true" data-text="+ Add title"></div>
          <div class="delete close" contenteditable="false"></div>
          <ul>
            
          </ul>
                    
      </div>
    );
  }

  function Item() {
    return (
      <div className="item">
       
          <div class="title" contenteditable="true" data-text="+ Add title"></div>
          <div class="delete close" contenteditable="false"></div>
          <ul>
            
          </ul>
                    
      </div>
    );
  }