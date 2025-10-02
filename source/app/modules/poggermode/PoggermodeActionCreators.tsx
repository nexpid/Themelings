// app/modules/poggermode/PoggermodeActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/poggermode/PoggermodeActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function updatePoggermodeSettings(arg1) {
        var2 = arg1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 3;
        var3 = var5[var1];
        var1 = undefined;
        var8 = var4.bind(var1)(var3);
        var7 = var8.dispatch;
        var3 = {};
        var9 = 'POGGERMODE_SETTINGS_UPDATE';
        var3['type'] = var9;
        var3['settings'] = var2;
        var3 = var7.bind(var8)(var3);
        var3 = {};
        var7 = _closure1_slot3;
        var6 = var7.getState;
        var10 = var6.bind(var7)();
        var11 = var3;
        var6 = copyDataProperties(var11, var10);
        var11 = var3;
        var10 = var2;
        var2 = copyDataProperties(var11, var10);
        var2 = 4;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['updatePoggermodeSettings'] = var4;
    var4 = function updateCombo(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'POGGERMODE_UPDATE_COMBO';
        var2['type'] = var5;
        var6 = arg1;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateCombo'] = var4;
    var4 = function clearMessageCombo(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'POGGERMODE_UPDATE_MESSAGE_COMBO';
        var2['type'] = var5;
        var5 = {};
        var8 = arg1;
        var9 = var5;
        var6 = copyDataProperties(var9, var8);
        var7 = true;
        var6 = 'displayed';
        var5[var6] = var7;
        var2['comboMessage'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearMessageCombo'] = var4;
    var2 = function updateComboOnMessageSend(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot2;
            var2 = var3.getId;
            var6 = var2.bind(var3)();
            var3 = _closure1_slot4;
            var2 = var3.getUserCombo;
            var9 = var2.bind(var3)(var6, var7);
            var8 = null;
            if(!(var8 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'POGGERMODE_UPDATE_MESSAGE_COMBO';
            var2['type'] = var5;
            var5 = {};
            var5['combo'] = var9;
            var5['channelId'] = var7;
            var10 = arg2;
            var5['messageId'] = var10;
            var10 = false;
            var5['displayed'] = var10;
            var2['comboMessage'] = var5;
            var2 = var3.bind(var4)(var2);
case 2:
            var2 = var8 != var9;
            var3 = 1;
            var5 = var3;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var8 == var9;
            var10 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var9.value;
case 6:
            var2 = 0;
            var10 = var10 > var2;
            var5 = var3;
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var10 = var8 == var9;
            var4 = undefined;
            if(var10) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var9.multiplier;
case 9:
            var8 = var8 != var4;
            var2 = 0;
            if(!var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var4;
case 11:
            var5 = var2 + var3;
case 4:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var8 = 'POGGERMODE_UPDATE_COMBO';
            var2['type'] = var8;
            var2['channelId'] = var7;
            var2['userId'] = var6;
            var2['multiplier'] = var5;
            var5 = 0;
            var2['value'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['updateComboOnMessageSend'] = var2;
    return var1;
})();