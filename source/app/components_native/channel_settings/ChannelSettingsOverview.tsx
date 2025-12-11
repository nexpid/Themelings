// app/components_native/channel_settings/ChannelSettingsOverview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
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
            _closure1_slot57 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var2 = function PinImage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var7 = var2.style;
            var2 = _closure1_slot54;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 30;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useStateFromStores;
            var8 = _closure1_slot22;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot22;
                var2 = var3.hasUnreadPins;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var6)(var2, var1);
            var6 = undefined;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot51;
            var2 = _closure1_slot10;
            var1 = {};
            var8 = var11.outer;
            var1['style'] = var8;
            var10 = _closure1_slot51;
            var9 = _closure1_slot10;
            var8 = {};
            var11 = var11.badge;
            var8['style'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var1['children'] = var8;
            var6 = var3.bind(var4)(var2, var1);
case 6:
            var3 = _closure1_slot52;
            var2 = _closure1_slot10;
            var1 = {};
            var1['style'] = var7;
            var8 = _closure1_slot51;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 31;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.PinIcon;
            var5 = {};
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot58 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var12 = 0;
    var5 = var7[var12];
    var1 = undefined;
    var5 = var14.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var20 = 1;
    var5 = var7[var20];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var17 = 4;
    var5 = var7[var17];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot9 = var5;
    var8 = 7;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.View;
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.EDITABLE_VOICE_SETTINGS_TYPES;
    var _closure1_slot12 = var9;
    var9 = var8.isGuildTextChannelType;
    var _closure1_slot13 = var9;
    var9 = var8.THREADED_CHANNEL_TYPES;
    var _closure1_slot14 = var9;
    var8 = var8.THREAD_CHANNEL_TYPES;
    var _closure1_slot15 = var8;
    var8 = 10;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.isGuildNSFW;
    var _closure1_slot16 = var8;
    var8 = 11;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 12;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot18 = var8;
    var8 = 13;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot19 = var8;
    var15 = 14;
    var8 = var7[var15];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot20 = var8;
    var19 = 15;
    var8 = var7[var19];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot21 = var8;
    var18 = 16;
    var8 = var7[var18];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot22 = var8;
    var8 = 17;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot23 = var8;
    var8 = 18;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot24 = var8;
    var8 = 19;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot25 = var8;
    var8 = 20;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.ChannelSettingsAutoFocusElement;
    var _closure1_slot26 = var8;
    var8 = 21;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.AnalyticEvents;
    var _closure1_slot27 = var9;
    var9 = var8.BITRATE_DEFAULT;
    var _closure1_slot28 = var9;
    var9 = var8.BITRATE_MIN;
    var _closure1_slot29 = var9;
    var9 = var8.ChannelSettingsSections;
    var _closure1_slot30 = var9;
    var9 = var8.ChannelTypes;
    var _closure1_slot31 = var9;
    var9 = var8.ChannelTypesSets;
    var _closure1_slot32 = var9;
    var9 = var8.GuildFeatures;
    var _closure1_slot33 = var9;
    var9 = var8.GuildSettingsSections;
    var _closure1_slot34 = var9;
    var9 = var8.HelpdeskArticles;
    var _closure1_slot35 = var9;
    var9 = var8.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot36 = var9;
    var9 = var8.MAX_VOICE_USER_LIMIT;
    var _closure1_slot37 = var9;
    var9 = var8.MAX_STAGE_VOICE_USER_LIMIT;
    var _closure1_slot38 = var9;
    var9 = var8.Permissions;
    var _closure1_slot39 = var9;
    var9 = var8.SettingsPaneTypes;
    var _closure1_slot40 = var9;
    var9 = var8.SLOWMODE_VALUES;
    var _closure1_slot41 = var9;
    var9 = var8.UNSAFE_Colors;
    var _closure1_slot42 = var9;
    var9 = var8.VideoQualityMode;
    var _closure1_slot43 = var9;
    var8 = var8.PIN_AND_BYPASS_SLOWMODE_PERMISSION_MIGRATION_BREAKING_CHANGE_TIMESTAMP;
    var _closure1_slot44 = var8;
    var8 = 22;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.ChannelFlags;
    var _closure1_slot45 = var9;
    var9 = var8.MAX_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot46 = var9;
    var8 = var8.MAX_FORUM_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot47 = var8;
    var8 = 23;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.MAX_FORUM_TAGS;
    var _closure1_slot48 = var8;
    var8 = 24;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DEFAULT_AUTO_ARCHIVE_DURATION;
    var _closure1_slot49 = var8;
    var8 = 25;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.TitleStyleType;
    var _closure1_slot50 = var8;
    var8 = 26;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var16 = var8.Fonts;
    var8 = 27;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot51 = var9;
    var9 = var8.jsxs;
    var _closure1_slot52 = var9;
    var8 = var8.Fragment;
    var _closure1_slot53 = var8;
    var8 = 28;
    var9 = var7[var8];
    var11 = var6.bind(var1)(var9);
    var10 = var11.createStyles;
    var9 = {};
    var21 = {'position': 'absolute', 'top': 2, 'right': 4294967292, 'width': 12, 'height': 12, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var13 = 29;
    var22 = var7[var13];
    var22 = var14.bind(var1)(var22);
    var22 = var22.radii;
    var22 = var22.md;
    var21['borderRadius'] = var22;
    var22 = var7[var13];
    var22 = var14.bind(var1)(var22);
    var22 = var22.colors;
    var22 = var22.BACKGROUND_SURFACE_HIGH;
    var21['backgroundColor'] = var22;
    var9['outer'] = var21;
    var21 = {'backgroundColor': null, 'width': 8, 'height': 8};
    var22 = var7[var13];
    var22 = var14.bind(var1)(var22);
    var22 = var22.unsafe_rawColors;
    var22 = var22.RED_400;
    var21['backgroundColor'] = var22;
    var22 = var7[var13];
    var22 = var14.bind(var1)(var22);
    var22 = var22.radii;
    var22 = var22.xs;
    var21['borderRadius'] = var22;
    var9['badge'] = var21;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot54 = var9;
    var8 = var7[var8];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createLegacyClassComponentStyles;
    var8 = {};
    var11 = {};
    var11['flex'] = var20;
    var20 = var7[var13];
    var20 = var14.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.BACKGROUND_BASE_LOWER;
    var11['backgroundColor'] = var20;
    var8['screenContainer'] = var11;
    var11 = {};
    var11['marginHorizontal'] = var19;
    var8['slider'] = var11;
    var11 = {};
    var19 = var7[var13];
    var19 = var14.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.CARD_BACKGROUND_DEFAULT;
    var11['backgroundColor'] = var19;
    var8['sliderWrapper'] = var11;
    var11 = {};
    var11['marginTop'] = var18;
    var8['alertText'] = var11;
    var11 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'paddingHorizontal': 12, 'paddingBottom': 24};
    var8['tagsWrapper'] = var11;
    var11 = {};
    var11['paddingHorizontal'] = var17;
    var8['tagsDescription'] = var11;
    var11 = {'justifyContent': 'center', 'margin': 4};
    var8['addTagIconButtonWrapper'] = var11;
    var11 = {'backgroundColor': 'transparent', 'paddingHorizontal': 0, 'marginTop': 4};
    var8['createTagButton'] = var11;
    var11 = {};
    var16 = var16.PRIMARY_SEMIBOLD;
    var11['fontFamily'] = var16;
    var11['fontSize'] = var15;
    var8['createTagButtonText'] = var11;
    var11 = {};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOBILE_PRIMARY;
    var11['backgroundColor'] = var15;
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var11['borderColor'] = var13;
    var8['deleteButton'] = var11;
    var11 = {};
    var11['paddingTop'] = var12;
    var8['tagsTitle'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot55 = var8;
    var8 = var5.PureComponent;
    var5 = function(arg1) {
        var4 = function ChannelSettingsOverview(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                var1 = _closure1_slot57;
                var1 = var1.bind(var6)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var11);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var6)(var5);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 10:
                var1 = var4.bind(var6)(var5, var1);
                var _closure3_slot0 = var1;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 32;
                var4 = var7[var4];
                var8 = var5.bind(var6)(var4);
                var7 = var8.findIndex;
                var5 = _closure1_slot41;
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
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                        var1 = _closure1_slot30;
                        var1 = var1.PERMISSIONS;
                        if(!(var2 !== var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 33;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.trackWithMetadata;
                        var1 = _closure1_slot27;
                        var2 = var1.SETTINGS_PANE_VIEWED;
                        var1 = {};
                        var8 = 'channel';
                        var1['settings_type'] = var8;
                        var7 = _closure1_slot40;
                        var7 = var7.CHANNEL_SETTINGS;
                        var1['origin_pane'] = var7;
                        var5 = var5[var6];
                        var1['destination_pane'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['pushScreen'] = var4;
                var4 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var3 = var3.state;
                        var3 = var3.hasChanges;
                        if(!var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var7 = var3.channel;
                        var _closure4_slot0 = var7;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 34;
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
                        if(var12) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                        var9 = var11.autoArchiveDuration;
case 15:
                        var3['autoArchiveDuration'] = var9;
                        var11 = var7.threadMetadata;
                        var12 = var10 == var11;
                        var9 = undefined;
                        if(var12) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var9 = var11.locked;
case 17:
                        var3['locked'] = var9;
                        var9 = var7.threadMetadata;
                        var10 = var10 == var9;
                        var8 = undefined;
                        if(var10) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                        var8 = var9.invitable;
case 19:
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
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var1 = arg1;
                                var2 = var1.status;
                                var1 = 200;
                                if(!(var1 === var2)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var1 = 35;
                                var1 = var7[var1];
                                var9 = undefined;
                                var3 = var6.bind(var9)(var1);
                                var2 = var3.open;
                                var1 = {};
                                var4 = 'THREAD_SETTINGS_UPDATED';
                                var1['key'] = var4;
                                var4 = 36;
                                var4 = var7[var4];
                                var4 = var6.bind(var9)(var4);
                                var1['icon'] = var4;
                                var6 = _closure4_slot0;
                                var4 = var6.isThread;
                                var4 = var4.bind(var6)();
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var5 = 37;
                                var6 = var10[var5];
                                var6 = var8.bind(var9)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var10[var5];
                                var5 = var8.bind(var9)(var5);
                                var5 = var5.t;
                                if(var4) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                                var4 = var5.FE/ohq;
                                var4 = var6.bind(var7)(var4);
                                _fun0006_ip = 25; continue _fun0006;
case 23:
                                var5 = var5.n2Y84J;
                                var4 = var6.bind(var7)(var5);
case 25:
                                var1['content'] = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.navigation;
                                var1 = var2.goBack;
                                var1 = var1.bind(var2)();
case 21:
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
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSave'] = var4;
                var4 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var7 = arg1;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.channel;
                        var1 = var3.isThread;
                        var4 = var1.bind(var3)();
                        if(var4) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                        var4 = _closure1_slot32;
                        var5 = var4.LIMITED_CHANNEL_NAME;
                        var4 = var5.has;
                        var3 = var3.type;
                        var3 = var4.bind(var5)(var3);
                        var6 = var7;
                        if(!var3) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 39;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.sanitizeGuildTextChannelName;
                        var6 = var3.bind(var4)(var7);
                        _fun0007_ip = 28; continue _fun0007;
case 26:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 38;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = false;
                        var6 = var4.bind(var5)(var7, var3);
case 28:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 34;
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
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var3 = var2.channel;
                        var2 = var3.isThread;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 38;
                        var4 = var5[var4];
                        var5 = undefined;
                        var7 = var6.bind(var5)(var4);
                        var6 = var3.name;
                        var4 = true;
                        var6 = var7.bind(var5)(var6, var4);
                        var3 = var3.name;
                        if(!(var6 !== var3)) { _fun0008_ip = 30; continue _fun0008 }
case 32:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 34;
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
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleBlurName'] = var4;
                var4 = function(arg1) {
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 34;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = 40;
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
                    var1 = 34;
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
                    var1 = 34;
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
                    var1 = 34;
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
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = _closure3_slot0;
                        var1 = var4.props;
                        var6 = var1.channel;
                        var1 = var4.state;
                        var5 = var1.hasChanges;
                        var3 = _closure1_slot41;
                        var2 = global;
                        var8 = var2.Math;
                        var7 = var8.round;
                        var2 = arg1;
                        var2 = var7.bind(var8)(var2);
                        var7 = var3[var2];
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 34;
                        var2 = var2[var1];
                        var1 = undefined;
                        var8 = var3.bind(var1)(var2);
                        var3 = var8.updateChannel;
                        var2 = {};
                        var2['rateLimitPerUser'] = var7;
                        var2 = var3.bind(var8)(var2);
                        var3 = var4.setState;
                        var2 = {};
                        if(var5) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                        var6 = var6.rateLimitPerUser;
                        var5 = var6 !== var7;
case 33:
                        var2['hasChanges'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['handleSlowmodeChange'] = var4;
                var4 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 34;
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
                    var1 = 34;
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
                    var1 = 34;
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
                    var1 = 34;
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
                    var1 = 34;
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
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 34;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.updateChannel;
                        var2 = {};
                        var6 = _closure1_slot31;
                        var5 = arg1;
                        if(var5) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                        var5 = var6.GUILD_ANNOUNCEMENT;
                        _fun0010_ip = 37; continue _fun0010;
case 35:
                        var5 = var6.GUILD_TEXT;
case 37:
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
                    var1 = 41;
                    var6 = var5[var1];
                    var1 = undefined;
                    var9 = var7.bind(var1)(var6);
                    var8 = var9.setFlag;
                    var7 = var3.flags;
                    var3 = _closure1_slot45;
                    var6 = var3.ACTIVE_CHANNELS_REMOVED;
                    var3 = arg1;
                    var3 = !var3;
                    var6 = var8.bind(var9)(var7, var6, var3);
                    var3 = _closure1_slot1;
                    var2 = 34;
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
                    var1 = 34;
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
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                            var3 = undefined;
                            var _closure5_slot0 = var3;
                            var5 = _closure1_slot55;
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
                            var2 = 42;
                            var2 = var6[var2];
                            var9 = var4.bind(var3)(var2);
                            var6 = var9.isDefaultChannelThresholdMetAfterDelete;
                            var2 = var12.getGuildId;
                            var4 = var2.bind(var12)();
                            var2 = var12.id;
                            var2 = var6.bind(var9)(var4, var2);
                            SaveGenerator(address=131);
case 40:
                            return var2;
case 41:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                            var4 = null;
                            if(!(var4 != var5)) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                            var10 = var5.features;
                            var9 = var10.has;
                            var6 = _closure1_slot33;
                            var6 = var6.COMMUNITY;
                            var6 = var9.bind(var10)(var6);
                            if(!var6) { _fun0011_ip = 44; continue _fun0011 }
case 46:
                            var9 = var5.rulesChannelId;
                            var6 = var12.id;
                            if(!(var9 !== var6)) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                            var9 = var5.publicUpdatesChannelId;
                            var6 = var12.id;
                            if(!(var9 === var6)) { _fun0011_ip = 44; continue _fun0011 }
case 47:
                            var9 = var5.rulesChannelId;
                            var6 = var12.id;
                            if(!(var9 !== var6)) { _fun0011_ip = 49; continue _fun0011 }
case 18:
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 37;
                            var9 = var13[var6];
                            var9 = var11.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var13[var6];
                            var6 = var11.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6.1B1/NB;
                            var18 = var9.bind(var10)(var6);
                            _fun0011_ip = 50; continue _fun0011;
case 49:
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 37;
                            var9 = var13[var6];
                            var9 = var11.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var13[var6];
                            var6 = var11.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6.yjrZPl;
                            var18 = var9.bind(var10)(var6);
case 50:
                            var9 = _closure1_slot1;
                            var25 = _closure1_slot2;
                            var6 = 43;
                            var6 = var25[var6];
                            var10 = var9.bind(var3)(var6);
                            var9 = var10.show;
                            var6 = {};
                            var22 = _closure1_slot0;
                            var19 = 37;
                            var11 = var25[var19];
                            var11 = var22.bind(var3)(var11);
                            var14 = var11.intl;
                            var13 = var14.string;
                            var11 = var25[var19];
                            var11 = var22.bind(var3)(var11);
                            var11 = var11.t;
                            var11 = var11.TY/V+H;
                            var11 = var13.bind(var14)(var11);
                            var6['title'] = var11;
                            var11 = var25[var19];
                            var11 = var22.bind(var3)(var11);
                            var14 = var11.intl;
                            var13 = var14.string;
                            var11 = var25[var19];
                            var11 = var22.bind(var3)(var11);
                            var11 = var11.t;
                            var11 = var11.BddRzS;
                            var11 = var13.bind(var14)(var11);
                            var6['confirmText'] = var11;
                            var14 = _closure1_slot52;
                            var13 = _closure1_slot53;
                            var11 = {};
                            var17 = _closure1_slot51;
                            var15 = 44;
                            var15 = var25[var15];
                            var15 = var22.bind(var3)(var15);
                            var16 = var15.Text;
                            var15 = {};
                            var23 = var20.alertText;
                            var15['style'] = var23;
                            var23 = 'text-md/medium';
                            var15['variant'] = var23;
                            var15['children'] = var18;
                            var16 = var17.bind(var3)(var16, var15);
                            var15 = new Array(2);
                            var15[0] = var16;
                            var18 = _closure1_slot51;
                            var16 = 45;
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
                            var22 = var19.LAJbDm;
                            var19 = {};
                            var25 = function onClick() {
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 43;
                                var3 = var5[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 34;
                                var3 = var5[var3];
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 46;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.open;
                                var3 = _closure5_slot0;
                                var3 = var3.id;
                                var2 = _closure1_slot34;
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
                            _fun0011_ip = 51; continue _fun0011;
case 44:
                            if(!(var4 != var5)) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                            if(var2) { _fun0011_ip = 52; continue _fun0011 }
case 54:
                            var5 = _closure1_slot1;
                            var22 = _closure1_slot2;
                            var4 = 43;
                            var4 = var22[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.show;
                            var4 = {};
                            var18 = _closure1_slot0;
                            var17 = 37;
                            var9 = var22[var17];
                            var9 = var18.bind(var3)(var9);
                            var11 = var9.intl;
                            var10 = var11.string;
                            var9 = var22[var17];
                            var9 = var18.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.TY/V+H;
                            var9 = var10.bind(var11)(var9);
                            var4['title'] = var9;
                            var9 = var22[var17];
                            var9 = var18.bind(var3)(var9);
                            var11 = var9.intl;
                            var10 = var11.string;
                            var9 = var22[var17];
                            var9 = var18.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.BddRzS;
                            var9 = var10.bind(var11)(var9);
                            var4['confirmText'] = var9;
                            var11 = _closure1_slot52;
                            var10 = _closure1_slot53;
                            var9 = {};
                            var15 = _closure1_slot51;
                            var13 = 44;
                            var13 = var22[var13];
                            var13 = var18.bind(var3)(var13);
                            var14 = var13.Text;
                            var13 = {};
                            var16 = var20.alertText;
                            var13['style'] = var16;
                            var19 = 'text-md/medium';
                            var13['variant'] = var19;
                            var16 = var22[var17];
                            var16 = var18.bind(var3)(var16);
                            var24 = var16.intl;
                            var23 = var24.string;
                            var16 = var22[var17];
                            var16 = var18.bind(var3)(var16);
                            var16 = var16.t;
                            var16 = var16.iWlB6h;
                            var16 = var23.bind(var24)(var16);
                            var13['children'] = var16;
                            var14 = var15.bind(var3)(var14, var13);
                            var13 = new Array(2);
                            var13[0] = var14;
                            var16 = _closure1_slot51;
                            var14 = 45;
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
                            var18 = var17.ajiBwB;
                            var17 = {};
                            var21 = function onClick() {
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 43;
                                var3 = var5[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 34;
                                var3 = var5[var3];
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 46;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.open;
                                var3 = _closure5_slot0;
                                var3 = var3.id;
                                var2 = _closure1_slot34;
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
                            _fun0011_ip = 51; continue _fun0011;
case 52:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 47;
                            var4 = var6[var4];
                            var11 = var5.bind(var3)(var4);
                            var10 = var11.computeChannelName;
                            var28 = _closure1_slot25;
                            var27 = _closure1_slot24;
                            var26 = true;
                            var30 = var11;
                            var29 = var12;
                            var16 = var30[var10](var29, var28, var27, var26, var25);
                            var5 = _closure1_slot1;
                            var4 = 43;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.show;
                            var4 = {};
                            var9 = _closure3_slot0;
                            var9 = var9.props;
                            var9 = var9.isForumPost;
                            if(var9) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                            var9 = _closure3_slot0;
                            var9 = var9.props;
                            var9 = var9.isThread;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var10 = 37;
                            var11 = var14[var10];
                            var11 = var13.bind(var3)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var3)(var10);
                            var10 = var10.t;
                            if(var9) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                            var9 = var10.8D8Rsb;
                            var9 = var11.bind(var12)(var9);
                            _fun0011_ip = 59; continue _fun0011;
case 57:
                            var10 = var10.H7vTe2;
                            var9 = var11.bind(var12)(var10);
case 59:
                            _fun0011_ip = 60; continue _fun0011;
case 55:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var10 = 37;
                            var11 = var14[var10];
                            var11 = var13.bind(var3)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10.nEOg1N;
                            var9 = var11.bind(var12)(var10);
case 60:
                            var4['title'] = var9;
                            var13 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var10 = 37;
                            var11 = var9[var10];
                            var11 = var13.bind(var3)(var11);
                            var15 = var11.intl;
                            var14 = var15.format;
                            var11 = var9[var10];
                            var11 = var13.bind(var3)(var11);
                            var11 = var11.t;
                            var12 = var11.a6Gz9J;
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
                            var11 = var11.gm1Vej;
                            var11 = var12.bind(var14)(var11);
                            var4['cancelText'] = var11;
                            var11 = var9[var10];
                            var11 = var13.bind(var3)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var9[var10];
                            var10 = var13.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10.p89ACt;
                            var10 = var11.bind(var12)(var10);
                            var4['confirmText'] = var10;
                            var8 = _closure3_slot0;
                            var8 = var8.handleConfirmDeleteChannel;
                            var4['onConfirm'] = var8;
                            var8 = _closure1_slot1;
                            var7 = 48;
                            var7 = var9[var7];
                            var7 = var8.bind(var3)(var7);
                            var7 = var7.Colors;
                            var7 = var7.RED;
                            var4['confirmColor'] = var7;
                            var4 = var5.bind(var6)(var4);
case 51:
                            return var3;
case 42:
                            return var2;
case 38:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var1['handleDeleteChannel'] = var4;
                var4 = function* () {
                    var1 = function* anon_0_() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0012_ip = 50; continue _fun0012 }
case 61:
                            var2 = undefined;
                            var3 = undefined;
                            var4 = undefined;
                            var7 = undefined;
                            var5 = _closure3_slot0;
                            var5 = var5.props;
                            var3 = var5.channel;
case 62: // try_start_0
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var6 = 34;
                            var6 = var9[var6];
                            var8 = var8.bind(var2)(var6);
                            var6 = var8.deleteChannel;
                            var3 = var3.id;
                            var3 = var6.bind(var8)(var3);
                            SaveGenerator(address=78);
case 4:
                            return var3;
case 63:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 49;
                            var5 = var8[var5];
                            var6 = var6.bind(var2)(var5);
                            var5 = var6.getRootNavigationRef;
                            var8 = var5.bind(var6)();
                            var4 = var8;
                            var6 = null;
                            var6 = var6 != var8;
                            var5 = var6;
                            if(!var6) { _fun0012_ip = 66; continue _fun0012 }
case 40:
                            var8 = var4;
                            var6 = var8.isReady;
                            var5 = var6.bind(var8)();
case 66:
                            if(!var5) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                            var5 = var4;
                            var4 = var5.goBack;
                            var4 = var4.bind(var5)();
case 67: // try_end0
                            _fun0012_ip = 69; continue _fun0012;
case 64:
                            return var3;
case 70: // catch_target0
                            CatchBlockStart(arg_register=7);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 50;
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
                            var3 = 35;
                            var3 = var5[var3];
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.open;
                            var3 = {};
                            var8 = 'CHANNEL_SETTINGS_DELETE_CHANNEL_ERROR';
                            var3['key'] = var8;
                            var8 = null;
                            if(!(var8 == var9)) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 37;
                            var8 = var11[var6];
                            var8 = var10.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var6 = var11[var6];
                            var6 = var10.bind(var2)(var6);
                            var6 = var6.t;
                            var6 = var6.CKsXk3;
                            var6 = var8.bind(var9)(var6);
                            _fun0012_ip = 73; continue _fun0012;
case 71:
                            var6 = var7;
case 73:
                            var3['content'] = var6;
                            var3 = var4.bind(var5)(var3);
case 69:
                            return var2;
case 50:
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
                    var1 = _closure1_slot30;
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
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.canManageChannels;
                        if(!var2) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                        var3 = _closure3_slot0;
                        var1 = var3.props;
                        var6 = var1.channel;
                        var4 = var6.hasFlag;
                        var5 = _closure1_slot45;
                        var2 = var5.REQUIRE_TAG;
                        var2 = var4.bind(var6)(var2);
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 41;
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
                        var1 = 34;
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
case 74:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleToggleRequireTag'] = var4;
                var4 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.canManageChannels;
                        if(!var2) { _fun0014_ip = 74; continue _fun0014 }
case 75:
                        var3 = _closure3_slot0;
                        var1 = var3.props;
                        var6 = var1.channel;
                        var4 = var6.hasFlag;
                        var5 = _closure1_slot45;
                        var2 = var5.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                        var2 = var4.bind(var6)(var2);
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 41;
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
                        var1 = 34;
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
case 74:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleToggleShowMediaDownloadOptions'] = var4;
                var3 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.errors;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0015_ip = 27; continue _fun0015 }
case 76:
                        var2 = arg1;
                        var1 = var3[var2];
case 27:
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
                if(!var3) { _fun0016_ip = 77; continue _fun0016 }
case 78:
                var4 = var2.props;
                var4 = var4.guild;
                var3 = var5 != var4;
case 77:
                if(!var3) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 51;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.fetchRegions;
                var2 = var2.props;
                var2 = var2.guild;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
case 79:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 33;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.trackWithMetadata;
                var2 = _closure1_slot27;
                var3 = var2.SETTINGS_PANE_VIEWED;
                var2 = {};
                var7 = 'channel';
                var2['settings_type'] = var7;
                var6 = _closure1_slot40;
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
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
                if(!(var4 !== var3)) { _fun0017_ip = 81; continue _fun0017 }
case 82:
                var3 = var1.defaultSortOrderRadioGroupRef;
                var5 = var3.current;
                var3 = null;
                if(!(var3 != var5)) { _fun0017_ip = 81; continue _fun0017 }
case 83:
                var4 = var5.setValue;
                var3 = var1.props;
                var6 = var3.channel;
                var3 = var6.getDefaultSortOrder;
                var3 = var3.bind(var6)();
                var3 = var4.bind(var5)(var3);
case 81:
                var3 = var2.channel;
                var4 = var3.defaultTagSetting;
                var3 = var1.props;
                var3 = var3.channel;
                var3 = var3.defaultTagSetting;
                if(!(var4 !== var3)) { _fun0017_ip = 84; continue _fun0017 }
case 41:
                var3 = var1.defaultTagSettingRadioGroupRef;
                var5 = var3.current;
                var3 = null;
                if(!(var3 != var5)) { _fun0017_ip = 84; continue _fun0017 }
case 85:
                var4 = var5.setValue;
                var3 = var1.props;
                var6 = var3.channel;
                var3 = var6.getDefaultTagSetting;
                var3 = var3.bind(var6)();
                var3 = var4.bind(var5)(var3);
case 84:
                var2 = var2.channel;
                var3 = var2.videoQualityMode;
                var2 = var1.props;
                var2 = var2.channel;
                var2 = var2.videoQualityMode;
                if(!(var3 !== var2)) { _fun0017_ip = 86; continue _fun0017 }
case 87:
                var2 = var1.videoQualityModeRadioGroupRef;
                var3 = var2.current;
                var4 = null;
                if(!(var4 != var3)) { _fun0017_ip = 86; continue _fun0017 }
case 88:
                var2 = var3.setValue;
                var1 = var1.props;
                var1 = var1.channel;
                var1 = var1.videoQualityMode;
                if(!(var4 == var1)) { _fun0017_ip = 89; continue _fun0017 }
case 90:
                var4 = _closure1_slot43;
                var1 = var4.AUTO;
case 89:
                var1 = var2.bind(var3)(var1);
case 86:
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
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                if(!(var9 != var6)) { _fun0018_ip = 91; continue _fun0018 }
case 3:
                var9 = var6.submitting;
                if(!(var7 === var9)) { _fun0018_ip = 91; continue _fun0018 }
case 92:
                var9 = var6.isThread;
                if(!(var2 === var9)) { _fun0018_ip = 91; continue _fun0018 }
case 93:
                var6 = var6.channel;
                var6 = var6.type;
                if(!(var4 === var6)) { _fun0018_ip = 91; continue _fun0018 }
case 94:
                var6 = arg2;
                var6 = var6.hasChanges;
                if(!(var8 !== var6)) { _fun0018_ip = 95; continue _fun0018 }
case 91:
                if(var2) { _fun0018_ip = 96; continue _fun0018 }
case 41:
                var2 = _closure1_slot31;
                var2 = var2.GUILD_CATEGORY;
                if(!(var4 !== var2)) { _fun0018_ip = 97; continue _fun0018 }
case 68:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 37;
                var4 = var11[var2];
                var9 = undefined;
                var4 = var10.bind(var9)(var4);
                var8 = var4.intl;
                var4 = var8.string;
                var2 = var11[var2];
                var2 = var10.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.XPDhcc;
                var4 = var4.bind(var8)(var2);
                _fun0018_ip = 98; continue _fun0018;
case 97:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 37;
                var8 = var12[var2];
                var10 = undefined;
                var8 = var11.bind(var10)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var12[var2];
                var2 = var11.bind(var10)(var2);
                var2 = var2.t;
                var2 = var2./uELTj;
                var4 = var8.bind(var9)(var2);
case 98:
                _fun0018_ip = 50; continue _fun0018;
case 96:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 37;
                var8 = var12[var2];
                var10 = undefined;
                var8 = var11.bind(var10)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var12[var2];
                var2 = var11.bind(var10)(var2);
                var2 = var2.t;
                if(var1) { _fun0018_ip = 99; continue _fun0018 }
case 100:
                var1 = var2.d4n5Q1;
                var1 = var8.bind(var9)(var1);
                _fun0018_ip = 69; continue _fun0018;
case 99:
                var2 = var2.BsJrhj;
                var1 = var8.bind(var9)(var2);
case 69:
                var4 = var1;
case 50:
                var2 = var3.setOptions;
                var1 = {};
                if(var7) { _fun0018_ip = 101; continue _fun0018 }
case 102:
                var5 = function(arg1) {
                    var4 = _closure1_slot51;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 53;
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
                    var6 = 37;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.R3BPH+;
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
                _fun0018_ip = 103; continue _fun0018;
case 101:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 52;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var5 = var6.HeaderSubmittingIndicator;
case 103:
                var1['headerRight'] = var5;
                var1['title'] = var4;
                var1 = var2.bind(var3)(var1);
case 95:
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
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var13 = this;
                var1 = var13.props;
                var15 = var1.channel;
                var16 = var1.canManageChannels;
                var11 = var1.canManageThread;
                var10 = var1.canSendMessages;
                var8 = var1.isChannelOwner;
                var3 = var1.isThread;
                var9 = var1.isForumPost;
                var5 = _closure1_slot13;
                var2 = var15.type;
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                if(!var2) { _fun0019_ip = 5; continue _fun0019 }
case 104:
                var2 = !var3;
case 5:
                if(var2) { _fun0019_ip = 26; continue _fun0019 }
case 32:
                var5 = _closure1_slot32;
                var7 = var5.GUILD_THREADS_ONLY;
                var6 = var7.has;
                var5 = var15.type;
                var2 = var6.bind(var7)(var5);
case 26:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 54;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.getIsChannelNameSettingEditable;
                var5 = {};
                var5['canManageThread'] = var11;
                var5['canManageChannels'] = var16;
                var5['canSendMessages'] = var10;
                var5['isForumPost'] = var9;
                var5['isThread'] = var3;
                var5['isChannelOwner'] = var8;
                var17 = var6.bind(var7)(var5);
                var5 = var15.isForumPost;
                var5 = var5.bind(var15)();
                if(var5) { _fun0019_ip = 105; continue _fun0019 }
case 46:
                if(var3) { _fun0019_ip = 106; continue _fun0019 }
case 107:
                var5 = var15.type;
                var3 = _closure1_slot31;
                var3 = var3.GUILD_CATEGORY;
                if(!(var5 !== var3)) { _fun0019_ip = 98; continue _fun0019 }
case 21:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 37;
                var5 = var8[var3];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.PVbHDl;
                var11 = var5.bind(var6)(var3);
                _fun0019_ip = 108; continue _fun0019;
case 98:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 37;
                var5 = var8[var3];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.OCAkGP;
                var11 = var5.bind(var6)(var3);
case 108:
                _fun0019_ip = 109; continue _fun0019;
case 106:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 37;
                var5 = var8[var3];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.j3XWjD;
                var11 = var5.bind(var6)(var3);
case 109:
                _fun0019_ip = 110; continue _fun0019;
case 105:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 37;
                var5 = var8[var3];
                var5 = var7.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.uyVrTN;
                var11 = var5.bind(var6)(var3);
case 110:
                var6 = _closure1_slot51;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 55;
                var3 = var14[var8];
                var3 = var12.bind(var4)(var3);
                var5 = var3.FormSection;
                var3 = {};
                var7 = _closure1_slot50;
                var7 = var7.ANDROID_NO_BORDER;
                var3['titleStyleType'] = var7;
                var3['title'] = var11;
                var10 = _closure1_slot51;
                var7 = var14[var8];
                var7 = var12.bind(var4)(var7);
                var9 = var7.FormInput;
                var7 = {};
                var18 = var13.props;
                var18 = var18.channelNameRef;
                var7['ref'] = var18;
                var7['accessibilityLabel'] = var11;
                var11 = 47;
                var11 = var14[var11];
                var18 = var12.bind(var4)(var11);
                var14 = var18.computeChannelName;
                var12 = _closure1_slot25;
                var11 = _closure1_slot24;
                var11 = var14.bind(var18)(var15, var12, var11);
                var7['value'] = var11;
                var11 = var13.handleChangeName;
                var7['onChange'] = var11;
                var11 = true;
                var7['enableAndroidSanitizedInputWorkaround'] = var11;
                var12 = var13.handleBlurName;
                var7['onBlur'] = var12;
                var12 = !var17;
                var7['disabled'] = var12;
                var12 = false;
                var7['showTopContainer'] = var12;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 56;
                var18 = var18[var14];
                var18 = var19.bind(var4)(var18);
                var18 = var18.ClearButtonVisibility;
                if(var17) { _fun0019_ip = 111; continue _fun0019 }
case 112:
                var17 = var18.NEVER;
                _fun0019_ip = 113; continue _fun0019;
case 111:
                var17 = var18.WITH_CONTENT;
case 113:
                var7['clearButtonVisibility'] = var17;
                var17 = _closure1_slot36;
                var7['maxLength'] = var17;
                var18 = var13.getError;
                var17 = 'name';
                var17 = var18.bind(var13)(var17);
                var7['error'] = var17;
                var7 = var10.bind(var4)(var9, var7);
                var3['children'] = var7;
                var7 = var6.bind(var4)(var5, var3);
                var6 = undefined;
                if(!var2) { _fun0019_ip = 114; continue _fun0019 }
case 115:
                var2 = var15.isForumLikeChannel;
                var9 = var2.bind(var15)();
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 37;
                var3 = var17[var2];
                var3 = var10.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var17[var2];
                var2 = var10.bind(var4)(var2);
                var2 = var2.t;
                if(var9) { _fun0019_ip = 116; continue _fun0019 }
case 117:
                var9 = var2.X8jMDh;
                var17 = var3.bind(var5)(var9);
                _fun0019_ip = 118; continue _fun0019;
case 116:
                var2 = var2.yR6HwZ;
                var17 = var3.bind(var5)(var2);
case 118:
                var5 = _closure1_slot51;
                var9 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = var19[var8];
                var2 = var9.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var2['title'] = var17;
                var10 = _closure1_slot51;
                var8 = var19[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.FormInput;
                var8 = {};
                var8['accessibilityLabel'] = var17;
                var18 = _closure1_slot1;
                var17 = 40;
                var17 = var19[var17];
                var19 = var18.bind(var4)(var17);
                var18 = var19.translateSurrogatesToInlineEmoji;
                var17 = var15.topic;
                var17 = var18.bind(var19)(var17);
                var8['value'] = var17;
                var17 = var13.handleChangeTopic;
                var8['onChange'] = var17;
                var8['multiline'] = var11;
                var16 = !var16;
                var8['disabled'] = var16;
                var16 = 4;
                var8['numberOfLines'] = var16;
                var8['autoCorrect'] = var11;
                var8['showTopContainer'] = var12;
                var12 = var15.isForumLikeChannel;
                var12 = var12.bind(var15)();
                if(var12) { _fun0019_ip = 119; continue _fun0019 }
case 120:
                var12 = _closure1_slot46;
                _fun0019_ip = 121; continue _fun0019;
case 119:
                var12 = _closure1_slot47;
case 121:
                var8['maxLength'] = var12;
                var8['showCharactersRemaining'] = var11;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var11 = var12.bind(var4)(var11);
                var11 = var11.ClearButtonVisibility;
                var11 = var11.NEVER;
                var8['clearButtonVisibility'] = var11;
                var12 = var13.getError;
                var11 = 'topic';
                var11 = var12.bind(var13)(var11);
                var8['error'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var2['children'] = var8;
                var6 = var5.bind(var4)(var3, var2);
case 114:
                var3 = _closure1_slot52;
                var2 = _closure1_slot53;
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
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var13 = this;
                var1 = var13.props;
                var9 = var1.channel;
                var2 = var1.canManageChannels;
                var12 = var1.isNSFWDisabled;
                var4 = var9.type;
                var1 = _closure1_slot31;
                var3 = var1.GUILD_TEXT;
                var11 = null;
                var1 = null;
                if(!(var4 === var3)) { _fun0020_ip = 122; continue _fun0020 }
case 123:
                var1 = null;
                if(!var2) { _fun0020_ip = 122; continue _fun0020 }
case 9:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 57;
                var2 = var4[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                var1 = null;
                if(var2) { _fun0020_ip = 122; continue _fun0020 }
case 26:
                var5 = _closure1_slot51;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 55;
                var3 = var17[var2];
                var3 = var16.bind(var6)(var3);
                var4 = var3.FormSection;
                var3 = {};
                var15 = _closure1_slot51;
                var7 = var17[var2];
                var7 = var16.bind(var6)(var7);
                var8 = var7.FormHint;
                var7 = {};
                var14 = 37;
                var18 = var17[var14];
                var18 = var16.bind(var6)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var17[var14];
                var18 = var16.bind(var6)(var18);
                var18 = var18.t;
                var18 = var18.9eUgwR;
                var18 = var19.bind(var20)(var18);
                var7['children'] = var18;
                var7 = var15.bind(var6)(var8, var7);
                var3['hint'] = var7;
                var8 = _closure1_slot51;
                var2 = var17[var2];
                var2 = var16.bind(var6)(var2);
                var7 = var2.FormSwitchRow;
                var2 = {};
                var15 = var17[var14];
                var15 = var16.bind(var6)(var15);
                var19 = var15.intl;
                var18 = var19.string;
                var15 = var17[var14];
                var15 = var16.bind(var6)(var15);
                var15 = var15.t;
                var15 = var15.Es25Yf;
                var15 = var18.bind(var19)(var15);
                var2['label'] = var15;
                var15 = 58;
                var15 = var17[var15];
                var16 = var16.bind(var6)(var15);
                var15 = var16.isChannelOrGuildNSFW;
                var15 = var15.bind(var16)(var9);
                var2['value'] = var15;
                var13 = var13.handleNsfwChange;
                var2['onValueChange'] = var13;
                var2['disabled'] = var12;
                var9 = var9.linkedLobby;
                var11 = var11 != var9;
                var9 = undefined;
                if(!var11) { _fun0020_ip = 124; continue _fun0020 }
case 125:
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var11 = var10[var14];
                var11 = var13.bind(var6)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.l6uSVa;
                var9 = var11.bind(var12)(var10);
case 124:
                var2['subLabel'] = var9;
                var2 = var8.bind(var6)(var7, var2);
                var3['children'] = var2;
                var2 = 'nsfw-section';
                var1 = var5.bind(var6)(var4, var3, var2);
case 122:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'renderSlowmode';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var10 = this;
                var2 = _closure1_slot55;
                var1 = var10.context;
                var7 = undefined;
                var12 = var2.bind(var7)(var1);
                var1 = var10.props;
                var4 = var1.channel;
                var2 = var1.canManageChannels;
                var1 = var1.isThreadModerator;
                var5 = var4.type;
                var3 = _closure1_slot31;
                var3 = var3.GUILD_TEXT;
                if(!(var5 === var3)) { _fun0021_ip = 126; continue _fun0021 }
case 127:
                if(var2) { _fun0021_ip = 128; continue _fun0021 }
case 126:
                var2 = var4.isThread;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0021_ip = 92; continue _fun0021 }
case 129:
                if(var1) { _fun0021_ip = 128; continue _fun0021 }
case 92:
                var1 = null;
                return var1;
case 128:
                var1 = new Array(0);
                var15 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 59;
                var2 = var5[var2];
                var9 = var15.bind(var7)(var2);
                var8 = var9.getSecondsSliderLabel;
                var6 = var4.rateLimitPerUser;
                var13 = 37;
                var2 = var5[var13];
                var2 = var15.bind(var7)(var2);
                var14 = var2.intl;
                var3 = var14.string;
                var2 = var5[var13];
                var2 = var15.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.zvDu4h;
                var3 = var3.bind(var14)(var2);
                var2 = false;
                var17 = var8.bind(var9)(var6, var2, var3);
                var3 = _closure1_slot1;
                var2 = 60;
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
                if(var5) { _fun0021_ip = 130; continue _fun0021 }
case 131:
                var2 = var3.enabled;
case 130:
                var6 = {};
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 61;
                var3 = var8[var3];
                var15 = var5.bind(var7)(var3);
                var14 = var15.dateFormat;
                var5 = _closure1_slot1;
                var3 = 62;
                var3 = var8[var3];
                var9 = var5.bind(var7)(var3);
                var3 = _closure1_slot44;
                var9 = var9.bind(var7)(var3);
                var3 = 'LL';
                var3 = var14.bind(var15)(var9, var3);
                var6['breakingChangeDate'] = var3;
                var3 = 63;
                var3 = var8[var3];
                var8 = var5.bind(var7)(var3);
                var5 = var8.getArticleURL;
                var3 = _closure1_slot35;
                var3 = var3.SLOWMODE;
                var3 = var5.bind(var8)(var3);
                var6['helpCenterLink'] = var3;
                var3 = var4.isForumLikeChannel;
                var3 = var3.bind(var4)();
                if(var3) { _fun0021_ip = 132; continue _fun0021 }
case 133:
                var3 = var4.isThread;
                var3 = var3.bind(var4)();
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = var4[var13];
                var5 = var9.bind(var7)(var5);
                var8 = var5.intl;
                if(var3) { _fun0021_ip = 134; continue _fun0021 }
case 124:
                if(var2) { _fun0021_ip = 135; continue _fun0021 }
case 136:
                var5 = var8.string;
                var3 = var4[var13];
                var3 = var9.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.HEA/DU;
                var18 = var5.bind(var8)(var3);
                _fun0021_ip = 137; continue _fun0021;
case 135:
                var5 = var8.format;
                var3 = var4[var13];
                var3 = var9.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.wW2MWu;
                var18 = var5.bind(var8)(var3, var6);
case 137:
                _fun0021_ip = 138; continue _fun0021;
case 134:
                if(var2) { _fun0021_ip = 139; continue _fun0021 }
case 140:
                var5 = var8.string;
                var3 = var4[var13];
                var3 = var9.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.OMmNCv;
                var3 = var5.bind(var8)(var3);
                _fun0021_ip = 141; continue _fun0021;
case 139:
                var5 = var8.format;
                var4 = var4[var13];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.8sTC8t;
                var3 = var5.bind(var8)(var4, var6);
case 141:
                var18 = var3;
case 138:
                _fun0021_ip = 142; continue _fun0021;
case 132:
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = var3[var13];
                var4 = var8.bind(var7)(var4);
                var5 = var4.intl;
                if(var2) { _fun0021_ip = 143; continue _fun0021 }
case 144:
                var4 = var5.string;
                var2 = var3[var13];
                var2 = var8.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.a+1pdO;
                var2 = var4.bind(var5)(var2);
                _fun0021_ip = 145; continue _fun0021;
case 143:
                var4 = var5.format;
                var3 = var3[var13];
                var3 = var8.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.EIQq9v;
                var2 = var4.bind(var5)(var3, var6);
case 145:
                var18 = var2;
case 142:
                var3 = var1.push;
                var6 = _closure1_slot51;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 55;
                var4 = var14[var2];
                var4 = var15.bind(var7)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var16 = _closure1_slot51;
                var8 = var14[var2];
                var8 = var15.bind(var7)(var8);
                var9 = var8.FormHint;
                var8 = {};
                var8['children'] = var18;
                var8 = var16.bind(var7)(var9, var8);
                var4['hint'] = var8;
                var9 = _closure1_slot51;
                var2 = var14[var2];
                var2 = var15.bind(var7)(var2);
                var8 = var2.FormSliderRow;
                var2 = {};
                var16 = var14[var13];
                var16 = var15.bind(var7)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var13 = var14[var13];
                var13 = var15.bind(var7)(var13);
                var13 = var13.t;
                var13 = var13.piZgKF;
                var13 = var16.bind(var18)(var13);
                var2['label'] = var13;
                var16 = _closure1_slot51;
                var13 = 44;
                var13 = var14[var13];
                var13 = var15.bind(var7)(var13);
                var15 = var13.Text;
                var13 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                var13['children'] = var17;
                var13 = var16.bind(var7)(var15, var13);
                var2['trailing'] = var13;
                var12 = var12.slider;
                var2['style'] = var12;
                var12 = var10._cooldown;
                var2['value'] = var12;
                var12 = 0;
                var2['minimumValue'] = var12;
                var12 = _closure1_slot41;
                var13 = var12.length;
                var12 = 1;
                var12 = var13 - var12;
                var2['maximumValue'] = var12;
                var13 = _closure1_slot1;
                var12 = 29;
                var12 = var14[var12];
                var12 = var13.bind(var7)(var12);
                var12 = var12.unsafe_rawColors;
                var12 = var12.BRAND_500;
                var2['minimumTrackTintColor'] = var12;
                var11 = _closure1_slot42;
                var11 = var11.GREY2;
                var2['maximumTrackTintColor'] = var11;
                var10 = var10.handleSlowmodeChange;
                var2['onValueChange'] = var10;
                var2 = var9.bind(var7)(var8, var2);
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
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var5 = this;
                var2 = var5.props;
                var6 = var2.channel;
                var1 = var2.canManageThread;
                var9 = var2.isForumPost;
                var2 = var6.isThread;
                var2 = var2.bind(var6)();
                if(!var2) { _fun0022_ip = 146; continue _fun0022 }
case 147:
                if(var1) { _fun0022_ip = 148; continue _fun0022 }
case 146:
                var1 = null;
                return var1;
case 148:
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 37;
                var2 = var1[var7];
                var4 = undefined;
                var2 = var10.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var7];
                var1 = var10.bind(var4)(var1);
                var1 = var1.t;
                if(var9) { _fun0022_ip = 149; continue _fun0022 }
case 150:
                var9 = var1.YUXr4Z;
                var11 = var2.bind(var3)(var9);
                _fun0022_ip = 151; continue _fun0022;
case 149:
                var1 = var1.3aJN9M;
                var11 = var2.bind(var3)(var1);
case 151:
                var3 = _closure1_slot51;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 64;
                var1 = var12[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.AutoArchiveDurationOptions;
                var1 = {};
                var10 = var12[var7];
                var10 = var9.bind(var4)(var10);
                var13 = var10.intl;
                var10 = var13.string;
                var7 = var12[var7];
                var7 = var9.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.FGjMZS;
                var7 = var10.bind(var13)(var7);
                var1['title'] = var7;
                var10 = _closure1_slot51;
                var7 = 55;
                var7 = var12[var7];
                var7 = var9.bind(var4)(var7);
                var9 = var7.FormHint;
                var7 = {};
                var7['children'] = var11;
                var7 = var10.bind(var4)(var9, var7);
                var1['hint'] = var7;
                var10 = var6.threadMetadata;
                var9 = null;
                var11 = var9 == var10;
                var7 = undefined;
                if(var11) { _fun0022_ip = 152; continue _fun0022 }
case 19:
                var7 = var10.autoArchiveDuration;
case 152:
                if(!(var9 == var7)) { _fun0022_ip = 153; continue _fun0022 }
case 86:
                var7 = _closure1_slot49;
case 153:
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
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var9 = this;
                var1 = var9.props;
                var10 = var1.channel;
                var12 = var1.canManageThread;
                var1 = var10.threadMetadata;
                var4 = null;
                var2 = var4 == var1;
                var1 = null;
                if(var2) { _fun0023_ip = 154; continue _fun0023 }
case 155:
                var3 = var10.type;
                var2 = _closure1_slot31;
                var2 = var2.PRIVATE_THREAD;
                var1 = null;
                if(!(var3 === var2)) { _fun0023_ip = 154; continue _fun0023 }
case 126:
                var6 = _closure1_slot51;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 55;
                var3 = var15[var2];
                var5 = undefined;
                var3 = var14.bind(var5)(var3);
                var4 = var3.FormSection;
                var3 = {};
                var16 = _closure1_slot51;
                var8 = var15[var2];
                var8 = var14.bind(var5)(var8);
                var13 = var8.FormHint;
                var8 = {};
                var11 = 37;
                var17 = var15[var11];
                var17 = var14.bind(var5)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var15[var11];
                var17 = var14.bind(var5)(var17);
                var17 = var17.t;
                var17 = var17.cSyXJk;
                var17 = var18.bind(var19)(var17);
                var8['children'] = var17;
                var8 = var16.bind(var5)(var13, var8);
                var3['hint'] = var8;
                var8 = _closure1_slot51;
                var2 = var15[var2];
                var2 = var14.bind(var5)(var2);
                var7 = var2.FormSwitchRow;
                var2 = {};
                var12 = !var12;
                var2['disabled'] = var12;
                var12 = var15[var11];
                var12 = var14.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11.s2rpNf;
                var11 = var12.bind(var13)(var11);
                var2['label'] = var11;
                var10 = var10.threadMetadata;
                var10 = var10.invitable;
                var2['value'] = var10;
                var9 = var9.handleInvitableChange;
                var2['onValueChange'] = var9;
                var2 = var8.bind(var5)(var7, var2);
                var3['children'] = var2;
                var2 = 'thread-invitable-section';
                var1 = var6.bind(var5)(var4, var3, var2);
case 154:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'renderDefaultAutoArchiveDuration';
        var5['key'] = var7;
        var7 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var6 = this;
                var1 = var6.props;
                var11 = var1.channel;
                var2 = var1.canManageChannels;
                var4 = _closure1_slot14;
                var3 = var4.has;
                var1 = var11.type;
                var3 = var3.bind(var4)(var1);
                var13 = null;
                var1 = null;
                if(!var3) { _fun0024_ip = 156; continue _fun0024 }
case 35:
                var1 = null;
                if(!var2) { _fun0024_ip = 156; continue _fun0024 }
case 80:
                var5 = _closure1_slot51;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 64;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.AutoArchiveDurationOptions;
                var2 = {};
                var14 = 37;
                var8 = var9[var14];
                var8 = var7.bind(var4)(var8);
                var15 = var8.intl;
                var12 = var15.string;
                var8 = var9[var14];
                var8 = var7.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.FGjMZS;
                var8 = var12.bind(var15)(var8);
                var2['title'] = var8;
                var8 = 65;
                var8 = var9[var8];
                var12 = var7.bind(var4)(var8);
                var8 = var12.getAutoArchiveDuration;
                var8 = var8.bind(var12)(var11, var13);
                var2['selected'] = var8;
                var2['channel'] = var11;
                var6 = var6.handleDefaultAutoArchiveDurationChange;
                var2['onSelectDuration'] = var6;
                var8 = _closure1_slot51;
                var6 = 55;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.FormHint;
                var6 = {};
                var9 = var11.isForumLikeChannel;
                var9 = var9.bind(var11)();
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var11 = var10[var14];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                if(var9) { _fun0024_ip = 157; continue _fun0024 }
case 89:
                var9 = var10.W3Noi9;
                var9 = var11.bind(var12)(var9);
                _fun0024_ip = 158; continue _fun0024;
case 157:
                var10 = var10.fyXclY;
                var9 = var11.bind(var12)(var10);
case 158:
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var2['hint'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 156:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'renderDefaultSortOrder';
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
                if(!var3) { _fun0025_ip = 62; continue _fun0025 }
case 159:
                if(var1) { _fun0025_ip = 155; continue _fun0025 }
case 62:
                var1 = null;
                return var1;
case 155:
                var1 = var2.getDefaultSortOrder;
                var9 = var1.bind(var2)();
                var4 = _closure1_slot51;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 55;
                var1 = var14[var5];
                var3 = undefined;
                var1 = var13.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var15 = 37;
                var6 = var14[var15];
                var6 = var13.bind(var3)(var6);
                var11 = var6.intl;
                var7 = var11.string;
                var6 = var14[var15];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.gePre2;
                var6 = var7.bind(var11)(var6);
                var1['title'] = var6;
                var7 = _closure1_slot51;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.FormHint;
                var5 = {};
                var11 = var14[var15];
                var11 = var13.bind(var3)(var11);
                var16 = var11.intl;
                var12 = var16.string;
                var11 = var14[var15];
                var11 = var13.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.165cVX;
                var11 = var12.bind(var16)(var11);
                var5['children'] = var11;
                var5 = var7.bind(var3)(var6, var5);
                var1['hint'] = var5;
                var7 = _closure1_slot52;
                var5 = 66;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.TableRadioGroup;
                var5 = {};
                var5['defaultValue'] = var9;
                var9 = var8.handleDefaultSortOrderChange;
                var5['onChange'] = var9;
                var9 = false;
                var5['hasIcons'] = var9;
                var8 = var8.defaultSortOrderRadioGroupRef;
                var5['groupRef'] = var8;
                var16 = _closure1_slot51;
                var9 = 67;
                var8 = var14[var9];
                var8 = var13.bind(var3)(var8);
                var11 = var8.TableRadioRow;
                var8 = {};
                var12 = var14[var15];
                var12 = var13.bind(var3)(var12);
                var18 = var12.intl;
                var17 = var18.string;
                var12 = var14[var15];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.ElZtzj;
                var12 = var17.bind(var18)(var12);
                var8['label'] = var12;
                var12 = 68;
                var17 = var14[var12];
                var17 = var13.bind(var3)(var17);
                var17 = var17.ThreadSortOrder;
                var17 = var17.LATEST_ACTIVITY;
                var8['value'] = var17;
                var11 = var16.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot51;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.TableRadioRow;
                var9 = {};
                var16 = var14[var15];
                var16 = var13.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var14[var15];
                var15 = var13.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.w28f3F;
                var15 = var16.bind(var17)(var15);
                var9['label'] = var15;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.ThreadSortOrder;
                var12 = var12.CREATION_DATE;
                var9['value'] = var12;
                var9 = var11.bind(var3)(var10, var9);
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
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var8 = this;
                var1 = var8.props;
                var2 = var1.channel;
                var1 = var1.canManageChannels;
                var3 = var2.isForumLikeChannel;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0026_ip = 62; continue _fun0026 }
case 159:
                if(var1) { _fun0026_ip = 155; continue _fun0026 }
case 62:
                var1 = null;
                return var1;
case 155:
                var1 = var2.getDefaultTagSetting;
                var9 = var1.bind(var2)();
                var4 = _closure1_slot51;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 55;
                var1 = var14[var5];
                var3 = undefined;
                var1 = var13.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var15 = 37;
                var6 = var14[var15];
                var6 = var13.bind(var3)(var6);
                var11 = var6.intl;
                var7 = var11.string;
                var6 = var14[var15];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.Paxaug;
                var6 = var7.bind(var11)(var6);
                var1['title'] = var6;
                var7 = _closure1_slot51;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.FormHint;
                var5 = {};
                var11 = var14[var15];
                var11 = var13.bind(var3)(var11);
                var16 = var11.intl;
                var12 = var16.string;
                var11 = var14[var15];
                var11 = var13.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.DqOl8J;
                var11 = var12.bind(var16)(var11);
                var5['children'] = var11;
                var5 = var7.bind(var3)(var6, var5);
                var1['hint'] = var5;
                var7 = _closure1_slot52;
                var5 = 66;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.TableRadioGroup;
                var5 = {};
                var5['defaultValue'] = var9;
                var9 = var8.handleDefaultTagSettingChange;
                var5['onChange'] = var9;
                var9 = false;
                var5['hasIcons'] = var9;
                var8 = var8.defaultTagSettingRadioGroupRef;
                var5['groupRef'] = var8;
                var16 = _closure1_slot51;
                var9 = 67;
                var8 = var14[var9];
                var8 = var13.bind(var3)(var8);
                var11 = var8.TableRadioRow;
                var8 = {};
                var12 = var14[var15];
                var12 = var13.bind(var3)(var12);
                var18 = var12.intl;
                var17 = var18.string;
                var12 = var14[var15];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.rQ0ctQ;
                var12 = var17.bind(var18)(var12);
                var8['label'] = var12;
                var12 = 69;
                var17 = var14[var12];
                var17 = var13.bind(var3)(var17);
                var17 = var17.ThreadSearchTagSetting;
                var17 = var17.MATCH_SOME;
                var8['value'] = var17;
                var11 = var16.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot51;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.TableRadioRow;
                var9 = {};
                var16 = var14[var15];
                var16 = var13.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var14[var15];
                var15 = var13.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.FCXUu0;
                var15 = var16.bind(var17)(var15);
                var9['label'] = var15;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.ThreadSearchTagSetting;
                var12 = var12.MATCH_ALL;
                var9['value'] = var12;
                var9 = var11.bind(var3)(var10, var9);
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
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var13 = this;
                var1 = var13.props;
                var14 = var1.channel;
                var12 = var1.canManageChannels;
                var3 = var1.guild;
                var2 = _closure1_slot13;
                var1 = var14.type;
                var7 = undefined;
                var1 = var2.bind(var7)(var1);
                if(!var1) { _fun0027_ip = 160; continue _fun0027 }
case 161:
                var1 = null;
                if(!(var1 != var3)) { _fun0027_ip = 160; continue _fun0027 }
case 162:
                var5 = var3.features;
                var4 = var5.has;
                var2 = _closure1_slot33;
                var2 = var2.NEWS;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0027_ip = 160; continue _fun0027 }
case 163:
                var4 = var14.id;
                var5 = var1 == var3;
                var2 = undefined;
                if(var5) { _fun0027_ip = 164; continue _fun0027 }
case 165:
                var2 = var3.rulesChannelId;
case 164:
                if(!(var4 !== var2)) { _fun0027_ip = 160; continue _fun0027 }
case 166:
                var2 = var14.id;
                var4 = var1 == var3;
                var1 = undefined;
                if(var4) { _fun0027_ip = 167; continue _fun0027 }
case 41:
                var1 = var3.publicUpdatesChannelId;
case 167:
                if(!(var2 !== var1)) { _fun0027_ip = 160; continue _fun0027 }
case 168:
                var1 = new Array(0);
                var3 = var1.push;
                var6 = _closure1_slot51;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 55;
                var4 = var17[var2];
                var4 = var16.bind(var7)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var15 = _closure1_slot52;
                var9 = _closure1_slot53;
                var8 = {};
                var20 = _closure1_slot51;
                var11 = var17[var2];
                var11 = var16.bind(var7)(var11);
                var19 = var11.FormHint;
                var18 = {};
                var11 = 37;
                var21 = var17[var11];
                var21 = var16.bind(var7)(var21);
                var24 = var21.intl;
                var23 = var24.format;
                var21 = var17[var11];
                var21 = var16.bind(var7)(var21);
                var21 = var21.t;
                var22 = var21.tI7KNX;
                var21 = {};
                var26 = _closure1_slot1;
                var25 = 63;
                var25 = var17[var25];
                var27 = var26.bind(var7)(var25);
                var26 = var27.getArticleURL;
                var25 = _closure1_slot35;
                var25 = var25.ANNOUNCEMENT_CHANNELS;
                var25 = var26.bind(var27)(var25);
                var21['documentationLink'] = var25;
                var21 = var23.bind(var24)(var22, var21);
                var18['children'] = var21;
                var19 = var20.bind(var7)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var21 = _closure1_slot51;
                var19 = var17[var2];
                var19 = var16.bind(var7)(var19);
                var20 = var19.FormHint;
                var19 = {};
                var22 = var17[var11];
                var22 = var16.bind(var7)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var17[var11];
                var22 = var16.bind(var7)(var22);
                var22 = var22.t;
                var22 = var22.2Ab4Id;
                var22 = var23.bind(var24)(var22);
                var19['children'] = var22;
                var19 = var21.bind(var7)(var20, var19);
                var18[1] = var19;
                var8['children'] = var18;
                var8 = var15.bind(var7)(var9, var8);
                var4['hint'] = var8;
                var9 = _closure1_slot51;
                var2 = var17[var2];
                var2 = var16.bind(var7)(var2);
                var8 = var2.FormSwitchRow;
                var2 = {};
                var12 = !var12;
                var2['disabled'] = var12;
                var12 = var17[var11];
                var12 = var16.bind(var7)(var12);
                var15 = var12.intl;
                var12 = var15.string;
                var11 = var17[var11];
                var11 = var16.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11.Au2b7m;
                var11 = var12.bind(var15)(var11);
                var2['label'] = var11;
                var12 = var14.type;
                var10 = _closure1_slot31;
                var11 = var10.GUILD_ANNOUNCEMENT;
                var11 = var12 === var11;
                var2['value'] = var11;
                var12 = var13.handleAnnouncementChange;
                var11 = var12.bind;
                var14 = var14.type;
                var10 = var10.GUILD_ANNOUNCEMENT;
                var10 = var14 === var10;
                var10 = var11.bind(var12)(var13, var10);
                var2['onValueChange'] = var10;
                var2 = var9.bind(var7)(var8, var2);
                var4['children'] = var2;
                var2 = 'announcement-section';
                var2 = var6.bind(var7)(var5, var4, var2);
                var2 = var3.bind(var1)(var2);
                return var1;
case 160:
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
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var14 = this;
                var2 = _closure1_slot55;
                var1 = var14.context;
                var7 = undefined;
                var19 = var2.bind(var7)(var1);
                var2 = var14.props;
                var17 = var2.channel;
                var1 = var2.canManageChannels;
                var4 = var2.guild;
                var2 = var14.showVoiceSettings;
                var2 = var2.bind(var14)();
                if(!var2) { _fun0028_ip = 80; continue _fun0028 }
case 77:
                if(var1) { _fun0028_ip = 127; continue _fun0028 }
case 80:
                var1 = null;
                return var1;
case 127:
                var1 = new Array(0);
                var12 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 39;
                var2 = var20[var2];
                var3 = var12.bind(var7)(var2);
                var2 = var3.getBitrateLimit;
                var15 = var2.bind(var3)(var4, var17);
                var3 = var1.push;
                var6 = _closure1_slot52;
                var2 = 55;
                var4 = var20[var2];
                var4 = var12.bind(var7)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var11 = _closure1_slot51;
                var8 = var20[var2];
                var8 = var12.bind(var7)(var8);
                var9 = var8.FormHint;
                var8 = {};
                var10 = 37;
                var13 = var20[var10];
                var13 = var12.bind(var7)(var13);
                var22 = var13.intl;
                var21 = var22.format;
                var13 = var20[var10];
                var13 = var12.bind(var7)(var13);
                var13 = var13.t;
                var18 = var13.SbQJk5;
                var13 = {};
                var23 = _closure1_slot28;
                var24 = 1000;
                var23 = var23 / var24;
                var13['bitrate'] = var23;
                var13 = var21.bind(var22)(var18, var13);
                var8['children'] = var13;
                var8 = var11.bind(var7)(var9, var8);
                var4['hint'] = var8;
                var9 = _closure1_slot51;
                var2 = var20[var2];
                var2 = var12.bind(var7)(var2);
                var8 = var2.FormRow;
                var2 = {};
                var11 = var20[var10];
                var11 = var12.bind(var7)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var10 = var20[var10];
                var10 = var12.bind(var7)(var10);
                var10 = var10.t;
                var10 = var10.w2d0vU;
                var10 = var11.bind(var13)(var10);
                var2['label'] = var10;
                var13 = _closure1_slot51;
                var10 = 44;
                var10 = var20[var10];
                var10 = var12.bind(var7)(var10);
                var11 = var10.Text;
                var10 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                var18 = global;
                var23 = var18.Math;
                var22 = var23.round;
                var21 = var17.bitrate;
                var21 = var21 / var24;
                var24 = var22.bind(var23)(var21);
                var21 = var18.HermesInternal;
                var23 = var21.concat;
                var22 = '';
                var21 = 'kbps';
                var21 = var23.bind(var22)(var24, var21);
                var10['children'] = var21;
                var10 = var13.bind(var7)(var11, var10);
                var2['trailing'] = var10;
                var8 = var9.bind(var7)(var8, var2);
                var2 = new Array(2);
                var2[0] = var8;
                var10 = _closure1_slot51;
                var9 = _closure1_slot10;
                var8 = {};
                var11 = var19.sliderWrapper;
                var8['style'] = var11;
                var13 = _closure1_slot51;
                var11 = 70;
                var11 = var20[var11];
                var11 = var12.bind(var7)(var11);
                var12 = var11.Slider;
                var11 = {};
                var19 = var19.slider;
                var11['style'] = var19;
                var19 = var18.Math;
                var18 = var19.min;
                var17 = var17.bitrate;
                var17 = var18.bind(var19)(var17, var15);
                var11['value'] = var17;
                var16 = _closure1_slot29;
                var11['minimumValue'] = var16;
                var11['maximumValue'] = var15;
                var14 = var14.handleBitRateChange;
                var11['onValueChange'] = var14;
                var11 = var13.bind(var7)(var12, var11);
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
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var10 = this;
                var1 = var10.props;
                var11 = var1.channel;
                var1 = var1.canManageChannels;
                var2 = var10.showVoiceSettings;
                var2 = var2.bind(var10)();
                if(!var2) { _fun0029_ip = 62; continue _fun0029 }
case 159:
                if(var1) { _fun0029_ip = 155; continue _fun0029 }
case 62:
                var1 = null;
                return var1;
case 155:
                var1 = new Array(0);
                var3 = var1.push;
                var7 = _closure1_slot51;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 55;
                var4 = var13[var2];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var19 = 37;
                var9 = var13[var19];
                var9 = var8.bind(var6)(var9);
                var15 = var9.intl;
                var14 = var15.string;
                var9 = var13[var19];
                var9 = var8.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.jhJEJs;
                var9 = var14.bind(var15)(var9);
                var4['title'] = var9;
                var14 = _closure1_slot51;
                var2 = var13[var2];
                var2 = var8.bind(var6)(var2);
                var9 = var2.FormHint;
                var2 = {};
                var15 = var13[var19];
                var15 = var8.bind(var6)(var15);
                var18 = var15.intl;
                var17 = var18.format;
                var15 = var13[var19];
                var15 = var8.bind(var6)(var15);
                var15 = var15.t;
                var16 = var15.c5W7Ss;
                var15 = {};
                var15 = var17.bind(var18)(var16, var15);
                var2['children'] = var15;
                var2 = var14.bind(var6)(var9, var2);
                var4['hint'] = var2;
                var9 = _closure1_slot52;
                var2 = 66;
                var2 = var13[var2];
                var2 = var8.bind(var6)(var2);
                var8 = var2.TableRadioGroup;
                var2 = {};
                var11 = var11.videoQualityMode;
                var13 = null;
                if(!(var13 == var11)) { _fun0029_ip = 169; continue _fun0029 }
case 170:
                var13 = _closure1_slot43;
                var11 = var13.AUTO;
case 169:
                var2['defaultValue'] = var11;
                var11 = var10.handleVideoQualityModeChange;
                var2['onChange'] = var11;
                var11 = false;
                var2['hasIcons'] = var11;
                var10 = var10.videoQualityModeRadioGroupRef;
                var2['groupRef'] = var10;
                var16 = _closure1_slot51;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 67;
                var10 = var15[var11];
                var10 = var18.bind(var6)(var10);
                var13 = var10.TableRadioRow;
                var10 = {};
                var14 = var15[var19];
                var14 = var18.bind(var6)(var14);
                var20 = var14.intl;
                var17 = var20.string;
                var14 = var15[var19];
                var14 = var18.bind(var6)(var14);
                var14 = var14.t;
                var14 = var14.jjKYpu;
                var14 = var17.bind(var20)(var14);
                var10['label'] = var14;
                var14 = _closure1_slot43;
                var17 = var14.AUTO;
                var10['value'] = var17;
                var13 = var16.bind(var6)(var13, var10);
                var10 = new Array(2);
                var10[0] = var13;
                var13 = _closure1_slot51;
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
                var15 = var15.7jOoJE;
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
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var14 = this;
                var2 = _closure1_slot55;
                var1 = var14.context;
                var7 = undefined;
                var19 = var2.bind(var7)(var1);
                var1 = var14.props;
                var17 = var1.channel;
                var1 = var1.canManageChannels;
                var2 = var14.showVoiceSettings;
                var2 = var2.bind(var14)();
                if(!var2) { _fun0030_ip = 123; continue _fun0030 }
case 35:
                if(var1) { _fun0030_ip = 162; continue _fun0030 }
case 123:
                var1 = null;
                return var1;
case 162:
                var1 = new Array(0);
                var18 = global;
                var4 = var18.Math;
                var3 = var4.round;
                var2 = var17.userLimit;
                var6 = var3.bind(var4)(var2);
                var16 = 0;
                if(!(var16 !== var6)) { _fun0030_ip = 171; continue _fun0030 }
case 93:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 37;
                var4 = var8[var2];
                var4 = var3.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var8[var2];
                var2 = var3.bind(var7)(var2);
                var2 = var2.t;
                var3 = var2.3uHFUR;
                var2 = {};
                var2['num'] = var6;
                var22 = var4.bind(var5)(var3, var2);
                _fun0030_ip = 172; continue _fun0030;
case 171:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 37;
                var3 = var6[var2];
                var3 = var5.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var6[var2];
                var2 = var5.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.XX5ciX;
                var22 = var3.bind(var4)(var2);
case 172:
                var2 = var17.isGuildStageVoice;
                var2 = var2.bind(var17)();
                if(var2) { _fun0030_ip = 17; continue _fun0030 }
case 18:
                var15 = _closure1_slot37;
                _fun0030_ip = 131; continue _fun0030;
case 17:
                var15 = _closure1_slot38;
case 131:
                var3 = var1.push;
                var6 = _closure1_slot52;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 55;
                var4 = var8[var2];
                var4 = var9.bind(var7)(var4);
                var5 = var4.FormSection;
                var4 = {};
                var12 = _closure1_slot51;
                var8 = var8[var2];
                var8 = var9.bind(var7)(var8);
                var9 = var8.FormHint;
                var8 = {};
                var10 = var17.isGuildStageVoice;
                var13 = var10.bind(var17)();
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var10 = 37;
                var23 = var20[var10];
                var23 = var21.bind(var7)(var23);
                var24 = var23.intl;
                var23 = var24.format;
                var20 = var20[var10];
                var20 = var21.bind(var7)(var20);
                var20 = var20.t;
                if(var13) { _fun0030_ip = 173; continue _fun0030 }
case 174:
                var21 = var20.8yb3JT;
                var13 = {};
                var13 = var23.bind(var24)(var21, var13);
                _fun0030_ip = 175; continue _fun0030;
case 173:
                var21 = var20.OqZI8D;
                var20 = {};
                var13 = var23.bind(var24)(var21, var20);
case 175:
                var8['children'] = var13;
                var8 = var12.bind(var7)(var9, var8);
                var4['hint'] = var8;
                var9 = _closure1_slot51;
                var12 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = var20[var2];
                var2 = var12.bind(var7)(var2);
                var8 = var2.FormRow;
                var2 = {};
                var13 = var20[var10];
                var13 = var12.bind(var7)(var13);
                var21 = var13.intl;
                var13 = var21.string;
                var10 = var20[var10];
                var10 = var12.bind(var7)(var10);
                var10 = var10.t;
                var10 = var10./AoSGN;
                var10 = var13.bind(var21)(var10);
                var2['label'] = var10;
                var21 = _closure1_slot51;
                var10 = 44;
                var10 = var20[var10];
                var10 = var12.bind(var7)(var10);
                var13 = var10.Text;
                var10 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                var10['children'] = var22;
                var10 = var21.bind(var7)(var13, var10);
                var2['trailing'] = var10;
                var8 = var9.bind(var7)(var8, var2);
                var2 = new Array(2);
                var2[0] = var8;
                var10 = _closure1_slot51;
                var9 = _closure1_slot10;
                var8 = {};
                var13 = var19.sliderWrapper;
                var8['style'] = var13;
                var13 = _closure1_slot51;
                var11 = 70;
                var11 = var20[var11];
                var11 = var12.bind(var7)(var11);
                var12 = var11.Slider;
                var11 = {};
                var19 = var19.slider;
                var11['style'] = var19;
                var19 = var18.Math;
                var18 = var19.min;
                var17 = var17.userLimit;
                var17 = var18.bind(var19)(var17, var15);
                var11['value'] = var17;
                var11['minimumValue'] = var16;
                var11['maximumValue'] = var15;
                var14 = var14.handleUserLimitChange;
                var11['onValueChange'] = var14;
                var11 = var13.bind(var7)(var12, var11);
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
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = var4.props;
                var5 = var1.regions;
                var3 = var1.channel;
                var _closure3_slot1 = var3;
                var12 = var1.canManageChannels;
                var2 = var1.guild;
                var1 = null;
                if(!(var1 != var2)) { _fun0031_ip = 132; continue _fun0031 }
case 161:
                var2 = var4.showVoiceSettings;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0031_ip = 138; continue _fun0031 }
case 176:
                if(!var12) { _fun0031_ip = 138; continue _fun0031 }
case 104:
                var2 = var3.isGuildStageVoice;
                var2 = var2.bind(var3)();
                if(var2) { _fun0031_ip = 138; continue _fun0031 }
case 7:
                var13 = var1 == var5;
                if(var13) { _fun0031_ip = 177; continue _fun0031 }
case 178:
                var3 = var5.length;
                var2 = 0;
                var13 = var2 === var3;
case 177:
                var3 = var1 != var5;
                var2 = null;
                if(!var3) { _fun0031_ip = 41; continue _fun0031 }
case 179:
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
case 41:
                if(!(var1 == var2)) { _fun0031_ip = 180; continue _fun0031 }
case 181:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 37;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.JEmsap;
                var17 = var4.bind(var5)(var3);
                _fun0031_ip = 182; continue _fun0031;
case 180:
                var17 = var2.name;
case 182:
                var2 = new Array(0);
                var4 = var2.push;
                var8 = _closure1_slot51;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 55;
                var3 = var18[var14];
                var7 = undefined;
                var3 = var15.bind(var7)(var3);
                var6 = var3.FormSection;
                var5 = {};
                var19 = 37;
                var3 = var18[var19];
                var3 = var15.bind(var7)(var3);
                var10 = var3.intl;
                var9 = var10.string;
                var3 = var18[var19];
                var3 = var15.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.Ms8bX+;
                var3 = var9.bind(var10)(var3);
                var5['title'] = var3;
                var10 = _closure1_slot51;
                var3 = var18[var14];
                var3 = var15.bind(var7)(var3);
                var9 = var3.FormHint;
                var3 = {};
                var20 = var18[var19];
                var20 = var15.bind(var7)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var18[var19];
                var20 = var15.bind(var7)(var20);
                var20 = var20.t;
                var20 = var20.dbTs+z;
                var20 = var21.bind(var22)(var20);
                var3['children'] = var20;
                var3 = var10.bind(var7)(var9, var3);
                var5['hint'] = var3;
                var10 = _closure1_slot51;
                var3 = var18[var14];
                var3 = var15.bind(var7)(var3);
                var9 = var3.FormRow;
                var3 = {};
                var20 = var18[var19];
                var20 = var15.bind(var7)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var18[var19];
                var19 = var15.bind(var7)(var19);
                var19 = var19.t;
                var19 = var19.Ms8bX+;
                var19 = var20.bind(var21)(var19);
                var3['label'] = var19;
                var16 = _closure1_slot51;
                var14 = var18[var14];
                var14 = var15.bind(var7)(var14);
                var14 = var14.FormRow;
                var15 = var14.Arrow;
                var14 = {};
                var14['label'] = var17;
                var14 = var16.bind(var7)(var15, var14);
                var3['trailing'] = var14;
                var12 = !var12;
                if(var12) { _fun0031_ip = 183; continue _fun0031 }
case 184:
                var12 = var13;
case 183:
                var3['disabled'] = var12;
                var11 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot30;
                    var1 = var1.CHANGE_RTC_REGION;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['onPress'] = var11;
                var3 = var10.bind(var7)(var9, var3);
                var5['children'] = var3;
                var3 = 'channel-region-override';
                var3 = var8.bind(var7)(var6, var5, var3);
                var3 = var4.bind(var2)(var3);
                return var2;
case 138:
                return var1;
case 132:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'showVoiceSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var6 = var1.channel;
                var3 = null;
                var1 = var3 != var6;
                if(!var1) { _fun0032_ip = 185; continue _fun0032 }
case 186:
                var2 = var6.guild_id;
                var1 = var3 != var2;
case 185:
                if(!var1) { _fun0032_ip = 77; continue _fun0032 }
case 187:
                var4 = _closure1_slot12;
                var3 = var4.has;
                var2 = var6.type;
                var1 = var3.bind(var4)(var2);
case 77:
                if(!var1) { _fun0032_ip = 6; continue _fun0032 }
case 80:
                var2 = var6.isGuildVocal;
                var2 = var2.bind(var6)();
                if(var2) { _fun0032_ip = 43; continue _fun0032 }
case 3:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 71;
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
case 43:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'renderPermissions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = var1.props;
                var2 = var1.canManageRoles;
                var11 = var1.channel;
                var1 = null;
                if(!var2) { _fun0033_ip = 188; continue _fun0033 }
case 189:
                var5 = _closure1_slot51;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var12 = 55;
                var2 = var6[var12];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var14 = _closure1_slot51;
                var8 = var6[var12];
                var8 = var7.bind(var4)(var8);
                var13 = var8.FormHint;
                var8 = {};
                var17 = 37;
                var15 = var6[var17];
                var15 = var7.bind(var4)(var15);
                var18 = var15.intl;
                var16 = var18.string;
                var15 = var6[var17];
                var15 = var7.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.UAoMCL;
                var15 = var16.bind(var18)(var15);
                var8['children'] = var15;
                var8 = var14.bind(var4)(var13, var8);
                var2['hint'] = var8;
                var8 = _closure1_slot51;
                var6 = var6[var12];
                var6 = var7.bind(var4)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var13 = var11.type;
                var11 = _closure1_slot31;
                var11 = var11.GUILD_CATEGORY;
                if(!(var13 !== var11)) { _fun0033_ip = 190; continue _fun0033 }
case 191:
                var15 = _closure1_slot0;
                var11 = _closure1_slot2;
                var13 = var11[var17];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var11 = var11[var17];
                var11 = var15.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.BAZMBn;
                var11 = var13.bind(var14)(var11);
                _fun0033_ip = 192; continue _fun0033;
case 190:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var17];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.PgkvDf;
                var11 = var14.bind(var15)(var13);
case 192:
                var6['label'] = var11;
                var15 = _closure1_slot51;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var12 = var13[var12];
                var12 = var11.bind(var4)(var12);
                var12 = var12.FormRow;
                var14 = var12.Arrow;
                var12 = {};
                var12 = var15.bind(var4)(var14, var12);
                var6['trailing'] = var12;
                var12 = _closure1_slot51;
                var10 = 72;
                var10 = var13[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.ShieldUserIcon;
                var10 = {};
                var10 = var12.bind(var4)(var11, var10);
                var6['leading'] = var10;
                var9 = function onPress() {
                    var4 = _closure3_slot0;
                    var3 = var4.pushScreen;
                    var5 = _closure1_slot30;
                    var2 = var5.PERMISSIONS;
                    var1 = {};
                    var5 = var5.OVERVIEW;
                    var1['origin'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6['onPress'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 188:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'renderSettingsSection';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var8 = arg1;
                var _closure3_slot0 = var8;
                var2 = var8.length;
                var1 = 0;
                var2 = var2 > var1;
                var1 = null;
                if(!var2) { _fun0034_ip = 193; continue _fun0034 }
case 194:
                var5 = _closure1_slot51;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 55;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var7 = var8.map;
                var6 = function(arg1, arg2) {
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                        var2 = arg1;
                        var6 = arg2;
                        var1 = _closure3_slot0;
                        var3 = var1.length;
                        var1 = 1;
                        var3 = var3 - var1;
                        var1 = var2;
                        if(!(var6 < var3)) { _fun0035_ip = 162; continue _fun0035 }
case 159:
                        var5 = _closure1_slot51;
                        var4 = _closure1_slot10;
                        var3 = {};
                        var3['children'] = var2;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3, var6);
case 162:
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 193:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'renderCommonSettingsSection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3.props;
                var6 = var2.channel;
                var _closure3_slot1 = var6;
                var4 = var2.canManageChannels;
                var2 = new Array(0);
                var7 = _closure1_slot13;
                var5 = var6.type;
                var8 = undefined;
                var5 = var7.bind(var8)(var5);
                if(var5) { _fun0036_ip = 176; continue _fun0036 }
case 195:
                var7 = var6.isGuildStageVoice;
                var5 = var7.bind(var6)();
case 176:
                if(!var5) { _fun0036_ip = 19; continue _fun0036 }
case 104:
                var7 = var2.push;
                var12 = _closure1_slot51;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 55;
                var10 = var15[var5];
                var10 = var13.bind(var8)(var10);
                var11 = var10.FormRow;
                var10 = {};
                var14 = 37;
                var16 = var15[var14];
                var16 = var13.bind(var8)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var15[var14];
                var14 = var13.bind(var8)(var14);
                var14 = var14.t;
                var14 = var14.h850Ss;
                var14 = var16.bind(var17)(var14);
                var10['label'] = var14;
                var16 = _closure1_slot51;
                var5 = var15[var5];
                var5 = var13.bind(var8)(var5);
                var5 = var5.FormRow;
                var14 = var5.Arrow;
                var5 = {};
                var5 = var16.bind(var8)(var14, var5);
                var10['trailing'] = var5;
                var14 = _closure1_slot51;
                var5 = 73;
                var5 = var15[var5];
                var5 = var13.bind(var8)(var5);
                var13 = var5.BellIcon;
                var5 = {};
                var5 = var14.bind(var8)(var13, var5);
                var10['leading'] = var5;
                var5 = function onPress() {
                    _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                        var3 = _closure3_slot1;
                        var1 = var3.isThread;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0037_ip = 196; continue _fun0037 }
case 197:
                        var5 = _closure3_slot0;
                        var4 = var5.pushScreen;
                        var1 = _closure1_slot30;
                        var1 = var1.NOTIFICATIONS;
                        var1 = var4.bind(var5)(var1);
                        _fun0037_ip = 7; continue _fun0037;
case 196:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 74;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.showThreadNotificationsBottomSheet;
                        var2 = _closure3_slot1;
                        var1 = var3.bind(var4)(var2);
case 7:
                        return var1;
                    }
                };
                var10['onPress'] = var5;
                var5 = 'rowNotifications';
                var5 = var12.bind(var8)(var11, var10, var5);
                var5 = var7.bind(var2)(var5);
case 19:
                var7 = _closure1_slot13;
                var5 = var6.type;
                var5 = var7.bind(var8)(var5);
                if(!var5) { _fun0036_ip = 198; continue _fun0036 }
case 157:
                var7 = var2.push;
                var12 = _closure1_slot51;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 55;
                var10 = var15[var5];
                var10 = var13.bind(var8)(var10);
                var11 = var10.FormRow;
                var10 = {};
                var14 = 37;
                var16 = var15[var14];
                var16 = var13.bind(var8)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var15[var14];
                var14 = var13.bind(var8)(var14);
                var14 = var14.t;
                var14 = var14.mp1N/2;
                var14 = var16.bind(var17)(var14);
                var10['label'] = var14;
                var14 = _closure1_slot51;
                var5 = var15[var5];
                var5 = var13.bind(var8)(var5);
                var5 = var5.FormRow;
                var13 = var5.Arrow;
                var5 = {};
                var5 = var14.bind(var8)(var13, var5);
                var10['trailing'] = var5;
                var14 = _closure1_slot51;
                var13 = _closure1_slot58;
                var5 = {};
                var15 = var6.id;
                var5['channelId'] = var15;
                var5 = var14.bind(var8)(var13, var5);
                var10['leading'] = var5;
                var5 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot30;
                    var1 = var1.PINNED_MESSAGES;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var10['onPress'] = var5;
                var5 = var3.props;
                var5 = var5.pinDisabled;
                var10['disabled'] = var5;
                var5 = 'rowPinnedMessages';
                var5 = var12.bind(var8)(var11, var10, var5);
                var5 = var7.bind(var2)(var5);
case 198:
                if(!var4) { _fun0036_ip = 199; continue _fun0036 }
case 200:
                var7 = var6.type;
                var5 = _closure1_slot31;
                var5 = var5.GUILD_CATEGORY;
                var4 = var7 !== var5;
case 199:
                if(!var4) { _fun0036_ip = 201; continue _fun0036 }
case 202:
                var5 = var6.isThread;
                var5 = var5.bind(var6)();
                var4 = !var5;
case 201:
                if(!var4) { _fun0036_ip = 203; continue _fun0036 }
case 204:
                var4 = var2.push;
                var7 = _closure1_slot51;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var11 = 55;
                var5 = var12[var11];
                var5 = var10.bind(var8)(var5);
                var6 = var5.FormRow;
                var5 = {};
                var13 = 37;
                var14 = var12[var13];
                var14 = var10.bind(var8)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var12[var13];
                var13 = var10.bind(var8)(var13);
                var13 = var13.t;
                var13 = var13.ngRFjZ;
                var13 = var14.bind(var15)(var13);
                var5['label'] = var13;
                var14 = _closure1_slot51;
                var11 = var12[var11];
                var11 = var10.bind(var8)(var11);
                var11 = var11.FormRow;
                var13 = var11.Arrow;
                var11 = {};
                var11 = var14.bind(var8)(var13, var11);
                var5['trailing'] = var11;
                var11 = _closure1_slot51;
                var9 = 75;
                var9 = var12[var9];
                var9 = var10.bind(var8)(var9);
                var10 = var9.LinkIcon;
                var9 = {};
                var9 = var11.bind(var8)(var10, var9);
                var5['leading'] = var9;
                var1 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot30;
                    var1 = var1.INSTANT_INVITES;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5['onPress'] = var1;
                var1 = 'rowInstantInvites';
                var1 = var7.bind(var8)(var6, var5, var1);
                var1 = var4.bind(var2)(var1);
case 203:
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
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = var1.props;
                var10 = var1.channel;
                var1 = var10.isForumChannel;
                var3 = var1.bind(var10)();
                var1 = null;
                if(!var3) { _fun0038_ip = 205; continue _fun0038 }
case 206:
                var6 = _closure1_slot51;
                var18 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 55;
                var3 = var16[var12];
                var5 = undefined;
                var3 = var18.bind(var5)(var3);
                var4 = var3.FormSection;
                var3 = {};
                var9 = _closure1_slot51;
                var7 = var16[var12];
                var7 = var18.bind(var5)(var7);
                var8 = var7.FormHint;
                var7 = {};
                var21 = 37;
                var13 = var16[var21];
                var13 = var18.bind(var5)(var13);
                var15 = var13.intl;
                var14 = var15.string;
                var13 = var16[var21];
                var13 = var18.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13.mOSViT;
                var13 = var14.bind(var15)(var13);
                var7['children'] = var13;
                var7 = var9.bind(var5)(var8, var7);
                var3['hint'] = var7;
                var9 = _closure1_slot51;
                var7 = var16[var12];
                var7 = var18.bind(var5)(var7);
                var8 = var7.FormRow;
                var7 = {};
                var13 = var16[var21];
                var13 = var18.bind(var5)(var13);
                var15 = var13.intl;
                var14 = var15.string;
                var13 = var16[var21];
                var13 = var18.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13.kQvoC/;
                var13 = var14.bind(var15)(var13);
                var7['label'] = var13;
                var15 = _closure1_slot51;
                var12 = var16[var12];
                var12 = var18.bind(var5)(var12);
                var12 = var12.FormRow;
                var13 = var12.Arrow;
                var12 = {};
                var17 = var10.defaultForumLayout;
                var14 = 76;
                var16 = var16[var14];
                var16 = var18.bind(var5)(var16);
                var16 = var16.ForumLayout;
                var16 = var16.GRID;
                if(!(var17 !== var16)) { _fun0038_ip = 50; continue _fun0038 }
case 207:
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var21];
                var17 = var19.bind(var5)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var21];
                var16 = var19.bind(var5)(var16);
                var16 = var16.t;
                var16 = var16.4HXEZG;
                var16 = var17.bind(var18)(var16);
                _fun0038_ip = 208; continue _fun0038;
case 50:
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = var17[var21];
                var18 = var20.bind(var5)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var5)(var17);
                var17 = var17.t;
                var17 = var17.8RswJG;
                var16 = var18.bind(var19)(var17);
case 208:
                var12['label'] = var16;
                var12 = var15.bind(var5)(var13, var12);
                var7['trailing'] = var12;
                var12 = var10.defaultForumLayout;
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var14];
                var10 = var13.bind(var5)(var10);
                var10 = var10.ForumLayout;
                var10 = var10.GRID;
                if(!(var12 !== var10)) { _fun0038_ip = 209; continue _fun0038 }
case 210:
                var13 = _closure1_slot51;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 78;
                var10 = var14[var10];
                var10 = var12.bind(var5)(var10);
                var12 = var10.ListViewIcon;
                var10 = {};
                var10 = var13.bind(var5)(var12, var10);
                _fun0038_ip = 211; continue _fun0038;
case 209:
                var13 = _closure1_slot51;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 77;
                var11 = var14[var11];
                var11 = var12.bind(var5)(var11);
                var12 = var11.GridSquareIcon;
                var11 = {};
                var10 = var13.bind(var5)(var12, var11);
case 211:
                var7['leading'] = var10;
                var2 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot30;
                    var1 = var1.DEFAULT_FORUM_LAYOUT;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['onPress'] = var2;
                var2 = 'forumDefaultLayout';
                var2 = var9.bind(var5)(var8, var7, var2);
                var3['children'] = var2;
                var2 = 'default-forum-layout';
                var1 = var6.bind(var5)(var4, var3, var2);
case 205:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'renderUncommonSettingsSection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3.props;
                var5 = var2.canManageWebhooks;
                var8 = undefined;
                var4 = var8 !== var5;
                if(!var4) { _fun0039_ip = 159; continue _fun0039 }
case 76:
                var4 = var5;
case 159:
                var _closure3_slot1 = var4;
                var6 = var2.channel;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 79;
                var2 = var7[var2];
                var5 = var5.bind(var8)(var2);
                var2 = var5.canUnlinkLobbyChannel;
                var5 = var2.bind(var5)(var6);
                var _closure3_slot2 = var5;
                var2 = new Array(0);
                if(var4) { _fun0039_ip = 193; continue _fun0039 }
case 128:
                var4 = var5;
case 193:
                if(!var4) { _fun0039_ip = 72; continue _fun0039 }
case 212:
                var4 = var2.push;
                var7 = _closure1_slot51;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 55;
                var5 = var11[var9];
                var5 = var10.bind(var8)(var5);
                var6 = var5.FormRow;
                var5 = {};
                var13 = 37;
                var14 = var11[var13];
                var14 = var10.bind(var8)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var11[var13];
                var13 = var10.bind(var8)(var13);
                var13 = var13.t;
                var13 = var13.CIsNZw;
                var13 = var14.bind(var15)(var13);
                var5['label'] = var13;
                var13 = _closure1_slot51;
                var9 = var11[var9];
                var9 = var10.bind(var8)(var9);
                var9 = var9.FormRow;
                var12 = var9.Arrow;
                var9 = {};
                var9 = var13.bind(var8)(var12, var9);
                var5['trailing'] = var9;
                var9 = 80;
                var9 = var11[var9];
                var9 = var10.bind(var8)(var9);
                var9 = var9.PuzzlePieceIcon;
                var5['leading'] = var9;
                var1 = function onPress() {
                    var4 = _closure3_slot0;
                    var3 = var4.pushScreen;
                    var1 = _closure1_slot30;
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
case 72:
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
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var11 = var1.channel;
                var _closure3_slot0 = var11;
                var13 = var1.canManageThread;
                var7 = var1.isThreadModerator;
                var14 = var1.canUnarchiveThread;
                var12 = var1.isForumPost;
                var5 = var1.hasJoinedThread;
                var4 = _closure1_slot52;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 55;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var8 = null;
                var6 = null;
                if(var5) { _fun0040_ip = 213; continue _fun0040 }
case 214:
                var16 = _closure1_slot51;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var5 = 81;
                var5 = var20[var5];
                var5 = var18.bind(var3)(var5);
                var15 = var5.TableRow;
                var5 = {};
                var19 = _closure1_slot51;
                var17 = 82;
                var17 = var20[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.GroupPlusIcon;
                var17 = {};
                var17 = var19.bind(var3)(var18, var17);
                var5['icon'] = var17;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 37;
                var19 = var21[var17];
                var19 = var18.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var17 = var21[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.t;
                if(var12) { _fun0040_ip = 215; continue _fun0040 }
case 15:
                var17 = var18.10kukS;
                var17 = var19.bind(var20)(var17);
                _fun0040_ip = 216; continue _fun0040;
case 215:
                var18 = var18.ihLPiO;
                var17 = var19.bind(var20)(var18);
case 216:
                var5['label'] = var17;
                var17 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 83;
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
                var6 = var16.bind(var3)(var15, var5);
case 213:
                var5 = new Array(6);
                var5[0] = var6;
                var6 = var11.threadMetadata;
                var15 = var8 == var6;
                var16 = undefined;
                if(var15) { _fun0040_ip = 217; continue _fun0040 }
case 218:
                var16 = var6.archived;
case 217:
                var15 = true;
                var6 = null;
                if(!(var15 === var16)) { _fun0040_ip = 219; continue _fun0040 }
case 158:
                var6 = null;
                if(!var14) { _fun0040_ip = 219; continue _fun0040 }
case 220:
                var17 = _closure1_slot51;
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 81;
                var14 = var21[var14];
                var14 = var19.bind(var3)(var14);
                var16 = var14.TableRow;
                var14 = {};
                var20 = _closure1_slot51;
                var18 = 84;
                var18 = var21[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.ClockIcon;
                var18 = {};
                var18 = var20.bind(var3)(var19, var18);
                var14['icon'] = var18;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 37;
                var20 = var22[var18];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.t;
                if(var12) { _fun0040_ip = 221; continue _fun0040 }
case 222:
                var18 = var19.S9E4G7;
                var18 = var20.bind(var21)(var18);
                _fun0040_ip = 223; continue _fun0040;
case 221:
                var19 = var19.cnRubV;
                var18 = var20.bind(var21)(var19);
case 223:
                var14['label'] = var18;
                var18 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 83;
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
                var6 = var17.bind(var3)(var16, var14);
case 219:
                var5[1] = var6;
                var6 = var11.threadMetadata;
                var16 = var8 == var6;
                var14 = undefined;
                if(var16) { _fun0040_ip = 224; continue _fun0040 }
case 225:
                var14 = var6.archived;
case 224:
                var6 = null;
                if(!(var15 !== var14)) { _fun0040_ip = 226; continue _fun0040 }
case 227:
                var6 = null;
                if(!var13) { _fun0040_ip = 226; continue _fun0040 }
case 228:
                var15 = _closure1_slot51;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 81;
                var13 = var19[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var18 = _closure1_slot51;
                var16 = 85;
                var16 = var19[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.XLargeIcon;
                var16 = {};
                var16 = var18.bind(var3)(var17, var16);
                var13['icon'] = var16;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 37;
                var18 = var20[var16];
                var18 = var17.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.t;
                if(var12) { _fun0040_ip = 229; continue _fun0040 }
case 230:
                var16 = var17.wiIevd;
                var16 = var18.bind(var19)(var16);
                _fun0040_ip = 231; continue _fun0040;
case 229:
                var17 = var17.BTs4Kb;
                var16 = var18.bind(var19)(var17);
case 231:
                var13['label'] = var16;
                var16 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 83;
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
                var6 = var15.bind(var3)(var14, var13);
case 226:
                var5[2] = var6;
                var6 = null;
                if(!var7) { _fun0040_ip = 232; continue _fun0040 }
case 233:
                var13 = var11.isLockedThread;
                var13 = var13.bind(var11)();
                var6 = null;
                if(!var13) { _fun0040_ip = 232; continue _fun0040 }
case 53:
                var15 = _closure1_slot51;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 81;
                var13 = var19[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var18 = _closure1_slot51;
                var16 = 86;
                var16 = var19[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.LockIcon;
                var16 = {};
                var16 = var18.bind(var3)(var17, var16);
                var13['icon'] = var16;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 37;
                var18 = var20[var16];
                var18 = var17.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.t;
                if(var12) { _fun0040_ip = 234; continue _fun0040 }
case 235:
                var16 = var17.jeyb/W;
                var16 = var18.bind(var19)(var16);
                _fun0040_ip = 236; continue _fun0040;
case 234:
                var17 = var17./OKSxp;
                var16 = var18.bind(var19)(var17);
case 236:
                var13['label'] = var16;
                var16 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 83;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.unlockThread;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var13['onPress'] = var16;
                var6 = var15.bind(var3)(var14, var13);
case 232:
                var5[3] = var6;
                var6 = null;
                if(!var7) { _fun0040_ip = 237; continue _fun0040 }
case 238:
                var7 = var11.isLockedThread;
                var7 = var7.bind(var11)();
                var6 = null;
                if(var7) { _fun0040_ip = 237; continue _fun0040 }
case 239:
                var11 = _closure1_slot51;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 81;
                var7 = var16[var7];
                var7 = var14.bind(var3)(var7);
                var8 = var7.TableRow;
                var7 = {};
                var15 = _closure1_slot51;
                var13 = 86;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.LockIcon;
                var13 = {};
                var13 = var15.bind(var3)(var14, var13);
                var7['icon'] = var13;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 37;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                if(var12) { _fun0040_ip = 240; continue _fun0040 }
case 241:
                var12 = var13.HoCqm8;
                var12 = var14.bind(var15)(var12);
                _fun0040_ip = 242; continue _fun0040;
case 240:
                var13 = var13.Ur/0Na;
                var12 = var14.bind(var15)(var13);
case 242:
                var7['label'] = var12;
                var12 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 83;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.lockThread;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['onPress'] = var12;
                var6 = var11.bind(var3)(var8, var7);
case 237:
                var5[4] = var6;
                var8 = _closure1_slot51;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 81;
                var6 = var14[var6];
                var6 = var13.bind(var3)(var6);
                var7 = var6.TableRow;
                var6 = {};
                var12 = _closure1_slot51;
                var10 = 75;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var11 = var10.LinkIcon;
                var10 = {};
                var10 = var12.bind(var3)(var11, var10);
                var6['icon'] = var10;
                var10 = 37;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.WqhZss;
                var10 = var11.bind(var12)(var10);
                var6['label'] = var10;
                var9 = function onPress() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 87;
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
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
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
                if(!var4) { _fun0041_ip = 80; continue _fun0041 }
case 77:
                var2 = var1;
case 80:
                var1 = null;
                if(!var2) { _fun0041_ip = 243; continue _fun0041 }
case 29:
                var4 = var3.type;
                var2 = _closure1_slot31;
                var2 = var2.GUILD_CATEGORY;
                if(!(var4 !== var2)) { _fun0041_ip = 131; continue _fun0041 }
case 93:
                if(var14) { _fun0041_ip = 244; continue _fun0041 }
case 212:
                var2 = var3.isThread;
                var5 = var2.bind(var3)();
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 37;
                var3 = var11[var2];
                var8 = undefined;
                var3 = var9.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var11[var2];
                var2 = var9.bind(var8)(var2);
                var2 = var2.t;
                if(var5) { _fun0041_ip = 245; continue _fun0041 }
case 246:
                var5 = var2.8D8Rsb;
                var11 = var3.bind(var4)(var5);
                _fun0041_ip = 247; continue _fun0041;
case 245:
                var2 = var2.H7vTe2;
                var11 = var3.bind(var4)(var2);
case 247:
                _fun0041_ip = 248; continue _fun0041;
case 244:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 37;
                var3 = var9[var2];
                var5 = undefined;
                var3 = var8.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var9[var2];
                var2 = var8.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.nEOg1N;
                var11 = var3.bind(var4)(var2);
case 248:
                _fun0041_ip = 249; continue _fun0041;
case 131:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 37;
                var3 = var9[var2];
                var5 = undefined;
                var3 = var8.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var9[var2];
                var2 = var8.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.ifbXnL;
                var11 = var3.bind(var4)(var2);
case 249:
                var5 = _closure1_slot52;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 55;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var7 = null;
                if(!var6) { _fun0041_ip = 250; continue _fun0041 }
case 251:
                var9 = _closure1_slot51;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = 81;
                var6 = var18[var6];
                var6 = var16.bind(var4)(var6);
                var8 = var6.TableRow;
                var6 = {};
                var15 = 'danger';
                var6['variant'] = var15;
                var17 = _closure1_slot51;
                var15 = 88;
                var15 = var18[var15];
                var15 = var16.bind(var4)(var15);
                var16 = var15.UserMinusIcon;
                var15 = {};
                var18 = 'text-feedback-critical';
                var15['color'] = var18;
                var15 = var17.bind(var4)(var16, var15);
                var6['icon'] = var15;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 37;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                if(var14) { _fun0041_ip = 200; continue _fun0041 }
case 137:
                var14 = var15.fa/84m;
                var14 = var16.bind(var17)(var14);
                _fun0041_ip = 252; continue _fun0041;
case 200:
                var15 = var15.2LsZdT;
                var14 = var16.bind(var17)(var15);
case 252:
                var6['label'] = var14;
                var13 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 83;
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
                var7 = var9.bind(var4)(var8, var6);
case 250:
                var6 = new Array(2);
                var6[0] = var7;
                var9 = _closure1_slot51;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 81;
                var7 = var15[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.TableRow;
                var7 = {};
                var14 = 'danger';
                var7['variant'] = var14;
                var14 = _closure1_slot51;
                var12 = 89;
                var12 = var15[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.TrashIcon;
                var12 = {};
                var15 = 'text-feedback-critical';
                var12['color'] = var15;
                var12 = var14.bind(var4)(var13, var12);
                var7['icon'] = var12;
                var7['label'] = var11;
                var10 = var10.handleDeleteChannel;
                var7['onPress'] = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 243:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'renderForumTags';
        var5['key'] = var7;
        var7 = function value() {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var12 = this;
                var _closure3_slot0 = var12;
                var2 = _closure1_slot55;
                var1 = var12.context;
                var4 = undefined;
                var25 = var2.bind(var4)(var1);
                var1 = var12.props;
                var15 = var1.channel;
                var14 = var1.canManageChannels;
                var _closure3_slot1 = var14;
                var1 = var15.isForumLikeChannel;
                var1 = var1.bind(var15)();
                var8 = null;
                if(var1) { _fun0042_ip = 176; continue _fun0042 }
case 127:
                return var8;
case 176:
                var3 = var15.availableTags;
                var1 = var8 == var3;
                var16 = undefined;
                if(var1) { _fun0042_ip = 253; continue _fun0042 }
case 254:
                var2 = var3.every;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.moderated;
                    return var1;
                };
                var16 = var2.bind(var3)(var1);
case 253:
                var2 = var12.getError;
                var1 = 'available_tags';
                var9 = var2.bind(var12)(var1);
                var3 = _closure1_slot52;
                var2 = _closure1_slot10;
                var1 = {};
                var7 = _closure1_slot51;
                var20 = _closure1_slot0;
                var10 = _closure1_slot2;
                var17 = 55;
                var5 = var10[var17];
                var5 = var20.bind(var4)(var5);
                var6 = var5.FormTitle;
                var5 = {};
                var19 = 37;
                var11 = var10[var19];
                var11 = var20.bind(var4)(var11);
                var18 = var11.intl;
                var11 = var18.string;
                var10 = var10[var19];
                var10 = var20.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.P/y+sj;
                var10 = var11.bind(var18)(var10);
                var5['title'] = var10;
                var10 = var25.tagsTitle;
                var5['viewStyle'] = var10;
                var8 = var8 != var9;
                if(!var8) { _fun0042_ip = 248; continue _fun0042 }
case 255:
                var10 = var9.length;
                var9 = 0;
                var8 = var10 > var9;
case 248:
                var5['error'] = var8;
                var8 = false;
                var5['uppercaseTitle'] = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var8 = _closure1_slot51;
                var7 = _closure1_slot10;
                var6 = {};
                var9 = var25.tagsWrapper;
                var6['style'] = var9;
                var9 = var15.availableTags;
                var10 = var9.length;
                var9 = 0;
                if(!(!(var10 > var9))) { _fun0042_ip = 256; continue _fun0042 }
case 220:
                var11 = _closure1_slot52;
                var10 = _closure1_slot10;
                var9 = {};
                var21 = _closure1_slot51;
                var31 = _closure1_slot0;
                var26 = _closure1_slot2;
                var18 = 44;
                var18 = var26[var18];
                var18 = var31.bind(var4)(var18);
                var20 = var18.Text;
                var18 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
                var22 = var25.tagsDescription;
                var18['style'] = var22;
                var22 = var26[var19];
                var22 = var31.bind(var4)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var26[var19];
                var22 = var31.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.3v8kZH;
                var22 = var23.bind(var24)(var22);
                var18['children'] = var22;
                var20 = var21.bind(var4)(var20, var18);
                var18 = new Array(2);
                var18[0] = var20;
                var22 = _closure1_slot51;
                var24 = _closure1_slot1;
                var23 = 93;
                var20 = var26[var23];
                var21 = var24.bind(var4)(var20);
                var20 = {};
                var27 = !var14;
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
                var27 = var26[var19];
                var27 = var31.bind(var4)(var27);
                var30 = var27.intl;
                var28 = var30.string;
                var27 = var26[var19];
                var27 = var31.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.F4is7L;
                var27 = var28.bind(var30)(var27);
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
                var18[1] = var20;
                var9['children'] = var18;
                var9 = var11.bind(var4)(var10, var9);
                _fun0042_ip = 257; continue _fun0042;
case 256:
                var18 = _closure1_slot52;
                var11 = _closure1_slot53;
                var10 = {};
                var22 = var15.availableTags;
                var21 = var22.map;
                var20 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure1_slot51;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 90;
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
                var21 = var14;
                if(!var21) { _fun0042_ip = 258; continue _fun0042 }
case 259:
                var22 = var15.availableTags;
                var23 = var22.length;
                var22 = _closure1_slot48;
                var21 = var23 < var22;
case 258:
                if(!var21) { _fun0042_ip = 260; continue _fun0042 }
case 261:
                var24 = _closure1_slot51;
                var23 = _closure1_slot10;
                var22 = {};
                var25 = var25.addTagIconButtonWrapper;
                var22['style'] = var25;
                var27 = _closure1_slot51;
                var31 = _closure1_slot0;
                var28 = _closure1_slot2;
                var25 = 91;
                var25 = var28[var25];
                var25 = var31.bind(var4)(var25);
                var26 = var25.IconButton;
                var25 = {};
                var34 = _closure1_slot51;
                var30 = 92;
                var30 = var28[var30];
                var30 = var31.bind(var4)(var30);
                var33 = var30.PlusSmallIcon;
                var32 = {};
                var30 = 'sm';
                var32['size'] = var30;
                var36 = _closure1_slot1;
                var35 = 29;
                var35 = var28[var35];
                var35 = var36.bind(var4)(var35);
                var35 = var35.colors;
                var35 = var35.WHITE;
                var32['color'] = var35;
                var32 = var34.bind(var4)(var33, var32);
                var25['icon'] = var32;
                var25['size'] = var30;
                var29 = function onPress() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePressTag;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var25['onPress'] = var29;
                var29 = var28[var19];
                var29 = var31.bind(var4)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var28[var19];
                var28 = var31.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28./jubeD;
                var28 = var29.bind(var30)(var28);
                var25['accessibilityLabel'] = var28;
                var25 = var27.bind(var4)(var26, var25);
                var22['children'] = var25;
                var21 = var24.bind(var4)(var23, var22);
case 260:
                var20[1] = var21;
                var10['children'] = var20;
                var9 = var18.bind(var4)(var11, var10);
case 257:
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot51;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = var9[var17];
                var6 = var10.bind(var4)(var6);
                var7 = var6.FormSection;
                var6 = {};
                var11 = _closure1_slot51;
                var9 = var9[var17];
                var9 = var10.bind(var4)(var9);
                var10 = var9.FormSwitchRow;
                var9 = {};
                var14 = !var14;
                if(var14) { _fun0042_ip = 262; continue _fun0042 }
case 263:
                var14 = var16;
case 262:
                var9['disabled'] = var14;
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var16 = var14[var19];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var14[var19];
                var14 = var18.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.yX24uI;
                var14 = var16.bind(var17)(var14);
                var9['label'] = var14;
                var14 = var15.hasFlag;
                var13 = _closure1_slot45;
                var13 = var13.REQUIRE_TAG;
                var13 = var14.bind(var15)(var13);
                var9['value'] = var13;
                var12 = var12.handleToggleRequireTag;
                var9['onValueChange'] = var12;
                var9 = var11.bind(var4)(var10, var9);
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
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var9 = this;
                var1 = var9.props;
                var12 = var1.channel;
                var11 = var1.canManageChannels;
                var1 = var12.isMediaChannel;
                var2 = var1.bind(var12)();
                var1 = null;
                if(!var2) { _fun0043_ip = 19; continue _fun0043 }
case 206:
                var5 = _closure1_slot51;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 55;
                var2 = var16[var6];
                var4 = undefined;
                var2 = var15.bind(var4)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var8 = _closure1_slot51;
                var6 = var16[var6];
                var6 = var15.bind(var4)(var6);
                var7 = var6.FormSwitchRow;
                var6 = {};
                var11 = !var11;
                var6['disabled'] = var11;
                var11 = 37;
                var13 = var16[var11];
                var13 = var15.bind(var4)(var13);
                var17 = var13.intl;
                var14 = var17.string;
                var13 = var16[var11];
                var13 = var15.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.u8LZOt;
                var13 = var14.bind(var17)(var13);
                var6['label'] = var13;
                var13 = var16[var11];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var11 = var16[var11];
                var11 = var15.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.J4wCc7;
                var11 = var13.bind(var14)(var11);
                var6['subLabel'] = var11;
                var11 = var12.hasFlag;
                var10 = _closure1_slot45;
                var10 = var10.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                var10 = var11.bind(var12)(var10);
                var10 = !var10;
                var6['value'] = var10;
                var9 = var9.handleToggleShowMediaDownloadOptions;
                var6['onValueChange'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 19:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'renderCategory';
        var5['key'] = var7;
        var7 = function value() {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var3 = var1.props;
                var2 = var3.hasCategories;
                var5 = var3.category;
                var1 = var3.channel;
                var10 = var3.canManageParent;
                if(!var2) { _fun0044_ip = 264; continue _fun0044 }
case 36:
                var2 = var1.type;
                var1 = _closure1_slot31;
                var1 = var1.GUILD_CATEGORY;
                if(!(var2 !== var1)) { _fun0044_ip = 264; continue _fun0044 }
case 265:
                var1 = null;
                if(!(var1 != var5)) { _fun0044_ip = 266; continue _fun0044 }
case 5:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 47;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.computeChannelName;
                var2 = _closure1_slot25;
                var1 = _closure1_slot24;
                var13 = var3.bind(var4)(var5, var2, var1);
                _fun0044_ip = 267; continue _fun0044;
case 266:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 37;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.GSfOoo;
                var13 = var2.bind(var3)(var1);
case 267:
                var4 = _closure1_slot51;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 55;
                var1 = var14[var1];
                var3 = undefined;
                var1 = var11.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var7 = _closure1_slot51;
                var8 = 81;
                var5 = var14[var8];
                var5 = var11.bind(var3)(var5);
                var6 = var5.TableRow;
                var5 = {};
                var17 = _closure1_slot51;
                var15 = 94;
                var15 = var14[var15];
                var15 = var11.bind(var3)(var15);
                var16 = var15.FolderPlusIcon;
                var15 = {};
                var15 = var17.bind(var3)(var16, var15);
                var5['icon'] = var15;
                var15 = 37;
                var16 = var14[var15];
                var16 = var11.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var14[var15];
                var15 = var11.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.vHCZwr;
                var15 = var16.bind(var17)(var15);
                var5['label'] = var15;
                var12 = _closure1_slot51;
                var8 = var14[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.TableRow;
                var11 = var8.TrailingText;
                var8 = {};
                var8['text'] = var13;
                var8 = var12.bind(var3)(var11, var8);
                var5['trailing'] = var8;
                var5['arrow'] = var10;
                var8 = undefined;
                if(!var10) { _fun0044_ip = 268; continue _fun0044 }
case 269:
                var8 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot30;
                    var1 = var1.CHANGE_CATEGORY;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
case 268:
                var5['onPress'] = var8;
                var5 = var7.bind(var3)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
case 264:
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
            var1 = 55;
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
            var1 = 55;
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
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var3 = this;
                var5 = _closure1_slot55;
                var2 = var3.context;
                var4 = undefined;
                var6 = var5.bind(var4)(var2);
                var2 = var3.props;
                var2 = var2.isThread;
                if(var2) { _fun0045_ip = 196; continue _fun0045 }
case 27:
                var2 = var3.renderChannelSettings;
                var5 = var2.bind(var3)();
                _fun0045_ip = 9; continue _fun0045;
case 196:
                var2 = var3.renderThreadSettings;
                var5 = var2.bind(var3)();
case 9:
                var3 = _closure1_slot51;
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
    var8 = var5.bind(var1)(var8);
    var _closure1_slot56 = var8;
    var5 = 95;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThemeContext;
    var8['contextType'] = var5;
    var5 = 98;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/channel_settings/ChannelSettingsOverview.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ConnectedChannelSettingsOverview(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var7 = var2.autoFocusElement;
            var _closure2_slot1 = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 96;
            var2 = var9[var2];
            var5 = undefined;
            var3 = var8.bind(var5)(var2);
            var2 = var3.useNavigation;
            var18 = var2.bind(var3)();
            var _closure2_slot2 = var18;
            var4 = 30;
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
            var12 = var11.bind(var12)(var10, var2);
            var _closure2_slot3 = var12;
            var2 = var9[var4];
            var14 = var8.bind(var5)(var2);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot17;
            var11 = new Array(1);
            var11[0] = var10;
            var2 = function() {
                var2 = _closure1_slot17;
                var1 = var2.getChannel;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = var13.bind(var14)(var11, var2);
            var2 = 71;
            var11 = var9[var2];
            var13 = var8.bind(var5)(var11);
            var11 = var13.useIsThreadModerator;
            var17 = var11.bind(var13)(var12);
            var11 = var9[var4];
            var15 = var8.bind(var5)(var11);
            var14 = var15.useStateFromStoresObject;
            var11 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = function() {
                _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var5 = null;
                    var6 = var5 != var2;
                    var4 = undefined;
                    if(!var6) { _fun0047_ip = 270; continue _fun0047 }
case 271:
                    var8 = _closure1_slot11;
                    var7 = var8.isMuted;
                    var6 = _closure2_slot3;
                    var6 = var6.id;
                    var4 = var7.bind(var8)(var6);
case 270:
                    var1['isMutedThread'] = var4;
                    var4 = _closure2_slot3;
                    var4 = var5 != var4;
                    var2 = undefined;
                    if(!var4) { _fun0047_ip = 93; continue _fun0047 }
case 176:
                    var5 = _closure1_slot11;
                    var4 = var5.hasJoined;
                    var3 = _closure2_slot3;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
case 93:
                    var1['hasJoinedThread'] = var2;
                    return var1;
                }
            };
            var11 = var14.bind(var15)(var13, var11);
            var14 = var11.isMutedThread;
            var13 = var11.hasJoinedThread;
            var2 = var9[var2];
            var11 = var8.bind(var5)(var2);
            var2 = var11.useCanManageThread;
            var16 = var2.bind(var11)(var12);
            var2 = 58;
            var2 = var9[var2];
            var11 = var8.bind(var5)(var2);
            var2 = var11.useIsChannelContentGated;
            var2 = var2.bind(var11)(var12);
            var _closure2_slot4 = var2;
            var4 = var9[var4];
            var9 = var8.bind(var5)(var4);
            var8 = var9.useStateFromStoresObject;
            var4 = new Array(7);
            var4[0] = var10;
            var10 = _closure1_slot20;
            var4[1] = var10;
            var4[2] = var3;
            var3 = _closure1_slot25;
            var4[3] = var3;
            var3 = _closure1_slot23;
            var4[4] = var3;
            var3 = _closure1_slot19;
            var4[5] = var3;
            var3 = _closure1_slot21;
            var4[6] = var3;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var2;
            var2 = function() {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                    var2 = _closure1_slot17;
                    var1 = var2.getProps;
                    var1 = var1.bind(var2)();
                    var3 = var1.submitting;
                    var2 = var1.errors;
                    var1 = _closure2_slot3;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0048_ip = 204; continue _fun0048 }
case 148:
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
                    var7 = _closure1_slot25;
                    var1 = var7.getCurrentUser;
                    var10 = var1.bind(var7)();
                    var9 = _closure1_slot15;
                    var7 = var9.has;
                    var1 = var14.type;
                    var7 = var7.bind(var9)(var1);
                    var11 = _closure1_slot23;
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
                    var7 = _closure1_slot39;
                    var7 = var7.MANAGE_CHANNELS;
                    var7 = var11.bind(var12)(var7, var14);
                    var1['canManageChannels'] = var7;
                    var7 = var6 != var10;
                    if(!var7) { _fun0048_ip = 272; continue _fun0048 }
case 273:
                    var11 = _closure2_slot3;
                    var11 = var11.ownerId;
                    var10 = var10.id;
                    var7 = var11 === var10;
case 272:
                    var1['isChannelOwner'] = var7;
                    if(!(var6 == var13)) { _fun0048_ip = 158; continue _fun0048 }
case 89:
                    var11 = _closure1_slot21;
                    var10 = var11.can;
                    var7 = _closure1_slot39;
                    var7 = var7.MANAGE_CHANNELS;
                    var7 = var10.bind(var11)(var7, var8);
                    _fun0048_ip = 106; continue _fun0048;
case 158:
                    var12 = _closure1_slot21;
                    var11 = var12.can;
                    var10 = _closure1_slot39;
                    var10 = var10.MANAGE_CHANNELS;
                    var7 = var11.bind(var12)(var10, var13);
case 106:
                    var1['canManageParent'] = var7;
                    var12 = _closure1_slot21;
                    var13 = var12.can;
                    var10 = _closure1_slot39;
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
                    if(!var10) { _fun0048_ip = 274; continue _fun0048 }
case 275:
                    var14 = _closure1_slot21;
                    var13 = var14.can;
                    var11 = _closure1_slot39;
                    var12 = var11.MANAGE_WEBHOOKS;
                    var11 = _closure2_slot3;
                    var10 = var13.bind(var14)(var12, var11);
case 274:
                    var1['canManageWebhooks'] = var10;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 71;
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
                    if(var4) { _fun0048_ip = 276; continue _fun0048 }
case 277:
                    var5 = _closure2_slot3;
                    var5 = var5.linkedLobby;
                    var4 = var6 != var5;
case 276:
                    var1['isNSFWDisabled'] = var4;
                    return var1;
case 204:
                    var1 = {};
                    var4 = false;
                    var1['isThread'] = var4;
                    var1['submitting'] = var3;
                    var1['errors'] = var2;
                    return var1;
                }
            };
            var11 = var8.bind(var9)(var4, var2, var3);
            var4 = _closure1_slot9;
            var2 = var4.useRef;
            var9 = null;
            var10 = var2.bind(var4)(var9);
            var _closure2_slot5 = var10;
            var3 = var4.useEffect;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var18;
            var1 = function() {
                var4 = _closure2_slot2;
                var3 = var4.addListener;
                var2 = 'transitionEnd';
                var1 = function(arg1) {
                    _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var1 = var1.closing;
                        if(var1) { _fun0049_ip = 278; continue _fun0049 }
case 279:
                        var3 = _closure2_slot1;
                        var2 = _closure1_slot26;
                        var2 = var2.CHANNEL_NAME;
                        if(!(var3 === var2)) { _fun0049_ip = 278; continue _fun0049 }
case 146:
                        var1 = _closure2_slot5;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0049_ip = 104; continue _fun0049 }
case 280:
                        var2 = var3.focus;
                        var1 = var2.bind(var3)();
case 104:
                        return var1;
case 278:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var2 = var9 != var19;
            var1 = null;
            if(!var2) { _fun0046_ip = 281; continue _fun0046 }
case 282:
            var4 = _closure1_slot51;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 97;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var8 = _closure1_slot51;
            var7 = _closure1_slot56;
            var6 = {};
            var22 = var6;
            var21 = var11;
            var15 = copyDataProperties(var22, var21);
            var15 = 'channel';
            var6[var15] = var19;
            var15 = 'navigation';
            var6[var15] = var18;
            var15 = 'isThreadModerator';
            var6[var15] = var17;
            var15 = 'canManageThread';
            var6[var15] = var16;
            var15 = var11.canUnarchiveThread;
            var11 = 'canUnarchiveThread';
            var6[var11] = var15;
            var11 = 'isMutedThread';
            var6[var11] = var14;
            var11 = 'hasJoinedThread';
            var6[var11] = var13;
            var9 = var9 == var12;
            var11 = undefined;
            if(var9) { _fun0046_ip = 283; continue _fun0046 }
case 284:
            var9 = var12.isForumPost;
            var11 = var9.bind(var12)();
case 283:
            var9 = 'isForumPost';
            var6[var9] = var11;
            var9 = 'channelNameRef';
            var6[var9] = var10;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 281:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['PinImage'] = var2;
    return var1;
})();