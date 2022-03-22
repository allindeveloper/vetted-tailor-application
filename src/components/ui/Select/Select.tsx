import { IBank } from "../../../types/banks";
import Loader from "../Loader/Loader";
import { SelectStyle } from "./SelectStyle";

export interface SelectProps {
  items: IBank[];
  labelText: string;
  onClick?: (item: IBank) => void;
  selectedBank?: IBank;
  startIcon?: string;
  loading: boolean;
}
export const Select = ({
  selectedBank,
  items,
  labelText,
  loading,
  onClick,
  startIcon,
}: SelectProps) => {
  return (
    <SelectStyle>
      <p>
        <label>{labelText}</label>
      </p>

      <div className="select-box">
        <img
          alt="startIcon"
          title="Search"
          className="selectstartIcon"
          src={startIcon}
        />
        <div className="select-box__current" tabIndex={1}>
          {loading ? (
            <div className="select-loading">
              <Loader />
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="select-box__value">
                <input
                  className="select-box__input"
                  type="radio"
                  id={index.toString()}
                  value={++index}
                  onClick={() => onClick?.(item)}
                  name="Ben"
                  defaultChecked
                />
                <p className="select-box__input-text">
                  {selectedBank && Object.keys(selectedBank).length > 0
                    ? selectedBank.name
                    : "Please select your bank"}
                </p>
              </div>
            ))
          )}

          <img
            className="select-box__icon"
            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
            aria-hidden="true"
          />
        </div>
        <ul className="select-box__list">
          {items.map((item, key) => (
            <li key={key}>
              <label className="select-box__option" htmlFor={key.toString()}>
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </SelectStyle>
  );
};
