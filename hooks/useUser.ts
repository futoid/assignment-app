import { create } from 'zustand'

type State = {
  isOpen : boolean,
  name: string,
  email: string,
  phone : string,
  instagram : string,
  youtube : string
}

type Action = {
  onOpen : () => void
  onClose : () => void
  updateName: (name: State['name']) => void
  updateEmail: (email: State['email']) => void
  updatePhone : (phone : State['phone']) => void
  updateInstagram : (instagram : State['instagram']) => void
  updateYoutube : (youtube : State['youtube']) => void
}

const useUser = create<State & Action>((set) => ({
    isOpen : false,
    name: '',
    email: '',
    phone : '',
    instagram : '',
    youtube : '',
    onOpen : () => set (() => ({isOpen : true})),
    onClose : () => set(() => ({isOpen : false})),
    updateName : (name) => set(() => ({name : name})),
    updateEmail : (email) => set(() => ({email : email})),
    updatePhone : (phone) => set(() => ({phone : phone})),
    updateInstagram : (instagram) => set(() => ({instagram : instagram})),
    updateYoutube : (youtube) => set(() => ({youtube : youtube}))

    
}))

export default useUser;