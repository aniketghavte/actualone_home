import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import waitlist_pic from '../../public/waitlistpic.svg';
import line from '../../public/line.svg'
import getStarted from '../../public/getStarted.svg'
import joinWaitlistImage from '../../public/joinWaitlistImage.svg'
import finalImage from '../../public/finalImage.svg'

export default function Home() {
  return (
    <main className={styles.app__main}>
        <div className={styles.block1}>
           <div>
           <Link href="/"><p>ActualOne Protocol</p></Link>
           </div>
        </div>
        <div className={styles.block2}>
            <div className={styles.headline}>
               ActualOne Protocol is coming soon ⚡
            </div>
            <div className={styles.mainHeadline}>
              <p>Join&nbsp; 
                <span className={styles.waitlist_pic}>
                <Image src={waitlist_pic} alt="waitlist " className={styles.span_image}/>
                <Image src={line} alt="line " className={styles.lineImage}/>
                  Wetlist&nbsp;
                </span> 
                  & Get notified when we&nbsp;
                <span className={styles.launch_span}> 
                  Launch
                </span>. 🚀</p>
                <Image src={getStarted} alt="get Started " className={styles.span_image}/>
            </div>
            <div className={styles.block3}>
               <input type="text" placeholder="What's your email"/>
               <button>Subscribe</button>
               <Image src={joinWaitlistImage} alt="get Started " className={styles.joinWaitlistImage}/>
            </div>
            
            <Image src={finalImage} alt="get Started " className={styles.finalImage}/>
        </div>
    </main>
  )
}
