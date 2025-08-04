import { SambaLinks } from "../_atoms/SambaLinks";
import Icon from "../_atoms/Icon";
import { Globe } from "../_atoms/Icons";
import footerData from "../mocks/footerData";
import { AccordionSection } from "../_molecules/accordionSection";
import FooterBlogList from "./FooterBlogList";

export function Footer() {
  return (
    <footer className="text-white text-[16px]">
      <div className="bg-gray-800 text-[16px] text-gray-300 py-4 px-6 text-center border-b border-gray-700">
        <span className="font-semibold text-white">Top companies</span> choose{" "}
        <SambaLinks color="sunshine" className="font-semibold">
          Samba Business
        </SambaLinks>{" "}
        to build in-demand career skills.
      </div>

      <div className="bg-gray-900">
        <div className="py-10 px-6 max-w-7xl mx-auto">
          <h2 className="text-lg md:text-xl font-semibold mb-6">
            Explore top skills and certifications
          </h2>

          <div className="hidden md:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {footerData.map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-2 tracking-wide text-[16px]">
                  {section.title}
                </h3>
                <ul className="space-y-1 text-[16px]">
                  {section.links.map((text, j) => (
                    <li key={j}>
                      <SambaLinks color="white" underline="hover">
                        {text}
                      </SambaLinks>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:hidden divide-y divide-gray-700">
            {footerData.map((section, i) => (
              <AccordionSection
                key={i}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-950 border-t border-gray-700 py-6 px-6">
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-1">
            {["About us", "Careers", "Contact us", "Blog", "Investors"].map(
              (text, i) => (
                <li key={i}>
                  <SambaLinks color="white" underline="hover">
                    {text}
                  </SambaLinks>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <FooterBlogList />
      <div className="border-t border-black w-full" />

      <div className="bg-gray-200 w-full text-sm text-gray-800  py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span>
              Greenstep Su Soğutma Kuleleri © {new Date().getFullYear()}{" "}
              SambaAcademy, Inc. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Icon variant={Globe} size={12} />
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
