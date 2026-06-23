// app/modules/activities/EmbeddedActivitiesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function _runPrimaryAppCommandOrJoinEmbeddedActivity() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var14 = var2.channelId;
                    var13 = var2.applicationId;
                    var9 = var2.isStart;
                    var31 = var2.analyticsLocations;
                    var30 = var2.locationObject;
                    var20 = var2.embeddedActivitiesManager;
                    var32 = var2.componentId;
                    var25 = var2.commandOrigin;
                    var24 = var2.sectionName;
                    var23 = var2.source;
                    var22 = var2.onExecutedCallback;
                    var29 = var2.referrerId;
                    var35 = var2.customId;
                    var18 = var2.inviterUserId;
                    var21 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var10 = undefined;
                    var17 = undefined;
                    var12 = undefined;
                    var3 = undefined;
                    var15 = undefined;
                    var34 = undefined;
                    var33 = undefined;
                    var16 = undefined;
                    var27 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=126);
case 4:
                    return var10;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var19 = _closure1_slot10;
                    var11 = var19.getChannel;
                    var4 = var14;
                    var4 = var11.bind(var19)(var4);
                    var17 = var4;
                    var11 = null;
                    var4 = var11 == var4;
                    var19 = undefined;
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var26 = var17;
                    var4 = var26.getGuildId;
                    var19 = var4.bind(var26)();
case 8:
                    var26 = var11 != var19;
                    var4 = undefined;
                    if(!var26) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var4 = var19;
case 10:
                    var12 = var4;
                    if(!(var11 == var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = var17;
                    var19 = var11 == var4;
                    var4 = undefined;
                    if(var19) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var26 = var17;
                    var19 = var26.isPrivate;
                    var4 = var19.bind(var26)();
case 14:
                    if(!(var11 != var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 12:
                    var26 = _closure1_slot5;
                    var19 = var26.getApplication;
                    var4 = var13;
                    var28 = var19.bind(var26)(var4);
                    var19 = var11 != var28;
                    var4 = var19;
                    if(!var19) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var26 = _closure1_slot0;
                    var36 = _closure1_slot2;
                    var19 = 19;
                    var19 = var36[var19];
                    var26 = var26.bind(var10)(var19);
                    var19 = var26.canLaunchFrame;
                    var4 = var19.bind(var26)(var28);
case 18:
                    var3 = var4;
                    var19 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var4 = 20;
                    var4 = var26[var4];
                    var19 = var19.bind(var10)(var4);
                    var4 = var19.createNonce;
                    var15 = var4.bind(var19)();
case 20: // try_start_0
                    var26 = _closure1_slot7;
                    var19 = var26.getWindowOpen;
                    var4 = _closure1_slot23;
                    var4 = var4.ACTIVITY_POPOUT;
                    var4 = var19.bind(var26)(var4);
                    var19 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var4 = 21;
                    var4 = var26[var4];
                    var28 = var19.bind(var10)(var4);
                    var4 = var28.leaveCurrentFrame;
                    var4 = var4.bind(var28)();
                    var4 = 22;
                    var4 = var26[var4];
                    var26 = var19.bind(var10)(var4);
                    var19 = var26.tryLaunchAsFrame;
                    var4 = {};
                    var28 = var13;
                    var4['applicationId'] = var28;
                    var4 = var19.bind(var26)(var4);
                    if(var4) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var26 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var19 = 25;
                    var4 = var4[var19];
                    var28 = var26.bind(var10)(var4);
                    var26 = var28.dispatch;
                    var4 = {};
                    var36 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
                    var4['type'] = var36;
                    var36 = var15;
                    var4['nonce'] = var36;
                    var36 = var13;
                    var4['applicationId'] = var36;
                    var36 = var14;
                    var37 = var11 != var36;
                    var36 = null;
                    if(!var37) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var36 = var14;
case 23:
                    var4['channelId'] = var36;
                    var4['componentId'] = var32;
                    var32 = var31;
                    var4['analyticsLocations'] = var32;
                    var32 = var23;
                    var4['source'] = var32;
                    var32 = var25;
                    var4['commandOrigin'] = var32;
                    var32 = var18;
                    var4['inviterUserId'] = var32;
                    var32 = {};
                    var32['customId'] = var35;
                    var35 = var29;
                    var32['referrerId'] = var35;
                    var4['launchParams'] = var32;
                    var4 = var26.bind(var28)(var4);
                    var28 = _closure1_slot41;
                    var26 = var13;
                    var4 = var14;
                    var32 = var11 != var4;
                    var4 = undefined;
                    if(!var32) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var4 = var14;
case 25:
                    var4 = var28.bind(var10)(var26, var4);
                    SaveGenerator(address=586);
case 27:
                    return var4;
case 28:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=25);
                    if(var26) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var34 = var4;
                    var28 = _closure1_slot1;
                    var26 = _closure1_slot2;
                    var26 = var26[var19];
                    var32 = var28.bind(var10)(var26);
                    var28 = var32.dispatch;
                    var26 = {};
                    var35 = 'EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET';
                    var26['type'] = var35;
                    var35 = var13;
                    var26['applicationId'] = var35;
                    var35 = var14;
                    var36 = var11 != var35;
                    var35 = null;
                    if(!var36) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var35 = var14;
case 31:
                    var26['channelId'] = var35;
                    var26['proxyTicket'] = var34;
                    var26 = var28.bind(var32)(var26);
                    var28 = _closure1_slot13;
                    var26 = var28.getCurrentUser;
                    var26 = var26.bind(var28)();
                    var33 = var26;
                    if(!(var11 != var26)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var28 = _closure1_slot1;
                    var32 = _closure1_slot2;
                    var26 = 26;
                    var26 = var32[var26];
                    var28 = var28.bind(var10)(var26);
                    var26 = {};
                    var32 = var9;
                    var34 = _closure1_slot19;
                    if(var32) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var32 = var34.JOIN;
                    _fun0001_ip = 37; continue _fun0001;
case 35:
                    var32 = var34.LAUNCH;
case 37:
                    var26['type'] = var32;
                    var32 = var33;
                    var34 = var11 == var32;
                    var32 = undefined;
                    if(var34) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var32 = var33.id;
case 38:
                    var26['userId'] = var32;
                    var32 = var12;
                    var26['guildId'] = var32;
                    var32 = var14;
                    var26['channelId'] = var32;
                    var32 = var17;
                    var33 = var11 == var32;
                    var32 = undefined;
                    if(var33) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                    var33 = var17;
                    var32 = var33.type;
case 40:
                    var26['channelType'] = var32;
                    var32 = var13;
                    var26['applicationId'] = var32;
                    var26['locationObject'] = var30;
                    var30 = var31;
                    if(!(var11 == var30)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
                    var30 = new Array(0);
                    _fun0001_ip = 44; continue _fun0001;
case 42:
                    var30 = var31;
case 44:
                    var26['analyticsLocations'] = var30;
                    var30 = var23;
                    var26['source'] = var30;
                    var26['referrerId'] = var29;
                    var29 = var18;
                    var26['inviterUserId'] = var29;
                    var26 = var28.bind(var10)(var26);
case 33:
                    var26 = var9;
                    if(var26) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                    var28 = {};
                    var26 = var13;
                    var28['applicationId'] = var26;
                    var26 = var14;
                    var28['channelId'] = var26;
                    var26 = var20;
                    var28['embeddedActivitiesManager'] = var26;
                    var26 = var9;
                    var28['isStart'] = var26;
                    var26 = var12;
                    var28['guildId'] = var26;
                    var26 = function joinEmbeddedActivity() {
                        var1 = undefined;
                        var4 = _closure1_slot32;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var26 = var26.bind(var10)(var28);
                    SaveGenerator(address=923);
case 47:
                    return var26;
case 48:
                    ResumeGenerator(result_out_reg=25, return_bool_out_reg=27);
                    if(var28) { _fun0001_ip = 49; continue _fun0001 }
case 50:
                    var27 = var26;
                    var28 = var22;
                    if(!(var11 != var28)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
                    var28 = var22;
                    var28 = var28.bind(var10)();
case 51:
                    var28 = var27;
                    var29 = var28.result;
                    var28 = 'failure';
                    if(!(var28 === var29)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
                    var29 = _closure1_slot1;
                    var31 = _closure1_slot2;
                    var28 = 27;
                    var30 = var31[var28];
                    var30 = var29.bind(var10)(var30);
                    var28 = var31[var28];
                    var28 = var29.bind(var10)(var28);
                    var28 = var28.Reasons;
                    var39 = var28.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                    var38 = var27.reason;
                    var28 = var30.prototype;
                    var28 = Object.create(var28, {constructor: {value: var30}});
                    var40 = var28;
                    var27 = new var40[var30](var39, var38, var37);
                    var27 = var27 instanceof Object ? var27 : var28;
                    throw var27;
case 49: // try_end0
                    return var26;
case 45: // try_start_1
                    var26 = var14;
                    if(!(var11 != var26)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
                    var28 = var13;
                    var29 = var17;
                    var17 = var11 == var29;
                    var26 = undefined;
                    if(var17) { _fun0001_ip = 57; continue _fun0001 }
case 58:
                    var26 = var29.type;
case 57:
                    var17 = _closure1_slot21;
                    var17 = var17.GUILD_VOICE;
                    var17 = var26 === var17;
                    var27 = _closure1_slot5;
                    var26 = var27.getApplication;
                    var32 = var26.bind(var27)(var28);
                    var28 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var26 = 30;
                    var26 = var30[var26];
                    var31 = var28.bind(var10)(var26);
                    var27 = var31.hasApplicationFlag;
                    var26 = _closure1_slot20;
                    var26 = var26.EMBEDDED;
                    var27 = var27.bind(var31)(var32, var26);
                    var26 = 31;
                    var26 = var30[var26];
                    var28 = var28.bind(var10)(var26);
                    var26 = var28.isActivityInTextSupportedForChannel;
                    var26 = var26.bind(var28)(var29);
                    if(!var17) { _fun0001_ip = 59; continue _fun0001 }
case 60:
                    var17 = var27;
case 59:
                    if(var17) { _fun0001_ip = 61; continue _fun0001 }
case 62:
                    var17 = var26;
case 61:
                    if(!var17) { _fun0001_ip = 55; continue _fun0001 }
case 63:
                    var17 = {};
                    var26 = var13;
                    var17['applicationId'] = var26;
                    var26 = var15;
                    var17['nonce'] = var26;
                    var26 = var14;
                    var17['channelId'] = var26;
                    var26 = var12;
                    var17['guildId'] = var26;
                    var17['commandOrigin'] = var25;
                    var17['sectionName'] = var24;
                    var17['source'] = var23;
                    var17['onExecutedCallback'] = var22;
                    var17['onConfirmActivityLaunchChecksAlertOpen'] = var21;
                    var17['embeddedActivitiesManager'] = var20;
                    var5 = function maybeSendPrimaryAppCommand() {
                        var1 = undefined;
                        var4 = _closure1_slot31;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var5 = var5.bind(var10)(var17);
                    SaveGenerator(address=1256);
case 64:
                    return var5;
case 65:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=16);
                    if(var17) { _fun0001_ip = 66; continue _fun0001 }
case 67:
                    var16 = var5;
                    var20 = var5.result;
                    var17 = 'failure';
                    if(!(var17 !== var20)) { _fun0001_ip = 68; continue _fun0001 }
case 53:
                    var20 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var17 = var17[var19];
                    var21 = var20.bind(var10)(var17);
                    var20 = var21.dispatch;
                    var17 = {};
                    var22 = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
                    var17['type'] = var22;
                    var22 = var15;
                    var17['nonce'] = var22;
                    var22 = var13;
                    var17['applicationId'] = var22;
                    var22 = var14;
                    var23 = var11 != var22;
                    var22 = null;
                    if(!var23) { _fun0001_ip = 69; continue _fun0001 }
case 70:
                    var22 = var14;
case 69:
                    var17['channelId'] = var22;
                    var17 = var20.bind(var21)(var17);
case 71: // try_end1
                    var17 = true;
                    return var17;
case 68: // try_start_2
                    var17 = var16.reason;
                    var16 = _closure1_slot27;
                    var16 = var16.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    if(!(var17 !== var16)) { _fun0001_ip = 72; continue _fun0001 }
case 73:
                    var17 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var16 = 27;
                    var20 = var21[var16];
                    var20 = var17.bind(var10)(var20);
                    var16 = var21[var16];
                    var16 = var17.bind(var10)(var16);
                    var16 = var16.Reasons;
                    var39 = var16.PRIMARY_APP_COMMAND_NOT_FOUND;
                    var17 = var20.prototype;
                    var17 = Object.create(var17, {constructor: {value: var20}});
                    var40 = var17;
                    var16 = new var40[var20](var39, var38);
                    var16 = var16 instanceof Object ? var16 : var17;
                    throw var16;
case 72:
                    var17 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var16 = var16[var19];
                    var19 = var17.bind(var10)(var16);
                    var17 = var19.dispatch;
                    var16 = {};
                    var20 = 'EMBEDDED_ACTIVITY_LAUNCH_CANCEL';
                    var16['type'] = var20;
                    var20 = var15;
                    var16['nonce'] = var20;
                    var20 = var13;
                    var16['applicationId'] = var20;
                    var20 = var14;
                    var21 = var11 != var20;
                    var20 = null;
                    if(!var21) { _fun0001_ip = 74; continue _fun0001 }
case 75:
                    var20 = var14;
case 74:
                    var16['channelId'] = var20;
                    var16 = var17.bind(var19)(var16);
case 76: // try_end2
                    var16 = false;
                    return var16;
case 66:
                    return var5;
case 55: // try_start_3
                    var16 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var5 = 27;
                    var17 = var19[var5];
                    var17 = var16.bind(var10)(var17);
                    var5 = var19[var5];
                    var5 = var16.bind(var10)(var5);
                    var5 = var5.Reasons;
                    var39 = var5.INVALID_CHANNEL;
                    var16 = var17.prototype;
                    var16 = Object.create(var16, {constructor: {value: var17}});
                    var40 = var16;
                    var5 = new var40[var17](var39, var38);
                    var5 = var5 instanceof Object ? var5 : var16;
                    throw var5;
case 29: // try_end3
                    return var4;
case 21: // try_start_4
                    var5 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var4 = 23;
                    var4 = var16[var4];
                    var17 = var5.bind(var10)(var4);
                    var16 = var17.stashPendingFrameLaunch;
                    var5 = var13;
                    var4 = {};
                    var19 = var9;
                    var4['isStart'] = var19;
                    var4['inviterUserId'] = var18;
                    var18 = var14;
                    var19 = var11 != var18;
                    var18 = null;
                    if(!var19) { _fun0001_ip = 77; continue _fun0001 }
case 78:
                    var18 = var14;
case 77:
                    var4['channelId'] = var18;
                    var18 = var12;
                    var19 = var11 != var18;
                    var18 = null;
                    if(!var19) { _fun0001_ip = 79; continue _fun0001 }
case 80:
                    var18 = var12;
case 79:
                    var4['guildId'] = var18;
                    var18 = var12;
                    if(!(var11 == var18)) { _fun0001_ip = 81; continue _fun0001 }
case 82:
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var18 = 24;
                    var18 = var20[var18];
                    var18 = var19.bind(var10)(var18);
                    var18 = var18.EmbeddedActivityLocationKind;
                    var18 = var18.PRIVATE_CHANNEL;
                    _fun0001_ip = 83; continue _fun0001;
case 81:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 24;
                    var19 = var21[var19];
                    var19 = var20.bind(var10)(var19);
                    var19 = var19.EmbeddedActivityLocationKind;
                    var18 = var19.GUILD_CHANNEL;
case 83:
                    var4['locationKind'] = var18;
                    var4 = var16.bind(var17)(var5, var4);
case 84: // try_end4
                    var4 = true;
                    return var4;
case 85: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=7);
                    if(var3) { _fun0001_ip = 86; continue _fun0001 }
case 87:
                    var3 = var12;
                    if(!(var11 == var3)) { _fun0001_ip = 88; continue _fun0001 }
case 89:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 24;
                    var3 = var5[var3];
                    var3 = var4.bind(var10)(var3);
                    var3 = var3.EmbeddedActivityLocationKind;
                    var3 = var3.PRIVATE_CHANNEL;
                    _fun0001_ip = 90; continue _fun0001;
case 88:
                    var5 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var4 = 24;
                    var4 = var16[var4];
                    var4 = var5.bind(var10)(var4);
                    var4 = var4.EmbeddedActivityLocationKind;
                    var3 = var4.GUILD_CHANNEL;
case 90:
                    var6 = var3;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 25;
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
                    if(!var15) { _fun0001_ip = 91; continue _fun0001 }
case 92:
                    var13 = var14;
case 91:
                    var3['channelId'] = var13;
                    var13 = var12;
                    var13 = var11 != var13;
                    var11 = null;
                    if(!var13) { _fun0001_ip = 93; continue _fun0001 }
case 94:
                    var11 = var12;
case 93:
                    var3['guildId'] = var11;
                    var3['isStart'] = var9;
                    var11 = var8;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 27;
                    var9 = var13[var9];
                    var9 = var12.bind(var10)(var9);
                    var9 = var11 instanceof var9;
                    if(var9) { _fun0001_ip = 95; continue _fun0001 }
case 96:
                    var12 = var8;
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var11 = 28;
                    var9 = var9[var11];
                    var9 = var13.bind(var10)(var9);
                    var9 = var12 instanceof var9;
                    if(var9) { _fun0001_ip = 95; continue _fun0001 }
case 97:
                    var12 = var8;
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 29;
                    var9 = var14[var9];
                    var9 = var13.bind(var10)(var9);
                    var9 = var12 instanceof var9;
                    if(var9) { _fun0001_ip = 95; continue _fun0001 }
case 98:
                    var9 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var10 = var9.bind(var10)(var7);
                    var39 = var8;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var40 = var9;
                    var7 = new var40[var10](var39, var38);
                    var7 = var7 instanceof Object ? var7 : var9;
                    _fun0001_ip = 99; continue _fun0001;
case 95:
                    var7 = var8;
case 99:
                    var3['error'] = var7;
                    var3['locationKind'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = false;
                    return var3;
case 86:
                    var3 = false;
                    return var3;
case 16:
                    var3 = false;
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 100; continue _fun0002 }
case 3:
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
case 101:
                    return var8;
case 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 103; continue _fun0002 }
case 104:
                    var9 = null;
                    var25 = null;
                    _closure4_slot8 = var9;
case 105: // try_start_0
                    var20 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var4 = 32;
                    var4 = var21[var4];
                    var21 = var20.bind(var8)(var4);
                    var20 = var10;
                    var4 = var17;
                    var4 = var21.bind(var8)(var20, var4);
                    SaveGenerator(address=200);
case 106:
                    return var4;
case 107:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=19);
                    if(var20) { _fun0002_ip = 108; continue _fun0002 }
case 109:
                    var25 = var4;
                    _closure4_slot8 = var4;
case 110: // try_end0
                    var20 = var25;
                    var21 = var20.handler;
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var20 = 33;
                    var20 = var23[var20];
                    var20 = var22.bind(var8)(var20);
                    var20 = var20.ApplicationCommandHandler;
                    var20 = var20.APP_HANDLER;
                    var20 = var21 !== var20;
                    var5 = var20;
                    if(var20) { _fun0002_ip = 111; continue _fun0002 }
case 112:
                    var22 = _closure1_slot24;
                    var21 = var22.includes;
                    var20 = var17;
                    var20 = var21.bind(var22)(var20);
                    if(var20) { _fun0002_ip = 111; continue _fun0002 }
case 113:
                    var20 = var10;
                    if(!(var9 != var20)) { _fun0002_ip = 114; continue _fun0002 }
case 115:
                    var21 = _closure1_slot4;
                    var20 = {};
                    var22 = 'channel';
                    var20['type'] = var22;
                    var22 = var10;
                    var20['channelId'] = var22;
                    var20 = var21.bind(var8)(var20);
                    SaveGenerator(address=330);
case 116:
                    return var20;
case 117:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=20);
                    if(var21) { _fun0002_ip = 118; continue _fun0002 }
case 114:
                    var22 = _closure1_slot4;
                    var21 = {};
                    var23 = 'user';
                    var21['type'] = var23;
                    var21 = var22.bind(var8)(var21);
                    SaveGenerator(address=362);
case 119:
                    return var21;
case 120:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=21);
                    if(var22) { _fun0002_ip = 121; continue _fun0002 }
case 122:
                    var24 = _closure1_slot10;
                    var23 = var24.getChannel;
                    var22 = var10;
                    var26 = var23.bind(var24)(var22);
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var22 = 34;
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
case 123:
                    return var22;
case 124:
                    ResumeGenerator(result_out_reg=21, return_bool_out_reg=22);
                    if(var23) { _fun0002_ip = 125; continue _fun0002 }
case 126:
                    var23 = var22.isAuthorized;
                    if(var23) { _fun0002_ip = 111; continue _fun0002 }
case 127:
                    var23 = {};
                    var24 = 'failure';
                    var23['result'] = var24;
                    var24 = _closure1_slot27;
                    var24 = var24.UNAUTHORIZED;
                    var23['reason'] = var24;
                    return var23;
case 125:
                    return var22;
case 121:
                    return var21;
case 118:
                    return var20;
case 111:
                    var21 = _closure1_slot10;
                    var20 = var21.getChannel;
                    var10 = var20.bind(var21)(var10);
                    var15 = var10;
                    _closure4_slot9 = var10;
                    var10 = var18;
                    var20 = var9 != var10;
                    var10 = null;
                    if(!var20) { _fun0002_ip = 128; continue _fun0002 }
case 129:
                    var21 = _closure1_slot11;
                    var20 = var21.getGuild;
                    var10 = var20.bind(var21)(var18);
case 128:
                    _closure4_slot10 = var10;
                    var10 = var15;
                    if(!(var9 != var10)) { _fun0002_ip = 130; continue _fun0002 }
case 131:
                    if(!var5) { _fun0002_ip = 132; continue _fun0002 }
case 133:
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
                    if(var10) { _fun0002_ip = 134; continue _fun0002 }
case 135:
                    var10 = var19;
                    var5 = var10.applicationId;
case 134:
                    if(!(var9 != var5)) { _fun0002_ip = 136; continue _fun0002 }
case 137:
                    var18 = _closure1_slot5;
                    var10 = var18.getApplication;
                    var5 = var19;
                    var20 = var9 == var5;
                    var5 = undefined;
                    if(var20) { _fun0002_ip = 138; continue _fun0002 }
case 139:
                    var5 = var19.applicationId;
case 138:
                    var14 = var10.bind(var18)(var5);
case 136:
                    var10 = _closure1_slot13;
                    var5 = var10.getCurrentUser;
                    var5 = var5.bind(var10)();
                    var12 = var5;
                    if(!(var9 != var5)) { _fun0002_ip = 132; continue _fun0002 }
case 140:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 35;
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
                    SaveGenerator(address=753);
case 141:
                    return var5;
case 39:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 142; continue _fun0002 }
case 143:
                    if(var5) { _fun0002_ip = 132; continue _fun0002 }
case 144:
                    var9 = {};
                    var10 = 'failure';
                    var9['result'] = var10;
                    var10 = _closure1_slot27;
                    var10 = var10.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    var9['reason'] = var10;
                    return var9;
case 132:
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
                        var1 = 36;
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
case 0:
                                    var3 = _closure4_slot7;
                                    var2 = null;
                                    if(!(var2 != var3)) { _fun0003_ip = 145; continue _fun0003 }
case 146:
                                    var2 = _closure4_slot7;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 145:
                                    var2 = _closure5_slot0;
                                    var1 = undefined;
                                    var2 = var2.bind(var1)();
                                    return var1;
                                }
                            };
                            var1['onSuccess'] = var3;
                            var2 = function onFailure(arg1, arg2, arg3, arg4) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var6 = arg1;
                                    var7 = arg2;
                                    var4 = arg3;
                                    var9 = arg4;
                                    var1 = _closure4_slot7;
                                    var3 = null;
                                    if(!(var3 != var1)) { _fun0004_ip = 147; continue _fun0004 }
case 148:
                                    var2 = _closure4_slot7;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 147:
                                    var8 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 37;
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
                                    if(var14) { _fun0004_ip = 4; continue _fun0004 }
case 149:
                                    var14 = _closure4_slot9;
                                    var13 = var14.type;
case 4:
                                    var5['channel_type'] = var13;
                                    var5['error_code'] = var6;
                                    var5['error_message'] = var7;
                                    var5['error_status'] = var4;
                                    var5['error_reason_code'] = var9;
                                    var12 = _closure4_slot6;
                                    var5['source'] = var12;
                                    var5 = var10.bind(var11)(var8, var5);
                                    if(!(var3 != var6)) { _fun0004_ip = 150; continue _fun0004 }
case 9:
                                    if(!(var3 != var7)) { _fun0004_ip = 150; continue _fun0004 }
case 151:
                                    if(!(var3 == var4)) { _fun0004_ip = 152; continue _fun0004 }
case 150:
                                    if(!(var3 != var9)) { _fun0004_ip = 153; continue _fun0004 }
case 154:
                                    var5 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var10 = 29;
                                    var3 = var3[var10];
                                    var3 = var5.bind(var1)(var3);
                                    var3 = var3.ReasonCodes;
                                    var3 = var9 in var3;
                                    if(var3) { _fun0004_ip = 155; continue _fun0004 }
case 153:
                                    var5 = _closure5_slot1;
                                    var8 = _closure1_slot1;
                                    var12 = _closure1_slot2;
                                    var3 = 29;
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
                                    _fun0004_ip = 22; continue _fun0004;
case 155:
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
                                    _fun0004_ip = 22; continue _fun0004;
case 152:
                                    var3 = _closure5_slot1;
                                    var5 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var2 = 28;
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
case 22:
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
                    SaveGenerator(address=830);
case 156:
                    return var7;
case 157:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 158; continue _fun0002 }
case 159:
                    var9 = {};
                    var10 = 'success';
                    var9['result'] = var10;
                    return var9;
case 158:
                    return var7;
case 142:
                    return var5;
case 130:
                    var5 = {};
                    var7 = 'failure';
                    var5['result'] = var7;
                    var6 = _closure1_slot27;
                    var6 = var6.NO_CHANNEL;
                    var5['reason'] = var6;
                    return var5;
case 108:
                    return var4;
case 160: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = var4;
                    var6 = var4.message;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 32;
                    var5 = var9[var5];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.NO_PRIMARY_APP_COMMAND_ERROR;
                    if(!(var6 !== var5)) { _fun0002_ip = 161; continue _fun0002 }
case 162:
                    throw var3;
case 161:
                    var3 = {};
                    var5 = 'failure';
                    var3['result'] = var5;
                    var4 = _closure1_slot27;
                    var4 = var4.NO_PRIMARY_APP_COMMAND;
                    var3['reason'] = var4;
                    return var3;
case 103:
                    return var2;
case 100:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 163; continue _fun0005 }
case 146:
                    var21 = var2.applicationId;
                    var20 = var2.channelId;
                    var14 = var2.embeddedActivitiesManager;
                    var5 = var2.isStart;
                    var17 = var2.guildId;
                    var9 = undefined;
                    SaveGenerator(address=46);
case 164:
                    return var9;
case 165:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 166; continue _fun0005 }
case 167:
                    var6 = _closure1_slot9;
                    var3 = var6.getSessionId;
                    var18 = var3.bind(var6)();
                    var6 = _closure1_slot13;
                    var3 = var6.getCurrentUser;
                    var13 = var3.bind(var6)();
                    var16 = null;
                    if(!(var16 != var21)) { _fun0005_ip = 168; continue _fun0005 }
case 169:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 38;
                    var3 = var7[var3];
                    var3 = var6.bind(var9)(var3);
                    var3 = var3.bind(var9)(var21, var20);
                    SaveGenerator(address=124);
case 170:
                    return var3;
case 4:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 171; continue _fun0005 }
case 172:
                    if(!(var16 != var13)) { _fun0005_ip = 173; continue _fun0005 }
case 174:
                    if(!(var16 != var3)) { _fun0005_ip = 173; continue _fun0005 }
case 175:
                    if(!(var16 != var20)) { _fun0005_ip = 176; continue _fun0005 }
case 177:
                    var7 = _closure1_slot10;
                    var6 = var7.getChannel;
                    var12 = var6.bind(var7)(var20);
                    if(!(var16 != var12)) { _fun0005_ip = 178; continue _fun0005 }
case 179:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var10 = 39;
                    var7 = var6[var10];
                    var15 = var8.bind(var9)(var7);
                    var11 = var15.getEmbeddedActivityLaunchability;
                    var7 = {};
                    var7['channelId'] = var20;
                    var19 = _closure1_slot10;
                    var7['ChannelStore'] = var19;
                    var19 = _closure1_slot11;
                    var7['GuildStore'] = var19;
                    var19 = _closure1_slot12;
                    var7['PermissionStore'] = var19;
                    var19 = _closure1_slot14;
                    var7['VoiceStateStore'] = var19;
                    var7 = var11.bind(var15)(var7);
                    var6 = var6[var10];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.EmbeddedActivityLaunchability;
                    var6 = var6.CAN_LAUNCH;
                    if(!(var7 === var6)) { _fun0005_ip = 180; continue _fun0005 }
case 181:
                    var8 = _closure1_slot15;
                    var6 = var8.getCurrentEmbeddedActivity;
                    var19 = var6.bind(var8)();
                    var8 = var16 == var19;
                    var6 = undefined;
                    if(var8) { _fun0005_ip = 182; continue _fun0005 }
case 183:
                    var6 = var19.applicationId;
case 182:
                    var6 = var16 != var6;
                    var11 = undefined;
                    if(!var6) { _fun0005_ip = 184; continue _fun0005 }
case 185:
                    var15 = _closure1_slot5;
                    var8 = var15.getApplication;
                    var22 = var16 == var19;
                    var6 = undefined;
                    if(var22) { _fun0005_ip = 186; continue _fun0005 }
case 187:
                    var6 = var19.applicationId;
case 186:
                    var11 = var8.bind(var15)(var6);
case 184:
                    if(!var5) { _fun0005_ip = 188; continue _fun0005 }
case 189:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 35;
                    var5 = var8[var5];
                    var8 = var6.bind(var9)(var5);
                    var6 = var8.confirmActivityLaunchChecks;
                    var5 = {};
                    var5['applicationId'] = var21;
                    var5['application'] = var3;
                    var5['channel'] = var12;
                    var5['currentEmbeddedApplication'] = var11;
                    var5['embeddedActivitiesManager'] = var14;
                    var5['user'] = var13;
                    var5 = var6.bind(var8)(var5);
                    SaveGenerator(address=408);
case 190:
                    return var5;
case 191:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 192; continue _fun0005 }
case 193:
                    if(var5) { _fun0005_ip = 188; continue _fun0005 }
case 194:
                    var6 = {};
                    var8 = 'failure';
                    var6['result'] = var8;
                    var8 = _closure1_slot28;
                    var8 = var8.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    var6['reason'] = var8;
                    return var6;
case 188:
                    if(!(var16 != var12)) { _fun0005_ip = 195; continue _fun0005 }
case 196:
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var6 = 43;
                    var6 = var13[var6];
                    var8 = var8.bind(var9)(var6);
                    var6 = var12.id;
                    var8 = var8.bind(var9)(var6);
                    var14 = _closure1_slot16;
                    var13 = var14.includes;
                    var6 = var12.type;
                    var6 = var13.bind(var14)(var6);
                    if(var8) { _fun0005_ip = 197; continue _fun0005 }
case 198:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 31;
                    var8 = var14[var8];
                    var13 = var13.bind(var9)(var8);
                    var8 = var13.isActivitiesInTextEnabled;
                    var8 = var8.bind(var13)(var12);
                    if(!var8) { _fun0005_ip = 199; continue _fun0005 }
case 200:
                    if(var6) { _fun0005_ip = 195; continue _fun0005 }
case 199:
                    var6 = {};
                    var8 = 'failure';
                    var6['result'] = var8;
                    var8 = _closure1_slot28;
                    var8 = var8.AIT_NOT_ENABLED_FOR_USER;
                    var6['reason'] = var8;
                    return var6;
case 197:
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var6 = 44;
                    var6 = var13[var6];
                    var8 = var8.bind(var9)(var6);
                    var6 = {};
                    var12 = var12.id;
                    var6['channelId'] = var12;
                    var11 = var16 != var11;
                    var6['bypassChangeModal'] = var11;
                    var6 = var8.bind(var9)(var6);
                    SaveGenerator(address=623);
case 201:
                    return var6;
case 202:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0005_ip = 203; continue _fun0005 }
case 204:
                    if(var6) { _fun0005_ip = 195; continue _fun0005 }
case 205:
                    var8 = {};
                    var11 = 'failure';
                    var8['result'] = var11;
                    var11 = _closure1_slot28;
                    var11 = var11.NOT_CONNECTED_TO_VOICE_CHANNEL;
                    var8['reason'] = var11;
                    return var8;
case 195:
                    var14 = {'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    var8 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 45;
                    var11 = var13[var11];
                    var11 = var12.bind(var9)(var11);
                    var11 = var11.NetworkActionNames;
                    var11 = var11.EMBEDDED_ACTIVITIES_LAUNCH;
                    var8['event'] = var11;
                    var11 = {};
                    var11['guild_id'] = var17;
                    var11['channel_id'] = var20;
                    var11['application_id'] = var21;
                    var11['session_id'] = var18;
                    var8['properties'] = var11;
                    var14['trackedActionData'] = var8;
                    if(!(var16 == var20)) { _fun0005_ip = 206; continue _fun0005 }
case 207:
                    var11 = {};
                    var8 = 'failure';
                    var11['result'] = var8;
                    var8 = _closure1_slot28;
                    var8 = var8.OTHER;
                    var11['reason'] = var8;
                    _fun0005_ip = 208; continue _fun0005;
case 206:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 46;
                    var8 = var13[var8];
                    var13 = var12.bind(var9)(var8);
                    var12 = var13.post;
                    var8 = {};
                    var19 = _closure1_slot22;
                    var15 = var19.ACTIVITY_CHANNEL_LAUNCH;
                    var15 = var15.bind(var19)(var20, var21);
                    var8['url'] = var15;
                    var15 = {};
                    var15['session_id'] = var18;
                    var18 = var16 != var17;
                    var16 = undefined;
                    if(!var18) { _fun0005_ip = 209; continue _fun0005 }
case 210:
                    var16 = var17;
case 209:
                    var15['guild_id'] = var16;
                    var8['body'] = var15;
                    var24 = var8;
                    var23 = var14;
                    var14 = copyDataProperties(var24, var23);
                    var8 = var12.bind(var13)(var8);
                    SaveGenerator(address=874);
case 211:
                    return var8;
case 212:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(var12) { _fun0005_ip = 213; continue _fun0005 }
case 214:
                    var12 = {};
                    var13 = 'success';
                    var12['result'] = var13;
                    var11 = var12;
case 208:
                    return var11;
case 213:
                    return var8;
case 203:
                    return var6;
case 192:
                    return var5;
case 180:
                    var5 = _closure1_slot28;
                    var6 = var5.LAUNCHABILITY_CHECK_FAILED_OTHER;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.EmbeddedActivityLaunchability;
                    var5 = var5.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    if(!(var7 !== var5)) { _fun0005_ip = 215; continue _fun0005 }
case 216:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.EmbeddedActivityLaunchability;
                    var5 = var5.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    if(!(var7 === var5)) { _fun0005_ip = 217; continue _fun0005 }
case 218:
                    var5 = _closure1_slot28;
                    var6 = var5.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    var8 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var7 = 41;
                    var7 = var15[var7];
                    var10 = var8.bind(var9)(var7);
                    var8 = var10.show;
                    var7 = {};
                    var14 = _closure1_slot0;
                    var11 = 42;
                    var12 = var15[var11];
                    var12 = var14.bind(var9)(var12);
                    var16 = var12.intl;
                    var13 = var16.string;
                    var12 = var15[var11];
                    var12 = var14.bind(var9)(var12);
                    var12 = var12.t;
                    var12 = var12.IOy+I5;
                    var12 = var13.bind(var16)(var12);
                    var7['title'] = var12;
                    var12 = var15[var11];
                    var12 = var14.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var15[var11];
                    var11 = var14.bind(var9)(var11);
                    var11 = var11.t;
                    var11 = var11.UXoQTp;
                    var11 = var12.bind(var13)(var11);
                    var7['body'] = var11;
                    var11 = false;
                    var7['hideActionSheet'] = var11;
                    var7 = var8.bind(var10)(var7);
                    _fun0005_ip = 217; continue _fun0005;
case 215:
                    var5 = _closure1_slot28;
                    var6 = var5.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 40;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.showActivitiesInvalidPermissionsAlert;
                    var7 = var7.bind(var8)();
case 217:
                    var5 = {};
                    var7 = 'failure';
                    var5['result'] = var7;
                    var5['reason'] = var6;
                    return var5;
case 178:
                    var5 = {};
                    var6 = 'failure';
                    var5['result'] = var6;
                    var6 = _closure1_slot28;
                    var6 = var6.INVALID_CHANNEL;
                    var5['reason'] = var6;
                    return var5;
case 176:
                    var5 = {};
                    var6 = 'failure';
                    var5['result'] = var6;
                    var6 = _closure1_slot28;
                    var6 = var6.INVALID_CHANNEL;
                    var5['reason'] = var6;
                    return var5;
case 173:
                    var5 = {};
                    var6 = 'failure';
                    var5['result'] = var6;
                    var6 = _closure1_slot28;
                    var6 = var6.UNKNOWN_USER_OR_APPLICATION;
                    var5['reason'] = var6;
                    return var5;
case 171:
                    return var3;
case 168:
                    var3 = {};
                    var5 = 'failure';
                    var3['result'] = var5;
                    var4 = _closure1_slot28;
                    var4 = var4.NO_APPLICATION_ID;
                    var3['reason'] = var4;
                    return var3;
case 166:
                    return var2;
case 163:
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
    var6 = function stopEmbeddedActivity(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.location;
            var9 = var1.applicationId;
            var _closure2_slot0 = var9;
            var10 = var1.showFeedback;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0006_ip = 219; continue _fun0006 }
case 220:
            var10 = true;
case 219:
            var5 = _closure1_slot15;
            var4 = var5.getSelfEmbeddedActivityForLocation;
            var12 = var4.bind(var5)(var7);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 25;
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
            if(var13) { _fun0006_ip = 221; continue _fun0006 }
case 222:
            var11 = var12.launchId;
case 221:
            var4['instanceId'] = var11;
            var4['showFeedback'] = var10;
            var4 = var6.bind(var8)(var4);
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 47;
            var4 = var8[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.getEmbeddedActivityLocationChannelId;
            var4 = var4.bind(var6)(var7);
            if(!(var5 != var4)) { _fun0006_ip = 223; continue _fun0006 }
case 224:
            var7 = _closure1_slot6;
            var6 = var7.getSelectedParticipantId;
            var6 = var6.bind(var7)(var4);
            var8 = _closure1_slot13;
            var7 = var8.getCurrentUser;
            var8 = var7.bind(var8)();
            var10 = var5 == var8;
            var7 = undefined;
            if(var10) { _fun0006_ip = 225; continue _fun0006 }
case 13:
            var7 = var8.id;
case 225:
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
            if(!(var5 != var10)) { _fun0006_ip = 226; continue _fun0006 }
case 227:
            if(!(var5 != var7)) { _fun0006_ip = 226; continue _fun0006 }
case 228:
            var3 = '';
            if(!(var3 !== var7)) { _fun0006_ip = 226; continue _fun0006 }
case 229:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 48;
            var3 = var8[var3];
            var8 = var7.bind(var1)(var3);
            var7 = var8.getEmbeddedActivityParticipantId;
            var3 = {};
            var3['applicationId'] = var9;
            var11 = var5 == var10;
            var9 = undefined;
            if(var11) { _fun0006_ip = 230; continue _fun0006 }
case 231:
            var9 = var10.compositeInstanceId;
case 230:
            var3['instanceId'] = var9;
            var3 = var7.bind(var8)(var3);
            if(!(var6 === var3)) { _fun0006_ip = 223; continue _fun0006 }
case 232:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 49;
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.selectParticipant;
            var2 = var2.bind(var3)(var4, var5);
case 223:
            return var1;
case 226:
            return var1;
        }
    };
    var _closure1_slot33 = var6;
    var1 = function _fetchDeveloperApplications() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 233; continue _fun0007 }
case 234: // try_start_0
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var7 = 25;
                    var2 = var6[var7];
                    var5 = undefined;
                    var8 = var4.bind(var5)(var2);
                    var4 = var8.dispatch;
                    var2 = {};
                    var9 = 'DEVELOPER_ACTIVITY_SHELF_FETCH_START';
                    var2['type'] = var9;
                    var2 = var4.bind(var8)(var2);
                    var4 = _closure1_slot0;
                    var2 = 50;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var8 = _closure1_slot22;
                    var8 = var8.APPLICATIONS_WITH_ASSETS;
                    var2['url'] = var8;
                    var9 = {};
                    var8 = true;
                    var9['with_team_applications'] = var8;
                    var2['query'] = var9;
                    var2['oldFormErrors'] = var8;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=133);
case 235:
                    return var2;
case 172:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 236; continue _fun0007 }
case 101:
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
case 237: // try_end0
                    _fun0007_ip = 238; continue _fun0007;
case 236:
                    return var2;
case 239: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
case 238:
                    var2 = undefined;
                    return var2;
case 233:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 240; continue _fun0008 }
case 234:
                    var10 = arg1;
                    var4 = arg2;
                    var8 = arg3;
case 241: // try_start_0
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 25;
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
                    if(!var2) { _fun0008_ip = 242; continue _fun0008 }
case 243:
                    var2 = {};
                    var2['channel_id'] = var4;
                    var9 = var2;
case 242:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 50;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.post;
                    var2 = {};
                    var12 = _closure1_slot22;
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
                    SaveGenerator(address=189);
case 244:
                    return var2;
case 245:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 237; continue _fun0008 }
case 246:
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
case 247: // try_end0
                    return var3;
case 237:
                    return var2;
case 19: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 25;
                    var2 = var6[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var7 = var8.dispatch;
                    var2 = {};
                    var9 = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL';
                    var2['type'] = var9;
                    var2 = var7.bind(var8)(var2);
                    var2 = 28;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    return var2;
case 240:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 248; continue _fun0009 }
case 3:
                    var6 = var2.guildId;
                    var8 = var6;
                    var _closure4_slot0 = var6;
                    var6 = var2.force;
                    var7 = undefined;
                    if(!(var6 === var7)) { _fun0009_ip = 249; continue _fun0009 }
case 250:
                    var6 = false;
case 249:
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
case 251:
                    return var7;
case 252:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 253; continue _fun0009 }
case 254:
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
                    var13 = 51;
                    var13 = var20[var13];
                    var13 = var17.bind(var7)(var13);
                    var13 = var13.isNotNullish;
                    var4 = var14.bind(var16)(var13);
                    if(var6) { _fun0009_ip = 255; continue _fun0009 }
case 105:
                    var14 = _closure1_slot15;
                    var13 = var14.shouldFetchShelf;
                    var6 = var8;
                    var6 = var13.bind(var14)(var6);
                    if(var6) { _fun0009_ip = 255; continue _fun0009 }
case 244:
                    var14 = _closure1_slot15;
                    var13 = var14.getShelfFetchStatus;
                    var6 = var8;
                    var6 = var13.bind(var14)(var6);
                    var14 = null;
                    if(!(var14 != var6)) { _fun0009_ip = 256; continue _fun0009 }
case 110:
                    var6 = var6.isFetching;
                    if(!var6) { _fun0009_ip = 256; continue _fun0009 }
case 257:
                    var6 = global;
                    var17 = var6.Promise;
                    var13 = var17.prototype;
                    var16 = Object.create(var13, {constructor: {value: var17}});
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
                        var1 = 25;
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
                    var13 = new var25[var17](var24, var23);
                    var20 = var13 instanceof Object ? var13 : var16;
                    var17 = var6.Promise;
                    var13 = var17.prototype;
                    var16 = Object.create(var13, {constructor: {value: var17}});
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
                        var1 = 25;
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
                    var13 = new var25[var17](var24, var23);
                    var17 = var13 instanceof Object ? var13 : var16;
                    var16 = var6.Promise;
                    var13 = var16.race;
                    var6 = new Array(2);
                    var6[0] = var20;
                    var6[1] = var17;
                    var6 = var13.bind(var16)(var6);
                    SaveGenerator(address=329);
case 258:
                    return var6;
case 259:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(var13) { _fun0009_ip = 260; continue _fun0009 }
case 261:
                    var13 = _closure4_slot1;
                    if(!(var14 != var13)) { _fun0009_ip = 262; continue _fun0009 }
case 263:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var13 = 25;
                    var13 = var17[var13];
                    var20 = var16.bind(var7)(var13);
                    var17 = var20.unsubscribe;
                    var16 = _closure4_slot1;
                    var13 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                    var13 = var17.bind(var20)(var13, var16);
                    _closure4_slot1 = var7;
case 262:
                    var13 = _closure4_slot2;
                    if(!(var14 != var13)) { _fun0009_ip = 256; continue _fun0009 }
case 264:
                    var14 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var13 = 25;
                    var13 = var16[var13];
                    var17 = var14.bind(var7)(var13);
                    var16 = var17.unsubscribe;
                    var14 = _closure4_slot2;
                    var13 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                    var13 = var16.bind(var17)(var13, var14);
                    _closure4_slot2 = var7;
case 256:
                    var13 = {};
                    var14 = var5;
                    var13['activityConfigs'] = var14;
                    var14 = var4;
                    var13['applications'] = var14;
                    return var13;
case 260:
                    return var6;
case 255: // try_start_0
                    var13 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var14 = 25;
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
                    if(!(var7 !== var6)) { _fun0009_ip = 128; continue _fun0009 }
case 265:
                    var16 = var8;
                    var6 = '';
                    var13 = undefined;
                    if(!(var6 !== var16)) { _fun0009_ip = 128; continue _fun0009 }
case 266:
                    var6 = {};
                    var16 = var8;
                    var6['guild_id'] = var16;
                    var13 = var6;
case 128:
                    var16 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var6 = 46;
                    var6 = var22[var6];
                    var17 = var16.bind(var7)(var6);
                    var16 = var17.get;
                    var6 = {'url': null, 'query': null, 'trackedActionData': null, 'retries': 0, 'oldFormErrors': true, 'rejectWithError': true};
                    var20 = _closure1_slot22;
                    var20 = var20.ACTIVITY_SHELF;
                    var6['url'] = var20;
                    var6['query'] = var13;
                    var13 = {};
                    var21 = _closure1_slot0;
                    var20 = 45;
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
                    SaveGenerator(address=675);
case 267:
                    return var6;
case 268:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=15);
                    if(var16) { _fun0009_ip = 162; continue _fun0009 }
case 269:
                    var15 = var6;
                    var16 = var6.body;
                    var17 = var16.activities;
                    var19 = var17;
                    var16 = null;
                    if(!(var16 == var17)) { _fun0009_ip = 270; continue _fun0009 }
case 271:
                    var17 = new Array(0);
                    _fun0009_ip = 272; continue _fun0009;
case 270:
                    var17 = var19;
case 272:
                    var12 = var17;
                    var17 = var15;
                    var17 = var17.body;
                    var17 = var17.applications;
                    var18 = var17;
                    if(!(var16 == var17)) { _fun0009_ip = 273; continue _fun0009 }
case 274:
                    var17 = new Array(0);
                    _fun0009_ip = 275; continue _fun0009;
case 273:
                    var17 = var18;
case 275:
                    var11 = var17;
                    var15 = var15.body;
                    var15 = var15.assets;
                    var9 = var15;
                    if(!(var16 == var15)) { _fun0009_ip = 276; continue _fun0009 }
case 277:
                    var18 = {};
                    _fun0009_ip = 278; continue _fun0009;
case 276:
                    var18 = var9;
case 278:
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
                    if(!(var9 > var13)) { _fun0009_ip = 279; continue _fun0009 }
case 280:
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
case 279:
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
case 281: // try_end0
                    return var9;
case 162:
                    return var6;
case 282: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 25;
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
case 253:
                    return var2;
case 248:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 283; continue _fun0010 }
case 146:
                    var11 = var2.activityChannelId;
                    var10 = var2.invitedChannelId;
                    var12 = var2.applicationId;
                    var9 = var2.location;
                    var8 = var2.inviteAnalyticsMetadata;
                    var4 = undefined;
                    SaveGenerator(address=49);
case 284:
                    return var4;
case 285:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 286; continue _fun0010 }
case 287:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 52;
                    var3 = var7[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.createInvite;
                    var3 = {};
                    var13 = _closure1_slot26;
                    var13 = var13.EMBEDDED_APPLICATION;
                    var3['target_type'] = var13;
                    var3['target_application_id'] = var12;
                    var3 = var6.bind(var7)(var11, var3, var9);
                    SaveGenerator(address=120);
case 288:
                    return var3;
case 289:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 290; continue _fun0010 }
case 5:
                    var7 = _closure1_slot10;
                    var6 = var7.getChannel;
                    var7 = var6.bind(var7)(var10);
                    var6 = null;
                    if(!(var6 != var7)) { _fun0010_ip = 291; continue _fun0010 }
case 292:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 53;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.sendInvite;
                    var16 = var3.code;
                    var18 = var7;
                    var17 = var10;
                    var15 = var9;
                    var14 = var8;
                    var5 = var18[var6](var17, var16, var15, var14, var13);
case 291:
                    return var4;
case 290:
                    return var3;
case 286:
                    return var2;
case 283:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 293; continue _fun0011 }
case 3:
                    var11 = var2.channelId;
                    var12 = var2.applicationId;
                    var8 = var2.userId;
                    var10 = var2.location;
                    var _closure4_slot0 = var10;
                    var5 = var2.inviteAnalyticsMetadata;
                    var _closure4_slot1 = var5;
                    var2 = var2.prefixedContent;
                    var _closure4_slot2 = var2;
                    var5 = undefined;
                    var _closure4_slot3 = var5;
                    SaveGenerator(address=69);
case 251:
                    return var5;
case 252:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 153; continue _fun0011 }
case 254:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 52;
                    var3 = var9[var3];
                    var9 = var7.bind(var5)(var3);
                    var7 = var9.createInvite;
                    var3 = {};
                    var13 = _closure1_slot26;
                    var13 = var13.EMBEDDED_APPLICATION;
                    var3['target_type'] = var13;
                    var3['target_application_id'] = var12;
                    var3 = var7.bind(var9)(var11, var3, var10);
                    SaveGenerator(address=140);
case 294:
                    return var3;
case 174:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0011_ip = 295; continue _fun0011 }
case 292:
                    _closure4_slot3 = var3;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 54;
                    var6 = var9[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.ensurePrivateChannel;
                    var7 = var6.bind(var7)(var8);
                    var6 = var7.then;
                    var4 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var8 = arg1;
                            var2 = _closure1_slot10;
                            var1 = var2.getChannel;
                            var9 = var1.bind(var2)(var8);
                            var4 = null;
                            if(!(var4 != var9)) { _fun0012_ip = 296; continue _fun0012 }
case 297:
                            var1 = _closure4_slot2;
                            var4 = var4 != var1;
                            var1 = undefined;
                            var7 = undefined;
                            if(!var4) { _fun0012_ip = 298; continue _fun0012 }
case 164:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 55;
                            var4 = var6[var4];
                            var6 = var5.bind(var1)(var4);
                            var5 = var6.parse;
                            var4 = _closure4_slot2;
                            var4 = var5.bind(var6)(var9, var4);
                            var7 = var4.content;
case 298:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 53;
                            var3 = var5[var3];
                            var6 = var4.bind(var1)(var3);
                            var5 = var6.sendInvite;
                            var3 = _closure4_slot3;
                            var13 = var3.code;
                            var12 = _closure4_slot0;
                            var11 = _closure4_slot1;
                            var15 = var6;
                            var14 = var8;
                            var10 = var7;
                            var2 = var15[var5](var14, var13, var12, var11, var10, var9);
                            return var1;
case 296:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {constructor: {value: var3}});
                            var14 = 'Private channel not found';
                            var15 = var2;
                            var1 = new var15[var3](var14, var13);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        }
                    };
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=202);
case 107:
                    return var4;
case 283:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0011_ip = 299; continue _fun0011 }
case 300:
                    return var5;
case 299:
                    return var4;
case 295:
                    return var3;
case 153:
                    return var2;
case 293:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 301; continue _fun0013 }
case 302:
                    var5 = undefined;
                    var3 = undefined;
                    var7 = _closure1_slot22;
                    var6 = var7.ACTIVITY_TEST_MODE;
                    var4 = arg1;
                    var3 = var6.bind(var7)(var4);
case 303: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 50;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var2['url'] = var3;
                    var3 = true;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=89);
case 304:
                    return var2;
case 242:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 305; continue _fun0013 }
case 306: // try_end0
                    return var3;
case 305:
                    return var2;
case 307: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
case 301:
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
    var5 = function updateActivityPanelMode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 25;
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
    var _closure1_slot40 = var5;
    var4 = function createProxyTicket() {
        var1 = undefined;
        var4 = _closure1_slot42;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot41 = var4;
    var1 = function _createProxyTicket() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 5; continue _fun0014 }
case 234:
                    var5 = {};
                    var3 = null;
                    if(!(var3 != var2)) { _fun0014_ip = 308; continue _fun0014 }
case 309:
                    var5['channel_id'] = var2;
case 308:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 50;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot22;
                    var7 = var8.APPLICATION_PROXY_TICKET;
                    var6 = arg1;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=103);
case 307:
                    return var2;
case 310:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 311; continue _fun0014 }
case 312:
                    var3 = var2.body;
                    var3 = var3.ticket;
                    return var3;
case 311:
                    return var2;
case 5:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot42 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function _refreshProxyTicket() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 206; continue _fun0015 }
case 146:
                    var6 = var4;
                    var14 = arg2;
                    var5 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var11 = undefined;
                    var12 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 25;
                    var2 = var2[var7];
                    var13 = var12.bind(var5)(var2);
                    var12 = var13.dispatch;
                    var2 = {'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': true};
                    var2['applicationId'] = var4;
                    var4 = true;
                    var2 = var12.bind(var13)(var2);
case 313: // try_start_0 // try_start_1
                    var13 = _closure1_slot41;
                    var12 = var6;
                    var15 = var14;
                    var2 = null;
                    var15 = var2 != var15;
                    var2 = undefined;
                    if(!var15) { _fun0015_ip = 314; continue _fun0015 }
case 310:
                    var2 = var14;
case 314:
                    var2 = var13.bind(var5)(var12, var2);
                    SaveGenerator(address=116);
case 315:
                    return var2;
case 316:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=11);
                    if(var12) { _fun0015_ip = 181; continue _fun0015 }
case 317:
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var15 = var12[var7];
                    var18 = var13.bind(var5)(var15);
                    var17 = var18.dispatch;
                    var15 = {};
                    var16 = 'EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET';
                    var15['type'] = var16;
                    var16 = var6;
                    var15['applicationId'] = var16;
                    var19 = var14;
                    var15['channelId'] = var19;
                    var15['proxyTicket'] = var2;
                    var15 = var17.bind(var18)(var15);
                    var12 = var12[var7];
                    var15 = var13.bind(var5)(var12);
                    var13 = var15.dispatch;
                    var12 = {};
                    var17 = 'EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET';
                    var12['type'] = var17;
                    var12['applicationId'] = var16;
                    var12['proxyTicket'] = var2;
                    var12 = var13.bind(var15)(var12);
case 318: // try_end0 // try_end1
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var12 = var12[var7];
                    var15 = var13.bind(var5)(var12);
                    var13 = var15.dispatch;
                    var12 = {'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': false};
                    var16 = var6;
                    var12['applicationId'] = var16;
                    var12 = var13.bind(var15)(var12);
                    return var4;
case 181:
                    var12 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var13 = var12.bind(var5)(var4);
                    var12 = var13.dispatch;
                    var4 = {'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': false};
                    var15 = var6;
                    var4['applicationId'] = var15;
                    var4 = var12.bind(var13)(var4);
                    return var2;
case 259: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=9);
                    var12 = _closure1_slot10;
                    var4 = var12.getChannel;
                    var2 = var14;
                    var2 = var4.bind(var12)(var2);
                    var9 = var2;
                    var4 = null;
                    var12 = var4 == var2;
                    var2 = undefined;
                    if(var12) { _fun0015_ip = 319; continue _fun0015 }
case 120:
                    var2 = var9.guild_id;
case 319:
                    var8 = var2;
                    var9 = var4 != var2;
                    var2 = null;
                    if(!var9) { _fun0015_ip = 320; continue _fun0015 }
case 321:
                    var2 = var8;
case 320:
                    var11 = var2;
                    if(!(var4 == var2)) { _fun0015_ip = 322; continue _fun0015 }
case 323:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 24;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.EmbeddedActivityLocationKind;
                    var9 = var2.PRIVATE_CHANNEL;
                    _fun0015_ip = 324; continue _fun0015;
case 322:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 24;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.EmbeddedActivityLocationKind;
                    var9 = var2.GUILD_CHANNEL;
case 324:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = var13[var7];
                    var8 = var12.bind(var5)(var2);
                    var4 = var8.dispatch;
                    var2 = {};
                    var15 = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
                    var2['type'] = var15;
                    var16 = _closure1_slot0;
                    var15 = 20;
                    var15 = var13[var15];
                    var16 = var16.bind(var5)(var15);
                    var15 = var16.createNonce;
                    var15 = var15.bind(var16)();
                    var2['nonce'] = var15;
                    var15 = var6;
                    var2['applicationId'] = var15;
                    var2['channelId'] = var14;
                    var2['guildId'] = var11;
                    var2['locationKind'] = var9;
                    var11 = var10;
                    var9 = 27;
                    var9 = var13[var9];
                    var9 = var12.bind(var5)(var9);
                    var9 = var11 instanceof var9;
                    if(var9) { _fun0015_ip = 325; continue _fun0015 }
case 326:
                    var11 = var10;
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var12 = 28;
                    var9 = var9[var12];
                    var9 = var13.bind(var5)(var9);
                    var9 = var11 instanceof var9;
                    if(var9) { _fun0015_ip = 325; continue _fun0015 }
case 327:
                    var11 = var10;
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 29;
                    var9 = var14[var9];
                    var9 = var13.bind(var5)(var9);
                    var9 = var11 instanceof var9;
                    if(var9) { _fun0015_ip = 325; continue _fun0015 }
case 328:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var12 = var11.bind(var5)(var9);
                    var21 = var10;
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var22 = var11;
                    var9 = new var22[var12](var21, var20);
                    var9 = var9 instanceof Object ? var9 : var11;
                    _fun0015_ip = 329; continue _fun0015;
case 325:
                    var9 = var10;
case 329:
                    var2['error'] = var9;
                    var2 = var4.bind(var8)(var2);
case 330: // try_end2
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var9 = var4.bind(var5)(var2);
                    var8 = var9.dispatch;
                    var4 = {'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': false};
                    var2 = var6;
                    var4['applicationId'] = var2;
                    var2 = false;
                    var4 = var8.bind(var9)(var4);
                    return var2;
case 331: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': false};
                    var3['applicationId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 206:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot43 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var21 = 0;
    var7 = var9[var21];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var20 = 1;
    var7 = var9[var20];
    var7 = var8.bind(var1)(var7);
    var7 = var7.getOrFetchApplicationCommandIndexForTarget;
    var _closure1_slot4 = var7;
    var19 = 2;
    var7 = var9[var19];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var18 = 3;
    var7 = var9[var18];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var17 = 4;
    var7 = var9[var17];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var16 = 5;
    var7 = var9[var16];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var15 = 6;
    var7 = var9[var15];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var13 = 7;
    var7 = var9[var13];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var12 = 8;
    var7 = var9[var12];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var11 = 9;
    var7 = var9[var11];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 12;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var7 = 13;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
    var _closure1_slot16 = var7;
    var7 = 14;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ActivityPanelModes;
    var _closure1_slot17 = var7;
    var7 = 15;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.AnalyticEvents;
    var _closure1_slot18 = var10;
    var10 = var7.AnalyticsGameOpenTypes;
    var _closure1_slot19 = var10;
    var10 = var7.ApplicationFlags;
    var _closure1_slot20 = var10;
    var10 = var7.ChannelTypes;
    var _closure1_slot21 = var10;
    var10 = var7.Endpoints;
    var _closure1_slot22 = var10;
    var7 = var7.PopoutWindowKeys;
    var _closure1_slot23 = var7;
    var7 = 16;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.INSTALL_LESS_APP_IDS;
    var _closure1_slot24 = var7;
    var7 = 17;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot25 = var7;
    var7 = 18;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.InviteTargetTypes;
    var _closure1_slot26 = var7;
    var7 = {};
    var7['NO_PRIMARY_APP_COMMAND'] = var20;
    var10 = 'NO_PRIMARY_APP_COMMAND';
    var7[var20] = var10;
    var7['UNAUTHORIZED'] = var19;
    var10 = 'UNAUTHORIZED';
    var7[var19] = var10;
    var7['NO_CHANNEL'] = var18;
    var10 = 'NO_CHANNEL';
    var7[var18] = var10;
    var7['FAILED_ACTIVITY_LAUNCH_CHECKS'] = var17;
    var10 = 'FAILED_ACTIVITY_LAUNCH_CHECKS';
    var7[var17] = var10;
    var _closure1_slot27 = var7;
    var7 = {};
    var7['OTHER'] = var21;
    var14 = 'OTHER';
    var7[var21] = var14;
    var7['NO_APPLICATION_ID'] = var20;
    var14 = 'NO_APPLICATION_ID';
    var7[var20] = var14;
    var7['UNKNOWN_USER_OR_APPLICATION'] = var19;
    var14 = 'UNKNOWN_USER_OR_APPLICATION';
    var7[var19] = var14;
    var7['INVALID_CHANNEL'] = var18;
    var14 = 'INVALID_CHANNEL';
    var7[var18] = var14;
    var7['LAUNCHABILITY_CHECK_FAILED_OTHER'] = var17;
    var14 = 'LAUNCHABILITY_CHECK_FAILED_OTHER';
    var7[var17] = var14;
    var7['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = var16;
    var14 = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    var7[var16] = var14;
    var7['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = var15;
    var14 = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    var7[var15] = var14;
    var7['FAILED_ACTIVITY_LAUNCH_CHECKS'] = var13;
    var7[var13] = var10;
    var7['NOT_CONNECTED_TO_VOICE_CHANNEL'] = var12;
    var10 = 'NOT_CONNECTED_TO_VOICE_CHANNEL';
    var7[var12] = var10;
    var7['AIT_NOT_ENABLED_FOR_USER'] = var11;
    var10 = 'AIT_NOT_ENABLED_FOR_USER';
    var7[var11] = var10;
    var _closure1_slot28 = var7;
    var7 = function handleFetchDone(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var1 = arg3;
            var2 = var1.guildId;
            var1 = var2 === var4;
            if(var1) { _fun0016_ip = 332; continue _fun0016 }
case 309:
            var3 = null;
            var2 = var3 == var2;
            if(!var2) { _fun0016_ip = 220; continue _fun0016 }
case 333:
            var2 = var3 == var4;
case 220:
            var1 = var2;
case 332:
            if(!var1) { _fun0016_ip = 165; continue _fun0016 }
case 334:
            var2 = arg2;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 165:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var7;
    var7 = 58;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/activities/EmbeddedActivitiesActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function maybeDisconnectFromCurrentActivity(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = _closure1_slot15;
            var3 = var4.getSelfEmbeddedActivityForLocation;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var1)) { _fun0017_ip = 335; continue _fun0017 }
case 333:
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
case 335:
            var1 = undefined;
            return var1;
        }
    };
    var3['maybeDisconnectFromCurrentActivity'] = var7;
    var7 = function runPrimaryAppCommandOrJoinEmbeddedActivity() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['runPrimaryAppCommandOrJoinEmbeddedActivity'] = var7;
    var3['stopEmbeddedActivity'] = var6;
    var6 = function requestRespondToSeriousThermalState() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 25;
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
    var3['requestRespondToSeriousThermalState'] = var6;
    var6 = function consumeRequestToReactToSeriousThermalState() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 25;
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
    var3['consumeRequestToReactToSeriousThermalState'] = var6;
    var6 = function disregardSeriousThermalState() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 25;
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
    var3['disregardSeriousThermalState'] = var6;
    var6 = function fetchDeveloperApplications() {
        var1 = undefined;
        var4 = _closure1_slot34;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchDeveloperApplications'] = var6;
    var6 = function uploadImageAttachment() {
        var1 = undefined;
        var4 = _closure1_slot35;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['uploadImageAttachment'] = var6;
    var6 = function fetchShelf() {
        var1 = undefined;
        var4 = _closure1_slot36;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchShelf'] = var6;
    var6 = function sendEmbeddedActivityInvite() {
        var1 = undefined;
        var4 = _closure1_slot37;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendEmbeddedActivityInvite'] = var6;
    var6 = function sendEmbeddedActivityInviteUser() {
        var1 = undefined;
        var4 = _closure1_slot38;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendEmbeddedActivityInviteUser'] = var6;
    var6 = function dismissNewActivityIndicator() {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var7 = arguments[0];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0018_ip = 336; continue _fun0018 }
case 337:
            var2 = _closure1_slot25;
            var7 = var2.INDIRECT_ACTION;
case 336:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 56;
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var5 = var6.markVersionedDismissibleContentAsDismissed;
            var2 = 57;
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
    var3['dismissNewActivityIndicator'] = var6;
    var6 = function validateTestMode() {
        var1 = undefined;
        var4 = _closure1_slot39;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['validateTestMode'] = var6;
    var3['updateActivityPanelMode'] = var5;
    var5 = function updateFocusedActivityLayout(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 25;
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
    var3['updateFocusedActivityLayout'] = var5;
    var5 = function openActivityPopoutWindow() {
        var4 = _closure1_slot40;
        var1 = _closure1_slot17;
        var3 = var1.ACTIVITY_POPOUT_WINDOW;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 25;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ACTIVITY_POPOUT_WINDOW_OPEN';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['openActivityPopoutWindow'] = var5;
    var5 = function updateActivityPopoutWindowLayout(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 25;
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
    var3['updateActivityPopoutWindowLayout'] = var5;
    var3['createProxyTicket'] = var4;
    var2 = function refreshProxyTicket() {
        var1 = undefined;
        var4 = _closure1_slot43;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['refreshProxyTicket'] = var2;
    return var1;
})();