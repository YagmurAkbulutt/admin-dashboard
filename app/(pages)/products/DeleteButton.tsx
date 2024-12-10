"use client"

import { deleteProduct } from "@/utils/api"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const DeleteButton = ({id} : {id:number}) => {
    const router = useRouter()

    const handleDelete = () => {
        deleteProduct(id)
        .then(() => {
            router.refresh()
            toast.success("Ürün Silindi.")
        })

    }
  return (
    <button onClick={handleDelete} className="py-1 px-3 rounded-md bg-[#f3a5a5] hover:bg-[#e44a4a] transition">Sil</button>
  )
}

export default DeleteButton