import React, { useState } from "react";
import socialProfiles from "../constants/index";
import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const PopupModal = ({ isOpen, onClose, onSave, profileId }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [link, setLink] = useState("");

  const handleSave = () => {
    onSave(link, profileId);
    onClose();
    setLink("");
  };

  const profile = socialProfiles.find((profile) => profile.id === profileId);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <div className="fixed inset-0 flex items-center justify-center ">
        <ModalContent className="w-[90%] max-w-[600px] sm:mx-auto mx-[10%]  sm:my-[15%] my-[30%] gap-8 p-6 border-2 bg-white rounded-lg">
          <ModalHeader className="flex justify-between font-bold">
            Enter URL
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody pb={6}>
            <FormControl className="gap-5 flex flex-col">
              <FormLabel>
                Kindly include your essential social links to enhance your
                online presence and connect with your audience more effectively.
              </FormLabel>
              <Input
                ref={initialRef}
                className="h-[40px] w-full border-2 "
                placeholder="add your link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter className="gap-4 text-white font-medium">
            <Button
              className=" px-4 bg-[#a1a1e4]  py-2 rounded-md hover:bg-[blue]"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="bg-[#a1a1e4]  px-4 py-2 rounded-md hover:bg-[blue] "
              onClick={handleSave}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </div>
    </Modal>
  );
};

const OnBoarding = () => {
  const [additionalProfiles, setAdditionalProfiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProfileId, setCurrentProfileId] = useState(null);

  const handleAddLink = (id) => {
    setCurrentProfileId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
// it will used to update existing card
  const handleSaveLink = (link, id) => {
    const updatedProfiles = additionalProfiles.map((profile) =>
      profile.id === id ? { ...profile, link } : profile
    );
    setAdditionalProfiles(updatedProfiles);
    setIsModalOpen(false); // Close the modal after saving
    console.log(updatedProfiles);
    console.log(link, id);
  };
// it will add new card
  const handleAddOtherLink = () => {
    const newProfile = {
      id: Date.now().toString(),
      name: "New Profile",
      icon: "",
      img: "",
      link: "",
    };
    setAdditionalProfiles([...additionalProfiles, newProfile]);
    setCurrentProfileId(newProfile.id); // Set current profile id to the newly added profile
    setIsModalOpen(true); // Open modal for the newly added profile
  };

  return (
    <div className="flex flex-col gap-6 ">
      <div className="p-1">
        <h1 className="font-bold text-[1.5rem] leading-7">
          Let's connect your social profiles
        </h1>
        <p className="text-[gray] text-[1rem] leading-7">
          Add as many social media profiles as you want
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {/* it will add more profiles */}
        {socialProfiles.concat(additionalProfiles).map((profile) => (
          <div
            key={profile.id}
            className="h-[100px] grid grid-cols-3 m-[0.5rem] mb-0 bg-[white] rounded shadow-md border-[1px]"
          >
            <div className="col-span-2 m-[0.75rem] flex flex-col justify-start items-start gap-6">
              <h1 className="font-semibold md:text-lg  flex gap-1">
                {/* <img src={profile.icon} width={29} alt="" /> */}
                {profile.name}
              </h1>

              {profile.link && (
                <button
                  onClick={() => handleAddLink(profile.id)}
                  className="text-[blue] items-center  flex gap-2"
                >
                  {/* this commentout can show links on card used slice also to cut it */}
                  {/* {profile.link ? (
    <div className="flex gap-2 items-center">
      <p>{profile.link.slice(0, 7)}</p>
      {profile.link.length > 7 && <p>...</p>}
      <button
        onClick={() => handleAddLink(profile.id)}
        className="text-[blue] items-center  flex gap-2"
      >
        <AddIcon /> <h2>Edit link</h2>
      </button>
    </div>
  ) : (
    <button
      onClick={() => handleAddLink(profile.id)}
      className="text-[blue] items-center  flex gap-2"
    > */}
                  <AddIcon /> <h2>Add link</h2>
                </button>
              )}
            </div>
            <div className="flex justify-center items-center m-4">
              <img
                src={profile.img}
                alt={`${profile.name} Icon`}
                height={40}
                width={40}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="text-[blue] bg-[lightblue] items-center justify-center flex rounded-xl p-3 m-[0.5rem] sm:w-[15rem] hover:bg-blue-500 hover:text-white  gap-2"
        onClick={handleAddOtherLink}
      >
        <AddIcon /> <h2>Add other link</h2>
      </button>
      <PopupModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveLink}
        profileId={currentProfileId}
      />
    </div>
  );
};


//

export default OnBoarding;
