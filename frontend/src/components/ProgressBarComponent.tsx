export function ProgressBarComponent({
  progress
}: {
  progress: number
}) {

  return (
    <div style={{
      border: "1px solid red",
      width: "200px",
      height: "20px",
      borderRadius: "1em",
      overflow: "hidden"
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        transition: "0.1s",
        background: "black",
        color: "white"
      }}>
        {progress}%
      </div>
    </div>
  )
}