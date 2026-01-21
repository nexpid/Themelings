// app/modules/activities/EmbeddedActivitiesManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot28;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot28;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 36; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 37: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 35: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot29 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function getShelfItemTrackingProperties(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var4 = null;
            var5 = var4 == var3;
            var6 = undefined;
            var2 = undefined;
            if(var5) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = var3.activity;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 40; continue _fun0005 }
case 33:
            var4 = var3.client_platform_config;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 16;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var7 = _closure1_slot0;
            var3 = 17;
            var3 = var8[var3];
            var7 = var7.bind(var6)(var3);
            var3 = var7.getOS;
            var3 = var3.bind(var7)();
            var3 = var5.bind(var6)(var3);
            var3 = var4[var3];
            var2 = var3.release_phase;
case 40:
            var1['releasePhase'] = var2;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function setAwaitingAnalyticsContext(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var7 = var1.nonce;
            var6 = var1.locations;
            var5 = var1.source;
            var2 = null;
            var1 = var2 != var6;
            if(var1) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var1 = var2 != var5;
case 42:
            if(!var1) { _fun0006_ip = 35; continue _fun0006 }
case 44:
            var3 = _closure1_slot24;
            var2 = {};
            var2['nonce'] = var7;
            var2['locations'] = var6;
            var2['source'] = var5;
            var3[var4] = var2;
            var1 = true;
case 35:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function clearAwaitingAnalyticsContextImmediate(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot24;
            var1 = var1[var3];
            var4 = null;
            if(!(var4 != var1)) { _fun0007_ip = 33; continue _fun0007 }
case 29:
            var5 = var1.nonce;
            var4 = arg2;
            if(!(var5 !== var4)) { _fun0007_ip = 45; continue _fun0007 }
case 33:
            var4 = undefined;
            return var4;
case 45:
            var2 = _closure1_slot24;
            var2 = delete var2[var3];
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function clearAwaitingAnalyticsContextAsync(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = global;
        var4 = var1.setTimeout;
        var1 = undefined;
        var3 = function() {
            var4 = _closure1_slot32;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2 = 2000;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function handleActivityLaunchStart(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var6 = var2.applicationId;
            var4 = var2.nonce;
            var1 = var2.analyticsLocations;
            var5 = var2.source;
            var3 = _closure1_slot31;
            var2 = {};
            var2['applicationId'] = var6;
            var2['nonce'] = var4;
            var2['locations'] = var1;
            var1 = null;
            var6 = var1 != var5;
            var1 = undefined;
            var4 = undefined;
            if(!var6) { _fun0008_ip = 46; continue _fun0008 }
case 47:
            var4 = var5;
case 46:
            var2['source'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function handleActivityClose() {
        var1 = undefined;
        var4 = _closure1_slot36;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function _handleActivityClose() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var6 = var2.applicationId;
                    var11 = var2.location;
                    var15 = var2.instanceId;
                    var4 = undefined;
                    SaveGenerator(address=35);
case 33:
                    return var4;
case 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                    var8 = _closure1_slot17;
                    var7 = var8.getEmbeddedActivityDurationMs;
                    var3 = var11.id;
                    var12 = var7.bind(var8)(var3, var6);
                    var7 = _closure1_slot11;
                    var3 = var7.getSessionId;
                    var10 = var3.bind(var7)();
                    var16 = null;
                    var3 = var16 != var15;
                    if(!var3) { _fun0009_ip = 11; continue _fun0009 }
case 53:
                    var3 = var16 != var10;
case 11:
                    if(!var3) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 18;
                    var3 = var8[var3];
                    var3 = var7.bind(var4)(var3);
                    var8 = var3.HTTP;
                    var7 = var8.post;
                    var3 = {};
                    var14 = _closure1_slot20;
                    var13 = var14.ACTIVITY_LEAVE;
                    var9 = var11.id;
                    var9 = var13.bind(var14)(var6, var9, var15);
                    var3['url'] = var9;
                    var9 = {};
                    var9['session_id'] = var10;
                    var3['body'] = var9;
                    var9 = 2;
                    var3['retries'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=191);
case 56:
                    return var3;
case 57:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0009_ip = 58; continue _fun0009 }
case 54:
                    var7 = _closure1_slot23;
                    var14 = var7[var6];
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 19;
                    var10 = var9[var7];
                    var13 = var8.bind(var4)(var10);
                    var10 = var13.getEmbeddedActivityLocationChannelId;
                    var17 = var10.bind(var13)(var11);
                    var7 = var9[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.getEmbeddedActivityLocationGuildId;
                    var15 = var7.bind(var8)(var11);
                    var8 = _closure1_slot12;
                    var7 = var8.getChannel;
                    var20 = var7.bind(var8)(var17);
                    var8 = _closure1_slot15;
                    var7 = var8.getCurrentUser;
                    var22 = var7.bind(var8)();
                    if(!(var16 != var14)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    if(!(var16 != var22)) { _fun0009_ip = 59; continue _fun0009 }
case 61:
                    var8 = _closure1_slot17;
                    var7 = var8.getShelfActivities;
                    var13 = var7.bind(var8)(var15);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var9 = 20;
                    var9 = var7[var9];
                    var10 = var8.bind(var4)(var9);
                    var9 = {};
                    var9['applicationId'] = var6;
                    var9['activityConfigs'] = var13;
                    var21 = var10.bind(var4)(var9);
                    var9 = _closure1_slot30;
                    var9 = var9.bind(var4)(var21);
                    var19 = var9.releasePhase;
                    var9 = 21;
                    var9 = var7[var9];
                    var10 = var8.bind(var4)(var9);
                    var9 = var10.getRawThermalState;
                    var13 = var9.bind(var10)();
                    var9 = 22;
                    var7 = var7[var9];
                    var18 = var8.bind(var4)(var7);
                    var10 = var18.track;
                    var7 = _closure1_slot18;
                    var8 = var7.ACTIVITY_SESSION_LEFT;
                    var7 = {};
                    var7['channel_id'] = var17;
                    var7['guild_id'] = var15;
                    var24 = var14.mediaSessionIds;
                    var23 = 0;
                    var23 = var24[var23];
                    var7['media_session_id'] = var23;
                    var23 = var14.activitySessionId;
                    var7['activity_session_id'] = var23;
                    var7['application_id'] = var6;
                    var7['duration_ms'] = var12;
                    var22 = var22.premiumType;
                    var7['user_premium_tier'] = var22;
                    var7['raw_thermal_state'] = var13;
                    var7['release_phase'] = var19;
                    var22 = var16 == var21;
                    var19 = undefined;
                    if(var22) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var21 = var21.activity;
                    var22 = var16 == var21;
                    var19 = undefined;
                    if(var22) { _fun0009_ip = 62; continue _fun0009 }
case 64:
                    var19 = var21.shelf_rank;
case 62:
                    var7['shelf_rank'] = var19;
                    var19 = var14.activityUserSessionId;
                    var7['activity_user_session_id'] = var19;
                    var21 = var16 == var20;
                    var19 = undefined;
                    if(var21) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var19 = var20.type;
case 65:
                    var7['channel_type'] = var19;
                    var19 = var14.mediaSessionIds;
                    var7['media_session_ids'] = var19;
                    var19 = var11.kind;
                    var7['embedded_activity_location_kind'] = var19;
                    var7 = var10.bind(var18)(var8, var7);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var10 = var8.bind(var4)(var7);
                    var9 = var10.track;
                    var7 = _closure1_slot18;
                    var8 = var7.ACTIVITY_IFRAME_UNMOUNT;
                    var7 = {};
                    var7['channel_id'] = var17;
                    var7['guild_id'] = var15;
                    var7['application_id'] = var6;
                    var15 = var14.launchId;
                    var16 = var16 != var15;
                    var15 = undefined;
                    if(!var16) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var17 = var14.launchId;
                    var16 = new Array(1);
                    var16[0] = var17;
                    var15 = var16;
case 67:
                    var7['instance_ids'] = var15;
                    var15 = var14.mediaSessionIds;
                    var7['media_session_ids'] = var15;
                    var14 = var14.activityUserSessionId;
                    var7['activity_user_session_id'] = var14;
                    var7['raw_thermal_state'] = var13;
                    var7['duration_ms'] = var12;
                    var11 = var11.kind;
                    var7['embedded_activity_location_kind'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var5 = _closure1_slot23;
                    var5 = delete var5[var6];
case 59:
                    return var4;
case 58:
                    return var3;
case 51:
                    return var2;
case 48:
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
    var1 = function handleOpenEmbeddedActivity(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var18 = var1.applicationId;
            var _closure2_slot0 = var18;
            var7 = var1.isFirstActivityInChannel;
            var11 = var1.isStart;
            var8 = var1.participants;
            var17 = var1.embeddedActivity;
            var6 = var1.location;
            var25 = var1.inviterUserId;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 23;
            var4 = var9[var4];
            var9 = var5.bind(var1)(var4);
            var5 = var9.tryLaunchAsFrame;
            var4 = {};
            var4['applicationId'] = var18;
            var4 = var5.bind(var9)(var4);
            if(var4) { _fun0010_ip = 69; continue _fun0010 }
case 70:
            var5 = _closure1_slot11;
            var4 = var5.getId;
            var4 = var4.bind(var5)();
            _closure2_slot1 = var4;
            var5 = var8.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.userId;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var5.bind(var8)(var4);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 19;
            var10 = var9[var5];
            var12 = var8.bind(var1)(var10);
            var10 = var12.getEmbeddedActivityLocationChannelId;
            var20 = var10.bind(var12)(var6);
            var5 = var9[var5];
            var8 = var8.bind(var1)(var5);
            var5 = var8.getEmbeddedActivityLocationGuildId;
            var19 = var5.bind(var8)(var6);
            var8 = _closure1_slot12;
            var5 = var8.getChannel;
            var21 = var5.bind(var8)(var20);
            var5 = var11;
            if(!var5) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var8 = null;
            var5 = var8 != var21;
case 71:
            if(!var5) { _fun0010_ip = 73; continue _fun0010 }
case 74:
            var8 = var21.isPrivate;
            var5 = var8.bind(var21)();
case 73:
            if(!var5) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var5 = var7;
case 75:
            if(!var5) { _fun0010_ip = 77; continue _fun0010 }
case 21:
            var7 = null;
            var5 = var7 == var4;
case 77:
            if(!var5) { _fun0010_ip = 78; continue _fun0010 }
case 79:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 24;
            var5 = var8[var5];
            var9 = var7.bind(var1)(var5);
            var8 = var9.selectParticipant;
            var7 = var21.id;
            var5 = null;
            var5 = var8.bind(var9)(var7, var5);
case 78:
            var8 = null;
            if(!(var8 != var4)) { _fun0010_ip = 69; continue _fun0010 }
case 80:
            var7 = _closure1_slot13;
            var5 = var7.getMediaSessionId;
            var5 = var5.bind(var7)();
            var27 = var17.compositeInstanceId;
            var7 = var8 == var5;
            if(!var7) { _fun0010_ip = 6; continue _fun0010 }
case 81:
            var9 = var8 == var21;
            var10 = undefined;
            if(var9) { _fun0010_ip = 82; continue _fun0010 }
case 83:
            var9 = var21.isVocal;
            var10 = var9.bind(var21)();
case 82:
            var9 = true;
            var7 = var9 === var10;
case 6:
            if(!var7) { _fun0010_ip = 84; continue _fun0010 }
case 85:
            var9 = var8 == var21;
            var10 = undefined;
            if(var9) { _fun0010_ip = 86; continue _fun0010 }
case 87:
            var9 = var21.isPrivate;
            var10 = var9.bind(var21)();
case 86:
            var9 = false;
            var7 = var9 === var10;
case 84:
            if(!(var8 != var27)) { _fun0010_ip = 69; continue _fun0010 }
case 88:
            if(var7) { _fun0010_ip = 69; continue _fun0010 }
case 89:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 25;
            var7 = var10[var7];
            var9 = var9.bind(var1)(var7);
            var7 = var9.v4;
            var14 = var7.bind(var9)();
            var7 = 'location';
            var10 = var7 in var17;
            var9 = 1;
            var7 = var9;
            if(!var10) { _fun0010_ip = 90; continue _fun0010 }
case 91:
            var7 = 2;
case 90:
            var12 = _closure1_slot15;
            var10 = var12.getCurrentUser;
            var26 = var10.bind(var12)();
            if(!(var8 != var26)) { _fun0010_ip = 69; continue _fun0010 }
case 92:
            var12 = _closure1_slot17;
            var10 = var12.getShelfActivities;
            var22 = var10.bind(var12)(var19);
            var12 = _closure1_slot16;
            var10 = var12.getState;
            var10 = var10.bind(var12)();
            var16 = var10.shelfOrder;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 20;
            var10 = var15[var10];
            var12 = var13.bind(var1)(var10);
            var10 = {};
            var10['applicationId'] = var18;
            var10['activityConfigs'] = var22;
            var12 = var12.bind(var1)(var10);
            var10 = var16.findIndex;
            var3 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 === var2;
                return var1;
            };
            var3 = var10.bind(var16)(var3);
            var9 = var9 + var3;
            var3 = _closure1_slot30;
            var3 = var3.bind(var1)(var12);
            var10 = var3.releasePhase;
            var3 = 21;
            var3 = var15[var3];
            var13 = var13.bind(var1)(var3);
            var3 = var13.getRawThermalState;
            var13 = var3.bind(var13)();
            if(!(var8 == var5)) { _fun0010_ip = 93; continue _fun0010 }
case 94:
            var16 = new Array(0);
            _fun0010_ip = 95; continue _fun0010;
case 93:
            var3 = new Array(1);
            var3[0] = var5;
            var16 = var3;
case 95:
            var5 = {};
            var5['activitySessionId'] = var27;
            var5['activityUserSessionId'] = var14;
            var3 = var17.launchId;
            var5['launchId'] = var3;
            var5['mediaSessionIds'] = var16;
            var5['activitiesInfraVersion'] = var7;
            var3 = _closure1_slot23;
            var3[var18] = var5;
            var3 = _closure1_slot24;
            var23 = var3[var18];
            var5 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 26;
            var3 = var15[var3];
            var15 = var5.bind(var1)(var3);
            var5 = var15.isNullOrEmpty;
            var3 = var4.nonce;
            var3 = var5.bind(var15)(var3);
            if(var3) { _fun0010_ip = 59; continue _fun0010 }
case 96:
            var5 = var4.nonce;
            var15 = var8 == var23;
            var4 = undefined;
            if(var15) { _fun0010_ip = 97; continue _fun0010 }
case 98:
            var4 = var23.nonce;
case 97:
            var3 = var5 === var4;
case 59:
            if(var3) { _fun0010_ip = 99; continue _fun0010 }
case 58:
            var23 = undefined;
case 99:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 22;
            var3 = var3[var5];
            var24 = var4.bind(var1)(var3);
            var22 = var24.track;
            var3 = _closure1_slot18;
            var4 = var3.ACTIVITY_SESSION_JOINED;
            var3 = {};
            var3['channel_id'] = var20;
            var3['guild_id'] = var19;
            var15 = 0;
            var28 = var16[var15];
            var3['media_session_id'] = var28;
            var3['activity_session_id'] = var27;
            var3['application_id'] = var18;
            var28 = var8 == var23;
            var27 = undefined;
            if(var28) { _fun0010_ip = 100; continue _fun0010 }
case 101:
            var27 = var23.locations;
case 100:
            var3['location_stack'] = var27;
            var26 = var26.premiumType;
            var3['user_premium_tier'] = var26;
            var3['raw_thermal_state'] = var13;
            var27 = var8 != var21;
            var26 = null;
            if(!var27) { _fun0010_ip = 102; continue _fun0010 }
case 103:
            var29 = _closure1_slot9;
            var28 = var29.getUserParticipantCount;
            var27 = var21.id;
            var26 = var28.bind(var29)(var27);
case 102:
            var3['n_participants'] = var26;
            var3['is_activity_start'] = var11;
            var3['release_phase'] = var10;
            var26 = var8 == var12;
            var10 = undefined;
            if(var26) { _fun0010_ip = 104; continue _fun0010 }
case 105:
            var26 = var12.activity;
            var27 = var8 == var26;
            var10 = undefined;
            if(var27) { _fun0010_ip = 104; continue _fun0010 }
case 106:
            var10 = var26.shelf_rank;
case 104:
            var3['shelf_rank'] = var10;
            var10 = var9 > var15;
            var26 = null;
            if(!var10) { _fun0010_ip = 107; continue _fun0010 }
case 108:
            var26 = var9;
case 107:
            var3['shelf_sorted_rank'] = var26;
            var3['activity_user_session_id'] = var14;
            var27 = var8 == var21;
            var26 = undefined;
            if(var27) { _fun0010_ip = 109; continue _fun0010 }
case 110:
            var26 = var21.type;
case 109:
            var3['channel_type'] = var26;
            var27 = var8 == var23;
            var26 = undefined;
            if(var27) { _fun0010_ip = 111; continue _fun0010 }
case 112:
            var26 = var23.source;
case 111:
            var3['source'] = var26;
            var27 = var8 != var21;
            var26 = null;
            if(!var27) { _fun0010_ip = 113; continue _fun0010 }
case 114:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var27 = 27;
            var27 = var29[var27];
            var28 = var28.bind(var1)(var27);
            var27 = var28.computeCommandContextType;
            var26 = var27.bind(var28)(var21, var18);
case 113:
            var3['command_context_type'] = var26;
            var3['invite_inviter_id'] = var25;
            var26 = var8 == var23;
            var25 = undefined;
            if(var26) { _fun0010_ip = 115; continue _fun0010 }
case 116:
            var25 = var23.interactionId;
case 115:
            var3['interaction_id'] = var25;
            var25 = var6.kind;
            var3['embedded_activity_location_kind'] = var25;
            var3 = var22.bind(var24)(var4, var3);
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot18;
            var3 = var2.ACTIVITY_IFRAME_MOUNT;
            var2 = {};
            var24 = var8 == var23;
            var22 = undefined;
            if(var24) { _fun0010_ip = 117; continue _fun0010 }
case 118:
            var22 = var23.locations;
case 117:
            var2['location_stack'] = var22;
            var2['channel_id'] = var20;
            var22 = var8 == var21;
            var20 = undefined;
            if(var22) { _fun0010_ip = 119; continue _fun0010 }
case 120:
            var20 = var21.type;
case 119:
            var2['channel_type'] = var20;
            var2['guild_id'] = var19;
            var2['application_id'] = var18;
            var17 = var17.launchId;
            var2['instance_id'] = var17;
            var15 = var16[var15];
            var2['initial_media_session_id'] = var15;
            var2['activity_user_session_id'] = var14;
            var2['raw_thermal_state'] = var13;
            var2['is_activity_start'] = var11;
            var13 = var8 == var12;
            var11 = undefined;
            if(var13) { _fun0010_ip = 121; continue _fun0010 }
case 122:
            var12 = var12.activity;
            var13 = var8 == var12;
            var11 = undefined;
            if(var13) { _fun0010_ip = 121; continue _fun0010 }
case 123:
            var11 = var12.shelf_rank;
case 121:
            var2['shelf_rank'] = var11;
            var8 = null;
            if(!var10) { _fun0010_ip = 124; continue _fun0010 }
case 125:
            var8 = var9;
case 124:
            var2['shelf_sorted_rank'] = var8;
            var2['activities_infra_version'] = var7;
            var6 = var6.kind;
            var2['embedded_activity_location_kind'] = var6;
            var2 = var4.bind(var5)(var3, var2);
case 69:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot18 = var8;
    var8 = var4.RPCCloseCodes;
    var _closure1_slot19 = var8;
    var8 = var4.Endpoints;
    var _closure1_slot20 = var8;
    var8 = var4.RTCConnectionStates;
    var _closure1_slot21 = var8;
    var4 = var4.ComponentActions;
    var _closure1_slot22 = var4;
    var4 = {};
    var _closure1_slot23 = var4;
    var4 = {};
    var _closure1_slot24 = var4;
    var4 = {};
    var _closure1_slot25 = var4;
    var _closure1_slot26 = var1;
    var4 = 42;
    var4 = var7[var4];
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var4 = function EmbeddedActivitiesManager(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot29;
                var1 = var1.bind(var4)();
                if(var1) { _fun0011_ip = 126; continue _fun0011 }
case 127:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0011_ip = 128; continue _fun0011;
case 126:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 128:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var2 = _closure1_slot14;
                        var1 = var2.getVoiceChannelId;
                        var4 = var1.bind(var2)();
                        var6 = _closure1_slot27;
                        var2 = _closure1_slot17;
                        var1 = var2.getSelfEmbeddedActivities;
                        var2 = var1.bind(var2)();
                        var1 = var2.values;
                        var2 = var1.bind(var2)();
                        var1 = undefined;
                        var11 = var6.bind(var1)(var2);
                        var7 = var11.bind(var1)();
                        var6 = var7.done;
                        var9 = 28;
                        var8 = 19;
                        var2 = null;
                        if(var6) { _fun0012_ip = 129; continue _fun0012 }
case 130:
                        var6 = var7.value;
                        var15 = var6.location;
                        var14 = var6.applicationId;
                        var12 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var12 = var12.bind(var1)(var6);
                        var6 = var12.getEmbeddedActivityLocationChannelId;
                        var12 = var6.bind(var12)(var15);
                        var6 = var2 != var12;
                        if(!var6) { _fun0012_ip = 131; continue _fun0012 }
case 132:
                        var16 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var13 = var13[var9];
                        var13 = var16.bind(var1)(var13);
                        var6 = var13.bind(var1)(var12);
case 131:
                        if(!var6) { _fun0012_ip = 133; continue _fun0012 }
case 134:
                        var6 = var12 !== var4;
case 133:
                        if(!var6) { _fun0012_ip = 19; continue _fun0012 }
case 135:
                        var13 = _closure3_slot0;
                        var12 = var13.leaveActivity;
                        var6 = {};
                        var6['location'] = var15;
                        var6['applicationId'] = var14;
                        var6 = var12.bind(var13)(var6);
case 19:
                        var12 = var11.bind(var1)();
                        var6 = var12.done;
                        var7 = var12;
                        if(!var6) { _fun0012_ip = 130; continue _fun0012 }
case 129:
                        if(!(var2 != var4)) { _fun0012_ip = 136; continue _fun0012 }
case 72:
                        var7 = _closure1_slot17;
                        var6 = var7.getEmbeddedActivitiesForChannel;
                        var7 = var6.bind(var7)(var4);
                        var8 = _closure1_slot11;
                        var6 = var8.getId;
                        var6 = var6.bind(var8)();
                        var _closure4_slot0 = var6;
                        var6 = var7.forEach;
                        var5 = function(arg1) {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                var4 = arg1;
                                var3 = var4.userIds;
                                var2 = var3.has;
                                var1 = _closure4_slot0;
                                var1 = var2.bind(var3)(var1);
                                if(!var1) { _fun0013_ip = 137; continue _fun0013 }
case 138:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 19;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var5.bind(var2)(var3);
                                var3 = var5.getEmbeddedActivityLocationChannelId;
                                var2 = var4.location;
                                var5 = var3.bind(var5)(var2);
                                var3 = _closure1_slot17;
                                var2 = var3.getSelfEmbeddedActivityForChannel;
                                var5 = var2.bind(var3)(var5);
                                var2 = null;
                                if(!(var2 != var5)) { _fun0013_ip = 139; continue _fun0013 }
case 140:
                                var1 = _closure1_slot26;
                                if(!(var2 == var1)) { _fun0013_ip = 137; continue _fun0013 }
case 141:
                                var3 = _closure3_slot0;
                                var2 = var3.hidePIPEmbed;
                                var1 = {};
                                var6 = var5.location;
                                var1['location'] = var6;
                                var5 = var5.applicationId;
                                var1['applicationId'] = var5;
                                var1 = var2.bind(var3)(var1);
                                _fun0013_ip = 137; continue _fun0013;
case 139:
                                var3 = _closure3_slot0;
                                var2 = var3.leaveActivity;
                                var1 = {};
                                var5 = var4.location;
                                var1['location'] = var5;
                                var4 = var4.applicationId;
                                var1['applicationId'] = var4;
                                var1 = var2.bind(var3)(var1);
case 137:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var5 = var6.bind(var7)(var5);
case 136:
                        var5 = var2 != var4;
                        var2 = undefined;
                        if(!var5) { _fun0012_ip = 142; continue _fun0012 }
case 143:
                        var2 = var4;
case 142:
                        _closure1_slot26 = var2;
                        return var1;
                    }
                };
                var1['handleSelectedChannelUpdate'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.releaseWebView;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleActivityWebViewRelease'] = var3;
                var3 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.nonce;
                        var4 = var1.applicationId;
                        var3 = _closure1_slot33;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4, var5);
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 29;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isUsingDevShelfActivityUrlOverride;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0014_ip = 144; continue _fun0014 }
case 145:
                        var3 = _closure3_slot0;
                        var2 = var3.showDevShelfOverrideEnabled;
                        var2 = var2.bind(var3)();
case 144:
                        return var1;
                    }
                };
                var1['handleActivityLaunchSuccess'] = var3;
                var3 = function() {
                    var4 = _closure1_slot8;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0015_ip = 146; continue _fun0015 }
case 49:
                                var7 = var2.error;
                                var6 = var2.nonce;
                                var10 = var2.channelId;
                                var16 = var2.guildId;
                                var15 = var2.applicationId;
                                var12 = var2.isStart;
                                var9 = var2.locationKind;
                                var4 = undefined;
                                SaveGenerator(address=57);
case 36:
                                return var4;
case 147:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0015_ip = 148; continue _fun0015 }
case 149:
                                var3 = _closure1_slot32;
                                var11 = var3.bind(var4)(var15, var6);
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 30;
                                var3 = var8[var3];
                                var6 = var6.bind(var4)(var3);
                                var3 = var6.getActivityLaunchErrorInfo;
                                var3 = var3.bind(var6)(var7, var15);
                                SaveGenerator(address=115);
case 150:
                                return var3;
case 151:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                if(var6) { _fun0015_ip = 152; continue _fun0015 }
case 153:
                                var8 = _closure3_slot0;
                                var7 = var8.showLaunchErrorModal;
                                var6 = var3.message;
                                var6 = var7.bind(var8)(var6);
                                var7 = _closure1_slot12;
                                var6 = var7.getChannel;
                                var13 = var6.bind(var7)(var10);
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var6 = 21;
                                var6 = var8[var6];
                                var14 = var7.bind(var4)(var6);
                                var6 = var14.getRawThermalState;
                                var14 = var6.bind(var14)();
                                var6 = 22;
                                var6 = var8[var6];
                                var8 = var7.bind(var4)(var6);
                                var7 = var8.track;
                                var5 = _closure1_slot18;
                                var6 = var5.ACTIVITY_SESSION_JOIN_FAILED;
                                var5 = {};
                                var5['channel_id'] = var10;
                                var10 = null;
                                if(!(var10 == var16)) { _fun0015_ip = 154; continue _fun0015 }
case 75:
                                var18 = var10 == var13;
                                var17 = undefined;
                                if(var18) { _fun0015_ip = 155; continue _fun0015 }
case 77:
                                var18 = var13.getGuildId;
                                var17 = var18.bind(var13)();
case 155:
                                var16 = var17;
case 154:
                                var5['guild_id'] = var16;
                                var5['application_id'] = var15;
                                var5['raw_thermal_state'] = var14;
                                var5['is_activity_start'] = var12;
                                var14 = var10 == var13;
                                var12 = undefined;
                                if(var14) { _fun0015_ip = 156; continue _fun0015 }
case 157:
                                var12 = var13.type;
case 156:
                                var5['channel_type'] = var12;
                                var13 = var10 == var11;
                                var12 = undefined;
                                if(var13) { _fun0015_ip = 158; continue _fun0015 }
case 159:
                                var12 = var11.locations;
case 158:
                                var5['location_stack'] = var12;
                                var12 = var3.errorType;
                                var5['error_type'] = var12;
                                var12 = var3.errorStatus;
                                var5['error_status'] = var12;
                                var12 = var3.errorCode;
                                var5['error_code'] = var12;
                                var12 = var10 == var11;
                                var10 = undefined;
                                if(var12) { _fun0015_ip = 160; continue _fun0015 }
case 161:
                                var10 = var11.source;
case 160:
                                var5['source'] = var10;
                                var5['embedded_activity_location_kind'] = var9;
                                var5 = var7.bind(var8)(var6, var5);
                                return var4;
case 152:
                                return var3;
case 148:
                                return var2;
case 146:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var3 = var3.bind(var4)();
                var1['handleActivityLaunchFail'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.nonce;
                    var3 = var1.applicationId;
                    var2 = _closure1_slot32;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3, var4);
                    return var1;
                };
                var1['handleActivityLaunchCancel'] = var3;
                var3 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.reason;
                        var1 = var1.application;
                        var3 = var1.id;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0016_ip = 162; continue _fun0016 }
case 34:
                        if(!(var1 != var4)) { _fun0016_ip = 162; continue _fun0016 }
case 50:
                        var5 = _closure1_slot27;
                        var6 = _closure1_slot17;
                        var1 = var6.getSelfEmbeddedActivities;
                        var6 = var1.bind(var6)();
                        var1 = var6.values;
                        var1 = var1.bind(var6)();
                        var7 = undefined;
                        var8 = var5.bind(var7)(var1);
                        var6 = var8.bind(var7)();
                        var5 = var6.done;
                        if(var5) { _fun0016_ip = 163; continue _fun0016 }
case 164:
                        var9 = var6.value;
                        var5 = var9.applicationId;
                        var11 = var9.location;
                        if(!(var5 === var3)) { _fun0016_ip = 165; continue _fun0016 }
case 166:
                        var10 = _closure3_slot0;
                        var9 = var10.leaveActivity;
                        var5 = {};
                        var5['location'] = var11;
                        var5['applicationId'] = var3;
                        var5 = var9.bind(var10)(var5);
case 165:
                        var9 = var8.bind(var7)();
                        var5 = var9.done;
                        var6 = var9;
                        if(!var5) { _fun0016_ip = 164; continue _fun0016 }
case 163:
                        var6 = var4.code;
                        var5 = _closure1_slot19;
                        var5 = var5.CLOSE_NORMAL;
                        if(!(var6 !== var5)) { _fun0016_ip = 162; continue _fun0016 }
case 167:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 22;
                        var5 = var8[var5];
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.track;
                        var2 = _closure1_slot18;
                        var5 = var2.ACTIVITY_CLOSED_RPC_ERROR;
                        var2 = {};
                        var8 = var4.code;
                        var2['rpc_close_code'] = var8;
                        var8 = var4.message;
                        var2['rpc_message'] = var8;
                        var2['application_id'] = var3;
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = _closure3_slot0;
                        var1 = var2.showErrorModal;
                        var1 = var1.bind(var2)(var4, var3);
case 162:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['superHandleRPCDisconnect'] = var3;
                var3 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.channelId;
                        var2 = _closure1_slot14;
                        var1 = var2.getVoiceChannelId;
                        var2 = var1.bind(var2)();
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0017_ip = 42; continue _fun0017 }
case 43:
                        var1 = var2 === var3;
case 42:
                        if(!var1) { _fun0017_ip = 168; continue _fun0017 }
case 44:
                        var2 = _closure3_slot0;
                        var1 = var2.handleCallEnded;
                        var1 = var1.bind(var2)(var3);
case 168:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCallDelete'] = var3;
                var3 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.state;
                        var2 = _closure1_slot21;
                        var2 = var2.DISCONNECTED;
                        if(!(var3 === var2)) { _fun0018_ip = 5; continue _fun0018 }
case 169:
                        var3 = var1.channelId;
                        var2 = _closure3_slot0;
                        var1 = var2.handleCallEnded;
                        var1 = var1.bind(var2)(var3);
case 5:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleRTCConnectionState'] = var3;
                var3 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var3 = _closure1_slot17;
                        var2 = var3.getSelfEmbeddedActivityForChannel;
                        var1 = arg1;
                        var4 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var4)) { _fun0019_ip = 170; continue _fun0019 }
case 171:
                        var3 = _closure3_slot0;
                        var2 = var3.leaveActivity;
                        var1 = {};
                        var5 = var4.location;
                        var1['location'] = var5;
                        var4 = var4.applicationId;
                        var1['applicationId'] = var4;
                        var1 = var2.bind(var3)(var1);
case 170:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCallEnded'] = var3;
                var3 = function() {
                    var4 = _closure1_slot8;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0020_ip = 172; continue _fun0020 }
case 173:
                                var15 = var2.channelId;
                                var13 = var2.applicationId;
                                var _closure6_slot0 = var13;
                                var11 = var2.analyticsLocations;
                                var16 = var2.commandOrigin;
                                var10 = var2.inviterUserId;
                                var3 = undefined;
                                SaveGenerator(address=53);
case 174:
                                return var3;
case 175:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0020_ip = 109; continue _fun0020 }
case 145:
                                var5 = _closure1_slot12;
                                var4 = var5.getChannel;
                                var9 = var4.bind(var5)(var15);
                                if(!(var3 !== var9)) { _fun0020_ip = 176; continue _fun0020 }
case 126:
                                var6 = _closure1_slot10;
                                var5 = var6.has;
                                var12 = null;
                                var14 = var12 == var9;
                                var4 = undefined;
                                if(var14) { _fun0020_ip = 177; continue _fun0020 }
case 166:
                                var4 = var9.type;
case 177:
                                var4 = var5.bind(var6)(var4);
                                if(!var4) { _fun0020_ip = 178; continue _fun0020 }
case 179:
                                var5 = _closure1_slot14;
                                var4 = var5.getVoiceChannelId;
                                var4 = var4.bind(var5)();
                                if(!(var4 === var15)) { _fun0020_ip = 176; continue _fun0020 }
case 178:
                                var5 = _closure1_slot17;
                                var4 = var5.getSelfEmbeddedActivityForChannel;
                                var5 = var4.bind(var5)(var15);
                                var6 = var12 == var5;
                                var4 = undefined;
                                if(var6) { _fun0020_ip = 180; continue _fun0020 }
case 181:
                                var4 = var5.applicationId;
case 180:
                                if(!(var4 !== var13)) { _fun0020_ip = 176; continue _fun0020 }
case 182:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 31;
                                var4 = var6[var4];
                                var5 = var5.bind(var3)(var4);
                                var4 = var5.fetchApplication;
                                var4 = var4.bind(var5)(var13);
                                SaveGenerator(address=211);
case 183:
                                return var4;
case 71:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                if(var5) { _fun0020_ip = 184; continue _fun0020 }
case 185:
                                var6 = _closure1_slot0;
                                var14 = _closure1_slot2;
                                var5 = 32;
                                var5 = var14[var5];
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.getIsActivitiesEnabledForCurrentPlatform;
                                var5 = var5.bind(var6)();
                                if(var5) { _fun0020_ip = 186; continue _fun0020 }
case 136:
                                var14 = _closure3_slot0;
                                var6 = var14.showLaunchErrorModal;
                                var19 = _closure1_slot0;
                                var20 = _closure1_slot2;
                                var5 = 33;
                                var17 = var20[var5];
                                var17 = var19.bind(var3)(var17);
                                var18 = var17.intl;
                                var17 = var18.string;
                                var5 = var20[var5];
                                var5 = var19.bind(var3)(var5);
                                var5 = var5.t;
                                var5 = var5.UXoQTp;
                                var5 = var17.bind(var18)(var5);
                                var5 = var6.bind(var14)(var5);
                                _fun0020_ip = 176; continue _fun0020;
case 186:
                                var6 = _closure1_slot1;
                                var14 = _closure1_slot2;
                                var5 = 34;
                                var5 = var14[var5];
                                var6 = var6.bind(var3)(var5);
                                var14 = var12 == var4;
                                var5 = undefined;
                                if(var14) { _fun0020_ip = 146; continue _fun0020 }
case 187:
                                var14 = var4.embedded_activity_config;
                                var17 = var12 == var14;
                                var5 = undefined;
                                if(var17) { _fun0020_ip = 146; continue _fun0020 }
case 152:
                                var5 = var14.supported_platforms;
case 146:
                                var5 = var6.bind(var3)(var5);
                                if(var5) { _fun0020_ip = 188; continue _fun0020 }
case 189:
                                var14 = _closure3_slot0;
                                var6 = var14.showLaunchErrorModal;
                                var19 = _closure1_slot0;
                                var20 = _closure1_slot2;
                                var5 = 33;
                                var17 = var20[var5];
                                var17 = var19.bind(var3)(var17);
                                var18 = var17.intl;
                                var17 = var18.string;
                                var5 = var20[var5];
                                var5 = var19.bind(var3)(var5);
                                var5 = var5.t;
                                var5 = var5.uGDCcw;
                                var5 = var17.bind(var18)(var5);
                                var5 = var6.bind(var14)(var5);
                                _fun0020_ip = 176; continue _fun0020;
case 188:
                                var6 = var12 == var9;
                                var5 = undefined;
                                if(var6) { _fun0020_ip = 190; continue _fun0020 }
case 191:
                                var6 = var9.getGuildId;
                                var5 = var6.bind(var9)();
case 190:
                                var6 = var12 != var5;
                                var18 = undefined;
                                if(!var6) { _fun0020_ip = 192; continue _fun0020 }
case 193:
                                var18 = var5;
case 192:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var14 = 35;
                                var5 = var5[var14];
                                var9 = var6.bind(var3)(var5);
                                var6 = var9.fetchShelf;
                                var5 = {};
                                var5['guildId'] = var18;
                                var5 = var6.bind(var9)(var5);
                                SaveGenerator(address=539);
case 194:
                                return var5;
case 66:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                                if(var6) { _fun0020_ip = 195; continue _fun0020 }
case 196:
                                var20 = var5.activityConfigs;
                                var19 = var5.applications;
                                var9 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var17 = 20;
                                var6 = var6[var17];
                                var9 = var9.bind(var3)(var6);
                                var6 = {};
                                var6['applicationId'] = var13;
                                var6['activityConfigs'] = var20;
                                var6['applications'] = var19;
                                var6 = var9.bind(var3)(var6);
                                if(!(var12 == var6)) { _fun0020_ip = 197; continue _fun0020 }
case 198:
                                var9 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var14];
                                var14 = var9.bind(var3)(var6);
                                var9 = var14.fetchShelf;
                                var6 = {};
                                var6['guildId'] = var18;
                                var18 = true;
                                var6['force'] = var18;
                                var6 = var9.bind(var14)(var6);
                                SaveGenerator(address=650);
case 199:
                                return var6;
case 200:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                                if(var9) { _fun0020_ip = 201; continue _fun0020 }
case 202:
                                var14 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var9 = var9[var17];
                                var14 = var14.bind(var3)(var9);
                                var9 = {};
                                var9['applicationId'] = var13;
                                var17 = var6.activityConfigs;
                                var9['activityConfigs'] = var17;
                                var17 = var6.applications;
                                var9['applications'] = var17;
                                var9 = var14.bind(var3)(var9);
case 197:
                                var14 = _closure1_slot17;
                                var9 = var14.getEmbeddedActivitiesForChannel;
                                var14 = var9.bind(var14)(var15);
                                var9 = var14.find;
                                var8 = function(arg1) {
                                    var1 = arg1;
                                    var2 = var1.applicationId;
                                    var1 = _closure6_slot0;
                                    var1 = var2 === var1;
                                    return var1;
                                };
                                var14 = var9.bind(var14)(var8);
                                var8 = var12 == var14;
                                var17 = undefined;
                                if(var8) { _fun0020_ip = 203; continue _fun0020 }
case 204:
                                var8 = var14.userIds;
                                var17 = var8.size;
case 203:
                                var18 = var12 != var17;
                                var9 = 0;
                                var8 = 0;
                                if(!var18) { _fun0020_ip = 205; continue _fun0020 }
case 206:
                                var8 = var17;
case 205:
                                if(!(!(var8 > var9))) { _fun0020_ip = 207; continue _fun0020 }
case 208:
                                var9 = _closure1_slot1;
                                var17 = _closure1_slot2;
                                var8 = 37;
                                var8 = var17[var8];
                                var9 = var9.bind(var3)(var8);
                                var8 = {};
                                var8['targetApplicationId'] = var13;
                                var8['channelId'] = var15;
                                var8['analyticsLocations'] = var11;
                                var8['commandOrigin'] = var16;
                                var8['inviterUserId'] = var10;
                                var8 = var9.bind(var3)(var8);
                                SaveGenerator(address=832);
case 209:
                                return var8;
case 210:
                                ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                                if(!var9) { _fun0020_ip = 176; continue _fun0020 }
case 211:
                                return var8;
case 207:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 36;
                                var7 = var9[var7];
                                var9 = var8.bind(var3)(var7);
                                var8 = var9.maybeJoinEmbeddedActivity;
                                var7 = {};
                                var7['channelId'] = var15;
                                var7['applicationId'] = var13;
                                var15 = var12 == var14;
                                var13 = undefined;
                                if(var15) { _fun0020_ip = 212; continue _fun0020 }
case 213:
                                var13 = var14.launchId;
case 212:
                                var7['launchId'] = var13;
                                var7['inputApplication'] = var12;
                                var7['analyticsLocations'] = var11;
                                var7['inviterUserId'] = var10;
                                var7 = var8.bind(var9)(var7);
                                SaveGenerator(address=921);
case 214:
                                return var7;
case 215:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                if(!var8) { _fun0020_ip = 176; continue _fun0020 }
case 216:
                                return var7;
case 201:
                                return var6;
case 195:
                                return var5;
case 184:
                                return var4;
case 176:
                                return var3;
case 109:
                                return var2;
case 172:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var3 = var3.bind(var4)();
                var1['handleDeferredOpen'] = var3;
                var3 = function(arg1) {
                    var2 = arg1;
                    var2 = var2.guild;
                    var _closure4_slot0 = var2;
                    var3 = _closure1_slot17;
                    var2 = var3.getSelfEmbeddedActivities;
                    var3 = var2.bind(var3)();
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var1 = arg1;
                            var6 = var1.location;
                            var5 = var1.applicationId;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getEmbeddedActivityLocationGuildId;
                            var3 = var2.bind(var3)(var6);
                            var2 = _closure4_slot0;
                            var2 = var2.id;
                            if(!(var2 === var3)) { _fun0021_ip = 217; continue _fun0021 }
case 170:
                            var4 = _closure3_slot0;
                            var3 = var4.leaveActivity;
                            var2 = {};
                            var2['location'] = var6;
                            var2['applicationId'] = var5;
                            var2 = var3.bind(var4)(var2);
case 217:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleGuildDelete'] = var3;
                var3 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.channel;
                        var3 = _closure1_slot17;
                        var2 = var3.getSelfEmbeddedActivityForChannel;
                        var1 = var1.id;
                        var4 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var4)) { _fun0022_ip = 218; continue _fun0022 }
case 45:
                        var3 = _closure3_slot0;
                        var2 = var3.leaveActivity;
                        var1 = {};
                        var5 = var4.location;
                        var1['location'] = var5;
                        var4 = var4.applicationId;
                        var1['applicationId'] = var4;
                        var1 = var2.bind(var3)(var1);
case 218:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleChannelDelete'] = var3;
                var3 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.nonce;
                        var1 = var1.data;
                        var5 = _closure1_slot24;
                        var4 = var1.applicationId;
                        var5 = var5[var4];
                        var4 = null;
                        if(!(var4 == var5)) { _fun0023_ip = 219; continue _fun0023 }
case 220:
                        var5 = var1.interactionType;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var8 = 38;
                        var4 = var4[var8];
                        var6 = undefined;
                        var4 = var7.bind(var6)(var4);
                        var4 = var4.InteractionTypes;
                        var4 = var4.APPLICATION_COMMAND;
                        if(!(var5 !== var4)) { _fun0023_ip = 221; continue _fun0023 }
case 126:
                        var5 = var1.interactionType;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var4 = var7.bind(var6)(var4);
                        var4 = var4.InteractionTypes;
                        var4 = var4.MESSAGE_COMPONENT;
                        if(!(var5 !== var4)) { _fun0023_ip = 72; continue _fun0023 }
case 222:
                        var5 = var1.interactionType;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var4 = var7.bind(var6)(var4);
                        var4 = var4.InteractionTypes;
                        var4 = var4.MODAL_SUBMIT;
                        var7 = undefined;
                        if(!(var5 === var4)) { _fun0023_ip = 78; continue _fun0023 }
case 223:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 39;
                        var4 = var8[var4];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.INTERACTION_MODAL_SUBMIT;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var7 = var4;
                        _fun0023_ip = 78; continue _fun0023;
case 72:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 39;
                        var4 = var8[var4];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.INTERACTION_MESSAGE_COMPONENT;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var7 = var4;
                        _fun0023_ip = 78; continue _fun0023;
case 221:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 39;
                        var4 = var8[var4];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.INTERACTION_APPLICATION_COMMAND;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var7 = var4;
case 78:
                        var5 = _closure1_slot31;
                        var4 = {};
                        var8 = var1.applicationId;
                        var4['applicationId'] = var8;
                        var4['nonce'] = var3;
                        var4['locations'] = var7;
                        var4 = var5.bind(var6)(var4);
                        if(!var4) { _fun0023_ip = 219; continue _fun0023 }
case 224:
                        var2 = _closure1_slot25;
                        var1 = var1.applicationId;
                        var2[var3] = var1;
case 219:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleInteractionQueue'] = var3;
                var3 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.nonce;
                        var2 = var1.interactionId;
                        var3 = null;
                        if(!(var3 != var5)) { _fun0024_ip = 4; continue _fun0024 }
case 225:
                        var4 = _closure1_slot25;
                        var4 = var4[var5];
                        if(!(var3 != var4)) { _fun0024_ip = 4; continue _fun0024 }
case 226:
                        var1 = _closure1_slot24;
                        var1 = var1[var4];
                        if(!(var3 != var1)) { _fun0024_ip = 4; continue _fun0024 }
case 5:
                        var1['interactionId'] = var2;
case 4:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleInteractionCreate'] = var3;
                var3 = function(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.nonce;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0025_ip = 227; continue _fun0025 }
case 173:
                        var3 = _closure1_slot25;
                        var3 = var3[var4];
                        if(!(var2 != var3)) { _fun0025_ip = 227; continue _fun0025 }
case 3:
                        var2 = _closure1_slot25;
                        var2 = delete var2[var4];
                        var2 = _closure1_slot33;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3, var4);
case 227:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleInteractionSuccess'] = var3;
                var2 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.nonce;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0026_ip = 227; continue _fun0026 }
case 173:
                        var3 = _closure1_slot25;
                        var3 = var3[var4];
                        if(!(var2 != var3)) { _fun0026_ip = 227; continue _fun0026 }
case 3:
                        var2 = _closure1_slot25;
                        var2 = delete var2[var4];
                        var2 = _closure1_slot32;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3, var4);
case 227:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleInteractionFailure'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var4 = _closure1_slot14;
            var3 = var4.addChangeListener;
            var1 = var2.handleSelectedChannelUpdate;
            var1 = var3.bind(var4)(var1);
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 40;
            var3 = var5[var4];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var11 = var3.ComponentDispatch;
            var10 = var11.subscribe;
            var3 = _closure1_slot22;
            var9 = var3.RELEASE_ACTIVITY_WEB_VIEW;
            var8 = var2.handleActivityWebViewRelease;
            var8 = var10.bind(var11)(var9, var8);
            var4 = var5[var4];
            var4 = var7.bind(var1)(var4);
            var8 = var4.ComponentDispatch;
            var7 = var8.subscribe;
            var4 = var3.OPEN_EMBEDDED_ACTIVITY;
            var3 = _closure1_slot37;
            var3 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 41;
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.subscribe;
            var8 = _closure1_slot34;
            var7 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.subscribe;
            var8 = var2.handleActivityLaunchSuccess;
            var7 = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.subscribe;
            var8 = var2.handleActivityLaunchFail;
            var7 = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.subscribe;
            var8 = var2.handleActivityLaunchCancel;
            var7 = 'EMBEDDED_ACTIVITY_LAUNCH_CANCEL';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var5[var3];
            var9 = var4.bind(var1)(var7);
            var8 = var9.subscribe;
            var7 = _closure1_slot35;
            var6 = 'EMBEDDED_ACTIVITY_CLOSE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleDeferredOpen;
            var6 = 'EMBEDDED_ACTIVITY_DEFERRED_OPEN';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleRPCDisconnect;
            var6 = 'RPC_APP_DISCONNECTED';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleCallDelete;
            var6 = 'CALL_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleRTCConnectionState;
            var6 = 'RTC_CONNECTION_STATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleGuildDelete;
            var6 = 'GUILD_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleChannelDelete;
            var6 = 'CHANNEL_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleInteractionQueue;
            var6 = 'INTERACTION_QUEUE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleInteractionCreate;
            var6 = 'INTERACTION_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.subscribe;
            var7 = var2.handleInteractionSuccess;
            var6 = 'INTERACTION_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = var2.handleInteractionFailure;
            var2 = 'INTERACTION_FAILURE';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var2 = this;
            var4 = _closure1_slot14;
            var3 = var4.removeChangeListener;
            var1 = var2.handleSelectedChannelUpdate;
            var1 = var3.bind(var4)(var1);
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 40;
            var3 = var5[var4];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var11 = var3.ComponentDispatch;
            var10 = var11.unsubscribe;
            var3 = _closure1_slot22;
            var9 = var3.RELEASE_ACTIVITY_WEB_VIEW;
            var8 = var2.handleActivityWebViewRelease;
            var8 = var10.bind(var11)(var9, var8);
            var4 = var5[var4];
            var4 = var7.bind(var1)(var4);
            var8 = var4.ComponentDispatch;
            var7 = var8.unsubscribe;
            var4 = var3.OPEN_EMBEDDED_ACTIVITY;
            var3 = _closure1_slot37;
            var3 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 41;
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.unsubscribe;
            var8 = _closure1_slot34;
            var7 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.unsubscribe;
            var8 = var2.handleActivityLaunchSuccess;
            var7 = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.unsubscribe;
            var8 = var2.handleActivityLaunchFail;
            var7 = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.unsubscribe;
            var8 = var2.handleActivityLaunchCancel;
            var7 = 'EMBEDDED_ACTIVITY_LAUNCH_CANCEL';
            var7 = var9.bind(var10)(var7, var8);
            var7 = var5[var3];
            var9 = var4.bind(var1)(var7);
            var8 = var9.unsubscribe;
            var7 = _closure1_slot35;
            var6 = 'EMBEDDED_ACTIVITY_CLOSE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleDeferredOpen;
            var6 = 'EMBEDDED_ACTIVITY_DEFERRED_OPEN';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleRPCDisconnect;
            var6 = 'RPC_APP_DISCONNECTED';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleCallDelete;
            var6 = 'CALL_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleRTCConnectionState;
            var6 = 'RTC_CONNECTION_STATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleGuildDelete;
            var6 = 'GUILD_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleChannelDelete;
            var6 = 'CHANNEL_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleInteractionQueue;
            var6 = 'INTERACTION_QUEUE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleInteractionCreate;
            var6 = 'INTERACTION_CREATE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var1)(var6);
            var8 = var9.unsubscribe;
            var7 = var2.handleInteractionSuccess;
            var6 = 'INTERACTION_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = var2.handleInteractionFailure;
            var2 = 'INTERACTION_FAILURE';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 43;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/EmbeddedActivitiesManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function getActiveAnalyticsSessionIDs(arg1) {
        var2 = _closure1_slot23;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var3['getActiveAnalyticsSessionIDs'] = var2;
    return var1;
})();