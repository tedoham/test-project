import React, { useState, useEffect } from 'react';
import { getMainShortcutImages, ShortcutImage } from '../services/services';

const Menu: React.FC = () => {
  const [shortcuts, setShortcuts] = useState<ShortcutImage[]>([]);

  useEffect(() => {
    const fetchShortcuts = async () => {
      const shortcutImages = await getMainShortcutImages();
      setShortcuts(shortcutImages);
    };

    fetchShortcuts();
  }, []);

  return (
    <div className="flex flex-wrap overflow-x-auto py-4">
    {shortcuts.map((shortcut) => (
      <a key={shortcut.mainShortcutId} href={shortcut.linkUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
        <div className="flex flex-col gap-2 p-4 rounded-lg shadow-sm relative m-2">
          <img 
            alt={shortcut.title}
            className="aspect-2/1 rounded-lg object-cover"
            src={shortcut.imageUrl}
          />
          <h3 className="text-lg font-semibold text-center">{shortcut.title}</h3>
        </div>
      </a>
    ))}
  </div>  
  );
};

export default Menu;
