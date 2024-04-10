import React, { useEffect, useState } from "react"

const withStorageListener = (WrappedComponent) => {
  return (props) => {
    const [isChangeStorage, setIsChangeStorage] = useState(false)

    useEffect(() => {
      const handleStorageChange = (e) => {
        if (e.key === 'todos') {
          setIsChangeStorage(true)
        }
      }
      window.addEventListener("storage", handleStorageChange);
    }, [])

    const saveChangesStorage = () => {
      props.setLoading(true)
      setIsChangeStorage(false)
    }

    return (
      <WrappedComponent
        {...props}
        isChangeStorage={isChangeStorage}
        setIsChangeStorage={setIsChangeStorage}
        saveChangesStorage={() => saveChangesStorage()}
      />
    )
  }
}

const useStorageListener = ({ setLoading }) => {
  const [isChangeStorage, setIsChangeStorage] = useState(false)

    useEffect(() => {
      const handleStorageChange = (e) => {
        if (e.key === 'todos') {
          setIsChangeStorage(true)
        }
      }
      window.addEventListener("storage", handleStorageChange);
    }, [])

    const saveChangesStorage = () => {
      setLoading(true)
      setIsChangeStorage(false)
    }

    return {
      isChangeStorage ,
      saveChangesStorage : () => saveChangesStorage()
    } 
    

}
export { withStorageListener, useStorageListener }
