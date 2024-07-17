import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';

export default function List() {
    return (
      <div className="list">
       
          <div class="title" contenteditable="true" data-text="+ Add title"></div>
          <div class="delete close" contenteditable="false"></div>
          <ul>
            
          </ul>
          
          <div class="grid-stack">
            <div class="grid-stack-item">
              <div class="grid-stack-item-content">Item 1</div>
            </div>
            <div class="grid-stack-item" gs-w="2">
              <div class="grid-stack-item-content">Item 2 wider</div>
            </div>
          </div>

      </div>
    );
  }
  GridStack.init();
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