// app/modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.calculateLocaleOptions;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot12 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot13 = var7;
    var7 = var4.GuildSettingsSections;
    var _closure1_slot14 = var7;
    var4 = var4.Permissions;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['overview'] = var9;
    var9 = {};
    var10 = 11;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingTop'] = var10;
    var4['overviewContent'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsModalCommunity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var3 = var1.onClose;
            var _closure2_slot1 = var3;
            var5 = undefined;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var6 = var7.bind(var5)(var1);
            var4 = var6.useToken;
            var9 = _closure1_slot1;
            var14 = 11;
            var1 = var8[var14];
            var1 = var9.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.TABLE_ROW_PADDING;
            var19 = var4.bind(var6)(var1);
            var1 = _closure1_slot18;
            var6 = var1.bind(var5)();
            var1 = 13;
            var1 = var8[var1];
            var4 = var7.bind(var5)(var1);
            var1 = var4.useNavigation;
            var20 = var1.bind(var4)();
            var _closure2_slot2 = var20;
            var4 = 14;
            var1 = var8[var4];
            var11 = var7.bind(var5)(var1);
            var10 = var11.useStateFromStoresObject;
            var1 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var10.bind(var11)(var9, var1);
            var11 = var1.submitting;
            var _closure2_slot3 = var11;
            var9 = var1.hasChanges;
            var _closure2_slot4 = var9;
            var1 = var1.guild;
            var _closure2_slot5 = var1;
            var10 = var8[var4];
            var16 = var7.bind(var5)(var10);
            var15 = var16.useStateFromStoresObject;
            var10 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot5;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var8 = _closure1_slot7;
                    var7 = var8.can;
                    var5 = _closure1_slot15;
                    var6 = var5.MANAGE_GUILD;
                    var5 = _closure2_slot5;
                    var2 = var7.bind(var8)(var6, var5);
case 2:
                    var1['canManage'] = var2;
                    var2 = _closure2_slot5;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot7;
                    var5 = var6.can;
                    var4 = _closure1_slot15;
                    var4 = var4.ADMINISTRATOR;
                    var3 = _closure2_slot5;
                    var2 = var5.bind(var6)(var4, var3);
case 4:
                    var1['isAdmin'] = var2;
                    return var1;
                }
            };
            var10 = var15.bind(var16)(var13, var10);
            var29 = var10.canManage;
            var _closure2_slot6 = var29;
            var13 = var10.isAdmin;
            var4 = var8[var4];
            var10 = var7.bind(var5)(var4);
            var8 = var10.useStateFromStoresObject;
            var4 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var8 = _closure1_slot4;
                    var6 = var8.getChannel;
                    var3 = _closure2_slot5;
                    var7 = null;
                    var9 = var7 == var3;
                    var3 = undefined;
                    if(var9) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var9 = _closure2_slot5;
                    var3 = var9.rulesChannelId;
case 6:
                    var3 = var6.bind(var8)(var3);
                    var1['rulesChannel'] = var3;
                    var3 = _closure1_slot4;
                    var2 = var3.getChannel;
                    var6 = _closure2_slot5;
                    var6 = var7 == var6;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure2_slot5;
                    var4 = var5.publicUpdatesChannelId;
case 8:
                    var2 = var2.bind(var3)(var4);
                    var1['publicUpdatesChannel'] = var2;
                    return var1;
                }
            };
            var4 = var8.bind(var10)(var7, var4);
            var22 = var4.rulesChannel;
            var _closure2_slot7 = var22;
            var24 = var4.publicUpdatesChannel;
            var _closure2_slot8 = var24;
            var10 = _closure1_slot3;
            var8 = var10.useEffect;
            var7 = new Array(3);
            var7[0] = var1;
            var7[1] = var20;
            var7[2] = var3;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = _closure2_slot5;
                    var4 = var2.features;
                    var3 = var4.has;
                    var2 = _closure1_slot13;
                    var2 = var2.COMMUNITY;
                    var1 = var3.bind(var4)(var2);
case 10:
                    if(var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.setSection;
                    var1 = _closure1_slot14;
                    var2 = var1.COMMUNITY_INTRO;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot2;
                    var3 = var4.replace;
                    var2 = var1.COMMUNITY_INTRO;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['onClose'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var10)(var4, var7);
            var8 = var10.useCallback;
            var7 = new Array(1);
            var7[0] = var1;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 14; continue _fun0005 }
case 11:
                    var2 = global;
                    var3 = var2.Set;
                    var5 = _closure2_slot5;
                    var8 = var5.features;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var9 = var2;
                    var1 = new var9[var3](var8, var7);
                    var6 = var1 instanceof Object ? var1 : var2;
                    var4 = var6.delete;
                    var2 = _closure1_slot13;
                    var3 = var2.COMMUNITY;
                    var3 = var4.bind(var6)(var3);
                    var3 = var6.delete;
                    var2 = var2.DISCOVERABLE;
                    var2 = var3.bind(var6)(var2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.saveGuild;
                    var2 = var5.id;
                    var1 = {'features': null, 'rulesChannelId': null, 'publicUpdatesChannelId': null};
                    var1['features'] = var6;
                    var5 = var5.preferredLocale;
                    var1['preferredLocale'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var8.bind(var10)(var4, var7);
            var10 = null;
            var16 = var10 != var1;
            var15 = _closure1_slot0;
            var4 = _closure1_slot2;
            var21 = 16;
            var7 = var4[var21];
            var7 = var15.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var4[var21];
            var4 = var15.bind(var5)(var4);
            var4 = var4.t;
            if(var16) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var15 = var4.kQzUNk;
            var15 = var7.bind(var8)(var15);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var4 = var4.aQzVF8;
            var15 = var7.bind(var8)(var4);
case 17:
            var7 = _closure1_slot3;
            var8 = var7.useEffect;
            var4 = new Array(5);
            var4[0] = var1;
            var4[1] = var20;
            var4[2] = var11;
            var4[3] = var9;
            var4[4] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = function handlePublicCancelChanges() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure2_slot5;
                            var3 = null;
                            if(!(var3 != var2)) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var4 = var4[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.cancelChanges;
                            var2 = _closure2_slot5;
                            var2 = var2.id;
                            var2 = var4.bind(var5)(var2);
case 18:
                            var2 = _closure2_slot1;
                            if(!(var3 != var2)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 20:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var1;
                    var1 = function handlePublicSaveChanges() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure2_slot5;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0008_ip = 22; continue _fun0008 }
case 19:
                            var1 = _closure2_slot5;
                            var4 = var1.id;
                            var9 = var1.rulesChannelId;
                            var7 = var1.publicUpdatesChannelId;
                            var6 = var1.preferredLocale;
                            var5 = var1.features;
                            var8 = var1.safetyAlertsChannelId;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.saveGuild;
                            var1 = {};
                            var1['rulesChannelId'] = var9;
                            var1['safetyAlertsChannelId'] = var8;
                            var1['publicUpdatesChannelId'] = var7;
                            var1['preferredLocale'] = var6;
                            var1['features'] = var5;
                            var1 = var2.bind(var3)(var4, var1);
case 22:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var1;
                    var3 = _closure2_slot2;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = _closure2_slot3;
                    if(var6) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var7 = _closure2_slot4;
                    var6 = undefined;
                    if(!var7) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var6 = function() {
                        var4 = _closure1_slot16;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 17;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure3_slot0;
                        var1['onPress'] = var5;
                        var5 = 16;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.ETE/oC;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 25:
                    _fun0006_ip = 27; continue _fun0006;
case 23:
                    var6 = function() {
                        var1 = null;
                        return var1;
                    };
case 27:
                    var1['headerLeft'] = var6;
                    var6 = _closure2_slot3;
                    if(var6) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var6 = _closure2_slot4;
                    var4 = undefined;
                    if(!var6) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var4 = function() {
                        var4 = _closure1_slot16;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 17;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure3_slot1;
                        var1['onPress'] = var5;
                        var5 = 16;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPH+;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 30:
                    _fun0006_ip = 32; continue _fun0006;
case 28:
                    var4 = function() {
                        var4 = _closure1_slot16;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 18;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderSubmittingIndicator;
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 32:
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var7)(var3, var4);
            var4 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure1_slot5;
                    var4 = var5.getChannels;
                    var1 = _closure2_slot0;
                    var4 = var4.bind(var5)(var1);
                    var1 = new Array(0);
                    var5 = null;
                    if(!(var5 != var4)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                    var3 = _closure1_slot6;
                    var5 = var4[var3];
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.channel;
                        var2 = var1.type;
                        var1 = _closure1_slot12;
                        var1 = var1.GUILD_TEXT;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var7 = var1.channel;
                        var1 = {};
                        var2 = var7.id;
                        var1['value'] = var2;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 19;
                        var4 = var4[var3];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.computeChannelName;
                        var10 = _closure1_slot9;
                        var9 = _closure1_slot8;
                        var8 = true;
                        var12 = var6;
                        var11 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        var1['label'] = var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 33:
                    return var1;
                }
            };
            var2 = var4.bind(var7)(var2, var3);
            _closure2_slot9 = var2;
            var8 = var7.useCallback;
            var4 = new Array(2);
            var4[0] = var2;
            var4[1] = var22;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 20;
                    var3 = var10[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var9 = _closure1_slot0;
                    var2 = 22;
                    var2 = var10[var2];
                    var4 = var9.bind(var1)(var2);
                    var2 = 21;
                    var3 = var10[var2];
                    var2 = var10.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var2 = 16;
                    var7 = var10[var2];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.Yr6nGx;
                    var2 = var7.bind(var8)(var2);
                    var3['title'] = var2;
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)();
                    var3['items'] = var2;
                    var2 = function onItemSelect(arg1) {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 15;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.updateGuild;
                        var2 = {};
                        var7 = arg1;
                        var2['rulesChannelId'] = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = 20;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var3['onItemSelect'] = var2;
                    var8 = _closure2_slot7;
                    var2 = null;
                    var8 = var2 == var8;
                    var2 = undefined;
                    if(var8) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                    var7 = _closure2_slot7;
                    var2 = var7.id;
case 35:
                    var3['selectedItem'] = var2;
                    var2 = 'SelectRulesChannel';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var27 = var8.bind(var7)(var3, var4);
            var4 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var24;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 20;
                    var3 = var10[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var9 = _closure1_slot0;
                    var2 = 22;
                    var2 = var10[var2];
                    var4 = var9.bind(var1)(var2);
                    var2 = 21;
                    var3 = var10[var2];
                    var2 = var10.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var2 = 16;
                    var7 = var10[var2];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.VqhxxN;
                    var2 = var7.bind(var8)(var2);
                    var3['title'] = var2;
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)();
                    var3['items'] = var2;
                    var2 = function onItemSelect(arg1) {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 15;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.updateGuild;
                        var2 = {};
                        var7 = arg1;
                        var2['publicUpdatesChannelId'] = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = 20;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var3['onItemSelect'] = var2;
                    var8 = _closure2_slot8;
                    var2 = null;
                    var8 = var2 == var8;
                    var2 = undefined;
                    if(var8) { _fun0011_ip = 35; continue _fun0011 }
case 36:
                    var7 = _closure2_slot8;
                    var2 = var7.id;
case 35:
                    var3['selectedItem'] = var2;
                    var2 = 'SelectUpdatesChannel';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var25 = var4.bind(var7)(var2, var3);
            var3 = var10 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var2 = var1.preferredLocale;
case 37:
            _closure2_slot10 = var2;
            var7 = _closure1_slot3;
            var4 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 20;
                var3 = var11[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.openLazy;
                var10 = _closure1_slot0;
                var3 = 22;
                var3 = var11[var3];
                var7 = var10.bind(var1)(var3);
                var3 = 21;
                var4 = var11[var3];
                var3 = var11.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = {};
                var7 = 16;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.dXE8/D;
                var7 = var8.bind(var9)(var7);
                var3['title'] = var7;
                var2 = _closure1_slot11;
                var2 = var2.bind(var1)();
                var3['items'] = var2;
                var2 = function onItemSelect(arg1) {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var2 = var4[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.updateGuild;
                    var2 = {};
                    var7 = arg1;
                    var2['preferredLocale'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = 20;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var3['onItemSelect'] = var2;
                var2 = _closure2_slot10;
                var3['selectedItem'] = var2;
                var2 = 'SelectLocale';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var2 = var4.bind(var7)(var2, var3);
            _closure2_slot11 = var2;
            var2 = var10 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var4 = _closure1_slot16;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 23;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Form;
            var2 = {};
            var8 = var6.overview;
            var2['style'] = var8;
            var6 = var6.overviewContent;
            var2['contentContainerStyle'] = var6;
            var8 = _closure1_slot17;
            var6 = 24;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Stack;
            var6 = {};
            var11 = {};
            var11['paddingHorizontal'] = var19;
            var6['style'] = var11;
            var11 = _closure1_slot1;
            var9 = var9[var14];
            var9 = var11.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_24;
            var6['spacing'] = var9;
            var9 = var10 != var22;
            var31 = null;
            if(!var9) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 19;
            var9 = var14[var9];
            var20 = var11.bind(var5)(var9);
            var19 = var20.computeChannelName;
            var36 = _closure1_slot9;
            var35 = _closure1_slot8;
            var34 = true;
            var38 = var20;
            var37 = var22;
            var31 = var38[var19](var37, var36, var35, var34, var33);
case 41:
            var20 = _closure1_slot16;
            var28 = _closure1_slot0;
            var26 = _closure1_slot2;
            var11 = 25;
            var9 = var26[var11];
            var9 = var28.bind(var5)(var9);
            var19 = var9.TableRowGroup;
            var9 = {};
            var14 = var26[var21];
            var14 = var28.bind(var5)(var14);
            var23 = var14.intl;
            var22 = var23.string;
            var14 = var26[var21];
            var14 = var28.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14["3q1TEo"];
            var14 = var22.bind(var23)(var14);
            var9['helperText'] = var14;
            var14 = 26;
            var22 = var26[var14];
            var22 = var28.bind(var5)(var22);
            var23 = var22.TableRow;
            var22 = {};
            var30 = var26[var21];
            var30 = var28.bind(var5)(var30);
            var33 = var30.intl;
            var32 = var33.string;
            var30 = var26[var21];
            var30 = var28.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.U5BW0c;
            var30 = var32.bind(var33)(var30);
            var22['label'] = var30;
            var29 = !var29;
            var22['disabled'] = var29;
            var26 = var26[var14];
            var26 = var28.bind(var5)(var26);
            var26 = var26.TableRow;
            var28 = var26.TrailingText;
            var26 = {};
            var32 = var10 != var31;
            var29 = '';
            var30 = var29;
            if(!var32) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var30 = var31;
case 43:
            var26['text'] = var30;
            var26 = var20.bind(var5)(var28, var26);
            var22['trailing'] = var26;
            var26 = true;
            var22['arrow'] = var26;
            var22['onPress'] = var27;
            var22 = var20.bind(var5)(var23, var22);
            var9['children'] = var22;
            var19 = var20.bind(var5)(var19, var9);
            var9 = new Array(4);
            var9[0] = var19;
            var19 = var10 != var24;
            var30 = null;
            if(!var19) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 19;
            var19 = var22[var19];
            var23 = var20.bind(var5)(var19);
            var22 = var23.computeChannelName;
            var36 = _closure1_slot9;
            var35 = _closure1_slot8;
            var38 = var23;
            var37 = var24;
            var34 = true;
            var30 = var38[var22](var37, var36, var35, var34, var33);
case 45:
            var22 = _closure1_slot16;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var19 = var27[var11];
            var19 = var28.bind(var5)(var19);
            var20 = var19.TableRowGroup;
            var19 = {};
            var23 = var27[var21];
            var23 = var28.bind(var5)(var23);
            var31 = var23.intl;
            var24 = var31.string;
            var23 = var27[var21];
            var23 = var28.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.Fg6O/5;
            var23 = var24.bind(var31)(var23);
            var19['helperText'] = var23;
            var23 = var27[var14];
            var23 = var28.bind(var5)(var23);
            var24 = var23.TableRow;
            var23 = {};
            var31 = var27[var21];
            var31 = var28.bind(var5)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var27[var21];
            var31 = var28.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.vAyDGU;
            var31 = var32.bind(var33)(var31);
            var23['label'] = var31;
            var31 = !var13;
            var23['disabled'] = var31;
            var27 = var27[var14];
            var27 = var28.bind(var5)(var27);
            var27 = var27.TableRow;
            var28 = var27.TrailingText;
            var27 = {};
            var31 = var10 != var30;
            if(!var31) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var29 = var30;
case 47:
            var27['text'] = var29;
            var27 = var22.bind(var5)(var28, var27);
            var23['trailing'] = var27;
            var23['arrow'] = var26;
            var23['onPress'] = var25;
            var23 = var22.bind(var5)(var24, var23);
            var19['children'] = var23;
            var19 = var22.bind(var5)(var20, var19);
            var9[1] = var19;
            var17 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var1 = var1.preferredLocale;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot11;
                    var4 = undefined;
                    var5 = var3.bind(var4)();
                    var3 = var5.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.value;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var3.bind(var5)(var2);
                    var10 = null;
                    var3 = var10 == var2;
                    var11 = undefined;
                    if(var3) { _fun0012_ip = 21; continue _fun0012 }
case 49:
                    var11 = var2.label;
case 21:
                    var3 = _closure1_slot16;
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 25;
                    var1 = var12[var1];
                    var1 = var9.bind(var4)(var1);
                    var2 = var1.TableRowGroup;
                    var1 = {};
                    var13 = 16;
                    var5 = var12[var13];
                    var5 = var9.bind(var4)(var5);
                    var8 = var5.intl;
                    var6 = var8.string;
                    var5 = var12[var13];
                    var5 = var9.bind(var4)(var5);
                    var5 = var5.t;
                    var5 = var5.l2g81/;
                    var5 = var6.bind(var8)(var5);
                    var1['helperText'] = var5;
                    var8 = 26;
                    var5 = var12[var8];
                    var5 = var9.bind(var4)(var5);
                    var6 = var5.TableRow;
                    var5 = {};
                    var14 = var12[var13];
                    var14 = var9.bind(var4)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var12[var13];
                    var13 = var9.bind(var4)(var13);
                    var13 = var13.t;
                    var13 = var13.VeC8vc;
                    var13 = var14.bind(var15)(var13);
                    var5['label'] = var13;
                    var13 = _closure2_slot6;
                    var13 = !var13;
                    var5['disabled'] = var13;
                    var8 = var12[var8];
                    var8 = var9.bind(var4)(var8);
                    var8 = var8.TableRow;
                    var9 = var8.TrailingText;
                    var8 = {};
                    var12 = var10 != var11;
                    var10 = '';
                    if(!var12) { _fun0012_ip = 50; continue _fun0012 }
case 51:
                    var10 = var11;
case 50:
                    var8['text'] = var10;
                    var8 = var3.bind(var4)(var9, var8);
                    var5['trailing'] = var8;
                    var8 = true;
                    var5['arrow'] = var8;
                    var7 = _closure2_slot11;
                    var5['onPress'] = var7;
                    var5 = var3.bind(var4)(var6, var5);
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var17 = var17.bind(var5)();
            var9[2] = var17;
            var10 = null;
            if(!var13) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var13 = _closure1_slot16;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = var17[var11];
            var11 = var20.bind(var5)(var11);
            var12 = var11.TableRowGroup;
            var11 = {};
            var11['helperText'] = var15;
            var14 = var17[var14];
            var14 = var20.bind(var5)(var14);
            var15 = var14.TableRow;
            var14 = {};
            var19 = 'danger';
            var14['variant'] = var19;
            var14['onPress'] = var18;
            var18 = var17[var21];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.c1BmbC;
            var17 = var18.bind(var19)(var17);
            var14['label'] = var17;
            var16 = !var16;
            var14['disabled'] = var16;
            var14 = var13.bind(var5)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 52:
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 39:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();