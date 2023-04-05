import { useNavigate } from "react-router-dom"
import { RoutesName } from "../../../../core/routes/route-names"
import Button from "../../../../utils/components/button/button"
import { StringConstants } from "../../../../utils/constants/string-constants"
import './on-boarding.css'
const logo = require("../../../../assets/images/sketchlogo.png")

const OnBoardingPage = () => {
    const navigate = useNavigate()

    const joinScratchHandler = () => {
        navigate(RoutesName.login, {
            replace: true
        })
    }

    return (<div className={"onboard-background"}>
        <div className={"onboard-content"}>
            <div className={"onboard-logo"}>
                <img src={logo} alt="scrach_logo" />
                <p>{StringConstants.scratchText}</p>
            </div>
            <h3>{StringConstants.onBoardingTitle}</h3>
            <p>{StringConstants.onBoardingSubTitle}</p>
            <div className={"onboard-buttons"}>
                <Button
                    type="button"
                    variant={"primary"}
                    onTap={joinScratchHandler}>
                    {StringConstants.onBoardingJoinButton}
                </Button>
                <Button
                    type="button"
                    variant={"secondary"}
                    onTap={joinScratchHandler}>
                    {StringConstants.onBoardingLearnMoreButton}
                </Button>
            </div>
        </div>
    </div>)
}

export default OnBoardingPage