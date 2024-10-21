import styles from './modal.module.css';

export default function Modal({isOpen, onClose, children}:{isOpen:boolean, onClose:()=>void,children:React.ReactNode}) {

    if (!isOpen) return null;
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}