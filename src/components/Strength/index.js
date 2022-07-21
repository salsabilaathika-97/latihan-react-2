const Strength = (props) => {
    const {strengthList, handleShowName} = props;
    return (
        <div>
            <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
            <h2>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</h2>
            {
                strengthList.map((item) => (
                    <><p>{item}</p>
                    <button onClick={() => handleShowName('Salsa')}>Show Name</button></>
                ))
            }
        </div>
    )
}

export default Strength;
