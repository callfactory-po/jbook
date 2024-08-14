interface ActionButtonProps {
  onClick: () => void
  iconClass: string
  buttonClass?: string
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  iconClass,
  buttonClass = 'button is-primary is-small',
}) => {
  return (
    <button
      className={`button is-primary is-small ${buttonClass}`}
      onClick={onClick}
    >
      <span className='icon'>
        <i className={`fas fa-${iconClass}`} />
      </span>
    </button>
  )
}

export default ActionButton
