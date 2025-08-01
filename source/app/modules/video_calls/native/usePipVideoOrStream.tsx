// app/modules/video_calls/native/usePipVideoOrStream.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.isStreamParticipant;
    var _closure1_slot11 = var5;
    var5 = var4.isUserParticipant;
    var _closure1_slot12 = var5;
    var4 = var4.ParticipantTypes;
    var _closure1_slot13 = var4;
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
        var7 = _closure1_slot10;
        var3[1] = var7;
        var2 = _closure1_slot5;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var4 = null;
                if(!(var4 == var1)) { _fun0001_ip = 21; continue _fun0001 }
 15:
                var3 = new Array(0);
                _fun0001_ip = 43; continue _fun0001;
 21:
                var6 = _closure1_slot4;
                var2 = var6.getVideoParticipants;
                var1 = _closure2_slot0;
                var3 = var2.bind(var6)(var1);
 43:
                var1 = _closure2_slot0;
                var1 = var4 != var1;
                var6 = null;
                if(!var1) { _fun0001_ip = 78; continue _fun0001 }
 56:
                var8 = _closure1_slot4;
                var2 = var8.getSelectedParticipant;
                var1 = _closure2_slot0;
                var6 = var2.bind(var8)(var1);
 78:
                var2 = var3.find;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = _closure1_slot13;
                        var1 = var1.USER;
                        var1 = var3 === var1;
                        if(!var1) { _fun0002_ip = 37; continue _fun0002 }
 28:
                        var2 = var2.localVideoDisabled;
                        var1 = !var2;
 37:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var9 = _closure1_slot15;
                var2 = {};
                var8 = _closure2_slot0;
                var2['channelId'] = var8;
                var10 = _closure1_slot10;
                var2['VideoSpeakerStore'] = var10;
                var10 = _closure1_slot4;
                var2['ChannelRTCStore'] = var10;
                var10 = undefined;
                var2 = var9.bind(var10)(var2);
                if(!(var4 == var8)) { _fun0001_ip = 146; continue _fun0001 }
 140:
                var11 = new Array(0);
                _fun0001_ip = 165; continue _fun0001;
 146:
                var9 = _closure1_slot5;
                var8 = var9.getAllActiveStreamsForChannel;
                var7 = _closure2_slot0;
                var11 = var8.bind(var9)(var7);
 165:
                var _closure3_slot0 = var2;
                var7 = _closure1_slot11;
                var7 = var7.bind(var10)(var2);
                var8 = var2;
                if(!var7) { _fun0001_ip = 219; continue _fun0001 }
 184:
                var9 = var11.filter;
                var7 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                        if(var4) { _fun0003_ip = 102; continue _fun0003 }
 97:
                        var1 = var3.id;
 102:
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var7 = var9.bind(var11)(var7);
                var9 = var7.length;
                var7 = 0;
                if(!(!(var9 > var7))) { _fun0001_ip = 216; continue _fun0001 }
 210:
                _closure3_slot0 = var10;
                var2 = undefined;
 216:
                var8 = var2;
 219:
                var2 = var1;
                if(!(var4 != var8)) { _fun0001_ip = 229; continue _fun0001 }
 226:
                var2 = var8;
 229:
                var5 = var4 != var6;
                if(!var5) { _fun0001_ip = 259; continue _fun0001 }
 236:
                var7 = var6.id;
                var9 = var4 == var8;
                var6 = undefined;
                if(var9) { _fun0001_ip = 255; continue _fun0001 }
 250:
                var6 = var8.id;
 255:
                var5 = var7 === var6;
 259:
                if(!var5) { _fun0001_ip = 266; continue _fun0001 }
 262:
                var5 = var4 != var2;
 266:
                if(!var5) { _fun0001_ip = 292; continue _fun0001 }
 269:
                var7 = var2.id;
                var9 = var4 == var8;
                var6 = undefined;
                if(var9) { _fun0001_ip = 288; continue _fun0001 }
 283:
                var6 = var8.id;
 288:
                var5 = var7 === var6;
 292:
                if(!var5) { _fun0001_ip = 342; continue _fun0001 }
 295:
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
 342:
                if(!var5) { _fun0001_ip = 348; continue _fun0001 }
 345:
                var2 = var1;
 348:
                var5 = var4 != var2;
                var1 = null;
                if(!var5) { _fun0001_ip = 396; continue _fun0001 }
 357:
                var5 = var2.type;
                var3 = _closure1_slot13;
                var3 = var3.ACTIVITY;
                var1 = null;
                if(!(var5 !== var3)) { _fun0001_ip = 396; continue _fun0001 }
 378:
                var3 = var2.streamId;
                var3 = var4 != var3;
                var1 = null;
                if(!var3) { _fun0001_ip = 396; continue _fun0001 }
 393:
                var1 = var2;
 396:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot14 = var4;
    var5 = function getVideoOrStreamParticipant(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var8 = var1.VideoSpeakerStore;
            var6 = var1.ChannelRTCStore;
            var1 = null;
            if(!(var1 == var7)) { _fun0004_ip = 32; continue _fun0004 }
 26:
            var4 = new Array(0);
            _fun0004_ip = 43; continue _fun0004;
 32:
            var2 = var6.getVideoParticipants;
            var4 = var2.bind(var6)(var7);
 43:
            var3 = var4.find;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.id;
                    var5 = _closure1_slot6;
                    var1 = var5.getId;
                    var1 = var1.bind(var5)();
                    var1 = var4 !== var1;
                    if(!var1) { _fun0005_ip = 58; continue _fun0005 }
 32:
                    var4 = _closure1_slot12;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = !var2;
                    if(var2) { _fun0005_ip = 55; continue _fun0005 }
 49:
                    var2 = var3.localVideoDisabled;
 55:
                    var1 = var2;
 58:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var4 = var1 != var7;
            var3 = null;
            if(!var4) { _fun0004_ip = 95; continue _fun0004 }
 70:
            var5 = var6.getParticipant;
            var4 = var8.getSpeaker;
            var4 = var4.bind(var8)(var7);
            var3 = var5.bind(var6)(var7, var4);
 95:
            if(!(var1 != var3)) { _fun0004_ip = 102; continue _fun0004 }
 99:
            var2 = var3;
 102:
            var4 = _closure1_slot12;
            var3 = undefined;
            var3 = var4.bind(var3)(var2);
            if(!var3) { _fun0004_ip = 130; continue _fun0004 }
 119:
            var3 = var2.localVideoDisabled;
            var1 = null;
            if(var3) { _fun0004_ip = 133; continue _fun0004 }
 130:
            var1 = var2;
 133:
            return var1;
        }
    };
    var _closure1_slot15 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/usePipVideoOrStream.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
            var3 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
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
            if(!var7) { _fun0006_ip = 94; continue _fun0006 }
 91:
            var3 = var8;
 94:
            var7 = var4.bind(var5)(var3);
            _closure2_slot2 = var7;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var9 = _closure1_slot7;
            var3 = new Array(3);
            var3[0] = var9;
            var9 = _closure1_slot3;
            var3[1] = var9;
            var2 = _closure1_slot8;
            var3[2] = var2;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var5 = _closure1_slot7;
                    var3 = var5.getChannel;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var5)(var1);
                    var5 = null;
                    if(!(var5 != var1)) { _fun0007_ip = 132; continue _fun0007 }
 30:
                    var3 = _closure1_slot3;
                    var1 = var3.getCurrentEmbeddedActivity;
                    var1 = var1.bind(var3)();
                    var3 = _closure2_slot2;
                    var3 = var5 != var3;
                    if(!var3) { _fun0007_ip = 79; continue _fun0007 }
 55:
                    var7 = _closure1_slot8;
                    var6 = var7.isLocalVideoDisabled;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var3 = var6.bind(var7)(var2);
 79:
                    var1 = var5 != var1;
                    if(!var1) { _fun0007_ip = 93; continue _fun0007 }
 86:
                    var2 = _closure2_slot0;
                    var1 = !var2;
 93:
                    if(var1) { _fun0007_ip = 130; continue _fun0007 }
 96:
                    var2 = _closure2_slot2;
                    var2 = var5 != var2;
                    if(!var2) { _fun0007_ip = 121; continue _fun0007 }
 107:
                    var4 = _closure2_slot2;
                    var4 = var4.streamId;
                    var2 = var5 != var4;
 121:
                    if(!var2) { _fun0007_ip = 127; continue _fun0007 }
 124:
                    var2 = !var3;
 127:
                    var1 = var2;
 130:
                    return var1;
 132:
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