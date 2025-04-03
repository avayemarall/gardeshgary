import React from "react";
import Departemencard from "../ui/departemencard";

interface DepartmentsList_homeProps {}

const DepartmentsList_home: React.FC<DepartmentsList_homeProps> = () => {
  const categories = [
    {
      id: 1,
      title: "دپارتمان موسیقی",
      description: "توضیحات",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12.75 12.508L21.25 9.108V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.5 22.75 17.5 22.75 17.5L22.75 7.94625C22.75 6.80342 22.75 5.84496 22.6696 5.08131C22.6582 4.97339 22.6448 4.86609 22.63 4.76597C22.5525 4.24426 22.4156 3.75757 22.1514 3.35115C22.0193 3.14794 21.8553 2.96481 21.6511 2.80739C21.6128 2.77788 21.573 2.74927 21.5319 2.7216L21.5236 2.71608C20.8164 2.2454 20.0213 2.27906 19.2023 2.48777C18.4102 2.68961 17.4282 3.10065 16.224 3.60469L14.13 4.48115C13.5655 4.71737 13.0873 4.91751 12.712 5.1248C12.3126 5.34535 11.9686 5.60548 11.7106 5.99311C11.4527 6.38075 11.3455 6.7985 11.2963 7.25204C11.25 7.67831 11.25 8.19671 11.25 8.80858V16.7609C10.7448 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.5 12.75 19.5 12.75 19.5L12.75 12.508Z"
              className="fill-dark-blue"
            ></path>{" "}
            <path
              d="M7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2V7.76091C5.74485 7.4375 5.14432 7.25 4.5 7.25C2.70507 7.25 1.25 8.70507 1.25 10.5C1.25 12.2949 2.70507 13.75 4.5 13.75C6.29493 13.75 7.75 12.2949 7.75 10.5V5.0045C8.44852 5.50913 9.27955 5.75 10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.54565 4.25 8.9663 4.07389 8.51159 3.69837C8.0784 3.34061 7.75 2.79785 7.75 2Z"
              className="fill-medium-blue"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 2,
      title: "دپارتمان کامپیوتر",
      description: "توضیحات",
      icon: (
        <svg
          viewBox="0 0 24 24"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-dark-blue"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <defs>
              <style>
                {".cls-1{fill:none;stroke-miterlimit:10;stroke-width:1.92px;}"}
              </style>
            </defs>
            <rect
              className="cls-1"
              x="3.38"
              y="3.38"
              width="17.25"
              height="17.25"
              rx="2.18"
            />
            <rect
              className="cls-1"
              x="7.21"
              y="7.21"
              width="9.58"
              height="9.58"
              rx="1.92"
            />
            <line className="cls-1" x1="7.21" y1="0.5" x2="7.21" y2="2.42" />
            <line className="cls-1" x1="12" y1="0.5" x2="12" y2="2.42" />
            <line className="cls-1" x1="16.79" y1="0.5" x2="16.79" y2="2.42" />
            <line className="cls-1" x1="7.21" y1="21.58" x2="7.21" y2="23.5" />
            <line className="cls-1" x1="12" y1="21.58" x2="12" y2="23.5" />
            <line
              className="cls-1"
              x1="16.79"
              y1="21.58"
              x2="16.79"
              y2="23.5"
            />
            <line className="cls-1" x1="0.5" y1="16.79" x2="2.42" y2="16.79" />
            <line className="cls-1" x1="0.5" y1="12" x2="2.42" y2="12" />
            <line className="cls-1" x1="0.5" y1="7.21" x2="2.42" y2="7.21" />
            <line
              className="cls-1"
              x1="21.58"
              y1="16.79"
              x2="23.5"
              y2="16.79"
            />
            <line className="cls-1" x1="21.58" y1="12" x2="23.5" y2="12" />
            <line className="cls-1" x1="21.58" y1="7.21" x2="23.5" y2="7.21" />
          </g>
        </svg>
      ),
    },
    {
      id: 3,
      title: "دپارتمان رباتیک",
      description: "توضیحات",
      icon: (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-dark-blue"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill="none"
              strokeWidth="1.4"
              d="M18.3482396,15.9535197 C18.7664592,15.0561341 19,14.0553403 19,13 C19,9.13400675 15.8659932,6 12,6 C8.13400675,6 5,9.13400675 5,13 C5,14.1167756 5.2615228,15.1724692 5.72666673,16.1091793 L5.72666673,16.1091793 M12,3 C12.5522847,3 13,2.55228475 13,2 C13,1.44771525 12.5522847,1 12,1 C11.4477153,1 11,1.44771525 11,2 C11,2.55228475 11.4477153,3 12,3 Z M12,23 C12.5522847,23 13,22.5522847 13,22 C13,21.4477153 12.5522847,21 12,21 C11.4477153,21 11,21.4477153 11,22 C11,22.5522847 11.4477153,23 12,23 Z M12,6 L12,3 M9,14 C9.55228475,14 10,13.5522847 10,13 C10,12.4477153 9.55228475,12 9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 Z M15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 C14.4477153,12 14,12.4477153 14,13 C14,13.5522847 14.4477153,14 15,14 Z M6,18.9876876 L5,16 C5,16 5.07242747,15.2283988 5.5,15.5 C6.43069361,16.0911921 8.57396448,17 12,17 C15.5536669,17 17.6181635,16.0844828 18.5,15.5 C18.8589052,15.262117 19,16 19,16 L18,18.9876876 C18,18.9876876 17.0049249,20.9999997 12,21 C6.99507512,21.0000003 6,18.9876876 6,18.9876876 Z"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 4,
      title: "دپارتمان گردشگری",
      description: "توضیحات",
      icon: (
        <svg
          viewBox="-2.5 0 19 19"
          xmlns="http://www.w3.org/2000/svg"
          className="cf-icon-svg fill-dark-blue"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12.382 5.304 10.096 7.59l.006.02L11.838 14a.908.908 0 0 1-.211.794l-.573.573a.339.339 0 0 1-.566-.08l-2.348-4.25-.745-.746-1.97 1.97a3.311 3.311 0 0 1-.75.504l.44 1.447a.875.875 0 0 1-.199.79l-.175.176a.477.477 0 0 1-.672 0l-1.04-1.039-.018-.02-.788-.786-.02-.02-1.038-1.039a.477.477 0 0 1 0-.672l.176-.176a.875.875 0 0 1 .79-.197l1.447.438a3.322 3.322 0 0 1 .504-.75l1.97-1.97-.746-.744-4.25-2.348a.339.339 0 0 1-.08-.566l.573-.573a.909.909 0 0 1 .794-.211l6.39 1.736.02.006 2.286-2.286c.37-.372 1.621-1.02 1.993-.65.37.372-.279 1.622-.65 1.993z"></path>
          </g>
        </svg>
      ),
    },
  ];
  return (
    <div
      className="flex flex-col gap-10 w-full h-auto items-center  justify-center text-dark-gray
    md:items-start md:px-50
    "
    >
      <h1 className="text-2xl font-bold text-dark-blue">عناوین</h1>
        <Departemencard categories={categories} />
    </div>
  );
};

export default DepartmentsList_home;
