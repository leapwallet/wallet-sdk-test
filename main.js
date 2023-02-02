import * as bip39 from "@scure/bip39";
import { HDKey } from "@scure/bip32";
import { sha256 } from "@noble/hashes/sha256";
import { wordlist } from "./wordlist";
const getMnemonic = () => {
  return bip39.generateMnemonic(wordlist);
};

const getHDKey = (mnemonic) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const hdkey = HDKey.fromMasterSeed(seed);
  const child = hdkey.derive("m/44'/118'/0'/0/0");

  return child;
};

const messageHash = (message) => {
  const buf = Buffer.from(message, "utf8");
  return sha256(buf);
};

const sign = (hdKey, messageHash) => {
  return hdKey.sign(messageHash);
};

window.getMnemonic = getMnemonic;
window.getHDKey = getHDKey;
window.messageHash = messageHash;
window.sign = sign;
