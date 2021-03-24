import DestinationCard from './DestinationCard';

let destinations = [
    {
      city: 'Toronto',
      averagePrice: 120,
      propertyCount: 76,
      imageUrl: './img/toronto.jpg',
      imageAlt: 'Toronto skyline',
    },
    {
      city: 'Malibu',
      averagePrice: 215,
      propertyCount: 43,
      imageUrl: './img/malibu.jpg',
      imageAlt: 'Cliff in Malibu',
    },
    {
      city: 'Chicago',
      averagePrice: 130,
      propertyCount: 115,
      imageUrl: './img/chicago.jpg',
      imageAlt: 'Chicago skyline',
    },
    {
      city: 'Seattle',
      averagePrice: 135,
      propertyCount: 63,
      imageUrl: './img/seattle.jpg',
      imageAlt: 'Seattle skyline',
    },
    {
      city: 'Colorado',
      averagePrice: 85,
      propertyCount: 47,
      imageUrl: './img/colorado.jpg',
      imageAlt: 'Lake in Colorado',
    },
    {
      city: 'Miami',
      averagePrice: 115,
      propertyCount: 86,
      imageUrl: './img/miami.jpg',
      imageAlt: 'Beach in Miami',
    }
  ]

function Section2(props) {
  return (
    <div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
        <div className="flex flex-wrap -mx-4">
          {destinations.map(destinationItem => {
          return <div className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
                      <DestinationCard destination={destinationItem} />
                  </div>
          })}
        </div>
      </div>
    </div>
  )
}
export default Section2;