import { useEffect, useState } from "react";

/**
 * Returns true if the component has mounted on the client.
 * Useful for avoiding hydration errors when rendering client-only content.
 */
export default function useHasMounted(): boolean {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
}
