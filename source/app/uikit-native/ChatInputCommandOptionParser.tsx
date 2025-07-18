// app/uikit-native/ChatInputCommandOptionParser.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Colors;
    var _closure1_slot7 = var5;
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot9 = var4;
    var4 = /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]((?:[\x2D0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0900-\u0950\u0955-\u0963\u0966-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E3A\u0E40-\u0E5B\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8E0-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDF00-\uDF09\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])+):/g;
    var _closure1_slot10 = var4;
    var5 = /:((?:[\0-\x08\x0E-\x1F!-9;-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+?(?:::skin-tone-[0-9])?):/g;
    var _closure1_slot11 = var5;
    var5 = /@((?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])(?:[\0-"\$-9;-\?A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)#([0-9]{4}))/g;
    var _closure1_slot12 = var5;
    var5 = /@([\.0-9_a-z]{2,32})/g;
    var _closure1_slot13 = var5;
    var5 = /@(((?:[\0-"\$-9;-\?A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){1,100}))(?![0-9A-Z_a-z]*#)/g;
    var _closure1_slot14 = var5;
    var5 = /#(((?:[\0-\x08\x0E-\x1F!"\$-9;-\?A-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+))/g;
    var _closure1_slot15 = var5;
    var5 = /^@(silent(?![^\s]))/;
    var _closure1_slot16 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/ChatInputCommandOptionParser.tsx';
    var5 = var6.bind(var7)(var5);
    var3['commandOptionRegex'] = var4;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var5;
            var2 = null;
            var4 = var2 == var3;
            var10 = undefined;
            var16 = undefined;
            if(var4) { _fun0001_ip = 45; continue _fun0001 }
 25:
            var4 = var3.activeCommand;
            var6 = var2 == var4;
            var16 = undefined;
            if(var6) { _fun0001_ip = 45; continue _fun0001 }
 40:
            var16 = var4.options;
 45:
            var6 = var2 == var3;
            var4 = undefined;
            if(var6) { _fun0001_ip = 60; continue _fun0001 }
 54:
            var4 = var3.activeCommand;
 60:
            if(!(var2 != var4)) { _fun0001_ip = 627; continue _fun0001 }
 67:
            if(!(var2 != var16)) { _fun0001_ip = 627; continue _fun0001 }
 74:
            var3 = var3.preferredOptionValues;
            var _closure2_slot1 = var3;
            var9 = function optionValueLength(arg1, arg2, arg3, arg4) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var9 = arg1;
                    var8 = arg2;
                    var3 = arg4;
                    var1 = _closure2_slot1;
                    var4 = null;
                    var1 = var4 == var1;
                    var2 = undefined;
                    if(var1) { _fun0002_ip = 38; continue _fun0002 }
 27:
                    var6 = _closure2_slot1;
                    var1 = arg3;
                    var2 = var6[var1];
 38:
                    var1 = var8 - var9;
                    var4 = var4 != var2;
                    if(!var4) { _fun0002_ip = 63; continue _fun0002 }
 49:
                    var7 = var2.displayText;
                    var6 = '';
                    var4 = var6 !== var7;
 63:
                    if(!var4) { _fun0002_ip = 115; continue _fun0002 }
 66:
                    var7 = _closure2_slot0;
                    var6 = var7.substring;
                    var5 = var3.length;
                    var9 = var9 + var5;
                    var5 = 1;
                    var5 = var9 + var5;
                    var7 = var6.bind(var7)(var5, var8);
                    var6 = var7.startsWith;
                    var5 = var2.displayText;
                    var4 = var6.bind(var7)(var5);
 115:
                    if(!var4) { _fun0002_ip = 145; continue _fun0002 }
 118:
                    var4 = var3.length;
                    var3 = 1;
                    var3 = var4 + var3;
                    var2 = var2.displayText;
                    var2 = var2.length;
                    var1 = var3 + var2;
 145:
                    return var1;
                }
            };
            var4 = _closure1_slot10;
            var14 = 0;
            var4['lastIndex'] = var14;
            var1 = new Array(0);
            var3 = global;
            var3 = var3.Set;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var33 = var6;
            var3 = new var33[var3](var32);
            var13 = var3 instanceof Object ? var3 : var6;
            var3 = var4.exec;
            var3 = var3.bind(var4)(var5);
            var17 = var2 != var3;
            var12 = 1;
            var11 = 6;
            var8 = var3;
            var7 = null;
            var6 = undefined;
            var3 = undefined;
            var4 = null;
            if(!var17) { _fun0001_ip = 539; continue _fun0001 }
 176:
            var17 = var8[var14];
            var17 = var17.length;
            var18 = var7;
            if(!(var17 > var12)) { _fun0001_ip = 496; continue _fun0001 }
 195:
            var20 = var8[var14];
            var19 = var20.substring;
            var17 = var8[var14];
            var17 = var17.length;
            var17 = var17 - var12;
            var21 = var19.bind(var20)(var12, var17);
            var17 = var16.length;
            var17 = var14 < var17;
            var20 = var7;
            var19 = 0;
            var18 = var20;
            var6 = var21;
            var3 = 0;
            if(!var17) { _fun0001_ip = 496; continue _fun0001 }
 252:
            var17 = var13.has;
            var22 = var17.bind(var13)(var19);
            var17 = var19;
            if(var22) { _fun0001_ip = 281; continue _fun0001 }
 268:
            var23 = var16[var17];
            var23 = var23.displayName;
            var22 = var23 !== var21;
 281:
            var23 = var20;
            if(var22) { _fun0001_ip = 469; continue _fun0001 }
 290:
            if(!(var2 != var20)) { _fun0001_ip = 376; continue _fun0001 }
 294:
            var24 = var1.push;
            var22 = {};
            var25 = var20.location;
            var22['location'] = var25;
            var32 = var20.location;
            var31 = var8.index;
            var25 = var20.data;
            var25 = var25.option;
            var30 = var25.name;
            var25 = var20.data;
            var25 = var25.option;
            var29 = var25.displayName;
            var33 = undefined;
            var25 = var33[var9](var32, var31, var30, var29, var28);
            var22['length'] = var25;
            var25 = var20.data;
            var22['data'] = var25;
            var22 = var24.bind(var1)(var22);
 376:
            var22 = {};
            var24 = var8.index;
            var24 = var24 + var12;
            var22['location'] = var24;
            var24 = var8[var14];
            var24 = var24.length;
            var24 = var24 - var12;
            var22['length'] = var24;
            var24 = {};
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var11];
            var25 = var26.bind(var10)(var25);
            var25 = var25.ChatInputParseResultDataType;
            var25 = var25.COMMAND_OPTION;
            var24['type'] = var25;
            var25 = var16[var17];
            var24['option'] = var25;
            var22['data'] = var24;
            var24 = var13.add;
            var24 = var24.bind(var13)(var17);
            var23 = var22;
 469:
            var19 = var17 + 1;
            var17 = var16.length;
            var20 = var23;
            var18 = var20;
            var6 = var21;
            var3 = var19;
            if(var3 < var17) { _fun0001_ip = 252; continue _fun0001 }
 496:
            var19 = _closure1_slot10;
            var17 = var8.index;
            var17 = var17 + var12;
            var19['lastIndex'] = var17;
            var17 = var19.exec;
            var8 = var17.bind(var19)(var5);
            var7 = var18;
            var4 = var7;
            if(var2 != var8) { _fun0001_ip = 176; continue _fun0001 }
 539:
            if(!(var2 != var4)) { _fun0001_ip = 625; continue _fun0001 }
 543:
            var3 = var1.push;
            var2 = {};
            var6 = var4.location;
            var2['location'] = var6;
            var32 = var4.location;
            var31 = var5.length;
            var5 = var4.data;
            var5 = var5.option;
            var30 = var5.name;
            var5 = var4.data;
            var5 = var5.option;
            var29 = var5.displayName;
            var33 = undefined;
            var5 = var33[var9](var32, var31, var30, var29, var28);
            var2['length'] = var5;
            var4 = var4.data;
            var2['data'] = var4;
            var2 = var3.bind(var1)(var2);
 625:
            return var1;
 627:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['getMatchedOptionsWithValue'] = var4;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var13 = arg1;
            var2 = arg2;
            var12 = null;
            var1 = var12 == var2;
            var11 = undefined;
            var10 = undefined;
            if(var1) { _fun0003_ip = 39; continue _fun0003 }
 19:
            var1 = var2.activeCommand;
            var3 = var12 == var1;
            var10 = undefined;
            if(var3) { _fun0003_ip = 39; continue _fun0003 }
 34:
            var10 = var1.options;
 39:
            var3 = var12 == var2;
            var1 = undefined;
            if(var3) { _fun0003_ip = 54; continue _fun0003 }
 48:
            var1 = var2.activeCommand;
 54:
            if(!(var12 != var1)) { _fun0003_ip = 408; continue _fun0003 }
 61:
            if(!(var12 != var10)) { _fun0003_ip = 408; continue _fun0003 }
 68:
            var3 = _closure1_slot10;
            var8 = 0;
            var3['lastIndex'] = var8;
            var1 = new Array(0);
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var24 = var4;
            var2 = new var24[var2](var23);
            var7 = var2 instanceof Object ? var2 : var4;
            var2 = var3.exec;
            var2 = var2.bind(var3)(var13);
            var14 = var12 != var2;
            var6 = 1;
            var5 = 6;
            var4 = var2;
            var3 = undefined;
            var2 = undefined;
            if(!var14) { _fun0003_ip = 406; continue _fun0003 }
 149:
            var14 = var4[var8];
            var14 = var14.length;
            if(!(var14 > var6)) { _fun0003_ip = 369; continue _fun0003 }
 165:
            var16 = var4[var8];
            var15 = var16.substring;
            var14 = var4[var8];
            var14 = var14.length;
            var14 = var14 - var6;
            var16 = var15.bind(var16)(var6, var14);
            var14 = var10.length;
            var14 = var8 < var14;
            var15 = 0;
            var3 = var16;
            var2 = 0;
            if(!var14) { _fun0003_ip = 369; continue _fun0003 }
 216:
            var14 = var7.has;
            var17 = var14.bind(var7)(var15);
            var14 = var15;
            if(var17) { _fun0003_ip = 245; continue _fun0003 }
 232:
            var18 = var10[var14];
            var18 = var18.displayName;
            var17 = var18 !== var16;
 245:
            if(var17) { _fun0003_ip = 348; continue _fun0003 }
 248:
            var18 = var1.push;
            var17 = {};
            var19 = var4.index;
            var19 = var19 + var6;
            var17['location'] = var19;
            var19 = var4[var8];
            var19 = var19.length;
            var19 = var19 - var6;
            var17['length'] = var19;
            var19 = {};
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var5];
            var20 = var21.bind(var11)(var20);
            var20 = var20.ChatInputParseResultDataType;
            var20 = var20.COMMAND_OPTION;
            var19['type'] = var20;
            var20 = var10[var14];
            var19['option'] = var20;
            var17['data'] = var19;
            var17 = var18.bind(var1)(var17);
            var17 = var7.add;
            var17 = var17.bind(var7)(var14);
 348:
            var15 = var14 + 1;
            var14 = var10.length;
            var3 = var16;
            var2 = var15;
            if(var2 < var14) { _fun0003_ip = 216; continue _fun0003 }
 369:
            var15 = _closure1_slot10;
            var14 = var4.index;
            var14 = var14 + var6;
            var15['lastIndex'] = var14;
            var14 = var15.exec;
            var4 = var14.bind(var15)(var13);
            if(var12 != var4) { _fun0003_ip = 149; continue _fun0003 }
 406:
            return var1;
 408:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['getMatchedOptions'] = var4;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var2 = _closure1_slot10;
            var5 = 0;
            var2['lastIndex'] = var5;
            var1 = var2.exec;
            var3 = var1.bind(var2)(var6);
            var1 = {};
            var1['match'] = var3;
            var4 = null;
            var2 = var6;
            if(!(var4 != var3)) { _fun0004_ip = 79; continue _fun0004 }
 45:
            var4 = var6.slice;
            var7 = _closure1_slot10;
            var7 = var7.lastIndex;
            var3 = var3[var5];
            var3 = var3.length;
            var3 = var7 - var3;
            var2 = var4.bind(var6)(var5, var3);
 79:
            var1['text'] = var2;
            return var1;
        }
    };
    var3['getTextBeforeFirstOption'] = var4;
    var4 = function getEmojiHighlightNodes(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var11 = arg1;
            var10 = arg2;
            var1 = var10.length;
            var9 = 0;
            if(!(var9 !== var1)) { _fun0005_ip = 262; continue _fun0005 }
 20:
            var1 = new Array(0);
            var3 = _closure1_slot11;
            var2 = var3.exec;
            var2 = var2.bind(var3)(var10);
            var7 = null;
            var12 = var7 != var2;
            var6 = 7;
            var5 = undefined;
            var4 = 1;
            var3 = var2;
            var2 = null;
            if(!var12) { _fun0005_ip = 260; continue _fun0005 }
 67:
            if(!(var7 == var2)) { _fun0005_ip = 96; continue _fun0005 }
 71:
            var14 = _closure1_slot4;
            var13 = var14.getDisambiguatedEmojiContext;
            var12 = var11.getGuildId;
            var12 = var12.bind(var11)();
            var2 = var13.bind(var14)(var12);
 96:
            var13 = var3[var4];
            var12 = var13.trim;
            var14 = var12.bind(var13)();
            var12 = var2.getById;
            var16 = var12.bind(var2)(var14);
            var13 = var2;
            if(!(var7 == var16)) { _fun0005_ip = 139; continue _fun0005 }
 128:
            var12 = var13.getByName;
            var16 = var12.bind(var13)(var14);
 139:
            if(!(var7 != var16)) { _fun0005_ip = 235; continue _fun0005 }
 143:
            var14 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var6];
            var15 = var14.bind(var5)(var12);
            var14 = var15.getEmojiUnavailableReason;
            var12 = {};
            var12['emoji'] = var16;
            var12['channel'] = var11;
            var16 = _closure1_slot9;
            var16 = var16.CHAT;
            var12['intention'] = var16;
            var12 = var14.bind(var15)(var12);
            if(!(var7 === var12)) { _fun0005_ip = 235; continue _fun0005 }
 201:
            var14 = var1.push;
            var12 = {};
            var15 = var3.index;
            var12['location'] = var15;
            var15 = var3[var9];
            var15 = var15.length;
            var12['length'] = var15;
            var12 = var14.bind(var1)(var12);
 235:
            var14 = _closure1_slot11;
            var12 = var14.exec;
            var3 = var12.bind(var14)(var10);
            var2 = var13;
            if(var7 != var3) { _fun0005_ip = 67; continue _fun0005 }
 260:
            return var1;
 262:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['getEmojiHighlightNodes'] = var4;
    var4 = function getUsernameHighlightNodes(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var5 = function processRegex(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var6 = arg1;
                var1 = arg2;
                var _closure3_slot0 = var1;
                var5 = function _loop() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = _closure3_slot1;
                        var1 = 1;
                        var3 = var3[var1];
                        var1 = var3.trim;
                        var1 = var1.bind(var3)();
                        var _closure4_slot0 = var1;
                        var5 = _closure2_slot2;
                        var3 = var5.find;
                        var2 = function(arg1) {
                            var3 = _closure3_slot0;
                            var1 = arg1;
                            var2 = var1.text;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var3 = var3.bind(var5)(var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0007_ip = 108; continue _fun0007 }
 60:
                        var3 = _closure2_slot1;
                        var2 = var3.push;
                        var1 = {};
                        var5 = _closure3_slot1;
                        var5 = var5.index;
                        var1['location'] = var5;
                        var5 = _closure3_slot1;
                        var4 = 0;
                        var4 = var5[var4];
                        var4 = var4.length;
                        var1['length'] = var4;
                        var1 = var2.bind(var3)(var1);
 108:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var6.exec;
                var1 = _closure2_slot0;
                var2 = var2.bind(var6)(var1);
                var _closure3_slot1 = var2;
                var1 = undefined;
                var3 = null;
                if(!(var3 != var2)) { _fun0006_ip = 76; continue _fun0006 }
 49:
                var2 = var5.bind(var1)();
                var8 = var6.exec;
                var2 = _closure2_slot0;
                var2 = var8.bind(var6)(var2);
                _closure3_slot1 = var2;
                if(var3 != var2) { _fun0006_ip = 49; continue _fun0006 }
 76:
                return var1;
            }
        };
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 8;
        var6 = var6[var4];
        var4 = undefined;
        var8 = var7.bind(var4)(var6);
        var7 = var8.getUsers;
        var6 = arg1;
        var6 = var7.bind(var8)(var6);
        var _closure2_slot2 = var6;
        var7 = _closure1_slot12;
        var6 = function(arg1) {
            var1 = arg1;
            return var1;
        };
        var6 = var5.bind(var4)(var7, var6);
        var3 = _closure1_slot13;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = var3.split;
            var1 = '#';
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var2 = var5.bind(var4)(var3, var2);
        return var1;
    };
    var3['getUsernameHighlightNodes'] = var4;
    var4 = function(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var7 = arg2;
            var1 = new Array(0);
            var _closure2_slot0 = var1;
            var5 = _closure1_slot6;
            var4 = var5.can;
            var2 = _closure1_slot8;
            var2 = var2.MENTION_EVERYONE;
            var2 = var4.bind(var5)(var2, var3);
            if(var2) { _fun0008_ip = 50; continue _fun0008 }
 48:
            return var1;
 50:
            var2 = {};
            var _closure2_slot2 = var2;
            var2 = var3.getGuildId;
            var11 = var2.bind(var3)();
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var5 = null;
            if(!(var5 == var11)) { _fun0008_ip = 89; continue _fun0008 }
 85:
            var2 = {};
            _fun0008_ip = 104; continue _fun0008;
 89:
            var10 = _closure1_slot5;
            var9 = var10.getRoles;
            var2 = var9.bind(var10)(var11);
 104:
            var4 = var3.bind(var4)(var2);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = _closure2_slot2;
                var2 = var1.name;
                var3[var2] = var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var4 = function _loop2() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = 1;
                    var4 = var3[var1];
                    var3 = 0;
                    var5 = var4[var3];
                    var3 = ' ';
                    if(!(var3 !== var5)) { _fun0009_ip = 527; continue _fun0009 }
 33:
                    var3 = var4.trimEnd;
                    var6 = var3.bind(var4)();
                    var5 = '';
                    var _closure3_slot0 = var5;
                    var4 = var6.split;
                    var3 = /\s/;
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.map;
                    var3 = function(arg1) {
                        var3 = _closure3_slot0;
                        var4 = arg1;
                        var2 = ' ';
                        var2 = var4 + var2;
                        var2 = var3 + var2;
                        _closure3_slot0 = var2;
                        var1 = var2.trim;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.reverse;
                    var3 = var3.bind(var4)();
                    var4 = var3.find;
                    var2 = function(arg1) {
                        var2 = _closure2_slot2;
                        var1 = arg1;
                        var2 = var2[var1];
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var6 = null;
                    var4 = var6 != var2;
                    if(!var4) { _fun0009_ip = 131; continue _fun0009 }
 128:
                    var5 = var2;
 131:
                    var2 = var3.length;
                    var2 = var2 - var1;
                    var4 = var3[var2];
                    var2 = _closure2_slot2;
                    var7 = var2[var5];
                    if(!(var6 == var7)) { _fun0009_ip = 404; continue _fun0009 }
 159:
                    var3 = var4.startsWith;
                    var2 = 'everyone';
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0009_ip = 305; continue _fun0009 }
 180:
                    var3 = var4.startsWith;
                    var2 = 'here';
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0009_ip = 523; continue _fun0009 }
 203:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var9 = var9.index;
                    var2['location'] = var9;
                    var9 = 5;
                    var2['length'] = var9;
                    var9 = {};
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var11 = 6;
                    var12 = var12[var11];
                    var11 = undefined;
                    var11 = var13.bind(var11)(var12);
                    var11 = var11.ChatInputParseResultDataType;
                    var11 = var11.ROLE_HIGHLIGHT;
                    var9['type'] = var11;
                    var10 = _closure1_slot7;
                    var10 = var10.BRAND;
                    var9['color'] = var10;
                    var2['data'] = var9;
                    var2 = var3.bind(var4)(var2);
                    _fun0009_ip = 523; continue _fun0009;
 305:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var9 = var9.index;
                    var2['location'] = var9;
                    var9 = 9;
                    var2['length'] = var9;
                    var9 = {};
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var11 = 6;
                    var12 = var12[var11];
                    var11 = undefined;
                    var11 = var13.bind(var11)(var12);
                    var11 = var11.ChatInputParseResultDataType;
                    var11 = var11.ROLE_HIGHLIGHT;
                    var9['type'] = var11;
                    var10 = _closure1_slot7;
                    var10 = var10.BRAND;
                    var9['color'] = var10;
                    var2['data'] = var9;
                    var2 = var3.bind(var4)(var2);
                    _fun0009_ip = 523; continue _fun0009;
 404:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var8 = var8.index;
                    var2['location'] = var8;
                    var5 = var5.length;
                    var5 = var5 + var1;
                    var2['length'] = var5;
                    var5 = {};
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var9 = 6;
                    var10 = var10[var9];
                    var9 = undefined;
                    var9 = var11.bind(var9)(var10);
                    var9 = var9.ChatInputParseResultDataType;
                    var9 = var9.ROLE_HIGHLIGHT;
                    var5['type'] = var9;
                    var8 = _closure1_slot3;
                    var9 = var8.roleStyle;
                    var8 = 'username';
                    var6 = null;
                    if(!(var8 === var9)) { _fun0009_ip = 510; continue _fun0009 }
 504:
                    var6 = var7.colorString;
 510:
                    var5['color'] = var6;
                    var2['data'] = var5;
                    var2 = var3.bind(var4)(var2);
 523:
                    var2 = undefined;
                    return var2;
 527:
                    return var1;
                }
            };
            var3 = _closure1_slot14;
            var2 = var3.exec;
            var2 = var2.bind(var3)(var7);
            var _closure2_slot1 = var2;
            var3 = undefined;
            if(!(var5 != var2)) { _fun0008_ip = 185; continue _fun0008 }
 158:
            var2 = var4.bind(var3)();
            var9 = _closure1_slot14;
            var2 = var9.exec;
            var2 = var2.bind(var9)(var7);
            _closure2_slot1 = var2;
            if(var5 != var2) { _fun0008_ip = 158; continue _fun0008 }
 185:
            return var1;
        }
    };
    var3['getRoleHighlightNodes'] = var4;
    var4 = function getSilentHighlightNodes(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = new Array(0);
            var4 = _closure1_slot16;
            var3 = var4.exec;
            var2 = arg1;
            var5 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var5)) { _fun0010_ip = 67; continue _fun0010 }
 31:
            var3 = var1.push;
            var2 = {};
            var4 = var5.index;
            var2['location'] = var4;
            var4 = 0;
            var4 = var5[var4];
            var4 = var4.length;
            var2['length'] = var4;
            var2 = var3.bind(var1)(var2);
 67:
            return var1;
        }
    };
    var3['getSilentHighlightNodes'] = var4;
    var2 = function getChannelHighlightNodes(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 8;
            var3 = var4[var3];
            var4 = undefined;
            var6 = var5.bind(var4)(var3);
            var5 = var6.getChannels;
            var3 = arg1;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot2 = var3;
            var3 = 0;
            var _closure2_slot3 = var3;
            var3 = function _loop3() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var6 = _closure2_slot0;
                    var5 = var6.indexOf;
                    var4 = _closure2_slot3;
                    var3 = '#';
                    var3 = var5.bind(var6)(var3, var4);
                    _closure2_slot3 = var3;
                    var8 = 0;
                    if(!(!(var3 < var8))) { _fun0012_ip = 455; continue _fun0012 }
 42:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot3;
                    var6 = 1;
                    var3 = var3 + var6;
                    var3 = var4[var3];
                    var9 = '"';
                    if(!(var9 !== var3)) { _fun0012_ip = 202; continue _fun0012 }
 72:
                    var5 = _closure1_slot15;
                    var3 = _closure2_slot3;
                    var5['lastIndex'] = var3;
                    var4 = var5.exec;
                    var3 = _closure2_slot0;
                    var7 = var4.bind(var5)(var3);
                    var4 = null;
                    if(!(var4 != var7)) { _fun0012_ip = 440; continue _fun0012 }
 113:
                    var5 = var7[var6];
                    var3 = var5.trim;
                    var3 = var3.bind(var5)();
                    var _closure3_slot1 = var3;
                    var10 = _closure2_slot2;
                    var5 = var10.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.text;
                        var1 = _closure3_slot1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var5.bind(var10)(var3);
                    if(!(var4 != var3)) { _fun0012_ip = 440; continue _fun0012 }
 159:
                    var5 = _closure2_slot1;
                    var4 = var5.push;
                    var3 = {};
                    var10 = var7.index;
                    var3['location'] = var10;
                    var7 = var7[var8];
                    var7 = var7.length;
                    var3['length'] = var7;
                    var3 = var4.bind(var5)(var3);
                    _fun0012_ip = 440; continue _fun0012;
 202:
                    var7 = _closure2_slot3;
                    var3 = 2;
                    var5 = var7 + var3;
                    _closure2_slot3 = var5;
                    var4 = _closure2_slot0;
                    var4 = var4.length;
                    var8 = '\\';
                    if(!(var5 < var4)) { _fun0012_ip = 303; continue _fun0012 }
 234:
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot3;
                    var4 = var5[var4];
                    if(!(var8 === var4)) { _fun0012_ip = 263; continue _fun0012 }
 250:
                    var4 = _closure2_slot3;
                    var4 = var4 + 1;
                    _closure2_slot3 = var4;
                    _fun0012_ip = 279; continue _fun0012;
 263:
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot3;
                    var4 = var5[var4];
                    if(!(var9 !== var4)) { _fun0012_ip = 303; continue _fun0012 }
 279:
                    var4 = _closure2_slot3;
                    var5 = var4 + 1;
                    _closure2_slot3 = var5;
                    var4 = _closure2_slot0;
                    var4 = var4.length;
                    if(var5 < var4) { _fun0012_ip = 234; continue _fun0012 }
 303:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 9;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var8.bind(var4)(var5);
                    var4 = var5.unescapeChannelName;
                    var10 = _closure2_slot0;
                    var9 = var10.substring;
                    var8 = var7 + var3;
                    var3 = _closure2_slot3;
                    var3 = var9.bind(var10)(var8, var3);
                    var3 = var4.bind(var5)(var3);
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot2;
                    var3 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.text;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var3)) { _fun0012_ip = 404; continue _fun0012 }
 394:
                    var1 = var7 + var6;
                    _closure2_slot3 = var1;
                    _fun0012_ip = 440; continue _fun0012;
 404:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var1 = {};
                    var1['location'] = var7;
                    var5 = _closure2_slot3;
                    var5 = var5 - var7;
                    var5 = var5 + var6;
                    var1['length'] = var5;
                    var1 = var3.bind(var4)(var1);
 440:
                    var1 = _closure2_slot3;
                    var1 = var1 + 1;
                    _closure2_slot3 = var1;
                    var1 = undefined;
                    return var1;
 455:
                    var1 = 1;
                    return var1;
                }
            };
            var2 = var3.bind(var4)();
            if(var2) { _fun0011_ip = 87; continue _fun0011 }
 80:
            var2 = var3.bind(var4)();
            if(!var2) { _fun0011_ip = 80; continue _fun0011 }
 87:
            return var1;
        }
    };
    var3['getChannelHighlightNodes'] = var2;
    return var1;
})();