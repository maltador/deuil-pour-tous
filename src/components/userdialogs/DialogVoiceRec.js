import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {Recorder} from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

function DialogVoiceRec({open, onClose, setAudioFile}) {
    
  const [audioUrl, setAudioUrl]= useState(null);
  const [audioDetails, setAudioDetails]= useState({
    url: null,
    blob: null,
    chunks: null,
    duration:{
        h:0,
        m:0,
        s:0
    } 
  });
  const handleClose = () => {
    onClose();
  };
  const handleAudioStop = (data) =>{
    setAudioUrl(data);
  };

  const handleSetFile= (fileIn) =>{
    const audioFile = new File([fileIn], 'voice.wav', { type: 'audio/wav' });
    setAudioFile(audioFile);
    handleClose();
  }

  const handleReset= ()=>{
    const reset= {
        url: null,
        blob: null,
        chunks: null,
        duration:{
            h:0,
            m:0,
            s:0
        } 
      };
      setAudioDetails(reset);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enregistreur audio</DialogTitle>
        <DialogContent>
            <Recorder
              record={true}
              title= {"Nouvelle note vocale"}
              audioUrl={audioDetails.url}
              showUIAudio
              handleAudioStop={(data)=> handleAudioStop(data)}
              handleAudioUpload= {(data)=> handleSetFile(data)}
              handleReset= {()=> handleReset()}
            />
        </DialogContent>
    </Dialog>
  )
}

export default DialogVoiceRec