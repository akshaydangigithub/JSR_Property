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
  Spinner,
  Link,
  Chip,
  ChipProps,
} from "@heroui/react";
import { DeleteIcon, EditIcon, EyeIcon } from "../admin/property/AllProperty";
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const columns = [
  { name: "IMAGE", uid: "image" },
  { name: "NAME", uid: "name" },
  { name: "TYPE", uid: "type" },
  { name: "PRICE", uid: "price" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

export const users = [
  {
    id: 1,
    name: "Tony Reichert",
    type: "Rent",
    price: "$ 4000",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 2,
    name: "Zoey Lang",
    type: "Rent",
    price: "$ 4000",
    status: "cancelled",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 3,
    name: "Jane Fisher",
    type: "Rent",
    price: "$ 4000",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 4,
    name: "William Howard",
    type: "Rent",
    price: "$ 4000",
    status: "pending",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    id: 5,
    name: "Kristen Copper",
    type: "Rent",
    price: "$ 4000",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  },
  {
    id: 6,
    name: "William Howard",
    type: "Rent",
    price: "$ 4000",
    status: "pending",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    id: 7,
    name: "Kristen Copper",
    type: "Rent",
    price: "$ 4000",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  },
  {
    id: 8,
    name: "William Howard",
    type: "Rent",
    price: "$ 4000",
    status: "pending",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    id: 9,
    name: "Kristen Copper",
    type: "Rent",
    price: "$ 4000",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  },
  {
    id: 10,
    name: "William Howard",
    type: "Rent",
    price: "$ 4000",
    status: "pending",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    id: 11,
    name: "Kristen Copper",
    type: "Rent",
    price: "$ 4000",
    status: "cancelled",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  cancelled: "danger",
  pending: "warning",
};

type User = (typeof users)[0];

export default function AllProperties() {
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "image":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            name={cellValue}
          />
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-3">
            <Tooltip content="Details">
              <Link href="/broker/property/details/876">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Link>
            </Tooltip>
            <Tooltip content="Edit property">
              <Link href="/broker/property/add">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Link>
            </Tooltip>
            <Tooltip color="danger" content="Delete property">
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
      <h1 className="text-2xl mb-6 font-semibold">All Properties</h1>
      <Table
        isVirtualized
        maxTableHeight={500}
        rowHeight={40}
        isHeaderSticky
        color="warning"
        className="select-none"
        aria-label="Example of virtualized table with a large dataset"
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
        <TableBody
          isLoading={false}
          items={users}
          loadingContent={<Spinner label="Loading..." />}
          emptyContent={"No rows to display."}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
