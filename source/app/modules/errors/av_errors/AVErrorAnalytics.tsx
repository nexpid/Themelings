// app/modules/errors/av_errors/AVErrorAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getOutboundVideoStats(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.getConnectionStats;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = null;
            var4 = var2 == var3;
            var1 = null;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var3.stats;
            var3 = var3.rtp;
            var5 = var3.outbound;
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = 'video';
                var1 = var1 === var2;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getInboundVideoStats(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = _closure1_slot4;
            var4 = var5.getConnectionStats;
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            if(!(var1 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var2.stats;
            var2 = var2.rtp;
            var2 = var2.inbound;
            var5 = var2[var3];
            var3 = var1 == var5;
            var2 = null;
            if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = 'video';
                var1 = var1 === var2;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var4;
case 12:
            var2 = var3;
case 10:
            return var2;
case 8:
            return var1;
case 6:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getVideoStats(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg2;
            var1 = arg1;
            if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var5 = _closure1_slot17;
            var3 = undefined;
            var1 = arg3;
            var1 = var5.bind(var3)(var4, var1);
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 16:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getLatestOutboundBitrateEstimate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.getConnectionStats;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0004_ip = 17; continue _fun0004 }
case 3:
            var3 = var3.stats;
            var3 = var3.transport;
            var2 = var3.outboundBitrateEstimate;
case 17:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function getLatestInboundBitrateEstimate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.getConnectionStats;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 17; continue _fun0005 }
case 3:
            var3 = var3.stats;
            var3 = var3.transport;
            var2 = var3.inboundBitrateEstimate;
case 17:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getCurrentScreenshareCaptureMethod(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var1 = var2.getConnectionStats;
            var8 = var1.bind(var2)(var3);
            var2 = _closure1_slot4;
            var1 = var2.getLastConnectionStats;
            var7 = var1.bind(var2)(var3);
            var1 = null;
            if(!(var1 != var8)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            if(!(var1 != var7)) { _fun0006_ip = 20; continue _fun0006 }
case 22:
            var5 = {};
            var6 = ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames'];
            var2 = var6.length;
            var4 = 0;
            var2 = var4 < var2;
            var12 = undefined;
            var3 = 0;
            if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var9 = var6[var3];
            var2 = var7.stats;
            var10 = var2.screenshare;
            var11 = var1 == var10;
            var2 = undefined;
            if(var11) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var2 = var10[var9];
case 25:
            var11 = var1 != var2;
            var10 = 0;
            if(!var11) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var10 = var2;
case 27:
            var2 = var8.stats;
            var2 = var2.screenshare;
            var14 = var1 == var2;
            var11 = undefined;
            if(var14) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var11 = var2[var9];
case 29:
            var14 = var1 != var11;
            var2 = 0;
            if(!var14) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var2 = var11;
case 31:
            var2 = var2 - var10;
            var5[var9] = var2;
            var3 = var3 + 1;
            var2 = var6.length;
            if(var3 < var2) { _fun0006_ip = 24; continue _fun0006 }
case 23:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.entries;
            var11 = var2.bind(var3)(var5);
            var2 = var11.length;
            var5 = var4 < var2;
            var8 = -1;
            var10 = 2;
            var9 = 1;
            var7 = null;
            var6 = 0;
            var2 = var8;
            var3 = null;
            if(!var5) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var14 = var11[var6];
            var5 = _closure1_slot3;
            var14 = var5.bind(var12)(var14, var10);
            var5 = var14[var4];
            var14 = var14[var9];
            if(!(var14 > var8)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var8 = var14;
            var7 = var5;
case 35:
            var6 = var6 + 1;
            var5 = var11.length;
            var2 = var8;
            var3 = var7;
            if(var6 < var5) { _fun0006_ip = 34; continue _fun0006 }
case 33:
            var4 = var2 > var4;
            var2 = null;
            if(!var4) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var2 = var3;
case 37:
            return var2;
case 20:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSystemAnalyticsInfo;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MediaEngineContextTypes;
    var _closure1_slot14 = var7;
    var4 = var4.SIMULCAST_HQ_QUALITY;
    var _closure1_slot15 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/AVErrorAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function sendAVErrorAnalyticsEvent(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.getErrorInfo;
            var5 = var4.bind(var5)(var7);
            var _closure2_slot2 = var5;
            var7 = _closure1_slot11;
            var4 = var7.getVoiceChannelId;
            var4 = var4.bind(var7)();
            var7 = 'channelId';
            var7 = var7 in var6;
            var8 = undefined;
            if(!var7) { _fun0007_ip = 2; continue _fun0007 }
case 39:
            var8 = var6.channelId;
case 2:
            var7 = null;
            if(!(var7 != var8)) { _fun0007_ip = 13; continue _fun0007 }
case 40:
            var4 = var8;
case 13:
            var8 = var7 != var4;
            var9 = null;
            if(!var8) { _fun0007_ip = 41; continue _fun0007 }
case 42:
            var9 = var4;
case 41:
            var _closure2_slot3 = var9;
            var8 = _closure1_slot7;
            var4 = var8.getChannel;
            var4 = var4.bind(var8)(var9);
            var _closure2_slot4 = var4;
            var4 = 'streamKey';
            var8 = var4 in var6;
            var4 = undefined;
            if(!var8) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var4 = var6.streamKey;
case 43:
            var8 = 'mediaContext';
            var9 = var8 in var6;
            var8 = undefined;
            if(!var9) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var8 = var6.mediaContext;
case 45:
            var _closure2_slot5 = var8;
            var9 = 'underlyingError';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var9 = var6.underlyingError;
case 47:
            var _closure2_slot6 = var9;
            var9 = 'errorMessage';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var9 = var6.errorMessage;
case 49:
            var _closure2_slot7 = var9;
            var9 = 'mediaSessionId';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var9 = var6.mediaSessionId;
case 51:
            var _closure2_slot8 = var9;
            var9 = 'rtcConnectionId';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var9 = var6.rtcConnectionId;
case 53:
            var _closure2_slot9 = var9;
            var9 = 'videoCodec';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var9 = var6.videoCodec;
case 55:
            var _closure2_slot10 = var9;
            var9 = 'videoEncoder';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var9 = var6.videoEncoder;
case 57:
            var _closure2_slot11 = var9;
            var9 = 'videoDecoder';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var9 = var6.videoDecoder;
case 59:
            var _closure2_slot12 = var9;
            var9 = 'audioCaptureSampleRateMismatchPercent';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var9 = var6.audioCaptureSampleRateMismatchPercent;
case 61:
            var _closure2_slot13 = var9;
            var9 = 'audioInputDeviceName';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var9 = var6.audioInputDeviceName;
case 63:
            var _closure2_slot14 = var9;
            var9 = 'audioOutputDeviceName';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var9 = var6.audioOutputDeviceName;
case 65:
            var _closure2_slot15 = var9;
            var9 = 'videoDeviceName';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var9 = var6.videoDeviceName;
case 67:
            var _closure2_slot16 = var9;
            var9 = 'userId';
            var9 = var9 in var6;
            var11 = undefined;
            if(!var9) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var11 = var6.userId;
case 69:
            var9 = var7 != var4;
            var6 = null;
            if(!var9) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 13;
            var9 = var12[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.decodeStreamKey;
            var6 = var9.bind(var10)(var4);
case 71:
            var _closure2_slot17 = var6;
            var9 = var7 != var4;
            var13 = null;
            if(!var9) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var10 = _closure1_slot12;
            var9 = var10.getRTCConnection;
            var13 = var9.bind(var10)(var4);
case 73:
            var _closure2_slot18 = var13;
            var9 = var13;
            if(!(var7 == var4)) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var12 = _closure1_slot9;
            var10 = var12.getRTCConnection;
            var9 = var10.bind(var12)();
case 75:
            var _closure2_slot19 = var9;
            var10 = var7 != var4;
            var14 = null;
            if(!var10) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var12 = var7 == var13;
            var10 = undefined;
            if(var12) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            var12 = var13.analyticsContext;
            var15 = var7 == var12;
            var10 = undefined;
            if(var15) { _fun0007_ip = 79; continue _fun0007 }
case 81:
            var10 = var12.streamApplication;
case 79:
            var14 = var10;
case 77:
            var12 = _closure1_slot6;
            var10 = var12.getState;
            var10 = var10.bind(var12)();
            var12 = var10.resolution;
            var _closure2_slot20 = var12;
            var10 = var10.fps;
            var _closure2_slot21 = var10;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 14;
            var10 = var15[var10];
            var12 = var12.bind(var1)(var10);
            var10 = var12.getRunningGameAnalytics;
            var10 = var10.bind(var12)(var14);
            var12 = var10.gameName;
            var _closure2_slot22 = var12;
            var12 = var10.gameId;
            var _closure2_slot23 = var12;
            var12 = var10.exe;
            var _closure2_slot24 = var12;
            var10 = var10.distributor;
            var _closure2_slot25 = var10;
            var5 = var5.isErrorOutbound;
            var _closure2_slot26 = var5;
            if(!(var7 == var8)) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var10 = _closure1_slot14;
            var8 = var10.DEFAULT;
case 82:
            var _closure2_slot27 = var8;
            if(!(var7 != var6)) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            var11 = var6.ownerId;
case 84:
            var _closure2_slot28 = var11;
            if(!(var7 == var13)) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var8 = 'receiver';
            if(!var5) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var8 = 'sender';
case 88:
            _fun0007_ip = 90; continue _fun0007;
case 86:
            var12 = var7 == var13;
            var10 = undefined;
            if(var12) { _fun0007_ip = 91; continue _fun0007 }
case 92:
            var12 = var13.getVoiceParticipantType;
            var10 = var12.bind(var13)();
case 91:
            var8 = var10;
case 90:
            var _closure2_slot29 = var8;
            var8 = var7 == var9;
            var10 = undefined;
            if(var8) { _fun0007_ip = 93; continue _fun0007 }
case 94:
            var8 = var9.getMediaEngineConnectionId;
            var10 = var8.bind(var9)();
case 93:
            var12 = var7 != var10;
            var8 = null;
            if(!var12) { _fun0007_ip = 95; continue _fun0007 }
case 96:
            var8 = var10;
case 95:
            var _closure2_slot30 = var8;
            if(!(var7 != var4)) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            if(!(var7 == var6)) { _fun0007_ip = 99; continue _fun0007 }
case 97:
            if(var5) { _fun0007_ip = 100; continue _fun0007 }
case 101:
            var8 = var7 != var11;
            var4 = null;
            if(!var8) { _fun0007_ip = 102; continue _fun0007 }
case 103:
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0007_ip = 104; continue _fun0007 }
case 105:
            var10 = var9.getInboundStats;
            var8 = var10.bind(var9)(var11);
case 104:
            var4 = var8;
case 102:
            _fun0007_ip = 106; continue _fun0007;
case 100:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 15;
            var8 = var11[var8];
            var12 = var10.bind(var1)(var8);
            var11 = var12.maxBy;
            var8 = var7 == var9;
            var10 = undefined;
            if(var8) { _fun0007_ip = 107; continue _fun0007 }
case 108:
            var8 = var9.getOutboundStats;
            var10 = var8.bind(var9)();
case 107:
            if(!(var7 == var10)) { _fun0007_ip = 109; continue _fun0007 }
case 110:
            var10 = new Array(0);
case 109:
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.num_frames;
                return var1;
            };
            var10 = var11.bind(var12)(var10, var8);
            var11 = var7 != var10;
            var8 = null;
            if(!var11) { _fun0007_ip = 111; continue _fun0007 }
case 112:
            var8 = var10;
case 111:
            var4 = var8;
case 106:
            _fun0007_ip = 113; continue _fun0007;
case 99:
            var8 = var7 == var9;
            if(var5) { _fun0007_ip = 114; continue _fun0007 }
case 115:
            var5 = undefined;
            if(var8) { _fun0007_ip = 116; continue _fun0007 }
case 117:
            var10 = var9.getInboundStats;
            var6 = var6.ownerId;
            var5 = var10.bind(var9)(var6);
case 116:
            _fun0007_ip = 118; continue _fun0007;
case 114:
            var6 = undefined;
            if(var8) { _fun0007_ip = 119; continue _fun0007 }
case 120:
            var8 = var9.getOutboundStats;
            var9 = var8.bind(var9)();
            var7 = var7 == var9;
            var6 = undefined;
            if(var7) { _fun0007_ip = 119; continue _fun0007 }
case 121:
            var8 = var9.find;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.quality;
                var1 = _closure1_slot15;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var8.bind(var9)(var7);
case 119:
            var5 = var6;
case 118:
            var4 = var5;
case 113:
            var _closure2_slot1 = var4;
            var3 = _closure1_slot5;
            var4 = var3.bind(var1)();
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var5 = {};
                    var2 = _closure2_slot0;
                    var1 = var2.valueOf;
                    var1 = var1.bind(var2)();
                    var5['error_name'] = var1;
                    var1 = _closure2_slot2;
                    var2 = var1.errorCode;
                    var5['error_code'] = var2;
                    var2 = var1.severity;
                    var5['error_severity'] = var2;
                    var1 = var1.category;
                    var5['error_category'] = var1;
                    var1 = _closure2_slot6;
                    var3 = null;
                    var2 = var3 != var1;
                    var1 = null;
                    if(!var2) { _fun0008_ip = 122; continue _fun0008 }
case 123:
                    var1 = _closure2_slot6;
case 122:
                    var5['underlying_error'] = var1;
                    var1 = _closure2_slot7;
                    var2 = var3 != var1;
                    var1 = null;
                    if(!var2) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var1 = _closure2_slot7;
case 25:
                    var5['error_message'] = var1;
                    var1 = _closure2_slot4;
                    var2 = var3 == var1;
                    var1 = undefined;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 44; continue _fun0008 }
case 124:
                    var2 = _closure2_slot4;
                    var7 = var2.guild_id;
case 44:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 125; continue _fun0008 }
case 126:
                    var2 = var7;
case 125:
                    var5['guild_id'] = var2;
                    var2 = _closure2_slot3;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 127; continue _fun0008 }
case 128:
                    var2 = _closure2_slot3;
case 127:
                    var5['channel_id'] = var2;
                    var2 = _closure2_slot4;
                    var2 = var3 == var2;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 129; continue _fun0008 }
case 130:
                    var2 = _closure2_slot4;
                    var7 = var2.type;
case 129:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 49; continue _fun0008 }
case 131:
                    var2 = var7;
case 49:
                    var5['channel_type'] = var2;
                    var2 = _closure2_slot9;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 132; continue _fun0008 }
case 133:
                    var2 = _closure2_slot9;
case 132:
                    var5['rtc_connection_id'] = var2;
                    var2 = _closure2_slot8;
                    if(!(var3 == var2)) { _fun0008_ip = 134; continue _fun0008 }
case 135:
                    var7 = _closure1_slot9;
                    var2 = var7.getMediaSessionId;
                    var7 = var2.bind(var7)();
                    _fun0008_ip = 136; continue _fun0008;
case 134:
                    var7 = _closure2_slot8;
case 136:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 137; continue _fun0008 }
case 138:
                    var2 = var7;
case 137:
                    var5['media_session_id'] = var2;
                    var2 = _closure2_slot18;
                    var2 = var3 == var2;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 139; continue _fun0008 }
case 140:
                    var2 = _closure2_slot18;
                    var7 = var2.parentMediaSessionId;
case 139:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 141; continue _fun0008 }
case 142:
                    var2 = var7;
case 141:
                    var5['parent_media_session_id'] = var2;
                    var2 = _closure2_slot5;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 143; continue _fun0008 }
case 144:
                    var2 = _closure2_slot5;
case 143:
                    var5['context'] = var2;
                    var8 = _closure1_slot9;
                    var7 = var8.getRTCConnection;
                    var9 = var7.bind(var8)();
                    var7 = var3 == var9;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 145; continue _fun0008 }
case 146:
                    var7 = var9.getVoiceVersion;
                    var8 = var7.bind(var9)();
case 145:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 147; continue _fun0008 }
case 148:
                    var7 = var8;
case 147:
                    var5['voice_backend_version'] = var7;
                    var8 = _closure1_slot9;
                    var7 = var8.getRTCConnection;
                    var9 = var7.bind(var8)();
                    var7 = var3 == var9;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 149; continue _fun0008 }
case 150:
                    var7 = var9.getRtcWorkerVersion;
                    var8 = var7.bind(var9)();
case 149:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 151; continue _fun0008 }
case 152:
                    var7 = var8;
case 151:
                    var5['rtc_worker_backend_version'] = var7;
                    var9 = _closure1_slot10;
                    var8 = var9.getRegion;
                    var10 = _closure1_slot9;
                    var7 = var10.getHostname;
                    var7 = var7.bind(var10)();
                    var8 = var8.bind(var9)(var7);
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 153; continue _fun0008 }
case 154:
                    var7 = var8;
case 153:
                    var5['guild_region'] = var7;
                    var8 = _closure1_slot9;
                    var7 = var8.getHostname;
                    var8 = var7.bind(var8)();
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 155; continue _fun0008 }
case 76:
                    var7 = var8;
case 155:
                    var5['hostname'] = var7;
                    var7 = _closure2_slot19;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 156; continue _fun0008 }
case 157:
                    var9 = _closure2_slot19;
                    var7 = var9.getDurationSeconds;
                    var8 = var7.bind(var9)();
case 156:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 158; continue _fun0008 }
case 159:
                    var7 = var8;
case 158:
                    var5['duration'] = var7;
                    var7 = _closure2_slot29;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 160; continue _fun0008 }
case 161:
                    var7 = _closure2_slot29;
case 160:
                    var5['participant_type'] = var7;
                    var7 = _closure2_slot1;
                    var8 = var3 == var7;
                    var9 = undefined;
                    if(var8) { _fun0008_ip = 162; continue _fun0008 }
case 163:
                    var9 = var7.num_frames;
case 162:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 164; continue _fun0008 }
case 165:
                    var8 = var9;
case 164:
                    var5['num_frames'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var3 == var8;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 166; continue _fun0008 }
case 167:
                    var9 = var8.num_packets;
case 166:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 168; continue _fun0008 }
case 169:
                    var8 = var9;
case 168:
                    var5['num_packets'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var3 == var8;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 170; continue _fun0008 }
case 171:
                    var9 = var8.num_bytes;
case 170:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 172; continue _fun0008 }
case 173:
                    var8 = var9;
case 172:
                    var5['num_bytes'] = var8;
                    var11 = _closure1_slot18;
                    var10 = _closure2_slot26;
                    var9 = _closure2_slot30;
                    var8 = _closure2_slot28;
                    var9 = var11.bind(var1)(var10, var9, var8);
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 174; continue _fun0008 }
case 175:
                    var8 = var9.packetsLost;
case 174:
                    var9 = var3 != var8;
                    var7 = 0;
                    if(!var9) { _fun0008_ip = 176; continue _fun0008 }
case 177:
                    var7 = var8;
case 176:
                    var5['num_packets_lost'] = var7;
                    var7 = _closure2_slot10;
                    if(!(var3 == var7)) { _fun0008_ip = 178; continue _fun0008 }
case 179:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 16;
                    var7 = var9[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.parseCodecType;
                    var12 = _closure1_slot18;
                    var11 = _closure2_slot26;
                    var10 = _closure2_slot30;
                    var7 = _closure2_slot28;
                    var10 = var12.bind(var1)(var11, var10, var7);
                    var11 = var3 == var10;
                    var7 = undefined;
                    if(var11) { _fun0008_ip = 180; continue _fun0008 }
case 181:
                    var10 = var10.codec;
                    var7 = var10.name;
case 180:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 182; continue _fun0008;
case 178:
                    var8 = _closure2_slot10;
case 182:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 183; continue _fun0008 }
case 184:
                    var7 = var8;
case 183:
                    var5['video_codec'] = var7;
                    var7 = _closure2_slot11;
                    if(!(var3 == var7)) { _fun0008_ip = 185; continue _fun0008 }
case 186:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 16;
                    var7 = var9[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.parseEncoder;
                    var10 = _closure1_slot16;
                    var7 = _closure2_slot30;
                    var10 = var10.bind(var1)(var7);
                    var11 = var3 == var10;
                    var7 = undefined;
                    if(var11) { _fun0008_ip = 187; continue _fun0008 }
case 188:
                    var7 = var10.encoderImplementationName;
case 187:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 189; continue _fun0008;
case 185:
                    var8 = _closure2_slot11;
case 189:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 190; continue _fun0008 }
case 191:
                    var7 = var8;
case 190:
                    var5['video_encoder'] = var7;
                    var7 = _closure2_slot12;
                    if(!(var3 == var7)) { _fun0008_ip = 192; continue _fun0008 }
case 193:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 16;
                    var7 = var9[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.parseDecoder;
                    var11 = _closure1_slot17;
                    var10 = _closure2_slot30;
                    var7 = _closure2_slot28;
                    var10 = var11.bind(var1)(var10, var7);
                    var11 = var3 == var10;
                    var7 = undefined;
                    if(var11) { _fun0008_ip = 194; continue _fun0008 }
case 195:
                    var7 = var10.decoderImplementationName;
case 194:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 196; continue _fun0008;
case 192:
                    var8 = _closure2_slot12;
case 196:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 197; continue _fun0008 }
case 198:
                    var7 = var8;
case 197:
                    var5['video_decoder'] = var7;
                    var7 = _closure2_slot13;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 199; continue _fun0008 }
case 200:
                    var7 = _closure2_slot13;
case 199:
                    var5['audio_capture_sample_rate_mismatch_percent'] = var7;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 17;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.WindowVisibilityVideoManager;
                    var7 = var8.isIncomingVideoEnabled;
                    var7 = var7.bind(var8)();
                    var7 = !var7;
                    var5['incoming_video_stopped_for_occlusion'] = var7;
                    var10 = _closure1_slot18;
                    var9 = _closure2_slot26;
                    var8 = _closure2_slot30;
                    var7 = _closure2_slot28;
                    var7 = var10.bind(var1)(var9, var8, var7);
                    var9 = var3 == var7;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 201; continue _fun0008 }
case 202:
                    var8 = var7.bitrate;
case 201:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 203; continue _fun0008 }
case 204:
                    var7 = var8;
case 203:
                    var5['bitrate'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 205; continue _fun0008 }
case 206:
                    var9 = _closure1_slot16;
                    var8 = _closure2_slot30;
                    var9 = var9.bind(var1)(var8);
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 207; continue _fun0008 }
case 208:
                    var8 = var9.bitrateTarget;
case 207:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 205; continue _fun0008 }
case 209:
                    var7 = var8;
case 205:
                    var5['target_bitrate'] = var7;
                    var7 = _closure2_slot26;
                    var9 = _closure2_slot27;
                    var8 = _closure2_slot28;
                    if(var7) { _fun0008_ip = 210; continue _fun0008 }
case 211:
                    var7 = _closure1_slot17;
                    var8 = var7.bind(var1)(var9, var8);
                    var10 = var3 == var8;
                    var7 = undefined;
                    if(var10) { _fun0008_ip = 212; continue _fun0008 }
case 213:
                    var7 = var8.frameRateDecode;
case 212:
                    var10 = var3 != var7;
                    var8 = null;
                    if(!var10) { _fun0008_ip = 214; continue _fun0008 }
case 215:
                    var8 = var7;
case 214:
                    _fun0008_ip = 216; continue _fun0008;
case 210:
                    var7 = _closure1_slot16;
                    var7 = var7.bind(var1)(var9);
                    var10 = var3 == var7;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 217; continue _fun0008 }
case 218:
                    var9 = var7.frameRateEncode;
case 217:
                    var10 = var3 != var9;
                    var7 = null;
                    if(!var10) { _fun0008_ip = 219; continue _fun0008 }
case 220:
                    var7 = var9;
case 219:
                    var8 = var7;
case 216:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 221; continue _fun0008 }
case 222:
                    var7 = var8;
case 221:
                    var5['fps'] = var7;
                    var9 = _closure2_slot27;
                    var7 = _closure1_slot14;
                    var8 = var7.STREAM;
                    var7 = null;
                    if(!(var9 === var8)) { _fun0008_ip = 223; continue _fun0008 }
case 224:
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 223; continue _fun0008 }
case 225:
                    var7 = _closure2_slot21;
case 223:
                    var5['target_fps'] = var7;
                    var7 = _closure2_slot17;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 226; continue _fun0008 }
case 227:
                    var7 = _closure2_slot17;
                    var8 = var7.ownerId;
case 226:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 228; continue _fun0008 }
case 229:
                    var7 = var8;
case 228:
                    var5['sender_user_id'] = var7;
                    var7 = _closure2_slot18;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 230; continue _fun0008 }
case 231:
                    var9 = _closure2_slot18;
                    var7 = var9.getRegion;
                    var8 = var7.bind(var9)();
case 230:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 232; continue _fun0008 }
case 233:
                    var7 = var8;
case 232:
                    var5['stream_region'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 234; continue _fun0008 }
case 235:
                    var8 = _closure2_slot18;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 236; continue _fun0008 }
case 237:
                    var9 = _closure2_slot18;
                    var9 = var9.analyticsContext;
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 236; continue _fun0008 }
case 238:
                    var8 = var9.streamSourceType;
case 236:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 234; continue _fun0008 }
case 239:
                    var7 = var8;
case 234:
                    var5['stream_source_type'] = var7;
                    var7 = _closure2_slot18;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 240; continue _fun0008 }
case 241:
                    var7 = _closure2_slot18;
                    var7 = var7.analyticsContext;
                    var9 = var3 == var7;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 240; continue _fun0008 }
case 242:
                    var8 = var7.numViewers;
case 240:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 243; continue _fun0008 }
case 244:
                    var7 = var8;
case 243:
                    var5['num_stream_viewers'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 245; continue _fun0008 }
case 246:
                    var8 = _closure2_slot20;
                    var8 = var3 != var8;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 245; continue _fun0008 }
case 247:
                    var7 = _closure2_slot20;
case 245:
                    var5['video_input_resolution_height'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 248; continue _fun0008 }
case 249:
                    var8 = _closure2_slot21;
                    var8 = var3 != var8;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 248; continue _fun0008 }
case 250:
                    var7 = _closure2_slot21;
case 248:
                    var5['video_input_frame_rate'] = var7;
                    var8 = _closure1_slot21;
                    var7 = _closure2_slot30;
                    var7 = var8.bind(var1)(var7);
                    var5['screenshare_capture_method'] = var7;
                    var7 = _closure2_slot22;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 251; continue _fun0008 }
case 252:
                    var7 = _closure2_slot22;
case 251:
                    var5['share_application_name'] = var7;
                    var7 = _closure2_slot23;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 253; continue _fun0008 }
case 254:
                    var7 = _closure2_slot23;
case 253:
                    var5['share_application_id'] = var7;
                    var7 = _closure2_slot24;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 255; continue _fun0008 }
case 256:
                    var7 = _closure2_slot24;
case 255:
                    var5['share_application_executable'] = var7;
                    var7 = _closure2_slot25;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 257; continue _fun0008 }
case 258:
                    var7 = _closure2_slot25;
case 257:
                    var5['share_application_distributor'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 259; continue _fun0008 }
case 260:
                    var8 = var4.cpu_brand;
case 259:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 261; continue _fun0008 }
case 262:
                    var7 = var8;
case 261:
                    var5['cpu_brand'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 263; continue _fun0008 }
case 264:
                    var8 = var4.cpu_vendor;
case 263:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 265; continue _fun0008 }
case 266:
                    var7 = var8;
case 265:
                    var5['cpu_vendor'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 267; continue _fun0008 }
case 268:
                    var8 = var4.cpu_memory;
case 267:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 269; continue _fun0008 }
case 270:
                    var7 = var8;
case 269:
                    var5['cpu_memory'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 271; continue _fun0008 }
case 272:
                    var8 = var4.gpu_brand;
case 271:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 273; continue _fun0008 }
case 274:
                    var7 = var8;
case 273:
                    var5['gpu_brand'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 275; continue _fun0008 }
case 276:
                    var8 = var4.gpu_count;
case 275:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 277; continue _fun0008 }
case 278:
                    var7 = var8;
case 277:
                    var5['gpu_count'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 279; continue _fun0008 }
case 280:
                    var8 = var4.gpu_memory;
case 279:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 281; continue _fun0008 }
case 282:
                    var7 = var8;
case 281:
                    var5['gpu_memory'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 283; continue _fun0008 }
case 284:
                    var8 = var4.gpu_device_vendor_id;
case 283:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 285; continue _fun0008 }
case 286:
                    var7 = var8;
case 285:
                    var5['gpu_device_vendor_id'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 287; continue _fun0008 }
case 288:
                    var8 = var4.gpu_device_device_id;
case 287:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 289; continue _fun0008 }
case 290:
                    var7 = var8;
case 289:
                    var5['gpu_device_device_id'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 291; continue _fun0008 }
case 292:
                    var8 = var4.gpu_device_sub_sys_id;
case 291:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 293; continue _fun0008 }
case 294:
                    var7 = var8;
case 293:
                    var5['gpu_device_sub_sys_id'] = var7;
                    var7 = var3 == var4;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 295; continue _fun0008 }
case 296:
                    var8 = var4.gpu_device_revision;
case 295:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 297; continue _fun0008 }
case 298:
                    var7 = var8;
case 297:
                    var5['gpu_device_revision'] = var7;
                    var8 = var3 == var4;
                    var7 = undefined;
                    if(var8) { _fun0008_ip = 299; continue _fun0008 }
case 300:
                    var7 = var4.gpu_driver_version;
case 299:
                    var8 = var3 != var7;
                    var4 = null;
                    if(!var8) { _fun0008_ip = 301; continue _fun0008 }
case 302:
                    var4 = var7;
case 301:
                    var5['gpu_driver_version'] = var4;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var8 = 18;
                    var4 = var4[var8];
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.getCurrentCPUUsagePercent;
                    var7 = var4.bind(var7)();
                    var9 = var3 != var7;
                    var4 = null;
                    if(!var9) { _fun0008_ip = 303; continue _fun0008 }
case 304:
                    var4 = var7;
case 303:
                    var5['cpu_usage'] = var4;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.getCurrentMemoryUsageKB;
                    var7 = var4.bind(var7)();
                    var8 = var3 != var7;
                    var4 = null;
                    if(!var8) { _fun0008_ip = 305; continue _fun0008 }
case 306:
                    var4 = var7;
case 305:
                    var5['memory_usage'] = var4;
                    var7 = _closure1_slot19;
                    var4 = _closure2_slot30;
                    var4 = var7.bind(var1)(var4);
                    var5['outbound_bitrate_estimate'] = var4;
                    var7 = _closure1_slot20;
                    var4 = _closure2_slot30;
                    var4 = var7.bind(var1)(var4);
                    var5['inbound_bitrate_estimate'] = var4;
                    var7 = _closure1_slot8;
                    var4 = var7.getHardwareEncoding;
                    var4 = var4.bind(var7)();
                    var5['hardware_enabled'] = var4;
                    var4 = _closure2_slot14;
                    if(!(var3 == var4)) { _fun0008_ip = 307; continue _fun0008 }
case 308:
                    var8 = _closure1_slot8;
                    var4 = var8.getInputDevices;
                    var7 = var4.bind(var8)();
                    var4 = var8.getInputDeviceId;
                    var4 = var4.bind(var8)();
                    var7 = var7[var4];
                    var8 = var3 == var7;
                    var4 = undefined;
                    if(var8) { _fun0008_ip = 309; continue _fun0008 }
case 310:
                    var4 = var7.name;
case 309:
                    _fun0008_ip = 311; continue _fun0008;
case 307:
                    var4 = _closure2_slot14;
case 311:
                    var5['audio_input_device_name'] = var4;
                    var4 = _closure2_slot15;
                    if(!(var3 == var4)) { _fun0008_ip = 312; continue _fun0008 }
case 313:
                    var8 = _closure1_slot8;
                    var4 = var8.getOutputDevices;
                    var7 = var4.bind(var8)();
                    var4 = var8.getOutputDeviceId;
                    var4 = var4.bind(var8)();
                    var7 = var7[var4];
                    var8 = var3 == var7;
                    var4 = undefined;
                    if(var8) { _fun0008_ip = 314; continue _fun0008 }
case 315:
                    var4 = var7.name;
case 314:
                    _fun0008_ip = 316; continue _fun0008;
case 312:
                    var4 = _closure2_slot15;
case 316:
                    var5['audio_output_device_name'] = var4;
                    var4 = _closure2_slot16;
                    if(!(var3 == var4)) { _fun0008_ip = 317; continue _fun0008 }
case 318:
                    var8 = _closure1_slot8;
                    var4 = var8.getVideoDevices;
                    var7 = var4.bind(var8)();
                    var4 = var8.getVideoDeviceId;
                    var4 = var4.bind(var8)();
                    var7 = var7[var4];
                    var8 = var3 == var7;
                    var4 = undefined;
                    if(var8) { _fun0008_ip = 319; continue _fun0008 }
case 320:
                    var4 = var7.name;
case 319:
                    _fun0008_ip = 321; continue _fun0008;
case 317:
                    var4 = _closure2_slot16;
case 321:
                    var5['video_device_name'] = var4;
                    var6 = _closure1_slot8;
                    var4 = var6.getMediaEngine;
                    var7 = var4.bind(var6)();
                    var4 = var7.getAudioSubsystem;
                    var4 = var4.bind(var7)();
                    var5['audio_subsystem'] = var4;
                    var4 = var6.getSettings;
                    var4 = var4.bind(var6)();
                    var4 = var4.automaticAudioSubsystem;
                    var5['automatic_audio_subsystem'] = var4;
                    var4 = var6.getMediaEngine;
                    var7 = var4.bind(var6)();
                    var4 = var7.getAudioLayer;
                    var4 = var4.bind(var7)();
                    var5['audio_layer'] = var4;
                    var4 = var6.getSettings;
                    var4 = var4.bind(var6)();
                    var4 = var4.mode;
                    var5['audio_input_mode'] = var4;
                    var4 = var6.getSettings;
                    var4 = var4.bind(var6)();
                    var4 = var4.modeOptions;
                    var4 = var4.autoThreshold;
                    var5['automatic_audio_input_sensitivity_enabled'] = var4;
                    var4 = var6.getSettings;
                    var4 = var4.bind(var6)();
                    var4 = var4.modeOptions;
                    var4 = var4.threshold;
                    var5['audio_input_sensitivity'] = var4;
                    var4 = var6.getEchoCancellation;
                    var4 = var4.bind(var6)();
                    var5['echo_cancellation_enabled'] = var4;
                    var4 = var6.getNoiseSuppression;
                    var4 = var4.bind(var6)();
                    var5['noise_suppression_enabled'] = var4;
                    var4 = var6.getNoiseCancellation;
                    var4 = var4.bind(var6)();
                    var5['noise_cancellation_enabled'] = var4;
                    var4 = var6.getAutomaticGainControl;
                    var4 = var4.bind(var6)();
                    var5['automatic_gain_control_enabled'] = var4;
                    var4 = var6.getSidechainCompression;
                    var4 = var4.bind(var6)();
                    var5['sidechain_compression_enabled'] = var4;
                    var4 = var6.getInputVolume;
                    var4 = var4.bind(var6)();
                    var5['input_volume'] = var4;
                    var4 = var6.getOutputVolume;
                    var4 = var4.bind(var6)();
                    var5['output_volume'] = var4;
                    var4 = global;
                    var9 = var4.Object;
                    var8 = var9.keys;
                    var7 = var6.getInputDevices;
                    var7 = var7.bind(var6)();
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.length;
                    var5['audio_input_device_count'] = var7;
                    var8 = var4.Object;
                    var7 = var8.keys;
                    var4 = var6.getOutputDevices;
                    var4 = var4.bind(var6)();
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.length;
                    var5['audio_output_device_count'] = var4;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 19;
                    var4 = var8[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.getAppHardwareAccelerationEnabled;
                    var4 = var4.bind(var7)();
                    var5['app_hardware_acceleration_enabled'] = var4;
                    var4 = var6.getInputDeviceOSMuted;
                    var6 = var4.bind(var6)();
                    var7 = var3 != var6;
                    var4 = null;
                    if(!var7) { _fun0008_ip = 322; continue _fun0008 }
case 323:
                    var4 = var6;
case 322:
                    var5['input_device_os_muted'] = var4;
                    var6 = _closure1_slot8;
                    var4 = var6.getInputDeviceOSVolume;
                    var4 = var4.bind(var6)();
                    var6 = var3 != var4;
                    var3 = null;
                    if(!var6) { _fun0008_ip = 324; continue _fun0008 }
case 325:
                    var3 = var4;
case 324:
                    var5['input_device_os_volume'] = var3;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 20;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.track;
                    var2 = _closure1_slot13;
                    var2 = var2.AV_ERROR_REPORTED;
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['sendAVErrorAnalyticsEvent'] = var2;
    return var1;
})();