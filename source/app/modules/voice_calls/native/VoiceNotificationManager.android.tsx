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
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
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
            var4 = {'channelId': null, 'connectionState': null, 'selfMute': false, 'deafened': false, 'embeddedActivity': null, 'isStreaming': false, 'isSpeaking': false};
            var4['channelId'] = var1;
            var4['connectionState'] = var1;
            var4['embeddedActivity'] = var1;
            var3['state'] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot13;
                    var1 = var2.getChannelId;
                    var6 = var1.bind(var2)();
                    var1 = var2.getState;
                    var5 = var1.bind(var2)();
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var2 = var2.channelId;
                    var2 = var2 === var6;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure3_slot0;
                    var3 = var3.state;
                    var3 = var3.connectionState;
                    var2 = var3 === var5;
case 6:
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure3_slot0;
                    var2 = var3.handleUpdate;
                    var1 = {};
                    var7 = var3.state;
                    var8 = var1;
                    var4 = copyDataProperties(var8, var7);
                    var4 = 'channelId';
                    var1[3] = var6;
                    var4 = 'connectionState';
                    var1[3] = var5;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleVoiceStateChange'] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot12;
                    var2 = var3.isSelfMute;
                    var6 = var2.bind(var3)();
                    if(var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure1_slot12;
                    var2 = var3.isSelfMutedTemporarily;
                    var6 = var2.bind(var3)();
case 10:
                    var3 = _closure1_slot12;
                    var2 = var3.isSelfDeaf;
                    var5 = var2.bind(var3)();
                    if(var5) { _fun0003_ip = 12; continue _fun0003 }
case 7:
                    var2 = _closure1_slot12;
                    var1 = var2.isDeaf;
                    var5 = var1.bind(var2)();
case 12:
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var2 = var2.selfMute;
                    var2 = var2 === var6;
                    if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure3_slot0;
                    var3 = var3.state;
                    var3 = var3.deafened;
                    var2 = var3 === var5;
case 13:
                    if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure3_slot0;
                    var2 = var3.handleUpdate;
                    var1 = {};
                    var7 = var3.state;
                    var8 = var1;
                    var4 = copyDataProperties(var8, var7);
                    var4 = 'selfMute';
                    var1[3] = var6;
                    var4 = 'deafened';
                    var1[3] = var5;
                    var1 = var2.bind(var3)(var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleMediaEngineStateChange'] = var4;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var3 = var2.channelId;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var3 = _closure1_slot8;
                    var2 = var3.getCurrentEmbeddedActivity;
                    var5 = var2.bind(var3)();
                    var3 = _closure3_slot0;
                    var2 = var3.handleUpdate;
                    var1 = {};
                    var6 = var3.state;
                    var7 = var1;
                    var4 = copyDataProperties(var7, var6);
                    var4 = 'embeddedActivity';
                    var1[3] = var5;
                    var1 = var2.bind(var3)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleEmbeddedActivityStateChange'] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot10;
                    var1 = var2.getCurrentUserActiveStream;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var5 = var1 != var2;
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var2 = var2.isStreaming;
                    if(!(var2 !== var5)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var3 = _closure3_slot0;
                    var2 = var3.handleUpdate;
                    var1 = {};
                    var6 = var3.state;
                    var7 = var1;
                    var4 = copyDataProperties(var7, var6);
                    var4 = 'isStreaming';
                    var1[3] = var5;
                    var1 = var2.bind(var3)(var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleApplicationStreamStateChange'] = var4;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure1_slot15;
                    var1 = var2.isCurrentUserSpeaking;
                    var5 = var1.bind(var2)();
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var2 = var2.isSpeaking;
                    if(!(var2 !== var5)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var3 = _closure3_slot0;
                    var2 = var3.handleUpdate;
                    var1 = {};
                    var6 = var3.state;
                    var7 = var1;
                    var4 = copyDataProperties(var7, var6);
                    var4 = 'isSpeaking';
                    var1[3] = var5;
                    var1 = var2.bind(var3)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleSpeakingStateChange'] = var4;
            var4 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.getConfig;
                    var3 = {};
                    var7 = 'VoiceNotificationManager';
                    var3['location'] = var7;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.enabled;
                    if(var3) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.ServiceNotificationIcon;
                    var3 = var3.DEFAULT;
                    return var3;
case 23:
                    var4 = var1.deafened;
                    var3 = var1.selfMute;
                    var1 = var1.isSpeaking;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 15;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.ServiceNotificationIcon;
                    if(var4) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    if(var3) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    if(var1) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var1 = var2.IDLE;
                    _fun0007_ip = 31; continue _fun0007;
case 29:
                    var1 = var2.SPEAKING;
case 31:
                    _fun0007_ip = 32; continue _fun0007;
case 27:
                    var1 = var2.MUTED;
case 32:
                    _fun0007_ip = 33; continue _fun0007;
case 25:
                    var1 = var2.DEAFENED;
case 33:
                    return var1;
                }
            };
            var3['getIcon'] = var4;
            var4 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.connectionState;
                    var4 = null;
                    if(!(var4 == var1)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var1 = _closure3_slot0;
                    var1['state'] = var5;
                    _fun0008_ip = 36; continue _fun0008;
case 34:
                    var6 = _closure3_slot0;
                    var3 = var6.getIcon;
                    var2 = var6.state;
                    var2 = var3.bind(var6)(var2);
                    var3 = var6.getIcon;
                    var3 = var3.bind(var6)(var5);
                    var6 = var6.state;
                    var7 = var6.channelId;
                    var6 = var5.channelId;
                    if(!(var7 === var6)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var6 = _closure3_slot0;
                    var6 = var6.state;
                    var7 = var6.connectionState;
                    var6 = var5.connectionState;
                    if(!(var7 === var6)) { _fun0008_ip = 37; continue _fun0008 }
case 39:
                    var6 = _closure3_slot0;
                    var6 = var6.state;
                    var7 = var6.selfMute;
                    var6 = var5.selfMute;
                    if(!(var7 === var6)) { _fun0008_ip = 37; continue _fun0008 }
case 40:
                    var6 = _closure3_slot0;
                    var6 = var6.state;
                    var7 = var6.deafened;
                    var6 = var5.deafened;
                    if(!(var7 === var6)) { _fun0008_ip = 37; continue _fun0008 }
case 25:
                    var6 = _closure3_slot0;
                    var6 = var6.state;
                    var8 = var6.embeddedActivity;
                    var9 = var4 == var8;
                    var6 = undefined;
                    if(var9) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var6 = var8.compositeInstanceId;
case 41:
                    var8 = var5.embeddedActivity;
                    var9 = var4 == var8;
                    var7 = undefined;
                    if(var9) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var7 = var8.compositeInstanceId;
case 43:
                    if(!(var6 === var7)) { _fun0008_ip = 37; continue _fun0008 }
case 45:
                    var6 = _closure3_slot0;
                    var6 = var6.state;
                    var7 = var6.isStreaming;
                    var6 = var5.isStreaming;
                    if(!(var7 === var6)) { _fun0008_ip = 37; continue _fun0008 }
case 46:
                    if(!(var2 === var3)) { _fun0008_ip = 37; continue _fun0008 }
case 47:
                    var2 = _closure3_slot0;
                    var2['state'] = var5;
                    _fun0008_ip = 36; continue _fun0008;
case 37:
                    var8 = var5.channelId;
                    var9 = var5.connectionState;
                    var11 = var5.selfMute;
                    var10 = var5.deafened;
                    var15 = var5.embeddedActivity;
                    var6 = var5.isStreaming;
                    var2 = _closure3_slot0;
                    var2['state'] = var5;
                    var7 = _closure1_slot11;
                    var5 = var7.getChannel;
                    var13 = var5.bind(var7)(var8);
                    if(!(var4 == var13)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 16;
                    var7 = var7[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.removeServiceHandler;
                    var5 = _closure3_slot0;
                    var5 = var5.voiceServiceHandlerId;
                    var5 = var7.bind(var8)(var5);
                    _fun0008_ip = 36; continue _fun0008;
case 48:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 17;
                    var7 = var7[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.getStatus;
                    var7 = var7.bind(var8)(var9);
                    var20 = var7.connectionStatusText;
                    var7 = var4 != var15;
                    var14 = '';
                    var12 = var14;
                    if(!var7) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var9 = _closure1_slot9;
                    var8 = var9.getApplication;
                    var16 = var4 == var15;
                    var7 = undefined;
                    if(var16) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var7 = var15.applicationId;
case 52:
                    var8 = var8.bind(var9)(var7);
                    var9 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var7 = 18;
                    var7 = var15[var7];
                    var7 = var9.bind(var5)(var7);
                    var9 = var4 == var8;
                    var4 = undefined;
                    if(var9) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var4 = var8.name;
case 54:
                    var8 = var7.bind(var5)(var4);
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var7 = var4.concat;
                    var4 = ' - ';
                    var12 = var7.bind(var4)(var8);
case 50:
                    var16 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 19;
                    var4 = var7[var4];
                    var15 = var16.bind(var5)(var4);
                    var9 = var15.computeChannelName;
                    var8 = _closure1_slot16;
                    var4 = _closure1_slot14;
                    var9 = var9.bind(var15)(var13, var8, var4);
                    var4 = {};
                    var17 = 20;
                    var8 = var7[var17];
                    var8 = var16.bind(var5)(var8);
                    var19 = var8.intl;
                    var18 = var19.formatToPlainString;
                    var8 = var7[var17];
                    var8 = var16.bind(var5)(var8);
                    var8 = var8.t;
                    var15 = var8.aUT3+M;
                    var8 = {};
                    var8['callState'] = var20;
                    var8 = var18.bind(var19)(var15, var8);
                    var4['title'] = var8;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var8 = var8.concat;
                    var8 = var8.bind(var14)(var9, var12);
                    var4['content'] = var8;
                    var9 = 15;
                    var8 = var7[var9];
                    var8 = var16.bind(var5)(var8);
                    var8 = var8.ServiceNotificationPriority;
                    var8 = var8.HIGH;
                    var4['priority'] = var8;
                    var14 = _closure3_slot0;
                    var12 = var14.createAction;
                    var8 = 'SelectChannel';
                    var8 = var12.bind(var14)(var13, var8, var5);
                    var4['contentAction'] = var8;
                    var12 = var14.createAction;
                    var8 = var7[var17];
                    var8 = var16.bind(var5)(var8);
                    var15 = var8.intl;
                    var8 = var15.string;
                    var7 = var7[var17];
                    var7 = var16.bind(var5)(var7);
                    var7 = var7.t;
                    var7 = var7["6vrfgt"];
                    var8 = var8.bind(var15)(var7);
                    var7 = 'Disconnect';
                    var8 = var12.bind(var14)(var13, var7, var8);
                    var7 = new Array(3);
                    var7[0] = var8;
                    var12 = var14.createAction;
                    var18 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var15 = var8[var17];
                    var15 = var18.bind(var5)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var8 = var8[var17];
                    var8 = var18.bind(var5)(var8);
                    var8 = var8.t;
                    if(var11) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var11 = var8.w4m945;
                    var11 = var15.bind(var16)(var11);
                    _fun0008_ip = 58; continue _fun0008;
case 56:
                    var8 = var8.YqAjXy;
                    var11 = var15.bind(var16)(var8);
case 58:
                    var8 = 'ToggleSelfMute';
                    var8 = var12.bind(var14)(var13, var8, var11);
                    var7[1] = var8;
                    var12 = _closure3_slot0;
                    var11 = var12.createAction;
                    var16 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var14 = var8[var17];
                    var14 = var16.bind(var5)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var8 = var8[var17];
                    var8 = var16.bind(var5)(var8);
                    var8 = var8.t;
                    if(var10) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var10 = var8.wjcRFX;
                    var10 = var14.bind(var15)(var10);
                    _fun0008_ip = 61; continue _fun0008;
case 59:
                    var8 = var8["2US872"];
                    var10 = var14.bind(var15)(var8);
case 61:
                    var8 = 'ToggleDeafen';
                    var8 = var11.bind(var12)(var13, var8, var10);
                    var7[2] = var8;
                    var4['auxiliaryActions'] = var7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var8.bind(var5)(var7);
                    var7 = var7.ServiceNotificationType;
                    if(var6) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var6 = var7.VOICE_CALL;
                    _fun0008_ip = 64; continue _fun0008;
case 62:
                    var6 = var7.SCREEN_SHARE;
case 64:
                    var4['type'] = var6;
                    var6 = true;
                    var4['usesGateway'] = var6;
                    var4['icon'] = var3;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 16;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.updateServiceHandler;
                    var1 = _closure3_slot0;
                    var1 = var1.voiceServiceHandlerId;
                    var1 = var2.bind(var3)(var1, var4);
case 36:
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
            var5 = _closure1_slot10;
            var4 = var5.addChangeListener;
            var3 = var1.handleApplicationStreamStateChange;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot15;
            var2 = var3.addChangeListener;
            var1 = var1.handleSpeakingStateChange;
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
            var5 = _closure1_slot12;
            var4 = var5.removeChangeListener;
            var3 = var1.handleMediaEngineStateChange;
            var3 = var4.bind(var5)(var3);
            var5 = _closure1_slot8;
            var4 = var5.removeChangeListener;
            var3 = var1.handleEmbeddedActivityStateChange;
            var3 = var4.bind(var5)(var3);
            var5 = _closure1_slot10;
            var4 = var5.removeChangeListener;
            var3 = var1.handleApplicationStreamStateChange;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot15;
            var2 = var3.removeChangeListener;
            var1 = var1.handleSpeakingStateChange;
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
    var _closure1_slot17 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function VoiceNotificationLifecycleManager() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 65; continue _fun0009 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 66; continue _fun0009;
case 65:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 66:
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
            var2 = _closure1_slot17;
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
            var2 = _closure1_slot17;
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
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/VoiceNotificationManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();