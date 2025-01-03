"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "lucide-react";

export default function FAQ() {
  return (
    <div className="w-full mx-auto mt-12 px-2 md:px-6 lg:px-24 py-8">
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-xl py-12 px-4 lg:px-12 bg-zinc-900"
      >
        <span className="flex justify-center gap-2 mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#00bfff"
            stroke-width="0.072"
            className="w-8 h-8"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.15"
                d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
                fill="#00bfff"
              ></path>{" "}
              <path
                d="M12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75Z"
                fill="#00bfff"
              ></path>{" "}
              <path
                d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                fill="#00bfff"
              ></path>{" "}
            </g>
          </svg>

          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
        </span>

        <AccordionItem
          value="item-1"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            Does sender&apos;s identity remains anonymous?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Sender&apos;s identity is always anonymous. We don&apos;t ask
            user to register or log in.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            Does sender&apos;s IP address get compromised?
          </AccordionTrigger>
          <AccordionContent>
            No, the sender&apos;s identity is never compromised. We don&apos; t
            track the IP address of user in our website. Only the report details
            are saved in the database.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            Which department or association handles the reports?
          </AccordionTrigger>
          <AccordionContent>
            We collect the reports from users and send them to local emergency
            services or law authorities of the mentioned location.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            How to track the status of my report?
          </AccordionTrigger>
          <AccordionContent>
            While you submit an anonymous report, we generate a token for your
            report. You can save the token somewhere in your system, and later
            track your report status via&nbsp;
            <a href="/track-report" className="underline">Track Report</a> option.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="text-zinc-400 border-2 border-transparent px-2 rounded-2xl hover:text-white hover:border-gray-400/10"
        >
          <AccordionTrigger>
            What if somebody submit fake incident report?
          </AccordionTrigger>
          <AccordionContent>
            We use advanced AI features to check if the incident is fake or not. We monitor the incident report, and then send it to local authorities, they verify if the report is genuine or fake.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
