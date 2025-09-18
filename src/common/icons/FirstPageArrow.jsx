export default function FirstPageArrow({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            viewBox='0 0 13 12'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M12.41 10.59L7.82 6L12.41 1.41L11 0L5 6L11 12L12.41 10.59ZM0 0H2V12H0V0Z' fill={fill} />
        </svg>
    );
}
