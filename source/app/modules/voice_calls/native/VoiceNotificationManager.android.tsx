// app/modules/voice_calls/native/VoiceNotificationManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = function() {
        var4 = _closure1_slot7;
        var3 = function VoiceNotificationManager() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot6;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = 9000;
            var3['voiceServiceHandlerId'] = var4;
            var4 = null;
            var3['connectionState'] = var4;
            var4 = false;
            var3['selfMute'] = var4;
            var3['deafened'] = var4;
            var3['isStreaming'] = var4;
            var4 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getChannelId;
                var14 = var1.bind(var2)();
                var1 = var2.getState;
                var13 = var1.bind(var2)();
                var6 = _closure3_slot0;
                var5 = var6.handleUpdate;
                var12 = var6.selfMute;
                var11 = var6.deafened;
                var10 = var6.embeddedActivity;
                var9 = var6.isStreaming;
                var15 = var6;
                var1 = var15[var5](var14, var13, var12, var11, var10, var9, var8);
                var1 = undefined;
                return var1;
            };
            var3['handleVoiceStateChange'] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot12;
                    var2 = var3.isSelfMute;
                    var8 = var2.bind(var3)();
                    if(var8) { _fun0002_ip = 34; continue _fun0002 }
 20:
                    var3 = _closure1_slot12;
                    var2 = var3.isSelfMutedTemporarily;
                    var8 = var2.bind(var3)();
 34:
                    var3 = _closure1_slot12;
                    var2 = var3.isSelfDeaf;
                    var7 = var2.bind(var3)();
                    if(var7) { _fun0002_ip = 65; continue _fun0002 }
 51:
                    var2 = _closure1_slot12;
                    var1 = var2.isDeaf;
                    var7 = var1.bind(var2)();
 65:
                    var6 = _closure3_slot0;
                    var5 = var6.handleUpdate;
                    var14 = var6.channelId;
                    var13 = var6.connectionState;
                    var10 = var6.embeddedActivity;
                    var9 = var6.isStreaming;
                    var15 = var6;
                    var12 = var8;
                    var11 = var7;
                    var1 = var15[var5](var14, var13, var12, var11, var10, var9, var8);
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleMediaEngineStateChange'] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure3_slot0;
                    var3 = var2.channelId;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 81; continue _fun0003 }
 18:
                    var3 = _closure1_slot8;
                    var2 = var3.getCurrentEmbeddedActivity;
                    var10 = var2.bind(var3)();
                    var7 = _closure3_slot0;
                    var6 = var7.handleUpdate;
                    var14 = var7.channelId;
                    var13 = var7.connectionState;
                    var12 = var7.selfMute;
                    var11 = var7.deafened;
                    var9 = var7.isStreaming;
                    var15 = var7;
                    var1 = var15[var6](var14, var13, var12, var11, var10, var9, var8);
 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleEmbeddedActivityStateChange'] = var4;
            var4 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUserActiveStream;
                var2 = var1.bind(var2)();
                var1 = null;
                var9 = var1 != var2;
                var7 = _closure3_slot0;
                var6 = var7.handleUpdate;
                var14 = var7.channelId;
                var13 = var7.connectionState;
                var12 = var7.selfMute;
                var11 = var7.deafened;
                var10 = var7.embeddedActivity;
                var15 = var7;
                var1 = var15[var6](var14, var13, var12, var11, var10, var9, var8);
                var1 = undefined;
                return var1;
            };
            var3['handleApplicationStreamStateChange'] = var4;
            var4 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var10 = arg1;
                    var8 = arg2;
                    var12 = arg3;
                    var11 = arg4;
                    var9 = arg5;
                    var7 = arg6;
                    var2 = _closure3_slot0;
                    var2 = var2.channelId;
                    if(!(var2 === var10)) { _fun0004_ip = 139; continue _fun0004 }
 34:
                    var2 = _closure3_slot0;
                    var2 = var2.connectionState;
                    if(!(var2 === var8)) { _fun0004_ip = 139; continue _fun0004 }
 48:
                    var2 = _closure3_slot0;
                    var2 = var2.selfMute;
                    if(!(var2 === var12)) { _fun0004_ip = 139; continue _fun0004 }
 62:
                    var2 = _closure3_slot0;
                    var2 = var2.deafened;
                    if(!(var2 === var11)) { _fun0004_ip = 139; continue _fun0004 }
 76:
                    var2 = _closure3_slot0;
                    var5 = var2.embeddedActivity;
                    var4 = null;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0004_ip = 103; continue _fun0004 }
 97:
                    var2 = var5.launchId;
 103:
                    var4 = var4 == var9;
                    var3 = undefined;
                    if(var4) { _fun0004_ip = 118; continue _fun0004 }
 112:
                    var3 = var9.launchId;
 118:
                    if(!(var2 === var3)) { _fun0004_ip = 139; continue _fun0004 }
 122:
                    var2 = _closure3_slot0;
                    var2 = var2.isStreaming;
                    if(!(var2 !== var7)) { _fun0004_ip = 1062; continue _fun0004 }
 139:
                    var3 = null;
                    if(!(var3 != var8)) { _fun0004_ip = 1062; continue _fun0004 }
 148:
                    var2 = _closure3_slot0;
                    var2 = var2.channelId;
                    if(!(var2 !== var10)) { _fun0004_ip = 171; continue _fun0004 }
 161:
                    var2 = _closure3_slot0;
                    var2['channelId'] = var10;
 171:
                    var2 = _closure3_slot0;
                    var2 = var2.connectionState;
                    if(!(var2 !== var8)) { _fun0004_ip = 195; continue _fun0004 }
 185:
                    var2 = _closure3_slot0;
                    var2['connectionState'] = var8;
 195:
                    var2 = _closure3_slot0;
                    var2 = var2.selfMute;
                    if(!(var2 !== var12)) { _fun0004_ip = 219; continue _fun0004 }
 209:
                    var2 = _closure3_slot0;
                    var2['selfMute'] = var12;
 219:
                    var2 = _closure3_slot0;
                    var2 = var2.deafened;
                    if(!(var2 !== var11)) { _fun0004_ip = 243; continue _fun0004 }
 233:
                    var2 = _closure3_slot0;
                    var2['deafened'] = var11;
 243:
                    var2 = _closure3_slot0;
                    var2 = var2.embeddedActivity;
                    var6 = var3 == var2;
                    var5 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0004_ip = 270; continue _fun0004 }
 264:
                    var4 = var2.compositeInstanceId;
 270:
                    var6 = var3 == var9;
                    var2 = undefined;
                    if(var6) { _fun0004_ip = 285; continue _fun0004 }
 279:
                    var2 = var9.compositeInstanceId;
 285:
                    if(!(var4 !== var2)) { _fun0004_ip = 299; continue _fun0004 }
 289:
                    var2 = _closure3_slot0;
                    var2['embeddedActivity'] = var9;
 299:
                    var2 = _closure3_slot0;
                    var2 = var2.isStreaming;
                    if(!(var2 !== var7)) { _fun0004_ip = 323; continue _fun0004 }
 313:
                    var2 = _closure3_slot0;
                    var2['isStreaming'] = var7;
 323:
                    var6 = _closure1_slot11;
                    var4 = var6.getChannel;
                    var14 = var4.bind(var6)(var10);
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 11;
                    var4 = var10[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = var6.getStatus;
                    var4 = var4.bind(var6)(var8);
                    var20 = var4.connectionStatusText;
                    var4 = var3 != var9;
                    var15 = '';
                    var13 = var15;
                    if(!var4) { _fun0004_ip = 483; continue _fun0004 }
 391:
                    var8 = _closure1_slot9;
                    var6 = var8.getApplication;
                    var10 = var3 == var9;
                    var4 = undefined;
                    if(var10) { _fun0004_ip = 415; continue _fun0004 }
 410:
                    var4 = var9.applicationId;
 415:
                    var8 = var6.bind(var8)(var4);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 12;
                    var4 = var9[var4];
                    var6 = var6.bind(var5)(var4);
                    var9 = var3 == var8;
                    var4 = undefined;
                    if(var9) { _fun0004_ip = 454; continue _fun0004 }
 449:
                    var4 = var8.name;
 454:
                    var8 = var6.bind(var5)(var4);
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var6 = var4.concat;
                    var4 = ' - ';
                    var13 = var6.bind(var4)(var8);
 483:
                    var6 = var3 != var14;
                    var4 = null;
                    if(!var6) { _fun0004_ip = 973; continue _fun0004 }
 495:
                    var6 = {};
                    var17 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var18 = 13;
                    var9 = var8[var18];
                    var9 = var17.bind(var5)(var9);
                    var19 = var9.intl;
                    var16 = var19.formatToPlainString;
                    var9 = var8[var18];
                    var9 = var17.bind(var5)(var9);
                    var9 = var9.t;
                    var10 = var9.aUT3+P;
                    var9 = {};
                    var9['callState'] = var20;
                    var9 = var16.bind(var19)(var10, var9);
                    var6['title'] = var9;
                    var10 = var14.name;
                    var9 = global;
                    var9 = var9.HermesInternal;
                    var9 = var9.concat;
                    var9 = var9.bind(var15)(var10, var13);
                    var6['content'] = var9;
                    var10 = 14;
                    var9 = var8[var10];
                    var9 = var17.bind(var5)(var9);
                    var9 = var9.ServiceNotificationPriority;
                    var9 = var9.HIGH;
                    var6['priority'] = var9;
                    var15 = _closure3_slot0;
                    var13 = var15.createAction;
                    var9 = 'SelectChannel';
                    var9 = var13.bind(var15)(var14, var9, var5);
                    var6['contentAction'] = var9;
                    var13 = var15.createAction;
                    var9 = var8[var18];
                    var9 = var17.bind(var5)(var9);
                    var16 = var9.intl;
                    var9 = var16.string;
                    var8 = var8[var18];
                    var8 = var17.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8.6vrfgo;
                    var9 = var9.bind(var16)(var8);
                    var8 = 'Disconnect';
                    var9 = var13.bind(var15)(var14, var8, var9);
                    var8 = new Array(3);
                    var8[0] = var9;
                    var13 = var15.createAction;
                    var19 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var16 = var9[var18];
                    var16 = var19.bind(var5)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var9 = var9[var18];
                    var9 = var19.bind(var5)(var9);
                    var9 = var9.t;
                    if(var12) { _fun0004_ip = 787; continue _fun0004 }
 774:
                    var12 = var9.w4m94+;
                    var12 = var16.bind(var17)(var12);
                    _fun0004_ip = 798; continue _fun0004;
 787:
                    var9 = var9.YqAjX1;
                    var12 = var16.bind(var17)(var9);
 798:
                    var9 = 'ToggleSelfMute';
                    var9 = var13.bind(var15)(var14, var9, var12);
                    var8[1] = var9;
                    var13 = _closure3_slot0;
                    var12 = var13.createAction;
                    var17 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var15 = var9[var18];
                    var15 = var17.bind(var5)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var9 = var9[var18];
                    var9 = var17.bind(var5)(var9);
                    var9 = var9.t;
                    if(var11) { _fun0004_ip = 882; continue _fun0004 }
 869:
                    var11 = var9.wjcRFR;
                    var11 = var15.bind(var16)(var11);
                    _fun0004_ip = 895; continue _fun0004;
 882:
                    var9 = var9.2US87+;
                    var11 = var15.bind(var16)(var9);
 895:
                    var9 = 'ToggleDeafen';
                    var9 = var12.bind(var13)(var14, var9, var11);
                    var8[2] = var9;
                    var6['auxiliaryActions'] = var8;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var8 = var9.bind(var5)(var8);
                    var8 = var8.ServiceNotificationType;
                    if(var7) { _fun0004_ip = 953; continue _fun0004 }
 945:
                    var7 = var8.VOICE_CALL;
                    _fun0004_ip = 959; continue _fun0004;
 953:
                    var7 = var8.SCREEN_SHARE;
 959:
                    var6['type'] = var7;
                    var7 = true;
                    var6['usesGateway'] = var7;
                    var4 = var6;
 973:
                    if(!(var3 == var4)) { _fun0004_ip = 1020; continue _fun0004 }
 977:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 15;
                    var3 = var7[var3];
                    var7 = var6.bind(var5)(var3);
                    var6 = var7.removeServiceHandler;
                    var3 = _closure3_slot0;
                    var3 = var3.voiceServiceHandlerId;
                    var3 = var6.bind(var7)(var3);
                    _fun0004_ip = 1062; continue _fun0004;
 1020:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.updateServiceHandler;
                    var1 = _closure3_slot0;
                    var1 = var1.voiceServiceHandlerId;
                    var1 = var2.bind(var3)(var1, var4);
 1062:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleUpdate'] = var4;
            var2 = function(arg1, arg2, arg3) {
                var3 = arg1;
                var2 = arg2;
                var1 = {};
                var6 = var3.id;
                var4 = global;
                var4 = var4.HermesInternal;
                var5 = var4.concat;
                var4 = '';
                var4 = var5.bind(var4)(var2, var6);
                var1['tag'] = var4;
                var1['taskName'] = var2;
                var2 = arg3;
                var1['title'] = var2;
                var2 = {};
                var3 = var3.id;
                var2['channelId'] = var3;
                var1['data'] = var2;
                return var1;
            };
            var3['createAction'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var5 = _closure1_slot13;
            var4 = var5.addChangeListener;
            var3 = var1.handleVoiceStateChange;
            var3 = var4.bind(var5)(var3);
            var5 = _closure1_slot12;
            var4 = var5.addChangeListener;
            var3 = var1.handleMediaEngineStateChange;
            var3 = var4.bind(var5)(var3);
            var5 = _closure1_slot8;
            var4 = var5.addChangeListener;
            var3 = var1.handleEmbeddedActivityStateChange;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot10;
            var2 = var3.addChangeListener;
            var1 = var1.handleApplicationStreamStateChange;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var5 = _closure1_slot13;
            var4 = var5.removeChangeListener;
            var3 = var1.handleVoiceStateChange;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot12;
            var2 = var3.removeChangeListener;
            var1 = var1.handleMediaEngineStateChange;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var13 = var8;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot14 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function VoiceNotificationLifecycleManager() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot14;
            var1 = var2.initialize;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot14;
            var1 = var2.terminate;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/VoiceNotificationManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();