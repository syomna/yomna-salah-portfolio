const ExpBullets = ({ role, description }) => (
  <div className="md:pl-11">
    <h3 className="font-heading text-[20px] md:text-[26px] font-medium text-ink tracking-[-0.015em] leading-[1.2] mb-5 m-0">
      {role}
    </h3>

    <ul className="list-none p-0 m-0">
      {description.map((bullet, i) => (
        <li
          key={i}
          className="font-body text-[14px] leading-[1.95] text-ink-mid font-normal py-[3px] pl-[18px] relative m-0"
        >
          <span className="absolute left-0 text-sage text-[13px]">—</span>
          {bullet}
        </li>
      ))}
    </ul>
  </div>
);

export default ExpBullets;
