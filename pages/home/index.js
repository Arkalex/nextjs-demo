import AppLayout from 'components/AppLayout'

export default function HomePage () {
    return (
        <>
        <AppLayout>
            <section>
                <header>
                    <h2>Inicio</h2>
                </header>

                <nav>

                </nav>
                <style jsx>{`
                    header {
                        display: flex;
                        align-items: center;
                        height: 49px;
                        position: fixed;
                        top: 0;
                        border-bottom: 1px solid #ccc;
                        width: 100%;
                    }

                    section {
                        padding-top: 100px;
                    }

                    nav {
                        position: fixed;
                        bottom: 0;
                        border-top: 1px solid #ccc;
                        width: 100%;
                    }
                `}</style>
            </section>
        </AppLayout>
        </>
    )
}