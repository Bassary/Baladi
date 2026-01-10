import Button from '../components/Button';
import Info from '../components/Info';
import { useNavigate } from 'react-router-dom';

// STYLE
import classNames from 'classnames';
import styleTitle from '../styles/title.module.scss';
import stylePage from '../styles/page.module.scss'
import styleButton from '../styles/button.module.scss';
import styleInfo from '../styles/info.module.scss';


function Contact() {
    const navigate = useNavigate()

    const handleChange = (destination : string) => {
        navigate(destination)
    }


    return (
        <>
        <section className={classNames(stylePage.sectionContentPage, stylePage.paddingContact)}>
            <div className={classNames(styleTitle.containerTitleIcon)}>
                    <img src="/jasmine.svg" alt="logo jasmin" height="80" width="80"/>
                    <h2 className={classNames(styleTitle.titleH2)}>Nous Contacter</h2>
            </div>
            <div className={classNames(styleTitle.containerContact)}>
                <h3>Pour toute demande de <strong>reservation</strong>,
                    <strong> devis</strong>, <strong>service traiteur</strong> ou privatisation
                    contacter nous par email ou par téléphone
                </h3>
                <div className={classNames(styleButton.flexButtonRow)}>
                    <Button
                        title='email@email.com'
                        className={classNames(styleButton.mainButton)}
                        mailto='email@email.com'
                    />
                    <Button
                        title='01 42 41 84 32 '
                        className={classNames(styleButton.secondButton)}
                        tel='01 42 42 84 32'
                    />
                </div>
            </div>
        </section>
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
        </>
    )
}

export default Contact