import React from 'react';
import Link from '@docusaurus/Link';

function CustomSidebar({ navbarItems }) {
  return (
    <aside>
      <ul className='navList'>
        {navbarItems.map((item) => (
          <li key={item.label}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CustomSidebar;
