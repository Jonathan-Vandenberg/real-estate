import { useSession } from "next-auth/react";
import Check from "../components/svgs/Check";
import Image from "next/image";
import type { BlogPost } from "../types";
import { useState } from "react";
import { ChevRight } from "./svgs/Arrows";
import Edit from "./svgs/Edit";
import Plus from "./svgs/Plus";
import { Button } from "./Button";

interface IProps {
  data: BlogPost | undefined | null;
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogPostMarkup({
  data,
  handleAdd,
  handleEdit,
}: IProps) {
  const { data: session, status } = useSession();
  const [editActivated, setEditActivated] = useState(false);

  return (
    <div>
      <ul className="border-y-2 border-gray-200 pb-6 pt-2 flex flex-col items-start justify-start space-y-5">
        {data?.tableContents1 && (
          <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
            <div>
              <Check className="h-6 w-6" />
            </div>
            <a
              href="#subtitle1"
              className="underline underline-offset-1 decoration-[2px] decoration-orange"
            >
              {data?.tableContents1}
            </a>
          </li>
        )}
        {data?.tableContents2 && (
          <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
            <div>
              <Check className="h-6 w-6" />
            </div>
            <a
              className="underline underline-offset-1 decoration-[2px] decoration-orange"
              href="#subtitle2"
            >
              {data?.tableContents2}
            </a>
          </li>
        )}
        {data?.tableContents3 && (
          <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
            <div>
              <Check className="h-6 w-6" />
            </div>
            <a
              className="underline underline-offset-1 decoration-[2px] decoration-orange"
              href="#subtitle3"
            >
              {data?.tableContents3}
            </a>
          </li>
        )}
        {data?.tableContents4 && (
          <li className="text-xl text-gray-700 flex items-center justify-between space-x-4">
            <div>
              <Check className="h-6 w-6" />
            </div>
            <a
              href="#subtitle4"
              className="underline underline-offset-1 decoration-[2px] decoration-orange"
            >
              {data?.tableContents4}
            </a>
          </li>
        )}
      </ul>

      <div className="flex-col space-y-8 py-6">
        {data?.p1 && <p className="text-gray-600 text-xl">{data?.p1}</p>}
        {data?.p2 && <p className="text-gray-600 text-xl">{data?.p2}</p>}
        {data?.p3 && <p className="text-gray-600 text-xl">{data?.p3}</p>}
      </div>

      {data?.subtitle1 && <div className="py-6">Email Button</div>}

      {data?.subtitle2 && (
        <h2
          id="subtitle2"
          className="logoFont text-gray-600 text-2xl pb-3 pt-6 scroll-mt-20"
        >
          {data?.subtitle2}
        </h2>
      )}
      {data?.p4 && <p className="text-gray-600 py-4 text-xl">{data?.p4}</p>}
      {data?.p5 && <p className="text-gray-600 py-4 text-xl">{data?.p5}</p>}
      <ul>
        {data?.l1 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <Check className="h-6 w-6" />
              <p className="text-gray-600">{data?.l1}</p>
            </div>
          </li>
        )}
        {data?.l2 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <Check className="h-6 w-6" />
              <p className="text-gray-600">{data?.l2}</p>
            </div>
          </li>
        )}
        {data?.l3 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <Check className="h-6 w-6" />
              <p className="text-gray-600">{data?.l3}</p>
            </div>
          </li>
        )}
        {data?.l4 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <Check className="h-6 w-6" />
              <p className="text-gray-600">{data?.l4}</p>
            </div>
          </li>
        )}
        {data?.l5 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <Check className="h-6 w-6" />
              <p className="text-gray-600">{data?.l5}</p>
            </div>
          </li>
        )}
      </ul>
      {data?.subtitle3 && (
        <h2
          id="subtitle3"
          className="text-2xl logoFont text-gray-600  pb-3 pt-12 scroll-mt-20"
        >
          {data?.subtitle3}
        </h2>
      )}
      {data?.p6 && <p className="text-gray-600 py-4 text-xl">{data?.p6}</p>}
      {data?.p7 && <p className="text-gray-600 py-4 text-xl">{data?.p7}</p>}
      <ul>
        {data?.l6 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l6}</p>
            </div>
          </li>
        )}
        {data?.l7 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l7}</p>
            </div>
          </li>
        )}
        {data?.l8 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l8}</p>
            </div>
          </li>
        )}
        {data?.l9 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l9}</p>
            </div>
          </li>
        )}
        {data?.l10 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l10}</p>
            </div>
          </li>
        )}
        {data?.l11 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l11}</p>
            </div>
          </li>
        )}
        {data?.l12 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l12}</p>
            </div>
          </li>
        )}
        {data?.l13 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l13}</p>
            </div>
          </li>
        )}
        {data?.l14 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l14}</p>
            </div>
          </li>
        )}
        {data?.l15 && (
          <li className="py-4 text-xl">
            <div className="flex items-center justify-s space-x-5">
              <div className="w-2">
                <ChevRight className="h-6 w-6" />
              </div>
              <p className="text-gray-600">{data?.l15}</p>
            </div>
          </li>
        )}
      </ul>
      {data?.p8 && <p className="text-gray-600 py-4 text-xl">{data?.p8}</p>}
      {data?.subtitle4 && (
        <p
          id="subtitle4"
          className="logoFont text-gray-600 text-2xl pb-3 pt-6 scroll-mt-20"
        >
          {data?.subtitle4}
        </p>
      )}

      {data?.conclusion1 && (
        <p className="text-gray-600 py-4 text-xl">{data?.conclusion1}</p>
      )}
      {data?.conclusion2 && (
        <p className="text-gray-600 py-4 text-xl">{data?.conclusion2}</p>
      )}
      <p className="text-gray-600 py-4 text-xl">{data?.conclusion3}</p>
      {data?.reference1 && (
        <p className="text-gray-500 py-1 text">Reference: {data?.reference1}</p>
      )}
      {data?.reference2 && (
        <p className="text-gray-500 py-1 text">Reference: {data?.reference2}</p>
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
              {!editActivated && (
                <>
                  <div className="text-xl cursor-pointer">
                    <Edit className="w-6 h-6" />
                  </div>
                  <p className="text-lg text-red-600 cursor-pointer">Edit</p>
                </>
              )}
            </Button>
          </div>
          <Button
            type="button"
            className="flex items-center space-x-1"
            onClick={() => handleAdd()}
          >
            <div className="text-xl text-white">
              <Plus className="w-6 h-6" />
            </div>
            <p className="text-md text-white">Add</p>
          </Button>
        </div>
      )}
    </div>
  );
}
