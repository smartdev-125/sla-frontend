import type { NextPage } from "next";
import SignupForm from "../components/home/EmailForm";
import PageWrapper from "../components/layout/PageWrapper";
import LlamaMintingSection from "../components/home/LlamaMintingSection";
import TypingEffect from "../components/utils/TypingEffect";


const Home: NextPage = () => {

  const roadmap = {
    1: {
      title: 'Agent Recruitment',
      text: <>Launch Llama Agent minting and staking.</>
    },
    2: {
      title: 'GET IN DISGUISE',
      text: <>Begin earning $HAY from staking & use it to mint your trait NFTs in <a href="/disguiseRoom">The Disguise Room</a>.</>,
    },
    3: {
      title: 'Set up communications',
      text: <>Exclusive Discord channel for Llama Agent holders unlocked for community votes. <br /><br /> Blue Chip NFTs are chosen to be added to the Agency Marketplace.</>
    },
    4: {
      title: 'Stand Out',
      text: <>Legendary skins auction begins. Winners can earn +2 $HAY daily. <br/><br/>We will also launch the Agency Marketplace where blue chip NFTs can be purchased with $HAY.</>
    },
    5: {
      title: 'ID CARDS RELEASE',
      text: <>Mint an ID Card NFT in exchange for $HAY in <a href="/disguiseRoom">The Disguise Room</a>.<br/><br/> Combine one with your Llama Agent to change its alias.</>
    },
    6: {
      title: 'PROMOTIONS',
      text: <>Holders begin having enough $HAY accumulated to enter The Ceremonial Hall and get promoted. <br/><br/>Higher ranks receive bonus $HAY.</>
    },
    7: {
      title: 'TROUBLE BREWING',
      text: <>Reveal the 25 Alpaca imposters disguised as Llamas within the collection.<br/><br/> The lucky holders will earn +5 $HAY daily.</>
    },
    8: {
      title: 'SEASON 2',
      text: <>New drop with Alpacas: The Alpacalypse.<br/><br/>The new NFT drop will be purchasable with $HAY tokens.</>
    }
  }

  return (
    <PageWrapper 
      title="SLA Home" 
      ogImageSource="/images/Logo-7-p-500.png" 
      webflowPageId="6227e74c03fec25390cb9dd4" 
      webflowSandwichMenuId="71e26f4a-7c30-586b-66a0-c09294f2d09c"
      toTopArrow={true}
    >
      <div id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-img">
            <img src="images/Group-37-1.svg" loading="lazy" alt="" className="scroll-down-img moveArrow" />
          </div>
          <div className="agent-div h">
            <img src="images/Rectangle-8-1.png" loading="lazy" sizes="(max-width: 767px) 120px, (max-width: 991px) 140px, 200px" srcSet="images/Rectangle-8-1-p-500.png 500w, images/Rectangle-8-1-p-800.png 800w, images/Rectangle-8-1-p-1080.png 1080w, images/Rectangle-8-1.png 1280w" alt="" className="agent-img" />
            <div className="vert-left _100 cent-mob">
              <div className="tb-32 margin-d"><strong>Agent Maken</strong>: </div>
              <div id="typed" className="tb-32 typedwithcursor">
                <TypingEffect text={`I see that you've snuck your way in pretty easily. We could use your kind of talent.`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LlamaMintingSection />
      <div className="reminder-cta">
          <div className="container-l w-container">
            <div className="hor-cen vert-mob">
              <div className="_50div">
                {/* <div className="tb-32 s-font">sign up to get a reminder</div> */}
              </div>
              <div className="_50div padd-right mob-all">
                <div className="form-block w-form">
                  {/* <SignupForm /> */}
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div id="about" data-w-id="5aefb5c2-9130-2695-7e31-d3e2103a421d" className="about">
        <div className="container-l w-container">
          <div className="vert-stretch">
            <div className="blue-div">
              <div className="_50div display-none" />
              <div className="_50div padd-right mob-all cent"><img src="images/Rectangle-18.png" loading="lazy" alt="" className="llama-img mob" />
                <h2 className="h2">Welcome to the<br />secret llama agency</h2>
                <p className="p1 p-white">The first ever PFP project with customizable traits and aliases. <br /><br />Our community of Llamas will represent your online identity, and earn you $HAY daily. The token can be used to purchase blue chip NFTs from our Agency Marketplace, mint Traits, Promotion Badges, ID Cards and much more!</p>
              </div><img src="images/pattern-big.png" loading="lazy" sizes="(max-width: 479px) 85vw, (max-width: 991px) 89vw, 83vw" srcSet="images/pattern-big-p-500.png 500w, images/pattern-big.png 1866w" alt="" className="absolute-bg" /><img src="images/Vector-3-1.svg" loading="lazy" alt="" className="u-l-corner" />
            </div>
            <div className="hor-cen padd-110">
              <div className="_50div display-none" />
              <div className="_50div padd-right mob-all">
                <h2 className="h2 h-black">giving the choice<br />back to you</h2>
                <p className="p1">Mint your Llama Agent &amp; traits separately. <br />Combine the traits with your Agent OR find different ones that you like on the secondary market - the choice is yours!</p>
              </div>
            </div>
            <div className="loop-wrap">
              <div className="loop-line-wrap">
                <div className="loop-line">
                  <img src="images/Rectangle-18-1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-18-1-p-500.png 500w, images/Rectangle-18-1-p-800.png 800w, images/Rectangle-18-1-p-1080.png 1080w, images/Rectangle-18-1.png 1383w" alt="" className="llama-img" />
                  <img src="images/Rectangle-21-5.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-21-5-p-500.png 500w, images/Rectangle-21-5-p-800.png 800w, images/Rectangle-21-5-p-1080.png 1080w, images/Rectangle-21-5.png 1383w" alt="" className="llama-img" />
                  <img src="images/Rectangle-20-1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-20-1-p-500.png 500w, images/Rectangle-20-1-p-800.png 800w, images/Rectangle-20-1-p-1080.png 1080w, images/Rectangle-20-1.png 1383w" alt="" className="llama-img" />
                  <img src="images/Rectangle-40-1_1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-40-1_1-p-500.png 500w, images/Rectangle-40-1_1-p-800.png 800w, images/Rectangle-40-1_1-p-1080.png 1080w, images/Rectangle-40-1_1.png 1383w" alt="" className="llama-img" />
                  <img src="images/Rectangle-38-1_1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-38-1_1-p-500.png 500w, images/Rectangle-38-1_1-p-800.png 800w, images/Rectangle-38-1_1-p-1080.png 1080w, images/Rectangle-38-1_1.png 1383w" alt="" className="llama-img" />
                  <img src="images/Rectangle-40-1_1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-40-1_1-p-500.png 500w, images/Rectangle-40-1_1-p-800.png 800w, images/Rectangle-40-1_1-p-1080.png 1080w, images/Rectangle-40-1_1.png 1383w" alt="" className="llama-img" />
                </div>
                <div className="loop-line"><img src="images/Rectangle-18-1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-18-1-p-500.png 500w, images/Rectangle-18-1-p-800.png 800w, images/Rectangle-18-1-p-1080.png 1080w, images/Rectangle-18-1.png 1383w" alt="" className="llama-img" /><img src="images/Rectangle-21-5.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-21-5-p-500.png 500w, images/Rectangle-21-5-p-800.png 800w, images/Rectangle-21-5-p-1080.png 1080w, images/Rectangle-21-5.png 1383w" alt="" className="llama-img" /><img src="images/Rectangle-20-1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-20-1-p-500.png 500w, images/Rectangle-20-1-p-800.png 800w, images/Rectangle-20-1-p-1080.png 1080w, images/Rectangle-20-1.png 1383w" alt="" className="llama-img" /><img src="images/Rectangle-40-1_1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-40-1_1-p-500.png 500w, images/Rectangle-40-1_1-p-800.png 800w, images/Rectangle-40-1_1-p-1080.png 1080w, images/Rectangle-40-1_1.png 1383w" alt="" className="llama-img" /><img src="images/Rectangle-38-1_1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-38-1_1-p-500.png 500w, images/Rectangle-38-1_1-p-800.png 800w, images/Rectangle-38-1_1-p-1080.png 1080w, images/Rectangle-38-1_1.png 1383w" alt="" className="llama-img" /><img src="images/Rectangle-40-1_1.png" loading="lazy" sizes="(max-width: 991px) 100vw, 300px" srcSet="images/Rectangle-40-1_1-p-500.png 500w, images/Rectangle-40-1_1-p-800.png 800w, images/Rectangle-40-1_1-p-1080.png 1080w, images/Rectangle-40-1_1.png 1383w" alt="" className="llama-img" /></div>
              </div>
            </div>
          </div>
        </div><img src="images/Vector-4.svg" loading="lazy" alt="" className="d-r-corner" />
      </div>
      <div className="video-div">
        <div className="container-l padd-116 w-container">
          <div className="vert-cent">
            <h3 className="h1 hm-center">discover our world</h3>
            <div style={{ paddingTop: '56.27659574468085%' }} className="w-video w-embed"><iframe className="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F689829111%3Fh%3D93926f220f%26app_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F689829111%2F93926f220f&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1396782374-e41175625e9e9c5007ea0fafdf330a98f5ee0d1983e8015989d6976cd5dc7c72-d_1280&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo" scrolling="no" allowFullScreen title="The Secret Llama Agency" /></div>
            <div className="video-bg">
              <a href="#" className="lightbox-link w-inline-block w-lightbox"><img src="images/Vector-18.svg" loading="lazy" alt="" className="play-button" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="features" className="blue-bg-div"><img src="images/pattern-big.png" loading="lazy" sizes="(max-width: 991px) 99vw, 100vw" srcSet="images/pattern-big-p-500.png 500w, images/pattern-big.png 1866w" alt="" className="absolute-bg" />
        <div className="container-l w-container">
          <div className="grid-wrapper"><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner" />
            <div className="w-layout-grid grid">
              <div id="w-node-d426fa1c-7988-00ea-e7f1-02247dd8f807-90cb9dd4" className="hor-cen vert-mob"><img src="images/Group-34.svg" loading="lazy" alt="" className="icon-features" />
                <div className="vert-left cent-mob">
                  <h3 className="h3">IMPOSTERS</h3>
                  <div className="tb-15 tb-center-m">25 hidden alpacas in the collection. The reveal will happen at chapter 7 <br />of the roadmap.</div>
                </div>
              </div>
              <div id="w-node-b63c381a-02e8-d0a1-5a2f-76dae45d851e-90cb9dd4" className="hor-cen vert-mob"><img src="images/Crown.svg" loading="lazy" alt="" className="icon-features" />
                <div className="vert-left cent-mob">
                  <h4 className="h3">royalties</h4>
                  <div className="tb-15 tb-center-m">7% royalty fee from secondary sales of Llamas and trait NFTs goes to the community wallet.</div>
                </div>
              </div>
              <div id="w-node-dab75b19-1732-46ef-a993-d4f20f5b5f6c-90cb9dd4" className="hor-cen vert-mob"><img src="images/Icon-8.svg" loading="lazy" alt="" className="icon-features" />
                <div className="vert-left cent-mob">
                  <h4 className="h3">community</h4>
                  <div className="tb-15 tb-center-m">Exclusive <a href="https://discord.gg/5STFvY9nu5" target="_blank" rel="noreferrer">discord channel</a> where the community can vote on the future of the project and which blue chip NFTs to sell on our Agency Marketplace for $HAY.</div>
                </div>
              </div>
              <div id="w-node-_7a1da29f-8c2a-82c1-df09-1e3a8ac27eb2-90cb9dd4" className="hor-cen vert-mob"><img src="images/disguise-room.svg" loading="lazy" alt="" className="icon-features" />
                <div className="vert-left cent-mob">
                  <h4 className="h3">disguise room</h4>
                  <div className="tb-15 tb-center-m">Exclusive access to trait NFT mints purchasable with $HAY in <a href="/disguiseRoom">The Disguise Room</a>.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="promotions">
        <div className="container-l w-container">
          <div className="hor-cen vert-mob padd-mob"><img src="images/Img-26.png" loading="lazy" sizes="(max-width: 991px) 100vw, 582px" srcSet="images/Img-26-p-500.png 500w, images/Img-26.png 582w" alt="" className="img-582 desk" />
            <div className="vert-left">
              <h3 className="h2 h-black">hold to get<br />Promotions</h3>
              <p className="p1">
                Staked Llama Agents earn 2 $HAY a day. Getting promoted means your Llama Agent receives even more $HAY! The higher you rank, the more you earn. <br /><br />
                You can mint your promotion badges and combine them with your Llama Agent in The Ceremonial Hall.<br /><br />
                Access is exclusive to those that hold a minimum of 60 $HAY in their wallet. 
                Check out <a href="/documents/Whitepaper.pdf" target="_blank" rel="noreferrer">our whitepaper</a> to learn more about the $HAY ecosystem and its utility.
              </p>
            </div><img src="images/Img-26.png" loading="lazy" sizes="(max-width: 479px) 86vw, (max-width: 646px) 90vw, (max-width: 991px) 582px, 100vw" srcSet="images/Img-26-p-500.png 500w, images/Img-26.png 582w" alt="" className="img-582 mob" />
          </div>
          <div className="w-layout-grid medals-grid">
            <div id="w-node-_3aba37f8-29c7-92cb-1450-1628618f3d33-90cb9dd4" className="vert-cent space-btw"><img src="images/Mask-group.png" loading="lazy" sizes="137.828125px" srcSet="images/Mask-group-p-500.png 500w, images/Mask-group-p-800.png 800w, images/Mask-group.png 992w" alt="" className="medal-img" />
              <div className="vert-cent">
                <h3 className="h3">Bronze</h3>
                <div className="p1 p-center">+5 $HAY<br />6,000 Supply</div>
              </div>
            </div>
            <div id="w-node-_73893607-b4a6-985d-5faf-d925bada0e0e-90cb9dd4" className="vert-cent space-btw"><img src="images/Icon-2.png" loading="lazy" sizes="177.8125px" srcSet="images/Icon-2-p-500.png 500w, images/Icon-2-p-800.png 800w, images/Icon-2-p-1080.png 1080w, images/Icon-2.png 1288w" alt="" className="medal-img" />
              <div className="vert-cent">
                <h3 className="h3">silver</h3>
                <div className="p1 p-center">+7 $HAY<br />4,200 Supply</div>
              </div>
            </div>
            <div id="w-node-_0883c520-3067-57da-43a7-e42b65709bfa-90cb9dd4" className="vert-cent space-btw"><img src="images/Icon-3.png" loading="lazy" sizes="205.3671875px" srcSet="images/Icon-3-p-500.png 500w, images/Icon-3-p-800.png 800w, images/Icon-3-p-1080.png 1080w, images/Icon-3.png 1453w" alt="" className="medal-img gold" />
              <div className="vert-cent">
                <h3 className="h3">gold</h3>
                <div className="p1 p-center">+9 $HAY<br />2,700 Supply</div>
              </div>
            </div>
            <div id="w-node-_4e637392-2729-564f-e996-4d36d3647ea7-90cb9dd4" className="vert-cent space-btw"><img src="images/Icon-4.png" loading="lazy" sizes="152.8828125px" srcSet="images/Icon-4-p-500.png 500w, images/Icon-4-p-800.png 800w, images/Icon-4-p-1080.png 1080w, images/Icon-4.png 1202w" alt="" className="medal-img" />
              <div className="vert-cent">
                <h3 className="h3">platinum</h3>
                <div className="p1 p-center">+11 $HAY<br />1,500 Supply</div>
              </div>
            </div>
            <div id="w-node-_099b3ed8-9cdc-4dd0-eadf-a71e82473bf3-90cb9dd4" className="vert-cent space-btw"><img src="images/Icon-5.png" loading="lazy" sizes="168.203125px" srcSet="images/Icon-5-p-500.png 500w, images/Icon-5-p-800.png 800w, images/Icon-5-p-1080.png 1080w, images/Icon-5.png 1432w" alt="" className="medal-img" />
              <div className="vert-cent">
                <h3 className="h3">diamond</h3>
                <div className="p1 p-center">+15 $HAY<br />600 Supply</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="roadmap" className="blue-bg-div"><img src="images/Rectangle-10.png" loading="lazy" sizes="(max-width: 991px) 99vw, 100vw" srcSet="images/Rectangle-10-p-500.png 500w, images/Rectangle-10.png 1867w" alt="" className="absolute-bg" />
        <div className="container-l relative w-container">
          <div className="vert-cent">
            <h3 className="h1 h-white hm-center">the storyline roadmap</h3>
            <div className="roadmap-wrapper">
              <div className="line" />
              <div className="_50div roadmap-50">
                <div className="hor-cen roadmap-hor">
                  <div className="roadmap-item"><img src="images/Vector-3-1.svg" loading="lazy" alt="" className="u-l-corner small" />
                    <h3 className="h3">Chapter 1. {roadmap['1'].title}</h3>
                    <div className="p1">{roadmap['1'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small mob" />
                  </div>
                  <div className="hor-line" />
                </div>
                <div className="hor-cen roadmap-hor mob">
                  <div className="hor-line" />
                  <div className="roadmap-item">
                    <h3 className="h3">Chapter 2. {roadmap['2'].title}</h3>
                    <div className="p1">{roadmap['2'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small" />
                  </div>
                </div>
                <div className="hor-cen roadmap-hor">
                  <div className="roadmap-item"><img src="images/Vector-3-1.svg" loading="lazy" alt="" className="u-l-corner small" />
                    <h3 className="h3">CHapter 3. {roadmap['3'].title}</h3>
                    <div className="p1">{roadmap['3'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small mob" />
                  </div>
                  <div className="hor-line" />
                </div>
                <div className="hor-cen roadmap-hor mob">
                  <div className="hor-line" />
                  <div className="roadmap-item">
                    <h3 className="h3">Chapter 4. {roadmap['4'].title}</h3>
                    <div className="p1">{roadmap['4'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small" />
                  </div>
                </div>
                <div className="hor-cen roadmap-hor">
                  <div className="roadmap-item"><img src="images/Vector-3-1.svg" loading="lazy" alt="" className="u-l-corner small" />
                    <h3 className="h3">Chapter 5. {roadmap['5'].title}</h3>
                    <div className="p1">{roadmap['5'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small mob" />
                  </div>
                  <div className="hor-line" />
                </div>
                <div className="hor-cen roadmap-hor mob">
                  <div className="hor-line" />
                  <div className="roadmap-item">
                    <h3 className="h3">CHAPTER 6. {roadmap['6'].title}</h3>
                    <div className="p1">{roadmap['6'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small" />
                  </div>
                </div>
                <div className="hor-cen roadmap-hor">
                  <div className="roadmap-item"><img src="images/Vector-3-1.svg" loading="lazy" alt="" className="u-l-corner small" />
                    <h3 className="h3">CHapter 7. {roadmap['7'].title}</h3>
                    <div className="p1">{roadmap['7'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small mob" />
                  </div>
                  <div className="hor-line" />
                </div>
              </div>
              <div className="_50div roadmap-50 _2">
                <div className="hor-cen roadmap-hor desk">
                  <div className="hor-line" />
                  <div className="roadmap-item">
                    <h3 className="h3">Chapter 2. {roadmap['2'].title}</h3>
                    <div className="p1">{roadmap['2'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small" />
                  </div>
                </div>
                <div className="hor-cen roadmap-hor desk">
                  <div className="hor-line" />
                  <div className="roadmap-item">
                    <h3 className="h3">Chapter 4. {roadmap['4'].title}</h3>
                    <div className="p1">{roadmap['4'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small" />
                  </div>
                </div>
                <div className="hor-cen roadmap-hor desk">
                  <div className="hor-line" />
                  <div className="roadmap-item">
                    <h3 className="h3">CHAPTER 6. {roadmap['6'].title}</h3>
                    <div className="p1">{roadmap['6'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small" />
                  </div>
                </div>
                <div className="hor-cen roadmap-hor _100-perc-mob">
                  <div className="hor-line" />
                  <div className="roadmap-item">
                    <h3 className="h3">{roadmap['8'].title}</h3>
                    <div className="p1">{roadmap['8'].text}</div><img src="images/Vector-5.svg" loading="lazy" alt="" className="u-r-corner small" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-w-id="7a4f8fa4-7279-fe36-6fc0-44621eda34d0" className="horizontal-loop">
        <div data-w-id="78353799-c989-a894-9de2-61867ff17b5a" className="hor-loop-wrap">
          <div className="image-loop-list">
            <img src="images/Rectangle-40-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-38-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-39-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-37-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-36-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-35.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-35-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-37.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-36.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-34-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-34.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-26-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-33-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-32-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-27-1.png" loading="lazy" alt="" className="loop-img-2" />
          </div>
          <div className="image-loop-list">
            <img src="images/Rectangle-40-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-38-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-39-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-37-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-36-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-35.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-35-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-37.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-36.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-34-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-34.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-26-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-33-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-32-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-27-1.png" loading="lazy" alt="" className="loop-img-2" />
          </div>
        </div>
        <div data-w-id="a6dc221c-b4ba-e835-34e3-a18cfcc9add3" className="hor-loop-wrap _2">
          <div className="image-loop-list">
            <img src="images/Rectangle-30.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-29-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-26.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-33.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-31-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-31.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-28.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-32.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-29.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-28-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-27.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-30-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-34-2.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-27-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-35-1.png" loading="lazy" alt="" className="loop-img-2" />
          </div>
          <div className="image-loop-list">
            <img src="images/Rectangle-30.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-29-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-26.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-33.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-31-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-31.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-28.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-32.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-29.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-28-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-27.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-30-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-34-2.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-27-1.png" loading="lazy" alt="" className="loop-img-2" />
            <img src="images/Rectangle-35-1.png" loading="lazy" alt="" className="loop-img-2" />
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container-l relative team-c w-container">
          <div className="vert-cent">
            <h3 className="h1">THE&nbsp;team</h3>
            <div className="w-layout-grid team-grid">
              <div id="w-node-f05bdcef-e83b-f504-0149-3f6d71c96aba-90cb9dd4" className="hor-left vert-mob"><img src="images/Rectangle-18_1.png" loading="lazy" sizes="(max-width: 479px) 78vw, 300px" srcSet="images/Rectangle-18_1-p-500.png 500w, images/Rectangle-18_1-p-800.png 800w, images/Rectangle-18_1.png 900w" alt="" className="llama-img team-img" />
                <div className="vert-left space-btw">
                  <div className="vert-left">
                    <h4 className="h3-big">Agent Bigspoon (Amr)</h4>
                    <div className="p1 p-bold">Project manager</div>
                    <div className="tb-15">Digital Marketing Specialist&nbsp;at Shoelace inc. and Former&nbsp;Secret Agent in Club Penguin.</div>
                  </div>
                  <div className="hor-cen">
                    <a href="https://twitter.com/AgentBigSpoon" target="_blank" rel='noreferrer' className="social-link-2 w-inline-block"><img src="images/Vector-15.svg" loading="lazy" alt="" className="social-img" /></a>
                    <a href="https://www.linkedin.com/in/amr-bitar/" target="_blank" rel='noreferrer' className="social-link-2 w-inline-block"><img src="images/Vector-19.svg" loading="lazy" alt="" className="social-img" /></a>
                  </div>
                </div>
              </div>
              <div id="w-node-b979447f-3238-6e7e-567b-8a82f1bc8be4-90cb9dd4" className="hor-left vert-mob"><img src="images/Rectangle-18-2.png" loading="lazy" sizes="(max-width: 479px) 78vw, 300px" srcSet="images/Rectangle-18-2-p-800.png 800w, images/Rectangle-18-2.png 900w" alt="" className="llama-img team-img" />
                <div className="vert-left space-btw">
                  <div className="vert-left">
                    <h4 className="h3-big">Agent FUbar (Robin)</h4>
                    <div className="p1 p-bold">Developer</div>
                    <div className="tb-15">Engineer and Computer Scientist interested in disruptive technology.&nbsp;Writes smart contracts to protect the Secret Llama Agency.</div>
                  </div>
                  <div className="hor-cen">
                    {/* <a href="https://twitter.com/robinxhenry" target="_blank" rel='noreferrer' className="social-link-2 w-inline-block"><img src="images/Vector-15.svg" loading="lazy" alt="" className="social-img" /></a> */}
                    <a href="https://www.linkedin.com/in/rhenry012/" target="_blank" rel='noreferrer' className="social-link-2 w-inline-block"><img src="images/Vector-19.svg" loading="lazy" alt="" className="social-img" /></a>
                  </div>
                </div>
              </div>
              <div id="w-node-_2d1f99f2-08c6-691d-47f9-9b97dd1e0b54-90cb9dd4" className="hor-left vert-mob"><img src="images/omotayo.png" loading="lazy" alt="" className="llama-img team-img" />
                <div className="vert-left space-btw">
                  <div className="vert-left">
                    <h4 className="h3-big">Agent ashiri (omotayo)</h4>
                    <div className="p1 p-bold">Artist</div>
                    <div className="tb-15">Digital Artist and Illustrator in Web 3.0.</div>
                  </div>
                  <div className="hor-cen">
                    <a href="https://twitter.com/EOA_art" target="_blank" rel='noreferrer' className="social-link-2 w-inline-block"><img src="images/Vector-15.svg" loading="lazy" alt="" className="social-img" /></a>
                    <a href="http://www.instagram.com/eoa_art_" target="_blank" rel='noreferrer' className="social-link-2 w-inline-block"><img src="images/Vector-14.svg" loading="lazy" alt="" className="social-img" /></a>
                    <a href="https://emmanuel_01.artstation.com/" target="_blank" rel='noreferrer' className="social-link-2 w-inline-block"><img src="images/4373813_artstation_logo_logos_icon.svg" loading="lazy" alt="" className="social-img" /></a>
                  </div>
                </div>
              </div>
              <div id="w-node-dbb9e34d-c2f9-13fa-9a5b-69cacbc74214-90cb9dd4" className="hor-left vert-mob"><img src="images/nasr.png" loading="lazy" alt="" className="llama-img team-img" />
                <div className="vert-left space-btw">
                  <div className="vert-left">
                    <h4 className="h3-big">Agent fuzz (nas)</h4>
                    <div className="p1 p-bold">Marketing Manager</div>
                    <div className="tb-15">Content creator @Nas.Alive. Former Marketing Specialist at the University of British Columbia and Content Creation Lead Trainer at the Nas Academy, by @NasDaily. Now a full-time secret Llama Agent.</div>
                  </div>
                  <div className="hor-cen">
                    <a href="https://instagram.com/nas.alive?utm_medium=copy_link" target="_blank" rel='noreferrer' className="social-link-2 w-inline-block"><img src="images/Vector-14.svg" loading="lazy" alt="" className="social-img" /></a>
                    <a href="https://www.linkedin.com/in/nasrbitar" target="_blank" rel='noreferrer' className="social-link-2 w-inline-block"><img src="images/Vector-19.svg" loading="lazy" alt="" className="social-img" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><img src="images/Rectangle-10.png" loading="lazy" sizes="(max-width: 991px) 99vw, 100vw" srcSet="images/Rectangle-10-p-500.png 500w, images/Rectangle-10.png 1867w" alt="" className="absolute-bg" />
      </div>
    </PageWrapper>
  )
}

export default Home