import classNames from 'classnames';

export default function Panel({ children , className, ...rest}) {
  const classes = classNames('border rounded p-3 shadow w-full cursor-pointer', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );

}