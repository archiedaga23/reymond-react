import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { INote, IState } from "../constant";
import AddCard from "./AddCard";
import Card from "./Card";

const Cards = () => {
    const [noteLists, setNoteLists] = useState<INote[]>([]);

    const notes = useSelector((state: IState) => state.notes);

    useEffect(() => {
        setNoteLists(notes);
    }, [notes])

    return (
        <div className="cards">
            <AddCard />
            {
                noteLists.map((list: INote) => <Card list={list} key={list.id}/>)
            }
        </div>
    )
}

export default Cards;