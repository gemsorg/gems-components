// @flow
type OptionType = {
  id: string | number,
  value: number | string,
  caption: ?string,
};

const formatItem = (option: string | Object, id: string): OptionType => {
  if (typeof option === 'object') {
    return { ...option, id };
  }

  return {
    value: option,
    id,
    caption: option,
  };
};

export default formatItem;
