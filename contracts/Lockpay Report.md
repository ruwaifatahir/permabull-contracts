Sūrya's Description Report

Files Description Table

| File Name                                                               | SHA-1 Hash                               |
| ----------------------------------------------------------------------- | ---------------------------------------- |
| d:\Direct Projects\Perma Bull\permabull-contracts\contracts\LockPay.sol | d60cafc3732153f8507a1b52892673931e849c4c |

Contracts Description Table

|      Contract       |                         Type                          |                  Bases                  |                |                 |
| :-----------------: | :---------------------------------------------------: | :-------------------------------------: | :------------: | :-------------: |
|          └          |                   **Function Name**                   |             **Visibility**              | **Mutability** |  **Modifiers**  |
|                     |                                                       |                                         |                |                 |
|   **SafeMathInt**   |                        Library                        |                                         |                |                 |
|          └          |                          mul                          |               Internal 🔒               |                |                 |
|          └          |                          div                          |               Internal 🔒               |                |                 |
|          └          |                          sub                          |               Internal 🔒               |                |                 |
|          └          |                          add                          |               Internal 🔒               |                |                 |
|          └          |                          abs                          |               Internal 🔒               |                |                 |
|                     |                                                       |                                         |                |                 |
|     **IERC20**      |                       Interface                       |                                         |                |                 |
|          └          |                      totalSupply                      |              External ❗️               |                |      NO❗️      |
|          └          |                       balanceOf                       |              External ❗️               |                |      NO❗️      |
|          └          |                       allowance                       |              External ❗️               |                |      NO❗️      |
|          └          |                       transfer                        |              External ❗️               |       🛑       |      NO❗️      |
|          └          |                        approve                        |              External ❗️               |       🛑       |      NO❗️      |
|          └          |                     transferFrom                      |              External ❗️               |       🛑       |      NO❗️      |
|                     |                                                       |                                         |                |                 |
|    **SafeMath**     |                        Library                        |                                         |                |                 |
|          └          |                          add                          |               Internal 🔒               |                |                 |
|          └          |                          sub                          |               Internal 🔒               |                |                 |
|          └          |                          sub                          |               Internal 🔒               |                |                 |
|          └          |                          mul                          |               Internal 🔒               |                |                 |
|          └          |                          div                          |               Internal 🔒               |                |                 |
|          └          |                          div                          |               Internal 🔒               |                |                 |
|          └          |                          mod                          |               Internal 🔒               |                |                 |
|                     |                                                       |                                         |                |                 |
|   **InterfaceLP**   |                       Interface                       |                                         |                |                 |
|          └          |                         sync                          |              External ❗️               |       🛑       |      NO❗️      |
|                     |                                                       |                                         |                |                 |
|      **Roles**      |                        Library                        |                                         |                |                 |
|          └          |                          add                          |               Internal 🔒               |       🛑       |                 |
|          └          |                        remove                         |               Internal 🔒               |       🛑       |                 |
|          └          |                          has                          |               Internal 🔒               |                |                 |
|                     |                                                       |                                         |                |                 |
|  **ERC20Detailed**  |                    Implementation                     |                 IERC20                  |                |                 |
|          └          |                     <Constructor>                     |               Public ❗️                |       🛑       |      NO❗️      |
|          └          |                         name                          |               Public ❗️                |                |      NO❗️      |
|          └          |                        symbol                         |               Public ❗️                |                |      NO❗️      |
|          └          |                       decimals                        |               Public ❗️                |                |      NO❗️      |
|                     |                                                       |                                         |                |                 |
|   **IDEXRouter**    |                       Interface                       |                                         |                |                 |
|          └          |                        factory                        |              External ❗️               |                |      NO❗️      |
|          └          |                         WETH                          |              External ❗️               |                |      NO❗️      |
|          └          |                     addLiquidity                      |              External ❗️               |       🛑       |      NO❗️      |
|          └          |                    addLiquidityETH                    |              External ❗️               |       💵       |      NO❗️      |
|          └          | swapExactTokensForTokensSupportingFeeOnTransferTokens |              External ❗️               |       🛑       |      NO❗️      |
|          └          |  swapExactETHForTokensSupportingFeeOnTransferTokens   |              External ❗️               |       💵       |      NO❗️      |
|          └          |  swapExactTokensForETHSupportingFeeOnTransferTokens   |              External ❗️               |       🛑       |      NO❗️      |
|                     |                                                       |                                         |                |                 |
|   **IDEXFactory**   |                       Interface                       |                                         |                |                 |
|          └          |                      createPair                       |              External ❗️               |       🛑       |      NO❗️      |
|                     |                                                       |                                         |                |                 |
|     **Ownable**     |                    Implementation                     |                                         |                |                 |
|          └          |                     <Constructor>                     |               Public ❗️                |       🛑       |      NO❗️      |
|          └          |                         owner                         |               Public ❗️                |                |      NO❗️      |
|          └          |                   renounceOwnership                   |               Public ❗️                |       🛑       |    onlyOwner    |
|          └          |                   transferOwnership                   |               Public ❗️                |       🛑       |    onlyOwner    |
|          └          |                  \_transferOwnership                  |               Internal 🔒               |       🛑       |                 |
|                     |                                                       |                                         |                |                 |
| **WhitelistedRole** |                    Implementation                     |                 Ownable                 |                |                 |
|          └          |                     <Constructor>                     |               Public ❗️                |       🛑       |      NO❗️      |
|          └          |                     isWhitelisted                     |               Public ❗️                |                |      NO❗️      |
|          └          |                     isRebaseAdmin                     |               Public ❗️                |                |      NO❗️      |
|          └          |                    addWhitelisted                     |               Public ❗️                |       🛑       | onlyWhitelisted |
|          └          |                   removeWhitelisted                   |               Public ❗️                |       🛑       | onlyWhitelisted |
|          └          |                  renounceWhitelisted                  |               Public ❗️                |       🛑       |      NO❗️      |
|          └          |                   \_addWhitelisted                    |               Internal 🔒               |       🛑       |                 |
|          └          |                  \_removeWhitelisted                  |               Internal 🔒               |       🛑       |                 |
|          └          |                    addRebaseAdmin                     |               Public ❗️                |       🛑       | onlyWhitelisted |
|          └          |                   removeRebaseAdmin                   |               Public ❗️                |       🛑       | onlyWhitelisted |
|          └          |                   \_addRebaseAdmin                    |               Internal 🔒               |       🛑       |                 |
|          └          |                  \_removeRebaseAdmin                  |               Internal 🔒               |       🛑       |                 |
|                     |                                                       |                                         |                |                 |
|    **LockPayV2**    |                    Implementation                     | ERC20Detailed, Ownable, WhitelistedRole |                |                 |
|          └          |                     <Constructor>                     |               Public ❗️                |       🛑       |  ERC20Detailed  |
|          └          |                    <Receive Ether>                    |              External ❗️               |       💵       |      NO❗️      |
|          └          |                      totalSupply                      |              External ❗️               |                |      NO❗️      |
|          └          |                       allowance                       |              External ❗️               |                |      NO❗️      |
|          └          |                       balanceOf                       |               Public ❗️                |                |      NO❗️      |
|          └          |                    checkFeeExempt                     |              External ❗️               |                |      NO❗️      |
|          └          |                 checkWhiteListedUser                  |              External ❗️               |                |      NO❗️      |
|          └          |                  checkSwapThreshold                   |              External ❗️               |                |      NO❗️      |
|          └          |                     shouldRebase                      |               Internal 🔒               |                |                 |
|          └          |                     shouldTakeFee                     |               Internal 🔒               |                |                 |
|          └          |                    shouldSwapBack                     |               Internal 🔒               |                |                 |
|          └          |                 getCirculatingSupply                  |               Public ❗️                |                |      NO❗️      |
|          └          |                  getLiquidityBacking                  |               Public ❗️                |                |      NO❗️      |
|          └          |                    isOverLiquified                    |               Public ❗️                |                |      NO❗️      |
|          └          |                      manualSync                       |               Public ❗️                |       🛑       |      NO❗️      |
|          └          |                       transfer                        |              External ❗️               |       🛑       | validRecipient  |
|          └          |                    \_basicTransfer                    |               Internal 🔒               |       🛑       |                 |
|          └          |                    \_transferFrom                     |               Internal 🔒               |       🛑       |                 |
|          └          |                     transferFrom                      |              External ❗️               |       🛑       | validRecipient  |
|          └          |                   \_swapAndLiquify                    |               Private 🔐                |       🛑       |                 |
|          └          |                    \_addLiquidity                     |               Private 🔐                |       🛑       |                 |
|          └          |                  \_addLiquidityBusd                   |               Private 🔐                |       🛑       |                 |
|          └          |                  \_swapTokensForBNB                   |               Private 🔐                |       🛑       |                 |
|          └          |                  \_swapTokensForBusd                  |               Private 🔐                |       🛑       |                 |
|          └          |                       swapBack                        |               Internal 🔒               |       🛑       |    swapping     |
|          └          |                        takeFee                        |               Internal 🔒               |       🛑       |                 |
|          └          |                   decreaseAllowance                   |              External ❗️               |       🛑       |      NO❗️      |
|          └          |                   increaseAllowance                   |              External ❗️               |       🛑       |      NO❗️      |
|          └          |                        approve                        |              External ❗️               |       🛑       |      NO❗️      |
|          └          |                       \_rebase                        |               Private 🔐                |       🛑       |                 |
|          └          |                      coreRebase                       |               Private 🔐                |       🛑       |                 |
|          └          |                     manualRebase                      |              External ❗️               |       🛑       | onlyRebaseAdmin |
|          └          |              setAutomatedMarketMakerPair              |               Public ❗️                |       🛑       | onlyWhitelisted |
|          └          |            setInitialDistributionFinished             |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                     setFeeExempt                      |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                  setWhiteListedUser                   |               Public ❗️                |       🛑       | onlyWhitelisted |
|          └          |                     setSellLimit                      |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                  setTwentyFourhours                   |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                  setTargetLiquidity                   |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                  setSwapBackSettings                  |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                    setFeeReceivers                    |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                        setFees                        |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                   clearStuckBalance                   |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                      rescueToken                      |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                     setAutoRebase                     |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                  setRebaseFrequency                   |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                    setRewardYield                     |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |               setFeesOnNormalTransfers                |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                  setIsLiquidityInBnb                  |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                     setNextRebase                     |              External ❗️               |       🛑       | onlyWhitelisted |
|          └          |                 setMaxSellTransaction                 |              External ❗️               |       🛑       | onlyWhitelisted |

Legend

| Symbol | Meaning                   |
| :----: | ------------------------- |
|   🛑   | Function can modify state |
|   💵   | Function is payable       |
