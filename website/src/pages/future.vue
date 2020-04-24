<template>
  <div class="whyChange">
    <div class="bagin">
      <div class="bagin_txt">
        <div class="pog">POG战略愿景</div>
        <div class="ps">
          作为POG软件发展的贡献者，Block.one致力于与社区合作开发一个平台，以加强和发展生态系统。以下是我
          们旨在使POG成为世界上最快，最可扩展且最容易使用的区块链的基础支柱。
        </div>
        <div class="details">
          我们对POG的愿景概述概述了Block.one在接下来的几年中与社区紧密合作，致力于不断探索软件进步的方向
          性领域。本文档中感兴趣的领域不应被视为带有发布日期的产品，应被视为我们致力于不断改进的广阔领域。
        </div>
      </div>
    </div>
    <div class="bagin_pic">
      <div class="item1">
        <div class="item_one">可扩展性</div>
        <div class="item_two">
          更多的应用程序，
          更多的用户
        </div>
      </div>
      <div class="item2">
        <div class="item_one">开发人员</div>
        <div class="item_two">
          更好的工具，更快
          的应用程序开发
        </div>
      </div>
      <div class="item3">
        <div class="item_one">用户</div>
        <div class="item_two">
          更高的安全性，更
          少的摩擦
        </div>
      </div>
      <div class="item4">
        <div class="item_one">企业</div>
        <div class="item_two">
          更大的灵活性，更
          好的合规性
        </div>
      </div>
    </div>
    <div class="scalability">
      <div class="scal_item">
        <div class="scal_txt">
          <div class="scal_title">可扩展性</div>
          <div class="scal_ps">更多的应用程序，更多的用户</div>
          <div class="scal_nav"></div>
          <div class="scal_details">
            POG凭借行业领先的交易速度和区块确认时间，致力于成为全球性能最高的区块链之一。
            我们将继续探索垂直和水平缩放解决方案，以提高性能。向下滚动以获取概述， 并在我们
            关POG战略愿景的最新文章中继续阅读有关可伸缩性的内容。
          </div>
        </div>
        <div class="swiper_item">
          <div class="tab">
            <div @click="toslide(0)" :class="[toindex==0 ? 'active':'']">垂直缩放</div>
            <div @click="toslide(1)" :class="[toindex==1 ? 'active':'']">水平缩放</div>
            <div @click="toslide(2)" :class="[toindex==2 ? 'active':'']">数据访问可扩展性</div>
          </div>
          <swiper ref="mySwiper" :options="swiperOption" class="swiper-no-swiping">
            <!-- slides -->
            <swiper-slide style="padding:1px">
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(1)" class="welfare_title">
                    <img :class="{'expend': isShow==1}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===1}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">通过增强多线程功能探索在多核计算机上提高吞吐量</div>
                  <div @click="changeShow(2)" class="welfare_title">
                    <img :class="{'expend': isShow==2}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===2}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">持续分析nodeos以找出目标改进领域</div>
                  <div @click="changeShow(3)" class="welfare_title">
                    <img :class="{'expend': isShow==3}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===3}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">探索先进的数据库技术以提高灵活性和吞吐量</div>
                  <div @click="changeShow(4)" class="welfare_title">
                    <img :class="{'expend': isShow==4}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===4}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">探索可以提供更具成本效益的访问稀有资源（如RAM）的区块链技术</div>
                  <div @click="changeShow(5)" class="welfare_title">
                    <img :class="{'expend': isShow==5}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===5}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide style="padding:1px">
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(11)" class="welfare_title">
                    <img :class="{'expend': isShow==11}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===11}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(22)" class="welfare_title">
                    <img :class="{'expend': isShow==2}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===22}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(33)" class="welfare_title">
                    <img :class="{'expend': isShow==33}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===33}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(44)" class="welfare_title">
                    <img :class="{'expend': isShow==4}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===44}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(55)" class="welfare_title">
                    <img :class="{'expend': isShow==5}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===55}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide style="padding:1px">
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(111)" class="welfare_title">
                    <img :class="{'expend': isShow==111}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===111}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(222)" class="welfare_title">
                    <img :class="{'expend': isShow==222}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===222}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(333)" class="welfare_title">
                    <img :class="{'expend': isShow==333}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===333}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(444)" class="welfare_title">
                    <img :class="{'expend': isShow==444}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===444}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
              <div class="problem_r first">
                <div class="right_item">
                  <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
                  <div @click="changeShow(555)" class="welfare_title">
                    <img :class="{'expend': isShow==555}" src="../assets/point.png" alt />
                  </div>
                </div>
                <div :class="['welfare_body', {'body_expend': isShow===555}]">
                  <p>
                    并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                    经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                    其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="scal_item">
        <div class="scal_txt right">
          <div class="scal_title txtRight">开发人员</div>
          <div class="scal_ps txtRight">更好的工具，更快的应用程序开发</div>
          <div class="scal_nav navRight"></div>
          <div class="scal_details txtRight">
            POG 成功的支柱是采用应用程序开发平台。通过新的工具和库来改善开发人员的体验，以
            供开发人员在 基于POG的区块链上构建应用程序，这是一个持续关注的领域。向下滚动的
            概述，并继续在我们的阅读开发商的最新文章在POG战略愿景。
          </div>
        </div>
        <div class="swiper_item">
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">创建图形用户界面（GUI）以使开发人员体验更流畅</div>
              <div @click="changeShow(101)" class="welfare_title">
                <img :class="{'expend': isShow==101}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===101}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">推进通用身份验证器库，使应用程序易于支持用于签署交易的大量身份验证器</div>
              <div @click="changeShow(102)" class="welfare_title">
                <img :class="{'expend': isShow==102}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===102}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">制定Java和斯威夫特稳健POGSDK来实现的脆本地移动体验的发展</div>
              <div @click="changeShow(103)" class="welfare_title">
                <img :class="{'expend': isShow==103}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===103}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">构建智能合同调试器和其他工具，以简化合同开发</div>
              <div @click="changeShow(104)" class="welfare_title">
                <img :class="{'expend': isShow==104}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===104}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">全面修改现有开发人员文档，并迁移到可扩展性更好的平台，以更好地支持EOSIO不断发展的全球生态系统</div>
              <div @click="changeShow(105)" class="welfare_title">
                <img :class="{'expend': isShow==105}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===105}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">探索工具以增加粒度以用于智能合约数据搜索</div>
              <div @click="changeShow(1051)" class="welfare_title">
                <img :class="{'expend': isShow==1051}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===1051}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="scal_item">
        <div class="scal_txt">
          <div class="scal_title">用户</div>
          <div class="scal_ps">更高的安全性，更少的摩擦</div>
          <div class="scal_details">
            最终用户的易用性最终将推动区块链应用的采用。展望未来，我们致力于在认证器，应用
            程序和区块链如何交互方面提供最先进的技术，以提供安全便捷的用户体验。向下滚动以
            获取概述，并在我们有关EOSIO战略愿景的最新文章中继续阅读有关用户的内容。
          </div>
        </div>
        <div class="swiper_item">
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">
                增强Ricardian模板工具包，应用程序清单和声明合同，以帮助应用程序为区块链应用程序的用户提供一致且
                安全的体验
              </div>
              <div @click="changeShow(201)" class="welfare_title">
                <img :class="{'expend': isShow==201}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===201}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">支持WebAuthn和基于浏览器的区块链应用程序签名</div>
              <div @click="changeShow(202)" class="welfare_title">
                <img :class="{'expend': isShow==202}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===202}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">允许应用程序为其用户支付资源成本（例如，允许明确控制谁为CPU / NET计费）</div>
              <div @click="changeShow(203)" class="welfare_title">
                <img :class="{'expend': isShow==203}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===203}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">探索创建去中心化文件系统，以使应用程序可以托管任何Web浏览器均可访问的文件</div>
              <div @click="changeShow(204)" class="welfare_title">
                <img :class="{'expend': isShow==204}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===204}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="scal_item">
        <div class="scal_txt right">
          <div class="scal_title txtRight">企业</div>
          <div class="scal_ps txtRight">更大的灵活性，更好的合规性</div>
          <div class="scal_nav navRight"></div>
          <div class="scal_details txtRight">
            随着企业级应用程序继续采用POG区块链，我们将继续致力于提供协议升级，以增强共
            识协议的灵活性以及POG区块链上存储的数据的安全性和完整性。向下滚动以取概述，
            并在有关POG战略构想的最新文章中继续阅读有关Enterprise 的内容。
          </div>
        </div>
        <div class="swiper_item">
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
              <div @click="changeShow(301)" class="welfare_title">
                <img :class="{'expend': isShow==301}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===301}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
              <div @click="changeShow(302)" class="welfare_title">
                <img :class="{'expend': isShow==302}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===302}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
              <div @click="changeShow(303)" class="welfare_title">
                <img :class="{'expend': isShow==303}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===303}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
              <div @click="changeShow(304)" class="welfare_title">
                <img :class="{'expend': isShow==304}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===304}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
          <div class="problem_r first">
            <div class="right_item">
              <div class="future_title">构建最先进的WASM引擎以提高智能合约性能</div>
              <div @click="changeShow(305)" class="welfare_title">
                <img :class="{'expend': isShow==305}" src="../assets/point.png" alt />
              </div>
            </div>
            <div :class="['welfare_body', {'body_expend': isShow===305}]">
              <p>
                并非所有智能合约业务逻辑都易于并行化，因此使智能合约中执行WASM代码的单线程性能最大化至关重要。POG
                经过精心设计，可以利用多种WASM引擎提供出色的智能合约执行性能。除了WABT，WAVM等，我们还正在探索对
                其他先进引擎的支持，并使用关联的JIT编译器构建我们自己的WASM解释器，以进一步提高WASM的性能。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      toindex: 0,
      swiperOption: {
        centeredSlides: true,
        watchSlidesProgress: true
      },
      isShow: 0
    };
  },
  computed: {
    swiper() {
      // return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    toslide(index) {
      this.toindex = index;
      this.$refs.mySwiper.swiper.slideTo(index, 1000, false);
    },
    changeShow(index) {
      console.log("this.index", this.isShow, index);
      if (this.isShow == index) {
        console.log("进入if");
        this.isShow = 0;
      } else {
        console.log("进入else");
        this.isShow = index;
      }
      console.log("this.index", this.isShow, index);
    }
  }
};
</script>

<style scoped>
.bagin {
  height: 610px;
  background-image: url("../assets/strategy_banner.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.bagin_txt {
  width: 700px;
}
.pog {
  margin-top: 100px;
  font-size: 32px;
}
.ps {
  margin: 45px 0;
}
.ps,
.details {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
.bagin_pic {
  margin-top: -14%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item1,
.item2,
.item3,
.item4 {
  width: 22%;
  height: 300px;
  box-sizing: border-box;
  padding: 80px 110px 40px 15px;
  background-repeat: no-repeat;
}
img {
  display: block;
  margin: 0 auto 0;
  width: 80%;
}
.item1 {
  background-image: url("../assets/strategy_1.png");
}
.item2 {
  background-image: url("../assets/strategy_2.png");
}
.item3 {
  background-image: url("../assets/strategy_3.png");
}
.item4 {
  background-image: url("../assets/strategy_4.png");
}
.item_one {
  font-size: 16px;
  font-weight: bold;
}
.item_two {
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.7);
}
/* 扩展性 */
.scalability {
  margin-top: 70px;
}
.scal_title {
  font-size: 30px;
  margin: 30px 0;
  color: rgba(176, 214, 251, 1);
}
.scal_ps {
  font-size: 12px;
  margin: 30px 0;
}
.scal_nav {
  width: 40px;
  height: 4px;
  background-color: #fff;
  margin: 30px 0;
}
.scal_details {
  font-size: 12px;
  margin: 30px 0;
  letter-spacing: 1px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
}
.scal_txt {
  width: 600px;
}
/* 扩展tab */
.tab {
  display: flex;
  flex-direction: row;
}
.tab div {
  font-size: 12px;
  margin-right: 75px;
}
.active {
  color: rgba(176, 214, 251, 1);
}
.active::after {
  content: "";
  margin: 0 auto;
  display: block;
  width: 40px;
  height: 2px;
  border-bottom: 2px solid rgba(176, 214, 251, 1);
}
.expend {
  transition: all 0.3s;
  transform: rotate(90deg);
}
.welfare_body {
  display: none;
}
.body_expend {
  display: block;
  animation: myfirst 2s;
}
@keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.expend {
  transition: all 0.3s;
  transform: rotate(90deg);
}
.right_item {
  display: flex;
  justify-content: space-between;
}
.right_item img {
  width: 20px;
}
.problem_r {
  font-size: 20px;
  margin-top: 30px;
}
p {
  padding-top: 40px;
  color: rgba(255, 255, 255, 0.7);
}
.scal_item {
  margin-top: 80px;
}
.scalability {
  height: 2300px;
}
/* 第二个 */
.right {
  margin-left: 600px;
}
.txtRight {
  text-align: right;
}
.navRight {
  margin-left: 560px;
}
</style>