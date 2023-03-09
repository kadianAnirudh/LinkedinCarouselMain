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

// Function that creates perfect pages at low quality
//   const downloadPDF = async (div) => {
//     // Initialize jsPDF document
//     const doc = new jsPDF({
//       orientation: "portrait",
//       unit: "px",
//       format: [400, 500],
//     });

//     // Get all child divs of myDiv
//     const childDivs = div.children;

//     // Loop through all child divs
//     for (let i = 0; i < childDivs.length; i++) {
//       const childDiv = childDivs[i];

//       // Generate canvas for current child div
//       const canvas = await html2canvas(childDiv);

//       // Add current canvas to PDF document as an image
//       doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 400, 500);

//       // Add new page to PDF document if there are more child divs to process
//       if (i < childDivs.length - 1) {
//         doc.addPage();
//       }
//     }

//     // Save PDF document
//     doc.save("myPDF.pdf");
//   };

// Code of perfection
// const downloadPDF = async (div) => {
//   const doc = new jsPDF({
//     orientation: "portrait",
//     unit: "px",
//     format: [400, 500],
//   });

//   const pages = div.children;
//   for (let i = 0; i < pages.length; i++) {
//     const page = pages[i];
//     const canvas = await html2canvas(page, { scale: 4 });
//     const imgData = canvas.toDataURL("image/png", 1.0);
//     doc.addImage(imgData, "PNG", 0, 0, 400, 500, null, "FAST");
//     if (i < pages.length - 1) {
//       doc.addPage();
//     }
//   }

//   doc.save("myPDF.pdf");
// };

// tailwind for underline
//  underline decoration-[#FF1694] decoration-[12px]
