// app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var11 = 1;
    var2 = var7[var11];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Image;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
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
    var2 = var2.TABLE_ROW_PADDING;
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.jsx;
    var _closure1_slot8 = var8;
    var8 = var2.Fragment;
    var _closure1_slot9 = var8;
    var2 = var2.jsxs;
    var _closure1_slot10 = var2;
    var8 = var5.TWITCH;
    var2 = new Array(2);
    var2[0] = var8;
    var5 = var5.YOUTUBE;
    var2[1] = var5;
    var _closure1_slot11 = var2;
    var5 = 7;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 8;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var13;
    var5['screenContainer'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['paddingTop'] = var11;
    var5['screenContent'] = var10;
    var10 = {'width': 24, 'height': 24};
    var5['platformIcon'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot12 = var5;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GuildSettingsModalIntegrations(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.contentContainerStyle;
            var6 = undefined;
            var _closure2_slot4 = var6;
            var1 = _closure1_slot12;
            var11 = var1.bind(var6)();
            var _closure2_slot0 = var11;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var2 = var4.bind(var6)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var3 = 10;
            var1 = var5[var3];
            var13 = var4.bind(var6)(var1);
            var10 = var13.useStateFromStores;
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
            var1 = var10.bind(var13)(var9, var7, var1);
            var _closure2_slot2 = var1;
            var7 = var5[var3];
            var13 = var4.bind(var6)(var7);
            var10 = var13.useStateFromStoresObject;
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
            var7 = var10.bind(var13)(var9, var7);
            var19 = var7.canManageWebhooks;
            var16 = var7.canManageGuild;
            var9 = _closure1_slot1;
            var7 = 11;
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
                var3 = _closure1_slot11;
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
            var4 = 12;
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
            var18 = var5 > var4;
            if(!var16) { _fun0001_ip = 9; continue _fun0001 }
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
            var16 = var3 > var4;
case 9:
            var3 = var2 == var1;
            var1 = null;
            if(var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(var19) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            if(var18) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var2 = null;
            if(!var16) { _fun0001_ip = 20; continue _fun0001 }
case 17:
            var5 = _closure1_slot10;
            var4 = _closure1_slot9;
            var3 = {};
            var10 = _closure1_slot8;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 13;
            var7 = var15[var7];
            var7 = var14.bind(var6)(var7);
            var9 = var7.Form;
            var7 = {};
            var13 = var11.screenContainer;
            var7['style'] = var13;
            var13 = var11.screenContent;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var7['contentContainerStyle'] = var11;
            var11 = 14;
            var11 = var15[var11];
            var11 = var14.bind(var6)(var11);
            var12 = var11.Stack;
            var11 = {};
            var13 = {};
            var20 = _closure1_slot7;
            var13['paddingHorizontal'] = var20;
            var11['style'] = var13;
            var20 = _closure1_slot1;
            var13 = 8;
            var13 = var15[var13];
            var13 = var20.bind(var6)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_24;
            var11['spacing'] = var13;
            var13 = 15;
            var13 = var15[var13];
            var13 = var14.bind(var6)(var13);
            var14 = var13.TableRowGroup;
            var13 = {};
            if(!var19) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var21 = _closure1_slot10;
            var20 = _closure1_slot9;
            var15 = {};
            var25 = _closure1_slot8;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = 16;
            var22 = var29[var23];
            var22 = var28.bind(var6)(var22);
            var24 = var22.TableRow;
            var22 = {};
            var27 = 17;
            var26 = var29[var27];
            var26 = var28.bind(var6)(var26);
            var31 = var26.intl;
            var30 = var31.string;
            var26 = var29[var27];
            var26 = var28.bind(var6)(var26);
            var26 = var26.t;
            var26 = var26.jp25Id;
            var26 = var30.bind(var31)(var26);
            var22['label'] = var26;
            var26 = var29[var27];
            var26 = var28.bind(var6)(var26);
            var31 = var26.intl;
            var30 = var31.string;
            var26 = var29[var27];
            var26 = var28.bind(var6)(var26);
            var26 = var26.t;
            var26 = var26.mKIOkI;
            var26 = var30.bind(var31)(var26);
            var22['subLabel'] = var26;
            var26 = 18;
            var26 = var29[var26];
            var26 = var28.bind(var6)(var26);
            var30 = var26.WebhookIcon;
            var26 = {};
            var26 = var25.bind(var6)(var30, var26);
            var22['icon'] = var26;
            var26 = true;
            var22['arrow'] = var26;
            var30 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot6;
                var1 = var1.WEBHOOKS;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22['onPress'] = var30;
            var24 = var25.bind(var6)(var24, var22);
            var22 = new Array(2);
            var22[0] = var24;
            var23 = var29[var23];
            var23 = var28.bind(var6)(var23);
            var24 = var23.TableRow;
            var23 = {};
            var30 = var29[var27];
            var30 = var28.bind(var6)(var30);
            var32 = var30.intl;
            var31 = var32.string;
            var30 = var29[var27];
            var30 = var28.bind(var6)(var30);
            var30 = var30.t;
            var30 = var30.OrV60r;
            var30 = var31.bind(var32)(var30);
            var23['label'] = var30;
            var30 = var29[var27];
            var30 = var28.bind(var6)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var27 = var29[var27];
            var27 = var28.bind(var6)(var27);
            var27 = var27.t;
            var27 = var27.rQREJl;
            var27 = var30.bind(var31)(var27);
            var23['subLabel'] = var27;
            var27 = 19;
            var27 = var29[var27];
            var27 = var28.bind(var6)(var27);
            var28 = var27.ChannelsFollowedIcon;
            var27 = {};
            var27 = var25.bind(var6)(var28, var27);
            var23['icon'] = var27;
            var23['arrow'] = var26;
            var26 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot6;
                var1 = var1.CHANNELS_FOLLOWED;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23['onPress'] = var26;
            var23 = var25.bind(var6)(var24, var23);
            var22[1] = var23;
            var15['children'] = var22;
            var19 = var21.bind(var6)(var20, var15);
case 21:
            var15 = new Array(3);
            var15[0] = var19;
            if(!var18) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var21 = _closure1_slot8;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var19 = 16;
            var19 = var24[var19];
            var19 = var23.bind(var6)(var19);
            var20 = var19.TableRow;
            var19 = {};
            var22 = 17;
            var25 = var24[var22];
            var25 = var23.bind(var6)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var24[var22];
            var25 = var23.bind(var6)(var25);
            var25 = var25.t;
            var25 = var25.tqtDXC;
            var25 = var26.bind(var27)(var25);
            var19['label'] = var25;
            var25 = var24[var22];
            var25 = var23.bind(var6)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var22 = var24[var22];
            var22 = var23.bind(var6)(var22);
            var22 = var22.t;
            var22 = var22.v8819e;
            var22 = var25.bind(var26)(var22);
            var19['subLabel'] = var22;
            var22 = 20;
            var22 = var24[var22];
            var22 = var23.bind(var6)(var22);
            var23 = var22.RefreshIcon;
            var22 = {};
            var22 = var21.bind(var6)(var23, var22);
            var19['icon'] = var22;
            var22 = true;
            var19['arrow'] = var22;
            var22 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot6;
                var1 = var1.LOBBIES_LINKED;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19['onPress'] = var22;
            var18 = var21.bind(var6)(var20, var19);
case 23:
            var15[1] = var18;
            if(!var16) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var19 = _closure1_slot11;
            var18 = var19.map;
            var17 = function(arg1) {
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
                    var2 = 21;
                    var2 = var4[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.get;
                    var15 = var2.bind(var3)(var7);
                    var3 = var1 == var15;
                    var2 = null;
                    if(var3) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var5 = _closure1_slot8;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var3 = 16;
                    var3 = var17[var3];
                    var3 = var16.bind(var6)(var3);
                    var4 = var3.TableRow;
                    var3 = {};
                    var10 = var15.name;
                    var3['label'] = var10;
                    var10 = 17;
                    var12 = var17[var10];
                    var12 = var16.bind(var6)(var12);
                    var14 = var12.intl;
                    var13 = var14.formatToPlainString;
                    var10 = var17[var10];
                    var10 = var16.bind(var6)(var10);
                    var10 = var10.t;
                    var12 = var10.VXU4EU;
                    var10 = {};
                    var18 = var15.name;
                    var10['platformName'] = var18;
                    var10 = var13.bind(var14)(var12, var10);
                    var3['subLabel'] = var10;
                    var10 = _closure1_slot3;
                    var9 = {};
                    var12 = 22;
                    var12 = var17[var12];
                    var14 = var16.bind(var6)(var12);
                    var13 = var14.makeSource;
                    var12 = 23;
                    var12 = var17[var12];
                    var17 = var16.bind(var6)(var12);
                    var16 = var17.isThemeDark;
                    var12 = _closure2_slot3;
                    var12 = var16.bind(var17)(var12);
                    var15 = var15.icon;
                    if(var12) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var12 = var15.lightPNG;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var12 = var15.darkPNG;
case 34:
                    var12 = var13.bind(var14)(var12);
                    var9['source'] = var12;
                    var11 = _closure2_slot0;
                    var11 = var11.platformIcon;
                    var9['style'] = var11;
                    var9 = var5.bind(var6)(var10, var9);
                    var3['icon'] = var9;
                    var9 = true;
                    var3['arrow'] = var9;
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
            var16 = var18.bind(var19)(var17);
case 25:
            var15[2] = var16;
            var13['children'] = var15;
            var13 = var5.bind(var6)(var14, var13);
            var11['children'] = var13;
            var11 = var10.bind(var6)(var12, var11);
            var7['children'] = var11;
            var9 = var10.bind(var6)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var10 = _closure1_slot8;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 24;
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