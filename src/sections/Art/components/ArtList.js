import ArtListItem from './ArtListItem'
import React from "react"

export default function ArtList({ artData }) {
    return (
        <ul className="art-list">
            {artData.map((artItem, index) => {
                return (
                    <ArtListItem key={index} artItem={artItem} />
                );
            })}
        </ul>
    );
}

