import { useEffect, useState } from 'react';
import { IoBookmarksOutline, IoCartOutline } from 'react-icons/io5';
import { BsCartCheck } from 'react-icons/bs';
import { getProductDetail, addFavor, addCartList } from '../../api/axios';
import Etc from '../../components/ProductDetail/Etc';
import Loan from '../../components/ProductDetail/Loan';
import Target from '../../components/ProductDetail/Target';
import { IProductDetail } from './interface';
import { defaultProductData } from './const';
import { useLocation } from 'react-router-dom';

const lists = ['상품요건', '지원 대상 요건', '기타 상품 정보'];

const ProductDetail = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [detail, setDetail] = useState<IProductDetail>(defaultProductData);
  const location = useLocation();
  const snq = location.pathname.slice(9);
  useEffect(() => {
    const getDetail = async () => {
      const { ok, productDetailData } = await getProductDetail(snq);
      setDetail(productDetailData);
    };
    getDetail();
  }, []);

  return (
    <section className='w-[375px]'>
      <div className='bg-mw w-[375px] h-[230px] top-40 absolute'></div>
      <div className=' relative shadow-default p-2 w-[335px] h-52 mx-auto my-3 rounded-default border text-left flex bg-mw-lGray'>
        <div className='mx-auto my-auto'>
          <p className='font-bold text-xl mb-2 mx-auto flex justify-center'>
            <span className='text-mw'>MW&nbsp;</span>
            {detail?.loan?.loanName}
          </p>
          <div className='flex justify-center gap-2'>
            <div className='font-semibold text-sm text-center border-2 rounded-default px-2 border-mw'>
              금리&nbsp;
              {detail?.loan?.rate === 'null' ? '확인 중' : detail?.loan?.rate}
            </div>
            <div className='font-semibold text-sm text-center border-2 rounded-default px-2 border-mw'>
              최대한도&nbsp;
              {detail?.loan?.loanLimit === 'null'
                ? '확인 중'
                : detail?.loan?.loanLimit}
            </div>
          </div>
        </div>

        <div className='align-center'>
          <button
            className='absolute bottom-40 right-14'
            onClick={() => addCartList(snq)}
          >
            <BsCartCheck className='text-[30px]' />
          </button>
          <button
            className='absolute bottom-40 right-5'
            onClick={() => addFavor(snq)}
          >
            <IoBookmarksOutline className='text-[27px]' />
          </button>
        </div>
      </div>
      <ul className='z-20 mt-24 flex justify-center gap-8'>
        {lists.map((list, i) => {
          return (
            <li
              key={i}
              className={
                i === activeMenu
                  ? 'cursor-pointer text-mw font-bold border-solid border-mw border-b-4'
                  : 'cursor-pointer text-mw-gray font-semibold hover:text-mw hover:border-b-4 hover:border-mw'
              }
              onClick={() => setActiveMenu(i)}
            >
              {list}
            </li>
          );
        })}
      </ul>
      <div className='pt-6'>
        {
          [
            <Loan loanItem={detail?.loan} />,
            <Target target={detail?.target} />,
            <Etc etc={detail?.etc} />,
          ][activeMenu]
        }
      </div>
    </section>
  );
};
export default ProductDetail;
