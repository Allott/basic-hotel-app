import cn from 'classnames';

const SortButton = ({label, sortName, sortValue, setSortValue}) => {
    const selected = sortName === sortValue.sortName
    const clickButton = () => {
        setSortValue({
            sortName: sortName,
            ascending: !selected || !sortValue.ascending,
        });
    }
    return (
        <button 
            className={
                cn(
                    'p-2', 
                    {'bg-blue-800 text-white': selected},
                    {'bg-white text-blue-800': !selected}
                )} 
            onClick={clickButton}
        >
            {label} {selected && (sortValue.ascending ? '⬆️' : '⬇️')} 
        </button>
    )
}

export default SortButton;