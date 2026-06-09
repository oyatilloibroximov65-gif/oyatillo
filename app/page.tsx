export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="content">
          <h1>Sog'ligingiz Bizning Ustuvor Vazifamiz</h1>
          <p>
            Tajribali shifokorlar bilan onlayn va oflayn konsultatsiya oling.
          </p>
          <button>Qabulga yozilish</button>
        </div>

        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
            alt="Doctor"
          />
        </div>
      </section>

      <section className="services">
        <h2>Xizmatlarimiz</h2>

        <div className="cards">
          <div className="card">
            <h3>Kardiologiya</h3>
            <p>Yurak va qon-tomir kasalliklarini davolash.</p>
          </div>

          <div className="card">
            <h3>Pediatriya</h3>
            <p>Bolalar uchun professional tibbiy xizmat.</p>
          </div>

          <div className="card">
            <h3>Stomatologiya</h3>
            <p>Tishlarni davolash va parvarishlash.</p>
          </div>
        </div>
      </section>

      <section className="doctors">
        <h2>Bizning Shifokorlar</h2>

        <div className="doctor-list">
          <div className="doctor">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
            <h3>Dr. Aliyev</h3>
            <p>Kardiolog</p>
          </div>

          <div className="doctor">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt=""
            />
            <h3>Dr. Karimova</h3>
            <p>Pediatr</p>
          </div>

          <div className="doctor">
            <img
              src="https://randomuser.me/api/portraits/men/56.jpg"
              alt=""
            />
            <h3>Dr. Xasanov</h3>
            <p>Stomatolog</p>
          </div>
        </div>
      </section>
    </main>
  );
}