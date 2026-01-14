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
                    var33 = var2.analyticsLocations;
                    var32 = var2.locationObject;
                    var21 = var2.embeddedActivitiesManager;
                    var34 = var2.componentId;
                    var26 = var2.commandOrigin;
                    var25 = var2.sectionName;
                    var24 = var2.source;
                    var23 = var2.onExecutedCallback;
                    var31 = var2.referrerId;
                    var37 = var2.customId;
                    var30 = var2.inviterUserId;
                    var22 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var10 = undefined;
                    var19 = undefined;
                    var12 = undefined;
                    var3 = undefined;
                    var15 = undefined;
                    var20 = undefined;
                    var36 = undefined;
                    var35 = undefined;
                    var18 = undefined;
                    var28 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=128);
case 4:
                    return var10;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var11 = _closure1_slot11;
                    var5 = var11.getChannel;
                    var4 = var14;
                    var4 = var5.bind(var11)(var4);
                    var19 = var4;
                    var11 = null;
                    var4 = var11 == var4;
                    var5 = undefined;
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var16 = var19;
                    var4 = var16.getGuildId;
                    var5 = var4.bind(var16)();
case 8:
                    var16 = var11 != var5;
                    var4 = undefined;
                    if(!var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var4 = var5;
case 10:
                    var12 = var4;
                    if(!(var11 == var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = var19;
                    var5 = var11 == var4;
                    var4 = undefined;
                    if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var16 = var19;
                    var5 = var16.isPrivate;
                    var4 = var5.bind(var16)();
case 14:
                    if(!(var11 != var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 12:
                    var16 = _closure1_slot5;
                    var5 = var16.getApplication;
                    var4 = var13;
                    var27 = var5.bind(var16)(var4);
                    var5 = var11 != var27;
                    var4 = var5;
                    if(!var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var16 = _closure1_slot0;
                    var29 = _closure1_slot2;
                    var5 = 20;
                    var5 = var29[var5];
                    var16 = var16.bind(var10)(var5);
                    var5 = var16.canLaunchFrame;
                    var4 = var5.bind(var16)(var27);
case 18:
                    var3 = var4;
                    var5 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var4 = 21;
                    var4 = var16[var4];
                    var5 = var5.bind(var10)(var4);
                    var4 = var5.createNonce;
                    var15 = var4.bind(var5)();
case 20: // try_start_0
                    var16 = _closure1_slot8;
                    var5 = var16.getWindowOpen;
                    var4 = _closure1_slot24;
                    var4 = var4.ACTIVITY_POPOUT;
                    var4 = var5.bind(var16)(var4);
                    var5 = _closure1_slot7;
                    var4 = var5.getConnectedFrame;
                    var4 = var4.bind(var5)();
                    var20 = var4;
                    if(!(var11 != var4)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var5 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var4 = 22;
                    var4 = var16[var4];
                    var4 = var5.bind(var10)(var4);
                    var16 = var4.bind(var10)();
                    var5 = var16.leaveFrame;
                    var4 = {};
                    var20 = var20.applicationId;
                    var4['applicationId'] = var20;
                    var4 = var5.bind(var16)(var4);
case 21:
                    var4 = var3;
                    var5 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    if(var4) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var20 = 24;
                    var4 = var16[var20];
                    var29 = var5.bind(var10)(var4);
                    var27 = var29.dispatch;
                    var4 = {};
                    var38 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
                    var4['type'] = var38;
                    var38 = var15;
                    var4['nonce'] = var38;
                    var38 = var13;
                    var4['applicationId'] = var38;
                    var38 = var14;
                    var39 = var11 != var38;
                    var38 = null;
                    if(!var39) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var38 = var14;
case 25:
                    var4['channelId'] = var38;
                    var4['componentId'] = var34;
                    var34 = var33;
                    var4['analyticsLocations'] = var34;
                    var34 = var24;
                    var4['source'] = var34;
                    var34 = var26;
                    var4['commandOrigin'] = var34;
                    var34 = var30;
                    var4['inviterUserId'] = var34;
                    var34 = {};
                    var34['customId'] = var37;
                    var37 = var31;
                    var34['referrerId'] = var37;
                    var4['launchParams'] = var34;
                    var4 = var27.bind(var29)(var4);
                    var29 = _closure1_slot42;
                    var27 = var13;
                    var4 = var14;
                    var34 = var11 != var4;
                    var4 = undefined;
                    if(!var34) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var4 = var14;
case 27:
                    var4 = var29.bind(var10)(var27, var4);
                    SaveGenerator(address=596);
case 29:
                    return var4;
case 30:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=26);
                    if(var27) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var36 = var4;
                    var29 = _closure1_slot1;
                    var27 = _closure1_slot2;
                    var27 = var27[var20];
                    var34 = var29.bind(var10)(var27);
                    var29 = var34.dispatch;
                    var27 = {};
                    var37 = 'EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET';
                    var27['type'] = var37;
                    var37 = var13;
                    var27['applicationId'] = var37;
                    var37 = var14;
                    var38 = var11 != var37;
                    var37 = null;
                    if(!var38) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var37 = var14;
case 33:
                    var27['channelId'] = var37;
                    var27['proxyTicket'] = var36;
                    var27 = var29.bind(var34)(var27);
                    var29 = _closure1_slot14;
                    var27 = var29.getCurrentUser;
                    var27 = var27.bind(var29)();
                    var35 = var27;
                    if(!(var11 != var27)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var29 = _closure1_slot1;
                    var34 = _closure1_slot2;
                    var27 = 25;
                    var27 = var34[var27];
                    var29 = var29.bind(var10)(var27);
                    var27 = {};
                    var34 = var9;
                    var36 = _closure1_slot20;
                    if(var34) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var34 = var36.JOIN;
                    _fun0001_ip = 39; continue _fun0001;
case 37:
                    var34 = var36.LAUNCH;
case 39:
                    var27['type'] = var34;
                    var34 = var35;
                    var36 = var11 == var34;
                    var34 = undefined;
                    if(var36) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                    var34 = var35.id;
case 40:
                    var27['userId'] = var34;
                    var34 = var12;
                    var27['guildId'] = var34;
                    var34 = var14;
                    var27['channelId'] = var34;
                    var34 = var19;
                    var35 = var11 == var34;
                    var34 = undefined;
                    if(var35) { _fun0001_ip = 42; continue _fun0001 }
case 43:
                    var35 = var19;
                    var34 = var35.type;
case 42:
                    var27['channelType'] = var34;
                    var34 = var13;
                    var27['applicationId'] = var34;
                    var27['locationObject'] = var32;
                    var32 = var33;
                    if(!(var11 == var32)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
                    var32 = new Array(0);
                    _fun0001_ip = 46; continue _fun0001;
case 44:
                    var32 = var33;
case 46:
                    var27['analyticsLocations'] = var32;
                    var32 = var24;
                    var27['source'] = var32;
                    var27['referrerId'] = var31;
                    var27['inviterUserId'] = var30;
                    var27 = var29.bind(var10)(var27);
case 35:
                    var27 = var9;
                    if(var27) { _fun0001_ip = 47; continue _fun0001 }
case 48:
                    var29 = {};
                    var27 = var13;
                    var29['applicationId'] = var27;
                    var27 = var14;
                    var29['channelId'] = var27;
                    var27 = var21;
                    var29['embeddedActivitiesManager'] = var27;
                    var27 = var9;
                    var29['isStart'] = var27;
                    var27 = var12;
                    var29['guildId'] = var27;
                    var27 = function joinEmbeddedActivity() {
                        var1 = undefined;
                        var4 = _closure1_slot33;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var27 = var27.bind(var10)(var29);
                    SaveGenerator(address=926);
case 49:
                    return var27;
case 50:
                    ResumeGenerator(result_out_reg=26, return_bool_out_reg=28);
                    if(var29) { _fun0001_ip = 51; continue _fun0001 }
case 52:
                    var28 = var27;
                    var29 = var23;
                    if(!(var11 != var29)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
                    var29 = var23;
                    var29 = var29.bind(var10)();
case 53:
                    var29 = var28;
                    var30 = var29.result;
                    var29 = 'failure';
                    if(!(var29 === var30)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
                    var30 = _closure1_slot1;
                    var32 = _closure1_slot2;
                    var29 = 26;
                    var31 = var32[var29];
                    var31 = var30.bind(var10)(var31);
                    var29 = var32[var29];
                    var29 = var30.bind(var10)(var29);
                    var29 = var29.Reasons;
                    var41 = var29.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                    var40 = var28.reason;
                    var29 = var31.prototype;
                    var29 = Object.create(var29, {constructor: {value: var31}});
                    var42 = var29;
                    var28 = new var42[var31](var41, var40, var39);
                    var28 = var28 instanceof Object ? var28 : var29;
                    throw var28;
case 51: // try_end0
                    return var27;
case 47: // try_start_1
                    var27 = var14;
                    if(!(var11 != var27)) { _fun0001_ip = 57; continue _fun0001 }
case 58:
                    var29 = var13;
                    var30 = var19;
                    var19 = var11 == var30;
                    var27 = undefined;
                    if(var19) { _fun0001_ip = 59; continue _fun0001 }
case 60:
                    var27 = var30.type;
case 59:
                    var19 = _closure1_slot22;
                    var19 = var19.GUILD_VOICE;
                    var19 = var27 === var19;
                    var28 = _closure1_slot5;
                    var27 = var28.getApplication;
                    var27 = var27.bind(var28)(var29);
                    var28 = var11 != var27;
                    if(!var28) { _fun0001_ip = 61; continue _fun0001 }
case 62:
                    var31 = _closure1_slot0;
                    var32 = _closure1_slot2;
                    var29 = 30;
                    var29 = var32[var29];
                    var32 = var31.bind(var10)(var29);
                    var31 = var32.hasFlag;
                    var29 = var27.flags;
                    var27 = _closure1_slot21;
                    var27 = var27.EMBEDDED;
                    var28 = var31.bind(var32)(var29, var27);
case 61:
                    var29 = _closure1_slot0;
                    var31 = _closure1_slot2;
                    var27 = 31;
                    var27 = var31[var27];
                    var29 = var29.bind(var10)(var27);
                    var27 = var29.isActivityInTextSupportedForChannel;
                    var27 = var27.bind(var29)(var30);
                    if(!var19) { _fun0001_ip = 63; continue _fun0001 }
case 64:
                    var19 = var28;
case 63:
                    if(var19) { _fun0001_ip = 65; continue _fun0001 }
case 66:
                    var19 = var27;
case 65:
                    if(!var19) { _fun0001_ip = 57; continue _fun0001 }
case 67:
                    var19 = {};
                    var27 = var13;
                    var19['applicationId'] = var27;
                    var27 = var15;
                    var19['nonce'] = var27;
                    var27 = var14;
                    var19['channelId'] = var27;
                    var27 = var12;
                    var19['guildId'] = var27;
                    var19['commandOrigin'] = var26;
                    var19['sectionName'] = var25;
                    var19['source'] = var24;
                    var19['onExecutedCallback'] = var23;
                    var19['onConfirmActivityLaunchChecksAlertOpen'] = var22;
                    var19['embeddedActivitiesManager'] = var21;
                    var17 = function maybeSendPrimaryAppCommand() {
                        var1 = undefined;
                        var4 = _closure1_slot32;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var17 = var17.bind(var10)(var19);
                    SaveGenerator(address=1277);
case 68:
                    return var17;
case 69:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=18);
                    if(var19) { _fun0001_ip = 70; continue _fun0001 }
case 71:
                    var18 = var17;
                    var21 = var17.result;
                    var19 = 'failure';
                    if(!(var19 !== var21)) { _fun0001_ip = 72; continue _fun0001 }
case 55:
                    var21 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var19 = var19[var20];
                    var22 = var21.bind(var10)(var19);
                    var21 = var22.dispatch;
                    var19 = {};
                    var23 = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
                    var19['type'] = var23;
                    var23 = var15;
                    var19['nonce'] = var23;
                    var23 = var13;
                    var19['applicationId'] = var23;
                    var23 = var14;
                    var24 = var11 != var23;
                    var23 = null;
                    if(!var24) { _fun0001_ip = 73; continue _fun0001 }
case 74:
                    var23 = var14;
case 73:
                    var19['channelId'] = var23;
                    var19 = var21.bind(var22)(var19);
case 75: // try_end1
                    var19 = true;
                    return var19;
case 72: // try_start_2
                    var19 = var18.reason;
                    var18 = _closure1_slot28;
                    var18 = var18.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    if(!(var19 !== var18)) { _fun0001_ip = 76; continue _fun0001 }
case 77:
                    var19 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var18 = 26;
                    var21 = var22[var18];
                    var21 = var19.bind(var10)(var21);
                    var18 = var22[var18];
                    var18 = var19.bind(var10)(var18);
                    var18 = var18.Reasons;
                    var41 = var18.PRIMARY_APP_COMMAND_NOT_FOUND;
                    var19 = var21.prototype;
                    var19 = Object.create(var19, {constructor: {value: var21}});
                    var42 = var19;
                    var18 = new var42[var21](var41, var40);
                    var18 = var18 instanceof Object ? var18 : var19;
                    throw var18;
case 76:
                    var19 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var18 = var18[var20];
                    var20 = var19.bind(var10)(var18);
                    var19 = var20.dispatch;
                    var18 = {};
                    var21 = 'EMBEDDED_ACTIVITY_LAUNCH_CANCEL';
                    var18['type'] = var21;
                    var21 = var15;
                    var18['nonce'] = var21;
                    var21 = var13;
                    var18['applicationId'] = var21;
                    var21 = var14;
                    var22 = var11 != var21;
                    var21 = null;
                    if(!var22) { _fun0001_ip = 78; continue _fun0001 }
case 79:
                    var21 = var14;
case 78:
                    var18['channelId'] = var21;
                    var18 = var19.bind(var20)(var18);
case 80: // try_end2
                    var18 = false;
                    return var18;
case 70:
                    return var17;
case 57: // try_start_3
                    var18 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var17 = 26;
                    var19 = var20[var17];
                    var19 = var18.bind(var10)(var19);
                    var17 = var20[var17];
                    var17 = var18.bind(var10)(var17);
                    var17 = var17.Reasons;
                    var41 = var17.INVALID_CHANNEL;
                    var18 = var19.prototype;
                    var18 = Object.create(var18, {constructor: {value: var19}});
                    var42 = var18;
                    var17 = new var42[var19](var41, var40);
                    var17 = var17 instanceof Object ? var17 : var18;
                    throw var17;
case 31: // try_end3
                    return var4;
case 23: // try_start_4
                    var4 = 23;
                    var4 = var16[var4];
                    var16 = var5.bind(var10)(var4);
                    var5 = var16.launchFrame;
                    var4 = {};
                    var17 = var13;
                    var4['applicationId'] = var17;
                    var4 = var5.bind(var16)(var4);
                    SaveGenerator(address=1643);
case 81:
                    return var4;
case 82:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 83; continue _fun0001 }
case 84: // try_end4
                    var5 = true;
                    return var5;
case 83:
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
                    var3 = 27;
                    var3 = var5[var3];
                    var3 = var4.bind(var10)(var3);
                    var3 = var3.EmbeddedActivityLocationKind;
                    var3 = var3.PRIVATE_CHANNEL;
                    _fun0001_ip = 90; continue _fun0001;
case 88:
                    var5 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var4 = 27;
                    var4 = var16[var4];
                    var4 = var5.bind(var10)(var4);
                    var4 = var4.EmbeddedActivityLocationKind;
                    var3 = var4.GUILD_CHANNEL;
case 90:
                    var6 = var3;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 24;
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
                    var9 = 26;
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
                    var41 = var8;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var42 = var9;
                    var7 = new var42[var10](var41, var40);
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
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
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
                    var22 = _closure1_slot25;
                    var21 = var22.includes;
                    var20 = var17;
                    var20 = var21.bind(var22)(var20);
                    if(var20) { _fun0002_ip = 111; continue _fun0002 }
case 113:
                    var20 = var10;
                    if(!(var9 != var20)) { _fun0002_ip = 114; continue _fun0002 }
case 18:
                    var21 = _closure1_slot4;
                    var20 = {};
                    var22 = 'channel';
                    var20['type'] = var22;
                    var22 = var10;
                    var20['channelId'] = var22;
                    var20 = var21.bind(var8)(var20);
                    SaveGenerator(address=330);
case 115:
                    return var20;
case 116:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=20);
                    if(var21) { _fun0002_ip = 117; continue _fun0002 }
case 114:
                    var22 = _closure1_slot4;
                    var21 = {};
                    var23 = 'user';
                    var21['type'] = var23;
                    var21 = var22.bind(var8)(var21);
                    SaveGenerator(address=362);
case 118:
                    return var21;
case 119:
                    ResumeGenerator(result_out_reg=20, return_bool_out_reg=21);
                    if(var22) { _fun0002_ip = 120; continue _fun0002 }
case 121:
                    var24 = _closure1_slot11;
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
case 122:
                    return var22;
case 123:
                    ResumeGenerator(result_out_reg=21, return_bool_out_reg=22);
                    if(var23) { _fun0002_ip = 124; continue _fun0002 }
case 125:
                    var23 = var22.isAuthorized;
                    if(var23) { _fun0002_ip = 111; continue _fun0002 }
case 126:
                    var23 = {};
                    var24 = 'failure';
                    var23['result'] = var24;
                    var24 = _closure1_slot28;
                    var24 = var24.UNAUTHORIZED;
                    var23['reason'] = var24;
                    return var23;
case 124:
                    return var22;
case 120:
                    return var21;
case 117:
                    return var20;
case 111:
                    var21 = _closure1_slot11;
                    var20 = var21.getChannel;
                    var10 = var20.bind(var21)(var10);
                    var15 = var10;
                    _closure4_slot9 = var10;
                    var10 = var18;
                    var20 = var9 != var10;
                    var10 = null;
                    if(!var20) { _fun0002_ip = 127; continue _fun0002 }
case 128:
                    var21 = _closure1_slot12;
                    var20 = var21.getGuild;
                    var10 = var20.bind(var21)(var18);
case 127:
                    _closure4_slot10 = var10;
                    var10 = var15;
                    if(!(var9 != var10)) { _fun0002_ip = 129; continue _fun0002 }
case 130:
                    if(!var5) { _fun0002_ip = 131; continue _fun0002 }
case 132:
                    var18 = _closure1_slot5;
                    var10 = var18.getApplication;
                    var5 = var17;
                    var16 = var10.bind(var18)(var5);
                    var10 = _closure1_slot16;
                    var5 = var10.getCurrentEmbeddedActivity;
                    var5 = var5.bind(var10)();
                    var19 = var5;
                    var14 = undefined;
                    var10 = var9 == var5;
                    var5 = undefined;
                    if(var10) { _fun0002_ip = 133; continue _fun0002 }
case 134:
                    var10 = var19;
                    var5 = var10.applicationId;
case 133:
                    if(!(var9 != var5)) { _fun0002_ip = 135; continue _fun0002 }
case 136:
                    var18 = _closure1_slot5;
                    var10 = var18.getApplication;
                    var5 = var19;
                    var20 = var9 == var5;
                    var5 = undefined;
                    if(var20) { _fun0002_ip = 137; continue _fun0002 }
case 138:
                    var5 = var19.applicationId;
case 137:
                    var14 = var10.bind(var18)(var5);
case 135:
                    var10 = _closure1_slot14;
                    var5 = var10.getCurrentUser;
                    var5 = var5.bind(var10)();
                    var12 = var5;
                    if(!(var9 != var5)) { _fun0002_ip = 131; continue _fun0002 }
case 139:
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
                    SaveGenerator(address=752);
case 140:
                    return var5;
case 141:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 142; continue _fun0002 }
case 143:
                    if(var5) { _fun0002_ip = 131; continue _fun0002 }
case 41:
                    var9 = {};
                    var10 = 'failure';
                    var9['result'] = var10;
                    var10 = _closure1_slot28;
                    var10 = var10.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    var9['reason'] = var10;
                    return var9;
case 131:
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
                                    if(!(var2 != var3)) { _fun0003_ip = 144; continue _fun0003 }
case 145:
                                    var2 = _closure4_slot7;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 144:
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
                                    if(!(var3 != var1)) { _fun0004_ip = 146; continue _fun0004 }
case 147:
                                    var2 = _closure4_slot7;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 146:
                                    var8 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 37;
                                    var5 = var5[var1];
                                    var1 = undefined;
                                    var11 = var8.bind(var1)(var5);
                                    var10 = var11.track;
                                    var5 = _closure1_slot19;
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
                                    if(var14) { _fun0004_ip = 148; continue _fun0004 }
case 149:
                                    var14 = _closure4_slot9;
                                    var13 = var14.type;
case 148:
                                    var5['channel_type'] = var13;
                                    var5['error_code'] = var6;
                                    var5['error_message'] = var7;
                                    var5['error_status'] = var4;
                                    var5['error_reason_code'] = var9;
                                    var12 = _closure4_slot6;
                                    var5['source'] = var12;
                                    var5 = var10.bind(var11)(var8, var5);
                                    if(!(var3 != var6)) { _fun0004_ip = 150; continue _fun0004 }
case 151:
                                    if(!(var3 != var7)) { _fun0004_ip = 150; continue _fun0004 }
case 152:
                                    if(!(var3 == var4)) { _fun0004_ip = 153; continue _fun0004 }
case 150:
                                    if(!(var3 != var9)) { _fun0004_ip = 154; continue _fun0004 }
case 8:
                                    var5 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var10 = 29;
                                    var3 = var3[var10];
                                    var3 = var5.bind(var1)(var3);
                                    var3 = var3.ReasonCodes;
                                    var3 = var9 in var3;
                                    if(var3) { _fun0004_ip = 155; continue _fun0004 }
case 154:
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
                                    _fun0004_ip = 156; continue _fun0004;
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
                                    _fun0004_ip = 156; continue _fun0004;
case 153:
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
case 156:
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
case 157:
                    return var7;
case 158:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 159; continue _fun0002 }
case 160:
                    var9 = {};
                    var10 = 'success';
                    var9['result'] = var10;
                    return var9;
case 159:
                    return var7;
case 142:
                    return var5;
case 129:
                    var5 = {};
                    var7 = 'failure';
                    var5['result'] = var7;
                    var6 = _closure1_slot28;
                    var6 = var6.NO_CHANNEL;
                    var5['reason'] = var6;
                    return var5;
case 108:
                    return var4;
case 161: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = var4;
                    var6 = var4.message;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 32;
                    var5 = var9[var5];
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.NO_PRIMARY_APP_COMMAND_ERROR;
                    if(!(var6 !== var5)) { _fun0002_ip = 162; continue _fun0002 }
case 163:
                    throw var3;
case 162:
                    var3 = {};
                    var5 = 'failure';
                    var3['result'] = var5;
                    var4 = _closure1_slot28;
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
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
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
                    if(var3) { _fun0005_ip = 164; continue _fun0005 }
case 145:
                    var21 = var2.applicationId;
                    var20 = var2.channelId;
                    var14 = var2.embeddedActivitiesManager;
                    var5 = var2.isStart;
                    var17 = var2.guildId;
                    var9 = undefined;
                    SaveGenerator(address=46);
case 165:
                    return var9;
case 166:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 167; continue _fun0005 }
case 168:
                    var6 = _closure1_slot10;
                    var3 = var6.getSessionId;
                    var18 = var3.bind(var6)();
                    var6 = _closure1_slot14;
                    var3 = var6.getCurrentUser;
                    var13 = var3.bind(var6)();
                    var16 = null;
                    if(!(var16 != var21)) { _fun0005_ip = 169; continue _fun0005 }
case 170:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 38;
                    var3 = var7[var3];
                    var3 = var6.bind(var9)(var3);
                    var3 = var3.bind(var9)(var21, var20);
                    SaveGenerator(address=124);
case 171:
                    return var3;
case 148:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 172; continue _fun0005 }
case 173:
                    if(!(var16 != var13)) { _fun0005_ip = 174; continue _fun0005 }
case 175:
                    if(!(var16 != var3)) { _fun0005_ip = 174; continue _fun0005 }
case 176:
                    if(!(var16 != var20)) { _fun0005_ip = 177; continue _fun0005 }
case 178:
                    var7 = _closure1_slot11;
                    var6 = var7.getChannel;
                    var12 = var6.bind(var7)(var20);
                    if(!(var16 != var12)) { _fun0005_ip = 179; continue _fun0005 }
case 180:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var10 = 39;
                    var7 = var6[var10];
                    var15 = var8.bind(var9)(var7);
                    var11 = var15.getEmbeddedActivityLaunchability;
                    var7 = {};
                    var7['channelId'] = var20;
                    var19 = _closure1_slot11;
                    var7['ChannelStore'] = var19;
                    var19 = _closure1_slot12;
                    var7['GuildStore'] = var19;
                    var19 = _closure1_slot13;
                    var7['PermissionStore'] = var19;
                    var19 = _closure1_slot15;
                    var7['VoiceStateStore'] = var19;
                    var7 = var11.bind(var15)(var7);
                    var6 = var6[var10];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.EmbeddedActivityLaunchability;
                    var6 = var6.CAN_LAUNCH;
                    if(!(var7 === var6)) { _fun0005_ip = 181; continue _fun0005 }
case 182:
                    var8 = _closure1_slot16;
                    var6 = var8.getCurrentEmbeddedActivity;
                    var19 = var6.bind(var8)();
                    var8 = var16 == var19;
                    var6 = undefined;
                    if(var8) { _fun0005_ip = 183; continue _fun0005 }
case 184:
                    var6 = var19.applicationId;
case 183:
                    var6 = var16 != var6;
                    var11 = undefined;
                    if(!var6) { _fun0005_ip = 185; continue _fun0005 }
case 186:
                    var15 = _closure1_slot5;
                    var8 = var15.getApplication;
                    var22 = var16 == var19;
                    var6 = undefined;
                    if(var22) { _fun0005_ip = 187; continue _fun0005 }
case 188:
                    var6 = var19.applicationId;
case 187:
                    var11 = var8.bind(var15)(var6);
case 185:
                    if(!var5) { _fun0005_ip = 189; continue _fun0005 }
case 190:
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
case 191:
                    return var5;
case 192:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 193; continue _fun0005 }
case 194:
                    if(var5) { _fun0005_ip = 189; continue _fun0005 }
case 195:
                    var6 = {};
                    var8 = 'failure';
                    var6['result'] = var8;
                    var8 = _closure1_slot29;
                    var8 = var8.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    var6['reason'] = var8;
                    return var6;
case 189:
                    if(!(var16 != var12)) { _fun0005_ip = 196; continue _fun0005 }
case 197:
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var6 = 43;
                    var6 = var13[var6];
                    var8 = var8.bind(var9)(var6);
                    var6 = var12.id;
                    var8 = var8.bind(var9)(var6);
                    var14 = _closure1_slot17;
                    var13 = var14.includes;
                    var6 = var12.type;
                    var6 = var13.bind(var14)(var6);
                    if(var8) { _fun0005_ip = 198; continue _fun0005 }
case 199:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 31;
                    var8 = var14[var8];
                    var13 = var13.bind(var9)(var8);
                    var8 = var13.isActivitiesInTextEnabled;
                    var8 = var8.bind(var13)(var12);
                    if(!var8) { _fun0005_ip = 200; continue _fun0005 }
case 201:
                    if(var6) { _fun0005_ip = 196; continue _fun0005 }
case 200:
                    var6 = {};
                    var8 = 'failure';
                    var6['result'] = var8;
                    var8 = _closure1_slot29;
                    var8 = var8.AIT_NOT_ENABLED_FOR_USER;
                    var6['reason'] = var8;
                    return var6;
case 198:
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
case 133:
                    return var6;
case 202:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0005_ip = 203; continue _fun0005 }
case 204:
                    if(var6) { _fun0005_ip = 196; continue _fun0005 }
case 205:
                    var8 = {};
                    var11 = 'failure';
                    var8['result'] = var11;
                    var11 = _closure1_slot29;
                    var11 = var11.NOT_CONNECTED_TO_VOICE_CHANNEL;
                    var8['reason'] = var11;
                    return var8;
case 196:
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
case 141:
                    var11 = {};
                    var8 = 'failure';
                    var11['result'] = var8;
                    var8 = _closure1_slot29;
                    var8 = var8.OTHER;
                    var11['reason'] = var8;
                    _fun0005_ip = 207; continue _fun0005;
case 206:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 46;
                    var8 = var13[var8];
                    var13 = var12.bind(var9)(var8);
                    var12 = var13.post;
                    var8 = {};
                    var19 = _closure1_slot23;
                    var15 = var19.ACTIVITY_CHANNEL_LAUNCH;
                    var15 = var15.bind(var19)(var20, var21);
                    var8['url'] = var15;
                    var15 = {};
                    var15['session_id'] = var18;
                    var18 = var16 != var17;
                    var16 = undefined;
                    if(!var18) { _fun0005_ip = 159; continue _fun0005 }
case 208:
                    var16 = var17;
case 159:
                    var15['guild_id'] = var16;
                    var8['body'] = var15;
                    var24 = var8;
                    var23 = var14;
                    var14 = copyDataProperties(var24, var23);
                    var8 = var12.bind(var13)(var8);
                    SaveGenerator(address=874);
case 209:
                    return var8;
case 210:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(var12) { _fun0005_ip = 211; continue _fun0005 }
case 212:
                    var12 = {};
                    var13 = 'success';
                    var12['result'] = var13;
                    var11 = var12;
case 207:
                    return var11;
case 211:
                    return var8;
case 203:
                    return var6;
case 193:
                    return var5;
case 181:
                    var5 = _closure1_slot29;
                    var6 = var5.LAUNCHABILITY_CHECK_FAILED_OTHER;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.EmbeddedActivityLaunchability;
                    var5 = var5.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    if(!(var7 !== var5)) { _fun0005_ip = 213; continue _fun0005 }
case 214:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.EmbeddedActivityLaunchability;
                    var5 = var5.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    if(!(var7 === var5)) { _fun0005_ip = 215; continue _fun0005 }
case 216:
                    var5 = _closure1_slot29;
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
                    _fun0005_ip = 215; continue _fun0005;
case 213:
                    var5 = _closure1_slot29;
                    var6 = var5.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 40;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.showActivitiesInvalidPermissionsAlert;
                    var7 = var7.bind(var8)();
case 215:
                    var5 = {};
                    var7 = 'failure';
                    var5['result'] = var7;
                    var5['reason'] = var6;
                    return var5;
case 179:
                    var5 = {};
                    var6 = 'failure';
                    var5['result'] = var6;
                    var6 = _closure1_slot29;
                    var6 = var6.INVALID_CHANNEL;
                    var5['reason'] = var6;
                    return var5;
case 177:
                    var5 = {};
                    var6 = 'failure';
                    var5['result'] = var6;
                    var6 = _closure1_slot29;
                    var6 = var6.INVALID_CHANNEL;
                    var5['reason'] = var6;
                    return var5;
case 174:
                    var5 = {};
                    var6 = 'failure';
                    var5['result'] = var6;
                    var6 = _closure1_slot29;
                    var6 = var6.UNKNOWN_USER_OR_APPLICATION;
                    var5['reason'] = var6;
                    return var5;
case 172:
                    return var3;
case 169:
                    var3 = {};
                    var5 = 'failure';
                    var3['result'] = var5;
                    var4 = _closure1_slot29;
                    var4 = var4.NO_APPLICATION_ID;
                    var3['reason'] = var4;
                    return var3;
case 167:
                    return var2;
case 164:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot33 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var6 = function stopEmbeddedActivity(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.location;
            var9 = var1.applicationId;
            var _closure2_slot0 = var9;
            var10 = var1.showFeedback;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0006_ip = 217; continue _fun0006 }
case 218:
            var10 = true;
case 217:
            var5 = _closure1_slot16;
            var4 = var5.getSelfEmbeddedActivityForLocation;
            var12 = var4.bind(var5)(var7);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 24;
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
            if(var13) { _fun0006_ip = 219; continue _fun0006 }
case 220:
            var11 = var12.launchId;
case 219:
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
            if(!(var5 != var4)) { _fun0006_ip = 190; continue _fun0006 }
case 221:
            var7 = _closure1_slot6;
            var6 = var7.getSelectedParticipantId;
            var6 = var6.bind(var7)(var4);
            var8 = _closure1_slot14;
            var7 = var8.getCurrentUser;
            var8 = var7.bind(var8)();
            var10 = var5 == var8;
            var7 = undefined;
            if(var10) { _fun0006_ip = 222; continue _fun0006 }
case 223:
            var7 = var8.id;
case 222:
            var10 = _closure1_slot16;
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
            if(!(var5 != var10)) { _fun0006_ip = 224; continue _fun0006 }
case 225:
            if(!(var5 != var7)) { _fun0006_ip = 224; continue _fun0006 }
case 226:
            var3 = '';
            if(!(var3 !== var7)) { _fun0006_ip = 224; continue _fun0006 }
case 227:
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
            if(var11) { _fun0006_ip = 184; continue _fun0006 }
case 113:
            var9 = var10.compositeInstanceId;
case 184:
            var3['instanceId'] = var9;
            var3 = var7.bind(var8)(var3);
            if(!(var6 === var3)) { _fun0006_ip = 190; continue _fun0006 }
case 186:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 49;
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.selectParticipant;
            var2 = var2.bind(var3)(var4, var5);
case 190:
            return var1;
case 224:
            return var1;
        }
    };
    var _closure1_slot34 = var6;
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
                    if(var2) { _fun0007_ip = 228; continue _fun0007 }
case 229: // try_start_0
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var7 = 24;
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
case 230:
                    return var2;
case 231:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 232; continue _fun0007 }
case 233:
                    var4 = var2.body;
                    var6 = var4.applications;
                    var8 = var6.map;
                    var4 = function(arg1) {
                        var3 = _closure1_slot9;
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
case 234: // try_end0
                    _fun0007_ip = 235; continue _fun0007;
case 232:
                    return var2;
case 236: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
case 235:
                    var2 = undefined;
                    return var2;
case 228:
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
                    if(var2) { _fun0008_ip = 237; continue _fun0008 }
case 229:
                    var10 = arg1;
                    var4 = arg2;
                    var8 = arg3;
case 238: // try_start_0
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 24;
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
                    if(!var2) { _fun0008_ip = 239; continue _fun0008 }
case 240:
                    var2 = {};
                    var2['channel_id'] = var4;
                    var9 = var2;
case 239:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 50;
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
case 241:
                    return var2;
case 242:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 232; continue _fun0008 }
case 243:
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
case 244: // try_end0
                    return var3;
case 232:
                    return var2;
case 236: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 24;
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
case 237:
                    return var1;
                }
            };
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
                    if(var3) { _fun0009_ip = 245; continue _fun0009 }
case 3:
                    var6 = var2.guildId;
                    var8 = var6;
                    var _closure4_slot0 = var6;
                    var6 = var2.force;
                    var7 = undefined;
                    if(!(var6 === var7)) { _fun0009_ip = 246; continue _fun0009 }
case 247:
                    var6 = false;
case 246:
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
case 248:
                    return var7;
case 249:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 250; continue _fun0009 }
case 251:
                    var16 = _closure1_slot16;
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
                    if(var6) { _fun0009_ip = 197; continue _fun0009 }
case 252:
                    var14 = _closure1_slot16;
                    var13 = var14.shouldFetchShelf;
                    var6 = var8;
                    var6 = var13.bind(var14)(var6);
                    if(var6) { _fun0009_ip = 197; continue _fun0009 }
case 253:
                    var14 = _closure1_slot16;
                    var13 = var14.getShelfFetchStatus;
                    var6 = var8;
                    var6 = var13.bind(var14)(var6);
                    var13 = null;
                    if(!(var13 != var6)) { _fun0009_ip = 254; continue _fun0009 }
case 255:
                    var6 = var6.isFetching;
                    if(!var6) { _fun0009_ip = 254; continue _fun0009 }
case 256:
                    var6 = global;
                    var17 = var6.Promise;
                    var14 = var17.prototype;
                    var16 = Object.create(var14, {constructor: {value: var17}});
                    var24 = function(arg1) {
                        var7 = _closure1_slot30;
                        var6 = var7.bind;
                        var5 = _closure4_slot0;
                        var4 = null;
                        var3 = arg1;
                        var3 = var6.bind(var7)(var4, var5, var3);
                        _closure4_slot1 = var3;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 24;
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
                        var7 = _closure1_slot30;
                        var6 = var7.bind;
                        var5 = _closure4_slot0;
                        var4 = null;
                        var3 = arg1;
                        var3 = var6.bind(var7)(var4, var5, var3);
                        _closure4_slot2 = var3;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 24;
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
case 257:
                    return var6;
case 258:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=13);
                    if(var14) { _fun0009_ip = 125; continue _fun0009 }
case 115:
                    var14 = _closure4_slot1;
                    if(!(var13 != var14)) { _fun0009_ip = 259; continue _fun0009 }
case 260:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 24;
                    var14 = var17[var14];
                    var20 = var16.bind(var7)(var14);
                    var17 = var20.unsubscribe;
                    var16 = _closure4_slot1;
                    var14 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                    var14 = var17.bind(var20)(var14, var16);
                    _closure4_slot1 = var13;
case 259:
                    var14 = _closure4_slot2;
                    if(!(var13 != var14)) { _fun0009_ip = 254; continue _fun0009 }
case 261:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 24;
                    var14 = var17[var14];
                    var20 = var16.bind(var7)(var14);
                    var17 = var20.unsubscribe;
                    var16 = _closure4_slot2;
                    var14 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                    var14 = var17.bind(var20)(var14, var16);
                    _closure4_slot2 = var13;
case 254:
                    var13 = {};
                    var14 = var5;
                    var13['activityConfigs'] = var14;
                    var14 = var4;
                    var13['applications'] = var14;
                    return var13;
case 125:
                    return var6;
case 197: // try_start_0
                    var13 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var14 = 24;
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
                    if(!(var7 !== var6)) { _fun0009_ip = 262; continue _fun0009 }
case 263:
                    var16 = var8;
                    var6 = '';
                    var13 = undefined;
                    if(!(var6 !== var16)) { _fun0009_ip = 262; continue _fun0009 }
case 264:
                    var6 = {};
                    var16 = var8;
                    var6['guild_id'] = var16;
                    var13 = var6;
case 262:
                    var16 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var6 = 46;
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
                    SaveGenerator(address=661);
case 34:
                    return var6;
case 265:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=15);
                    if(var16) { _fun0009_ip = 266; continue _fun0009 }
case 267:
                    var15 = var6;
                    var16 = var6.body;
                    var17 = var16.activities;
                    var19 = var17;
                    var16 = null;
                    if(!(var16 == var17)) { _fun0009_ip = 36; continue _fun0009 }
case 268:
                    var17 = new Array(0);
                    _fun0009_ip = 269; continue _fun0009;
case 36:
                    var17 = var19;
case 269:
                    var12 = var17;
                    var17 = var15;
                    var17 = var17.body;
                    var17 = var17.applications;
                    var18 = var17;
                    if(!(var16 == var17)) { _fun0009_ip = 270; continue _fun0009 }
case 271:
                    var17 = new Array(0);
                    _fun0009_ip = 272; continue _fun0009;
case 270:
                    var17 = var18;
case 272:
                    var11 = var17;
                    var15 = var15.body;
                    var15 = var15.assets;
                    var9 = var15;
                    if(!(var16 == var15)) { _fun0009_ip = 273; continue _fun0009 }
case 274:
                    var18 = {};
                    _fun0009_ip = 275; continue _fun0009;
case 273:
                    var18 = var9;
case 275:
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
                    if(!(var9 > var13)) { _fun0009_ip = 108; continue _fun0009 }
case 46:
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
case 108:
                    var9 = {};
                    var9['activityConfigs'] = var12;
                    var12 = var11;
                    var11 = var12.map;
                    var10 = function(arg1) {
                        var3 = _closure1_slot9;
                        var2 = var3.createFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10 = var11.bind(var12)(var10);
                    var9['applications'] = var10;
case 276: // try_end0
                    return var9;
case 266:
                    return var6;
case 277: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 24;
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
case 250:
                    return var2;
case 245:
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
                    if(var3) { _fun0010_ip = 278; continue _fun0010 }
case 145:
                    var11 = var2.activityChannelId;
                    var10 = var2.invitedChannelId;
                    var12 = var2.applicationId;
                    var9 = var2.location;
                    var8 = var2.inviteAnalyticsMetadata;
                    var4 = undefined;
                    SaveGenerator(address=49);
case 279:
                    return var4;
case 280:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 281; continue _fun0010 }
case 282:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 52;
                    var3 = var7[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.createInvite;
                    var3 = {};
                    var13 = _closure1_slot27;
                    var13 = var13.EMBEDDED_APPLICATION;
                    var3['target_type'] = var13;
                    var3['target_application_id'] = var12;
                    var3 = var6.bind(var7)(var11, var3, var9);
                    SaveGenerator(address=120);
case 283:
                    return var3;
case 284:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 10; continue _fun0010 }
case 4:
                    var7 = _closure1_slot11;
                    var6 = var7.getChannel;
                    var7 = var6.bind(var7)(var10);
                    var6 = null;
                    if(!(var6 != var7)) { _fun0010_ip = 11; continue _fun0010 }
case 285:
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
case 11:
                    return var4;
case 10:
                    return var3;
case 281:
                    return var2;
case 278:
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
                    if(var3) { _fun0011_ip = 286; continue _fun0011 }
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
case 248:
                    return var5;
case 249:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 15; continue _fun0011 }
case 251:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 52;
                    var3 = var9[var3];
                    var9 = var7.bind(var5)(var3);
                    var7 = var9.createInvite;
                    var3 = {};
                    var13 = _closure1_slot27;
                    var13 = var13.EMBEDDED_APPLICATION;
                    var3['target_type'] = var13;
                    var3['target_application_id'] = var12;
                    var3 = var7.bind(var9)(var11, var3, var10);
                    SaveGenerator(address=140);
case 287:
                    return var3;
case 175:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0011_ip = 288; continue _fun0011 }
case 285:
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
                            var2 = _closure1_slot11;
                            var1 = var2.getChannel;
                            var9 = var1.bind(var2)(var8);
                            var4 = null;
                            if(!(var4 != var9)) { _fun0012_ip = 289; continue _fun0012 }
case 290:
                            var1 = _closure4_slot2;
                            var4 = var4 != var1;
                            var1 = undefined;
                            var7 = undefined;
                            if(!var4) { _fun0012_ip = 291; continue _fun0012 }
case 165:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 55;
                            var4 = var6[var4];
                            var6 = var5.bind(var1)(var4);
                            var5 = var6.parse;
                            var4 = _closure4_slot2;
                            var4 = var5.bind(var6)(var9, var4);
                            var7 = var4.content;
case 291:
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
case 289:
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
                    SaveGenerator(address=200);
case 106:
                    return var4;
case 107:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0011_ip = 109; continue _fun0011 }
case 222:
                    return var5;
case 109:
                    return var4;
case 288:
                    return var3;
case 15:
                    return var2;
case 286:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
                    if(var2) { _fun0013_ip = 292; continue _fun0013 }
case 293:
                    var5 = undefined;
                    var3 = undefined;
                    var7 = _closure1_slot23;
                    var6 = var7.ACTIVITY_TEST_MODE;
                    var4 = arg1;
                    var3 = var6.bind(var7)(var4);
case 294: // try_start_0
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
case 295:
                    return var2;
case 239:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 296; continue _fun0013 }
case 297: // try_end0
                    return var3;
case 296:
                    return var2;
case 298: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
case 292:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot40 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot40 = var1;
    var5 = function updateActivityPanelMode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 24;
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
    var _closure1_slot41 = var5;
    var4 = function createProxyTicket() {
        var1 = undefined;
        var4 = _closure1_slot43;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot42 = var4;
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
                    if(var3) { _fun0014_ip = 4; continue _fun0014 }
case 229:
                    var5 = {};
                    var3 = null;
                    if(!(var3 != var2)) { _fun0014_ip = 299; continue _fun0014 }
case 300:
                    var5['channel_id'] = var2;
case 299:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 50;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot23;
                    var7 = var8.APPLICATION_PROXY_TICKET;
                    var6 = arg1;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=103);
case 298:
                    return var2;
case 301:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 302; continue _fun0014 }
case 303:
                    var3 = var2.body;
                    var3 = var3.ticket;
                    return var3;
case 302:
                    return var2;
case 4:
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
                    if(var2) { _fun0015_ip = 304; continue _fun0015 }
case 145:
                    var6 = var4;
                    var14 = arg2;
                    var5 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var11 = undefined;
                    var12 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 24;
                    var2 = var2[var7];
                    var13 = var12.bind(var5)(var2);
                    var12 = var13.dispatch;
                    var2 = {'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING', 'applicationId': null, 'refreshing': true};
                    var2['applicationId'] = var4;
                    var4 = true;
                    var2 = var12.bind(var13)(var2);
case 305: // try_start_0 // try_start_1
                    var13 = _closure1_slot42;
                    var12 = var6;
                    var15 = var14;
                    var2 = null;
                    var15 = var2 != var15;
                    var2 = undefined;
                    if(!var15) { _fun0015_ip = 306; continue _fun0015 }
case 301:
                    var2 = var14;
case 306:
                    var2 = var13.bind(var5)(var12, var2);
                    SaveGenerator(address=116);
case 307:
                    return var2;
case 308:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=11);
                    if(var12) { _fun0015_ip = 309; continue _fun0015 }
case 310:
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
case 311: // try_end0 // try_end1
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
case 309:
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
case 312: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=9);
                    var12 = _closure1_slot11;
                    var4 = var12.getChannel;
                    var2 = var14;
                    var2 = var4.bind(var12)(var2);
                    var9 = var2;
                    var4 = null;
                    var12 = var4 == var2;
                    var2 = undefined;
                    if(var12) { _fun0015_ip = 313; continue _fun0015 }
case 314:
                    var2 = var9.guild_id;
case 313:
                    var8 = var2;
                    var9 = var4 != var2;
                    var2 = null;
                    if(!var9) { _fun0015_ip = 315; continue _fun0015 }
case 316:
                    var2 = var8;
case 315:
                    var11 = var2;
                    if(!(var4 == var2)) { _fun0015_ip = 317; continue _fun0015 }
case 318:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 27;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.EmbeddedActivityLocationKind;
                    var9 = var2.PRIVATE_CHANNEL;
                    _fun0015_ip = 319; continue _fun0015;
case 317:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 27;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.EmbeddedActivityLocationKind;
                    var9 = var2.GUILD_CHANNEL;
case 319:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = var13[var7];
                    var8 = var12.bind(var5)(var2);
                    var4 = var8.dispatch;
                    var2 = {};
                    var15 = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
                    var2['type'] = var15;
                    var16 = _closure1_slot0;
                    var15 = 21;
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
                    var9 = 26;
                    var9 = var13[var9];
                    var9 = var12.bind(var5)(var9);
                    var9 = var11 instanceof var9;
                    if(var9) { _fun0015_ip = 320; continue _fun0015 }
case 321:
                    var11 = var10;
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var12 = 28;
                    var9 = var9[var12];
                    var9 = var13.bind(var5)(var9);
                    var9 = var11 instanceof var9;
                    if(var9) { _fun0015_ip = 320; continue _fun0015 }
case 27:
                    var11 = var10;
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 29;
                    var9 = var14[var9];
                    var9 = var13.bind(var5)(var9);
                    var9 = var11 instanceof var9;
                    if(var9) { _fun0015_ip = 320; continue _fun0015 }
case 322:
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
                    _fun0015_ip = 265; continue _fun0015;
case 320:
                    var9 = var10;
case 265:
                    var2['error'] = var9;
                    var2 = var4.bind(var8)(var2);
case 267: // try_end2
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
case 323: // catch_target1 // catch_target2
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
case 304:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot44 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot44 = var1;
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
    var7 = var10.bind(var1)(var7);
    var _closure1_slot16 = var7;
    var7 = 14;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
    var _closure1_slot17 = var7;
    var7 = 15;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ActivityPanelModes;
    var _closure1_slot18 = var7;
    var7 = 16;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.AnalyticEvents;
    var _closure1_slot19 = var10;
    var10 = var7.AnalyticsGameOpenTypes;
    var _closure1_slot20 = var10;
    var10 = var7.ApplicationFlags;
    var _closure1_slot21 = var10;
    var10 = var7.ChannelTypes;
    var _closure1_slot22 = var10;
    var10 = var7.Endpoints;
    var _closure1_slot23 = var10;
    var7 = var7.PopoutWindowKeys;
    var _closure1_slot24 = var7;
    var7 = 17;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.INSTALL_LESS_APP_IDS;
    var _closure1_slot25 = var7;
    var7 = 18;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot26 = var7;
    var7 = 19;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.InviteTargetTypes;
    var _closure1_slot27 = var7;
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
    var _closure1_slot28 = var7;
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
    var _closure1_slot29 = var7;
    var7 = function handleFetchDone(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var1 = arg3;
            var2 = var1.guildId;
            var1 = var2 === var4;
            if(var1) { _fun0016_ip = 324; continue _fun0016 }
case 300:
            var3 = null;
            var2 = var3 == var2;
            if(!var2) { _fun0016_ip = 218; continue _fun0016 }
case 325:
            var2 = var3 == var4;
case 218:
            var1 = var2;
case 324:
            if(!var1) { _fun0016_ip = 166; continue _fun0016 }
case 326:
            var2 = arg2;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 166:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var7;
    var7 = 58;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/activities/EmbeddedActivitiesActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function maybeDisconnectFromCurrentActivity(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = _closure1_slot16;
            var3 = var4.getSelfEmbeddedActivityForLocation;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var1)) { _fun0017_ip = 327; continue _fun0017 }
case 325:
            var3 = _closure1_slot34;
            var2 = {};
            var4 = var1.location;
            var2['location'] = var4;
            var1 = var1.applicationId;
            var2['applicationId'] = var1;
            var1 = false;
            var2['showFeedback'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 327:
            var1 = undefined;
            return var1;
        }
    };
    var3['maybeDisconnectFromCurrentActivity'] = var7;
    var7 = function runPrimaryAppCommandOrJoinEmbeddedActivity() {
        var1 = undefined;
        var4 = _closure1_slot31;
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
        var1 = 24;
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
        var1 = 24;
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
        var1 = 24;
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
        var4 = _closure1_slot35;
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
        var4 = _closure1_slot36;
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
        var4 = _closure1_slot37;
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
        var4 = _closure1_slot38;
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
        var4 = _closure1_slot39;
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
            if(!(var7 === var1)) { _fun0018_ip = 328; continue _fun0018 }
case 329:
            var2 = _closure1_slot26;
            var7 = var2.INDIRECT_ACTION;
case 328:
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
        var4 = _closure1_slot40;
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
        var1 = 24;
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
        var4 = _closure1_slot41;
        var1 = _closure1_slot18;
        var3 = var1.ACTIVITY_POPOUT_WINDOW;
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 24;
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
        var1 = 24;
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
        var4 = _closure1_slot44;
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