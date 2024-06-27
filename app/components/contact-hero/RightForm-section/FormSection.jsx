"use client";
import React, { useState } from "react";
import {
  useForm,
  isEmail,
  hasLength,
  matches,
  isNotEmpty,
} from "@mantine/form";
import { Button, TextInput, Textarea } from "@mantine/core";
import styles from "./FormSection.module.css";

const FormSection = () => {
  const BACKEND_CONTACT_URI = process.env.NEXT_PUBLIC_BACKEND_CONTACT_URI;
  const [submitted, setSubmitted] = useState(false); // State to track form submission status
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      phoneNumber: "",
      senderEmail: "",
      message: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Please write your name"),
      phoneNumber: matches(
        /^(\+\d{1,3}[-.\s]??)?\d{10}$/,
        "Please enter a valid phone number",
      ),
      senderEmail: isEmail("Please enter a valid email"),
      message: isNotEmpty("Please write your message"),
    },
  });

  const [messageRows, setMessageRows] = useState(1);

  const handleTextareaFocus = () => {
    setMessageRows(3);
  };

  const handleTextareaBlur = () => {
    setMessageRows(1);
  };

  const sendFormData = async (data) => {
    console.log(data);
    if (BACKEND_CONTACT_URI) {
      try {
        const response = await fetch(BACKEND_CONTACT_URI, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log("data sent successfully");
          setSubmitted(true);
          form.reset();
        } else {
          throw new Error("Failed to send data");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("BACKEND_CONTACT_URI is not defined");
    }
  };

  return (
    <>
      <div className="relative col-span-2 sm:mb-[-2.75rem] mb-[10px] flex w-[75%] items-center sm:min-h-[500px] sm:w-[100%] lg:w-[75%]">
        <form
          className={`${styles.formWrap} w-full`}
          onSubmit={form.onSubmit((values) => {
            sendFormData(values);
          })}
        >
          <TextInput
            label="Name"
            radius={50}
            placeholder="Your name here"
            classNames={{
              input: styles.transparentInput,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            withAsterisk
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <br />
          <TextInput
            label="Phone Number"
            radius={50}
            placeholder="Your phone number here"
            classNames={{
              input: styles.transparentInput,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            withAsterisk
            key={form.key("phoneNumber")}
            {...form.getInputProps("phoneNumber")}
            inputMode="numeric"
          />
          <br />
          <TextInput
            label="Email"
            radius={50}
            placeholder="Your email here"
            classNames={{
              input: styles.transparentInput,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            withAsterisk
            key={form.key("senderEmail")}
            {...form.getInputProps("senderEmail")}
          />
          <br />
          <Textarea
            label="Message"
            radius={50}
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
            classNames={{
              input: styles.transparentInput,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            placeholder="Your message here"
            rows={messageRows}
            key={form.key("message")}
            {...form.getInputProps("message")}
          />
          <br />
          <div className="items-center text-center sm:flex lg:gap-3  xl:gap-5">
            <Button
              className={styles.formButton}
              radius={50}
              color="black.0"
              type="submit"
              mt="sm"
              fz={16}
            >
              Submit
            </Button>
            {submitted && (
              <p className={styles.sentMessage}>
                Sent! We will reach out to you soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSection;
