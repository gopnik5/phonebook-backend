const Notification = ({ message}) => {
    if (message.text === null) {
      return null
    }

  
    return (
      <div className={message.isError ? 'error' : 'success'}>
        {message.text}
      </div>
    )
  }

  export default Notification