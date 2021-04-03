
export function PlanningBuilderInput({ field, event, indexDay, indexEvent, handleChangePlaning, options }) {


    return (

        <section>
            <label> {field} :
<input type="text" value={event[field] || ""} onChange={handleChangePlaning(indexDay, indexEvent, field)} />
            </label>
            <select name={field} onChange={handleChangePlaning(indexDay, indexEvent, field)} value={event[field]}>
                <option value="choose">--SELECT {field}--</option>
                {options.map((value, index) =>
                    <option key={index} value={value}>{value}</option>
                )}
            </select>
        </section>
    );
}