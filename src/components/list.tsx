import React, { useState, useEffect } from 'react';
import { getFilteredCollections, CollectionItem } from '../services/services';
import CollectionList from './collectionList';


const List: React.FC = () => {
    const [collections, setCollections] = useState<CollectionItem[]>([]);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const filteredCollections = await getFilteredCollections();
                setCollections(filteredCollections);
            } catch (error) {
                console.error('Failed to fetch collections:', error);
            }
        };

        fetchCollections();
    }, []);

return (
   <div>
      {collections.map((item: CollectionItem, index: number) => (
       <CollectionList key={index} collection={item} />
      ))}
    </div>
);
};

export default List;

