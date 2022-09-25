<template>
    <div class="AdminsNavbar">
        <div class="AdminsNavbar-one">
            lja英语线上学习系统
        </div>
        <div class="AdminsNavbar-two">
            <div class="AdminsNavbar-two-logo">
                <img src="../../../assets/ljalogo.png"/>
            </div>
            <div class="AdminsNavbar-two-message">
                <el-dropdown size="small" placement="bottom-start" @command="handleCommand">
                   <span class="el-dropdown-link">
                   <div class="AdminsNavbar-two-message-name">
                     <img src="http://vgms.cqvip.com/lunwen2019/assets/images/head.gif"/>
                     <div class="AdminsNavbar-two-message-name-div">{{this.admin.adminName}}</div>
                   </div>
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
                            <el-dropdown-item command="修改密码">修改密码</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <div class="AdminsNavbar-two-message-out">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAZo0lEQVR4Xu2dB7Q9VXXGP2vsIViDSkCNJdiIgg3FxF6wY0NR1FhiIhYEC5ZEECHGgqDBAvaQiNiliApW7IoaEYLYO4io2BBdv/87F9//vfvunb3PmZkzM3uv9V9vKad+Z747c87Z+9sXUVggEAhsiMBFAptAIBDYGIEgSDwdgcACBIIg8XgEAkGQeAYCAR8C8Qbx4Ra1JoJAEGQiCx3T9CEQBPHhFrUmgkAQZCILHdP0IRAE8eEWtSaCQBBkIgsd0/QhEATx4Ra1JoJAEKSehd5e0g5pOJ+W9MV6hjbdkQRB+l/7e0p6paRrrhnKdyT9s6T39j/E6Y4gCNLf2kMIiAFBFhkEgSgQJqxjBIIgHQO+qru7SDq2Yfd3l3RMw7JRrCACQZCCYBqbOlHSzg3rHCfprg3LRrGCCARBCoJpaOqik
                    n4l6VIN6/xU0lUlXdCwfBQrhEAQZD2QN0oP7zcKYTyvmZtK+oKxfU652jzZupaky0r6snFcoy4eBFlZ3jtKepKkf0wPCf/fzyS9S9Lekn5S+Cm4vaQPG9v8B0l8lpW0K0s6SNJ9JG2RGubN9iFJL5f0wZKdDbGtqRPk/pKeKelmCxbvF5IeVHiTXANBOD17q6TLL5j75yQdIOntQ3y4S4x5igS5uKSHpzfD9RuCeLakG0j6ccPyy4r1TZCrSDpd0hWWDTT9969JOlDSWySd37DOKIpNjSAQ4wWS/saxem+U9AhHvXlV+iYID/pDHXP5lqTnSHqTo+4gq0yFIPeQ9EJJN85YpR9JulpG/dVV+yYIe6orZcyFw4JnSOL4edQ2doLcQtJ/SrpNoVW8uqTvF2irT4JsLYk3QQk7SdJekj5borEa2xgrQf5S0ksl7VEYdH51zyrQZp8EgeTfLTCHWRN/lPRqSU+XxIHGqGyMBOFz6nBJbERL2hmSrlOowT
                    4JwhS+6dyHLZo+b1b2aCcUwqiKZsZEkL+SdKikh7SE7H5pg1qi+b4Jsr+kZ5WYyJw23iDpyZLOaan9TpsdC0HuK+k1kq7YEnpfl9T0SLjJEPomCGM8TdLfNhmsowzH4bxNmjpjOrropsrQCfIXkl6S3MHbQgyXkF0kfa9gBzUQ5BqS3rnkkjRnyuxNOCDhInawdydDJgj7AW54c45ulz0AxGs8cVkhx3+vgSCzYTPHJzjm0LTKZyQ9QNK3m1aoqdxQCfJASUdIukwLYP5S0uvSKVip49C1w6yJIIyNi9OnSnqUpMu1gOnPJe0m6X0ttN1qk0MkSFu/eD9IpDhM0rmtoi7VRpDZdDkef1wiC+71pQ3HyH1KN9pme0MiCLETR0u6W2FAIAMnVC+T9PvCbW/UXK0EmY2XvR0nUc9e4szogett6aTxD57KXdcZCkG2TG4NNy8IEMFH3JewiSQgqUurnSAzLLhLepGkR0oq+axwV3JvSed1Cbqnr5KT9vT
                    fpA7iBsQnlLqko89PpM13mwFIi+Y2FILM5kCw1n9J2rHJgjUsA/bE5ZfykG7Yra1Y7QTZLgXtlPoe5hcLlwj2MX3a0Agyw4qgMtzem4YKL8OYky2wOHNZwb7+e80E4WLuI5KIeithRPDtXtgPyTuuoRKE+W6TThCZQwnDL+xWlazLuvnUShDIgadoCX8qjhj3lIQLRC02ZILMMHxsuggscSyMb9htayRJjQRhr8EeocSb40vpFrw20bUxEASi4KrCZS1CF7kGSXiT/DC3oZL1ayMI5PhoocCkg1OsQldHt5Z1GQtBmDNHwodIeowFgA3K/n96k1RDkpoIwkYckQDiFXJsCLe2YyLIbK0I4SUuBOmgHCP+/ZYdXNY2GmMtBLm0pE8VeFWjZXUnSW1qWjUCdkmhMRKEKf+dpOML/Mix/7yDpN4vE2sgCCqD75GE/myOfUzSvZKeVU47XdQdK0HAji8BSJLrRIqvHb5hvVoNBMH3iRORHDsyHeHWuN+Y
                    N68xE4T54kT6Pw2U65etOa4uiG30Zn0TBH8fYsdzjOi4fXMa6KHu2Akyg5Tbd5wfcwxX+d6E6/okCIojHOfyieW1F6ebcW/9vupNhSDgi54YemReQwqVz7Ve9pV9EQS5y6/OyapkAZEQ29xPM0t/JctOiSD8ACJxinyr1z4viR/UziMT+yIIynwP86KVlP2IeSasc4g2JYKwPheT9O7Mgxj2IuxJOrU+CPJgSf+dMUu+R/kuHbJNjSCztcIrG5V6r90uXSR765vrdU0QXNf5tFqkKL5oEhzlcj7+O/NM66owVYIgls0ael1TiPrET6/tiM8Ln5auCYIbyU7OZxXpHdIkj0G9b6oEYelzPSZKiogvfRS7JAgbau48PIZw9N8X0sX19F+6zpQJApa8BfCcaJp+YS3+d5b0gdKLMq+9rgiyVRIq8/rp3ETSKV0A0lEfUycIMJPNy5vBCrUZ8rX8uu316oog5PpGM9dj5Ah/ladixXWCICuLkyOBygUzU
                    kWtWhcEQcMKtwOPoaNEqrCxWRBkZUXJ9sWnFp/PVuOIn9R51mSopn7aJgixy8QbexLPoBZ+w4E4H5pAT3HYNSTxtI67jfJk1yWzrkcEEOEHBCVas7YJgqSOx9mMXwd+ZYlJH6PFG2TzVUVWCO9dj+0q6ShPxSZ12iQIKn1spvhrtVektMzWekMpHwRZv1K4yBPLY7VTJaF+g85ZcWuTIN4NGCrqxDq3fkJRHM3mDQZB1mNFJCkPu0cEArcj7keKW1sEQQkRzSPPse4dM47/igPUUoNBkPnAojLv0SxDlGPbNiIQ2yIIOrdI7VgNJ0a0q8ZuQZCNV/jk5LlrfQYgF/EnRa0NgpDokjTDVjtbEicaiC6M3YIgG68wt+wIN1iNLxbSOBS1NgjyfEnPc4zyaSlblKPq4KoEQRYvmTfFBZ7i3ju3uSMqTZBLJuEvEmpajI0535BDiSm3zG1e2SDIYgRxaCSrsHUPW/xepDRBiD/2fAcSkvnm3KduQPWDIM
                    sX69+dWYWRMMWlvoiVJAhtwXreBBb7SkZ8gKWfmsoGQZavBm8P9hWciFqMxKRkPS5iJQmCzxT6VlZDy8pTz9pPTeWDIM1WY++UbqFZ6T+XQsKWH+tsK0kQQmHvZxwR0vdbDzi23DjdC4sHQZohR7wICXbQ/7UYn2eeg6J1fZQiCLefHNNewjKLJC5NLu2pWRCk+YqTcdiqsIgINt4Y2VaKIFz1v944mt+mFAdjCKE1Tr3aLLfWeXRRHr1fdAyshgt9tit8KYIcm/LNWSaBEniu6p6lv5rKxhvEthofl3RrWxX9hyT2MFlWgiDem3OULTjBmqIFQWyrvpvjGoD9LSo6WVaCIITEHmocBQEyuerfxi6rKh4EsS0H6THOksRfi90mydta6mxWtgRBPH78z3Ae37knWlnFIIh9Qd4iiSQ9FjtI0j6WCmvL5hKE4zecCy3HcEQLcrTLK3CqFgSxrzyiH4h/WCzb9SSXIOgTHWcZcZKOREJyyhYEsa8++r5
                    4iVv9/PDr4i7FZbkE4aRgL2PPj88QkDN2VW3xIIhvaZB/4vmxGBt81OVdlksQNtsoj1iM9M4/tVQYYdkgiG9RPZ9Zb5CEKITLcgjCg259dU399Gq2SEEQ1+O6aa9r3fPyjPKZ5bIcgjzE8eo6UBInWFO3IIj/CUCTF90Ci11X0umWCrOyOQQh/RlRgBZDj9UqmGZpfyhlgyD+lWLPy97XYu5IwxyCIDzMA9/Uzktq3r3nvm464BbLBUH84LLn5VPdYu4vlxyCnGMUhTvBKQxmAWIoZYMgeSv1M0lbGJrgKuKuhvIXFvUSZJukuWvpM/tW09JZ5WWDIHkLZE3lxo+59f5k0wi9BCGk8WjjHN3fgcZ+hlA8CJK3SsQQWVMfoNyIILrJvAT5N0nPNfW0EsBCIEvYijC39bCC5JcnBnibEPB4995d0jFW/LwEsTqOobPrkbe3zmco5YMgeSvlCaL6V0mHWLv1EsSajJPyU/e/Wr02QRDrk7q+PE6vFnPt
                    gb0EIa0BHrlNDc0rtK/CVhAIguQ/CXyuX9vQDIqL7INN5iEIdbjLsNQ9QNKzTCMbd+EgSP76sh/b2dDMJyQRQGUyy0M+a5g3B28Qi40xEadl/mvLBkFy0FupSyaAhxmacYXgegiyU4rpMIxNuziCXSztD61sECR/xfgqsfj1sWchpsS0d/EQBHE4ROIsRvy51T3A0v7QygZB8lfMk2xnK0k/sHTtIQhxwRzzWuyvk+q7pc6YywZB8lf3PpLeYWyG42FT7hEPQVC5Q+3OYldMyouWOmMuGwTJX10cZXGYtRjaWp+0VPAQxCPzQ6bbcy0DG3nZIEj+At9c0meMzdxNEiKHjc1DkKc4MkFxiz7mrLWNAU8FgyBWxNaXx3XpNGMzBPkdaanjIQgnB5wgWAxR6/MtFUZeNgiSv8CE0f7Q2IxZMMRDEGTlyUNoMU8/lvaHVjYIkr9il3J8lZgFCz0P7r6SXmCcH8H2vzPWGXNxTybXG0g6dcygGOdGPkwyB
                    FjsOZL2s1TwEMST9SdOsTZflYtKIu1DUw9n9m/kYLnAsrgjL8szZZWP4tk1xbN7CPJkSS81gk/+avLNhf0ZAZKdNk3/cJhDMG3sWHuiWveUdLAFGA9BPMe8BNp7kqBY5jK0suiK4ZFKmrFFxq8kn1fWX8uh4WEdL+kzTjFW6mSTvoekw40Du6WkTxnrTKE4XgmvXSDrz6cVqoD/OwUwjHO8lSO1we7JybFxV543iCce/U6SUDUJW48ASV6IsUYInAtVDPXA9yVnvO8EaHMR8Ainm51mPQQhMvAk46JBKvJXhy1GgNMtLE6rlj8p95d01PJim5XgrXOypY6HINs5UqeZX22WSUTZSSLAp+cRxpmbhUM8BMEz1yqfggKK9e7EOPcoPjEEyIXOvYbFtpSE6Fxj8xDk4ukGk79NjfwMSLWEBQKlEODgYldDY1wqcvtuMg9B6OAbkrY19PR5STczlI+igcAyBDji5ai3qf2fJLYHJvMSxCpc7WKvaSZReG
                    oI8EzhbtLUyG/IKZbJvATh7P7Rpp5WclZPOXGnEa4ovgAB5H6sKp3coHOTbjIvQTwu7yQ9sUaAmSYThSeDADKi3BNZ7F8kHWqpQFkvQXhVvdvYmUv60dhHFJ8GAiRuIoGTxVzaxl6CXEvSGZbRScpKpmjsK4qPGwGiAh9knCLpD0iDYDIvQejkN9KmpIpNjegv7lDCAoFcBKwJdNzPXg5BcD7c0ThT3jxnGutE8UBgNQIeT47jJd3FA2MOQV4u6UnGTh/jkAwydhHFR44Ae1lTTIck8tlYw8Q3wZhDEI+zGIJzFj3Vka91TM+BAGJxiMZZzJ1dOYcgnpBH97egBY0oO1oEeF4JVb6sYYao6Vw+7ZkN1VaK5hCE+kQJIudoMXdSd0snUXaUCGwvCbcli33EmCZhs7ZzCeLZh7BveYVlhlE2EEgIkGNmfyMaWZ7kuQS5p6T3GAeMXKT19MvYRRQfKQJWJ1lguIWkT3vxyCUI34Jcvlhc3xkrvjRMNiw
                    QaIqAR4uX0GUuCE05QVYPKJcgtEU6Y5QCLUbwlDWNtKX9KDs+BF7mcDbkxh09XreVIIhHJ8uVDss9y6g4dAQQ2uMEFKkki5G0k+SdbitBEESEydpjbYuEiiRWDAsEliFA2oL3Lyu05r/jCsXnFX/dZn2oN+rImnGUdl4lCRG6sEBgGQKEbFs/lYqEeZciCBKaSGlaDIczMub+0lIpyk4OAT6rkK21xpNzwmqNGVkHbimCIHj2E0nkAbGYWY7e0niUHQUCL5K0j3EmZ0m6WomcNKUIwvg9r0H0ZnmLRPYp4xMwkeJbSEJZEmV7ix1oTBG9YdslCeJJqsjAOAXjRj4sEFiLAF64nuuAYtkEShKEtoj1YHAW4wQMKftIsGNBbfxleWvwbFjfHtzL8WNdxEoShAHtZU1QkmZBUnjrJr8IANFItQg825oNKs3kAZLeXmpWpQnCZh1Z0qaZk2bz4JTC+uYphUG0Ux8CuDCx9+Aew2LfNAoaLm27NEHo8BBJ
                    T1za8/oCcaLlAG2kVUiTxteI1Z7qyH62sI82CELcOaJe1rbPk3Sd9N1pBSbKjweB66U4o4sZp8RJKF4dBFQVM+tD3LRjq7DwrN23SXpg006i3CgR+LikWztm9kJJ7FuKWlsEIcrwy5JwMrNaKDBaERtPeVLSoVtgNdza2cPyt6i1RRAG+WZnygPiRMi09PuiM43GakeAuPHT0g24daxZUYOLOmuTIOwnTrfONJXHteAgZ92oNkwEXiLpKY6ht+rT1yZBmCvJKTlZsBouyuQTIadD2PgRIHfgx5yf5P+UMgW3glLbBOG1+XWn5CgnYTeRxOlW2HgRQD4KdRxOoKz2WUk7WCtZyrdNEMbi3XhRl9Mwq0ixZf5Rtl8EeP4+5AjZZtTEmfMDymFQa9YFQRg82kS3dc7iUY5sps6uolrHCJCEk2ScHiPXBzk/WrWuCMKp1FckWS9/mHzsR1p9BHprPGffQZgEF9JFLwXnIdEVQejb6z5AXY7/2LRH9GFvz
                    3PRjtlvfMm572AgD0/XCEUH1TdBcGBk4+3NEcK3KsH74Rbf+mPRagcc3HzSk3E2jQqhDwQ/OrEu3yBMiDRY5Cn09kvat/tKuqATdKKT0ggQV876e1xJGAtfEDeU9K3SA9uoPe+DmjO+/TJ9Zl4niTwjYcNCgP0n0j13zhj2vRxStxnd+X/JczrFP4tTrZzX5AGSEDIOGwYC/BDjY2WV7lk9O8KyCc/u1Pp4gzDBrSSdIolLIq9FLLsXue7rcSSbo4H2OUlo83ZufRGEid5B0gkZM+aiiCCr8NnKALHlqjxfkIOQaq9xlHtjSUQLdm59EoTJIs+yd+asUWgkgtGt4J3Zf1SfjwAZkNHFvXcmQKRbe1dmG+7qfROEgeOklrMfoY2jJO3qRiEqlkYAPStUDb2nVbPx9LLvWA1GDQRhH0IUGaGWOcbZOvckxYNmcgY1wbrXSJ/Ouev53pSs8w99YlgDQZg/oJ4s6eqZYJwqiYjE72W2E9V9CLBXOM4Z9L
                    S6x6y8gr6hz69VC0EYHf5avEm2zJwgfjpoI52U2U5UtyFAeu/XOESm1/aCC8pOtbgV1UQQgOIXiF8P9LVyjNfyvpIQPg5rFwHS7x2ceVI1G+HXEjnObnfIzVuvjSCMHKdESGIVn5s362NSPEnrXp/NIR9VST6Jjy6UlJXwbA5ryBJQjdVIEMAhduTYQiTBQRIXBX6dwsohsHM6PbxSgSYR6oAcpFmrymolCCDdLpHk0gUQ+1X65CIRZFgeArzZn1fg/mo2Ct4ckA2h6uqsZoIAFps1TkVKfG7RHu4tBPm782ZXt4LdDuh+kviRuWahbtErgBw/KtRe8WZqJ8iMJHiBEkdQyg5Pv4BkIgpbjgDRe3gs5Hjiru0FxRrCH368vPv+SgyBIKCzXfrc4r6klHFSgi/Xa8NNZUNIcRd5ZkqBZs0RuGid8J4gh2D1l7pDIQhgk3OOU6mblmJIaodfshenEM5Qc1wB5QqSHi9pz+R5XRLyIyXtPhTlzCERhEV
                    iLwLAu5RcsdQW38F8X79S0rkttD+EJglDQOgPcpCjo7QhLo3I9GBsaASZAfv0BDSXVKWNO5NXS0IKk2RAUzDExvncfLAjU3ETfDi+pe3BeTcMlSAsCp6ipNri06sNOz+Fdx4m6fgR7lMumVJNcKrHkXpbBinwtK7qArDpZIdMEObIJRWhnCVPV+ZhR7AOm3l8jao+dWmw8HjZEsCEdE6u39ui7nD3IUvt/kMW2Rg6QWYLhCo4n0RdGME7EAUZoqHkd4cI95D0uAKxN00wJr8gkrGEIAzaxkIQFmF7SW9NXsFdLQoXjiemoC8+JWrZ3PPZSSpk3Df4i6d0V8YbnQjP6o9wmwAyJoLM5puj99oEs0VlcNUmTzc3xGdIwseIv20ZdxPXTjKcXOZxX0Q8zLZtdbigXTIVPzZ5PvTQfTtdjpEgIMXDgn7W7duBzdzqmavIwoN0zqp/JIDhf/MXfyR8z0h/PO8fn0rbrCKFV6XSPIElFbhHIsvTUD45G89/
                    rASZAcBGlMW7SmNEoqAFAT4x9xhzoqOxE4TFRkCAwCle/1OYr+UB95bFh400efi0jVpNZkoPDMebXIbt1tJlmPdhG1I9PgFRGsFxsZYDiVbxmxJBZkASBQdR+DRow52i1QXrqXHST/AWPqKn/nvrdooEmYGNQx73Ajjk5aqp9LaALXfMETb3S0jwjPpTaiMcp0yQ1Zg8QtJeSVq/5WduEM2T4x5ifGEQo21xkEGQzcHlWJhbeWIVUKGfkrHxxknzkAk5aS5d3yDIfIi4R8H7FF3ZHZeiONwCeC4jjoH7DOoko7vHyF2aIMhyBK+chOjwZUKRvmRk3fLey5fAhR8vaLRzifcPW4BAEMT2eHDLjecw4gV8jm1tq95baRQreVOw2f5ib6MYYMdBkLxFIwIP5RXEB3ZIond5LebXJjgJEkCKjw4xSCkfgnItBEHKYTlrCc9ZEk0SpYffFG8ZZHL4V0Lji34ID8alfPYPcTzy0EMMfLrCCiEQBCkEZMNmS
                    PUwIwt/2d8sW4PfSPruKjLgIRzWEQLLFqejYUQ3gUCdCARB6lyXGFUlCARBKlmIGEadCARB6lyXGFUlCARBKlmIGEadCARB6lyXGFUlCARBKlmIGEadCARB6lyXGFUlCARBKlmIGEadCARB6lyXGFUlCARBKlmIGEadCARB6lyXGFUlCPwJLi0JBRFah30AAAAASUVORK5CYII="/>
                    <div class="AdminsNavbar-two-message-out-div" @click="outClick">退出登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {SelectAdminsByAdmins} from "@/network/admins"
    import AdminsNavbarUpdatePassword from "./AdminsNavbarUpdatePassword"
    import AdminsNavbarProfile from "./AdminsNavbarProfile"
    export default {
        name: "AdminsNavbar",
        computed:{

        },
        mounted() {
            this.getAdmins()
        },
        data(){
            return{
                admin:{}
            }
        },
        methods:{
            //我的下拉
            handleCommand(command){
                if(command=="个人中心"){
                    this.$router.push("/AdminsNavbarProfile")
                }else if(command=="修改密码"){
                    this.$router.push("/AdminsNavbarUpdatePassword")
                }
            },
            //点击退出
            outClick(){
                this.$router.go(0)
                this.$router.push('/')
            },
            //根据管理员Id过去管理员信息
            getAdmins(){
                SelectAdminsByAdmins(this.$store.state.adminsId).then(res=>{
                    this.admin=res
                })
            }

        },
    }
</script>

<style scoped>
    .AdminsNavbarUpdatePassword{
        position: relative;
        right: -120px;
        top: 150px;
    }
    .AdminsNavbar {
        width: 100%;
        height: 30px;
        display: flex;
        flex-wrap: nowrap;
    }

    .AdminsNavbar-one {
        width: 125px;
        background-color: #2B2D36;
        color: #f2f2f2;
        font-size: 12px;
        text-align: center;
        padding-top: 6px;
        font-family: Myriad Pro, Helvetica Neue, Arial, Helvetica, sans-serif;
        font-weight: 600;
    }

    .AdminsNavbar-two {
        width: 753px;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f2;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
    }

    .AdminsNavbar-two-logo img {
        width: 70px;
    }

    .AdminsNavbar-two-message-name img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }

    .AdminsNavbar-two-message-out img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }

    .AdminsNavbar-two-message {
        color: #333;
        font-size: 9px;
        display: flex;
        flex-wrap: nowrap;
        padding-top: 7px;
        position: relative;
        right: -80px;
    }

    .AdminsNavbar-two-message-name, .AdminsNavbar-two-message-out {
        display: flex;
        flex-wrap: nowrap;
        /*鼠标变小手*/
        cursor: pointer;
    }

    .AdminsNavbar-two-message-name {
        margin-right: 30px;
    }

    .AdminsNavbar-two-logo {
        position: relative;
        left: -110px;
    }

    .AdminsNavbar-two-message-name-div {
        position: relative;
        top: 4px;
        color: #333;
        font-size: 9px;

    }

    .AdminsNavbar-two-message-out-div {
        position: relative;
        top: 2px;
    }
</style>