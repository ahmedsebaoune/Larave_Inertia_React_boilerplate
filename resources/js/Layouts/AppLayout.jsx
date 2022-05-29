import { Link } from "@inertiajs/inertia-react";
const AppLayout = () => {
    return (
        <div>
            <nav>
            <Link href="/about">click Me</Link>
            </nav>
            <div>
                    <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/75359457&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    <div
                        style={{fontSize: '10px',color: '#cccccc', lineBreak: 'anywhere',wordBreak: 'normal',overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate',fontWeight: 100}}>
                        <Link href="https://soundcloud.com/antovolk" title="antovolk" target="_blank"
                            style={{color: "#cccccc" ,textDecoration: 'none'}}>antovolk</Link> ·
                        <Link
                            href="https://soundcloud.com/antovolk/hans-zimmer-rise-aurora-edit"
                            title="Hans Zimmer - Rise (Aurora Edit) - The Dark Knight Rises" target="_blank"
                            style={{color: "#cccccc",textDecoration: "none"}}>Hans Zimmer - Rise (Aurora Edit) - The Dark Knight
                            Rises</Link>
                    </div>
            </div>
        </div>);
}


export default AppLayout