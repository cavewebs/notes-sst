import { Api, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
    const { table } = use(StorageStack);

    // Create the API
    const api = new Api(stack, "Api", {
        defaults: {
            function: {
                bind: [table],
            },
        },
        routes: {
            "POST /notes": "packages/functions/src/notes/create.main",
            "GET /notes": "packages/functions/src/notes/list.main",
            "GET /notes/{id}": "packages/functions/src/notes/get.main",
            "DELETE /notes/{id}": "packages/functions/src/notes/get.main",
            "PUT /notes/{id}": "packages/functions/src/notes/update.main",
        },
    });

    // Show the API endpoint in the output
    stack.addOutputs({
        ApiEndpoint: api.url,
    });

    // Return the API resource
    return {
        api,
    };
}