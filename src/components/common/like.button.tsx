import {ClickVoteComponent, ClickVoteProvider} from "@clickvote/react";
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import {FC, useCallback, useEffect, useState} from "react";

import {LikeBtn} from "@/components/LikeBtn";

const LikeButton: FC<{className?: string}> = (top) => {
    const [visitor, setVisitor] = useState('');
    useEffect(() => {
        load();
    }, []);

    const load = useCallback(async () => {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        setVisitor(visitorId);
    }, []);

    if (!visitor) {
        return <></>;
    }

    return (
        <ClickVoteProvider value={{ apiUrl: 'socket.clickvote.dev', publicKey: 'pb_Q49Jy1gBQIWI0hqhEk5br7nXCNmPs3vj', userId: visitor }}>
            <ClickVoteComponent id="main-page" voteTo={window.location.href}>
                {(props) => <LikeBtn moreClass={top.className} {...props} />}
            </ClickVoteComponent>
        </ClickVoteProvider>
    );
}

export default LikeButton;