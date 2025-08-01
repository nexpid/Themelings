// app/modules/activities/handleJoinEmbeddedActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _handleJoinEmbeddedActivityInternal() {
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
                    if(var3) { _fun0001_ip = 932; continue _fun0001 }
 13:
                    var22 = var2.applicationId;
                    var23 = var2.activityChannelId;
                    var19 = var2.locationObject;
                    var20 = var2.analyticsLocations;
                    var18 = var2.componentId;
                    var17 = var2.sectionName;
                    var16 = var2.source;
                    var15 = var2.inviterUserId;
                    var14 = var2.customId;
                    var13 = var2.referrerId;
                    var6 = undefined;
                    SaveGenerator(address=77);
 75:
                    return var6;
 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 929; continue _fun0001 }
 86:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var21 = var3.bind(var6)();
                    var5 = _closure1_slot5;
                    var3 = var5.getChannel;
                    var24 = var3.bind(var5)(var23);
                    var10 = null;
                    var3 = var10 == var24;
                    var5 = undefined;
                    if(var3) { _fun0001_ip = 148; continue _fun0001 }
 138:
                    var3 = var24.getGuildId;
                    var5 = var3.bind(var24)();
 148:
                    var7 = _closure1_slot7;
                    var3 = var7.getCurrentUser;
                    var25 = var3.bind(var7)();
                    if(!(var10 != var25)) { _fun0001_ip = 924; continue _fun0001 }
 168:
                    if(!(var10 != var24)) { _fun0001_ip = 900; continue _fun0001 }
 175:
                    if(!(var10 != var5)) { _fun0001_ip = 187; continue _fun0001 }
 179:
                    var3 = '';
                    if(!(var3 === var5)) { _fun0001_ip = 203; continue _fun0001 }
 187:
                    var3 = var24.isPrivate;
                    var3 = var3.bind(var24)();
                    if(!var3) { _fun0001_ip = 900; continue _fun0001 }
 203:
                    if(!(var10 != var23)) { _fun0001_ip = 900; continue _fun0001 }
 210:
                    var7 = _closure1_slot8;
                    var3 = var7.getCurrentEmbeddedActivity;
                    var3 = var3.bind(var7)();
                    var8 = var10 == var3;
                    var7 = undefined;
                    if(var8) { _fun0001_ip = 238; continue _fun0001 }
 233:
                    var7 = var3.applicationId;
 238:
                    var7 = var10 != var7;
                    var12 = undefined;
                    if(!var7) { _fun0001_ip = 276; continue _fun0001 }
 247:
                    var9 = _closure1_slot4;
                    var8 = var9.getApplication;
                    var11 = var10 == var3;
                    var7 = undefined;
                    if(var11) { _fun0001_ip = 271; continue _fun0001 }
 266:
                    var7 = var3.applicationId;
 271:
                    var12 = var8.bind(var9)(var7);
 276:
                    var8 = _closure1_slot6;
                    var7 = var8.getVoiceChannelId;
                    var7 = var7.bind(var8)();
                    if(!(var7 === var23)) { _fun0001_ip = 364; continue _fun0001 }
 294:
                    if(!(var10 != var3)) { _fun0001_ip = 364; continue _fun0001 }
 298:
                    var7 = var3.applicationId;
                    if(!(var7 === var22)) { _fun0001_ip = 364; continue _fun0001 }
 307:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 9;
                    var7 = var9[var7];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.getEmbeddedActivityLocationChannelId;
                    var7 = var3.location;
                    var8 = var8.bind(var9)(var7);
                    var9 = _closure1_slot6;
                    var7 = var9.getVoiceChannelId;
                    var7 = var7.bind(var9)();
                    if(!(var8 !== var7)) { _fun0001_ip = 845; continue _fun0001 }
 364:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 11;
                    var7 = var9[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.bind(var6)(var22, var23);
                    SaveGenerator(address=394);
 392:
                    return var7;
 394:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 842; continue _fun0001 }
 403:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 12;
                    var8 = var11[var8];
                    var11 = var9.bind(var6)(var8);
                    var9 = var11.confirmActivityLaunchChecks;
                    var8 = {};
                    var8['applicationId'] = var22;
                    var8['application'] = var7;
                    var8['channel'] = var24;
                    var8['currentEmbeddedApplication'] = var12;
                    var8['embeddedActivitiesManager'] = var21;
                    var8['user'] = var25;
                    var8 = var9.bind(var11)(var8);
                    SaveGenerator(address=466);
 464:
                    return var8;
 466:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 839; continue _fun0001 }
 475:
                    if(var8) { _fun0001_ip = 483; continue _fun0001 }
 478:
                    var9 = false;
                    return var9;
 483:
                    if(!(var10 == var24)) { _fun0001_ip = 499; continue _fun0001 }
 487:
                    if(!(var10 == var24)) { _fun0001_ip = 659; continue _fun0001 }
 494:
                    var9 = false;
                    return var9;
 499:
                    var11 = _closure1_slot1;
                    var25 = _closure1_slot2;
                    var9 = 13;
                    var9 = var25[var9];
                    var11 = var11.bind(var6)(var9);
                    var9 = var24.id;
                    var11 = var11.bind(var6)(var9);
                    var26 = _closure1_slot9;
                    var25 = var26.includes;
                    var9 = var24.type;
                    var9 = var25.bind(var26)(var9);
                    if(var11) { _fun0001_ip = 593; continue _fun0001 }
 551:
                    var25 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var11 = 15;
                    var11 = var26[var11];
                    var25 = var25.bind(var6)(var11);
                    var11 = var25.isActivitiesInTextEnabled;
                    var11 = var11.bind(var25)(var24);
                    if(!var11) { _fun0001_ip = 588; continue _fun0001 }
 585:
                    if(var9) { _fun0001_ip = 659; continue _fun0001 }
 588:
                    var9 = false;
                    return var9;
 593:
                    var11 = _closure1_slot1;
                    var25 = _closure1_slot2;
                    var9 = 14;
                    var9 = var25[var9];
                    var11 = var11.bind(var6)(var9);
                    var9 = {};
                    var24 = var24.id;
                    var9['channelId'] = var24;
                    var12 = var10 != var12;
                    var9['bypassChangeModal'] = var12;
                    var9 = var11.bind(var6)(var9);
                    SaveGenerator(address=642);
 640:
                    return var9;
 642:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 836; continue _fun0001 }
 651:
                    if(var9) { _fun0001_ip = 659; continue _fun0001 }
 654:
                    var11 = false;
                    return var11;
 659:
                    if(!(var10 != var23)) { _fun0001_ip = 688; continue _fun0001 }
 663:
                    var12 = _closure1_slot1;
                    var24 = _closure1_slot2;
                    var11 = 16;
                    var11 = var24[var11];
                    var11 = var12.bind(var6)(var11);
                    var11 = var11.bind(var6)(var23);
 688:
                    if(!(var10 != var3)) { _fun0001_ip = 728; continue _fun0001 }
 692:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 17;
                    var10 = var12[var10];
                    var12 = var11.bind(var6)(var10);
                    var11 = var12.maybeDisconnectFromCurrentActivity;
                    var10 = var3.location;
                    var10 = var11.bind(var12)(var10);
 728:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 17;
                    var10 = var12[var10];
                    var12 = var11.bind(var6)(var10);
                    var11 = var12.runPrimaryAppCommandOrJoinEmbeddedActivity;
                    var10 = {};
                    var10['channelId'] = var23;
                    var10['applicationId'] = var22;
                    var22 = false;
                    var10['isStart'] = var22;
                    var10['embeddedActivitiesManager'] = var21;
                    var10['analyticsLocations'] = var20;
                    var10['locationObject'] = var19;
                    var10['componentId'] = var18;
                    var10['sectionName'] = var17;
                    var10['source'] = var16;
                    var10['inviterUserId'] = var15;
                    var10['customId'] = var14;
                    var10['referrerId'] = var13;
                    var10 = var11.bind(var12)(var10);
                    SaveGenerator(address=824);
 822:
                    return var10;
 824:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 833; continue _fun0001 }
 830:
                    return var10;
 833:
                    return var10;
 836:
                    return var9;
 839:
                    return var8;
 842:
                    return var7;
 845:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 10;
                    var4 = var8[var4];
                    var4 = var7.bind(var6)(var4);
                    var3 = var3.location;
                    var3 = var4.bind(var6)(var5, var3);
                    var3 = global;
                    var5 = var3.Promise;
                    var4 = var5.resolve;
                    var3 = true;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 900:
                    var3 = global;
                    var5 = var3.Promise;
                    var4 = var5.resolve;
                    var3 = false;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 924:
                    var3 = false;
                    return var3;
 929:
                    return var2;
 932:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/handleJoinEmbeddedActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleJoinEmbeddedActivity(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 7;
        var3 = var7[var2];
        var5 = undefined;
        var4 = var6.bind(var5)(var3);
        var3 = var4.wrapPreemptiveActivityPopout;
        var2 = var7[var2];
        var5 = var6.bind(var5)(var2);
        var2 = var5.shouldOpenActivityInPopoutWindow;
        var2 = var2.bind(var5)();
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = function handleJoinEmbeddedActivityInternal() {
                var1 = undefined;
                var4 = _closure1_slot10;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();