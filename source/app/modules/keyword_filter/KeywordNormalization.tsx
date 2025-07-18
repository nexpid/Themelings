// app/modules/keyword_filter/KeywordNormalization.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = {};
    var5 = ' ';
    var8 = {'-': '-', ' ': ' '};
    var9 = var1;
    var4 = copyDataProperties(var9, var8);
    var8 = {'[': ' ', ']': ' ', '(': ' ', ')': ' ', '|': ' ', '~': ' '};
    var9 = var1;
    var4 = copyDataProperties(var9, var8);
    var8 = {'\u200b': '', '\u200c': '', '\u200d': '', '\u200e': '', '': ''};
    var9 = var1;
    var4 = copyDataProperties(var9, var8);
    var4 = {};
    var4['|'] = var5;
    var9 = var1;
    var8 = var4;
    var4 = copyDataProperties(var9, var8);
    var _closure1_slot0 = var1;
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyword_filter/KeywordNormalization.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function normalize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var1 = var8.length;
            var7 = 0;
            var1 = var7 < var1;
            var3 = '';
            var5 = ' ';
            var4 = null;
            var2 = var3;
            if(!var1) { _fun0001_ip = 118; continue _fun0001 }
 33:
            var10 = var8[var7];
            var1 = _closure1_slot0;
            var1 = var1[var10];
            if(!(var4 == var1)) { _fun0001_ip = 88; continue _fun0001 }
 49:
            var9 = /(?:[!-#%-'\*,-\\/:;\?@\\_\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2017\u2020-\u2027\u2030-\u2038\u203B-\u2043\u2047-\u2051\u2053-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E41\u2E43-\u2E4F\u2E52-\u2E54\u2E5D\u3001-\u3003\u301C\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30-\uFE34\uFE45\uFE46\uFE49-\uFE52\uFE54-\uFE58\uFE5F-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF3F\uFF61\uFF64\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F])/g;
            var1 = var9.test;
            var1 = var1.bind(var9)(var10);
            if(var1) { _fun0001_ip = 82; continue _fun0001 }
 76:
            var9 = var3 + var10;
            _fun0001_ip = 100; continue _fun0001;
 82:
            var9 = var3 + var5;
            _fun0001_ip = 100; continue _fun0001;
 88:
            var1 = _closure1_slot0;
            var1 = var1[var10];
            var9 = var3 + var1;
 100:
            var7 = var7 + 1;
            var1 = var8.length;
            var3 = var9;
            var2 = var3;
            if(var7 < var1) { _fun0001_ip = 33; continue _fun0001 }
 118:
            var1 = var2.toLowerCase;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['normalize'] = var2;
    return var1;
})();