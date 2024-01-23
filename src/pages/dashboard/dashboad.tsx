import Navbar from "../../components/navbar/navbar";
import DriverDetails from "../../components/driverDetails/driverDetails";
import Documents from "../../components/documentVerification/documents";
import Footer from "../../components/footer/footer";
import { useForm } from "react-hook-form";
import { driverDataCollection } from "../../firebase/firebaseConfig";
import { addDoc } from "firebase/firestore";
import { schema } from "../../components/formConfig";
import { zodResolver } from "@hookform/resolvers/zod";

const Dashboad = () => {
  const { control, watch } = useForm({
    resolver: zodResolver(schema),
  });
  const watchedValues = watch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(watchedValues);
    try {
      await addDoc(driverDataCollection, watchedValues);
      console.log("Data successfully added to Firestore");
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Navbar />
        <div>
          <h2 className="px-12 my-2 font-semibold text-blue-500">
            Register Driver
          </h2>
          <hr />
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <DriverDetails control={control} />
          <Documents />
        </div>
        <Footer />
      </form>
    </>
  );
};

export default Dashboad;
