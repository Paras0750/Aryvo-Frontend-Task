import Navbar from "../../components/navbar/navbar";
import DriverDetails from "../../components/driverDetails/driverDetails";
import Documents from "../../components/documentVerification/documents";
import Footer from "../../components/footer/footer";
import { useForm } from "react-hook-form";
import { driverDataCollection } from "../../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { schema } from "../../components/formConfig";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../customHooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/ui/button";

const Dashboad = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/signin");
    }
  }, [currentUser, navigate]);

  const displayName = currentUser?.displayName;
  const { control, watch } = useForm({
    resolver: zodResolver(schema),
  });
  const watchedValues = watch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log(watchedValues);
    try {
      const specificId = String(currentUser?.uid);
      console.log("specificId", specificId);

      const specificDocRef = doc(driverDataCollection, specificId);
      await setDoc(specificDocRef, watchedValues);
      console.log("Data successfully added to Firestore");
      navigate("/success");
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Navbar displayName={displayName} />
        <div>
          <h2 className="px-4 md:px-12 my-2 font-semibold text-blue-500">
            Register Driver
          </h2>
          <hr />
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <DriverDetails control={control} />
          <div>
            <Documents />
            <Button
              disabled={loading}
              className="w-[110px] mt-20 mx-4 text-center"
              type="submit"
            >
              <span className="text-white">Submit</span>
            </Button>
          </div>
        </div>
        <Footer />
      </form>
    </>
  );
};

export default Dashboad;
