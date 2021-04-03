import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };
  
        return props;
    }

    render() {
        return (
            <html>
                <Head>
                <script src="https://kit.fontawesome.com/be47bb51ae.js" crossorigin="anonymous"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://kit.fontawesome.com/be47bb51ae.js" crossorigin="anonymous"></script>
                    <style dangerouslySetInnerHTML={{__html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }`}}></style>
                </body>
            </html>
        );
    }
}