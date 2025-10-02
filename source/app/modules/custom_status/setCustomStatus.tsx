// app/modules/custom_status/setCustomStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function determineEmojiType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = null;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2.id;
            var3 = var3 != var2;
            var2 = 'unicode';
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 'custom';
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ClearAfterValues;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/setCustomStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setCustomStatus(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.text;
            var15 = var1.emojiInfo;
            var13 = var1.clearAfter;
            var17 = var1.analyticsContext;
            var5 = var1.createdAtMs;
            var8 = var1.prompt;
            var6 = var1.analyticsLocations;
            var1 = var2.trim;
            var10 = var1.bind(var2)();
            var1 = var10.length;
            var9 = 0;
            if(!(!(var1 > var9))) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = null;
            if(!(var1 == var15)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.CustomStatusSetting;
            var1 = var2.updateSetting;
            var1 = var1.bind(var2)(var3);
            return var1;
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var7 = undefined;
            var1 = var2.bind(var7)(var1);
            var3 = var1.CustomStatusSetting;
            var2 = var3.updateSetting;
            var1 = {};
            var4 = var10.length;
            var9 = var4 > var9;
            var12 = '';
            var4 = var12;
            if(!var9) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = var10;
case 9:
            var1['text'] = var4;
            var9 = null;
            var11 = var9 != var13;
            var16 = '0';
            var4 = var16;
            if(!var11) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var11 = _closure1_slot3;
            var11 = var11.DONT_CLEAR;
            var4 = var16;
            if(!(var13 !== var11)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
            var11 = global;
            var18 = var11.String;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 3;
            var11 = var22[var11];
            var11 = var19.bind(var7)(var11);
            var21 = var11.bind(var7)();
            var20 = var21.add;
            var11 = 4;
            var11 = var22[var11];
            var11 = var19.bind(var7)(var11);
            var19 = var11.bind(var7)(var13);
            var11 = 'ms';
            var19 = var20.bind(var21)(var19, var11);
            var11 = var19.toDate;
            var19 = var11.bind(var19)();
            var11 = var19.getTime;
            var11 = var11.bind(var19)();
            var4 = var18.bind(var7)(var11);
case 11:
            var1['expiresAtMs'] = var4;
            var11 = var9 != var15;
            var4 = var16;
            if(!var11) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var11 = var15.id;
            var11 = var9 != var11;
            var4 = var16;
            if(!var11) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var4 = var15.id;
case 14:
            var1['emojiId'] = var4;
            var11 = var9 != var15;
            var4 = var12;
            if(!var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = var15.name;
case 17:
            var1['emojiName'] = var4;
            var11 = global;
            var4 = var11.String;
            if(!(var9 == var5)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var16 = 3;
            var16 = var19[var16];
            var16 = var18.bind(var7)(var16);
            var18 = var16.bind(var7)();
            var16 = var18.toDate;
            var18 = var16.bind(var18)();
            var16 = var18.getTime;
            var5 = var16.bind(var18)();
case 19:
            var4 = var4.bind(var7)(var5);
            var1['createdAtMs'] = var4;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var5 = var3.bind(var7)(var2);
            var4 = var5.track;
            var2 = _closure1_slot4;
            var3 = var2.CUSTOM_STATUS_UPDATED;
            var2 = {};
            var18 = var9 != var17;
            var16 = null;
            if(!var18) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var16 = var17.location;
case 21:
            var2['location'] = var16;
            var14 = _closure1_slot5;
            var14 = var14.bind(var7)(var15);
            var2['emoji_type'] = var14;
            var10 = var10.length;
            var2['text_len'] = var10;
            var14 = var9 != var13;
            var10 = null;
            if(!var14) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var11 = var11.HermesInternal;
            var11 = var11.concat;
            var10 = var11.bind(var12)(var13);
case 23:
            var2['clear_after'] = var10;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var7 = var8.value;
case 25:
            var2['prompt_type'] = var7;
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();