import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faCog, faBorderAll, faUsers, faCalendar, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Admin from './layout/Admin';
library.add(fab, faCheckSquare, faCoffee, faCog, faBorderAll, faUsers, faCalendar, faEnvelope, faClock)


function App() {
  return (
    <div className="App">
      <Admin />
    </div>
  );
}

export default App;
