import Swal from "sweetalert2";

export const NotiAlert = async () => {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        confirmButton: "bg-green-500 py-2 px-10 rounded m-1 text-white",
        cancelButton: "bg-red-500 py-2 px-10 rounded m-1 text-white",
      },
      buttonsStyling: false,
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      return true;
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
