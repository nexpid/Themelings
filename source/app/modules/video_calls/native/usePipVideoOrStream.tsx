// app/modules/video_calls/native/usePipVideoOrStream.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function usePipVideoOrStream(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 9;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot4;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot5;
        var3[1] = var7;
        var2 = _closure1_slot6;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var4 = null;
                if(!(var4 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = new Array(0);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var6 = _closure1_slot4;
                var2 = var6.getVideoParticipants;
                var1 = _closure2_slot0;
                var3 = var2.bind(var6)(var1);
case 4:
                var1 = _closure2_slot0;
                var1 = var4 != var1;
                var6 = null;
                if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var8 = _closure1_slot4;
                var2 = var8.getSelectedParticipant;
                var1 = _closure2_slot0;
                var6 = var2.bind(var8)(var1);
case 5:
                var2 = var3.find;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = _closure1_slot13;
                        var1 = var1.USER;
                        var1 = var3 === var1;
                        if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var2 = var2.localVideoDisabled;
                        var1 = !var2;
case 7:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var9 = {};
                var8 = _closure2_slot0;
                var9['channelId'] = var8;
                var2 = _closure1_slot5;
                var9['VideoSpeakerStore'] = var2;
                var2 = _closure1_slot4;
                var9['ChannelRTCStore'] = var2;
                var2 = function getVideoOrStreamParticipant(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var7 = var1.channelId;
                        var8 = var1.VideoSpeakerStore;
                        var6 = var1.ChannelRTCStore;
                        var1 = null;
                        if(!(var1 == var7)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var4 = new Array(0);
                        _fun0003_ip = 4; continue _fun0003;
case 9:
                        var2 = var6.getVideoParticipants;
                        var4 = var2.bind(var6)(var7);
case 4:
                        var3 = var4.find;
                        var2 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var3 = arg1;
                                var4 = var3.id;
                                var5 = _closure1_slot7;
                                var1 = var5.getId;
                                var1 = var1.bind(var5)();
                                var1 = var4 !== var1;
                                if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 9:
                                var4 = _closure1_slot12;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var2 = !var2;
                                if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                                var2 = var3.localVideoDisabled;
case 12:
                                var1 = var2;
case 11:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var4 = var1 != var7;
                        var3 = null;
                        if(!var4) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var5 = var6.getParticipant;
                        var4 = var8.getSpeaker;
                        var4 = var4.bind(var8)(var7);
                        var3 = var5.bind(var6)(var7, var4);
case 14:
                        if(!(var1 != var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var2 = var3;
case 16:
                        var4 = _closure1_slot12;
                        var3 = undefined;
                        var3 = var4.bind(var3)(var2);
                        if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                        return var2;
case 18:
                        var3 = var2.localVideoDisabled;
                        var1 = null;
                        if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                        var1 = var2;
case 20:
                        return var1;
                    }
                };
                var10 = undefined;
                var2 = var2.bind(var10)(var9);
                if(!(var4 == var8)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                var11 = new Array(0);
                _fun0001_ip = 24; continue _fun0001;
case 22:
                var9 = _closure1_slot6;
                var8 = var9.getAllActiveStreamsForChannel;
                var7 = _closure2_slot0;
                var11 = var8.bind(var9)(var7);
case 24:
                var _closure3_slot0 = var2;
                var7 = _closure1_slot11;
                var7 = var7.bind(var10)(var2);
                var8 = var2;
                if(!var7) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                var9 = var11.filter;
                var7 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var5 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.encodeStreamKey;
                        var2 = {};
                        var6 = var5.streamType;
                        var2['streamType'] = var6;
                        var6 = var5.guildId;
                        var2['guildId'] = var6;
                        var6 = var5.channelId;
                        var2['channelId'] = var6;
                        var5 = var5.ownerId;
                        var2['ownerId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot0;
                        var4 = null;
                        var4 = var4 == var3;
                        if(var4) { _fun0005_ip = 27; continue _fun0005 }
case 14:
                        var1 = var3.id;
case 27:
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var7 = var9.bind(var11)(var7);
                var9 = var7.length;
                var7 = 0;
                if(!(!(var9 > var7))) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                _closure3_slot0 = var10;
                var2 = undefined;
case 28:
                var8 = var2;
case 25:
                var2 = var1;
                if(!(var4 != var8)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                var2 = var8;
case 30:
                var5 = var4 != var6;
                if(!var5) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                var7 = var6.id;
                var9 = var4 == var8;
                var6 = undefined;
                if(var9) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                var6 = var8.id;
case 34:
                var5 = var7 === var6;
case 32:
                if(!var5) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                var5 = var4 != var2;
case 36:
                if(!var5) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                var7 = var2.id;
                var9 = var4 == var8;
                var6 = undefined;
                if(var9) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                var6 = var8.id;
case 40:
                var5 = var7 === var6;
case 38:
                if(!var5) { _fun0001_ip = 42; continue _fun0001 }
case 43:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 11;
                var6 = var11[var6];
                var8 = var7.bind(var10)(var6);
                var7 = var8.isModalOpen;
                var9 = _closure1_slot1;
                var6 = 12;
                var6 = var11[var6];
                var6 = var9.bind(var10)(var6);
                var5 = var7.bind(var8)(var6);
case 42:
                if(!var5) { _fun0001_ip = 44; continue _fun0001 }
case 45:
                var2 = var1;
case 44:
                var5 = var4 != var2;
                var1 = null;
                if(!var5) { _fun0001_ip = 46; continue _fun0001 }
case 47:
                var5 = var2.type;
                var3 = _closure1_slot13;
                var3 = var3.ACTIVITY;
                var1 = null;
                if(!(var5 !== var3)) { _fun0001_ip = 46; continue _fun0001 }
case 48:
                var3 = var2.streamId;
                var3 = var4 != var3;
                var1 = null;
                if(!var3) { _fun0001_ip = 46; continue _fun0001 }
case 49:
                var1 = var2;
case 46:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot14 = var4;
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
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.isStreamParticipant;
    var _closure1_slot11 = var8;
    var8 = var5.isUserParticipant;
    var _closure1_slot12 = var8;
    var5 = var5.ParticipantTypes;
    var _closure1_slot13 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/usePipVideoOrStream.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useHasPipParticipant(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var6 = var2.isActivityViewFocused;
            var _closure2_slot0 = var6;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 9;
            var3 = var3[var9];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var7.bind(var8)(var4, var3);
            var _closure2_slot1 = var8;
            var4 = _closure1_slot14;
            var3 = null;
            var7 = var3 != var8;
            var3 = undefined;
            if(!var7) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var3 = var8;
case 50:
            var7 = var4.bind(var5)(var3);
            _closure2_slot2 = var7;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var9 = _closure1_slot8;
            var3 = new Array(3);
            var3[0] = var9;
            var9 = _closure1_slot3;
            var3[1] = var9;
            var2 = _closure1_slot9;
            var3[2] = var2;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure1_slot8;
                    var3 = var5.getChannel;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var5)(var1);
                    var5 = null;
                    if(!(var5 != var1)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var3 = _closure1_slot3;
                    var1 = var3.getCurrentEmbeddedActivity;
                    var1 = var1.bind(var3)();
                    var3 = _closure2_slot2;
                    var3 = var5 != var3;
                    if(!var3) { _fun0007_ip = 54; continue _fun0007 }
case 12:
                    var7 = _closure1_slot9;
                    var6 = var7.isLocalVideoDisabled;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var3 = var6.bind(var7)(var2);
case 54:
                    var1 = var5 != var1;
                    if(!var1) { _fun0007_ip = 51; continue _fun0007 }
case 55:
                    var2 = _closure2_slot0;
                    var1 = !var2;
case 51:
                    if(var1) { _fun0007_ip = 56; continue _fun0007 }
case 50:
                    var2 = _closure2_slot2;
                    var2 = var5 != var2;
                    if(!var2) { _fun0007_ip = 19; continue _fun0007 }
case 57:
                    var4 = _closure2_slot2;
                    var4 = var4.streamId;
                    var2 = var5 != var4;
case 19:
                    if(!var2) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var2 = !var3;
case 58:
                    var1 = var2;
case 56:
                    return var1;
case 52:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['useHasPipParticipant'] = var2;
    return var1;
})();