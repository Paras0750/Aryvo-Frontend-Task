import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../customHooks/useAuth";
import { driverDataCollection } from "../../firebase/firebaseConfig";
import { schema } from "../../components/formConfig";
import Navbar from "../../components/navbar/navbar";
import DriverDetails from "../../components/driverDetails/driverDetails";
import Documents from "../../components/documentVerification/documents";
import Footer from "../../components/footer/footer";
import Button from "../../components/ui/button";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // if (!currentUser) {
    //   navigate("/signin");
    // }
  }, [currentUser, navigate]);

  const displayName = currentUser?.displayName;
  const { control, watch } = useForm({
    resolver: zodResolver(schema),
  });
  const watchedValues = watch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const specificId = String(currentUser?.uid);
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
          <Documents getValues={watch} />
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
  );
};

export default Dashboard;
