import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import Product from "./Product";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sortingOption, setSortingOption] = useState("rating_desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState("all");
  const productsPerPage = 7;
  const productCardRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const productCardWidth = 200;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const handleScrollRight = () => {
    const maxScrollOffset =
      Math.ceil(filteredProducts.length / productsPerPage) - 1;
    setScrollOffset((prevOffset) => Math.min(prevOffset + 1, maxScrollOffset));
  };

  const handleScrollLeft = () => {
    setScrollOffset((prevOffset) => Math.max(prevOffset - 1, 0));
  };

  const scrollToProduct = (index) => {
    if (productCardRef.current) {
      productCardRef.current.scrollTo({
        left: index * productCardWidth,
        behavior: "smooth",
      });
    }
  };

  const images = [
    "/one.png",
    "/two.png",
    "/three.png",
    "/four.png",
    "/five.png",
    // Add more image paths here
  ];

  const products = [
    {
      id: "1",
      title:
        "Galaxy S23 Ultra: Unleash Power with 5G, Pro-Grade Camera, and Immersive Display...",
      price: 64499,
      image: "/GalaxyS23.webp",
      rating: 4,
      description:
        "Discover the future of mobile innovation with the Galaxy S23 Ultra...",
    },
    {
      id: "2",
      title:
        "Immerse in Sound: JBL Headphones with Noise Cancellation, 40-Hour Battery Life...",
      price: 5898,
      image: "/headphone.png",
      rating: 5,
      description:
        "Immerse yourself in the world of crystal-clear audio with JBL Headphones...",
    },
    {
      id: "3",
      title:
        "Apple Watch Series 7: Powerful Performance with Enhanced RAM and Ample Storage",
      price: 44898,
      image: "/watch.png",
      rating: 5,
      description:
        "The Apple Watch Series 7 represents the pinnacle of wearable technology. Its powerful performance is backed by enhanced RAM and ample storage, ensuring you have access to your data and apps whenever you need them. The stunning display offers true-to-life colors, making every notification, workout, and interaction a visual delight. This smartwatch isn't just a timepiece; it's a reliable partner that keeps you connected and organized.",
    },
    {
      id: "4",
      title:
        "Elevate Your Performance with Nike: Innovative Design, Lightweight Comfort, and Unmatched Durability",
      price: 11898,
      image: "/shoe.png",
      rating: 4,
      description:
        "Elevate your performance with Nike's innovative design. These lightweight and comfortable shoes are engineered to provide unmatched durability, ensuring they withstand your active lifestyle. Whether you're hitting the gym, pounding the pavement, or simply want comfortable and stylish footwear, Nike has you covered. Trust in the brand known for quality and craftsmanship.",
    },
    {
      id: "5",
      title: "Trust Keyboard: Typing with Confidence and Comfort",
      price: 2898,
      image: "/keyboard.png",
      rating: 4,
      description:
        "Type with confidence and comfort using the Trust Wireless Keyboard. This keyboard offers a seamless and efficient typing experience, enhancing your productivity. The wireless connectivity eliminates clutter and provides flexibility in your workspace. Whether you're working on important documents or simply browsing the web, this keyboard is a reliable companion for your computing needs.",
    },
    {
      id: "6",
      title:
        "JBL Speaker: Powerful Sound, Bluetooth Connectivity, and Long-lasting Battery Life",
      price: 9898,
      image: "/speaker.png",
      rating: 4,
      description:
        "Immerse yourself in powerful sound with the JBL Speaker. With Bluetooth connectivity, you can effortlessly stream your favorite music from your devices. The long-lasting battery ensures that your music keeps playing for hours, making it perfect for parties, gatherings, or simply enjoying music on your own. JBL's commitment to quality sound is evident in every note.",
    },
    {
      id: "7",
      title:
        "Apple Monitor: Stunning 4K Display, True-to-Life Colors, and Precision Engineering",
      price: 120998,
      image: "/monitor.png",
      rating: 5,
      description:
        "The Apple Monitor offers a stunning 4K display that delivers true-to-life colors and precision engineering. It's not just a monitor; it's a window into a world of high-definition content. Whether you're a creative professional, a gamer, or someone who appreciates top-notch visuals, this monitor provides a viewing experience that's second to none. Upgrade your display and see the world in greater detail with the Apple Monitor.",
    },
    {
      id: "8",
      title: "Philips Irons: Wrinkle-Free Perfection at Your Fingertips",
      price: 3999,
      image: "/iron.png",
      rating: 5,
      description:
        "Discover the ultimate in ironing efficiency and precision with Philips irons.Introducing our high-performance steam iron, the ultimate solution for achieving flawlessly pressed and wrinkle-free clothes. This iron combines cutting-edge technology with user-friendly design to make your ironing tasks a breeze. Say goodbye to stubborn wrinkles and hello to perfectly pressed garments with our top-notch iron. Features include adjustable temperature settings, a powerful steam burst, and a non-stick soleplate for smooth gliding. Upgrade your ironing experience today and make a lasting impression with your impeccably ironed attire.",
    },
    {
      id: "9",
      title: "Score Big with Top-Quality Footballs for Your Game",
      price: 1999,
      image: "/Football.png",
      rating: 3,
      description:
        "Welcome to our collection of high-quality footballs, where your passion for the beautiful game meets superior performance. Whether you're a professional athlete, an avid enthusiast, or just looking to have fun on the field, our footballs are designed to enhance your gameplay and provide the perfect balance of control, accuracy, and durability.",
    },
    {
      id: "10",
      title:
        "Introducing Apple AirPods Pro 2nd Generation - Your Ultimate Audio Upgrade!",
      price: 23999,
      image: "/airpods.png",
      rating: 5,
      description:
        "Elevate your audio experience to new heights with the Apple AirPods Pro 2nd Generation. These cutting-edge wireless earbuds combine industry-leading technology with the iconic Apple design, delivering immersive sound, active noise cancellation, and a comfortable, customizable fit. Take a leap into the future of audio and enjoy the perfect blend of style and performance with AirPods Pro 2nd Generation.",
    },
    {
      id: "11",
      title: "Ultimate Blender Whisk: Elevate Your Culinary Creations",
      price: 399,
      image: "/blender.png",
      rating: 4,
      description:
        "Introducing our high-performance Blender Whisk, a must-have kitchen tool that will take your culinary skills to the next level. Crafted with precision and innovation, this whisk is designed to effortlessly blend, mix, and froth a wide range of ingredients. Whether you're whipping up creamy sauces, creating the fluffiest pancakes, or preparing the perfect omelette, our Blender Whisk is your trusted companion. Discover a new world of culinary possibilities with this exceptional kitchen accessory. Elevate your cooking experience and order yours today!",
    },
    {
      id: "12",
      title: "The Perfect Brew: Your Ultimate Coffee Maker Companion",
      price: 13199,
      image: "/coffeemaker.png",
      rating: 5,
      description:
        "Start your day with the perfect cup of coffee using our state-of-the-art Coffee Maker. Designed for coffee enthusiasts, our machine brews rich and aromatic coffee with every use. Whether you prefer a bold espresso shot, a smooth cappuccino, or a classic drip brew, our coffee maker does it all. With intuitive controls and sleek design, it's not just a kitchen appliance; it's your daily dose of happiness. Experience the ultimate coffee convenience - get your coffee maker today and savor the moments!",
    },
    {
      id: "13",
      title: "Orion Gas Oven: Your Culinary Companion for Baking Excellence",
      price: 21298,
      image: "/gasoven.png",
      rating: 4,
      description:
        "Introducing the Orion Gas Oven, a masterpiece of kitchen technology brought to you by the renowned Orion brand. Elevate your baking game to professional levels with this powerful and versatile oven. With precise temperature control, even heat distribution, and a range of baking modes, it's the perfect tool for creating mouthwatering pastries, crispy bread, and delectable dishes. Say goodbye to culinary limitations and hello to endless possibilities. Unleash your inner chef with the Orion Gas Oven and experience baking excellence like never before. Get yours today and let your culinary journey begin!",
    },
    {
      id: "14",
      title:
        "Philips Electric Kettle: Revolutionize Your Tea and Coffee Time with Our Electric Kettle Collection",
      price: 399,
      image: "/kettle.png",
      rating: 3,
      description:
        "Discover the perfect harmony of style and efficiency with the Philips Electric Kettle. Whether it's your morning tea or instant noodles, this kettle is your kitchen companion for fast and hassle-free boiling. With Philips' quality and innovation, enjoy precise temperature settings and rapid boiling. Elevate your daily routine with the ultimate convenience - bring home the Philips Electric Kettle today for quick and delightful sips!",
    },
    {
      id: "15",
      title:
        "Bake, Roast, and Broil Like a Pro with Our Premium Oven Collection",
      price: 14899,
      image: "/oven.png",
      rating: 5,
      description:
        "Upgrade your kitchen with our high-quality oven range. From delectable pastries to mouthwatering roasts, our ovens deliver precision cooking and versatility for all your culinary creations. With sleek designs and advanced technology, they're not just kitchen appliances; they're your ticket to culinary mastery. Elevate your cooking experience and transform your meals into masterpieces. Explore our Oven Collection now and let your inner chef shine.",
    },
    {
      id: "16",
      title: "BOSCH Juicer Blender: A Blend of Health and Convenience",
      price: 4999,
      image: "/juicerblender.png",
      rating: 5,
      description:
        "Experience the perfect fusion of health and convenience with the BOSCH Juicer Blender. This powerful kitchen companion is designed to extract the freshest juices and create delicious smoothies with ease. Its robust performance and intuitive features make it a must-have for health-conscious individuals. Embrace a healthier lifestyle and enjoy the goodness of fresh fruits and vegetables in every sip. Elevate your daily routine with the Philips Juicer Blender - your partner in wellness. Explore the possibilities and make it yours today!",
    },
    {
      id: "17",
      title: "KitchenAid Stand Mixer: The Culinary Maestro's Secret Weapon",
      price: 2399,
      image: "/mixer.png",
      rating: 4,
      description:
        "Elevate your culinary adventures with the KitchenAid Stand Mixer, the ultimate kitchen essential for every home chef. This iconic appliance combines style and performance, making it the perfect partner for all your baking and cooking endeavors. With a powerful motor and a wide range of attachments, it effortlessly handles everything from kneading dough to whipping up fluffy meringues. Experience the joy of precision and efficiency in the kitchen with the KitchenAid Stand Mixer – your trusted companion for culinary excellence.",
    },
    {
      id: "18",
      title:
        "Russell Hobbs Toaster: Perfectly Toasted Delights Await You with Our Bread Toaster",
      price: 2795,
      image: "/toaster.png",
      rating: 5,
      description:
        "Start your mornings right with the Russell Hobbs Toaster. This sleek and efficient toaster is designed to deliver perfectly toasted slices every time. With customizable browning settings, wide slots for various bread types, and a stylish stainless steel finish, it's the ideal addition to your kitchen. Make breakfast a breeze and elevate your daily routine with the Russell Hobbs Toaster. Enjoy crispy, golden toast at your fingertips!",
    },
    {
      id: "19",
      title:
        "Immerse Yourself in Entertainment with Our High-Definition Television",
      price: 110000,
      image: "/Tv.png",
      rating: 5,
      description:
        "Step into a world of vivid visuals and immersive sound with our cutting-edge High-Definition Television. Elevate your entertainment experience as you dive into your favorite movies, shows, and games with stunning clarity and lifelike colors. Whether it's movie night with the family or an intense gaming session, our TV is your gateway to an extraordinary viewing journey. Bring the cinema to your living room and transform the way you enjoy entertainment. Explore our High-Definition Television today and make every moment on the screen come to life.",
    },
    {
      id: "20",
      title: "LG Washing Machines: Where Innovation Meets Cleanliness",
      price: 56999,
      image: "/wm.png",
      rating: 4,
      description:
        "Introducing LG Washing Machines, where cutting-edge technology and pristine cleanliness unite. Our LG washers are designed to make your laundry chores a breeze. With advanced features like TurboWash, Smart Diagnosis, and energy-efficient Inverter Direct Drive, you'll experience unparalleled cleaning performance and convenience. Elevate your laundry experience with LG and discover the future of washing. Get an LG Washing Machine today and enjoy cleaner, fresher clothes effortlessly.",
    },
    {
      id: "21",
      title:
        "ASUS Laptops: Unleash Your Digital Potential with Innovative Technology and Exceptional Performance",
      price: 198999,
      image: "/laptop.png",
      rating: 4,
      description:
        "Discover the world of ASUS laptops, where cutting-edge technology meets sleek design. Experience unrivaled power and performance that adapts to your needs. Whether you're a creative professional, a student, or a multitasking enthusiast, ASUS laptops offer precision and versatility. Elevate your digital experience with the perfect blend of style and substance. Explore our range of ASUS laptops and redefine the way you work and play. Your next level of productivity and entertainment awaits!",
    },
    {
      id: "22",
      title:
        "Panasonic Refrigerators: Keeping Your Food Fresh and Your Kitchen Stylish",
      price: 78999,
      image: "/fridge.png",
      rating: 4,
      description:
        "Introducing Panasonic Refrigerators - where innovation meets freshness. Elevate your kitchen with our state-of-the-art refrigeration solutions. Our refrigerators are designed to keep your food crisp, cool, and delicious while adding a touch of elegance to your home. From energy efficiency to smart features, trust Panasonic to provide the best for your family. Explore our range today and upgrade your kitchen with Panasonic refrigerators.",
    },
    // Add more products here
  ];

  const sortProducts = (option) => {
    const sorted = [...products];
    if (option === "rating_desc") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (option === "rating_asc") {
      sorted.sort((a, b) => a.rating - b.rating);
    } else if (option === "price_desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === "price_asc") {
      sorted.sort((a, b) => a.price - b.price);
    }
    return sorted;
  };

  const filterProducts = (products, filter) => {
    if (filter === "all") {
      return products;
    } else if (filter === "high_rated") {
      // return products.filter((product) => product.rating >= 4);
      const highlyRatedProducts = products.filter(
        (product) => product.rating >= 4
      );
      highlyRatedProducts.sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating; // Sort by rating (high to low)
        } else {
          return a.id - b.id; // If ratings are equal, sort by ID
        }
      });
      return highlyRatedProducts;
    } else if (filter === "affordable") {
      return products.filter((product) => product.price <= 5000);
    }
    // Add more filter options as needed
  };

  const filteredProducts = filterProducts(products, filterOption);

  const sortedProducts = sortProducts(sortingOption);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const renderProducts = () => {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    const slicedProducts = sortedProducts.slice(start, end);

    // Define the number of products in each row
    const productsInRows = [2, 4, 1];
    let currentIndex = 0;
    let rows = [];

    // Iterate over the number of products in each row
    productsInRows.forEach((productsInRow) => {
      const rowProducts = slicedProducts.slice(
        currentIndex,
        currentIndex + productsInRow
      );

      // Increment the current index
      currentIndex += productsInRow;

      // Add the row to the list
      rows.push(rowProducts);
    });

    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className="home_row">
        {row.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
            description={product.description}
          />
        ))}
      </div>
    ));
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Auto slide images
    const timer = setInterval(nextImage, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex]);

  return (
    <div className="home">
      <div
        className="banner"
        style={{
          position: "relative",
          width: "100%",
          height: "510px", // Use maxHeight instead of max-height
          overflow: "hidden",
        }}
      >
        {images.map((image, index) => (
          <img
            className="banner-image"
            key={index}
            src={image}
            alt="Nation Cart.."
            style={{
              display: index === currentImageIndex ? "block" : "none",
              marginTop: "10px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease-in-out",
              position: "absolute",
              zIndex: -1,
              // marginBottom: "-50px",
            }}
          />
        ))}
        <button onClick={previousImage} className="slider-button left">
          <NavigateBeforeIcon />
        </button>
        <button onClick={nextImage} className="slider-button right">
          <NavigateNextIcon />
        </button>
      </div>

      <div className="home_container">
        <div className="sort-filter-bar">
          <div className="dropdown-container">
            <div className="sorting-dropdown">
              <label htmlFor="sortingOption">Sort by:</label>
              <div className="custom-select">
                <select
                  id="sortingOption"
                  value={sortingOption}
                  onChange={(e) => setSortingOption(e.target.value)}
                >
                  <option value="rating_desc">Rating (High to Low)</option>
                  <option value="rating_asc">Rating (Low to High)</option>
                  <option value="price_desc">Price (High to Low)</option>
                  <option value="price_asc">Price (Low to High)</option>
                </select>
              </div>
            </div>
            <div className="filter-dropdown">
              <label htmlFor="filterOption">Filter by:</label>
              <div className="custom-select">
                <select
                  id="filterOption"
                  value={filterOption}
                  onChange={(e) => setFilterOption(e.target.value)}
                >
                  <option value="all">All Product</option>
                  <option value="high_rated">Top Rated</option>
                  <option value="affordable">Affordable</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="scrollable-products-container">
          <div
            className="scrollable-products"
            ref={productCardRef}
            style={{
              width: `${filteredProducts.length * productCardWidth}px`,
              transform: `translateX(-${scrollOffset * productCardWidth}px)`,
              transition: "transform 0.5s ease-in-out",
              display: "flex",
            }}
          >
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
                description={product.description}
              />
            ))}
          </div>
        </div> */}
         <div className="scrollable-products-container">
          <div className="scrollable-products" ref={productCardRef}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-inline">
                <Product
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  description={product.description}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-buttons left">
          <button onClick={handleScrollLeft}>
            <NavigateBeforeIcon />
          </button>
        </div>
        <div className="scroll-buttons right">
          <button onClick={handleScrollRight}>
            <NavigateNextIcon />
          </button>
        </div>
        {renderProducts()}
        {/* Add pagination controls */}
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
