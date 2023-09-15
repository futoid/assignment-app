import {create} from 'zustand'

interface BasicDetailsStore{
    isOpen : Boolean,
    onOpen : () => void,
    onClose : () => void
}

const useBasicDetails = create<BasicDetailsStore>((set) => ({
    isOpen : true,
    onOpen : () => set({isOpen : true}),
    onClose : () => set({isOpen : false})
}))
 
export default useBasicDetails;