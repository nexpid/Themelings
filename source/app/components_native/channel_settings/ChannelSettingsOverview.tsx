// app/components_native/channel_settings/ChannelSettingsOverview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
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
            _closure1_slot54 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var2 = function PinImage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var7 = var2.style;
            var2 = _closure1_slot51;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 29;
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
            var3 = _closure1_slot48;
            var2 = _closure1_slot10;
            var1 = {};
            var8 = var11.outer;
            var1['style'] = var8;
            var10 = _closure1_slot48;
            var9 = _closure1_slot10;
            var8 = {};
            var11 = var11.badge;
            var8['style'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var1['children'] = var8;
            var6 = var3.bind(var4)(var2, var1);
case 6:
            var3 = _closure1_slot49;
            var2 = _closure1_slot10;
            var1 = {};
            var1['style'] = var7;
            var8 = _closure1_slot48;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 30;
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
    var _closure1_slot55 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var13.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var19 = 1;
    var5 = var7[var19];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
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
    var8 = var13.bind(var1)(var8);
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
    var8 = var13.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 12;
    var8 = var7[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot18 = var8;
    var8 = 13;
    var8 = var7[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot19 = var8;
    var14 = 14;
    var8 = var7[var14];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot20 = var8;
    var18 = 15;
    var8 = var7[var18];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot21 = var8;
    var17 = 16;
    var8 = var7[var17];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot22 = var8;
    var8 = 17;
    var8 = var7[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot23 = var8;
    var8 = 18;
    var8 = var7[var8];
    var8 = var13.bind(var1)(var8);
    var _closure1_slot24 = var8;
    var8 = 19;
    var8 = var7[var8];
    var8 = var13.bind(var1)(var8);
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
    var8 = var8.VideoQualityMode;
    var _closure1_slot42 = var8;
    var8 = 22;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.ChannelFlags;
    var _closure1_slot43 = var9;
    var9 = var8.MAX_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot44 = var9;
    var8 = var8.MAX_FORUM_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot45 = var8;
    var8 = 23;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.MAX_FORUM_TAGS;
    var _closure1_slot46 = var8;
    var8 = 24;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DEFAULT_AUTO_ARCHIVE_DURATION;
    var _closure1_slot47 = var8;
    var8 = 25;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var15 = var8.Fonts;
    var8 = 26;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot48 = var9;
    var9 = var8.jsxs;
    var _closure1_slot49 = var9;
    var8 = var8.Fragment;
    var _closure1_slot50 = var8;
    var8 = 27;
    var9 = var7[var8];
    var11 = var6.bind(var1)(var9);
    var10 = var11.createStyles;
    var9 = {};
    var20 = {'position': 'absolute', 'top': 2, 'right': 4294967292, 'width': 12, 'height': 12, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var12 = 28;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var20['borderRadius'] = var16;
    var16 = 'center';
    var21 = var7[var12];
    var21 = var13.bind(var1)(var21);
    var21 = var21.colors;
    var21 = var21.BACKGROUND_SURFACE_HIGH;
    var20['backgroundColor'] = var21;
    var9['outer'] = var20;
    var20 = {'backgroundColor': null, 'width': 8, 'height': 8};
    var21 = var7[var12];
    var21 = var13.bind(var1)(var21);
    var21 = var21.unsafe_rawColors;
    var21 = var21.RED_400;
    var20['backgroundColor'] = var21;
    var21 = var7[var12];
    var21 = var13.bind(var1)(var21);
    var21 = var21.radii;
    var21 = var21.xs;
    var20['borderRadius'] = var21;
    var9['badge'] = var20;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot51 = var9;
    var8 = var7[var8];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createLegacyClassComponentStyles;
    var8 = {};
    var11 = {};
    var11['flex'] = var19;
    var19 = var7[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_BASE_LOWER;
    var11['backgroundColor'] = var19;
    var19 = var7[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var11['paddingTop'] = var19;
    var8['screenContainer'] = var11;
    var11 = {};
    var11['marginHorizontal'] = var18;
    var8['slider'] = var11;
    var11 = {};
    var18 = var7[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.CARD_BACKGROUND_DEFAULT;
    var11['backgroundColor'] = var18;
    var8['sliderWrapper'] = var11;
    var11 = {};
    var18 = var7[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.modules;
    var18 = var18.mobile;
    var18 = var18.TABLE_ROW_PADDING;
    var11['paddingHorizontal'] = var18;
    var8['stackPadding'] = var11;
    var11 = {};
    var11['marginTop'] = var17;
    var8['alertText'] = var11;
    var11 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap'};
    var8['tagsWrapper'] = var11;
    var11 = {};
    var11['justifyContent'] = var16;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var11['margin'] = var16;
    var8['addTagIconButtonWrapper'] = var11;
    var11 = {'backgroundColor': 'transparent', 'paddingHorizontal': 0};
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var11['marginTop'] = var16;
    var8['createTagButton'] = var11;
    var11 = {};
    var15 = var15.PRIMARY_SEMIBOLD;
    var11['fontFamily'] = var15;
    var11['fontSize'] = var14;
    var8['createTagButtonText'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var11['backgroundColor'] = var14;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var11['borderColor'] = var12;
    var8['deleteButton'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot52 = var8;
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
                var1 = _closure1_slot54;
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
                var4 = 31;
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
                        var1 = 32;
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
                        var3 = 33;
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
                                var1 = 34;
                                var1 = var7[var1];
                                var9 = undefined;
                                var3 = var6.bind(var9)(var1);
                                var2 = var3.open;
                                var1 = {};
                                var4 = 'THREAD_SETTINGS_UPDATED';
                                var1['key'] = var4;
                                var4 = 35;
                                var4 = var7[var4];
                                var4 = var6.bind(var9)(var4);
                                var1['icon'] = var4;
                                var6 = _closure4_slot0;
                                var4 = var6.isThread;
                                var4 = var4.bind(var6)();
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var5 = 36;
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
                        var3 = 38;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.sanitizeGuildTextChannelName;
                        var6 = var3.bind(var4)(var7);
                        _fun0007_ip = 28; continue _fun0007;
case 26:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 37;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = false;
                        var6 = var4.bind(var5)(var7, var3);
case 28:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 33;
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
                        var4 = 37;
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
                        var2 = 33;
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
                    var1 = 33;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.updateChannel;
                    var2 = {};
                    var5 = 39;
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
                    var1 = 33;
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
                    var1 = 33;
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
                    var1 = 33;
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
                        var1 = 33;
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
                    var1 = 33;
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
                    var1 = 33;
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
                    var1 = 33;
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
                    var1 = 33;
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
                    var1 = 33;
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
                        var1 = 33;
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
                    var1 = 40;
                    var6 = var5[var1];
                    var1 = undefined;
                    var9 = var7.bind(var1)(var6);
                    var8 = var9.setFlag;
                    var7 = var3.flags;
                    var3 = _closure1_slot43;
                    var6 = var3.ACTIVE_CHANNELS_REMOVED;
                    var3 = arg1;
                    var3 = !var3;
                    var6 = var8.bind(var9)(var7, var6, var3);
                    var3 = _closure1_slot1;
                    var2 = 33;
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
                    var1 = 33;
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
                            var5 = _closure1_slot52;
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
                            var2 = 41;
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
                            var6 = 36;
                            var9 = var13[var6];
                            var9 = var11.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var13[var6];
                            var6 = var11.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6["1B1/NB"];
                            var18 = var9.bind(var10)(var6);
                            _fun0011_ip = 50; continue _fun0011;
case 49:
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 36;
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
                            var6 = 42;
                            var6 = var25[var6];
                            var10 = var9.bind(var3)(var6);
                            var9 = var10.show;
                            var6 = {};
                            var22 = _closure1_slot0;
                            var19 = 36;
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
                            var14 = _closure1_slot49;
                            var13 = _closure1_slot50;
                            var11 = {};
                            var17 = _closure1_slot48;
                            var15 = 43;
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
                            var18 = _closure1_slot48;
                            var16 = 44;
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
                                var1 = 42;
                                var3 = var5[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 33;
                                var3 = var5[var3];
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 45;
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
                            var4 = 42;
                            var4 = var22[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.show;
                            var4 = {};
                            var18 = _closure1_slot0;
                            var17 = 36;
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
                            var11 = _closure1_slot49;
                            var10 = _closure1_slot50;
                            var9 = {};
                            var15 = _closure1_slot48;
                            var13 = 43;
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
                            var16 = _closure1_slot48;
                            var14 = 44;
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
                                var1 = 42;
                                var3 = var5[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 33;
                                var3 = var5[var3];
                                var6 = var4.bind(var1)(var3);
                                var3 = var6.close;
                                var3 = var3.bind(var6)();
                                var3 = 45;
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
                            var4 = 46;
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
                            var4 = 42;
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
                            var10 = 36;
                            var11 = var14[var10];
                            var11 = var13.bind(var3)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var3)(var10);
                            var10 = var10.t;
                            if(var9) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                            var9 = var10["8D8Rsb"];
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
                            var10 = 36;
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
                            var10 = 36;
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
                            var7 = 47;
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
                            var6 = 33;
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
                            var5 = 48;
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
                            var3 = 49;
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
                            var3 = 34;
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
                            var6 = 36;
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
                        var5 = _closure1_slot43;
                        var2 = var5.REQUIRE_TAG;
                        var2 = var4.bind(var6)(var2);
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 40;
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
                        var1 = 33;
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
                        var5 = _closure1_slot43;
                        var2 = var5.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                        var2 = var4.bind(var6)(var2);
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 40;
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
                        var1 = 33;
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
                var3 = 50;
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
                var2 = 32;
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
            var4 = this;
            var3 = var4.updateNavigation;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
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
                if(!(var9 != var6)) { _fun0017_ip = 81; continue _fun0017 }
case 3:
                var9 = var6.submitting;
                if(!(var7 === var9)) { _fun0017_ip = 81; continue _fun0017 }
case 82:
                var9 = var6.isThread;
                if(!(var2 === var9)) { _fun0017_ip = 81; continue _fun0017 }
case 83:
                var6 = var6.channel;
                var6 = var6.type;
                if(!(var4 === var6)) { _fun0017_ip = 81; continue _fun0017 }
case 84:
                var6 = arg2;
                var6 = var6.hasChanges;
                if(!(var8 !== var6)) { _fun0017_ip = 85; continue _fun0017 }
case 81:
                if(var2) { _fun0017_ip = 86; continue _fun0017 }
case 41:
                var2 = _closure1_slot31;
                var2 = var2.GUILD_CATEGORY;
                if(!(var4 !== var2)) { _fun0017_ip = 87; continue _fun0017 }
case 68:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 36;
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
                _fun0017_ip = 88; continue _fun0017;
case 87:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 36;
                var8 = var12[var2];
                var10 = undefined;
                var8 = var11.bind(var10)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var12[var2];
                var2 = var11.bind(var10)(var2);
                var2 = var2.t;
                var2 = var2["/uELTj"];
                var4 = var8.bind(var9)(var2);
case 88:
                _fun0017_ip = 50; continue _fun0017;
case 86:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 36;
                var8 = var12[var2];
                var10 = undefined;
                var8 = var11.bind(var10)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var12[var2];
                var2 = var11.bind(var10)(var2);
                var2 = var2.t;
                if(var1) { _fun0017_ip = 89; continue _fun0017 }
case 90:
                var1 = var2.d4n5Q1;
                var1 = var8.bind(var9)(var1);
                _fun0017_ip = 69; continue _fun0017;
case 89:
                var2 = var2.BsJrhj;
                var1 = var8.bind(var9)(var2);
case 69:
                var4 = var1;
case 50:
                var2 = var3.setOptions;
                var1 = {};
                if(var7) { _fun0017_ip = 91; continue _fun0017 }
case 92:
                var5 = function(arg1) {
                    var4 = _closure1_slot48;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 52;
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
                    var1[5] = var7;
                    var6 = 36;
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
                    var1[5] = var7;
                    var5 = _closure3_slot1;
                    var6 = !var5;
                    var5 = 'disabled';
                    var1[4] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                _fun0017_ip = 93; continue _fun0017;
case 91:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 51;
                var7 = var7[var6];
                var6 = undefined;
                var6 = var8.bind(var6)(var7);
                var5 = var6.HeaderSubmittingIndicator;
case 93:
                var1['headerRight'] = var5;
                var1['title'] = var4;
                var1 = var2.bind(var3)(var1);
case 85:
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
                var10 = this;
                var1 = var10.props;
                var9 = var1.channel;
                var8 = var1.canManageChannels;
                var14 = var1.canManageThread;
                var13 = var1.canSendMessages;
                var11 = var1.isChannelOwner;
                var3 = var1.isThread;
                var12 = var1.isForumPost;
                var5 = _closure1_slot13;
                var2 = var9.type;
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                if(!var2) { _fun0018_ip = 5; continue _fun0018 }
case 94:
                var2 = !var3;
case 5:
                if(var2) { _fun0018_ip = 26; continue _fun0018 }
case 32:
                var5 = _closure1_slot32;
                var7 = var5.GUILD_THREADS_ONLY;
                var6 = var7.has;
                var5 = var9.type;
                var2 = var6.bind(var7)(var5);
case 26:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 53;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.getIsChannelNameSettingEditable;
                var5 = {};
                var5['canManageThread'] = var14;
                var5['canManageChannels'] = var8;
                var5['canSendMessages'] = var13;
                var5['isForumPost'] = var12;
                var5['isThread'] = var3;
                var5['isChannelOwner'] = var11;
                var7 = var6.bind(var7)(var5);
                var5 = var9.isForumPost;
                var5 = var5.bind(var9)();
                if(var5) { _fun0018_ip = 95; continue _fun0018 }
case 46:
                if(var3) { _fun0018_ip = 96; continue _fun0018 }
case 97:
                var5 = var9.type;
                var3 = _closure1_slot31;
                var3 = var3.GUILD_CATEGORY;
                if(!(var5 !== var3)) { _fun0018_ip = 88; continue _fun0018 }
case 21:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 36;
                var5 = var12[var3];
                var5 = var11.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var12[var3];
                var3 = var11.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.PVbHDl;
                var11 = var5.bind(var6)(var3);
                _fun0018_ip = 98; continue _fun0018;
case 88:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 36;
                var5 = var13[var3];
                var5 = var12.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var13[var3];
                var3 = var12.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.OCAkGP;
                var11 = var5.bind(var6)(var3);
case 98:
                _fun0018_ip = 99; continue _fun0018;
case 96:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 36;
                var5 = var13[var3];
                var5 = var12.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var13[var3];
                var3 = var12.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.j3XWjD;
                var11 = var5.bind(var6)(var3);
case 99:
                _fun0018_ip = 100; continue _fun0018;
case 95:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 36;
                var5 = var13[var3];
                var5 = var12.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var3 = var13[var3];
                var3 = var12.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.uyVrTN;
                var11 = var5.bind(var6)(var3);
case 100:
                var6 = _closure1_slot48;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 54;
                var3 = var13[var3];
                var3 = var12.bind(var4)(var3);
                var5 = var3.TextInput;
                var3 = {};
                var14 = var10.props;
                var14 = var14.channelNameRef;
                var3['ref'] = var14;
                var3['label'] = var11;
                var3['accessibilityLabel'] = var11;
                var11 = 46;
                var11 = var13[var11];
                var14 = var12.bind(var4)(var11);
                var13 = var14.computeChannelName;
                var12 = _closure1_slot25;
                var11 = _closure1_slot24;
                var11 = var13.bind(var14)(var9, var12, var11);
                var3['value'] = var11;
                var11 = var10.handleChangeName;
                var3['onChange'] = var11;
                var11 = var10.handleBlurName;
                var3['onBlur'] = var11;
                var7 = !var7;
                var3['isDisabled'] = var7;
                var7 = _closure1_slot36;
                var3['maxLength'] = var7;
                var11 = var10.getError;
                var7 = 'name';
                var7 = var11.bind(var10)(var7);
                var3['errorMessage'] = var7;
                var7 = var6.bind(var4)(var5, var3);
                var6 = undefined;
                if(!var2) { _fun0018_ip = 101; continue _fun0018 }
case 102:
                var2 = var9.isForumLikeChannel;
                var11 = var2.bind(var9)();
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 36;
                var3 = var13[var2];
                var3 = var12.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var13[var2];
                var2 = var12.bind(var4)(var2);
                var2 = var2.t;
                if(var11) { _fun0018_ip = 103; continue _fun0018 }
case 104:
                var11 = var2.X8jMDh;
                var11 = var3.bind(var5)(var11);
                _fun0018_ip = 105; continue _fun0018;
case 103:
                var2 = var2.yR6HwZ;
                var11 = var3.bind(var5)(var2);
case 105:
                var5 = _closure1_slot48;
                var3 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 55;
                var2 = var13[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.TextArea;
                var2 = {};
                var2['label'] = var11;
                var2['accessibilityLabel'] = var11;
                var12 = _closure1_slot1;
                var11 = 39;
                var11 = var13[var11];
                var13 = var12.bind(var4)(var11);
                var12 = var13.translateSurrogatesToInlineEmoji;
                var11 = var9.topic;
                var11 = var12.bind(var13)(var11);
                var2['value'] = var11;
                var11 = var10.handleChangeTopic;
                var2['onChange'] = var11;
                var8 = !var8;
                var2['isDisabled'] = var8;
                var8 = true;
                var2['autoCorrect'] = var8;
                var8 = var9.isForumLikeChannel;
                var8 = var8.bind(var9)();
                if(var8) { _fun0018_ip = 106; continue _fun0018 }
case 107:
                var8 = _closure1_slot44;
                _fun0018_ip = 108; continue _fun0018;
case 106:
                var8 = _closure1_slot45;
case 108:
                var2['maxLength'] = var8;
                var9 = var10.getError;
                var8 = 'topic';
                var8 = var9.bind(var10)(var8);
                var2['errorMessage'] = var8;
                var6 = var5.bind(var4)(var3, var2);
case 101:
                var3 = _closure1_slot49;
                var2 = _closure1_slot50;
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
                var17 = this;
                var1 = var17.props;
                var13 = var1.channel;
                var2 = var1.canManageChannels;
                var16 = var1.isNSFWDisabled;
                var4 = var13.type;
                var1 = _closure1_slot31;
                var3 = var1.GUILD_TEXT;
                var15 = null;
                var1 = null;
                if(!(var4 === var3)) { _fun0019_ip = 109; continue _fun0019 }
case 110:
                var1 = null;
                if(!var2) { _fun0019_ip = 109; continue _fun0019 }
case 9:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 56;
                var2 = var4[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                var1 = null;
                if(var2) { _fun0019_ip = 109; continue _fun0019 }
case 26:
                var4 = _closure1_slot49;
                var3 = _closure1_slot10;
                var2 = {};
                var10 = _closure1_slot48;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var6 = 57;
                var6 = var20[var6];
                var6 = var19.bind(var5)(var6);
                var9 = var6.TableRowGroup;
                var8 = {};
                var12 = _closure1_slot48;
                var6 = 58;
                var6 = var20[var6];
                var6 = var19.bind(var5)(var6);
                var11 = var6.TableSwitchRow;
                var6 = {};
                var14 = 36;
                var18 = var20[var14];
                var18 = var19.bind(var5)(var18);
                var22 = var18.intl;
                var21 = var22.string;
                var18 = var20[var14];
                var18 = var19.bind(var5)(var18);
                var18 = var18.t;
                var18 = var18.Es25Yf;
                var18 = var21.bind(var22)(var18);
                var6['label'] = var18;
                var18 = 59;
                var18 = var20[var18];
                var19 = var19.bind(var5)(var18);
                var18 = var19.isChannelOrGuildNSFW;
                var18 = var18.bind(var19)(var13);
                var6['value'] = var18;
                var17 = var17.handleNsfwChange;
                var6['onValueChange'] = var17;
                var6['disabled'] = var16;
                var13 = var13.linkedLobby;
                var15 = var15 != var13;
                var13 = undefined;
                if(!var15) { _fun0019_ip = 111; continue _fun0019 }
case 112:
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var14];
                var16 = var18.bind(var5)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var14];
                var15 = var18.bind(var5)(var15);
                var15 = var15.t;
                var15 = var15.l6uSVa;
                var13 = var16.bind(var17)(var15);
case 111:
                var6['subLabel'] = var13;
                var6 = var12.bind(var5)(var11, var6);
                var8['children'] = var6;
                var6 = 'nsfw-section';
                var8 = var10.bind(var5)(var9, var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot48;
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 43;
                var7 = var10[var7];
                var7 = var13.bind(var5)(var7);
                var8 = var7.Text;
                var7 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var11 = var10[var14];
                var11 = var13.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10["9eUgwR"];
                var10 = var11.bind(var12)(var10);
                var7['children'] = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 109:
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
                var22 = this;
                var2 = _closure1_slot52;
                var1 = var22.context;
                var7 = undefined;
                var23 = var2.bind(var7)(var1);
                var1 = var22.props;
                var3 = var1.channel;
                var2 = var1.canManageChannels;
                var1 = var1.isThreadModerator;
                var5 = var3.type;
                var4 = _closure1_slot31;
                var4 = var4.GUILD_TEXT;
                if(!(var5 === var4)) { _fun0020_ip = 113; continue _fun0020 }
case 114:
                if(var2) { _fun0020_ip = 115; continue _fun0020 }
case 113:
                var2 = var3.isThread;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0020_ip = 82; continue _fun0020 }
case 116:
                if(var1) { _fun0020_ip = 115; continue _fun0020 }
case 82:
                var1 = null;
                return var1;
case 115:
                var1 = new Array(0);
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 60;
                var4 = var2[var4];
                var8 = var11.bind(var7)(var4);
                var6 = var8.getSecondsSliderLabel;
                var5 = var3.rateLimitPerUser;
                var26 = 36;
                var4 = var2[var26];
                var4 = var11.bind(var7)(var4);
                var9 = var4.intl;
                var4 = var9.string;
                var2 = var2[var26];
                var2 = var11.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.zvDu4h;
                var4 = var4.bind(var9)(var2);
                var2 = false;
                var27 = var6.bind(var8)(var5, var2, var4);
                var2 = var3.isForumLikeChannel;
                var2 = var2.bind(var3)();
                if(var2) { _fun0020_ip = 117; continue _fun0020 }
case 118:
                var2 = var3.isThread;
                var5 = var2.bind(var3)();
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = var2[var26];
                var3 = var6.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var2[var26];
                var2 = var6.bind(var7)(var2);
                var2 = var2.t;
                if(var5) { _fun0020_ip = 119; continue _fun0020 }
case 120:
                var5 = var2.HEA/DU;
                var11 = var3.bind(var4)(var5);
                _fun0020_ip = 121; continue _fun0020;
case 119:
                var2 = var2.OMmNCv;
                var11 = var3.bind(var4)(var2);
case 121:
                _fun0020_ip = 122; continue _fun0020;
case 117:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = var2[var26];
                var3 = var5.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var2[var26];
                var2 = var5.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.a+1pdO;
                var11 = var3.bind(var4)(var2);
case 122:
                var3 = var1.push;
                var6 = _closure1_slot49;
                var5 = _closure1_slot10;
                var4 = {};
                var14 = _closure1_slot48;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 57;
                var2 = var12[var2];
                var2 = var9.bind(var7)(var2);
                var13 = var2.TableRowGroup;
                var2 = {};
                var17 = _closure1_slot49;
                var8 = 61;
                var8 = var12[var8];
                var8 = var9.bind(var7)(var8);
                var16 = var8.Card;
                var15 = {};
                var20 = _closure1_slot49;
                var19 = _closure1_slot10;
                var18 = {};
                var8 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
                var18['style'] = var8;
                var25 = _closure1_slot48;
                var8 = 43;
                var21 = var12[var8];
                var21 = var9.bind(var7)(var21);
                var24 = var21.Text;
                var21 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
                var28 = var12[var26];
                var28 = var9.bind(var7)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var26 = var12[var26];
                var26 = var9.bind(var7)(var26);
                var26 = var26.t;
                var26 = var26.piZgKF;
                var26 = var28.bind(var29)(var26);
                var21['children'] = var26;
                var24 = var25.bind(var7)(var24, var21);
                var21 = new Array(2);
                var21[0] = var24;
                var26 = _closure1_slot48;
                var24 = var12[var8];
                var24 = var9.bind(var7)(var24);
                var25 = var24.Text;
                var24 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                var24['children'] = var27;
                var24 = var26.bind(var7)(var25, var24);
                var21[1] = var24;
                var18['children'] = var21;
                var19 = var20.bind(var7)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var21 = _closure1_slot48;
                var19 = 62;
                var19 = var12[var19];
                var19 = var9.bind(var7)(var19);
                var20 = var19.Slider;
                var19 = {};
                var24 = var23.slider;
                var23 = new Array(2);
                var23[0] = var24;
                var24 = {'marginStart': 4294967292, 'marginTop': 8};
                var23[1] = var24;
                var19['style'] = var23;
                var23 = var22._cooldown;
                var19['value'] = var23;
                var23 = 0;
                var19['minimumValue'] = var23;
                var23 = _closure1_slot41;
                var24 = var23.length;
                var23 = 1;
                var23 = var24 - var23;
                var19['maximumValue'] = var23;
                var22 = var22.handleSlowmodeChange;
                var19['onValueChange'] = var22;
                var19 = var21.bind(var7)(var20, var19);
                var18[1] = var19;
                var15['children'] = var18;
                var15 = var17.bind(var7)(var16, var15);
                var2['children'] = var15;
                var13 = var14.bind(var7)(var13, var2);
                var2 = new Array(2);
                var2[0] = var13;
                var10 = _closure1_slot48;
                var8 = var12[var8];
                var8 = var9.bind(var7)(var8);
                var9 = var8.Text;
                var8 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var8['children'] = var11;
                var8 = var10.bind(var7)(var9, var8);
                var2[1] = var8;
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
                var7 = var2.isForumPost;
                var2 = var6.isThread;
                var2 = var2.bind(var6)();
                if(!var2) { _fun0021_ip = 123; continue _fun0021 }
case 124:
                if(var1) { _fun0021_ip = 125; continue _fun0021 }
case 123:
                var1 = null;
                return var1;
case 125:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var13 = 36;
                var2 = var1[var13];
                var4 = undefined;
                var2 = var9.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var13];
                var1 = var9.bind(var4)(var1);
                var1 = var1.t;
                if(var7) { _fun0021_ip = 126; continue _fun0021 }
case 127:
                var7 = var1.YUXr4Z;
                var7 = var2.bind(var3)(var7);
                _fun0021_ip = 128; continue _fun0021;
case 126:
                var1 = var1["3aJN9M"];
                var7 = var2.bind(var3)(var1);
case 128:
                var3 = _closure1_slot48;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 63;
                var1 = var9[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.AutoArchiveDurationOptions;
                var1 = {};
                var10 = var9[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.FGjMZS;
                var9 = var10.bind(var11)(var9);
                var1['title'] = var9;
                var1['description'] = var7;
                var10 = var6.threadMetadata;
                var9 = null;
                var11 = var9 == var10;
                var7 = undefined;
                if(var11) { _fun0021_ip = 129; continue _fun0021 }
case 130:
                var7 = var10.autoArchiveDuration;
case 129:
                if(!(var9 == var7)) { _fun0021_ip = 131; continue _fun0021 }
case 132:
                var7 = _closure1_slot47;
case 131:
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
                var9 = this;
                var1 = var9.props;
                var10 = var1.channel;
                var12 = var1.canManageThread;
                var1 = var10.threadMetadata;
                var5 = null;
                var2 = var5 == var1;
                var1 = null;
                if(var2) { _fun0022_ip = 133; continue _fun0022 }
case 134:
                var4 = var10.type;
                var3 = _closure1_slot31;
                var3 = var3.PRIVATE_THREAD;
                var1 = null;
                if(!(var4 === var3)) { _fun0022_ip = 133; continue _fun0022 }
case 113:
                var6 = _closure1_slot48;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var3 = 57;
                var3 = var15[var3];
                var5 = undefined;
                var3 = var14.bind(var5)(var3);
                var4 = var3.TableRowGroup;
                var3 = {};
                var11 = 36;
                var7 = var15[var11];
                var7 = var14.bind(var5)(var7);
                var13 = var7.intl;
                var8 = var13.string;
                var7 = var15[var11];
                var7 = var14.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.cSyXJk;
                var7 = var8.bind(var13)(var7);
                var3['description'] = var7;
                var8 = _closure1_slot48;
                var2 = 58;
                var2 = var15[var2];
                var2 = var14.bind(var5)(var2);
                var7 = var2.TableSwitchRow;
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
case 133:
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
                var8 = var1.channel;
                var2 = var1.canManageChannels;
                var4 = _closure1_slot14;
                var3 = var4.has;
                var1 = var8.type;
                var3 = var3.bind(var4)(var1);
                var12 = null;
                var1 = null;
                if(!var3) { _fun0023_ip = 135; continue _fun0023 }
case 35:
                var1 = null;
                if(!var2) { _fun0023_ip = 135; continue _fun0023 }
case 80:
                var5 = _closure1_slot48;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 63;
                var2 = var13[var2];
                var4 = undefined;
                var2 = var10.bind(var4)(var2);
                var3 = var2.AutoArchiveDurationOptions;
                var2 = {};
                var11 = 36;
                var9 = var13[var11];
                var9 = var10.bind(var4)(var9);
                var15 = var9.intl;
                var14 = var15.string;
                var9 = var13[var11];
                var9 = var10.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.FGjMZS;
                var9 = var14.bind(var15)(var9);
                var2['title'] = var9;
                var9 = 64;
                var9 = var13[var9];
                var10 = var10.bind(var4)(var9);
                var9 = var10.getAutoArchiveDuration;
                var9 = var9.bind(var10)(var8, var12);
                var2['selected'] = var9;
                var2['channel'] = var8;
                var6 = var6.handleDefaultAutoArchiveDurationChange;
                var2['onSelectDuration'] = var6;
                var6 = var8.isForumLikeChannel;
                var6 = var6.bind(var8)();
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = var7[var11];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var11];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                if(var6) { _fun0023_ip = 136; continue _fun0023 }
case 137:
                var6 = var7.W3Noi9;
                var6 = var8.bind(var9)(var6);
                _fun0023_ip = 138; continue _fun0023;
case 136:
                var7 = var7.fyXclY;
                var6 = var8.bind(var9)(var7);
case 138:
                var2['description'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 135:
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
                var5 = this;
                var1 = var5.props;
                var2 = var1.channel;
                var1 = var1.canManageChannels;
                var3 = var2.isForumLikeChannel;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0024_ip = 62; continue _fun0024 }
case 139:
                if(var1) { _fun0024_ip = 134; continue _fun0024 }
case 62:
                var1 = null;
                return var1;
case 134:
                var1 = var2.getDefaultSortOrder;
                var6 = var1.bind(var2)();
                var4 = _closure1_slot49;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 65;
                var1 = var11[var1];
                var3 = undefined;
                var1 = var10.bind(var3)(var1);
                var2 = var1.TableRadioGroup;
                var1 = {};
                var12 = 36;
                var8 = var11[var12];
                var8 = var10.bind(var3)(var8);
                var13 = var8.intl;
                var9 = var13.string;
                var8 = var11[var12];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.gePre2;
                var8 = var9.bind(var13)(var8);
                var1['title'] = var8;
                var8 = var11[var12];
                var8 = var10.bind(var3)(var8);
                var13 = var8.intl;
                var9 = var13.string;
                var8 = var11[var12];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["165cVX"];
                var8 = var9.bind(var13)(var8);
                var1['description'] = var8;
                var1['value'] = var6;
                var5 = var5.handleDefaultSortOrderChange;
                var1['onChange'] = var5;
                var5 = false;
                var1['hasIcons'] = var5;
                var13 = _closure1_slot48;
                var6 = 66;
                var5 = var11[var6];
                var5 = var10.bind(var3)(var5);
                var8 = var5.TableRadioRow;
                var5 = {};
                var9 = var11[var12];
                var9 = var10.bind(var3)(var9);
                var15 = var9.intl;
                var14 = var15.string;
                var9 = var11[var12];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.ElZtzj;
                var9 = var14.bind(var15)(var9);
                var5['label'] = var9;
                var9 = 67;
                var14 = var11[var9];
                var14 = var10.bind(var3)(var14);
                var14 = var14.ThreadSortOrder;
                var14 = var14.LATEST_ACTIVITY;
                var5['value'] = var14;
                var8 = var13.bind(var3)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot48;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var7 = var6.TableRadioRow;
                var6 = {};
                var13 = var11[var12];
                var13 = var10.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var11[var12];
                var12 = var10.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.w28f3F;
                var12 = var13.bind(var14)(var12);
                var6['label'] = var12;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.ThreadSortOrder;
                var9 = var9.CREATION_DATE;
                var6['value'] = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
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
                var5 = this;
                var1 = var5.props;
                var2 = var1.channel;
                var1 = var1.canManageChannels;
                var3 = var2.isForumLikeChannel;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0025_ip = 62; continue _fun0025 }
case 139:
                if(var1) { _fun0025_ip = 134; continue _fun0025 }
case 62:
                var1 = null;
                return var1;
case 134:
                var1 = var2.getDefaultTagSetting;
                var6 = var1.bind(var2)();
                var4 = _closure1_slot49;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 65;
                var1 = var11[var1];
                var3 = undefined;
                var1 = var10.bind(var3)(var1);
                var2 = var1.TableRadioGroup;
                var1 = {};
                var12 = 36;
                var8 = var11[var12];
                var8 = var10.bind(var3)(var8);
                var13 = var8.intl;
                var9 = var13.string;
                var8 = var11[var12];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.Paxaug;
                var8 = var9.bind(var13)(var8);
                var1['title'] = var8;
                var8 = var11[var12];
                var8 = var10.bind(var3)(var8);
                var13 = var8.intl;
                var9 = var13.string;
                var8 = var11[var12];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.DqOl8J;
                var8 = var9.bind(var13)(var8);
                var1['description'] = var8;
                var1['value'] = var6;
                var5 = var5.handleDefaultTagSettingChange;
                var1['onChange'] = var5;
                var5 = false;
                var1['hasIcons'] = var5;
                var13 = _closure1_slot48;
                var6 = 66;
                var5 = var11[var6];
                var5 = var10.bind(var3)(var5);
                var8 = var5.TableRadioRow;
                var5 = {};
                var9 = var11[var12];
                var9 = var10.bind(var3)(var9);
                var15 = var9.intl;
                var14 = var15.string;
                var9 = var11[var12];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.rQ0ctQ;
                var9 = var14.bind(var15)(var9);
                var5['label'] = var9;
                var9 = 68;
                var14 = var11[var9];
                var14 = var10.bind(var3)(var14);
                var14 = var14.ThreadSearchTagSetting;
                var14 = var14.MATCH_SOME;
                var5['value'] = var14;
                var8 = var13.bind(var3)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot48;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var7 = var6.TableRadioRow;
                var6 = {};
                var13 = var11[var12];
                var13 = var10.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var11[var12];
                var12 = var10.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.FCXUu0;
                var12 = var13.bind(var14)(var12);
                var6['label'] = var12;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.ThreadSearchTagSetting;
                var9 = var9.MATCH_ALL;
                var6['value'] = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
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
                var13 = this;
                var1 = var13.props;
                var14 = var1.channel;
                var12 = var1.canManageChannels;
                var3 = var1.guild;
                var2 = _closure1_slot13;
                var1 = var14.type;
                var7 = undefined;
                var1 = var2.bind(var7)(var1);
                if(!var1) { _fun0026_ip = 140; continue _fun0026 }
case 141:
                var1 = null;
                if(!(var1 != var3)) { _fun0026_ip = 140; continue _fun0026 }
case 142:
                var5 = var3.features;
                var4 = var5.has;
                var2 = _closure1_slot33;
                var2 = var2.NEWS;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0026_ip = 140; continue _fun0026 }
case 143:
                var4 = var14.id;
                var5 = var1 == var3;
                var2 = undefined;
                if(var5) { _fun0026_ip = 144; continue _fun0026 }
case 145:
                var2 = var3.rulesChannelId;
case 144:
                if(!(var4 !== var2)) { _fun0026_ip = 140; continue _fun0026 }
case 146:
                var2 = var14.id;
                var4 = var1 == var3;
                var1 = undefined;
                if(var4) { _fun0026_ip = 147; continue _fun0026 }
case 41:
                var1 = var3.publicUpdatesChannelId;
case 147:
                if(!(var2 !== var1)) { _fun0026_ip = 140; continue _fun0026 }
case 148:
                var1 = new Array(0);
                var3 = var1.push;
                var6 = _closure1_slot48;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 57;
                var2 = var17[var2];
                var2 = var16.bind(var7)(var2);
                var5 = var2.TableRowGroup;
                var4 = {};
                var9 = _closure1_slot49;
                var8 = _closure1_slot50;
                var2 = {};
                var11 = 36;
                var15 = var17[var11];
                var15 = var16.bind(var7)(var15);
                var20 = var15.intl;
                var19 = var20.format;
                var15 = var17[var11];
                var15 = var16.bind(var7)(var15);
                var15 = var15.t;
                var18 = var15.tI7KNX;
                var15 = {};
                var22 = _closure1_slot1;
                var21 = 69;
                var21 = var17[var21];
                var23 = var22.bind(var7)(var21);
                var22 = var23.getArticleURL;
                var21 = _closure1_slot35;
                var21 = var21.ANNOUNCEMENT_CHANNELS;
                var21 = var22.bind(var23)(var21);
                var15['documentationLink'] = var21;
                var18 = var19.bind(var20)(var18, var15);
                var15 = new Array(3);
                var15[0] = var18;
                var18 = '\n\n';
                var15[1] = var18;
                var18 = var17[var11];
                var18 = var16.bind(var7)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var17[var11];
                var18 = var16.bind(var7)(var18);
                var18 = var18.t;
                var18 = var18["2Ab4Id"];
                var18 = var19.bind(var20)(var18);
                var15[2] = var18;
                var2['children'] = var15;
                var2 = var9.bind(var7)(var8, var2);
                var4['description'] = var2;
                var9 = _closure1_slot48;
                var2 = 58;
                var2 = var17[var2];
                var2 = var16.bind(var7)(var2);
                var8 = var2.TableSwitchRow;
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
case 140:
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
                var17 = this;
                var2 = _closure1_slot52;
                var1 = var17.context;
                var7 = undefined;
                var22 = var2.bind(var7)(var1);
                var2 = var17.props;
                var20 = var2.channel;
                var1 = var2.canManageChannels;
                var4 = var2.guild;
                var2 = var17.showVoiceSettings;
                var2 = var2.bind(var17)();
                if(!var2) { _fun0027_ip = 80; continue _fun0027 }
case 77:
                if(var1) { _fun0027_ip = 114; continue _fun0027 }
case 80:
                var1 = null;
                return var1;
case 114:
                var1 = new Array(0);
                var15 = _closure1_slot0;
                var23 = _closure1_slot2;
                var2 = 38;
                var2 = var23[var2];
                var3 = var15.bind(var7)(var2);
                var2 = var3.getBitrateLimit;
                var18 = var2.bind(var3)(var4, var20);
                var3 = var1.push;
                var6 = _closure1_slot48;
                var2 = 57;
                var2 = var23[var2];
                var2 = var15.bind(var7)(var2);
                var5 = var2.TableRowGroup;
                var4 = {};
                var24 = 36;
                var2 = var23[var24];
                var2 = var15.bind(var7)(var2);
                var10 = var2.intl;
                var9 = var10.format;
                var2 = var23[var24];
                var2 = var15.bind(var7)(var2);
                var2 = var2.t;
                var8 = var2.SbQJk5;
                var2 = {};
                var11 = _closure1_slot28;
                var28 = 1000;
                var11 = var11 / var28;
                var2['bitrate'] = var11;
                var2 = var9.bind(var10)(var8, var2);
                var4['description'] = var2;
                var9 = _closure1_slot49;
                var2 = 61;
                var2 = var23[var2];
                var2 = var15.bind(var7)(var2);
                var8 = var2.Card;
                var2 = {};
                var12 = _closure1_slot49;
                var11 = _closure1_slot10;
                var10 = {};
                var13 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
                var10['style'] = var13;
                var21 = _closure1_slot48;
                var14 = 43;
                var13 = var23[var14];
                var13 = var15.bind(var7)(var13);
                var16 = var13.Text;
                var13 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
                var25 = var23[var24];
                var25 = var15.bind(var7)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var23[var24];
                var24 = var15.bind(var7)(var24);
                var24 = var24.t;
                var24 = var24.w2d0vU;
                var24 = var25.bind(var26)(var24);
                var13['children'] = var24;
                var16 = var21.bind(var7)(var16, var13);
                var13 = new Array(2);
                var13[0] = var16;
                var24 = _closure1_slot48;
                var14 = var23[var14];
                var14 = var15.bind(var7)(var14);
                var16 = var14.Text;
                var14 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                var21 = global;
                var27 = var21.Math;
                var26 = var27.round;
                var25 = var20.bitrate;
                var25 = var25 / var28;
                var28 = var26.bind(var27)(var25);
                var25 = var21.HermesInternal;
                var27 = var25.concat;
                var26 = '';
                var25 = 'kbps';
                var25 = var27.bind(var26)(var28, var25);
                var14['children'] = var25;
                var14 = var24.bind(var7)(var16, var14);
                var13[1] = var14;
                var10['children'] = var13;
                var11 = var12.bind(var7)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot48;
                var12 = _closure1_slot10;
                var11 = {};
                var14 = var22.sliderWrapper;
                var11['style'] = var14;
                var16 = _closure1_slot48;
                var14 = 62;
                var14 = var23[var14];
                var14 = var15.bind(var7)(var14);
                var15 = var14.Slider;
                var14 = {};
                var22 = var22.slider;
                var14['style'] = var22;
                var22 = var21.Math;
                var21 = var22.min;
                var20 = var20.bitrate;
                var20 = var21.bind(var22)(var20, var18);
                var14['value'] = var20;
                var19 = _closure1_slot29;
                var14['minimumValue'] = var19;
                var14['maximumValue'] = var18;
                var17 = var17.handleBitRateChange;
                var14['onValueChange'] = var17;
                var14 = var16.bind(var7)(var15, var14);
                var11['children'] = var14;
                var11 = var13.bind(var7)(var12, var11);
                var10[1] = var11;
                var2['children'] = var10;
                var2 = var9.bind(var7)(var8, var2);
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
                var2 = this;
                var1 = var2.props;
                var8 = var1.channel;
                var1 = var1.canManageChannels;
                var3 = var2.showVoiceSettings;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0028_ip = 62; continue _fun0028 }
case 139:
                if(var1) { _fun0028_ip = 134; continue _fun0028 }
case 62:
                var1 = null;
                return var1;
case 134:
                var1 = new Array(0);
                var3 = var1.push;
                var7 = _closure1_slot49;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 65;
                var4 = var10[var4];
                var6 = undefined;
                var4 = var11.bind(var6)(var4);
                var5 = var4.TableRadioGroup;
                var4 = {};
                var16 = 36;
                var12 = var10[var16];
                var12 = var11.bind(var6)(var12);
                var14 = var12.intl;
                var13 = var14.string;
                var12 = var10[var16];
                var12 = var11.bind(var6)(var12);
                var12 = var12.t;
                var12 = var12.jhJEJs;
                var12 = var13.bind(var14)(var12);
                var4['title'] = var12;
                var12 = var10[var16];
                var12 = var11.bind(var6)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var10 = var10[var16];
                var10 = var11.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10.c5W7Ss;
                var10 = {};
                var10 = var12.bind(var13)(var11, var10);
                var4['description'] = var10;
                var8 = var8.videoQualityMode;
                var10 = null;
                if(!(var10 == var8)) { _fun0028_ip = 149; continue _fun0028 }
case 16:
                var10 = _closure1_slot42;
                var8 = var10.AUTO;
case 149:
                var4['value'] = var8;
                var2 = var2.handleVideoQualityModeChange;
                var4['onChange'] = var2;
                var2 = false;
                var4['hasIcons'] = var2;
                var13 = _closure1_slot48;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 66;
                var2 = var12[var8];
                var2 = var15.bind(var6)(var2);
                var10 = var2.TableRadioRow;
                var2 = {};
                var11 = var12[var16];
                var11 = var15.bind(var6)(var11);
                var17 = var11.intl;
                var14 = var17.string;
                var11 = var12[var16];
                var11 = var15.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11.jjKYpu;
                var11 = var14.bind(var17)(var11);
                var2['label'] = var11;
                var11 = _closure1_slot42;
                var14 = var11.AUTO;
                var2['value'] = var14;
                var10 = var13.bind(var6)(var10, var2);
                var2 = new Array(2);
                var2[0] = var10;
                var10 = _closure1_slot48;
                var8 = var12[var8];
                var8 = var15.bind(var6)(var8);
                var9 = var8.TableRadioRow;
                var8 = {};
                var13 = var12[var16];
                var13 = var15.bind(var6)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var6)(var12);
                var12 = var12.t;
                var12 = var12["7jOoJE"];
                var12 = var13.bind(var14)(var12);
                var8['label'] = var12;
                var11 = var11.FULL;
                var8['value'] = var11;
                var8 = var10.bind(var6)(var9, var8);
                var2[1] = var8;
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
                var17 = this;
                var2 = _closure1_slot52;
                var1 = var17.context;
                var7 = undefined;
                var22 = var2.bind(var7)(var1);
                var1 = var17.props;
                var20 = var1.channel;
                var1 = var1.canManageChannels;
                var2 = var17.showVoiceSettings;
                var2 = var2.bind(var17)();
                if(!var2) { _fun0029_ip = 110; continue _fun0029 }
case 35:
                if(var1) { _fun0029_ip = 142; continue _fun0029 }
case 110:
                var1 = null;
                return var1;
case 142:
                var1 = new Array(0);
                var21 = global;
                var4 = var21.Math;
                var3 = var4.round;
                var2 = var20.userLimit;
                var6 = var3.bind(var4)(var2);
                var19 = 0;
                if(!(var19 !== var6)) { _fun0029_ip = 150; continue _fun0029 }
case 83:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 36;
                var4 = var8[var2];
                var4 = var3.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var8[var2];
                var2 = var3.bind(var7)(var2);
                var2 = var2.t;
                var3 = var2["3uHFUR"];
                var2 = {};
                var2['num'] = var6;
                var26 = var4.bind(var5)(var3, var2);
                _fun0029_ip = 151; continue _fun0029;
case 150:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 36;
                var3 = var6[var2];
                var3 = var5.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var6[var2];
                var2 = var5.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.XX5ciX;
                var26 = var3.bind(var4)(var2);
case 151:
                var2 = var20.isGuildStageVoice;
                var2 = var2.bind(var20)();
                if(var2) { _fun0029_ip = 17; continue _fun0029 }
case 18:
                var18 = _closure1_slot37;
                _fun0029_ip = 152; continue _fun0029;
case 17:
                var18 = _closure1_slot38;
case 152:
                var3 = var1.push;
                var6 = _closure1_slot48;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 57;
                var2 = var5[var2];
                var2 = var4.bind(var7)(var2);
                var5 = var2.TableRowGroup;
                var4 = {};
                var2 = var20.isGuildStageVoice;
                var2 = var2.bind(var20)();
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var27 = 36;
                var10 = var8[var27];
                var10 = var9.bind(var7)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var8[var27];
                var8 = var9.bind(var7)(var8);
                var8 = var8.t;
                if(var2) { _fun0029_ip = 153; continue _fun0029 }
case 73:
                var9 = var8["8yb3JT"];
                var2 = {};
                var2 = var10.bind(var11)(var9, var2);
                _fun0029_ip = 154; continue _fun0029;
case 153:
                var9 = var8.OqZI8D;
                var8 = {};
                var2 = var10.bind(var11)(var9, var8);
case 154:
                var4['description'] = var2;
                var9 = _closure1_slot49;
                var15 = _closure1_slot0;
                var23 = _closure1_slot2;
                var2 = 61;
                var2 = var23[var2];
                var2 = var15.bind(var7)(var2);
                var8 = var2.Card;
                var2 = {};
                var12 = _closure1_slot49;
                var11 = _closure1_slot10;
                var10 = {};
                var13 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
                var10['style'] = var13;
                var25 = _closure1_slot48;
                var16 = 43;
                var13 = var23[var16];
                var13 = var15.bind(var7)(var13);
                var24 = var13.Text;
                var13 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
                var28 = var23[var27];
                var28 = var15.bind(var7)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var27 = var23[var27];
                var27 = var15.bind(var7)(var27);
                var27 = var27.t;
                var27 = var27["/AoSGN"];
                var27 = var28.bind(var29)(var27);
                var13['children'] = var27;
                var24 = var25.bind(var7)(var24, var13);
                var13 = new Array(2);
                var13[0] = var24;
                var25 = _closure1_slot48;
                var16 = var23[var16];
                var16 = var15.bind(var7)(var16);
                var24 = var16.Text;
                var16 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                var16['children'] = var26;
                var16 = var25.bind(var7)(var24, var16);
                var13[1] = var16;
                var10['children'] = var13;
                var11 = var12.bind(var7)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot48;
                var12 = _closure1_slot10;
                var11 = {};
                var16 = var22.sliderWrapper;
                var11['style'] = var16;
                var16 = _closure1_slot48;
                var14 = 62;
                var14 = var23[var14];
                var14 = var15.bind(var7)(var14);
                var15 = var14.Slider;
                var14 = {};
                var22 = var22.slider;
                var14['style'] = var22;
                var22 = var21.Math;
                var21 = var22.min;
                var20 = var20.userLimit;
                var20 = var21.bind(var22)(var20, var18);
                var14['value'] = var20;
                var14['minimumValue'] = var19;
                var14['maximumValue'] = var18;
                var17 = var17.handleUserLimitChange;
                var14['onValueChange'] = var17;
                var14 = var16.bind(var7)(var15, var14);
                var11['children'] = var14;
                var11 = var13.bind(var7)(var12, var11);
                var10[1] = var11;
                var2['children'] = var10;
                var2 = var9.bind(var7)(var8, var2);
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
                var6 = this;
                var _closure3_slot0 = var6;
                var1 = var6.props;
                var5 = var1.regions;
                var3 = var1.channel;
                var _closure3_slot1 = var3;
                var2 = var1.canManageChannels;
                var4 = var1.guild;
                var1 = null;
                if(!(var1 != var4)) { _fun0030_ip = 155; continue _fun0030 }
case 141:
                var4 = var6.showVoiceSettings;
                var4 = var4.bind(var6)();
                if(!var4) { _fun0030_ip = 156; continue _fun0030 }
case 157:
                if(!var2) { _fun0030_ip = 156; continue _fun0030 }
case 94:
                var2 = var3.isGuildStageVoice;
                var2 = var2.bind(var3)();
                if(var2) { _fun0030_ip = 156; continue _fun0030 }
case 7:
                var12 = var1 == var5;
                if(var12) { _fun0030_ip = 158; continue _fun0030 }
case 159:
                var3 = var5.length;
                var2 = 0;
                var12 = var2 === var3;
case 158:
                var3 = var1 != var5;
                var2 = null;
                if(!var3) { _fun0030_ip = 28; continue _fun0030 }
case 160:
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
case 28:
                if(!(var1 == var2)) { _fun0030_ip = 161; continue _fun0030 }
case 30:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 36;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.JEmsap;
                var16 = var4.bind(var5)(var3);
                _fun0030_ip = 16; continue _fun0030;
case 161:
                var16 = var2.name;
case 16:
                var2 = new Array(0);
                var4 = var2.push;
                var8 = _closure1_slot48;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var3 = 57;
                var3 = var17[var3];
                var7 = undefined;
                var3 = var14.bind(var7)(var3);
                var6 = var3.TableRowGroup;
                var5 = {};
                var18 = 36;
                var3 = var17[var18];
                var3 = var14.bind(var7)(var3);
                var10 = var3.intl;
                var9 = var10.string;
                var3 = var17[var18];
                var3 = var14.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.Ms8bX+;
                var3 = var9.bind(var10)(var3);
                var5['title'] = var3;
                var3 = var17[var18];
                var3 = var14.bind(var7)(var3);
                var10 = var3.intl;
                var9 = var10.string;
                var3 = var17[var18];
                var3 = var14.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.dbTs+z;
                var3 = var9.bind(var10)(var3);
                var5['description'] = var3;
                var10 = _closure1_slot48;
                var13 = 70;
                var3 = var17[var13];
                var3 = var14.bind(var7)(var3);
                var9 = var3.TableRow;
                var3 = {};
                var19 = var17[var18];
                var19 = var14.bind(var7)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var17[var18];
                var18 = var14.bind(var7)(var18);
                var18 = var18.t;
                var18 = var18.Ms8bX+;
                var18 = var19.bind(var20)(var18);
                var3['label'] = var18;
                var15 = _closure1_slot48;
                var13 = var17[var13];
                var13 = var14.bind(var7)(var13);
                var13 = var13.TableRow;
                var14 = var13.TrailingText;
                var13 = {};
                var13['text'] = var16;
                var13 = var15.bind(var7)(var14, var13);
                var3['trailing'] = var13;
                var13 = true;
                var3['arrow'] = var13;
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
case 156:
                return var1;
case 155:
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
                if(!var1) { _fun0031_ip = 162; continue _fun0031 }
case 163:
                var2 = var6.guild_id;
                var1 = var3 != var2;
case 162:
                if(!var1) { _fun0031_ip = 77; continue _fun0031 }
case 164:
                var4 = _closure1_slot12;
                var3 = var4.has;
                var2 = var6.type;
                var1 = var3.bind(var4)(var2);
case 77:
                if(!var1) { _fun0031_ip = 6; continue _fun0031 }
case 80:
                var2 = var6.isGuildVocal;
                var2 = var2.bind(var6)();
                if(var2) { _fun0031_ip = 43; continue _fun0031 }
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
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = var1.props;
                var2 = var1.canManageRoles;
                var13 = var1.channel;
                var1 = null;
                if(!var2) { _fun0032_ip = 165; continue _fun0032 }
case 166:
                var5 = _closure1_slot49;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 72;
                var2 = var14[var2];
                var4 = undefined;
                var2 = var11.bind(var4)(var2);
                var3 = var2.Stack;
                var2 = {};
                var8 = _closure1_slot1;
                var6 = 28;
                var6 = var14[var6];
                var6 = var8.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_8;
                var2['spacing'] = var6;
                var9 = _closure1_slot48;
                var6 = 57;
                var6 = var14[var6];
                var6 = var11.bind(var4)(var6);
                var8 = var6.TableRowGroup;
                var6 = {};
                var12 = _closure1_slot48;
                var10 = 70;
                var10 = var14[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.TableRow;
                var10 = {};
                var14 = var13.type;
                var13 = _closure1_slot31;
                var13 = var13.GUILD_CATEGORY;
                if(!(var14 !== var13)) { _fun0032_ip = 130; continue _fun0032 }
case 167:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var13 = 36;
                var14 = var18[var13];
                var14 = var17.bind(var4)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var13 = var18[var13];
                var13 = var17.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.BAZMBn;
                var13 = var14.bind(var16)(var13);
                _fun0032_ip = 168; continue _fun0032;
case 130:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 36;
                var16 = var19[var14];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var19[var14];
                var14 = var18.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.PgkvDf;
                var13 = var16.bind(var17)(var14);
case 168:
                var10['label'] = var13;
                var13 = true;
                var10['arrow'] = var13;
                var18 = _closure1_slot48;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var16 = 73;
                var16 = var14[var16];
                var16 = var13.bind(var4)(var16);
                var17 = var16.ShieldUserIcon;
                var16 = {};
                var16 = var18.bind(var4)(var17, var16);
                var10['icon'] = var16;
                var15 = function onPress() {
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
                var10['onPress'] = var15;
                var10 = var12.bind(var4)(var11, var10);
                var6['children'] = var10;
                var8 = var9.bind(var4)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot48;
                var7 = 43;
                var7 = var14[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var10 = 36;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.UAoMCL;
                var10 = var11.bind(var12)(var10);
                var7['children'] = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 165:
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
                var6 = arg1;
                var2 = var6.length;
                var1 = 0;
                var2 = var2 > var1;
                var1 = null;
                if(!var2) { _fun0033_ip = 113; continue _fun0033 }
case 169:
                var5 = _closure1_slot48;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 57;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.TableRowGroup;
                var2 = {};
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 113:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'renderCommonSettingsSection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
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
                if(var5) { _fun0034_ip = 157; continue _fun0034 }
case 170:
                var7 = var6.isGuildStageVoice;
                var5 = var7.bind(var6)();
case 157:
                if(!var5) { _fun0034_ip = 18; continue _fun0034 }
case 94:
                var7 = var2.push;
                var12 = _closure1_slot48;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 70;
                var5 = var15[var5];
                var5 = var13.bind(var8)(var5);
                var11 = var5.TableRow;
                var10 = {};
                var5 = 36;
                var14 = var15[var5];
                var14 = var13.bind(var8)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var5 = var15[var5];
                var5 = var13.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.h850Ss;
                var5 = var14.bind(var16)(var5);
                var10['label'] = var5;
                var5 = true;
                var10['arrow'] = var5;
                var14 = _closure1_slot48;
                var5 = 74;
                var5 = var15[var5];
                var5 = var13.bind(var8)(var5);
                var13 = var5.BellIcon;
                var5 = {};
                var5 = var14.bind(var8)(var13, var5);
                var10['icon'] = var5;
                var5 = function onPress() {
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                        var3 = _closure3_slot1;
                        var1 = var3.isThread;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0035_ip = 171; continue _fun0035 }
case 172:
                        var5 = _closure3_slot0;
                        var4 = var5.pushScreen;
                        var1 = _closure1_slot30;
                        var1 = var1.NOTIFICATIONS;
                        var1 = var4.bind(var5)(var1);
                        _fun0035_ip = 7; continue _fun0035;
case 171:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 75;
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
case 18:
                var7 = _closure1_slot13;
                var5 = var6.type;
                var5 = var7.bind(var8)(var5);
                if(!var5) { _fun0034_ip = 173; continue _fun0034 }
case 174:
                var7 = var2.push;
                var12 = _closure1_slot48;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 70;
                var5 = var16[var5];
                var5 = var15.bind(var8)(var5);
                var11 = var5.TableRow;
                var10 = {};
                var5 = 36;
                var13 = var16[var5];
                var13 = var15.bind(var8)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var5 = var16[var5];
                var5 = var15.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.mp1N/2;
                var5 = var13.bind(var14)(var5);
                var10['label'] = var5;
                var5 = true;
                var10['arrow'] = var5;
                var14 = _closure1_slot48;
                var13 = _closure1_slot55;
                var5 = {};
                var15 = var6.id;
                var5['channelId'] = var15;
                var5 = var14.bind(var8)(var13, var5);
                var10['icon'] = var5;
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
case 173:
                if(!var4) { _fun0034_ip = 175; continue _fun0034 }
case 176:
                var7 = var6.type;
                var5 = _closure1_slot31;
                var5 = var5.GUILD_CATEGORY;
                var4 = var7 !== var5;
case 175:
                if(!var4) { _fun0034_ip = 177; continue _fun0034 }
case 178:
                var5 = var6.isThread;
                var5 = var5.bind(var6)();
                var4 = !var5;
case 177:
                if(!var4) { _fun0034_ip = 179; continue _fun0034 }
case 180:
                var4 = var2.push;
                var7 = _closure1_slot48;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 70;
                var5 = var12[var5];
                var5 = var10.bind(var8)(var5);
                var6 = var5.TableRow;
                var5 = {};
                var11 = 36;
                var13 = var12[var11];
                var13 = var10.bind(var8)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var11 = var12[var11];
                var11 = var10.bind(var8)(var11);
                var11 = var11.t;
                var11 = var11.ngRFjZ;
                var11 = var13.bind(var14)(var11);
                var5['label'] = var11;
                var11 = true;
                var5['arrow'] = var11;
                var11 = _closure1_slot48;
                var9 = 76;
                var9 = var12[var9];
                var9 = var10.bind(var8)(var9);
                var10 = var9.LinkIcon;
                var9 = {};
                var9 = var11.bind(var8)(var10, var9);
                var5['icon'] = var9;
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
case 179:
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
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = var1.props;
                var10 = var1.channel;
                var1 = var10.isForumChannel;
                var3 = var1.bind(var10)();
                var1 = null;
                if(!var3) { _fun0036_ip = 181; continue _fun0036 }
case 182:
                var6 = _closure1_slot48;
                var18 = _closure1_slot0;
                var16 = _closure1_slot2;
                var3 = 57;
                var3 = var16[var3];
                var5 = undefined;
                var3 = var18.bind(var5)(var3);
                var4 = var3.TableRowGroup;
                var3 = {};
                var21 = 36;
                var7 = var16[var21];
                var7 = var18.bind(var5)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = var16[var21];
                var7 = var18.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7.mOSViT;
                var7 = var8.bind(var9)(var7);
                var3['description'] = var7;
                var9 = _closure1_slot48;
                var12 = 70;
                var7 = var16[var12];
                var7 = var18.bind(var5)(var7);
                var8 = var7.TableRow;
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
                var15 = _closure1_slot48;
                var12 = var16[var12];
                var12 = var18.bind(var5)(var12);
                var12 = var12.TableRow;
                var13 = var12.TrailingText;
                var12 = {};
                var17 = var10.defaultForumLayout;
                var14 = 77;
                var16 = var16[var14];
                var16 = var18.bind(var5)(var16);
                var16 = var16.ForumLayout;
                var16 = var16.GRID;
                if(!(var17 !== var16)) { _fun0036_ip = 183; continue _fun0036 }
case 184:
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var21];
                var17 = var19.bind(var5)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var21];
                var16 = var19.bind(var5)(var16);
                var16 = var16.t;
                var16 = var16["4HXEZG"];
                var16 = var17.bind(var18)(var16);
                _fun0036_ip = 185; continue _fun0036;
case 183:
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = var17[var21];
                var18 = var20.bind(var5)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var5)(var17);
                var17 = var17.t;
                var17 = var17["8RswJG"];
                var16 = var18.bind(var19)(var17);
case 185:
                var12['text'] = var16;
                var12 = var15.bind(var5)(var13, var12);
                var7['trailing'] = var12;
                var12 = true;
                var7['arrow'] = var12;
                var12 = var10.defaultForumLayout;
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var14];
                var10 = var13.bind(var5)(var10);
                var10 = var10.ForumLayout;
                var10 = var10.GRID;
                if(!(var12 !== var10)) { _fun0036_ip = 186; continue _fun0036 }
case 187:
                var13 = _closure1_slot48;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 79;
                var10 = var14[var10];
                var10 = var12.bind(var5)(var10);
                var12 = var10.ListViewIcon;
                var10 = {};
                var10 = var13.bind(var5)(var12, var10);
                _fun0036_ip = 188; continue _fun0036;
case 186:
                var13 = _closure1_slot48;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 78;
                var11 = var14[var11];
                var11 = var12.bind(var5)(var11);
                var12 = var11.GridSquareIcon;
                var11 = {};
                var10 = var13.bind(var5)(var12, var11);
case 188:
                var7['icon'] = var10;
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
case 181:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'renderUncommonSettingsSection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3.props;
                var5 = var2.canManageWebhooks;
                var8 = undefined;
                var4 = var8 !== var5;
                if(!var4) { _fun0037_ip = 139; continue _fun0037 }
case 76:
                var4 = var5;
case 139:
                var _closure3_slot1 = var4;
                var6 = var2.channel;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 80;
                var2 = var7[var2];
                var5 = var5.bind(var8)(var2);
                var2 = var5.canUnlinkLobbyChannel;
                var5 = var2.bind(var5)(var6);
                var _closure3_slot2 = var5;
                var2 = new Array(0);
                if(var4) { _fun0037_ip = 189; continue _fun0037 }
case 115:
                var4 = var5;
case 189:
                if(!var4) { _fun0037_ip = 190; continue _fun0037 }
case 191:
                var4 = var2.push;
                var7 = _closure1_slot48;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 70;
                var5 = var12[var5];
                var5 = var10.bind(var8)(var5);
                var6 = var5.TableRow;
                var5 = {};
                var11 = 36;
                var13 = var12[var11];
                var13 = var10.bind(var8)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var11 = var12[var11];
                var11 = var10.bind(var8)(var11);
                var11 = var11.t;
                var11 = var11.CIsNZw;
                var11 = var13.bind(var14)(var11);
                var5['label'] = var11;
                var11 = true;
                var5['arrow'] = var11;
                var11 = _closure1_slot48;
                var9 = 81;
                var9 = var12[var9];
                var9 = var10.bind(var8)(var9);
                var10 = var9.PuzzlePieceIcon;
                var9 = {};
                var9 = var11.bind(var8)(var10, var9);
                var5['icon'] = var9;
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
case 190:
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
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var2 = var1.channel;
                var _closure3_slot0 = var2;
                var13 = var1.canManageThread;
                var11 = var1.isThreadModerator;
                var7 = var1.isLockedThread;
                var14 = var1.isArchivedThread;
                var15 = var1.canUnarchiveThread;
                var12 = var1.isForumPost;
                var5 = var1.hasJoinedThread;
                var4 = _closure1_slot49;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 57;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TableRowGroup;
                var1 = {};
                var6 = null;
                if(var5) { _fun0038_ip = 192; continue _fun0038 }
case 84:
                var17 = _closure1_slot48;
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var5 = 70;
                var5 = var21[var5];
                var5 = var19.bind(var3)(var5);
                var16 = var5.TableRow;
                var5 = {};
                var20 = _closure1_slot48;
                var18 = 82;
                var18 = var21[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.GroupPlusIcon;
                var18 = {};
                var18 = var20.bind(var3)(var19, var18);
                var5['icon'] = var18;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 36;
                var20 = var22[var18];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.t;
                if(var12) { _fun0038_ip = 129; continue _fun0038 }
case 193:
                var18 = var19["10kukS"];
                var18 = var20.bind(var21)(var18);
                _fun0038_ip = 194; continue _fun0038;
case 129:
                var19 = var19.ihLPiO;
                var18 = var20.bind(var21)(var19);
case 194:
                var5['label'] = var18;
                var18 = function onPress() {
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
                var5['onPress'] = var18;
                var6 = var17.bind(var3)(var16, var5);
case 192:
                var5 = new Array(6);
                var5[0] = var6;
                var6 = null;
                if(!var14) { _fun0038_ip = 195; continue _fun0038 }
case 135:
                var6 = null;
                if(!var15) { _fun0038_ip = 195; continue _fun0038 }
case 49:
                var17 = _closure1_slot48;
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var15 = 70;
                var15 = var21[var15];
                var15 = var19.bind(var3)(var15);
                var16 = var15.TableRow;
                var15 = {};
                var20 = _closure1_slot48;
                var18 = 84;
                var18 = var21[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.ClockIcon;
                var18 = {};
                var18 = var20.bind(var3)(var19, var18);
                var15['icon'] = var18;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 36;
                var20 = var22[var18];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.t;
                if(var12) { _fun0038_ip = 196; continue _fun0038 }
case 197:
                var18 = var19.S9E4G7;
                var18 = var20.bind(var21)(var18);
                _fun0038_ip = 198; continue _fun0038;
case 196:
                var19 = var19.cnRubV;
                var18 = var20.bind(var21)(var19);
case 198:
                var15['label'] = var18;
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
                var15['onPress'] = var18;
                var6 = var17.bind(var3)(var16, var15);
case 195:
                var5[1] = var6;
                var6 = null;
                if(var14) { _fun0038_ip = 199; continue _fun0038 }
case 200:
                var6 = null;
                if(!var13) { _fun0038_ip = 199; continue _fun0038 }
case 201:
                var15 = _closure1_slot48;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 70;
                var13 = var19[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var18 = _closure1_slot48;
                var16 = 85;
                var16 = var19[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.XLargeIcon;
                var16 = {};
                var16 = var18.bind(var3)(var17, var16);
                var13['icon'] = var16;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 36;
                var18 = var20[var16];
                var18 = var17.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.t;
                if(var12) { _fun0038_ip = 202; continue _fun0038 }
case 203:
                var16 = var17.wiIevd;
                var16 = var18.bind(var19)(var16);
                _fun0038_ip = 204; continue _fun0038;
case 202:
                var17 = var17.BTs4Kb;
                var16 = var18.bind(var19)(var17);
case 204:
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
case 199:
                var5[2] = var6;
                var6 = null;
                if(!var11) { _fun0038_ip = 205; continue _fun0038 }
case 206:
                var6 = null;
                if(!var7) { _fun0038_ip = 205; continue _fun0038 }
case 207:
                var15 = _closure1_slot48;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 70;
                var13 = var19[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var18 = _closure1_slot48;
                var16 = 86;
                var16 = var19[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.LockIcon;
                var16 = {};
                var16 = var18.bind(var3)(var17, var16);
                var13['icon'] = var16;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 36;
                var18 = var20[var16];
                var18 = var17.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.t;
                if(var12) { _fun0038_ip = 208; continue _fun0038 }
case 209:
                var16 = var17.jeyb/W;
                var16 = var18.bind(var19)(var16);
                _fun0038_ip = 210; continue _fun0038;
case 208:
                var17 = var17["/OKSxp"];
                var16 = var18.bind(var19)(var17);
case 210:
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
case 205:
                var5[3] = var6;
                var6 = null;
                if(!var11) { _fun0038_ip = 211; continue _fun0038 }
case 212:
                var6 = null;
                if(var7) { _fun0038_ip = 211; continue _fun0038 }
case 213:
                var11 = _closure1_slot48;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 70;
                var7 = var16[var7];
                var7 = var14.bind(var3)(var7);
                var8 = var7.TableRow;
                var7 = {};
                var15 = _closure1_slot48;
                var13 = 86;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.LockIcon;
                var13 = {};
                var13 = var15.bind(var3)(var14, var13);
                var7['icon'] = var13;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 36;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                if(var12) { _fun0038_ip = 214; continue _fun0038 }
case 215:
                var12 = var13.HoCqm8;
                var12 = var14.bind(var15)(var12);
                _fun0038_ip = 216; continue _fun0038;
case 214:
                var13 = var13.Ur/0Na;
                var12 = var14.bind(var15)(var13);
case 216:
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
case 211:
                var5[4] = var6;
                var8 = _closure1_slot48;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 70;
                var6 = var14[var6];
                var6 = var13.bind(var3)(var6);
                var7 = var6.TableRow;
                var6 = {};
                var12 = _closure1_slot48;
                var10 = 76;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var11 = var10.LinkIcon;
                var10 = {};
                var10 = var12.bind(var3)(var11, var10);
                var6['icon'] = var10;
                var10 = 36;
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
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
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
                if(!var4) { _fun0039_ip = 80; continue _fun0039 }
case 77:
                var2 = var1;
case 80:
                var1 = null;
                if(!var2) { _fun0039_ip = 217; continue _fun0039 }
case 29:
                var4 = var3.type;
                var2 = _closure1_slot31;
                var2 = var2.GUILD_CATEGORY;
                if(!(var4 !== var2)) { _fun0039_ip = 152; continue _fun0039 }
case 83:
                if(var14) { _fun0039_ip = 218; continue _fun0039 }
case 191:
                var2 = var3.isThread;
                var5 = var2.bind(var3)();
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 36;
                var3 = var11[var2];
                var8 = undefined;
                var3 = var9.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var11[var2];
                var2 = var9.bind(var8)(var2);
                var2 = var2.t;
                if(var5) { _fun0039_ip = 167; continue _fun0039 }
case 219:
                var5 = var2["8D8Rsb"];
                var11 = var3.bind(var4)(var5);
                _fun0039_ip = 220; continue _fun0039;
case 167:
                var2 = var2.H7vTe2;
                var11 = var3.bind(var4)(var2);
case 220:
                _fun0039_ip = 221; continue _fun0039;
case 218:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 36;
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
case 221:
                _fun0039_ip = 222; continue _fun0039;
case 152:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 36;
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
case 222:
                var5 = _closure1_slot49;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 57;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.TableRowGroup;
                var2 = {};
                var7 = null;
                if(!var6) { _fun0039_ip = 156; continue _fun0039 }
case 223:
                var9 = _closure1_slot48;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = 70;
                var6 = var18[var6];
                var6 = var16.bind(var4)(var6);
                var8 = var6.TableRow;
                var6 = {};
                var15 = 'danger';
                var6['variant'] = var15;
                var17 = _closure1_slot48;
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
                var15 = 36;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                if(var14) { _fun0039_ip = 224; continue _fun0039 }
case 186:
                var14 = var15.fa/84m;
                var14 = var16.bind(var17)(var14);
                _fun0039_ip = 225; continue _fun0039;
case 224:
                var15 = var15["2LsZdT"];
                var14 = var16.bind(var17)(var15);
case 225:
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
case 156:
                var6 = new Array(2);
                var6[0] = var7;
                var9 = _closure1_slot48;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 70;
                var7 = var15[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.TableRow;
                var7 = {};
                var14 = 'danger';
                var7['variant'] = var14;
                var14 = _closure1_slot48;
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
case 217:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'renderForumTags';
        var5['key'] = var7;
        var7 = function value() {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var12 = this;
                var _closure3_slot0 = var12;
                var2 = _closure1_slot52;
                var1 = var12.context;
                var4 = undefined;
                var24 = var2.bind(var4)(var1);
                var1 = var12.props;
                var15 = var1.channel;
                var14 = var1.canManageChannels;
                var _closure3_slot1 = var14;
                var1 = var15.isForumLikeChannel;
                var1 = var1.bind(var15)();
                var7 = null;
                if(var1) { _fun0040_ip = 157; continue _fun0040 }
case 114:
                return var7;
case 157:
                var3 = var15.availableTags;
                var1 = var7 == var3;
                var16 = undefined;
                if(var1) { _fun0040_ip = 226; continue _fun0040 }
case 227:
                var2 = var3.every;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.moderated;
                    return var1;
                };
                var16 = var2.bind(var3)(var1);
case 226:
                var30 = var14;
                if(!var30) { _fun0040_ip = 228; continue _fun0040 }
case 145:
                var1 = var15.availableTags;
                var2 = var1.length;
                var1 = _closure1_slot46;
                var30 = var2 < var1;
case 228:
                var1 = var15.availableTags;
                var1 = var1.length;
                var9 = 0;
                var10 = var1 > var9;
                var2 = var12.getError;
                var1 = 'available_tags';
                var11 = var2.bind(var12)(var1);
                var3 = _closure1_slot49;
                var23 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = 72;
                var1 = var18[var1];
                var1 = var23.bind(var4)(var1);
                var2 = var1.Stack;
                var1 = {};
                var6 = _closure1_slot1;
                var42 = 28;
                var5 = var18[var42];
                var5 = var6.bind(var4)(var5);
                var5 = var5.spacing;
                var5 = var5.PX_12;
                var1['spacing'] = var5;
                var17 = _closure1_slot48;
                var6 = 57;
                var5 = var18[var6];
                var5 = var23.bind(var4)(var5);
                var8 = var5.TableRowGroup;
                var5 = {};
                var19 = 36;
                var21 = var18[var19];
                var21 = var23.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var18 = var18[var19];
                var18 = var23.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.P/y+sj;
                var18 = var21.bind(var22)(var18);
                var5['title'] = var18;
                var18 = undefined;
                if(var10) { _fun0040_ip = 229; continue _fun0040 }
case 230:
                var25 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = var21[var19];
                var22 = var25.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var19];
                var21 = var25.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21["3v8kZH"];
                var18 = var22.bind(var23)(var21);
case 229:
                var5['description'] = var18;
                var22 = _closure1_slot48;
                var21 = _closure1_slot10;
                var18 = {};
                var23 = var24.tagsWrapper;
                var18['style'] = var23;
                var23 = null;
                if(!var10) { _fun0040_ip = 231; continue _fun0040 }
case 232:
                var27 = _closure1_slot49;
                var26 = _closure1_slot50;
                var25 = {};
                var31 = var15.availableTags;
                var29 = var31.map;
                var28 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure1_slot48;
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
                var29 = var29.bind(var31)(var28);
                var28 = new Array(2);
                var28[0] = var29;
                var29 = null;
                if(!var30) { _fun0040_ip = 233; continue _fun0040 }
case 234:
                var32 = _closure1_slot48;
                var31 = _closure1_slot10;
                var30 = {};
                var33 = var24.addTagIconButtonWrapper;
                var30['style'] = var33;
                var35 = _closure1_slot48;
                var39 = _closure1_slot0;
                var36 = _closure1_slot2;
                var33 = 91;
                var33 = var36[var33];
                var33 = var39.bind(var4)(var33);
                var34 = var33.IconButton;
                var33 = {};
                var41 = _closure1_slot48;
                var37 = 92;
                var37 = var36[var37];
                var37 = var39.bind(var4)(var37);
                var40 = var37.PlusSmallIcon;
                var38 = {};
                var37 = 'sm';
                var38['size'] = var37;
                var43 = _closure1_slot1;
                var42 = var36[var42];
                var42 = var43.bind(var4)(var42);
                var42 = var42.colors;
                var42 = var42.WHITE;
                var38['color'] = var42;
                var38 = var41.bind(var4)(var40, var38);
                var33['icon'] = var38;
                var33['size'] = var37;
                var37 = function onPress() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePressTag;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var33['onPress'] = var37;
                var37 = var36[var19];
                var37 = var39.bind(var4)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var36[var19];
                var36 = var39.bind(var4)(var36);
                var36 = var36.t;
                var36 = var36["/jubeD"];
                var36 = var37.bind(var38)(var36);
                var33['accessibilityLabel'] = var36;
                var33 = var35.bind(var4)(var34, var33);
                var30['children'] = var33;
                var29 = var32.bind(var4)(var31, var30);
case 233:
                var28[1] = var29;
                var25['children'] = var28;
                var23 = var27.bind(var4)(var26, var25);
case 231:
                var18['children'] = var23;
                var18 = var22.bind(var4)(var21, var18);
                var5['children'] = var18;
                var8 = var17.bind(var4)(var8, var5);
                var5 = new Array(4);
                var5[0] = var8;
                var8 = null;
                if(var10) { _fun0040_ip = 235; continue _fun0040 }
case 105:
                var18 = _closure1_slot48;
                var26 = _closure1_slot0;
                var23 = _closure1_slot2;
                var10 = 93;
                var10 = var23[var10];
                var10 = var26.bind(var4)(var10);
                var17 = var10.PressableOpacity;
                var10 = {};
                var21 = !var14;
                var10['disabled'] = var21;
                var20 = function onPress() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePressTag;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var10['onPress'] = var20;
                var20 = var24.createTagButton;
                var10['style'] = var20;
                var20 = 'button';
                var10['accessibilityRole'] = var20;
                var22 = _closure1_slot48;
                var20 = 43;
                var20 = var23[var20];
                var20 = var26.bind(var4)(var20);
                var21 = var20.Text;
                var20 = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
                var24 = var24.createTagButtonText;
                var20['style'] = var24;
                var24 = var23[var19];
                var24 = var26.bind(var4)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var23[var19];
                var23 = var26.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.F4is7L;
                var23 = var24.bind(var25)(var23);
                var20['children'] = var23;
                var20 = var22.bind(var4)(var21, var20);
                var10['children'] = var20;
                var8 = var18.bind(var4)(var17, var10);
case 235:
                var5[1] = var8;
                var7 = var7 != var11;
                if(!var7) { _fun0040_ip = 236; continue _fun0040 }
case 237:
                var8 = var11.length;
                var7 = var8 > var9;
case 236:
                if(!var7) { _fun0040_ip = 238; continue _fun0040 }
case 239:
                var10 = _closure1_slot48;
                var9 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 43;
                var8 = var17[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {'variant': 'text-sm/normal', 'color': 'text-feedback-critical'};
                var8['children'] = var11;
                var7 = var10.bind(var4)(var9, var8);
case 238:
                var5[2] = var7;
                var8 = _closure1_slot48;
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var6 = var17[var6];
                var6 = var10.bind(var4)(var6);
                var7 = var6.TableRowGroup;
                var6 = {};
                var11 = _closure1_slot48;
                var9 = 58;
                var9 = var17[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.TableSwitchRow;
                var9 = {};
                var14 = !var14;
                if(var14) { _fun0040_ip = 240; continue _fun0040 }
case 241:
                var14 = var16;
case 240:
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
                var13 = _closure1_slot43;
                var13 = var13.REQUIRE_TAG;
                var13 = var14.bind(var15)(var13);
                var9['value'] = var13;
                var12 = var12.handleToggleRequireTag;
                var9['onValueChange'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[3] = var6;
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
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var9 = this;
                var1 = var9.props;
                var12 = var1.channel;
                var11 = var1.canManageChannels;
                var1 = var12.isMediaChannel;
                var2 = var1.bind(var12)();
                var1 = null;
                if(!var2) { _fun0041_ip = 192; continue _fun0041 }
case 182:
                var5 = _closure1_slot48;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = 57;
                var2 = var16[var2];
                var4 = undefined;
                var2 = var15.bind(var4)(var2);
                var3 = var2.TableRowGroup;
                var2 = {};
                var8 = _closure1_slot48;
                var6 = 58;
                var6 = var16[var6];
                var6 = var15.bind(var4)(var6);
                var7 = var6.TableSwitchRow;
                var6 = {};
                var11 = !var11;
                var6['disabled'] = var11;
                var11 = 36;
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
                var10 = _closure1_slot43;
                var10 = var10.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                var10 = var11.bind(var12)(var10);
                var10 = !var10;
                var6['value'] = var10;
                var9 = var9.handleToggleShowMediaDownloadOptions;
                var6['onValueChange'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 192:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'renderCategory';
        var5['key'] = var7;
        var7 = function value() {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var3 = var1.props;
                var2 = var3.hasCategories;
                var5 = var3.category;
                var1 = var3.channel;
                var10 = var3.canManageParent;
                if(!var2) { _fun0042_ip = 242; continue _fun0042 }
case 36:
                var2 = var1.type;
                var1 = _closure1_slot31;
                var1 = var1.GUILD_CATEGORY;
                if(!(var2 !== var1)) { _fun0042_ip = 242; continue _fun0042 }
case 243:
                var1 = null;
                if(!(var1 != var5)) { _fun0042_ip = 244; continue _fun0042 }
case 5:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 46;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.computeChannelName;
                var2 = _closure1_slot25;
                var1 = _closure1_slot24;
                var13 = var3.bind(var4)(var5, var2, var1);
                _fun0042_ip = 245; continue _fun0042;
case 244:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 36;
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
case 245:
                var4 = _closure1_slot48;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 57;
                var1 = var14[var1];
                var3 = undefined;
                var1 = var11.bind(var3)(var1);
                var2 = var1.TableRowGroup;
                var1 = {};
                var7 = _closure1_slot48;
                var8 = 70;
                var5 = var14[var8];
                var5 = var11.bind(var3)(var5);
                var6 = var5.TableRow;
                var5 = {};
                var17 = _closure1_slot48;
                var15 = 94;
                var15 = var14[var15];
                var15 = var11.bind(var3)(var15);
                var16 = var15.FolderPlusIcon;
                var15 = {};
                var15 = var17.bind(var3)(var16, var15);
                var5['icon'] = var15;
                var15 = 36;
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
                var12 = _closure1_slot48;
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
                if(!var10) { _fun0042_ip = 246; continue _fun0042 }
case 247:
                var8 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.pushScreen;
                    var1 = _closure1_slot30;
                    var1 = var1.CHANGE_CATEGORY;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
case 246:
                var5['onPress'] = var8;
                var5 = var7.bind(var3)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
case 242:
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
            var10 = this;
            var2 = _closure1_slot52;
            var1 = var10.context;
            var4 = undefined;
            var8 = var2.bind(var4)(var1);
            var3 = _closure1_slot48;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 95;
            var1 = var12[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Form;
            var1 = {};
            var7 = _closure1_slot49;
            var5 = 72;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var11 = _closure1_slot1;
            var9 = 28;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_24;
            var5['spacing'] = var9;
            var8 = var8.stackPadding;
            var5['style'] = var8;
            var8 = var10.renderChannelInfo;
            var9 = var8.bind(var10)();
            var8 = new Array(7);
            var8[0] = var9;
            var9 = var10.renderCommonSettingsSection;
            var9 = var9.bind(var10)();
            var8[1] = var9;
            var9 = var10.renderThreadManagementActions;
            var9 = var9.bind(var10)();
            var8[2] = var9;
            var9 = var10.renderSlowmode;
            var9 = var9.bind(var10)();
            var8[3] = var9;
            var9 = var10.renderAutoArchiveDuration;
            var9 = var9.bind(var10)();
            var8[4] = var9;
            var9 = var10.renderInvitable;
            var9 = var9.bind(var10)();
            var8[5] = var9;
            var9 = var10.renderDeleteButton;
            var9 = var9.bind(var10)();
            var8[6] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'renderChannelSettings';
        var5['key'] = var7;
        var7 = function value() {
            var10 = this;
            var2 = _closure1_slot52;
            var1 = var10.context;
            var4 = undefined;
            var8 = var2.bind(var4)(var1);
            var3 = _closure1_slot48;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 95;
            var1 = var12[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Form;
            var1 = {};
            var7 = _closure1_slot49;
            var5 = 72;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var11 = _closure1_slot1;
            var9 = 28;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_24;
            var5['spacing'] = var9;
            var8 = var8.stackPadding;
            var5['style'] = var8;
            var8 = var10.renderChannelInfo;
            var9 = var8.bind(var10)();
            var8 = new Array(19);
            var8[0] = var9;
            var9 = var10.renderForumTags;
            var9 = var9.bind(var10)();
            var8[1] = var9;
            var9 = var10.renderCategory;
            var9 = var9.bind(var10)();
            var8[2] = var9;
            var9 = var10.renderPermissions;
            var9 = var9.bind(var10)();
            var8[3] = var9;
            var9 = var10.renderCommonSettingsSection;
            var9 = var9.bind(var10)();
            var8[4] = var9;
            var9 = var10.renderDefaultForumLayout;
            var9 = var9.bind(var10)();
            var8[5] = var9;
            var9 = var10.renderDefaultSortOrder;
            var9 = var9.bind(var10)();
            var8[6] = var9;
            var9 = var10.renderDefaultTagSetting;
            var9 = var9.bind(var10)();
            var8[7] = var9;
            var9 = var10.renderAnnouncement;
            var9 = var9.bind(var10)();
            var8[8] = var9;
            var9 = var10.renderNsfwConfig;
            var9 = var9.bind(var10)();
            var8[9] = var9;
            var9 = var10.renderSlowmode;
            var9 = var9.bind(var10)();
            var8[10] = var9;
            var9 = var10.renderDefaultAutoArchiveDuration;
            var9 = var9.bind(var10)();
            var8[11] = var9;
            var9 = var10.renderBitrateSettings;
            var9 = var9.bind(var10)();
            var8[12] = var9;
            var9 = var10.renderVideoQualityModeSettings;
            var9 = var9.bind(var10)();
            var8[13] = var9;
            var9 = var10.renderUserLimitSettings;
            var9 = var9.bind(var10)();
            var8[14] = var9;
            var9 = var10.renderRegionOverride;
            var9 = var9.bind(var10)();
            var8[15] = var9;
            var9 = var10.renderUncommonSettingsSection;
            var9 = var9.bind(var10)();
            var8[16] = var9;
            var9 = var10.renderShowMediaDownloadOptions;
            var9 = var9.bind(var10)();
            var8[17] = var9;
            var9 = var10.renderDeleteButton;
            var9 = var9.bind(var10)();
            var8[18] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var3 = this;
                var5 = _closure1_slot52;
                var2 = var3.context;
                var4 = undefined;
                var6 = var5.bind(var4)(var2);
                var2 = var3.props;
                var2 = var2.isThread;
                if(var2) { _fun0043_ip = 171; continue _fun0043 }
case 27:
                var2 = var3.renderChannelSettings;
                var5 = var2.bind(var3)();
                _fun0043_ip = 9; continue _fun0043;
case 171:
                var2 = var3.renderThreadSettings;
                var5 = var2.bind(var3)();
case 9:
                var3 = _closure1_slot48;
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
    var _closure1_slot53 = var8;
    var5 = 96;
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
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var17 = var2.autoFocusElement;
            var _closure2_slot1 = var17;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 97;
            var3 = var8[var3];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = var4.useNavigation;
            var15 = var3.bind(var4)();
            var _closure2_slot2 = var15;
            var6 = 29;
            var3 = var8[var6];
            var11 = var7.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot18;
            var9 = new Array(1);
            var9[0] = var4;
            var3 = function() {
                var3 = _closure1_slot18;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var10.bind(var11)(var9, var3);
            var _closure2_slot3 = var9;
            var3 = var8[var6];
            var13 = var7.bind(var5)(var3);
            var11 = var13.useStateFromStores;
            var12 = _closure1_slot17;
            var10 = new Array(1);
            var10[0] = var12;
            var3 = function() {
                var2 = _closure1_slot17;
                var1 = var2.getChannel;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var11.bind(var13)(var10, var3);
            var3 = 71;
            var10 = var8[var3];
            var11 = var7.bind(var5)(var10);
            var10 = var11.useIsThreadModerator;
            var14 = var10.bind(var11)(var9);
            var10 = var8[var6];
            var18 = var7.bind(var5)(var10);
            var13 = var18.useStateFromStoresObject;
            var10 = _closure1_slot11;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var5 = null;
                    var6 = var5 != var2;
                    var4 = undefined;
                    if(!var6) { _fun0045_ip = 248; continue _fun0045 }
case 249:
                    var8 = _closure1_slot11;
                    var7 = var8.isMuted;
                    var6 = _closure2_slot3;
                    var6 = var6.id;
                    var4 = var7.bind(var8)(var6);
case 248:
                    var1['isMutedThread'] = var4;
                    var4 = _closure2_slot3;
                    var4 = var5 != var4;
                    var2 = undefined;
                    if(!var4) { _fun0045_ip = 83; continue _fun0045 }
case 157:
                    var5 = _closure1_slot11;
                    var4 = var5.hasJoined;
                    var3 = _closure2_slot3;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
case 83:
                    var1['hasJoinedThread'] = var2;
                    return var1;
                }
            };
            var10 = var13.bind(var18)(var11, var10);
            var11 = var10.isMutedThread;
            var10 = var10.hasJoinedThread;
            var3 = var8[var3];
            var13 = var7.bind(var5)(var3);
            var3 = var13.useCanManageThread;
            var13 = var3.bind(var13)(var9);
            var3 = 59;
            var3 = var8[var3];
            var18 = var7.bind(var5)(var3);
            var3 = var18.useShouldHideChannelContent;
            var3 = var3.bind(var18)(var9);
            var _closure2_slot4 = var3;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.useStateFromStoresObject;
            var6 = new Array(7);
            var6[0] = var12;
            var12 = _closure1_slot20;
            var6[1] = var12;
            var6[2] = var4;
            var4 = _closure1_slot25;
            var6[3] = var4;
            var4 = _closure1_slot23;
            var6[4] = var4;
            var4 = _closure1_slot19;
            var6[5] = var4;
            var4 = _closure1_slot21;
            var6[6] = var4;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var3;
            var3 = function() {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var2 = _closure1_slot17;
                    var1 = var2.getProps;
                    var1 = var1.bind(var2)();
                    var3 = var1.submitting;
                    var2 = var1.errors;
                    var1 = _closure2_slot3;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0046_ip = 250; continue _fun0046 }
case 125:
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
                    if(!var7) { _fun0046_ip = 136; continue _fun0046 }
case 251:
                    var11 = _closure2_slot3;
                    var11 = var11.ownerId;
                    var10 = var10.id;
                    var7 = var11 === var10;
case 136:
                    var1['isChannelOwner'] = var7;
                    if(!(var6 == var13)) { _fun0046_ip = 252; continue _fun0046 }
case 253:
                    var11 = _closure1_slot21;
                    var10 = var11.can;
                    var7 = _closure1_slot39;
                    var7 = var7.MANAGE_CHANNELS;
                    var7 = var10.bind(var11)(var7, var8);
                    _fun0046_ip = 96; continue _fun0046;
case 252:
                    var12 = _closure1_slot21;
                    var11 = var12.can;
                    var10 = _closure1_slot39;
                    var10 = var10.MANAGE_CHANNELS;
                    var7 = var11.bind(var12)(var10, var13);
case 96:
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
                    if(!var10) { _fun0046_ip = 254; continue _fun0046 }
case 255:
                    var14 = _closure1_slot21;
                    var13 = var14.can;
                    var11 = _closure1_slot39;
                    var12 = var11.MANAGE_WEBHOOKS;
                    var11 = _closure2_slot3;
                    var10 = var13.bind(var14)(var12, var11);
case 254:
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
                    if(var4) { _fun0046_ip = 155; continue _fun0046 }
case 256:
                    var5 = _closure2_slot3;
                    var5 = var5.linkedLobby;
                    var4 = var6 != var5;
case 155:
                    var1['isNSFWDisabled'] = var4;
                    return var1;
case 250:
                    var1 = {};
                    var4 = false;
                    var1['isThread'] = var4;
                    var1['submitting'] = var3;
                    var1['errors'] = var2;
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var6, var3, var4);
            var12 = _closure1_slot9;
            var3 = var12.useRef;
            var6 = null;
            var7 = var3.bind(var12)(var6);
            var _closure2_slot5 = var7;
            var4 = var12.useEffect;
            var3 = new Array(2);
            var3[0] = var17;
            var3[1] = var15;
            var1 = function() {
                var4 = _closure2_slot2;
                var3 = var4.addListener;
                var2 = 'transitionEnd';
                var1 = function(arg1) {
                    _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var1 = var1.closing;
                        if(var1) { _fun0047_ip = 257; continue _fun0047 }
case 258:
                        var3 = _closure2_slot1;
                        var2 = _closure1_slot26;
                        var2 = var2.CHANNEL_NAME;
                        if(!(var3 === var2)) { _fun0047_ip = 257; continue _fun0047 }
case 123:
                        var1 = _closure2_slot5;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0047_ip = 94; continue _fun0047 }
case 259:
                        var2 = var3.focus;
                        var1 = var2.bind(var3)();
case 94:
                        return var1;
case 257:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var4.bind(var12)(var1, var3);
            var3 = var6 != var16;
            var1 = null;
            if(!var3) { _fun0044_ip = 260; continue _fun0044 }
case 198:
            var4 = _closure1_slot48;
            var3 = _closure1_slot53;
            var2 = {};
            var21 = var2;
            var20 = var8;
            var12 = copyDataProperties(var21, var20);
            var12 = 'channel';
            var2[11] = var16;
            var12 = 'navigation';
            var2[11] = var15;
            var12 = 'isThreadModerator';
            var2[11] = var14;
            var12 = var6 == var9;
            var14 = undefined;
            if(var12) { _fun0044_ip = 261; continue _fun0044 }
case 109:
            var12 = var9.isLockedThread;
            var14 = var12.bind(var9)();
case 261:
            var12 = 'isLockedThread';
            var2[11] = var14;
            var12 = var6 == var9;
            var14 = undefined;
            if(var12) { _fun0044_ip = 262; continue _fun0044 }
case 188:
            var12 = var9.isArchivedThread;
            var14 = var12.bind(var9)();
case 262:
            var12 = 'isArchivedThread';
            var2[11] = var14;
            var12 = 'canManageThread';
            var2[11] = var13;
            var12 = var8.canUnarchiveThread;
            var8 = 'canUnarchiveThread';
            var2[7] = var12;
            var8 = 'isMutedThread';
            var2[7] = var11;
            var8 = 'hasJoinedThread';
            var2[7] = var10;
            var6 = var6 == var9;
            var8 = undefined;
            if(var6) { _fun0044_ip = 263; continue _fun0044 }
case 203:
            var6 = var9.isForumPost;
            var8 = var6.bind(var9)();
case 263:
            var6 = 'isForumPost';
            var2[5] = var8;
            var6 = 'channelNameRef';
            var2[5] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 260:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['PinImage'] = var2;
    return var1;
})();