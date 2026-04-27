import React, { useState, useRef, useEffect, useCallback } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, useInView } from 'framer-motion'
import HeaderComponent from "../components/HeaderComponent";
import { useSearchParams } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import Images from "../components/Images"
import Lightbox from "yet-another-react-lightbox"
import { Zoom } from "yet-another-react-lightbox/plugins"
import { menuChoiceSlike } from "../menuChoiceSlike"
import { menuChoiceSlikaGlavna } from "../menuChoiceSlikaGlavna"
import "yet-another-react-lightbox/styles.css"
import transition from '../transition'
import useIsMobile from '../hooks/useIsMobile'

const arrayMenu = Array.from({ length: 20 }, (_, i) => i);

const ConfirmReservation = () => {

  const isMobile = useIsMobile();

  //refs
  const refFullName = useRef(null);
  const isInViewFN = useInView(refFullName, {once: true});
  const refDate = useRef(null);
  const isInViewDate = useInView(refDate, {once: true});
  const refTime = useRef(null);
  const isInViewTime = useInView(refTime, {once: true});
  const refNumOfPeople = useRef(null);
  const isInViewNumOfPeople = useInView(refNumOfPeople, {once: true});
  const refEmail = useRef(null);
  const isInViewEmail = useInView(refEmail, {once: true});
  const refPhone = useRef(null);
  const isInViewPhone = useInView(refPhone, {once: true})
  const refMessage = useRef(null);
  const isInViewMessage = useInView(refMessage, {once: true});

  const toastId = useRef(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  //states
  const [fullName, setFullName] = useState("");
  const [dateValue, setDateValue] = useState({
    startDate: null,
    endDate: null
  });
  const [time, setTime] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState("");
  const [confirmed, setConfirmed] = useState("");
  const [isProcessed, setIsProcessed] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [fishMenu, setFishMenu] = useState("0");
  const [meatMenu, setMeatMenu] = useState("0");
  const [vegeMenu, setVegeMenu] = useState("0");
  const [indexMenuChoice, setIndexMenuChoice] = useState(-1);
  const [menuDiv, setMenuDiv] = useState(false);

  function handleConfirmedChange(confirmedValue) {
    setConfirmed(confirmedValue);
  }

  const handleInfoText = useCallback((someValue) => {
    if (someValue === "D" || someValue === "Confirmed") {
      setInfoText("Thank you for confirming your reservation. See you tonight!");
      setIsProcessed(true);
    } else if (someValue === "N" || someValue === "Cancelled") {
      setInfoText("Reservation cancelled. See you some other time!");
      setIsProcessed(true);
    } else {
      setInfoText("Reservation is still being processed.");
    }
  }, []);

  const handleMenuOption = useCallback((value) => {
    if (value !== null && value !== undefined && value !== "0" && value !== "") {
      const arrayMenija = value.split(",");
      const fishIndex = arrayMenija[0].indexOf(":");
      const numFishMenu = arrayMenija[0].substring(fishIndex + 1);
      setFishMenu(numFishMenu);
      const meatIndex = arrayMenija[1].indexOf(":");
      const numMeatMenu = arrayMenija[1].substring(meatIndex + 1);
      setMeatMenu(numMeatMenu);
      const vegeIndex = arrayMenija[2].indexOf(":");
      const numVegeMenu = arrayMenija[2].substring(vegeIndex + 1);
      setVegeMenu(numVegeMenu);
    }
  }, []);

  const showMenuDiv = useCallback((numberOfPeople) => {
    setMenuDiv(numberOfPeople > 8);
  }, []);

  const handleReservationStatus = useCallback((reservationStatus) => {
    if (reservationStatus === "Accepted") {
      setIsProcessed(false);
    } else if (reservationStatus === "Confirmed" || reservationStatus === "Cancelled") {
      handleInfoText(reservationStatus);
      setIsProcessed(true);
    } else {
      setIsProcessed(true);
      handleInfoText(reservationStatus);
    }
  }, [handleInfoText]);

  useEffect(() => {
    const getReservationData = async () => {
      try {
        const response = await fetch(`https://restorandubrovnikapi.online/reservations/${id}`);
        const data = await response.json();
        if (data !== null) {
          handleReservationStatus(data.status);
          showMenuDiv(data.groupSize);
          handleMenuOption(data.menuOption);
          setFullName(data.firstName + " " + data.lastName);
          const fullDate = data.date.split("T");
          const fetchedTime = fullDate[1].substring(0, 5);
          setDateValue({ startDate: fullDate[0], endDate: fullDate[0] });
          setTime(fetchedTime);
          setNumOfPeople(data.groupSize);
          setEmail(data.email);
          setPhone(data.phoneNo);
          setMessage(data.message);
        } else {
          setErrorText("Reservation ID was not found. Unable to fetch data.");
        }
      } catch (err) {
        setErrorText("There was an error while fetching data. Please refresh your page and try again.");
        console.log(err);
      }
    };
    getReservationData();
  }, [id, handleReservationStatus, showMenuDiv, handleMenuOption]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    toastId.current = toast.loading("Please wait...", {
      position: "top-center",
      hideProgressBar: false,
      progress: undefined,
      theme: "colored",
    });
    try {
      const response = await fetch(`https://restorandubrovnikapi.online/confirmreservation?id=${id}&confirmed=${confirmed}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        toast.update(toastId.current, {
          render: "Something went wrong, please try again.",
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip
        });
      } else {
        handleInfoText(confirmed);
        toast.update(toastId.current, {
          render: confirmed === "D" ? "Reservation confirmed!" : "Reservation cancelled.",
          type: confirmed === "D" ? "success" : "info",
          isLoading: false,
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip
        });
      }
    } catch (err) {
      toast.update(toastId.current, {
        render: "Something went wrong, please try again.",
        type: "error",
        isLoading: false,
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip
      });
    }
  };

  return (
    <>
    <HeaderComponent translate="translateX(-100%)" heading="Confirm your reservation"/>
      { errorText !== "" &&
      ( <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1, type: "tween" }
          }}
        className="flex justify-center py-20 mx-8">
              <h1 className="font-garamond text-2xl text-dark">{errorText}</h1>
        </motion.div>
      )}
      { errorText === "" && (<section className="flex flex-col justify-center mt-5">
        <div className='flex flex-col lg:flex-row mx-auto my-7 gap-y-2 lg:gap-x-7'>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{
                ease: "linear",
                duration: 1,
                x: { duration: 1, type: "tween" }
                }}
              >
                <h3 className='text-2xl font-garamond text-dark'>Tel.:<a href="tel:38520324810" >+385 (0) 20 324 810</a></h3>
              </motion.div>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{
                ease: "linear",
                duration: 1.3,
                x: { duration: 1.3, type: "tween" }
                }}
                >
                <h3 className='text-2xl font-garamond text-dark'>Mob.: <a href="tel:385992585871" >+385 (0) 99 258 5871</a></h3>
              </motion.div>
            </div>
        <form className='mx-auto mb-10 flex flex-col gap-y-2 items-center' onSubmit={handleSubmit}>
              <motion.div
              className="flex flex-col"
              ref={refFullName}
              style={{
                  transform: isInViewFN ? "none" : "translateX(100%)",
                  opacity: isInViewFN ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
              >
                <label className='ml-2 pb-1 text-gray-700 font-garamond text-xl'>
                          * Full name
                      </label>
                <input id="fullName" name='FullName' className='input font-garamond text-lg' type='text' placeholder='* Full name' disabled={true} value={fullName}></input>
              </motion.div>

              <motion.div
              className="flex flex-col"
              ref={refDate}
              style={{
                  transform: isInViewDate ? "none" : "translateX(100%)",
                  opacity: isInViewDate ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
              }}
              >
                <label className='ml-2 pb-1 text-gray-700 font-garamond text-xl'>
                        * Reservation Date
                </label>
              <Datepicker
                inputId="inputDate"
                inputName="Date"
                displayFormat="YYYY-MM-DD"
                placeholder= "* Choose your reservation date"
                inputClassName={"input font-garamond text-lg"}
                asSingle={true}
                useRange={false}
                disabled={true}
                value={dateValue}
                />
              </motion.div>
              <motion.div
              className="flex flex-col"
                ref={refTime}
                style={{
                    transform: isInViewTime ? "none" : "translateX(100%)",
                    opacity: isInViewTime ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                }}
                >
                <label className='ml-2 pb-1 text-gray-700 font-garamond text-xl'>
                      * Reservation Time
                </label>
                <select id="inputTime" name="Time" className="input font-garamond text-lg bg-gray-50" disabled={true} value={time}>
                  <option value="DEFAULT" disabled hidden>* Select desired reservation time</option>
                  <option value="18:00">18:00h</option>
                  <option value="18:30">18:30h</option>
                  <option value="19:00">19:00h</option>
                  <option value="19:30">19:30h</option>
                  <option value="20:00">20:00h</option>
                  <option value="20:30">20:30h</option>
                  <option value="21:00">21:00h</option>
                  <option value="21:30">21:30h</option>
                </select>
              </motion.div>

              <motion.div
              className="flex flex-col"
              ref={refNumOfPeople}
              style={{
                  transform: isInViewNumOfPeople ? "none" : "translateX(100%)",
                  opacity: isInViewNumOfPeople ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
              }}
              >
              <label className='ml-2 pb-1 text-gray-700 font-garamond text-xl'>
                      * Number of people
              </label>
                <select id="inputNumberOfPeople" name="NumberOfPeople" className="input font-garamond text-lg bg-gray-50" disabled={true} value={numOfPeople}>
                  <option value="DEFAULT" disabled hidden>* Select number of people</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10+</option>
                </select>
              </motion.div>

              { menuDiv &&
                (
                    <>
                        <div className='flex flex-col gap-x-6 mb-4 w-full lg:w-[450px] items-center'>
                            <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            transition={{
                              ease: "linear",
                              duration: 1,
                              x: { duration: 1.2, type: "tween" }
                            }}
                            className='font-extrabold text-lg w-[280px] h-[380px] flex flex-col'>
                            <Images data={menuChoiceSlikaGlavna} onClick={currentIndex => setIndexMenuChoice(currentIndex)} />
                                <Lightbox
                                    index={indexMenuChoice}
                                    open={indexMenuChoice >= 0}
                                    close={() => setIndexMenuChoice(-1)}
                                    slides={menuChoiceSlike}
                                    plugins={[Zoom]}
                                />
                            </motion.div>
                                <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                transition={{
                                  ease: "linear",
                                  duration: 0.5,
                                  x: { duration: 0.8, type: "tween" }
                                }}
                                className='text-center my-4'>
                                    <h2 className="font-garamond text-xl">Selected menus</h2>
                                </motion.div>
                                <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                transition={{
                                  ease: "linear",
                                  duration: 0.7,
                                  x: { duration: 1, type: "tween" }
                                }}
                                className='flex flex-row gap-x-8 pb-2'>
                                    <label className='font-garamond text-xl text-black' htmlFor="fishMenu">Fish menu</label>
                                    <label className='font-garamond text-xl text-black' htmlFor="meatMenu">Meat menu</label>
                                    <label className='font-garamond text-xl text-black' htmlFor="vegeMenu">Vege menu</label>
                                </motion.div>
                                <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                transition={{
                                  ease: "linear",
                                  duration: 1,
                                  x: { duration: 1.4, type: "tween" }
                                }}
                                className='flex flex-row gap-x-14'>
                                    <select name="fishMenu" id="fishMenu" value={fishMenu} readOnly={true} disabled={true}>
                                        {
                                            arrayMenu.map((option, index) => <option key={index}>{option}</option>)
                                        }
                                    </select>
                                    <select name="meatMenu" id="meatMenu" value={meatMenu} readOnly={true} disabled={true}>
                                        {
                                            arrayMenu.map((option, index) => <option key={index}>{option}</option>)
                                        }
                                    </select>
                                    <select name="vegeMenu" id="vegeMenu" value={vegeMenu} readOnly={true} disabled={true}>
                                        {
                                            arrayMenu.map((option, index) => <option key={index}>{option}</option>)
                                        }
                                    </select>
                                </motion.div>
                        </div>
                    </>
                )
              }

              <motion.div
              className="flex flex-col"
              ref={refEmail}
              style={{
                  transform: isInViewEmail ? "none" : "translateX(100%)",
                  opacity: isInViewEmail ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
              }}
              >
                <label className='ml-2 pb-1 text-gray-700 font-garamond text-xl'>
                      * E-mail
                </label>
                <input id="inputEmail" name='Email' className='input font-garamond text-lg' type='email' placeholder='* E-mail' disabled={true} value={email}></input>
              </motion.div>

              <motion.div
              className="flex flex-col"
              ref={refPhone}
              style={{
                  transform: isInViewPhone ? "none" : "translateX(100%)",
                  opacity: isInViewPhone ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
              }}
              >
                <label className='ml-2 pb-1 text-gray-700 font-garamond text-xl'>
                  * Phone number
                </label>
                <PhoneInput
                    inputProps={{
                        name: 'phoneNo'
                    }}
                    inputStyle={isMobile ? {width: 380, borderRadius: 12} : {width: 550,  borderRadius: 12} }
                    inputClass='text-black input font-garamond text-lg'
                    enableSearch={true}
                    specialLabel=''
                    country={'us'}
                    value={phone}
                    disabled={true}
                />
              </motion.div>

              <motion.div
              className="flex flex-col"
                ref={refMessage}
                style={{
                    transform: isInViewMessage ? "none" : "translateX(100%)",
                    opacity: isInViewMessage ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                }}
              >
                <label className='ml-2 pb-1 text-gray-700 font-garamond text-xl'>
                     Message
                </label>
                <textarea id="inputMessage" name='Message' className='textarea font-garamond text-lg' rows={5} cols={15} placeholder='* Message' disabled={true} value={message}></textarea>
              </motion.div>
              { !isProcessed && (
                <>
                  <div className="flex flex-col gap-y-4 items-center">
                    <motion.div
                    className="mt-3"
                    initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      transition={{
                      ease: "linear",
                      duration: 1,
                      x: { duration: 1, type: "tween" }
                      }}
                    >
                      <p className="text-dark font-bold text-2xl font-garamond">Confirm your reservation</p>
                    </motion.div>
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      transition={{
                      ease: "linear",
                      duration: 1.2,
                      x: { duration: 1.2, type: "tween" }
                      }}
                      >
                      <button
                          className="btn bg-green-600 hover:bg-green-400"
                          type="submit"
                          onClick={() => handleConfirmedChange("D")}
                      >
                          Confirm
                      </button>
                      </motion.div>
                      <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      transition={{
                      ease: "linear",
                      duration: 1.2,
                      x: { duration: 1.2, type: "tween" }
                      }}
                      >
                      <button
                        className="btn"
                        type="submit"
                        onClick={() => handleConfirmedChange("N")}
                      >
                        Cancel
                      </button>
                    </motion.div>
                  </div>
                </>
              )}

               { isProcessed && (
                  <>
                    <div className="mt-5 flex text-center">
                      <h1 className="mx-5 text-dark font-bold text-xl text-pretty font-garamond">{infoText}</h1>
                    </div>
                  </>
               )}

              <ToastContainer
                style={!isMobile ? {width:"530px"} : null}
                bodyClassName={() => "font-garamond text-xl"}
                transition={Flip}
              />
        </form>
      </section> ) }
    </>
  );
}

export default transition(ConfirmReservation)
