import cn from 'classnames';

const SortButton = ({label, sortName, sortValue, setSortValue, startAscending = true}) => {
    const selected = sortName === sortValue.sortName
    const clickButton = () => {
        setSortValue({
            sortName: sortName,
            ascending: selected ? !sortValue.ascending : startAscending,
        });
    }
    return (
        <button 
            className={
                cn(
                    'p-2 w-full md:w-52', 
                    {'bg-blue-800 text-white hover:bg-yellow-300 hover:text-blue-800': selected},
                    {'bg-white text-blue-800 hover:bg-yellow-300': !selected}
                )} 
            onClick={clickButton}
        >
            {label} {selected && (sortValue.ascending ? '⬆️' : '⬇️')} 
        </button>
    )
}

export default SortButton;