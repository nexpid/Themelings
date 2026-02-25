// app/modules/go_live/StreamSettingsConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var16;
    var19 = function makeButton(arg1, arg2, arg3) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var1['value'] = var3;
        var5 = function get label() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = global;
                var4 = var1.String;
                var3 = _closure2_slot0;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = var3.bind(var2)();
case 4:
                return var1;
            }
        };
        var4 = undefined;
        var3 = 'label';
        Object.defineProperty(var1, var3, {get: var5, set: var4, enumerable: true});
        var3 = function get subtext() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot2;
                var1 = null;
                var4 = var1 != var3;
                var3 = undefined;
                var1 = undefined;
                if(!var4) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var2 = _closure2_slot2;
                var1 = var2.bind(var3)();
case 5:
                return var1;
            }
        };
        var2 = 'subtext';
        Object.defineProperty(var1, var2, {get: var3, set: var4, enumerable: true});
        return var1;
    };
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var7 = 0;
    var2 = var16[var7];
    var1 = undefined;
    var2 = var15.bind(var1)(var2);
    var5 = var2.BoostedGuildTiers;
    var6 = 1;
    var2 = var16[var6];
    var2 = var15.bind(var1)(var2);
    var4 = var2.StreamQualities;
    var13 = {};
    var8 = 480;
    var13['RESOLUTION_480'] = var8;
    var2 = 'RESOLUTION_480';
    var13[var8] = var2;
    var8 = 720;
    var13['RESOLUTION_720'] = var8;
    var2 = 'RESOLUTION_720';
    var13[var8] = var2;
    var8 = 1080;
    var13['RESOLUTION_1080'] = var8;
    var2 = 'RESOLUTION_1080';
    var13[var8] = var2;
    var8 = 1440;
    var13['RESOLUTION_1440'] = var8;
    var2 = 'RESOLUTION_1440';
    var13[var8] = var2;
    var13['RESOLUTION_SOURCE'] = var7;
    var2 = 'RESOLUTION_SOURCE';
    var13[var7] = var2;
    var _closure1_slot2 = var13;
    var12 = {};
    var7 = 5;
    var12['FPS_5'] = var7;
    var2 = 'FPS_5';
    var12[var7] = var2;
    var7 = 15;
    var12['FPS_15'] = var7;
    var2 = 'FPS_15';
    var12[var7] = var2;
    var7 = 30;
    var12['FPS_30'] = var7;
    var2 = 'FPS_30';
    var12[var7] = var2;
    var7 = 60;
    var12['FPS_60'] = var7;
    var2 = 'FPS_60';
    var12[var7] = var2;
    var _closure1_slot3 = var12;
    var11 = {};
    var11['PRESET_VIDEO'] = var6;
    var2 = 'PRESET_VIDEO';
    var11[var6] = var2;
    var6 = 2;
    var11['PRESET_DOCUMENTS'] = var6;
    var2 = 'PRESET_DOCUMENTS';
    var11[var6] = var2;
    var14 = 3;
    var11['PRESET_CUSTOM'] = var14;
    var2 = 'PRESET_CUSTOM';
    var11[var14] = var2;
    var6 = 4;
    var11['PRESET_AUTO'] = var6;
    var2 = 'PRESET_AUTO';
    var11[var6] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_SOURCE;
    var2['resolution'] = var6;
    var6 = var12.FPS_60;
    var2['fps'] = var6;
    var6 = var4.HIGH_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9 = new Array(18);
    var9[0] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_SOURCE;
    var2['resolution'] = var6;
    var6 = var12.FPS_30;
    var2['fps'] = var6;
    var6 = var4.HIGH_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9[1] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_SOURCE;
    var2['resolution'] = var6;
    var6 = var12.FPS_15;
    var2['fps'] = var6;
    var6 = var4.HIGH_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9[2] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_SOURCE;
    var2['resolution'] = var6;
    var6 = var12.FPS_5;
    var2['fps'] = var6;
    var6 = var11.PRESET_DOCUMENTS;
    var2['preset'] = var6;
    var9[3] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_1440;
    var2['resolution'] = var6;
    var6 = var12.FPS_60;
    var2['fps'] = var6;
    var6 = var5.TIER_2;
    var2['guildPremiumTier'] = var6;
    var6 = var4.MID_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9[4] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_1440;
    var2['resolution'] = var6;
    var6 = var12.FPS_30;
    var2['fps'] = var6;
    var6 = var5.TIER_2;
    var2['guildPremiumTier'] = var6;
    var6 = var4.MID_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9[5] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_1440;
    var2['resolution'] = var6;
    var6 = var12.FPS_15;
    var2['fps'] = var6;
    var6 = var5.TIER_2;
    var2['guildPremiumTier'] = var6;
    var6 = var4.MID_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9[6] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_1080;
    var2['resolution'] = var6;
    var6 = var12.FPS_60;
    var2['fps'] = var6;
    var6 = var5.TIER_2;
    var2['guildPremiumTier'] = var6;
    var6 = var4.MID_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9[7] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_1080;
    var2['resolution'] = var6;
    var6 = var12.FPS_30;
    var2['fps'] = var6;
    var6 = var5.TIER_2;
    var2['guildPremiumTier'] = var6;
    var6 = var4.MID_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9[8] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_1080;
    var2['resolution'] = var6;
    var6 = var12.FPS_15;
    var2['fps'] = var6;
    var6 = var5.TIER_2;
    var2['guildPremiumTier'] = var6;
    var6 = var4.MID_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9[9] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_720;
    var2['resolution'] = var6;
    var6 = var12.FPS_60;
    var2['fps'] = var6;
    var6 = var5.TIER_1;
    var2['guildPremiumTier'] = var6;
    var6 = var4.MID_STREAMING_QUALITY;
    var2['quality'] = var6;
    var9[10] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_720;
    var2['resolution'] = var6;
    var6 = var12.FPS_30;
    var2['fps'] = var6;
    var9[11] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_720;
    var2['resolution'] = var6;
    var6 = var12.FPS_15;
    var2['fps'] = var6;
    var9[12] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_720;
    var2['resolution'] = var6;
    var6 = var12.FPS_5;
    var2['fps'] = var6;
    var9[13] = var2;
    var2 = {};
    var6 = var13.RESOLUTION_480;
    var2['resolution'] = var6;
    var6 = var12.FPS_60;
    var2['fps'] = var6;
    var5 = var5.TIER_1;
    var2['guildPremiumTier'] = var5;
    var4 = var4.MID_STREAMING_QUALITY;
    var2['quality'] = var4;
    var9[14] = var2;
    var2 = {};
    var4 = var13.RESOLUTION_480;
    var2['resolution'] = var4;
    var4 = var12.FPS_30;
    var2['fps'] = var4;
    var9[15] = var2;
    var2 = {};
    var4 = var13.RESOLUTION_480;
    var2['resolution'] = var4;
    var4 = var12.FPS_15;
    var2['fps'] = var4;
    var9[16] = var2;
    var2 = {};
    var4 = var13.RESOLUTION_480;
    var2['resolution'] = var4;
    var4 = var12.FPS_5;
    var2['fps'] = var4;
    var9[17] = var2;
    var2 = var13.RESOLUTION_720;
    var2 = var19.bind(var1)(var2);
    var8 = new Array(4);
    var8[0] = var2;
    var2 = var13.RESOLUTION_1080;
    var2 = var19.bind(var1)(var2);
    var8[1] = var2;
    var2 = var13.RESOLUTION_1440;
    var2 = var19.bind(var1)(var2);
    var8[2] = var2;
    var4 = var13.RESOLUTION_SOURCE;
    var2 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.XjXqzh;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2 = var19.bind(var1)(var4, var2);
    var8[3] = var2;
    var2 = var13.RESOLUTION_720;
    var2 = var19.bind(var1)(var2);
    var7 = new Array(3);
    var7[0] = var2;
    var2 = var13.RESOLUTION_1080;
    var2 = var19.bind(var1)(var2);
    var7[1] = var2;
    var2 = var13.RESOLUTION_1440;
    var2 = var19.bind(var1)(var2);
    var7[2] = var2;
    var6 = function makeResolutionLabel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot2;
            var1 = var1.RESOLUTION_SOURCE;
            if(!(var6 !== var1)) { _fun0003_ip = 7; continue _fun0003 }
case 6:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var4 = var8[var1];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var7.bind(var3)(var1);
            var1 = var1.t;
            var3 = var1.TEOC0I;
            var1 = {};
            var1['resolution'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 8; continue _fun0003;
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.XjXqzh;
            var1 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot4 = var6;
    var4 = var13.RESOLUTION_480;
    var2 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot2;
        var2 = var1.RESOLUTION_480;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2 = var19.bind(var1)(var4, var2);
    var5 = new Array(5);
    var5[0] = var2;
    var4 = var13.RESOLUTION_720;
    var2 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot2;
        var2 = var1.RESOLUTION_720;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2 = var19.bind(var1)(var4, var2);
    var5[1] = var2;
    var4 = var13.RESOLUTION_1080;
    var2 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot2;
        var2 = var1.RESOLUTION_1080;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2 = var19.bind(var1)(var4, var2);
    var5[2] = var2;
    var4 = var13.RESOLUTION_1440;
    var2 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot2;
        var2 = var1.RESOLUTION_1440;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2 = var19.bind(var1)(var4, var2);
    var5[3] = var2;
    var4 = var13.RESOLUTION_SOURCE;
    var2 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot2;
        var2 = var1.RESOLUTION_SOURCE;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2 = var19.bind(var1)(var4, var2);
    var5[4] = var2;
    var2 = var12.FPS_15;
    var2 = var19.bind(var1)(var2);
    var4 = new Array(3);
    var4[0] = var2;
    var2 = var12.FPS_30;
    var2 = var19.bind(var1)(var2);
    var4[1] = var2;
    var2 = var12.FPS_60;
    var2 = var19.bind(var1)(var2);
    var4[2] = var2;
    var17 = var12.FPS_15;
    var2 = function() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 2;
        var3 = var7[var1];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var7[var1];
        var1 = var6.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.bW+JCW;
        var1 = {};
        var5 = _closure1_slot3;
        var5 = var5.FPS_15;
        var1['value'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var17 = var19.bind(var1)(var17, var2);
    var2 = new Array(3);
    var2[0] = var17;
    var18 = var12.FPS_30;
    var17 = function() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 2;
        var3 = var7[var1];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var7[var1];
        var1 = var6.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.bW+JCW;
        var1 = {};
        var5 = _closure1_slot3;
        var5 = var5.FPS_30;
        var1['value'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var17 = var19.bind(var1)(var18, var17);
    var2[1] = var17;
    var18 = var12.FPS_60;
    var17 = function() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 2;
        var3 = var7[var1];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var7[var1];
        var1 = var6.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.bW+JCW;
        var1 = {};
        var5 = _closure1_slot3;
        var5 = var5.FPS_60;
        var1['value'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var17 = var19.bind(var1)(var18, var17);
    var2[2] = var17;
    var14 = var16[var14];
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/go_live/StreamSettingsConstants.tsx';
    var14 = var15.bind(var16)(var14);
    var3['ApplicationStreamResolutions'] = var13;
    var13 = function getApplicationResolution(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot2;
            var2 = var2.RESOLUTION_480;
            if(!(var2 !== var5)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var2 = _closure1_slot2;
            var2 = var2.RESOLUTION_720;
            if(!(var2 !== var5)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var2 = _closure1_slot2;
            var2 = var2.RESOLUTION_1080;
            if(!(var2 !== var5)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var2 = _closure1_slot2;
            var2 = var2.RESOLUTION_1440;
            if(!(var2 !== var5)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var2 = _closure1_slot2;
            var2 = var2.RESOLUTION_SOURCE;
            if(!(var2 !== var5)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Unknown resolution: ';
            var6 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var2 = new var7[var4](var6, var5);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 17:
            var2 = _closure1_slot2;
            var2 = var2.RESOLUTION_SOURCE;
            return var2;
case 15:
            var2 = _closure1_slot2;
            var2 = var2.RESOLUTION_1440;
            return var2;
case 13:
            var2 = _closure1_slot2;
            var2 = var2.RESOLUTION_1080;
            return var2;
case 11:
            var2 = _closure1_slot2;
            var2 = var2.RESOLUTION_720;
            return var2;
case 9:
            var1 = _closure1_slot2;
            var1 = var1.RESOLUTION_480;
            return var1;
        }
    };
    var3['getApplicationResolution'] = var13;
    var3['ApplicationStreamFPS'] = var12;
    var3['ApplicationStreamPresets'] = var11;
    var10 = function getApplicationFramerate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot3;
            var2 = var2.FPS_5;
            if(!(var2 !== var5)) { _fun0005_ip = 19; continue _fun0005 }
case 10:
            var2 = _closure1_slot3;
            var2 = var2.FPS_15;
            if(!(var2 !== var5)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var2 = _closure1_slot3;
            var2 = var2.FPS_30;
            if(!(var2 !== var5)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var2 = _closure1_slot3;
            var2 = var2.FPS_60;
            if(!(var2 !== var5)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Unknown frame rate: ';
            var6 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var2 = new var7[var4](var6, var5);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 24:
            var2 = _closure1_slot3;
            var2 = var2.FPS_60;
            return var2;
case 22:
            var2 = _closure1_slot3;
            var2 = var2.FPS_30;
            return var2;
case 20:
            var2 = _closure1_slot3;
            var2 = var2.FPS_15;
            return var2;
case 19:
            var1 = _closure1_slot3;
            var1 = var1.FPS_5;
            return var1;
        }
    };
    var3['getApplicationFramerate'] = var10;
    var3['ApplicationStreamSettingRequirements'] = var9;
    var3['ApplicationStreamResolutionButtons'] = var8;
    var3['GoLiveDeviceResolutionButtons'] = var7;
    var3['makeResolutionLabel'] = var6;
    var3['ApplicationStreamResolutionButtonsWithSuffixLabel'] = var5;
    var3['ApplicationStreamFPSButtons'] = var4;
    var3['ApplicationStreamFPSButtonsWithSuffixLabel'] = var2;
    return var1;
})();