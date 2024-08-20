import { S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
interface IFileParam {
    fileName: string;
    fileType: string;
    body: Buffer;
}
export declare class UploadService {
    private readonly config;
    client: S3Client;
    constructor(config: ConfigService);
    create(file: IFileParam): Promise<{
        name: string;
    }>;
}
export {};
