export interface Post {
    [x: string]: string | undefined;
    title: ReactNode;
    _id: string;
    _createdAt: string;
    author: {
        name: string;
        image: string;
    };
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
    body: [object];
};