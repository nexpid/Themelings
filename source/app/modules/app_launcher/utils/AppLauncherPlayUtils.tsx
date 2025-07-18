// app/modules/app_launcher/utils/AppLauncherPlayUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _launchActivityInBotDM() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 193; continue _fun0001 }
 13:
                    var11 = var2.appId;
                    var13 = var2.botId;
                    var10 = var2.analyticsLocations;
                    var9 = var2.customId;
                    var8 = var2.referrerId;
                    var7 = var2.commandOrigin;
                    var6 = undefined;
                    SaveGenerator(address=55);
 53:
                    return var6;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 190; continue _fun0001 }
 64:
                    var5 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var3 = 1;
                    var3 = var12[var3];
                    var12 = var5.bind(var6)(var3);
                    var5 = var12.openPrivateChannel;
                    var3 = {};
                    var3['recipientIds'] = var13;
                    var3 = var5.bind(var12)(var3);
                    SaveGenerator(address=109);
 107:
                    return var3;
 109:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 187; continue _fun0001 }
 115:
                    var5 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var4 = 2;
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
                    SaveGenerator(address=175);
 173:
                    return var4;
 175:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 184; continue _fun0001 }
 181:
                    return var4;
 184:
                    return var4;
 187:
                    return var3;
 190:
                    return var2;
 193:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot3 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot3 = var1;
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
    var4 = 3;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/utils/AppLauncherPlayUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function launchActivityInBotDM() {
        var1 = undefined;
        var4 = _closure1_slot3;
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