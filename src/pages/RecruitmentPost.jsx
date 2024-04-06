import { useState } from "react";
import {
  Textarea,
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
  Switch,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";

import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const RecruitmentPost = () => {
  const [postText, setPostText] = useState("");
  const [file, setFile] = useState(null);
  const [scheduledDate, setScheduledDate] = useState("");
  const handleScheduledChange = (e) => {
        setScheduledDate(e.target.value);
      };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Text:", postText);
    console.log("File:", file);
    console.log("Scheduled Date:", scheduledDate);

    // Reset form
    setPostText("");
    setFile(null);
    setScheduledDate("");
  };

  return (
    <div  className="">
    <Box>
      <div className="grid gap-2">
        <h1 className="text-black font-bold">Send a post</h1>
        <p className="text-justify">
          Share your post Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Aperiam, blanditiis? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Deleniti, earum.{" "}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid w-full gap-5 mt-6 ">
        <div className="grid gap-4">
          <FormLabel className="text-black font-bold" htmlFor="message">
            Paste Text
          </FormLabel>
          <Textarea
            className=" border-[2px] border-gray-300 rounded-md p-[4px]"
            placeholder="Type your message here."
            id="message"
            value={postText}
            width="100%"
            onChange={(e) => setPostText(e.target.value)}
            />

          <FormLabel className="text-black font-bold" htmlFor="picture">
            Add Image or Video
          </FormLabel>
          <Input
            id="picture"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            />
        </div>
        {/* <div className="grid gap-4"> */}
          <Button className="w-[200px] mr-auto bg-[#6986de] font-mono hover:bg-[#2d3f71] hover:text-white px-1 py-2 rounded-xl" type="submit">
            Post Now{" "}
          </Button>
        {/* </div> */}
      </form>
    </Box>
   </div>
  );
};

export default RecruitmentPost;

// import { Navigate } from "react-router-dom";
// import { useUser } from "@clerk/clerk-react";
// import React, { useState } from "react";

// const RecruitmentPost = () => {
//   // const user = useUser();

//   // if (!user) {
//    //   // If user is not authenticated, redirect to signin page   //   return <Navigate to="/signup" />;
//    // }

//   const [postText, setPostText] = useState("");
//   const [file, setFile] = useState(null);
//   const [scheduledDate, setScheduledDate] = useState("");

//   const handlePostTextChange = (e) => {
//     setPostText(e.target.value);
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleScheduledChange = (e) => {
//     setScheduledDate(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Post Text:", postText);
//     console.log("File:", file);
//     console.log("Scheduled Date:", scheduledDate);

//     // Reset form
//     setPostText("");
//     setFile(null);
//     setScheduledDate("");
//   };

//   return (
//     <div className="relative sm:z-50 flex  items-center w-full">
//       <form onSubmit={handleSubmit} className="w-full max-w-lg">
//         <div className="mb-4">
//           <label htmlFor="postText" className="block">Post:</label>
//           <textarea
//             id="postText"
//             value={postText}
//             onChange={handlePostTextChange}
//             rows={4}
//             cols={50}
//             className="w-full border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="file" className="block">Upload Image/Video:</label>
//           <input type="file" id="file" onChange={handleFileChange} className="border rounded-md" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="scheduledDate" className="block">Schedule Post:</label>
//           <input
//             type="date"
//             id="scheduledDate"
//             value={scheduledDate}
//             onChange={handleScheduledChange}
//             className="border rounded-md"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RecruitmentPost;

// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Switch } from "@/components/ui/switch";
// import * as React from "react";
// import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// const RecruitmentPost = () => {
//   const [postText, setPostText] = React.useState("");
//   const [file, setFile] = React.useState(null);

//   const [date, setDate] = React.useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Post Text:", postText);
//     console.log("File:", file);
//     console.log("Scheduled Date:", date);

//     // Reset form
//     setPostText("");
//     setFile(null);
//     setDate(null);
//   };

//   return (
//     <div className="relative sm:z-50 sm:m-10 sm:mt-0   ">
//       <div className="grid gap-2">
//         <h1 className="text-black font-bold ">Send a post</h1>
//         <p className="text-justify">
//           Share your post Lorem ipsum, dolor sit amet consectetur adipisicing
//           elit. Aperiam, blanditiis? Lorem ipsum dolor sit amet, consectetur
//           adipisicing elit. Deleniti, earum.{" "}
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="grid w-full gap-3 mt-6 ">
//         <div className="grid gap-4">
//           <Label className="text-black font-bold" htmlFor="message">Paste Text</Label>
//           <Textarea
//           className="border-black"
//             placeholder="Type your message here."
//             id="message"
//             value={postText}
//             onChange={(e) => setPostText(e.target.value)}
//           />

//           <Label className="text-black font-bold" htmlFor="picture">Add Image or Video</Label>
//           <Input
//             id="picture"
//             type="file"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         <div className="grid gap-4">
//           <Label className="text-black font-bold" htmlFor="picture">Add Post on</Label>
//           <div className="flex items-center space-x-2 ">
//             <Switch id="instagram" />
//             <Label htmlFor="instagram">Instagram</Label>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant={"outline"}
//                   className={cn(
//                     "w-[280px] justify-start text-left font-normal",
//                     !date && "text-muted-foreground"
//                   )}
//                 >
//                   <CalendarIcon className="mr-2 h-4 w-4" />
//                   {date ? format(date, "PPP") : <span>Schedule a date</span>}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0">
//                 <Calendar
//                   mode="single"
//                   selected={date}
//                   onSelect={setDate}
//                   initialFocus
//                 />
//               </PopoverContent>
//             </Popover>
//           </div>
//           <div className="flex items-center space-x-2 ">
//             <Switch id="facebook" />
//             <Label htmlFor="facebook">Facebook</Label>
//           </div>
//           <Button className="w-full" onSubmit="submit">
//             Post Now{" "}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RecruitmentPost;
