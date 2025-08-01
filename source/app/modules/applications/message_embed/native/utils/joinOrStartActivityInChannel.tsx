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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 363; continue _fun0001 }
 15:
                    var15 = var2.appId;
                    var _closure4_slot0 = var15;
                    var9 = var2.channelId;
                    var13 = var2.analyticsLocations;
                    var12 = var2.customId;
                    var11 = var2.referrerId;
                    var6 = undefined;
                    SaveGenerator(address=54);
 52:
                    return var6;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 360; continue _fun0001 }
 63:
                    var5 = _closure1_slot4;
                    var3 = var5.getSelfEmbeddedActivityForChannel;
                    var3 = var3.bind(var5)(var9);
                    var8 = _closure1_slot6;
                    var5 = var8.getVoiceChannelId;
                    var8 = var5.bind(var8)();
                    var5 = null;
                    var14 = var5 == var3;
                    var10 = undefined;
                    if(var14) { _fun0001_ip = 111; continue _fun0001 }
 106:
                    var10 = var3.applicationId;
 111:
                    if(!(var10 === var15)) { _fun0001_ip = 122; continue _fun0001 }
 115:
                    if(!(var8 !== var9)) { _fun0001_ip = 284; continue _fun0001 }
 122:
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
                    if(!var10) { _fun0001_ip = 178; continue _fun0001 }
 168:
                    var7 = var8[var7];
                    var14 = var7.compositeInstanceId;
 178:
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
 270:
                    return var7;
 272:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 281; continue _fun0001 }
 278:
                    return var7;
 281:
                    return var7;
 284:
                    var8 = _closure1_slot5;
                    var7 = var8.getChannel;
                    var8 = var7.bind(var8)(var9);
                    var9 = var5 == var8;
                    var7 = undefined;
                    if(var9) { _fun0001_ip = 312; continue _fun0001 }
 307:
                    var7 = var8.guild_id;
 312:
                    var8 = var5 != var7;
                    var5 = null;
                    if(!var8) { _fun0001_ip = 324; continue _fun0001 }
 321:
                    var5 = var7;
 324:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 4;
                    var4 = var8[var4];
                    var4 = var7.bind(var6)(var4);
                    var3 = var3.location;
                    var3 = var4.bind(var6)(var5, var3);
                    var3 = true;
                    return var3;
 360:
                    return var2;
 363:
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