export interface ICreateLicenseRequestDTO {
    customer: { _id: string };
    description: string;
    ipAssign: string;
    dataAssign: Date;
    license: string;
    users: [
        {
            _id: { type: string }
        },
    ],
    services: [
        {
            description: string;
            value: Number;
        }
    ],
    totalLicense: Number;
    Status: Number;
    createdAt: Date;
    updatedAt: Date;
}