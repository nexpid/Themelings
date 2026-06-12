// app/modules/clips/ClipAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var6 = function getClipType(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var1 = var1.decision;
            var3 = null;
            var5 = var3 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var5) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = var1.signal;
            var3 = var3 == var1;
            var2 = undefined;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var2 = var1.type;
case 36:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 4;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ClipSignalTypes;
            var3 = var3.MANUAL;
            if(!(var3 !== var2)) { _fun0004_ip = 22; continue _fun0004 }
case 39:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ClipSignalTypes;
            var3 = var3.DISTRIBUTED;
            if(!(var3 !== var2)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ClipSignalTypes;
            var3 = var3.LAUGHTER;
            if(!(var3 !== var2)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ClipSignalTypes;
            var1 = var1.GAME_EVENT;
            if(!(var1 !== var2)) { _fun0004_ip = 42; continue _fun0004 }
case 44:
            var1 = 'unknown';
            return var1;
case 42:
            var1 = 'auto_ml';
            return var1;
case 40:
            var1 = 'distributed';
            return var1;
case 22:
            var1 = 'manual';
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function getClipBaseProperties(arg1) {
        var2 = arg1;
        var1 = {};
        var4 = _closure1_slot8;
        var3 = undefined;
        var3 = var4.bind(var3)(var2);
        var1['clip_type'] = var3;
        var3 = var2.users;
        var3 = var3.length;
        var1['num_clip_participants'] = var3;
        var3 = var2.gameSessionId;
        var1['clip_session_id'] = var3;
        var2 = var2.isCandidate;
        var1['is_candidate'] = var2;
        return var1;
    };
    var _closure1_slot9 = var5;
    var4 = function getClipContextProperties() {
        var1 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.getClipsRuntime;
        var3 = var3.bind(var4)();
        var1['clip_runtime'] = var3;
        var3 = _closure1_slot5;
        var2 = var3.getCurrentClipsSessionId;
        var2 = var2.bind(var3)();
        var1['current_clip_session_id'] = var2;
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 8;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/clips/ClipAnalyticsUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getClipType'] = var6;
    var3['getClipBaseProperties'] = var5;
    var3['getClipContextProperties'] = var4;
    var4 = function getClipSignalTypes(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = new Array(0);
            var3 = _closure1_slot6;
            var2 = arg1;
            var2 = var2.timeline;
            var11 = undefined;
            var10 = var3.bind(var11)(var2);
            var3 = var10.bind(var11)();
            var2 = var3.done;
            var9 = 'manual';
            var8 = 'distributed';
            var7 = 'laughter';
            var6 = global;
            var5 = 'game_event:';
            var4 = 4;
            if(var2) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var2 = var3.value;
            var13 = var2.signal;
            var14 = var13.type;
            var15 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var4];
            var13 = var15.bind(var11)(var13);
            var13 = var13.ClipSignalTypes;
            var13 = var13.MANUAL;
            if(!(var13 !== var14)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var15 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var4];
            var13 = var15.bind(var11)(var13);
            var13 = var13.ClipSignalTypes;
            var13 = var13.DISTRIBUTED;
            if(!(var13 !== var14)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var15 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var4];
            var13 = var15.bind(var11)(var13);
            var13 = var13.ClipSignalTypes;
            var13 = var13.LAUGHTER;
            if(!(var13 !== var14)) { _fun0005_ip = 51; continue _fun0005 }
case 19:
            var15 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var4];
            var13 = var15.bind(var11)(var13);
            var13 = var13.ClipSignalTypes;
            var13 = var13.GAME_EVENT;
            if(!(var13 === var14)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var13 = var1.push;
            var2 = var2.signal;
            var14 = var2.eventType;
            var2 = var6.HermesInternal;
            var2 = var2.concat;
            var2 = var2.bind(var5)(var14);
            var2 = var13.bind(var1)(var2);
            _fun0005_ip = 52; continue _fun0005;
case 51:
            var2 = var1.push;
            var2 = var2.bind(var1)(var7);
            _fun0005_ip = 52; continue _fun0005;
case 49:
            var2 = var1.push;
            var2 = var2.bind(var1)(var8);
            _fun0005_ip = 52; continue _fun0005;
case 47:
            var2 = var1.push;
            var2 = var2.bind(var1)(var9);
case 52:
            var13 = var10.bind(var11)();
            var2 = var13.done;
            var3 = var13;
            if(!var2) { _fun0005_ip = 46; continue _fun0005 }
case 45:
            return var1;
        }
    };
    var3['getClipSignalTypes'] = var4;
    var4 = function getPreSaveClipAnalytics(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot3;
            var1 = var3.getCurrentUserActiveStream;
            var9 = var1.bind(var3)();
            var5 = null;
            var1 = var5 != var9;
            var3 = null;
            if(!var1) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var7 = _closure1_slot4;
            var4 = var7.getRTCConnection;
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 6;
            var8 = var8[var1];
            var1 = undefined;
            var8 = var10.bind(var1)(var8);
            var1 = var8.encodeStreamKey;
            var1 = var1.bind(var8)(var9);
            var3 = var4.bind(var7)(var1);
case 54:
            var1 = {};
            var7 = _closure1_slot9;
            var4 = undefined;
            var11 = var7.bind(var4)(var2);
            var12 = var1;
            var7 = copyDataProperties(var12, var11);
            var6 = _closure1_slot10;
            var11 = var6.bind(var4)();
            var12 = var1;
            var6 = copyDataProperties(var12, var11);
            var6 = var5 == var3;
            var7 = undefined;
            if(var6) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var6 = var3.getRTCConnectionId;
            var7 = var6.bind(var3)();
case 56:
            var6 = 'rtc_connection_id';
            var1[5] = var7;
            var6 = var5 == var3;
            var7 = undefined;
            if(var6) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var6 = var3.getMediaSessionId;
            var7 = var6.bind(var3)();
case 58:
            var6 = 'media_session_id';
            var1[5] = var7;
            var5 = var5 == var3;
            var4 = undefined;
            if(var5) { _fun0006_ip = 60; continue _fun0006 }
case 16:
            var4 = var3.parentMediaSessionId;
case 60:
            var3 = 'parent_media_session_id';
            var1[2] = var4;
            var4 = var2.guildId;
            var3 = 'guild_id';
            var1[2] = var4;
            var4 = var2.channelId;
            var3 = 'channel_id';
            var1[2] = var4;
            var4 = var2.applicationId;
            var3 = 'application_id';
            var1[2] = var4;
            var4 = var2.applicationName;
            var3 = 'application_name';
            var1[2] = var4;
            var4 = var2.id;
            var3 = 'clip_uuid';
            var1[2] = var4;
            var2 = var2.timeline;
            var3 = var2.length;
            var2 = 'clip_event_timeline_size';
            var1[1] = var3;
            return var1;
        }
    };
    var3['getPreSaveClipAnalytics'] = var4;
    var2 = function getPostSaveClipAnalytics(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg2;
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var20 = var3;
            var1 = new var20[var1](var19);
            var8 = var1 instanceof Object ? var1 : var3;
            var9 = var2.framesEncodedByEncoder;
            var11 = 7;
            var10 = undefined;
            var6 = null;
            for(var1 in var9)
case 4:
            {
case 61:
                var15 = var1;
                var13 = var2.framesEncodedByEncoder;
                var16 = var13[var15];
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var11];
                var14 = var14.bind(var10)(var13);
                var13 = var14.parseEncoder;
                var15 = var13.bind(var14)(var15);
                var13 = var8.get;
                var14 = var13.bind(var8)(var15);
                var17 = var6 != var14;
                var13 = 0;
                if(!var17) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                var13 = var14;
case 62:
                var14 = var8.set;
                var13 = var13 + var16;
                var13 = var14.bind(var8)(var15, var13);
                _fun0007_ip = 4; continue _fun0007;
            }
case 64:
            var1 = {};
            var18 = arg1;
            var19 = var1;
            var4 = copyDataProperties(var19, var18);
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.NVIDIA_CUDA;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var7 = var4;
case 65:
            var4 = 'frames_encoded_nvidia_cuda';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.NVIDIA_DIRECT_3D;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var7 = var4;
case 67:
            var4 = 'frames_encoded_nvidia_direct3d';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.OPENH264;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var7 = var4;
case 69:
            var4 = 'frames_encoded_openh264';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.VIDEOTOOLBOX;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var7 = var4;
case 71:
            var4 = 'frames_encoded_videotoolbox';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.AMD_DIRECT_3D;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var7 = var4;
case 73:
            var4 = 'frames_encoded_amd_direct3d';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.AMD_VAAPI;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var7 = var4;
case 75:
            var4 = 'frames_encoded_amd_vaapi';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.INTEL;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var7 = var4;
case 77:
            var4 = 'frames_encoded_intel';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.INTEL_DIRECT_3D;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            var7 = var4;
case 79:
            var4 = 'frames_encoded_intel_direct3d';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.WMF_DIRECT_3D_INTEL;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 81; continue _fun0007 }
case 82:
            var7 = var4;
case 81:
            var4 = 'frames_encoded_wmf_direct3d_intel';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.WMF_DIRECT_3D_NVIDIA;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 83; continue _fun0007 }
case 84:
            var7 = var4;
case 83:
            var4 = 'frames_encoded_wmf_direct3d_nvidia';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.WMF_DIRECT_3D_AMD;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var7 = var4;
case 85:
            var4 = 'frames_encoded_wmf_direct3d_amd';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.WMF_DIRECT_3D;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var7 = var4;
case 87:
            var9 = var8.get;
            var12 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var12.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.WMF_DIRECT_3D_INTEL;
            var9 = var9.bind(var8)(var4);
            var12 = var6 != var9;
            var4 = 0;
            if(!var12) { _fun0007_ip = 89; continue _fun0007 }
case 90:
            var4 = var9;
case 89:
            var7 = var7 + var4;
            var9 = var8.get;
            var12 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var12.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.WMF_DIRECT_3D_NVIDIA;
            var9 = var9.bind(var8)(var4);
            var12 = var6 != var9;
            var4 = 0;
            if(!var12) { _fun0007_ip = 91; continue _fun0007 }
case 92:
            var4 = var9;
case 91:
            var7 = var7 + var4;
            var9 = var8.get;
            var12 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var12.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.WMF_DIRECT_3D_AMD;
            var9 = var9.bind(var8)(var4);
            var12 = var6 != var9;
            var4 = 0;
            if(!var12) { _fun0007_ip = 93; continue _fun0007 }
case 94:
            var4 = var9;
case 93:
            var7 = var7 + var4;
            var4 = 'frames_encoded_wmf_direct3d';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.UNCATEGORIZED;
            var4 = var7.bind(var8)(var4);
            var9 = var6 != var4;
            var7 = 0;
            if(!var9) { _fun0007_ip = 95; continue _fun0007 }
case 96:
            var7 = var4;
case 95:
            var4 = 'frames_encoded_uncategorized';
            var1[3] = var7;
            var7 = var8.get;
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var11];
            var4 = var9.bind(var10)(var4);
            var4 = var4.Encoders;
            var4 = var4.UNKNOWN;
            var4 = var7.bind(var8)(var4);
            var6 = var6 != var4;
            var5 = 0;
            if(!var6) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            var5 = var4;
case 97:
            var4 = 'frames_encoded_unknown';
            var1[3] = var5;
            var5 = var2.framesSubmitted;
            var4 = 'frames_submitted';
            var1[3] = var5;
            var5 = var2.framesSubmittedDuringClip;
            var4 = 'frames_submitted_during_clip';
            var1[3] = var5;
            var5 = var2.framesEncoded;
            var4 = 'frames_encoded';
            var1[3] = var5;
            var5 = var2.framesEncodedDuringClip;
            var4 = 'frames_encoded_during_clip';
            var1[3] = var5;
            var5 = var2.framesDropped;
            var4 = 'frames_dropped';
            var1[3] = var5;
            var5 = var2.framesDroppedDuringClip;
            var4 = 'frames_dropped_during_clip';
            var1[3] = var5;
            var5 = _closure1_slot5;
            var4 = var5.getSettings;
            var4 = var4.bind(var5)();
            var5 = var4.clipsLength;
            var4 = 'clip_duration_setting';
            var1[3] = var5;
            var5 = var2.clipDuration;
            var4 = 'clip_duration';
            var1[3] = var5;
            var5 = var2.clipResolutionWidth;
            var4 = 'clip_resolution_width';
            var1[3] = var5;
            var5 = var2.clipResolutionHeight;
            var4 = 'clip_resolution_height';
            var1[3] = var5;
            var5 = var2.minFps;
            var4 = 'min_fps';
            var1[3] = var5;
            var5 = var2.maxFps;
            var4 = 'max_fps';
            var1[3] = var5;
            var5 = var2.submittedFps;
            var4 = 'submitted_fps';
            var1[3] = var5;
            var4 = _closure1_slot2;
            var3 = var4.getState;
            var3 = var3.bind(var4)();
            var4 = var3.fps;
            var3 = 'target_fps';
            var1[2] = var4;
            var4 = var2.audioTrackCount;
            var3 = 'audio_track_count';
            var1[2] = var4;
            var3 = var2.savedAt;
            var2 = 'saved_at';
            var1[1] = var3;
            return var1;
        }
    };
    var3['getPostSaveClipAnalytics'] = var2;
    return var1;
})();