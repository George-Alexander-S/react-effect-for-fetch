import AdviceSlip from "./components/AdviceSlip"

function AdviceSection() {
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip"></section>
      <AdviceSlip/>
      <section className="favourite-slips-list"></section>
      {/* <FavouriteSlipsList/> */}
    </section>
  )
}

export default AdviceSection
