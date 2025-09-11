// app/utils/StreamQualityUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function isPremiumRequirement(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.quality;
            var3 = null;
            var1 = var3 != var1;
            if(var1) { _fun0001_ip = 28; continue _fun0001 }
 18:
            var2 = var2.guildPremiumTier;
            var1 = var3 != var2;
 28:
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var5 = function getPremiumRequirement(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot12;
        var2 = var3.find;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var3 = var2.preset;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0002_ip = 35; continue _fun0002 }
 18:
                var4 = var2.preset;
                var3 = _closure2_slot0;
                var1 = var4 === var3;
 35:
                if(!var1) { _fun0002_ip = 55; continue _fun0002 }
 38:
                var4 = var2.resolution;
                var3 = _closure2_slot1;
                var1 = var4 === var3;
 55:
                if(!var1) { _fun0002_ip = 75; continue _fun0002 }
 58:
                var3 = var2.fps;
                var2 = _closure2_slot2;
                var1 = var3 === var2;
 75:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot18 = var5;
    var4 = function getMaxQuality(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = var3.maxResolution;
            var4 = null;
            var2 = var4 == var1;
            var1 = null;
            if(var2) { _fun0003_ip = 62; continue _fun0003 }
 20:
            var2 = var3.maxFrameRate;
            var2 = var4 == var2;
            var1 = null;
            if(var2) { _fun0003_ip = 62; continue _fun0003 }
 35:
            var2 = {};
            var4 = var3.maxFrameRate;
            var2['maxFrameRate'] = var4;
            var3 = var3.maxResolution;
            var2['maxResolution'] = var3;
            var1 = var2;
 62:
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var11 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.ApplicationStreamFPS;
    var _closure1_slot10 = var10;
    var10 = var7.ApplicationStreamResolutions;
    var _closure1_slot11 = var10;
    var10 = var7.ApplicationStreamSettingRequirements;
    var _closure1_slot12 = var10;
    var10 = var7.getApplicationFramerate;
    var _closure1_slot13 = var10;
    var7 = var7.getApplicationResolution;
    var _closure1_slot14 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.StreamQualitiesToPremiumType;
    var _closure1_slot15 = var7;
    var7 = 9;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ResolutionTypes;
    var _closure1_slot16 = var7;
    var7 = 13;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/StreamQualityUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function isPremiumResolution(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = null;
            if(!(var3 == var1)) { _fun0004_ip = 15; continue _fun0004 }
 11:
            var4 = undefined;
            return var4;
 15:
            var4 = var1.maxResolution;
            var6 = var4.type;
            var5 = _closure1_slot16;
            var5 = var5.SOURCE;
            if(!(var6 !== var5)) { _fun0004_ip = 56; continue _fun0004 }
 43:
            var5 = var1.maxResolution;
            var7 = var5.height;
            _fun0004_ip = 66; continue _fun0004;
 56:
            var5 = _closure1_slot11;
            var7 = var5.RESOLUTION_SOURCE;
 66:
            var5 = _closure1_slot14;
            var6 = undefined;
            var5 = var5.bind(var6)(var7);
            var _closure2_slot0 = var5;
            var5 = _closure1_slot13;
            var1 = var1.maxFrameRate;
            var5 = var5.bind(var6)(var1);
            var1 = _closure1_slot10;
            var1 = var1.FPS_5;
            var1 = var5 !== var1;
            if(!var1) { _fun0004_ip = 137; continue _fun0004 }
 113:
            var5 = _closure1_slot12;
            var4 = var5.find;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arg1;
                    var2 = var4.resolution;
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    if(!var1) { _fun0005_ip = 46; continue _fun0005 }
 23:
                    var3 = var4.fps;
                    var2 = _closure1_slot10;
                    var2 = var2.FPS_5;
                    var1 = var3 !== var2;
 46:
                    if(!var1) { _fun0005_ip = 66; continue _fun0005 }
 49:
                    var3 = _closure1_slot17;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = !var2;
 66:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var1 = var3 == var2;
 137:
            return var1;
        }
    };
    var3['isPremiumResolution'] = var7;
    var7 = function isPremiumFPS(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 == var4)) { _fun0006_ip = 15; continue _fun0006 }
 11:
            var3 = undefined;
            return var3;
 15:
            var6 = _closure1_slot13;
            var5 = var4.maxFrameRate;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var _closure2_slot0 = var4;
            var4 = _closure1_slot12;
            var3 = var4.find;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg1;
                    var2 = var4.fps;
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    if(!var1) { _fun0007_ip = 40; continue _fun0007 }
 23:
                    var3 = _closure1_slot17;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = !var2;
 40:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = var2 == var1;
            return var1;
        }
    };
    var3['isPremiumFPS'] = var7;
    var3['isPremiumRequirement'] = var6;
    var3['getPremiumRequirement'] = var5;
    var5 = function getResolutionText(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var6 = arg1;
            var3 = var6.type;
            var1 = _closure1_slot16;
            var1 = var1.SOURCE;
            if(!(var3 !== var1)) { _fun0008_ip = 97; continue _fun0008 }
 25:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var4 = var8[var1];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var7.bind(var3)(var1);
            var1 = var1.t;
            var3 = var1.TEOC0N;
            var1 = {};
            var6 = var6.height;
            var1['resolution'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0008_ip = 154; continue _fun0008;
 97:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.XjXqzs;
            var1 = var3.bind(var4)(var2);
 154:
            return var1;
        }
    };
    var3['getResolutionText'] = var5;
    var5 = function getFPSText(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.Qb44XF;
        var1 = {};
        var5 = arg1;
        var1['fps'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getFPSText'] = var5;
    var3['getMaxQuality'] = var4;
    var4 = function useMaxQuality(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 11;
        var5 = var8[var3];
        var4 = undefined;
        var11 = var7.bind(var4)(var5);
        var10 = var11.useStateFromStoresObject;
        var5 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var5;
        var5 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var10.bind(var11)(var9, var5);
        var _closure2_slot1 = var5;
        var3 = var8[var3];
        var8 = var7.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var7.bind(var8)(var4, var3);
        var _closure2_slot2 = var7;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = _closure2_slot2;
                var1 = _closure2_slot0;
                var1 = var1.user;
                var1 = var1.id;
                if(!(var2 !== var1)) { _fun0009_ip = 45; continue _fun0009 }
 25:
                var4 = _closure1_slot19;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                _fun0009_ip = 130; continue _fun0009;
 45:
                var2 = {};
                var4 = _closure2_slot1;
                var3 = var4.fps;
                var2['maxFrameRate'] = var3;
                var3 = {};
                var5 = var4.resolution;
                var3['height'] = var5;
                var5 = 0;
                var3['width'] = var5;
                var4 = var4.resolution;
                if(!(var5 !== var4)) { _fun0009_ip = 105; continue _fun0009 }
 90:
                var4 = _closure1_slot16;
                var4 = var4.FIXED;
                _fun0009_ip = 118; continue _fun0009;
 105:
                var5 = _closure1_slot16;
                var4 = var5.SOURCE;
 118:
                var3['type'] = var4;
                var2['maxResolution'] = var3;
                var1 = var2;
 130:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useMaxQuality'] = var4;
    var2 = function trackStreamSettingsUpdate(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var6 = arg3;
            var2 = _closure1_slot18;
            var1 = undefined;
            var10 = var2.bind(var1)(var8, var7, var6);
            var3 = _closure1_slot8;
            var2 = var3.getCurrentUser;
            var14 = var2.bind(var3)();
            var3 = _closure1_slot7;
            var2 = var3.getGuildId;
            var4 = var2.bind(var3)();
            var9 = null;
            var2 = var9 != var4;
            var13 = null;
            if(!var2) { _fun0010_ip = 77; continue _fun0010 }
 63:
            var3 = _closure1_slot6;
            var2 = var3.getGuild;
            var13 = var2.bind(var3)(var4);
 77:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot9;
            var3 = var2.STREAM_SETTINGS_UPDATE;
            var2 = {};
            var15 = var9 == var14;
            var11 = undefined;
            if(var15) { _fun0010_ip = 129; continue _fun0010 }
 123:
            var11 = var14.premiumType;
 129:
            var2['user_premium_tier'] = var11;
            var14 = var9 == var13;
            var11 = undefined;
            if(var14) { _fun0010_ip = 149; continue _fun0010 }
 143:
            var11 = var13.premiumTier;
 149:
            var2['guild_premium_tier'] = var11;
            var13 = var9 == var10;
            var11 = undefined;
            if(var13) { _fun0010_ip = 171; continue _fun0010 }
 165:
            var11 = var10.quality;
 171:
            var13 = var9 != var11;
            var11 = null;
            if(!var13) { _fun0010_ip = 194; continue _fun0010 }
 180:
            var13 = _closure1_slot15;
            var12 = var10.quality;
            var11 = var13[var12];
 194:
            var2['stream_quality_user_premium_tier'] = var11;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0010_ip = 216; continue _fun0010 }
 210:
            var9 = var10.guildPremiumTier;
 216:
            var2['stream_quality_guild_premium_tier'] = var9;
            var2['stream_quality_preset'] = var8;
            var2['stream_quality_resolution'] = var7;
            var2['stream_quality_frame_rate'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackStreamSettingsUpdate'] = var2;
    return var1;
})();