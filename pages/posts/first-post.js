import Link from 'next/link';
import { useState } from 'react';


export default function FirstPort() {

  const [onOff, setOnOff] = useState(false);

  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
      <p>{onOff ? 'On' : 'Off'}</p>
      <button onClick={() => setOnOff(!onOff)}>Switch</button>
    </>
  )
}