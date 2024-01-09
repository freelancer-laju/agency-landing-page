import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import NavLogo from "../Assets/navLogo.png";

export function Test() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex  flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Service
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Feature
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Product
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Testimonial
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Testimonial
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="flex mr-4 cursor-pointer py-1.5 font-medium">
            <img src={NavLogo} alt="" />
            <span className="text-2xl font-semibold text-neutralGray ml-1">
              Nexcent
            </span>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block">
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block">
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>

      {/* 
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad non
        perspiciatis porro esse consectetur assumenda neque doloribus voluptates
        totam quia nesciunt vero ullam, ducimus sapiente saepe qui soluta rem
        nihil accusantium. Assumenda harum deleniti exercitationem obcaecati
        alias nulla molestias iusto necessitatibus quo! Exercitationem vel
        veritatis dignissimos ullam tenetur aut! Ducimus dolores alias inventore
        ipsam id qui cupiditate excepturi maiores, adipisci assumenda numquam
        animi et? Aliquid dignissimos, beatae nisi, voluptatibus veniam
        aspernatur quod possimus non, maxime tempora asperiores illo odit. Odit
        hic sunt dolor dignissimos voluptatibus labore voluptatum architecto
        soluta minima doloribus ex quas perspiciatis, pariatur, eum aliquam
        natus neque ullam ad quia doloremque exercitationem? Eos error quis
        totam nihil architecto esse, exercitationem corrupti minus. Dicta ex
        accusantium laborum nesciunt modi quisquam quibusdam est ab, excepturi
        incidunt nisi delectus tenetur numquam eaque eos aspernatur cum, nulla
        non hic explicabo odit laudantium repellendus. Recusandae odit saepe
        ratione! Aliquam officia aliquid ducimus quidem nobis eos magni sed.
        Fugit, quasi. Blanditiis corrupti, commodi harum exercitationem autem
        beatae qui omnis voluptatem placeat quae, deleniti laboriosam quos odio
        accusamus reiciendis fugit eaque, aspernatur quisquam magni molestias
        aperiam a velit id! Quas repellendus molestias maxime esse quo sunt eum
        assumenda quibusdam provident distinctio vero velit deleniti, sapiente
        molestiae dicta iusto, corrupti voluptatibus! Quisquam nihil laborum
        minus unde tempore at, error laboriosam, assumenda veniam esse
        temporibus dolore quia adipisci nam. Saepe similique enim cum nesciunt
        corrupti itaque veniam tempora deserunt qui, dolorem iste quo nisi quasi
        delectus ab, aliquam sapiente maiores eaque voluptatum. At soluta esse
        illum, consequuntur eveniet voluptatibus nihil perspiciatis sapiente
        cumque possimus earum laborum porro odit provident ducimus commodi
        obcaecati dignissimos nostrum quae aliquid excepturi neque amet!
        Asperiores iste, fugit, perferendis eos autem nemo suscipit voluptates
        quaerat assumenda corrupti numquam quisquam quidem. Ipsam officiis
        voluptatibus aspernatur consectetur fugit esse! Saepe cumque deserunt
        culpa facilis consectetur doloremque blanditiis voluptas obcaecati
        perferendis ullam, atque eum, rem soluta vel ad provident, quaerat
        officia in numquam sapiente aliquid rerum sequi magni delectus? Quasi
        doloribus tempore illum. Atque veritatis officiis enim tempora explicabo
        impedit delectus repellendus accusamus voluptas molestias alias quos,
        earum quam vel labore quae, optio unde et, quod natus. Id nemo sit odio
        culpa excepturi perferendis officiis nulla saepe sunt alias rem, ipsam
        tenetur delectus cupiditate hic eveniet quibusdam tempore earum
        accusamus. Labore nobis dolore voluptas totam similique ducimus dolorem
        commodi eligendi fugiat consectetur obcaecati, facere odio quos deserunt
        rerum, reiciendis cum ipsa modi tempore voluptates suscipit enim.
        Voluptates recusandae ex nostrum iste cum quos dicta praesentium,
        consequuntur nobis quia accusantium distinctio excepturi cupiditate
        illum officiis officia explicabo, quibusdam laborum dignissimos,
        repellendus eos? Cum necessitatibus optio commodi consequatur, ullam
        unde suscipit repellendus at dolore. Exercitationem similique sapiente,
        molestias cum quidem possimus doloremque culpa rem tempora iusto, est
        error. Neque dolorem, fugiat itaque aperiam nam commodi pariatur
        voluptatibus voluptate nisi! Eum rerum neque, laudantium, sit veritatis
        accusantium recusandae eos praesentium omnis dolores dolor ut, nisi qui!
        Nam vero tenetur ducimus provident, tempora enim aliquam voluptatibus
        inventore, perspiciatis quisquam ea ullam, natus omnis recusandae ut est
        quod ipsum minus culpa totam? At reiciendis numquam fuga, quod
        voluptatibus tempore iure dolores. Distinctio quidem, ea voluptatibus
        modi, dignissimos voluptate sunt placeat ullam cum ipsa accusamus
        impedit, dolore eaque nam! Totam libero maxime, est doloremque dolor
        veniam molestias molestiae laudantium. Optio enim aliquid atque nemo
        aut. Placeat nam vero provident nihil ipsam facere vel maxime in maiores
        soluta, minus voluptatum impedit debitis aliquid id libero perspiciatis
        praesentium deserunt. Tenetur, dolorem. Inventore deserunt aspernatur
        vel adipisci eligendi quaerat eos, officia facilis obcaecati, dolores
        eaque fuga ipsum libero iure assumenda doloremque minus voluptates,
        praesentium voluptate reiciendis quos! Molestias iste dolores assumenda
        omnis iure. Commodi, explicabo porro praesentium modi dolores eligendi
        iure nobis incidunt ad sit eaque a ipsum odio minima, cum sed architecto
        voluptatem eius impedit esse vel illo. Sit hic voluptas aspernatur.
        Repellat harum numquam eveniet delectus, iusto laborum iste totam illo
        perspiciatis nam alias laboriosam quaerat quae minima repellendus quis?
        Consequatur pariatur ipsum minima est expedita doloremque distinctio
        iste nobis! Ratione, alias. Dolor non consequuntur maiores rem dicta
        voluptatum pariatur, officia accusantium, ex est quibusdam facere
        delectus repellat! Mollitia dolores, doloremque suscipit deleniti modi
        quae, fugiat ducimus quam vel itaque est, atque et inventore quasi alias
        temporibus repellendus laboriosam vero veritatis reprehenderit magnam
        iusto sapiente. Expedita, alias doloribus modi libero voluptatibus
        aliquam qui reiciendis consequuntur explicabo sapiente officiis neque
        eum minus repellendus tempora nisi, delectus quia! Ullam, eaque sequi?
        Iure at culpa consequatur quae reprehenderit veniam quidem deleniti?
        Placeat laboriosam earum voluptate impedit illum sed atque, provident
        voluptates assumenda. Adipisci alias, quibusdam excepturi, voluptate quo
        sequi praesentium natus dolor odio rem, rerum odit minus voluptatibus
        perspiciatis consectetur. Officia, dolorum temporibus commodi saepe
        tempora illum accusamus dolore illo a libero quia tempore et ad
        aspernatur reprehenderit, repellendus maxime vel magni at neque
        obcaecati odit labore excepturi iure. Consequuntur nam assumenda alias
        atque quaerat ullam perspiciatis itaque, reiciendis totam temporibus
        dignissimos harum, architecto nihil officia. Voluptates ipsa
        reprehenderit quos eligendi maiores beatae quod nisi. Non odit,
        doloremque dolorum eaque cupiditate perferendis, optio quam aperiam
        rerum voluptates quod fugit explicabo quaerat itaque eos aspernatur sed
        laboriosam. Accusantium voluptas quaerat eum odio aspernatur totam ex,
        veritatis repellendus sequi culpa dolore deserunt, soluta dicta ipsa,
        perspiciatis cumque earum minus libero maiores? Numquam, commodi? Ullam
        animi, consequatur eos laborum dicta voluptate fugit non? Autem nobis
        pariatur iusto omnis delectus illum, est explicabo ab ipsum repudiandae
        adipisci. Velit architecto vel incidunt dolores, ipsam aspernatur minima
        consectetur corporis labore repudiandae eius id asperiores sed ea
        laboriosam perferendis temporibus atque culpa! Nisi natus quae ut?
        Autem, ipsa et! Aut sed, corporis provident quam beatae aperiam, commodi
        dolor et reiciendis consequuntur, rerum voluptatem cupiditate nemo qui
        esse quis ab adipisci ipsam sit aspernatur repellat? Exercitationem
        repudiandae quae dolorem consequatur porro debitis delectus odio, animi
        voluptatum sunt nobis cupiditate quos qui consequuntur omnis. Numquam
        sed error ad possimus, officia veritatis itaque dolor minima fuga ipsa
        nulla earum maxime. Ratione, explicabo rerum. Nam enim possimus mollitia
        minus voluptas cupiditate, sint cum accusamus. Laudantium ipsum rem
        minus expedita sed velit maiores voluptas doloribus commodi quo!
      </p> */}
    </div>
  );
}
