import './action-bar.css'
import { useActions } from '../hooks/use-actions'
import ActionButton from './action-button'

interface ActionBarProps {
  id: string
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions()

  return (
    <div className='action-bar'>
      <ActionButton onClick={() => moveCell(id, 'up')} iconClass='arrow-up' />
      <ActionButton
        onClick={() => moveCell(id, 'down')}
        iconClass='arrow-down'
      />
      <ActionButton onClick={() => deleteCell(id)} iconClass='times' />
    </div>
  )
}

export default ActionBar
