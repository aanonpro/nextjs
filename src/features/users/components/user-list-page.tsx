// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
import { invoices, payments } from "../user-mock"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export default function UserListPage() {
    // return (
    //     <Table>
    //         <TableCaption>A list of your recent invoices.</TableCaption>
    //         <TableHeader>
    //             <TableRow>
    //                 <TableHead className="w-[100px]">Invoice</TableHead>
    //                 <TableHead>Method</TableHead>
    //                 <TableHead>Status</TableHead>
    //                 <TableHead className="text-right">Amount</TableHead>
    //             </TableRow>
    //         </TableHeader>
    //         <TableBody>
    //             {
    //                 invoices.map(invoice => {
    //                     return (
    //                         <TableRow key={invoice.invoice}>
    //                             <TableCell className="font-medium">{invoice.invoice}</TableCell>
    //                             <TableCell>{invoice.paymentMethod}</TableCell>
    //                             <TableCell>{invoice.paymentStatus}</TableCell>
    //                             <TableCell className="text-right">{invoice.totalAmount}</TableCell>
    //                         </TableRow>
    //                     )
    //                 })
    //             }

    //         </TableBody>
    //     </Table>
    // )
    return (
        <DataTable 
            columns={columns}
            data={payments}
        />
    )

}

/* sytax loop in tsx*/

// {
//     invoices.map(invoice=>{
//         return(
//             // your html 
//         )
//     })
// }