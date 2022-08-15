import React from "react";
import { render } from "react-dom";
import useRecorder from "../audiorecorder/useRecorder";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import './styles/DialogAudioRec.css';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function DialogAudioRec({ open, onClose, setAudioFile }) {
  const [audioURL, fileBlob, isRecording, startRecording, stopRecording] = useRecorder();

  const handleClose = () => {
    onClose();
  };

  const handleValider = () =>{
    const audioFile = new File([fileBlob], 'voice.wav', { type: 'audio/wav' });
    setAudioFile(audioFile);
    stopRecording();
    handleClose();
  }

//   const handleSetFile= (fileIn) =>{
//     const audioFile = new File([fileIn], 'voice.wav', { type: 'audio/wav' });
//     setAudioFile(audioFile);
//     handleClose();
//   }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Enregistreur audio</DialogTitle>
      <DialogContent>
        <div className="audio-recorder">
          <audio src={audioURL} controls />
          <div className="audio-buttons">
            <button className="btn-play" onClick={startRecording} disabled={isRecording}>
              <PlayArrowIcon className="icon-btn"/>
            </button>
            <button className="btn-stop" onClick={stopRecording} disabled={!isRecording}>
              <StopIcon className="icon-btn"/>
            </button>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">Annuler</Button>
        <Button onClick={handleValider} color="error">Valider</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogAudioRec;
