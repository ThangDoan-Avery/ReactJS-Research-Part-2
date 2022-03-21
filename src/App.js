// import HandleEventRCC from "./EventHandler/HandleEventRCC";
// import BaiTapChonXeRedux from './DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux';
// import BaiTapGameXucXac from './DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac';
// import AxiosDemo from './AxiosDemo/AxiosDemo';
// import BaiTapQuanLyNguoiDung from './DemoRedux/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';
// import BaiTapQLSP from './Props/BaiTapQLSP/BaiTapQLSP';
// import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';
// import DemoProps from './Props/DemoProps/DemoProps';
// import DemoPropsChildren from './Props/DemoPropsChildren/DemoPropsChildren';
// import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
// import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';
// import RenderWithMap from './RenderWithMap/RenderWithMap';
// import BaiTapChonXe from "./StateDemo/BaiTapChonXe/BaiTapChonXe";
// import BaiTapTangGiamFont from "./StateDemo/BaiTapTangGiamFont/BaiTapTangGiamFont";
// import StyleComponent from "./StyleComponent/StyleComponent";
// import LoginForm from "./EventHandler/LoginForm";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import HeaderHome from './Components/HeaderHome/HeaderHome';
import Detail from './pages/Detail/Detail';
import AdminIndex from './pages/Admin/AdminIndex/AdminIndex';
import HookUseState from './pages/HookReact/HookUseState/HookUseState';
import HookUseEffect from './pages/HookReact/HookUseEffect/HookUseEffect';
import ParentComponent from './pages/HookReact/HookUseCallBack/ParentComponent';
import HookUseMemo from './pages/HookReact/HookUseMemo/HookUseMemo';
import HookUseRef from './pages/HookReact/HookUseRef/HookUseRef';
import HookRedux from './pages/HookReact/HookRedux/HookRedux';
import ToDoList from './pages/HookReact/ToDoList/ToDoList';
import DemoHOCModal from './pages/HOC/DemoHOCModal/DemoHOCModal';

function App() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Switch>
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/detail/:id'} component={Detail} />
        <Route exact path={'/admin'} component={AdminIndex} />
        <Route exact path={'/hookusestate'} component={HookUseState} />
        <Route exact path={'/hookuseeffect'} component={HookUseEffect} />
        <Route exact path={'/hookusecallback'} component={ParentComponent} />
        <Route exact path={'/hookusememo'} component={HookUseMemo} />
        <Route exact path={'/hookuseref'} component={HookUseRef} />
        <Route exact path={'/hookredux'} component={HookRedux} />
        <Route exact path={'/todolist'} component={ToDoList} />
        <Route exact path={'/demohocmodal'} component={DemoHOCModal} />

        <Route exact path={''} component={Home} />
      </Switch>
    </BrowserRouter>
  );
  // return (
  //   <div className='App'>
  //     {/* <HandleEventRCC /> */}
  //     {/* <LoginForm /> */}
  //     {/* <StyleComponent /> */}
  //     {/* <p className='pColorGreen'>hello cyberosft</p> */}
  //     {/* <BaiTapChonXe /> */}
  //     {/* <BaiTapTangGiamFont /> */}
  //     {/* <RenderWithMap /> */}
  //     {/* <DemoProps /> */}
  //     {/* <BaiTapQLSP /> */}
  //     {/* <BaiTapXemChiTiet /> */}
  //     {/* <ExerciseCarStore /> */}
  //     {/* <DemoPropsChildren /> */}
  //     {/* <BaiTapChonXeRedux /> */}
  //     {/* <BaiTapGameXucXac /> */}
  //     {<BaiTapQuanLyNguoiDung />}
  //   </div>
  // );
}

export default App;
