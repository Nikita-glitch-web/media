//import classNames from "classnames";

function Skeleton({ times }) {
    const boxes = Array(times).fill(0).map((_, i) => {
        return <div key={i}></div>;
    });

    return boxes;
    // for (let i = 0; i < times; i++) {
    //     boxes.push(<div >)
    // }
}

export default Skeleton;