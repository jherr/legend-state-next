"use client";
import Link from "next/link";
import { observable, computed } from "@legendapp/state";
import { observer, enableLegendStateReact } from "@legendapp/state/react";
import { Legend } from "@legendapp/state/react-components";

enableLegendStateReact();

const person = observable({
  first: "Jane",
  last: "Smith",
});
const full = computed(() => `${person.first.get()} ${person.last.get()}`);
const isOdd = computed(() => full.get().length % 2 === 1);

const Name = () => (
  <Legend.div
    className$={() =>
      `${
        isOdd.get() ? "text-blue-600" : "text-red-600"
      } text-4xl font-bold flex`
    }
  >
    {full}
  </Legend.div>
);

const First = observer(() => (
  <div className="flex gap-2">
    <label htmlFor="first">First Name</label>
    <input
      id="first"
      value={person.first.get()}
      onChange={(e) => person.first.set(e.target.value)}
      className="border-2 border-gray-300 rounded-md text-black"
    />
  </div>
));

const Last = observer(() => (
  <div className="flex gap-2">
    <label htmlFor="last">Last Name</label>
    <input
      id="last"
      value={person.last.get()}
      onChange={(e) => person.last.set(e.target.value)}
      className="border-2 border-gray-300 rounded-md text-black"
    />
  </div>
));

const Local = () => {
  return (
    <div className="flex flex-col gap-2 m-5">
      <div className="mb-5 text-4xl font-bold flex">
        <Link href="/" className="font-thin">
          Home
        </Link>
        <span className="font-thin mx-2">&gt;</span>
        <h1>Global And More Reactivity</h1>
      </div>

      <First />
      <Last />
      <Name />
    </div>
  );
};

export default Local;
