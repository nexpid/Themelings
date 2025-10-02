// app/modules/video_backgrounds/VideoBackgroundUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var8 = function isCustomBackgroundOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 'object';
            var3 = typeof var2;
            var1 = var4 === var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 'id';
            var1 = var3 in var2;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2.type;
            var2 = _closure1_slot6;
            var2 = var2.BACKGROUND;
            var1 = var3 === var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot9 = var8;
    var7 = function isDefaultBackgroundOption(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = 'number';
            var1 = typeof var3;
            var1 = var2 === var1;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = _closure1_slot5;
            var1 = var3 in var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot10 = var7;
    var6 = function isAnimatedBackgroundOption(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot10;
            var7 = undefined;
            var1 = var1.bind(var7)(var4);
            if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = _closure1_slot9;
            var3 = var1.bind(var7)(var4);
            var1 = !var3;
            var1 = !var1;
            if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 4;
            var3 = var3[var8];
            var6 = var5.bind(var7)(var3);
            var5 = var6.isAnimatedIconHash;
            var3 = var4.asset;
            var3 = var5.bind(var6)(var3);
            if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var7 = var6.bind(var7)(var5);
            var6 = var7.isVideoAssetHash;
            var5 = var4.asset;
            var3 = var6.bind(var7)(var5);
case 14:
            var1 = var3;
case 12:
            _fun0003_ip = 16; continue _fun0003;
case 10:
            var3 = _closure1_slot7;
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
case 16:
            return var1;
        }
    };
    var _closure1_slot11 = var6;
    var5 = function getEffectAnalyticsType(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = null;
            var1 = arg1;
            var2 = var2 != var1;
            var1 = 'None';
            if(!var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var1 = 'Video Background';
case 17:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function getEffectDetailAnalyticsName(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            var1 = 'None';
            if(var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var2 = _closure1_slot9;
            var7 = undefined;
            var3 = var2.bind(var7)(var5);
            var2 = 'Custom';
            if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var3 = 'Blur';
            var6 = 'blur';
            if(!(var6 !== var5)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var6 = _closure1_slot5;
            var8 = var6.OPTION_1;
            var6 = 'Cybercity';
            if(!(var8 !== var5)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var8 = _closure1_slot5;
            var8 = var8.OPTION_2;
            var6 = 'Discord the Movie';
            if(!(var8 !== var5)) { _fun0005_ip = 25; continue _fun0005 }
case 27:
            var8 = _closure1_slot5;
            var8 = var8.OPTION_3;
            var6 = 'Wumpus Vacation';
            if(!(var8 !== var5)) { _fun0005_ip = 25; continue _fun0005 }
case 28:
            var8 = _closure1_slot5;
            var8 = var8.OPTION_4;
            var6 = 'Vaporwave';
            if(!(var8 !== var5)) { _fun0005_ip = 25; continue _fun0005 }
case 29:
            var8 = _closure1_slot5;
            var8 = var8.OPTION_7;
            var6 = 'Capernite Day';
            if(!(var8 !== var5)) { _fun0005_ip = 25; continue _fun0005 }
case 30:
            var8 = _closure1_slot5;
            var8 = var8.OPTION_8;
            var6 = 'Capernite Night';
            if(!(var8 !== var5)) { _fun0005_ip = 25; continue _fun0005 }
case 31:
            var8 = _closure1_slot5;
            var8 = var8.OPTION_9;
            var6 = 'Hacker Den';
            if(!(var8 !== var5)) { _fun0005_ip = 25; continue _fun0005 }
case 32:
            var4 = _closure1_slot5;
            var4 = var4.OPTION_10;
            var6 = undefined;
            if(!(var4 === var5)) { _fun0005_ip = 25; continue _fun0005 }
case 33:
            var6 = 'Wumpice';
case 25:
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = 'Preset - ';
            var3 = var5.bind(var4)(var6);
case 23:
            var2 = var3;
case 21:
            var1 = var2;
case 19:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var11[var1];
    var1 = undefined;
    var9 = var12.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.DefaultVideoBackground;
    var _closure1_slot5 = var12;
    var12 = var9.VideoFilterType;
    var _closure1_slot6 = var12;
    var9 = var9.ANIMATED_DEFAULT_VIDEO_BACKGROUNDS;
    var _closure1_slot7 = var9;
    var9 = 3;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.AnalyticEvents;
    var _closure1_slot8 = var9;
    var9 = 7;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/video_backgrounds/VideoBackgroundUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['isCustomBackgroundOption'] = var8;
    var3['isDefaultBackgroundOption'] = var7;
    var3['isAnimatedBackgroundOption'] = var6;
    var3['getEffectAnalyticsType'] = var5;
    var3['getEffectDetailAnalyticsName'] = var4;
    var4 = function trackBackgroundOptionUpdated(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot4;
            var1 = var2.getGuildId;
            var9 = var1.bind(var2)();
            var1 = var2.getChannelId;
            var10 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = var2.getChannel;
            var11 = var1.bind(var2)(var10);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var2 = var4[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var3 = var5.getVoiceStateMetadata;
            var2 = true;
            var8 = var3.bind(var5)(var9, var10, var2);
            var3 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot8;
            var3 = var2.VIDEO_EFFECT_UPDATED;
            var2 = {};
            var12 = arg2;
            var2['location'] = var12;
            var12 = _closure1_slot12;
            var12 = var12.bind(var1)(var7);
            var2['effect_type'] = var12;
            var12 = _closure1_slot13;
            var12 = var12.bind(var1)(var7);
            var2['effect_detail'] = var12;
            var12 = arg3;
            var2['effect_state'] = var12;
            var2['channel_id'] = var10;
            var10 = null;
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var10 = var11.type;
case 34:
            var2['channel_type'] = var10;
            var2['guild_id'] = var9;
            var9 = var8.voice_state_count;
            var2['voice_state_count'] = var9;
            var8 = var8.video_stream_count;
            var2['video_stream_count'] = var8;
            var9 = _closure1_slot4;
            var8 = var9.getMediaSessionId;
            var8 = var8.bind(var9)();
            var2['media_session_id'] = var8;
            var8 = var9.getRTCConnectionId;
            var8 = var8.bind(var9)();
            var2['rtc_connection_id'] = var8;
            var6 = _closure1_slot11;
            var6 = var6.bind(var1)(var7);
            var2['is_animated'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackBackgroundOptionUpdated'] = var4;
    var4 = function trackBackgroundOptionAdded(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot8;
        var3 = var2.VIDEO_BACKGROUND_ADDED;
        var2 = {};
        var7 = _closure1_slot11;
        var6 = arg1;
        var6 = var7.bind(var1)(var6);
        var2['is_animated'] = var6;
        var6 = arg2;
        var2['is_video'] = var6;
        var6 = arg3;
        var2['is_from_tenor'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackBackgroundOptionAdded'] = var4;
    var4 = function trackBackgroundOptionDeleted(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot8;
        var3 = var2.VIDEO_BACKGROUND_DELETED;
        var2 = {};
        var7 = _closure1_slot11;
        var6 = arg1;
        var6 = var7.bind(var1)(var6);
        var2['is_animated'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackBackgroundOptionDeleted'] = var4;
    var4 = function getVideoBackgroundProtoFromOption(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            var2 = _closure1_slot9;
            var1 = undefined;
            var1 = var2.bind(var1)(var4);
            if(var1) { _fun0007_ip = 15; continue _fun0007 }
case 5:
            var3 = 'blur';
            if(!(var3 !== var4)) { _fun0007_ip = 38; continue _fun0007 }
case 4:
            var1 = {};
            var2 = 'presetOption';
            var1['oneofKind'] = var2;
            var1['presetOption'] = var4;
            _fun0007_ip = 39; continue _fun0007;
case 38:
            var2 = {};
            var2['oneofKind'] = var3;
            var3 = {};
            var5 = true;
            var3['useBlur'] = var5;
            var2['blur'] = var3;
            var1 = var2;
case 39:
            _fun0007_ip = 40; continue _fun0007;
case 15:
            var2 = {};
            var3 = 'customAsset';
            var2['oneofKind'] = var3;
            var3 = {};
            var5 = var4.id;
            var3['id'] = var5;
            var4 = var4.asset;
            var3['assetHash'] = var4;
            var2['customAsset'] = var3;
            var1 = var2;
case 40:
            _fun0007_ip = 41; continue _fun0007;
case 36:
            var2 = {};
            var3 = undefined;
            var2['oneofKind'] = var3;
            var1 = var2;
case 41:
            return var1;
        }
    };
    var3['getVideoBackgroundProtoFromOption'] = var4;
    var2 = function getVideoBackgroundOptionFromProto(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 42; continue _fun0008 }
case 3:
            var4 = var3.oneofKind;
            var2 = undefined;
            if(!(var2 !== var4)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var6 = var3.oneofKind;
            var4 = 'customAsset';
            if(!(var4 !== var6)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var4 = 'blur';
            if(!(var4 !== var6)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
            var5 = 'presetOption';
            if(!(var5 !== var6)) { _fun0008_ip = 6; continue _fun0008 }
case 48:
            return var2;
case 6:
            var2 = var3.presetOption;
            return var2;
case 46:
            var2 = var3.blur;
            var5 = var2.useBlur;
            var2 = null;
            if(!var5) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var2 = var4;
case 49:
            return var2;
case 44:
            var2 = {};
            var4 = _closure1_slot6;
            var4 = var4.BACKGROUND;
            var2['type'] = var4;
            var4 = var3.customAsset;
            var4 = var4.id;
            var2['id'] = var4;
            var4 = arg2;
            var2['user_id'] = var4;
            var3 = var3.customAsset;
            var3 = var3.assetHash;
            var2['asset'] = var3;
            return var2;
case 42:
            return var1;
        }
    };
    var3['getVideoBackgroundOptionFromProto'] = var2;
    return var1;
})();