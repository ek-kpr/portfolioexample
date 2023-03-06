import { motion } from 'framer-motion';
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = { // types for email (TS)
    name: string;
    email: string;
    subject:string;
    message: string;
};


type Props = {}

function ContactMe({}: Props) { // contact form submit handler
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:ekapur@proton.me?subject=${formData.subject}&bod= Hi, my name is ${formData.name}.  ${formData.message}`;
    };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-24"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10 items-center">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-orange-600/50">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-orange-600" />
            <p className="text-2xl">+49 99999999</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-orange-600" />
            <p className="text-2xl">ekapur@proton.me</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-orange-600" />
            <p className="text-2xl">53757 Sankt Augustin</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactinput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="E-Mail"
                className="contactinput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactinput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactinput"
              name=""
              id=""
            ></textarea>
            <button
              type="submit"
              className="bg-orange-600 py-5 px-10 rounded-md text-black font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe