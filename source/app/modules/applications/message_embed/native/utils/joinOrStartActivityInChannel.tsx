// app/modules/applications/message_embed/native/utils/joinOrStartActivityInChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _joinOrStartActivityInChannel() {
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
                    var15 = var2.appId;
                    var _closure4_slot0 = var15;
                    var9 = var2.channelId;
                    var13 = var2.analyticsLocations;
                    var12 = var2.customId;
                    var11 = var2.referrerId;
                    var6 = undefined;
                    SaveGenerator(address=54);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot4;
                    var3 = var5.getSelfEmbeddedActivityForChannel;
                    var3 = var3.bind(var5)(var9);
                    var8 = _closure1_slot6;
                    var5 = var8.getVoiceChannelId;
                    var8 = var5.bind(var8)();
                    var5 = null;
                    var14 = var5 == var3;
                    var10 = undefined;
                    if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var10 = var3.applicationId;
case 8:
                    if(!(var10 === var15)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    if(!(var8 !== var9)) { _fun0001_ip = 12; continue _fun0001 }
case 10:
                    var10 = _closure1_slot4;
                    var8 = var10.getEmbeddedActivitiesForChannel;
                    var10 = var8.bind(var10)(var9);
                    var8 = var10.filter;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.applicationId;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var8 = var8.bind(var10)(var7);
                    var10 = var8.length;
                    var7 = 0;
                    var10 = var10 > var7;
                    var14 = undefined;
                    if(!var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var7 = var8[var7];
                    var14 = var7.compositeInstanceId;
case 13:
                    var8 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var7 = 5;
                    var7 = var16[var7];
                    var10 = var8.bind(var6)(var7);
                    var8 = var10.runPrimaryAppCommandOrJoinEmbeddedActivity;
                    var7 = {};
                    var7['channelId'] = var9;
                    var7['applicationId'] = var15;
                    var14 = var5 == var14;
                    var7['isStart'] = var14;
                    var15 = _closure1_slot1;
                    var14 = 6;
                    var14 = var16[var14];
                    var14 = var15.bind(var6)(var14);
                    var14 = var14.bind(var6)();
                    var7['embeddedActivitiesManager'] = var14;
                    var7['analyticsLocations'] = var13;
                    var7['customId'] = var12;
                    var7['referrerId'] = var11;
                    var7 = var8.bind(var10)(var7);
                    SaveGenerator(address=272);
case 15:
                    return var7;
case 16:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    return var7;
case 17:
                    return var7;
case 12:
                    var8 = _closure1_slot5;
                    var7 = var8.getChannel;
                    var8 = var7.bind(var8)(var9);
                    var9 = var5 == var8;
                    var7 = undefined;
                    if(var9) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var7 = var8.guild_id;
case 19:
                    var8 = var5 != var7;
                    var5 = null;
                    if(!var8) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var5 = var7;
case 21:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 4;
                    var4 = var8[var4];
                    var4 = var7.bind(var6)(var4);
                    var3 = var3.location;
                    var3 = var4.bind(var6)(var5, var3);
                    var3 = true;
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
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/message_embed/native/utils/joinOrStartActivityInChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function joinOrStartActivityInChannel() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['joinOrStartActivityInChannel'] = var2;
    return var1;
})();