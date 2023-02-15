import { NextPage, NextPageContext } from 'next'
import NextErrorComponent from 'next/error'

interface CustomErrorProps {
  statusCode: number;
}

const CustomErrorComponent: NextPage<CustomErrorProps> = (props) => {
  return <NextErrorComponent statusCode={props.statusCode} />
}

CustomErrorComponent.getInitialProps = async (ctx: NextPageContext) => {
  return NextErrorComponent.getInitialProps(ctx)
}

export default CustomErrorComponent
