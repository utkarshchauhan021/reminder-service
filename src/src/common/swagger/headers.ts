import {ApiHeaders} from "@nestjs/swagger";

export const ApiCommonHeader = (): ClassDecorator => target => {
    // @ts-ignore
    ApiHeaders([
        {
            name: "X-Authenticated-Userid",
            description: 'User id of the user on whom behalf client is making the request',
            required: true,
        },
        {
            name: "X-Consumer-Username",
            description: 'Username of the user on whom behalf client is making the request',
            required: true,
        }
    ])(target);
};

export function ApiWriteHeader(): MethodDecorator {
    return function(target, propertyKey, descriptor) {
        ApiHeaders([
            {
                name: "Idempotency-Key",
                description: 'Unique key to identify the request',
                required: true,
            }
        ])(target, propertyKey, descriptor);
    };
}
