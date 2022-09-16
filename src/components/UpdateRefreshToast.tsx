
function UpdateRefreshToast() {
    return (
        <>
            <span>A new version is available; please refresh.</span><button onClick={() => window.location.reload()}>REFRESH</button>
        </>
    );
}

export default UpdateRefreshToast;
