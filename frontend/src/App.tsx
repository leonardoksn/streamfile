import axios from 'axios';

import { Toaster, toast } from 'react-hot-toast';
import './App.css';
import { ProgressBarComponent } from './components/ProgressBarComponent';

function App() {

  const fetch = () => {
    const toastId = toast(() => (
      <span>
        Start download...
      </span>
    ));

    axios.get("http://localhost:3000/arquive", {
      responseType: "stream",
      onDownloadProgress: (progressEvent) => {
        if (progressEvent.progress) {

          const currentProgress = progressEvent.progress * 100
          toast(() => (
            <span>
              Progress: {Math.round(currentProgress)}%
              <ProgressBarComponent progress={Math.round(currentProgress)} />
            </span>
          ), {
            id: toastId
          });

        }
      },
    }).then(() => {
      toast(() => (
        <span>
          Download completed
        </span>
      ), {
        id: toastId
      });
    })
      .catch(() => {
        toast.error("Error", {
          id: toastId,
        })
      })
  }

  return (

    <div>

      <button onClick={() => fetch()}>
        Download
      </button>

      <Toaster />
    </div>

  )
}

export default App
