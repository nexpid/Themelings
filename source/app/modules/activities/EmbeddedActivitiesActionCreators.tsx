// app/modules/activities/EmbeddedActivitiesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function _runPrimaryAppCommandOrJoinEmbeddedActivity() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 1639; continue _fun0001 }
 15:
                    var14 = var2.channelId;
                    var13 = var2.applicationId;
                    var9 = var2.isStart;
                    var29 = var2.analyticsLocations;
                    var28 = var2.locationObject;
                    var17 = var2.embeddedActivitiesManager;
                    var32 = var2.componentId;
                    var22 = var2.commandOrigin;
                    var21 = var2.sectionName;
                    var20 = var2.source;
                    var19 = var2.onExecutedCallback;
                    var27 = var2.referrerId;
                    var33 = var2.customId;
                    var26 = var2.inviterUserId;
                    var18 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var10 = undefined;
                    var5 = undefined;
                    var12 = undefined;
                    var15 = undefined;
                    var30 = undefined;
                    var31 = undefined;
                    var4 = undefined;
                    var24 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=124);
 122:
                    return var10;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 1636; continue _fun0001 }
 133:
                    var23 = _closure1_slot10;
                    var16 = var23.getChannel;
                    var11 = var14;
                    var16 = var16.bind(var23)(var11);
                    var5 = var16;
                    var11 = null;
                    var16 = var11 == var16;
                    var23 = undefined;
                    if(var16) { _fun0001_ip = 180; continue _fun0001 }
 167:
                    var25 = var5;
                    var16 = var25.getGuildId;
                    var23 = var16.bind(var25)();
 180:
                    var25 = var11 != var23;
                    var16 = undefined;
                    if(!var25) { _fun0001_ip = 192; continue _fun0001 }
 189:
                    var16 = var23;
 192:
                    var12 = var16;
                    if(!(var11 == var16)) { _fun0001_ip = 237; continue _fun0001 }
 199:
                    var16 = var5;
                    var23 = var11 == var16;
                    var16 = undefined;
                    if(var23) { _fun0001_ip = 224; continue _fun0001 }
 211:
                    var25 = var5;
                    var23 = var25.isPrivate;
                    var16 = var23.bind(var25)();
 224:
                    if(!(var11 != var16)) { _fun0001_ip = 1631; continue _fun0001 }
 231:
                    if(!var16) { _fun0001_ip = 1631; continue _fun0001 }
 237:
                    var23 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var16 = 19;
                    var16 = var25[var16];
                    var23 = var23.bind(var10)(var16);
                    var16 = var23.createNonce;
                    var15 = var16.bind(var23)();
 267: // try_start_0
                    var23 = _closure1_slot7;
                    var16 = var23.getConnectedFrame;
                    var16 = var16.bind(var23)();
                    var30 = var16;
                    if(!(var11 != var16)) { _fun0001_ip = 330; continue _fun0001 }
 288:
                    var23 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var16 = 20;
                    var16 = var25[var16];
                    var25 = var23.bind(var10)(var16);
                    var23 = var25.stopFrame;
                    var16 = {};
                    var30 = var30.applicationId;
                    var16['applicationId'] = var30;
                    var16 = var23.bind(var25)(var16);
 330:
                    var25 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var16 = 21;
                    var23 = var23[var16];
                    var30 = var25.bind(var10)(var23);
                    var25 = var30.dispatch;
                    var23 = {};
                    var34 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
                    var23['type'] = var34;
                    var34 = var15;
                    var23['nonce'] = var34;
                    var34 = var13;
                    var23['applicationId'] = var34;
                    var34 = var14;
                    var35 = var11 != var34;
                    var34 = null;
                    if(!var35) { _fun0001_ip = 395; continue _fun0001 }
 392:
                    var34 = var14;
 395:
                    var23['channelId'] = var34;
                    var23['componentId'] = var32;
                    var32 = var29;
                    var23['analyticsLocations'] = var32;
                    var32 = var20;
                    var23['source'] = var32;
                    var32 = var22;
                    var23['commandOrigin'] = var32;
                    var32 = var26;
                    var23['inviterUserId'] = var32;
                    var32 = {};
                    var32['customId'] = var33;
                    var33 = var27;
                    var32['referrerId'] = var33;
                    var23['launchParams'] = var32;
                    var23 = var25.bind(var30)(var23);
                    var25 = _closure1_slot13;
                    var23 = var25.getCurrentUser;
                    var23 = var23.bind(var25)();
                    var31 = var23;
                    if(!(var11 != var23)) { _fun0001_ip = 648; continue _fun0001 }
 483:
                    var25 = _closure1_slot1;
                    var30 = _closure1_slot2;
                    var23 = 22;
                    var23 = var30[var23];
                    var25 = var25.bind(var10)(var23);
                    var23 = {};
                    var30 = var9;
                    var32 = _closure1_slot19;
                    if(var30) { _fun0001_ip = 523; continue _fun0001 }
 515:
                    var30 = var32.JOIN;
                    _fun0001_ip = 529; continue _fun0001;
 523:
                    var30 = var32.LAUNCH;
 529:
                    var23['type'] = var30;
                    var30 = var31;
                    var32 = var11 == var30;
                    var30 = undefined;
                    if(var32) { _fun0001_ip = 550; continue _fun0001 }
 545:
                    var30 = var31.id;
 550:
                    var23['userId'] = var30;
                    var30 = var12;
                    var23['guildId'] = var30;
                    var30 = var14;
                    var23['channelId'] = var30;
                    var30 = var5;
                    var31 = var11 == var30;
                    var30 = undefined;
                    if(var31) { _fun0001_ip = 588; continue _fun0001 }
 580:
                    var31 = var5;
                    var30 = var31.type;
 588:
                    var23['channelType'] = var30;
                    var30 = var13;
                    var23['applicationId'] = var30;
                    var23['locationObject'] = var28;
                    var28 = var29;
                    if(!(var11 == var28)) { _fun0001_ip = 618; continue _fun0001 }
 612:
                    var28 = new Array(0);
                    _fun0001_ip = 621; continue _fun0001;
 618:
                    var28 = var29;
 621:
                    var23['analyticsLocations'] = var28;
                    var28 = var20;
                    var23['source'] = var28;
                    var23['referrerId'] = var27;
                    var23['inviterUserId'] = var26;
                    var23 = var25.bind(var10)(var23);
 648:
                    var23 = var9;
                    if(var23) { _fun0001_ip = 825; continue _fun0001 }
 657:
                    var25 = {};
                    var23 = var13;
                    var25['applicationId'] = var23;
                    var23 = var14;
                    var25['channelId'] = var23;
                    var23 = var17;
                    var25['embeddedActivitiesManager'] = var23;
                    var23 = var9;
                    var25['isStart'] = var23;
                    var23 = var12;
                    var25['guildId'] = var23;
                    var23 = function joinEmbeddedActivity() {
                        var1 = undefined;
                        var4 = _closure1_slot32;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var23 = var23.bind(var10)(var25);
                    SaveGenerator(address=710);
 708:
                    return var23;
 710:
                    ResumeGenerator(result_out_reg=22, return_bool_out_reg=24);
                    if(var25) { _fun0001_ip = 822; continue _fun0001 }
 716:
                    var24 = var23;
                    var25 = var19;
                    if(!(var11 != var25)) { _fun0001_ip = 733; continue _fun0001 }
 726:
                    var25 = var19;
                    var25 = var25.bind(var10)();
 733:
                    var25 = var24;
                    var26 = var25.result;
                    var25 = 'failure';
                    if(!(var25 === var26)) { _fun0001_ip = 1107; continue _fun0001 }
 753:
                    var26 = _closure1_slot1;
                    var28 = _closure1_slot2;
                    var25 = 23;
                    var27 = var28[var25];
                    var27 = var26.bind(var10)(var27);
                    var25 = var28[var25];
                    var25 = var26.bind(var10)(var25);
                    var25 = var25.Reasons;
                    var37 = var25.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                    var36 = var24.reason;
                    var25 = var27.prototype;
                    var25 = Object.create(var25, {constructor: {value: var27}});
                    var38 = var25;
                    var24 = new var38[var27](var37, var36, var35);
                    var24 = var24 instanceof Object ? var24 : var25;
                    throw var24;
 822: // try_end0
                    return var23;
 825: // try_start_1
                    var23 = var14;
                    if(!(var11 != var23)) { _fun0001_ip = 1249; continue _fun0001 }
 835:
                    var25 = var13;
                    var26 = var5;
                    var5 = var11 == var26;
                    var23 = undefined;
                    if(var5) { _fun0001_ip = 855; continue _fun0001 }
 850:
                    var23 = var26.type;
 855:
                    var5 = _closure1_slot21;
                    var5 = var5.GUILD_VOICE;
                    var5 = var23 === var5;
                    var24 = _closure1_slot5;
                    var23 = var24.getApplication;
                    var23 = var23.bind(var24)(var25);
                    var24 = var11 != var23;
                    if(!var24) { _fun0001_ip = 938; continue _fun0001 }
 891:
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var25 = 27;
                    var25 = var28[var25];
                    var28 = var27.bind(var10)(var25);
                    var27 = var28.hasFlag;
                    var25 = var23.flags;
                    var23 = _closure1_slot20;
                    var23 = var23.EMBEDDED;
                    var24 = var27.bind(var28)(var25, var23);
 938:
                    var25 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var23 = 28;
                    var23 = var27[var23];
                    var25 = var25.bind(var10)(var23);
                    var23 = var25.isActivityInTextSupportedForChannel;
                    var23 = var23.bind(var25)(var26);
                    if(!var5) { _fun0001_ip = 975; continue _fun0001 }
 972:
                    var5 = var24;
 975:
                    if(var5) { _fun0001_ip = 981; continue _fun0001 }
 978:
                    var5 = var23;
 981:
                    if(!var5) { _fun0001_ip = 1249; continue _fun0001 }
 987:
                    var5 = {};
                    var23 = var13;
                    var5['applicationId'] = var23;
                    var23 = var15;
                    var5['nonce'] = var23;
                    var23 = var14;
                    var5['channelId'] = var23;
                    var23 = var12;
                    var5['guildId'] = var23;
                    var5['commandOrigin'] = var22;
                    var5['sectionName'] = var21;
                    var5['source'] = var20;
                    var5['onExecutedCallback'] = var19;
                    var5['onConfirmActivityLaunchChecksAlertOpen'] = var18;
                    var5['embeddedActivitiesManager'] = var17;
                    var3 = function maybeSendPrimaryAppCommand() {
                        var1 = undefined;
                        var4 = _closure1_slot31;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var10)(var5);
                    SaveGenerator(address=1061);
 1059:
                    return var3;
 1061:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 1246; continue _fun0001 }
 1070:
                    var4 = var3;
                    var17 = var3.result;
                    var5 = 'failure';
                    if(!(var5 === var17)) { _fun0001_ip = 1107; continue _fun0001 }
 1087:
                    var5 = var4.reason;
                    var4 = _closure1_slot27;
                    var4 = var4.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    if(!(var5 === var4)) { _fun0001_ip = 1183; continue _fun0001 }
 1107:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var16];
                    var16 = var5.bind(var10)(var4);
                    var5 = var16.dispatch;
                    var4 = {};
                    var17 = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
                    var4['type'] = var17;
                    var17 = var15;
                    var4['nonce'] = var17;
                    var17 = var13;
                    var4['applicationId'] = var17;
                    var17 = var14;
                    var18 = var11 != var17;
                    var17 = null;
                    if(!var18) { _fun0001_ip = 1169; continue _fun0001 }
 1166:
                    var17 = var14;
 1169:
                    var4['channelId'] = var17;
                    var4 = var5.bind(var16)(var4);
 1178: // try_end1
                    var4 = true;
                    return var4;
 1183: // try_start_2
                    var5 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var4 = 23;
                    var16 = var17[var4];
                    var16 = var5.bind(var10)(var16);
                    var4 = var17[var4];
                    var4 = var5.bind(var10)(var4);
                    var4 = var4.Reasons;
                    var37 = var4.PRIMARY_APP_COMMAND_NOT_FOUND;
                    var5 = var16.prototype;
                    var5 = Object.create(var5, {constructor: {value: var16}});
                    var38 = var5;
                    var4 = new var38[var16](var37, var36);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
 1246: // try_end2
                    return var3;
 1249: // try_start_3
                    var4 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var3 = 23;
                    var5 = var16[var3];
                    var5 = var4.bind(var10)(var5);
                    var3 = var16[var3];
                    var3 = var4.bind(var10)(var3);
                    var3 = var3.Reasons;
                    var37 = var3.INVALID_CHANNEL;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var38 = var4;
                    var3 = new var38[var5](var37, var36);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 1312: // try_end3 // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=7);
                    var3 = var12;
                    if(!(var11 == var3)) { _fun0001_ip = 1355; continue _fun0001 }
 1321:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 24;
                    var3 = var5[var3];
                    var3 = var4.bind(var10)(var3);
                    var3 = var3.EmbeddedActivityLocationKind;
                    var3 = var3.PRIVATE_CHANNEL;
                    _fun0001_ip = 1387; continue _fun0001;
 1355:
                    var5 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var4 = 24;
                    var4 = var16[var4];
                    var4 = var5.bind(var10)(var4);
                    var4 = var4.EmbeddedActivityLocationKind;
                    var3 = var4.GUILD_CHANNEL;
 1387:
                    var6 = var3;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 21;
                    var3 = var5[var3];
                    var5 = var4.bind(var10)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var16 = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
                    var3['type'] = var16;
                    var3['nonce'] = var15;
                    var3['applicationId'] = var13;
                    var13 = var14;
                    var15 = var11 != var13;
                    var13 = null;
                    if(!var15) { _fun0001_ip = 1449; continue _fun0001 }
 1446:
                    var13 = var14;
 1449:
                    var3['channelId'] = var13;
                    var13 = var12;
                    var13 = var11 != var13;
                    var11 = null;
                    if(!var13) { _fun0001_ip = 1468; continue _fun0001 }
 1465:
                    var11 = var12;
 1468:
                    var3['guildId'] = var11;
                    var3['isStart'] = var9;
                    var11 = var8;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 23;
                    var9 = var13[var9];
                    var9 = var12.bind(var10)(var9);
                    var9 = var11 instanceof var9;
                    if(var9) { _fun0001_ip = 1609; continue _fun0001 }
 1507:
                    var12 = var8;
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var11 = 25;
                    var9 = var9[var11];
                    var9 = var13.bind(var10)(var9);
                    var9 = var12 instanceof var9;
                    if(var9) { _fun0001_ip = 1609; continue _fun0001 }
 1537:
                    var12 = var8;
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 26;
                    var9 = var14[var9];
                    var9 = var13.bind(var10)(var9);
                    var9 = var12 instanceof var9;
                    if(var9) { _fun0001_ip = 1609; continue _fun0001 }
 1567:
                    var9 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var10 = var9.bind(var10)(var7);
                    var37 = var8;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var38 = var9;
                    var7 = new var38[var10](var37, var36);
                    var7 = var7 instanceof Object ? var7 : var9;
                    _fun0001_ip = 1612; continue _fun0001;
 1609:
                    var7 = var8;
 1612:
                    var3['error'] = var7;
                    var3['locationKind'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = false;
                    return var3;
 1631:
                    var3 = false;
                    return var3;
 1636:
                    return var2;
 1639:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function _maybeSendPrimaryAppCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 962; continue _fun0002 }
 15:
                    var6 = var2.applicationId;
                    var17 = var6;
                    var _closure4_slot0 = var6;
                    var6 = var2.nonce;
                    var _closure4_slot1 = var6;
                    var6 = var2.channelId;
                    var10 = var6;
                    var _closure4_slot2 = var6;
                    var6 = var2.guildId;
                    var18 = var6;
                    var _closure4_slot3 = var6;
                    var6 = var2.commandOrigin;
                    var _closure4_slot4 = var6;
                    var6 = var2.sectionName;
                    var _closure4_slot5 = var6;
                    var6 = var2.source;
                    var _closure4_slot6 = var6;
                    var6 = var2.onExecutedCallback;
                    var _closure4_slot7 = var6;
                    var11 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var13 = var2.embeddedActivitiesManager;
                    var8 = undefined;
                    var25 = undefined;
                    var _closure4_slot8 = var8;
                    var5 = undefined;
                    var15 = undefined;
                    var _closure4_slot9 = var8;
                    var _closure4_slot10 = var8;
                    var16 = undefined;
                    var19 = undefined;
                    var14 = undefined;
                    var12 = undefined;
                    SaveGenerator(address=144);
 142:
                    return var8;
 144:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 959; continue _fun0002 }
 153:
                    var9 = null;
                    var25 = null;
                    _closure4_slot8 = var9;
 161: // try_start_0
                    var20 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var4 = 29;
                    var4 = var21[var4];
                    var21 = var20.bind(var8)(var4);
                    var20 = var10;
                    var4 = var17;
                    var4 = var21.bind(var8)(var20, var4);
                    SaveGenerator(address=200);
 198:
                    return var4;
 200:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=19);
                    if(var20) { _fun0002_ip = 882; continue _fun0002 }
 209:
                    var25 = var4;
                    _closure4_slot8 = var4;
 216: // try_end0
                    var20 = var25;
                    var21 = var20.handler;
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var20 = 30;
                    var20 = var23[var20];
                    var20 = var22.bind(var8)(var20);
                    var20 = var20.ApplicationCommandHandler;
                    var20 = var20.APP_HANDLER;
                    var20 = var21 !== var20;
                    var5 = var20;
                    if(var20) { _fun0002_ip = 500; continue _fun0002 }
 270:
                    var22 = _closure1_slot24;
                    var21 = var22.includes;
                    var20 = var17;
                    var20 = var21.bind(var22)(var20);
                    if(var20) { _fun0002_ip = 500; continue _fun0002 }
 293:
                    var20 = var10;
                    if(!(var9 != var20)) { _fun0002_ip = 339; continue _fun0002 }
 300:
                    var21 = _closure1_slot4;
                    var20 = {};
                    var22 = 'channel';
                    var20['type'] = var22;
                    var22 = var10;
                    var20['channelId'] = var22;
                    var20 = var21.bind(var8)(var20);
                    SaveGenerator(address=330);
 328:
                    return var20;
 330:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=20);
                    if(var21) { _fun0002_ip = 497; continue _fun0002 }
 339:
                    var22 = _closure1_slot4;
                    var21 = {};
                    var23 = 'user';
                    var21['type'] = var23;
                    var21 = var22.bind(var8)(var21);
                    SaveGenerator(address=362);
 360:
                    return var21;
 362:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=21);
                    if(var22) { _fun0002_ip = 494; continue _fun0002 }
 371:
                    var24 = _closure1_slot10;
                    var23 = var24.getChannel;
                    var22 = var10;
                    var26 = var23.bind(var24)(var22);
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var22 = 31;
                    var22 = var24[var22];
                    var24 = var23.bind(var8)(var22);
                    var23 = var24.installApplicationOnDemandIfNeeded;
                    var22 = {};
                    var27 = var17;
                    var22['applicationId'] = var27;
                    var22['channel'] = var26;
                    var25 = var25.integration_types;
                    var22['commandIntegrationTypes'] = var25;
                    var22 = var23.bind(var24)(var22);
                    SaveGenerator(address=447);
 445:
                    return var22;
 447:
                    ResumeGenerator(result_out_reg=21, return_bool_out_reg=22);
                    if(var23) { _fun0002_ip = 491; continue _fun0002 }
 453:
                    var23 = var22.isAuthorized;
                    if(var23) { _fun0002_ip = 500; continue _fun0002 }
 462:
                    var23 = {};
                    var24 = 'failure';
                    var23['result'] = var24;
                    var24 = _closure1_slot27;
                    var24 = var24.UNAUTHORIZED;
                    var23['reason'] = var24;
                    return var23;
 491:
                    return var22;
 494:
                    return var21;
 497:
                    return var20;
 500:
                    var21 = _closure1_slot10;
                    var20 = var21.getChannel;
                    var10 = var20.bind(var21)(var10);
                    var15 = var10;
                    _closure4_slot9 = var10;
                    var10 = var18;
                    var20 = var9 != var10;
                    var10 = null;
                    if(!var20) { _fun0002_ip = 547; continue _fun0002 }
 533:
                    var21 = _closure1_slot11;
                    var20 = var21.getGuild;
                    var10 = var20.bind(var21)(var18);
 547:
                    _closure4_slot10 = var10;
                    var10 = var15;
                    if(!(var9 != var10)) { _fun0002_ip = 853; continue _fun0002 }
 561:
                    if(!var5) { _fun0002_ip = 790; continue _fun0002 }
 567:
                    var18 = _closure1_slot5;
                    var10 = var18.getApplication;
                    var5 = var17;
                    var16 = var10.bind(var18)(var5);
                    var10 = _closure1_slot15;
                    var5 = var10.getCurrentEmbeddedActivity;
                    var5 = var5.bind(var10)();
                    var19 = var5;
                    var14 = undefined;
                    var10 = var9 == var5;
                    var5 = undefined;
                    if(var10) { _fun0002_ip = 621; continue _fun0002 }
 613:
                    var10 = var19;
                    var5 = var10.applicationId;
 621:
                    if(!(var9 != var5)) { _fun0002_ip = 657; continue _fun0002 }
 625:
                    var18 = _closure1_slot5;
                    var10 = var18.getApplication;
                    var5 = var19;
                    var20 = var9 == var5;
                    var5 = undefined;
                    if(var20) { _fun0002_ip = 652; continue _fun0002 }
 647:
                    var5 = var19.applicationId;
 652:
                    var14 = var10.bind(var18)(var5);
 657:
                    var10 = _closure1_slot13;
                    var5 = var10.getCurrentUser;
                    var5 = var5.bind(var10)();
                    var12 = var5;
                    if(!(var9 != var5)) { _fun0002_ip = 790; continue _fun0002 }
 677:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 32;
                    var5 = var10[var5];
                    var10 = var9.bind(var8)(var5);
                    var9 = var10.confirmActivityLaunchChecks;
                    var5 = {};
                    var5['applicationId'] = var17;
                    var5['application'] = var16;
                    var5['channel'] = var15;
                    var5['currentEmbeddedApplication'] = var14;
                    var5['embeddedActivitiesManager'] = var13;
                    var5['user'] = var12;
                    var5['onConfirmActivityLaunchChecksAlertOpen'] = var11;
                    var11 = false;
                    var5['shouldClosePopoutOnLeaveCurrentEmbeddedApplication'] = var11;
                    var5 = var9.bind(var10)(var5);
                    SaveGenerator(address=752);
 750:
                    return var5;
 752:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 850; continue _fun0002 }
 758:
                    if(var5) { _fun0002_ip = 790; continue _fun0002 }
 761:
                    var9 = {};
                    var10 = 'failure';
                    var9['result'] = var10;
                    var10 = _closure1_slot27;
                    var10 = var10.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    var9['reason'] = var10;
                    return var9;
 790:
                    var9 = global;
                    var10 = var9.Promise;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var29 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 33;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var6 = _closure4_slot8;
                        var2['command'] = var6;
                        var6 = {};
                        var2['optionValues'] = var6;
                        var6 = {};
                        var7 = _closure4_slot9;
                        var6['channel'] = var7;
                        var7 = _closure4_slot10;
                        var6['guild'] = var7;
                        var2['context'] = var6;
                        var6 = _closure4_slot4;
                        var2['commandOrigin'] = var6;
                        var6 = _closure4_slot5;
                        var2['sectionName'] = var6;
                        var5 = _closure4_slot6;
                        var2['source'] = var5;
                        var4 = function interactionLifecycleOptionsFactory() {
                            var1 = {};
                            var3 = _closure4_slot1;
                            var1['nonce'] = var3;
                            var3 = function onSuccess() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                    var3 = _closure4_slot7;
                                    var2 = null;
                                    if(!(var2 != var3)) { _fun0003_ip = 23; continue _fun0003 }
 13:
                                    var2 = _closure4_slot7;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
 23:
                                    var2 = _closure5_slot0;
                                    var1 = undefined;
                                    var2 = var2.bind(var1)();
                                    return var1;
                                }
                            };
                            var1['onSuccess'] = var3;
                            var2 = function onFailure(arg1, arg2, arg3, arg4) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    var6 = arg1;
                                    var7 = arg2;
                                    var4 = arg3;
                                    var9 = arg4;
                                    var1 = _closure4_slot7;
                                    var3 = null;
                                    if(!(var3 != var1)) { _fun0004_ip = 35; continue _fun0004 }
 25:
                                    var2 = _closure4_slot7;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
 35:
                                    var8 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 34;
                                    var5 = var5[var1];
                                    var1 = undefined;
                                    var11 = var8.bind(var1)(var5);
                                    var10 = var11.track;
                                    var5 = _closure1_slot18;
                                    var8 = var5.ACTIVITY_INTERACTION_CALLBACK_ERROR;
                                    var5 = {};
                                    var13 = _closure4_slot2;
                                    var5['channel_id'] = var13;
                                    var13 = _closure4_slot3;
                                    var5['guild_id'] = var13;
                                    var13 = _closure4_slot0;
                                    var5['application_id'] = var13;
                                    var13 = _closure4_slot9;
                                    var14 = var3 == var13;
                                    var13 = undefined;
                                    if(var14) { _fun0004_ip = 124; continue _fun0004 }
 115:
                                    var14 = _closure4_slot9;
                                    var13 = var14.type;
 124:
                                    var5['channel_type'] = var13;
                                    var5['error_code'] = var6;
                                    var5['error_message'] = var7;
                                    var5['error_status'] = var4;
                                    var5['error_reason_code'] = var9;
                                    var12 = _closure4_slot6;
                                    var5['source'] = var12;
                                    var5 = var10.bind(var11)(var8, var5);
                                    if(!(var3 != var6)) { _fun0004_ip = 180; continue _fun0004 }
 169:
                                    if(!(var3 != var7)) { _fun0004_ip = 180; continue _fun0004 }
 173:
                                    if(!(var3 == var4)) { _fun0004_ip = 349; continue _fun0004 }
 180:
                                    if(!(var3 != var9)) { _fun0004_ip = 217; continue _fun0004 }
 184:
                                    var5 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var10 = 26;
                                    var3 = var3[var10];
                                    var3 = var5.bind(var1)(var3);
                                    var3 = var3.ReasonCodes;
                                    var3 = var9 in var3;
                                    if(var3) { _fun0004_ip = 295; continue _fun0004 }
 217:
                                    var5 = _closure5_slot1;
                                    var8 = _closure1_slot1;
                                    var12 = _closure1_slot2;
                                    var3 = 26;
                                    var11 = var12[var3];
                                    var11 = var8.bind(var1)(var11);
                                    var3 = var12[var3];
                                    var3 = var8.bind(var1)(var3);
                                    var3 = var3.ReasonCodes;
                                    var16 = var3.UNKNOWN;
                                    var8 = var11.prototype;
                                    var8 = Object.create(var8, {constructor: {value: var11}});
                                    var17 = var8;
                                    var3 = new var17[var11](var16, var15);
                                    var3 = var3 instanceof Object ? var3 : var8;
                                    var3 = var5.bind(var1)(var3);
                                    _fun0004_ip = 424; continue _fun0004;
 295:
                                    var5 = _closure5_slot1;
                                    var8 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var10];
                                    var3 = var8.bind(var1)(var3);
                                    var8 = var3.prototype;
                                    var8 = Object.create(var8, {constructor: {value: var3}});
                                    var17 = var8;
                                    var16 = var9;
                                    var3 = new var17[var3](var16, var15);
                                    var3 = var3 instanceof Object ? var3 : var8;
                                    var3 = var5.bind(var1)(var3);
                                    _fun0004_ip = 424; continue _fun0004;
 349:
                                    var3 = _closure5_slot1;
                                    var5 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var2 = 25;
                                    var2 = var8[var2];
                                    var5 = var5.bind(var1)(var2);
                                    var2 = {};
                                    var2['status'] = var4;
                                    var4 = {};
                                    var4['message'] = var7;
                                    var4['code'] = var6;
                                    var2['body'] = var4;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {constructor: {value: var5}});
                                    var17 = var4;
                                    var16 = var2;
                                    var2 = new var17[var5](var16, var15);
                                    var2 = var2 instanceof Object ? var2 : var4;
                                    var2 = var3.bind(var1)(var2);
 424:
                                    return var1;
                                }
                            };
                            var1['onFailure'] = var2;
                            return var1;
                        };
                        var2['interactionLifecycleOptionsFactory'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var30 = var9;
                    var7 = new var30[var10](var29, var28);
                    var7 = var7 instanceof Object ? var7 : var9;
                    SaveGenerator(address=827);
 825:
                    return var7;
 827:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 847; continue _fun0002 }
 833:
                    var9 = {};
                    var10 = 'success';
                    var9['result'] = var10;
                    return var9;
 847:
                    return var7;
 850:
                    return var5;
 853:
                    var5 = {};
                    var7 = 'failure';
                    var5['result'] = var7;
                    var6 = _closure1_slot27;
                    var6 = var6.NO_CHANNEL;
                    var5['reason'] = var6;
                    return var5;
 882:
                    return var4;
 885: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = var4;
                    var6 = var4.message;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 29;
                    var5 = var9[var5];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.NO_PRIMARY_APP_COMMAND_ERROR;
                    if(!(var6 !== var5)) { _fun0002_ip = 930; continue _fun0002 }
 928:
                    throw var3;
 930:
                    var3 = {};
                    var5 = 'failure';
                    var3['result'] = var5;
                    var4 = _closure1_slot27;
                    var4 = var4.NO_PRIMARY_APP_COMMAND;
                    var3['reason'] = var4;
                    return var3;
 959:
                    return var2;
 962:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function _joinEmbeddedActivity() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 1377; continue _fun0005 }
 13:
                    var9 = var2.applicationId;
                    var21 = var2.channelId;
                    var15 = var2.embeddedActivitiesManager;
                    var5 = var2.isStart;
                    var18 = var2.guildId;
                    var7 = undefined;
                    SaveGenerator(address=46);
 44:
                    return var7;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 1374; continue _fun0005 }
 55:
                    var6 = _closure1_slot9;
                    var3 = var6.getSessionId;
                    var19 = var3.bind(var6)();
                    var6 = _closure1_slot13;
                    var3 = var6.getCurrentUser;
                    var14 = var3.bind(var6)();
                    var17 = null;
                    if(!(var17 != var9)) { _fun0005_ip = 1345; continue _fun0005 }
 94:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 35;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.bind(var7)(var9, var21);
                    SaveGenerator(address=124);
 122:
                    return var3;
 124:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 1342; continue _fun0005 }
 133:
                    if(!(var17 != var14)) { _fun0005_ip = 1313; continue _fun0005 }
 140:
                    if(!(var17 != var3)) { _fun0005_ip = 1313; continue _fun0005 }
 147:
                    if(!(var17 != var21)) { _fun0005_ip = 1231; continue _fun0005 }
 154:
                    var8 = _closure1_slot10;
                    var6 = var8.getChannel;
                    var13 = var6.bind(var8)(var21);
                    if(!(var17 != var13)) { _fun0005_ip = 1202; continue _fun0005 }
 175:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var11 = 37;
                    var8 = var6[var11];
                    var16 = var10.bind(var7)(var8);
                    var12 = var16.getEmbeddedActivityLaunchability;
                    var8 = {};
                    var8['channelId'] = var21;
                    var20 = _closure1_slot10;
                    var8['ChannelStore'] = var20;
                    var20 = _closure1_slot11;
                    var8['GuildStore'] = var20;
                    var20 = _closure1_slot12;
                    var8['PermissionStore'] = var20;
                    var20 = _closure1_slot14;
                    var8['VoiceStateStore'] = var20;
                    var8 = var12.bind(var16)(var8);
                    var6 = var6[var11];
                    var6 = var10.bind(var7)(var6);
                    var6 = var6.EmbeddedActivityLaunchability;
                    var6 = var6.CAN_LAUNCH;
                    if(!(var8 === var6)) { _fun0005_ip = 906; continue _fun0005 }
 276:
                    var10 = _closure1_slot15;
                    var6 = var10.getCurrentEmbeddedActivity;
                    var20 = var6.bind(var10)();
                    var10 = var17 == var20;
                    var6 = undefined;
                    if(var10) { _fun0005_ip = 304; continue _fun0005 }
 299:
                    var6 = var20.applicationId;
 304:
                    var6 = var17 != var6;
                    var12 = undefined;
                    if(!var6) { _fun0005_ip = 342; continue _fun0005 }
 313:
                    var16 = _closure1_slot5;
                    var10 = var16.getApplication;
                    var22 = var17 == var20;
                    var6 = undefined;
                    if(var22) { _fun0005_ip = 337; continue _fun0005 }
 332:
                    var6 = var20.applicationId;
 337:
                    var12 = var10.bind(var16)(var6);
 342:
                    if(!var5) { _fun0005_ip = 449; continue _fun0005 }
 345:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 32;
                    var5 = var10[var5];
                    var10 = var6.bind(var7)(var5);
                    var6 = var10.confirmActivityLaunchChecks;
                    var5 = {};
                    var5['applicationId'] = var9;
                    var5['application'] = var3;
                    var5['channel'] = var13;
                    var5['currentEmbeddedApplication'] = var12;
                    var5['embeddedActivitiesManager'] = var15;
                    var5['user'] = var14;
                    var5 = var6.bind(var10)(var5);
                    SaveGenerator(address=408);
 406:
                    return var5;
 408:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 903; continue _fun0005 }
 417:
                    if(var5) { _fun0005_ip = 449; continue _fun0005 }
 420:
                    var6 = {};
                    var10 = 'failure';
                    var6['result'] = var10;
                    var10 = _closure1_slot28;
                    var10 = var10.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    var6['reason'] = var10;
                    return var6;
 449:
                    if(!(var17 != var13)) { _fun0005_ip = 664; continue _fun0005 }
 456:
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var6 = 41;
                    var6 = var14[var6];
                    var10 = var10.bind(var7)(var6);
                    var6 = var13.id;
                    var10 = var10.bind(var7)(var6);
                    var15 = _closure1_slot16;
                    var14 = var15.includes;
                    var6 = var13.type;
                    var6 = var14.bind(var15)(var6);
                    if(var10) { _fun0005_ip = 574; continue _fun0005 }
 508:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 28;
                    var10 = var15[var10];
                    var14 = var14.bind(var7)(var10);
                    var10 = var14.isActivitiesInTextEnabled;
                    var10 = var10.bind(var14)(var13);
                    if(!var10) { _fun0005_ip = 545; continue _fun0005 }
 542:
                    if(var6) { _fun0005_ip = 664; continue _fun0005 }
 545:
                    var6 = {};
                    var10 = 'failure';
                    var6['result'] = var10;
                    var10 = _closure1_slot28;
                    var10 = var10.AIT_NOT_ENABLED_FOR_USER;
                    var6['reason'] = var10;
                    return var6;
 574:
                    var10 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var6 = 42;
                    var6 = var14[var6];
                    var10 = var10.bind(var7)(var6);
                    var6 = {};
                    var13 = var13.id;
                    var6['channelId'] = var13;
                    var12 = var17 != var12;
                    var6['bypassChangeModal'] = var12;
                    var6 = var10.bind(var7)(var6);
                    SaveGenerator(address=623);
 621:
                    return var6;
 623:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0005_ip = 900; continue _fun0005 }
 632:
                    if(var6) { _fun0005_ip = 664; continue _fun0005 }
 635:
                    var10 = {};
                    var12 = 'failure';
                    var10['result'] = var12;
                    var12 = _closure1_slot28;
                    var12 = var12.NOT_CONNECTED_TO_VOICE_CHANNEL;
                    var10['reason'] = var12;
                    return var10;
 664:
                    var15 = {'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    var10 = {};
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 43;
                    var12 = var14[var12];
                    var12 = var13.bind(var7)(var12);
                    var12 = var12.NetworkActionNames;
                    var12 = var12.EMBEDDED_ACTIVITIES_LAUNCH;
                    var10['event'] = var12;
                    var12 = {};
                    var12['guild_id'] = var18;
                    var12['channel_id'] = var21;
                    var12['application_id'] = var9;
                    var12['session_id'] = var19;
                    var10['properties'] = var12;
                    var15['trackedActionData'] = var10;
                    if(!(var17 == var21)) { _fun0005_ip = 780; continue _fun0005 }
 752:
                    var12 = {};
                    var10 = 'failure';
                    var12['result'] = var10;
                    var10 = _closure1_slot28;
                    var10 = var10.OTHER;
                    var12['reason'] = var10;
                    _fun0005_ip = 894; continue _fun0005;
 780:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var10 = 44;
                    var10 = var14[var10];
                    var14 = var13.bind(var7)(var10);
                    var13 = var14.post;
                    var10 = {};
                    var20 = _closure1_slot23;
                    var16 = var20.ACTIVITY_CHANNEL_LAUNCH;
                    var16 = var16.bind(var20)(var21, var9);
                    var10['url'] = var16;
                    var16 = {};
                    var16['session_id'] = var19;
                    var19 = var17 != var18;
                    var17 = undefined;
                    if(!var19) { _fun0005_ip = 847; continue _fun0005 }
 844:
                    var17 = var18;
 847:
                    var16['guild_id'] = var17;
                    var10['body'] = var16;
                    var24 = var10;
                    var23 = var15;
                    var15 = copyDataProperties(var24, var23);
                    var10 = var13.bind(var14)(var10);
                    SaveGenerator(address=874);
 872:
                    return var10;
 874:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=12);
                    if(var13) { _fun0005_ip = 897; continue _fun0005 }
 880:
                    var13 = {};
                    var14 = 'success';
                    var13['result'] = var14;
                    var12 = var13;
 894:
                    return var12;
 897:
                    return var10;
 900:
                    return var6;
 903:
                    return var5;
 906:
                    var5 = _closure1_slot28;
                    var6 = var5.LAUNCHABILITY_CHECK_FAILED_OTHER;
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var5 = var10.bind(var7)(var5);
                    var5 = var5.EmbeddedActivityLaunchability;
                    var5 = var5.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    if(!(var8 !== var5)) { _fun0005_ip = 1143; continue _fun0005 }
 952:
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var5 = var10.bind(var7)(var5);
                    var5 = var5.EmbeddedActivityLaunchability;
                    var5 = var5.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    if(!(var8 === var5)) { _fun0005_ip = 1183; continue _fun0005 }
 988:
                    var5 = _closure1_slot28;
                    var6 = var5.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    var10 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var8 = 39;
                    var8 = var16[var8];
                    var11 = var10.bind(var7)(var8);
                    var10 = var11.show;
                    var8 = {};
                    var15 = _closure1_slot0;
                    var12 = 40;
                    var13 = var16[var12];
                    var13 = var15.bind(var7)(var13);
                    var17 = var13.intl;
                    var14 = var17.string;
                    var13 = var16[var12];
                    var13 = var15.bind(var7)(var13);
                    var13 = var13.t;
                    var13 = var13.IOy+Iy;
                    var13 = var14.bind(var17)(var13);
                    var8['title'] = var13;
                    var13 = var16[var12];
                    var13 = var15.bind(var7)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var7)(var12);
                    var12 = var12.t;
                    var12 = var12.UXoQTk;
                    var12 = var13.bind(var14)(var12);
                    var8['body'] = var12;
                    var12 = false;
                    var8['hideActionSheet'] = var12;
                    var8 = var10.bind(var11)(var8);
                    _fun0005_ip = 1183; continue _fun0005;
 1143:
                    var5 = _closure1_slot28;
                    var6 = var5.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 38;
                    var8 = var11[var8];
                    var10 = var10.bind(var7)(var8);
                    var8 = var10.showActivitiesInvalidPermissionsAlert;
                    var8 = var8.bind(var10)();
 1183:
                    var5 = {};
                    var8 = 'failure';
                    var5['result'] = var8;
                    var5['reason'] = var6;
                    return var5;
 1202:
                    var5 = {};
                    var6 = 'failure';
                    var5['result'] = var6;
                    var6 = _closure1_slot28;
                    var6 = var6.INVALID_CHANNEL;
                    var5['reason'] = var6;
                    return var5;
 1231:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 36;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var8 = var5.ComponentDispatch;
                    var7 = var8.dispatch;
                    var5 = _closure1_slot22;
                    var6 = var5.SHOW_ACTIVITIES_CHANNEL_SELECTOR;
                    var5 = {};
                    var5['applicationId'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var5 = {};
                    var6 = 'failure';
                    var5['result'] = var6;
                    var6 = _closure1_slot28;
                    var6 = var6.INVALID_CHANNEL;
                    var5['reason'] = var6;
                    return var5;
 1313:
                    var5 = {};
                    var6 = 'failure';
                    var5['result'] = var6;
                    var6 = _closure1_slot28;
                    var6 = var6.UNKNOWN_USER_OR_APPLICATION;
                    var5['reason'] = var6;
                    return var5;
 1342:
                    return var3;
 1345:
                    var3 = {};
                    var5 = 'failure';
                    var3['result'] = var5;
                    var4 = _closure1_slot28;
                    var4 = var4.NO_APPLICATION_ID;
                    var3['reason'] = var4;
                    return var3;
 1374:
                    return var2;
 1377:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var5 = function stopEmbeddedActivity(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var7 = var1.location;
            var9 = var1.applicationId;
            var _closure2_slot0 = var9;
            var10 = var1.showFeedback;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0006_ip = 33; continue _fun0006 }
 31:
            var10 = true;
 33:
            var5 = _closure1_slot15;
            var4 = var5.getSelfEmbeddedActivityForLocation;
            var12 = var4.bind(var5)(var7);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 21;
            var4 = var6[var4];
            var8 = var5.bind(var1)(var4);
            var6 = var8.dispatch;
            var4 = {};
            var5 = 'EMBEDDED_ACTIVITY_CLOSE';
            var4['type'] = var5;
            var4['applicationId'] = var9;
            var4['location'] = var7;
            var5 = null;
            var13 = var5 == var12;
            var11 = undefined;
            if(var13) { _fun0006_ip = 111; continue _fun0006 }
 105:
            var11 = var12.launchId;
 111:
            var4['instanceId'] = var11;
            var4['showFeedback'] = var10;
            var4 = var6.bind(var8)(var4);
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 45;
            var4 = var8[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.getEmbeddedActivityLocationChannelId;
            var4 = var4.bind(var6)(var7);
            if(!(var5 != var4)) { _fun0006_ip = 346; continue _fun0006 }
 164:
            var7 = _closure1_slot6;
            var6 = var7.getSelectedParticipantId;
            var6 = var6.bind(var7)(var4);
            var8 = _closure1_slot13;
            var7 = var8.getCurrentUser;
            var8 = var7.bind(var8)();
            var10 = var5 == var8;
            var7 = undefined;
            if(var10) { _fun0006_ip = 206; continue _fun0006 }
 201:
            var7 = var8.id;
 206:
            var10 = _closure1_slot15;
            var8 = var10.getEmbeddedActivitiesForChannel;
            var10 = var8.bind(var10)(var4);
            var8 = var10.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var10 = var8.bind(var10)(var3);
            if(!(var5 != var10)) { _fun0006_ip = 348; continue _fun0006 }
 241:
            if(!(var5 != var7)) { _fun0006_ip = 348; continue _fun0006 }
 245:
            var3 = '';
            if(!(var3 !== var7)) { _fun0006_ip = 348; continue _fun0006 }
 253:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 46;
            var3 = var8[var3];
            var8 = var7.bind(var1)(var3);
            var7 = var8.getEmbeddedActivityParticipantId;
            var3 = {};
            var3['applicationId'] = var9;
            var11 = var5 == var10;
            var9 = undefined;
            if(var11) { _fun0006_ip = 300; continue _fun0006 }
 294:
            var9 = var10.compositeInstanceId;
 300:
            var3['instanceId'] = var9;
            var3 = var7.bind(var8)(var3);
            if(!(var6 === var3)) { _fun0006_ip = 346; continue _fun0006 }
 314:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 47;
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.selectParticipant;
            var2 = var2.bind(var3)(var4, var5);
 346:
            return var1;
 348:
            return var1;
        }
    };
    var _closure1_slot33 = var5;
    var1 = function _fetchDeveloperApplications() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 320; continue _fun0007 }
 10: // try_start_0
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var7 = 21;
                    var2 = var6[var7];
                    var5 = undefined;
                    var8 = var4.bind(var5)(var2);
                    var4 = var8.dispatch;
                    var2 = {};
                    var9 = 'DEVELOPER_ACTIVITY_SHELF_FETCH_START';
                    var2['type'] = var9;
                    var2 = var4.bind(var8)(var2);
                    var4 = _closure1_slot0;
                    var2 = 48;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var8 = _closure1_slot23;
                    var8 = var8.APPLICATIONS_WITH_ASSETS;
                    var2['url'] = var8;
                    var9 = {};
                    var8 = true;
                    var9['with_team_applications'] = var8;
                    var2['query'] = var9;
                    var2['oldFormErrors'] = var8;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=132);
 130:
                    return var2;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 263; continue _fun0007 }
 141:
                    var4 = var2.body;
                    var6 = var4.applications;
                    var8 = var6.map;
                    var4 = function(arg1) {
                        var3 = _closure1_slot8;
                        var2 = var3.createFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var11 = var8.bind(var6)(var4);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var8 = var3[var7];
                    var10 = var4.bind(var5)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var12 = 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS';
                    var8['type'] = var12;
                    var8['applications'] = var11;
                    var11 = var2.body;
                    var11 = var11.assets;
                    var8['assets'] = var11;
                    var8 = var9.bind(var10)(var8);
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'APPLICATIONS_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['applications'] = var6;
                    var3 = var4.bind(var5)(var3);
 261: // try_end0
                    _fun0007_ip = 315; continue _fun0007;
 263:
                    return var2;
 266: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
 315:
                    var2 = undefined;
                    return var2;
 320:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot34 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function _uploadImageAttachment() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 353; continue _fun0008 }
 10:
                    var10 = arg1;
                    var4 = arg2;
                    var8 = arg3;
 19: // try_start_0
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 21;
                    var2 = var2[var6];
                    var5 = undefined;
                    var9 = var7.bind(var5)(var2);
                    var7 = var9.dispatch;
                    var2 = {};
                    var11 = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START';
                    var2['type'] = var11;
                    var2 = var7.bind(var9)(var2);
                    var7 = var4;
                    var2 = null;
                    var2 = var2 != var7;
                    var9 = undefined;
                    if(!var2) { _fun0008_ip = 89; continue _fun0008 }
 80:
                    var2 = {};
                    var2['channel_id'] = var4;
                    var9 = var2;
 89:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 48;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.post;
                    var2 = {};
                    var12 = _closure1_slot23;
                    var11 = var12.APPLICATION_UPLOAD_ATTACHMENT;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var2['query'] = var9;
                    var9 = {};
                    var10 = 'file';
                    var9['name'] = var10;
                    var9['file'] = var8;
                    var8 = new Array(1);
                    var8[0] = var9;
                    var2['attachments'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=188);
 186:
                    return var2;
 188:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 263; continue _fun0008 }
 194:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var6 = var6.attachment;
                    var3['attachment'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = var2.body;
                    var3 = var3.attachment;
 260: // try_end0
                    return var3;
 263:
                    return var2;
 266: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 21;
                    var2 = var6[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var7 = var8.dispatch;
                    var2 = {};
                    var9 = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL';
                    var2['type'] = var9;
                    var2 = var7.bind(var8)(var2);
                    var2 = 25;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    return var2;
 353:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot35 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function _fetchShelf() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 982; continue _fun0009 }
 15:
                    var6 = var2.guildId;
                    var8 = var6;
                    var _closure4_slot0 = var6;
                    var6 = var2.force;
                    var7 = undefined;
                    if(!(var6 === var7)) { _fun0009_ip = 41; continue _fun0009 }
 39:
                    var6 = false;
 41:
                    var5 = undefined;
                    var4 = undefined;
                    var _closure4_slot1 = var7;
                    var _closure4_slot2 = var7;
                    var19 = undefined;
                    var18 = undefined;
                    var9 = undefined;
                    var15 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    SaveGenerator(address=69);
 67:
                    return var7;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 979; continue _fun0009 }
 78:
                    var16 = _closure1_slot15;
                    var14 = var16.getShelfActivities;
                    var13 = var8;
                    var16 = var14.bind(var16)(var13);
                    var5 = var16;
                    var14 = var16.map;
                    var13 = function(arg1) {
                        var3 = _closure1_slot5;
                        var2 = var3.getApplication;
                        var1 = arg1;
                        var1 = var1.application_id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var16 = var14.bind(var16)(var13);
                    var14 = var16.filter;
                    var17 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var13 = 49;
                    var13 = var20[var13];
                    var13 = var17.bind(var7)(var13);
                    var13 = var13.isNotNullish;
                    var4 = var14.bind(var16)(var13);
                    if(var6) { _fun0009_ip = 456; continue _fun0009 }
 159:
                    var14 = _closure1_slot15;
                    var13 = var14.shouldFetchShelf;
                    var6 = var8;
                    var6 = var13.bind(var14)(var6);
                    if(var6) { _fun0009_ip = 456; continue _fun0009 }
 183:
                    var14 = _closure1_slot15;
                    var13 = var14.getShelfFetchStatus;
                    var6 = var8;
                    var6 = var13.bind(var14)(var6);
                    var13 = null;
                    if(!(var13 != var6)) { _fun0009_ip = 432; continue _fun0009 }
 210:
                    var6 = var6.isFetching;
                    if(!var6) { _fun0009_ip = 432; continue _fun0009 }
 222:
                    var6 = global;
                    var17 = var6.Promise;
                    var14 = var17.prototype;
                    var16 = Object.create(var14, {constructor: {value: var17}});
                    var24 = function(arg1) {
                        var7 = _closure1_slot29;
                        var6 = var7.bind;
                        var5 = _closure4_slot0;
                        var4 = null;
                        var3 = arg1;
                        var3 = var6.bind(var7)(var4, var5, var3);
                        _closure4_slot1 = var3;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 21;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.subscribe;
                        var3 = _closure4_slot1;
                        var2 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                        var2 = var4.bind(var5)(var2, var3);
                        return var1;
                    };
                    var25 = var16;
                    var14 = new var25[var17](var24, var23);
                    var20 = var14 instanceof Object ? var14 : var16;
                    var17 = var6.Promise;
                    var14 = var17.prototype;
                    var16 = Object.create(var14, {constructor: {value: var17}});
                    var24 = function(arg1) {
                        var7 = _closure1_slot29;
                        var6 = var7.bind;
                        var5 = _closure4_slot0;
                        var4 = null;
                        var3 = arg1;
                        var3 = var6.bind(var7)(var4, var5, var3);
                        _closure4_slot2 = var3;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 21;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.subscribe;
                        var3 = _closure4_slot2;
                        var2 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                        var2 = var4.bind(var5)(var2, var3);
                        return var1;
                    };
                    var25 = var16;
                    var14 = new var25[var17](var24, var23);
                    var17 = var14 instanceof Object ? var14 : var16;
                    var16 = var6.Promise;
                    var14 = var16.race;
                    var6 = new Array(2);
                    var6[0] = var20;
                    var6[1] = var17;
                    var6 = var14.bind(var16)(var6);
                    SaveGenerator(address=319);
 317:
                    return var6;
 319:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=13);
                    if(var14) { _fun0009_ip = 453; continue _fun0009 }
 328:
                    var14 = _closure4_slot1;
                    if(!(var13 != var14)) { _fun0009_ip = 380; continue _fun0009 }
 336:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 21;
                    var14 = var17[var14];
                    var20 = var16.bind(var7)(var14);
                    var17 = var20.unsubscribe;
                    var16 = _closure4_slot1;
                    var14 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                    var14 = var17.bind(var20)(var14, var16);
                    _closure4_slot1 = var13;
 380:
                    var14 = _closure4_slot2;
                    if(!(var13 != var14)) { _fun0009_ip = 432; continue _fun0009 }
 388:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 21;
                    var14 = var17[var14];
                    var20 = var16.bind(var7)(var14);
                    var17 = var20.unsubscribe;
                    var16 = _closure4_slot2;
                    var14 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                    var14 = var17.bind(var20)(var14, var16);
                    _closure4_slot2 = var13;
 432:
                    var13 = {};
                    var14 = var5;
                    var13['activityConfigs'] = var14;
                    var14 = var4;
                    var13['applications'] = var14;
                    return var13;
 453:
                    return var6;
 456: // try_start_0
                    var13 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var14 = 21;
                    var6 = var6[var14];
                    var17 = var13.bind(var7)(var6);
                    var16 = var17.dispatch;
                    var13 = {};
                    var6 = 'EMBEDDED_ACTIVITY_FETCH_SHELF';
                    var13['type'] = var6;
                    var6 = var8;
                    var13['guildId'] = var6;
                    var13 = var16.bind(var17)(var13);
                    var13 = undefined;
                    if(!(var7 !== var6)) { _fun0009_ip = 534; continue _fun0009 }
 509:
                    var16 = var8;
                    var6 = '';
                    var13 = undefined;
                    if(!(var6 !== var16)) { _fun0009_ip = 534; continue _fun0009 }
 522:
                    var6 = {};
                    var16 = var8;
                    var6['guild_id'] = var16;
                    var13 = var6;
 534:
                    var16 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var6 = 44;
                    var6 = var22[var6];
                    var17 = var16.bind(var7)(var6);
                    var16 = var17.get;
                    var6 = {'url': null, 'query': null, 'trackedActionData': null, 'retries': 0, 'oldFormErrors': true, 'rejectWithError': true};
                    var20 = _closure1_slot23;
                    var20 = var20.ACTIVITY_SHELF;
                    var6['url'] = var20;
                    var6['query'] = var13;
                    var13 = {};
                    var21 = _closure1_slot0;
                    var20 = 43;
                    var20 = var22[var20];
                    var20 = var21.bind(var7)(var20);
                    var20 = var20.NetworkActionNames;
                    var20 = var20.EMBEDDED_ACTIVITIES_FETCH_SHELF;
                    var13['event'] = var20;
                    var20 = {};
                    var21 = var8;
                    var20['guild_id'] = var21;
                    var13['properties'] = var20;
                    var6['trackedActionData'] = var13;
                    var13 = 0;
                    var6 = var16.bind(var17)(var6);
                    SaveGenerator(address=661);
 659:
                    return var6;
 661:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=15);
                    if(var16) { _fun0009_ip = 915; continue _fun0009 }
 670:
                    var15 = var6;
                    var16 = var6.body;
                    var17 = var16.activities;
                    var19 = var17;
                    var16 = null;
                    if(!(var16 == var17)) { _fun0009_ip = 699; continue _fun0009 }
 693:
                    var17 = new Array(0);
                    _fun0009_ip = 702; continue _fun0009;
 699:
                    var17 = var19;
 702:
                    var12 = var17;
                    var17 = var15;
                    var17 = var17.body;
                    var17 = var17.applications;
                    var18 = var17;
                    if(!(var16 == var17)) { _fun0009_ip = 732; continue _fun0009 }
 726:
                    var17 = new Array(0);
                    _fun0009_ip = 735; continue _fun0009;
 732:
                    var17 = var18;
 735:
                    var11 = var17;
                    var15 = var15.body;
                    var15 = var15.assets;
                    var9 = var15;
                    if(!(var16 == var15)) { _fun0009_ip = 760; continue _fun0009 }
 756:
                    var18 = {};
                    _fun0009_ip = 763; continue _fun0009;
 760:
                    var18 = var9;
 763:
                    var15 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var14];
                    var17 = var15.bind(var7)(var9);
                    var16 = var17.dispatch;
                    var15 = {};
                    var9 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                    var15['type'] = var9;
                    var9 = var8;
                    var15['guildId'] = var9;
                    var9 = var12;
                    var15['activities'] = var9;
                    var9 = var11;
                    var15['applications'] = var9;
                    var15['assets'] = var18;
                    var15 = var16.bind(var17)(var15);
                    var9 = var9.length;
                    if(!(var9 > var13)) { _fun0009_ip = 882; continue _fun0009 }
 837:
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var14];
                    var14 = var13.bind(var7)(var9);
                    var13 = var14.dispatch;
                    var9 = {};
                    var15 = 'APPLICATIONS_FETCH_SUCCESS';
                    var9['type'] = var15;
                    var15 = var11;
                    var9['applications'] = var15;
                    var9 = var13.bind(var14)(var9);
 882:
                    var9 = {};
                    var9['activityConfigs'] = var12;
                    var12 = var11;
                    var11 = var12.map;
                    var10 = function(arg1) {
                        var3 = _closure1_slot8;
                        var2 = var3.createFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var11.bind(var12)(var10);
                    var9['applications'] = var10;
 912: // try_end0
                    return var9;
 915:
                    return var6;
 918: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 21;
                    var3 = var9[var3];
                    var7 = var6.bind(var7)(var3);
                    var6 = var7.dispatch;
                    var3 = {};
                    var9 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                    var3['type'] = var9;
                    var3['guildId'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = {};
                    var3['activityConfigs'] = var5;
                    var3['applications'] = var4;
                    return var3;
 979:
                    return var2;
 982:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot36 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function _sendEmbeddedActivityInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 195; continue _fun0010 }
 13:
                    var8 = var2.activityChannelId;
                    var10 = var2.invitedChannelId;
                    var11 = var2.applicationId;
                    var9 = var2.location;
                    var4 = undefined;
                    SaveGenerator(address=43);
 41:
                    return var4;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 192; continue _fun0010 }
 52:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 50;
                    var3 = var7[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.createInvite;
                    var3 = {};
                    var12 = _closure1_slot26;
                    var12 = var12.EMBEDDED_APPLICATION;
                    var3['target_type'] = var12;
                    var3['target_application_id'] = var11;
                    var3 = var6.bind(var7)(var8, var3, var9);
                    SaveGenerator(address=114);
 112:
                    return var3;
 114:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 189; continue _fun0010 }
 120:
                    var7 = _closure1_slot10;
                    var6 = var7.getChannel;
                    var6 = var6.bind(var7)(var10);
                    var8 = null;
                    if(!(var8 != var6)) { _fun0010_ip = 186; continue _fun0010 }
 140:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 51;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.sendInvite;
                    var15 = var3.code;
                    var17 = var7;
                    var16 = var10;
                    var14 = var9;
                    var13 = null;
                    var5 = var17[var6](var16, var15, var14, var13, var12);
 186:
                    return var4;
 189:
                    return var3;
 192:
                    return var2;
 195:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot37 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function _sendEmbeddedActivityInviteUser() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 208; continue _fun0011 }
 15:
                    var11 = var2.channelId;
                    var12 = var2.applicationId;
                    var8 = var2.userId;
                    var10 = var2.location;
                    var _closure4_slot0 = var10;
                    var2 = var2.prefixedContent;
                    var _closure4_slot1 = var2;
                    var5 = undefined;
                    var _closure4_slot2 = var5;
                    SaveGenerator(address=59);
 57:
                    return var5;
 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 205; continue _fun0011 }
 68:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 50;
                    var3 = var9[var3];
                    var9 = var7.bind(var5)(var3);
                    var7 = var9.createInvite;
                    var3 = {};
                    var13 = _closure1_slot26;
                    var13 = var13.EMBEDDED_APPLICATION;
                    var3['target_type'] = var13;
                    var3['target_application_id'] = var12;
                    var3 = var7.bind(var9)(var11, var3, var10);
                    SaveGenerator(address=130);
 128:
                    return var3;
 130:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0011_ip = 202; continue _fun0011 }
 136:
                    _closure4_slot2 = var3;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 52;
                    var6 = var9[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.ensurePrivateChannel;
                    var7 = var6.bind(var7)(var8);
                    var6 = var7.then;
                    var4 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var8 = arg1;
                            var2 = _closure1_slot10;
                            var1 = var2.getChannel;
                            var10 = var1.bind(var2)(var8);
                            var7 = null;
                            if(!(var7 != var10)) { _fun0012_ip = 141; continue _fun0012 }
 26:
                            var1 = _closure4_slot1;
                            var4 = var7 != var1;
                            var1 = undefined;
                            var6 = undefined;
                            if(!var4) { _fun0012_ip = 85; continue _fun0012 }
 44:
                            var5 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var4 = 53;
                            var4 = var9[var4];
                            var9 = var5.bind(var1)(var4);
                            var5 = var9.parse;
                            var4 = _closure4_slot1;
                            var4 = var5.bind(var9)(var10, var4);
                            var6 = var4.content;
 85:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 51;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.sendInvite;
                            var3 = _closure4_slot2;
                            var14 = var3.code;
                            var13 = _closure4_slot0;
                            var16 = var5;
                            var15 = var8;
                            var12 = null;
                            var11 = var6;
                            var2 = var16[var4](var15, var14, var13, var12, var11, var10);
                            return var1;
 141:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {constructor: {value: var3}});
                            var15 = 'Private channel not found';
                            var16 = var2;
                            var1 = new var16[var3](var15, var14);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        }
                    };
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=190);
 188:
                    return var4;
 190:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0011_ip = 199; continue _fun0011 }
 196:
                    return var5;
 199:
                    return var4;
 202:
                    return var3;
 205:
                    return var2;
 208:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot38 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function _validateTestMode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 108; continue _fun0013 }
 7:
                    var5 = undefined;
                    var3 = undefined;
                    var7 = _closure1_slot23;
                    var6 = var7.ACTIVITY_TEST_MODE;
                    var4 = arg1;
                    var3 = var6.bind(var7)(var4);
 32: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 48;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var2['url'] = var3;
                    var3 = true;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=89);
 87:
                    return var2;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 98; continue _fun0013 }
 95: // try_end0
                    return var3;
 98:
                    return var2;
 101: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
 108:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot39 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot39 = var1;
    var4 = function updateActivityPanelMode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'EMBEDDED_ACTIVITY_SET_PANEL_MODE';
        var2['type'] = var5;
        var5 = arg1;
        var2['activityPanelMode'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot40 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var20 = 0;
    var6 = var8[var20];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var19 = 1;
    var6 = var8[var19];
    var6 = var7.bind(var1)(var6);
    var6 = var6.getOrFetchApplicationCommandIndexForTarget;
    var _closure1_slot4 = var6;
    var18 = 2;
    var6 = var8[var18];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var17 = 3;
    var6 = var8[var17];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var16 = 4;
    var6 = var8[var16];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var15 = 5;
    var6 = var8[var15];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var14 = 6;
    var6 = var8[var14];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var12 = 7;
    var6 = var8[var12];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var11 = 8;
    var6 = var8[var11];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var10 = 9;
    var6 = var8[var10];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot12 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot13 = var6;
    var6 = 11;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot14 = var6;
    var6 = 12;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot15 = var6;
    var6 = 13;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
    var _closure1_slot16 = var6;
    var6 = 14;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ActivityPanelModes;
    var _closure1_slot17 = var6;
    var6 = 15;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot18 = var9;
    var9 = var6.AnalyticsGameOpenTypes;
    var _closure1_slot19 = var9;
    var9 = var6.ApplicationFlags;
    var _closure1_slot20 = var9;
    var9 = var6.ChannelTypes;
    var _closure1_slot21 = var9;
    var9 = var6.ComponentActions;
    var _closure1_slot22 = var9;
    var6 = var6.Endpoints;
    var _closure1_slot23 = var6;
    var6 = 16;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.INSTALL_LESS_APP_IDS;
    var _closure1_slot24 = var6;
    var6 = 17;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ContentDismissActionType;
    var _closure1_slot25 = var6;
    var6 = 18;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.InviteTargetTypes;
    var _closure1_slot26 = var6;
    var6 = {};
    var6['NO_PRIMARY_APP_COMMAND'] = var19;
    var9 = 'NO_PRIMARY_APP_COMMAND';
    var6[var19] = var9;
    var6['UNAUTHORIZED'] = var18;
    var9 = 'UNAUTHORIZED';
    var6[var18] = var9;
    var6['NO_CHANNEL'] = var17;
    var9 = 'NO_CHANNEL';
    var6[var17] = var9;
    var6['FAILED_ACTIVITY_LAUNCH_CHECKS'] = var16;
    var9 = 'FAILED_ACTIVITY_LAUNCH_CHECKS';
    var6[var16] = var9;
    var _closure1_slot27 = var6;
    var6 = {};
    var6['OTHER'] = var20;
    var13 = 'OTHER';
    var6[var20] = var13;
    var6['NO_APPLICATION_ID'] = var19;
    var13 = 'NO_APPLICATION_ID';
    var6[var19] = var13;
    var6['UNKNOWN_USER_OR_APPLICATION'] = var18;
    var13 = 'UNKNOWN_USER_OR_APPLICATION';
    var6[var18] = var13;
    var6['INVALID_CHANNEL'] = var17;
    var13 = 'INVALID_CHANNEL';
    var6[var17] = var13;
    var6['LAUNCHABILITY_CHECK_FAILED_OTHER'] = var16;
    var13 = 'LAUNCHABILITY_CHECK_FAILED_OTHER';
    var6[var16] = var13;
    var6['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = var15;
    var13 = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    var6[var15] = var13;
    var6['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = var14;
    var13 = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    var6[var14] = var13;
    var6['FAILED_ACTIVITY_LAUNCH_CHECKS'] = var12;
    var6[var12] = var9;
    var6['NOT_CONNECTED_TO_VOICE_CHANNEL'] = var11;
    var9 = 'NOT_CONNECTED_TO_VOICE_CHANNEL';
    var6[var11] = var9;
    var6['AIT_NOT_ENABLED_FOR_USER'] = var10;
    var9 = 'AIT_NOT_ENABLED_FOR_USER';
    var6[var10] = var9;
    var _closure1_slot28 = var6;
    var6 = function handleFetchDone(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg1;
            var1 = arg3;
            var2 = var1.guildId;
            var1 = var2 === var4;
            if(var1) { _fun0014_ip = 34; continue _fun0014 }
 18:
            var3 = null;
            var2 = var3 == var2;
            if(!var2) { _fun0014_ip = 31; continue _fun0014 }
 27:
            var2 = var3 == var4;
 31:
            var1 = var2;
 34:
            if(!var1) { _fun0014_ip = 46; continue _fun0014 }
 37:
            var2 = arg2;
            var1 = undefined;
            var1 = var2.bind(var1)();
 46:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var6;
    var6 = 56;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/EmbeddedActivitiesActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function maybeDisconnectFromCurrentActivity(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var4 = _closure1_slot15;
            var3 = var4.getSelfEmbeddedActivityForLocation;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var1)) { _fun0015_ip = 65; continue _fun0015 }
 27:
            var3 = _closure1_slot33;
            var2 = {};
            var4 = var1.location;
            var2['location'] = var4;
            var1 = var1.applicationId;
            var2['applicationId'] = var1;
            var1 = false;
            var2['showFeedback'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 65:
            var1 = undefined;
            return var1;
        }
    };
    var3['maybeDisconnectFromCurrentActivity'] = var6;
    var6 = function runPrimaryAppCommandOrJoinEmbeddedActivity() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['runPrimaryAppCommandOrJoinEmbeddedActivity'] = var6;
    var3['stopEmbeddedActivity'] = var5;
    var5 = function requestRespondToSeriousThermalState() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['requestRespondToSeriousThermalState'] = var5;
    var5 = function consumeRequestToReactToSeriousThermalState() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['consumeRequestToReactToSeriousThermalState'] = var5;
    var5 = function disregardSeriousThermalState() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['disregardSeriousThermalState'] = var5;
    var5 = function fetchDeveloperApplications() {
        var1 = undefined;
        var4 = _closure1_slot34;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchDeveloperApplications'] = var5;
    var5 = function uploadImageAttachment() {
        var1 = undefined;
        var4 = _closure1_slot35;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['uploadImageAttachment'] = var5;
    var5 = function fetchShelf() {
        var1 = undefined;
        var4 = _closure1_slot36;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchShelf'] = var5;
    var5 = function sendEmbeddedActivityInvite() {
        var1 = undefined;
        var4 = _closure1_slot37;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendEmbeddedActivityInvite'] = var5;
    var5 = function sendEmbeddedActivityInviteUser() {
        var1 = undefined;
        var4 = _closure1_slot38;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendEmbeddedActivityInviteUser'] = var5;
    var5 = function dismissNewActivityIndicator() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var7 = arguments[0];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0016_ip = 22; continue _fun0016 }
 9:
            var2 = _closure1_slot25;
            var7 = var2.INDIRECT_ACTION;
 22:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 54;
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var5 = var6.markVersionedDismissibleContentAsDismissed;
            var2 = 55;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.DismissibleContent;
            var4 = var2.ACTIVITIES_VOICE_LAUNCHER_BADGE;
            var2 = global;
            var8 = var2.Math;
            var3 = var8.floor;
            var2 = var2.Date;
            var9 = var2.prototype;
            var9 = Object.create(var9, {constructor: {value: var2}});
            var13 = var9;
            var2 = new var13[var2](var12);
            var9 = var2 instanceof Object ? var2 : var9;
            var2 = var9.getTime;
            var9 = var2.bind(var9)();
            var2 = 1000;
            var2 = var9 / var2;
            var3 = var3.bind(var8)(var2);
            var2 = {};
            var2['dismissAction'] = var7;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var3['dismissNewActivityIndicator'] = var5;
    var5 = function validateTestMode() {
        var1 = undefined;
        var4 = _closure1_slot39;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['validateTestMode'] = var5;
    var3['updateActivityPanelMode'] = var4;
    var4 = function updateFocusedActivityLayout(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT';
        var2['type'] = var5;
        var5 = arg1;
        var2['focusedActivityLayout'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateFocusedActivityLayout'] = var4;
    var4 = function openActivityPopoutWindow() {
        var4 = _closure1_slot40;
        var1 = _closure1_slot17;
        var3 = var1.ACTIVITY_POPOUT_WINDOW;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 21;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ACTIVITY_POPOUT_WINDOW_OPEN';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['openActivityPopoutWindow'] = var4;
    var2 = function updateActivityPopoutWindowLayout(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT';
        var2['type'] = var5;
        var5 = arg1;
        var2['layout'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateActivityPopoutWindowLayout'] = var2;
    return var1;
})();