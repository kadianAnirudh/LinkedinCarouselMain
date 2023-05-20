const downloadPDF = (div) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [400, 500],
  });

  doc.html(div.innerHTML, {
    callback: function (doc) {
      doc.save("myPDF.pdf");
    },
    x: 0,
    y: 0,
    css: "./Sam.css",
  });
};

// last page preview
<div className="flex h-carouselHeight w-carouselWidth border-2 border-black mr-2 overflow-hidden">
  <div className="flex-col justify-center h-carouselHeight w-carouselWidth overflow-hidden">
    <div className="w-full mt-12">
      <h2 className="text-3xl font-semibold text-[#FF1694] mx-8">
        {lastHeading}
      </h2>
    </div>
    <div className="w-full mt-4">
      <p className="text-2xl mx-8 min-h-[180px] overflow-hidden font-medium text-black">
        {lastBody}
      </p>
      <div class="relative overflow-hidden">
        {/* // pink banner div */}
        <div class="h-40 w-[600px] bg-[#FF1694] mt-28"></div>
        {/* image contaning div */}
        <div class="absolute inset-0 flex justify-center items-center">
          <div class="h-48 w-48 mb-16 mt-16 ml-[200px]">
            <img src={lastImage} class="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;

// mapping for carousel pages
{
  pages.map((page) => (
    <div className="flex h-carouselHeight w-carouselWidth border-2 border-black mr-2">
      {/* section 1, with text and heading */}
      <div className="flex-col justify-center align-center">
        <div className="">
          <div className="max-w-max mt-8 mx-8 border rounded-md">
            <h1 className="px-2 py-2 bono text-white bg-[#FF1694] font-medium border rounded-md text-lg">
              {page.title}
            </h1>
          </div>
          <div className="min-h-[150px]">
            <h2 className="mt-4 mx-8 max-h-max max-w-max text-lg">
              {page.bodyText}
            </h2>
          </div>
        </div>
        {/* section 2 with image container and image  */}
        <div className="h-[200px] bg-[#FF1694] mt-4 ml-4 mr-4 flex justify-center items-center">
          <div className="h-[180px] w-[340px]">
            <img src={page.imageSource} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  ));
}

// Everything below this
{
  /* Everything below this  */
}

<div
  id="myDiv"
  className={`flex justify-center ml-[${randomNumber}px] mr-[8px]`}
>
  <div className="flex h-carouselHeight w-carouselWidth border-2 border-black mr-2 coverPagePreview">
    {/* Cover Page Preview */}
    <div className={`h-full w-full overflow-hidden previewCoverStyle`}>
      {/* The heading / Hook storage box  */}
      <div className="w-full h-2/4 mt-8 overflow-hidden text-center ">
        {/* The Hook  */}
        <h1
          style={{
            textDecoration: "underline",
            textDecorationColor: "#FF1694",
            textDecorationThickness: "12px",
            textUnderlineOffset: "0.2em",
            //   fontFamily: "IBM Plex Sans , sans-serif",
          }}
          className="bingo text-5xl w-full leading-relaxed"
        >
          {hook}
        </h1>
      </div>
      {/* // The color rectangle and the image container */}
      <div class="relative">
        {/* // pink banner div */}
        <div class="h-40 w-[600px] bg-[#FF1694] mt-28 rotate-17"></div>
        {/* image contaning div */}
        <div class="absolute inset-0 flex justify-center items-center">
          <div class="h-48 w-48 mb-32 coverImagePreview">
            <img src={previewImage} class="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Page 1 Preview  */}
  <div
    style={{ overflow: "hidden" }}
    className="flex h-carouselHeight w-carouselWidth border-2 border-black mr-2 "
  >
    <div className={`h-full w-full overflow-hidden`}>
      {/* section 1, with text and heading */}
      <div className="max-w-max mt-8 mx-8 border rounded-md">
        <h1 className="px-2 py-2 bono text-white bg-[#FF1694] font-medium border rounded-md text-lg">
          {" "}
          {OneTitle}{" "}
        </h1>
      </div>
      <div className="min-h-[150px]">
        <h2 className="mt-4 mx-8 max-h-max max-w-max text-lg">{OneBody}</h2>
      </div>
      {/* section 2 with image container and image  */}
      <div className="h-[200px] bg-[#FF1694] mt-4 ml-4 mr-4 flex justify-center items-center">
        <div className="h-[180px] w-[340px]">
          <img src={OneImage} className="h-full w-full" />
        </div>
      </div>
    </div>
  </div>

  {/* Carousel Pages Preview */}

  {/* Last Page Preview */}
</div>;
//   </div>

// carousel page preview
{
  pages.map((page) => (
    <div className="flex h-carouselHeight w-carouselWidth border-2 border-black mr-2">
      {/* section 1, with text and heading */}
      <div className="flex-col justify-center align-center">
        <div className="">
          <div className="max-w-max mt-8 mx-8 border rounded-md">
            <h1 className="px-2 py-2 bono text-white bg-[#FF1694] font-medium border rounded-md text-lg">
              {page.title}
            </h1>
          </div>
          <div className="min-h-[150px]">
            <h2 className="mt-4 mx-8 max-h-max max-w-max text-lg">
              {page.bodyText}
            </h2>
          </div>
        </div>
        {/* section 2 with image container and image  */}
        <div className="h-[200px] bg-[#FF1694] mt-4 ml-4 mr-4 flex justify-center items-center">
          <div className="h-[180px] w-[340px]">
            <img src={page.imageSource} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  ));
}

{
  /* Preview section */
}
<div className="bg-white py-8 flex-center justify-center mt-12">
  <div className="justify-center flex-center">
    <p className="text-3xl font-bold tracking-tight text-pink-600 sm:text-4xl text-center">
      Amazing Work!
    </p>
    <h2 className="text-base leading-7 text-black mt-8 text-center">
      {" "}
      Preview your beautiful carousel{" "}
    </h2>
    <div className="flex items-center justify-center mt-8 overflow-x-auto">
      <div
        id="myDiv"
        ref={divRef}
        className={`flex justify-center ml-[${randomNumber}px] mr-[8px]`}
      >
        <div className="flex h-carouselHeight w-carouselWidth border-2 border-black mr-2 coverPagePreview">
          {/* Cover Page Preview */}
          <div className={`h-full w-full overflow-hidden previewCoverStyle`}>
            {/* The heading / Hook storage box  */}
            <div className="w-full h-2/4 mt-8 overflow-hidden text-center baka">
              {/* The Hook  */}
              <h1 className="bingo text-5xl w-full leading-relaxed">{hook}</h1>
            </div>
            {/* // The color rectangle and the image container */}

            <div class="relative">
              {/* // pink banner div */}
              <div class="h-40 w-[600px] bg-[#FF1694] mt-28 rotate-17"></div>
              {/* image contaning div */}
              <div class="absolute inset-0 flex justify-center items-center">
                <div class="h-48 w-48 mb-32 coverImagePreview">
                  <img src={previewImage} class="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page 1 Preview  */}
        <div
          style={{ overflow: "hidden" }}
          className="flex h-carouselHeight w-carouselWidth border-2 border-black mr-2 "
        >
          <div className={`h-full w-full overflow-hidden`}>
            {/* section 1, with text and heading */}
            <div className="max-w-max mt-8 mx-8 border rounded-md">
              <h1 className="px-2 py-2 bono text-white bg-[#FF1694] font-medium border rounded-md text-lg">
                {" "}
                {OneTitle}{" "}
              </h1>
            </div>
            <div className="min-h-[150px]">
              <h2 className="mt-4 mx-8 max-h-max max-w-max text-lg">
                {OneBody}
              </h2>
            </div>

            {/* section 2 with image container and image  */}
            <div className="h-[200px] bg-[#FF1694] mt-4 ml-4 mr-4 flex justify-center items-center">
              <div className="h-[180px] w-[340px]">
                <img src={OneImage} className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pages Preview */}
        {pages.map((page) => (
          <div className="flex-col h-carouselHeight w-carouselWidth border-2 border-black mr-2">
            {/* section 1, with text and heading */}
            <div className="flex-col justify-center align-center">
              <div className="">
                <div className="max-w-max mt-8 mx-8 border rounded-md">
                  <h1 className="px-2 py-2 bono text-white bg-[#FF1694] font-medium border rounded-md text-lg">
                    {page.title}
                  </h1>
                </div>
                <div className="min-h-[150px]">
                  <h2 className="mt-4 mx-8 max-h-max max-w-max text-lg">
                    {page.bodyText}
                  </h2>
                </div>
              </div>
              {/* section 2 with image container and image  */}
              <div className="h-[200px] bg-[#FF1694] mt-4 ml-4 mr-4 flex justify-center items-center">
                <div className="h-[180px] w-[340px]">
                  <img src={page.imageSource} className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Last Page Preview */}
        <div className="flex h-carouselHeight w-carouselWidth border-2 border-black mr-2 overflow-hidden">
          <div className="flex-col justify-center h-carouselHeight w-carouselWidth overflow-hidden">
            <div className="w-full mt-12">
              <h2 className="text-3xl font-semibold text-[#FF1694] mx-8">
                {lastHeading}
              </h2>
            </div>
            <div className="w-full mt-4">
              <p className="text-2xl mx-8 min-h-[180px] font-medium text-black">
                {lastBody}
              </p>
              <div class="relative overflow-hidden">
                {/* // pink banner div */}
                <div class="h-40 w-[600px] bg-[#FF1694] mt-28"></div>
                {/* image contaning div */}
                <div class="absolute inset-0 flex justify-center items-center">
                  <div class="h-48 w-48 mb-16 mt-16 ml-[200px]">
                    <img src={lastImage} class="h-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
