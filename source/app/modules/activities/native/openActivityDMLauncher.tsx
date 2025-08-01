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
 0:
                    StartGenerator();
                    var10 = arg1;
                    var11 = arg2;
                    var8 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 501; continue _fun0001 }
 19:
                    var6 = undefined;
                    if(!(var8 === var6)) { _fun0001_ip = 27; continue _fun0001 }
 25:
                    var8 = false;
 27:
                    SaveGenerator(address=31);
 29:
                    return var6;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 498; continue _fun0001 }
 40:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 2;
                    var3 = var5[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.fetchApplication;
                    var3 = var3.bind(var4)(var10);
                    SaveGenerator(address=78);
 76:
                    return var3;
 78:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 495; continue _fun0001 }
 87:
                    var4 = var3.bot;
                    var7 = null;
                    var5 = var7 == var4;
                    var12 = undefined;
                    if(var5) { _fun0001_ip = 109; continue _fun0001 }
 104:
                    var12 = var4.id;
 109:
                    if(!(var7 != var3)) { _fun0001_ip = 486; continue _fun0001 }
 116:
                    if(!(var7 != var12)) { _fun0001_ip = 486; continue _fun0001 }
 123:
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
 163:
                    return var4;
 165:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 492; continue _fun0001 }
 174:
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
 215:
                    return var5;
 217:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 489; continue _fun0001 }
 226:
                    var12 = var5.customId;
                    if(var8) { _fun0001_ip = 368; continue _fun0001 }
 238:
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
 357:
                    return var8;
 359:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(!var9) { _fun0001_ip = 486; continue _fun0001 }
 365:
                    return var8;
 368:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 8;
                    var8 = var10[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.getBestActiveInput;
                    var9 = var8.bind(var9)();
                    if(!(var7 != var9)) { _fun0001_ip = 486; continue _fun0001 }
 402:
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
 486:
                    return var6;
 489:
                    return var5;
 492:
                    return var4;
 495:
                    return var3;
 498:
                    return var2;
 501:
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