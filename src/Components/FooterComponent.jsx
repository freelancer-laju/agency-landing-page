import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function FooterComponent() {
  return (
    <Footer className="w-full h-auto bg-[#4CAF4F] mt-10 rounded-none ">
      <div className="w-full md:px-20 py-8 md:py-10 px-4">
        <div className="w-full h-auto  flex items-center justify-between">
          <div className="flex flex-col justify-start text-white ">
            {" "}
            {/* Center the content */}
            <Footer.Title title="Company" className="text-[#e6e6e6] " />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white">
                About
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Careers
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Brand Center
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="flex flex-col items-center">
            {" "}
            {/* Center the content */}
            <Footer.Title
              title="help center"
              className="text-[#e6e6e6] -ml-6"
            />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white">
                Discord Server
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Twitter
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Facebook
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="flex flex-col items-center">
            {" "}
            {/* Center the content */}
            <Footer.Title
              title="legal"
              className="text-[#e6e6e6] -ml-[100px]"
            />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Licensing
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Terms &amp; Conditions
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                More &amp; info
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="flex flex-col items-center">
            {" "}
            {/* Center the content */}
            <Footer.Title title="download" className="text-[#e6e6e6]" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white">
                iOS
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Android
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Windows
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
