import {useEffect ,useState} from 'react'
import {Link} from "react-router-dom"
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules';
import ListingItems from '../components/ListingItems';

export default function Home() {
  const [offerlistings,setOfferListings] = useState([]);
  const [salesListings,setSalesListing] = useState([]);
  const [rentlistings,setRentListings] = useState([]);
  SwiperCore.use([Navigation])
  
  useEffect(() => {
    const fetchOfferListing =async ()=>{
      try {
        const res =await fetch(`/api/listing/get?offer=true&limit=4`)
        const data= await res.json();
        setOfferListings(data);
        fetchRentListing();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListing = async ()=>{
      try {
        const res =await fetch(`/api/listing/get?type=rent&limit=4`)
        const data= await res.json();
        setRentListings(data);
        fetchSaleListing();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListing = async ()=>{
      try {
        const res =await fetch(`/api/listing/get?type=sale&limit=4`)
        const data= await res.json();
        setSalesListing(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListing();
  },[]);

  return (
    <div>
      {/* top */}
      <div className=" flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className='textslate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span><br/>
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Sahand Estate is the best place to find your next perfect place to live . <br/>
          We have a wide range of properties for you to choose from . 
        </div>
        <Link to={"/search"} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>Let's Start Now</Link>
      </div>


      <Swiper navigation >
        {
          offerlistings && offerlistings.length >0 &&
          offerlistings.map((listing)=>(
            <SwiperSlide>
              <div style={{background:`url(${listing.imageUrls[0]}) center no-repeat` ,
              backgroundSize: "cover"}} className='h-[500px] bg-red' key={listing._id}></div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className='max-w-8xl mx-20 p-3 flex flex-col gap-8 my-10'>
        {
         offerlistings && offerlistings.length >0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent Offers</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4 '>
              {offerlistings.map((listing) =>(
                  <ListingItems listing ={listing} key={listing._id}/>
              ))}
            </div>
          </div>
         ) 
        }
        {rentlistings && rentlistings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentlistings.map((listing) => (
                <ListingItems listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {salesListings && salesListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {salesListings.map((listing) => (
                <ListingItems listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
