import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { IBoxFormData, IBoxInitialFormData, INewBoxFormProps } from "./interfaces";

/** Form for adding box.
 *
 * Props:
 * - createBox: fn to call in parent
 *
 * State:
 * formData: { height: number, width: number, backgroundColor }
 *
 * BoxList -> NewBoxForm
 */

const INITIAL_DATA = { height: "100", width: "100", backgroundColor: "" };

function NewBoxForm({ createBox }: INewBoxFormProps) {
  const [formData, setFormData] = useState<IBoxInitialFormData>(INITIAL_DATA);

  /** Update form input. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    const { height, width, backgroundColor } = formData;
    createBox({
      height: Number(height),
      width: Number(width),
      backgroundColor,
      id: uuid()
    });
    setFormData(INITIAL_DATA);
  }

  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newBox-height">Height</label>
          <input
            id="newBox-height"
            onChange={handleChange}
            name="height"
            value={formData.height}
            type="number"
          />
        </div>
        <div>
          <label htmlFor="newBox-width">Width</label>
          <input
            id="newBox-width"
            onChange={handleChange}
            name="width"
            value={formData.width}
            type="number"
          />
        </div>
        <div>
          <label htmlFor="newBox-backgroundColor">Background Color</label>
          <input
            id="newBox-backgroundColor"
            onChange={handleChange}
            name="backgroundColor"
            value={formData.backgroundColor}
          />
        </div>
        <button className="NewBoxForm-addBtn">Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
