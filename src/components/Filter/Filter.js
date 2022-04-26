export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Фильтр по имени
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
