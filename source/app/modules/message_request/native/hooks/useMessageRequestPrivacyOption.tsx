// app/modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = function MessageRequestRestrictedGuildPrivacyOption(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var9 = var3.id;
        var _closure2_slot0 = var9;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 2;
        var6 = var12[var5];
        var4 = undefined;
        var6 = var11.bind(var4)(var6);
        var7 = var6.MessageRequestRestrictedGuildIds;
        var6 = var7.useSetting;
        var7 = var6.bind(var7)();
        var6 = var7.includes;
        var7 = var6.bind(var7)(var9);
        var5 = var12[var5];
        var5 = var11.bind(var4)(var5);
        var6 = var5.RestrictedGuildIds;
        var5 = var6.useSetting;
        var6 = var5.bind(var6)();
        var5 = var6.includes;
        var3 = var3.id;
        var5 = var5.bind(var6)(var3);
        var8 = _closure1_slot3;
        var6 = var8.useCallback;
        var3 = new Array(1);
        var3[0] = var9;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getSanitizedMessageRequestRestrictedGuilds;
                var6 = var3.bind(var4)();
                var3 = arg1;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var6.add;
                var3 = _closure2_slot0;
                var3 = var4.bind(var6)(var3);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var4 = var6.delete;
                var3 = _closure2_slot0;
                var3 = var4.bind(var6)(var3);
case 4:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var4 = var2.MessageRequestRestrictedGuildIds;
                var3 = var4.updateSetting;
                var2 = global;
                var5 = var2.Array;
                var2 = var5.from;
                var2 = var2.bind(var5)(var6);
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var6 = var6.bind(var8)(var2, var3);
        var3 = _closure1_slot4;
        var1 = 4;
        var1 = var12[var1];
        var1 = var11.bind(var4)(var1);
        var2 = var1.ActionSheetSwitchRow;
        var1 = {};
        var8 = 5;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var13 = var9.intl;
        var10 = var13.string;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.7UgSGB;
        var9 = var10.bind(var13)(var9);
        var1['label'] = var9;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.INRaYW;
        var8 = var9.bind(var10)(var8);
        var1['subLabel'] = var8;
        var7 = !var7;
        var1['value'] = var7;
        var1['onValueChange'] = var6;
        var1['disabled'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMessageRequestPrivacyOption(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guild;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.bind(var5)();
            var1 = null;
            if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var4 = _closure1_slot4;
            var3 = _closure1_slot5;
            var2 = {};
            var2['guild'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 5:
            return var1;
        }
    };
    var3['useMessageRequestPrivacyOption'] = var2;
    return var1;
})();