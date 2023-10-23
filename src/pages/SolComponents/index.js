import Image from "next/image";
import styles from "@/pages/solComponents/styles.module.css"

export default function SolComponents() {
    return (
        <>
            <div>
                <Image
                    className={styles.sol}
                    src="/images/Sol.png"
                    alt='sol'
                    width={100}
                    height={100}
                />
                <p>O sol dssssssssssssssssssssjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsssssss</p>
            </div>
        </>
    )
}