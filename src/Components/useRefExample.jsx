import { useRef } from 'react'


export default function useRefExample() {
   let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log("Click");
  }

  function alertClick(){
    alert('You clicked ' + ref.current + ' times!');
  }

  console.log("Render")

  return (
    <>
        <button onClick={handleClick}>
        Click me!
        </button>

        <button onClick={alertClick}>
        Alert me!
        </button>
    </>
  );
}