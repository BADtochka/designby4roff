import AboutCase from '@/components/AboutCase';
import AboutCaseInfo from '@/components/AboutCaseInfo';
import CaseText from '@/components/CaseText';
import CaseTextImage from '@/components/CaseTextImage';
import CaseImage from '@/modules/CaseImage';

export default function Case1() {
  return (
    <>
      {/* TODO: add border color option to all blocks */}
      <AboutCase>
        <AboutCaseInfo title='123' description='123' />
        <AboutCaseInfo title='test' description='123' />
        <AboutCaseInfo title='test' description='123' url='https://google.com' />
      </AboutCase>
      <CaseImage src='/cases/placeholder.png' />
      <CaseText
        title='HEADING'
        description={`On the other hand, consulting with a broad asset requires defining and clarifying a development model. Thus, the strengthening and development of the structure provides a wide range of (specialists) to participate in shaping the directions of progressive development. The significance of these issues is so obvious that starting the daily work of forming a position allows you to assess the significance of significant financial and administrative conditions. \n\nOn the other hand, consulting with a broad asset requires defining and clarifying a development model. Thus, the strengthening and development of the structure provides a wide range of (specialists) to participate in shaping the directions of progressive development. The significance of these issues is so obvious that starting the daily work of forming a position allows you to assess the significance of significant financial and administrative conditions.`}
      />
      <CaseText title="It's a great big headline." uppercase />
      <CaseTextImage
        title='HEADING'
        description='On the other hand, consulting with a broad asset requires defining and clarifying a development model. Thus, the strengthening and development of the structure provides a wide range of (specialists) to participate in shaping the directions of progressive development. '
        direction='column'
        src='/cases/placeholder.png'
      />
      <CaseTextImage
        title='HEADING'
        description='On the other hand, consulting with a broad asset requires defining and clarifying a development model. Thus, the strengthening and development of the structure provides a wide range of (specialists) to participate in shaping the directions of progressive development. '
        direction='column'
        src='/cases/placeholder.png'
        reverse
      />
    </>
  );
}
