
# MetaBake's Tool Belt

#### 'Thanos has a glove. We just gave you a tool belt!'

#### Please star our main project here:
- https://github.com/intuition-dev/INTU

Listed dependencies gives you application a list of a election curated js libraries that you may chose to use/require.


It saves time, sets baseline for depps, defines popular/approved libs:

      mbake -f .

That will emit this code:

      script(src='https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.14/src/toolBelt.min.js')

It also contains polyfill and some other frequently needed functions.

ps: don't use .min. with html ship or web components loader