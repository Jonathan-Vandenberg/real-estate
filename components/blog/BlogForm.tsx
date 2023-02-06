import { useEffect, useState } from "react";
import {
  BlogPost,
  Document_Category,
  Image_Category,
  useAddBlogPostMutation,
  useUpdateBlogPostMutation,
} from "../../types";
import { Button } from "../global/Button";
import Plus from "../svgs/Plus";
import { ImageGallery } from "../property/PropertyDetails";
import UploadImage from "../aws/UploadImage";

interface IProps {
  blogPost: BlogPost | undefined | null;
  add: boolean;
  edit: boolean;
  handleClose: () => void;
}

const AddBlogPost = ({ blogPost, add, edit, handleClose }: IProps) => {
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    var mongoObjectId = function () {
      var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
      return (
        timestamp +
        "xxxxxxxxxxxxxxxx"
          .replace(/[x]/g, function () {
            return ((Math.random() * 16) | 0).toString(16);
          })
          .toLowerCase()
      );
    };
    setNewId(mongoObjectId());
  }, []);

  const Dtitle = add ? "" : blogPost?.title;
  const Dsubtitle1 = add ? "" : blogPost?.subtitle1;
  const Dsubtitle2 = add ? "" : blogPost?.subtitle2;
  const Dsubtitle3 = add ? "" : blogPost?.subtitle3;
  const Dsubtitle4 = add ? "" : blogPost?.subtitle4;
  const DtableContents1 = add ? "" : blogPost?.tableContents1;
  const DtableContents2 = add ? "" : blogPost?.tableContents2;
  const DtableContents3 = add ? "" : blogPost?.tableContents3;
  const DtableContents4 = add ? "" : blogPost?.tableContents4;
  const Dp1 = add ? "" : blogPost?.p1;
  const Dp2 = add ? "" : blogPost?.p2;
  const Dp3 = add ? "" : blogPost?.p3;
  const Dp4 = add ? "" : blogPost?.p4;
  const Dp5 = add ? "" : blogPost?.p5;
  const Dp6 = add ? "" : blogPost?.p6;
  const Dp7 = add ? "" : blogPost?.p7;
  const Dp8 = add ? "" : blogPost?.p8;
  const Dl1 = add ? "" : blogPost?.l1;
  const Dl2 = add ? "" : blogPost?.l2;
  const Dl3 = add ? "" : blogPost?.l3;
  const Dl4 = add ? "" : blogPost?.l4;
  const Dl5 = add ? "" : blogPost?.l5;
  const Dl6 = add ? "" : blogPost?.l6;
  const Dl7 = add ? "" : blogPost?.l7;
  const Dl8 = add ? "" : blogPost?.l8;
  const Dl9 = add ? "" : blogPost?.l9;
  const Dl10 = add ? "" : blogPost?.l10;
  const Dl11 = add ? "" : blogPost?.l11;
  const Dl12 = add ? "" : blogPost?.l12;
  const Dl13 = add ? "" : blogPost?.l13;
  const Dl14 = add ? "" : blogPost?.l14;
  const Dl15 = add ? "" : blogPost?.l15;
  const Dconclusion1 = add ? "" : blogPost?.conclusion1;
  const Dconclusion2 = add ? "" : blogPost?.conclusion2;
  const Dconclusion3 = add ? "" : blogPost?.conclusion3;
  const Dreference1 = add ? "" : blogPost?.reference1;
  const Dreference2 = add ? "" : blogPost?.reference2;
  const DauthorName = add ? "" : blogPost?.authorName;
  const DauthorAbout = add ? "" : blogPost?.authorAbout;
  const DauthorLink = add ? "" : blogPost?.authorLink;
  const DeditedBy = add ? "" : blogPost?.editedBy;
  const DpublishedDate = add ? "" : blogPost?.publishedDate;
  const DmainImage = add ? "" : blogPost?.mainImage;
  const DphotoCredit = add ? "" : blogPost?.photoCredit;

  const [newId, setNewId] = useState("");
  const [title, setTitle] = useState(Dtitle);
  const [subtitle1, setSubtitle1] = useState(Dsubtitle1);
  const [subtitle2, setSubtitle2] = useState(Dsubtitle2);
  const [subtitle3, setSubtitle3] = useState(Dsubtitle3);
  const [subtitle4, setSubtitle4] = useState(Dsubtitle4);
  const [tableContents1, setTableContents1] = useState(DtableContents1);
  const [tableContents2, setTableContents2] = useState(DtableContents2);
  const [tableContents3, setTableContents3] = useState(DtableContents3);
  const [tableContents4, setTableContents4] = useState(DtableContents4);
  const [p1, setP1] = useState(Dp1);
  const [p2, setP2] = useState(Dp2);
  const [p3, setP3] = useState(Dp3);
  const [p4, setP4] = useState(Dp4);
  const [p5, setP5] = useState(Dp5);
  const [p6, setP6] = useState(Dp6);
  const [p7, setP7] = useState(Dp7);
  const [p8, setP8] = useState(Dp8);
  const [l1, setL1] = useState(Dl1);
  const [l2, setL2] = useState(Dl2);
  const [l3, setL3] = useState(Dl3);
  const [l4, setL4] = useState(Dl4);
  const [l5, setL5] = useState(Dl5);
  const [l6, setL6] = useState(Dl6);
  const [l7, setL7] = useState(Dl7);
  const [l8, setL8] = useState(Dl8);
  const [l9, setL9] = useState(Dl9);
  const [l10, setL10] = useState(Dl10);
  const [l11, setL11] = useState(Dl11);
  const [l12, setL12] = useState(Dl12);
  const [l13, setL13] = useState(Dl13);
  const [l14, setL14] = useState(Dl14);
  const [l15, setL15] = useState(Dl15);
  const [conclusion1, setConclusion1] = useState(Dconclusion1);
  const [conclusion2, setConclusion2] = useState(Dconclusion2);
  const [conclusion3, setConclusion3] = useState(Dconclusion3);
  const [reference1, setReference1] = useState(Dreference1);
  const [reference2, setReference2] = useState(Dreference2);
  const [authorName, setAuthorName] = useState(DauthorName);
  const [authorAbout, setAuthorAbout] = useState(DauthorAbout);
  const [authorLink, setAuthorLink] = useState(DauthorLink);
  const [editedBy, setEditedBy] = useState(DeditedBy);
  const [publishedDate, setPublishedDate] = useState(DpublishedDate);
  const [mainImage, setMainImage] = useState(DmainImage);
  const [photoCredit, setPhotoCredit] = useState(DphotoCredit);

  const [addBlogPost] = useAddBlogPostMutation();
  const [updateBlogPost] = useUpdateBlogPostMutation();

  let form = {
    variables: {
      input: {
        id: add ? newId : blogPost!.id,
        editedBy: editedBy,
        mainImage: mainImage,
        photoCredit: photoCredit,
        publishedDate: publishedDate,
        title: title,
        subtitle1: subtitle1,
        tableContents1: tableContents1,
        tableContents2: tableContents2,
        tableContents3: tableContents3,
        tableContents4: tableContents4,
        p1: p1,
        p2: p2,
        p3: p3,
        subtitle2: subtitle2,
        p4: p4,
        p5: p5,
        l1: l1,
        l2: l2,
        l3: l3,
        l4: l4,
        l5: l5,
        subtitle3: subtitle3,
        p6: p6,
        p7: p7,
        l6: l6,
        l7: l7,
        l8: l8,
        l9: l9,
        l10: l10,
        l11: l11,
        l12: l12,
        l13: l13,
        l14: l14,
        l15: l15,
        p8: p8,
        subtitle4: subtitle4,
        conclusion1: conclusion1,
        conclusion2: conclusion2,
        conclusion3: conclusion3,
        reference1: reference1,
        reference2: reference2,
        authorName: authorName,
        authorAbout: authorAbout,
        authorLink: authorLink,
      },
    },
  };

  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    function sendForm() {
      if (add) {
        addBlogPost(form);
      }
      if (edit) {
        updateBlogPost(form);
      }
      setTimeout(() => {
        setFormSent(!formSent);
      }, 1000);
    }

    sendForm();

    setTimeout(() => {
      setTitle("");
      setSubtitle1("");
      setSubtitle2("");
      setSubtitle3("");
      setSubtitle4("");
      setTableContents1("");
      setTableContents2("");
      setTableContents3("");
      setTableContents4("");
      setP1("");
      setP2("");
      setP3("");
      setP4("");
      setP5("");
      setL1("");
      setL2("");
      setL3("");
      setL4("");
      setL5("");
      setL6("");
      setL7("");
      setL8("");
      setL9("");
      setL10("");
      setL11("");
      setL12("");
      setL13("");
      setL14("");
      setL15("");
      setP6("");
      setP7("");
      setP8("");
      setConclusion1("");
      setConclusion2("");
      setConclusion3("");
      setReference1("");
      setReference2("");
      setAuthorName("");
      setAuthorAbout("");
      setAuthorLink("");
      setEditedBy("");
      setPublishedDate("");
      setMainImage("");
      setPhotoCredit("");
    }, 4000);
  };

  const titleStyle =
    title?.length !== undefined && title?.length > 40 && title?.length < 50
      ? "border-2  border-[rgb(244,114,27)] text-md p-3 rounded-xl w-full"
      : title?.length !== undefined && title?.length > 50 && title?.length < 62
      ? "border-2 border-[rgb(15,170,59)] p-3 text-md  rounded-xl w-full"
      : title?.length !== undefined && title?.length > 62
      ? "border-2 border-[rgb(224,23,23)] p-3 text-md  rounded-xl w-full"
      : "p-3 rounded-xl w-full text-md";

  const descriptionStyle =
    subtitle1?.length !== undefined &&
    subtitle1?.length > 140 &&
    subtitle1?.length < 150
      ? "border-2 border-[rgb(244,114,27)] text-md  p-3 rounded-xl w-full"
      : subtitle1?.length !== undefined &&
        subtitle1?.length > 150 &&
        subtitle1?.length < 162
      ? "border-2 border-[rgb(15,170,59)] p-3 text-md  rounded-xl w-full"
      : subtitle1?.length !== undefined && subtitle1?.length > 162
      ? "border-2 border-[rgb(224,23,23)] p-3 text-md  rounded-xl w-full"
      : "p-3 rounded-xl w-full text-md";

  return (
    <div className="max-w-[678px] md:max-w-[900px] mx-auto">
      <div className="flex items-center justify-center">
        {add && (
          <p className="tracking-widest text-3xl font-light">
            Create news post
          </p>
        )}
        {edit && (
          <p className="tracking-widest text-3xl font-light">Editing Post</p>
        )}
      </div>
      <form onSubmit={onFinish} className="space-y-3 py-6">
        <p className="text-black font-bold text-md">Hero Image (Only One)</p>
        {edit && (
          <div className="w-full min-h-[20rem] bg-[rgb(240,240,240)] flex items-center justify-center text-md">
            <UploadImage
              category={Image_Category.Property}
              propertyId={""}
              uploadType={"image-blog"}
              offerInId={""}
              blogPostId={add ? newId : blogPost!.id}
              documentCategory={Document_Category.Cop}
            />
          </div>
        )}
        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
          <input
            id="form"
            value={publishedDate as string}
            placeholder="Publication Date"
            onChange={(e) => setPublishedDate(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>
        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="authorName"
            value={authorName as string}
            placeholder="Author's Name"
            onChange={(e) => setAuthorName(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>
        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="authorAbout"
            value={authorAbout as string}
            placeholder="About the Author"
            onChange={(e) => setAuthorAbout(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>
        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="authorLink"
            value={authorLink as string}
            placeholder="Link to Author"
            onChange={(e) => setAuthorLink(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>
        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="editedBy"
            value={editedBy as string}
            placeholder="Edited by"
            onChange={(e) => setEditedBy(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>
        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="photoCredit"
            value={photoCredit as string}
            placeholder="Photo Credit"
            onChange={(e) => setPhotoCredit(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <label htmlFor="html" className="text-md">
            Type until the border is green (For SEO)
          </label>
          <input
            id="title"
            value={title as string}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className={titleStyle}
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <label htmlFor="html" className="text-md">
            Type until the border is green (For SEO)
          </label>
          <input
            id="subtitle1"
            value={subtitle1 as string}
            placeholder="Subtitle #1"
            onChange={(e) => setSubtitle1(e.target.value)}
            className={descriptionStyle}
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="tableContents1"
            value={tableContents1 as string}
            placeholder="Table of Contents #1"
            onChange={(e) => setTableContents1(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="tableContents2"
            value={tableContents2 as string}
            placeholder="Table of Contents #2"
            onChange={(e) => setTableContents2(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="tableContents3"
            value={tableContents3 as string}
            placeholder="Table of Contents #3"
            onChange={(e) => setTableContents3(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="tableContents4"
            value={tableContents4 as string}
            placeholder="Table of Contents #4"
            onChange={(e) => setTableContents4(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={p1 as string}
            placeholder="Paragraph 1"
            onChange={(e) => setP1(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p2 as string}
            placeholder="Paragraph 2"
            onChange={(e) => setP2(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p3 as string}
            placeholder="Paragraph 3"
            onChange={(e) => setP3(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="subtitle2"
            value={subtitle2 as string}
            placeholder="Subtitle 2"
            onChange={(e) => setSubtitle2(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={p4 as string}
            placeholder="Paragraph 4"
            onChange={(e) => setP4(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p5 as string}
            placeholder="Paragraph 5"
            onChange={(e) => setP5(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="pt-10 px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l1"
            value={l1 as string}
            placeholder="List Item #1"
            onChange={(e) => setL1(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l2"
            value={l2 as string}
            placeholder="List Item #2"
            onChange={(e) => setL2(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l3"
            value={l3 as string}
            placeholder="List Item #3"
            onChange={(e) => setL3(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l4"
            value={l4 as string}
            placeholder="List Item #4"
            onChange={(e) => setL4(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l5"
            value={l5 as string}
            placeholder="List Item #5"
            onChange={(e) => setL5(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="subtitle3"
            value={subtitle3 as string}
            placeholder="Subtitle 3"
            onChange={(e) => setSubtitle3(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="pt-10 px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p6 as string}
            placeholder="Paragraph 6"
            onChange={(e) => setP6(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p7 as string}
            placeholder="Paragraph 7"
            onChange={(e) => setP7(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l6"
            value={l6 as string}
            placeholder="List Item"
            onChange={(e) => setL6(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l7"
            value={l7 as string}
            placeholder="List Item"
            onChange={(e) => setL7(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l8"
            value={l8 as string}
            placeholder="List Item"
            onChange={(e) => setL8(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l9"
            value={l9 as string}
            placeholder="List Item"
            onChange={(e) => setL9(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l10"
            value={l10 as string}
            placeholder="List Item"
            onChange={(e) => setL10(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l11"
            value={l11 as string}
            placeholder="List Item"
            onChange={(e) => setL11(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l12"
            value={l12 as string}
            placeholder="List Item"
            onChange={(e) => setL12(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l13"
            value={l13 as string}
            placeholder="List Item"
            onChange={(e) => setL13(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l14"
            value={l14 as string}
            placeholder="List Item"
            onChange={(e) => setL14(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l15"
            value={l15 as string}
            placeholder="List Item"
            onChange={(e) => setL15(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={p8 as string}
            placeholder="Paragraph 8"
            onChange={(e) => setP8(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="subtitle4"
            value={subtitle4 as string}
            placeholder="Subtitle 4"
            onChange={(e) => setSubtitle4(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={conclusion1 as string}
            placeholder="Conclusion 1"
            onChange={(e) => setConclusion1(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={conclusion2 as string}
            placeholder="Conclusion 2"
            onChange={(e) => setConclusion2(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={conclusion3 as string}
            placeholder="Conclusion 3"
            onChange={(e) => setConclusion3(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="reference1"
            value={reference1 as string}
            placeholder="reference link #1 (if any)"
            onChange={(e) => setReference1(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pb-10">
          <input
            id="reference2"
            value={reference2 as string}
            placeholder="reference link #2 (if any)"
            onChange={(e) => setReference2(e.target.value)}
            className="p-3 rounded-xl w-full text-md"
          />
        </div>

        <div className="flex items-center justify-center space-x-3">
          <Button
            onClick={handleClose}
            variant="secondary"
            type="button"
            className="text-white"
          >
            Cancel
          </Button>

          <Button type="submit" className="text-white">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogPost;
