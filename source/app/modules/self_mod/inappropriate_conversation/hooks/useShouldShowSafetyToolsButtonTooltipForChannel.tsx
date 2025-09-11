// app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyWarningTypes;
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var8 = var4 * var8;
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.HOUR;
    var4 = 12;
    var4 = var4 * var7;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSafetyToolsButtonTooltipForChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var2 = var8[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var2 = var5.useInappropriateConversationSafetyToolsWarningForChannel;
            var5 = var2.bind(var5)(var7);
            var2 = 3;
            var2 = var8[var2];
            var6 = var4.bind(var1)(var2);
            var2 = var6.useInappropriateConversationWarningsForChannel;
            var6 = var2.bind(var6)(var7);
            var2 = 4;
            var2 = var8[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.useShouldShowInitialSafetyToolsButtonTooltip;
            var2 = var2.bind(var4)(var7);
            var4 = null;
            if(!(var4 != var5)) { _fun0001_ip = 397; continue _fun0001 }
 96:
            if(var2) { _fun0001_ip = 397; continue _fun0001 }
 102:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var2 = var7[var2];
            var5 = var5.bind(var1)(var2);
            var2 = var5.shouldShowTakeoverForWarnings;
            var2 = var2.bind(var5)(var6);
            if(var2) { _fun0001_ip = 397; continue _fun0001 }
 139:
            var5 = var6.some;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot2;
                var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_1;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var7 = var6.filter;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.dismiss_timestamp;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var8 = var7.bind(var6)(var5);
            var7 = var8.sort;
            var5 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg2;
                    var2 = var1.dismiss_timestamp;
                    var1 = arg1;
                    var1 = var1.dismiss_timestamp;
                    var2 = var2 < var1;
                    var1 = 1;
                    if(!var2) { _fun0002_ip = 34; continue _fun0002 }
 28:
                    var1 = -1;
 34:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var5);
            var8 = var7.length;
            var5 = 1;
            if(!(!(var8 < var5))) { _fun0001_ip = 397; continue _fun0001 }
 207:
            var5 = 0;
            var5 = var7[var5];
            var11 = var5.dismiss_timestamp;
            var7 = var2;
            if(!(var7 === var1)) { _fun0001_ip = 228; continue _fun0001 }
 226:
            var7 = false;
 228:
            var5 = var4 == var11;
            var2 = true;
            if(var5) { _fun0001_ip = 335; continue _fun0001 }
 237:
            var5 = global;
            var8 = var5.Date;
            var10 = var8.prototype;
            var10 = Object.create(var10, {constructor: {value: var8}});
            var13 = var10;
            var12 = var11;
            var8 = new var13[var8](var12, var11);
            var10 = var8 instanceof Object ? var8 : var10;
            var8 = var10.getTime;
            var8 = var8.bind(var10)();
            if(var7) { _fun0001_ip = 287; continue _fun0001 }
 281:
            var7 = _closure1_slot4;
            _fun0001_ip = 291; continue _fun0001;
 287:
            var7 = _closure1_slot3;
 291:
            var7 = var8 + var7;
            var5 = var5.Date;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var13 = var8;
            var5 = new var13[var5](var12);
            var8 = var5 instanceof Object ? var5 : var8;
            var5 = var8.getTime;
            var5 = var5.bind(var8)();
            var2 = var5 >= var7;
 335:
            if(!var2) { _fun0001_ip = 397; continue _fun0001 }
 338:
            var5 = var6.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.dismiss_timestamp;
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var5 = var5.bind(var6)(var2);
            var6 = var5.findLast;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot2;
                var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_1;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var6.bind(var5)(var2);
            if(!(var4 == var2)) { _fun0001_ip = 395; continue _fun0001 }
 377:
            var4 = var5.findLast;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot2;
                var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_2;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var3);
 395:
            return var2;
 397:
            return var1;
        }
    };
    var3['useSafetyToolsButtonTooltipForChannel'] = var2;
    return var1;
})();