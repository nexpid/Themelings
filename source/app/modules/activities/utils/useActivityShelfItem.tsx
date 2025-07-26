// app/modules/activities/utils/useActivityShelfItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var8 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var5 = function getStaffReleasePhase(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.flags;
            var2 = null;
            var2 = var2 != var1;
            var4 = 0;
            if(!var2) { _fun0001_ip = 22; continue _fun0001 }
 19:
            var4 = var1;
 22:
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
            if(var3) { _fun0001_ip = 119; continue _fun0001 }
 75:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var5 = var4.bind(var1)(var3);
            var4 = var5.hasFlag;
            var3 = _closure1_slot6;
            var3 = var3.EMBEDDED_FIRST_PARTY;
            var3 = var4.bind(var5)(var6, var3);
            if(var3) { _fun0001_ip = 119; continue _fun0001 }
 117:
            return var1;
 119:
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
            if(!var2) { _fun0001_ip = 261; continue _fun0001 }
 208:
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
 261:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function useActivityAction(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.context;
            var13 = var1.applicationId;
            var11 = var1.fetchesApplication;
            var6 = undefined;
            if(!(var11 === var6)) { _fun0002_ip = 29; continue _fun0002 }
 27:
            var11 = true;
 29:
            var _closure2_slot0 = var6;
            var1 = _closure1_slot7;
            var1 = var1.START;
            var7 = var2.type;
            var5 = 'channel';
            var8 = undefined;
            if(!(var5 === var7)) { _fun0002_ip = 66; continue _fun0002 }
 61:
            var8 = var2.channel;
 66:
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
 0:
                    var1 = arg1;
                    var2 = var1.embeddedActivity;
                    var4 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0003_ip = 43; continue _fun0003 }
 25:
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = var2.applicationId;
                    var1 = var3 === var2;
 43:
                    return var1;
                }
            };
            var5 = var5.bind(var9)(var4);
            var4 = null;
            if(!(var4 != var2)) { _fun0002_ip = 298; continue _fun0002 }
 186:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 14;
            var9 = var11[var9];
            var11 = var10.bind(var6)(var9);
            var10 = var11.getEmbeddedActivityLocationChannelId;
            var13 = var4 == var12;
            var9 = undefined;
            if(var13) { _fun0002_ip = 226; continue _fun0002 }
 221:
            var9 = var12.location;
 226:
            var9 = var10.bind(var11)(var9);
            if(!(var4 != var8)) { _fun0002_ip = 267; continue _fun0002 }
 235:
            var8 = var8.id;
            if(!(var9 === var8)) { _fun0002_ip = 267; continue _fun0002 }
 244:
            var8 = var4 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 258; continue _fun0002 }
 253:
            var6 = var7.id;
 258:
            var2 = var2.id;
            if(!(var6 !== var2)) { _fun0002_ip = 286; continue _fun0002 }
 267:
            var2 = var1;
            if(!(var4 != var5)) { _fun0002_ip = 296; continue _fun0002 }
 274:
            var4 = _closure1_slot7;
            var2 = var4.JOIN;
            _fun0002_ip = 296; continue _fun0002;
 286:
            var3 = _closure1_slot7;
            var2 = var3.LEAVE;
 296:
            return var2;
 298:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var2 = function useOnActivityItemSelected(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(!(var8 === var4)) { _fun0004_ip = 114; continue _fun0004 }
 112:
            var8 = true;
 114:
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
            if(var5) { _fun0004_ip = 176; continue _fun0004 }
 171:
            var2 = var6.id;
 176:
            var5 = var3 != var2;
            var9 = '';
            if(!var5) { _fun0004_ip = 190; continue _fun0004 }
 187:
            var9 = var2;
 190:
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
            if(!(var3 != var6)) { _fun0004_ip = 399; continue _fun0004 }
 310:
            var3 = _closure1_slot7;
            var3 = var3.START;
            if(!(var3 !== var5)) { _fun0004_ip = 381; continue _fun0004 }
 324:
            var3 = _closure1_slot7;
            var3 = var3.JOIN;
            if(!(var3 !== var5)) { _fun0004_ip = 363; continue _fun0004 }
 338:
            var3 = _closure1_slot7;
            var3 = var3.LEAVE;
            if(!(var3 !== var5)) { _fun0004_ip = 354; continue _fun0004 }
 352:
            return var4;
 354:
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure1_slot4;
                    var1 = var2.isLaunchingActivity;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0005_ip = 100; continue _fun0005 }
 20:
                    var2 = _closure2_slot14;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 71; continue _fun0005 }
 33:
                    var5 = _closure2_slot3;
                    var4 = var5.leaveActivity;
                    var2 = {};
                    var6 = _closure2_slot14;
                    var6 = var6.location;
                    var2['location'] = var6;
                    var6 = _closure2_slot12;
                    var2['applicationId'] = var6;
                    var2 = var4.bind(var5)(var2);
 71:
                    var2 = _closure2_slot4;
                    if(!(var3 != var2)) { _fun0005_ip = 100; continue _fun0005 }
 79:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = _closure2_slot12;
                    var2['applicationId'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 100:
                    var1 = undefined;
                    return var1;
                }
            };
            return var3;
 363:
            var5 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 210; continue _fun0006 }
 10:
                        var4 = _closure1_slot4;
                        var3 = var4.isLaunchingActivity;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0006_ip = 205; continue _fun0006 }
 33:
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
                        if(!(var7 === var8)) { _fun0006_ip = 101; continue _fun0006 }
 87:
                        var7 = _closure2_slot1;
                        var7 = var7.channel;
                        var6 = var7.id;
 101:
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
 0:
                                var1 = arg1;
                                if(!var1) { _fun0007_ip = 48; continue _fun0007 }
 6:
                                var3 = _closure2_slot4;
                                var2 = null;
                                var3 = var2 == var3;
                                var5 = undefined;
                                var2 = undefined;
                                if(var3) { _fun0007_ip = 45; continue _fun0007 }
 26:
                                var4 = _closure2_slot4;
                                var3 = {};
                                var6 = _closure2_slot12;
                                var3['applicationId'] = var6;
                                var2 = var4.bind(var5)(var3);
 45:
                                var1 = var2;
 48:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=196);
 194:
                        return var2;
 196:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(!var3) { _fun0006_ip = 205; continue _fun0006 }
 202:
                        return var2;
 205:
                        var2 = undefined;
                        return var2;
 210:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            return var3;
 381:
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 385; continue _fun0008 }
 10:
                        var2 = undefined;
                        var7 = undefined;
                        var3 = _closure2_slot15;
                        if(var3) { _fun0008_ip = 304; continue _fun0008 }
 27:
                        var3 = _closure2_slot1;
                        var6 = var3.type;
                        var4 = 'channel';
                        var3 = undefined;
                        if(!(var4 === var6)) { _fun0008_ip = 60; continue _fun0008 }
 46:
                        var4 = _closure2_slot1;
                        var4 = var4.channel;
                        var3 = var4.id;
 60:
                        var7 = var3;
                        var4 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0008_ip = 141; continue _fun0008 }
 73: // try_start_0
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 18;
                        var3 = var6[var3];
                        var6 = var4.bind(var2)(var3);
                        var4 = var6.openPrivateChannel;
                        var3 = {};
                        var8 = _closure2_slot0;
                        var3['recipientIds'] = var8;
                        var8 = true;
                        var3['navigateToChannel'] = var8;
                        var3 = var4.bind(var6)(var3);
                        SaveGenerator(address=129);
 127:
                        return var3;
 129:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0008_ip = 296; continue _fun0008 }
 138:
                        var7 = var3;
 141: // try_end0
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 19;
                        var4 = var8[var4];
                        var6 = var6.bind(var2)(var4);
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
                        var7 = var6.bind(var2)(var4);
                        var6 = var7.then;
                        var4 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                var1 = arg1;
                                if(!var1) { _fun0009_ip = 48; continue _fun0009 }
 6:
                                var3 = _closure2_slot4;
                                var2 = null;
                                var3 = var2 == var3;
                                var5 = undefined;
                                var2 = undefined;
                                if(var3) { _fun0009_ip = 45; continue _fun0009 }
 26:
                                var4 = _closure2_slot4;
                                var3 = {};
                                var6 = _closure2_slot12;
                                var3['applicationId'] = var6;
                                var2 = var4.bind(var5)(var3);
 45:
                                var1 = var2;
 48:
                                return var1;
                            }
                        };
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address=287);
 285:
                        return var4;
 287:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(!var6) { _fun0008_ip = 377; continue _fun0008 }
 293:
                        return var4;
 296:
                        return var3;
 299: // catch_target0
                        CatchBlockStart(arg_register=2);
                        return var2;
 304: // try_start_1
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 17;
                        var3 = var6[var3];
                        var6 = var4.bind(var2)(var3);
                        var4 = var6.launchFrame;
                        var3 = {};
                        var7 = _closure2_slot12;
                        var3['applicationId'] = var7;
                        var3 = var4.bind(var6)(var3);
                        var4 = _closure2_slot4;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0008_ip = 377; continue _fun0008 }
 358:
                        var4 = _closure2_slot4;
                        var3 = {};
                        var5 = _closure2_slot12;
                        var3['applicationId'] = var5;
                        var3 = var4.bind(var2)(var3);
 377: // try_end1
                        return var2;
 380: // catch_target1
                        CatchBlockStart(arg_register=2);
                        return var2;
 385:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var2;
 399:
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 34; continue _fun0010 }
 13:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = '';
                    var2['applicationId'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 34:
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
 0:
            var3 = arg1;
            var1 = var3.activityItem;
            var19 = var3.context;
            var18 = var3.locationObject;
            var16 = var3.onActivityItemSelected;
            var17 = var3.embeddedActivitiesManager;
            var11 = var3.assetNames;
            var6 = undefined;
            if(!(var11 === var6)) { _fun0011_ip = 56; continue _fun0011 }
 46:
            var11 = ['embedded_cover'];
 56:
            var20 = var3.backgroundResolution;
            if(!(var20 === var6)) { _fun0011_ip = 69; continue _fun0011 }
 66:
            var20 = 250;
 69:
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
            if(!var5) { _fun0011_ip = 228; continue _fun0011 }
 201:
            var23 = var8.Date;
            var22 = var23.parse;
            var21 = var4.label_until;
            var21 = var22.bind(var23)(var21);
            var5 = var9 < var21;
 228:
            if(!var5) { _fun0011_ip = 241; continue _fun0011 }
 231:
            var21 = var4.label_from;
            var5 = var10 != var21;
 241:
            if(!var5) { _fun0011_ip = 271; continue _fun0011 }
 244:
            var22 = var8.Date;
            var21 = var22.parse;
            var8 = var4.label_from;
            var8 = var21.bind(var22)(var8);
            var5 = var9 > var8;
 271:
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
            if(!var8) { _fun0011_ip = 367; continue _fun0011 }
 330:
            var9 = _closure1_slot1;
            var20 = _closure1_slot2;
            var8 = 7;
            var8 = var20[var8];
            var9 = var9.bind(var6)(var8);
            var8 = var12.id;
            var7 = var7.activity_preview_video_asset_id;
            var10 = var9.bind(var6)(var8, var7);
 367:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 8;
            var7 = var9[var7];
            var8 = var8.bind(var6)(var7);
            var20 = var19.type;
            var9 = 'channel';
            var7 = undefined;
            if(!(var9 === var20)) { _fun0011_ip = 407; continue _fun0011 }
 402:
            var7 = var19.channel;
 407:
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
            if(var5) { _fun0011_ip = 588; continue _fun0011 }
 554:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.EmbeddedActivityLabelTypes;
            var3 = var3.NONE;
            _fun0011_ip = 594; continue _fun0011;
 588:
            var3 = var4.label_type;
 594:
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