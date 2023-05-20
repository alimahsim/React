import React, { Component } from 'react'
import s from './Main.module.scss'

class Main extends Component {
  render() {
    let { userData, octocat, locationIcon, urlIcon, twitterIcon, officeIcon } = this.props
    return (
      <div className={s['main']}>
        <div className={s['main-right']}>
          <img src={userData.avatar_url} alt="octocat" />
        </div>
        <div className={s['main-left']}>
          <div className={s['main-left_head']}>
            <div className={s['main-left_head__name']}>The Octocat</div>
            <div className={s['main-left_head__time']}>Joined 25 Jan 2011</div>
          </div>
          <div className={s['main-left_username']}>@octocat</div>
          <div className={s['main-left_disc']}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            Quisque volutpat mattis eros.</div>
          <div className={s['main-left_center']}>
            <div className={s['main-left_center__repos']}>
              <div className={s['main-left_center__repos___text']}>Repos</div>
              <div className={s['main-left_center__repos___num']}>8</div>
            </div>
            <div className={s['main-left_center__followers']}>
              <div className={s['main-left_center__followers___text']}>Followers</div>
              <div className={s['main-left_center__followers___num']}>3938</div>
            </div>
            <div className={s['main-left_center__following']}>
              <div className={s['main-left_center__following___text']}>Following</div>
              <div className={s['main-left_center__following___num']}>9</div>
            </div>
          </div>
          <div className={s['main-left_footer']}>
            <div className={s['main-left_footer__left']}>
              <div className={s['main-left_footer__left___location']}>
                <img src={locationIcon} alt="location icon" />
                <div className={s['main-left_footer__left___location____address']}>San Francisco</div>
            </div>
            <div className={s['main-left_footer__left___blog']}>
                <img src={urlIcon} alt="url-chain icon" />
                <div className={s['main-left_footer__left___blog____address']}>https://github.blog</div>
            </div>
          </div>
          <div className={s['main-left_footer__right']}>
              <div className={s['main-left_footer__right___social']}>
                <img src={twitterIcon} alt="Twitter icon" />
                <div className={s['main-left_footer__right___social____address']}>Not Available</div>
            </div>
            <div className={s['main-left_footer__right___company']}>
                <img src={officeIcon} alt="office building"/>
                <div className={s['main-left_footer__right___company____address']}>@github</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export { Main };