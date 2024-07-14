"use client";
import { InputFade } from "@/components/Input";
import { LoadButton } from "@/components/Load";
import Modal from "@/components/Modal";
import { GlobalContext } from "@/context/Context";
import { profileSchema } from "@/schemas";
import { getProfileData, updateProfileData } from "@/store/auth/authActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { UserDetails } from "@/types";
import cogoToast from "cogo-toast";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";

export interface updateDetails {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  photo: string;
}

const page = () => {
  const dispatch = useAppDispatch();

  const pictureRef = useRef<HTMLInputElement>(null);

  const { picture, setPicture } = useContext(GlobalContext);

  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);

  const userDetails = useAppSelector<UserDetails | null>(
    (state) => state.auth.userDetails
  );
  const isLoading = useAppSelector<boolean>((state) => state.auth.loading);
  const isUpdateLoading = useAppSelector<boolean>(
    (state) => state.auth.updateLoading
  );

  const onSubmit = () => {
    dispatch(
      updateProfileData({
        firstname: values.firstname,
        lastname: values.lastname,
        phoneNumber: values.phoneNumber,
        photo: picture || "",
      } as updateDetails)
    );
    setPicture(null);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: userDetails?.first_name,
        lastname: userDetails?.last_name,
        username: userDetails?.first_name,
        phoneNumber: userDetails?.phone_number,
        email: userDetails?.email,
      },
      validationSchema: profileSchema,
      onSubmit,
    });

  const openPhotoModal = () => {
    setOpenModal(true);
  };

  const updateProfile = () => {
    setOpenModal(false);
    cogoToast.warn('Update Profile to save changes')
  };

  const handlePictureStaging = () => {
    // if(!pictureRef.current || !pictureRef.current?.files){
    //     cogoToast.warn('Please select a picture')
    //     return
    // }else{
    //     setPicture(pictureRef.current?.files !== null ? pictureRef.current?.files[0].name : null)
    // }
    if (pictureRef.current && pictureRef.current.files) {
      const file = pictureRef.current.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPicture(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }

    console.log(
      "the picture file leleyii",
      pictureRef.current?.files !== null
        ? pictureRef.current?.files[0]
        : "nothing"
    );
  };

  useEffect(() => {
    if (
      values.firstname !== "" &&
      values.lastname !== "" &&
      values.email !== "" &&
      values.username !== "" &&
      values.phoneNumber !== "" &&
      !errors.firstname &&
      !errors.lastname &&
      !errors.username &&
      !errors.phoneNumber &&
      !errors.email
    ) {
      setFormButtonDisabled(true);
    } else {
      setFormButtonDisabled(false);
    }
  }, [values, errors]);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (isUpdateLoading) {
      setUpdateLoading(true);
    } else {
      setUpdateLoading(false);
    }
  }, [isLoading, isUpdateLoading]);

  useEffect(() => {
    if(userDetails){
        return
    }
    dispatch(getProfileData())
  },[])

  return (
    <div className="w-full h-full bg-white ">
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <h1 className="text-xl font-semibold text-appBlack">
          Upload Profile Picture
        </h1>
        <div className="w-full py-[50px] flex items-center justify-between flex-col">
          <div className="w-[200px] h-[200px] rounded-full flex items-center justify-center overflow-hidden">
            {/* MODAL PICTURE */}
            {picture !== null ? (
              //   <Image
              //     src={picture !== null ? picture : ''}
              //     width={1024}
              //     height={1024}
              //     alt="uploaded profile picture"
              //   />
              <img
                src={picture}
                width={1024}
                height={1024}
                alt="uploaded profile picture"
                className="w-full h-full object-cover"
              />
            ) : (
              // <p className="w-[300px]">Hello</p>
              <Image
                src={require("../../../assets/images/avatar2.png")}
                alt="uploaded profile picture"
                width={1024}
                height={1024}
              />
            )}
          </div>
          <p className="text-sm max-w-[300px] text-center mt-8">
            {pictureRef?.current &&
            pictureRef?.current?.files &&
            pictureRef?.current?.files[0] && picture !== null
              ? pictureRef.current.files[0].name
              : "please select a file"}
          </p>

          {/* Add photo button */}
          <button className="buttons !w-fit !px-10 !py-2 relative cursor-pointer">
            <p className="text-sm">
              {picture !== null ? "Choose another photo" : "Upload Photo"}
            </p>
            <input
              type="file"
              ref={pictureRef}
              onChange={handlePictureStaging}
              className="opacity-0 absolute w-full h-full top-0 left-0 cursor-pointer"
            />
          </button>

          {/* SAVE BUTTON */}
          {picture !== null && (
            <button
              onClick={updateProfile}
              className="buttons !bg-success !w-fit !px-10 !py-2 relative cursor-pointer"
            >
              <p className="text-sm">Save</p>
            </button>
          )}
        </div>
      </Modal>
      <div className="dash-container">
        <div className="w-full pt-[26px] 2xl:pt-[34px] ">
          {/* TOP WITH HEADER DESCRIPTIONS */}
          <div className="flex flex-col items-start gap-[8px] 2xl:gap-3 pb-[26px] 2xl:pb-[34px]">
            <h3 className="text-lg 2xl:text-xl text-headDesc ">Profile</h3>
          </div>

          {/* PROFILE DIV */}
          <div className="w-full pl-0 lg:pl-[99px] flex flex-col lg:flex-row items-center">
            {/* PROFILE PICTURE */}
            <div className="flex flex-col items-center ">
              {/* IMAGE */}
              <div className="relative w-[70px] h-[70px] mb-6 2xl:mb-8">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  {/* USER PICTURE */}
                  {updateLoading === true ? (
                    <div className="absolute top-0 w-full h-full flex items-center justify-center bg-blackLoading z-10">
                        <LoadButton />
                    </div>
                  ) : ''}
                    {userDetails?.photo ? (
                    <Image
                        src={`https://fx-lms.onrender.com${userDetails.photo}`}
                        alt="stacfx.com"
                        width={1024}
                        height={1024}
                        className="w-full h-full object-cover"
                    />
                    ) : (
                    <Image
                        src={require("../../../assets/images/avatar2.png")}
                        alt="stacfx.com"
                        className="w-full"
                    />
                    )}
                
                </div>
                <button
                  onClick={openPhotoModal}
                  className="w-[24px] h-[24px] hoverActive rounded-full flex items-center justify-center bg-primary2 absolute bottom-0 right-0 cursor-pointer"
                >
                  <Image
                    src={require("../../../assets/icons/edit.png")}
                    alt="stacfx.com"
                    className="w-[18px]"
                  />
                </button>
              </div>

              {/* USER DETAILS TEXT */}
              <div className="flex flex-col items-center gap-1">
                <h4 className="text-[20px] 2xl:text-[24px] text-headDesc text-center">
                  {`${userDetails?.first_name} ${userDetails?.last_name}`}
                </h4>
                <p className="text-[11px] 2xl:text-[13px] text-greytxt">
                  Joined November 2023
                </p>
              </div>
            </div>

            {/* DIVIDER DIV */}

            <div className="h-[1px] lg:h-[253px] w-[70%] max-lg:my-[50px] lg:w-[1px] bg-profileDividerGray border-none outline-none mx-[99px] 2xl:mx-[99px]" />

            {/* PROFILE FORM */}
            <div className="w-[360px]">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4 "
              >
                <InputFade
                  id="firstname"
                  value={values.firstname}
                  touched={touched.firstname}
                  blur={handleBlur}
                  handleChange={handleChange}
                  error={errors.firstname}
                  isDisabled={false}
                  label="First Name"
                  type="text"
                  placeholder={values.firstname as string}
                />
                <InputFade
                  id="lastname"
                  value={values.lastname}
                  touched={touched.lastname}
                  blur={handleBlur}
                  handleChange={handleChange}
                  error={errors.lastname}
                  isDisabled={false}
                  label="Last Name"
                  type="text"
                  placeholder=""
                />
                <InputFade
                  id="username"
                  value={values.username}
                  touched={touched.username}
                  blur={handleBlur}
                  handleChange={handleChange}
                  error={errors.username}
                  isDisabled={true}
                  label="Username"
                  type="text"
                  placeholder=""
                />
                <InputFade
                  id="email"
                  value={values.email}
                  touched={touched.email}
                  blur={handleBlur}
                  handleChange={handleChange}
                  error={errors.email}
                  isDisabled={true}
                  label="Email"
                  type="email"
                  placeholder=""
                />
                <InputFade
                  id="phoneNumber"
                  value={values.phoneNumber}
                  touched={touched.phoneNumber}
                  blur={handleBlur}
                  handleChange={handleChange}
                  error={errors.phoneNumber}
                  isDisabled={false}
                  label="Phone Number"
                  type="number"
                  placeholder=""
                />
                <button disabled={!formButtonDisabled || loading === true || updateLoading === true} className="buttons">
                  {
                    loading === true || updateLoading === true ? (<LoadButton/>) : (<p className="text-[13px] 2xl:text-[15px]">Update Profile</p>)
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
