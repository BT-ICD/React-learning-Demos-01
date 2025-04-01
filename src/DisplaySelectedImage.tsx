const imageList = [
    {'name':'Steve Jobs - 01', 'imgName':'S01.jpeg'},
    {'name':'Steve Jobs - 02', 'imgName':'S02.jpeg'},
    {'name':'Steve Jobs - 03', 'imgName':'S03.jpeg'},
    {'name':'Steve Jobs - 04', 'imgName':'S04.jpeg'}
];

export default function DisplaySelectedImage(){
    return (

        <>
            <select>
                {
                    imageList.map((data)=>(<option value={data.imgName}>{data.name}</option>))
                }
            </select>
            <img src="/images/S01.jpeg" alt="Steve Jobs" width={200} height={100}></img>
        </>

    );
}


// import React from "react";

// const Dropdown = ({ options, onSelect }) => {
//   return (
//     <select
//       onChange={(e) => onSelect(e.target.value)}
//       className="p-2 border rounded-md"
//     >
//       <option value="">Select an option</option>
//       {options.map((option) => (
//         <option key={option.id} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// };

// const App = () => {
//   const options = [
//     { id: 1, value: "apple", label: "Apple" },
//     { id: 2, value: "banana", label: "Banana" },
//     { id: 3, value: "cherry", label: "Cherry" },
//   ];

//   const handleSelect = (value) => {
//     console.log("Selected value:", value);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="mb-2 text-lg font-semibold">Select a Fruit:</h2>
//       <Dropdown options={options} onSelect={handleSelect} />
//     </div>
//   );
// };

// export default App;
