import React, { useState } from 'react';
import { Memo } from '../src';

export default {
  title: 'Memo',
  component: Memo,
};

export const Default = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => void setCount1(x => x + 1)}>inc count1</button>
        <button onClick={() => void setCount2(x => x + 1)}>inc count2</button>
      </div>
      <div>
        <h3>No memo</h3>
        <p>It will show counts on any updates.</p>
        <p>
          count1 {count1} count2 {count2}
        </p>
        <h3>Memo for count2</h3>
        <p>It will show counts only on update of count2</p>
        <Memo
          deps={[count2]}
          render={([count2]) => {
            return (
              <p>
                count1 {count1} count2 {count2}
              </p>
            );
          }}
        />
      </div>
    </div>
  );
};
