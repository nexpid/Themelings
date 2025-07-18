// app/modules/keyword_filter/KeywordMatch.tsx
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
    var4 = {};
    var5 = 0;
    var4['ExactMatch'] = var5;
    var1 = 'ExactMatch';
    var4[var5] = var1;
    var6 = 1;
    var4['PrefixMatch'] = var6;
    var1 = 'PrefixMatch';
    var4[var6] = var1;
    var _closure1_slot0 = var4;
    var1 = function isWordCharacterIndicator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = /(?:[!-#%-\*,-\\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F])/g;
            var4 = var5.test;
            var1 = null;
            var6 = var1 != var3;
            var2 = '';
            var1 = var2;
            if(!var6) { _fun0001_ip = 41; continue _fun0001 }
 38:
            var1 = var3;
 41:
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0001_ip = 57; continue _fun0001 }
 49:
            var4 = ' ';
            var1 = var4 === var3;
 57:
            if(var1) { _fun0001_ip = 64; continue _fun0001 }
 60:
            var1 = var2 === var3;
 64:
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = native7;
    var6 = var1[var5];
    var5 = native2;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/keyword_filter/KeywordMatch.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MatchStrategy'] = var4;
    var4 = function(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var6 = arg2;
            var8 = arg3;
            var1 = _closure1_slot0;
            var3 = var1.PrefixMatch;
            var1 = arg4;
            if(!(var1 !== var3)) { _fun0002_ip = 108; continue _fun0002 }
 29:
            var3 = var8 - var6;
            var1 = var5.length;
            var3 = var3 > var1;
            var1 = false;
            if(var3) { _fun0002_ip = 106; continue _fun0002 }
 47:
            var7 = var5.charAt;
            var3 = 1;
            var4 = var6 - var3;
            var4 = var7.bind(var5)(var4);
            var7 = var5.charAt;
            var3 = var8 + var3;
            var8 = var7.bind(var5)(var3);
            var3 = _closure1_slot1;
            var7 = undefined;
            var3 = var3.bind(var7)(var4);
            if(!var3) { _fun0002_ip = 103; continue _fun0002 }
 94:
            var4 = _closure1_slot1;
            var3 = var4.bind(var7)(var8);
 103:
            var1 = var3;
 106:
            _fun0002_ip = 137; continue _fun0002;
 108:
            var4 = var5.charAt;
            var3 = 1;
            var3 = var6 - var3;
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot1;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 137:
            return var1;
        }
    };
    var3['isMatch'] = var4;
    var2 = function(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var6 = arg3;
            var1 = _closure1_slot0;
            var2 = var1.ExactMatch;
            var1 = arg4;
            if(!(var1 !== var2)) { _fun0003_ip = 171; continue _fun0003 }
 32:
            var1 = var5.length;
            var7 = 1;
            var1 = var1 - var7;
            var2 = var6;
            if(!(var6 < var1)) { _fun0003_ip = 138; continue _fun0003 }
 51:
            var3 = _closure1_slot1;
            var8 = var5.charAt;
            var1 = var6 + var7;
            var1 = var8.bind(var5)(var1);
            var8 = undefined;
            var1 = var3.bind(var8)(var1);
            var3 = var6;
            var2 = var3;
            if(var1) { _fun0003_ip = 138; continue _fun0003 }
 86:
            var10 = var3 + 1;
            var1 = var5.length;
            var1 = var1 - var7;
            var2 = var10;
            if(!(var10 < var1)) { _fun0003_ip = 138; continue _fun0003 }
 105:
            var11 = _closure1_slot1;
            var12 = var5.charAt;
            var1 = var10 + var7;
            var1 = var12.bind(var5)(var1);
            var1 = var11.bind(var8)(var1);
            var3 = var10;
            var2 = var3;
            if(!var1) { _fun0003_ip = 86; continue _fun0003 }
 138:
            var1 = {};
            var1['start'] = var4;
            var1['end'] = var2;
            var3 = var5.substring;
            var2 = var2 + var7;
            var2 = var3.bind(var5)(var4, var2);
            var1['keyword'] = var2;
            return var1;
 171:
            var1 = {};
            var1['start'] = var4;
            var1['end'] = var6;
            var3 = var5.substring;
            var2 = 1;
            var2 = var6 + var2;
            var2 = var3.bind(var5)(var4, var2);
            var1['keyword'] = var2;
            return var1;
        }
    };
    var3['getMatchedPositions'] = var2;
    return var1;
})();