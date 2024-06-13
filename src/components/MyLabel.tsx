import './MyLabel.css'



interface Props {
   /** 
   *  Text in Caps
   **/
   allCaps?: boolean
   /** 
   *  Text to display
   **/
   color?: 'text-primary' | 'text-secondary' | 'text-tertiary',

   /** 
   *  Color of the Font
   **/
   fontColor?: string,
   /** 
   *  Text to display
   **/
   label: string,
   /** 
   *  Label size
   **/
   size?: 'normal' | 'h1' | 'h2' | 'h3'
}



export const MyLabel = ({ 
  allCaps,
  color,
  label, 
  fontColor,
  size = 'normal'
}: Props) => {
  return (
    <span className={`${size} ${color} label`} style={{color: `${fontColor}`}}>
        {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
