import {create} from 'zustand'

interface SocialDetailsStore{
    isOpen : Boolean,
    onOpen : () => void,
    onClose : () => void
}

const useSocialDetails = create<SocialDetailsStore>((set) => ({
    isOpen : false,
    onOpen : () => set({isOpen : true}),
    onClose : () => set({isOpen : false})
}))
 
export default useSocialDetails;