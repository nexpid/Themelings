// app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Image;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.GuildSettingsSections;
    var _closure1_slot6 = var5;
    var5 = var2.PlatformTypes;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.jsx;
    var _closure1_slot7 = var8;
    var8 = var2.Fragment;
    var _closure1_slot8 = var8;
    var2 = var2.jsxs;
    var _closure1_slot9 = var2;
    var8 = var5.TWITCH;
    var2 = new Array(2);
    var2[0] = var8;
    var5 = var5.YOUTUBE;
    var2[1] = var5;
    var _closure1_slot10 = var2;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'width': 24, 'height': 24};
    var5['platformIcon'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GuildSettingsModalIntegrations(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.contentContainerStyle;
            var6 = undefined;
            var _closure2_slot4 = var6;
            var1 = _closure1_slot11;
            var1 = var1.bind(var6)();
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var2 = var4.bind(var6)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var3 = 8;
            var1 = var5[var3];
            var11 = var4.bind(var6)(var1);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var2;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getGuild;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var10.bind(var11)(var9, var7, var1);
            var _closure2_slot2 = var1;
            var7 = var5[var3];
            var11 = var4.bind(var6)(var7);
            var10 = var11.useStateFromStoresObject;
            var7 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuildPermissionProps;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var1 = {'canManageWebhooks': false, 'canManageGuild': false};
case 4:
                    return var1;
                }
            };
            var7 = var10.bind(var11)(var9, var7);
            var17 = var7.canManageWebhooks;
            var14 = var7.canManageGuild;
            var9 = _closure1_slot1;
            var7 = 9;
            var7 = var5[var7];
            var7 = var9.bind(var6)(var7);
            var7 = var7.bind(var6)();
            var _closure2_slot3 = var7;
            var3 = var5[var3];
            var5 = var4.bind(var6)(var3);
            var4 = var5.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                var1 = var1.integrations;
                return var1;
            };
            var7 = var4.bind(var5)(var3, var2);
            var2 = null;
            var4 = var2 == var7;
            var3 = undefined;
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var7.filter;
            var4 = function(arg1) {
                var3 = _closure1_slot10;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var7)(var4);
case 5:
            _closure2_slot4 = var3;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 10;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var5 = var7.useChannelsAllowedToUnlink;
            var9 = var2 == var1;
            var4 = undefined;
            if(var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = var1.id;
case 7:
            var4 = var5.bind(var7)(var4);
            var5 = var4.length;
            var4 = 0;
            var16 = var5 > var4;
            if(!var14) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = var2 == var3;
            var5 = undefined;
            if(var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = var3.length;
case 11:
            var7 = var2 != var5;
            var3 = 0;
            if(!var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var5;
case 13:
            var14 = var3 > var4;
case 9:
            var3 = var2 == var1;
            var1 = null;
            if(var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(var17) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            if(var16) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var2 = null;
            if(!var14) { _fun0001_ip = 20; continue _fun0001 }
case 17:
            var5 = _closure1_slot9;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 11;
            var3 = var11[var3];
            var3 = var12.bind(var6)(var3);
            var4 = var3.RedesignCompat;
            var3 = {};
            var10 = _closure1_slot7;
            var22 = 12;
            var7 = var11[var22];
            var7 = var12.bind(var6)(var7);
            var9 = var7.Form;
            var7 = {};
            var7['contentContainerStyle'] = var13;
            var11 = var11[var22];
            var11 = var12.bind(var6)(var11);
            var12 = var11.FormSection;
            var11 = {};
            if(!var17) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var19 = _closure1_slot9;
            var18 = _closure1_slot8;
            var13 = {};
            var24 = _closure1_slot7;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = var25[var22];
            var20 = var26.bind(var6)(var20);
            var21 = var20.FormRow;
            var20 = {};
            var27 = 13;
            var23 = var25[var27];
            var23 = var26.bind(var6)(var23);
            var29 = var23.intl;
            var28 = var29.string;
            var23 = var25[var27];
            var23 = var26.bind(var6)(var23);
            var23 = var23.t;
            var23 = var23.jp25IS;
            var23 = var28.bind(var29)(var23);
            var20['label'] = var23;
            var23 = var25[var27];
            var23 = var26.bind(var6)(var23);
            var29 = var23.intl;
            var28 = var29.string;
            var23 = var25[var27];
            var23 = var26.bind(var6)(var23);
            var23 = var23.t;
            var23 = var23.mKIOkJ;
            var23 = var28.bind(var29)(var23);
            var20['subLabel'] = var23;
            var23 = 14;
            var23 = var25[var23];
            var23 = var26.bind(var6)(var23);
            var23 = var23.WebhookIcon;
            var20['leading'] = var23;
            var23 = var25[var22];
            var23 = var26.bind(var6)(var23);
            var23 = var23.FormRow;
            var28 = var23.Arrow;
            var23 = {};
            var23 = var24.bind(var6)(var28, var23);
            var20['trailing'] = var23;
            var23 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot6;
                var1 = var1.WEBHOOKS;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20['onPress'] = var23;
            var21 = var24.bind(var6)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var21 = var25[var22];
            var21 = var26.bind(var6)(var21);
            var23 = var21.FormRow;
            var21 = {};
            var28 = var25[var27];
            var28 = var26.bind(var6)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var25[var27];
            var28 = var26.bind(var6)(var28);
            var28 = var28.t;
            var28 = var28.OrV60t;
            var28 = var29.bind(var30)(var28);
            var21['label'] = var28;
            var28 = var25[var27];
            var28 = var26.bind(var6)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var25[var27];
            var27 = var26.bind(var6)(var27);
            var27 = var27.t;
            var27 = var27.rQREJi;
            var27 = var28.bind(var29)(var27);
            var21['subLabel'] = var27;
            var27 = 15;
            var27 = var25[var27];
            var27 = var26.bind(var6)(var27);
            var27 = var27.ChannelsFollowedIcon;
            var21['leading'] = var27;
            var25 = var25[var22];
            var25 = var26.bind(var6)(var25);
            var25 = var25.FormRow;
            var26 = var25.Arrow;
            var25 = {};
            var25 = var24.bind(var6)(var26, var25);
            var21['trailing'] = var25;
            var25 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot6;
                var1 = var1.CHANNELS_FOLLOWED;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21['onPress'] = var25;
            var21 = var24.bind(var6)(var23, var21);
            var20[1] = var21;
            var13['children'] = var20;
            var17 = var19.bind(var6)(var18, var13);
case 21:
            var13 = new Array(3);
            var13[0] = var17;
            if(!var16) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var19 = _closure1_slot7;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = var20[var22];
            var17 = var21.bind(var6)(var17);
            var18 = var17.FormRow;
            var17 = {};
            var23 = 13;
            var24 = var20[var23];
            var24 = var21.bind(var6)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var20[var23];
            var24 = var21.bind(var6)(var24);
            var24 = var24.t;
            var24 = var24.tqtDXF;
            var24 = var25.bind(var26)(var24);
            var17['label'] = var24;
            var24 = var20[var23];
            var24 = var21.bind(var6)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var20[var23];
            var23 = var21.bind(var6)(var23);
            var23 = var23.t;
            var23 = var23.v8819f;
            var23 = var24.bind(var25)(var23);
            var17['subLabel'] = var23;
            var23 = 16;
            var23 = var20[var23];
            var23 = var21.bind(var6)(var23);
            var23 = var23.RefreshIcon;
            var17['leading'] = var23;
            var20 = var20[var22];
            var20 = var21.bind(var6)(var20);
            var20 = var20.FormRow;
            var21 = var20.Arrow;
            var20 = {};
            var20 = var19.bind(var6)(var21, var20);
            var17['trailing'] = var20;
            var20 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot6;
                var1 = var1.LOBBIES_LINKED;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17['onPress'] = var20;
            var16 = var19.bind(var6)(var18, var17);
case 23:
            var13[1] = var16;
            if(!var14) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var17 = _closure1_slot10;
            var16 = var17.map;
            var15 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var4 = _closure2_slot4;
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0003_ip = 27; continue _fun0003 }
case 29:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.get;
                    var17 = var2.bind(var3)(var7);
                    var3 = var1 == var17;
                    var2 = null;
                    if(var3) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var5 = _closure1_slot7;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var12 = 12;
                    var3 = var19[var12];
                    var3 = var18.bind(var6)(var3);
                    var4 = var3.FormRow;
                    var3 = {};
                    var10 = var17.name;
                    var3['label'] = var10;
                    var10 = 13;
                    var11 = var19[var10];
                    var11 = var18.bind(var6)(var11);
                    var15 = var11.intl;
                    var14 = var15.formatToPlainString;
                    var10 = var19[var10];
                    var10 = var18.bind(var6)(var10);
                    var10 = var10.t;
                    var11 = var10.VXU4ER;
                    var10 = {};
                    var16 = var17.name;
                    var10['platformName'] = var16;
                    var10 = var14.bind(var15)(var11, var10);
                    var3['subLabel'] = var10;
                    var11 = _closure1_slot3;
                    var10 = {};
                    var14 = 18;
                    var14 = var19[var14];
                    var16 = var18.bind(var6)(var14);
                    var15 = var16.makeSource;
                    var14 = 19;
                    var14 = var19[var14];
                    var19 = var18.bind(var6)(var14);
                    var18 = var19.isThemeDark;
                    var14 = _closure2_slot3;
                    var14 = var18.bind(var19)(var14);
                    var17 = var17.icon;
                    if(var14) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var14 = var17.lightPNG;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var14 = var17.darkPNG;
case 34:
                    var14 = var15.bind(var16)(var14);
                    var10['source'] = var14;
                    var13 = _closure2_slot0;
                    var13 = var13.platformIcon;
                    var10['style'] = var13;
                    var10 = var5.bind(var6)(var11, var10);
                    var3['leading'] = var10;
                    var11 = _closure1_slot7;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var9 = var10.bind(var6)(var9);
                    var9 = var9.FormRow;
                    var10 = var9.Arrow;
                    var9 = {};
                    var9 = var11.bind(var6)(var10, var9);
                    var3['trailing'] = var9;
                    var8 = function onPress() {
                        var4 = _closure2_slot1;
                        var3 = var4.push;
                        var1 = _closure1_slot6;
                        var2 = var1.INTEGRATION_PLATFORM;
                        var1 = {};
                        var5 = _closure3_slot0;
                        var1['platformType'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var3['onPress'] = var8;
                    var2 = var5.bind(var6)(var4, var3, var7);
case 30:
                    return var2;
case 27:
                    return var1;
                }
            };
            var14 = var16.bind(var17)(var15);
case 25:
            var13[2] = var14;
            var11['children'] = var13;
            var11 = var5.bind(var6)(var12, var11);
            var7['children'] = var11;
            var9 = var10.bind(var6)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var10 = _closure1_slot7;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 20;
            var8 = var11[var8];
            var8 = var9.bind(var6)(var8);
            var9 = var8.NavScrim;
            var8 = {};
            var8 = var10.bind(var6)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 20:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS'] = var2;
    return var1;
})();