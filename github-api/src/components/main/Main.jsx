import React, { Component } from 'react'
import s from './Main.module.scss'

class Main extends Component {

  addUserData = (oldData, newData) => {
    if(newData){
      return newData
    }else{
      return oldData
    }
  }
  render() {
    let { userData, octocat, locationIcon, urlIcon, twitterIcon, officeIcon } = this.props
    return (
      <div className={s['main']}>
        <div className={s['main-right']}>
          <img src={this.addUserData(octocat, userData.avatar_url)} alt="octocat" />
        </div>
        <div className={s['main-left']}>
          <div className={s['main-left_head']}>
            <div className={s['main-left_head__name']}>{this.addUserData("The octocat", userData.name)}</div>
            <div className={s['main-left_head__time']}>Joined 25 Jan 2011</div>
          </div>
          <div className={s['main-left_username']}>{this.addUserData("@octocat", userData.login)}</div>
          <div className={s['main-left_disc']}>
            {this.addUserData("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio Quisque volutpat mattis eros.", userData.bio)}
          </div>
          <div className={s['main-left_center']}>
            <div className={s['main-left_center__repos']}>
              <div className={s['main-left_center__repos___text']}>Repos</div>
              <div className={s['main-left_center__repos___num']}>{this.addUserData(8, userData.repos)}</div>
            </div>
            <div className={s['main-left_center__followers']}>
              <div className={s['main-left_center__followers___text']}>Followers</div>
              <div className={s['main-left_center__followers___num']}>{this.addUserData(3938, userData.followers)}</div>
            </div>
            <div className={s['main-left_center__following']}>
              <div className={s['main-left_center__following___text']}>Following</div>
              <div className={s['main-left_center__following___num']}>{this.addUserData(9, userData.following)}</div>
            </div>
          </div>
          <div className={s['main-left_footer']}>
            <div className={s['main-left_footer__left']}>
              <div className={s['main-left_footer__left___location']}>
                <img src={locationIcon} alt="location icon" />
                <div className={s['main-left_footer__left___location____address']}>
                  <a href="#"> {this.addUserData('San Francisco', userData.location)} </a>
                </div>
            </div>
            <div className={s['main-left_footer__left___blog']}>
                <img src={urlIcon} alt="url-chain icon" />
                <div className={s['main-left_footer__left___blog____address']}>
                  <a href="#">{this.addUserData('https://github.blog',userData.blog)} </a>
                </div>
            </div>
          </div>
          <div className={s['main-left_footer__right']}>
              <div className={s['main-left_footer__right___social']}>
                <img src={twitterIcon} alt="Twitter icon" />
                <div className={s['main-left_footer__right___social____address']}>
                  <a href="#">{this.addUserData('Not Available', userData.twitter_username)}</a>
                </div>
            </div>
            <div className={s['main-left_footer__right___company']}>
                <img src={officeIcon} alt="office building"/>
                <div className={s['main-left_footer__right___company____address']}>
                  <a href="#">{this.addUserData('@github', userData.company)}</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export { Main };