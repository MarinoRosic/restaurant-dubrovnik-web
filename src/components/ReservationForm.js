import React, {useState, useRef, useEffect } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import Datepicker from "react-tailwindcss-datepicker"; 
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'
import { PhoneNumberUtil } from 'google-libphonenumber';
import Images from "../components/Images"
import Lightbox from "yet-another-react-lightbox"
import { Zoom } from "yet-another-react-lightbox/plugins"
import { menuChoiceSlike } from "../menuChoiceSlike"
import { menuChoiceSlikaGlavna } from "../menuChoiceSlikaGlavna"
import "yet-another-react-lightbox/styles.css"


function ReservationForm() {

    const isMobile = useIsMobile();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/blockeddates`)
            .then(response => response.json())
            .then(response => {
                if (response !== null && response !== undefined) {
                    setBlockedDates(response.map(datum => ({
                        startDate: datum.date,
                        endDate: datum.dateTo
                    })));
                }
            });
    }, [])

    //#region REFS

    const toastId = useRef(null);

    //#endregion

    //#region Variable i stateovi

    const phoneUtil = PhoneNumberUtil.getInstance();

    const [dateValue, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [isValid, setIsValid] = useState(false);

    const [validDate, setDateValid] = useState(true);

    const [phone, setPhone] = useState('');

    const [menuDiv, setMenuDiv] = useState(false);

    const [message, setMessage] = useState("");

    const [blockedDates, setBlockedDates] = useState([]);

    const onMessageChange = event => {
        setMessage(event.target.value);
     };

    function showMenuDiv(numberOfPeople){
        if (numberOfPeople > 8){
            setMenuDiv(true);
        }
        else{
            setMenuDiv(false);
        }
    }

    function validateDate(dateValue){
        if (dateValue.startDate == null && dateValue.endDate == null)
        {
            setDateValid(false);
            setIsValid(false);
        }
        else
        {
            setDateValid(true);
            setIsValid(true);
        }   
    };

    const handleValueChange = (newValue) => {
        setValue(newValue);
        validateDate(newValue);
    }
    
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);

    const [formData, setFormData] = useState({
        fullName: '',
        time: '',
        numOfPeople: '',
        email: '',
        phoneNo: '',
    });
 
    const [errors, setErrors] = useState({});
    const [arrayMenu, setArrayMenu] = useState([]);

    //#endregion

    function createArray(N) {
        let newArr = [];
        for (let i = 0; i <= N; i++) {
            newArr.push(i);
        }
        return newArr;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (name === "numOfPeople"){
            setUkupanBrojMenija(value);
            let arr = createArray(value);
            setArrayMenu(arr);
            showMenuDiv(value);
        }
    };

    const formValidation = () => {
        validateDate(dateValue);
        const validacija = validateForm(formData);
        setErrors(validacija);

        if (Object.keys(validacija).length === 0) {
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }      
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setButtonDisabled(true);

        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            let fullNameArray = formData.fullName.split(" ");
            let time = formData.time;
            let fullDateTime = dateValue.startDate + 'T' + time + ':00Z';
            let menuOption;
            if (fishMenu === "0" && meatMenu === "0" && vegeMenu === "0"){
                menuOption = "";
            } else{
                menuOption = `Fish:${fishMenu},Meat:${meatMenu},Vege:${vegeMenu}`;
            }
    
            const data = {
                FirstName: fullNameArray[0] !== undefined ? fullNameArray[0] : "",
                LastName: fullNameArray[1] !== undefined ? fullNameArray[1] : "",
                Email: formData.email,
                Date: fullDateTime,
                MenuOption: menuOption,
                GroupSize: formData.numOfPeople,
                Message: message,
                PhoneNo: '+' + phone,
                ReservationType: 'Website',
                Status: 'Pending',
                Table: 0,
                DeletedAt: null,
                Notified: 'N'
            };
    
            toastId.current = toast.loading("Sending reservation request..." , {
                containerId: 'secondToast',
                position: "top-center",
                hideProgressBar: false,
                progress: undefined,
                theme: "colored",
            });
    
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/newreservation`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                });
    
                if (!response.ok) {
                    // If response is not OK (status code not in range 200-299)
                    const errorText = await response.text();  // You can extract the response body for more info
                    toast.update(toastId.current, {
                        containerId: 'secondToast',
                        render: `Reservation request failed (error: ${errorText}). Please try again.`,
                        type: "error",
                        isLoading: false,
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                        onClose: function() { window.location.reload(); }
                    });
                } else {
                    const followUp = response.emailError ? "We had trouble sending confirmation e-mail. Your reservation has been created successfully. " : "Reservation successful! Please check your e-mail.\nIf you do not see the e-mail in a few minutes, please check your ”spam” folder.";
                    // If the request is successful
                    toast.update(toastId.current, {
                        containerId: 'secondToast',
                        render: followUp,
                        type: "success",
                        isLoading: false, 
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Flip,
                        onClose: function() { window.location.reload(); }
                    });
                }
            } catch (error) {
                // Handle network or other errors
                toast.update(toastId.current, {
                    containerId: 'secondToast',
                    render: `Reservation request failed. (error: ${error.message}) Please try again.`,
                    type: "error",
                    isLoading: false,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    onClose: function() { window.location.reload(); }
                });
            }
        } else {
            // Form validation errors
            notifyError();
        }
    }
    
    const validateForm = (data) => {
        const errors = {};
        if (!data.fullName.trim()) {
            errors.fullName = '* Full name is required';
        }
        
        if (!validDate){
            errors.date = '* Reservation date is required';
        }

        if (!data.time.trim()) {
            errors.time = '* Reservation time is required';
        }

        if (!data.numOfPeople.trim()) {
            errors.numOfPeople = '* Number of people is required';
        }
        
        if (menuDiv){
            if (fishMenu === "0" && meatMenu === "0" && vegeMenu === "0"){
                errors.MenuOption = `* Please choose menu's for ${ukupanBrojMenija} people.`
            }
            else if (parseInt(fishMenu) + parseInt(meatMenu) + parseInt(vegeMenu) !== parseInt(ukupanBrojMenija)){
                errors.MenuOption = `* Total number of menu's must be ${ukupanBrojMenija}. `
            }
        }else{
            // resettaj odabrane menije u slučaju da izaberu manji broj ljudi
            if (fishMenu !== "0"){
                setFishMenu("0");
            }
            if (meatMenu !== "0"){
                setMeatMenu("0");
            }
            if (vegeMenu !== "0"){
                setVegeMenu("0");
            }  
        }

        if (!data.email.trim()) {
            errors.email = '* E-mail is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = '* E-mail is invalid';
        }
        
        if (!phone.trim()) {
            errors.phoneNo = '* Phone number is required';
        }
        else {
            try {
                var validPhoneNumber = phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput('+' + phone));
                if (!validPhoneNumber){
                    errors.phoneNo = '* Phone number is invalid';
                }
            } catch (error) {
                console.log(error.message);
                errors.phoneNo = '* Phone number is invalid';
            }
        }

        return errors;
    };

    const notifyError = () => {
        if (!isValid){
            toast.error('Please fill out all required inputs!', {
                containerId: 'firstToast',
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    } 

    const [indexMenuChoice, setIndexMenuChoice] = useState(-1);

    const [ukupanBrojMenija, setUkupanBrojMenija] = useState(0);
    const [fishMenu, setFishMenu] = useState("0");
    const [meatMenu, setMeatMenu] = useState("0");
    const [vegeMenu, setVegeMenu] = useState("0");

    return (
            <form className='mx-auto mb-10 flex flex-col gap-y-2 items-center' onSubmit={handleSubmit}>
                <motion.div 
                className="flex flex-col"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}          
                transition={{
                  duration: 0.6,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 0.5   // stagger per field
                }}
                >
                    <label className={`ml-2 pb-1 text-gray-700 font-garamond text-xl ${errors.fullName ? "text-red-800" : ""}`}>
                        {errors.fullName ? errors.fullName : "* Full name"}
                    </label>
                    <input
                        className="input font-garamond text-lg placeholder:italic placeholder:text-opacity-60 text-dark"
                        type="text"
                        name="fullName"
                        placeholder='Full name'
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={() => {formValidation();}}
                    />
                </motion.div>
                <motion.div 
                className='flex flex-col z-30'
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                duration: 0.6,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.6,
                }}
                >
                <label className={`ml-2 pb-1 text-gray-700 font-garamond text-xl ${!validDate ? "text-red-800" : ""}`}>
                    {!validDate ? "* Reservation date is required" : "* Reservation date"}
                </label>
                <Datepicker
                    inputName="date"
                    displayFormat="YYYY-MM-DD"
                    inputClassName={"input placeholder:italic placeholder:text-opacity-60 font-garamond text-lg"}
                    asSingle={true}
                    useRange={false}  
                    popoverDirection='auto'
                    placeholder='Book a table up to 60 days in advance'
                    minDate={new Date()} 
                    maxDate={maxDate} 
                    value={dateValue} 
                    onChange={handleValueChange} 
                    onBlur={() => {formValidation();}}
                    disabledDates={blockedDates}
                />
                </motion.div>
                <motion.div
                className="flex flex-col"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}          
                transition={{
                  duration: 0.6,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 0.7,
                }}
                >
                <label className={`ml-2 pb-1 text-gray-700 font-garamond text-xl ${errors.time ? "text-red-800" : ""}`}>
                        {errors.time ? errors.time : "* Reservation time"}
                </label>
                <select name="time" 
                className="input font-garamond text-lg text-dark" 
                defaultValue={'DEFAULT'}
                onChange={handleChange}
                onBlur={() => {formValidation();}}>
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
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                duration: 0.6,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.8,
                }}
                className="flex flex-col">
                <label className={`ml-2 pb-1 text-gray-700 font-garamond text-xl ${errors.numOfPeople ? "text-red-800" : ""}`}>
                        {errors.numOfPeople ? errors.numOfPeople : "* Number of people"}
                </label>
                <select name="numOfPeople"
                className="input font-garamond text-lg text-dark" 
                defaultValue={'DEFAULT'}
                onChange={handleChange}
                onBlur={() => {formValidation();}}>
                    <option value="DEFAULT" disabled hidden>* Select number of people</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                </select>
                </motion.div>

                { menuDiv && 
                    (
                        <>
                            <div className='flex flex-col gap-x-6 mb-4 w-full lg:w-[450px] items-center'>
                                <div className='font-extrabold text-lg w-[280px] h-[380px] flex flex-col'>
                                <Images data={menuChoiceSlikaGlavna} onClick={currentIndex => setIndexMenuChoice(currentIndex)} />
                                    <Lightbox
                                        index={indexMenuChoice}
                                        open={indexMenuChoice >= 0}
                                        close={() => setIndexMenuChoice(-1)}
                                        slides={menuChoiceSlike}
                                        plugins={[Zoom]}
                                    />
                                </div>
                                <div className='text-center my-4'>
                                    <h2 className={`font-garamond text-xl ${errors.MenuOption ? "text-red-800" : ""}`}>{errors.MenuOption ? errors.MenuOption : `Please choose menu's for ${ukupanBrojMenija} people`}</h2>
                                </div>
                                <div className='flex flex-row gap-x-8 pb-2'>
                                    <label className='font-garamond text-xl text-black' htmlFor="fishMenu">Fish menu</label>
                                    <label className='font-garamond text-xl text-black' htmlFor="meatMenu">Meat menu</label>
                                    <label className='font-garamond text-xl text-black' htmlFor="vegeMenu">Vege menu</label>
                                </div>
                                <div className='flex flex-row gap-x-14'>
                                    <select name="fishMenu" id="fishMenu" value={fishMenu} onChange={(e) => {setFishMenu(e.target.value);}} onBlur={() => {formValidation();}}>
                                        {
                                            arrayMenu?.map((option, index) => <option key={index}>{option}</option>)
                                        }
                                    </select>
                                    <select name="meatMenu" id="meatMenu" value={meatMenu} onChange={(e) => {setMeatMenu(e.target.value);}} onBlur={() => {formValidation();}}>
                                        {
                                            arrayMenu?.map((option, index) => <option key={index}>{option}</option>)
                                        }
                                    </select>
                                    <select name="vegeMenu" id="vegeMenu" value={vegeMenu} onChange={(e) => {setVegeMenu(e.target.value);}} onBlur={() => {formValidation();}}>
                                        {
                                            arrayMenu?.map((option, index) => <option key={index}>{option}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                        </>
                    )
                }

                <motion.div 
                className='flex flex-col'
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}          
                transition={{
                  duration: 0.6,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 0.9,
                }}
                >
                    <label className={`ml-2 pb-1 text-gray-700 font-garamond text-xl ${errors.email ? "text-red-800" : ""}`}>
                            {errors.email ? errors.email : "* E-mail"}
                    </label>
                    <input
                        className="input placeholder:text-opacity-60 font-garamond text-lg placeholder:italic text-dark"
                        type="email"
                        name="email"
                        placeholder='E-mail'
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => {formValidation();}}
                    />
                </motion.div>
                <motion.div 
                className="flex flex-col"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}          
                transition={{
                  duration: 0.6,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 1.0,
                }}
                >
                    <label className={`ml-2 pb-1 text-gray-700 font-garamond text-xl ${errors.phoneNo ? "text-red-800" : ""}`}>
                        {errors.phoneNo ? errors.phoneNo : "* Phone number"}
                    </label>
                    <PhoneInput
                        inputProps={{
                            name: 'phoneNo'
                        }}
                        inputStyle={isMobile ? {width: 380, borderRadius: 12} : {width: 550,  borderRadius: 12} }
                        inputClass='text-black input placeholder:italic font-garamond text-lg'
                        enableSearch={true}
                        specialLabel=''
                        country={'us'}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        onBlur={() => {formValidation();}}
                    />
                </motion.div>

                <motion.div 
                className='flex flex-col'
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}          
                transition={{
                  duration: 0.6,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 1.1,
                }}
                >
                    <label className='ml-2 pb-1 text-gray-700 font-garamond text-xl'>
                        Message
                    </label>
                    <textarea 
                        name='message' 
                        className='textarea placeholder:text-opacity-60 font-garamond text-lg placeholder:italic text-dark' rows={5} cols={15} 
                        placeholder='Special requests...'
                        value={message}
                        onChange={onMessageChange}> 
                    </textarea>
                </motion.div>

                <motion.div
                className='flex flex-col mt-5'
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{
                ease: "linear",
                duration: 1,
                x: { duration: 1, type: "tween" }
                }} 
                >
                    <button className="btn"
                        type="button" onClick={() => { formValidation(); setShowModal(isValid); notifyError(); }}>
                        Make a reservation
                    </button>
                </motion.div>
                <ToastContainer
                    style={!isMobile ? {width:"530px"} : null}
                    containerId={'firstToast'}
                    bodyClassName={() => "font-garamond text-xl"}
                    transition={Bounce}
                />
                {showModal && isValid ? (
              <>
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{
                    ease: "linear",
                    duration: 1,
                    x: { duration: 1, type: "spring" }
                    }} 
                   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="w-auto my-5 mx-2 md:mx-auto max-w-2xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-400 rounded-t">
                        <h3 className="text-3xl font-bold text-dark font-baskerville text-start">
                            important reservation information
                        </h3>
                        <button
                          className="p-1 bg-transparent border-0 text-dark float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => {setShowModal(false); setButtonDisabled(false); }}
                        >
                          <span className="text-dark h-6 w-6 text-2xl block">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-5 flex-auto text-wrap">
                        <p className="mb-3 text-dark text-xl leading-relaxed font-garamond">
                            Thank you for choosing <b>Restaurant Dubrovnik</b>! Please note the following:
                        </p>
                        <ul className='list-inside leading-relaxed list-disc font-garamond text-dark text-xl'>
                            <li><b>Confirmation Required:</b> Check your e-mail on your arrival day for confirmation.</li>
                            <li><b>No Pets Allowed</b></li>
                            <li><b>Dress Code:</b> Smart casual attire.</li>
                            <li><b>Late Arrival:</b> Please inform us in case of any delays.</li>
                        </ul>
                        <p className='mt-3 text-dark text-xl leading-relaxed font-garamond'>
                            By clicking "Agree" you acknowledge and understand these rules. We look forward to welcoming you!
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-400 rounded-b">
                        <button
                          className="font-secondary text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {setShowModal(false); setButtonDisabled(false)}}
                        >
                          Cancel
                        </button>
                        <button
                          disabled={buttonDisabled}
                          className={`${buttonDisabled ? "bg-gray-400" : "bg-red-700"} font-secondary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                          type="submit"
                        >
                          Agree
                        </button>
                        <ToastContainer
                          style={!isMobile ? {width:"530px"} : null}
                          containerId={'secondToast'}
                          bodyClassName={() => "font-garamond text-xl"}
                          transition={Bounce}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="opacity-45 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
        </form>
    );
}

export default ReservationForm
