/* eslint-disable react/prop-types */
import classNames from 'classnames';

export default function Panel({ children , className, ...rest}) {
  const classes = classNames('panel', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );

}