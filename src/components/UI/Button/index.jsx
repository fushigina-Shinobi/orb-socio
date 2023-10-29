import { forwardRef } from 'react';

const Button = forwardRef(
  (
    {
      title,
      color,
      size,
      outlined,
      unStyled,
      icon,
      iconClasses,
      iconPosition = 'right',
      additionalBtnClasses,
      titleClasses,
      ...btnProps
    },
    ref
  ) => {
    const sizeOptions = {
      sm: 'px-[1.5625em] py-[0.75em]',
      md: 'px-[2.5em] py-[0.813em]',
      lg: 'px-[3.438em] py-[0.938em]',
    };

    const buttonStyleOptions = outlined
      ? `border border-primary text-primary hover:bg-primary hover:text-white active:bg-tertiary disabled:border-disabled disabled:text-disabled`
      : unStyled
      ? 'text-primary'
      : 'bg-primary text-white hover:bg-secondary active:bg-primary/80 disabled:bg-disabled disabled:bg-disabled';

    return (
      <button
        ref={ref}
        className={`rounded-md text-base font-medium flex items-center justify-center shrink-0 ${
          size ? sizeOptions[size] : sizeOptions.md
        } ${
          icon &&
          (iconPosition === 'right'
            ? 'space-x-2'
            : 'flex-row-reverse space-x-reverse space-x-2')
        } ${buttonStyleOptions} ${additionalBtnClasses}`}
        {...btnProps}
      >
        {icon && (
          <span className='shrink-0'>
            <img
              src={icon}
              alt=''
              className={`w-[1.5em] h-[1.5em] object-contain ${
                iconClasses ?? ''
              }`}
            />
          </span>
        )}
        {title && <span className={`${titleClasses ?? ''}`}>{title}</span>}
      </button>
    );
  }
);

export default Button;
