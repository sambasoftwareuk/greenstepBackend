"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../_atoms/Icon";
import { IconOnlyButton } from "../_atoms/buttons";
import navLinks from "../constants/navLinks";
import {
  Cart,
  Search,
  HamburgerIcon,
  LineXIcon,
  Home,
  Certificate,
  Phone,
  Gallery,
  Services,
  Reference,
  Blog,
  socialIcons,
} from "../_atoms/Icons";
import { AccordionSection } from "../_molecules/accordionSection";
import { LogoImage } from "../_atoms/images";
import Logo from "../constants/logo.json";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconMap = {
    Cart,
    Search,
    HamburgerIcon,
    LineXIcon,
    Home,
    Certificate,
    Phone,
    Gallery,
    Services,
    Reference,
    Blog,
  };

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between py-3 gap-2">
        <IconOnlyButton
          onClick={() => setIsOpen(true)}
          icon={<Icon variant={HamburgerIcon} size={25} />}
        />
        <Link href="/">
          <Image src="/green-step-logo.png" alt="logo" width={70} height={70} />
        </Link>
        <div className="flex items-center gap-0">
          <IconOnlyButton icon={<Icon variant={Search} size={20} />} />
          <IconOnlyButton
            icon={<Icon variant={Cart} size={20} />}
            className="hidden xl:block "
          />
        </div>
      </div>

      {/* Overlay and Slide Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex h-screen transition-transform duration-300 ease-in-out ">
          {/* Sidebar Menu (2/3) */}
          <div className="w-5/6 bg-white h-full overflow-y-auto p-4 transform transition-all duration-300 ">
            <div>
              <Link href="/">
                <LogoImage imageLink={Logo.imageLink} width={200} height={40} />
              </Link>
            </div>
            <div className="flex flex-col space-y-2 mt-10 ">
              <div className="border-b border-gray-200 pb-2 mb-2">
                {navLinks.map((item, index) => {
                  const IconComponent = item.iconName
                    ? iconMap[item.iconName]
                    : null;

                  return (
                    <React.Fragment key={index}>
                      <AccordionSection
                        title={
                          <div className="flex items-center gap-2">
                            {IconComponent && (
                              <Icon
                                variant={IconComponent}
                                size={24}
                                color="text-primary500"
                              />
                            )}
                            <span>{item.label}</span>
                          </div>
                        }
                        links={item.dropdown || []}
                        linkColor="secondary"
                        hoverBg="hover:bg-primary50 active:bg-primary50"
                        showArrowOnlyIfDropdown={true}
                      />
                      {index !== navLinks.length - 1 && (
                        <hr className="border-b-1 border-gray-200 my-3" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-2 items-center justify-center  mt-6">
              {socialIcons?.map(({ href, svg, alt, bgColor }) => (
                <Link
                  key={alt}
                  href={href}
                  target="_blank"
                  aria-label={alt}
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-125"
                >
                  <div
                    style={{ backgroundColor: bgColor }}
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full"
                  >
                    {svg}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Overlay (1/3) */}
          <div
            className="w-1/6 bg-black/50 h-full"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute bg-primary50 w-full py-3 ">
              <IconOnlyButton
                onClick={() => setIsOpen(false)}
                icon={<Icon variant={LineXIcon} size={24} />}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
