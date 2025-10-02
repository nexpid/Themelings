// app/modules/activities/native/openActivityDMLauncher.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _openActivityDMLauncher() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    var11 = arg2;
                    var8 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = undefined;
                    if(!(var8 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = false;
case 4:
                    SaveGenerator(address=31);
case 6:
                    return var6;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 2;
                    var3 = var5[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.fetchApplication;
                    var3 = var3.bind(var4)(var10);
                    SaveGenerator(address=78);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = var3.bot;
                    var7 = null;
                    var5 = var7 == var4;
                    var12 = undefined;
                    if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var12 = var4.id;
case 14:
                    if(!(var7 != var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    if(!(var7 != var12)) { _fun0001_ip = 16; continue _fun0001 }
case 18:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 3;
                    var4 = var9[var4];
                    var9 = var5.bind(var6)(var4);
                    var5 = var9.openPrivateChannel;
                    var4 = {};
                    var4['recipientIds'] = var12;
                    var4 = var5.bind(var9)(var4);
                    SaveGenerator(address=165);
case 19:
                    return var4;
case 20:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 4;
                    var5 = var12[var5];
                    var14 = var9.bind(var6)(var5);
                    var12 = var14.getCustomActivityLinkParams;
                    var9 = arg4;
                    var5 = arg3;
                    var5 = var12.bind(var14)(var10, var9, var5);
                    SaveGenerator(address=217);
case 23:
                    return var5;
case 24:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var12 = var5.customId;
                    if(var8) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var8 = 5;
                    var8 = var15[var8];
                    var9 = var14.bind(var6)(var8);
                    var8 = {};
                    var8['targetApplicationId'] = var10;
                    var10 = {};
                    var8['locationObject'] = var10;
                    var8['channelId'] = var4;
                    var10 = 6;
                    var10 = var15[var10];
                    var10 = var14.bind(var6)(var10);
                    var14 = var10.ACTIVITY_BOOKMARK;
                    var10 = new Array(1);
                    var10[0] = var14;
                    var8['analyticsLocations'] = var10;
                    var14 = _closure1_slot0;
                    var10 = 7;
                    var10 = var15[var10];
                    var10 = var14.bind(var6)(var10);
                    var10 = var10.CommandOrigin;
                    var10 = var10.ACTIVITY_BOOKMARK_EMBED;
                    var8['commandOrigin'] = var10;
                    var8['referrerId'] = var11;
                    var8['customId'] = var12;
                    var8 = var9.bind(var6)(var8);
                    SaveGenerator(address=359);
case 29:
                    return var8;
case 30:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(!var9) { _fun0001_ip = 16; continue _fun0001 }
case 31:
                    return var8;
case 27:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 8;
                    var8 = var10[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.getBestActiveInput;
                    var9 = var8.bind(var9)();
                    if(!(var7 != var9)) { _fun0001_ip = 16; continue _fun0001 }
case 32:
                    var8 = var9.openCustomKeyboard;
                    var7 = {};
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 9;
                    var10 = var15[var10];
                    var10 = var14.bind(var6)(var10);
                    var10 = var10.KeyboardTypes;
                    var10 = var10.APP_LAUNCHER;
                    var7['type'] = var10;
                    var10 = {};
                    var10['application'] = var3;
                    var13 = _closure1_slot4;
                    var13 = var13.APPLICATION_VIEW;
                    var10['initialRouteName'] = var13;
                    var10['customId'] = var12;
                    var10['referrerId'] = var11;
                    var7['context'] = var10;
                    var7 = var8.bind(var9)(var7);
case 16:
                    return var6;
case 25:
                    return var5;
case 21:
                    return var4;
case 12:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot4 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/openActivityDMLauncher.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openActivityDMLauncher() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();