import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chat from "./components/Msngrchat/Chat";
import AddDoctors from "./components/adddoctors/AddDoctors";
import Details from "./components/details/Details";
import Pharmacy from "./components/Home components/What are u looking fr/Pharmacy";
import Phercheckout from "./components/Pharheckout/Phercheckout";
import Appointment from "./components/appointment/Appointment";
import AddNews from "./components/addnews/AddNews";
import News from "./components/news/News";
import NewsDetails from "./components/newsdetails/NewsDetails";
import EditDoctor from "./pages/EditDoctor/EditDoctor";
import { lazy, Suspense } from "react";
import AddNurse from "./pages/Nurse/AddNurse";
import EditNurse from "./pages/Nurse/EditNurse";
import ShowAllNurse from "./pages/Nurse/ShowAllNurse";
import ShowStaffsByDepartment from "./pages/Staffs/ShowStaffsByDepartment";
import ShowNurseByDepartment from "./pages/Nurse/ShowNurseByDepartment";
import ShowNurseDepartments from "./pages/Nurse/ShowNurseDepartments";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import useRole from "./hooks/useRole";
import MyAppointment from "./components/appointment/MyAppointment";
import Payment from "./components/appointment/Payment";
import { CheckoutForm } from "./components/appointment/CheckoutForm";
import { NavigationBar } from "./shared/NavigationBar/NavigationBar";
import Notfound from "./Loadandnotf/Notfound";
import AddAmbulance from "./components/addambulance/AddAmbulance";
import DoctorAppointment from "./components/appointment/DoctorAppointment";
import AmbulanceDetails from "./components/Home components/AmbulanceService/AmbulanceDetails";
import { Contact } from "./components/Contact";

const Homepage = lazy(() => import("./pages/Home Page/Homepage"));
const AddDoctor = lazy(() => import("./pages/AddDoctor/AddDoctor"));
const AllDoctors = lazy(() => import("./pages/AllDoctors/AllDoctors"));
const Speciality = lazy(() => import("./pages/Speciality/Speciality"));
const BloodDoner = lazy(() => import("./pages/BloodDoner/BloodDoner"));
const Login = lazy(() => import("./pages/login/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const MakeAdmin = lazy(() => import("./pages/Dashboard/MakeAdmin"));
const BloodDonerList = lazy(() => import("./pages/BloodDonerList/BloodDonerList"));
const BloodBank = lazy(() => import("./pages/BloodBank/BloodBank"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute/ProtectedRoute"));
const SpecialistDoctors = lazy(() => import("./pages/SpecialistDoctors/SpecialistDoctors"));
const VideoCall = lazy(() => import("./pages/VideoCall/VideoCall"));
function App() {
  const [userInfo] = useAuthState(auth);
  const role = useRole(userInfo?.email);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage></Homepage>,
    },
    {
      path: "/adddoctors",
      element: (
        <AddDoctors></AddDoctors>
      ),
    },
    {
      path: "/email",
      element: (
        <Contact></Contact>
      ),
    },

    {
      path: "/doctor",
      element: <Speciality></Speciality>,
    },

    {
      path: "/addambulance",
      element: <AddAmbulance></AddAmbulance>,
    },

    {
      path: "/doctor/add",
      element: <AddDoctor></AddDoctor>,
    },

    {
      path: "/doctor/edit/:id",
      element: <EditDoctor />,
    },

    {
      path: "/doctors/all",
      element: <AllDoctors></AllDoctors>,
    },

    {
      path: "/doctor/:id",
      element: <Details></Details>,
    },

    {
      path: "/doctor/:id",
      element: <Details></Details>,
    },

    {
      path: "/doctors/:speciality",
      element: <SpecialistDoctors></SpecialistDoctors>,
    },

    {
      path: "/login",
      element: (
        <Login />
      )
    },
    {
      path: "/news/:id",
      element: (
        <NewsDetails></NewsDetails>
      ),
    },
    {
      path: "*",
      element: (
        <div>This Route not found</div>
      )
    },
    {
      path: "/pharmacy",
      element: (
        <Pharmacy></Pharmacy>
      )
    },
    {
      path: "/signup",
      element: (<SignUp />),
    },
    {
      path: "/bloodDonerList",
      element: (
        <BloodDonerList />
      )
    },
    {
      path: "/bloodBank",
      element: (
        <BloodBank />
      )
    },
    {
      path: "/websitedoctors/:id",
      element: <ProtectedRoute><Details></Details></ProtectedRoute>,
    },

    {
      path: "/amdetails/:id",
      element: (
        <AmbulanceDetails></AmbulanceDetails>
      )
    },
    {
      path: "/addnews",
      element: (
        <AddNews></AddNews>
      )
    },
    {
      path: "/blog",
      element: (
        <News></News>
      )
    },
    {
      path: "/medcheckout/:id",
      element: (<Phercheckout></Phercheckout>)
    },
    {
      path: "/videoCall/:id",
      element: (<VideoCall />)
    },
    {
      path: "/medcheckout/:id",
      element: <Phercheckout></Phercheckout>
    },
    {
      path: "/medcheckout/:id",
      element: (<Phercheckout></Phercheckout>)
    },
    {
      path: "/appointment",
      element: (<ProtectedRoute><Appointment></Appointment></ProtectedRoute>)
    },
    {
      path: "dashboard",
      element: (<Dashboard />),
      children: [
        {
          path: "makeAdmin",
          element: <MakeAdmin />,
        },
        {
          path: "addnurse",
          element: (<AddNurse />)
        },
        {
          path: "addambulance",
          element: <AddAmbulance></AddAmbulance>,
        },
        {
          path: "payment/:id",
          element: <Payment></Payment>,
        },
        {
          path: "adddoctor",
          element: <AddDoctor></AddDoctor>,
        },
        {
          path: "myappointments",
          element: <MyAppointment></MyAppointment>,
        },
        {
          path: "doctorAppointment",
          element: <DoctorAppointment />,
        },
        {
          path: "bloodDoner",
          element: (
            <ProtectedRoute>
              <BloodDoner />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/nurse",
      element: (<ShowNurseDepartments />)
    },
    {
      path: "/checkout",
      element: (<Payment></Payment>)
    },
    {
      path: "/nurse/all",
      element: (<ShowAllNurse />)
    },
    {
      path: "/nurse/department/:department",
      element: (<ShowNurseByDepartment />)
    },
    {
      path: "/nurse/add",
      element: (<AddNurse />)
    },

    {
      path: "/nurse/edit/:id",
      element: (<EditNurse />)
    },
    {
      path: "/not",
      element: (<Notfound></Notfound>)
    }

  ]);
  return (
    <Suspense fallback={<div class=" shadow rounded-md p-4 max-w-lg mt-72  w-full mx-auto">
    <div class="animate-pulse  flex space-x-4 ">
      <div class="rounded-full border  bg-[#1b82e2] h-20 ml-40 w-20"></div>
    
     
    </div>
  </div>}>
      <div className="App bg-white">
        <RouterProvider router={router} />
        {/* <NavigationBar isHome={true} /> */}
        <div className="mb-[150px]">
          <Chat></Chat>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </Suspense>
  );
}

export default App;
