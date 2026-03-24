// app/modules/search/tokens/SearchTokenStreamerModeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var7 = function isFromUserFilterSupported() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var3;
            var4 = var2;
case 2:
            var3 = var4;
            var2 = var3[Symbol.iterator];
            var3 = var2().next;
            var4 = var3().value;
            var3 = var2;
            var3 = var3 === var1;
            var1 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4;
case 4:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2.return();
case 6:
            var1 = var1.hidePersonalInformation;
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot5 = var7;
    var6 = function isMentionsUserFilterSupported() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var3;
            var4 = var2;
case 2:
            var3 = var4;
            var2 = var3[Symbol.iterator];
            var3 = var2().next;
            var4 = var3().value;
            var3 = var2;
            var3 = var3 === var1;
            var1 = undefined;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var4;
case 4:
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2.return();
case 6:
            var1 = var1.hidePersonalInformation;
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot6 = var6;
    var5 = function isInChannelFilterSupported(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = _closure1_slot2;
            var1 = new Array(1);
            var1[0] = var2;
            var3 = var1;
case 8:
            var2 = var3;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var5 = var2().value;
            var2 = var1;
            var2 = var2 === var6;
            var3 = undefined;
            if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 4:
            var3 = var5;
case 7:
            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 6:
            var1.return();
case 10:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var5 = var5.bind(var6)(var1);
            var1 = var5.isGuildLikeSearchContext;
            var1 = var1.bind(var5)(var4);
            var5 = !var1;
            var1 = !var5;
            if(!var5) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = var4.type;
            var2 = _closure1_slot4;
            var2 = var2.DMS;
            var2 = var4 === var2;
            if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = var3.hidePersonalInformation;
            var2 = !var3;
case 13:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function getValidOrderedFilterTokens(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg2;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var3 = var2().value;
            var2 = var1;
            var5 = undefined;
            var2 = var2 === var5;
            var6 = undefined;
            if(var2) { _fun0004_ip = 2; continue _fun0004 }
case 15:
            var6 = var3;
case 2:
            if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 8:
            var1.return();
case 16:
            var1 = new Array(0);
            var4 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var6;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var4 = var1.push;
            var3 = _closure1_slot3;
            var3 = var3.FILTER_FROM;
            var3 = var4.bind(var1)(var3);
case 17:
            var7 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var6;
            var3 = arg1;
            var3 = var7.bind(var5)(var3, var4);
            if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 12:
            var4 = var1.push;
            var3 = _closure1_slot3;
            var3 = var3.FILTER_IN;
            var3 = var4.bind(var1)(var3);
case 19:
            var4 = var1.push;
            var3 = _closure1_slot3;
            var3 = var3.FILTER_HAS;
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var6;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var4 = var1.push;
            var3 = _closure1_slot3;
            var3 = var3.FILTER_MENTIONS;
            var3 = var4.bind(var1)(var3);
case 20:
            var4 = var1.push;
            var3 = _closure1_slot3;
            var3 = var3.FILTER_ON;
            var3 = var4.bind(var1)(var3);
            var4 = var1.push;
            var3 = _closure1_slot3;
            var3 = var3.FILTER_BEFORE;
            var3 = var4.bind(var1)(var3);
            var4 = var1.push;
            var3 = _closure1_slot3;
            var3 = var3.FILTER_AFTER;
            var3 = var4.bind(var1)(var3);
            var3 = var1.push;
            var2 = _closure1_slot3;
            var2 = var2.FILTER_AUTHOR_TYPE;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var11 = var10[var1];
    var8 = metroImportDefault;
    var1 = undefined;
    var8 = var8.bind(var1)(var11);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.SearchTokenTypes;
    var _closure1_slot3 = var11;
    var8 = var8.SearchTypes;
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/search/tokens/SearchTokenStreamerModeUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['isFromUserFilterSupported'] = var7;
    var3['isMentionsUserFilterSupported'] = var6;
    var3['isInChannelFilterSupported'] = var5;
    var3['getValidOrderedFilterTokens'] = var4;
    var2 = function getValidFilterTokens(arg1, arg2) {
        var4 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var6 = var4.bind(var3)(var2, var1);
        var1 = global;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var7 = var2;
        var1 = new var7[var1](var6, var5);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getValidFilterTokens'] = var2;
    return var1;
})();