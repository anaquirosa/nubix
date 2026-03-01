interface Props {
  text: string; 
  styles?: string;
}

export const Button = ({text, styles}: Props) => {
  return (
    <button className={`bg-linear-to-b bg-Cyan-500 h-12 font-Raleway font-bold ${styles} rounded-3xl hover:bg-Teal-200 cursor-pointer`}>{text}</button>
  )
}
