// app/modules/custom_status/utils/userSettingToActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _activityFromSetting(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var4 = arg2;
            var3 = null;
            if(!(var3 == var4)) { _fun0001_ip = 159; continue _fun0001 }
 15:
            var1 = var8.emojiName;
            var1 = var3 != var1;
            var2 = null;
            if(!var1) { _fun0001_ip = 193; continue _fun0001 }
 33:
            var5 = var8.emojiName;
            var1 = '';
            var2 = null;
            if(!(var1 !== var5)) { _fun0001_ip = 193; continue _fun0001 }
 52:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 3;
            var5 = var10[var1];
            var7 = undefined;
            var6 = var9.bind(var7)(var5);
            var5 = var6.getByName;
            var1 = var10[var1];
            var10 = var9.bind(var7)(var1);
            var9 = var10.convertSurrogateToName;
            var7 = var8.emojiName;
            var1 = false;
            var1 = var9.bind(var10)(var7, var1);
            var6 = var5.bind(var6)(var1);
            var5 = var3 != var6;
            var1 = null;
            if(!var5) { _fun0001_ip = 154; continue _fun0001 }
 126:
            var5 = {'id': null, 'name': null, 'animated': false};
            var6 = var6.surrogates;
            var5['name'] = var6;
            var1 = var5;
 154:
            var2 = var1;
            _fun0001_ip = 193; continue _fun0001;
 159:
            var1 = {};
            var5 = var4.id;
            var1['id'] = var5;
            var5 = var4.name;
            var1['name'] = var5;
            var4 = var4.animated;
            var1['animated'] = var4;
            var2 = var1;
 193:
            var1 = global;
            var5 = var1.Number;
            var1 = var8.expiresAtMs;
            var4 = undefined;
            var6 = var5.bind(var4)(var1);
            var1 = var8.label;
            var5 = var3 == var1;
            var3 = undefined;
            if(var5) { _fun0001_ip = 233; continue _fun0001 }
 228:
            var3 = var1.value;
 233:
            var1 = {};
            var5 = 'Custom Status';
            var1['name'] = var5;
            var5 = _closure1_slot5;
            var5 = var5.CUSTOM_STATUS;
            var1['type'] = var5;
            var5 = var8.text;
            var7 = var5.length;
            var5 = 0;
            var9 = var7 > var5;
            var7 = undefined;
            if(!var9) { _fun0001_ip = 288; continue _fun0001 }
 283:
            var7 = var8.text;
 288:
            var1['state'] = var7;
            var5 = var6 > var5;
            var4 = undefined;
            if(!var5) { _fun0001_ip = 310; continue _fun0001 }
 301:
            var5 = {};
            var5['end'] = var6;
            var4 = var5;
 310:
            var1['timestamps'] = var4;
            var1['emoji'] = var2;
            var1['details'] = var3;
            var2 = {};
            var2['label'] = var3;
            var1['metadata'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/utils/userSettingToActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getActivityFromCustomStatus(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var6 = var4.emojiId;
            var3 = _closure1_slot6;
            var7 = null;
            var5 = var7 != var6;
            var2 = null;
            if(!var5) { _fun0002_ip = 54; continue _fun0002 }
 27:
            var5 = '0';
            var2 = null;
            if(!(var5 !== var6)) { _fun0002_ip = 54; continue _fun0002 }
 39:
            var5 = _closure1_slot4;
            var1 = var5.getUsableCustomEmojiById;
            var2 = var1.bind(var5)(var6);
 54:
            var1 = undefined;
            var1 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var3['getActivityFromCustomStatus'] = var4;
    var2 = function useCustomStatusActivity() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 4;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var5 = var3.CustomStatusSetting;
            var3 = var5.useSetting;
            var6 = var3.bind(var5)();
            var _closure2_slot0 = var6;
            var3 = null;
            var5 = var3 == var6;
            var3 = undefined;
            if(var5) { _fun0003_ip = 64; continue _fun0003 }
 58:
            var3 = var6.emojiId;
 64:
            var _closure2_slot1 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var9 = var7.bind(var4)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var3 = var5 != var1;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 56; continue _fun0004 }
 18:
                    var4 = _closure2_slot1;
                    var3 = '0';
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0004_ip = 56; continue _fun0004 }
 34:
                    var4 = _closure1_slot4;
                    var3 = var4.getUsableCustomEmojiById;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 56:
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var7, var3, var5);
            var _closure2_slot2 = var5;
            var3 = _closure1_slot3;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0005_ip = 39; continue _fun0005 }
 16:
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 39:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useCustomStatusActivity'] = var2;
    return var1;
})();