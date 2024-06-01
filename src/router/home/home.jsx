import { Categories } from "../../components/categories/categories"
import './home.css'


const categories = [
  {
    "id": 1,
    "title": "Mac",
    "imageUrl": "https://www.goimports.com.br/image/catalog/0macpro14/002/mba15-midnight-select-202306.jpeg"
  },
  {
    "id": 2,
    "title": "iPhone",
    "imageUrl": "https://www.goimports.com.br/image/catalog/00iphone15/iphone-15-pro-finish-select-202309-6-1inch_AV1.png"
  },
  {
    "id": 3,
    "title": "iPad",
    "imageUrl": "https://www.goimports.com.br/image/catalog/0%20novos%20ipa/ipad-pro-finish-select-202405-11inch-spaceblack.png"
  },
  {
    "id": 4,
    "title": "Watch",
    "imageUrl": "https://www.goimports.com.br/image/catalog/00Watc9/MT5N3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR_GEO_BR.png"
  },
  {
    "id": 5,
    "title": "AirPods",
    "imageUrl": "https://www.goimports.com.br/image/catalog/0ssd%20sansung/airpods-max-select-skyblue-202011.png"
  }
]

export function Home() {
  return (

    
    <div className="container-Home">
      <Categories categories={categories} />
      
      
    </div> 
  )
}