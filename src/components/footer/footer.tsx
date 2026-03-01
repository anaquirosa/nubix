import { ContactItem } from "./contact-item";
import { FooterListItem } from "./footer-list-item";
import { contactInformation, pages, conditions, medias } from "../../common/constants";


export const Footer = () => {
  return (
    <footer className="pt-[120px] pb-[60px] px-6 font-Raleway">
      <div className="max-w-7xl mx-auto">
        <img className="mb-10 w-32" src="/images/logo-nubix.svg" alt="Logo" />

      <div className="xl:flex xl:gap-24">
        <div className="flex flex-col gap-4 md:flex-row xl:gap-24" >
          <ContactItem styles="flex-1" {...contactInformation[0]} />

          <div className="flex flex-col gap-4 flex-1 xl:flex-none">
            {contactInformation.slice(1, 4).map((contact) => (
              <ContactItem key={contact.alt} {...contact} />
            ))
            }
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-16 font-Raleway md:flex-row md:gap-24 xl:mt-0">
          <ul>
            {pages.map((page) => (
              <FooterListItem key={page} text={page} />
            ))}
          </ul>

          <ul>
            {conditions.map((condition) => (
              <FooterListItem key={condition} text={condition} />
            ))}
          </ul>

          <div className="flex justify-center gap-4">
            {
              medias.map((media) => (
                <div
                  key={media.text}
                  className="text-white hover:text-teal-200 cursor-pointer border rounded-full w-[35px] h-[35px] p-1.5 flex items-center justify-center"
                >
                  {media.icon}
                </div>
              ))
            }
          </div>

        </div>
      </div>
      </div>

    </footer>
  )
}