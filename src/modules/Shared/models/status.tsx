export enum status {
    created = 0,
    inProgress,
    done,
    archived
}

export function getStatusAsString(statusId: status) {
    switch (statusId) {
        case status.created:
            return "Created"
        case status.inProgress:
            return "In Progress"
        case status.done:
            return "Done"
        case status.archived:
            return "Archived"
        default:
            throw new Error(`${statusId} is not a type of status`);
    }
}

export function getStatusStringArray(): string[] {
    return Object.keys(status).filter((value) => isNaN(Number(value)));
}

export function getStatusFromString(string: string): status {
    switch (string) {
        case "created":
            return status.created;
        case "inProgress":
            return status.inProgress;
        case "done":
            return status.done;
        case "archived":
            return status.archived;
        default:
            throw new Error(`${string} is not a type of status. Try again.`);
    }
}