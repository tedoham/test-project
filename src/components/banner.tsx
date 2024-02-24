import React, { useState, useEffect } from 'react';
import { BannerImage, getMainBannerImages } from '../services/services';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Banner: React.FC = () => {
    const [images, setImages] = useState<BannerImage[]>([]);
  
    useEffect(() => {
      const fetchImages = async () => {
        const bannerImages = await getMainBannerImages();
        setImages(bannerImages);
      };
  
      fetchImages();
    }, []);
  
    // Decide which image url to use based on the screen width or another appropriate method
    const getImageUrl = (image: BannerImage) => {
      // Example condition, replace with your actual logic for determining which image to use
      return window.innerWidth < 768 ? image.mobileImageUrl : image.pcImageUrl;
    };
  
    return ( 
        <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.mainBannerId}>
              <div className="p-2">
                <div className="flex items-center justify-center">
                    <img src={getImageUrl(image)} alt={image.title} />
                </div>
            </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    );
};

export default Banner;
