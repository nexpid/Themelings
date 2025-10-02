// app/components_native/channel_settings/ChannelSettingsOverview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot55 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var11 = 0;
    var4 = var6[var11];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var16 = 4;
    var4 = var6[var16];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot9 = var4;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.EDITABLE_VOICE_SETTINGS_TYPES;
    var _closure1_slot12 = var8;
    var8 = var7.isGuildTextChannelType;
    var _closure1_slot13 = var8;
    var8 = var7.THREADED_CHANNEL_TYPES;
    var _closure1_slot14 = var8;
    var7 = var7.THREAD_CHANNEL_TYPES;
    var _closure1_slot15 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.isGuildNSFW;
    var _closure1_slot16 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot17 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot18 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot19 = var7;
    var14 = 14;
    var7 = var6[var14];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot20 = var7;
    var18 = 15;
    var7 = var6[var18];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot21 = var7;
    var17 = 16;
    var7 = var6[var17];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot22 = var7;
    var7 = 17;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot23 = var7;
    var7 = 18;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot24 = var7;
    var7 = 19;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ChannelSettingsAutoFocusElement;
    var _closure1_slot25 = var7;
    var7 = 20;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot26 = var8;
    var8 = var7.BITRATE_DEFAULT;
    var _closure1_slot27 = var8;
    var8 = var7.BITRATE_MIN;
    var _closure1_slot28 = var8;
    var8 = var7.ChannelSettingsSections;
    var _closure1_slot29 = var8;
    var8 = var7.ChannelTypes;
    var _closure1_slot30 = var8;
    var8 = var7.ChannelTypesSets;
    var _closure1_slot31 = var8;
    var8 = var7.GuildFeatures;
    var _closure1_slot32 = var8;
    var8 = var7.GuildSettingsSections;
    var _closure1_slot33 = var8;
    var8 = var7.HelpdeskArticles;
    var _closure1_slot34 = var8;
    var8 = var7.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot35 = var8;
    var8 = var7.MAX_VOICE_USER_LIMIT;
    var _closure1_slot36 = var8;
    var8 = var7.MAX_STAGE_VOICE_USER_LIMIT;
    var _closure1_slot37 = var8;
    var8 = var7.Permissions;
    var _closure1_slot38 = var8;
    var8 = var7.SettingsPaneTypes;
    var _closure1_slot39 = var8;
    var8 = var7.SLOWMODE_VALUES;
    var _closure1_slot40 = var8;
    var8 = var7.UNSAFE_Colors;
    var _closure1_slot41 = var8;
    var8 = var7.VideoQualityMode;
    var _closure1_slot42 = var8;
    var7 = var7.PIN_AND_BYPASS_SLOWMODE_PERMISSION_MIGRATION_BREAKING_CHANGE_TIMESTAMP;
    var _closure1_slot43 = var7;
    var7 = 21;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.ChannelFlags;
    var _closure1_slot44 = var8;
    var8 = var7.MAX_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot45 = var8;
    var7 = var7.MAX_FORUM_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot46 = var7;
    var7 = 22;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.MAX_FORUM_TAGS;
    var _closure1_slot47 = var7;
    var7 = 23;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.DEFAULT_AUTO_ARCHIVE_DURATION;
    var _closure1_slot48 = var7;
    var7 = 24;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.TitleStyleType;
    var _closure1_slot49 = var7;
    var7 = 25;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var15 = var7.Fonts;
    var7 = 26;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot50 = var8;
    var8 = var7.Fragment;
    var _closure1_slot51 = var8;
    var7 = var7.jsxs;
    var _closure1_slot52 = var7;
    var7 = 27;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var10['flex'] = var12;
    var12 = 28;
    var19 = var6[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var19;
    var7['screenContainer'] = var10;
    var10 = {};
    var10['marginHorizontal'] = var18;
    var7['slider'] = var10;
    var10 = {};
    var18 = var6[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.CARD_PRIMARY_BG;
    var10['backgroundColor'] = var18;
    var7['sliderWrapper'] = var10;
    var10 = {};
    var10['marginTop'] = var17;
    var7['alertText'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'paddingHorizontal': 12, 'paddingBottom': 24};
    var7['tagsWrapper'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var16;
    var7['tagsDescription'] = var10;
    var10 = {'justifyContent': 'center', 'margin': 4};
    var7['addTagIconButtonWrapper'] = var10;
    var10 = {'backgroundColor': 'transparent', 'paddingHorizontal': 0, 'marginTop': 4};
    var7['createTagButton'] = var10;
    var10 = {};
    var15 = var15.PRIMARY_SEMIBOLD;
    var10['fontFamily'] = var15;
    var10['fontSize'] = var14;
    var7['createTagButtonText'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOBILE_PRIMARY;
    var10['backgroundColor'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MODIFIER_ACCENT;
    var10['borderColor'] = var12;
    var7['deleteButton'] = var10;
    var10 = {};
    var10['paddingTop'] = var11;
    var7['tagsTitle'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot53 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function ChannelSettingsOverview(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot4;
                var4 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var5, var4);
                var11 = new Array(1);
                var1 = arg1;
                var11[0] = var1;
                var1 = _closure1_slot7;
                var10 = var1.bind(var6)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot55;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var6)(var5);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
                var1 = var4.bind(var6)(var5, var1);
                var _closure3_slot0 = var1;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 29;
                var4 = var7[var4];
                var8 = var5.bind(var6)(var4);
                var7 = var8.findIndex;
                var5 = _closure1_slot40;
                var4 = function(arg1) {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var1 = var1.channel;
                    var2 = var1.rateLimitPerUser;
                    var1 = arg1;
                    var1 = var1 >= var2;
                    return var1;
                };
                var4 = var7.bind(var8)(var5, var4);
                var1['_cooldown'] = var4;
                var4 = {};
                var5 = false;
                var4['hasChanges'] = var5;
                var1['state'] = var4;
                var5 = _closure1_slot9;
                var4 = var5.createRef;
                var4 = var4.bind(var5)();
                var1['defaultSortOrderRadioGroupRef'] = var4;
                var4 = var5.createRef;
                var4 = var4.bind(var5)();
                var1['defaultTagSettingRadioGroupRef'] = var4;
                var4 = var5.createRef;
                var4 = var4.bind(var5)();
                var1['videoQualityModeRadioGroupRef'] = var4;
                var4 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var6 = 0;
                        var11 = 0;
                        var5 = copyRestArgs(var11);
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.navigation;
                        var2 = var3.push;
                        var1 = new Array(0);
                        var11 = var1;
                        var10 = var5;
                        var9 = 0;
                        var4 = arraySpread(var11, var10, var9);
                        var11 = var2;
                        var10 = var1;
                        var9 = var3;
                        var1 = apply(var11, var10, var9);
                        var2 = var5[var6];
                        var1 = _closure1_slot29;
                        var1 = var1.PERMISSIONS;
                        if(!(var2 !== var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 30;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.trackWithMetadata;
                        var1 = _closure1_slot26;
                        var2 = var1.SETTINGS_PANE_VIEWED;
                        var1 = {};
                        var8 = 'channel';
                        var1['settings_type'] = var8;
                        var7 = _closure1_slot39;
                        var7 = var7.CHANNEL_SETTINGS;
                        var1['origin_pane'] = var7;
                        var5 = var5[var6];
                        var1['destination_pane'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 9:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['pushScreen'] = var4;
                var4 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var3 = var3.state;
                        var3 = var3.hasChanges;
                        if(!var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var7 = var3.channel;
                        var _closure4_slot0 = var7;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 31;
                        var3 = var5[var3];
                        var8 = undefined;
                        var6 = var4.bind(var8)(var3);
                        var5 = var6.saveChannel;
                        var4 = var7.id;
                        var3 = {};
                        var9 = var7.name;
                        var3['name'] = var9;
                        var9 = var7.type;
                        var3['type'] = var9;
                        var9 = var7.topic;
                        var3['topic'] = var9;
                        var9 = var7.position;
                        var3['position'] = var9;
                        var9 = var7.bitrate;
                        var3['bitrate'] = var9;
                        var9 = var7.userLimit;
                        var3['userLimit'] = var9;
                        var9 = var7.defaultAutoArchiveDuration;
                        var3['defaultAutoArchiveDuration'] = var9;
                        var9 = var7.nsfw;
                        var3['nsfw'] = var9;
                        var9 = var7.rateLimitPerUser;
                        var3['rateLimitPerUser'] = var9;
                        var9 = var7.videoQualityMode;
                        var3['videoQualityMode'] = var9;
                        var11 = var7.threadMetadata;
                        var10 = null;
                        var12 = var10 == var11;
                        var9 = undefined;
                        if(var12) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var9 = var11.autoArchiveDuration;
case 13:
                        var3['autoArchiveDuration'] = var9;
                        var11 = var7.threadMetadata;
                        var12 = var10 == var11;
                        var9 = undefined;
                        if(var12) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var9 = var11.locked;
case 15:
                        var3['locked'] = var9;
                        var9 = var7.threadMetadata;
                        var10 = var10 == var9;
                        var8 = undefined;
                        if(var10) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var8 = var9.invitable;
case 17:
                        var3['invitable'] = var8;
                        var8 = var7.flags;
                        var3['flags'] = var8;
                        var8 = var7.getDefaultSortOrder;
                        var8 = var8.bind(var7)();
                        var3['defaultSortOrder'] = var8;
                        var8 = var7.defaultForumLayout;
                        var3['defaultForumLayout'] = var8;
                        var8 = var7.getDefaultTagSetting;
                        var8 = var8.bind(var7)();
                        var3['defaultTagSetting'] = var8;
                        var8 = var7.iconEmoji;
                        var3['iconEmoji'] = var8;
                        var7 = var7.themeColor;
                        var3['themeColor'] = var7;
                        var4 = var5.bind(var6)(var4, var3);
                        var3 = var4.then;
                        var2 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var1 = arg1;
                                var2 = var1.status;
                                var1 = 200;
                                if(!(var1 === var2)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var1 = 32;
                                var1 = var7[var1];
                                var9 = undefined;
                                var3 = var6.bind(var9)(var1);
                                var2 = var3.open;
                                var1 = {};
                                var4 = 'THREAD_SETTINGS_UPDATED';
                                var1['key'] = var4;
                                var4 = 33;
                                var4 = var7[var4];
                                var4 = var6.bind(var9)(var4);
                                var1['icon'] = var4;
                                var6 = _closure4_slot0;
                                var4 = var6.isThread;
                                var4 = var4.bind(var6)();
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var5 = 34;
                                var6 = var10[var5];
                                var6 = var8.bind(var9)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var10[var5];
                                var5 = var8.bind(var9)(var5);
                                var5 = var5.t;
                                if(var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                                var4 = var5.FE/oho;
                                var4 = var6.bind(var7)(var4);
                                _fun0005_ip = 23; continue _fun0005;
case 21:
                                var5 = var5.n2Y84O;
                                var4 = var6.bind(var7)(var5);
case 23:
                                var1['content'] = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.navigation;
                                var1 = var2.goBack;
                                var1 = var1.bind(var2)();
case 19:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = false;
                        var1['hasChanges'] = var4;
                        var1 = var2.bind(var3)(var1);
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSave'] = var4;
                var4 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var7 = arg1;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var3.isThread;
                        var4 = var1.bind(var3)();
                        if(var4) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                        var4 = _closure1_slot31;
                        var5 = var4.LIMITED_CHANNEL_NAME;
                        var4 = var5.has;
                        var3 = var3.type;
                        var3 = var4.bind(var5)(var3);
                        var6 = var7;
                        if(!var3) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 36;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.sanitizeGuildTextChannelName;
                        var6 = var3.bind(var4)(var7);
                        _fun0006_ip = 26; continue _fun0006;
case 24:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 35;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = false;
                        var6 = var4.bind(var5)(var7, var3);
case 26:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 31;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.updateChannel;
                        var3 = {};
                        var3['name'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure3_slot0;
                        var3 = var4.setState;
                        var2 = {};
                        var5 = true;
                        var2['hasChanges'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['handleChangeName'] = var4;
                var4 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var3 = var2.channel;
                        var2 = var3.isThread;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 35;
                        var4 = var5[var4];
                        var5 = undefined;
                        var7 = var6.bind(var5)(var4);
                        var6 = var3.name;
                        var4 = true;
                        var6 = var7.bind(var5)(var6, var4);
                        var3 = var3.name;
                        if(!(var6 !== var3)) { _fun0007_ip = 28; continue _fun0007 }
case 30:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 31;
                        var2 = var7[var2];
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.updateChannel;
                        var2 = {};
                        var2['name'] = var6;
                        var2 = var3.bind(var5)(var2);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var1['hasChanges'] = var4;
                        var1 = var2.bind(var3)(var1);
case 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleBlurName'] = var4;
                var4 = function(arg1) {
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 31;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = 37;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.translateInlineEmojiToSurrogates;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['topic'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleChangeTopic'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = global;
                    var7 = var5.Math;
                    var6 = var7.round;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['bitrate'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleBitRateChange'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = arg1;
                    var2['videoQualityMode'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleVideoQualityModeChange'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = arg1;
                    var2['nsfw'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleNsfwChange'] = var4;
                var4 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = _closure3_slot0;
                        var1 = var4.props;
                        var6 = var1.channel;
                        var1 = var4.state;
                        var5 = var1.hasChanges;
                        var3 = _closure1_slot40;
                        var2 = global;
                        var8 = var2.Math;
                        var7 = var8.round;
                        var2 = arg1;
                        var2 = var7.bind(var8)(var2);
                        var7 = var3[var2];
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var2 = var2[var1];
                        var1 = undefined;
                        var8 = var3.bind(var1)(var2);
                        var3 = var8.updateChannel;
                        var2 = {};
                        var2['rateLimitPerUser'] = var7;
                        var2 = var3.bind(var8)(var2);
                        var3 = var4.setState;
                        var2 = {};
                        if(var5) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                        var6 = var6.rateLimitPerUser;
                        var5 = var6 !== var7;
case 31:
                        var2['hasChanges'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['handleSlowmodeChange'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = arg1;
                    var2['defaultAutoArchiveDuration'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleDefaultAutoArchiveDurationChange'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = arg1;
                    var2['autoArchiveDuration'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleAutoArchiveDurationChange'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = arg1;
                    var2['defaultSortOrder'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleDefaultSortOrderChange'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = arg1;
                    var2['defaultTagSetting'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleDefaultTagSettingChange'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = arg1;
                    var2['invitable'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleInvitableChange'] = var4;
                var4 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.updateChannel;
                        var2 = {};
                        var6 = _closure1_slot30;
                        var5 = arg1;
                        if(var5) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                        var5 = var6.GUILD_ANNOUNCEMENT;
                        _fun0009_ip = 35; continue _fun0009;
case 33:
                        var5 = var6.GUILD_TEXT;
case 35:
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure3_slot0;
                        var3 = var4.setState;
                        var2 = {};
                        var5 = true;
                        var2['hasChanges'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['handleAnnouncementChange'] = var4;
                var4 = function(arg1) {
                    var4 = _closure3_slot0;
                    var1 = var4.props;
                    var3 = var1.channel;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 38;
                    var6 = var5[var1];
                    var1 = undefined;
                    var9 = var7.bind(var1)(var6);
                    var8 = var9.setFlag;
                    var7 = var3.flags;
                    var3 = _closure1_slot44;
                    var6 = var3.ACTIVE_CHANNELS_REMOVED;
                    var3 = arg1;
                    var3 = !var3;
                    var6 = var8.bind(var9)(var7, var6, var3);
                    var3 = _closure1_slot1;
                    var2 = 31;
                    var2 = var5[var2];
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.updateChannel;
                    var2 = {};
                    var2['flags'] = var6;
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleActiveChannelsRemovedChange'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = global;
                    var7 = var5.Math;
                    var6 = var7.round;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['userLimit'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['hasChanges'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleUserLimitChange'] = var4;
                var5 = _closure1_slot3;
                var4 = function* () {
                    var1 = function* anon_0_() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                            var3 = undefined;
                            var _closure5_slot0 = var3;
                            var5 = _closure1_slot53;
                            var2 = _closure3_slot0;
                            var4 = var2.context;
                            var20 = var5.bind(var3)(var4);
                            var2 = var2.props;
                            var12 = var2.channel;
                            var5 = _closure1_slot20;
                            var4 = var5.getGuild;
                            var2 = var12.getGuildId;
                            var2 = var2.bind(var12)();
                            var5 = var4.bind(var5)(var2);
                            _closure5_slot0 = var5;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 39;
                            var2 = var6[var2];
                            var9 = var4.bind(var3)(var2);
                            var6 = var9.isDefaultChannelThresholdMetAfterDelete;
                            var2 = var12.getGuildId;
                            var4 = var2.bind(var12)();
                            var2 = var12.id;
                            var2 = var6.bind(var9)(var4, var2);
                            SaveGenerator(address=131);
case 38:
                            return var2;
case 39:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                            var4 = null;
                            if(!(var4 != var5)) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                            var10 = var5.features;
                            var9 = var10.has;
                            var6 = _closure1_slot32;
                            var6 = var6.COMMUNITY;
                            var6 = var9.bind(var10)(var6);
                            if(!var6) { _fun0010_ip = 42; continue _fun0010 }
case 44:
                            var9 = var5.rulesChannelId;
                            var6 = var12.id;
                            if(!(var9 !== var6)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                            var9 = var5.publicUpdatesChannelId;
                            var6 = var12.id;
                            if(!(var9 === var6)) { _fun0010_ip = 42; continue _fun0010 }
case 45:
                            var9 = var5.rulesChannelId;
                            var6 = var12.id;
                            if(!(var9 !== var6)) { _fun0010_ip = 47; continue _fun0010 }
case 16:
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 34;
                            var9 = var13[var6];
                            var9 = var11.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var13[var6];
                            var6 = var11.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6.1B1/ND;
                            var17 = var9.bind(var10)(var6);
                            _fun0010_ip = 48; continue _fun0010;
case 47:
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 34;
                            var9 = var13[var6];
                            var9 = var11.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var13[var6];
                            var6 = var11.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6.yjrZPj;
                            var17 = var9.bind(var10)(var6);
case 48:
                            var9 = _closure1_slot1;
                            var25 = _closure1_slot2;
                            var6 = 40;
                            var6 = var25[var6];
                            var10 = var9.bind(var3)(var6);
                            var9 = var10.show;
                            var6 = {};
                            var22 = _closure1_slot0;
                            var19 = 34;
                            var11 = var25[var19];
                            var11 = var22.bind(var3)(var11);
                            var14 = var11.intl;
                            var13 = var14.string;
                            var11 = var25[var19];
                            var11 = var22.bind(var3)(var11);
                            var11 = var11.t;
                            var11 = var11.TY/V+P;
                            var11 = var13.bind(var14)(var11);
                            var6['title'] = var11;
                            var11 = var25[var19];
                            var11 = var22.bind(var3)(var11);
                            var14 = var11.intl;
                            var13 = var14.string;
                            var11 = var25[var19];
                            var11 = var22.bind(var3)(var11);
                            var11 = var11.t;
                            var11 = var11.BddRzc;
                            var11 = var13.bind(var14)(var11);
                            var6['confirmText'] = var11;
                            var14 = _closure1_slot52;
                            var13 = _closure1_slot51;
                            var11 = {};
                            var18 = _closure1_slot50;
                            var15 = 41;
                            var15 = var25[var15];
                            var15 = var22.bind(var3)(var15);
                            var16 = var15.Text;
                            var15 = {};
                            var23 = var20.alertText;
                            var15['style'] = var23;
                            var23 = 'text-md/medium';
                            var15['variant'] = var23;
                            var15['children'] = var17;
                            var16 = var18.bind(var3)(var16, var15);
                            var15 = new Array(2);
                            var15[0] = var16;
                            var16 = 42;
                            var16 = var25[var16];
                            var16 = var22.bind(var3)(var16);
                            var17 = var16.TextWithIOSLinkWorkaround;
                            var16 = {};
                            var24 = var20.alertText;
                            var16['style'] = var24;
                            var16['variant'] = var23;
                            var23 = var25[var19];
                            var23 = var22.bind(var3)(var23);
                            var24 = var23.intl;
                            var23 = var24.format;
                            var19 = var25[var19];
                            var19 = var22.bind(var3)(var19);
                            var19 = var19.t;
                            var22 = var19.LAJbDg;
                            var19 = {};
                            var25 = function onClick() {
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 40;
                                var3 = var5[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 31;
                                var3 = var5[var3];
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 43;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.open;
                                var3 = _closure5_slot0;
                                var3 = var3.id;
                                var2 = _closure1_slot33;
                                var2 = var2.COMMUNITY;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            };
                            var19['onClick'] = var25;
                            var19 = var23.bind(var24)(var22, var19);
                            var16['children'] = var19;
                            var16 = var18.bind(var3)(var17, var16);
                            var15[1] = var16;
                            var11['children'] = var15;
                            var11 = var14.bind(var3)(var13, var11);
                            var6['children'] = var11;
                            var6 = var9.bind(var10)(var6);
                            _fun0010_ip = 49; continue _fun0010;
case 42:
                            if(!(var4 != var5)) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                            if(var2) { _fun0010_ip = 50; continue _fun0010 }
case 52:
                            var5 = _closure1_slot1;
                            var22 = _closure1_slot2;
                            var4 = 40;
                            var4 = var22[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.show;
                            var4 = {};
                            var18 = _closure1_slot0;
                            var17 = 34;
                            var9 = var22[var17];
                            var9 = var18.bind(var3)(var9);
                            var11 = var9.intl;
                            var10 = var11.string;
                            var9 = var22[var17];
                            var9 = var18.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.TY/V+P;
                            var9 = var10.bind(var11)(var9);
                            var4['title'] = var9;
                            var9 = var22[var17];
                            var9 = var18.bind(var3)(var9);
                            var11 = var9.intl;
                            var10 = var11.string;
                            var9 = var22[var17];
                            var9 = var18.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.BddRzc;
                            var9 = var10.bind(var11)(var9);
                            var4['confirmText'] = var9;
                            var11 = _closure1_slot52;
                            var10 = _closure1_slot51;
                            var9 = {};
                            var16 = _closure1_slot50;
                            var13 = 41;
                            var13 = var22[var13];
                            var13 = var18.bind(var3)(var13);
                            var14 = var13.Text;
                            var13 = {};
                            var15 = var20.alertText;
                            var13['style'] = var15;
                            var19 = 'text-md/medium';
                            var13['variant'] = var19;
                            var15 = var22[var17];
                            var15 = var18.bind(var3)(var15);
                            var24 = var15.intl;
                            var23 = var24.string;
                            var15 = var22[var17];
                            var15 = var18.bind(var3)(var15);
                            var15 = var15.t;
                            var15 = var15.iWlB6u;
                            var15 = var23.bind(var24)(var15);
                            var13['children'] = var15;
                            var14 = var16.bind(var3)(var14, var13);
                            var13 = new Array(2);
                            var13[0] = var14;
                            var14 = 42;
                            var14 = var22[var14];
                            var14 = var18.bind(var3)(var14);
                            var15 = var14.TextWithIOSLinkWorkaround;
                            var14 = {};
                            var20 = var20.alertText;
                            var14['style'] = var20;
                            var14['variant'] = var19;
                            var19 = var22[var17];
                            var19 = var18.bind(var3)(var19);
                            var20 = var19.intl;
                            var19 = var20.format;
                            var17 = var22[var17];
                            var17 = var18.bind(var3)(var17);
                            var17 = var17.t;
                            var18 = var17.ajiBwM;
                            var17 = {};
                            var21 = function onClick() {
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 40;
                                var3 = var5[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 31;
                                var3 = var5[var3];
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 43;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.open;
                                var3 = _closure5_slot0;
                                var3 = var3.id;
                                var2 = _closure1_slot33;
                                var2 = var2.ONBOARDING;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            };
                            var17['onClick'] = var21;
                            var17 = var19.bind(var20)(var18, var17);
                            var14['children'] = var17;
                            var14 = var16.bind(var3)(var15, var14);
                            var13[1] = var14;
                            var9['children'] = var13;
                            var9 = var11.bind(var3)(var10, var9);
                            var4['children'] = var9;
                            var4 = var5.bind(var6)(var4);
                            _fun0010_ip = 49; continue _fun0010;
case 50:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 44;
                            var4 = var6[var4];
                            var11 = var5.bind(var3)(var4);
                            var10 = var11.computeChannelName;
                            var28 = _closure1_slot24;
                            var27 = _closure1_slot23;
                            var26 = true;
                            var30 = var11;
                            var29 = var12;
                            var16 = var30[var10](var29, var28, var27, var26, var25);
                            var5 = _closure1_slot1;
                            var4 = 40;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.show;
                            var4 = {};
                            var9 = _closure3_slot0;
                            var9 = var9.props;
                            var9 = var9.isForumPost;
                            if(var9) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                            var9 = _closure3_slot0;
                            var9 = var9.props;
                            var9 = var9.isThread;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var10 = 34;
                            var11 = var14[var10];
                            var11 = var13.bind(var3)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var3)(var10);
                            var10 = var10.t;
                            if(var9) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                            var9 = var10.8D8Rsb;
                            var9 = var11.bind(var12)(var9);
                            _fun0010_ip = 57; continue _fun0010;
case 55:
                            var10 = var10.H7vTe3;
                            var9 = var11.bind(var12)(var10);
case 57:
                            _fun0010_ip = 58; continue _fun0010;
case 53:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var10 = 34;
                            var11 = var14[var10];
                            var11 = var13.bind(var3)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10.nEOg1N;
                            var9 = var11.bind(var12)(var10);
case 58:
                            var4['title'] = var9;
                            var13 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var10 = 34;
                            var11 = var9[var10];
                            var11 = var13.bind(var3)(var11);
                            var15 = var11.intl;
                            var14 = var15.format;
                            var11 = var9[var10];
                            var11 = var13.bind(var3)(var11);
                            var11 = var11.t;
                            var12 = var11.a6Gz9P;
                            var11 = {};
                            var11['channelName'] = var16;
                            var11 = var14.bind(var15)(var12, var11);
                            var4['body'] = var11;
                            var11 = var9[var10];
                            var11 = var13.bind(var3)(var11);
                            var14 = var11.intl;
                            var12 = var14.string;
                            var11 = var9[var10];
                            var11 = var13.bind(var3)(var11);
                            var11 = var11.t;
                            var11 = var11.gm1Ven;
                            var11 = var12.bind(var14)(var11);
                            var4['cancelText'] = var11;
                            var11 = var9[var10];
                            var11 = var13.bind(var3)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var9[var10];
                            var10 = var13.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10.p89ACg;
                            var10 = var11.bind(var12)(var10);
                            var4['confirmText'] = var10;
                            var8 = _closure3_slot0;
                            var8 = var8.handleConfirmDeleteChannel;
                            var4['onConfirm'] = var8;
                            var8 = _closure1_slot1;
                            var7 = 45;
                            var7 = var9[var7];
                            var7 = var8.bind(var3)(var7);
                            var7 = var7.Colors;
                            var7 = var7.RED;
                            var4['confirmColor'] = var7;
                            var4 = var5.bind(var6)(var4);
case 49:
                            return var3;
case 40:
                            return var2;
case 36:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var1['handleDeleteChannel'] = var4;
                var4 = function* () {
                    var1 = function* anon_0_() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0011_ip = 48; continue _fun0011 }
case 59:
                            var2 = undefined;
                            var3 = undefined;
                            var4 = undefined;
                            var7 = undefined;
                            var5 = _closure3_slot0;
                            var5 = var5.props;
                            var3 = var5.channel;
case 60: // try_start_0
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var6 = 31;
                            var6 = var9[var6];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.deleteChannel;
                            var3 = var3.id;
                            var3 = var6.bind(var8)(var3);
                            SaveGenerator(address=78);
case 4:
                            return var3;
case 61:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 46;
                            var5 = var8[var5];
                            var6 = var6.bind(var2)(var5);
                            var5 = var6.getRootNavigationRef;
                            var8 = var5.bind(var6)();
                            var4 = var8;
                            var6 = null;
                            var6 = var6 != var8;
                            var5 = var6;
                            if(!var6) { _fun0011_ip = 64; continue _fun0011 }
case 38:
                            var8 = var4;
                            var6 = var8.isReady;
                            var5 = var6.bind(var8)();
case 64:
                            if(!var5) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                            var5 = var4;
                            var4 = var5.goBack;
                            var4 = var4.bind(var5)();
case 65: // try_end0
                            _fun0011_ip = 67; continue _fun0011;
case 62:
                            return var3;
case 68: // catch_target0
                            CatchBlockStart(arg_register=7);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 47;
                            var3 = var5[var3];
                            var3 = var4.bind(var2)(var3);
                            var3 = var3.APIError;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {constructor: {value: var3}});
                            var13 = var4;
                            var12 = var8;
                            var3 = new var13[var3](var12, var11);
                            var4 = var3 instanceof Object ? var3 : var4;
                            var3 = var4.getAnyErrorMessage;
                            var9 = var3.bind(var4)();
                            var7 = var9;
                            var4 = _closure1_slot1;
                            var3 = 32;
                            var3 = var5[var3];
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.open;
                            var3 = {};
                            var8 = 'CHANNEL_SETTINGS_DELETE_CHANNEL_ERROR';
                            var3['key'] = var8;
                            var8 = null;
                            if(!(var8 == var9)) { _fun0011_ip = 69; continue _fun0011 }
case 70:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 34;
                            var8 = var11[var6];
                            var8 = var10.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var6 = var11[var6];
                            var6 = var10.bind(var2)(var6);
                            var6 = var6.t;
                            var6 = var6.CKsXk5;
                            var6 = var8.bind(var9)(var6);
                            _fun0011_ip = 71; continue _fun0011;
case 69:
                            var6 = var7;
case 71:
                            var3['content'] = var6;
                            var3 = var4.bind(var5)(var3);
case 67:
                            return var2;
case 48:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var1['handleConfirmDeleteChannel'] = var4;
                var4 = function(arg1) {
                    var4 = _closure3_slot0;
                    var3 = var4.pushScreen;
                    var1 = _closure1_slot29;
                    var2 = var1.EDIT_FORUM_TAG;
                    var1 = {};
                    var5 = arg1;
                    var1['tag'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handlePressTag'] = var4;
                var4 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.canManageChannels;
                        if(!var2) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                        var3 = _closure3_slot0;
                        var1 = var3.props;
                        var6 = var1.channel;
                        var4 = var6.hasFlag;
                        var5 = _closure1_slot44;
                        var2 = var5.REQUIRE_TAG;
                        var2 = var4.bind(var6)(var2);
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 38;
                        var7 = var6[var4];
                        var4 = undefined;
                        var9 = var8.bind(var4)(var7);
                        var8 = var9.setFlag;
                        var7 = var3.props;
                        var7 = var7.channel;
                        var7 = var7.flags;
                        var5 = var5.REQUIRE_TAG;
                        var2 = !var2;
                        var5 = var8.bind(var9)(var7, var5, var2);
                        var2 = _closure1_slot1;
                        var1 = 31;
                        var1 = var6[var1];
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.updateChannel;
                        var1 = {};
                        var1['flags'] = var5;
                        var1 = var2.bind(var4)(var1);
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1['hasChanges'] = var4;
                        var1 = var2.bind(var3)(var1);
case 72:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleToggleRequireTag'] = var4;
                var4 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.canManageChannels;
                        if(!var2) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                        var3 = _closure3_slot0;
                        var1 = var3.props;
                        var6 = var1.channel;
                        var4 = var6.hasFlag;
                        var5 = _closure1_slot44;
                        var2 = var5.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                        var2 = var4.bind(var6)(var2);
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 38;
                        var7 = var6[var4];
                        var4 = undefined;
                        var9 = var8.bind(var4)(var7);
                        var8 = var9.setFlag;
                        var7 = var3.props;
                        var7 = var7.channel;
                        var7 = var7.flags;
                        var5 = var5.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                        var2 = !var2;
                        var5 = var8.bind(var9)(var7, var5, var2);
                        var2 = _closure1_slot1;
                        var1 = 31;
                        var1 = var6[var1];
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.updateChannel;
                        var1 = {};
                        var1['flags'] = var5;
                        var1 = var2.bind(var4)(var1);
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1['hasChanges'] = var4;
                        var1 = var2.bind(var3)(var1);
case 72:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleToggleShowMediaDownloadOptions'] = var4;
                var3 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.errors;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0014_ip = 25; continue _fun0014 }
case 74:
                        var2 = arg1;
                        var1 = var3[var2];
case 25:
                        return var1;
                    }
                };
                var1['getError'] = var3;
                var3 = var1.state;
                var4 = _closure1_slot17;
                var2 = var4.hasChanges;
                var2 = var2.bind(var4)();
                var3['hasChanges'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var4 = var2.updateNavigation;
                var3 = var2.state;
                var1 = undefined;
                var3 = var4.bind(var2)(var1, var3);
                var3 = var2.props;
                var3 = var3.regions;
                var5 = null;
                var3 = var5 == var3;
                if(!var3) { _fun0015_ip = 75; continue _fun0015 }
case 76:
                var4 = var2.props;
                var4 = var4.guild;
                var3 = var5 != var4;
case 75:
                if(!var3) { _fun0015_ip = 77; continue _fun0015 }
case 78:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 48;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.fetchRegions;
                var2 = var2.props;
                var2 = var2.guild;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
case 77:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 30;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.trackWithMetadata;
                var2 = _closure1_slot26;
                var3 = var2.SETTINGS_PANE_VIEWED;
                var2 = {};
                var7 = 'channel';
                var2['settings_type'] = var7;
                var6 = _closure1_slot39;
                var6 = var6.CHANNEL_SETTINGS;
                var2['destination_pane'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(30);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var4 = var1.updateNavigation;
                var3 = arg2;
                var3 = var4.bind(var1)(var2, var3);
                var3 = var2.channel;
                var4 = var3.defaultSortOrder;
                var3 = var1.props;
                var3 = var3.channel;
                var3 = var3.defaultSortOrder;
                if(!(var4 !== var3)) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                var3 = var1.defaultSortOrderRadioGroupRef;
                var5 = var3.current;
                var3 = null;
                if(!(var3 != var5)) { _fun0016_ip = 79; continue _fun0016 }
case 81:
                var4 = var5.setValue;
                var3 = var1.props;
                var6 = var3.channel;
                var3 = var6.getDefaultSortOrder;
                var3 = var3.bind(var6)();
                var3 = var4.bind(var5)(var3);
case 79:
                var3 = var2.channel;
                var4 = var3.defaultTagSetting;
                var3 = var1.props;
                var3 = var3.channel;
                var3 = var3.defaultTagSetting;
                if(!(var4 !== var3)) { _fun0016_ip = 82; continue _fun0016 }
case 39:
                var3 = var1.defaultTagSettingRadioGroupRef;
                var5 = var3.current;
                var3 = null;
                if(!(var3 != var5)) { _fun0016_ip = 82; continue _fun0016 }
case 83:
                var4 = var5.setValue;
                var3 = var1.props;
                var6 = var3.channel;
                var3 = var6.getDefaultTagSetting;
                var3 = var3.bind(var6)();
                var3 = var4.bind(var5)(var3);
case 82:
                var2 = var2.channel;
                var3 = var2.videoQualityMode;
                var2 = var1.props;
                var2 = var2.channel;
                var2 = var2.videoQualityMode;
                if(!(var3 !== var2)) { _fun0016_ip = 84; continue _fun0016 }
case 85:
                var2 = var1.videoQualityModeRadioGroupRef;
                var3 = var2.current;
                var4 = null;
                if(!(var4 != var3)) { _fun0016_ip = 84; continue _fun0016 }
case 86:
                var2 = var3.setValue;
                var1 = var1.props;
                var1 = var1.channel;
                var1 = var1.videoQualityMode;
                if(!(var4 == var1)) { _fun0016_ip = 87; continue _fun0016 }
case 88:
                var4 = _closure1_slot42;
                var1 = var4.AUTO;
case 87:
                var1 = var2.bind(var3)(var1);
case 84:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'updateNavigation';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var6 = arg1;
                var8 = this;
                var _closure3_slot0 = var8;
                var1 = var8.props;
                var3 = var1.navigation;
                var7 = var1.submitting;
                var2 = var1.isThread;
                var4 = var1.channel;
                var4 = var4.type;
                var1 = var1.isForumPost;
                var8 = var8.state;
                var8 = var8.hasChanges;
                var _closure3_slot1 = var8;
                var9 = null;
                if(!(var9 != var6)) { _fun0017_ip = 89; continue _fun0017 }
case 3:
                var9 = var6.submitting;
                if(!(var7 === var9)) { _fun0017_ip = 89; continue _fun0017 }
case 90:
                var9 = var6.isThread;
                if(!(var2 === var9)) { _fun0017_ip = 89; continue _fun0017 }
case 91:
                var6 = var6.channel;
                var6 = var6.type;
                if(!(var4 === var6)) { _fun0017_ip = 89; continue _fun0017 }
case 92:
                var6 = arg2;
                var6 = var6.hasChanges;
                if(!(var8 !== var6)) { _fun0017_ip = 93; continue _fun0017 }
case 89:
                if(var2) { _fun0017_ip = 94; continue _fun0017 }
case 39:
                var2 = _closure1_slot30;
                var2 = var2.GUILD_CATEGORY;
                if(!(var4 !== var2)) { _fun0017_ip = 95; continue _fun0017 }
case 66:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 34;
                var4 = var11[var2];
                var9 = undefined;
                var4 = var10.bind(var9)(var4);
                var8 = var4.intl;
                var4 = var8.string;
                var2 = var11[var2];
                var2 = var10.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.XPDhcX;
                var4 = var4.bind(var8)(var2);
                _fun0017_ip = 96; continue _fun0017;
case 95:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 34;
                var8 = var12[var2];
                var10 = undefined;
                var8 = var11.bind(var10)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var12[var2];
                var2 = var11.bind(var10)(var2);
                var2 = var2.t;
                var2 = var2./uELTk;
                var4 = var8.bind(var9)(var2);
case 96:
                _fun0017_ip = 48; continue _fun0017;
case 94:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 34;
                var8 = var12[var2];
                var10 = undefined;
                var8 = var11.bind(var10)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var12[var2];
                var2 = var11.bind(var10)(var2);
                var2 = var2.t;
                if(var1) { _fun0017_ip = 97; continue _fun0017 }
case 98:
                var1 = var2.d4n5Q0;
                var1 = var8.bind(var9)(var1);
                _fun0017_ip = 67; continue _fun0017;
case 97:
                var2 = var2.BsJrho;
                var1 = var8.bind(var9)(var2);
case 67:
                var4 = var1;
case 48:
                var2 = var3.setOptions;
                var1 = {};
                if(var7) { _fun0017_ip = 99; continue _fun0017 }
case 100:
                var5 = function(arg1) {
                    var4 = _closure1_slot50;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 50;
                    var1 = var10[var1];
                    var3 = undefined;
                    var1 = var9.bind(var3)(var1);
                    var2 = var1.HeaderTextButton;
                    var1 = {};
                    var11 = arg1;
                    var12 = var1;
                    var5 = copyDataProperties(var12, var11);
                    var6 = _closure3_slot0;
                    var7 = var6.handleSave;
                    var6 = 'onPress';
                    var1[var6] = var7;
                    var6 = 34;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.R3BPHx;
                    var7 = var7.bind(var8)(var6);
                    var6 = 'label';
                    var1[var6] = var7;
                    var5 = _closure3_slot1;
                    var6 = !var5;
                    var5 = 'disabled';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                _fun0017_ip = 101; continue _fun0017;
case 99:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 49;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var5 = var6.HeaderSubmittingIndicator;
case 101:
                var1['headerRight'] = var5;
                var1['title'] = var4;
                var1 = var2.bind(var3)(var1);
case 93:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'renderChannelInfo';
        var5['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var12 = this;
                var1 = var12.props;
                var14 = var1.channel;
                var15 = var1.canManageChannels;
                var11 = var1.canManageThread;
                var10 = var1.canSendMessages;
                var8 = var1.isChannelOwner;
                var3 = var1.isThread;
                var9 = var1.isForumPost;
                var5 = _closure1_slot13;
                var2 = var14.type;
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                if(!var2) { _fun0018_ip = 5; continue _fun0018 }
case 102:
                var2 = !var3;
case 5:
                if(var2) { _fun0018_ip = 24; continue _fun0018 }
case 30:
                var5 = _closure1_slot31;
                var7 = var5.GUILD_THREADS_ONLY;
                var6 = var7.has;
                var5 = var14.type;
                var2 = var6.bind(var7)(var5);
case 24:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 51;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.getIsChannelNameSettingEditable;
                var5 = {};
                var5['canManageThread'] = var11;
                var5['canManageChannels'] = var15;
                var5['canSendMessages'] = var10;
                var5['isForumPost'] = var9;
                var5['isThread'] = var3;
                var5['isChannelOwner'] = var8;
                var16 = var6.bind(var7)(var5);
                var5 = var14.isForumPost;
                var5 = var5.bind(var14)();
                if(var5) { _fun0018_ip = 103; continue _fun0018 }
case 44:
                if(var3) { _fun0018_ip = 104; continue _fun0018 }
case 105:
                var5 = var14.type;
                var3 = _closure1_slot30;
                var3 = var3.GUILD_CATEGORY;
                if(!(var5 !== var3)) { _fun0018_ip = 96; continue _fun0018 }
case 19:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 34;
                var5 = var8[var3];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.PVbHDg;
                var10 = var5.bind(var6)(var3);
                _fun0018_ip = 106; continue _fun0018;
case 96:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 34;
                var5 = var8[var3];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.OCAkGB;
                var10 = var5.bind(var6)(var3);
case 106:
                _fun0018_ip = 107; continue _fun0018;
case 104:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 34;
                var5 = var8[var3];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.j3XWjI;
                var10 = var5.bind(var6)(var3);
case 107:
                _fun0018_ip = 108; continue _fun0018;
case 103:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 34;
                var5 = var8[var3];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.uyVrTE;
                var10 = var5.bind(var6)(var3);
case 108:
                var6 = _closure1_slot50;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 52;
                var3 = var13[var8];
                var3 = var11.bind(var4)(var3);
                var5 = var3.FormSection;
                var3 = {};
                var7 = _closure1_slot49;
                var7 = var7.ANDROID_NO_BORDER;
                var3['titleStyleType'] = var7;
                var3['title'] = var10;
                var7 = var13[var8];
                var7 = var11.bind(var4)(var7);
                var9 = var7.FormInput;
                var7 = {};
                var17 = var12.props;
                var17 = var17.channelNameRef;
                var7['ref'] = var17;
                var7['accessibilityLabel'] = var10;
                var10 = 44;
                var10 = var13[var10];
                var17 = var11.bind(var4)(var10);
                var13 = var17.computeChannelName;
                var11 = _closure1_slot24;
                var10 = _closure1_slot23;
                var10 = var13.bind(var17)(var14, var11, var10);
                var7['value'] = var10;
                var10 = var12.handleChangeName;
                var7['onChange'] = var10;
                var10 = true;
                var7['enableAndroidSanitizedInputWorkaround'] = var10;
                var11 = var12.handleBlurName;
                var7['onBlur'] = var11;
                var11 = !var16;
                var7['disabled'] = var11;
                var11 = false;
                var7['showTopContainer'] = var11;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 53;
                var17 = var17[var13];
                var17 = var18.bind(var4)(var17);
                var17 = var17.ClearButtonVisibility;
                if(var16) { _fun0018_ip = 109; continue _fun0018 }
case 110:
                var16 = var17.NEVER;
                _fun0018_ip = 111; continue _fun0018;
case 109:
                var16 = var17.WITH_CONTENT;
case 111:
                var7['clearButtonVisibility'] = var16;
                var16 = _closure1_slot35;
                var7['maxLength'] = var16;
                var17 = var12.getError;
                var16 = 'name';
                var16 = var17.bind(var12)(var16);
                var7['error'] = var16;
                var7 = var6.bind(var4)(var9, var7);
                var3['children'] = var7;
                var7 = var6.bind(var4)(var5, var3);
                var6 = undefined;
                if(!var2) { _fun0018_ip = 112; continue _fun0018 }
case 113:
                var2 = var14.isForumLikeChannel;
                var9 = var2.bind(var14)();
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 34;
                var3 = var17[var2];
                var3 = var16.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var17[var2];
                var2 = var16.bind(var4)(var2);
                var2 = var2.t;
                if(var9) { _fun0018_ip = 114; continue _fun0018 }
case 115:
                var9 = var2.X8jMDg;
                var16 = var3.bind(var5)(var9);
                _fun0018_ip = 116; continue _fun0018;
case 114:
                var2 = var2.yR6Hwc;
                var16 = var3.bind(var5)(var2);
case 116:
                var5 = _closure1_slot50;
                var9 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = var18[var8];
                var2 = var9.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var2['title'] = var16;
                var8 = var18[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.FormInput;
                var8 = {};
                var8['accessibilityLabel'] = var16;
                var17 = _closure1_slot1;
                var16 = 37;
                var16 = var18[var16];
                var18 = var17.bind(var4)(var16);
                var17 = var18.translateSurrogatesToInlineEmoji;
                var16 = var14.topic;
                var16 = var17.bind(var18)(var16);
                var8['value'] = var16;
                var16 = var12.handleChangeTopic;
                var8['onChange'] = var16;
                var8['multiline'] = var10;
                var15 = !var15;
                var8['disabled'] = var15;
                var15 = 4;
                var8['numberOfLines'] = var15;
                var8['autoCorrect'] = var10;
                var8['showTopContainer'] = var11;
                var11 = var14.isForumLikeChannel;
                var11 = var11.bind(var14)();
                if(var11) { _fun0018_ip = 117; continue _fun0018 }
case 118:
                var11 = _closure1_slot45;
                _fun0018_ip = 119; continue _fun0018;
case 117:
                var11 = _closure1_slot46;
case 119:
                var8['maxLength'] = var11;
                var8['showCharactersRemaining'] = var10;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var13];
                var10 = var11.bind(var4)(var10);
                var10 = var10.ClearButtonVisibility;
                var10 = var10.NEVER;
                var8['clearButtonVisibility'] = var10;
                var11 = var12.getError;
                var10 = 'topic';
                var10 = var11.bind(var12)(var10);
                var8['error'] = var10;
                var8 = var5.bind(var4)(var9, var8);
                var2['children'] = var8;
                var6 = var5.bind(var4)(var3, var2);
case 112:
                var3 = _closure1_slot52;
                var2 = _closure1_slot51;
                var1 = {};
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'renderNsfwConfig';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var12 = this;
                var1 = var12.props;
                var8 = var1.channel;
                var2 = var1.canManageChannels;
                var11 = var1.isNSFWDisabled;
                var4 = var8.type;
                var1 = _closure1_slot30;
                var3 = var1.GUILD_TEXT;
                var10 = null;
                var1 = null;
                if(!(var4 === var3)) { _fun0019_ip = 120; continue _fun0019 }
case 121:
                var1 = null;
                if(!var2) { _fun0019_ip = 120; continue _fun0019 }
case 7:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 54;
                var2 = var4[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                var1 = null;
                if(var2) { _fun0019_ip = 120; continue _fun0019 }
case 24:
                var5 = _closure1_slot50;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = 52;
                var3 = var16[var2];
                var3 = var15.bind(var6)(var3);
                var4 = var3.FormSection;
                var3 = {};
                var7 = var16[var2];
                var7 = var15.bind(var6)(var7);
                var14 = var7.FormHint;
                var7 = {};
                var13 = 34;
                var17 = var16[var13];
                var17 = var15.bind(var6)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var16[var13];
                var17 = var15.bind(var6)(var17);
                var17 = var17.t;
                var17 = var17.9eUgwc;
                var17 = var18.bind(var19)(var17);
                var7['children'] = var17;
                var7 = var5.bind(var6)(var14, var7);
                var3['hint'] = var7;
                var2 = var16[var2];
                var2 = var15.bind(var6)(var2);
                var7 = var2.FormSwitchRow;
                var2 = {};
                var14 = var16[var13];
                var14 = var15.bind(var6)(var14);
                var18 = var14.intl;
                var17 = var18.string;
                var14 = var16[var13];
                var14 = var15.bind(var6)(var14);
                var14 = var14.t;
                var14 = var14.Es25YW;
                var14 = var17.bind(var18)(var14);
                var2['label'] = var14;
                var14 = 55;
                var14 = var16[var14];
                var15 = var15.bind(var6)(var14);
                var14 = var15.isChannelOrGuildNSFW;
                var14 = var14.bind(var15)(var8);
                var2['value'] = var14;
                var12 = var12.handleNsfwChange;
                var2['onValueChange'] = var12;
                var2['disabled'] = var11;
                var8 = var8.linkedLobby;
                var10 = var10 != var8;
                var8 = undefined;
                if(!var10) { _fun0019_ip = 101; continue _fun0019 }
case 122:
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = var9[var13];
                var10 = var12.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.l6uSVV;
                var8 = var10.bind(var11)(var9);
case 101:
                var2['subLabel'] = var8;
                var2 = var5.bind(var6)(var7, var2);
                var3['children'] = var2;
                var2 = 'nsfw-section';
                var1 = var5.bind(var6)(var4, var3, var2);
case 120:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'renderSlowmode';
        var5['key'] = var7;
        var7 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var9 = this;
                var2 = _closure1_slot53;
                var1 = var9.context;
                var7 = undefined;
                var11 = var2.bind(var7)(var1);
                var1 = var9.props;
                var4 = var1.channel;
                var2 = var1.canManageChannels;
                var1 = var1.isThreadModerator;
                var5 = var4.type;
                var3 = _closure1_slot30;
                var3 = var3.GUILD_TEXT;
                if(!(var5 === var3)) { _fun0020_ip = 123; continue _fun0020 }
case 124:
                if(var2) { _fun0020_ip = 125; continue _fun0020 }
case 123:
                var2 = var4.isThread;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0020_ip = 90; continue _fun0020 }
case 126:
                if(var1) { _fun0020_ip = 125; continue _fun0020 }
case 90:
                var1 = null;
                return var1;
case 125:
                var1 = new Array(0);
                var15 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 56;
                var2 = var5[var2];
                var13 = var15.bind(var7)(var2);
                var8 = var13.getSecondsSliderLabel;
                var6 = var4.rateLimitPerUser;
                var12 = 34;
                var2 = var5[var12];
                var2 = var15.bind(var7)(var2);
                var14 = var2.intl;
                var3 = var14.string;
                var2 = var5[var12];
                var2 = var15.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.zvDu4u;
                var3 = var3.bind(var14)(var2);
                var2 = false;
                var15 = var8.bind(var13)(var6, var2, var3);
                var3 = _closure1_slot1;
                var2 = 57;
                var2 = var5[var2];
                var5 = var3.bind(var7)(var2);
                var3 = var5.getCurrentConfig;
                var2 = {};
                var6 = var4.guild_id;
                var2['guildId'] = var6;
                var6 = 'ChannelSettingsOverview';
                var2['location'] = var6;
                var3 = var3.bind(var5)(var2);
                var2 = null;
                var5 = var2 == var3;
                var2 = undefined;
                if(var5) { _fun0020_ip = 127; continue _fun0020 }
case 128:
                var2 = var3.enabled;
case 127:
                var6 = {};
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 58;
                var3 = var8[var3];
                var16 = var5.bind(var7)(var3);
                var14 = var16.dateFormat;
                var5 = _closure1_slot1;
                var3 = 59;
                var3 = var8[var3];
                var13 = var5.bind(var7)(var3);
                var3 = _closure1_slot43;
                var13 = var13.bind(var7)(var3);
                var3 = 'LL';
                var3 = var14.bind(var16)(var13, var3);
                var6['breakingChangeDate'] = var3;
                var3 = 60;
                var3 = var8[var3];
                var8 = var5.bind(var7)(var3);
                var5 = var8.getArticleURL;
                var3 = _closure1_slot34;
                var3 = var3.SLOWMODE;
                var3 = var5.bind(var8)(var3);
                var6['helpCenterLink'] = var3;
                var3 = var4.isForumLikeChannel;
                var3 = var3.bind(var4)();
                if(var3) { _fun0020_ip = 129; continue _fun0020 }
case 130:
                var3 = var4.isThread;
                var3 = var3.bind(var4)();
                var13 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = var4[var12];
                var5 = var13.bind(var7)(var5);
                var8 = var5.intl;
                if(var3) { _fun0020_ip = 131; continue _fun0020 }
case 132:
                if(var2) { _fun0020_ip = 133; continue _fun0020 }
case 134:
                var5 = var8.string;
                var3 = var4[var12];
                var3 = var13.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.HEA/DQ;
                var17 = var5.bind(var8)(var3);
                _fun0020_ip = 135; continue _fun0020;
case 133:
                var5 = var8.format;
                var3 = var4[var12];
                var3 = var13.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.wW2MWl;
                var17 = var5.bind(var8)(var3, var6);
case 135:
                _fun0020_ip = 136; continue _fun0020;
case 131:
                if(var2) { _fun0020_ip = 137; continue _fun0020 }
case 138:
                var5 = var8.string;
                var3 = var4[var12];
                var3 = var13.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.OMmNCg;
                var3 = var5.bind(var8)(var3);
                _fun0020_ip = 139; continue _fun0020;
case 137:
                var5 = var8.format;
                var4 = var4[var12];
                var4 = var13.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.8sTC8v;
                var3 = var5.bind(var8)(var4, var6);
case 139:
                var17 = var3;
case 136:
                _fun0020_ip = 140; continue _fun0020;
case 129:
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = var3[var12];
                var4 = var8.bind(var7)(var4);
                var5 = var4.intl;
                if(var2) { _fun0020_ip = 141; continue _fun0020 }
case 142:
                var4 = var5.string;
                var2 = var3[var12];
                var2 = var8.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.a+1pdH;
                var2 = var4.bind(var5)(var2);
                _fun0020_ip = 109; continue _fun0020;
case 141:
                var4 = var5.format;
                var3 = var3[var12];
                var3 = var8.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.EIQq9v;
                var2 = var4.bind(var5)(var3, var6);
case 109:
                var17 = var2;
case 140:
                var3 = var1.push;
                var6 = _closure1_slot50;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 52;
                var4 = var13[var2];
                var4 = var14.bind(var7)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var8 = var13[var2];
                var8 = var14.bind(var7)(var8);
                var16 = var8.FormHint;
                var8 = {};
                var8['children'] = var17;
                var8 = var6.bind(var7)(var16, var8);
                var4['hint'] = var8;
                var2 = var13[var2];
                var2 = var14.bind(var7)(var2);
                var8 = var2.FormSliderRow;
                var2 = {};
                var16 = var13[var12];
                var16 = var14.bind(var7)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var12 = var13[var12];
                var12 = var14.bind(var7)(var12);
                var12 = var12.t;
                var12 = var12.piZgKC;
                var12 = var16.bind(var17)(var12);
                var2['label'] = var12;
                var12 = 41;
                var12 = var13[var12];
                var12 = var14.bind(var7)(var12);
                var14 = var12.Text;
                var12 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                var12['children'] = var15;
                var12 = var6.bind(var7)(var14, var12);
                var2['trailing'] = var12;
                var11 = var11.slider;
                var2['style'] = var11;
                var11 = var9._cooldown;
                var2['value'] = var11;
                var11 = 0;
                var2['minimumValue'] = var11;
                var11 = _closure1_slot40;
                var12 = var11.length;
                var11 = 1;
                var11 = var12 - var11;
                var2['maximumValue'] = var11;
                var12 = _closure1_slot1;
                var11 = 28;
                var11 = var13[var11];
                var11 = var12.bind(var7)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.BRAND_500;
                var2['minimumTrackTintColor'] = var11;
                var10 = _closure1_slot41;
                var10 = var10.GREY2;
                var2['maximumTrackTintColor'] = var10;
                var9 = var9.handleSlowmodeChange;
                var2['onValueChange'] = var9;
                var2 = var6.bind(var7)(var8, var2);
                var4['children'] = var2;
                var2 = 'slowmode-section';
                var2 = var6.bind(var7)(var5, var4, var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'renderAutoArchiveDuration';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var5 = this;
                var2 = var5.props;
                var6 = var2.channel;
                var1 = var2.canManageThread;
                var9 = var2.isForumPost;
                var2 = var6.isThread;
                var2 = var2.bind(var6)();
                if(!var2) { _fun0021_ip = 143; continue _fun0021 }
case 144:
                if(var1) { _fun0021_ip = 145; continue _fun0021 }
case 143:
                var1 = null;
                return var1;
case 145:
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 34;
                var2 = var1[var7];
                var4 = undefined;
                var2 = var10.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var7];
                var1 = var10.bind(var4)(var1);
                var1 = var1.t;
                if(var9) { _fun0021_ip = 146; continue _fun0021 }
case 147:
                var9 = var1.YUXr4e;
                var10 = var2.bind(var3)(var9);
                _fun0021_ip = 148; continue _fun0021;
case 146:
                var1 = var1.3aJN9P;
                var10 = var2.bind(var3)(var1);
case 148:
                var3 = _closure1_slot50;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 61;
                var1 = var11[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.AutoArchiveDurationOptions;
                var1 = {};
                var12 = var11[var7];
                var12 = var9.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var7 = var11[var7];
                var7 = var9.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.FGjMZW;
                var7 = var12.bind(var13)(var7);
                var1['title'] = var7;
                var7 = 52;
                var7 = var11[var7];
                var7 = var9.bind(var4)(var7);
                var9 = var7.FormHint;
                var7 = {};
                var7['children'] = var10;
                var7 = var3.bind(var4)(var9, var7);
                var1['hint'] = var7;
                var10 = var6.threadMetadata;
                var9 = null;
                var11 = var9 == var10;
                var7 = undefined;
                if(var11) { _fun0021_ip = 96; continue _fun0021 }
case 149:
                var7 = var10.autoArchiveDuration;
case 96:
                if(!(var9 == var7)) { _fun0021_ip = 84; continue _fun0021 }
case 150:
                var7 = _closure1_slot48;
case 84:
                var1['selected'] = var7;
                var1['channel'] = var6;
                var5 = var5.handleAutoArchiveDurationChange;
                var1['onSelectDuration'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'renderInvitable';
        var5['key'] = var7;
        var7 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var8 = this;
                var1 = var8.props;
                var9 = var1.channel;
                var11 = var1.canManageThread;
                var1 = var9.threadMetadata;
                var5 = null;
                var2 = var5 == var1;
                var1 = null;
                if(var2) { _fun0022_ip = 151; continue _fun0022 }
case 152:
                var4 = var9.type;
                var3 = _closure1_slot30;
                var3 = var3.PRIVATE_THREAD;
                var1 = null;
                if(!(var4 === var3)) { _fun0022_ip = 151; continue _fun0022 }
case 123:
                var6 = _closure1_slot50;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 52;
                var3 = var14[var2];
                var5 = undefined;
                var3 = var13.bind(var5)(var3);
                var4 = var3.FormSection;
                var3 = {};
                var7 = var14[var2];
                var7 = var13.bind(var5)(var7);
                var12 = var7.FormHint;
                var7 = {};
                var10 = 34;
                var15 = var14[var10];
                var15 = var13.bind(var5)(var15);
                var17 = var15.intl;
                var16 = var17.string;
                var15 = var14[var10];
                var15 = var13.bind(var5)(var15);
                var15 = var15.t;
                var15 = var15.cSyXJi;
                var15 = var16.bind(var17)(var15);
                var7['children'] = var15;
                var7 = var6.bind(var5)(var12, var7);
                var3['hint'] = var7;
                var2 = var14[var2];
                var2 = var13.bind(var5)(var2);
                var7 = var2.FormSwitchRow;
                var2 = {};
                var11 = !var11;
                var2['disabled'] = var11;
                var11 = var14[var10];
                var11 = var13.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.s2rpNT;
                var10 = var11.bind(var12)(var10);
                var2['label'] = var10;
                var9 = var9.threadMetadata;
                var9 = var9.invitable;
                var2['value'] = var9;
                var8 = var8.handleInvitableChange;
                var2['onValueChange'] = var8;
                var2 = var6.bind(var5)(var7, var2);
                var3['children'] = var2;
                var2 = 'thread-invitable-section';
                var1 = var6.bind(var5)(var4, var3, var2);
case 151:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'renderDefaultAutoArchiveDuration';
        var5['key'] = var7;
        var7 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var6 = this;
                var1 = var6.props;
                var10 = var1.channel;
                var2 = var1.canManageChannels;
                var4 = _closure1_slot14;
                var3 = var4.has;
                var1 = var10.type;
                var3 = var3.bind(var4)(var1);
                var14 = null;
                var1 = null;
                if(!var3) { _fun0023_ip = 153; continue _fun0023 }
case 33:
                var1 = null;
                if(!var2) { _fun0023_ip = 153; continue _fun0023 }
case 78:
                var5 = _closure1_slot50;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 61;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.AutoArchiveDurationOptions;
                var2 = {};
                var13 = 34;
                var11 = var8[var13];
                var11 = var7.bind(var4)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var8[var13];
                var11 = var7.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.FGjMZW;
                var11 = var12.bind(var15)(var11);
                var2['title'] = var11;
                var11 = 62;
                var11 = var8[var11];
                var12 = var7.bind(var4)(var11);
                var11 = var12.getAutoArchiveDuration;
                var11 = var11.bind(var12)(var10, var14);
                var2['selected'] = var11;
                var2['channel'] = var10;
                var6 = var6.handleDefaultAutoArchiveDurationChange;
                var2['onSelectDuration'] = var6;
                var6 = 52;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.FormHint;
                var6 = {};
                var8 = var10.isForumLikeChannel;
                var8 = var8.bind(var10)();
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = var9[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                if(var8) { _fun0023_ip = 154; continue _fun0023 }
case 155:
                var8 = var9.W3Noi4;
                var8 = var10.bind(var11)(var8);
                _fun0023_ip = 156; continue _fun0023;
case 154:
                var9 = var9.fyXclZ;
                var8 = var10.bind(var11)(var9);
case 156:
                var6['children'] = var8;
                var6 = var5.bind(var4)(var7, var6);
                var2['hint'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 153:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'renderDefaultSortOrder';
        var5['key'] = var7;
        var7 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var8 = this;
                var1 = var8.props;
                var2 = var1.channel;
                var1 = var1.canManageChannels;
                var3 = var2.isForumLikeChannel;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0024_ip = 60; continue _fun0024 }
case 157:
                if(var1) { _fun0024_ip = 152; continue _fun0024 }
case 60:
                var1 = null;
                return var1;
case 152:
                var1 = var2.getDefaultSortOrder;
                var9 = var1.bind(var2)();
                var4 = _closure1_slot50;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 52;
                var1 = var13[var6];
                var3 = undefined;
                var1 = var12.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var14 = 34;
                var7 = var13[var14];
                var7 = var12.bind(var3)(var7);
                var11 = var7.intl;
                var10 = var11.string;
                var7 = var13[var14];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.gePre3;
                var7 = var10.bind(var11)(var7);
                var1['title'] = var7;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.FormHint;
                var6 = {};
                var10 = var13[var14];
                var10 = var12.bind(var3)(var10);
                var15 = var10.intl;
                var11 = var15.string;
                var10 = var13[var14];
                var10 = var12.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.165cVV;
                var10 = var11.bind(var15)(var10);
                var6['children'] = var10;
                var6 = var4.bind(var3)(var7, var6);
                var1['hint'] = var6;
                var7 = _closure1_slot52;
                var5 = 63;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var6 = var5.TableRadioGroup;
                var5 = {};
                var5['defaultValue'] = var9;
                var9 = var8.handleDefaultSortOrderChange;
                var5['onChange'] = var9;
                var9 = false;
                var5['hasIcons'] = var9;
                var8 = var8.defaultSortOrderRadioGroupRef;
                var5['groupRef'] = var8;
                var9 = 64;
                var8 = var13[var9];
                var8 = var12.bind(var3)(var8);
                var10 = var8.TableRadioRow;
                var8 = {};
                var11 = var13[var14];
                var11 = var12.bind(var3)(var11);
                var16 = var11.intl;
                var15 = var16.string;
                var11 = var13[var14];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.ElZtzs;
                var11 = var15.bind(var16)(var11);
                var8['label'] = var11;
                var11 = 65;
                var15 = var13[var11];
                var15 = var12.bind(var3)(var15);
                var15 = var15.ThreadSortOrder;
                var15 = var15.LATEST_ACTIVITY;
                var8['value'] = var15;
                var10 = var4.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var10 = var9.TableRadioRow;
                var9 = {};
                var15 = var13[var14];
                var15 = var12.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var13[var14];
                var14 = var12.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.w28f3N;
                var14 = var15.bind(var16)(var14);
                var9['label'] = var14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.ThreadSortOrder;
                var11 = var11.CREATION_DATE;
                var9['value'] = var11;
                var9 = var4.bind(var3)(var10, var9);
                var8[1] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var3)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'renderDefaultTagSetting';
        var5['key'] = var7;
        var7 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var8 = this;
                var1 = var8.props;
                var2 = var1.channel;
                var1 = var1.canManageChannels;
                var3 = var2.isForumLikeChannel;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0025_ip = 60; continue _fun0025 }
case 157:
                if(var1) { _fun0025_ip = 152; continue _fun0025 }
case 60:
                var1 = null;
                return var1;
case 152:
                var1 = var2.getDefaultTagSetting;
                var9 = var1.bind(var2)();
                var4 = _closure1_slot50;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 52;
                var1 = var13[var6];
                var3 = undefined;
                var1 = var12.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var14 = 34;
                var7 = var13[var14];
                var7 = var12.bind(var3)(var7);
                var11 = var7.intl;
                var10 = var11.string;
                var7 = var13[var14];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Paxaur;
                var7 = var10.bind(var11)(var7);
                var1['title'] = var7;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.FormHint;
                var6 = {};
                var10 = var13[var14];
                var10 = var12.bind(var3)(var10);
                var15 = var10.intl;
                var11 = var15.string;
                var10 = var13[var14];
                var10 = var12.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.DqOl8P;
                var10 = var11.bind(var15)(var10);
                var6['children'] = var10;
                var6 = var4.bind(var3)(var7, var6);
                var1['hint'] = var6;
                var7 = _closure1_slot52;
                var5 = 63;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var6 = var5.TableRadioGroup;
                var5 = {};
                var5['defaultValue'] = var9;
                var9 = var8.handleDefaultTagSettingChange;
                var5['onChange'] = var9;
                var9 = false;
                var5['hasIcons'] = var9;
                var8 = var8.defaultTagSettingRadioGroupRef;
                var5['groupRef'] = var8;
                var9 = 64;
                var8 = var13[var9];
                var8 = var12.bind(var3)(var8);
                var10 = var8.TableRadioRow;
                var8 = {};
                var11 = var13[var14];
                var11 = var12.bind(var3)(var11);
                var16 = var11.intl;
                var15 = var16.string;
                var11 = var13[var14];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.rQ0ctb;
                var11 = var15.bind(var16)(var11);
                var8['label'] = var11;
                var11 = 66;
                var15 = var13[var11];
                var15 = var12.bind(var3)(var15);
                var15 = var15.ThreadSearchTagSetting;
                var15 = var15.MATCH_SOME;
                var8['value'] = var15;
                var10 = var4.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var10 = var9.TableRadioRow;
                var9 = {};
                var15 = var13[var14];
                var15 = var12.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var13[var14];
                var14 = var12.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.FCXUu7;
                var14 = var15.bind(var16)(var14);
                var9['label'] = var14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.ThreadSearchTagSetting;
                var11 = var11.MATCH_ALL;
                var9['value'] = var11;
                var9 = var4.bind(var3)(var10, var9);
                var8[1] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var3)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'renderAnnouncement';
        var5['key'] = var7;
        var7 = function value() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var12 = this;
                var1 = var12.props;
                var13 = var1.channel;
                var11 = var1.canManageChannels;
                var3 = var1.guild;
                var2 = _closure1_slot13;
                var1 = var13.type;
                var7 = undefined;
                var1 = var2.bind(var7)(var1);
                if(!var1) { _fun0026_ip = 158; continue _fun0026 }
case 159:
                var1 = null;
                if(!(var1 != var3)) { _fun0026_ip = 158; continue _fun0026 }
case 160:
                var5 = var3.features;
                var4 = var5.has;
                var2 = _closure1_slot32;
                var2 = var2.NEWS;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0026_ip = 158; continue _fun0026 }
case 161:
                var4 = var13.id;
                var5 = var1 == var3;
                var2 = undefined;
                if(var5) { _fun0026_ip = 162; continue _fun0026 }
case 163:
                var2 = var3.rulesChannelId;
case 162:
                if(!(var4 !== var2)) { _fun0026_ip = 158; continue _fun0026 }
case 164:
                var2 = var13.id;
                var4 = var1 == var3;
                var1 = undefined;
                if(var4) { _fun0026_ip = 165; continue _fun0026 }
case 39:
                var1 = var3.publicUpdatesChannelId;
case 165:
                if(!(var2 !== var1)) { _fun0026_ip = 158; continue _fun0026 }
case 166:
                var1 = new Array(0);
                var3 = var1.push;
                var6 = _closure1_slot50;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = 52;
                var4 = var16[var2];
                var4 = var15.bind(var7)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var17 = _closure1_slot52;
                var14 = _closure1_slot51;
                var8 = {};
                var10 = var16[var2];
                var10 = var15.bind(var7)(var10);
                var19 = var10.FormHint;
                var18 = {};
                var10 = 34;
                var20 = var16[var10];
                var20 = var15.bind(var7)(var20);
                var23 = var20.intl;
                var22 = var23.format;
                var20 = var16[var10];
                var20 = var15.bind(var7)(var20);
                var20 = var20.t;
                var21 = var20.tI7KNT;
                var20 = {};
                var25 = _closure1_slot1;
                var24 = 60;
                var24 = var16[var24];
                var26 = var25.bind(var7)(var24);
                var25 = var26.getArticleURL;
                var24 = _closure1_slot34;
                var24 = var24.ANNOUNCEMENT_CHANNELS;
                var24 = var25.bind(var26)(var24);
                var20['documentationLink'] = var24;
                var20 = var22.bind(var23)(var21, var20);
                var18['children'] = var20;
                var19 = var6.bind(var7)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var19 = var16[var2];
                var19 = var15.bind(var7)(var19);
                var20 = var19.FormHint;
                var19 = {};
                var21 = var16[var10];
                var21 = var15.bind(var7)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var16[var10];
                var21 = var15.bind(var7)(var21);
                var21 = var21.t;
                var21 = var21.2Ab4IS;
                var21 = var22.bind(var23)(var21);
                var19['children'] = var21;
                var19 = var6.bind(var7)(var20, var19);
                var18[1] = var19;
                var8['children'] = var18;
                var8 = var17.bind(var7)(var14, var8);
                var4['hint'] = var8;
                var2 = var16[var2];
                var2 = var15.bind(var7)(var2);
                var8 = var2.FormSwitchRow;
                var2 = {};
                var11 = !var11;
                var2['disabled'] = var11;
                var11 = var16[var10];
                var11 = var15.bind(var7)(var11);
                var14 = var11.intl;
                var11 = var14.string;
                var10 = var16[var10];
                var10 = var15.bind(var7)(var10);
                var10 = var10.t;
                var10 = var10.Au2b7u;
                var10 = var11.bind(var14)(var10);
                var2['label'] = var10;
                var11 = var13.type;
                var9 = _closure1_slot30;
                var10 = var9.GUILD_ANNOUNCEMENT;
                var10 = var11 === var10;
                var2['value'] = var10;
                var11 = var12.handleAnnouncementChange;
                var10 = var11.bind;
                var13 = var13.type;
                var9 = var9.GUILD_ANNOUNCEMENT;
                var9 = var13 === var9;
                var9 = var10.bind(var11)(var12, var9);
                var2['onValueChange'] = var9;
                var2 = var6.bind(var7)(var8, var2);
                var4['children'] = var2;
                var2 = 'announcement-section';
                var2 = var6.bind(var7)(var5, var4, var2);
                var2 = var3.bind(var1)(var2);
                return var1;
case 158:
                var1 = null;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'renderBitrateSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var13 = this;
                var2 = _closure1_slot53;
                var1 = var13.context;
                var7 = undefined;
                var18 = var2.bind(var7)(var1);
                var2 = var13.props;
                var16 = var2.channel;
                var1 = var2.canManageChannels;
                var4 = var2.guild;
                var2 = var13.showVoiceSettings;
                var2 = var2.bind(var13)();
                if(!var2) { _fun0027_ip = 78; continue _fun0027 }
case 75:
                if(var1) { _fun0027_ip = 124; continue _fun0027 }
case 78:
                var1 = null;
                return var1;
case 124:
                var1 = new Array(0);
                var12 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = 36;
                var2 = var19[var2];
                var3 = var12.bind(var7)(var2);
                var2 = var3.getBitrateLimit;
                var14 = var2.bind(var3)(var4, var16);
                var3 = var1.push;
                var6 = _closure1_slot52;
                var2 = 52;
                var4 = var19[var2];
                var4 = var12.bind(var7)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var10 = _closure1_slot50;
                var8 = var19[var2];
                var8 = var12.bind(var7)(var8);
                var11 = var8.FormHint;
                var8 = {};
                var9 = 34;
                var17 = var19[var9];
                var17 = var12.bind(var7)(var17);
                var22 = var17.intl;
                var21 = var22.format;
                var17 = var19[var9];
                var17 = var12.bind(var7)(var17);
                var17 = var17.t;
                var20 = var17.SbQJk5;
                var17 = {};
                var24 = _closure1_slot27;
                var23 = 1000;
                var24 = var24 / var23;
                var17['bitrate'] = var24;
                var17 = var21.bind(var22)(var20, var17);
                var8['children'] = var17;
                var8 = var10.bind(var7)(var11, var8);
                var4['hint'] = var8;
                var2 = var19[var2];
                var2 = var12.bind(var7)(var2);
                var8 = var2.FormRow;
                var2 = {};
                var11 = var19[var9];
                var11 = var12.bind(var7)(var11);
                var17 = var11.intl;
                var11 = var17.string;
                var9 = var19[var9];
                var9 = var12.bind(var7)(var9);
                var9 = var9.t;
                var9 = var9.w2d0vb;
                var9 = var11.bind(var17)(var9);
                var2['label'] = var9;
                var9 = 41;
                var9 = var19[var9];
                var9 = var12.bind(var7)(var9);
                var11 = var9.Text;
                var9 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                var17 = global;
                var22 = var17.Math;
                var21 = var22.round;
                var20 = var16.bitrate;
                var20 = var20 / var23;
                var23 = var21.bind(var22)(var20);
                var20 = var17.HermesInternal;
                var22 = var20.concat;
                var21 = '';
                var20 = 'kbps';
                var20 = var22.bind(var21)(var23, var20);
                var9['children'] = var20;
                var9 = var10.bind(var7)(var11, var9);
                var2['trailing'] = var9;
                var8 = var10.bind(var7)(var8, var2);
                var2 = new Array(2);
                var2[0] = var8;
                var9 = _closure1_slot10;
                var8 = {};
                var11 = var18.sliderWrapper;
                var8['style'] = var11;
                var11 = 67;
                var11 = var19[var11];
                var11 = var12.bind(var7)(var11);
                var12 = var11.Slider;
                var11 = {};
                var18 = var18.slider;
                var11['style'] = var18;
                var18 = var17.Math;
                var17 = var18.min;
                var16 = var16.bitrate;
                var16 = var17.bind(var18)(var16, var14);
                var11['value'] = var16;
                var15 = _closure1_slot28;
                var11['minimumValue'] = var15;
                var11['maximumValue'] = var14;
                var13 = var13.handleBitRateChange;
                var11['onValueChange'] = var13;
                var11 = var10.bind(var7)(var12, var11);
                var8['children'] = var11;
                var8 = var10.bind(var7)(var9, var8);
                var2[1] = var8;
                var4['children'] = var2;
                var2 = 'bitrate-section';
                var2 = var6.bind(var7)(var5, var4, var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'renderVideoQualityModeSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var10 = this;
                var1 = var10.props;
                var11 = var1.channel;
                var1 = var1.canManageChannels;
                var2 = var10.showVoiceSettings;
                var2 = var2.bind(var10)();
                if(!var2) { _fun0028_ip = 60; continue _fun0028 }
case 157:
                if(var1) { _fun0028_ip = 152; continue _fun0028 }
case 60:
                var1 = null;
                return var1;
case 152:
                var1 = new Array(0);
                var3 = var1.push;
                var7 = _closure1_slot50;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 52;
                var4 = var12[var2];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var19 = 34;
                var9 = var12[var19];
                var9 = var8.bind(var6)(var9);
                var15 = var9.intl;
                var13 = var15.string;
                var9 = var12[var19];
                var9 = var8.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.jhJEJi;
                var9 = var13.bind(var15)(var9);
                var4['title'] = var9;
                var2 = var12[var2];
                var2 = var8.bind(var6)(var2);
                var9 = var2.FormHint;
                var2 = {};
                var13 = var12[var19];
                var13 = var8.bind(var6)(var13);
                var17 = var13.intl;
                var16 = var17.format;
                var13 = var12[var19];
                var13 = var8.bind(var6)(var13);
                var13 = var13.t;
                var15 = var13.c5W7Sk;
                var13 = {};
                var13 = var16.bind(var17)(var15, var13);
                var2['children'] = var13;
                var2 = var7.bind(var6)(var9, var2);
                var4['hint'] = var2;
                var9 = _closure1_slot52;
                var2 = 63;
                var2 = var12[var2];
                var2 = var8.bind(var6)(var2);
                var8 = var2.TableRadioGroup;
                var2 = {};
                var11 = var11.videoQualityMode;
                var12 = null;
                if(!(var12 == var11)) { _fun0028_ip = 94; continue _fun0028 }
case 18:
                var12 = _closure1_slot42;
                var11 = var12.AUTO;
case 94:
                var2['defaultValue'] = var11;
                var11 = var10.handleVideoQualityModeChange;
                var2['onChange'] = var11;
                var11 = false;
                var2['hasIcons'] = var11;
                var10 = var10.videoQualityModeRadioGroupRef;
                var2['groupRef'] = var10;
                var13 = _closure1_slot50;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 64;
                var10 = var15[var11];
                var10 = var18.bind(var6)(var10);
                var12 = var10.TableRadioRow;
                var10 = {};
                var16 = var15[var19];
                var16 = var18.bind(var6)(var16);
                var20 = var16.intl;
                var17 = var20.string;
                var16 = var15[var19];
                var16 = var18.bind(var6)(var16);
                var16 = var16.t;
                var16 = var16.jjKYpq;
                var16 = var17.bind(var20)(var16);
                var10['label'] = var16;
                var14 = _closure1_slot42;
                var16 = var14.AUTO;
                var10['value'] = var16;
                var12 = var13.bind(var6)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var15[var11];
                var11 = var18.bind(var6)(var11);
                var12 = var11.TableRadioRow;
                var11 = {};
                var16 = var15[var19];
                var16 = var18.bind(var6)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var6)(var15);
                var15 = var15.t;
                var15 = var15.7jOoJC;
                var15 = var16.bind(var17)(var15);
                var11['label'] = var15;
                var14 = var14.FULL;
                var11['value'] = var14;
                var11 = var13.bind(var6)(var12, var11);
                var10[1] = var11;
                var2['children'] = var10;
                var2 = var9.bind(var6)(var8, var2);
                var4['children'] = var2;
                var2 = 'video-quality-section';
                var2 = var7.bind(var6)(var5, var4, var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'renderUserLimitSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var13 = this;
                var2 = _closure1_slot53;
                var1 = var13.context;
                var7 = undefined;
                var18 = var2.bind(var7)(var1);
                var1 = var13.props;
                var16 = var1.channel;
                var1 = var1.canManageChannels;
                var2 = var13.showVoiceSettings;
                var2 = var2.bind(var13)();
                if(!var2) { _fun0029_ip = 121; continue _fun0029 }
case 33:
                if(var1) { _fun0029_ip = 160; continue _fun0029 }
case 121:
                var1 = null;
                return var1;
case 160:
                var1 = new Array(0);
                var17 = global;
                var4 = var17.Math;
                var3 = var4.round;
                var2 = var16.userLimit;
                var6 = var3.bind(var4)(var2);
                var15 = 0;
                if(!(var15 !== var6)) { _fun0029_ip = 167; continue _fun0029 }
case 91:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 34;
                var4 = var9[var2];
                var4 = var3.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var9[var2];
                var2 = var3.bind(var7)(var2);
                var2 = var2.t;
                var3 = var2.3uHFUV;
                var2 = {};
                var2['num'] = var6;
                var21 = var4.bind(var5)(var3, var2);
                _fun0029_ip = 168; continue _fun0029;
case 167:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 34;
                var3 = var6[var2];
                var3 = var5.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var6[var2];
                var2 = var5.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.XX5ciY;
                var21 = var3.bind(var4)(var2);
case 168:
                var2 = var16.isGuildStageVoice;
                var2 = var2.bind(var16)();
                if(var2) { _fun0029_ip = 15; continue _fun0029 }
case 16:
                var14 = _closure1_slot36;
                _fun0029_ip = 128; continue _fun0029;
case 15:
                var14 = _closure1_slot37;
case 128:
                var3 = var1.push;
                var6 = _closure1_slot52;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 52;
                var4 = var9[var2];
                var4 = var10.bind(var7)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var12 = _closure1_slot50;
                var9 = var9[var2];
                var9 = var10.bind(var7)(var9);
                var10 = var9.FormHint;
                var9 = {};
                var11 = var16.isGuildStageVoice;
                var19 = var11.bind(var16)();
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 34;
                var23 = var20[var11];
                var23 = var22.bind(var7)(var23);
                var24 = var23.intl;
                var23 = var24.format;
                var20 = var20[var11];
                var20 = var22.bind(var7)(var20);
                var20 = var20.t;
                if(var19) { _fun0029_ip = 169; continue _fun0029 }
case 170:
                var22 = var20.8yb3JS;
                var19 = {};
                var19 = var23.bind(var24)(var22, var19);
                _fun0029_ip = 171; continue _fun0029;
case 169:
                var22 = var20.OqZI8P;
                var20 = {};
                var19 = var23.bind(var24)(var22, var20);
case 171:
                var9['children'] = var19;
                var9 = var12.bind(var7)(var10, var9);
                var4['hint'] = var9;
                var10 = _closure1_slot50;
                var12 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = var19[var2];
                var2 = var12.bind(var7)(var2);
                var9 = var2.FormRow;
                var2 = {};
                var20 = var19[var11];
                var20 = var12.bind(var7)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var11 = var19[var11];
                var11 = var12.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11./AoSGB;
                var11 = var20.bind(var22)(var11);
                var2['label'] = var11;
                var11 = 41;
                var11 = var19[var11];
                var11 = var12.bind(var7)(var11);
                var20 = var11.Text;
                var11 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                var11['children'] = var21;
                var11 = var10.bind(var7)(var20, var11);
                var2['trailing'] = var11;
                var9 = var10.bind(var7)(var9, var2);
                var2 = new Array(2);
                var2[0] = var9;
                var9 = _closure1_slot10;
                var8 = {};
                var11 = var18.sliderWrapper;
                var8['style'] = var11;
                var11 = 67;
                var11 = var19[var11];
                var11 = var12.bind(var7)(var11);
                var12 = var11.Slider;
                var11 = {};
                var18 = var18.slider;
                var11['style'] = var18;
                var18 = var17.Math;
                var17 = var18.min;
                var16 = var16.userLimit;
                var16 = var17.bind(var18)(var16, var14);
                var11['value'] = var16;
                var11['minimumValue'] = var15;
                var11['maximumValue'] = var14;
                var13 = var13.handleUserLimitChange;
                var11['onValueChange'] = var13;
                var11 = var10.bind(var7)(var12, var11);
                var8['children'] = var11;
                var8 = var10.bind(var7)(var9, var8);
                var2[1] = var8;
                var4['children'] = var2;
                var2 = 'channel-user-limit';
                var2 = var6.bind(var7)(var5, var4, var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'renderRegionOverride';
        var5['key'] = var7;
        var7 = function value() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = var4.props;
                var5 = var1.regions;
                var3 = var1.channel;
                var _closure3_slot1 = var3;
                var11 = var1.canManageChannels;
                var2 = var1.guild;
                var1 = null;
                if(!(var1 != var2)) { _fun0030_ip = 172; continue _fun0030 }
case 159:
                var2 = var4.showVoiceSettings;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0030_ip = 173; continue _fun0030 }
case 174:
                if(!var11) { _fun0030_ip = 173; continue _fun0030 }
case 102:
                var2 = var3.isGuildStageVoice;
                var2 = var2.bind(var3)();
                if(var2) { _fun0030_ip = 173; continue _fun0030 }
case 175:
                var12 = var1 == var5;
                if(var12) { _fun0030_ip = 176; continue _fun0030 }
case 177:
                var3 = var5.length;
                var2 = 0;
                var12 = var2 === var3;
case 176:
                var3 = var1 != var5;
                var2 = null;
                if(!var3) { _fun0030_ip = 26; continue _fun0030 }
case 178:
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot1;
                    var1 = var1.rtcRegion;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var3);
case 26:
                if(!(var1 == var2)) { _fun0030_ip = 179; continue _fun0030 }
case 28:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 34;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.JEmsam;
                var15 = var4.bind(var5)(var3);
                _fun0030_ip = 14; continue _fun0030;
case 179:
                var15 = var2.name;
case 14:
                var2 = new Array(0);
                var4 = var2.push;
                var8 = _closure1_slot50;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 52;
                var3 = var16[var13];
                var7 = undefined;
                var3 = var14.bind(var7)(var3);
                var6 = var3.FormSection;
                var5 = {};
                var17 = 34;
                var3 = var16[var17];
                var3 = var14.bind(var7)(var3);
                var18 = var3.intl;
                var9 = var18.string;
                var3 = var16[var17];
                var3 = var14.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.Ms8bX1;
                var3 = var9.bind(var18)(var3);
                var5['title'] = var3;
                var3 = var16[var13];
                var3 = var14.bind(var7)(var3);
                var9 = var3.FormHint;
                var3 = {};
                var18 = var16[var17];
                var18 = var14.bind(var7)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var16[var17];
                var18 = var14.bind(var7)(var18);
                var18 = var18.t;
                var18 = var18.dbTs+/;
                var18 = var19.bind(var20)(var18);
                var3['children'] = var18;
                var3 = var8.bind(var7)(var9, var3);
                var5['hint'] = var3;
                var3 = var16[var13];
                var3 = var14.bind(var7)(var3);
                var9 = var3.FormRow;
                var3 = {};
                var18 = var16[var17];
                var18 = var14.bind(var7)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var16[var17];
                var17 = var14.bind(var7)(var17);
                var17 = var17.t;
                var17 = var17.Ms8bX1;
                var17 = var18.bind(var19)(var17);
                var3['label'] = var17;
                var13 = var16[var13];
                var13 = var14.bind(var7)(var13);
                var13 = var13.FormRow;
                var14 = var13.Arrow;
                var13 = {};
                var13['label'] = var15;
                var13 = var8.bind(var7)(var14, var13);
                var3['trailing'] = var13;
                var11 = !var11;
                if(var11) { _fun0030_ip = 180; continue _fun0030 }
case 181:
                var11 = var12;
case 180:
                var3['disabled'] = var11;
                var10 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot29;
                    var1 = var1.CHANGE_RTC_REGION;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['onPress'] = var10;
                var3 = var8.bind(var7)(var9, var3);
                var5['children'] = var3;
                var3 = 'channel-region-override';
                var3 = var8.bind(var7)(var6, var5, var3);
                var3 = var4.bind(var2)(var3);
                return var2;
case 173:
                return var1;
case 172:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'showVoiceSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var6 = var1.channel;
                var3 = null;
                var1 = var3 != var6;
                if(!var1) { _fun0031_ip = 182; continue _fun0031 }
case 183:
                var2 = var6.guild_id;
                var1 = var3 != var2;
case 182:
                if(!var1) { _fun0031_ip = 75; continue _fun0031 }
case 184:
                var4 = _closure1_slot12;
                var3 = var4.has;
                var2 = var6.type;
                var1 = var3.bind(var4)(var2);
case 75:
                if(!var1) { _fun0031_ip = 185; continue _fun0031 }
case 78:
                var2 = var6.isGuildVocal;
                var2 = var2.bind(var6)();
                if(var2) { _fun0031_ip = 41; continue _fun0031 }
case 3:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 68;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.VoiceInThreadsExperiment;
                var4 = var5.getCurrentConfig;
                var3 = {};
                var6 = var6.guild_id;
                var3['guildId'] = var6;
                var6 = '9b50bd_1';
                var3['location'] = var6;
                var3 = var4.bind(var5)(var3);
                var2 = var3.enabled;
case 41:
                var1 = var2;
case 185:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'renderPermissions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = var1.props;
                var2 = var1.canManageRoles;
                var10 = var1.channel;
                var1 = null;
                if(!var2) { _fun0032_ip = 186; continue _fun0032 }
case 187:
                var5 = _closure1_slot50;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = 52;
                var2 = var6[var9];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var11 = var6[var9];
                var11 = var7.bind(var4)(var11);
                var13 = var11.FormHint;
                var11 = {};
                var16 = 34;
                var14 = var6[var16];
                var14 = var7.bind(var4)(var14);
                var17 = var14.intl;
                var15 = var17.string;
                var14 = var6[var16];
                var14 = var7.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.UAoMCA;
                var14 = var15.bind(var17)(var14);
                var11['children'] = var14;
                var11 = var5.bind(var4)(var13, var11);
                var2['hint'] = var11;
                var6 = var6[var9];
                var6 = var7.bind(var4)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var11 = var10.type;
                var10 = _closure1_slot30;
                var10 = var10.GUILD_CATEGORY;
                if(!(var11 !== var10)) { _fun0032_ip = 188; continue _fun0032 }
case 105:
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var11 = var10[var16];
                var11 = var14.bind(var4)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var10 = var10[var16];
                var10 = var14.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.BAZMBg;
                var10 = var11.bind(var13)(var10);
                _fun0032_ip = 189; continue _fun0032;
case 188:
                var15 = _closure1_slot0;
                var11 = _closure1_slot2;
                var13 = var11[var16];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var11 = var11[var16];
                var11 = var15.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.PgkvDQ;
                var10 = var13.bind(var14)(var11);
case 189:
                var6['label'] = var10;
                var11 = _closure1_slot50;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = var12[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.FormRow;
                var13 = var9.Arrow;
                var9 = {};
                var9 = var11.bind(var4)(var13, var9);
                var6['trailing'] = var9;
                var9 = 69;
                var9 = var12[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.ShieldUserIcon;
                var9 = {};
                var9 = var11.bind(var4)(var10, var9);
                var6['leading'] = var9;
                var8 = function onPress() {
                    var4 = _closure3_slot0;
                    var3 = var4.pushScreen;
                    var5 = _closure1_slot29;
                    var2 = var5.PERMISSIONS;
                    var1 = {};
                    var5 = var5.OVERVIEW;
                    var1['origin'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6['onPress'] = var8;
                var6 = var5.bind(var4)(var7, var6);
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 186:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'renderSettingsSection';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var8 = arg1;
                var _closure3_slot0 = var8;
                var2 = var8.length;
                var1 = 0;
                var2 = var2 > var1;
                var1 = null;
                if(!var2) { _fun0033_ip = 190; continue _fun0033 }
case 191:
                var5 = _closure1_slot50;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 52;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var7 = var8.map;
                var6 = function(arg1, arg2) {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                        var2 = arg1;
                        var6 = arg2;
                        var1 = _closure3_slot0;
                        var3 = var1.length;
                        var1 = 1;
                        var3 = var3 - var1;
                        var1 = var2;
                        if(!(var6 < var3)) { _fun0034_ip = 160; continue _fun0034 }
case 157:
                        var5 = _closure1_slot50;
                        var4 = _closure1_slot10;
                        var3 = {};
                        var3['children'] = var2;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3, var6);
case 160:
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 190:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'renderCommonSettingsSection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3.props;
                var7 = var2.channel;
                var _closure3_slot1 = var7;
                var4 = var2.canManageChannels;
                var2 = new Array(0);
                var9 = _closure1_slot13;
                var6 = var7.type;
                var8 = undefined;
                var6 = var9.bind(var8)(var6);
                if(var6) { _fun0035_ip = 174; continue _fun0035 }
case 192:
                var9 = var7.isGuildStageVoice;
                var6 = var9.bind(var7)();
case 174:
                if(!var6) { _fun0035_ip = 88; continue _fun0035 }
case 102:
                var9 = var2.push;
                var12 = _closure1_slot50;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 52;
                var10 = var14[var6];
                var10 = var13.bind(var8)(var10);
                var11 = var10.FormRow;
                var10 = {};
                var15 = 34;
                var16 = var14[var15];
                var16 = var13.bind(var8)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var14[var15];
                var15 = var13.bind(var8)(var15);
                var15 = var15.t;
                var15 = var15.h850Sk;
                var15 = var16.bind(var17)(var15);
                var10['label'] = var15;
                var6 = var14[var6];
                var6 = var13.bind(var8)(var6);
                var6 = var6.FormRow;
                var15 = var6.Arrow;
                var6 = {};
                var6 = var12.bind(var8)(var15, var6);
                var10['trailing'] = var6;
                var6 = 70;
                var6 = var14[var6];
                var6 = var13.bind(var8)(var6);
                var13 = var6.BellIcon;
                var6 = {};
                var6 = var12.bind(var8)(var13, var6);
                var10['leading'] = var6;
                var6 = function onPress() {
                    _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                        var3 = _closure3_slot1;
                        var1 = var3.isThread;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0036_ip = 193; continue _fun0036 }
case 194:
                        var5 = _closure3_slot0;
                        var4 = var5.pushScreen;
                        var1 = _closure1_slot29;
                        var1 = var1.NOTIFICATIONS;
                        var1 = var4.bind(var5)(var1);
                        _fun0036_ip = 175; continue _fun0036;
case 193:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 71;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.showThreadNotificationsBottomSheet;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var2);
case 175:
                        return var1;
                    }
                };
                var10['onPress'] = var6;
                var6 = 'rowNotifications';
                var6 = var12.bind(var8)(var11, var10, var6);
                var6 = var9.bind(var2)(var6);
case 88:
                var9 = _closure1_slot13;
                var6 = var7.type;
                var6 = var9.bind(var8)(var6);
                if(!var6) { _fun0035_ip = 195; continue _fun0035 }
case 70:
                var9 = var2.push;
                var12 = _closure1_slot50;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 52;
                var10 = var14[var6];
                var10 = var13.bind(var8)(var10);
                var11 = var10.FormRow;
                var10 = {};
                var15 = 34;
                var16 = var14[var15];
                var16 = var13.bind(var8)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var14[var15];
                var15 = var13.bind(var8)(var15);
                var15 = var15.t;
                var15 = var15.mp1N//;
                var15 = var16.bind(var17)(var15);
                var10['label'] = var15;
                var6 = var14[var6];
                var6 = var13.bind(var8)(var6);
                var6 = var6.FormRow;
                var15 = var6.Arrow;
                var6 = {};
                var6 = var12.bind(var8)(var15, var6);
                var10['trailing'] = var6;
                var6 = 72;
                var6 = var14[var6];
                var6 = var13.bind(var8)(var6);
                var13 = var6.PinImage;
                var6 = {};
                var14 = var7.id;
                var6['channelId'] = var14;
                var6 = var12.bind(var8)(var13, var6);
                var10['leading'] = var6;
                var6 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot29;
                    var1 = var1.PINNED_MESSAGES;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var10['onPress'] = var6;
                var6 = var3.props;
                var6 = var6.pinDisabled;
                var10['disabled'] = var6;
                var6 = 'rowPinnedMessages';
                var6 = var12.bind(var8)(var11, var10, var6);
                var6 = var9.bind(var2)(var6);
case 195:
                if(!var4) { _fun0035_ip = 196; continue _fun0035 }
case 197:
                var9 = var7.type;
                var6 = _closure1_slot30;
                var6 = var6.GUILD_CATEGORY;
                var4 = var9 !== var6;
case 196:
                if(!var4) { _fun0035_ip = 198; continue _fun0035 }
case 199:
                var6 = var7.isThread;
                var6 = var6.bind(var7)();
                var4 = !var6;
case 198:
                if(!var4) { _fun0035_ip = 200; continue _fun0035 }
case 201:
                var4 = var2.push;
                var7 = _closure1_slot50;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 52;
                var5 = var11[var9];
                var5 = var10.bind(var8)(var5);
                var6 = var5.FormRow;
                var5 = {};
                var12 = 34;
                var13 = var11[var12];
                var13 = var10.bind(var8)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var11[var12];
                var12 = var10.bind(var8)(var12);
                var12 = var12.t;
                var12 = var12.ngRFjY;
                var12 = var13.bind(var14)(var12);
                var5['label'] = var12;
                var9 = var11[var9];
                var9 = var10.bind(var8)(var9);
                var9 = var9.FormRow;
                var12 = var9.Arrow;
                var9 = {};
                var9 = var7.bind(var8)(var12, var9);
                var5['trailing'] = var9;
                var9 = 73;
                var9 = var11[var9];
                var9 = var10.bind(var8)(var9);
                var10 = var9.LinkIcon;
                var9 = {};
                var9 = var7.bind(var8)(var10, var9);
                var5['leading'] = var9;
                var1 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot29;
                    var1 = var1.INSTANT_INVITES;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5['onPress'] = var1;
                var1 = 'rowInstantInvites';
                var1 = var7.bind(var8)(var6, var5, var1);
                var1 = var4.bind(var2)(var1);
case 200:
                var1 = var3.renderSettingsSection;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'renderDefaultForumLayout';
        var5['key'] = var7;
        var7 = function value() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = var1.props;
                var9 = var1.channel;
                var1 = var9.isForumChannel;
                var3 = var1.bind(var9)();
                var1 = null;
                if(!var3) { _fun0037_ip = 202; continue _fun0037 }
case 203:
                var6 = _closure1_slot50;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 52;
                var3 = var14[var11];
                var5 = undefined;
                var3 = var16.bind(var5)(var3);
                var4 = var3.FormSection;
                var3 = {};
                var7 = var14[var11];
                var7 = var16.bind(var5)(var7);
                var8 = var7.FormHint;
                var7 = {};
                var19 = 34;
                var12 = var14[var19];
                var12 = var16.bind(var5)(var12);
                var15 = var12.intl;
                var13 = var15.string;
                var12 = var14[var19];
                var12 = var16.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.mOSViY;
                var12 = var13.bind(var15)(var12);
                var7['children'] = var12;
                var7 = var6.bind(var5)(var8, var7);
                var3['hint'] = var7;
                var7 = var14[var11];
                var7 = var16.bind(var5)(var7);
                var8 = var7.FormRow;
                var7 = {};
                var12 = var14[var19];
                var12 = var16.bind(var5)(var12);
                var15 = var12.intl;
                var13 = var15.string;
                var12 = var14[var19];
                var12 = var16.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.kQvoCw;
                var12 = var13.bind(var15)(var12);
                var7['label'] = var12;
                var11 = var14[var11];
                var11 = var16.bind(var5)(var11);
                var11 = var11.FormRow;
                var12 = var11.Arrow;
                var11 = {};
                var15 = var9.defaultForumLayout;
                var13 = 74;
                var14 = var14[var13];
                var14 = var16.bind(var5)(var14);
                var14 = var14.ForumLayout;
                var14 = var14.GRID;
                if(!(var15 !== var14)) { _fun0037_ip = 71; continue _fun0037 }
case 154:
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = var14[var19];
                var15 = var17.bind(var5)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var19];
                var14 = var17.bind(var5)(var14);
                var14 = var14.t;
                var14 = var14.4HXEZG;
                var14 = var15.bind(var16)(var14);
                _fun0037_ip = 204; continue _fun0037;
case 71:
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var19];
                var16 = var18.bind(var5)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var5)(var15);
                var15 = var15.t;
                var15 = var15.8RswJC;
                var14 = var16.bind(var17)(var15);
case 204:
                var11['label'] = var14;
                var11 = var6.bind(var5)(var12, var11);
                var7['trailing'] = var11;
                var11 = var9.defaultForumLayout;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var13];
                var9 = var12.bind(var5)(var9);
                var9 = var9.ForumLayout;
                var9 = var9.GRID;
                if(!(var11 !== var9)) { _fun0037_ip = 205; continue _fun0037 }
case 206:
                var12 = _closure1_slot50;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 76;
                var9 = var13[var9];
                var9 = var11.bind(var5)(var9);
                var11 = var9.ListViewIcon;
                var9 = {};
                var9 = var12.bind(var5)(var11, var9);
                _fun0037_ip = 207; continue _fun0037;
case 205:
                var12 = _closure1_slot50;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 75;
                var10 = var13[var10];
                var10 = var11.bind(var5)(var10);
                var11 = var10.GridSquareIcon;
                var10 = {};
                var9 = var12.bind(var5)(var11, var10);
case 207:
                var7['leading'] = var9;
                var2 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot29;
                    var1 = var1.DEFAULT_FORUM_LAYOUT;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['onPress'] = var2;
                var2 = 'forumDefaultLayout';
                var2 = var6.bind(var5)(var8, var7, var2);
                var3['children'] = var2;
                var2 = 'default-forum-layout';
                var1 = var6.bind(var5)(var4, var3, var2);
case 202:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'renderUncommonSettingsSection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3.props;
                var5 = var2.canManageWebhooks;
                var8 = undefined;
                var4 = var8 !== var5;
                if(!var4) { _fun0038_ip = 157; continue _fun0038 }
case 74:
                var4 = var5;
case 157:
                var _closure3_slot1 = var4;
                var7 = var2.channel;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 77;
                var2 = var9[var2];
                var6 = var6.bind(var8)(var2);
                var2 = var6.canUnlinkLobbyChannel;
                var6 = var2.bind(var6)(var7);
                var _closure3_slot2 = var6;
                var2 = new Array(0);
                if(var4) { _fun0038_ip = 190; continue _fun0038 }
case 125:
                var4 = var6;
case 190:
                if(!var4) { _fun0038_ip = 208; continue _fun0038 }
case 209:
                var4 = var2.push;
                var7 = _closure1_slot50;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 52;
                var5 = var11[var9];
                var5 = var10.bind(var8)(var5);
                var6 = var5.FormRow;
                var5 = {};
                var12 = 34;
                var13 = var11[var12];
                var13 = var10.bind(var8)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var11[var12];
                var12 = var10.bind(var8)(var12);
                var12 = var12.t;
                var12 = var12.CIsNZ2;
                var12 = var13.bind(var14)(var12);
                var5['label'] = var12;
                var9 = var11[var9];
                var9 = var10.bind(var8)(var9);
                var9 = var9.FormRow;
                var12 = var9.Arrow;
                var9 = {};
                var9 = var7.bind(var8)(var12, var9);
                var5['trailing'] = var9;
                var9 = 78;
                var9 = var11[var9];
                var9 = var10.bind(var8)(var9);
                var9 = var9.PuzzlePieceIcon;
                var5['leading'] = var9;
                var1 = function onPress() {
                    var4 = _closure3_slot0;
                    var3 = var4.pushScreen;
                    var1 = _closure1_slot29;
                    var2 = var1.INTEGRATIONS;
                    var1 = {};
                    var6 = _closure3_slot1;
                    var1['canManageWebhooks'] = var6;
                    var5 = _closure3_slot2;
                    var1['canUnlinkLobby'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var5['onPress'] = var1;
                var1 = 'rowIntegrations';
                var1 = var7.bind(var8)(var6, var5, var1);
                var1 = var4.bind(var2)(var1);
case 208:
                var1 = var3.renderSettingsSection;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'renderThreadManagementActions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var11 = var1.channel;
                var _closure3_slot0 = var11;
                var13 = var1.canManageThread;
                var8 = var1.isThreadModerator;
                var14 = var1.canUnarchiveThread;
                var12 = var1.isForumPost;
                var5 = var1.hasJoinedThread;
                var4 = _closure1_slot52;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 52;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var10 = null;
                var7 = null;
                if(var5) { _fun0039_ip = 210; continue _fun0039 }
case 211:
                var16 = _closure1_slot50;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var5 = 79;
                var5 = var19[var5];
                var5 = var18.bind(var3)(var5);
                var15 = var5.TableRow;
                var5 = {};
                var17 = 80;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.GroupPlusIcon;
                var17 = {};
                var17 = var16.bind(var3)(var18, var17);
                var5['icon'] = var17;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 34;
                var19 = var21[var17];
                var19 = var18.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var17 = var21[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.t;
                if(var12) { _fun0039_ip = 212; continue _fun0039 }
case 213:
                var17 = var18.10kukZ;
                var17 = var19.bind(var20)(var17);
                _fun0039_ip = 16; continue _fun0039;
case 212:
                var18 = var18.ihLPiI;
                var17 = var19.bind(var20)(var18);
case 16:
                var5['label'] = var17;
                var17 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.joinThread;
                    var2 = _closure3_slot0;
                    var1 = 'Context Menu';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var5['onPress'] = var17;
                var7 = var16.bind(var3)(var15, var5);
case 210:
                var5 = new Array(6);
                var5[0] = var7;
                var7 = var11.threadMetadata;
                var15 = var10 == var7;
                var16 = undefined;
                if(var15) { _fun0039_ip = 214; continue _fun0039 }
case 70:
                var16 = var7.archived;
case 214:
                var15 = true;
                var7 = null;
                if(!(var15 === var16)) { _fun0039_ip = 215; continue _fun0039 }
case 156:
                var7 = null;
                if(!var14) { _fun0039_ip = 215; continue _fun0039 }
case 216:
                var17 = _closure1_slot50;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 79;
                var14 = var20[var14];
                var14 = var19.bind(var3)(var14);
                var16 = var14.TableRow;
                var14 = {};
                var18 = 82;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.ClockIcon;
                var18 = {};
                var18 = var17.bind(var3)(var19, var18);
                var14['icon'] = var18;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 34;
                var20 = var22[var18];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.t;
                if(var12) { _fun0039_ip = 217; continue _fun0039 }
case 93:
                var18 = var19.S9E4Gx;
                var18 = var20.bind(var21)(var18);
                _fun0039_ip = 218; continue _fun0039;
case 217:
                var19 = var19.cnRubW;
                var18 = var20.bind(var21)(var19);
case 218:
                var14['label'] = var18;
                var18 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.unarchiveThread;
                    var2 = _closure3_slot0;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var14['onPress'] = var18;
                var7 = var17.bind(var3)(var16, var14);
case 215:
                var5[1] = var7;
                var7 = var11.threadMetadata;
                var16 = var10 == var7;
                var14 = undefined;
                if(var16) { _fun0039_ip = 219; continue _fun0039 }
case 135:
                var14 = var7.archived;
case 219:
                var7 = null;
                if(!(var15 !== var14)) { _fun0039_ip = 220; continue _fun0039 }
case 221:
                var7 = null;
                if(!var13) { _fun0039_ip = 220; continue _fun0039 }
case 222:
                var15 = _closure1_slot50;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var13 = 79;
                var13 = var18[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var16 = 83;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.XLargeIcon;
                var16 = {};
                var16 = var15.bind(var3)(var17, var16);
                var13['icon'] = var16;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 34;
                var18 = var20[var16];
                var18 = var17.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.t;
                if(var12) { _fun0039_ip = 223; continue _fun0039 }
case 224:
                var16 = var17.wiIevb;
                var16 = var18.bind(var19)(var16);
                _fun0039_ip = 225; continue _fun0039;
case 223:
                var17 = var17.BTs4KS;
                var16 = var18.bind(var19)(var17);
case 225:
                var13['label'] = var16;
                var16 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.archiveThread;
                    var2 = _closure3_slot0;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var13['onPress'] = var16;
                var7 = var15.bind(var3)(var14, var13);
case 220:
                var5[2] = var7;
                var7 = null;
                if(!var8) { _fun0039_ip = 226; continue _fun0039 }
case 227:
                var13 = var11.isLockedThread;
                var13 = var13.bind(var11)();
                var7 = null;
                if(!var13) { _fun0039_ip = 226; continue _fun0039 }
case 228:
                var15 = _closure1_slot50;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var13 = 79;
                var13 = var18[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var16 = 84;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.LockIcon;
                var16 = {};
                var16 = var15.bind(var3)(var17, var16);
                var13['icon'] = var16;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 34;
                var18 = var20[var16];
                var18 = var17.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.t;
                if(var12) { _fun0039_ip = 229; continue _fun0039 }
case 230:
                var16 = var17.jeyb/f;
                var16 = var18.bind(var19)(var16);
                _fun0039_ip = 231; continue _fun0039;
case 229:
                var17 = var17./OKSxs;
                var16 = var18.bind(var19)(var17);
case 231:
                var13['label'] = var16;
                var16 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.unlockThread;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var13['onPress'] = var16;
                var7 = var15.bind(var3)(var14, var13);
case 226:
                var5[3] = var7;
                var7 = null;
                if(!var8) { _fun0039_ip = 232; continue _fun0039 }
case 233:
                var8 = var11.isLockedThread;
                var8 = var8.bind(var11)();
                var7 = null;
                if(var8) { _fun0039_ip = 232; continue _fun0039 }
case 234:
                var11 = _closure1_slot50;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 79;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var10 = var8.TableRow;
                var8 = {};
                var13 = 84;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.LockIcon;
                var13 = {};
                var13 = var11.bind(var3)(var14, var13);
                var8['icon'] = var13;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 34;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                if(var12) { _fun0039_ip = 235; continue _fun0039 }
case 236:
                var12 = var13.HoCqm5;
                var12 = var14.bind(var15)(var12);
                _fun0039_ip = 237; continue _fun0039;
case 235:
                var13 = var13.Ur/0NT;
                var12 = var14.bind(var15)(var13);
case 237:
                var8['label'] = var12;
                var12 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.lockThread;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8['onPress'] = var12;
                var7 = var11.bind(var3)(var10, var8);
case 232:
                var5[4] = var7;
                var8 = _closure1_slot50;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 79;
                var6 = var14[var6];
                var6 = var13.bind(var3)(var6);
                var7 = var6.TableRow;
                var6 = {};
                var10 = 73;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var11 = var10.LinkIcon;
                var10 = {};
                var10 = var8.bind(var3)(var11, var10);
                var6['icon'] = var10;
                var10 = 34;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.WqhZsr;
                var10 = var11.bind(var12)(var10);
                var6['label'] = var10;
                var9 = function onPress() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 85;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.copyGuildChannelOrThreadLink;
                    var1 = _closure3_slot0;
                    var2 = var1.guild_id;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6['onPress'] = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[5] = var6;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'renderDeleteButton';
        var5['key'] = var7;
        var7 = function value() {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var10 = this;
                var4 = var10.props;
                var3 = var4.channel;
                var _closure3_slot0 = var3;
                var2 = var4.canManageChannels;
                var1 = var4.isThreadModerator;
                var14 = var4.isForumPost;
                var6 = var4.hasJoinedThread;
                var4 = var3.isThread;
                var4 = var4.bind(var3)();
                if(!var4) { _fun0040_ip = 78; continue _fun0040 }
case 75:
                var2 = var1;
case 78:
                var1 = null;
                if(!var2) { _fun0040_ip = 238; continue _fun0040 }
case 27:
                var4 = var3.type;
                var2 = _closure1_slot30;
                var2 = var2.GUILD_CATEGORY;
                if(!(var4 !== var2)) { _fun0040_ip = 128; continue _fun0040 }
case 91:
                if(var14) { _fun0040_ip = 239; continue _fun0040 }
case 209:
                var2 = var3.isThread;
                var5 = var2.bind(var3)();
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 34;
                var3 = var12[var2];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var12[var2];
                var2 = var11.bind(var9)(var2);
                var2 = var2.t;
                if(var5) { _fun0040_ip = 240; continue _fun0040 }
case 241:
                var5 = var2.8D8Rsb;
                var11 = var3.bind(var4)(var5);
                _fun0040_ip = 242; continue _fun0040;
case 240:
                var2 = var2.H7vTe3;
                var11 = var3.bind(var4)(var2);
case 242:
                _fun0040_ip = 243; continue _fun0040;
case 239:
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 34;
                var3 = var12[var2];
                var5 = undefined;
                var3 = var9.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var12[var2];
                var2 = var9.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.nEOg1N;
                var11 = var3.bind(var4)(var2);
case 243:
                _fun0040_ip = 216; continue _fun0040;
case 128:
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 34;
                var3 = var12[var2];
                var5 = undefined;
                var3 = var9.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var12[var2];
                var2 = var9.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.ifbXnJ;
                var11 = var3.bind(var4)(var2);
case 216:
                var5 = _closure1_slot52;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 52;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var8 = null;
                if(!var6) { _fun0040_ip = 244; continue _fun0040 }
case 245:
                var12 = _closure1_slot50;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var6 = 79;
                var6 = var17[var6];
                var6 = var16.bind(var4)(var6);
                var9 = var6.TableRow;
                var6 = {};
                var15 = 'danger';
                var6['variant'] = var15;
                var15 = 86;
                var15 = var17[var15];
                var15 = var16.bind(var4)(var15);
                var16 = var15.UserMinusIcon;
                var15 = {};
                var17 = 'text-danger';
                var15['color'] = var17;
                var15 = var12.bind(var4)(var16, var15);
                var6['icon'] = var15;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 34;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                if(var14) { _fun0040_ip = 246; continue _fun0040 }
case 247:
                var14 = var15.fa/84u;
                var14 = var16.bind(var17)(var14);
                _fun0040_ip = 248; continue _fun0040;
case 246:
                var15 = var15.2LsZdX;
                var14 = var16.bind(var17)(var15);
case 248:
                var6['label'] = var14;
                var13 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.leaveThread;
                    var2 = _closure3_slot0;
                    var1 = 'Context Menu';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6['onPress'] = var13;
                var8 = var12.bind(var4)(var9, var6);
case 244:
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot50;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 79;
                var7 = var14[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.TableRow;
                var7 = {};
                var12 = 'danger';
                var7['variant'] = var12;
                var12 = 87;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.TrashIcon;
                var12 = {};
                var14 = 'text-danger';
                var12['color'] = var14;
                var12 = var9.bind(var4)(var13, var12);
                var7['icon'] = var12;
                var7['label'] = var11;
                var10 = var10.handleDeleteChannel;
                var7['onPress'] = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 238:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'renderForumTags';
        var5['key'] = var7;
        var7 = function value() {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var11 = this;
                var _closure3_slot0 = var11;
                var2 = _closure1_slot53;
                var1 = var11.context;
                var4 = undefined;
                var25 = var2.bind(var4)(var1);
                var1 = var11.props;
                var14 = var1.channel;
                var13 = var1.canManageChannels;
                var _closure3_slot1 = var13;
                var1 = var14.isForumLikeChannel;
                var1 = var1.bind(var14)();
                var8 = null;
                if(var1) { _fun0041_ip = 174; continue _fun0041 }
case 124:
                return var8;
case 174:
                var3 = var14.availableTags;
                var1 = var8 == var3;
                var15 = undefined;
                if(var1) { _fun0041_ip = 249; continue _fun0041 }
case 250:
                var2 = var3.every;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.moderated;
                    return var1;
                };
                var15 = var2.bind(var3)(var1);
case 249:
                var2 = var11.getError;
                var1 = 'available_tags';
                var9 = var2.bind(var11)(var1);
                var3 = _closure1_slot52;
                var2 = _closure1_slot10;
                var1 = {};
                var7 = _closure1_slot50;
                var20 = _closure1_slot0;
                var10 = _closure1_slot2;
                var16 = 52;
                var5 = var10[var16];
                var5 = var20.bind(var4)(var5);
                var6 = var5.FormTitle;
                var5 = {};
                var18 = 34;
                var17 = var10[var18];
                var17 = var20.bind(var4)(var17);
                var19 = var17.intl;
                var17 = var19.string;
                var10 = var10[var18];
                var10 = var20.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.P/y+sr;
                var10 = var17.bind(var19)(var10);
                var5['title'] = var10;
                var10 = var25.tagsTitle;
                var5['viewStyle'] = var10;
                var8 = var8 != var9;
                if(!var8) { _fun0041_ip = 243; continue _fun0041 }
case 251:
                var10 = var9.length;
                var9 = 0;
                var8 = var10 > var9;
case 243:
                var5['error'] = var8;
                var8 = false;
                var5['uppercaseTitle'] = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var8 = _closure1_slot50;
                var7 = _closure1_slot10;
                var6 = {};
                var9 = var25.tagsWrapper;
                var6['style'] = var9;
                var9 = var14.availableTags;
                var10 = var9.length;
                var9 = 0;
                if(!(!(var10 > var9))) { _fun0041_ip = 252; continue _fun0041 }
case 253:
                var17 = _closure1_slot52;
                var10 = _closure1_slot10;
                var9 = {};
                var22 = _closure1_slot50;
                var31 = _closure1_slot0;
                var26 = _closure1_slot2;
                var19 = 41;
                var19 = var26[var19];
                var19 = var31.bind(var4)(var19);
                var20 = var19.Text;
                var19 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
                var21 = var25.tagsDescription;
                var19['style'] = var21;
                var21 = var26[var18];
                var21 = var31.bind(var4)(var21);
                var24 = var21.intl;
                var23 = var24.string;
                var21 = var26[var18];
                var21 = var31.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.3v8kZG;
                var21 = var23.bind(var24)(var21);
                var19['children'] = var21;
                var20 = var22.bind(var4)(var20, var19);
                var19 = new Array(2);
                var19[0] = var20;
                var24 = _closure1_slot1;
                var23 = 91;
                var20 = var26[var23];
                var21 = var24.bind(var4)(var20);
                var20 = {};
                var27 = !var13;
                var20['disabled'] = var27;
                var27 = function onPress() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePressTag;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var20['onPress'] = var27;
                var27 = var25.createTagButton;
                var20['style'] = var27;
                var27 = var25.createTagButtonText;
                var20['textStyle'] = var27;
                var27 = var26[var18];
                var27 = var31.bind(var4)(var27);
                var30 = var27.intl;
                var29 = var30.string;
                var27 = var26[var18];
                var27 = var31.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.F4is7O;
                var27 = var29.bind(var30)(var27);
                var20['text'] = var27;
                var27 = var26[var23];
                var27 = var24.bind(var4)(var27);
                var27 = var27.Looks;
                var27 = var27.LINK;
                var20['look'] = var27;
                var23 = var26[var23];
                var23 = var24.bind(var4)(var23);
                var23 = var23.Sizes;
                var23 = var23.XSMALL;
                var20['size'] = var23;
                var23 = true;
                var20['shrink'] = var23;
                var20 = var22.bind(var4)(var21, var20);
                var19[1] = var20;
                var9['children'] = var19;
                var9 = var17.bind(var4)(var10, var9);
                _fun0041_ip = 254; continue _fun0041;
case 252:
                var19 = _closure1_slot52;
                var17 = _closure1_slot51;
                var10 = {};
                var22 = var14.availableTags;
                var21 = var22.map;
                var20 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure1_slot50;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 88;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['tag'] = var1;
                    var7 = _closure3_slot0;
                    var7 = var7.handlePressTag;
                    var2['onPress'] = var7;
                    var6 = _closure3_slot1;
                    var6 = !var6;
                    var2['disabled'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var21 = var21.bind(var22)(var20);
                var20 = new Array(2);
                var20[0] = var21;
                var21 = var13;
                if(!var21) { _fun0041_ip = 255; continue _fun0041 }
case 256:
                var22 = var14.availableTags;
                var23 = var22.length;
                var22 = _closure1_slot47;
                var21 = var23 < var22;
case 255:
                if(!var21) { _fun0041_ip = 257; continue _fun0041 }
case 258:
                var24 = _closure1_slot50;
                var23 = _closure1_slot10;
                var22 = {};
                var25 = var25.addTagIconButtonWrapper;
                var22['style'] = var25;
                var30 = _closure1_slot0;
                var27 = _closure1_slot2;
                var25 = 89;
                var25 = var27[var25];
                var25 = var30.bind(var4)(var25);
                var26 = var25.IconButton;
                var25 = {};
                var29 = 90;
                var29 = var27[var29];
                var29 = var30.bind(var4)(var29);
                var32 = var29.PlusSmallIcon;
                var31 = {};
                var29 = 'sm';
                var31['size'] = var29;
                var34 = _closure1_slot1;
                var33 = 28;
                var33 = var27[var33];
                var33 = var34.bind(var4)(var33);
                var33 = var33.colors;
                var33 = var33.WHITE;
                var31['color'] = var33;
                var31 = var24.bind(var4)(var32, var31);
                var25['icon'] = var31;
                var25['size'] = var29;
                var28 = function onPress() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePressTag;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var25['onPress'] = var28;
                var28 = var27[var18];
                var28 = var30.bind(var4)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var27 = var27[var18];
                var27 = var30.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27./jubeH;
                var27 = var28.bind(var29)(var27);
                var25['accessibilityLabel'] = var27;
                var25 = var24.bind(var4)(var26, var25);
                var22['children'] = var25;
                var21 = var24.bind(var4)(var23, var22);
case 257:
                var20[1] = var21;
                var10['children'] = var20;
                var9 = var19.bind(var4)(var17, var10);
case 254:
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot50;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = var9[var16];
                var6 = var10.bind(var4)(var6);
                var7 = var6.FormSection;
                var6 = {};
                var9 = var9[var16];
                var9 = var10.bind(var4)(var9);
                var10 = var9.FormSwitchRow;
                var9 = {};
                var13 = !var13;
                if(var13) { _fun0041_ip = 259; continue _fun0041 }
case 260:
                var13 = var15;
case 259:
                var9['disabled'] = var13;
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var15 = var13[var18];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var13 = var13[var18];
                var13 = var17.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.yX24uL;
                var13 = var15.bind(var16)(var13);
                var9['label'] = var13;
                var13 = var14.hasFlag;
                var12 = _closure1_slot44;
                var12 = var12.REQUIRE_TAG;
                var12 = var13.bind(var14)(var12);
                var9['value'] = var12;
                var11 = var11.handleToggleRequireTag;
                var9['onValueChange'] = var11;
                var9 = var8.bind(var4)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'renderShowMediaDownloadOptions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var8 = this;
                var1 = var8.props;
                var11 = var1.channel;
                var10 = var1.canManageChannels;
                var1 = var11.isMediaChannel;
                var2 = var1.bind(var11)();
                var1 = null;
                if(!var2) { _fun0042_ip = 149; continue _fun0042 }
case 203:
                var5 = _closure1_slot50;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 52;
                var2 = var15[var6];
                var4 = undefined;
                var2 = var14.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var6 = var15[var6];
                var6 = var14.bind(var4)(var6);
                var7 = var6.FormSwitchRow;
                var6 = {};
                var10 = !var10;
                var6['disabled'] = var10;
                var10 = 34;
                var12 = var15[var10];
                var12 = var14.bind(var4)(var12);
                var16 = var12.intl;
                var13 = var16.string;
                var12 = var15[var10];
                var12 = var14.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.u8LZOj;
                var12 = var13.bind(var16)(var12);
                var6['label'] = var12;
                var12 = var15[var10];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var15[var10];
                var10 = var14.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.J4wCc3;
                var10 = var12.bind(var13)(var10);
                var6['subLabel'] = var10;
                var10 = var11.hasFlag;
                var9 = _closure1_slot44;
                var9 = var9.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                var9 = var10.bind(var11)(var9);
                var9 = !var9;
                var6['value'] = var9;
                var8 = var8.handleToggleShowMediaDownloadOptions;
                var6['onValueChange'] = var8;
                var6 = var5.bind(var4)(var7, var6);
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 149:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'renderCategory';
        var5['key'] = var7;
        var7 = function value() {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var3 = var1.props;
                var2 = var3.hasCategories;
                var6 = var3.category;
                var1 = var3.channel;
                var9 = var3.canManageParent;
                if(!var2) { _fun0043_ip = 171; continue _fun0043 }
case 34:
                var3 = var1.type;
                var2 = _closure1_slot30;
                var2 = var2.GUILD_CATEGORY;
                if(!(var3 !== var2)) { _fun0043_ip = 171; continue _fun0043 }
case 261:
                var2 = null;
                if(!(var2 != var6)) { _fun0043_ip = 262; continue _fun0043 }
case 5:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 44;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.computeChannelName;
                var3 = _closure1_slot24;
                var2 = _closure1_slot23;
                var11 = var4.bind(var5)(var6, var3, var2);
                _fun0043_ip = 263; continue _fun0043;
case 262:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 34;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.GSfOoq;
                var11 = var3.bind(var4)(var2);
case 263:
                var4 = _closure1_slot50;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 52;
                var1 = var12[var1];
                var3 = undefined;
                var1 = var10.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var7 = 79;
                var5 = var12[var7];
                var5 = var10.bind(var3)(var5);
                var6 = var5.TableRow;
                var5 = {};
                var13 = 92;
                var13 = var12[var13];
                var13 = var10.bind(var3)(var13);
                var14 = var13.FolderPlusIcon;
                var13 = {};
                var13 = var4.bind(var3)(var14, var13);
                var5['icon'] = var13;
                var13 = 34;
                var14 = var12[var13];
                var14 = var10.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var12[var13];
                var13 = var10.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.vHCZws;
                var13 = var14.bind(var15)(var13);
                var5['label'] = var13;
                var7 = var12[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.TableRow;
                var10 = var7.TrailingText;
                var7 = {};
                var7['text'] = var11;
                var7 = var4.bind(var3)(var10, var7);
                var5['trailing'] = var7;
                var5['arrow'] = var9;
                var7 = undefined;
                if(!var9) { _fun0043_ip = 130; continue _fun0043 }
case 264:
                var7 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot29;
                    var1 = var1.CHANGE_CATEGORY;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
case 130:
                var5['onPress'] = var7;
                var5 = var4.bind(var3)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
case 171:
                var1 = null;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'renderThreadSettings';
        var5['key'] = var7;
        var7 = function value() {
            var7 = this;
            var4 = _closure1_slot52;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 52;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Form;
            var1 = {};
            var5 = var7.renderChannelInfo;
            var6 = var5.bind(var7)();
            var5 = new Array(7);
            var5[0] = var6;
            var6 = var7.renderCommonSettingsSection;
            var6 = var6.bind(var7)();
            var5[1] = var6;
            var6 = var7.renderThreadManagementActions;
            var6 = var6.bind(var7)();
            var5[2] = var6;
            var6 = var7.renderSlowmode;
            var6 = var6.bind(var7)();
            var5[3] = var6;
            var6 = var7.renderAutoArchiveDuration;
            var6 = var6.bind(var7)();
            var5[4] = var6;
            var6 = var7.renderInvitable;
            var6 = var6.bind(var7)();
            var5[5] = var6;
            var6 = var7.renderDeleteButton;
            var6 = var6.bind(var7)();
            var5[6] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'renderChannelSettings';
        var5['key'] = var7;
        var7 = function value() {
            var7 = this;
            var4 = _closure1_slot52;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 52;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Form;
            var1 = {};
            var5 = var7.renderChannelInfo;
            var6 = var5.bind(var7)();
            var5 = new Array(19);
            var5[0] = var6;
            var6 = var7.renderForumTags;
            var6 = var6.bind(var7)();
            var5[1] = var6;
            var6 = var7.renderCategory;
            var6 = var6.bind(var7)();
            var5[2] = var6;
            var6 = var7.renderPermissions;
            var6 = var6.bind(var7)();
            var5[3] = var6;
            var6 = var7.renderCommonSettingsSection;
            var6 = var6.bind(var7)();
            var5[4] = var6;
            var6 = var7.renderDefaultForumLayout;
            var6 = var6.bind(var7)();
            var5[5] = var6;
            var6 = var7.renderDefaultSortOrder;
            var6 = var6.bind(var7)();
            var5[6] = var6;
            var6 = var7.renderDefaultTagSetting;
            var6 = var6.bind(var7)();
            var5[7] = var6;
            var6 = var7.renderAnnouncement;
            var6 = var6.bind(var7)();
            var5[8] = var6;
            var6 = var7.renderNsfwConfig;
            var6 = var6.bind(var7)();
            var5[9] = var6;
            var6 = var7.renderSlowmode;
            var6 = var6.bind(var7)();
            var5[10] = var6;
            var6 = var7.renderDefaultAutoArchiveDuration;
            var6 = var6.bind(var7)();
            var5[11] = var6;
            var6 = var7.renderBitrateSettings;
            var6 = var6.bind(var7)();
            var5[12] = var6;
            var6 = var7.renderVideoQualityModeSettings;
            var6 = var6.bind(var7)();
            var5[13] = var6;
            var6 = var7.renderUserLimitSettings;
            var6 = var6.bind(var7)();
            var5[14] = var6;
            var6 = var7.renderRegionOverride;
            var6 = var6.bind(var7)();
            var5[15] = var6;
            var6 = var7.renderUncommonSettingsSection;
            var6 = var6.bind(var7)();
            var5[16] = var6;
            var6 = var7.renderShowMediaDownloadOptions;
            var6 = var6.bind(var7)();
            var5[17] = var6;
            var6 = var7.renderDeleteButton;
            var6 = var6.bind(var7)();
            var5[18] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var3 = this;
                var5 = _closure1_slot53;
                var2 = var3.context;
                var4 = undefined;
                var6 = var5.bind(var4)(var2);
                var2 = var3.props;
                var2 = var2.isThread;
                if(var2) { _fun0044_ip = 193; continue _fun0044 }
case 25:
                var2 = var3.renderChannelSettings;
                var5 = var2.bind(var3)();
                _fun0044_ip = 7; continue _fun0044;
case 193:
                var2 = var3.renderThreadSettings;
                var5 = var2.bind(var3)();
case 7:
                var3 = _closure1_slot50;
                var2 = _closure1_slot10;
                var1 = {};
                var6 = var6.screenContainer;
                var1['style'] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[29] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot54 = var7;
    var4 = 93;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 97;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsOverview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedChannelSettingsOverview(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var7 = var2.autoFocusElement;
            var _closure2_slot1 = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 94;
            var2 = var9[var2];
            var5 = undefined;
            var3 = var8.bind(var5)(var2);
            var2 = var3.useNavigation;
            var17 = var2.bind(var3)();
            var _closure2_slot2 = var17;
            var4 = 95;
            var2 = var9[var4];
            var12 = var8.bind(var5)(var2);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot18;
            var10 = new Array(1);
            var10[0] = var3;
            var2 = function() {
                var3 = _closure1_slot18;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var11.bind(var12)(var10, var2);
            var _closure2_slot3 = var11;
            var2 = var9[var4];
            var14 = var8.bind(var5)(var2);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot17;
            var12 = new Array(1);
            var12[0] = var10;
            var2 = function() {
                var2 = _closure1_slot17;
                var1 = var2.getChannel;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var13.bind(var14)(var12, var2);
            var2 = 68;
            var12 = var9[var2];
            var13 = var8.bind(var5)(var12);
            var12 = var13.useIsThreadModerator;
            var16 = var12.bind(var13)(var11);
            var12 = var9[var4];
            var15 = var8.bind(var5)(var12);
            var14 = var15.useStateFromStoresObject;
            var12 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var5 = null;
                    var6 = var5 != var2;
                    var4 = undefined;
                    if(!var6) { _fun0046_ip = 265; continue _fun0046 }
case 266:
                    var8 = _closure1_slot11;
                    var7 = var8.isMuted;
                    var6 = _closure2_slot3;
                    var6 = var6.id;
                    var4 = var7.bind(var8)(var6);
case 265:
                    var1['isMutedThread'] = var4;
                    var4 = _closure2_slot3;
                    var4 = var5 != var4;
                    var2 = undefined;
                    if(!var4) { _fun0046_ip = 91; continue _fun0046 }
case 174:
                    var5 = _closure1_slot11;
                    var4 = var5.hasJoined;
                    var3 = _closure2_slot3;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
case 91:
                    var1['hasJoinedThread'] = var2;
                    return var1;
                }
            };
            var12 = var14.bind(var15)(var13, var12);
            var13 = var12.isMutedThread;
            var12 = var12.hasJoinedThread;
            var2 = var9[var2];
            var14 = var8.bind(var5)(var2);
            var2 = var14.useCanManageThread;
            var15 = var2.bind(var14)(var11);
            var2 = 55;
            var2 = var9[var2];
            var14 = var8.bind(var5)(var2);
            var2 = var14.useIsChannelContentGated;
            var2 = var2.bind(var14)(var11);
            var _closure2_slot4 = var2;
            var4 = var9[var4];
            var9 = var8.bind(var5)(var4);
            var8 = var9.useStateFromStoresObject;
            var4 = new Array(7);
            var4[0] = var10;
            var10 = _closure1_slot20;
            var4[1] = var10;
            var4[2] = var3;
            var3 = _closure1_slot24;
            var4[3] = var3;
            var3 = _closure1_slot22;
            var4[4] = var3;
            var3 = _closure1_slot19;
            var4[5] = var3;
            var3 = _closure1_slot21;
            var4[6] = var3;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var2;
            var2 = function() {
                _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                    var2 = _closure1_slot17;
                    var1 = var2.getProps;
                    var1 = var1.bind(var2)();
                    var3 = var1.submitting;
                    var2 = var1.errors;
                    var1 = _closure2_slot3;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0047_ip = 267; continue _fun0047 }
case 145:
                    var8 = _closure1_slot20;
                    var7 = var8.getGuild;
                    var14 = _closure2_slot3;
                    var1 = var14.getGuildId;
                    var1 = var1.bind(var14)();
                    var8 = var7.bind(var8)(var1);
                    var9 = _closure1_slot18;
                    var7 = var9.getChannel;
                    var1 = var14.parent_id;
                    var13 = var7.bind(var9)(var1);
                    var7 = _closure1_slot24;
                    var1 = var7.getCurrentUser;
                    var10 = var1.bind(var7)();
                    var9 = _closure1_slot15;
                    var7 = var9.has;
                    var1 = var14.type;
                    var7 = var7.bind(var9)(var1);
                    var11 = _closure1_slot22;
                    var9 = var11.getRegions;
                    var1 = var14.getGuildId;
                    var1 = var1.bind(var14)();
                    var9 = var9.bind(var11)(var1);
                    var1 = {};
                    var1['isThread'] = var7;
                    var1['guild'] = var8;
                    var1['category'] = var13;
                    var12 = _closure1_slot19;
                    var11 = var12.hasCategories;
                    var7 = var14.guild_id;
                    var7 = var11.bind(var12)(var7);
                    var1['hasCategories'] = var7;
                    var7 = _closure2_slot4;
                    var1['pinDisabled'] = var7;
                    var12 = _closure1_slot21;
                    var11 = var12.can;
                    var7 = _closure1_slot38;
                    var7 = var7.MANAGE_CHANNELS;
                    var7 = var11.bind(var12)(var7, var14);
                    var1['canManageChannels'] = var7;
                    var7 = var6 != var10;
                    if(!var7) { _fun0047_ip = 149; continue _fun0047 }
case 268:
                    var11 = _closure2_slot3;
                    var11 = var11.ownerId;
                    var10 = var10.id;
                    var7 = var11 === var10;
case 149:
                    var1['isChannelOwner'] = var7;
                    if(!(var6 == var13)) { _fun0047_ip = 269; continue _fun0047 }
case 87:
                    var11 = _closure1_slot21;
                    var10 = var11.can;
                    var7 = _closure1_slot38;
                    var7 = var7.MANAGE_CHANNELS;
                    var7 = var10.bind(var11)(var7, var8);
                    _fun0047_ip = 104; continue _fun0047;
case 269:
                    var12 = _closure1_slot21;
                    var11 = var12.can;
                    var10 = _closure1_slot38;
                    var10 = var10.MANAGE_CHANNELS;
                    var7 = var11.bind(var12)(var10, var13);
case 104:
                    var1['canManageParent'] = var7;
                    var12 = _closure1_slot21;
                    var13 = var12.can;
                    var10 = _closure1_slot38;
                    var11 = var10.MANAGE_ROLES;
                    var7 = _closure2_slot3;
                    var11 = var13.bind(var12)(var11, var7);
                    var1['canManageRoles'] = var11;
                    var11 = var12.can;
                    var10 = var10.SEND_MESSAGES;
                    var10 = var11.bind(var12)(var10, var7);
                    var1['canSendMessages'] = var10;
                    var11 = _closure1_slot13;
                    var10 = var7.type;
                    var7 = undefined;
                    var10 = var11.bind(var7)(var10);
                    if(!var10) { _fun0047_ip = 270; continue _fun0047 }
case 271:
                    var14 = _closure1_slot21;
                    var13 = var14.can;
                    var11 = _closure1_slot38;
                    var12 = var11.MANAGE_WEBHOOKS;
                    var11 = _closure2_slot3;
                    var10 = var13.bind(var14)(var12, var11);
case 270:
                    var1['canManageWebhooks'] = var10;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 68;
                    var10 = var12[var10];
                    var12 = var11.bind(var7)(var10);
                    var11 = var12.canUnarchiveThread;
                    var10 = _closure2_slot3;
                    var10 = var11.bind(var12)(var10);
                    var1['canUnarchiveThread'] = var10;
                    var1['regions'] = var9;
                    var1['submitting'] = var3;
                    var1['errors'] = var2;
                    var4 = _closure1_slot16;
                    var4 = var4.bind(var7)(var8);
                    if(var4) { _fun0047_ip = 272; continue _fun0047 }
case 199:
                    var5 = _closure2_slot3;
                    var5 = var5.linkedLobby;
                    var4 = var6 != var5;
case 272:
                    var1['isNSFWDisabled'] = var4;
                    return var1;
case 267:
                    var1 = {};
                    var4 = false;
                    var1['isThread'] = var4;
                    var1['submitting'] = var3;
                    var1['errors'] = var2;
                    return var1;
                }
            };
            var10 = var8.bind(var9)(var4, var2, var3);
            var4 = _closure1_slot9;
            var2 = var4.useRef;
            var8 = null;
            var9 = var2.bind(var4)(var8);
            var _closure2_slot5 = var9;
            var3 = var4.useEffect;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var17;
            var1 = function() {
                var4 = _closure2_slot2;
                var3 = var4.addListener;
                var2 = 'transitionEnd';
                var1 = function(arg1) {
                    _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var1 = var1.closing;
                        if(var1) { _fun0048_ip = 273; continue _fun0048 }
case 274:
                        var3 = _closure2_slot1;
                        var2 = _closure1_slot25;
                        var2 = var2.CHANNEL_NAME;
                        if(!(var3 === var2)) { _fun0048_ip = 273; continue _fun0048 }
case 143:
                        var1 = _closure2_slot5;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0048_ip = 102; continue _fun0048 }
case 275:
                        var2 = var3.focus;
                        var1 = var2.bind(var3)();
case 102:
                        return var1;
case 273:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var2 = var8 != var18;
            var1 = null;
            if(!var2) { _fun0045_ip = 276; continue _fun0045 }
case 277:
            var4 = _closure1_slot50;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 96;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var7 = _closure1_slot54;
            var6 = {};
            var21 = var6;
            var20 = var10;
            var14 = copyDataProperties(var21, var20);
            var14 = 'channel';
            var6[var14] = var18;
            var14 = 'navigation';
            var6[var14] = var17;
            var14 = 'isThreadModerator';
            var6[var14] = var16;
            var14 = 'canManageThread';
            var6[var14] = var15;
            var14 = var10.canUnarchiveThread;
            var10 = 'canUnarchiveThread';
            var6[var10] = var14;
            var10 = 'isMutedThread';
            var6[var10] = var13;
            var10 = 'hasJoinedThread';
            var6[var10] = var12;
            var8 = var8 == var11;
            var10 = undefined;
            if(var8) { _fun0045_ip = 278; continue _fun0045 }
case 279:
            var8 = var11.isForumPost;
            var10 = var8.bind(var11)();
case 278:
            var8 = 'isForumPost';
            var6[var8] = var10;
            var8 = 'channelNameRef';
            var6[var8] = var9;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 276:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();