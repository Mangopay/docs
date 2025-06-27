# [WIP] Pay-in Connector - Integration Guide

Owner: Jessica Jiotsa

_The goal of this documentation is to guide you through the integration process of our new escrow-only product : Pay-in Connector (ex-Mangopay Echo). All clients are concerned (i.e new clients & existing clients)._

**Product Manager :** @Jessica Jiotsa

**Product Marketing Manager :** @Saman Kapur

# ⭐ Overview

Pay-in Connector objective is to deliver a unified solution for marketplaces using escrow with us, allowing them to process transactions through an external provider while managing funds within the Mangopay wallet ecosystem.

| Authorization + Capture   | ❌  |
| ------------------------- | --- |
| Delayed Capture (preAuth) | ✅  |
| Refunds                   | ✅  |
| Partial refunds           | ✅  |
| Chargebacks               | ✅  |

| Generic Settlement | ✅  |
| ------------------ | --- |
| Stripe             | ❌  |
| Adyen              | ❌  |
| Worldpay           | ❌  |
| Paypal             | ❌  |

| Payment Method | [Supported Payment Methods](https://www.notion.so/Supported-Payment-Methods-20e1c622aee38069a3a5c93411c0a164?pvs=21) |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| Providers      | [Supported Providers](https://www.notion.so/Supported-Providers-20e1c622aee3804a8adfe59f06748b56?pvs=21)             |

# 💻 Onboarding

# 💰 Pricing

# 👟Training and Marketing materials

**Internal slide decks :**

**External slide decks :**

**Videos :**

# 🔧 Technical Zone

## 📄 Integration Guidelines

### ✔️ Intent object

```jsx
{
    "Id": "int_0197557e-ad9b-7bfe-8ec3-e04ecf38fbde",
    "Amount": 10500,
    "AvailableAmountToSplit": 0,
    "Currency": "EUR",
    "PlatformFeesAmount": 0,
    "Status": "CAPTURED",
    "NextActions": "REFUNDED, DISPUTED",
    "ExternalData": {
        "ExternalProcessingDate": "09-06-2025",
        "ExternalProviderReference": "Stripe-f03f30fc-785f-4519-ba26-ab318d3cf800",
        "ExternalMerchantReference": "Order-xyz-58bc4c49-b769-45fa-8047-ebe3fa5ef8c5",
        "ExternalProviderName": "Stripe",
        "ExternalProviderPaymentMethod": "PAYPAL"
    },
    "Buyer": {
        "Id": "user_m_01JXAGB6FT0HB9FF1S5XQCX43N"
    },
    "LineItems": [
        {
            "Seller": {
                "AuthorId": "user_m_01JXAFYJQEERWRZC5055SQ02NC",
                "WalletId": "wlt_m_01JXAG10G5YJVBBMJDEZJQE0FS",
                "FeesAmount": 0
            },
            "Id": "int_li_0197557e-ad9d-7867-81a3-76f8710e1180",
            "Sku": "item-123456",
            "Name": "item-name-change",
            "Description": "item-description",
            "Quantity": 1,
            "UnitAmount": 8000,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "DIGITAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "CanceledAmount" : 0,
            "CapturedAmount": 8000,
            "RefundedAmount": 0,
            "DisputedAmount": 0,
            "SplitAmount": 8000,
            "TotalLineItemAmount": 8000
        },
        {
            "Seller": {
                "AuthorId": "user_m_01JXAG0X7TM71X8ZDXSENNF5WN",
                "WalletId": "wlt_m_01JXAG12XAN7EW8PRYQV51DNTJ",
                "FeesAmount": 0
            },
            "Id": "int_li_0197557e-ad9d-7867-81a3-76f8710e1181",
            "Sku": "item-789",
            "Name": "item-name2-change",
            "Description": "item-description2",
            "Quantity": 1,
            "UnitAmount": 2500,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "PHYSICAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "CanceledAmount" : 0,
            "CapturedAmount": 2500,
            "RefundedAmount": 0,
            "DisputedAmount": 0,
            "SplitAmount": 2500,
            "TotalLineItemAmount": 2500
        }
    ],
    "Captures": [
        {
            "Id": "int_capture_0197557e-c791-70a5-95be-b520c89b8292",
            "Amount": 10500,
            "Status": "PAID",
            "LineItems": [
                {
                    "Id": "int_li_0197557e-c796-7712-b666-aa1c4d83d2f2",
                    "Amount": 8000
                },
                {
                    "Id": "int_li_0197557e-c796-7712-b666-aa1c4d83d2f3",
                    "Amount": 2500
                }
            ],
            "CreationDate": 1749486061,
            "ExecutionDate": 1749486851
        }
    ],
    "Refunds": [],
    "Disputes": [],
    "Splits": [
        {
            "Id": "int_split_01975581-628c-73cc-8dc9-9667d0ca9715",
            "Amount": 2500,
            "Status": "COMPLETED",
            "LineItems": [
                {
                    "Id": "int_li_0197557e-ad9d-7867-81a3-76f8710e1181",
                    "Amount": 2500
                }
            ],
            "CreationDate": 1749486232,
            "ExecutionDate": 1749486851
        },
        {
            "Id": "int_split_01975581-628c-73cc-8dc9-9667d0ca9714",
            "Amount": 8000,
            "Status": "COMPLETED",
            "LineItems": [
                {
                    "Id": "int_li_0197557e-ad9d-7867-81a3-76f8710e1180",
                    "Amount": 8000
                }
            ],
            "CreationDate": 1749486232,
            "ExecutionDate": 1749487015
        }
    ],
    "CreationDate": 1749486054,
    "ExecutionDate": 1749486232,
    "SettlementId": "int_stlmnt_01975582-2b19-7699-aaf3-a8167936254f"
}
```

| Parameters               | Sub-Parameters | Sub-Sub-Parameters | Format | Description                                                |
| ------------------------ | -------------- | ------------------ | ------ | ---------------------------------------------------------- |
| `Id`                     |                |                    | string | The unique identifier of the intent                        |
| `Amount`                 |                |                    | string | The original amount of the intent                          |
| `AvailableAmountToSplit` |                |                    | string | The remaining amount on the intent available for transfers |
| `Currency`               |                |                    | string | The currency of the intent                                 |
| `PlatformFees`           |                |                    | string | Information about the platform fees                        |
| `Status`                 |                |                    | string | The status of the intent                                   |

• `AUTHORIZED`
• `PARTIALLY_CAPTURED`
• `CAPTURED`
• `CANCELED`
• `REFUNDED`
• `REFUND_REVERSED`
• `DISPUTED`
• `DEFENDED`
• `DISPUTED_WON`
• `DISPUTED_LOST` |
| `NextActions` | | | string | The possible next statuses for the intent |
| `ExternalData` | | | object | Information about the external processed transaction |
| | `ExternalProcessingDate` | | date | The date at which the transaction was created |
| | `ExternalProviderReference` | | string | The unique identifier of the transaction at the acquirer level |
| | `ExternalMerchantReference` | | string | The unique identifier of the transaction at the merchant level |
| | `ExternalProviderName` | | string | The name of the external provider processing the transaction |
| | `ExternalProviderPaymentMethod` | | string | The name of the payment method used to process the transaction |
| `Buyer` | | | object | Information about the buyer |
| | `Id` | | string | The unique identifier of the user at the source of the transaction

Must be a valid value |
| `LineItems` | | | object | Information about the items purchased in the transaction.

The total of all LineItems `UnitAmount`, `TaxAmount`, `DiscountAmount` must equal the `Amount` amount

The total of all LineItems `FeesAmount` must equal the `PlatformFees` amount |
| | `Seller` | | object | Information about the seller involved in the transaction |
| | | `AuthorId` | string | The unique identifier of the seller providing the item

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `WalletId` | string | The unique identifier of the wallet to credit the seller funds

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `FeesAmount` | string | Information about the fees |
| | | `TransferDate` | date | Information about the date when the funds are to be transferred to the seller’s wallet

Must be a date in the future |
| | `Id` | | string | The unique identifier of the item in Mangopay ecosystem |
| | `Sku` | | string | The unique identifier of the item |
| | `Name` | | string | The name of the item |
| | `Description` | | string | The description of the item |
| | `Quantity` | | string | The quantity of the item |
| | `UnitAmount` | | string | The cost of the item, excluding tax and discount |
| | `TaxAmount` | | string | The tax amount applied to the item |
| | `DiscountAmount` | | string | The discount amount applied to the item |
| | `Category` | | string | The category of the item |
| | `Category` | | string | The item category |
| | `ShippingAddress` | | object | Information about the end user’s shipping address |
| | | `AddressLine1` | string | The first line of the address |
| | | `AddressLine2` | string | The second line of the address |
| | | `City` | string | The city of the address |
| | | `Region` | string | The region of the address |
| | | `PostalCode` | string | The postal code of the address |
| | | `Country` | string | The country of the address |
| | `CanceledAmount` | | string | The item total `CANCELED` amount |
| | `CapturedAmount` | | string | The item total `CAPTURED` amount |
| | `RefundedAmount` | | string | The item total `REFUNDED` amount |
| | `DisputedAmount` | | string | The item total `DISPUTED` amount |
| | `SplitAmount` | | string | The item total `COMPLETED` amount |
| | `TotalLineItemAmount` | | string | The item total amount including tax and discount |
| `Captures` | | | object | Information about the amounts captured against the intent |
| | `Id` | | string | The unique identifier of the capture in Mangopay ecosystem |
| | `Amount` | | string | The captured amount |
| | `Status` | | string | The status of the capture
• `CAPTURED`
• `SETTLED_NOT_PAID`
• `PAID` |
| | `LineItems` | | object | Information about the items captured in the transaction. |
| | | `Id` | string | The unique identifier of the item in Mangopay ecosystem |
| | | `Amount` | string | The amount captured for the item |
| | `CreationDate` | | | The date at which the object was created |
| | `ExecutionDate` | | | The date at which the object was successfully moved to `CAPTURED` |
| `Refunds` | | | | Information about the amounts refunded against the intent |
| | `Id` | | | The unique identifier of the refund in Mangopay ecosystem |
| | `Amount` | | | The refunded amount |
| | `Status` | | | The status of the refund
• `REFUNDED`
• `REFUND_REVERSED` |
| | `LineItems` | | | Information about the items refunded in the transaction. |
| | | `Id` | | The unique identifier of the item in Mangopay ecosystem |
| | | `Amount` | | The amount refunded for the item |
| | `CreationDate` | | | The date at which the object was created |
| | `ExecutionDate` | | | The date at which the object was successfully moved to `REFUNDED` |
| `Disputes` | | | | Information about the amounts refunded against the intent |
| | `Id` | | | The unique identifier of the dispute in Mangopay ecosystem |
| | `Amount` | | | The disputed amount |
| | `Status` | | | The status of the dispute
• `DISPUTED`
• `DEFENDED`
• `DISPUTED_WON`
• `DISPUTED_LOST` |
| | `LineItems` | | | Information about the items disputed in the transaction. |
| | | `Id` | | The unique identifier of the item in Mangopay ecosystem |
| | | `Amount` | | The amount disputed for the item |
| | `CreationDate` | | | The date at which the object was created |
| | `Executiondate` | | | The date at which the object was successfully moved to `DISPUTED` |
| `Splits` | | | | Information about the amounts split against the intent |
| | `Id` | | | The unique identifier of the split in Mangopay ecosystem |
| | `Amount` | | | The split amount |
| | `Status` | | | The status of the split
• `CREATED`
• `PENDING_FUNDS_RECEPTION`
• `AVAILABLE`
• `PENDING`
• `COMPLETED`
• `REJECTED`
• `FAILED`
• `REVERSED` |
| | `LineItems` | | | Information about the items split within the intent |
| | | `Id` | | The unique identifier of the item in Mangopay ecosystem |
| | | `Amount` | | The amount split for the item |
| | `CreationDate` | | | The date at which the object was created |
| | `ExecutionDate` | | | The date at which the object was successfully moved to `CREATED` |
| `CreationDate` | | | | The date at which the object was created |
| `ExecutionDate` | | | | The date at which the object was successfully moved to `AUTHORIZED` |
| `SettlementId` | | | | The unique identifier of the settlement linked to this intent in Mangopay ecosystem |

### ✔️ Settlement object

<aside>
💡

**SettlementStatus**

| Status                        | Description                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| **`UPLOAD`**                  | Settlement file received, reconciliation in progress                                         |
| **`CREATED`**                 | Settlement file parsed, all lines contains issues, a new file can be uploaded via PUT method |
| **`FAILED`**                  | Settlement file rejected due to a technical error (format, timeout)                          |
| **`PENDING_FUNDS_RECEPTION`** | Settlement file parsed with some lines successfully reconciled                               |
| **`RECONCILED`**              | Full settlement amount received (`ActualSettlementAmount`)                                   |
| **`INSUFFICIENT_FUNDS`**      | Partial amount received. `FundsMissing` shows the shortfall                                  |
| **`EXCESS_FUNDS`**            | Amount received exceed expected; reconciliation marked as complete                           |

</aside>

```jsx
{
    "SettlementId": "int_stlmnt_01975582-2b19-7699-aaf3-a8167936254f",
    "Status": "RECONCILED",
    "CreationDate": 1749486283,
    "SettlementDate": "2025-06-09",
    "ExternalProviderName": "Stripe",
    "DeclaredIntentAmount": 10500,
    "ExternalProcessorFeesAmount": 500,
    "ActualSettlementAmount": 10000,
    "FundsMissingAmount": 0
}
```

| Parameters     | Format | Description                                    |
| -------------- | ------ | ---------------------------------------------- |
| `SettlementId` | string | The unique identifier of the settlement object |
| `Status`       | string | The status of the settlement                   |

• `UPLOAD`
• `CREATED`
• `FAILED`
• `PENDING_FUNDS_RECEPTION`
• `RECONCILED`
• `INSUFFICIENT_FUNDS`
• `EXCESS_FUNDS` |
| `CreationDate` | string | The date at which the object was created |
| `SettlementDate` | string | The date at which the settlement was created by the external provider |
| `ExternalProviderName` | string | The name of the external provider |
| `DeclaredIntentAmount` | string | The total amount declared through intent API calls with the following calculation :
(Sum of captured intents) - (Sum of refunds amounts) + (Sum of refund reversed amounts) - (Sum of `DISPUTED` disputes) + (Sum of `WON` disputes) |
| `ExternalProcessorFeesAmount` | string | The total fees charged by the external provider |
| `ActualSettlementAmount` | string | The total amount due to the platform (to be held in escrow wallet). This amount correspond to the `TotalSettlementAmount` from the settlement file

A negative amount will result in this parameter being set to zero, indicating no incoming funds to the escrow wallet |
| `FundsMissingAmount` | string | The difference between `ActualSettlementAmount` and the amount received on the escrow wallet |
| `StatusMessage` | string | Error description when settlement file reconciliation is unsuccessful - TBD @José Díaz |

### ✔️ Split object

```jsx
{
    "Id": "int_split_019778b9-09e3-7f1c-a4df-490404180a10",
    "LineItemId": "int_li_019778b4-7e87-7153-8fa0-746b23ecae7d",
    "SellerId": "user_m_01JXWB4GBKZYXHJX197M90JHYV",
    "WalletId": "wlt_m_01JXWB5K56PT3J0HJ8Z9YHCYFR",
    "SplitAmount": 4000,
    "FeesAmount": 0,
    "TransferDate": "17-06-2025",
    "Description": "A transfer description",
    "Status": "COMPLETED"
}
```

| Parameters     | Format            | Description                                                                            |
| -------------- | ----------------- | -------------------------------------------------------------------------------------- |
| `Id`           | string            | The unique identifier of a split object                                                |
| `LineItemId`   | string            | The unique identifier of an item in Mangopay ecosystem                                 |
| `SellerId`     | string            | The unique identifier of the seller providing the item (userId)                        |
| `WalletId`     | string            | The unique identifier of the wallet to credit the seller funds                         |
| `SplitAmount`  | string            | Information about the amount to be credited to the seller wallet                       |
| `FeesAmount`   | string            | Information about the fees                                                             |
| `TransferDate` | date (DD-MM-YYYY) | Information about the date when the funds are to be transferred to the seller’s wallet |

Must be a date in the future |
| `Description` | string | The description of the split object |
| `Status` | string | The status of the split
• `CREATED`
• `PENDING_FUNDS_RECEPTION`
• `AVAILABLE`
• `PENDING`
• `COMPLETED`
• `REJECTED`
• `FAILED`
• `REVERSED` |

### ✔️ Intent Payment

### Authorization

```jsx
POST ../V3.0/{clientId}/payins/intents

{
    "Amount" : 10000,
    "Currency" : "EUR",
    "PlatformFeesAmount" : 0,
    "ExternalData" : {
        "ExternalProcessingDate" : "01-10-2024",
        "ExternalProviderReference" : "Stripe-26dec3ae-5e92-4346-a02e-543c93b8fcb1",
        "ExternalMerchantReference" : "Order-xyz-35e8490e-2ec9-4c82-978e-c712a3f5ba16",
        "ExternalProviderName" : "Stripe",
        "ExternalProviderPaymentMethod" : "PAYPAL"
    },
    "Buyer" : {
        "Id" : "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
    },
    "LineItems" : [
        {
            "Seller" : {
                "AuthorId" : "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                "WalletId" : "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                "FeesAmount" : 0,
                "TransferDate" : "13-11-2024"
            },
            "Sku" : "item-123456",
            "Name" : "item-name",
            "Description" : "item-description",
            "Quantity" : 1,
            "UnitAmount" : 7500,
            "TaxAmount" : 0,
            "DiscountAmount" : 0,
            "Category" : "DIGITAL_GOODS",
            "ShippingAddress" : {
                "AddressLine1" : "Loop Street",
                "AddressLine2" : "Mangopay Ltd",
                "City" : "Paris",
                "Region" : "Ile de France",
                "PostalCode" : "75009",
                "Country" : "FR"
            }
        },
        {
            "Seller" : {
                "AuthorId" : "user_m_01JCGMCQ0FE3052HHFC5RV6C59",
                "WalletId" : "wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN",
                "FeesAmount" : 0,
                "TransferDate" : "13-11-2024"
            },
            "Sku" : "item-789",
            "Name" : "item-name2",
            "Description" : "item-description2",
            "Quantity" : 1,
            "UnitAmount" : 2500,
            "TaxAmount" : 0,
            "DiscountAmount" : 0,
            "Category" : "PHYSICAL_GOODS",
            "ShippingAddress" : {
                "AddressLine1" : "Loop Street",
                "AddressLine2" : "Mangopay Ltd",
                "City" : "Paris",
                "Region" : "Ile de France",
                "PostalCode" : "75009",
                "Country" : "FR"
            }
        }
    ]
}
```

| Parameters           | Sub-Parameters                  | Sub-Sub-Parameters | Format | Required | Description                                                        |
| -------------------- | ------------------------------- | ------------------ | ------ | -------- | ------------------------------------------------------------------ |
| `Amount`             |                                 |                    | string | Yes      | An amount of money in the smallest sub-division of the currency    |
| `Currency`           |                                 |                    | string | Yes      | The currency of the funds                                          |
| `PlatformFeesAmount` |                                 |                    | string | No       | Information about the fees                                         |
| `ExternalData`       |                                 |                    | object | Yes      | Information about the external processed transaction               |
|                      | `ExternalProcessingDate`        |                    | date   | Yes      | The date at which the transaction was created                      |
|                      | `ExternalProviderReference`     |                    | string | Yes      | The unique identifier of the transaction at the provider level     |
|                      | `ExternalMerchantReference`     |                    | string | No       | The unique identifier of the transaction at the merchant level     |
|                      | `ExternalProviderName`          |                    | string | Yes      | The name of the external provider processing the transaction       |
|                      | `ExternalProviderPaymentMethod` |                    | string | No       | The name of the payment method used to process the transaction     |
| `Buyer`              |                                 |                    | object | No       | Information about the buyer                                        |
|                      | `Id`                            |                    | string | No       | The unique identifier of the user at the source of the transaction |

Must be a valid value |
| `LineItems` | | | object | Yes | Information about the items purchased in the transaction.

The total of all LineItems `UnitAmount`, `TaxAmount`, `DiscountAmount`, `TotalLineItemAmount` must equal the `Amount` amount

The total of all LineItems `FeesAmount` mus equal the `PlatformFees` amount |
| | `Seller` | | object | Yes | Information about the seller involved in the transaction |
| | | `AuthorId` | string | Conditional | The unique identifier of the seller providing the item

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `WalletId` | string | Conditional | The unique identifier of the wallet to credit the seller funds

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `FeesAmount` | string | No | Information about the fees |
| | | `TransferDate` | date | No | Information about the date when the funds are to be transferred to the seller’s wallet

Must be a date in the future |
| | `Sku` | | string | Yes | The unique identifier of the item |
| | `Name` | | string | No | The name of the item |
| | `Description` | | string | No | The description of the item |
| | `Quantity` | | string | Yes | The quantity of the item |
| | `UnitAmount` | | string | Yes | The cost of the item, excluding tax and discount |
| | `TaxAmount` | | string | No | The tax amount applied to the item |
| | `DiscountAmount` | | string | No | The discount amount applied to the item |
| | `Category` | | string | No | The item category |
| | `ShippingAddress` | | object | No | Information about the end user’s shipping address |
| | | `AddressLine1` | string | No | The first line of the address |
| | | `AddressLine2` | string | No | The second line of the address |
| | | `City` | string | No | The city of the address |
| | | `Region` | string | No | The region of the address |
| | | `PostalCode` | string | No | The postal code of the address |
| | | `Country` | string | No | The country of the address |

```jsx
{
    "Id": "f18d6512-8aaa-4502-8986-4abd0a87fe18",
    "Amount": 10000,
    "AvailableAmountToSplit": 0,
    "Currency": "EUR",
    "PlatformFeesAmount": 0,
    "Status": "AUTHORIZED",
    "NextActions": "CAPTURED, CANCELED",
    "ExternalData": {
        "ExternalProcessingDate": "01-10-2024",
        "ExternalProviderReference": "Stripe-26dec3ae-5e92-4346-a02e-543c93b8fcb1",
        "ExternalMerchantReference": "Order-xyz-35e8490e-2ec9-4c82-978e-c712a3f5ba16",
        "ExternalProviderName": "Stripe",
        "ExternalProviderPaymentMethod": "PAYPAL"
    },
    "Buyer": {
        "Id": "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
    },
    "LineItems": [
        {
            "Seller": {
                "AuthorId": "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                "WalletId": "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                "FeesAmount": 0,
                "TransferDate": "13-11-2024"
            },
            "Id": "1f395091-6b27-440f-8d38-39832cf1cfc9",
            "Sku": "item-123456",
            "Name": "item-name",
            "Description": "item-description",
            "Quantity": 1,
            "UnitAmount": 7500,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "DIGITAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "TotalLineItemAmount": 7500,
            "CanceledAmount" : 0,
            "CapturedAmount" : 0,
            "RefundedAmount" : 0,
            "DisputedAmount" : 0,
            "SplitAmount" : 0
        },
        {
            "Seller": {
                "AuthorId": "user_m_01JCGMCQ0FE3052HHFC5RV6C59",
                "WalletId": "wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN",
                "FeesAmount": 0,
                "TransferDate": "13-11-2024"
            },
            "Id": "1f12c4d5-d6ea-40f2-ac8e-bb3c8770918c",
            "Sku": "item-789",
            "Name": "item-name2",
            "Description": "item-description2",
            "Quantity": 1,
            "UnitAmount": 2500,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "PHYSICAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "TotalLineItemAmount": 2500,
            "CanceledAmount" : 0,
            "CapturedAmount" : 0,
            "RefundedAmount" : 0,
            "DisputedAmount" : 0,
            "SplitAmount" : 0
        }
    ],
    "CreationDate": 1731430090,
    "ExecutionDate": 1731430090
}
```

### Delayed Capture

- **Full Capture**
  In this scenario, the capture is performed for the full amount specified in the original intent authorization. The following fields are derived from the created intent and therefore do not need to be provided again:
  - `Amount`
  - `Currency`
  - `LineItems`
  If the authorization and capture occur simultaneously, it is assumed that the `ExternalData` remains unchanged from the intent authorization. If `ExternalData` is not explicitly provided at capture, the values from the created intent will be used.
  In the case of a pre-authorization followed by a later capture—typically involving different provider references—we expect the `ExternalProcessingDate` and `ExternalProviderReference` fields to be included for reconciliation purposes.
  ```jsx
  POST ../V3.0/{clientId}/payins/intents/{intentId}/captures

  {
  	"ExternalData" : {
  		"ExternalProcessingDate" : "03-10-2024",
  		"ExternalProviderReference" : "capture-stripe-d5fad854-117c-4b1a-bf15-d8e2846749c7",
  		"ExternalMerchantReference" : "capture-order-1d1d3c30-5f0f-4cda-ad0d-7ab3c315de3d",
  		"ExternalProviderName" : "Stripe",
  		"ExternalProviderPaymentMethod" : "PAYPAL"
  	}
  }
  ```
  ```jsx
  POST ../V3.0/{clientId}/payins/intents/{intentId}/captures
  ```
  | Parameters     | Sub-Parameters | Format | Required | Description                                          |
  | -------------- | -------------- | ------ | -------- | ---------------------------------------------------- |
  | `ExternalData` |                | object | No       | Information about the external processed transaction |
  May be left empty if the information is identical to that provided in the intent authorization (auth+capture) |
  | | `ExternalProcessingDate` | date | No | The date at which the capture was created
  Must be specified if authorization and capture not simultaneous |
  | | `ExternalProviderReference` | string | No | The unique identifier of the capture at the provider level
  Must be specified if authorization and capture not simultaneous |
  | | `ExternalMerchantReference` | string | No | The unique identifier of the capture at the merchant level |
  | | `ExternalProviderName` | string | No | The name of the external provider processing the capture |
  | | `ExternalProviderPaymentMethod` | string | No | The name of the payment method used to process the capture |
  ```jsx
  {
  	  "Id": "f18d6512-8aaa-4502-8986-4abd0a87fe18",
      "Amount": 10000,
      "AvailableAmountToSplit": 10000,
      "Currency": "EUR",
      "Status": "CAPTURED",
      "NextActions": "REFUNDED, DISPUTED",
      "ExternalData": {
          "ExternalProcessingDate": "03-10-2024",
          "ExternalProviderReference": "capture-stripe-d5fad854-117c-4b1a-bf15-d8e2846749c7",
          "ExternalMerchantReference": "capture-order-1d1d3c30-5f0f-4cda-ad0d-7ab3c315de3d",
          "ExternalProviderName": "Stripe",
          "ExternalProviderPaymentMethod": "PAYPAL"
      },
      "Buyer": {
          "Id": "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
      },
      "Capture": {
          "Id": "00f82098-675c-460d-98a6-bf965743019e"
      },
      "LineItems" : [
  	    {
  		    "Id" : "1f395091-6b27-440f-8d38-39832cf1cfc9",
  		    "TotalLineItemAmount" : 7500,
  		    "CancelledAmount" : 0,
  		    "CapturedAmount" : 7500,
          "RefundedAmount" : 0,
          "DisputedAmount" : 0,
          "SplitAmount" : 0
  	    },
  	    {
  		    "Id" : "1f12c4d5-d6ea-40f2-ac8e-bb3c8770918c",
  		    "TotalLineItemAmount" : 2500,
  		    "CancelledAmount" : 0,
  		    "CapturedAmount" : 2500,
          "RefundedAmount" : 0,
          "DisputedAmount" : 0,
          "SplitAmount" : 0
  	    },
      ],
      "CreationDate": 1733329398,
      "ExecutionDate": 1733329423
  }
  ```
- **Partial Capture**
  In this scenario, the capture is only performed for a subset of the original `LineItems`. As with intent creation, the following must be explicitly provided and correctly calculated:
  - `Amount`
  - `LineItems`
  - `ExternalData`
  ```jsx
  POST ../V3.0/{clientId}/payins/intents/{intentId}/captures

  {
  	"Amount" : 7500,
  	"Currency" : "EUR",
  	"PlatformFeesAmount" : 0,
  	"ExternalData" : {
  		"ExternalProcessingDate" : "03-10-2024",
  		"ExternalProviderReference" : "capture-stripe-d5fad854-117c-4b1a-bf15-d8e2846749c7",
  		"ExternalMerchantReference" : "capture-order-1d1d3c30-5f0f-4cda-ad0d-7ab3c315de3d",
  		"ExternalProviderName" : "Stripe",
  		"ExternalProviderPaymentMethod" : "PAYPAL"
  	},
  	"LineItems" : [
  		{
  			"Id" : "1f395091-6b27-440f-8d38-39832cf1cfc9",
  			"Amount" : 7500
  		}
  	]
  }
  ```
  | Parameters     | Sub-Parameters                  | Format | Required | Description                                                     |
  | -------------- | ------------------------------- | ------ | -------- | --------------------------------------------------------------- |
  | `Amount`       |                                 | string | Yes      | An amount of money in the smallest sub-division of the currency |
  | `Currency`     |                                 | string | No       | The currency of the funds                                       |
  | `PlatformFees` |                                 | string | No       | Information about the fees                                      |
  | `ExternalData` |                                 | object | Yes      | Information about the external processed transaction            |
  |                | `ExternalProcessingDate`        | date   | Yes      | The date at which the capture was created                       |
  |                | `ExternalProviderReference`     | string | Yes      | The unique identifier of the capture at the provider level      |
  |                | `ExternalMerchantReference`     | string | No       | The unique identifier of the capture at the merchant level      |
  |                | `ExternalProviderName`          | string | No       | The name of the external provider processing the capture        |
  |                | `ExternalProviderPaymentMethod` | string | No       | The name of the payment method used to process the capture      |
  | `LineItems`    |                                 | object | Yes      | Information about the items purchased in the transaction.       |
  |                | `Id`                            | string | Yes      | The unique identifier of the LineItem in Mangopay ecosystem     |
  |                | `Amount`                        | string | Yes      | The item total amount to be captured                            |
  Must be equal to the total `Amount` amount |
  ```jsx
  {
  	  "Id": "f18d6512-8aaa-4502-8986-4abd0a87fe18",
      "Amount": 10000,
      "AvailableAmountToSplit": 7500,
      "Currency": "EUR",
      "PlatformFeesAmount": 0,
      "Status": "CAPTURED",
      "NextActions": "REFUNDED, DISPUTED",
      "ExternalData": {
          "ExternalProcessingDate": "03-10-2024",
          "ExternalProviderReference": "capture-stripe-d5fad854-117c-4b1a-bf15-d8e2846749c7",
          "ExternalMerchantReference": "capture-order-1d1d3c30-5f0f-4cda-ad0d-7ab3c315de3d",
          "ExternalProviderName": "Stripe",
          "ExternalProviderPaymentMethod": "PAYPAL"
      },
      "Buyer": {
          "Id": "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
      },
      "Capture": {
          "Id": "00f82098-675c-460d-98a6-bf965743019e"
      },
      "LineItems" : [
  	    {
  		    "Id" : "1f395091-6b27-440f-8d38-39832cf1cfc9",
  		    "TotalLineItemAmount" : 7500,
  		    "CancelledAmount" : 0,
  		    "CapturedAmount" : 7500,
          "RefundedAmount" : 0,
          "DisputedAmount" : 0,
          "SplitAmount" : 0
  	    }
      ],
      "CreationDate": 1733329398,
      "ExecutionDate": 1733329423
  }
  ```

### 🚧 Authorization + Capture (not yet available)

### ✔️ Intent Cancel (subject to change)

- **Full Cancel**
  In this scenario, the cancellation is performed for the full amount specified in the original intent authorization. The following fields are derived from the created intent and therefore do not need to be provided again:
  - `Amount`
  - `Currency`
  - `LineItems`
  ```jsx
  POST ../V3.0/{clientId}/payins/intents/{intentId}/cancel

  {
  	"ExternalData" : {
  		"ExternalProcessingDate" : "03-10-2024",
  		"ExternalProviderReference" : "cancel-stripe-d5fad854-117c-4b1a-bf15-d8e2846749c7",
  		"ExternalMerchantReference" : "cancel-order-1d1d3c30-5f0f-4cda-ad0d-7ab3c315de3d",
  		"ExternalProviderName" : "Stripe",
  		"ExternalProviderPaymentMethod" : "PAYPAL"
  	},
  }
  ```
  | Parameters     | Sub-Parameters                  | Format | Required | Description                                               |
  | -------------- | ------------------------------- | ------ | -------- | --------------------------------------------------------- |
  | `ExternalData` |                                 | object | Yes      | Information about the external processed transaction      |
  |                | `ExternalProcessingDate`        | date   | Yes      | The date at which the cancel was created                  |
  |                | `ExternalProviderReference`     | string | Yes      | The unique identifier of the cancel at the provider level |
  |                | `ExternalMerchantReference`     | string | No       | The unique identifier of the cancel at the merchant level |
  |                | `ExternalProviderName`          | string | No       | The name of the external provider processing the cancel   |
  |                | `ExternalProviderPaymentMethod` | string | No       | The name of the payment method used to process the cancel |
  ```jsx
  {
  	  "Id": "409f8d2e-9eba-48f9-8a52-dc9bda4d9041",
      "Amount": 10000,
      "AvailableAmountToSplit": 0,
      "Currency": "EUR",
      "PlatformFeesAmount": 0,
      "Status": "CANCELED",
      "ExternalData": {
          "ExternalProcessingDate": "03-10-2024",
          "ExternalProviderReference": "cancel-stripe-d5fad854-117c-4b1a-bf15-d8e2846749c7",
          "ExternalMerchantReference": "cancel-order-1d1d3c30-5f0f-4cda-ad0d-7ab3c315de3d",
          "ExternalProviderName": "Stripe",
          "ExternalProviderPaymentMethod": "PAYPAL"
      },
      "Buyer": {
          "Id": "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
      },
      "LineItems": [
        {
  		    "Id" : "1f395091-6b27-440f-8d38-39832cf1cfc9",
  		    "TotalLineItemAmount" : 7500,
  		    "CanceledAmount" : 7500,
  		    "CapturedAmount" : 0,
          "RefundedAmount" : 0,
          "DisputedAmount" : 0,
          "SplitAmount": 0
  	    },
  	    {
  		    "Id" : "1f12c4d5-d6ea-40f2-ac8e-bb3c8770918c",
  		    "TotalLineItemAmount" : 2500,
  		    "CanceledAmount" : 2500,
  		    "CapturedAmount" : 0,
          "RefundedAmount" : 0,
          "DisputedAmount" : 0,
          "SplitAmount": 0
  	    },
      ],
      "CreationDate": 1733329398,
      "ExecutionDate": 1733329423
  }
  ```
- **Partial Cancel**
  In this scenario, the cancellation is only performed for a subset of the original `LineItems`. As with intent creation, the following must be explicitly provided and correctly calculated:
  - `Amount`
  - `LineItems`
  - `ExternalData`
  ```jsx
  POST ../V3.0/{clientId}/payins/intents/{intentId}/cancel

  {
  	  "Amount" : 7500,
      "Currency" : "EUR",
      "PlatformFeesAmount" : 0,
      "ExternalData": {
  	    "ExternalProcessingDate": "03-10-2024",
        "ExternalProviderReference": "cancel-stripe-d5fad854-117c-4b1a-bf15-d8e2846749c7",
        "ExternalMerchantReference": "cancel-order-1d1d3c30-5f0f-4cda-ad0d-7ab3c315de3d",
        "ExternalProviderName": "Stripe",
        "ExternalProviderPaymentMethod": "PAYPAL"
      },
      "LineItems": [
         {
           "Id": "1f395091-6b27-440f-8d38-39832cf1cfc9",
           "Amount": 7500
         }

  }
  ```
  | Parameters     | Sub-Parameters                  | Format | Required | Description                                                     |
  | -------------- | ------------------------------- | ------ | -------- | --------------------------------------------------------------- |
  | `Amount`       |                                 | string | Yes      | An amount of money in the smallest sub-division of the currency |
  | `Currency`     |                                 | string | No       | The currency of the funds                                       |
  | `PlatformFees` |                                 | string | No       | Information about the fees                                      |
  | `ExternalData` |                                 | object | Yes      | Information about the external processed transaction            |
  |                | `ExternalProcessingDate`        | date   | Yes      | The date at which the cancel was created                        |
  |                | `ExternalProviderReference`     | string | Yes      | The unique identifier of the cancel at the provider level       |
  |                | `ExternalMerchantReference`     | string | No       | The unique identifier of the cancel at the merchant level       |
  |                | `ExternalProviderName`          | string | No       | The name of the external provider processing the cancel         |
  |                | `ExternalProviderPaymentMethod` | string | No       | The name of the payment method used to process the cancel       |
  | `LineItems`    |                                 | object | Yes      | Information about the items canceled in the transaction.        |
  |                | `Id`                            | string | yes      | The unique identifier of the LineItem in Mangopay ecosystem     |
  |                | `Amount`                        | string | Yes      | The item total amount to be canceled                            |
  Must be equal to the total `Amount` amount |
  ```jsx
  {
  	  "Id": "409f8d2e-9eba-48f9-8a52-dc9bda4d9041",
      "Amount": 10000,
      "AvailableAmountToSplit": 0,
      "Currency": "EUR",
      "PlatformFeesAmount": 0,
      "Status": "CANCELED",
      "ExternalData": {
          "ExternalProcessingDate": "03-10-2024",
          "ExternalProviderReference": "cancel-stripe-d5fad854-117c-4b1a-bf15-d8e2846749c7",
          "ExternalMerchantReference": "cancel-order-1d1d3c30-5f0f-4cda-ad0d-7ab3c315de3d",
          "ExternalProviderName": "Stripe",
          "ExternalProviderPaymentMethod": "PAYPAL"
      },
      "Buyer": {
          "Id": "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
      },
      "LineItems": [
        {
  		    "Id" : "1f395091-6b27-440f-8d38-39832cf1cfc9",
  		    "TotalLineItemAmount" : 7500,
  		    "CanceledAmount" : 7500,
  		    "CapturedAmount" : 0,
          "RefundedAmount" : 0,
          "DisputedAmount" : 0,
          "SplitAmount": 0
  	    }
      ],
      "CreationDate": 1733329398,
      "ExecutionDate": 1733329423
  }
  ```

### ✔️ Intent Update (subject to change)

<aside>
⚠️

The intent can only be updated when its status is **`AUTHORIZED`**

</aside>

```jsx
PUT ../V3.0/{clientId}/payins/intents/{intentId}

{
    "Amount" : 10500,
    "PlatformFeesAmount" : 0,
    "ExternalData": {
	    "ExternalProcessingDate": "15-06-2025",
      "ExternalProviderReference": "Stripe-eaffebdc-a2e3-442b-92ff-1fc482979c02",
      "ExternalMerchantReference": "Order-xyz-6e793a75-c7a6-4462-aabf-d530340bea25",
      "ExternalProviderName": "Hipay",
      "ExternalProviderPaymentMethod": "VISA"
    },
    "LineItems" : [
        {
            "Seller" : {
                "AuthorId" : "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                "WalletId" : "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                "FeesAmount" : 0,
                "TransferDate" : "13-11-2024"
            },
            "Id" : "1f395091-6b27-440f-8d38-39832cf1cfc9",
            "Sku" : "item-123456",
            "Name" : "item-name-change",
            "Description" : "item-description",
            "Quantity" : 1,
            "UnitAmount" : 8000,
            "TaxAmount" : 0,
            "DiscountAmount" : 0,
            "Category" : "DIGITAL_GOODS",
            "ShippingAddress" : {
                "AddressLine1" : "Loop Street2",
                "AddressLine2" : "Mangopay Ltd",
                "City" : "Paris",
                "Region" : "Ile de France",
                "PostalCode" : "75009",
                "Country" : "FR"
            }
        },
        {
            "Seller" : {
                "AuthorId" : "user_m_01JCGMCQ0FE3052HHFC5RV6C59",
                "WalletId" : "wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN",
                "FeesAmount" : 0,
                "TransferDate" : "13-11-2024"
            },
            "Id" : "1f12c4d5-d6ea-40f2-ac8e-bb3c8770918c",
            "Sku" : "item-789",
            "Name" : "item-name2-change",
            "Description" : "item-description2",
            "Quantity" : 1,
            "UnitAmount" : 2500,
            "TaxAmount" : 0,
            "DiscountAmount" : 0,
            "Category" : "PHYSICAL_GOODS",
            "ShippingAddress" : {
                "AddressLine1" : "Loop Street",
                "AddressLine2" : "Mangopay Ltd",
                "City" : "Paris",
                "Region" : "Ile de France",
                "PostalCode" : "75009",
                "Country" : "FR"
            }
        }
    ]
}
```

| Parameters     | Sub-Parameters                  | Sub-Sub-Parameters | Format | Required | Description                                                        |
| -------------- | ------------------------------- | ------------------ | ------ | -------- | ------------------------------------------------------------------ |
| `Amount`       |                                 |                    | string | No       | An amount of money in the smallest sub-division of the currency    |
| `PlatformFees` |                                 |                    | string | No       | Information about the fees                                         |
| `ExternalData` |                                 |                    | object | No       | Information about the external processed transaction               |
|                | `ExternalProcessingDate`        |                    | date   | No       | The date at which the transaction was created                      |
|                | `ExternalProviderReference`     |                    | string | No       | The unique identifier of the transaction at the provider level     |
|                | `ExternalMerchantReference`     |                    | string | No       | The unique identifier of the transaction at the merchant level     |
|                | `ExternalProviderName`          |                    | string | No       | The name of the external provider processing the transaction       |
|                | `ExternalProviderPaymentMethod` |                    | string | No       | The name of the payment method used to process the transaction     |
| `Buyer`        |                                 |                    | object | No       | Information about the buyer                                        |
|                | `Id`                            |                    |        | No       | The unique identifier of the user at the source of the transaction |

Must be a valid value |
| `LineItems` | | | object | No | Information about the items purchased in the transaction.

The total of all LineItems `UnitAmount`, `TaxAmount`, `DiscountAmount` must equal the `Amount` amount

The total of all LineItems `FeesAmount` mus equal the `PlatformFees` amount |
| | `Seller` | | object | No | Information about the seller involved in the transaction |
| | | `AuthorId` | string | No | The unique identifier of the seller providing the item

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `WalletId` | string | No | The unique identifier of the wallet to credit the seller funds

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `FeesAmount` | string | No | Information about the fees |
| | | `TransferDate` | date | No | Information about the date when the funds are to be transferred to the seller’s wallet |
| | `Id` | | string | Yes | The unique identifier of the item in Mangopay ecosystem |
| | `Sku` | | string | No | The unique identifier of the item |
| | `Name` | | string | No | The name of the item |
| | `Description` | | string | No | The description of the item |
| | `Quantity` | | string | No | The quantity of the item |
| | `UnitAmount` | | string | No | The cost of the item, excluding tax and discount |
| | `TaxAmount` | | string | No | The tax amount applied to the item |
| | `DiscountAmount` | | string | No | The discount amount applied to the item |
| | `Category` | | string | No | The item category |
| | `ShippingAddress` | | object | No | Information about the end user’s shipping address |
| | | `AddressLine1` | string | No | The first line of the address |
| | | `AddressLine2` | string | No | The second line of the address |
| | | `City` | string | No | The city of the address |
| | | `Region` | string | No | The region of the address |
| | | `PostalCode` | string | No | The postal code of the address |
| | | `Country` | string | No | The country of the address |

```jsx
{
    "Id": "int_0197a62a-cc09-7091-a97b-636cd905407a",
    "Amount": 10500,
    "AvailableAmountToSplit": 0,
    "Currency": "EUR",
    "PlatformFeesAmount": 0,
    "Status": "AUTHORIZED",
    "NextActions": "CAPTURED, PARTIALLY_CAPTURED, CANCELED",
    "ExternalData": {
        "ExternalProcessingDate": "15-06-2025",
        "ExternalProviderReference": "Stripe-eaffebdc-a2e3-442b-92ff-1fc482979c02",
        "ExternalMerchantReference": "Order-xyz-6e793a75-c7a6-4462-aabf-d530340bea25",
        "ExternalProviderName": "Hipay",
        "ExternalProviderPaymentMethod": "VISA"
    },
    "Buyer": {
        "Id": "user_m_01JYGMQ425Q6C2MT6R36M6MT60"
    },
    "LineItems": [
        {
            "Seller": {
                "AuthorId": "user_m_01JYGMPQHBHP4H5RE00ZHRMVSS",
                "WalletId": "wlt_m_01JYK2REAJ07T9E6WWFZFVN7XS",
                "FeesAmount": 0
            },
            "Id": "int_li_0197a62a-cc0d-72b4-b864-5ab379b6cc12",
            "Sku": "item-123456",
            "Name": "item-name-change",
            "Description": "item-description",
            "Quantity": 1,
            "UnitAmount": 8000,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "DIGITAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street2",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "CapturedAmount": 0,
            "RefundedAmount": 0,
            "DisputedAmount": 0,
            "SplitAmount": 0,
            "TotalLineItemAmount": 8000
        },
        {
            "Seller": {
                "AuthorId": "user_m_01JYGMPTHE0KRVVRR62EJSKC4E",
                "WalletId": "wlt_m_01JYGMPZ0JYCY5AE89Y2SY7ABJ",
                "FeesAmount": 0
            },
            "Id": "int_li_0197a62a-cc0d-72b4-b864-5ab379b6cc13",
            "Sku": "item-789",
            "Name": "item-name2-change",
            "Description": "item-description2",
            "Quantity": 1,
            "UnitAmount": 2500,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "PHYSICAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "CapturedAmount": 0,
            "RefundedAmount": 0,
            "DisputedAmount": 0,
            "SplitAmount": 0,
            "TotalLineItemAmount": 2500
        }
    ],
    "CreationDate": 1750839512,
    "ExecutionDate": 1750840519
}
```

### ❌ Intent Refund

### Create Refund

- **Full Refund**
  In this scenario, the refund is performed for the full amount available to be split. The following fields are derived from the intent and therefore do not need to be provided again:
  - `Amount`
  - `Currency`
  - `LineItems`
  ```jsx
  POST ../V3.0/{clientId}/payins/intents/{intentId}/refunds

  {
  	"ExternalData" : {
  		"ExternalProcessingDate" : "03-10-2024",
  		"ExternalProviderReference" : "refund-stripe-5b072ec9-4679-4017-9228-a05cfffbe1af",
  		"ExternalMerchantReference" : "refund-order-5b072ec9-4679-4017-9228-a05cfffbe1af",
  		"ExternalProviderName" : "Stripe",
  		"ExternalProviderPaymentMethod" : "PAYPAL"
  	}
  }
  ```
  | Parameters     | Sub-Parameters              | Format | Required | Description                                               |
  | -------------- | --------------------------- | ------ | -------- | --------------------------------------------------------- |
  | `ExternalData` |                             | object | Yes      | Information about the external processed refund           |
  |                | `ExternalProcessingDate`    | date   | Yes      | The date at which the refund was created                  |
  |                | `ExternalProviderReference` | string | Yes      | The unique identifier of the refund at the provider level |
  |                | `ExternalMerchantReference` | string | No       | The unique identifier of the refund at the merchant level |
  |                | `ExternalProviderName`      | string | No       | The name of the external provider processing the refund   |
  If provided but differs from the original intent, it will be ignored |
  | | `ExternalProviderPaymentMethod` | string | No | The name of the payment method used to process the refund |
  ```jsx
  {
      "Id": "f18d6512-8aaa-4502-8986-4abd0a87fe18",
      "Amount": 10000,
      "AvailableAmountToSplit": 0,
      "Currency": "EUR",
      "PlatformFeesAmount": 0,
      "Status": "REFUNDED",
      "NextActions": "REFUND_REVERSED",
  		"ExternalData" : {
  			"ExternalProcessingDate" : "03-10-2024",
  			"ExternalProviderReference" : "refund-stripe-5b072ec9-4679-4017-9228-a05cfffbe1af",
  			"ExternalMerchantReference" : "refund-order-5b072ec9-4679-4017-9228-a05cfffbe1af",
  			"ExternalProviderName" : "Stripe",
  			"ExternalProviderPaymentMethod" : "PAYPAL"
  		},
      "Buyer": {
          "Id": "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
      },
      "Refund": {
          "Id": "b4938f0c-ae60-414b-8b70-47e8557ce001"
      },
      "LineItems" : [
  	    {
  		    "Id" : "1f395091-6b27-440f-8d38-39832cf1cfc9",
  		    "TotalLineItemAmount" : 7500,
  		    "CanceledAmount" : 0,
  		    "CapturedAmount" : 7500,
          "RefundedAmount" : 7500,
          "DisputedAmount" : 0,
          "SplitAmount": 0
  	    },
  	    {
  		    "Id" : "1f12c4d5-d6ea-40f2-ac8e-bb3c8770918c",
  		    "TotalLineItemAmount" : 2500,
  		    "CanceledAmount" : 0,
  		    "CapturedAmount" : 2500,
          "RefundedAmount" : 2500,
          "DisputedAmount" : 0,
          "SplitAmount": 0
  	    },
      ],
      "CreationDate": 1731430090,
      "ExecutionDate": 1731430322
  }
  ```
- **Partial Refund**
  In this scenario, the refund is only performed for a subset of the captured `LineItems`. As with intent creation, the following must be explicitly provided and correctly calculated:
  - `Amount`
  - `LineItems`
  - `ExternalData`
  ```jsx
  POST ../V3.0/{clientId}/payins/intents/{intentId}/refunds

  {
  	"Amount" : 7500,
  	"Currency" : EUR,
  	"PlatformFeesAmount" : 0,
  	"ExternalData" : {
  		"ExternalProcessingDate" : "03-10-2024",
  		"ExternalProviderReference" : "refund-stripe-5b072ec9-4679-4017-9228-a05cfffbe1af",
  		"ExternalMerchantReference" : "refund-order-5b072ec9-4679-4017-9228-a05cfffbe1af",
  		"ExternalProviderName" : "Stripe",
  		"ExternalProviderPaymentMethod" : "PAYPAL"
  	},
  	"LineItems" : [
  		{
  			"Id" : "1f395091-6b27-440f-8d38-39832cf1cfc9",
  			"Amount" : 7500
  		}
  	]
  }
  ```
  | Parameters | Sub-Parameters | Sub-Sub-Parameters | Format | Required | Description                                                     |
  | ---------- | -------------- | ------------------ | ------ | -------- | --------------------------------------------------------------- |
  | `Amount`   |                |                    | string | Yes      | An amount of money in the smallest sub-division of the currency |
  The `Amount` must be lower or equal to the `AvailableAmountToSplit` |
  | `Currency` | | | string | No | The currency of the funds |
  | `PlatformFees` | | | string | No | Information about the fees |
  | `ExternalData` | | | object | Yes | Information about the external processed refund |
  | | `ExternalProcessingDate` | | date | Yes | The date at which the refund was created |
  | | `ExternalProviderReference` | | string | Yes | The unique identifier of the refund at the provider level |
  | | `ExternalMerchantReference` | | string | No | The unique identifier of the refund at the merchant level |
  | | `ExternalProviderName` | | string | Yes | The name of the external provider processing the refund |
  | | `ExternalProviderPaymentMethod` | | string | No | The name of the payment method used to process the refund |
  | `LineItems` | | | object | Yes | Information about the items refunded |
  | | `Id` | | string | Yes | The unique identifier of the item in Mangopay ecosystem |
  | | `Amount` | | string | Yes | The item total amount to be refunded
  Must be equal to the total `Amount` amount |
  ```jsx
   {
      "Id": "f18d6512-8aaa-4502-8986-4abd0a87fe18",
      "Amount": 10000,
      "AvailableAmountToSplit": 2500,
      "Currency": "EUR",
      "PlatformFeesAmount": 0,
      "Status": "REFUNDED",
      "NextActions": "REFUND_REVERSED",
  		"ExternalData" : {
  			"ExternalProcessingDate" : "03-10-2024",
  			"ExternalProviderReference" : "refund-stripe-5b072ec9-4679-4017-9228-a05cfffbe1af",
  			"ExternalMerchantReference" : "refund-order-5b072ec9-4679-4017-9228-a05cfffbe1af",
  			"ExternalProviderName" : "Stripe",
  			"ExternalProviderPaymentMethod" : "PAYPAL"
  		},
      "Buyer": {
          "Id": "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
      },
      "Refund": {
          "Id": "b4938f0c-ae60-414b-8b70-47e8557ce001"
      },
      "LineItems" : [
  	    {
  		    "Id" : "1f395091-6b27-440f-8d38-39832cf1cfc9",
  		    "TotalLineItemAmount" : 7500,
  		    "CanceledAmount" : 0,
  		    "CapturedAmount" : 7500,
          "RefundedAmount" : 7500,
          "DisputedAmount" : 0,
          "SplitAmount": 0
  	    }
      ],
      "CreationDate": 1731430090,
      "ExecutionDate": 1731430322
  }
  ```

### Reverse Refund

- **Full Reversal**
- **Partial Reversal**

```jsx
POST ../V3.0/{clientId}/payins/intents/{intentId}/refunds/{refundId}/reverse

{
    "Amount" : 10500,
    "Currency" : "EUR",
    "PlatformFeesAmount" : 0,
        "LineItems" : [
        {
            "Seller" : {
                "AuthorId" : "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                "WalletId" : "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                "FeesAmount" : 0,
                "TransferDate" : "13-11-2024"
            },
            "Id": "e406ef23-7743-4c41-914e-4b68a4c2add9",
            "Sku" : "item-123456",
            "Name" : "item-name",
            "Description" : "item-description",
            "Quantity" : 1,
            "UnitAmount" : 7000,
            "TaxAmount" : 0,
            "DiscountAmount" : 0,
            "TotalLineItemAmount" : 7000,
            "Category" : "DIGITAL_GOODS",
            "ShippingAddress" : {
                "AddressLine1" : "Loop Street",
                "AddressLine2" : "Mangopay Ltd",
                "City" : "Paris",
                "Region" : "Ile de France",
                "PostalCode" : "75009",
                "Country" : "FR"
            }
        },
        {
            "Seller" : {
                "AuthorId" : "user_m_01JCGMCQ0FE3052HHFC5RV6C59",
                "WalletId" : "wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN",
                "FeesAmount" : 0,
                "TransferDate" : "13-11-2024"
            },
            "Id": "e406ef23-7743-4c41-914e-4b68a4c2add9",
            "Sku" : "item-789",
            "Name" : "item-name2",
            "Description" : "item-description2",
            "Quantity" : 1,
            "UnitAmount" : 2500,
            "TaxAmount" : 0,
            "DiscountAmount" : 0,
            "TotalLineItemAmount" : 2500,
            "Category" : "PHYSICAL_GOODS",
            "ShippingAddress" : {
                "AddressLine1" : "Loop Street",
                "AddressLine2" : "Mangopay Ltd",
                "City" : "Paris",
                "Region" : "Ile de France",
                "PostalCode" : "75009",
                "Country" : "FR"
            }
        }
    ]
}
```

| Parameters | Sub-Parameters | Sub-Sub-Parameters | Format | Required | Description                                                     |
| ---------- | -------------- | ------------------ | ------ | -------- | --------------------------------------------------------------- |
| `Amount`   |                |                    | string | No       | An amount of money in the smallest sub-division of the currency |

The `Amount` must be lower or equal to the `RemainingAmount` |
| `Currency` | | | string | No | The currency of the funds |
| `PlatformFees` | | | string | No | Information about the fees |
| `LineItems` | | | object | No | Information about the items canceled

The total of all LineItems `UnitAmount`, `TaxAmount`, `DiscountAmount`, `TotalLineItemAmount` must equal the `Amount` amount

The total of all LineItems `FeesAmount` mus equal the `PlatformFees` amount |
| | `Seller` | | object | No | Information about the seller involved in the cancellation |
| | | `AuthorId` | string | No | The unique identifier of the seller providing the item

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `WalletId` | string | No | The unique identifier of the wallet to credit the seller funds

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `FeesAmount` | string | No | Information about the fees |
| | | `TransferDate` | date | No | Information about the date when the funds are to be transferred to the seller’s wallet

Must be a date in the future |
| | `Id` | | string | No | The unique identifier of the item in Mangopay ecosystem |
| | `Sku` | | string | No | The unique identifier of the item |
| | `Name` | | string | No | The name of the item |
| | `Description` | | string | No | The description of the item |
| | `Quantity` | | string | No | The quantity of the item |
| | `UnitAmount` | | string | No | The cost of the item, excluding tax and discount |
| | `TaxAmount` | | string | No | The tax amount applied to the item |
| | `DiscountAmount` | | string | No | The discount amount applied to the item |
| | `TotalLineItemAmount` | | string | No | The item total amount including tax and discount |
| | `Category` | | string | No | The item category |
| | `ShippingAddress` | | object | No | Information about the end user’s shipping address |
| | | `AddressLine1` | string | No | The first line of the address |
| | | `AddressLine2` | string | No | The second line of the address |
| | | `City` | string | No | The city of the address |
| | | `Region` | string | No | The region of the address |
| | | `PostalCode` | string | No | The postal code of the address |
| | | `Country` | string | No | The country of the address |

```jsx
{
    "Id": "184293c5-0d94-43b8-a810-127ab45c8bd1",
    "Amount": 10500,
    "RemainingAmount": 10500,
    "Currency": "EUR",
    "PlatformFeesAmount": 0,
    "Status": "REFUND_REVERSED",
    "ExternalData": {
        "ExternalProcessingDate": "01-10-2024",
        "ExternalProviderReference": "Stripe-6910fb74-db81-4b88-b976-e0685e3d963a",
        "ExternalMerchantReference": "Order-xyz-163c6c22-3ae7-4d28-afe5-69daaec74a25",
        "ExternalProviderName": "Stripe",
        "ExternalProviderPaymentMethod": "PAYPAL"
    },
    "Buyer": {
        "Id": "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
    },
    "LineItems": [
        {
            "Seller": {
                "AuthorId": "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                "WalletId": "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                "FeesAmount": 0,
                "TransferDate": "13-11-2024"
            },
            "Id": "1fba7359-eff7-46d1-aaf5-952084aa3153",
            "Sku": "item-123456",
            "Name": "item-name-change",
            "Description": "item-description",
            "Quantity": 1,
            "UnitAmount": 8000,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "DIGITAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "TotalLineItemAmount": 8000
        },
        {
            "Seller": {
                "AuthorId": "user_m_01JCGMCQ0FE3052HHFC5RV6C59",
                "WalletId": "wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN",
                "FeesAmount": 0,
                "TransferDate": "13-11-2024"
            },
            "Id": "e406ef23-7743-4c41-914e-4b68a4c2add9",
            "Sku": "item-789",
            "Name": "item-name2-change",
            "Description": "item-description2",
            "Quantity": 1,
            "UnitAmount": 2500,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "PHYSICAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "TotalLineItemAmount": 2500
        }
    ],
    "CreationDate": 1731431176,
    "ExecutionDate": 1731431199
}
```

### ❌ Intent Dispute

### Create Dispute

```jsx
POST ../V3.0/{clientId}/payins/intents/{intentId}/captures/{captureId}/disputes

{
    "Amount" : 10500,
    "Currency" : "EUR",
    "PlatformFeesAmount" : 0,
    "ExternalData" : {
        "ExternalProcessingDate" : "03-10-2024",
        "ExternalProviderReference" : "dispute-stripe-123456",
        "ExternalMerchantReference" : "dispute-order-123456",
        "ExternalProviderName" : "STRIPE",
        "ExternalProviderPaymentMethod" : "PAYPAL"
    }
}
```

| Parameters | Sub-Parameters | Sub-Sub-Parameters | Format | Required | Description                                                     |
| ---------- | -------------- | ------------------ | ------ | -------- | --------------------------------------------------------------- |
| `Amount`   |                |                    | string | No       | An amount of money in the smallest sub-division of the currency |

The `Amount` must be lower or equal to the `RemainingAmount`

Must be specified if the refund is partial |
| `Currency` | | | string | No | The currency of the funds |
| `PlatformFees` | | | string | No | Information about the fees |
| `ExternalData` | | | object | Yes | Information about the external processed refund |
| | `ExternalProcessingDate` | | date | Yes | The date at which the refund was created |
| | `ExternalProviderReference` | | string | Yes | The unique identifier of the refund at the provider level |
| | `ExternalMerchantReference` | | string | No | The unique identifier of the refund at the merchant level |
| | `ExternalProviderName` | | string | Yes | The name of the external provider processing the refund |
| | `ExternalProviderPaymentMethod` | | string | No | The name of the payment method used to process the refund |
| `Buyer` | | | object | No | Information about the buyer |
| | `Id` | | string | No | The unique identifier of the user at the source of the refund

Must be a valid value |
| `LineItems` | | | object | No | Information about the items refunded

The total of all LineItems `UnitAmount`, `TaxAmount`, `DiscountAmount`, `TotalLineItemAmount` must equal the `Amount` amount

The total of all LineItems `FeesAmount` mus equal the `PlatformFees` amount

Must be specified if the refund is partial |
| | `Seller` | | object | No | Information about the seller involved in the refund |
| | | `AuthorId` | string | No | The unique identifier of the seller providing the item

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `WalletId` | string | No | The unique identifier of the wallet to credit the seller funds

One valid value must be sent between `AuthorId` & `WalletId` |
| | | `FeesAmount` | string | No | Information about the fees |
| | | `TransferDate` | date | No | Information about the date when the funds are to be transferred to the seller’s wallet

Must be a date in the future |
| | `Id` | | string | No | The unique identifier of the item in Mangopay ecosystem

Must be specified if the refund is partial |
| | `Sku` | | string | No | The unique identifier of the item |
| | `Name` | | string | No | The name of the item |
| | `Description` | | string | No | The description of the item |
| | `Quantity` | | string | No | The quantity of the item

Must be specified if the refund is partial |
| | `UnitAmount` | | string | No | The cost of the item, excluding tax and discount

Must be specified if the refund is partial |
| | `TaxAmount` | | string | No | The tax amount applied to the item |
| | `DiscountAmount` | | string | No | The discount amount applied to the item |
| | `TotalLineItemAmount` | | string | No | The item total amount including tax and discount |
| | `Category` | | string | No | The item category |
| | `ShippingAddress` | | object | No | Information about the end user’s shipping address |
| | | `AddressLine1` | string | No | The first line of the address |
| | | `AddressLine2` | string | No | The second line of the address |
| | | `City` | string | No | The city of the address |
| | | `Region` | string | No | The region of the address |
| | | `PostalCode` | string | No | The postal code of the address |
| | | `Country` | string | No | The country of the address |

```jsx
{
    "Id": "86947dac-ab9e-4047-b2a1-b59fb53888e4",
    "Amount": 10500,
    "Currency": "EUR",
    "PlatformFeesAmount": 0,
    "Status": "DISPUTED",
    "NextActions": "DISPUTED_WON, DISPUTED_LOST, DEFENDED",
    "ExternalData": {
        "ExternalProcessingDate": "03-10-2024",
        "ExternalProviderReference": "dispute-stripe-e475be3c-3e7e-49f6-894b-66f4b85db1c3",
        "ExternalMerchantReference": "dispute-order-efb5079a-cafe-4825-a3e7-433ca284ba4b",
        "ExternalProviderName": "STRIPE",
        "ExternalProviderPaymentMethod": "PAYPAL"
    },
    "Buyer": {
        "Id": "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
    },
    "Dispute": {
        "Id": "459cfbd3-815c-4c2e-b886-a4706fefbb11"
    },
    "LineItems": [
        {
            "Seller": {
                "AuthorId": "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                "WalletId": "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                "FeesAmount": 0,
                "TransferDate": "13-11-2024"
            },
            "Id": "5bc59e90-447f-4921-bc43-bd247574d2b3",
            "Sku": "item-123456",
            "Name": "item-name-change",
            "Description": "item-description",
            "Quantity": 1,
            "UnitAmount": 8000,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "DIGITAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "TotalLineItemAmount": 8000
        },
        {
            "Seller": {
                "AuthorId": "user_m_01JCGMCQ0FE3052HHFC5RV6C59",
                "WalletId": "wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN",
                "FeesAmount": 0,
                "TransferDate": "13-11-2024"
            },
            "Id": "3f4edece-7589-492f-bac5-26c13d204755",
            "Sku": "item-789",
            "Name": "item-name2-change",
            "Description": "item-description2",
            "Quantity": 1,
            "UnitAmount": 2500,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "PHYSICAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "TotalLineItemAmount": 2500
        }
    ],
    "CreationDate": 1731430625,
    "ExecutionDate": 1731430675
}
```

### 🚧 Update Dispute Outcome

```jsx
PUT ../V3.0/{clientId}/payins/intents/{intentId}/captures/{captureId}/disputes/{disputeId}/decision

{
    "Decision" : "DISPUTED_LOST"
}
```

```jsx

```

### ✔️ Get Intent

```jsx
GET ../V3.0/{clientId}/payins/intents/{intentId}
```

```jsx
{
    "Id": "int_0197557e-ad9b-7bfe-8ec3-e04ecf38fbde",
    "Amount": 10500,
    "AvailableAmountToSplit": 0,
    "Currency": "EUR",
    "PlatformFeesAmount": 0,
    "Status": "CAPTURED",
    "NextActions": "REFUNDED, DISPUTED",
    "ExternalData": {
        "ExternalProcessingDate": "09-06-2025",
        "ExternalProviderReference": "Stripe-f03f30fc-785f-4519-ba26-ab318d3cf800",
        "ExternalMerchantReference": "Order-xyz-58bc4c49-b769-45fa-8047-ebe3fa5ef8c5",
        "ExternalProviderName": "Stripe",
        "ExternalProviderPaymentMethod": "PAYPAL"
    },
    "Buyer": {
        "Id": "user_m_01JXAGB6FT0HB9FF1S5XQCX43N"
    },
    "LineItems": [
        {
            "Seller": {
                "AuthorId": "user_m_01JXAFYJQEERWRZC5055SQ02NC",
                "WalletId": "wlt_m_01JXAG10G5YJVBBMJDEZJQE0FS",
                "FeesAmount": 0
            },
            "Id": "int_li_0197557e-ad9d-7867-81a3-76f8710e1180",
            "Sku": "item-123456",
            "Name": "item-name-change",
            "Description": "item-description",
            "Quantity": 1,
            "UnitAmount": 8000,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "DIGITAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "CanceledAmount" : 0,
            "CapturedAmount": 8000,
            "RefundedAmount": 0,
            "DisputedAmount": 0,
            "SplitAmount": 8000,
            "TotalLineItemAmount": 8000
        },
        {
            "Seller": {
                "AuthorId": "user_m_01JXAG0X7TM71X8ZDXSENNF5WN",
                "WalletId": "wlt_m_01JXAG12XAN7EW8PRYQV51DNTJ",
                "FeesAmount": 0
            },
            "Id": "int_li_0197557e-ad9d-7867-81a3-76f8710e1181",
            "Sku": "item-789",
            "Name": "item-name2-change",
            "Description": "item-description2",
            "Quantity": 1,
            "UnitAmount": 2500,
            "TaxAmount": 0,
            "DiscountAmount": 0,
            "Category": "PHYSICAL_GOODS",
            "ShippingAddress": {
                "AddressLine1": "Loop Street",
                "AddressLine2": "Mangopay Ltd",
                "City": "Paris",
                "Region": "Ile de France",
                "PostalCode": "75009",
                "Country": "FR"
            },
            "CanceledAmount" : 0,
            "CapturedAmount": 2500,
            "RefundedAmount": 0,
            "DisputedAmount": 0,
            "SplitAmount": 2500,
            "TotalLineItemAmount": 2500
        }
    ],
    "Captures": [
        {
            "Id": "int_capture_0197557e-c791-70a5-95be-b520c89b8292",
            "Amount": 10500,
            "Status": "PAID",
            "LineItems": [
                {
                    "Id": "int_li_0197557e-c796-7712-b666-aa1c4d83d2f2",
                    "Amount": 8000
                },
                {
                    "Id": "int_li_0197557e-c796-7712-b666-aa1c4d83d2f3",
                    "Amount": 2500
                }
            ],
            "CreationDate": 1749486061,
            "ExecutionDate": 1749486851
        }
    ],
    "Refunds": [],
    "Disputes": [],
    "Splits": [
        {
            "Id": "int_split_01975581-628c-73cc-8dc9-9667d0ca9715",
            "Amount": 2500,
            "Status": "COMPLETED",
            "LineItems": [
                {
                    "Id": "int_li_0197557e-ad9d-7867-81a3-76f8710e1181",
                    "Amount": 2500
                }
            ],
            "CreationDate": 1749486232,
            "ExecutionDate": 1749486851
        },
        {
            "Id": "int_split_01975581-628c-73cc-8dc9-9667d0ca9714",
            "Amount": 8000,
            "Status": "COMPLETED",
            "LineItems": [
                {
                    "Id": "int_li_0197557e-ad9d-7867-81a3-76f8710e1180",
                    "Amount": 8000
                }
            ],
            "CreationDate": 1749486232,
            "ExecutionDate": 1749487015
        }
    ],
    "CreationDate": 1749486054,
    "ExecutionDate": 1749486232,
    "SettlementId": "int_stlmnt_01975582-2b19-7699-aaf3-a8167936254f"
}
```

### ✔️ Settlement

### 🧩 File Requirements

- **File type:** `.csv`
- **Delimiter:** Comma `,`
- **Max file size:** TBD

### 🛑 Mandatory Fields

<aside>
💡

All mandatory fields must be present and non-empty in every row or the file will be rejected. The parser identifies columns by their headers, not their position.

| ExternalTransactionStatus | Description                                                                       | ExternalTransactionType |
| ------------------------- | --------------------------------------------------------------------------------- | ----------------------- |
| `SETTLED`                 | Payment successfully processed; funds are expected to be received                 | `PAYMENT`               |
| `REFUNDED`                | Refund fully processed; funds have been returned to the consumer                  | `REFUND`                |
| `REFUND_REVERSED`         | Refund processed but reversed; funds have been returned to the merchant           | `REFUND`                |
| `DISPUTED`                | Funds deduced due to a dispute; not available for settlement                      | `DISPUTE`               |
| `DEFENDED`                | Funds temporarily returned to the merchant as part of the dispute defense process | `DISPUTE`               |
| `DISPUTED_WON`            | Dispute resolved in favor of the merchant                                         | `DISPUTE`               |
| `DISPUTED_LOST`           | Dispute resolved against the merchant; funds permanently withdrawn                | `DISPUTE`               |

</aside>

| Column Name                 | Description                                                  | Format | Example             |
| --------------------------- | ------------------------------------------------------------ | ------ | ------------------- |
| `ExternalProviderReference` | The unique identifier of a transaction at the acquirer level | string | `6TU984332A894613W` |
| `ExternalTransactionType`   | The type of transaction                                      |

• `PAYMENT`
• `REFUND`
• `DISPUTE` | string | `PAYMENT` |
| `ExternalTransactionStatus` | The status of the transaction in Mangopay format
• `SETTLED`
• `REFUNDED`
• `REFUND_REVERSED`
• `DISPUTED`
• `DEFENDED`
• `DISPUTED_WON`
• `DISPUTED_LOST` | string | `SETTLED` |
| `ExternalProcessingDate` | The date at which the transaction was created | date (DD-MM-YYYY) | `19-06-2025` |
| `Amount` | The amount of the transaction in minor unit | string | `50000` (500) |
| `Currency` | The currency of the transaction | string | `EUR` |

| Footer Line Name                                                                                          | Description                                                                               | Format            | Example      |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------- | ------------ |
| `SettlementDate`                                                                                          | The creation date of the settlement from the provider                                     | date (DD-MM-YYYY) | `19-06-2025` |
| `ExternalProviderName`                                                                                    | The name of the third-party provider that generated the settlement file                   | string            | `PAYPAL`     |
| `TotalSettlementFeesAmount`                                                                               | The total fee amount withheld by the external provider from the settlement in minor unit. |
| This amount should match the sum of all ExternalProviderFees values across the file, if they are provided | string                                                                                    | `500`             |
| `TotalSettlementAmount`                                                                                   | Net settlement amount in minor unit                                                       |
| SUM(LinesAmount) - TotalSettlementFeesAmount                                                              | string                                                                                    | `50000`           |

### 🪄 Optional Fields

| Column Name                | Description                                                                | Format | Example |
| -------------------------- | -------------------------------------------------------------------------- | ------ | ------- |
| `ExternalInitialReference` | The unique identifier of the original transaction at the acquirer’s level. |

Required only when `ExternalTransactionType` is `REFUND` or `DISPUTE` | string | `6TU984332A894617S` |
| `ExternalProviderFees` | The fee amount withheld by the external provider for the transaction in minor unit | string | `150` |

| Footer Line Name     | Description             | Format | Example |
| -------------------- | ----------------------- | ------ | ------- |
| `SettlementCurrency` | The settlement currency | string | `EUR`   |

### 📦 Sample CSV FIle

```makefile
IntentId,ExternalProviderReference,ExternalPaymentMethod,ExternalTransactionType,ExternalTransactionStatus,ExternalProcessingDate,Amount,Currency,ExternalInitialReference,ExternalProviderFees
int_01978259-e06b-758c-8cd5-888cee9dd669,6TU984332A894613W,PAYPAL,PAYMENT,SETTLED,19-06-2025,100000,EUR,,100
int_01978259-e06b-758c-8cd5-888cee9dd670,6TU984332A894617S,PAYPAL,REFUND,REFUNDED,19-06-2025,25000,EUR,6TU984332A894613W,100
int_01978259-e06b-758c-8cd5-888cee9dd671,PP-R-KKK-499202217,PAYPAL,DISPUTE,DISPUTED,19-06-2025,25000,EUR,6TU984332A894613W,300
,,,,,,,,,
SettlementDate,19-06-2025,,,,,,,,
ExternalProviderName,Paypal,,,,,,,,
TotalSettlementFeesAmount,500,,,,,,,,
TotalSettlementAmount,50000,,,,,,,,
SettlementCurrency,EUR,,,,,,,,
```

[🧪 You can download this CSV sample](%5BWIP%5D%20Pay-in%20Connector%20-%20Integration%20Guide%2003bec974a8e6462e9543f1233cc27a74/Echo_Settlement_Sample.csv)

🧪 You can download this CSV sample

### Upload Settlement

```jsx
curl -X POST ".../v3.0/{clientId}/payins/intents/settlements" \
-H "Authorization: Bearer token" \
-H "Content-Type: multipart/form-data" \
-F "file=@/path/to/your/file.csv"
```

| Parameter | Format | Required | Description                                                                                                                     |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| file      | string | Yes      | The settlement file provided by the external payment provider, formatted to comply with Mangopay’s generic settlement structure |

```jsx
{
    "SettlementId": "int_stlmnt_019778c1-fe45-7864-8d2c-c2394e0f105c",
    "Status": "UPLOADED",
    "CreationDate": 1750077669,
    "DeclaredIntentAmount": 0,
    "ExternalProcessorFeesAmount": 0,
    "ActualSettlementAmount": 0,
    "FundsMissingAmount": 0
}
```

### Get Settlement

```jsx
GET .../V3.0/{clientId}/payins/intents/settlements/{settlementId}
```

```jsx
{
    "SettlementId": "int_stlmnt_019778c1-fe45-7864-8d2c-c2394e0f105c",
    "Status": "PENDING_FUNDS_RECEPTION",
    "CreationDate": 1750077669,
    "SettlementDate": "2025-06-11",
    "ExternalProviderName": "Stripe",
    "DeclaredIntentAmount": 10500,
    "ExternalProcessorFeesAmount": 0,
    "ActualSettlementAmount": 10500,
    "FundsMissingAmount": 0
}
```

```jsx
{
    "SettlementId": "int_stlmnt_019778c1-fe45-7864-8d2c-c2394e0f105c",
    "Status": "RECONCILED",
    "CreationDate": 1750077669,
    "SettlementDate": "2025-06-11",
    "ExternalProviderName": "Stripe",
    "DeclaredIntentAmount": 10500,
    "ExternalProcessorFeesAmount": 0,
    "ActualSettlementAmount": 10500,
    "FundsMissingAmount": 0
}
```

### Update Settlement

```jsx
curl -X PUT ".../v3.0/{clientId}/payins/intents/settlements/{settlementId}" \
-H "Authorization: Bearer token" \
-H "Content-Type: multipart/form-data" \
-F "file=@/path/to/your/file.csv"
```

| Parameter | Format | Required | Description                                                                                                                     |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| file      | string | Yes      | The settlement file provided by the external payment provider, formatted to comply with Mangopay’s generic settlement structure |

```jsx
{
    "SettlementId": "int_stlmnt_019778c1-fe45-7864-8d2c-c2394e0f105c",
    "Status": "UPLOADED",
    "CreationDate": 1750077669,
    "DeclaredIntentAmount": 0,
    "ExternalProcessorFeesAmount": 0,
    "ActualSettlementAmount": 0,
    "FundsMissingAmount": 0
}
```

### ❌ Splits

### Create Split

```jsx
PUT ../V3.0/{clientId}/payins/intents/{intentId}/splits

{
    "Splits" : [
        {
            "LineItemId" : "2422f4fe-8cef-4930-bb21-22bb8eca507f",
            "SplitAmount" : 8000,
            "FeesAmount" : 0,
            "TransferDate" : "20-03-2025",
            "Description" : "A transfer description"
        },
        {
            "LineItemId" : "9abb1ce7-e4de-48c0-a09a-fa5909a43974",
            "SplitAmount" : 2500,
            "FeesAmount" : 0,
            "TransferDate" : "20-03-2025",
            "Description" : "A transfer description second after the other one"
        }
    ]
}
```

| Parameters | Sub-Parameters | Format | Required | Description                                                |
| ---------- | -------------- | ------ | -------- | ---------------------------------------------------------- |
| Splits     |                | object | Yes      | Information about the amount to split to the beneficiaries |
|            | LineItemsId    | string | Yes      | The unique identifier of the item                          |
|            | SplitAmount    | string | No       | Information about the amount to be splitted                |

The total of all Splits `SplitAmount` must be lower or equal to the `TotalLineItemAmount` from the intent
If no `SplitAmount` provided, the `TotalLineItemAmount` is totally splitted |
| | FeesAmount | string | No | Information about the fees

The total of all Splits `FeesAmount` must be lower or equal to the `PlatformFeesAmount` from the intent |
| | TransferDate | date | No | Information about the date when the funds are to be transferred to the seller’s wallet

Must be a date in the future |
| | Description | string | No | The description of the split |

```jsx

```

### 🚧 Release Split

### 🚧 Reverse Split

### 🚧 Get Split

### Tests

### ❌ Reporting

### Intents & Actions

- **Intents**
  ```jsx
  POST ../v2.01/{clientId}/reporting/reports

  {
  	"Tag" : "Custom meta",
  	"DownloadFormat" : "CSV",
  	"BeforeDate" : 1749651150,
  	"AfterDate" : 1735744350,
  	"ReportType" : "ECHO_INTENT_REPORT",
  	"Filters" : {
  		"Status" : "CAPTURED",
  		"Type" : "PAYIN",
  		"PaymentMethod" : "PAYPAL",
  		"CreatedDate" : 1750068713
  	},
  	"Column" : [
  		"Id",
  		"Status",
  		"Amount",
  		"Currency",
  		"FeesAmount",
  		"FeesCurrency",
  		"Type",
  		"PaymentMethod",
  		"BuyerId",
  		"SellerId"
  	]
  }
  ```
- **Actions**

### Settlements

### Splits

### ❌ Scenarios

- **Mirakl Connector**
- **Platform operating 3P volumes**
  - **Standard sale fund allocation including 3P volume**
    _“A marketplace processes €500 payment volume via its external provider, allocating funds to sellers and the platform commission using splits”_
    - **Intent**
      ```jsx
      POST ../V3.0/{clientId}/payins/intents

      {
          "Amount" : 50000,
          "Currency" : "EUR",
          "PlatformFeesAmount" : 0,
          "ExternalData" : {
              "ExternalProcessingDate" : "01-03-2025",
              "ExternalProviderReference" : "Stripe-26dec3ae-5e92-4346-a02e-543c93b8fcb1",
              "ExternalMerchantReference" : "Order-xyz-35e8490e-2ec9-4c82-978e-c712a3f5ba16",
              "ExternalProviderName" : "Stripe",
              "ExternalProviderPaymentMethod" : "PAYPAL"
          },
          "Buyer" : {
              "Id" : "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
          },
          "LineItems" : [
              {
                  "Seller" : {
                      "AuthorId" : "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                      "WalletId" : "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                      "FeesAmount" : 0,
                      "TransferDate" : "31-03-2025"
                  },
                  "Sku" : "ABC123-4567XYZ",
                  "Name" : "Wireless Bluetooth Headphones",
                  "Description" : "Enjoy clear sound and comfort with noise-canceling Bluetooth headphones, offering long battery life and an adjustable fit",
                  "Quantity" : 1,
                  "UnitAmount" : 35000,
                  "TaxAmount" : 0,
                  "DiscountAmount" : 0,
                  "TotalLineItemAmount" : 35000,
                  "Category" : "PHYSICAL_GOODS",
                  "ShippingAddress" : {
                      "AddressLine1" : "Loop Street",
                      "AddressLine2" : "Mangopay Ltd",
                      "City" : "Paris",
                      "Region" : "Ile de France",
                      "PostalCode" : "75009",
                      "Country" : "FR"
                  }
              },
              {
                  "Seller" : {
                      "AuthorId" : "user_m_01JCGMCQ0FE3052HHFC5RV6C59",
                      "WalletId" : "wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN",
                      "FeesAmount" : 0,
                      "TransferDate" : "31-03-2025"
                  },
                  "Sku" : "XJ9-8724LMQ",
                  "Name" : "Portable Power Bank 10000mAh",
                  "Description" : "Compact 10000mAh power bank for fast charging of smartphones and tablets, perfect for travel and outdoor use",
                  "Quantity" : 1,
                  "UnitAmount" : 15000,
                  "TaxAmount" : 0,
                  "DiscountAmount" : 0,
                  "TotalLineItemAmount" : 15000,
                  "Category" : "PHYSICAL_GOODS",
                  "ShippingAddress" : {
                      "AddressLine1" : "Loop Street",
                      "AddressLine2" : "Mangopay Ltd",
                      "City" : "Paris",
                      "Region" : "Ile de France",
                      "PostalCode" : "75009",
                      "Country" : "FR"
                  }
              }
          ]
      }
      ```
      ```jsx
      POST ../V3.0/{clientId}/payins/intents/{intentId}/captures

      {}
      ```
    - **Funds Reception**
      ```jsx
      curl -X POST ".../V3.0/{clientId}/payins/intents/settlements" \
      -H "Authorization: Bearer token" \
      -F "file=@/17032025_generic_settlement_file.csv"
      ```
    - **Funds Split**
      ```jsx
      PUT ../V3.0/{clientId}/payins/intents/{intentId}/splits

      {
          "Splits" : [//75 allocated to platform commission wallet
              {
                  "LineItemId" : "2422f4fe-8cef-4930-bb21-22bb8eca507f",
                  "SplitAmount" : 35000,//300 allocated to wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ
                  "FeesAmount" : 5000,
                  "Description" : "A transfer description"
              },
              {
                  "LineItemId" : "9abb1ce7-e4de-48c0-a09a-fa5909a43974",
                  "SplitAmount" : 15000,//125 allocated to wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN
                  "FeesAmount" : 2500,
                  "Description" : "A transfer description second after the other one"
              }
          ]
      }
      ```
    - 🚧 **Split Execution**
      ```jsx

      ```
  - **Sales with refund adjustment fund allocation**
    _“A marketplace processes €500 payment volume and a €350 refund volume via its external provider, allocating funds to sellers and the platform commission using splits”_
    - **Intent**
      ```jsx
      POST ../V3.0/{clientId}/payins/intents

      {
          "Amount" : 50000,
          "Currency" : "EUR",
          "PlatformFeesAmount" : 0,
          "ExternalData" : {
              "ExternalProcessingDate" : "01-03-2025",
              "ExternalProviderReference" : "Stripe-26dec3ae-5e92-4346-a02e-543c93b8fcb1",
              "ExternalMerchantReference" : "Order-xyz-35e8490e-2ec9-4c82-978e-c712a3f5ba16",
              "ExternalProviderName" : "Stripe",
              "ExternalProviderPaymentMethod" : "PAYPAL"
          },
          "Buyer" : {
              "Id" : "user_m_01JCGBN7B7QG2YZ8ARA5J8WYMW"
          },
          "LineItems" : [
              {
                  "Seller" : {
                      "AuthorId" : "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                      "WalletId" : "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                      "FeesAmount" : 0,
                      "TransferDate" : "31-03-2025"
                  },
                  "Sku" : "ABC123-4567XYZ",
                  "Name" : "Wireless Bluetooth Headphones",
                  "Description" : "Enjoy clear sound and comfort with noise-canceling Bluetooth headphones, offering long battery life and an adjustable fit",
                  "Quantity" : 1,
                  "UnitAmount" : 35000,
                  "TaxAmount" : 0,
                  "DiscountAmount" : 0,
                  "TotalLineItemAmount" : 35000,
                  "Category" : "PHYSICAL_GOODS",
                  "ShippingAddress" : {
                      "AddressLine1" : "Loop Street",
                      "AddressLine2" : "Mangopay Ltd",
                      "City" : "Paris",
                      "Region" : "Ile de France",
                      "PostalCode" : "75009",
                      "Country" : "FR"
                  }
              },
              {
                  "Seller" : {
                      "AuthorId" : "user_m_01JCGMCQ0FE3052HHFC5RV6C59",
                      "WalletId" : "wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN",
                      "FeesAmount" : 0,
                      "TransferDate" : "31-03-2025"
                  },
                  "Sku" : "XJ9-8724LMQ",
                  "Name" : "Portable Power Bank 10000mAh",
                  "Description" : "Compact 10000mAh power bank for fast charging of smartphones and tablets, perfect for travel and outdoor use",
                  "Quantity" : 1,
                  "UnitAmount" : 15000,
                  "TaxAmount" : 0,
                  "DiscountAmount" : 0,
                  "TotalLineItemAmount" : 15000,
                  "Category" : "PHYSICAL_GOODS",
                  "ShippingAddress" : {
                      "AddressLine1" : "Loop Street",
                      "AddressLine2" : "Mangopay Ltd",
                      "City" : "Paris",
                      "Region" : "Ile de France",
                      "PostalCode" : "75009",
                      "Country" : "FR"
                  }
              }
          ]
      }
      ```
      ```jsx
      POST ../V3.0/{clientId}/payins/intents/{intentId}/captures

      {}
      ```
    - **Funds Reception**
      ```jsx
      curl -X POST ".../V3.0/{clientId}/payins/intents/settlements" \
      -H "Authorization: Bearer token" \
      -F "file=@/17032025_generic_settlement_file.csv"
      ```
    - **Funds Split**
      ```jsx
      PUT ../V3.0/{clientId}/payins/intents/{intentId}/splits

      {
          "Splits" : [//75 allocated to platform commission wallet
              {
                  "LineItemId" : "2422f4fe-8cef-4930-bb21-22bb8eca507f",
                  "SplitAmount" : 35000,//300 allocated to wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ
                  "FeesAmount" : 5000,
                  "Description" : "A transfer description"
              },
              {
                  "LineItemId" : "9abb1ce7-e4de-48c0-a09a-fa5909a43974",
                  "SplitAmount" : 15000,//125 allocated to wlt_m_01JCGMCVY6ZCAMNS89CGZT7EDN
                  "FeesAmount" : 2500,
                  "Description" : "A transfer description second after the other one"
              }
          ]
      }
      ```
    - **Refund Adjustment**
      - **Seller full refund coverage**
        ```jsx
        POST ../V3.0/{clientId}/payins/intents/{intentId}/refunds

        {
            "Amount" : 35000,
            "Currency" : "EUR",
            "PlatformFeesAmount" : 0,
            "ExternalData" : {
                "PSPProcessingDate" : "01-03-2025",
                "PSPReference" : "refund-stripe-5b072ec9-4679-4017-9228-a05cfffbe1af"
            },
                "LineItems" : [
                {
                    "Seller" : {
                        "AuthorId" : "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                        "WalletId" : "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                        "FeesAmount" : 0,
                        "TransferDate" : "31-03-2025"
                    },
                    "Sku" : "ABC123-4567XYZ",
                    "Name" : "Wireless Bluetooth Headphones",
                    "Description" : "Enjoy clear sound and comfort with noise-canceling Bluetooth headphones, offering long battery life and an adjustable fit",
                    "Quantity" : 1,
                    "UnitAmount" : 35000,
                    "TaxAmount" : 0,
                    "DiscountAmount" : 0,
                    "TotalLineItemAmount" : 35000,
                    "Category" : "PHYSICAL_GOODS",
                    "ShippingAddress" : {
                        "AddressLine1" : "Loop Street",
                        "AddressLine2" : "Mangopay Ltd",
                        "City" : "Paris",
                        "Region" : "Ile de France",
                        "PostalCode" : "75009",
                        "Country" : "FR"
                    }
                }
            ]
        }
        ```
      - **Seller and platform refund coverage**
        ```jsx
        POST ../V3.0/{clientId}/payins/intents/{intentId}/refunds

        {
            "Amount" : 35000,
            "Currency" : "EUR",
            "PlatformFeesAmount" : -5000,
            "ExternalData" : {
                "PSPProcessingDate" : "01-03-2025",
                "PSPReference" : "refund-stripe-5b072ec9-4679-4017-9228-a05cfffbe1af"
            },
                "LineItems" : [
                {
                    "Seller" : {
                        "AuthorId" : "user_m_01JCGMCMQQYFBT1YGSPDDGEATY",
                        "WalletId" : "wlt_m_01JCGMCS5AHZN117J4PE8BG2BQ",
                        "FeesAmount" : -5000,
                        "TransferDate" : "31-03-2025"
                    },
                    "Sku" : "ABC123-4567XYZ",
                    "Name" : "Wireless Bluetooth Headphones",
                    "Description" : "Enjoy clear sound and comfort with noise-canceling Bluetooth headphones, offering long battery life and an adjustable fit",
                    "Quantity" : 1,
                    "UnitAmount" : 30000,
                    "TaxAmount" : 0,
                    "DiscountAmount" : 0,
                    "TotalLineItemAmount" : 30000,
                    "Category" : "PHYSICAL_GOODS",
                    "ShippingAddress" : {
                        "AddressLine1" : "Loop Street",
                        "AddressLine2" : "Mangopay Ltd",
                        "City" : "Paris",
                        "Region" : "Ile de France",
                        "PostalCode" : "75009",
                        "Country" : "FR"
                    }
                }
            ]
        }
        ```
    - **🚧 Split Adjustement**
    - **🚧 Split Execution**
- **Platform operating 1P volumes**
- **Platform operating mixed volumes**
- **Standard sale fund allocation including 1P volume**
- **Standard sale fund allocation including 1P & 3P volume**
- **Standard sale fund allocation (Mirakl Connector)**

## ➕ Additional Features

### Upload generic settlement file (one file per currency)

| **Footer fields:**                                                   |                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SettlementDate                                                       | Settlement date (dd-MM-yyyy)                                                                                                                                                                                                                                                                                                                                                         |
| ExternalProviderName                                                 | External provider name                                                                                                                                                                                                                                                                                                                                                               |
| TotalSettlementFeesAmount                                            | Sum of fees for all lines in the file -                                                                                                                                                                                                                                                                                                                                              |
| TotalSettlementFeesAmount = SUM(SettlementLine.ExternalProviderFees) |
| TotalSettlementAmount                                                | The sum of the amounts for all lines in the file represents the total settlement amount. If this total amount is negative due to the presence of refunds, the amount should be set to zero, indicating that no funds are expected to be transferred from the client. In this situation, any refunds will be applied first, and only any remaining amounts will be used for payments. |

TotalSettlementAmount = SUM(LinesAmount)-TotalSetttlementFeesAmount |

## 💯 Logging & Monitoring

## ❓FAQ

| Question | Requestor | Answer | Answer owner |
| -------- | --------- | ------ | ------------ |
|          |           |        |              |
|          |           |        |              |
