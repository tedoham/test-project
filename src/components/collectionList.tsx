import { CollectionItem } from '@/services/services';
import React from 'react';

type CollectionListProps = {
  collection: CollectionItem;
};

const CollectionList: React.FC<CollectionListProps> = ({ collection }) => {
  return (
    <div className="flex flex-col md:flex-row max-w-full mx-auto">
    {/* First section for title and subtitle */}
    <div className="flex flex-col justify-center bg-white p-4 w-full md:w-auto">
      <h2 className="text-xl font-bold text-center md:text-left">{collection.title}</h2>
      <p className="text-sm text-gray-600 text-center md:text-left">{collection.subtitle}</p>
    </div>

    {/* Second section for items */}
    <div className="flex flex-row overflow-x-auto py-4 space-x-4 w-full">
      {collection.items.map((item, index) => (
        <div key={index} className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-lg" style={{ minWidth: '300px', height: '400px' }}>
          {item.publication.media.map((media, index) => (
            <img
              key={index}
              src={media.uri}
              alt={item.publication.title}
              className="w-full h-48 object-cover"
            />
          ))}
          <div className="p-4 w-64">
            <h3 className="text-lg font-semibold truncate">{item.publication.title}</h3>
            {/* Additional details can go here */}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CollectionList;
