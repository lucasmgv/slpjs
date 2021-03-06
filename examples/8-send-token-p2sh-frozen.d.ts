/***************************************************************************************
 *
 *  Example 8: Send any type of token using P2SH frozen address
 *
 *      redeemScript (locking script):
 *              `<locktime> OP_CHECKLOCKTIMEVERIFY OP_DROP <pubkey> OP_CHECKSIG`
 *      unlocking script:
 *              `<signature>`
 *
 *  Instructions:
 *      (1) - Select Network and Address by commenting/uncommenting the desired
 *              NETWORK section and providing valid BCH address.
 *      (2) - Select a Validation method by commenting/uncommenting the desired
 *              VALIDATOR section. Chose from remote validator or local validator.
 *              Both options rely on remote JSON RPC calls to rest.bitcoin.com.
 *      (3) - Run `tsc && node <file-name.js>` just before script execution
 *      (4) - Optional: Use vscode debugger w/ launch.json settings
 *
 * ************************************************************************************/
export {};
