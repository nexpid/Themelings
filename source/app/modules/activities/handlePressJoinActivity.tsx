// app/modules/activities/handlePressJoinActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function handlePressJoinActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.embeddedActivityJoinability;
            var2 = var1.handleCanJoin;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 8;
            var4 = var1[var7];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = var4.EmbeddedActivityJoinability;
            var4 = var4.CAN_JOIN;
            if(!(var4 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.EmbeddedActivityJoinability;
            var4 = var4.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            if(!(var4 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.EmbeddedActivityJoinability;
            var4 = var4.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
            if(!(var4 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.EmbeddedActivityJoinability;
            var4 = var4.ACTIVITY_NOT_SUPPORTED_ON_OS;
            if(!(var4 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.EmbeddedActivityJoinability;
            var4 = var4.ACTIVITY_AGE_GATED;
            if(!(var4 !== var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.EmbeddedActivityJoinability;
            var4 = var4.NO_CHANNEL_CONNECT_PERMISSION;
            if(!(var4 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.EmbeddedActivityJoinability;
            var4 = var4.CHANNEL_FULL;
            if(!(var4 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.EmbeddedActivityJoinability;
            var4 = var4.NO_CHANNEL;
            if(!(var4 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var4 = var4.EmbeddedActivityJoinability;
            var4 = var4.NO_USER;
            if(!(var4 === var5)) { _fun0001_ip = 16; continue _fun0001 }
case 12:
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 10;
            var4 = var11[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.show;
            var4 = {};
            var10 = _closure1_slot0;
            var7 = 11;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.PtobXV;
            var8 = var9.bind(var12)(var8);
            var4['title'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.FUCQcn;
            var7 = var8.bind(var9)(var7);
            var4['body'] = var7;
            var7 = false;
            var4['hideActionSheet'] = var7;
            var4 = var5.bind(var6)(var4);
            _fun0001_ip = 16; continue _fun0001;
case 10:
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 10;
            var4 = var11[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.show;
            var4 = {};
            var10 = _closure1_slot0;
            var7 = 11;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.PtobXV;
            var8 = var9.bind(var12)(var8);
            var4['title'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.4WuFRE;
            var7 = var8.bind(var9)(var7);
            var4['body'] = var7;
            var7 = false;
            var4['hideActionSheet'] = var7;
            var4 = var5.bind(var6)(var4);
            _fun0001_ip = 16; continue _fun0001;
case 8:
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 10;
            var4 = var11[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.show;
            var4 = {};
            var10 = _closure1_slot0;
            var7 = 11;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.PtobXV;
            var8 = var9.bind(var12)(var8);
            var4['title'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.uGDCc3;
            var7 = var8.bind(var9)(var7);
            var4['body'] = var7;
            var7 = false;
            var4['hideActionSheet'] = var7;
            var4 = var5.bind(var6)(var4);
            _fun0001_ip = 16; continue _fun0001;
case 6:
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 10;
            var4 = var11[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.show;
            var4 = {};
            var10 = _closure1_slot0;
            var7 = 11;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.PtobXV;
            var8 = var9.bind(var12)(var8);
            var4['title'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.UXoQTk;
            var7 = var8.bind(var9)(var7);
            var4['body'] = var7;
            var7 = false;
            var4['hideActionSheet'] = var7;
            var4 = var5.bind(var6)(var4);
            _fun0001_ip = 16; continue _fun0001;
case 4:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.showActivitiesInvalidPermissionsAlert;
            var3 = var3.bind(var4)();
            _fun0001_ip = 16; continue _fun0001;
case 2:
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var2.bind(var1)();
case 16:
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = function _maybeJoinEmbeddedActivity() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var12 = var2.channelId;
                    var _closure4_slot0 = var12;
                    var8 = var2.applicationId;
                    var _closure4_slot1 = var8;
                    var4 = var2.launchId;
                    var _closure4_slot2 = var4;
                    var13 = var2.inputApplication;
                    var4 = var2.analyticsLocations;
                    var _closure4_slot3 = var4;
                    var4 = var2.launchingComponentId;
                    var _closure4_slot4 = var4;
                    var4 = var2.sectionName;
                    var _closure4_slot5 = var4;
                    var2 = var2.inviterUserId;
                    var _closure4_slot6 = var2;
                    var4 = undefined;
                    var _closure4_slot7 = var4;
                    var2 = function _handleCanJoin() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                                    var3 = _closure4_slot7;
                                    var2 = null;
                                    if(!(var2 != var3)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 14;
                                    var2 = var4[var2];
                                    var4 = undefined;
                                    var3 = var3.bind(var4)(var2);
                                    var2 = {};
                                    var6 = _closure4_slot7;
                                    var6 = var6.applicationId;
                                    var2['applicationId'] = var6;
                                    var6 = _closure4_slot0;
                                    var2['activityChannelId'] = var6;
                                    var6 = {};
                                    var2['locationObject'] = var6;
                                    var6 = _closure4_slot3;
                                    var2['analyticsLocations'] = var6;
                                    var6 = _closure4_slot4;
                                    var2['componentId'] = var6;
                                    var6 = _closure4_slot5;
                                    var2['sectionName'] = var6;
                                    var5 = _closure4_slot6;
                                    var2['inviterUserId'] = var5;
                                    var2 = var3.bind(var4)(var2);
                                    SaveGenerator(address=124);
case 24:
                                    return var2;
case 25:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0003_ip = 26; continue _fun0003 }
case 22:
                                    var3 = undefined;
                                    return var3;
case 26:
                                    return var2;
case 20:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure4_slot8 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure4_slot8 = var2;
                    SaveGenerator(address=108);
case 27:
                    return var4;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var5 = _closure1_slot10;
                    var3 = var5.getEmbeddedActivitiesForChannel;
                    var6 = var3.bind(var5)(var12);
                    var5 = var6.find;
                    var3 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4.applicationId;
                            var1 = _closure4_slot1;
                            var1 = var2 === var1;
                            if(!var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                            var5 = _closure4_slot2;
                            var2 = null;
                            var2 = var2 == var5;
                            if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                            var4 = var4.launchId;
                            var3 = _closure4_slot2;
                            var2 = var4 === var3;
case 33:
                            var1 = var2;
case 31:
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var3);
                    _closure4_slot7 = var5;
                    var14 = null;
                    if(!(var14 == var13)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 12;
                    var3 = var9[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.fetchApplication;
                    var3 = var3.bind(var6)(var8);
                    SaveGenerator(address=196);
case 37:
                    return var3;
case 38:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var8 = _closure1_slot4;
                    var6 = var8.createFromServer;
                    var13 = var6.bind(var8)(var3);
case 35:
                    if(!(var14 != var5)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    if(!(var14 != var13)) { _fun0002_ip = 41; continue _fun0002 }
case 43:
                    var6 = _closure1_slot8;
                    var5 = var6.getCurrentUser;
                    var11 = var5.bind(var6)();
                    var6 = _closure1_slot11;
                    var5 = {};
                    var9 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var8 = 8;
                    var8 = var15[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = {};
                    var15 = var14 == var11;
                    var14 = undefined;
                    if(var15) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var14 = var11.id;
case 44:
                    var8['userId'] = var14;
                    var8['application'] = var13;
                    var8['channelId'] = var12;
                    var8['currentUser'] = var11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 13;
                    var11 = var13[var11];
                    var12 = var12.bind(var4)(var11);
                    var11 = var12.getIsActivitiesEnabledForCurrentPlatform;
                    var11 = var11.bind(var12)();
                    var8['isActivitiesEnabledForCurrentPlatform'] = var11;
                    var11 = _closure1_slot5;
                    var8['ChannelStore'] = var11;
                    var11 = _closure1_slot9;
                    var8['VoiceStateStore'] = var11;
                    var11 = _closure1_slot7;
                    var8['PermissionStore'] = var11;
                    var10 = _closure1_slot6;
                    var8['GuildStore'] = var10;
                    var8 = var9.bind(var4)(var8);
                    var5['embeddedActivityJoinability'] = var8;
                    var7 = function handleCanJoin() {
                        var1 = undefined;
                        var4 = _closure4_slot8;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var5['handleCanJoin'] = var7;
                    var5 = var6.bind(var4)(var5);
case 41:
                    return var4;
case 39:
                    return var3;
case 29:
                    return var2;
case 18:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/handlePressJoinActivity.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function maybeJoinEmbeddedActivity() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeJoinEmbeddedActivity'] = var2;
    return var1;
})();