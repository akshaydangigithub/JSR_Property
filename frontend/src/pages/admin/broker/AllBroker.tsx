import React, { SVGProps } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
  Chip,
  useDisclosure,
  Modal,
  ModalContent,
} from "@heroui/react";
import { EyeIcon } from "../property/AllProperty";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const columns = [
  { name: "NAME", uid: "name" },
  { name: "PHONE", uid: "phone" },
  { name: "COMPANY NAME", uid: "companyName" },
  { name: "CITY", uid: "city" },
  { name: "MEMBERSHIP", uid: "membership" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

export const users = [
  {
    id: 1,
    name: "Tony Reichert",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    phone: "1234567890",
    status: "approved",
    membership: "Done",
    companyName: "Company Name",
    city: "Bhopal",
    country: "Madhya Pradesh",
    about:
      "I am a broker and I have been working in this field for 5 years. I have a lot of experience in this field. I have worked with many clients and have helped them find the perfect property for them.",
  },
  {
    id: 2,
    name: "Zoey Lang",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    phone: "1234567890",
    status: "cancelled",
    membership: "Done",
    companyName: "Company Name",
    city: "Bhopal",
    country: "Madhya Pradesh",
    about:
      "I am a broker and I have been working in this field for 5 years. I have a lot of experience in this field. I have worked with many clients and have helped them find the perfect property for them.",
  },
  {
    id: 3,
    name: "Jane Fisher",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
    phone: "1234567890",
    status: "pending",
    membership: "Not Done",
    companyName: "Company Name",
    city: "Bhopal",
    country: "Madhya Pradesh",
    about:
      "I am a broker and I have been working in this field for 5 years. I have a lot of experience in this field. I have worked with many clients and have helped them find the perfect property for them.",
  },
  {
    id: 4,
    name: "William Howard",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
    phone: "1234567890",
    status: "pending",
    membership: "Not Done",
    companyName: "Company Name",
    city: "Bhopal",
    country: "Madhya Pradesh",
    about:
      "I am a broker and I have been working in this field for 5 years. I have a lot of experience in this field. I have worked with many clients and have helped them find the perfect property for them.",
  },
  {
    id: 5,
    name: "Kristen Copper",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    phone: "1234567890",
    status: "approved",
    membership: "Done",
    companyName: "Company Name",
    city: "Bhopal",
    country: "Madhya Pradesh",
    about:
      "I am a broker and I have been working in this field for 5 years. I have a lot of experience in this field. I have worked with many clients and have helped them find the perfect property for them.",
  },
];

export const DeleteIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.60834 13.75H11.3833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.91669 10.4167H12.0834"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

type User = (typeof users)[0];

export default function AllBroker() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );

      case "status":
        return (
          <select
            defaultValue={cellValue}
            className={`rounded-xl p-2 w-32 bg-gray-100 `}
          >
            <option value="approved">Approved</option>
            <option value="cancelled">Cancelled</option>
            <option value="pending">Pending</option>
          </select>
        );

      case "membership":
        return cellValue === "Done" ? (
          <Chip size="sm" color="success">
            {cellValue}
          </Chip>
        ) : (
          <Chip size="sm" color="danger">
            {cellValue}
          </Chip>
        );

      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-3">
            <Tooltip content="Details">
              <span
                onClick={onOpen}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete broker">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <h1 className="text-2xl mb-6 font-semibold">All Brokers</h1>

      <Table
        className="select-none"
        aria-label="Example table with custom cells"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Modal
        isOpen={isOpen}
        placement="auto"
        size="xl"
        className="p-5"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <div>
            <h1 className="text-center font-bold text-2xl mb-5">
              Broker Details
            </h1>
            <p className="mt-3">
              <strong>Name:</strong> Tony Reichert
            </p>
            <p className="mt-3">
              <strong>Email:</strong> emaple@gmail.com
            </p>
            <p className="mt-3">
              <strong>Phone:</strong> 1234567890
            </p>
            <p className="mt-3">
              <strong>Company Name:</strong> Company Name
            </p>
            <p className="mt-3">
              <strong>City:</strong> Bhopal
            </p>
            <p className="mt-3">
              <strong>Country:</strong> Madhya Pradesh
            </p>
            <p className="mt-3">
              <strong>Status:</strong>{" "}
              <span className="text-success">Approved</span>
            </p>
            <p className="mt-3">
              <strong>Membership:</strong>{" "}
              <Chip size="sm" color="success">
                Done
              </Chip>
            </p>
            <p className="mt-3">
              <strong>About:</strong> I am a broker and I have been working in
              this field for 5 years. I have a lot of experience in this field.
              I have worked with many clients and have helped them find the
              perfect property for them.
            </p>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
