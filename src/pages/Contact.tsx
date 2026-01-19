import Button from '../components/Button';
import Info from '../components/Info';
import { useNavigate } from 'react-router-dom';
import Animations from '../components/animation/Animations';

// STYLE
import classNames from 'classnames';
import styleTitle from '../styles/title.module.scss';
import stylePage from '../styles/page.module.scss'
import styleButton from '../styles/button.module.scss';
import styleInfo from '../styles/info.module.scss';


function Contact() {
    const {FadeInScroll} = Animations;
    const navigate = useNavigate()

    const handleChange = (destination : string) => {
        navigate(destination)
    }


    return (
        <>
        <section className={classNames(stylePage.sectionContentPage, stylePage.paddingContact, stylePage.sectionContentPageContact)}>
            <FadeInScroll>
                <div className={classNames(styleTitle.containerTitleIcon)}>
                    <img src="/jasmine.svg" alt="logo jasmin" height="80" width="80"/>
                    <h2 className={classNames(styleTitle.titleH2)}>Nous Contacter</h2>
                </div>
            </FadeInScroll>

            <FadeInScroll delay={0.2}>
                <div className={classNames(styleTitle.containerContact)}>
                    <p>Pour toute demande de <strong>reservation</strong>,
                        <strong> service traiteur</strong> ou <strong>privatisation </strong>
                        contacter nous par email ou par téléphone
                    </p>
                    <p>Nous acceptons les réservations de groupe jusqu'à 40 personnes</p>
                    <div id='devis' className={classNames(styleButton.flexButtonRow)}>
                        <Button
                            title='baladi.rim@gmail.com'
                            className={classNames(styleButton.mainButton)}
                            mailto='baladi.rim@gmail.com'
                        />
                        <Button
                            title='01 42 41 84 32 '
                            className={classNames(styleButton.secondButton)}
                            tel='01 42 42 84 32'
                        />
                    </div>
                </div>
            </FadeInScroll>
        </section>

        <FadeInScroll delay={0.3}>
            <section className={classNames(styleInfo.sectionTraiteur)}>
                <h2 className={classNames(styleTitle.titleH2)}>DEVIS</h2>
                <p>Pour une demande de <strong>devis</strong> ou toutes <strong>inforamtions supplémentaire</strong>, contactez-nous au :
                </p>
                <div className={classNames(styleButton.flexButtonRow)}>
                    <Button
                        title='baladi.rim@gmail.com'
                        className={classNames(styleButton.mainButton)}
                        mailto='baladi.rim@gmail.com'
                    />
                    <Button
                        title='06 13 54 33 57'
                        className={classNames(styleButton.secondButton)}
                        tel='06 13 54 33 57'
                    />
                </div>
            </section>
        </FadeInScroll>

        <FadeInScroll delay={0.4}>
            <section className={classNames(styleInfo.sectionTraiteur)}>
                    <h2 className={classNames(styleTitle.titleH2)}>INFORMATIONS</h2>

                    <div className={classNames(styleInfo.sectionContact)}>
                        <div className={classNames(styleInfo.sectionContactInfo)}>
                            <h3>Adresse et Horaire : </h3>
                            <Info
                                iconColor="#153114"
                                iconName="eva:pin-outline"
                                textInfo="105 Rue de Meaux - 75019 Paris"
                                classNameDiv={classNames(styleInfo.infoMenuHome)}
                            />
                            <Info
                                iconColor="#153114"
                                iconName="simple-icons:metrodeparis"
                                textInfo="Laumières / Jaures"
                                classNameDiv={classNames(styleInfo.infoMenuHome)}
                            />
                            <Info
                                iconColor="#153114"
                                iconName="tabler:clock"
                                textInfo="Ouvert 7/7 de 12h00-14h30 / 18h30-22h30"
                                classNameDiv={classNames(styleInfo.infoMenuHome)}
                            />
                        </div>
                        <div className={classNames(styleInfo.sectionContactInfo)}>
                            <h3>Service Traiteur : </h3>
                            <Info
                                iconColor="#153114"
                                iconName="ph:users"
                                textInfo="Pour socitée ou Privé"
                                classNameDiv={classNames(styleInfo.infoMenuHome)}
                            />
                            <Info
                                iconColor="#153114"
                                iconName="eva:pin-outline"
                                textInfo="Livraison dans Paris et sa Banlieux"
                                classNameDiv={classNames(styleInfo.infoMenuHome)}
                            />
                            <Button
                                title='EN SAVOIR PLUS'
                                className={classNames(styleButton.secondButton)}
                                onClick={()=> handleChange('/traiteur')}
                            />
                        </div>
                        <div className={classNames(styleInfo.sectionContactInfo)}>
                            <h3>Privatisation : </h3>
                            <Info
                                iconColor="#153114"
                                iconName="ph:users"
                                textInfo="Jusqu'à 40 personnes"
                                classNameDiv={classNames(styleInfo.infoMenuHome)}
                            />
                            <Info
                                iconColor="#153114"
                                iconName="fluent:food-28-regular"
                                textInfo="Service à table ou Buffet"
                                classNameDiv={classNames(styleInfo.infoMenuHome)}
                            />
                            <Button
                                title='EN SAVOIR PLUS'
                                className={classNames(styleButton.secondButton)}
                                onClick={()=> handleChange('/privatisation')}
                            />
                        </div>

                    </div>
            </section>
        </FadeInScroll>
        
        </>
    )
}

export default Contact