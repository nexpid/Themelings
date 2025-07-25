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
            if(!(var7 == var13)) { _fun0007_ip = 747; continue _fun0007 }
 734:
            var8 = 'receiver';
            if(!var5) { _fun0007_ip = 745; continue _fun0007 }
 741:
            var8 = 'sender';
 745:
            _fun0007_ip = 769; continue _fun0007;
 747:
            var12 = var7 == var13;
            var10 = undefined;
            if(var12) { _fun0007_ip = 766; continue _fun0007 }
 756:
            var12 = var13.getVoiceParticipantType;
            var10 = var12.bind(var13)();
 766:
            var8 = var10;
 769:
            var _closure2_slot29 = var8;
            var8 = var7 == var9;
            var10 = undefined;
            if(var8) { _fun0007_ip = 792; continue _fun0007 }
 782:
            var8 = var9.getMediaEngineConnectionId;
            var10 = var8.bind(var9)();
 792:
            var12 = var7 != var10;
            var8 = null;
            if(!var12) { _fun0007_ip = 804; continue _fun0007 }
 801:
            var8 = var10;
 804:
            var _closure2_slot30 = var8;
            if(!(var7 != var4)) { _fun0007_ip = 816; continue _fun0007 }
 812:
            if(!(var7 == var6)) { _fun0007_ip = 936; continue _fun0007 }
 816:
            if(var5) { _fun0007_ip = 853; continue _fun0007 }
 819:
            var8 = var7 != var11;
            var4 = null;
            if(!var8) { _fun0007_ip = 851; continue _fun0007 }
 828:
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0007_ip = 848; continue _fun0007 }
 837:
            var10 = var9.getInboundStats;
            var8 = var10.bind(var9)(var11);
 848:
            var4 = var8;
 851:
            _fun0007_ip = 934; continue _fun0007;
 853:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 15;
            var8 = var11[var8];
            var12 = var10.bind(var1)(var8);
            var11 = var12.maxBy;
            var8 = var7 == var9;
            var10 = undefined;
            if(var8) { _fun0007_ip = 898; continue _fun0007 }
 888:
            var8 = var9.getOutboundStats;
            var10 = var8.bind(var9)();
 898:
            if(!(var7 == var10)) { _fun0007_ip = 906; continue _fun0007 }
 902:
            var10 = new Array(0);
 906:
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.num_frames;
                return var1;
            };
            var10 = var11.bind(var12)(var10, var8);
            var11 = var7 != var10;
            var8 = null;
            if(!var11) { _fun0007_ip = 931; continue _fun0007 }
 928:
            var8 = var10;
 931:
            var4 = var8;
 934:
            _fun0007_ip = 1014; continue _fun0007;
 936:
            var8 = var7 == var9;
            if(var5) { _fun0007_ip = 967; continue _fun0007 }
 943:
            var5 = undefined;
            if(var8) { _fun0007_ip = 965; continue _fun0007 }
 948:
            var10 = var9.getInboundStats;
            var6 = var6.ownerId;
            var5 = var10.bind(var9)(var6);
 965:
            _fun0007_ip = 1011; continue _fun0007;
 967:
            var6 = undefined;
            if(var8) { _fun0007_ip = 1008; continue _fun0007 }
 972:
            var8 = var9.getOutboundStats;
            var9 = var8.bind(var9)();
            var7 = var7 == var9;
            var6 = undefined;
            if(var7) { _fun0007_ip = 1008; continue _fun0007 }
 991:
            var8 = var9.find;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.quality;
                var1 = _closure1_slot15;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var8.bind(var9)(var7);
 1008:
            var5 = var6;
 1011:
            var4 = var5;
 1014:
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
                    if(!var2) { _fun0008_ip = 87; continue _fun0008 }
 83:
                    var1 = _closure2_slot6;
 87:
                    var5['underlying_error'] = var1;
                    var1 = _closure2_slot7;
                    var2 = var3 != var1;
                    var1 = null;
                    if(!var2) { _fun0008_ip = 111; continue _fun0008 }
 107:
                    var1 = _closure2_slot7;
 111:
                    var5['error_message'] = var1;
                    var1 = _closure2_slot4;
                    var2 = var3 == var1;
                    var1 = undefined;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 140; continue _fun0008 }
 131:
                    var2 = _closure2_slot4;
                    var7 = var2.guild_id;
 140:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 152; continue _fun0008 }
 149:
                    var2 = var7;
 152:
                    var5['guild_id'] = var2;
                    var2 = _closure2_slot3;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 173; continue _fun0008 }
 169:
                    var2 = _closure2_slot3;
 173:
                    var5['channel_id'] = var2;
                    var2 = _closure2_slot4;
                    var2 = var3 == var2;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 199; continue _fun0008 }
 190:
                    var2 = _closure2_slot4;
                    var7 = var2.type;
 199:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 211; continue _fun0008 }
 208:
                    var2 = var7;
 211:
                    var5['channel_type'] = var2;
                    var2 = _closure2_slot9;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 233; continue _fun0008 }
 229:
                    var2 = _closure2_slot9;
 233:
                    var5['rtc_connection_id'] = var2;
                    var2 = _closure2_slot8;
                    if(!(var3 == var2)) { _fun0008_ip = 265; continue _fun0008 }
 246:
                    var7 = _closure1_slot8;
                    var2 = var7.getMediaSessionId;
                    var7 = var2.bind(var7)();
                    _fun0008_ip = 269; continue _fun0008;
 265:
                    var7 = _closure2_slot8;
 269:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 281; continue _fun0008 }
 278:
                    var2 = var7;
 281:
                    var5['media_session_id'] = var2;
                    var2 = _closure2_slot18;
                    var2 = var3 == var2;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 309; continue _fun0008 }
 299:
                    var2 = _closure2_slot18;
                    var7 = var2.parentMediaSessionId;
 309:
                    var8 = var3 != var7;
                    var2 = null;
                    if(!var8) { _fun0008_ip = 321; continue _fun0008 }
 318:
                    var2 = var7;
 321:
                    var5['parent_media_session_id'] = var2;
                    var2 = _closure2_slot5;
                    var7 = var3 != var2;
                    var2 = null;
                    if(!var7) { _fun0008_ip = 343; continue _fun0008 }
 339:
                    var2 = _closure2_slot5;
 343:
                    var5['context'] = var2;
                    var8 = _closure1_slot8;
                    var7 = var8.getRTCConnection;
                    var9 = var7.bind(var8)();
                    var7 = var3 == var9;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 385; continue _fun0008 }
 373:
                    var7 = var9.getVoiceVersion;
                    var8 = var7.bind(var9)();
 385:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 397; continue _fun0008 }
 394:
                    var7 = var8;
 397:
                    var5['voice_backend_version'] = var7;
                    var8 = _closure1_slot8;
                    var7 = var8.getRTCConnection;
                    var9 = var7.bind(var8)();
                    var7 = var3 == var9;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 437; continue _fun0008 }
 425:
                    var7 = var9.getRtcWorkerVersion;
                    var8 = var7.bind(var9)();
 437:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 449; continue _fun0008 }
 446:
                    var7 = var8;
 449:
                    var5['rtc_worker_backend_version'] = var7;
                    var9 = _closure1_slot9;
                    var8 = var9.getRegion;
                    var10 = _closure1_slot8;
                    var7 = var10.getHostname;
                    var7 = var7.bind(var10)();
                    var8 = var8.bind(var9)(var7);
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 495; continue _fun0008 }
 492:
                    var7 = var8;
 495:
                    var5['guild_region'] = var7;
                    var8 = _closure1_slot8;
                    var7 = var8.getHostname;
                    var8 = var7.bind(var8)();
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 526; continue _fun0008 }
 523:
                    var7 = var8;
 526:
                    var5['hostname'] = var7;
                    var7 = _closure2_slot19;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 558; continue _fun0008 }
 544:
                    var9 = _closure2_slot19;
                    var7 = var9.getDurationSeconds;
                    var8 = var7.bind(var9)();
 558:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 570; continue _fun0008 }
 567:
                    var7 = var8;
 570:
                    var5['duration'] = var7;
                    var7 = _closure2_slot29;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 591; continue _fun0008 }
 587:
                    var7 = _closure2_slot29;
 591:
                    var5['participant_type'] = var7;
                    var7 = _closure2_slot1;
                    var8 = var3 == var7;
                    var9 = undefined;
                    if(var8) { _fun0008_ip = 615; continue _fun0008 }
 609:
                    var9 = var7.num_frames;
 615:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 627; continue _fun0008 }
 624:
                    var8 = var9;
 627:
                    var5['num_frames'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var3 == var8;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 651; continue _fun0008 }
 645:
                    var9 = var8.num_packets;
 651:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 663; continue _fun0008 }
 660:
                    var8 = var9;
 663:
                    var5['num_packets'] = var8;
                    var8 = _closure2_slot1;
                    var10 = var3 == var8;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 687; continue _fun0008 }
 681:
                    var9 = var8.num_bytes;
 687:
                    var10 = var3 != var9;
                    var8 = 0;
                    if(!var10) { _fun0008_ip = 699; continue _fun0008 }
 696:
                    var8 = var9;
 699:
                    var5['num_bytes'] = var8;
                    var11 = _closure1_slot18;
                    var10 = _closure2_slot26;
                    var9 = _closure2_slot30;
                    var8 = _closure2_slot28;
                    var9 = var11.bind(var1)(var10, var9, var8);
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 742; continue _fun0008 }
 736:
                    var8 = var9.packetsLost;
 742:
                    var9 = var3 != var8;
                    var7 = 0;
                    if(!var9) { _fun0008_ip = 754; continue _fun0008 }
 751:
                    var7 = var8;
 754:
                    var5['num_packets_lost'] = var7;
                    var7 = _closure2_slot10;
                    if(!(var3 == var7)) { _fun0008_ip = 845; continue _fun0008 }
 769:
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
                    if(var11) { _fun0008_ip = 838; continue _fun0008 }
 827:
                    var10 = var10.codec;
                    var7 = var10.name;
 838:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 849; continue _fun0008;
 845:
                    var8 = _closure2_slot10;
 849:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 861; continue _fun0008 }
 858:
                    var7 = var8;
 861:
                    var5['video_codec'] = var7;
                    var7 = _closure2_slot11;
                    if(!(var3 == var7)) { _fun0008_ip = 935; continue _fun0008 }
 874:
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
                    if(var11) { _fun0008_ip = 928; continue _fun0008 }
 922:
                    var7 = var10.encoderImplementationName;
 928:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 939; continue _fun0008;
 935:
                    var8 = _closure2_slot11;
 939:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 951; continue _fun0008 }
 948:
                    var7 = var8;
 951:
                    var5['video_encoder'] = var7;
                    var7 = _closure2_slot12;
                    if(!(var3 == var7)) { _fun0008_ip = 1032; continue _fun0008 }
 966:
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
                    if(var11) { _fun0008_ip = 1025; continue _fun0008 }
 1019:
                    var7 = var10.decoderImplementationName;
 1025:
                    var8 = var8.bind(var9)(var7);
                    _fun0008_ip = 1036; continue _fun0008;
 1032:
                    var8 = _closure2_slot12;
 1036:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1048; continue _fun0008 }
 1045:
                    var7 = var8;
 1048:
                    var5['video_decoder'] = var7;
                    var7 = _closure2_slot13;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1072; continue _fun0008 }
 1068:
                    var7 = _closure2_slot13;
 1072:
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
                    if(var9) { _fun0008_ip = 1163; continue _fun0008 }
 1157:
                    var8 = var7.bitrate;
 1163:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1175; continue _fun0008 }
 1172:
                    var7 = var8;
 1175:
                    var5['bitrate'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1229; continue _fun0008 }
 1189:
                    var9 = _closure1_slot16;
                    var8 = _closure2_slot30;
                    var9 = var9.bind(var1)(var8);
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 1217; continue _fun0008 }
 1211:
                    var8 = var9.bitrateTarget;
 1217:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1229; continue _fun0008 }
 1226:
                    var7 = var8;
 1229:
                    var5['target_bitrate'] = var7;
                    var7 = _closure2_slot26;
                    var9 = _closure2_slot27;
                    var8 = _closure2_slot28;
                    if(var7) { _fun0008_ip = 1290; continue _fun0008 }
 1251:
                    var7 = _closure1_slot17;
                    var8 = var7.bind(var1)(var9, var8);
                    var10 = var3 == var8;
                    var7 = undefined;
                    if(var10) { _fun0008_ip = 1276; continue _fun0008 }
 1270:
                    var7 = var8.frameRateDecode;
 1276:
                    var10 = var3 != var7;
                    var8 = null;
                    if(!var10) { _fun0008_ip = 1288; continue _fun0008 }
 1285:
                    var8 = var7;
 1288:
                    _fun0008_ip = 1329; continue _fun0008;
 1290:
                    var7 = _closure1_slot16;
                    var7 = var7.bind(var1)(var9);
                    var10 = var3 == var7;
                    var9 = undefined;
                    if(var10) { _fun0008_ip = 1314; continue _fun0008 }
 1308:
                    var9 = var7.frameRateEncode;
 1314:
                    var10 = var3 != var9;
                    var7 = null;
                    if(!var10) { _fun0008_ip = 1326; continue _fun0008 }
 1323:
                    var7 = var9;
 1326:
                    var8 = var7;
 1329:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1341; continue _fun0008 }
 1338:
                    var7 = var8;
 1341:
                    var5['fps'] = var7;
                    var9 = _closure2_slot27;
                    var7 = _closure1_slot14;
                    var8 = var7.STREAM;
                    var7 = null;
                    if(!(var9 === var8)) { _fun0008_ip = 1379; continue _fun0008 }
 1366:
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1379; continue _fun0008 }
 1375:
                    var7 = _closure2_slot21;
 1379:
                    var5['target_fps'] = var7;
                    var7 = _closure2_slot17;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1409; continue _fun0008 }
 1399:
                    var7 = _closure2_slot17;
                    var8 = var7.ownerId;
 1409:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1421; continue _fun0008 }
 1418:
                    var7 = var8;
 1421:
                    var5['sender_user_id'] = var7;
                    var7 = _closure2_slot18;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1453; continue _fun0008 }
 1439:
                    var9 = _closure2_slot18;
                    var7 = var9.getRegion;
                    var8 = var7.bind(var9)();
 1453:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1465; continue _fun0008 }
 1462:
                    var7 = var8;
 1465:
                    var5['stream_region'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1529; continue _fun0008 }
 1479:
                    var8 = _closure2_slot18;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 1517; continue _fun0008 }
 1492:
                    var9 = _closure2_slot18;
                    var9 = var9.analyticsContext;
                    var10 = var3 == var9;
                    var8 = undefined;
                    if(var10) { _fun0008_ip = 1517; continue _fun0008 }
 1511:
                    var8 = var9.streamSourceType;
 1517:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1529; continue _fun0008 }
 1526:
                    var7 = var8;
 1529:
                    var5['stream_source_type'] = var7;
                    var7 = _closure2_slot18;
                    var7 = var3 == var7;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1572; continue _fun0008 }
 1547:
                    var7 = _closure2_slot18;
                    var7 = var7.analyticsContext;
                    var9 = var3 == var7;
                    var8 = undefined;
                    if(var9) { _fun0008_ip = 1572; continue _fun0008 }
 1566:
                    var8 = var7.numViewers;
 1572:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1584; continue _fun0008 }
 1581:
                    var7 = var8;
 1584:
                    var5['num_stream_viewers'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1617; continue _fun0008 }
 1600:
                    var8 = _closure2_slot20;
                    var8 = var3 != var8;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1617; continue _fun0008 }
 1613:
                    var7 = _closure2_slot20;
 1617:
                    var5['video_input_resolution_height'] = var7;
                    var8 = _closure2_slot26;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1650; continue _fun0008 }
 1633:
                    var8 = _closure2_slot21;
                    var8 = var3 != var8;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1650; continue _fun0008 }
 1646:
                    var7 = _closure2_slot21;
 1650:
                    var5['video_input_frame_rate'] = var7;
                    var8 = _closure1_slot21;
                    var7 = _closure2_slot30;
                    var7 = var8.bind(var1)(var7);
                    var5['screenshare_capture_method'] = var7;
                    var7 = _closure2_slot22;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1694; continue _fun0008 }
 1690:
                    var7 = _closure2_slot22;
 1694:
                    var5['share_application_name'] = var7;
                    var7 = _closure2_slot23;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1716; continue _fun0008 }
 1712:
                    var7 = _closure2_slot23;
 1716:
                    var5['share_application_id'] = var7;
                    var7 = _closure2_slot24;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1738; continue _fun0008 }
 1734:
                    var7 = _closure2_slot24;
 1738:
                    var5['share_application_executable'] = var7;
                    var7 = _closure2_slot25;
                    var8 = var3 != var7;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 1760; continue _fun0008 }
 1756:
                    var7 = _closure2_slot25;
 1760:
                    var5['share_application_distributor'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1780; continue _fun0008 }
 1774:
                    var8 = var6.cpu_brand;
 1780:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1792; continue _fun0008 }
 1789:
                    var7 = var8;
 1792:
                    var5['cpu_brand'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1812; continue _fun0008 }
 1806:
                    var8 = var6.cpu_vendor;
 1812:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1824; continue _fun0008 }
 1821:
                    var7 = var8;
 1824:
                    var5['cpu_vendor'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1844; continue _fun0008 }
 1838:
                    var8 = var6.cpu_memory;
 1844:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1856; continue _fun0008 }
 1853:
                    var7 = var8;
 1856:
                    var5['cpu_memory'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1876; continue _fun0008 }
 1870:
                    var8 = var6.gpu_brand;
 1876:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1888; continue _fun0008 }
 1885:
                    var7 = var8;
 1888:
                    var5['gpu_brand'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1908; continue _fun0008 }
 1902:
                    var8 = var6.gpu_count;
 1908:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1920; continue _fun0008 }
 1917:
                    var7 = var8;
 1920:
                    var5['gpu_count'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1940; continue _fun0008 }
 1934:
                    var8 = var6.gpu_memory;
 1940:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1952; continue _fun0008 }
 1949:
                    var7 = var8;
 1952:
                    var5['gpu_memory'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 1972; continue _fun0008 }
 1966:
                    var8 = var6.gpu_device_vendor_id;
 1972:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 1984; continue _fun0008 }
 1981:
                    var7 = var8;
 1984:
                    var5['gpu_device_vendor_id'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 2004; continue _fun0008 }
 1998:
                    var8 = var6.gpu_device_device_id;
 2004:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 2016; continue _fun0008 }
 2013:
                    var7 = var8;
 2016:
                    var5['gpu_device_device_id'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 2036; continue _fun0008 }
 2030:
                    var8 = var6.gpu_device_sub_sys_id;
 2036:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 2048; continue _fun0008 }
 2045:
                    var7 = var8;
 2048:
                    var5['gpu_device_sub_sys_id'] = var7;
                    var7 = var3 == var6;
                    var8 = undefined;
                    if(var7) { _fun0008_ip = 2068; continue _fun0008 }
 2062:
                    var8 = var6.gpu_device_revision;
 2068:
                    var9 = var3 != var8;
                    var7 = null;
                    if(!var9) { _fun0008_ip = 2080; continue _fun0008 }
 2077:
                    var7 = var8;
 2080:
                    var5['gpu_device_revision'] = var7;
                    var8 = var3 == var6;
                    var7 = undefined;
                    if(var8) { _fun0008_ip = 2100; continue _fun0008 }
 2094:
                    var7 = var6.gpu_driver_version;
 2100:
                    var8 = var3 != var7;
                    var6 = null;
                    if(!var8) { _fun0008_ip = 2112; continue _fun0008 }
 2109:
                    var6 = var7;
 2112:
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
                    if(!var9) { _fun0008_ip = 2159; continue _fun0008 }
 2156:
                    var6 = var7;
 2159:
                    var5['cpu_usage'] = var6;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.getCurrentMemoryUsageKB;
                    var7 = var6.bind(var7)();
                    var8 = var3 != var7;
                    var6 = null;
                    if(!var8) { _fun0008_ip = 2205; continue _fun0008 }
 2202:
                    var6 = var7;
 2205:
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
                    if(!(var3 == var6)) { _fun0008_ip = 2323; continue _fun0008 }
 2279:
                    var8 = _closure1_slot7;
                    var6 = var8.getInputDevices;
                    var7 = var6.bind(var8)();
                    var6 = var8.getInputDeviceId;
                    var6 = var6.bind(var8)();
                    var7 = var7[var6];
                    var8 = var3 == var7;
                    var6 = undefined;
                    if(var8) { _fun0008_ip = 2321; continue _fun0008 }
 2316:
                    var6 = var7.name;
 2321:
                    _fun0008_ip = 2327; continue _fun0008;
 2323:
                    var6 = _closure2_slot14;
 2327:
                    var5['audio_input_device_name'] = var6;
                    var6 = _closure2_slot15;
                    if(!(var3 == var6)) { _fun0008_ip = 2386; continue _fun0008 }
 2342:
                    var8 = _closure1_slot7;
                    var6 = var8.getOutputDevices;
                    var7 = var6.bind(var8)();
                    var6 = var8.getOutputDeviceId;
                    var6 = var6.bind(var8)();
                    var7 = var7[var6];
                    var8 = var3 == var7;
                    var6 = undefined;
                    if(var8) { _fun0008_ip = 2384; continue _fun0008 }
 2379:
                    var6 = var7.name;
 2384:
                    _fun0008_ip = 2390; continue _fun0008;
 2386:
                    var6 = _closure2_slot15;
 2390:
                    var5['audio_output_device_name'] = var6;
                    var6 = _closure2_slot16;
                    if(!(var3 == var6)) { _fun0008_ip = 2449; continue _fun0008 }
 2405:
                    var8 = _closure1_slot7;
                    var6 = var8.getVideoDevices;
                    var7 = var6.bind(var8)();
                    var6 = var8.getVideoDeviceId;
                    var6 = var6.bind(var8)();
                    var6 = var7[var6];
                    var7 = var3 == var6;
                    var3 = undefined;
                    if(var7) { _fun0008_ip = 2447; continue _fun0008 }
 2442:
                    var3 = var6.name;
 2447:
                    _fun0008_ip = 2453; continue _fun0008;
 2449:
                    var3 = _closure2_slot16;
 2453:
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