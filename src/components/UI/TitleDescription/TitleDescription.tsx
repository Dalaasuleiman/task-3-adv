import styles from './TitleDescription.module.css'
export interface PropsTitleDescription{
    className : string ,
    content:TypeContent,
    titleParts: Array<TypeTitleParts> ,
    classTitle: string ,
    desc :  TypeDesc ,
    classDiv ? : string
}
export interface TypeTitleParts{
    part : string,
    classpart : string
}
export interface TypeDesc{
    desc : string,
    classDesc : string
}
export interface TypeContent{
    content : string,
    classContent : string
}


const TitleDescription = ({className , content , titleParts , classTitle , desc , classDiv} :PropsTitleDescription) => {
    return (
        <div className={className}>
            {classDiv?
                <div className={classDiv}>
                    <span className={content.classContent}> {content.content} </span>
                    <h2 className={classTitle}>
                        {
                            titleParts?.map((part , index)=>(
                                <span key={index} className={styles[part.classpart]}> {part.part}</span>
                            )
                        )
                    }
                    </h2>
                </div>
            :
            <>          
                <span className={content.classContent}> {content.content} </span>
                <h2 className={classTitle}>
                    {
                        titleParts?.map((part , index)=>(
                            <span key={index} className={styles[part.classpart]}> {part.part}</span>
                        )
                    )
                }
                </h2>
            </> 
            }
            <p className={desc.classDesc }> {desc.desc}</p>        
        </div>
    )
    }

export default TitleDescription

