// app/modules/stage_channels/StageChannelSelfRichPresenceStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var9 = function handleUpdateActivity() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = function buildActivity() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure1_slot12;
                    var1 = var2.getVoiceChannelId;
                    var13 = var1.bind(var2)();
                    var1 = null;
                    if(!(var1 != var13)) { _fun0003_ip = 690; continue _fun0003 }
 26:
                    var3 = _closure1_slot14;
                    var2 = var3.getStageInstanceByChannel;
                    var12 = var2.bind(var3)(var13);
                    if(!(var1 != var12)) { _fun0003_ip = 688; continue _fun0003 }
 48:
                    var3 = _closure1_slot9;
                    var2 = var3.getChannel;
                    var3 = var2.bind(var3)(var13);
                    if(!(var1 != var3)) { _fun0003_ip = 686; continue _fun0003 }
 69:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 13;
                    var2 = var5[var2];
                    var9 = undefined;
                    var5 = var4.bind(var9)(var2);
                    var4 = var5.canEveryone;
                    var2 = _closure1_slot18;
                    var2 = var2.VIEW_CHANNEL;
                    var2 = var4.bind(var5)(var2, var3);
                    if(var2) { _fun0003_ip = 118; continue _fun0003 }
 116:
                    return var1;
 118:
                    var5 = _closure1_slot10;
                    var4 = var5.getGuild;
                    var2 = var3.getGuildId;
                    var2 = var2.bind(var3)();
                    var6 = var4.bind(var5)(var2);
                    if(!(var1 != var6)) { _fun0003_ip = 684; continue _fun0003 }
 149:
                    var5 = var6.features;
                    var4 = var5.has;
                    var2 = _closure1_slot17;
                    var2 = var2.DISCOVERABLE;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0003_ip = 180; continue _fun0003 }
 178:
                    return var1;
 180:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 14;
                    var2 = var5[var2];
                    var4 = var4.bind(var9)(var2);
                    var2 = var4.packStageChannelPartyId;
                    var4 = var2.bind(var4)(var3, var12);
                    var5 = _closure1_slot20;
                    var7 = var1 == var5;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 245; continue _fun0003 }
 225:
                    var5 = var5.party;
                    var7 = var1 == var5;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 245; continue _fun0003 }
 240:
                    var2 = var5.id;
 245:
                    var11 = null;
                    if(!(var2 === var4)) { _fun0003_ip = 255; continue _fun0003 }
 251:
                    var11 = _closure1_slot20;
 255:
                    var8 = _closure1_slot13;
                    var7 = var8.getMutableParticipants;
                    var5 = var3.id;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var2 = 15;
                    var2 = var15[var2];
                    var2 = var14.bind(var9)(var2);
                    var2 = var2.StageChannelParticipantNamedIndex;
                    var2 = var2.SPEAKER;
                    var2 = var7.bind(var8)(var5, var2);
                    var7 = var2.filter;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 15;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.StageChannelParticipantTypes;
                        var1 = var1.STREAM;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var7.bind(var2)(var5);
                    var7 = var5.length;
                    var2 = var2.length;
                    var5 = var2 - var7;
                    var8 = _closure1_slot13;
                    var2 = var8.getParticipantCount;
                    var2 = var2.bind(var8)(var13);
                    var8 = var2 - var7;
                    var7 = var1 == var11;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 387; continue _fun0003 }
 367:
                    var7 = var11.party;
                    var13 = var1 == var7;
                    var2 = undefined;
                    if(var13) { _fun0003_ip = 387; continue _fun0003 }
 382:
                    var2 = var7.size;
 387:
                    var2 = var1 != var2;
                    var7 = 0;
                    if(!var2) { _fun0003_ip = 414; continue _fun0003 }
 396:
                    var2 = var11.party;
                    var13 = var2.size;
                    var2 = 1;
                    var7 = var13[var2];
 414:
                    var2 = {};
                    var13 = _closure1_slot15;
                    var2['application_id'] = var13;
                    var12 = var12.topic;
                    if(!(var1 == var12)) { _fun0003_ip = 441; continue _fun0003 }
 435:
                    var12 = var3.topic;
 441:
                    if(!(var1 == var12)) { _fun0003_ip = 450; continue _fun0003 }
 445:
                    var12 = var3.name;
 450:
                    var2['name'] = var12;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var12 = 16;
                    var12 = var14[var12];
                    var13 = var13.bind(var9)(var12);
                    var12 = var13.getStageHasMedia;
                    var3 = var3.id;
                    var3 = var12.bind(var13)(var3);
                    var10 = _closure1_slot16;
                    if(var3) { _fun0003_ip = 505; continue _fun0003 }
 497:
                    var3 = var10.LISTENING;
                    _fun0003_ip = 511; continue _fun0003;
 505:
                    var3 = var10.WATCHING;
 511:
                    var2['type'] = var3;
                    var3 = {};
                    var12 = var1 == var11;
                    var10 = undefined;
                    if(var12) { _fun0003_ip = 546; continue _fun0003 }
 526:
                    var11 = var11.timestamps;
                    var12 = var1 == var11;
                    var10 = undefined;
                    if(var12) { _fun0003_ip = 546; continue _fun0003 }
 541:
                    var10 = var11.start;
 546:
                    if(!(var1 == var10)) { _fun0003_ip = 588; continue _fun0003 }
 550:
                    var11 = global;
                    var11 = var11.Date;
                    var12 = var11.prototype;
                    var12 = Object.create(var12, {constructor: {value: var11}});
                    var18 = var12;
                    var11 = new var18[var11](var17);
                    var12 = var11 instanceof Object ? var11 : var12;
                    var11 = var12.getTime;
                    var10 = var11.bind(var12)();
 588:
                    var3['start'] = var10;
                    var2['timestamps'] = var3;
                    var3 = {};
                    var10 = var6.icon;
                    var11 = var1 != var10;
                    var9 = undefined;
                    if(!var11) { _fun0003_ip = 616; continue _fun0003 }
 613:
                    var9 = var10;
 616:
                    var3['small_image'] = var9;
                    var6 = var6.name;
                    var3['small_text'] = var6;
                    var2['assets'] = var3;
                    var3 = {};
                    var3['id'] = var4;
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = global;
                    var6 = var5.Math;
                    var5 = var6.max;
                    var5 = var5.bind(var6)(var8, var7);
                    var4[1] = var5;
                    var3['size'] = var4;
                    var2['party'] = var3;
                    return var2;
 684:
                    return var1;
 686:
                    return var1;
 688:
                    return var1;
 690:
                    return var1;
                }
            };
            var5 = undefined;
            var3 = var1.bind(var5)();
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 17;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = _closure1_slot20;
            var1 = var4.bind(var5)(var3, var1);
            var1 = !var1;
            if(!var1) { _fun0002_ip = 58; continue _fun0002 }
 52:
            _closure1_slot20 = var3;
            var1 = true;
 58:
            return var1;
        }
    };
    var _closure1_slot22 = var9;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.STAGE_APPLICATION_ID;
    var _closure1_slot15 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ActivityTypes;
    var _closure1_slot16 = var8;
    var8 = var2.GuildFeatures;
    var _closure1_slot17 = var8;
    var8 = var2.Permissions;
    var _closure1_slot18 = var8;
    var2 = var2.RTCConnectionStates;
    var _closure1_slot19 = var2;
    var2 = null;
    var _closure1_slot20 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function StageChannelSelfRichPresenceStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
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
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var6 = this;
            var5 = var6.waitFor;
            var10 = _closure1_slot9;
            var9 = _closure1_slot12;
            var8 = _closure1_slot14;
            var7 = _closure1_slot11;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getActivity';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'StageChannelSelfRichPresenceStore';
    var8['displayName'] = var2;
    var2 = 19;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var9;
    var2['STAGE_INSTANCE_CREATE'] = var9;
    var2['STAGE_INSTANCE_UPDATE'] = var9;
    var2['STAGE_INSTANCE_DELETE'] = var9;
    var2['VOICE_CHANNEL_SELECT'] = var9;
    var9 = function handleUpdateRTCConnection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var6 = var1.state;
            var5 = _closure1_slot20;
            var1 = null;
            var7 = var1 == var5;
            var3 = undefined;
            var4 = undefined;
            if(var7) { _fun0005_ip = 64; continue _fun0005 }
 28:
            var5 = var5.party;
            var7 = var1 == var5;
            var4 = undefined;
            if(var7) { _fun0005_ip = 64; continue _fun0005 }
 43:
            var7 = var5.size;
            var5 = var1 == var7;
            var4 = undefined;
            if(var5) { _fun0005_ip = 64; continue _fun0005 }
 57:
            var5 = 1;
            var4 = var7[var5];
 64:
            var7 = var1 != var4;
            var5 = 0;
            var1 = 0;
            if(!var7) { _fun0005_ip = 78; continue _fun0005 }
 75:
            var1 = var4;
 78:
            var4 = _closure1_slot19;
            var4 = var4.RTC_CONNECTED;
            var4 = var6 !== var4;
            if(var4) { _fun0005_ip = 99; continue _fun0005 }
 95:
            var4 = var1 > var5;
 99:
            var1 = !var4;
            if(var4) { _fun0005_ip = 113; continue _fun0005 }
 105:
            var2 = _closure1_slot22;
            var1 = var2.bind(var3)();
 113:
            return var1;
        }
    };
    var2['RTC_CONNECTION_STATE'] = var9;
    var4 = function handleVoiceStateUpdates(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var7 = var1.voiceStates;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot20;
            var5 = null;
            if(!(var5 != var3)) { _fun0006_ip = 106; continue _fun0006 }
 30:
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 14;
            var3 = var8[var3];
            var8 = var6.bind(var1)(var3);
            var6 = var8.unpackStageChannelParty;
            var3 = _closure1_slot20;
            var3 = var6.bind(var8)(var3);
            _closure2_slot0 = var3;
            var3 = var5 != var3;
            if(!var3) { _fun0006_ip = 95; continue _fun0006 }
 76:
            var6 = var7.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.channelId;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var3 = var5 != var4;
 95:
            if(!var3) { _fun0006_ip = 106; continue _fun0006 }
 98:
            var2 = _closure1_slot22;
            var2 = var2.bind(var1)();
 106:
            return var1;
        }
    };
    var2['VOICE_STATE_UPDATES'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelSelfRichPresenceStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();