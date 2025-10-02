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
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSystemAnalyticsInfo;
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
            var7 = _closure1_slot10;
            var4 = var7.getVoiceChannelId;
            var4 = var4.bind(var7)();
            var7 = 'channelId';
            var7 = var7 in var6;
            var8 = undefined;
            if(!var7) { _fun0007_ip = 24; continue _fun0007 }
case 5:
            var8 = var6.channelId;
case 24:
            var7 = null;
            if(!(var7 != var8)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var4 = var8;
case 39:
            var8 = var7 != var4;
            var9 = null;
            if(!var8) { _fun0007_ip = 41; continue _fun0007 }
case 8:
            var9 = var4;
case 41:
            var _closure2_slot3 = var9;
            var8 = _closure1_slot6;
            var4 = var8.getChannel;
            var4 = var4.bind(var8)(var9);
            var _closure2_slot4 = var4;
            var4 = 'streamKey';
            var8 = var4 in var6;
            var4 = undefined;
            if(!var8) { _fun0007_ip = 30; continue _fun0007 }
case 42:
            var4 = var6.streamKey;
case 30:
            var8 = 'mediaContext';
            var9 = var8 in var6;
            var8 = undefined;
            if(!var9) { _fun0007_ip = 43; continue _fun0007 }
case 32:
            var8 = var6.mediaContext;
case 43:
            var _closure2_slot5 = var8;
            var9 = 'underlyingError';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 44; continue _fun0007 }
case 23:
            var9 = var6.underlyingError;
case 44:
            var _closure2_slot6 = var9;
            var9 = 'errorMessage';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var9 = var6.errorMessage;
case 45:
            var _closure2_slot7 = var9;
            var9 = 'mediaSessionId';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 34; continue _fun0007 }
case 47:
            var9 = var6.mediaSessionId;
case 34:
            var _closure2_slot8 = var9;
            var9 = 'rtcConnectionId';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var9 = var6.rtcConnectionId;
case 48:
            var _closure2_slot9 = var9;
            var9 = 'videoCodec';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var9 = var6.videoCodec;
case 50:
            var _closure2_slot10 = var9;
            var9 = 'videoEncoder';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var9 = var6.videoEncoder;
case 52:
            var _closure2_slot11 = var9;
            var9 = 'videoDecoder';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var9 = var6.videoDecoder;
case 54:
            var _closure2_slot12 = var9;
            var9 = 'audioCaptureSampleRateMismatchPercent';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var9 = var6.audioCaptureSampleRateMismatchPercent;
case 56:
            var _closure2_slot13 = var9;
            var9 = 'audioInputDeviceName';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var9 = var6.audioInputDeviceName;
case 58:
            var _closure2_slot14 = var9;
            var9 = 'audioOutputDeviceName';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var9 = var6.audioOutputDeviceName;
case 60:
            var _closure2_slot15 = var9;
            var9 = 'videoDeviceName';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var9 = var6.videoDeviceName;
case 62:
            var _closure2_slot16 = var9;
            var9 = 'userId';
            var9 = var9 in var6;
            var11 = undefined;
            if(!var9) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var11 = var6.userId;
case 64:
            var9 = var7 != var4;
            var6 = null;
            if(!var9) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 13;
            var9 = var12[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.decodeStreamKey;
            var6 = var9.bind(var10)(var4);
case 66:
            var _closure2_slot17 = var6;
            var9 = var7 != var4;
            var13 = null;
            if(!var9) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var10 = _closure1_slot11;
            var9 = var10.getRTCConnection;
            var13 = var9.bind(var10)(var4);
case 68:
            var _closure2_slot18 = var13;
            var9 = var13;
            if(!(var7 == var4)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var12 = _closure1_slot8;
            var10 = var12.getRTCConnection;
            var9 = var10.bind(var12)();
case 70:
            var _closure2_slot19 = var9;
            var10 = var7 != var4;
            var14 = null;
            if(!var10) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var12 = var7 == var13;
            var10 = undefined;
            if(var12) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var12 = var13.analyticsContext;
            var15 = var7 == var12;
            var10 = undefined;
            if(var15) { _fun0007_ip = 74; continue _fun0007 }
case 76:
            var10 = var12.streamApplication;
case 74:
            var14 = var10;
case 72:
            var12 = _closure1_slot5;
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
            if(!(var7 == var8)) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var10 = _closure1_slot14;
            var8 = var10.DEFAULT;
case 77:
            var _closure2_slot27 = var8;
            if(!(var7 != var6)) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            var11 = var6.ownerId;
case 79:
            var _closure2_slot28 = var11;
            if(!(var7 == var13)) { _fun0007_ip = 81; continue _fun0007 }
case 82:
            var8 = 'receiver';
            if(!var5) { _fun0007_ip = 83; continue _fun0007 }
case 84:
            var8 = 'sender';
case 83:
            _fun0007_ip = 85; continue _fun0007;
case 81:
            var12 = var7 == var13;
            var10 = undefined;
            if(var12) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var12 = var13.getVoiceParticipantType;
            var10 = var12.bind(var13)();
case 86:
            var8 = var10;
case 85:
            var _closure2_slot29 = var8;
            var8 = var7 == var9;
            var10 = undefined;
            if(var8) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var8 = var9.getMediaEngineConnectionId;
            var10 = var8.bind(var9)();
case 88:
            var12 = var7 != var10;
            var8 = null;
            if(!var12) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var8 = var10;
case 90:
            var _closure2_slot30 = var8;
            if(!(var7 != var4)) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            if(!(var7 == var6)) { _fun0007_ip = 94; continue _fun0007 }
case 92:
            if(var5) { _fun0007_ip = 95; continue _fun0007 }
case 96:
            var8 = var7 != var11;
            var4 = null;
            if(!var8) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0007_ip = 99; continue _fun0007 }
case 100:
            var10 = var9.getInboundStats;
            var8 = var10.bind(var9)(var11);
case 99:
            var4 = var8;
case 97:
            _fun0007_ip = 101; continue _fun0007;
case 95:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 15;
            var8 = var11[var8];
            var12 = var10.bind(var1)(var8);
            var11 = var12.maxBy;
            var8 = var7 == var9;
            var10 = undefined;
            if(var8) { _fun0007_ip = 102; continue _fun0007 }
case 103:
            var8 = var9.getOutboundStats;
            var10 = var8.bind(var9)();
case 102:
            if(!(var7 == var10)) { _fun0007_ip = 104; continue _fun0007 }
case 105:
            var10 = new Array(0);
case 104:
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.num_frames;
                return var1;
            };
            var10 = var11.bind(var12)(var10, var8);
            var11 = var7 != var10;
            var8 = null;
            if(!var11) { _fun0007_ip = 106; continue _fun0007 }
case 107:
            var8 = var10;
case 106:
            var4 = var8;
case 101:
            _fun0007_ip = 108; continue _fun0007;
case 94:
            var8 = var7 == var9;
            if(var5) { _fun0007_ip = 109; continue _fun0007 }
case 110:
            var5 = undefined;
            if(var8) { _fun0007_ip = 111; continue _fun0007 }
case 112:
            var10 = var9.getInboundStats;
            var6 = var6.ownerId;
            var5 = var10.bind(var9)(var6);
case 111:
            _fun0007_ip = 113; continue _fun0007;
case 109:
            var6 = undefined;
            if(var8) { _fun0007_ip = 114; continue _fun0007 }
case 115:
            var8 = var9.getOutboundStats;
            var9 = var8.bind(var9)();
            var7 = var7 == var9;
            var6 = undefined;
            if(var7) { _fun0007_ip = 114; continue _fun0007 }
case 116:
            var8 = var9.find;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.quality;
                var1 = _closure1_slot15;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var8.bind(var9)(var7);
case 114:
            var5 = var6;
case 113:
            var4 = var5;
case 108:
            var _closure2_slot1 = var4;
            var3 = _closure1_slot12;
            var4 = var3.bind(var1)();
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var6 = arg1;
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
                    if(!var2) { _fun0008_ip = 117; continue _fun0008 }
case 24:
                    var1 = _closure2_slot6;
case 117:
                    var5['underlying_error'] = var1;
                    var1 = _closure2_slot7;
                    var2 = var3 != var1;
                    var1 = null;
                    if(!var2) { _fun0008_ip = 118; continue _fun0008 }
case 119:
                    var1 = _closure2_slot7;
case 118:
                    var5['error_message'] = var1;
                    var1 = _closure2_slot4;
                    var2 = var3 == var1;
                    var1 = undefined;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 120; continue _fun0008 }
case 121:
                    var2 = _closure2_slot4;
                    var7 = var2.guild_id;
case 120:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 122; continue _fun0008 }
case 29:
                    var2 = var7;
case 122:
                    var5['guild_id'] = var2;
                    var2 = _closure2_slot3;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 123; continue _fun0008 }
case 124:
                    var2 = _closure2_slot3;
case 123:
                    var5['channel_id'] = var2;
                    var2 = _closure2_slot4;
                    var2 = var3 == var2;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 125; continue _fun0008 }
case 126:
                    var2 = _closure2_slot4;
                    var7 = var2.type;
case 125:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 127; continue _fun0008 }
case 128:
                    var2 = var7;
case 127:
                    var5['channel_type'] = var2;
                    var2 = _closure2_slot9;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 34; continue _fun0008 }
case 129:
                    var2 = _closure2_slot9;
case 34:
                    var5['rtc_connection_id'] = var2;
                    var2 = _closure2_slot8;
                    if(!(var3 == var2)) { _fun0008_ip = 35; continue _fun0008 }
case 130:
                    var7 = _closure1_slot8;
                    var2 = var7.getMediaSessionId;
                    var7 = var2.bind(var7)();
                    _fun0008_ip = 131; continue _fun0008;
case 35:
                    var7 = _closure2_slot8;
case 131:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 132; continue _fun0008 }
case 133:
                    var2 = var7;
case 132:
                    var5['media_session_id'] = var2;
                    var2 = _closure2_slot18;
                    var2 = var3 == var2;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 134; continue _fun0008 }
case 135:
                    var2 = _closure2_slot18;
                    var7 = var2.parentMediaSessionId;
case 134:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 55; continue _fun0008 }
case 136:
                    var2 = var7;
case 55:
                    var5['parent_media_session_id'] = var2;
                    var2 = _closure2_slot5;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 137; continue _fun0008 }
case 138:
                    var2 = _closure2_slot5;
case 137:
                    var5['context'] = var2;
                    var8 = _closure1_slot8;
                    var7 = var8.getRTCConnection;
                    var9 = var7.bind(var8)();
                    var7 = var3 == var9;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 139; continue _fun0008 }
case 140:
                    var7 = var9.getVoiceVersion;
                    var8 = var7.bind(var9)();
case 139:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 141; continue _fun0008 }
case 142:
                    var7 = var8;
case 141:
                    var5['voice_backend_version'] = var7;
                    var8 = _closure1_slot8;
                    var7 = var8.getRTCConnection;
                    var9 = var7.bind(var8)();
                    var7 = var3 == var9;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 143; continue _fun0008 }
case 144:
                    var7 = var9.getRtcWorkerVersion;
                    var8 = var7.bind(var9)();
case 143:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 145; continue _fun0008 }
case 146:
                    var7 = var8;
case 145:
                    var5['rtc_worker_backend_version'] = var7;
                    var9 = _closure1_slot9;
                    var8 = var9.getRegion;
                    var10 = _closure1_slot8;
                    var7 = var10.getHostname;
                    var7 = var7.bind(var10)();
                    var8 = var8.bind(var9)(var7);
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 147; continue _fun0008 }
case 148:
                    var7 = var8;
case 147:
                    var5['guild_region'] = var7;
                    var8 = _closure1_slot8;
                    var7 = var8.getHostname;
                    var8 = var7.bind(var8)();
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 149; continue _fun0008 }
case 150:
                    var7 = var8;
case 149:
                    var5['hostname'] = var7;
                    var7 = _closure2_slot19;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 75; continue _fun0008 }
case 151:
                    var9 = _closure2_slot19;
                    var7 = var9.getDurationSeconds;
                    var8 = var7.bind(var9)();
case 75:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 152; continue _fun0008 }
case 153:
                    var7 = var8;
case 152:
                    var5['duration'] = var7;
                    var7 = _closure2_slot29;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 154; continue _fun0008 }
case 155:
                    var7 = _closure2_slot29;
case 154:
                    var5['participant_type'] = var7;
                    var7 = _closure2_slot1;
                    var8 = var3 == var7;
                    var9 = undefined;
                    if(var8) { _fun0008_ip = 156; continue _fun0008 }
case 157:
                    var9 = var7.num_frames;
case 156:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 158; continue _fun0008 }
case 159:
                    var8 = var9;
case 158:
                    var5['num_frames'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var3 == var8;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 160; continue _fun0008 }
case 161:
                    var9 = var8.num_packets;
case 160:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 162; continue _fun0008 }
case 163:
                    var8 = var9;
case 162:
                    var5['num_packets'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var3 == var8;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 164; continue _fun0008 }
case 165:
                    var9 = var8.num_bytes;
case 164:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 166; continue _fun0008 }
case 167:
                    var8 = var9;
case 166:
                    var5['num_bytes'] = var8;
                    var11 = _closure1_slot18;
                    var10 = _closure2_slot26;
                    var9 = _closure2_slot30;
                    var8 = _closure2_slot28;
                    var9 = var11.bind(var1)(var10, var9, var8);
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 84; continue _fun0008 }
case 168:
                    var8 = var9.packetsLost;
case 84:
                    var9 = var3 != var8;
                    var7 = 0;
                    if(!var9) { _fun0008_ip = 169; continue _fun0008 }
case 170:
                    var7 = var8;
case 169:
                    var5['num_packets_lost'] = var7;
                    var7 = _closure2_slot10;
                    if(!(var3 == var7)) { _fun0008_ip = 171; continue _fun0008 }
case 172:
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
                    if(var11) { _fun0008_ip = 100; continue _fun0008 }
case 173:
                    var10 = var10.codec;
                    var7 = var10.name;
case 100:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 99; continue _fun0008;
case 171:
                    var8 = _closure2_slot10;
case 99:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 174; continue _fun0008 }
case 175:
                    var7 = var8;
case 174:
                    var5['video_codec'] = var7;
                    var7 = _closure2_slot11;
                    if(!(var3 == var7)) { _fun0008_ip = 101; continue _fun0008 }
case 176:
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
                    if(var11) { _fun0008_ip = 177; continue _fun0008 }
case 178:
                    var7 = var10.encoderImplementationName;
case 177:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 179; continue _fun0008;
case 101:
                    var8 = _closure2_slot11;
case 179:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 180; continue _fun0008 }
case 181:
                    var7 = var8;
case 180:
                    var5['video_encoder'] = var7;
                    var7 = _closure2_slot12;
                    if(!(var3 == var7)) { _fun0008_ip = 182; continue _fun0008 }
case 111:
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
                    if(var11) { _fun0008_ip = 183; continue _fun0008 }
case 184:
                    var7 = var10.decoderImplementationName;
case 183:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 185; continue _fun0008;
case 182:
                    var8 = _closure2_slot12;
case 185:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 186; continue _fun0008 }
case 187:
                    var7 = var8;
case 186:
                    var5['video_decoder'] = var7;
                    var7 = _closure2_slot13;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 188; continue _fun0008 }
case 189:
                    var7 = _closure2_slot13;
case 188:
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
                    if(var9) { _fun0008_ip = 190; continue _fun0008 }
case 191:
                    var8 = var7.bitrate;
case 190:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 192; continue _fun0008 }
case 193:
                    var7 = var8;
case 192:
                    var5['bitrate'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 194; continue _fun0008 }
case 195:
                    var9 = _closure1_slot16;
                    var8 = _closure2_slot30;
                    var9 = var9.bind(var1)(var8);
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 196; continue _fun0008 }
case 197:
                    var8 = var9.bitrateTarget;
case 196:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 194; continue _fun0008 }
case 198:
                    var7 = var8;
case 194:
                    var5['target_bitrate'] = var7;
                    var7 = _closure2_slot26;
                    var9 = _closure2_slot27;
                    var8 = _closure2_slot28;
                    if(var7) { _fun0008_ip = 199; continue _fun0008 }
case 200:
                    var7 = _closure1_slot17;
                    var8 = var7.bind(var1)(var9, var8);
                    var10 = var3 == var8;
                    var7 = undefined;
                    if(var10) { _fun0008_ip = 201; continue _fun0008 }
case 202:
                    var7 = var8.frameRateDecode;
case 201:
                    var10 = var3 != var7;
                    var8 = null;
                    if(!var10) { _fun0008_ip = 203; continue _fun0008 }
case 204:
                    var8 = var7;
case 203:
                    _fun0008_ip = 205; continue _fun0008;
case 199:
                    var7 = _closure1_slot16;
                    var7 = var7.bind(var1)(var9);
                    var10 = var3 == var7;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 206; continue _fun0008 }
case 207:
                    var9 = var7.frameRateEncode;
case 206:
                    var10 = var3 != var9;
                    var7 = null;
                    if(!var10) { _fun0008_ip = 208; continue _fun0008 }
case 209:
                    var7 = var9;
case 208:
                    var8 = var7;
case 205:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 210; continue _fun0008 }
case 211:
                    var7 = var8;
case 210:
                    var5['fps'] = var7;
                    var9 = _closure2_slot27;
                    var7 = _closure1_slot14;
                    var8 = var7.STREAM;
                    var7 = null;
                    if(!(var9 === var8)) { _fun0008_ip = 212; continue _fun0008 }
case 213:
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 212; continue _fun0008 }
case 214:
                    var7 = _closure2_slot21;
case 212:
                    var5['target_fps'] = var7;
                    var7 = _closure2_slot17;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 215; continue _fun0008 }
case 216:
                    var7 = _closure2_slot17;
                    var8 = var7.ownerId;
case 215:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 217; continue _fun0008 }
case 218:
                    var7 = var8;
case 217:
                    var5['sender_user_id'] = var7;
                    var7 = _closure2_slot18;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 219; continue _fun0008 }
case 220:
                    var9 = _closure2_slot18;
                    var7 = var9.getRegion;
                    var8 = var7.bind(var9)();
case 219:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 221; continue _fun0008 }
case 222:
                    var7 = var8;
case 221:
                    var5['stream_region'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 223; continue _fun0008 }
case 224:
                    var8 = _closure2_slot18;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 225; continue _fun0008 }
case 226:
                    var9 = _closure2_slot18;
                    var9 = var9.analyticsContext;
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 225; continue _fun0008 }
case 227:
                    var8 = var9.streamSourceType;
case 225:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 223; continue _fun0008 }
case 228:
                    var7 = var8;
case 223:
                    var5['stream_source_type'] = var7;
                    var7 = _closure2_slot18;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 229; continue _fun0008 }
case 230:
                    var7 = _closure2_slot18;
                    var7 = var7.analyticsContext;
                    var9 = var3 == var7;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 229; continue _fun0008 }
case 231:
                    var8 = var7.numViewers;
case 229:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 232; continue _fun0008 }
case 233:
                    var7 = var8;
case 232:
                    var5['num_stream_viewers'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 234; continue _fun0008 }
case 235:
                    var8 = _closure2_slot20;
                    var8 = var3 != var8;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 234; continue _fun0008 }
case 236:
                    var7 = _closure2_slot20;
case 234:
                    var5['video_input_resolution_height'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 237; continue _fun0008 }
case 238:
                    var8 = _closure2_slot21;
                    var8 = var3 != var8;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 237; continue _fun0008 }
case 239:
                    var7 = _closure2_slot21;
case 237:
                    var5['video_input_frame_rate'] = var7;
                    var8 = _closure1_slot21;
                    var7 = _closure2_slot30;
                    var7 = var8.bind(var1)(var7);
                    var5['screenshare_capture_method'] = var7;
                    var7 = _closure2_slot22;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 240; continue _fun0008 }
case 241:
                    var7 = _closure2_slot22;
case 240:
                    var5['share_application_name'] = var7;
                    var7 = _closure2_slot23;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 242; continue _fun0008 }
case 243:
                    var7 = _closure2_slot23;
case 242:
                    var5['share_application_id'] = var7;
                    var7 = _closure2_slot24;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 244; continue _fun0008 }
case 245:
                    var7 = _closure2_slot24;
case 244:
                    var5['share_application_executable'] = var7;
                    var7 = _closure2_slot25;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 246; continue _fun0008 }
case 247:
                    var7 = _closure2_slot25;
case 246:
                    var5['share_application_distributor'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 248; continue _fun0008 }
case 249:
                    var8 = var6.cpu_brand;
case 248:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 250; continue _fun0008 }
case 251:
                    var7 = var8;
case 250:
                    var5['cpu_brand'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 252; continue _fun0008 }
case 253:
                    var8 = var6.cpu_vendor;
case 252:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 254; continue _fun0008 }
case 255:
                    var7 = var8;
case 254:
                    var5['cpu_vendor'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 256; continue _fun0008 }
case 257:
                    var8 = var6.cpu_memory;
case 256:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 258; continue _fun0008 }
case 259:
                    var7 = var8;
case 258:
                    var5['cpu_memory'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 260; continue _fun0008 }
case 261:
                    var8 = var6.gpu_brand;
case 260:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 262; continue _fun0008 }
case 263:
                    var7 = var8;
case 262:
                    var5['gpu_brand'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 264; continue _fun0008 }
case 265:
                    var8 = var6.gpu_count;
case 264:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 266; continue _fun0008 }
case 267:
                    var7 = var8;
case 266:
                    var5['gpu_count'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 268; continue _fun0008 }
case 269:
                    var8 = var6.gpu_memory;
case 268:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 270; continue _fun0008 }
case 271:
                    var7 = var8;
case 270:
                    var5['gpu_memory'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 272; continue _fun0008 }
case 273:
                    var8 = var6.gpu_device_vendor_id;
case 272:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 274; continue _fun0008 }
case 275:
                    var7 = var8;
case 274:
                    var5['gpu_device_vendor_id'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 276; continue _fun0008 }
case 277:
                    var8 = var6.gpu_device_device_id;
case 276:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 278; continue _fun0008 }
case 279:
                    var7 = var8;
case 278:
                    var5['gpu_device_device_id'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 280; continue _fun0008 }
case 281:
                    var8 = var6.gpu_device_sub_sys_id;
case 280:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 282; continue _fun0008 }
case 283:
                    var7 = var8;
case 282:
                    var5['gpu_device_sub_sys_id'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 284; continue _fun0008 }
case 285:
                    var8 = var6.gpu_device_revision;
case 284:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 286; continue _fun0008 }
case 287:
                    var7 = var8;
case 286:
                    var5['gpu_device_revision'] = var7;
                    var8 = var3 == var6;
                    var7 = undefined;
                    if(var8) { _fun0008_ip = 288; continue _fun0008 }
case 289:
                    var7 = var6.gpu_driver_version;
case 288:
                    var8 = var3 != var7;
                    var6 = null;
                    if(!var8) { _fun0008_ip = 290; continue _fun0008 }
case 291:
                    var6 = var7;
case 290:
                    var5['gpu_driver_version'] = var6;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var8 = 18;
                    var6 = var6[var8];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.getCurrentCPUUsagePercent;
                    var7 = var6.bind(var7)();
                    var9 = var3 != var7;
                    var6 = null;
                    if(!var9) { _fun0008_ip = 292; continue _fun0008 }
case 293:
                    var6 = var7;
case 292:
                    var5['cpu_usage'] = var6;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.getCurrentMemoryUsageKB;
                    var7 = var6.bind(var7)();
                    var8 = var3 != var7;
                    var6 = null;
                    if(!var8) { _fun0008_ip = 294; continue _fun0008 }
case 295:
                    var6 = var7;
case 294:
                    var5['memory_usage'] = var6;
                    var7 = _closure1_slot19;
                    var6 = _closure2_slot30;
                    var6 = var7.bind(var1)(var6);
                    var5['outbound_bitrate_estimate'] = var6;
                    var7 = _closure1_slot20;
                    var6 = _closure2_slot30;
                    var6 = var7.bind(var1)(var6);
                    var5['inbound_bitrate_estimate'] = var6;
                    var7 = _closure1_slot7;
                    var6 = var7.getHardwareEncoding;
                    var6 = var6.bind(var7)();
                    var5['hardware_enabled'] = var6;
                    var6 = _closure2_slot14;
                    if(!(var3 == var6)) { _fun0008_ip = 296; continue _fun0008 }
case 297:
                    var8 = _closure1_slot7;
                    var6 = var8.getInputDevices;
                    var7 = var6.bind(var8)();
                    var6 = var8.getInputDeviceId;
                    var6 = var6.bind(var8)();
                    var7 = var7[var6];
                    var8 = var3 == var7;
                    var6 = undefined;
                    if(var8) { _fun0008_ip = 298; continue _fun0008 }
case 299:
                    var6 = var7.name;
case 298:
                    _fun0008_ip = 300; continue _fun0008;
case 296:
                    var6 = _closure2_slot14;
case 300:
                    var5['audio_input_device_name'] = var6;
                    var6 = _closure2_slot15;
                    if(!(var3 == var6)) { _fun0008_ip = 301; continue _fun0008 }
case 302:
                    var8 = _closure1_slot7;
                    var6 = var8.getOutputDevices;
                    var7 = var6.bind(var8)();
                    var6 = var8.getOutputDeviceId;
                    var6 = var6.bind(var8)();
                    var7 = var7[var6];
                    var8 = var3 == var7;
                    var6 = undefined;
                    if(var8) { _fun0008_ip = 303; continue _fun0008 }
case 304:
                    var6 = var7.name;
case 303:
                    _fun0008_ip = 305; continue _fun0008;
case 301:
                    var6 = _closure2_slot15;
case 305:
                    var5['audio_output_device_name'] = var6;
                    var6 = _closure2_slot16;
                    if(!(var3 == var6)) { _fun0008_ip = 306; continue _fun0008 }
case 307:
                    var8 = _closure1_slot7;
                    var6 = var8.getVideoDevices;
                    var7 = var6.bind(var8)();
                    var6 = var8.getVideoDeviceId;
                    var6 = var6.bind(var8)();
                    var6 = var7[var6];
                    var7 = var3 == var6;
                    var3 = undefined;
                    if(var7) { _fun0008_ip = 308; continue _fun0008 }
case 309:
                    var3 = var6.name;
case 308:
                    _fun0008_ip = 310; continue _fun0008;
case 306:
                    var3 = _closure2_slot16;
case 310:
                    var5['video_device_name'] = var3;
                    var7 = _closure1_slot7;
                    var3 = var7.getMediaEngine;
                    var4 = var3.bind(var7)();
                    var3 = var4.getAudioSubsystem;
                    var3 = var3.bind(var4)();
                    var5['audio_subsystem'] = var3;
                    var3 = var7.getSettings;
                    var3 = var3.bind(var7)();
                    var3 = var3.automaticAudioSubsystem;
                    var5['automatic_audio_subsystem'] = var3;
                    var3 = var7.getMediaEngine;
                    var4 = var3.bind(var7)();
                    var3 = var4.getAudioLayer;
                    var3 = var3.bind(var4)();
                    var5['audio_layer'] = var3;
                    var3 = var7.getSettings;
                    var3 = var3.bind(var7)();
                    var3 = var3.mode;
                    var5['audio_input_mode'] = var3;
                    var3 = var7.getSettings;
                    var3 = var3.bind(var7)();
                    var3 = var3.modeOptions;
                    var3 = var3.autoThreshold;
                    var5['automatic_audio_input_sensitivity_enabled'] = var3;
                    var3 = var7.getSettings;
                    var3 = var3.bind(var7)();
                    var3 = var3.modeOptions;
                    var3 = var3.threshold;
                    var5['audio_input_sensitivity'] = var3;
                    var3 = var7.getEchoCancellation;
                    var3 = var3.bind(var7)();
                    var5['echo_cancellation_enabled'] = var3;
                    var3 = var7.getNoiseSuppression;
                    var3 = var3.bind(var7)();
                    var5['noise_suppression_enabled'] = var3;
                    var3 = var7.getNoiseCancellation;
                    var3 = var3.bind(var7)();
                    var5['noise_cancellation_enabled'] = var3;
                    var3 = var7.getAutomaticGainControl;
                    var3 = var3.bind(var7)();
                    var5['automatic_gain_control_enabled'] = var3;
                    var3 = var7.getSidechainCompression;
                    var3 = var3.bind(var7)();
                    var5['sidechain_compression_enabled'] = var3;
                    var3 = var7.getInputVolume;
                    var3 = var3.bind(var7)();
                    var5['input_volume'] = var3;
                    var3 = var7.getOutputVolume;
                    var3 = var3.bind(var7)();
                    var5['output_volume'] = var3;
                    var3 = global;
                    var8 = var3.Object;
                    var6 = var8.keys;
                    var4 = var7.getInputDevices;
                    var4 = var4.bind(var7)();
                    var4 = var6.bind(var8)(var4);
                    var4 = var4.length;
                    var5['audio_input_device_count'] = var4;
                    var6 = var3.Object;
                    var4 = var6.keys;
                    var3 = var7.getOutputDevices;
                    var3 = var3.bind(var7)();
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.length;
                    var5['audio_output_device_count'] = var3;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var7 = var4.bind(var1)(var3);
                    var3 = var7.getAppHardwareAccelerationEnabled;
                    var3 = var3.bind(var7)();
                    var5['app_hardware_acceleration_enabled'] = var3;
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