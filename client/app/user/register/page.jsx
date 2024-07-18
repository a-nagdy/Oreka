"use client";
import login_validate from "@/lib/validate";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import oreka from "../../../public/oreka.svg";
import RegisterComponent from "@/components/RegisterComponent/RegisterComponent";
const Signup = () => {



  return (
    <>
     <RegisterComponent/>
    </>
  );
};

export default Signup;
