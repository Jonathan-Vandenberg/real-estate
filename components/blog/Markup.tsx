import { useSession } from "next-auth/react";
import { useState } from "react";
import type { BlogPost } from "../../types";
import { Button } from "../global/Button";
import Edit from "../svgs/Edit";

interface IProps {
  blogPost: BlogPost | undefined | null;
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogPostMarkup({
  blogPost,
  handleAdd,
  handleEdit,
}: IProps) {
  const { data: session, status } = useSession();
  const [editActivated, setEditActivated] = useState(false);

  return (
    <div>
      <ul className="border-y pb-6 pt-2 flex flex-col items-start justify-start space-y-5">
        {blogPost?.tableContents1 && (
          <li className="text-xl text-[rgb(54,54,54)] flex items-center justify-between space-x-4 mt-3">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <a href="#subtitle1" className=" text-[rgb(202,59,204)]">
              {blogPost?.tableContents1}
            </a>
          </li>
        )}
        {blogPost?.tableContents2 && (
          <li className="text-xl text-[rgb(54,54,54)] flex items-center justify-between space-x-4">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <a className="text-[rgb(202,59,204)]" href="#subtitle2">
              {blogPost?.tableContents2}
            </a>
          </li>
        )}
        {blogPost?.tableContents3 && (
          <li className="text-xl text-[rgb(54,54,54)] flex items-center justify-between space-x-4">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <a className="text-[rgb(202,59,204)]" href="#subtitle3">
              {blogPost?.tableContents3}
            </a>
          </li>
        )}
        {blogPost?.tableContents4 && (
          <li className="text-xl text-[rgb(54,54,54)] flex items-center justify-between space-x-4">
            <div className="h-3 w-3 bg-black rounded-full"></div>
            <a href="#subtitle4" className="text-[rgb(202,59,204)]">
              {blogPost?.tableContents4}
            </a>
          </li>
        )}
      </ul>

      <div className="flex-col space-y-8 py-6">
        {blogPost?.p1 && (
          <p className="text-gray-600 text-xl">{blogPost?.p1}</p>
        )}
        {blogPost?.p2 && (
          <p className="text-gray-600 text-xl">{blogPost?.p2}</p>
        )}
        {blogPost?.p3 && (
          <p className="text-gray-600 text-xl">{blogPost?.p3}</p>
        )}
      </div>

      {blogPost?.subtitle1 && <div className="py-6">Email Button</div>}

      {blogPost?.subtitle2 && (
        <h2
          id="subtitle2"
          className="logoFont text-gray-600 text-2xl pb-3 pt-6 scroll-mt-[8rem]"
        >
          {blogPost?.subtitle2}
        </h2>
      )}
      {blogPost?.p4 && (
        <p className="text-gray-600 py-4 text-xl">{blogPost?.p4}</p>
      )}
      {blogPost?.p5 && (
        <p className="text-gray-600 py-4 text-xl">{blogPost?.p5}</p>
      )}
      <ul>
        {blogPost?.l1 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l1}</p>
            </div>
          </li>
        )}
        {blogPost?.l2 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l2}</p>
            </div>
          </li>
        )}
        {blogPost?.l3 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l3}</p>
            </div>
          </li>
        )}
        {blogPost?.l4 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l4}</p>
            </div>
          </li>
        )}
        {blogPost?.l5 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l5}</p>
            </div>
          </li>
        )}
      </ul>
      {blogPost?.subtitle3 && (
        <h2
          id="subtitle3"
          className="text-2xl logoFont text-gray-600  pb-3 pt-12 scroll-mt-[8rem]"
        >
          {blogPost?.subtitle3}
        </h2>
      )}
      {blogPost?.p6 && (
        <p className="text-gray-600 py-4 text-xl">{blogPost?.p6}</p>
      )}
      {blogPost?.p7 && (
        <p className="text-gray-600 py-4 text-xl">{blogPost?.p7}</p>
      )}
      <ul>
        {blogPost?.l6 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l6}</p>
            </div>
          </li>
        )}
        {blogPost?.l7 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l7}</p>
            </div>
          </li>
        )}
        {blogPost?.l8 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l8}</p>
            </div>
          </li>
        )}
        {blogPost?.l9 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l9}</p>
            </div>
          </li>
        )}
        {blogPost?.l10 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l10}</p>
            </div>
          </li>
        )}
        {blogPost?.l11 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l11}</p>
            </div>
          </li>
        )}
        {blogPost?.l12 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l12}</p>
            </div>
          </li>
        )}
        {blogPost?.l13 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l13}</p>
            </div>
          </li>
        )}
        {blogPost?.l14 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l14}</p>
            </div>
          </li>
        )}
        {blogPost?.l15 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-3 h-3">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <p className="text-gray-600">{blogPost?.l15}</p>
            </div>
          </li>
        )}
      </ul>
      {blogPost?.p8 && (
        <p className="text-gray-600 py-4 text-xl">{blogPost?.p8}</p>
      )}
      {blogPost?.subtitle4 && (
        <p
          id="subtitle4"
          className="logoFont text-gray-600 text-2xl pb-3 pt-6 scroll-mt-[8rem]"
        >
          {blogPost?.subtitle4}
        </p>
      )}

      {blogPost?.conclusion1 && (
        <p className="text-gray-600 py-4 text-xl">{blogPost?.conclusion1}</p>
      )}
      {blogPost?.conclusion2 && (
        <p className="text-gray-600 py-4 text-xl">{blogPost?.conclusion2}</p>
      )}
      <p className="text-gray-600 py-4 text-xl">{blogPost?.conclusion3}</p>
      {blogPost?.reference1 && (
        <p className="text-gray-500 py-1 text">
          Reference: {blogPost?.reference1}
        </p>
      )}
      {blogPost?.reference2 && (
        <p className="text-gray-500 py-1 text">
          Reference: {blogPost?.reference2}
        </p>
      )}
      {session?.user?.email ===
        ("urbangentryjon@gmail.com" ||
          "streetfighter010812@gmail.com" ||
          "event.uptogo@gmail.com") && (
        <div
          className={
            "flex cursor-pointer space-x-5 justify-center items-center py-6 w-auto"
          }
        >
          <div
            className="flex flex-col items-center justify-center space-y-2"
            onClick={() => {
              handleEdit(), setEditActivated(!editActivated);
            }}
          >
            <Button
              type="button"
              variant="secondary"
              className="flex items-center space-x-1"
            >
              <>
                <div className="text-xl cursor-pointer">
                  <Edit className="w-6 h-6" />
                </div>
                <p className="text-lg text-red-600 cursor-pointer">Edit</p>
              </>
            </Button>
          </div>
          <Button type="button" onClick={() => handleAdd()}>
            <p className="text-md text-white">Add</p>
          </Button>
        </div>
      )}
    </div>
  );
}
