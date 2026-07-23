// app/modules/go_live/native/MobileGoLiveActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var5 = true;
    var4['value'] = var5;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var14.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var7[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var10 = var4.ApplicationStreamPresets;
    var _closure1_slot11 = var10;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ApplicationStreamStates;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot14 = var9;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var7[var4];
    var11 = var6.bind(var1)(var4);
    var9 = var11.createStyles;
    var4 = {};
    var12 = {};
    var13 = 13;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_24;
    var12['gap'] = var15;
    var4['wrapper'] = var12;
    var12 = {};
    var15 = 'center';
    var12['textAlign'] = var15;
    var4['header'] = var12;
    var12 = {};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_16;
    var12['marginHorizontal'] = var15;
    var4['section'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var12['gap'] = var13;
    var4['highQualityLabel'] = var12;
    var4 = var9.bind(var11)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var9 = var10.PRESET_MOBILE_DEFAULT;
    var4['preset'] = var9;
    var4['enabled'] = var5;
    var9 = new Array(3);
    var9[0] = var4;
    var4 = {};
    var11 = var10.PRESET_MOBILE_PERFORMANCE;
    var4['preset'] = var11;
    var11 = 14;
    var11 = var7[var11];
    var12 = var6.bind(var1)(var11);
    var11 = var12.isIOS;
    var11 = var11.bind(var12)();
    var11 = !var11;
    var4['enabled'] = var11;
    var9[1] = var4;
    var4 = {};
    var10 = var10.PRESET_MOBILE_HIGH_QUALITY;
    var4['preset'] = var10;
    var4['enabled'] = var5;
    var9[2] = var4;
    var5 = var9.filter;
    var4 = function(arg1) {
        var1 = arg1;
        var1 = var1.enabled;
        return var1;
    };
    var9 = var5.bind(var9)(var4);
    var5 = var9.map;
    var4 = function(arg1) {
        var1 = arg1;
        var1 = var1.preset;
        return var1;
    };
    var4 = var5.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var5 = var8.memo;
    var4 = function MobileGoLiveActionSheet() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = function getTableRadioRowConfig(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 20;
                    var2 = var6[var1];
                    var12 = undefined;
                    var7 = var9.bind(var12)(var2);
                    var5 = var7.getMaxSettingsForPreset;
                    var4 = _closure1_slot11;
                    var2 = var4.PRESET_MOBILE_DEFAULT;
                    var18 = var5.bind(var7)(var2);
                    var2 = var6[var1];
                    var7 = var9.bind(var12)(var2);
                    var5 = var7.getMaxSettingsForPreset;
                    var2 = var4.PRESET_MOBILE_PERFORMANCE;
                    var17 = var5.bind(var7)(var2);
                    var1 = var6[var1];
                    var5 = var9.bind(var12)(var1);
                    var2 = var5.getMaxSettingsForPreset;
                    var1 = var4.PRESET_MOBILE_HIGH_QUALITY;
                    var10 = var2.bind(var5)(var1);
                    var1 = {};
                    var1['value'] = var3;
                    var2 = {};
                    var5 = var4.PRESET_MOBILE_DEFAULT;
                    var4 = {};
                    var13 = _closure1_slot14;
                    var7 = 27;
                    var7 = var6[var7];
                    var7 = var9.bind(var12)(var7);
                    var8 = var7.MobilePhoneIcon;
                    var7 = {};
                    var7 = var13.bind(var12)(var8, var7);
                    var4['icon'] = var7;
                    var8 = 28;
                    var7 = var6[var8];
                    var7 = var9.bind(var12)(var7);
                    var9 = var7.intl;
                    var7 = var9.string;
                    var14 = _closure1_slot1;
                    var13 = 29;
                    var6 = var6[var13];
                    var6 = var14.bind(var12)(var6);
                    var6 = var6["2qmQ8N"];
                    var6 = var7.bind(var9)(var6);
                    var4['label'] = var6;
                    var7 = null;
                    var14 = var7 != var18;
                    var6 = '';
                    var9 = var6;
                    if(!var14) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var16 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var15 = var14[var8];
                    var15 = var16.bind(var12)(var15);
                    var16 = var15.intl;
                    var15 = var16.formatToPlainString;
                    var19 = _closure1_slot1;
                    var14 = var14[var13];
                    var14 = var19.bind(var12)(var14);
                    var14 = var14.ibH7vy;
                    var9 = var15.bind(var16)(var14, var18);
case 2:
                    var4['subLabel'] = var9;
                    var2[4] = var4;
                    var4 = _closure1_slot11;
                    var5 = var4.PRESET_MOBILE_PERFORMANCE;
                    var4 = {};
                    var18 = _closure1_slot14;
                    var15 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var14 = 30;
                    var14 = var9[var14];
                    var14 = var15.bind(var12)(var14);
                    var16 = var14.SpeedometerIcon;
                    var14 = {};
                    var14 = var18.bind(var12)(var16, var14);
                    var4['icon'] = var14;
                    var14 = var9[var8];
                    var14 = var15.bind(var12)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var16 = _closure1_slot1;
                    var9 = var9[var13];
                    var9 = var16.bind(var12)(var9);
                    var9 = var9["5eO4/m"];
                    var9 = var14.bind(var15)(var9);
                    var4['label'] = var9;
                    var14 = var7 != var17;
                    var9 = var6;
                    if(!var14) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var16 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var15 = var14[var8];
                    var15 = var16.bind(var12)(var15);
                    var16 = var15.intl;
                    var15 = var16.formatToPlainString;
                    var18 = _closure1_slot1;
                    var14 = var14[var13];
                    var14 = var18.bind(var12)(var14);
                    var14 = var14.fN0UQY;
                    var9 = var15.bind(var16)(var14, var17);
case 4:
                    var4['subLabel'] = var9;
                    var2[4] = var4;
                    var4 = _closure1_slot11;
                    var5 = var4.PRESET_MOBILE_HIGH_QUALITY;
                    var4 = {};
                    var19 = _closure1_slot14;
                    var18 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var9 = 31;
                    var9 = var22[var9];
                    var9 = var18.bind(var12)(var9);
                    var14 = var9.ImageSparkleIcon;
                    var9 = {};
                    var9 = var19.bind(var12)(var14, var9);
                    var4['icon'] = var9;
                    var15 = _closure1_slot15;
                    var21 = _closure1_slot1;
                    var9 = 32;
                    var9 = var22[var9];
                    var14 = var21.bind(var12)(var9);
                    var9 = {};
                    var16 = _closure2_slot6;
                    var16 = var16.highQualityLabel;
                    var9['style'] = var16;
                    var16 = 33;
                    var16 = var22[var16];
                    var16 = var18.bind(var12)(var16);
                    var17 = var16.Text;
                    var16 = {'variant': 'text-md/semibold', 'color': 'text-strong'};
                    var20 = var22[var8];
                    var20 = var18.bind(var12)(var20);
                    var24 = var20.intl;
                    var23 = var24.string;
                    var20 = var22[var13];
                    var20 = var21.bind(var12)(var20);
                    var20 = var20.nMcXo1;
                    var20 = var23.bind(var24)(var20);
                    var16['children'] = var20;
                    var17 = var19.bind(var12)(var17, var16);
                    var16 = new Array(2);
                    var16[0] = var17;
                    var17 = 34;
                    var17 = var22[var17];
                    var17 = var18.bind(var12)(var17);
                    var18 = var17.BaseIconImage;
                    var17 = {};
                    var20 = 35;
                    var20 = var22[var20];
                    var20 = var21.bind(var12)(var20);
                    var17['source'] = var20;
                    var20 = 'xs';
                    var17['size'] = var20;
                    var17 = var19.bind(var12)(var18, var17);
                    var16[1] = var17;
                    var9['children'] = var16;
                    var9 = var15.bind(var12)(var14, var9);
                    var4['label'] = var9;
                    var7 = var7 != var10;
                    if(!var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var8 = var7[var8];
                    var8 = var9.bind(var12)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var11 = _closure1_slot1;
                    var7 = var7[var13];
                    var7 = var11.bind(var12)(var7);
                    var7 = var7.q4gYBi;
                    var6 = var8.bind(var9)(var7, var10);
case 6:
                    var4['subLabel'] = var6;
                    var2[4] = var4;
                    var25 = var2[var3];
                    var26 = var1;
                    var2 = copyDataProperties(var26, var25);
                    return var1;
                }
            };
            var _closure2_slot12 = var1;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 19;
            var3 = var12[var1];
            var4 = undefined;
            var7 = var2.bind(var4)(var3);
            var6 = var7.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var6.bind(var7)(var5, var3);
            var3 = var5.preset;
            var14 = var5.soundshareEnabled;
            var5 = var12[var1];
            var8 = var2.bind(var4)(var5);
            var7 = var8.useStateFromStoresObject;
            var5 = _closure1_slot10;
            var6 = new Array(4);
            var6[0] = var5;
            var5 = _closure1_slot9;
            var6[1] = var5;
            var5 = _closure1_slot7;
            var6[2] = var5;
            var5 = _closure1_slot8;
            var6[3] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var1 = var3.getCurrentUser;
                    var3 = var1.bind(var3)();
                    var5 = _closure1_slot7;
                    var4 = var5.getChannel;
                    var6 = _closure1_slot9;
                    var1 = var6.getVoiceChannelId;
                    var1 = var1.bind(var6)();
                    var8 = var4.bind(var5)(var1);
                    var1 = {};
                    var1['user'] = var3;
                    var6 = _closure1_slot8;
                    var5 = var6.getGuild;
                    var4 = null;
                    var7 = var4 == var8;
                    var3 = undefined;
                    if(var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var7 = var8.getGuildId;
                    var3 = var7.bind(var8)();
case 8:
                    var3 = var5.bind(var6)(var3);
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = var3.premiumTier;
case 10:
                    var1['guildPremiumTier'] = var2;
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6, var5);
            var9 = var5.user;
            var _closure2_slot0 = var9;
            var8 = var5.guildPremiumTier;
            var _closure2_slot1 = var8;
            var7 = _closure1_slot4;
            var10 = var7.useCallback;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var8;
            var5 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.canStreamWithPreset;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var4.bind(var5)(var1, var3, var2);
                return var1;
            };
            var11 = var10.bind(var7)(var5, var6);
            var _closure2_slot2 = var11;
            var1 = var12[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getCurrentUserActiveStream;
                    var5 = var1.bind(var2)();
                    var1 = {};
                    var2 = null;
                    var4 = var2 != var5;
                    if(!var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var6 = var5.state;
                    var5 = _closure1_slot12;
                    var5 = var5.ACTIVE;
                    var4 = var6 === var5;
case 12:
                    var1['isStreaming'] = var4;
                    var4 = _closure1_slot6;
                    var3 = var4.getStreamerActiveStreamMetadata;
                    var4 = var3.bind(var4)();
                    var5 = var2 == var4;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 8; continue _fun0004 }
case 14:
                    var3 = var4.sourceId;
case 8:
                    var4 = var2 != var3;
                    var2 = null;
                    if(!var4) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = var3;
case 15:
                    var1['activeSourceId'] = var2;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var2, var1);
            var16 = var1.isStreaming;
            var _closure2_slot3 = var16;
            var2 = var1.activeSourceId;
            var _closure2_slot4 = var2;
            var10 = _closure1_slot1;
            var1 = 21;
            var1 = var12[var1];
            var6 = var10.bind(var4)(var1);
            var5 = var6.useConfig;
            var1 = {};
            var13 = 'MobileGoLiveActionSheet';
            var1['location'] = var13;
            var1 = var5.bind(var6)(var1);
            var15 = var1.goLiveUpsellVariant;
            var1 = 22;
            var5 = var12[var1];
            var6 = var10.bind(var4)(var5);
            var5 = 23;
            var5 = var12[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.MOBILE_GO_LIVE_ACTION_SHEET;
            var5 = var6.bind(var4)(var5);
            var5 = var5.analyticsLocations;
            var _closure2_slot5 = var5;
            var6 = _closure1_slot16;
            var17 = var6.bind(var4)();
            var _closure2_slot6 = var17;
            var6 = var7.useState;
            var10 = _closure1_slot11;
            var10 = var10.PRESET_MOBILE_DEFAULT;
            var10 = var3 === var10;
            if(var10) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = _closure1_slot11;
            var12 = var12.PRESET_MOBILE_PERFORMANCE;
            var10 = var3 === var12;
case 17:
            if(var10) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = _closure1_slot11;
            var12 = var12.PRESET_MOBILE_HIGH_QUALITY;
            var10 = var3 === var12;
case 19:
            if(!var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = _closure1_slot17;
            var10 = var12.includes;
            var10 = var10.bind(var12)(var3);
            if(!var10) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var10 = var11.bind(var4)(var3);
            if(var10) { _fun0001_ip = 24; continue _fun0001 }
case 21:
            var10 = _closure1_slot11;
            var3 = var10.PRESET_MOBILE_DEFAULT;
case 24:
            var3 = var6.bind(var7)(var3);
            var13 = _closure1_slot3;
            var12 = 2;
            var3 = var13.bind(var4)(var3, var12);
            var10 = 0;
            var32 = var3[var10];
            var _closure2_slot7 = var32;
            var6 = 1;
            var3 = var3[var6];
            var _closure2_slot8 = var3;
            var7 = _closure1_slot4;
            var3 = var7.useState;
            var3 = var3.bind(var7)(var14);
            var3 = var13.bind(var4)(var3, var12);
            var30 = var3[var10];
            var _closure2_slot9 = var30;
            var3 = var3[var6];
            var _closure2_slot10 = var3;
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var3 = 24;
            var3 = var33[var3];
            var10 = var29.bind(var4)(var3);
            var6 = var10.useSharedValue;
            var3 = _closure1_slot11;
            var3 = var3.PRESET_MOBILE_HIGH_QUALITY;
            var3 = var11.bind(var4)(var3);
            var3 = !var3;
            var18 = var6.bind(var10)(var3);
            var6 = var7.useCallback;
            var3 = new Array(4);
            var3[0] = var9;
            var3[1] = var8;
            var3[2] = var2;
            var3[3] = var16;
            var2 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var10 = arg1;
                    var5 = arg2;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var8 = var7.bind(var1)(var10, var4, var3);
                    var7 = null;
                    if(!(var7 == var8)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var8 = new Array(0);
case 25:
                    var4 = _closure1_slot3;
                    var3 = 2;
                    var4 = var4.bind(var1)(var8, var3);
                    var3 = 0;
                    var9 = var4[var3];
                    var3 = 1;
                    var8 = var4[var3];
                    if(!(var7 != var9)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    if(!(var7 != var8)) { _fun0005_ip = 27; continue _fun0005 }
case 29:
                    var4 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 25;
                    var3 = var11[var3];
                    var11 = var4.bind(var1)(var3);
                    var4 = var11.updateStreamSettings;
                    var3 = {};
                    var3['preset'] = var10;
                    var3['resolution'] = var9;
                    var3['frameRate'] = var8;
                    var3['soundshareEnabled'] = var5;
                    var3 = var4.bind(var11)(var3);
                    var3 = _closure2_slot3;
                    if(!var3) { _fun0005_ip = 27; continue _fun0005 }
case 30:
                    var4 = {};
                    var3 = {};
                    var3['preset'] = var10;
                    var3['resolution'] = var9;
                    var3['frameRate'] = var8;
                    var4['qualityOptions'] = var3;
                    var3 = _closure1_slot13;
                    var3 = var3.STREAM;
                    var4['context'] = var3;
                    var3 = _closure2_slot4;
                    if(!(var7 != var3)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var3 = {};
                    var6 = _closure2_slot4;
                    var3['sourceId'] = var6;
                    var3['sound'] = var5;
                    var4['desktopSettings'] = var3;
case 31:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 26;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setGoLiveSource;
                    var2 = var2.bind(var3)(var4);
case 27:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var _closure2_slot11 = var2;
            var3 = _closure1_slot14;
            var1 = var33[var1];
            var1 = var29.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var5 = 36;
            var5 = var33[var5];
            var5 = var29.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var31 = true;
            var5['startExpanded'] = var31;
            var7 = 37;
            var7 = var33[var7];
            var7 = var29.bind(var4)(var7);
            var8 = var7.BottomSheetScrollView;
            var7 = {};
            var11 = _closure1_slot15;
            var9 = 38;
            var9 = var33[var9];
            var9 = var29.bind(var4)(var9);
            var10 = var9.SafeAreaPaddingView;
            var9 = {};
            var9['bottom'] = var31;
            var12 = var17.wrapper;
            var9['style'] = var12;
            var12 = 33;
            var12 = var33[var12];
            var12 = var29.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'redesign/heading-18/bold', 'color': 'text-strong', 'accessibilityRole': 'header'};
            var14 = var17.header;
            var12['style'] = var14;
            var21 = 28;
            var14 = var33[var21];
            var14 = var29.bind(var4)(var14);
            var22 = var14.intl;
            var20 = var22.string;
            var35 = _closure1_slot1;
            var24 = 29;
            var14 = var33[var24];
            var14 = var35.bind(var4)(var14);
            var14 = var14.CrNjqp;
            var14 = var20.bind(var22)(var14);
            var12['children'] = var14;
            var13 = var3.bind(var4)(var13, var12);
            var12 = new Array(6);
            var12[0] = var13;
            var13 = 32;
            var14 = var33[var13];
            var20 = var35.bind(var4)(var14);
            var14 = {};
            var22 = var17.section;
            var14['style'] = var22;
            var26 = 39;
            var22 = var33[var26];
            var22 = var29.bind(var4)(var22);
            var25 = var22.TableRowGroup;
            var22 = {};
            var27 = var33[var21];
            var27 = var29.bind(var4)(var27);
            var34 = var27.intl;
            var28 = var34.string;
            var27 = var33[var24];
            var27 = var35.bind(var4)(var27);
            var27 = var27["/XSr8v"];
            var27 = var28.bind(var34)(var27);
            var22['title'] = var27;
            var28 = false;
            var22['hasIcons'] = var28;
            var27 = 40;
            var27 = var33[var27];
            var27 = var29.bind(var4)(var27);
            var29 = var27.TableRadioGroup;
            var27 = {};
            var27['value'] = var32;
            var32 = function onChange(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    if(var3) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 41;
                    var3 = var9[var3];
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.handleShowUpsellAlert;
                    var3 = {};
                    var8 = _closure1_slot0;
                    var7 = 42;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.UpsellTypes;
                    var7 = var7.STREAM_HIGH_QUALITY;
                    var3['initialUpsellKey'] = var7;
                    var7 = _closure2_slot5;
                    var3['analyticsLocations'] = var7;
                    var3 = var4.bind(var6)(var3);
                    _fun0006_ip = 35; continue _fun0006;
case 33:
                    var3 = _closure2_slot8;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure2_slot11;
                    var3 = _closure2_slot9;
                    var3 = var4.bind(var1)(var5, var3);
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.hideActionSheet;
                    var2 = 'MobileGoLiveActionSheet';
                    var2 = var3.bind(var4)(var2);
case 35:
                    return var1;
                }
            };
            var27['onChange'] = var32;
            var27['hasIcons'] = var31;
            var33 = _closure1_slot17;
            var32 = var33.map;
            var31 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot14;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 43;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TableRadioRow;
                var1 = {};
                var6 = _closure2_slot12;
                var8 = var6.bind(var3)(var5);
                var9 = var1;
                var6 = copyDataProperties(var9, var8);
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var31 = var32.bind(var33)(var31);
            var27['children'] = var31;
            var27 = var3.bind(var4)(var29, var27);
            var22['children'] = var27;
            var22 = var3.bind(var4)(var25, var22);
            var14['children'] = var22;
            var14 = var3.bind(var4)(var20, var14);
            var12[1] = var14;
            var14 = 'one-step';
            var14 = var14 === var15;
            if(!var14) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var20 = var18.get;
            var14 = var20.bind(var18)();
case 37:
            if(!var14) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var25 = _closure1_slot14;
            var29 = _closure1_slot1;
            var33 = _closure1_slot2;
            var20 = var33[var13];
            var22 = var29.bind(var4)(var20);
            var20 = {};
            var27 = var17.section;
            var20['style'] = var27;
            var27 = 44;
            var27 = var33[var27];
            var29 = var29.bind(var4)(var27);
            var27 = {};
            var32 = _closure1_slot0;
            var31 = 45;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.EntitlementFeatureNames;
            var31 = var31.STREAM_HIGH_QUALITY;
            var27['featureName'] = var31;
            var27['shouldShow'] = var18;
            var27 = var25.bind(var4)(var29, var27);
            var20['children'] = var27;
            var14 = var25.bind(var4)(var22, var20);
case 39:
            var12[2] = var14;
            var14 = 'two-step';
            var14 = var14 === var15;
            if(!var14) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var15 = var18.get;
            var14 = var15.bind(var18)();
case 41:
            if(!var14) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var20 = _closure1_slot14;
            var32 = _closure1_slot1;
            var27 = _closure1_slot2;
            var15 = var27[var13];
            var18 = var32.bind(var4)(var15);
            var15 = {};
            var22 = var17.section;
            var15['style'] = var22;
            var22 = 46;
            var22 = var27[var22];
            var25 = var32.bind(var4)(var22);
            var22 = {};
            var31 = _closure1_slot0;
            var29 = var27[var21];
            var29 = var31.bind(var4)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var27 = var27[var24];
            var27 = var32.bind(var4)(var27);
            var27 = var27.u72Prd;
            var27 = var29.bind(var31)(var27);
            var22['text'] = var27;
            var27 = function onPress() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 41;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleShowUpsellAlert;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 42;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.UpsellTypes;
                var5 = var5.STREAM_HIGH_QUALITY;
                var2['initialUpsellKey'] = var5;
                var5 = _closure2_slot5;
                var2['analyticsLocations'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var22['onPress'] = var27;
            var22 = var20.bind(var4)(var25, var22);
            var15['children'] = var22;
            var14 = var20.bind(var4)(var18, var15);
case 43:
            var12[3] = var14;
            var15 = _closure1_slot14;
            var14 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = var20[var13];
            var25 = var14.bind(var4)(var18);
            var22 = {};
            var18 = var17.section;
            var22['style'] = var18;
            var18 = _closure1_slot0;
            var26 = var20[var26];
            var26 = var18.bind(var4)(var26);
            var27 = var26.TableRowGroup;
            var26 = {};
            var29 = var20[var21];
            var29 = var18.bind(var4)(var29);
            var32 = var29.intl;
            var31 = var32.string;
            var29 = var20[var24];
            var29 = var14.bind(var4)(var29);
            var29 = var29.j+eAMQ;
            var29 = var31.bind(var32)(var29);
            var26['title'] = var29;
            var26['hasIcons'] = var28;
            var28 = 47;
            var28 = var20[var28];
            var28 = var18.bind(var4)(var28);
            var29 = var28.TableSwitchRow;
            var28 = {};
            var31 = var20[var21];
            var31 = var18.bind(var4)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var20[var24];
            var31 = var14.bind(var4)(var31);
            var31 = var31.uwMBDo;
            var31 = var32.bind(var33)(var31);
            var28['label'] = var31;
            var28['value'] = var30;
            var30 = function onValueChange(arg1) {
                var4 = arg1;
                var3 = _closure2_slot10;
                var1 = undefined;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot11;
                var2 = _closure2_slot7;
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            };
            var28['onValueChange'] = var30;
            var28 = var15.bind(var4)(var29, var28);
            var26['children'] = var28;
            var26 = var15.bind(var4)(var27, var26);
            var22['children'] = var26;
            var22 = var15.bind(var4)(var25, var22);
            var12[4] = var22;
            var13 = var20[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var17 = var17.section;
            var13['style'] = var17;
            var17 = 48;
            var17 = var20[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.Button;
            if(var16) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var16 = {'size': 'lg', 'variant': 'primary'};
            var22 = _closure1_slot0;
            var18 = _closure1_slot2;
            var20 = var18[var21];
            var20 = var22.bind(var4)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var25 = _closure1_slot1;
            var18 = var18[var24];
            var18 = var25.bind(var4)(var18);
            var18 = var18["3wwZ/Q"];
            var18 = var20.bind(var22)(var18);
            var16['text'] = var18;
            var18 = function onPress() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 15;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.hideActionSheet;
                var3 = 'MobileGoLiveActionSheet';
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot0;
                var2 = 49;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.startStream;
                var2 = var2.bind(var3)();
                return var1;
            };
            var16['onPress'] = var18;
            _fun0001_ip = 47; continue _fun0001;
case 45:
            var18 = {'size': 'lg', 'variant': 'destructive'};
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = var20[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var23 = _closure1_slot1;
            var20 = var20[var24];
            var20 = var23.bind(var4)(var20);
            var20 = var20.OsS9Ll;
            var20 = var21.bind(var22)(var20);
            var18['text'] = var20;
            var19 = function onPress() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 49;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.stopScreenshare;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot1;
                var2 = 15;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.hideActionSheet;
                var2 = 'MobileGoLiveActionSheet';
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var18['onPress'] = var19;
            var16 = var18;
case 47:
            var16 = var15.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[5] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var7['children'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 50;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/go_live/native/MobileGoLiveActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function showMobileGoLiveActionSheet(arg1) {
        var4 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 15;
        var3 = var8[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var3);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var2 = 17;
        var2 = var8[var2];
        var4 = var7.bind(var1)(var2);
        var2 = 16;
        var3 = var8[var2];
        var2 = var8.paths;
        var4 = var4.bind(var1)(var3, var2);
        var3 = {};
        var2 = 18;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var2 = var2.ImpressionNames;
        var2 = var2.MOBILE_GO_LIVE_ACTION_SHEET;
        var3['impressionName'] = var2;
        var2 = {};
        var7 = arg1;
        var2['location_stack'] = var7;
        var3['impressionProperties'] = var2;
        var2 = 'MobileGoLiveActionSheet';
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var3['showMobileGoLiveActionSheet'] = var2;
    return var1;
})();