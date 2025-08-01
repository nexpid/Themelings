// app/modules/main_tabs_v2/native/settings/definitions/ExplicitMediaFiltersFriendsDMsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var7 = function getTitle() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var6 = undefined;
            var4 = var3.bind(var6)(var1);
            var3 = var4.isEligibleForSensitiveContentGoreExperiment;
            var1 = 'ExplicitMediaFiltersFriendsDMsSetting';
            var1 = var3.bind(var4)(var1);
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 6;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            if(var1) { _fun0001_ip = 104; continue _fun0001 }
 89:
            var1 = var2.6k0AgI;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 115; continue _fun0001;
 104:
            var2 = var2.+uI23N;
            var1 = var3.bind(var4)(var2);
 115:
            return var1;
        }
    };
    var _closure1_slot3 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.MobileSetting;
    var _closure1_slot2 = var2;
    var2 = {};
    var8 = 1;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.PRESSABLE;
    var2['type'] = var8;
    var2['title'] = var7;
    var7 = function parent() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isEligibleForSensitiveContentGoreExperiment;
            var1 = 'ExplicitMediaFiltersFriendsDMsSetting';
            var1 = var3.bind(var4)(var1);
            var2 = _closure1_slot2;
            if(var1) { _fun0002_ip = 57; continue _fun0002 }
 49:
            var1 = var2.CONTENT_AND_SOCIAL_DISCORD;
            _fun0002_ip = 63; continue _fun0002;
 57:
            var1 = var2.SENSITIVE_CONTENT_FILTERS;
 63:
            return var1;
        }
    };
    var2['parent'] = var7;
    var7 = function useObscuredContentFriendsDmSettingValue() {
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 2;
        var1 = var5[var1];
        var2 = undefined;
        var4 = var3.bind(var2)(var1);
        var1 = var4.useExplicitContentSettingOrDefault;
        var1 = var1.bind(var4)();
        var4 = var1.explicitContentFriendDm;
        var1 = 3;
        var1 = var5[var1];
        var3 = var3.bind(var2)(var1);
        var1 = var3.redactionSettingToRenderedString;
        var1 = var1.bind(var3)(var4);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['useTrailing'] = var7;
    var7 = function onObscuredContentFriendsDmOnPress() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var2 = var4[var1];
            var1 = undefined;
            var7 = var3.bind(var1)(var2);
            var5 = var7.isEligibleForSensitiveContentGoreExperiment;
            var2 = 'ExplicitMediaFiltersFriendsDMsSetting';
            var7 = var5.bind(var7)(var2);
            var2 = 5;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.getExplicitContentSettingOrDefault;
            var2 = var2.bind(var3)();
            var5 = var2.explicitContentFriendDm;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 6;
            var3 = var9[var2];
            var3 = var8.bind(var1)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var9[var2];
            var2 = var8.bind(var1)(var2);
            var2 = var2.t;
            if(var7) { _fun0003_ip = 130; continue _fun0003 }
 117:
            var7 = var2.c/UOwM;
            var7 = var3.bind(var4)(var7);
            _fun0003_ip = 141; continue _fun0003;
 130:
            var2 = var2.GYpoAg;
            var7 = var3.bind(var4)(var2);
 141:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.handleSensitiveMediaFilterPress;
            var2 = {};
            var2['title'] = var7;
            var6 = _closure1_slot3;
            var6 = var6.bind(var1)();
            var2['subtitle'] = var6;
            var6 = function handlePress(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.updateExplicitContentSetting;
                var1 = {};
                var4 = arg1;
                var1['explicitContentFriendDm'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['handlePress'] = var6;
            var2['currentValue'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['onPress'] = var7;
    var4 = function getSearchTerms() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var7 = undefined;
            var4 = var3.bind(var7)(var1);
            var3 = var4.isEligibleForSensitiveContentGoreExperiment;
            var1 = 'ExplicitMediaFiltersFriendsDMsSetting';
            var1 = var3.bind(var4)(var1);
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 6;
            var2 = var8[var3];
            var2 = var6.bind(var7)(var2);
            var5 = var2.intl;
            var4 = var5.string;
            var2 = var8[var3];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            if(var1) { _fun0004_ip = 257; continue _fun0004 }
 92:
            var1 = var2.uEz8JC;
            var9 = var4.bind(var5)(var1);
            var1 = new Array(4);
            var1[0] = var9;
            var9 = var8[var3];
            var9 = var6.bind(var7)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var8[var3];
            var9 = var6.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.N/oRIy;
            var9 = var10.bind(var11)(var9);
            var1[1] = var9;
            var9 = var8[var3];
            var9 = var6.bind(var7)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var8[var3];
            var9 = var6.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.QVdYsL;
            var9 = var10.bind(var11)(var9);
            var1[2] = var9;
            var9 = var8[var3];
            var9 = var6.bind(var7)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var8[var3];
            var9 = var6.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.aWD+tr;
            var9 = var10.bind(var11)(var9);
            var1[3] = var9;
            _fun0004_ip = 375; continue _fun0004;
 257:
            var2 = var2.N/oRIy;
            var4 = var4.bind(var5)(var2);
            var2 = new Array(3);
            var2[0] = var4;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var9 = var4.intl;
            var5 = var9.string;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.QVdYsL;
            var4 = var5.bind(var9)(var4);
            var2[1] = var4;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.5mnTa2;
            var3 = var4.bind(var5)(var3);
            var2[2] = var3;
            var1 = var2;
 375:
            return var1;
        }
    };
    var2['additionalSearchTerms'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/ExplicitMediaFiltersFriendsDMsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();