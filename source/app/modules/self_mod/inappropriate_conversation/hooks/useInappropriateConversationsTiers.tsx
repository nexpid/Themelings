// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyWarningTypes;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var4 = undefined;
            var8 = var5.bind(var4)(var1);
            var2 = var8.useIsEligibleForInappropriateConversationWarning;
            var1 = {};
            var9 = 'context-menu-item';
            var1['location'] = var9;
            var2 = var2.bind(var8)(var1);
            var1 = 3;
            var1 = var6[var1];
            var11 = var5.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot2;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var10.bind(var11)(var8, var1);
            var1 = 4;
            var1 = var6[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.useInappropriateConversationBannerForChannel;
            var1 = var7.id;
            var5 = var5.bind(var6)(var1, var9);
            var6 = null;
            var1 = var6 == var8;
            var9 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var8.isStaff;
            var9 = var1.bind(var8)();
case 2:
            var8 = true;
            var1 = null;
            if(!(var8 === var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var7.isDM;
            var2 = var2.bind(var7)();
            var1 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var2 = {};
            var7 = var6 == var5;
            var8 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var5.type;
case 8:
            var7 = _closure1_slot3;
            var7 = var7.INAPPROPRIATE_CONVERSATION_TIER_1;
            var7 = var8 === var7;
            var2['isTier1'] = var7;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var5.type;
case 10:
            var3 = _closure1_slot3;
            var3 = var3.INAPPROPRIATE_CONVERSATION_TIER_2;
            var3 = var4 === var3;
            var2['isTier2'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useInappropriateConversationsTiers'] = var2;
    return var1;
})();