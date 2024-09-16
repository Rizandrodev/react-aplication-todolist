import styles from './styles.module.css'
export function Tasks(props){
    return (
        <div className={styles.container}>
            <p className={` ${styles.titulo}  ${props.task.completed && styles.completed}`}> {props.task.id} {props.task.title} {props.task.completed}</p>
        {!props.task.completed &&   
        (  <button onClick={()=>props.handlecompletedTAsk(props.task.id)} className={styles.button} >ok</button>)}
    </div>
    )
}