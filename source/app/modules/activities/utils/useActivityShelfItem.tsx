// app/modules/activities/utils/useActivityShelfItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var5 = function getStaffReleasePhase(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.flags;
            var2 = null;
            var2 = var2 != var1;
            var4 = 0;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1;
case 2:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 10;
            var3 = var1[var5];
            var1 = undefined;
            var7 = var6.bind(var1)(var3);
            var6 = var7.hasFlag;
            var3 = _closure1_slot6;
            var3 = var3.EMBEDDED_RELEASED;
            var3 = var6.bind(var7)(var4, var3);
            var6 = var4;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var5 = var4.bind(var1)(var3);
            var4 = var5.hasFlag;
            var3 = _closure1_slot6;
            var3 = var3.EMBEDDED_FIRST_PARTY;
            var3 = var4.bind(var5)(var6, var3);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            return var1;
case 4:
            var3 = arg2;
            var4 = var3.client_platform_config;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var5 = var5.bind(var1)(var3);
            var6 = _closure1_slot0;
            var3 = 5;
            var3 = var7[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getOS;
            var3 = var3.bind(var6)();
            var3 = var5.bind(var1)(var3);
            var3 = var4[var3];
            var5 = var3.release_phase;
            var3 = _closure1_slot5;
            var2 = var3.includes;
            var2 = var2.bind(var3)(var5);
            var1 = undefined;
            if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = var5.replace;
            var3 = '_';
            var2 = ' ';
            var5 = var4.bind(var5)(var3, var2);
            var4 = var5.replace;
            var3 = /(^\w|\s\w)/g;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.toUpperCase;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function useActivityAction(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.context;
            var13 = var1.applicationId;
            var11 = var1.fetchesApplication;
            var6 = undefined;
            if(!(var11 === var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var11 = true;
case 9:
            var _closure2_slot0 = var6;
            var1 = _closure1_slot7;
            var1 = var1.START;
            var7 = var2.type;
            var5 = 'channel';
            var8 = undefined;
            if(!(var5 === var7)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = var2.channel;
case 11:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 11;
            var2 = var10[var2];
            var2 = var9.bind(var6)(var2);
            var12 = var2.bind(var6)();
            var2 = 12;
            var2 = var10[var2];
            var5 = var9.bind(var6)(var2);
            var2 = {};
            var2['fetchesApplication'] = var11;
            var7 = var5.bind(var6)(var2);
            var5 = _closure1_slot0;
            var2 = 13;
            var2 = var10[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.useGetOrFetchApplication;
            var2 = var2.bind(var5)(var13, var11);
            _closure2_slot0 = var2;
            var5 = 8;
            var5 = var10[var5];
            var5 = var9.bind(var6)(var5);
            var9 = var5.bind(var6)(var8);
            var5 = var9.find;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.embeddedActivity;
                    var4 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = var2.applicationId;
                    var1 = var3 === var2;
case 13:
                    return var1;
                }
            };
            var5 = var5.bind(var9)(var4);
            var4 = null;
            if(!(var4 != var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 14;
            var9 = var11[var9];
            var11 = var10.bind(var6)(var9);
            var10 = var11.getEmbeddedActivityLocationChannelId;
            var13 = var4 == var12;
            var9 = undefined;
            if(var13) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var9 = var12.location;
case 17:
            var9 = var10.bind(var11)(var9);
            if(!(var4 != var8)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var8 = var8.id;
            if(!(var9 === var8)) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var8 = var4 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var6 = var7.id;
case 22:
            var2 = var2.id;
            if(!(var6 !== var2)) { _fun0002_ip = 24; continue _fun0002 }
case 19:
            var2 = var1;
            if(!(var4 != var5)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var4 = _closure1_slot7;
            var2 = var4.JOIN;
            _fun0002_ip = 25; continue _fun0002;
case 24:
            var3 = _closure1_slot7;
            var2 = var3.LEAVE;
case 25:
            return var2;
case 15:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var2 = function useOnActivityItemSelected(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var6 = var2.application;
            var3 = var2.botUserIdForAppDM;
            var _closure2_slot0 = var3;
            var10 = var2.context;
            var _closure2_slot1 = var10;
            var3 = var2.locationObject;
            var _closure2_slot2 = var3;
            var3 = var2.embeddedActivitiesManager;
            var _closure2_slot3 = var3;
            var3 = var2.onActivityItemSelectedProp;
            var _closure2_slot4 = var3;
            var3 = var2.launchingComponentId;
            var _closure2_slot5 = var3;
            var3 = var2.commandOrigin;
            var _closure2_slot6 = var3;
            var3 = var2.sectionName;
            var _closure2_slot7 = var3;
            var3 = var2.source;
            var _closure2_slot8 = var3;
            var8 = var2.fetchesApplication;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var8 = true;
case 27:
            var3 = var2.customId;
            var _closure2_slot9 = var3;
            var3 = var2.referrerId;
            var _closure2_slot10 = var3;
            var2 = var2.onConfirmActivityLaunchChecksAlertOpen;
            var _closure2_slot11 = var2;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var3 = null;
            var5 = var3 == var6;
            var2 = undefined;
            if(var5) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var2 = var6.id;
case 29:
            var5 = var3 != var2;
            var9 = '';
            if(!var5) { _fun0004_ip = 31; continue _fun0004 }
case 16:
            var9 = var2;
case 31:
            _closure2_slot12 = var9;
            var7 = _closure1_slot9;
            var5 = {};
            var5['context'] = var10;
            var5['applicationId'] = var9;
            var5['fetchesApplication'] = var8;
            var5 = var7.bind(var4)(var5);
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 15;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var7 = var7.analyticsLocations;
            _closure2_slot13 = var7;
            var7 = 11;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.bind(var4)();
            _closure2_slot14 = var7;
            var8 = _closure1_slot0;
            var7 = 16;
            var7 = var9[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.useCanLaunchFrame;
            var7 = var7.bind(var8)(var6);
            _closure2_slot15 = var7;
            if(!(var3 != var6)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var3 = _closure1_slot7;
            var3 = var3.START;
            if(!(var3 !== var5)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var3 = _closure1_slot7;
            var3 = var3.JOIN;
            if(!(var3 !== var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = _closure1_slot7;
            var3 = var3.LEAVE;
            if(!(var3 !== var5)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            return var4;
case 38:
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.isLaunchingActivity;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var2 = _closure2_slot14;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var5 = _closure2_slot3;
                    var4 = var5.leaveActivity;
                    var2 = {};
                    var6 = _closure2_slot14;
                    var6 = var6.location;
                    var2['location'] = var6;
                    var6 = _closure2_slot12;
                    var2['applicationId'] = var6;
                    var2 = var4.bind(var5)(var2);
case 42:
                    var2 = _closure2_slot4;
                    if(!(var3 != var2)) { _fun0005_ip = 40; continue _fun0005 }
case 44:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = _closure2_slot12;
                    var2['applicationId'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            return var3;
case 36:
            var5 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                        var4 = _closure1_slot4;
                        var3 = var4.isLaunchingActivity;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0006_ip = 47; continue _fun0006 }
case 43:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 20;
                        var2 = var4[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var6 = _closure2_slot12;
                        var2['applicationId'] = var6;
                        var6 = _closure2_slot1;
                        var8 = var6.type;
                        var7 = 'channel';
                        var6 = undefined;
                        if(!(var7 === var8)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                        var7 = _closure2_slot1;
                        var7 = var7.channel;
                        var6 = var7.id;
case 48:
                        var2['activityChannelId'] = var6;
                        var6 = _closure2_slot2;
                        var2['locationObject'] = var6;
                        var6 = _closure2_slot13;
                        var2['analyticsLocations'] = var6;
                        var6 = _closure2_slot5;
                        var2['componentId'] = var6;
                        var6 = _closure2_slot7;
                        var2['sectionName'] = var6;
                        var6 = _closure2_slot8;
                        var2['source'] = var6;
                        var6 = _closure2_slot9;
                        var2['customId'] = var6;
                        var5 = _closure2_slot10;
                        var2['referrerId'] = var5;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.then;
                        var2 = function(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                                var3 = _closure2_slot4;
                                var2 = null;
                                var3 = var2 == var3;
                                var5 = undefined;
                                var2 = undefined;
                                if(var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                                var4 = _closure2_slot4;
                                var3 = {};
                                var6 = _closure2_slot12;
                                var3['applicationId'] = var6;
                                var2 = var4.bind(var5)(var3);
case 52:
                                var1 = var2;
case 50:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=196);
case 54:
                        return var2;
case 55:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(!var3) { _fun0006_ip = 47; continue _fun0006 }
case 56:
                        return var2;
case 47:
                        var2 = undefined;
                        return var2;
case 45:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            return var3;
case 34:
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 57; continue _fun0008 }
case 46:
                        var2 = undefined;
                        var7 = undefined;
                        var3 = _closure2_slot15;
                        if(var3) { _fun0008_ip = 58; continue _fun0008 }
case 10:
                        var3 = _closure2_slot1;
                        var5 = var3.type;
                        var4 = 'channel';
                        var3 = undefined;
                        if(!(var4 === var5)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                        var4 = _closure2_slot1;
                        var4 = var4.channel;
                        var3 = var4.id;
case 59:
                        var7 = var3;
                        var4 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0008_ip = 61; continue _fun0008 }
case 62: // try_start_0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 18;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.openPrivateChannel;
                        var3 = {};
                        var8 = _closure2_slot0;
                        var3['recipientIds'] = var8;
                        var8 = true;
                        var3['navigateToChannel'] = var8;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=129);
case 63:
                        return var3;
case 64:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                        var7 = var3;
case 61: // try_end0
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 19;
                        var4 = var8[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = {};
                        var8 = _closure2_slot12;
                        var4['targetApplicationId'] = var8;
                        var8 = _closure2_slot2;
                        var4['locationObject'] = var8;
                        var4['channelId'] = var7;
                        var7 = _closure2_slot13;
                        var4['analyticsLocations'] = var7;
                        var7 = _closure2_slot5;
                        var4['componentId'] = var7;
                        var7 = _closure2_slot6;
                        var4['commandOrigin'] = var7;
                        var7 = _closure2_slot7;
                        var4['sectionName'] = var7;
                        var7 = _closure2_slot8;
                        var4['source'] = var7;
                        var7 = _closure2_slot9;
                        var4['customId'] = var7;
                        var7 = _closure2_slot10;
                        var4['referrerId'] = var7;
                        var7 = _closure2_slot11;
                        var4['onConfirmActivityLaunchChecksAlertOpen'] = var7;
                        var7 = var5.bind(var2)(var4);
                        var5 = var7.then;
                        var4 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                                var3 = _closure2_slot4;
                                var2 = null;
                                var3 = var2 == var3;
                                var5 = undefined;
                                var2 = undefined;
                                if(var3) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                                var4 = _closure2_slot4;
                                var3 = {};
                                var6 = _closure2_slot12;
                                var3['applicationId'] = var6;
                                var2 = var4.bind(var5)(var3);
case 52:
                                var1 = var2;
case 50:
                                return var1;
                            }
                        };
                        var4 = var5.bind(var7)(var4);
                        SaveGenerator(address=287);
case 67:
                        return var4;
case 24:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(!var5) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                        return var4;
case 65:
                        return var3;
case 15: // catch_target0
                        CatchBlockStart(arg_register=2);
                        return var2;
case 58: // try_start_1
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 17;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.launchFrame;
                        var3 = {};
                        var7 = _closure2_slot12;
                        var3['applicationId'] = var7;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=352);
case 70:
                        return var3;
case 39:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                        var5 = _closure2_slot4;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0008_ip = 68; continue _fun0008 }
case 73:
                        var5 = _closure2_slot4;
                        var4 = {};
                        var6 = _closure2_slot12;
                        var4['applicationId'] = var6;
                        var4 = var5.bind(var2)(var4);
case 68: // try_end1
                        return var2;
case 71:
                        return var3;
case 74: // catch_target1
                        CatchBlockStart(arg_register=2);
                        return var2;
case 57:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var2;
case 32:
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = '';
                    var2['applicationId'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 75:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        }
    };
    var _closure1_slot10 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var6);
    var13 = 0;
    var6 = var10[var13];
    var1 = undefined;
    var6 = var8.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var12 = 1;
    var6 = var10[var12];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var11 = 2;
    var6 = var10[var11];
    var6 = var9.bind(var1)(var6);
    var6 = var6.STAFF_RELEASE_PHASES;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.ApplicationFlags;
    var _closure1_slot6 = var6;
    var6 = {};
    var6['START'] = var13;
    var8 = 'START';
    var6[var13] = var8;
    var6['JOIN'] = var12;
    var8 = 'JOIN';
    var6[var12] = var8;
    var6['LEAVE'] = var11;
    var8 = 'LEAVE';
    var6[var11] = var8;
    var _closure1_slot7 = var6;
    var8 = 21;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/activities/utils/useActivityShelfItem.tsx';
    var8 = var9.bind(var10)(var8);
    var7 = function useActivityShelfItem(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var1 = var3.activityItem;
            var19 = var3.context;
            var18 = var3.locationObject;
            var16 = var3.onActivityItemSelected;
            var17 = var3.embeddedActivitiesManager;
            var11 = var3.assetNames;
            var6 = undefined;
            if(!(var11 === var6)) { _fun0011_ip = 77; continue _fun0011 }
case 60:
            var11 = ['embedded_cover'];
case 77:
            var20 = var3.backgroundResolution;
            if(!(var20 === var6)) { _fun0011_ip = 78; continue _fun0011 }
case 11:
            var20 = 250;
case 78:
            var15 = var3.launchingComponentId;
            var14 = var3.commandOrigin;
            var13 = var3.source;
            var _closure2_slot0 = var6;
            var12 = var1.application;
            _closure2_slot0 = var12;
            var7 = var1.activity;
            var5 = var7.client_platform_config;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 4;
            var4 = var10[var4];
            var8 = var8.bind(var6)(var4);
            var9 = _closure1_slot0;
            var4 = 5;
            var4 = var10[var4];
            var9 = var9.bind(var6)(var4);
            var4 = var9.getOS;
            var4 = var4.bind(var9)();
            var4 = var8.bind(var6)(var4);
            var4 = var5[var4];
            var8 = global;
            var9 = var8.Date;
            var5 = var9.now;
            var9 = var5.bind(var9)();
            var5 = var4.label_until;
            var10 = null;
            var5 = var10 != var5;
            if(!var5) { _fun0011_ip = 79; continue _fun0011 }
case 80:
            var23 = var8.Date;
            var22 = var23.parse;
            var21 = var4.label_until;
            var21 = var22.bind(var23)(var21);
            var5 = var9 < var21;
case 79:
            if(!var5) { _fun0011_ip = 81; continue _fun0011 }
case 82:
            var21 = var4.label_from;
            var5 = var10 != var21;
case 81:
            if(!var5) { _fun0011_ip = 83; continue _fun0011 }
case 84:
            var22 = var8.Date;
            var21 = var22.parse;
            var8 = var4.label_from;
            var8 = var21.bind(var22)(var8);
            var5 = var9 > var8;
case 83:
            var9 = _closure1_slot1;
            var21 = _closure1_slot2;
            var8 = 6;
            var8 = var21[var8];
            var9 = var9.bind(var6)(var8);
            var8 = {};
            var21 = var12.id;
            var8['applicationId'] = var21;
            var8['size'] = var20;
            var8['names'] = var11;
            var11 = var9.bind(var6)(var8);
            var8 = var7.activity_preview_video_asset_id;
            var8 = var10 != var8;
            var10 = null;
            if(!var8) { _fun0011_ip = 85; continue _fun0011 }
case 86:
            var9 = _closure1_slot1;
            var20 = _closure1_slot2;
            var8 = 7;
            var8 = var20[var8];
            var9 = var9.bind(var6)(var8);
            var8 = var12.id;
            var7 = var7.activity_preview_video_asset_id;
            var10 = var9.bind(var6)(var8, var7);
case 85:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 8;
            var7 = var9[var7];
            var8 = var8.bind(var6)(var7);
            var20 = var19.type;
            var9 = 'channel';
            var7 = undefined;
            if(!(var9 === var20)) { _fun0011_ip = 87; continue _fun0011 }
case 88:
            var7 = var19.channel;
case 87:
            var8 = var8.bind(var6)(var7);
            var7 = var8.find;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.embeddedActivity;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = var1.applicationId;
                var1 = var2 === var1;
                return var1;
            };
            var9 = var7.bind(var8)(var2);
            var7 = _closure1_slot9;
            var2 = {};
            var2['context'] = var19;
            var8 = var12.id;
            var2['applicationId'] = var8;
            var8 = var7.bind(var6)(var2);
            var7 = _closure1_slot10;
            var2 = {};
            var20 = var1.application;
            var2['application'] = var20;
            var2['context'] = var19;
            var2['locationObject'] = var18;
            var2['embeddedActivitiesManager'] = var17;
            var2['onActivityItemSelectedProp'] = var16;
            var2['launchingComponentId'] = var15;
            var2['commandOrigin'] = var14;
            var2['source'] = var13;
            var7 = var7.bind(var6)(var2);
            var2 = _closure1_slot8;
            var1 = var1.activity;
            var2 = var2.bind(var6)(var12, var1);
            var1 = {};
            var1['imageBackground'] = var11;
            var1['videoUrl'] = var10;
            var1['joinableEmbeddedApp'] = var9;
            var1['activityAction'] = var8;
            var1['onActivityItemSelected'] = var7;
            if(var5) { _fun0011_ip = 89; continue _fun0011 }
case 90:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.EmbeddedActivityLabelTypes;
            var3 = var3.NONE;
            _fun0011_ip = 91; continue _fun0011;
case 89:
            var3 = var4.label_type;
case 91:
            var1['labelType'] = var3;
            var1['staffReleasePhase'] = var2;
            return var1;
        }
    };
    var3['default'] = var7;
    var3['ActivityAction'] = var6;
    var3['getStaffReleasePhase'] = var5;
    var3['useActivityAction'] = var4;
    var3['useOnActivityItemSelected'] = var2;
    return var1;
})();