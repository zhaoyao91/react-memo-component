import React, { useState } from "react";
import Memo from "react-memo-component";

export default function() {
  return (
    <div>
      <Case1 />
      <Case2 />
    </div>
  );
}

function Case1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h2>Case 1: Basic</h2>
      <p>Only rerender memo div when count2 changed</p>
      <button
        onClick={() => {
          setCount1(x => x + 1);
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          setCount2(x => x + 1);
        }}
      >
        Inc1
      </button>
      <div>
        current: {count1} {count2}
      </div>
      <Memo
        render={([count2]) => (
          <div>
            memo: {count1} {count2}
          </div>
        )}
        deps={[count2]}
      />
    </div>
  );
}

function Case2() {
  const [user, setUser] = useState({
    name: "Bob",
    age: 20
  });

  return (
    <div>
      <h2>Case 2: Customized compare function</h2>
      <p>Only rerender memo div only when user.age changed</p>
      <div>
        <input
          type="text"
          value={user.name}
          onChange={e => {
            setUser({ ...user, name: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="number"
          value={user.age}
          onChange={e => setUser({ ...user, age: Number(e.target.value) })}
        />
      </div>
      <Memo
        deps={user}
        compare={(user1, user2) => {
          return user1.age === user2.age;
        }}
      >
        {() => (
          <div>
            <div>user.name: {user.name}</div>
            <div>user.age: {user.age}</div>
          </div>
        )}
      </Memo>
    </div>
  );
}
