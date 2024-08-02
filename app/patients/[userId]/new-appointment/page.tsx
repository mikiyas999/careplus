import { AppointmentForm } from "@/components/form/AppointmentForm";
import PatientForm from "@/components/form/PatientForm";
import { getPatient } from "@/lib/actions/patient";
import Image from "next/image";
import Link from "next/link";

export default async function Appointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
          <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointement"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
