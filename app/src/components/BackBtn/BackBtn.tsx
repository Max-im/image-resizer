import styles from './BackBtn.module.css';

export default function BackBtn({ action, text = '← Back' }: {action:() => void; text?: string}) {
    return (
        <p
            onClick={action}
            className={`text-sm ${styles.back} cursor-pointer`}
        >
           {text}
        </p>
    )
}
