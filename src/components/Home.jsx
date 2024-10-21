import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="  py-16 mt-1 text-black">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
                    <p className="mt-4 text-lg">
                        Discover the best products, amazing deals, and exceptional services.
                    </p>
                    <Link to="/product">
                        <button className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold">
                            Explore Products
                        </button>
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                        <p className="text-gray-600 mb-8">
                            Our platform is dedicated to providing a seamless shopping experience. 
                            From high-quality products to personalized services, we aim to cater to all your needs. 
                            Join us and experience the best of online shopping.
                        </p>
                        <p className="text-gray-600">
                            With a variety of products and exclusive deals, we bring you the best at unbeatable prices.
                            Start exploring today and find what you’re looking for.
                        </p>
                    </div>
                    <div>
                        <img 
                            src="https://rockcontent.com/wp-content/uploads/2022/02/5-ps-of-marketing-1024x538.png.webp" 
                            alt="About us"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Tasks */}
            <section className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
                            <p className="text-gray-600 mt-2">
                                Get your orders delivered quickly with our efficient delivery system.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
                            <p className="text-gray-600 mt-2">
                                Our support team is here to assist you anytime, anywhere.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">Quality Products</h3>
                            <p className="text-gray-600 mt-2">
                                We offer a wide range of quality products to meet your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-800 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                    <p className="mt-4 text-lg">
                        Sign up now and start exploring our amazing products and services.
                    </p>
                    <Link to="/">
                        <button className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold">
                            Join Us
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
