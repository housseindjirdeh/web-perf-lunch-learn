// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  Appear,
  List,
  Quote,
  Slide,
  Image,
  Text,
  Layout,
  Fill,
  Spectacle
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  xkcd: require("../assets/xkcd-installing.png"),
  downasaur: require("../assets/downasaur.jpg"),
  angular2HN: require("../assets/angular2-hn-logo.svg"),
  lighthouse: require("../assets/lighthouse-logo.png"),
  lighthouseReport: require("../assets/lighthouse-report.png"),
  httpsMeme: require("../assets/https-buzz.jpg"),
  noJS: require("../assets/no-js.png"),
  thinkingFace: require("../assets/thinking-face.png"),
  appShellContent: require("../assets/app-shell-content.png"),
  cogs: require("../assets/cogs.png"),
  webpack: require("../assets/webpack.svg"),
  workbox: require("../assets/workbox-logo.png"),
  angular: require("../assets/angular-logo.svg"),
  androidInstallBanner: require("../assets/install-to-home-screen.png"),
  androidInstalled: require("../assets/android-installed.png"),
  androidSplash: require("../assets/android-splash.png"),
  angularMobile: require("../assets/angular2hn-mobile.png"),
  reactMobile: require("../assets/reacthn-mobile.png"),
  polymerMobile: require("../assets/polymer-mobile.png"),
  iosApp: require("../assets/ios-app.gif"),
  citii: require("../assets/citii.png"),
  emptyPhone: require("../assets/empty-phone.png"),
  hnpwaShowcase: require("../assets/hnpwa-showcase.jpg"),
  endMeme: require("../assets/end-meme.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#122b45",
  tertiary: "#422e51",
  quartenary: "#CECECE"
}, {
  primary: "Avenir",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transitionDuration={500} theme={theme}>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.xkcd.replace("/", "")} margin="0px auto 40px" height="600px"/>
             <Text textSize="0.5em" margin="20px 0px 0px" bold>XKCD / Installing</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Progressive Web Applications
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote textSize="1.5em" textColor="primary">PWAs use modern web capabilities to provide a user experience similar to native apps</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.angular2HN} />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.lighthouse} margin="-70px auto 0px"/>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.lighthouse.replace("/", "")} bgDarken={0.75}>
            <BlockQuote>
              <Quote textSize="1.5em" textColor="primary">
                Lighthouse is an open-source auditing tool that you can use to test and improve your webpage
              </Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Image src={images.lighthouseReport} width={800} margin="-100px auto 0px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Network connection is secure
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Image src={images.httpsMeme} />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Can work with poor/no connection
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#f5f5f5" textColor="secondary">
            <Appear>
              <Heading size={1} fit caps lineHeight={1} textColor="#545454">
                Downasaur
              </Heading>
            </Appear>
            <Image src={images.downasaur}/>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.downasaur.replace("/", "")} bgDarken={0.75}>
            <BlockQuote>
              <Quote textSize="1.5em" textColor="primary">
                  A service worker is a script that runs in the background of your browser when you view a webpage.
              </Quote>
              </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={8} textColor="primary" caps>Adding a Service Worker</Heading>
            <List>
              <Appear><ListItem textSize="1em">1. Add the file and write the logic yourself</ListItem></Appear>
              <Appear><ListItem textSize="1em">2. Use a library</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote textSize="1.5em" textColor="primary">sw-precache integrates with your build process</Quote>
            </BlockQuote>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/service-worker-add-example")}
            ranges={[
              { loc: [0, 1], title: "Adding" },
              { loc: [2, 6] },
              { loc: [7, 8] }
            ]}
          />
          <CodeSlide
            transition={["fade"]}
            lang="html"
            textSize=".7em"
            code={require("raw-loader!../assets/service-worker-register-example")}
            ranges={[
              { loc: [0, 11], title: "Registering" },
              { loc: [1, 2] },
              { loc: [2, 3] },
              { loc: [3, 7] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.thinkingFace} height="200px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Application Shell
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.appShellContent} height="700px" margin="-50px auto 0px"/>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            textSize=".8em"
            code={require("raw-loader!../assets/service-worker-add-example-with-config")}
            ranges={[
              { loc: [0, 1], title: "WITH CONFIG" },
              { loc: [4, 5] }
            ]}
          />
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/sw-precache-config")}
            ranges={[
              { loc: [0, 1], title: "CONFIG" },
              { loc: [2, 3] },
              { loc: [3, 10], note: "Files to be precached" },
              { loc: [10, 11], note: "Where to create the service worker" },
              { loc: [11, 12], note: "Strips string from file paths" },
              { loc: [12, 13], note: "File that serves as fallback for failed URLs (App Shell) "}
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Manually?
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/ci-setup")}
            ranges={[
              { loc: [0, 1], title: "CI" },
              { loc: [2, 3] },
              { loc: [4, 5] },
              { loc: [6, 7] }
            ]}
          />
          <CodeSlide
            transition={["fade"]}
            lang="js"
            textSize=".7em"
            code={require("raw-loader!../assets/service-worker-add-example-with-config-in-build")}
            ranges={[
              { loc: [0, 1], title: "WITH CONFIG" },
              { loc: [4, 5] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Dynamic Content
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={8} textColor="primary" caps>Feed Caching</Heading>
            <List>
              <Appear><ListItem textSize="1em">1. Write the logic yourself</ListItem></Appear>
              <Appear><ListItem textSize="1em">2. Use a library</ListItem></Appear>
            </List>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/sw-precache-config-runtime-caching")}
            ranges={[
              { loc: [0, 1], title: "RUNTIME CACHING" },
              { loc: [13, 17], note: "sw-toolbox" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={2} caps lineHeight={1} textColor="primary">
              Handlers
            </Heading>
            <Appear>
              <Heading size={6} lineHeight={1} textColor="primary">
                <br/>
                networkFirst
              </Heading>
            </Appear>
            <Appear>
              <Heading size={6} lineHeight={1} textColor="primary">
                <br/>
                cacheFirst
              </Heading>
            </Appear>
            <Appear>
              <Heading size={6} lineHeight={1} textColor="primary">
                <br/>
                fastest
              </Heading>
            </Appear>
            <Appear>
              <Heading size={6} lineHeight={1} textColor="primary">
                <br/>
                cacheOnly
              </Heading>
            </Appear>
            <Appear>
              <Heading size={6} lineHeight={1} textColor="primary">
                <br/>
                networkOnly
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Appear>
              <Heading size={4} caps lineHeight={1} textColor="primary">
                App Shell
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} caps lineHeight={1} textColor="primary">
                +<br/>
                Dynamic caching
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} caps lineHeight={1} textColor="primary">
                =<br/>
                Offline Support
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="seconday">
            <Appear>
              <Heading size={6} textColor="seconday">SWPrecacheWebpackPlugin</Heading>
            </Appear>
            <Layout>
              <Fill>
                <Image src={images.cogs} height="250px"/>
              </Fill>
              <Fill>
                <Image src={images.webpack} height="250px"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="seconday">
            <Image src={images.workbox} width="600px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="seconday">
            <Appear>
              <Heading size={6} textColor="seconday">@angular/service-worker</Heading>
            </Appear>
            <Layout>
              <Fill>
                <Image src={images.cogs} height="250px"/>
              </Fill>
              <Fill>
                <Image src={images.angular} height="250px"/>
              </Fill>
            </Layout>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/angular-service-worker")}
            ranges={[
              { loc: [0, 1], title: "@angular/service-worker" },
              { loc: [2, 18] },
              { loc: [13, 14] }
            ]}
          />
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/ngsw-manifest")}
            ranges={[
              { loc: [0, 1], title: "ngsw-manifest" },
              { loc: [3, 4] },
              { loc: [5, 13] }
            ]}
          />
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/ngsw-manifest-local")}
            ranges={[
              { loc: [0, 1], title: "ngsw-manifest" },
              { loc: [3, 14] },
              { loc: [14, 18] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="primary" textColor="primary">
            <Heading textColor="secondary" caps fit>Service worker</Heading>
            <Layout>
              <Appear>
                  <Fill>
                    <Heading size={6} caps textColor="primary" bgColor="secondary" margin={10}>
                      Write the logic yourself
                    </Heading>
                  </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Heading size={6} caps textColor="primary" bgColor="secondary" margin={10}>
                    workbox
                  </Heading>
                </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Fill>
                <Heading size={6} caps textColor="primary" bgColor="secondary" margin={10}>
                  sw-precache
                </Heading>
              </Fill>
              <Fill>
                <Heading size={6} caps textColor="primary" bgColor="secondary" margin={10}>
                  sw-toolbox
                </Heading>
              </Fill>
            </Layout>
            <Layout>
              <Appear>
                <Fill>
                  <Heading size={6} caps textColor="primary" bgColor="secondary" margin={10}>
                    @angular/service-worker
                  </Heading>
                </Fill>
              </Appear>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={4} caps lineHeight={1} textColor="primary">
              I can haz?
            </Heading>
            <Appear>
              <Heading size={8} lineHeight={1} textColor="primary">
                <br/>
                <br/>
                Safari: Nope (under consideration)
              </Heading>
            </Appear>
            <Appear>
              <Heading size={8} lineHeight={1} textColor="primary">
                <br/>
                <br/>
                Edge: Development
              </Heading>
            </Appear>
            <Appear>
              <Heading size={8} lineHeight={1} textColor="primary">
                <br/>
                <br/>
                Chrome + Firefox + Opera
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={4} caps lineHeight={1} textColor="primary">
              Moar?!
            </Heading>
            <Appear>
              <Heading size={8} lineHeight={1} textColor="primary">
                <br/>
                <br/>
                Push Notifications
              </Heading>
            </Appear>
            <Appear>
              <Heading size={8} lineHeight={1} textColor="primary">
                <br/>
                <br/>
                Background Sync
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Add to Homescreen
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={'<link rel="manifest"href="/manifest.json">'}
            ranges={[
              { loc: [0, 1], title: "WEB APP MANIFEST" }
            ]}
          />
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/manifest")}
            ranges={[
              { loc: [0, 1], title: "WEB APP MANIFEST" },
              { loc: [3, 5] },
              { loc: [5, 17] },
              { loc: [17, 21] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={5} textColor="primary" caps>Chrome on Android</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Text textAlign="center" textColor="primary" textSize="1em">App install banner with repeat visits</Text>
            <Image src={images.androidInstallBanner} height="700px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Text textAlign="center" textColor="primary" textSize="1em">Can install to homescreen</Text>
            <Image src={images.androidInstalled} height="700px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Text textAlign="center" textColor="primary" textSize="1em">Splash Screen</Text>
            <Image src={images.androidSplash} height="700px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Text textAlign="center" textColor="primary" textSize="1em" margin="0 0 100px 0">App Loaded</Text>
            <Image src={images.angularMobile} height="500px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={5} textColor="primary" caps>Safari on iOS</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Text textAlign="center" textColor="primary" textSize="1.5em">Can install to homescreen</Text>
            <Appear><Text textAlign="center" textColor="primary" textSize="1.5em">but that's it...</Text></Appear>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="html"
            code={require("raw-loader!../assets/apple-meta-tags")}
            ranges={[
              { loc: [0, 1], title: "Apple-Specific Meta Tags" },
              { loc: [2, 8] },
              { loc: [9, 16] },
              { loc: [16, 24] }
            ]}
          />
          <Slide transition={["slide"]} bgColor="primary" textColor="primary">
            <Image src={images.iosApp} height="700px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Icons?
            </Heading>
            <br />
            <Appear>
              <Text fit caps lineHeight={1} textColor="primary">
                REALFAVICONGENERATOR
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Progressive enhancement
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#f0db4f" textColor="secondary">
            <Image src={images.noJS} margin="0px auto 0px" height="300px"/>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/no-script")}
            ranges={[
              { loc: [0, 4], title: "<noscript>" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Frameworks?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Text textColor="secondary" textAlign="center" textSize="1em" margin="0 auto 50px">Angular</Text>
            <Image src={images.angularMobile} height="500px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="#333" textColor="primary">
            <Text textColor="primary" textAlign="center" textSize="1em" margin="0 auto 50px">React</Text>
            <Image src={images.reactMobile} height="500px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="#664466" textColor="primary">
            <Text textColor="primary" textAlign="center" textSize="1em" margin="0 auto 50px">Polymer</Text>
            <Image src={images.polymerMobile} height="500px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="#f67500" textColor="primary">
            <Text textColor="primary" textAlign="center" textSize="1em">Whatever you like</Text>
            <Image src={images.emptyPhone} height="600px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="#f67500" textColor="secondary">
            <Image src={images.hnpwaShowcase} height="750px" margin="-30px 0px 0px -210px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <Image src={images.endMeme}/>
            <Layout>
              <Fill>
                <Heading size={6} caps textColor="primary" bgColor="secondary" margin={10}>
                  Houssein Djirdeh
                </Heading>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Heading size={6} caps textColor="primary" bgColor="secondary" margin={10}>
                  @hdjirdeh
                </Heading>
              </Fill>
              <Fill>
                <Heading size={6} caps textColor="primary" bgColor="secondary" margin={10}>
                  houssein.me
                </Heading>
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
