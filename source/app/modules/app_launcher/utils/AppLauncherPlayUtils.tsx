// app/modules/app_launcher/utils/AppLauncherPlayUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _launchActivityInBotDM() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var11 = var2.appId;
                    var13 = var2.botId;
                    var10 = var2.analyticsLocations;
                    var9 = var2.customId;
                    var8 = var2.referrerId;
                    var7 = var2.commandOrigin;
                    var6 = undefined;
                    SaveGenerator(address=55);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 1;
                    var3 = var12[var3];
                    var12 = var5.bind(var6)(var3);
                    var5 = var12.tryLaunchAsFrame;
                    var3 = {};
                    var3['applicationId'] = var11;
                    var3 = var5.bind(var12)(var3);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 2;
                    var3 = var12[var3];
                    var12 = var5.bind(var6)(var3);
                    var5 = var12.openPrivateChannel;
                    var3 = {};
                    var3['recipientIds'] = var13;
                    var3 = var5.bind(var12)(var3);
                    SaveGenerator(address=152);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 3;
                    var4 = var12[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = {};
                    var4['targetApplicationId'] = var11;
                    var4['channelId'] = var3;
                    var4['analyticsLocations'] = var10;
                    var4['customId'] = var9;
                    var4['referrerId'] = var8;
                    var4['commandOrigin'] = var7;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=218);
case 14:
                    return var4;
case 15:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    return var4;
case 16:
                    return var4;
case 12:
                    return var3;
case 8:
                    var3 = global;
                    var5 = var3.Promise;
                    var4 = var5.resolve;
                    var3 = true;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 6:
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
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/utils/AppLauncherPlayUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function launchActivityInBotDM() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['launchActivityInBotDM'] = var2;
    return var1;
})();