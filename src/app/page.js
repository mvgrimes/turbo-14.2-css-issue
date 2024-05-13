export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>

        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" defaultChecked/>
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
        </div>

      </div>
    </main>
  );
}

