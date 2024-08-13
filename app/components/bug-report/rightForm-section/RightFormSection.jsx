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
import styles from "./RightFormSection.module.css";

const RightFormSection = () => {
  const BACKEND_BUG_URI = process.env.NEXT_PUBLIC_BACKEND_BUG_URI;
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      deviceName: "",
      senderEmail: "",
      feedback: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Please write your name"),
      deviceName: isNotEmpty("Please write your device name"),
      senderEmail: isEmail("Please enter a valid email"),
      feedback: isNotEmpty("Please write your feedback"),
    },
  });

  const sendFormData = async (data) => {
    console.log(data);
    if (BACKEND_BUG_URI) {
      try {
        const response = await fetch(BACKEND_BUG_URI, {
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
      console.error("BACKEND_BUG_URI is not defined");
    }
  };

  const [messageRows, setMessageRows] = useState(1);

  const handleRowClick = () => {
    setMessageRows(3);
  };

  return (
    <>
      <div className="relative col-span-2 mb-[10px] flex w-[75%] items-center sm:min-h-[500px] sm:w-[100%] lg:w-[75%] xl:mt-[20px] ">
        <form
          className={`${styles.formWrap} w-full `}
          onSubmit={form.onSubmit((values) => {
            sendFormData(values);
          })}
        >
          <TextInput
            label="Name"
            radius={50}
            placeholder="Bob Ross"
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
            label="Email"
            radius={50}
            placeholder="happyaccidents@gmail.com"
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
          <TextInput
            label="Device name"
            radius={50}
            placeholder="Iphone14"
            classNames={{
              input: styles.transparentInput,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            withAsterisk
            key={form.key("deviceName")}
            {...form.getInputProps("deviceName")}
          />
          <br />

          <Textarea
            label="Feedback"
            onClick={handleRowClick}
            rows={messageRows}
            radius={50}
            classNames={{
              input: styles.transparentInputArea,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            placeholder="I would like to speak to the team."
            key={form.key("feedback")}
            {...form.getInputProps("feedback")}
          />
          <br />
          <div className="items-center text-center sm:flex lg:gap-3 xl:gap-5">
            <Button
              className={styles.formButton}
              radius={50}
              color="black.0"
              type="submit"
              mt="sm"
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

export default RightFormSection;
