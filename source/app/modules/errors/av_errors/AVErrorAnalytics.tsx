// app/modules/errors/av_errors/AVErrorAnalytics.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getOutboundVideoStats(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.getConnectionStats;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = null;
            var4 = var2 == var3;
            var1 = null;
            if(var4) { _fun0001_ip = 84; continue _fun0001 }
 32:
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
            if(!var4) { _fun0001_ip = 81; continue _fun0001 }
 78:
            var2 = var3;
 81:
            var1 = var2;
 84:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getInboundVideoStats(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 103; continue _fun0002 }
 9:
            var5 = _closure1_slot4;
            var4 = var5.getConnectionStats;
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            if(!(var1 != var2)) { _fun0002_ip = 101; continue _fun0002 }
 34:
            var2 = var2.stats;
            var2 = var2.rtp;
            var2 = var2.inbound;
            var5 = var2[var3];
            var3 = var1 == var5;
            var2 = null;
            if(var3) { _fun0002_ip = 99; continue _fun0002 }
 65:
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
            if(!var5) { _fun0002_ip = 96; continue _fun0002 }
 93:
            var3 = var4;
 96:
            var2 = var3;
 99:
            return var2;
 101:
            return var1;
 103:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getVideoStats(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg2;
            var1 = arg1;
            if(var1) { _fun0003_ip = 29; continue _fun0003 }
 12:
            var5 = _closure1_slot17;
            var3 = undefined;
            var1 = arg3;
            var1 = var5.bind(var3)(var4, var1);
            _fun0003_ip = 40; continue _fun0003;
 29:
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 40:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getLatestOutboundBitrateEstimate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.getConnectionStats;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0004_ip = 50; continue _fun0004 }
 32:
            var3 = var3.stats;
            var3 = var3.transport;
            var2 = var3.outboundBitrateEstimate;
 50:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0004_ip = 62; continue _fun0004 }
 59:
            var1 = var2;
 62:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function getLatestInboundBitrateEstimate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.getConnectionStats;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 50; continue _fun0005 }
 32:
            var3 = var3.stats;
            var3 = var3.transport;
            var2 = var3.inboundBitrateEstimate;
 50:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0005_ip = 62; continue _fun0005 }
 59:
            var1 = var2;
 62:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getCurrentScreenshareCaptureMethod(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var1 = var2.getConnectionStats;
            var8 = var1.bind(var2)(var3);
            var2 = _closure1_slot4;
            var1 = var2.getLastConnectionStats;
            var7 = var1.bind(var2)(var3);
            var1 = null;
            if(!(var1 != var8)) { _fun0006_ip = 298; continue _fun0006 }
 47:
            if(!(var1 != var7)) { _fun0006_ip = 298; continue _fun0006 }
 54:
            var5 = {};
            var6 = ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames'];
            var2 = var6.length;
            var4 = 0;
            var2 = var4 < var2;
            var12 = undefined;
            var3 = 0;
            if(!var2) { _fun0006_ip = 182; continue _fun0006 }
 84:
            var9 = var6[var3];
            var2 = var7.stats;
            var10 = var2.screenshare;
            var11 = var1 == var10;
            var2 = undefined;
            if(var11) { _fun0006_ip = 113; continue _fun0006 }
 109:
            var2 = var10[var9];
 113:
            var11 = var1 != var2;
            var10 = 0;
            if(!var11) { _fun0006_ip = 125; continue _fun0006 }
 122:
            var10 = var2;
 125:
            var2 = var8.stats;
            var2 = var2.screenshare;
            var14 = var1 == var2;
            var11 = undefined;
            if(var14) { _fun0006_ip = 150; continue _fun0006 }
 146:
            var11 = var2[var9];
 150:
            var14 = var1 != var11;
            var2 = 0;
            if(!var14) { _fun0006_ip = 162; continue _fun0006 }
 159:
            var2 = var11;
 162:
            var2 = var2 - var10;
            var5[var9] = var2;
            var3 = var3 + 1;
            var2 = var6.length;
            if(var3 < var2) { _fun0006_ip = 84; continue _fun0006 }
 182:
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
            if(!var5) { _fun0006_ip = 284; continue _fun0006 }
 234:
            var14 = var11[var6];
            var5 = _closure1_slot3;
            var14 = var5.bind(var12)(var14, var10);
            var5 = var14[var4];
            var14 = var14[var9];
            if(!(var14 > var8)) { _fun0006_ip = 266; continue _fun0006 }
 260:
            var8 = var14;
            var7 = var5;
 266:
            var6 = var6 + 1;
            var5 = var11.length;
            var2 = var8;
            var3 = var7;
            if(var6 < var5) { _fun0006_ip = 234; continue _fun0006 }
 284:
            var4 = var2 > var4;
            var2 = null;
            if(!var4) { _fun0006_ip = 296; continue _fun0006 }
 293:
            var2 = var3;
 296:
            return var2;
 298:
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
 0:
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
            if(!var7) { _fun0007_ip = 84; continue _fun0007 }
 79:
            var8 = var6.channelId;
 84:
            var7 = null;
            if(!(var7 != var8)) { _fun0007_ip = 93; continue _fun0007 }
 90:
            var4 = var8;
 93:
            var8 = var7 != var4;
            var9 = null;
            if(!var8) { _fun0007_ip = 105; continue _fun0007 }
 102:
            var9 = var4;
 105:
            var _closure2_slot3 = var9;
            var8 = _closure1_slot6;
            var4 = var8.getChannel;
            var4 = var4.bind(var8)(var9);
            var _closure2_slot4 = var4;
            var4 = 'streamKey';
            var8 = var4 in var6;
            var4 = undefined;
            if(!var8) { _fun0007_ip = 146; continue _fun0007 }
 140:
            var4 = var6.streamKey;
 146:
            var8 = 'mediaContext';
            var9 = var8 in var6;
            var8 = undefined;
            if(!var9) { _fun0007_ip = 165; continue _fun0007 }
 159:
            var8 = var6.mediaContext;
 165:
            var _closure2_slot5 = var8;
            var9 = 'underlyingError';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 188; continue _fun0007 }
 182:
            var9 = var6.underlyingError;
 188:
            var _closure2_slot6 = var9;
            var9 = 'errorMessage';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 211; continue _fun0007 }
 205:
            var9 = var6.errorMessage;
 211:
            var _closure2_slot7 = var9;
            var9 = 'mediaSessionId';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 234; continue _fun0007 }
 228:
            var9 = var6.mediaSessionId;
 234:
            var _closure2_slot8 = var9;
            var9 = 'rtcConnectionId';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 257; continue _fun0007 }
 251:
            var9 = var6.rtcConnectionId;
 257:
            var _closure2_slot9 = var9;
            var9 = 'videoCodec';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 280; continue _fun0007 }
 274:
            var9 = var6.videoCodec;
 280:
            var _closure2_slot10 = var9;
            var9 = 'videoEncoder';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 303; continue _fun0007 }
 297:
            var9 = var6.videoEncoder;
 303:
            var _closure2_slot11 = var9;
            var9 = 'videoDecoder';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 330; continue _fun0007 }
 322:
            var9 = var6.videoDecoder;
 330:
            var _closure2_slot12 = var9;
            var9 = 'audioCaptureSampleRateMismatchPercent';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 353; continue _fun0007 }
 347:
            var9 = var6.audioCaptureSampleRateMismatchPercent;
 353:
            var _closure2_slot13 = var9;
            var9 = 'audioInputDeviceName';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 376; continue _fun0007 }
 370:
            var9 = var6.audioInputDeviceName;
 376:
            var _closure2_slot14 = var9;
            var9 = 'audioOutputDeviceName';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 399; continue _fun0007 }
 393:
            var9 = var6.audioOutputDeviceName;
 399:
            var _closure2_slot15 = var9;
            var9 = 'videoDeviceName';
            var10 = var9 in var6;
            var9 = undefined;
            if(!var10) { _fun0007_ip = 422; continue _fun0007 }
 416:
            var9 = var6.videoDeviceName;
 422:
            var _closure2_slot16 = var9;
            var9 = 'userId';
            var9 = var9 in var6;
            var11 = undefined;
            if(!var9) { _fun0007_ip = 444; continue _fun0007 }
 439:
            var11 = var6.userId;
 444:
            var9 = var7 != var4;
            var6 = null;
            if(!var9) { _fun0007_ip = 484; continue _fun0007 }
 453:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 13;
            var9 = var12[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.decodeStreamKey;
            var6 = var9.bind(var10)(var4);
 484:
            var _closure2_slot17 = var6;
            var9 = var7 != var4;
            var13 = null;
            if(!var9) { _fun0007_ip = 512; continue _fun0007 }
 497:
            var10 = _closure1_slot11;
            var9 = var10.getRTCConnection;
            var13 = var9.bind(var10)(var4);
 512:
            var _closure2_slot18 = var13;
            var9 = var13;
            if(!(var7 == var4)) { _fun0007_ip = 537; continue _fun0007 }
 523:
            var12 = _closure1_slot8;
            var10 = var12.getRTCConnection;
            var9 = var10.bind(var12)();
 537:
            var _closure2_slot19 = var9;
            var10 = var7 != var4;
            var14 = null;
            if(!var10) { _fun0007_ip = 583; continue _fun0007 }
 550:
            var12 = var7 == var13;
            var10 = undefined;
            if(var12) { _fun0007_ip = 580; continue _fun0007 }
 559:
            var12 = var13.analyticsContext;
            var15 = var7 == var12;
            var10 = undefined;
            if(var15) { _fun0007_ip = 580; continue _fun0007 }
 574:
            var10 = var12.streamApplication;
 580:
            var14 = var10;
 583:
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
            if(!(var7 == var8)) { _fun0007_ip = 712; continue _fun0007 }
 702:
            var10 = _closure1_slot14;
            var8 = var10.DEFAULT;
 712:
            var _closure2_slot27 = var8;
            if(!(var7 != var6)) { _fun0007_ip = 726; continue _fun0007 }
 720:
            var11 = var6.ownerId;
 726:
            var _closure2_slot28 = var11;
            if(!(var7 == var13)) { _fun0007_ip = 749; continue _fun0007 }
 734:
            var8 = 'receiver';
            if(!var5) { _fun0007_ip = 747; continue _fun0007 }
 743:
            var8 = 'sender';
 747:
            _fun0007_ip = 771; continue _fun0007;
 749:
            var12 = var7 == var13;
            var10 = undefined;
            if(var12) { _fun0007_ip = 768; continue _fun0007 }
 758:
            var12 = var13.getVoiceParticipantType;
            var10 = var12.bind(var13)();
 768:
            var8 = var10;
 771:
            var _closure2_slot29 = var8;
            var8 = var7 == var9;
            var10 = undefined;
            if(var8) { _fun0007_ip = 794; continue _fun0007 }
 784:
            var8 = var9.getMediaEngineConnectionId;
            var10 = var8.bind(var9)();
 794:
            var12 = var7 != var10;
            var8 = null;
            if(!var12) { _fun0007_ip = 806; continue _fun0007 }
 803:
            var8 = var10;
 806:
            var _closure2_slot30 = var8;
            if(!(var7 != var4)) { _fun0007_ip = 818; continue _fun0007 }
 814:
            if(!(var7 == var6)) { _fun0007_ip = 938; continue _fun0007 }
 818:
            if(var5) { _fun0007_ip = 855; continue _fun0007 }
 821:
            var8 = var7 != var11;
            var4 = null;
            if(!var8) { _fun0007_ip = 853; continue _fun0007 }
 830:
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0007_ip = 850; continue _fun0007 }
 839:
            var10 = var9.getInboundStats;
            var8 = var10.bind(var9)(var11);
 850:
            var4 = var8;
 853:
            _fun0007_ip = 936; continue _fun0007;
 855:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 15;
            var8 = var11[var8];
            var12 = var10.bind(var1)(var8);
            var11 = var12.maxBy;
            var8 = var7 == var9;
            var10 = undefined;
            if(var8) { _fun0007_ip = 900; continue _fun0007 }
 890:
            var8 = var9.getOutboundStats;
            var10 = var8.bind(var9)();
 900:
            if(!(var7 == var10)) { _fun0007_ip = 908; continue _fun0007 }
 904:
            var10 = new Array(0);
 908:
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.num_frames;
                return var1;
            };
            var10 = var11.bind(var12)(var10, var8);
            var11 = var7 != var10;
            var8 = null;
            if(!var11) { _fun0007_ip = 933; continue _fun0007 }
 930:
            var8 = var10;
 933:
            var4 = var8;
 936:
            _fun0007_ip = 1016; continue _fun0007;
 938:
            var8 = var7 == var9;
            if(var5) { _fun0007_ip = 969; continue _fun0007 }
 945:
            var5 = undefined;
            if(var8) { _fun0007_ip = 967; continue _fun0007 }
 950:
            var10 = var9.getInboundStats;
            var6 = var6.ownerId;
            var5 = var10.bind(var9)(var6);
 967:
            _fun0007_ip = 1013; continue _fun0007;
 969:
            var6 = undefined;
            if(var8) { _fun0007_ip = 1010; continue _fun0007 }
 974:
            var8 = var9.getOutboundStats;
            var9 = var8.bind(var9)();
            var7 = var7 == var9;
            var6 = undefined;
            if(var7) { _fun0007_ip = 1010; continue _fun0007 }
 993:
            var8 = var9.find;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.quality;
                var1 = _closure1_slot15;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var8.bind(var9)(var7);
 1010:
            var5 = var6;
 1013:
            var4 = var5;
 1016:
            var _closure2_slot1 = var4;
            var3 = _closure1_slot12;
            var4 = var3.bind(var1)();
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
                    if(!var2) { _fun0008_ip = 88; continue _fun0008 }
 84:
                    var1 = _closure2_slot6;
 88:
                    var5['underlying_error'] = var1;
                    var1 = _closure2_slot7;
                    var2 = var3 != var1;
                    var1 = null;
                    if(!var2) { _fun0008_ip = 112; continue _fun0008 }
 108:
                    var1 = _closure2_slot7;
 112:
                    var5['error_message'] = var1;
                    var1 = _closure2_slot4;
                    var2 = var3 == var1;
                    var1 = undefined;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 141; continue _fun0008 }
 132:
                    var2 = _closure2_slot4;
                    var7 = var2.guild_id;
 141:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 153; continue _fun0008 }
 150:
                    var2 = var7;
 153:
                    var5['guild_id'] = var2;
                    var2 = _closure2_slot3;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 174; continue _fun0008 }
 170:
                    var2 = _closure2_slot3;
 174:
                    var5['channel_id'] = var2;
                    var2 = _closure2_slot4;
                    var2 = var3 == var2;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 200; continue _fun0008 }
 191:
                    var2 = _closure2_slot4;
                    var7 = var2.type;
 200:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 212; continue _fun0008 }
 209:
                    var2 = var7;
 212:
                    var5['channel_type'] = var2;
                    var2 = _closure2_slot9;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 234; continue _fun0008 }
 230:
                    var2 = _closure2_slot9;
 234:
                    var5['rtc_connection_id'] = var2;
                    var2 = _closure2_slot8;
                    if(!(var3 == var2)) { _fun0008_ip = 266; continue _fun0008 }
 247:
                    var7 = _closure1_slot8;
                    var2 = var7.getMediaSessionId;
                    var7 = var2.bind(var7)();
                    _fun0008_ip = 270; continue _fun0008;
 266:
                    var7 = _closure2_slot8;
 270:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 282; continue _fun0008 }
 279:
                    var2 = var7;
 282:
                    var5['media_session_id'] = var2;
                    var2 = _closure2_slot18;
                    var2 = var3 == var2;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 310; continue _fun0008 }
 300:
                    var2 = _closure2_slot18;
                    var7 = var2.parentMediaSessionId;
 310:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 322; continue _fun0008 }
 319:
                    var2 = var7;
 322:
                    var5['parent_media_session_id'] = var2;
                    var2 = _closure2_slot5;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 344; continue _fun0008 }
 340:
                    var2 = _closure2_slot5;
 344:
                    var5['context'] = var2;
                    var8 = _closure1_slot8;
                    var7 = var8.getRTCConnection;
                    var9 = var7.bind(var8)();
                    var7 = var3 == var9;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 386; continue _fun0008 }
 374:
                    var7 = var9.getVoiceVersion;
                    var8 = var7.bind(var9)();
 386:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 398; continue _fun0008 }
 395:
                    var7 = var8;
 398:
                    var5['voice_backend_version'] = var7;
                    var8 = _closure1_slot8;
                    var7 = var8.getRTCConnection;
                    var9 = var7.bind(var8)();
                    var7 = var3 == var9;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 438; continue _fun0008 }
 426:
                    var7 = var9.getRtcWorkerVersion;
                    var8 = var7.bind(var9)();
 438:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 450; continue _fun0008 }
 447:
                    var7 = var8;
 450:
                    var5['rtc_worker_backend_version'] = var7;
                    var9 = _closure1_slot9;
                    var8 = var9.getRegion;
                    var10 = _closure1_slot8;
                    var7 = var10.getHostname;
                    var7 = var7.bind(var10)();
                    var8 = var8.bind(var9)(var7);
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 496; continue _fun0008 }
 493:
                    var7 = var8;
 496:
                    var5['guild_region'] = var7;
                    var8 = _closure1_slot8;
                    var7 = var8.getHostname;
                    var8 = var7.bind(var8)();
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 527; continue _fun0008 }
 524:
                    var7 = var8;
 527:
                    var5['hostname'] = var7;
                    var7 = _closure2_slot19;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 559; continue _fun0008 }
 545:
                    var9 = _closure2_slot19;
                    var7 = var9.getDurationSeconds;
                    var8 = var7.bind(var9)();
 559:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 571; continue _fun0008 }
 568:
                    var7 = var8;
 571:
                    var5['duration'] = var7;
                    var7 = _closure2_slot29;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 592; continue _fun0008 }
 588:
                    var7 = _closure2_slot29;
 592:
                    var5['participant_type'] = var7;
                    var7 = _closure2_slot1;
                    var8 = var3 == var7;
                    var9 = undefined;
                    if(var8) { _fun0008_ip = 616; continue _fun0008 }
 610:
                    var9 = var7.num_frames;
 616:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 628; continue _fun0008 }
 625:
                    var8 = var9;
 628:
                    var5['num_frames'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var3 == var8;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 652; continue _fun0008 }
 646:
                    var9 = var8.num_packets;
 652:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 664; continue _fun0008 }
 661:
                    var8 = var9;
 664:
                    var5['num_packets'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var3 == var8;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 688; continue _fun0008 }
 682:
                    var9 = var8.num_bytes;
 688:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 700; continue _fun0008 }
 697:
                    var8 = var9;
 700:
                    var5['num_bytes'] = var8;
                    var11 = _closure1_slot18;
                    var10 = _closure2_slot26;
                    var9 = _closure2_slot30;
                    var8 = _closure2_slot28;
                    var9 = var11.bind(var1)(var10, var9, var8);
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 743; continue _fun0008 }
 737:
                    var8 = var9.packetsLost;
 743:
                    var9 = var3 != var8;
                    var7 = 0;
                    if(!var9) { _fun0008_ip = 755; continue _fun0008 }
 752:
                    var7 = var8;
 755:
                    var5['num_packets_lost'] = var7;
                    var7 = _closure2_slot10;
                    if(!(var3 == var7)) { _fun0008_ip = 846; continue _fun0008 }
 770:
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
                    if(var11) { _fun0008_ip = 839; continue _fun0008 }
 828:
                    var10 = var10.codec;
                    var7 = var10.name;
 839:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 850; continue _fun0008;
 846:
                    var8 = _closure2_slot10;
 850:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 862; continue _fun0008 }
 859:
                    var7 = var8;
 862:
                    var5['video_codec'] = var7;
                    var7 = _closure2_slot11;
                    if(!(var3 == var7)) { _fun0008_ip = 936; continue _fun0008 }
 875:
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
                    if(var11) { _fun0008_ip = 929; continue _fun0008 }
 923:
                    var7 = var10.encoderImplementationName;
 929:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 940; continue _fun0008;
 936:
                    var8 = _closure2_slot11;
 940:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 952; continue _fun0008 }
 949:
                    var7 = var8;
 952:
                    var5['video_encoder'] = var7;
                    var7 = _closure2_slot12;
                    if(!(var3 == var7)) { _fun0008_ip = 1033; continue _fun0008 }
 967:
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
                    if(var11) { _fun0008_ip = 1026; continue _fun0008 }
 1020:
                    var7 = var10.decoderImplementationName;
 1026:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 1037; continue _fun0008;
 1033:
                    var8 = _closure2_slot12;
 1037:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1049; continue _fun0008 }
 1046:
                    var7 = var8;
 1049:
                    var5['video_decoder'] = var7;
                    var7 = _closure2_slot13;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1073; continue _fun0008 }
 1069:
                    var7 = _closure2_slot13;
 1073:
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
                    if(var9) { _fun0008_ip = 1164; continue _fun0008 }
 1158:
                    var8 = var7.bitrate;
 1164:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1176; continue _fun0008 }
 1173:
                    var7 = var8;
 1176:
                    var5['bitrate'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1230; continue _fun0008 }
 1190:
                    var9 = _closure1_slot16;
                    var8 = _closure2_slot30;
                    var9 = var9.bind(var1)(var8);
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 1218; continue _fun0008 }
 1212:
                    var8 = var9.bitrateTarget;
 1218:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1230; continue _fun0008 }
 1227:
                    var7 = var8;
 1230:
                    var5['target_bitrate'] = var7;
                    var7 = _closure2_slot26;
                    var9 = _closure2_slot27;
                    var8 = _closure2_slot28;
                    if(var7) { _fun0008_ip = 1291; continue _fun0008 }
 1252:
                    var7 = _closure1_slot17;
                    var8 = var7.bind(var1)(var9, var8);
                    var10 = var3 == var8;
                    var7 = undefined;
                    if(var10) { _fun0008_ip = 1277; continue _fun0008 }
 1271:
                    var7 = var8.frameRateDecode;
 1277:
                    var10 = var3 != var7;
                    var8 = null;
                    if(!var10) { _fun0008_ip = 1289; continue _fun0008 }
 1286:
                    var8 = var7;
 1289:
                    _fun0008_ip = 1330; continue _fun0008;
 1291:
                    var7 = _closure1_slot16;
                    var7 = var7.bind(var1)(var9);
                    var10 = var3 == var7;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 1315; continue _fun0008 }
 1309:
                    var9 = var7.frameRateEncode;
 1315:
                    var10 = var3 != var9;
                    var7 = null;
                    if(!var10) { _fun0008_ip = 1327; continue _fun0008 }
 1324:
                    var7 = var9;
 1327:
                    var8 = var7;
 1330:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1342; continue _fun0008 }
 1339:
                    var7 = var8;
 1342:
                    var5['fps'] = var7;
                    var9 = _closure2_slot27;
                    var7 = _closure1_slot14;
                    var8 = var7.STREAM;
                    var7 = null;
                    if(!(var9 === var8)) { _fun0008_ip = 1380; continue _fun0008 }
 1367:
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1380; continue _fun0008 }
 1376:
                    var7 = _closure2_slot21;
 1380:
                    var5['target_fps'] = var7;
                    var7 = _closure2_slot17;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1410; continue _fun0008 }
 1400:
                    var7 = _closure2_slot17;
                    var8 = var7.ownerId;
 1410:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1422; continue _fun0008 }
 1419:
                    var7 = var8;
 1422:
                    var5['sender_user_id'] = var7;
                    var7 = _closure2_slot18;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1454; continue _fun0008 }
 1440:
                    var9 = _closure2_slot18;
                    var7 = var9.getRegion;
                    var8 = var7.bind(var9)();
 1454:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1466; continue _fun0008 }
 1463:
                    var7 = var8;
 1466:
                    var5['stream_region'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1530; continue _fun0008 }
 1480:
                    var8 = _closure2_slot18;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 1518; continue _fun0008 }
 1493:
                    var9 = _closure2_slot18;
                    var9 = var9.analyticsContext;
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 1518; continue _fun0008 }
 1512:
                    var8 = var9.streamSourceType;
 1518:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1530; continue _fun0008 }
 1527:
                    var7 = var8;
 1530:
                    var5['stream_source_type'] = var7;
                    var7 = _closure2_slot18;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1573; continue _fun0008 }
 1548:
                    var7 = _closure2_slot18;
                    var7 = var7.analyticsContext;
                    var9 = var3 == var7;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 1573; continue _fun0008 }
 1567:
                    var8 = var7.numViewers;
 1573:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1585; continue _fun0008 }
 1582:
                    var7 = var8;
 1585:
                    var5['num_stream_viewers'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1618; continue _fun0008 }
 1601:
                    var8 = _closure2_slot20;
                    var8 = var3 != var8;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1618; continue _fun0008 }
 1614:
                    var7 = _closure2_slot20;
 1618:
                    var5['video_input_resolution_height'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1651; continue _fun0008 }
 1634:
                    var8 = _closure2_slot21;
                    var8 = var3 != var8;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1651; continue _fun0008 }
 1647:
                    var7 = _closure2_slot21;
 1651:
                    var5['video_input_frame_rate'] = var7;
                    var8 = _closure1_slot21;
                    var7 = _closure2_slot30;
                    var7 = var8.bind(var1)(var7);
                    var5['screenshare_capture_method'] = var7;
                    var7 = _closure2_slot22;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1695; continue _fun0008 }
 1691:
                    var7 = _closure2_slot22;
 1695:
                    var5['share_application_name'] = var7;
                    var7 = _closure2_slot23;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1717; continue _fun0008 }
 1713:
                    var7 = _closure2_slot23;
 1717:
                    var5['share_application_id'] = var7;
                    var7 = _closure2_slot24;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1739; continue _fun0008 }
 1735:
                    var7 = _closure2_slot24;
 1739:
                    var5['share_application_executable'] = var7;
                    var7 = _closure2_slot25;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1761; continue _fun0008 }
 1757:
                    var7 = _closure2_slot25;
 1761:
                    var5['share_application_distributor'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1781; continue _fun0008 }
 1775:
                    var8 = var6.cpu_brand;
 1781:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1793; continue _fun0008 }
 1790:
                    var7 = var8;
 1793:
                    var5['cpu_brand'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1813; continue _fun0008 }
 1807:
                    var8 = var6.cpu_vendor;
 1813:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1825; continue _fun0008 }
 1822:
                    var7 = var8;
 1825:
                    var5['cpu_vendor'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1845; continue _fun0008 }
 1839:
                    var8 = var6.cpu_memory;
 1845:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1857; continue _fun0008 }
 1854:
                    var7 = var8;
 1857:
                    var5['cpu_memory'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1877; continue _fun0008 }
 1871:
                    var8 = var6.gpu_brand;
 1877:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1889; continue _fun0008 }
 1886:
                    var7 = var8;
 1889:
                    var5['gpu_brand'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1909; continue _fun0008 }
 1903:
                    var8 = var6.gpu_count;
 1909:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1921; continue _fun0008 }
 1918:
                    var7 = var8;
 1921:
                    var5['gpu_count'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1941; continue _fun0008 }
 1935:
                    var8 = var6.gpu_memory;
 1941:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1953; continue _fun0008 }
 1950:
                    var7 = var8;
 1953:
                    var5['gpu_memory'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1973; continue _fun0008 }
 1967:
                    var8 = var6.gpu_device_vendor_id;
 1973:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1985; continue _fun0008 }
 1982:
                    var7 = var8;
 1985:
                    var5['gpu_device_vendor_id'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 2005; continue _fun0008 }
 1999:
                    var8 = var6.gpu_device_device_id;
 2005:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 2017; continue _fun0008 }
 2014:
                    var7 = var8;
 2017:
                    var5['gpu_device_device_id'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 2037; continue _fun0008 }
 2031:
                    var8 = var6.gpu_device_sub_sys_id;
 2037:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 2049; continue _fun0008 }
 2046:
                    var7 = var8;
 2049:
                    var5['gpu_device_sub_sys_id'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 2069; continue _fun0008 }
 2063:
                    var8 = var6.gpu_device_revision;
 2069:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 2081; continue _fun0008 }
 2078:
                    var7 = var8;
 2081:
                    var5['gpu_device_revision'] = var7;
                    var8 = var3 == var6;
                    var7 = undefined;
                    if(var8) { _fun0008_ip = 2101; continue _fun0008 }
 2095:
                    var7 = var6.gpu_driver_version;
 2101:
                    var8 = var3 != var7;
                    var6 = null;
                    if(!var8) { _fun0008_ip = 2113; continue _fun0008 }
 2110:
                    var6 = var7;
 2113:
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
                    if(!var9) { _fun0008_ip = 2160; continue _fun0008 }
 2157:
                    var6 = var7;
 2160:
                    var5['cpu_usage'] = var6;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.getCurrentMemoryUsageKB;
                    var7 = var6.bind(var7)();
                    var8 = var3 != var7;
                    var6 = null;
                    if(!var8) { _fun0008_ip = 2206; continue _fun0008 }
 2203:
                    var6 = var7;
 2206:
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
                    if(!(var3 == var6)) { _fun0008_ip = 2324; continue _fun0008 }
 2280:
                    var8 = _closure1_slot7;
                    var6 = var8.getInputDevices;
                    var7 = var6.bind(var8)();
                    var6 = var8.getInputDeviceId;
                    var6 = var6.bind(var8)();
                    var7 = var7[var6];
                    var8 = var3 == var7;
                    var6 = undefined;
                    if(var8) { _fun0008_ip = 2322; continue _fun0008 }
 2317:
                    var6 = var7.name;
 2322:
                    _fun0008_ip = 2328; continue _fun0008;
 2324:
                    var6 = _closure2_slot14;
 2328:
                    var5['audio_input_device_name'] = var6;
                    var6 = _closure2_slot15;
                    if(!(var3 == var6)) { _fun0008_ip = 2387; continue _fun0008 }
 2343:
                    var8 = _closure1_slot7;
                    var6 = var8.getOutputDevices;
                    var7 = var6.bind(var8)();
                    var6 = var8.getOutputDeviceId;
                    var6 = var6.bind(var8)();
                    var7 = var7[var6];
                    var8 = var3 == var7;
                    var6 = undefined;
                    if(var8) { _fun0008_ip = 2385; continue _fun0008 }
 2380:
                    var6 = var7.name;
 2385:
                    _fun0008_ip = 2391; continue _fun0008;
 2387:
                    var6 = _closure2_slot15;
 2391:
                    var5['audio_output_device_name'] = var6;
                    var6 = _closure2_slot16;
                    if(!(var3 == var6)) { _fun0008_ip = 2450; continue _fun0008 }
 2406:
                    var8 = _closure1_slot7;
                    var6 = var8.getVideoDevices;
                    var7 = var6.bind(var8)();
                    var6 = var8.getVideoDeviceId;
                    var6 = var6.bind(var8)();
                    var6 = var7[var6];
                    var7 = var3 == var6;
                    var3 = undefined;
                    if(var7) { _fun0008_ip = 2448; continue _fun0008 }
 2443:
                    var3 = var6.name;
 2448:
                    _fun0008_ip = 2454; continue _fun0008;
 2450:
                    var3 = _closure2_slot16;
 2454:
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