// app/modules/main_tabs_v2/native/settings/definitions/ExplicitMediaFiltersNonFriendsDMsSetting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function useObscuredContentNonFriendsDmSettingValue() {
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 2;
        var1 = var5[var1];
        var2 = undefined;
        var4 = var3.bind(var2)(var1);
        var1 = var4.useExplicitContentSettingOrDefault;
        var1 = var1.bind(var4)();
        var4 = var1.explicitContentNonFriendDm;
        var1 = 3;
        var1 = var5[var1];
        var3 = var3.bind(var2)(var1);
        var1 = var3.redactionSettingToRenderedString;
        var1 = var1.bind(var3)(var4);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2 = function onObscuredContentNonFriendsDmOnPress() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            var5 = var2.explicitContentNonFriendDm;
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
            if(var7) { _fun0001_ip = 130; continue _fun0001 }
 117:
            var7 = var2.c/UOwM;
            var7 = var3.bind(var4)(var7);
            _fun0001_ip = 141; continue _fun0001;
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
                var1['explicitContentNonFriendDm'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['handlePress'] = var6;
            var2['currentValue'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var9 = function getTitle() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            if(var1) { _fun0002_ip = 104; continue _fun0002 }
 89:
            var1 = var2.D2EGSk;
            var1 = var3.bind(var4)(var1);
            _fun0002_ip = 115; continue _fun0002;
 104:
            var2 = var2.Yh+HX1;
            var1 = var3.bind(var4)(var2);
 115:
            return var1;
        }
    };
    var _closure1_slot3 = var9;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var5 = var5.MobileSetting;
    var _closure1_slot2 = var5;
    var5 = {};
    var10 = 1;
    var10 = var8[var10];
    var10 = var7.bind(var1)(var10);
    var10 = var10.RendererType;
    var10 = var10.PRESSABLE;
    var5['type'] = var10;
    var5['title'] = var9;
    var9 = function parent() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isEligibleForSensitiveContentGoreExperiment;
            var1 = 'ExplicitMediaFiltersNonFriendsDMsSetting';
            var1 = var3.bind(var4)(var1);
            var2 = _closure1_slot2;
            if(var1) { _fun0003_ip = 57; continue _fun0003 }
 49:
            var1 = var2.CONTENT_AND_SOCIAL_DISCORD;
            _fun0003_ip = 63; continue _fun0003;
 57:
            var1 = var2.SENSITIVE_CONTENT_FILTERS;
 63:
            return var1;
        }
    };
    var5['parent'] = var9;
    var5['useTrailing'] = var4;
    var5['onPress'] = var2;
    var6 = function getSearchTerms() {
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
    var5['additionalSearchTerms'] = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/settings/definitions/ExplicitMediaFiltersNonFriendsDMsSetting.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useObscuredContentNonFriendsDmSettingValue'] = var4;
    var3['onObscuredContentNonFriendsDmOnPress'] = var2;
    return var1;
})();