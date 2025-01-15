import ServerLayout from "@/components/server/ServerLayout";
import Desktop from "./_layout/Desktop";
import Mobile from "./_layout/Mobile";
import {PropsWithChildren} from "react";

const MainLayout = ServerLayout<PropsWithChildren>({ Desktop, Mobile });

MainLayout.displayName = 'MainLayout'
export default MainLayout;