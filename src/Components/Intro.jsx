export default function Intro({ items }) {
  return (
    <>
      <div className="bg-white p-12 max-w-7xl mx-auto text-xl text-black">
        <div className="grid md:grid-cols-2 gap-20 sm:grid-cols-1">
          <img src={items[0]["pic"]} className="rounded-lg" />
          <p>
            He sat across from her trying to imagine it was the first time. It
            wasn't. Had it been a hundred? It quite possibly could have been.
            Two hundred? Probably not. His mind wandered until he caught himself
            and again tried to imagine it was the first time.
          </p>
        </div>
        <div className="grid md:grid-cols-2 mt-12 gap-20 sm:grid-cols-1 ">
          <p className="">
            He sat across from her trying to imagine it was the first time. It
            wasn't. Had it been a hundred? It quite possibly could have been.
            Two hundred? Probably not. His mind wandered until he caught himself
            and again tried to imagine it was the first time.
          </p>
          <img src={items[1]["pic"]} className="rounded-lg" />
        </div>
      </div>
    </>
  );
}
