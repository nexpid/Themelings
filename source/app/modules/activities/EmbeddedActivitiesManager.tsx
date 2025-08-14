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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot32;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot32;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot33 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function getShelfItemTrackingProperties(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var4 = null;
            var5 = var4 == var3;
            var6 = undefined;
            var2 = undefined;
            if(var5) { _fun0005_ip = 103; continue _fun0005 }
 18:
            var3 = var3.activity;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 103; continue _fun0005 }
 33:
            var4 = var3.client_platform_config;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 17;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var7 = _closure1_slot0;
            var3 = 18;
            var3 = var8[var3];
            var7 = var7.bind(var6)(var3);
            var3 = var7.getOS;
            var3 = var3.bind(var7)();
            var3 = var5.bind(var6)(var3);
            var3 = var4[var3];
            var2 = var3.release_phase;
 103:
            var1['releasePhase'] = var2;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function setAwaitingAnalyticsContext(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var7 = var1.nonce;
            var6 = var1.locations;
            var5 = var1.source;
            var2 = null;
            var1 = var2 != var6;
            if(var1) { _fun0006_ip = 38; continue _fun0006 }
 34:
            var1 = var2 != var5;
 38:
            if(!var1) { _fun0006_ip = 70; continue _fun0006 }
 41:
            var3 = _closure1_slot28;
            var2 = {};
            var2['nonce'] = var7;
            var2['locations'] = var6;
            var2['source'] = var5;
            var3[var4] = var2;
            var1 = true;
 70:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function clearAwaitingAnalyticsContextImmediate(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot28;
            var1 = var1[var3];
            var4 = null;
            if(!(var4 != var1)) { _fun0007_ip = 33; continue _fun0007 }
 20:
            var5 = var1.nonce;
            var4 = arg2;
            if(!(var5 !== var4)) { _fun0007_ip = 37; continue _fun0007 }
 33:
            var4 = undefined;
            return var4;
 37:
            var2 = _closure1_slot28;
            var2 = delete var2[var3];
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function clearAwaitingAnalyticsContextAsync(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = global;
        var4 = var1.setTimeout;
        var1 = undefined;
        var3 = function() {
            var4 = _closure1_slot36;
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
    var _closure1_slot37 = var1;
    var1 = function handleActivityLaunchStart(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var6 = var2.applicationId;
            var4 = var2.nonce;
            var1 = var2.analyticsLocations;
            var5 = var2.source;
            var3 = _closure1_slot35;
            var2 = {};
            var2['applicationId'] = var6;
            var2['nonce'] = var4;
            var2['locations'] = var1;
            var1 = null;
            var6 = var1 != var5;
            var1 = undefined;
            var4 = undefined;
            if(!var6) { _fun0008_ip = 64; continue _fun0008 }
 61:
            var4 = var5;
 64:
            var2['source'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function handleActivityClose() {
        var1 = undefined;
        var4 = _closure1_slot40;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function _handleActivityClose() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 727; continue _fun0009 }
 13:
                    var6 = var2.applicationId;
                    var11 = var2.location;
                    var15 = var2.instanceId;
                    var4 = undefined;
                    SaveGenerator(address=35);
 33:
                    return var4;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 724; continue _fun0009 }
 44:
                    var8 = _closure1_slot19;
                    var7 = var8.getEmbeddedActivityDurationMs;
                    var3 = var11.id;
                    var12 = var7.bind(var8)(var3, var6);
                    var7 = _closure1_slot11;
                    var3 = var7.getSessionId;
                    var10 = var3.bind(var7)();
                    var16 = null;
                    var3 = var16 != var15;
                    if(!var3) { _fun0009_ip = 95; continue _fun0009 }
 91:
                    var3 = var16 != var10;
 95:
                    if(!var3) { _fun0009_ip = 200; continue _fun0009 }
 98:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 19;
                    var3 = var8[var3];
                    var3 = var7.bind(var4)(var3);
                    var8 = var3.HTTP;
                    var7 = var8.post;
                    var3 = {};
                    var14 = _closure1_slot23;
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
 189:
                    return var3;
 191:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0009_ip = 721; continue _fun0009 }
 200:
                    var7 = _closure1_slot27;
                    var14 = var7[var6];
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 20;
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
                    if(!(var16 != var14)) { _fun0009_ip = 718; continue _fun0009 }
 293:
                    if(!(var16 != var22)) { _fun0009_ip = 718; continue _fun0009 }
 300:
                    var8 = _closure1_slot19;
                    var7 = var8.getShelfActivities;
                    var13 = var7.bind(var8)(var15);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var9 = 21;
                    var9 = var7[var9];
                    var10 = var8.bind(var4)(var9);
                    var9 = {};
                    var9['applicationId'] = var6;
                    var9['activityConfigs'] = var13;
                    var21 = var10.bind(var4)(var9);
                    var9 = _closure1_slot34;
                    var9 = var9.bind(var4)(var21);
                    var19 = var9.releasePhase;
                    var9 = 22;
                    var9 = var7[var9];
                    var10 = var8.bind(var4)(var9);
                    var9 = var10.getRawThermalState;
                    var13 = var9.bind(var10)();
                    var9 = 23;
                    var7 = var7[var9];
                    var18 = var8.bind(var4)(var7);
                    var10 = var18.track;
                    var7 = _closure1_slot20;
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
                    if(var22) { _fun0009_ip = 514; continue _fun0009 }
 493:
                    var21 = var21.activity;
                    var22 = var16 == var21;
                    var19 = undefined;
                    if(var22) { _fun0009_ip = 514; continue _fun0009 }
 508:
                    var19 = var21.shelf_rank;
 514:
                    var7['shelf_rank'] = var19;
                    var19 = var14.activityUserSessionId;
                    var7['activity_user_session_id'] = var19;
                    var21 = var16 == var20;
                    var19 = undefined;
                    if(var21) { _fun0009_ip = 544; continue _fun0009 }
 539:
                    var19 = var20.type;
 544:
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
                    var7 = _closure1_slot20;
                    var8 = var7.ACTIVITY_IFRAME_UNMOUNT;
                    var7 = {};
                    var7['channel_id'] = var17;
                    var7['guild_id'] = var15;
                    var7['application_id'] = var6;
                    var15 = var14.launchId;
                    var16 = var16 != var15;
                    var15 = undefined;
                    if(!var16) { _fun0009_ip = 655; continue _fun0009 }
 638:
                    var17 = var14.launchId;
                    var16 = new Array(1);
                    var16[0] = var17;
                    var15 = var16;
 655:
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
                    var5 = _closure1_slot27;
                    var5 = delete var5[var6];
 718:
                    return var4;
 721:
                    return var3;
 724:
                    return var2;
 727:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function handleOpenEmbeddedActivity(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var18 = var1.applicationId;
            var _closure2_slot0 = var18;
            var7 = var1.isFirstActivityInChannel;
            var11 = var1.isStart;
            var5 = var1.participants;
            var17 = var1.embeddedActivity;
            var6 = var1.location;
            var25 = var1.inviterUserId;
            var4 = _closure1_slot11;
            var1 = var4.getId;
            var1 = var1.bind(var4)();
            var _closure2_slot1 = var1;
            var4 = var5.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.userId;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var5)(var1);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 20;
            var10 = var9[var5];
            var1 = undefined;
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
            if(!var5) { _fun0010_ip = 165; continue _fun0010 }
 159:
            var8 = null;
            var5 = var8 != var21;
 165:
            if(!var5) { _fun0010_ip = 178; continue _fun0010 }
 168:
            var8 = var21.isPrivate;
            var5 = var8.bind(var21)();
 178:
            if(!var5) { _fun0010_ip = 184; continue _fun0010 }
 181:
            var5 = var7;
 184:
            if(!var5) { _fun0010_ip = 193; continue _fun0010 }
 187:
            var7 = null;
            var5 = var7 == var4;
 193:
            if(!var5) { _fun0010_ip = 235; continue _fun0010 }
 196:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 24;
            var5 = var8[var5];
            var9 = var7.bind(var1)(var5);
            var8 = var9.selectParticipant;
            var7 = var21.id;
            var5 = null;
            var5 = var8.bind(var9)(var7, var5);
 235:
            var8 = null;
            if(!(var8 != var4)) { _fun0010_ip = 1204; continue _fun0010 }
 244:
            var7 = _closure1_slot13;
            var5 = var7.getMediaSessionId;
            var5 = var5.bind(var7)();
            var27 = var17.compositeInstanceId;
            var7 = var8 == var5;
            if(!var7) { _fun0010_ip = 296; continue _fun0010 }
 271:
            var9 = var8 == var21;
            var10 = undefined;
            if(var9) { _fun0010_ip = 290; continue _fun0010 }
 280:
            var9 = var21.isVocal;
            var10 = var9.bind(var21)();
 290:
            var9 = true;
            var7 = var9 === var10;
 296:
            if(!var7) { _fun0010_ip = 324; continue _fun0010 }
 299:
            var9 = var8 == var21;
            var10 = undefined;
            if(var9) { _fun0010_ip = 318; continue _fun0010 }
 308:
            var9 = var21.isPrivate;
            var10 = var9.bind(var21)();
 318:
            var9 = false;
            var7 = var9 === var10;
 324:
            if(!(var8 != var27)) { _fun0010_ip = 1204; continue _fun0010 }
 331:
            if(var7) { _fun0010_ip = 1204; continue _fun0010 }
 337:
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
            if(!var10) { _fun0010_ip = 387; continue _fun0010 }
 384:
            var7 = 2;
 387:
            var12 = _closure1_slot15;
            var10 = var12.getCurrentUser;
            var26 = var10.bind(var12)();
            if(!(var8 != var26)) { _fun0010_ip = 1204; continue _fun0010 }
 407:
            var12 = _closure1_slot19;
            var10 = var12.getShelfActivities;
            var22 = var10.bind(var12)(var19);
            var12 = _closure1_slot16;
            var10 = var12.getState;
            var10 = var10.bind(var12)();
            var16 = var10.shelfOrder;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 21;
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
            var3 = _closure1_slot34;
            var3 = var3.bind(var1)(var12);
            var10 = var3.releasePhase;
            var3 = 22;
            var3 = var15[var3];
            var13 = var13.bind(var1)(var3);
            var3 = var13.getRawThermalState;
            var13 = var3.bind(var13)();
            if(!(var8 == var5)) { _fun0010_ip = 545; continue _fun0010 }
 539:
            var16 = new Array(0);
            _fun0010_ip = 556; continue _fun0010;
 545:
            var3 = new Array(1);
            var3[0] = var5;
            var16 = var3;
 556:
            var5 = {};
            var5['activitySessionId'] = var27;
            var5['activityUserSessionId'] = var14;
            var3 = var17.launchId;
            var5['launchId'] = var3;
            var5['mediaSessionIds'] = var16;
            var5['activitiesInfraVersion'] = var7;
            var3 = _closure1_slot27;
            var3[var18] = var5;
            var3 = _closure1_slot28;
            var23 = var3[var18];
            var5 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 26;
            var3 = var15[var3];
            var15 = var5.bind(var1)(var3);
            var5 = var15.isNullOrEmpty;
            var3 = var4.nonce;
            var3 = var5.bind(var15)(var3);
            if(var3) { _fun0010_ip = 672; continue _fun0010 }
 647:
            var5 = var4.nonce;
            var15 = var8 == var23;
            var4 = undefined;
            if(var15) { _fun0010_ip = 668; continue _fun0010 }
 662:
            var4 = var23.nonce;
 668:
            var3 = var5 === var4;
 672:
            if(var3) { _fun0010_ip = 677; continue _fun0010 }
 675:
            var23 = undefined;
 677:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 23;
            var3 = var3[var5];
            var24 = var4.bind(var1)(var3);
            var22 = var24.track;
            var3 = _closure1_slot20;
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
            if(var28) { _fun0010_ip = 758; continue _fun0010 }
 752:
            var27 = var23.locations;
 758:
            var3['location_stack'] = var27;
            var26 = var26.premiumType;
            var3['user_premium_tier'] = var26;
            var3['raw_thermal_state'] = var13;
            var27 = var8 != var21;
            var26 = null;
            if(!var27) { _fun0010_ip = 808; continue _fun0010 }
 788:
            var29 = _closure1_slot9;
            var28 = var29.getUserParticipantCount;
            var27 = var21.id;
            var26 = var28.bind(var29)(var27);
 808:
            var3['n_participants'] = var26;
            var3['is_activity_start'] = var11;
            var3['release_phase'] = var10;
            var26 = var8 == var12;
            var10 = undefined;
            if(var26) { _fun0010_ip = 855; continue _fun0010 }
 834:
            var26 = var12.activity;
            var27 = var8 == var26;
            var10 = undefined;
            if(var27) { _fun0010_ip = 855; continue _fun0010 }
 849:
            var10 = var26.shelf_rank;
 855:
            var3['shelf_rank'] = var10;
            var10 = var9 > var15;
            var26 = null;
            if(!var10) { _fun0010_ip = 872; continue _fun0010 }
 869:
            var26 = var9;
 872:
            var3['shelf_sorted_rank'] = var26;
            var3['activity_user_session_id'] = var14;
            var27 = var8 == var21;
            var26 = undefined;
            if(var27) { _fun0010_ip = 896; continue _fun0010 }
 891:
            var26 = var21.type;
 896:
            var3['channel_type'] = var26;
            var27 = var8 == var23;
            var26 = undefined;
            if(var27) { _fun0010_ip = 915; continue _fun0010 }
 910:
            var26 = var23.source;
 915:
            var3['source'] = var26;
            var27 = var8 != var21;
            var26 = null;
            if(!var27) { _fun0010_ip = 960; continue _fun0010 }
 928:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var27 = 27;
            var27 = var29[var27];
            var28 = var28.bind(var1)(var27);
            var27 = var28.computeCommandContextType;
            var26 = var27.bind(var28)(var21, var18);
 960:
            var3['command_context_type'] = var26;
            var3['invite_inviter_id'] = var25;
            var26 = var8 == var23;
            var25 = undefined;
            if(var26) { _fun0010_ip = 987; continue _fun0010 }
 981:
            var25 = var23.interactionId;
 987:
            var3['interaction_id'] = var25;
            var25 = var6.kind;
            var3['embedded_activity_location_kind'] = var25;
            var3 = var22.bind(var24)(var4, var3);
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot20;
            var3 = var2.ACTIVITY_IFRAME_MOUNT;
            var2 = {};
            var24 = var8 == var23;
            var22 = undefined;
            if(var24) { _fun0010_ip = 1059; continue _fun0010 }
 1053:
            var22 = var23.locations;
 1059:
            var2['location_stack'] = var22;
            var2['channel_id'] = var20;
            var22 = var8 == var21;
            var20 = undefined;
            if(var22) { _fun0010_ip = 1082; continue _fun0010 }
 1077:
            var20 = var21.type;
 1082:
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
            if(var13) { _fun0010_ip = 1163; continue _fun0010 }
 1142:
            var12 = var12.activity;
            var13 = var8 == var12;
            var11 = undefined;
            if(var13) { _fun0010_ip = 1163; continue _fun0010 }
 1157:
            var11 = var12.shelf_rank;
 1163:
            var2['shelf_rank'] = var11;
            var8 = null;
            if(!var10) { _fun0010_ip = 1176; continue _fun0010 }
 1173:
            var8 = var9;
 1176:
            var2['shelf_sorted_rank'] = var8;
            var2['activities_infra_version'] = var7;
            var6 = var6.kind;
            var2['embedded_activity_location_kind'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 1204:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var11 = 0;
    var4 = var7[var11];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var7[var10];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var9 = 2;
    var4 = var7[var9];
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
    var8 = var7[var4];
    var8 = var5.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.DevShelfFetchState;
    var _closure1_slot18 = var4;
    var4 = 15;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 16;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot20 = var8;
    var8 = var4.AbortCodes;
    var _closure1_slot21 = var8;
    var8 = var4.RPCCloseCodes;
    var _closure1_slot22 = var8;
    var8 = var4.Endpoints;
    var _closure1_slot23 = var8;
    var8 = var4.RTCConnectionStates;
    var _closure1_slot24 = var8;
    var4 = var4.ComponentActions;
    var _closure1_slot25 = var4;
    var4 = {};
    var4['ClientError'] = var11;
    var8 = 'ClientError';
    var4[var11] = var8;
    var4['CallbackError'] = var10;
    var8 = 'CallbackError';
    var4[var10] = var8;
    var4['ApiError'] = var9;
    var8 = 'ApiError';
    var4[var9] = var8;
    var _closure1_slot26 = var4;
    var4 = {};
    var _closure1_slot27 = var4;
    var4 = {};
    var _closure1_slot28 = var4;
    var4 = {};
    var _closure1_slot29 = var4;
    var _closure1_slot30 = var1;
    var4 = 45;
    var4 = var7[var4];
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var4 = function EmbeddedActivitiesManager(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
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
                var1 = _closure1_slot33;
                var1 = var1.bind(var4)();
                if(var1) { _fun0011_ip = 86; continue _fun0011 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0011_ip = 120; continue _fun0011;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var2 = _closure1_slot14;
                        var1 = var2.getVoiceChannelId;
                        var4 = var1.bind(var2)();
                        var6 = _closure1_slot31;
                        var2 = _closure1_slot19;
                        var1 = var2.getSelfEmbeddedActivities;
                        var2 = var1.bind(var2)();
                        var1 = var2.values;
                        var2 = var1.bind(var2)();
                        var1 = undefined;
                        var11 = var6.bind(var1)(var2);
                        var7 = var11.bind(var1)();
                        var6 = var7.done;
                        var9 = 28;
                        var8 = 20;
                        var2 = null;
                        if(var6) { _fun0012_ip = 201; continue _fun0012 }
 79:
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
                        if(!var6) { _fun0012_ip = 151; continue _fun0012 }
 129:
                        var16 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var13 = var13[var9];
                        var13 = var16.bind(var1)(var13);
                        var6 = var13.bind(var1)(var12);
 151:
                        if(!var6) { _fun0012_ip = 158; continue _fun0012 }
 154:
                        var6 = var12 !== var4;
 158:
                        if(!var6) { _fun0012_ip = 186; continue _fun0012 }
 161:
                        var13 = _closure3_slot0;
                        var12 = var13.leaveActivity;
                        var6 = {};
                        var6['location'] = var15;
                        var6['applicationId'] = var14;
                        var6 = var12.bind(var13)(var6);
 186:
                        var12 = var11.bind(var1)();
                        var6 = var12.done;
                        var7 = var12;
                        if(!var6) { _fun0012_ip = 79; continue _fun0012 }
 201:
                        if(!(var2 != var4)) { _fun0012_ip = 253; continue _fun0012 }
 205:
                        var7 = _closure1_slot19;
                        var6 = var7.getEmbeddedActivitiesForChannel;
                        var7 = var6.bind(var7)(var4);
                        var8 = _closure1_slot11;
                        var6 = var8.getId;
                        var6 = var6.bind(var8)();
                        var _closure4_slot0 = var6;
                        var6 = var7.forEach;
                        var5 = function(arg1) {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                                var4 = arg1;
                                var3 = var4.userIds;
                                var2 = var3.has;
                                var1 = _closure4_slot0;
                                var1 = var2.bind(var3)(var1);
                                if(!var1) { _fun0013_ip = 182; continue _fun0013 }
 32:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 20;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var5.bind(var2)(var3);
                                var3 = var5.getEmbeddedActivityLocationChannelId;
                                var2 = var4.location;
                                var5 = var3.bind(var5)(var2);
                                var3 = _closure1_slot19;
                                var2 = var3.getSelfEmbeddedActivityForChannel;
                                var5 = var2.bind(var3)(var5);
                                var2 = null;
                                if(!(var2 != var5)) { _fun0013_ip = 144; continue _fun0013 }
 94:
                                var1 = _closure1_slot30;
                                if(!(var2 == var1)) { _fun0013_ip = 182; continue _fun0013 }
 102:
                                var3 = _closure3_slot0;
                                var2 = var3.hidePIPEmbed;
                                var1 = {};
                                var6 = var5.location;
                                var1['location'] = var6;
                                var5 = var5.applicationId;
                                var1['applicationId'] = var5;
                                var1 = var2.bind(var3)(var1);
                                _fun0013_ip = 182; continue _fun0013;
 144:
                                var3 = _closure3_slot0;
                                var2 = var3.leaveActivity;
                                var1 = {};
                                var5 = var4.location;
                                var1['location'] = var5;
                                var4 = var4.applicationId;
                                var1['applicationId'] = var4;
                                var1 = var2.bind(var3)(var1);
 182:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var5 = var6.bind(var7)(var5);
 253:
                        var5 = var2 != var4;
                        var2 = undefined;
                        if(!var5) { _fun0012_ip = 265; continue _fun0012 }
 262:
                        var2 = var4;
 265:
                        _closure1_slot30 = var2;
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
 0:
                        var1 = arg1;
                        var5 = var1.nonce;
                        var4 = var1.applicationId;
                        var3 = _closure1_slot37;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4, var5);
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 29;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isUsingDevShelfActivityUrlOverride;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0014_ip = 81; continue _fun0014 }
 62:
                        var3 = _closure3_slot0;
                        var2 = var3.showDevShelfOverrideEnabled;
                        var2 = var2.bind(var3)();
 81:
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
 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0015_ip = 1543; continue _fun0015 }
 13:
                                var6 = var2.error;
                                var7 = var2.nonce;
                                var10 = var2.channelId;
                                var19 = var2.guildId;
                                var18 = var2.applicationId;
                                var15 = var2.isStart;
                                var9 = var2.locationKind;
                                var4 = undefined;
                                SaveGenerator(address=57);
 55:
                                return var4;
 57:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0015_ip = 1540; continue _fun0015 }
 66:
                                var3 = _closure1_slot36;
                                var11 = var3.bind(var4)(var18, var7);
                                var13 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var22 = 30;
                                var7 = var3[var22];
                                var7 = var13.bind(var4)(var7);
                                var12 = var7.intl;
                                var8 = var12.string;
                                var7 = var3[var22];
                                var7 = var13.bind(var4)(var7);
                                var7 = var7.t;
                                var7 = var7.IOy+Iy;
                                var17 = var8.bind(var12)(var7);
                                var7 = _closure1_slot1;
                                var24 = 31;
                                var3 = var3[var24];
                                var3 = var7.bind(var4)(var3);
                                var3 = var6 instanceof var3;
                                if(var3) { _fun0015_ip = 885; continue _fun0015 }
 160:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var3 = 34;
                                var3 = var8[var3];
                                var3 = var7.bind(var4)(var3);
                                var7 = var6 instanceof var3;
                                var3 = _closure1_slot26;
                                if(var7) { _fun0015_ip = 807; continue _fun0015 }
 194:
                                var21 = var3.ApiError;
                                var20 = var6.status;
                                var16 = var6.code;
                                var23 = var6.code;
                                var7 = _closure1_slot21;
                                var7 = var7.INVALID_ACTIVITY_LAUNCH_NO_ACCESS;
                                if(!(var7 !== var23)) { _fun0015_ip = 741; continue _fun0015 }
 232:
                                var7 = _closure1_slot21;
                                var7 = var7.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER;
                                if(!(var7 !== var23)) { _fun0015_ip = 673; continue _fun0015 }
 249:
                                var7 = _closure1_slot21;
                                var7 = var7.INVALID_PERMISSIONS;
                                if(!(var7 !== var23)) { _fun0015_ip = 607; continue _fun0015 }
 266:
                                var7 = _closure1_slot21;
                                var7 = var7.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL;
                                if(!(var7 !== var23)) { _fun0015_ip = 541; continue _fun0015 }
 283:
                                var7 = _closure1_slot21;
                                var7 = var7.INVALID_ACTIVITY_LAUNCH_AGE_GATED;
                                if(!(var7 !== var23)) { _fun0015_ip = 475; continue _fun0015 }
 300:
                                var7 = _closure1_slot21;
                                var7 = var7.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE;
                                if(!(var7 !== var23)) { _fun0015_ip = 409; continue _fun0015 }
 314:
                                var7 = _closure1_slot21;
                                var7 = var7.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM;
                                var14 = var21;
                                var13 = var20;
                                var12 = var16;
                                var8 = var17;
                                if(!(var7 === var23)) { _fun0015_ip = 1309; continue _fun0015 }
 343:
                                var26 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var23 = var7[var22];
                                var23 = var26.bind(var4)(var23);
                                var25 = var23.intl;
                                var23 = var25.string;
                                var7 = var7[var22];
                                var7 = var26.bind(var4)(var7);
                                var7 = var7.t;
                                var7 = var7.uGDCc3;
                                var8 = var23.bind(var25)(var7);
                                var14 = var21;
                                var13 = var20;
                                var12 = var16;
                                _fun0015_ip = 1309; continue _fun0015;
 409:
                                var26 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var23 = var7[var22];
                                var23 = var26.bind(var4)(var23);
                                var25 = var23.intl;
                                var23 = var25.string;
                                var7 = var7[var22];
                                var7 = var26.bind(var4)(var7);
                                var7 = var7.t;
                                var7 = var7.RvkXdX;
                                var8 = var23.bind(var25)(var7);
                                var14 = var21;
                                var13 = var20;
                                var12 = var16;
                                _fun0015_ip = 1309; continue _fun0015;
 475:
                                var26 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var23 = var7[var22];
                                var23 = var26.bind(var4)(var23);
                                var25 = var23.intl;
                                var23 = var25.string;
                                var7 = var7[var22];
                                var7 = var26.bind(var4)(var7);
                                var7 = var7.t;
                                var7 = var7.4WuFRE;
                                var8 = var23.bind(var25)(var7);
                                var14 = var21;
                                var13 = var20;
                                var12 = var16;
                                _fun0015_ip = 1309; continue _fun0015;
 541:
                                var26 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var23 = var7[var22];
                                var23 = var26.bind(var4)(var23);
                                var25 = var23.intl;
                                var23 = var25.string;
                                var7 = var7[var22];
                                var7 = var26.bind(var4)(var7);
                                var7 = var7.t;
                                var7 = var7.j29zCg;
                                var8 = var23.bind(var25)(var7);
                                var14 = var21;
                                var13 = var20;
                                var12 = var16;
                                _fun0015_ip = 1309; continue _fun0015;
 607:
                                var26 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var23 = var7[var22];
                                var23 = var26.bind(var4)(var23);
                                var25 = var23.intl;
                                var23 = var25.string;
                                var7 = var7[var22];
                                var7 = var26.bind(var4)(var7);
                                var7 = var7.t;
                                var7 = var7.hHGrW1;
                                var8 = var23.bind(var25)(var7);
                                var14 = var21;
                                var13 = var20;
                                var12 = var16;
                                _fun0015_ip = 1309; continue _fun0015;
 673:
                                var26 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var23 = var7[var22];
                                var23 = var26.bind(var4)(var23);
                                var25 = var23.intl;
                                var23 = var25.string;
                                var7 = var7[var22];
                                var7 = var26.bind(var4)(var7);
                                var7 = var7.t;
                                var7 = var7.zxv7EB;
                                var8 = var23.bind(var25)(var7);
                                var14 = var21;
                                var13 = var20;
                                var12 = var16;
                                _fun0015_ip = 1309; continue _fun0015;
 741:
                                var26 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var23 = var7[var22];
                                var23 = var26.bind(var4)(var23);
                                var25 = var23.intl;
                                var23 = var25.string;
                                var7 = var7[var22];
                                var7 = var26.bind(var4)(var7);
                                var7 = var7.t;
                                var7 = var7.Gyzcra;
                                var8 = var23.bind(var25)(var7);
                                var14 = var21;
                                var13 = var20;
                                var12 = var16;
                                _fun0015_ip = 1309; continue _fun0015;
 807:
                                var16 = var3.CallbackError;
                                var7 = var6.reason;
                                var20 = _closure1_slot0;
                                var21 = _closure1_slot2;
                                var3 = 35;
                                var3 = var21[var3];
                                var21 = var20.bind(var4)(var3);
                                var20 = var21.interactionCallbackErrorReason;
                                var3 = var6.reason;
                                var20 = var20.bind(var21)(var3, var18);
                                var21 = null;
                                var3 = var17;
                                if(!(var21 != var20)) { _fun0015_ip = 869; continue _fun0015 }
 866:
                                var3 = var20;
 869:
                                var8 = var3;
                                var14 = var16;
                                var13 = undefined;
                                var12 = var7;
                                _fun0015_ip = 1309; continue _fun0015;
 885:
                                var3 = _closure1_slot26;
                                var16 = var3.ClientError;
                                var7 = var6.reason;
                                var20 = _closure1_slot17;
                                var3 = var20.getFetchState;
                                var21 = var3.bind(var20)();
                                var20 = _closure1_slot0;
                                var23 = _closure1_slot2;
                                var3 = 32;
                                var3 = var23[var3];
                                var3 = var20.bind(var4)(var3);
                                var20 = var3.DeveloperMode;
                                var3 = var20.getSetting;
                                var3 = var3.bind(var20)();
                                if(!var3) { _fun0015_ip = 968; continue _fun0015 }
 954:
                                var20 = _closure1_slot18;
                                var20 = var20.LOADED;
                                var3 = var21 !== var20;
 968:
                                if(!var3) { _fun0015_ip = 1014; continue _fun0015 }
 971:
                                var20 = _closure1_slot0;
                                var21 = _closure1_slot2;
                                var3 = 33;
                                var3 = var21[var3];
                                var20 = var20.bind(var4)(var3);
                                var3 = var20.fetchDeveloperApplications;
                                var3 = var3.bind(var20)();
                                SaveGenerator(address=1005);
 1003:
                                return var3;
 1005:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=19);
                                if(var20) { _fun0015_ip = 1537; continue _fun0015 }
 1014:
                                var21 = var6.reason;
                                var23 = _closure1_slot1;
                                var20 = _closure1_slot2;
                                var20 = var20[var24];
                                var20 = var23.bind(var4)(var20);
                                var20 = var20.Reasons;
                                var20 = var20.PRIMARY_APP_COMMAND_NOT_FOUND;
                                if(!(var20 !== var21)) { _fun0015_ip = 1218; continue _fun0015 }
 1056:
                                var23 = _closure1_slot1;
                                var20 = _closure1_slot2;
                                var20 = var20[var24];
                                var20 = var23.bind(var4)(var20);
                                var20 = var20.Reasons;
                                var20 = var20.INVALID_CHANNEL;
                                if(!(var20 !== var21)) { _fun0015_ip = 1156; continue _fun0015 }
 1089:
                                var23 = _closure1_slot1;
                                var20 = _closure1_slot2;
                                var20 = var20[var24];
                                var20 = var23.bind(var4)(var20);
                                var20 = var20.Reasons;
                                var20 = var20.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                                var14 = var16;
                                var13 = undefined;
                                var12 = var7;
                                var8 = var17;
                                if(!(var20 === var21)) { _fun0015_ip = 1309; continue _fun0015 }
 1136:
                                var13 = var6.detailCode;
                                var14 = var16;
                                var12 = var7;
                                var8 = var17;
                                _fun0015_ip = 1309; continue _fun0015;
 1156:
                                var23 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var20 = var6[var22];
                                var20 = var23.bind(var4)(var20);
                                var21 = var20.intl;
                                var20 = var21.string;
                                var6 = var6[var22];
                                var6 = var23.bind(var4)(var6);
                                var6 = var6.t;
                                var6 = var6.j29zCg;
                                var8 = var20.bind(var21)(var6);
                                var14 = var16;
                                var13 = undefined;
                                var12 = var7;
                                _fun0015_ip = 1309; continue _fun0015;
 1218:
                                var20 = _closure1_slot17;
                                var6 = var20.inDevModeForApplication;
                                var6 = var6.bind(var20)(var18);
                                var14 = var16;
                                var13 = undefined;
                                var12 = var7;
                                var8 = var17;
                                if(!var6) { _fun0015_ip = 1309; continue _fun0015 }
 1247:
                                var21 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var17 = var6[var22];
                                var17 = var21.bind(var4)(var17);
                                var20 = var17.intl;
                                var17 = var20.string;
                                var6 = var6[var22];
                                var6 = var21.bind(var4)(var6);
                                var6 = var6.t;
                                var6 = var6.hXRXf3;
                                var8 = var17.bind(var20)(var6);
                                var14 = var16;
                                var13 = undefined;
                                var12 = var7;
 1309:
                                var7 = _closure3_slot0;
                                var6 = var7.showLaunchErrorModal;
                                var6 = var6.bind(var7)(var8);
                                var7 = _closure1_slot12;
                                var6 = var7.getChannel;
                                var16 = var6.bind(var7)(var10);
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var6 = 22;
                                var6 = var8[var6];
                                var17 = var7.bind(var4)(var6);
                                var6 = var17.getRawThermalState;
                                var17 = var6.bind(var17)();
                                var6 = 23;
                                var6 = var8[var6];
                                var8 = var7.bind(var4)(var6);
                                var7 = var8.track;
                                var5 = _closure1_slot20;
                                var6 = var5.ACTIVITY_SESSION_JOIN_FAILED;
                                var5 = {};
                                var5['channel_id'] = var10;
                                var10 = null;
                                if(!(var10 == var19)) { _fun0015_ip = 1432; continue _fun0015 }
 1410:
                                var21 = var10 == var16;
                                var20 = undefined;
                                if(var21) { _fun0015_ip = 1429; continue _fun0015 }
 1419:
                                var21 = var16.getGuildId;
                                var20 = var21.bind(var16)();
 1429:
                                var19 = var20;
 1432:
                                var5['guild_id'] = var19;
                                var5['application_id'] = var18;
                                var5['raw_thermal_state'] = var17;
                                var5['is_activity_start'] = var15;
                                var17 = var10 == var16;
                                var15 = undefined;
                                if(var17) { _fun0015_ip = 1465; continue _fun0015 }
 1460:
                                var15 = var16.type;
 1465:
                                var5['channel_type'] = var15;
                                var16 = var10 == var11;
                                var15 = undefined;
                                if(var16) { _fun0015_ip = 1485; continue _fun0015 }
 1479:
                                var15 = var11.locations;
 1485:
                                var5['location_stack'] = var15;
                                var5['error_type'] = var14;
                                var5['error_status'] = var13;
                                var5['error_code'] = var12;
                                var12 = var10 == var11;
                                var10 = undefined;
                                if(var12) { _fun0015_ip = 1519; continue _fun0015 }
 1514:
                                var10 = var11.source;
 1519:
                                var5['source'] = var10;
                                var5['embedded_activity_location_kind'] = var9;
                                var5 = var7.bind(var8)(var6, var5);
                                return var4;
 1537:
                                return var3;
 1540:
                                return var2;
 1543:
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
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.reason;
                        var1 = var1.application;
                        var3 = var1.id;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0016_ip = 255; continue _fun0016 }
 28:
                        if(!(var1 != var4)) { _fun0016_ip = 255; continue _fun0016 }
 35:
                        var5 = _closure1_slot31;
                        var6 = _closure1_slot19;
                        var1 = var6.getSelfEmbeddedActivities;
                        var6 = var1.bind(var6)();
                        var1 = var6.values;
                        var1 = var1.bind(var6)();
                        var7 = undefined;
                        var8 = var5.bind(var7)(var1);
                        var6 = var8.bind(var7)();
                        var5 = var6.done;
                        if(var5) { _fun0016_ip = 146; continue _fun0016 }
 87:
                        var9 = var6.value;
                        var5 = var9.applicationId;
                        var11 = var9.location;
                        if(!(var5 === var3)) { _fun0016_ip = 131; continue _fun0016 }
 106:
                        var10 = _closure3_slot0;
                        var9 = var10.leaveActivity;
                        var5 = {};
                        var5['location'] = var11;
                        var5['applicationId'] = var3;
                        var5 = var9.bind(var10)(var5);
 131:
                        var9 = var8.bind(var7)();
                        var5 = var9.done;
                        var6 = var9;
                        if(!var5) { _fun0016_ip = 87; continue _fun0016 }
 146:
                        var6 = var4.code;
                        var5 = _closure1_slot22;
                        var5 = var5.CLOSE_NORMAL;
                        if(!(var6 !== var5)) { _fun0016_ip = 255; continue _fun0016 }
 165:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 23;
                        var5 = var8[var5];
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.track;
                        var2 = _closure1_slot20;
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
 255:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['superHandleRPCDisconnect'] = var3;
                var3 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.channelId;
                        var2 = _closure1_slot14;
                        var1 = var2.getVoiceChannelId;
                        var2 = var1.bind(var2)();
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0017_ip = 38; continue _fun0017 }
 34:
                        var1 = var2 === var3;
 38:
                        if(!var1) { _fun0017_ip = 59; continue _fun0017 }
 41:
                        var2 = _closure3_slot0;
                        var1 = var2.handleCallEnded;
                        var1 = var1.bind(var2)(var3);
 59:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCallDelete'] = var3;
                var3 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.state;
                        var2 = _closure1_slot24;
                        var2 = var2.DISCONNECTED;
                        if(!(var3 === var2)) { _fun0018_ip = 48; continue _fun0018 }
 25:
                        var3 = var1.channelId;
                        var2 = _closure3_slot0;
                        var1 = var2.handleCallEnded;
                        var1 = var1.bind(var2)(var3);
 48:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleRTCConnectionState'] = var3;
                var3 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var3 = _closure1_slot19;
                        var2 = var3.getSelfEmbeddedActivityForChannel;
                        var1 = arg1;
                        var4 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var4)) { _fun0019_ip = 65; continue _fun0019 }
 27:
                        var3 = _closure3_slot0;
                        var2 = var3.leaveActivity;
                        var1 = {};
                        var5 = var4.location;
                        var1['location'] = var5;
                        var4 = var4.applicationId;
                        var1['applicationId'] = var4;
                        var1 = var2.bind(var3)(var1);
 65:
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
 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0020_ip = 946; continue _fun0020 }
 15:
                                var15 = var2.channelId;
                                var13 = var2.applicationId;
                                var _closure6_slot0 = var13;
                                var11 = var2.analyticsLocations;
                                var16 = var2.commandOrigin;
                                var10 = var2.inviterUserId;
                                var3 = undefined;
                                SaveGenerator(address=53);
 51:
                                return var3;
 53:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0020_ip = 943; continue _fun0020 }
 62:
                                var5 = _closure1_slot12;
                                var4 = var5.getChannel;
                                var9 = var4.bind(var5)(var15);
                                if(!(var3 !== var9)) { _fun0020_ip = 940; continue _fun0020 }
 86:
                                var6 = _closure1_slot10;
                                var5 = var6.has;
                                var12 = null;
                                var14 = var12 == var9;
                                var4 = undefined;
                                if(var14) { _fun0020_ip = 111; continue _fun0020 }
 106:
                                var4 = var9.type;
 111:
                                var4 = var5.bind(var6)(var4);
                                if(!var4) { _fun0020_ip = 140; continue _fun0020 }
 119:
                                var5 = _closure1_slot14;
                                var4 = var5.getVoiceChannelId;
                                var4 = var4.bind(var5)();
                                if(!(var4 === var15)) { _fun0020_ip = 940; continue _fun0020 }
 140:
                                var5 = _closure1_slot19;
                                var4 = var5.getSelfEmbeddedActivityForChannel;
                                var5 = var4.bind(var5)(var15);
                                var6 = var12 == var5;
                                var4 = undefined;
                                if(var6) { _fun0020_ip = 169; continue _fun0020 }
 164:
                                var4 = var5.applicationId;
 169:
                                if(!(var4 !== var13)) { _fun0020_ip = 940; continue _fun0020 }
 176:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 36;
                                var4 = var6[var4];
                                var5 = var5.bind(var3)(var4);
                                var4 = var5.fetchApplication;
                                var4 = var4.bind(var5)(var13);
                                SaveGenerator(address=211);
 209:
                                return var4;
 211:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                if(var5) { _fun0020_ip = 937; continue _fun0020 }
 220:
                                var6 = _closure1_slot0;
                                var14 = _closure1_slot2;
                                var5 = 37;
                                var5 = var14[var5];
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.getIsActivitiesEnabledForCurrentPlatform;
                                var5 = var5.bind(var6)();
                                if(var5) { _fun0020_ip = 331; continue _fun0020 }
 253:
                                var14 = _closure3_slot0;
                                var6 = var14.showLaunchErrorModal;
                                var19 = _closure1_slot0;
                                var20 = _closure1_slot2;
                                var5 = 30;
                                var17 = var20[var5];
                                var17 = var19.bind(var3)(var17);
                                var18 = var17.intl;
                                var17 = var18.string;
                                var5 = var20[var5];
                                var5 = var19.bind(var3)(var5);
                                var5 = var5.t;
                                var5 = var5.UXoQTk;
                                var5 = var17.bind(var18)(var5);
                                var5 = var6.bind(var14)(var5);
                                _fun0020_ip = 940; continue _fun0020;
 331:
                                var6 = _closure1_slot1;
                                var14 = _closure1_slot2;
                                var5 = 38;
                                var5 = var14[var5];
                                var6 = var6.bind(var3)(var5);
                                var14 = var12 == var4;
                                var5 = undefined;
                                if(var14) { _fun0020_ip = 381; continue _fun0020 }
 360:
                                var14 = var4.embedded_activity_config;
                                var17 = var12 == var14;
                                var5 = undefined;
                                if(var17) { _fun0020_ip = 381; continue _fun0020 }
 375:
                                var5 = var14.supported_platforms;
 381:
                                var5 = var6.bind(var3)(var5);
                                if(var5) { _fun0020_ip = 467; continue _fun0020 }
 389:
                                var14 = _closure3_slot0;
                                var6 = var14.showLaunchErrorModal;
                                var19 = _closure1_slot0;
                                var20 = _closure1_slot2;
                                var5 = 30;
                                var17 = var20[var5];
                                var17 = var19.bind(var3)(var17);
                                var18 = var17.intl;
                                var17 = var18.string;
                                var5 = var20[var5];
                                var5 = var19.bind(var3)(var5);
                                var5 = var5.t;
                                var5 = var5.uGDCc3;
                                var5 = var17.bind(var18)(var5);
                                var5 = var6.bind(var14)(var5);
                                _fun0020_ip = 940; continue _fun0020;
 467:
                                var6 = var12 == var9;
                                var5 = undefined;
                                if(var6) { _fun0020_ip = 486; continue _fun0020 }
 476:
                                var6 = var9.getGuildId;
                                var5 = var6.bind(var9)();
 486:
                                var6 = var12 != var5;
                                var18 = undefined;
                                if(!var6) { _fun0020_ip = 498; continue _fun0020 }
 495:
                                var18 = var5;
 498:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var14 = 33;
                                var5 = var5[var14];
                                var9 = var6.bind(var3)(var5);
                                var6 = var9.fetchShelf;
                                var5 = {};
                                var5['guildId'] = var18;
                                var5 = var6.bind(var9)(var5);
                                SaveGenerator(address=539);
 537:
                                return var5;
 539:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                                if(var6) { _fun0020_ip = 934; continue _fun0020 }
 548:
                                var20 = var5.activityConfigs;
                                var19 = var5.applications;
                                var9 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var17 = 21;
                                var6 = var6[var17];
                                var9 = var9.bind(var3)(var6);
                                var6 = {};
                                var6['applicationId'] = var13;
                                var6['activityConfigs'] = var20;
                                var6['applications'] = var19;
                                var6 = var9.bind(var3)(var6);
                                if(!(var12 == var6)) { _fun0020_ip = 709; continue _fun0020 }
 605:
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
 648:
                                return var6;
 650:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                                if(var9) { _fun0020_ip = 931; continue _fun0020 }
 659:
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
 709:
                                var14 = _closure1_slot19;
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
                                if(var8) { _fun0020_ip = 760; continue _fun0020 }
 749:
                                var8 = var14.userIds;
                                var17 = var8.size;
 760:
                                var18 = var12 != var17;
                                var9 = 0;
                                var8 = 0;
                                if(!var18) { _fun0020_ip = 774; continue _fun0020 }
 771:
                                var8 = var17;
 774:
                                if(!(!(var8 > var9))) { _fun0020_ip = 842; continue _fun0020 }
 778:
                                var9 = _closure1_slot1;
                                var17 = _closure1_slot2;
                                var8 = 40;
                                var8 = var17[var8];
                                var9 = var9.bind(var3)(var8);
                                var8 = {};
                                var8['targetApplicationId'] = var13;
                                var8['channelId'] = var15;
                                var8['analyticsLocations'] = var11;
                                var8['commandOrigin'] = var16;
                                var8['inviterUserId'] = var10;
                                var8 = var9.bind(var3)(var8);
                                SaveGenerator(address=833);
 831:
                                return var8;
 833:
                                ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                                if(!var9) { _fun0020_ip = 940; continue _fun0020 }
 839:
                                return var8;
 842:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 39;
                                var7 = var9[var7];
                                var9 = var8.bind(var3)(var7);
                                var8 = var9.maybeJoinEmbeddedActivity;
                                var7 = {};
                                var7['channelId'] = var15;
                                var7['applicationId'] = var13;
                                var15 = var12 == var14;
                                var13 = undefined;
                                if(var15) { _fun0020_ip = 893; continue _fun0020 }
 887:
                                var13 = var14.launchId;
 893:
                                var7['launchId'] = var13;
                                var7['inputApplication'] = var12;
                                var7['analyticsLocations'] = var11;
                                var7['inviterUserId'] = var10;
                                var7 = var8.bind(var9)(var7);
                                SaveGenerator(address=922);
 920:
                                return var7;
 922:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                if(!var8) { _fun0020_ip = 940; continue _fun0020 }
 928:
                                return var7;
 931:
                                return var6;
 934:
                                return var5;
 937:
                                return var4;
 940:
                                return var3;
 943:
                                return var2;
 946:
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
                    var3 = _closure1_slot19;
                    var2 = var3.getSelfEmbeddedActivities;
                    var3 = var2.bind(var3)();
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                            var1 = arg1;
                            var6 = var1.location;
                            var5 = var1.applicationId;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 20;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getEmbeddedActivityLocationGuildId;
                            var3 = var2.bind(var3)(var6);
                            var2 = _closure4_slot0;
                            var2 = var2.id;
                            if(!(var2 === var3)) { _fun0021_ip = 93; continue _fun0021 }
 65:
                            var4 = _closure3_slot0;
                            var3 = var4.leaveActivity;
                            var2 = {};
                            var2['location'] = var6;
                            var2['applicationId'] = var5;
                            var2 = var3.bind(var4)(var2);
 93:
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
 0:
                        var1 = arg1;
                        var1 = var1.channel;
                        var3 = _closure1_slot19;
                        var2 = var3.getSelfEmbeddedActivityForChannel;
                        var1 = var1.id;
                        var4 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var4)) { _fun0022_ip = 75; continue _fun0022 }
 37:
                        var3 = _closure3_slot0;
                        var2 = var3.leaveActivity;
                        var1 = {};
                        var5 = var4.location;
                        var1['location'] = var5;
                        var4 = var4.applicationId;
                        var1['applicationId'] = var4;
                        var1 = var2.bind(var3)(var1);
 75:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleChannelDelete'] = var3;
                var3 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.nonce;
                        var1 = var1.data;
                        var5 = _closure1_slot28;
                        var4 = var1.applicationId;
                        var5 = var5[var4];
                        var4 = null;
                        if(!(var4 == var5)) { _fun0023_ip = 327; continue _fun0023 }
 39:
                        var5 = var1.interactionType;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var8 = 41;
                        var4 = var4[var8];
                        var6 = undefined;
                        var4 = var7.bind(var6)(var4);
                        var4 = var4.InteractionTypes;
                        var4 = var4.APPLICATION_COMMAND;
                        if(!(var5 !== var4)) { _fun0023_ip = 244; continue _fun0023 }
 86:
                        var5 = var1.interactionType;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var4 = var7.bind(var6)(var4);
                        var4 = var4.InteractionTypes;
                        var4 = var4.MESSAGE_COMPONENT;
                        if(!(var5 !== var4)) { _fun0023_ip = 205; continue _fun0023 }
 125:
                        var5 = var1.interactionType;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var4 = var7.bind(var6)(var4);
                        var4 = var4.InteractionTypes;
                        var4 = var4.MODAL_SUBMIT;
                        var7 = undefined;
                        if(!(var5 === var4)) { _fun0023_ip = 281; continue _fun0023 }
 166:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 42;
                        var4 = var8[var4];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.INTERACTION_MODAL_SUBMIT;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var7 = var4;
                        _fun0023_ip = 281; continue _fun0023;
 205:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 42;
                        var4 = var8[var4];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.INTERACTION_MESSAGE_COMPONENT;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var7 = var4;
                        _fun0023_ip = 281; continue _fun0023;
 244:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 42;
                        var4 = var8[var4];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.INTERACTION_APPLICATION_COMMAND;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var7 = var4;
 281:
                        var5 = _closure1_slot35;
                        var4 = {};
                        var8 = var1.applicationId;
                        var4['applicationId'] = var8;
                        var4['nonce'] = var3;
                        var4['locations'] = var7;
                        var4 = var5.bind(var6)(var4);
                        if(!var4) { _fun0023_ip = 327; continue _fun0023 }
 314:
                        var2 = _closure1_slot29;
                        var1 = var1.applicationId;
                        var2[var3] = var1;
 327:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleInteractionQueue'] = var3;
                var3 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.nonce;
                        var2 = var1.interactionId;
                        var3 = null;
                        if(!(var3 != var5)) { _fun0024_ip = 54; continue _fun0024 }
 21:
                        var4 = _closure1_slot29;
                        var4 = var4[var5];
                        if(!(var3 != var4)) { _fun0024_ip = 54; continue _fun0024 }
 36:
                        var1 = _closure1_slot28;
                        var1 = var1[var4];
                        if(!(var3 != var1)) { _fun0024_ip = 54; continue _fun0024 }
 48:
                        var1['interactionId'] = var2;
 54:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleInteractionCreate'] = var3;
                var3 = function(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.nonce;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0025_ip = 50; continue _fun0025 }
 15:
                        var3 = _closure1_slot29;
                        var3 = var3[var4];
                        if(!(var2 != var3)) { _fun0025_ip = 50; continue _fun0025 }
 30:
                        var2 = _closure1_slot29;
                        var2 = delete var2[var4];
                        var2 = _closure1_slot37;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3, var4);
 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleInteractionSuccess'] = var3;
                var2 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.nonce;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0026_ip = 50; continue _fun0026 }
 15:
                        var3 = _closure1_slot29;
                        var3 = var3[var4];
                        if(!(var2 != var3)) { _fun0026_ip = 50; continue _fun0026 }
 30:
                        var2 = _closure1_slot29;
                        var2 = delete var2[var4];
                        var2 = _closure1_slot36;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3, var4);
 50:
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
            var4 = 43;
            var3 = var5[var4];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var11 = var3.ComponentDispatch;
            var10 = var11.subscribe;
            var3 = _closure1_slot25;
            var9 = var3.RELEASE_ACTIVITY_WEB_VIEW;
            var8 = var2.handleActivityWebViewRelease;
            var8 = var10.bind(var11)(var9, var8);
            var4 = var5[var4];
            var4 = var7.bind(var1)(var4);
            var8 = var4.ComponentDispatch;
            var7 = var8.subscribe;
            var4 = var3.OPEN_EMBEDDED_ACTIVITY;
            var3 = _closure1_slot41;
            var3 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 44;
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.subscribe;
            var8 = _closure1_slot38;
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
            var9 = var4.bind(var1)(var7);
            var8 = var9.subscribe;
            var7 = _closure1_slot39;
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
            var4 = 43;
            var3 = var5[var4];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var11 = var3.ComponentDispatch;
            var10 = var11.unsubscribe;
            var3 = _closure1_slot25;
            var9 = var3.RELEASE_ACTIVITY_WEB_VIEW;
            var8 = var2.handleActivityWebViewRelease;
            var8 = var10.bind(var11)(var9, var8);
            var4 = var5[var4];
            var4 = var7.bind(var1)(var4);
            var8 = var4.ComponentDispatch;
            var7 = var8.unsubscribe;
            var4 = var3.OPEN_EMBEDDED_ACTIVITY;
            var3 = _closure1_slot41;
            var3 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 44;
            var7 = var5[var3];
            var10 = var4.bind(var1)(var7);
            var9 = var10.unsubscribe;
            var8 = _closure1_slot38;
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
            var9 = var4.bind(var1)(var7);
            var8 = var9.unsubscribe;
            var7 = _closure1_slot39;
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
    var5 = 46;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/EmbeddedActivitiesManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function getActiveAnalyticsSessionIDs(arg1) {
        var2 = _closure1_slot27;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var3['getActiveAnalyticsSessionIDs'] = var2;
    return var1;
})();