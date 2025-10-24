import { Reboot } from "@/modules/reboot";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amare | Любовь - перезагрузка, азбука отношений",
  description:
    "2.5 месяца, которые помогут тебе перестать «пахать в отношениях» и наконец почувствовать себя любимой",
};

export default function RebootPage() {
  return <Reboot />;
}
