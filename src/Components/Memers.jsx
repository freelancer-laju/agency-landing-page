import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// members logos
import Logo1 from "../Assets/card1.svg";
import Logo2 from "../Assets/card2.svg";
import Logo3 from "../Assets/card3.svg";

export function Members() {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-2xl mb-5 md:text-[30px] text-neutralGray text-center leading-8 md:leading-10">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="text-center text-neutralGrey mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="py-8 px-6 md:px-10 flex items-center justify-between flex-wrap gap-4">
        <Card className="hover:shadow-gray-400 hover:shadow-lg mx-auto px-5 w-full md:mx-0 mt-6 md:w-80 shadow-lg shadow-gray-300 transition-all duration-200">
          <CardBody>
            <img className="m-auto" src={Logo1} alt="" />
            <Typography
              variant="h5"
              color="blue-gray"
              className="my-5  text-neutralGray">
              Our Membership
            </Typography>
            <Typography className="text-neutralGray">
              Our membership management software provides full automation of
              membership renewals and payments
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-gray-400 transition-all duration-200 mx-auto px-5 w-full mt-6 md:w-80 shadow-lg shadow-gray-300">
          <CardBody>
            <img className="m-auto my-5" src={Logo2} alt="" />
            <Typography
              variant="h5"
              color="blue-gray"
              className="my-5 text-neutralGray">
              National Associations
            </Typography>
            <Typography className="text-neutralGray">
              Our membership management software provides full automation of
              membership renewals and payments
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-gray-400 transition-all duration-200 mx-auto px-5 w-full mt-6 md:w-80 shadow-lg shadow-gray-300">
          <CardBody>
            <img className="m-auto my-5" src={Logo3} alt="" />
            <Typography
              variant="h5"
              color="blue-gray"
              className="my-5 text-neutralGray">
              Clubs And Groups
            </Typography>
            <Typography className="text-neutralGray">
              Our membership management software provides full automation of
              membership renewals and payments
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-gray-400 transition-all duration-200 mx-auto px-5 w-full mt-6 md:w-80 shadow-lg shadow-gray-300">
          <CardBody>
            <img className="m-auto my-5" src={Logo1} alt="" />
            <Typography
              variant="h5"
              color="blue-gray"
              className="my-5 text-neutralGray">
              Programming Adda
            </Typography>
            <Typography className="text-neutralGray">
              Our membership management software provides full automation of
              membership renewals and payments
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
