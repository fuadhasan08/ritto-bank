import ShortNavbar from '../components/common/ShortNavbar';
import VerifyNumberForm from '../components/varifyNumber/VerifyNumberForm';

export default function VarifyNumber() {
  return (
    <>
      <ShortNavbar />
      <VerifyNumberForm />
    </>
  );
}

VarifyNumber.getLayout = function getLayout(page) {
  return <>{page}</>;
};
