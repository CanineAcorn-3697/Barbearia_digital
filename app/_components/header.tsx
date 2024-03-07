import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";


const Header = () => {
    return ( 
        <Card>
            <CardContent className="px-5 py-8 justify-between flex flex-row">
                <Image src="/Logo.png" alt="Logo" width={120} height={22} />
                <Button variant="outline" size="icon" className="h-6 w-6">
                    <MenuIcon />
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;