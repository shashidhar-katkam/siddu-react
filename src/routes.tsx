import  Dashboard  from "./views/Dashboard";
import  EditContact from "./views/EditContact";
import  CreateContact  from "./views/CreateContact";
export default [
    {
        path: "/",
        exact: true,
        component: Dashboard
    },
    {
        path: "/create",
        exact: false,
        component: CreateContact
      },
      {
        path: "/edit",
        exact: false,
        component: EditContact
      },
    //   {
    //     path: "/add-new-post",
    //     layout: DefaultLayout,
    //     component: AddNewPost
    //   },

]