// app/modules/guild_settings/native/GuildSettingsModalCommunity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var7 = var4.Fragment;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var4['flex'] = var10;
    var7['overview'] = var4;
    var4 = 24;
    var10 = {'marginTop': 24, 'marginBottom': 0};
    var7['formCTAButton'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot19 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalCommunity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsModalCommunity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var3 = var1.onClose;
            var _closure2_slot1 = var3;
            var5 = undefined;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var1 = _closure1_slot19;
            var9 = var1.bind(var5)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var1 = var7[var1];
            var4 = var6.bind(var5)(var1);
            var1 = var4.useNavigation;
            var15 = var1.bind(var4)();
            var _closure2_slot2 = var15;
            var4 = 12;
            var1 = var7[var4];
            var11 = var6.bind(var5)(var1);
            var10 = var11.useStateFromStoresObject;
            var1 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var10.bind(var11)(var8, var1);
            var13 = var1.submitting;
            var _closure2_slot3 = var13;
            var8 = var1.hasChanges;
            var _closure2_slot4 = var8;
            var1 = var1.guild;
            var _closure2_slot5 = var1;
            var10 = var7[var4];
            var17 = var6.bind(var5)(var10);
            var16 = var17.useStateFromStoresObject;
            var10 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot5;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 51; continue _fun0002 }
 18:
                    var8 = _closure1_slot7;
                    var7 = var8.can;
                    var5 = _closure1_slot15;
                    var6 = var5.MANAGE_GUILD;
                    var5 = _closure2_slot5;
                    var2 = var7.bind(var8)(var6, var5);
 51:
                    var1['canManage'] = var2;
                    var2 = _closure2_slot5;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 100; continue _fun0002 }
 67:
                    var6 = _closure1_slot7;
                    var5 = var6.can;
                    var4 = _closure1_slot15;
                    var4 = var4.ADMINISTRATOR;
                    var3 = _closure2_slot5;
                    var2 = var5.bind(var6)(var4, var3);
 100:
                    var1['isAdmin'] = var2;
                    return var1;
                }
            };
            var10 = var16.bind(var17)(var11, var10);
            var29 = var10.canManage;
            var _closure2_slot6 = var29;
            var11 = var10.isAdmin;
            var4 = var7[var4];
            var10 = var6.bind(var5)(var4);
            var7 = var10.useStateFromStoresObject;
            var4 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var8 = _closure1_slot4;
                    var6 = var8.getChannel;
                    var3 = _closure2_slot5;
                    var7 = null;
                    var9 = var7 == var3;
                    var3 = undefined;
                    if(var9) { _fun0003_ip = 42; continue _fun0003 }
 32:
                    var9 = _closure2_slot5;
                    var3 = var9.rulesChannelId;
 42:
                    var3 = var6.bind(var8)(var3);
                    var1['rulesChannel'] = var3;
                    var3 = _closure1_slot4;
                    var2 = var3.getChannel;
                    var6 = _closure2_slot5;
                    var6 = var7 == var6;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 84; continue _fun0003 }
 74:
                    var5 = _closure2_slot5;
                    var4 = var5.publicUpdatesChannelId;
 84:
                    var2 = var2.bind(var3)(var4);
                    var1['publicUpdatesChannel'] = var2;
                    return var1;
                }
            };
            var4 = var7.bind(var10)(var6, var4);
            var26 = var4.rulesChannel;
            var _closure2_slot7 = var26;
            var22 = var4.publicUpdatesChannel;
            var _closure2_slot8 = var22;
            var10 = _closure1_slot3;
            var7 = var10.useEffect;
            var6 = new Array(3);
            var6[0] = var1;
            var6[1] = var15;
            var6[2] = var3;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0004_ip = 49; continue _fun0004 }
 16:
                    var2 = _closure2_slot5;
                    var4 = var2.features;
                    var3 = var4.has;
                    var2 = _closure1_slot13;
                    var2 = var2.COMMUNITY;
                    var1 = var3.bind(var4)(var2);
 49:
                    if(var1) { _fun0004_ip = 130; continue _fun0004 }
 52:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
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
 130:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var7.bind(var10)(var4, var6);
            var7 = var10.useCallback;
            var6 = new Array(1);
            var6[0] = var1;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 163; continue _fun0005 }
 16:
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
                    var1 = 13;
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
 163:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var7.bind(var10)(var4, var6);
            var10 = null;
            var23 = var10 != var1;
            var16 = _closure1_slot0;
            var4 = _closure1_slot2;
            var24 = 14;
            var6 = var4[var24];
            var6 = var16.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var4[var24];
            var4 = var16.bind(var5)(var4);
            var4 = var4.t;
            if(var23) { _fun0001_ip = 403; continue _fun0001 }
 388:
            var16 = var4.kQzUNj;
            var18 = var6.bind(var7)(var16);
            _fun0001_ip = 416; continue _fun0001;
 403:
            var4 = var4.aQzVFx;
            var18 = var6.bind(var7)(var4);
 416:
            var6 = _closure1_slot3;
            var7 = var6.useEffect;
            var4 = new Array(5);
            var4[0] = var1;
            var4[1] = var15;
            var4[2] = var13;
            var4[3] = var8;
            var4[4] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = function handlePublicCancelChanges() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var2 = _closure2_slot5;
                            var3 = null;
                            if(!(var3 != var2)) { _fun0007_ip = 58; continue _fun0007 }
 13:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 13;
                            var4 = var4[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.cancelChanges;
                            var2 = _closure2_slot5;
                            var2 = var2.id;
                            var2 = var4.bind(var5)(var2);
 58:
                            var2 = _closure2_slot1;
                            if(!(var3 != var2)) { _fun0007_ip = 76; continue _fun0007 }
 66:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 76:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var1;
                    var1 = function handlePublicSaveChanges() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var3 = _closure2_slot5;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0008_ip = 116; continue _fun0008 }
 13:
                            var1 = _closure2_slot5;
                            var4 = var1.id;
                            var9 = var1.rulesChannelId;
                            var7 = var1.publicUpdatesChannelId;
                            var6 = var1.preferredLocale;
                            var5 = var1.features;
                            var8 = var1.safetyAlertsChannelId;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
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
 116:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var1;
                    var3 = _closure2_slot2;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = _closure2_slot3;
                    if(var6) { _fun0006_ip = 64; continue _fun0006 }
 46:
                    var7 = _closure2_slot4;
                    var6 = undefined;
                    if(!var7) { _fun0006_ip = 62; continue _fun0006 }
 55:
                    var6 = function() {
                        var4 = _closure1_slot16;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 15;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure3_slot0;
                        var1['onPress'] = var5;
                        var5 = 14;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.ETE/oK;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 62:
                    _fun0006_ip = 71; continue _fun0006;
 64:
                    var6 = function() {
                        var1 = null;
                        return var1;
                    };
 71:
                    var1['headerLeft'] = var6;
                    var6 = _closure2_slot3;
                    if(var6) { _fun0006_ip = 101; continue _fun0006 }
 83:
                    var6 = _closure2_slot4;
                    var4 = undefined;
                    if(!var6) { _fun0006_ip = 99; continue _fun0006 }
 92:
                    var4 = function() {
                        var4 = _closure1_slot16;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 15;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = _closure3_slot1;
                        var1['onPress'] = var5;
                        var5 = 14;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPHx;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 99:
                    _fun0006_ip = 108; continue _fun0006;
 101:
                    var4 = function() {
                        var4 = _closure1_slot16;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderSubmittingIndicator;
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 108:
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var6)(var3, var4);
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var5 = _closure1_slot5;
                    var4 = var5.getChannels;
                    var1 = _closure2_slot0;
                    var4 = var4.bind(var5)(var1);
                    var1 = new Array(0);
                    var5 = null;
                    if(!(var5 != var4)) { _fun0009_ip = 79; continue _fun0009 }
 37:
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
                        var3 = 17;
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
 79:
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2, var3);
            _closure2_slot9 = var2;
            var7 = var6.useCallback;
            var4 = new Array(2);
            var4[0] = var2;
            var4[1] = var26;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 18;
                    var3 = var10[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var9 = _closure1_slot0;
                    var2 = 20;
                    var2 = var10[var2];
                    var4 = var9.bind(var1)(var2);
                    var2 = 19;
                    var3 = var10[var2];
                    var2 = var10.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var2 = 14;
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
                        var1 = 13;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.updateGuild;
                        var2 = {};
                        var7 = arg1;
                        var2['rulesChannelId'] = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = 18;
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
                    if(var8) { _fun0010_ip = 172; continue _fun0010 }
 163:
                    var7 = _closure2_slot7;
                    var2 = var7.id;
 172:
                    var3['selectedItem'] = var2;
                    var2 = 'SelectRulesChannel';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var20 = var7.bind(var6)(var3, var4);
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var22;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 18;
                    var3 = var10[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var9 = _closure1_slot0;
                    var2 = 20;
                    var2 = var10[var2];
                    var4 = var9.bind(var1)(var2);
                    var2 = 19;
                    var3 = var10[var2];
                    var2 = var10.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var2 = 14;
                    var7 = var10[var2];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.VqhxxM;
                    var2 = var7.bind(var8)(var2);
                    var3['title'] = var2;
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)();
                    var3['items'] = var2;
                    var2 = function onItemSelect(arg1) {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 13;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.updateGuild;
                        var2 = {};
                        var7 = arg1;
                        var2['publicUpdatesChannelId'] = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = 18;
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
                    if(var8) { _fun0011_ip = 172; continue _fun0011 }
 163:
                    var7 = _closure2_slot8;
                    var2 = var7.id;
 172:
                    var3['selectedItem'] = var2;
                    var2 = 'SelectUpdatesChannel';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var21 = var4.bind(var6)(var2, var3);
            var3 = var10 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 567; continue _fun0001 }
 561:
            var2 = var1.preferredLocale;
 567:
            _closure2_slot10 = var2;
            var6 = _closure1_slot3;
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 18;
                var3 = var11[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.openLazy;
                var10 = _closure1_slot0;
                var3 = 20;
                var3 = var11[var3];
                var7 = var10.bind(var1)(var3);
                var3 = 19;
                var4 = var11[var3];
                var3 = var11.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = {};
                var7 = 14;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.dXE8/P;
                var7 = var8.bind(var9)(var7);
                var3['title'] = var7;
                var2 = _closure1_slot11;
                var2 = var2.bind(var1)();
                var3['items'] = var2;
                var2 = function onItemSelect(arg1) {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var2 = var4[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.updateGuild;
                    var2 = {};
                    var7 = arg1;
                    var2['preferredLocale'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = 18;
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
            var2 = var4.bind(var6)(var2, var3);
            _closure2_slot11 = var2;
            var2 = var10 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 1534; continue _fun0001 }
 617:
            var4 = _closure1_slot16;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 21;
            var2 = var6[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var8 = _closure1_slot18;
            var19 = 22;
            var6 = var6[var19];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Form;
            var6 = {};
            var9 = var9.overview;
            var6['style'] = var9;
            var9 = var10 != var26;
            var28 = null;
            if(!var9) { _fun0001_ip = 738; continue _fun0001 }
 692:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 17;
            var9 = var15[var9];
            var17 = var13.bind(var5)(var9);
            var16 = var17.computeChannelName;
            var35 = _closure1_slot9;
            var34 = _closure1_slot8;
            var33 = true;
            var37 = var17;
            var36 = var26;
            var28 = var37[var16](var36, var35, var34, var33, var32);
 738:
            var15 = _closure1_slot16;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var9 = var26[var19];
            var9 = var27.bind(var5)(var9);
            var13 = var9.FormSection;
            var9 = {};
            var16 = var26[var19];
            var16 = var27.bind(var5)(var16);
            var17 = var16.FormHint;
            var16 = {};
            var30 = var26[var24];
            var30 = var27.bind(var5)(var30);
            var32 = var30.intl;
            var31 = var32.string;
            var30 = var26[var24];
            var30 = var27.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.3q1TEh;
            var30 = var31.bind(var32)(var30);
            var16['children'] = var30;
            var16 = var15.bind(var5)(var17, var16);
            var9['hint'] = var16;
            var16 = var26[var19];
            var16 = var27.bind(var5)(var16);
            var17 = var16.FormRow;
            var16 = {};
            var30 = var26[var24];
            var30 = var27.bind(var5)(var30);
            var32 = var30.intl;
            var31 = var32.string;
            var30 = var26[var24];
            var30 = var27.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.U5BW0d;
            var30 = var31.bind(var32)(var30);
            var16['label'] = var30;
            var29 = !var29;
            var16['disabled'] = var29;
            var26 = var26[var19];
            var26 = var27.bind(var5)(var26);
            var26 = var26.FormRow;
            var27 = var26.Arrow;
            var26 = {};
            var26['label'] = var28;
            var26 = var15.bind(var5)(var27, var26);
            var16['trailing'] = var26;
            var16['onPress'] = var20;
            var16 = var15.bind(var5)(var17, var16);
            var9['children'] = var16;
            var13 = var15.bind(var5)(var13, var9);
            var9 = new Array(4);
            var9[0] = var13;
            var13 = var10 != var22;
            var27 = null;
            if(!var13) { _fun0001_ip = 1040; continue _fun0001 }
 994:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 17;
            var13 = var16[var13];
            var20 = var15.bind(var5)(var13);
            var17 = var20.computeChannelName;
            var35 = _closure1_slot9;
            var34 = _closure1_slot8;
            var33 = true;
            var37 = var20;
            var36 = var22;
            var27 = var37[var17](var36, var35, var34, var33, var32);
 1040:
            var16 = _closure1_slot16;
            var26 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = var22[var19];
            var13 = var26.bind(var5)(var13);
            var15 = var13.FormSection;
            var13 = {};
            var17 = var22[var19];
            var17 = var26.bind(var5)(var17);
            var20 = var17.FormHint;
            var17 = {};
            var28 = var22[var24];
            var28 = var26.bind(var5)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var22[var24];
            var28 = var26.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.Fg6O//;
            var28 = var29.bind(var30)(var28);
            var17['children'] = var28;
            var17 = var16.bind(var5)(var20, var17);
            var13['hint'] = var17;
            var17 = var22[var19];
            var17 = var26.bind(var5)(var17);
            var20 = var17.FormRow;
            var17 = {};
            var28 = var22[var24];
            var28 = var26.bind(var5)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var22[var24];
            var28 = var26.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.vAyDGR;
            var28 = var29.bind(var30)(var28);
            var17['label'] = var28;
            var28 = !var11;
            var17['disabled'] = var28;
            var22 = var22[var19];
            var22 = var26.bind(var5)(var22);
            var22 = var22.FormRow;
            var26 = var22.Arrow;
            var22 = {};
            var22['label'] = var27;
            var22 = var16.bind(var5)(var26, var22);
            var17['trailing'] = var22;
            var17['onPress'] = var21;
            var17 = var16.bind(var5)(var20, var17);
            var13['children'] = var17;
            var13 = var16.bind(var5)(var15, var13);
            var9[1] = var13;
            var12 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
                    var3 = null;
                    var3 = var3 == var2;
                    var10 = undefined;
                    if(var3) { _fun0012_ip = 65; continue _fun0012 }
 60:
                    var10 = var2.label;
 65:
                    var3 = _closure1_slot16;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 22;
                    var1 = var11[var8];
                    var1 = var9.bind(var4)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var5 = var11[var8];
                    var5 = var9.bind(var4)(var5);
                    var6 = var5.FormHint;
                    var5 = {};
                    var12 = 14;
                    var13 = var11[var12];
                    var13 = var9.bind(var4)(var13);
                    var15 = var13.intl;
                    var14 = var15.string;
                    var13 = var11[var12];
                    var13 = var9.bind(var4)(var13);
                    var13 = var13.t;
                    var13 = var13.l2g819;
                    var13 = var14.bind(var15)(var13);
                    var5['children'] = var13;
                    var5 = var3.bind(var4)(var6, var5);
                    var1['hint'] = var5;
                    var5 = var11[var8];
                    var5 = var9.bind(var4)(var5);
                    var6 = var5.FormRow;
                    var5 = {};
                    var13 = var11[var12];
                    var13 = var9.bind(var4)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var11[var12];
                    var12 = var9.bind(var4)(var12);
                    var12 = var12.t;
                    var12 = var12.VeC8vb;
                    var12 = var13.bind(var14)(var12);
                    var5['label'] = var12;
                    var12 = _closure2_slot6;
                    var12 = !var12;
                    var5['disabled'] = var12;
                    var8 = var11[var8];
                    var8 = var9.bind(var4)(var8);
                    var8 = var8.FormRow;
                    var9 = var8.Arrow;
                    var8 = {};
                    var8['label'] = var10;
                    var8 = var3.bind(var4)(var9, var8);
                    var5['trailing'] = var8;
                    var7 = _closure2_slot11;
                    var5['onPress'] = var7;
                    var5 = var3.bind(var4)(var6, var5);
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var12 = var12.bind(var5)();
            var9[2] = var12;
            var10 = null;
            if(!var11) { _fun0001_ip = 1510; continue _fun0001 }
 1304:
            var13 = _closure1_slot18;
            var12 = _closure1_slot17;
            var11 = {};
            var17 = _closure1_slot16;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var14 = var15[var19];
            var14 = var16.bind(var5)(var14);
            var20 = var14.FormSection;
            var14 = {};
            var21 = 23;
            var21 = var15[var21];
            var21 = var16.bind(var5)(var21);
            var22 = var21.TableRow;
            var21 = {};
            var26 = 'danger';
            var21['variant'] = var26;
            var21['onPress'] = var25;
            var25 = var15[var24];
            var25 = var16.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var15[var24];
            var24 = var16.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.c1BmbG;
            var24 = var25.bind(var26)(var24);
            var21['label'] = var24;
            var23 = !var23;
            var21['disabled'] = var23;
            var21 = var17.bind(var5)(var22, var21);
            var14['children'] = var21;
            var20 = var17.bind(var5)(var20, var14);
            var14 = new Array(2);
            var14[0] = var20;
            var15 = var15[var19];
            var15 = var16.bind(var5)(var15);
            var16 = var15.FormHint;
            var15 = {};
            var19 = {};
            var20 = 8;
            var19['marginTop'] = var20;
            var15['style'] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 1510:
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1534:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();