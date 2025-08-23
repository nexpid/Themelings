// app/modules/voice_calls/native/action_sheet/VoiceMemberList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function VoiceMemberListSectionHeader(arg1) {
        var1 = arg1;
        var9 = var1.title;
        var1 = _closure1_slot25;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot22;
        var2 = _closure1_slot9;
        var1 = {};
        var6 = var8.sectionContainer;
        var1['style'] = var6;
        var7 = _closure1_slot22;
        var6 = _closure1_slot0;
        var10 = _closure1_slot3;
        var5 = 25;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'style': null, 'variant': 'text-xs/bold', 'color': 'header-secondary'};
        var8 = var8.sectionTitle;
        var5['style'] = var8;
        var8 = var9.toUpperCase;
        var8 = var8.bind(var9)();
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function isEmbeddedActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.url;
            var3 = undefined;
            var1 = var3 !== var1;
            if(!var1) { _fun0001_ip = 26; continue _fun0001 }
 17:
            var2 = var2.applicationId;
            var1 = var3 !== var2;
 26:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var11 = 0;
    var4 = var6[var11];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var9 = 2;
    var4 = var6[var9];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot6 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.SectionList;
    var _closure1_slot7 = var12;
    var12 = var4.useWindowDimensions;
    var _closure1_slot8 = var12;
    var4 = var4.View;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsPages;
    var _closure1_slot16 = var8;
    var8 = var4.InstantInviteSources;
    var _closure1_slot17 = var8;
    var4 = var4.Permissions;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FORM_ROW_VERTICAL_PADDING;
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot21 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot22 = var8;
    var8 = var4.jsxs;
    var _closure1_slot23 = var8;
    var4 = var4.Fragment;
    var _closure1_slot24 = var4;
    var4 = 15;
    var4 = var6[var4];
    var12 = var5.bind(var1)(var4);
    var8 = var12.createStyles;
    var4 = {};
    var13 = {'flex': 1, 'flexShrink': 1};
    var4['container'] = var13;
    var14 = 16;
    var13 = {'paddingTop': 16, 'paddingHorizontal': 16};
    var4['sectionContainer'] = var13;
    var13 = {};
    var13['lineHeight'] = var14;
    var4['sectionTitle'] = var13;
    var13 = {'overflow': 'hidden', 'flexGrow': 1, 'flexShrink': 1, 'minHeight': 1};
    var4['voiceChannelContainer'] = var13;
    var13 = {};
    var13['marginLeft'] = var11;
    var4['headerFormDivider'] = var13;
    var13 = {};
    var13['marginHorizontal'] = var14;
    var4['rowFormDivider'] = var13;
    var4 = var8.bind(var12)(var4);
    var _closure1_slot25 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var5 = var1.channel;
        var4 = _closure1_slot22;
        var2 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 16;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['channel'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot26 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 17;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.bind(var5)(var1);
            var3 = _closure1_slot0;
            var2 = 18;
            var2 = var6[var2];
            var7 = var3.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot13;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot13;
                    var4 = var5.can;
                    var1 = _closure1_slot18;
                    var3 = var1.CREATE_INSTANT_INVITE;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    if(var1) { _fun0003_ip = 53; continue _fun0003 }
 39:
                    var3 = _closure2_slot0;
                    var2 = var3.isPrivate;
                    var1 = var2.bind(var3)();
 53:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var3, var1, var2);
            var1 = null;
            if(var4) { _fun0002_ip = 406; continue _fun0002 }
 105:
            var1 = null;
            if(!var2) { _fun0002_ip = 406; continue _fun0002 }
 113:
            var4 = _closure1_slot23;
            var2 = _closure1_slot6;
            var3 = var2.Fragment;
            var2 = {};
            var8 = _closure1_slot22;
            var7 = _closure1_slot28;
            var6 = {};
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot22;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var7 = 19;
            var7 = var15[var7];
            var7 = var14.bind(var5)(var7);
            var8 = var7.FormRow;
            var7 = {};
            var16 = _closure1_slot22;
            var17 = 20;
            var11 = var15[var17];
            var11 = var14.bind(var5)(var11);
            var13 = var11.CircularIconButton;
            var12 = {};
            var11 = 21;
            var19 = var15[var11];
            var19 = var14.bind(var5)(var19);
            var21 = var19.intl;
            var20 = var21.string;
            var19 = var15[var11];
            var19 = var14.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.6Qgren;
            var19 = var20.bind(var21)(var19);
            var12['accessibilityLabel'] = var19;
            var19 = true;
            var12['accessibilityHidden'] = var19;
            var19 = _closure1_slot1;
            var18 = 22;
            var18 = var15[var18];
            var18 = var19.bind(var5)(var18);
            var12['source'] = var18;
            var17 = var15[var17];
            var17 = var14.bind(var5)(var17);
            var17 = var17.CircularIconButton;
            var17 = var17.Sizes;
            var17 = var17.MEDIUM_32;
            var12['size'] = var17;
            var12 = var16.bind(var5)(var13, var12);
            var7['leading'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.6Qgren;
            var11 = var12.bind(var13)(var11);
            var7['label'] = var11;
            var10 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isPrivate;
                    var3 = var1.bind(var3)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    if(var3) { _fun0004_ip = 73; continue _fun0004 }
 31:
                    var3 = 24;
                    var6 = var4[var3];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var6);
                    var7 = var8.showInstantInviteActionSheet;
                    var6 = _closure2_slot0;
                    var3 = _closure1_slot17;
                    var3 = var3.VOICE_CHANNEL;
                    var3 = var7.bind(var8)(var6, var3);
                    _fun0004_ip = 118; continue _fun0004;
 73:
                    var3 = 23;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.navigateToNewGroupDM;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot16;
                    var1 = var1.CHANNEL_CALL;
                    var1 = var3.bind(var4)(var2, var1);
 118:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onPress'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 406:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot27 = var4;
    var4 = function ItemSeparator() {
        var2 = _closure1_slot25;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot22;
        var2 = _closure1_slot0;
        var6 = _closure1_slot3;
        var1 = 19;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.FormDivider;
        var1 = {};
        var5 = var5.rowFormDivider;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot28 = var4;
    var4 = function renderSectionHeader(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.section;
            var2 = var1.title;
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0005_ip = 47; continue _fun0005 }
 22:
            var5 = _closure1_slot22;
            var4 = _closure1_slot33;
            var3 = {};
            var3['title'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 47:
            return var1;
        }
    };
    var _closure1_slot29 = var4;
    var4 = {};
    var4['VOICE'] = var11;
    var8 = 'VOICE';
    var4[var11] = var8;
    var4['SPECTATING'] = var10;
    var8 = 'SPECTATING';
    var4[var10] = var8;
    var4['DISCONNECTED'] = var9;
    var8 = 'DISCONNECTED';
    var4[var9] = var8;
    var _closure1_slot30 = var4;
    var4 = function extractKey(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot11;
            var3 = var2 instanceof var3;
            if(var3) { _fun0006_ip = 50; continue _fun0006 }
 17:
            var3 = _closure1_slot34;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            if(var1) { _fun0006_ip = 43; continue _fun0006 }
 31:
            var1 = var2.user;
            var1 = var1.id;
            _fun0006_ip = 48; continue _fun0006;
 43:
            var1 = var2.applicationId;
 48:
            _fun0006_ip = 55; continue _fun0006;
 50:
            var1 = var2.id;
 55:
            return var1;
        }
    };
    var _closure1_slot31 = var4;
    var4 = function VoiceSectionRow(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var8 = var1.item;
            var7 = var1.channelId;
            var11 = var1.onPressUser;
            var5 = var1.isActionSheet;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot3;
            var3 = 26;
            var3 = var9[var3];
            var4 = undefined;
            var6 = var6.bind(var4)(var3);
            var3 = var6.useAnalyticsContext;
            var3 = var3.bind(var6)();
            var _closure2_slot1 = var3;
            var6 = _closure1_slot1;
            var3 = 27;
            var3 = var9[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.analyticsLocations;
            var _closure2_slot2 = var3;
            var3 = _closure1_slot34;
            var3 = var3.bind(var4)(var8);
            if(var3) { _fun0007_ip = 174; continue _fun0007 }
 112:
            var9 = _closure1_slot22;
            var6 = _closure1_slot1;
            var10 = _closure1_slot3;
            var3 = 33;
            var3 = var10[var3];
            var6 = var6.bind(var4)(var3);
            var3 = {};
            var13 = var3;
            var12 = var8;
            var10 = copyDataProperties(var13, var12);
            var10 = 'onPress';
            var3[var10] = var11;
            var10 = 'isActionSheet';
            var3[var10] = var5;
            var3 = var9.bind(var4)(var6, var3);
            return var3;
 174:
            var2 = function() {
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = function* (arg1, arg2, arg3) {
                    var1 = function* anon_0_(arg1, arg2, arg3) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            var4 = arg3;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 232; continue _fun0008 }
 16:
                            var3 = null;
                            var2 = var3 != var5;
                            if(!var2) { _fun0008_ip = 32; continue _fun0008 }
 25:
                            var6 = arg2;
                            var2 = var3 != var6;
 32:
                            if(!var2) { _fun0008_ip = 39; continue _fun0008 }
 35:
                            var2 = var3 != var4;
 39:
                            if(!var2) { _fun0008_ip = 224; continue _fun0008 }
 45:
                            var7 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var2 = 28;
                            var2 = var8[var2];
                            var6 = undefined;
                            var7 = var7.bind(var6)(var2);
                            var2 = var7.dismissGlobalKeyboard;
                            var2 = var2.bind(var7)();
                            var7 = _closure1_slot1;
                            var2 = 29;
                            var2 = var8[var2];
                            var10 = var7.bind(var6)(var2);
                            var9 = var10.selectVoiceChannel;
                            var2 = var5.id;
                            var2 = var9.bind(var10)(var2);
                            var2 = 30;
                            var2 = var8[var2];
                            var7 = var7.bind(var6)(var2);
                            var2 = {};
                            var4 = var4.applicationId;
                            var2['applicationId'] = var4;
                            var4 = var5.id;
                            var2['activityChannelId'] = var4;
                            var8 = _closure2_slot1;
                            var8 = var8.location;
                            var2['locationObject'] = var8;
                            var8 = _closure2_slot2;
                            var2['analyticsLocations'] = var8;
                            var2 = var7.bind(var6)(var2);
                            SaveGenerator(address=180);
 178:
                            return var2;
 180:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(var7) { _fun0008_ip = 229; continue _fun0008 }
 186:
                            var4 = _closure2_slot0;
                            if(!var4) { _fun0008_ip = 224; continue _fun0008 }
 193:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var3 = 31;
                            var3 = var7[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.hideVoiceChannelActionSheet;
                            var3 = var3.bind(var4)(var5);
 224:
                            var3 = undefined;
                            return var3;
 229:
                            return var2;
 232:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var6 = var2.bind(var4)();
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 32;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['embeddedActivity'] = var8;
            var1['channelId'] = var7;
            var1['onItemPress'] = var6;
            var1['isActionSheet'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var4;
    var4 = var7.forwardRef;
    var2 = function VoiceMemberList(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var8 = arg1;
            var19 = var8.channel;
            var _closure2_slot0 = var19;
            var1 = var8.isActionSheet;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0009_ip = 28; continue _fun0009 }
 26:
            var1 = true;
 28:
            var _closure2_slot1 = var1;
            var6 = var8.disableFooter;
            if(!(var6 === var5)) { _fun0009_ip = 44; continue _fun0009 }
 42:
            var6 = false;
 44:
            var4 = {'channel': 0, 'isActionSheet': 0, 'disableFooter': 0};
            var3 = null;
            var27 = var4;
            var26 = null;
            var2 = silentSetPrototypeOf(var27, var26);
            var7 = 0;
            var27 = {};
            var26 = var8;
            var25 = var4;
            var14 = copyDataProperties(var27, var26, var25);
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var2 = _closure1_slot25;
            var16 = var2.bind(var5)();
            _closure2_slot2 = var16;
            var9 = _closure1_slot1;
            var18 = _closure1_slot3;
            var2 = 27;
            var2 = var18[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var2 = var2.analyticsLocations;
            _closure2_slot3 = var2;
            var4 = _closure1_slot8;
            var4 = var4.bind(var5)();
            var15 = var4.width;
            var8 = global;
            var12 = var8.Math;
            var11 = var12.min;
            var4 = _closure1_slot19;
            var4 = var11.bind(var12)(var15, var4);
            _closure2_slot4 = var4;
            var17 = _closure1_slot0;
            var15 = 18;
            var4 = var18[var15];
            var21 = var17.bind(var5)(var4);
            var20 = var21.useStateFromStores;
            var4 = _closure1_slot15;
            var12 = new Array(1);
            var12[0] = var4;
            var11 = new Array(1);
            var11[0] = var19;
            var4 = function() {
                var3 = _closure1_slot15;
                var2 = var3.getVoiceStatesForChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var20.bind(var21)(var12, var4, var11);
            var4 = 34;
            var4 = var18[var4];
            var4 = var9.bind(var5)(var4);
            var11 = var4.bind(var5)(var19);
            _closure2_slot5 = var11;
            var4 = var18[var15];
            var21 = var17.bind(var5)(var4);
            var20 = var21.useStateFromStoresArray;
            var4 = _closure1_slot12;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0010_ip = 19; continue _fun0010 }
 13:
                    var1 = new Array(0);
                    _fun0010_ip = 41; continue _fun0010;
 19:
                    var4 = _closure1_slot12;
                    var3 = var4.getViewerIds;
                    var2 = _closure2_slot5;
                    var1 = var3.bind(var4)(var2);
 41:
                    return var1;
                }
            };
            var9 = var20.bind(var21)(var9, var4);
            _closure2_slot6 = var9;
            var4 = 23;
            var4 = var18[var4];
            var21 = var17.bind(var5)(var4);
            var20 = var21.useIsModalOpen;
            var4 = 31;
            var4 = var18[var4];
            var23 = var17.bind(var5)(var4);
            var22 = var23.getVoiceChannelKey;
            var4 = var19.id;
            var4 = var22.bind(var23)(var4);
            var4 = var20.bind(var21)(var4);
            var15 = var18[var15];
            var20 = var17.bind(var5)(var15);
            var18 = var20.useStateFromStores;
            var15 = _closure1_slot10;
            var17 = new Array(1);
            var17[0] = var15;
            var15 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getEmbeddedActivitiesForChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var18.bind(var20)(var17, var15);
            var18 = var8.Set;
            var15 = var12.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.voiceState;
                var1 = var1.userId;
                return var1;
            };
            var27 = var15.bind(var12)(var8);
            var15 = var18.prototype;
            var15 = Object.create(var15, {constructor: {value: var18}});
            var28 = var15;
            var8 = new var28[var18](var27, var26);
            var8 = var8 instanceof Object ? var8 : var15;
            _closure2_slot7 = var8;
            var8 = var19.isPrivate;
            var8 = var8.bind(var19)();
            var21 = new Array(0);
            if(var8) { _fun0009_ip = 479; continue _fun0009 }
 474:
            var8 = var21;
            _fun0009_ip = 502; continue _fun0009;
 479:
            var20 = var19.recipients;
            var18 = var20.reduce;
            var15 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var4 = _closure1_slot14;
                    var3 = var4.getUser;
                    var2 = arg2;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0011_ip = 55; continue _fun0011 }
 33:
                    var6 = _closure2_slot7;
                    var5 = var6.has;
                    var4 = var3.id;
                    var2 = var5.bind(var6)(var4);
 55:
                    if(var2) { _fun0011_ip = 68; continue _fun0011 }
 58:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
 68:
                    return var1;
                }
            };
            var8 = var18.bind(var20)(var15, var21);
 502:
            var15 = new Array(0);
            _closure2_slot8 = var15;
            if(!(var3 != var11)) { _fun0009_ip = 521; continue _fun0009 }
 514:
            if(!(var3 != var9)) { _fun0009_ip = 521; continue _fun0009 }
 518:
            if(var4) { _fun0009_ip = 616; continue _fun0009 }
 521:
            var9 = var15.push;
            var4 = {};
            var11 = _closure1_slot30;
            var11 = var11.VOICE;
            var4['type'] = var11;
            var4['title'] = var3;
            var11 = var17.concat;
            var11 = var11.bind(var17)(var12);
            var4['data'] = var11;
            var4 = var9.bind(var15)(var4);
            var4 = var8.length;
            if(!(var4 > var7)) { _fun0009_ip = 1039; continue _fun0009 }
 577:
            var9 = var15.push;
            var4 = {};
            var11 = _closure1_slot30;
            var11 = var11.DISCONNECTED;
            var4['type'] = var11;
            var4['title'] = var3;
            var4['data'] = var8;
            var4 = var9.bind(var15)(var4);
            _fun0009_ip = 1039; continue _fun0009;
 616:
            var9 = var12.find;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                var2 = var1.id;
                var1 = _closure2_slot5;
                var1 = var1.ownerId;
                var1 = var2 === var1;
                return var1;
            };
            var9 = var9.bind(var12)(var4);
            var11 = var3 == var9;
            var4 = undefined;
            if(var11) { _fun0009_ip = 647; continue _fun0009 }
 641:
            var4 = var9.nick;
 647:
            var9 = var3 != var4;
            var23 = '';
            if(!var9) { _fun0009_ip = 661; continue _fun0009 }
 658:
            var23 = var4;
 661:
            var9 = _closure1_slot1;
            var11 = _closure1_slot3;
            var4 = 35;
            var4 = var11[var4];
            var11 = var9.bind(var5)(var4);
            var9 = var11.partition;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                var3 = _closure2_slot6;
                var2 = var3.includes;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var9.bind(var11)(var12, var4);
            var9 = _closure1_slot4;
            var4 = 2;
            var9 = var9.bind(var5)(var11, var4);
            var11 = var9[var7];
            var4 = 1;
            var12 = var9[var4];
            var4 = var11.length;
            if(!(var4 > var7)) { _fun0009_ip = 829; continue _fun0009 }
 731:
            var9 = var15.push;
            var4 = {};
            var18 = _closure1_slot30;
            var18 = var18.SPECTATING;
            var4['type'] = var18;
            var20 = _closure1_slot0;
            var24 = _closure1_slot3;
            var18 = 21;
            var21 = var24[var18];
            var21 = var20.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.formatToPlainString;
            var18 = var24[var18];
            var18 = var20.bind(var5)(var18);
            var18 = var18.t;
            var20 = var18.Fb0eT0;
            var18 = {};
            var18['username'] = var23;
            var18 = var21.bind(var22)(var20, var18);
            var4['title'] = var18;
            var4['data'] = var11;
            var4 = var9.bind(var15)(var4);
 829:
            var4 = var12.length;
            if(!(var4 > var7)) { _fun0009_ip = 939; continue _fun0009 }
 838:
            var9 = var15.push;
            var4 = {};
            var11 = _closure1_slot30;
            var11 = var11.VOICE;
            var4['type'] = var11;
            var21 = _closure1_slot0;
            var22 = _closure1_slot3;
            var11 = 21;
            var18 = var22[var11];
            var18 = var21.bind(var5)(var18);
            var20 = var18.intl;
            var18 = var20.string;
            var11 = var22[var11];
            var11 = var21.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.C7iIKC;
            var11 = var18.bind(var20)(var11);
            var4['title'] = var11;
            var11 = var17.concat;
            var11 = var11.bind(var17)(var12);
            var4['data'] = var11;
            var4 = var9.bind(var15)(var4);
 939:
            var4 = var8.length;
            if(!(var4 > var7)) { _fun0009_ip = 1039; continue _fun0009 }
 948:
            var7 = var15.push;
            var4 = {};
            var9 = _closure1_slot30;
            var9 = var9.DISCONNECTED;
            var4['type'] = var9;
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var9 = 21;
            var11 = var18[var9];
            var11 = var17.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var18[var9];
            var9 = var17.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.BnSq1N;
            var9 = var11.bind(var12)(var9);
            var4['title'] = var9;
            var4['data'] = var8;
            var4 = var7.bind(var15)(var4);
 1039:
            var8 = _closure1_slot6;
            var7 = var8.useCallback;
            var9 = var19.id;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var2;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 36;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 37;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = arg1;
                var4 = var4.id;
                var2['userId'] = var4;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['channelId'] = var5;
                var5 = true;
                var2['isVoiceContext'] = var5;
                var4 = _closure2_slot3;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var7.bind(var8)(var2, var4);
            _closure2_slot9 = var2;
            var7 = var8.useCallback;
            var4 = new Array(3);
            var4[0] = var19;
            var4[1] = var1;
            var4[2] = var2;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.item;
                    var1 = var1.section;
                    var4 = var1.type;
                    var1 = _closure1_slot30;
                    var1 = var1.VOICE;
                    if(!(var1 !== var4)) { _fun0012_ip = 230; continue _fun0012 }
 38:
                    var1 = _closure1_slot30;
                    var1 = var1.SPECTATING;
                    if(!(var1 !== var4)) { _fun0012_ip = 144; continue _fun0012 }
 52:
                    var1 = _closure1_slot30;
                    var1 = var1.DISCONNECTED;
                    if(!(var1 !== var4)) { _fun0012_ip = 70; continue _fun0012 }
 66:
                    var1 = undefined;
                    return var1;
 70:
                    var6 = _closure1_slot22;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 33;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var4 = var1.DisconnectedUserRow;
                    var1 = {};
                    var1['user'] = var2;
                    var8 = _closure2_slot0;
                    var1['channel'] = var8;
                    var8 = _closure2_slot1;
                    var1['isActionSheet'] = var8;
                    var7 = _closure2_slot9;
                    var1['onPress'] = var7;
                    var1 = var6.bind(var5)(var4, var1);
                    return var1;
 144:
                    var6 = _closure1_slot22;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 33;
                    var1 = var5[var1];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = {};
                    var11 = var1;
                    var10 = var2;
                    var7 = copyDataProperties(var11, var10);
                    var9 = _closure2_slot9;
                    var8 = 'onPress';
                    var1[var8] = var9;
                    var9 = true;
                    var8 = 'isSpectating';
                    var1[var8] = var9;
                    var8 = _closure2_slot1;
                    var7 = 'isActionSheet';
                    var1[var7] = var8;
                    var1 = var6.bind(var5)(var4, var1);
                    return var1;
 230:
                    var1 = _closure1_slot11;
                    var4 = var2 instanceof var1;
                    var1 = null;
                    if(var4) { _fun0012_ip = 299; continue _fun0012 }
 243:
                    var5 = _closure1_slot22;
                    var4 = _closure1_slot32;
                    var3 = {};
                    var3['item'] = var2;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var3['channelId'] = var6;
                    var6 = _closure2_slot9;
                    var3['onPressUser'] = var6;
                    var2 = _closure2_slot1;
                    var3['isActionSheet'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 299:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var2, var4);
            _closure2_slot10 = var7;
            var4 = _closure1_slot22;
            if(var1) { _fun0009_ip = 1259; continue _fun0009 }
 1126:
            var2 = _closure1_slot7;
            var1 = {};
            var8 = arg2;
            var1['ref'] = var8;
            var1['sections'] = var15;
            var8 = _closure1_slot29;
            var1['renderSectionHeader'] = var8;
            var1['renderItem'] = var7;
            var7 = _closure1_slot31;
            var1['keyExtractor'] = var7;
            var7 = _closure1_slot28;
            var1['ItemSeparatorComponent'] = var7;
            var3 = null;
            if(var6) { _fun0009_ip = 1201; continue _fun0009 }
 1181:
            var8 = _closure1_slot22;
            var7 = _closure1_slot27;
            var6 = {};
            var6['channel'] = var19;
            var3 = var8.bind(var5)(var7, var6);
 1201:
            var1['ListFooterComponent'] = var3;
            var7 = _closure1_slot22;
            var6 = _closure1_slot26;
            var3 = {};
            var3['channel'] = var19;
            var3 = var7.bind(var5)(var6, var3);
            var1['ListHeaderComponent'] = var3;
            var3 = false;
            var1['stickySectionHeadersEnabled'] = var3;
            var27 = var1;
            var26 = var14;
            var3 = copyDataProperties(var27, var26);
            var1 = var4.bind(var5)(var2, var1);
            _fun0009_ip = 1538; continue _fun0009;
 1259:
            var12 = _closure1_slot0;
            var17 = _closure1_slot3;
            var2 = 38;
            var2 = var17[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var6 = _closure1_slot21;
            var6 = var6.DARK;
            var2['theme'] = var6;
            var8 = _closure1_slot23;
            var7 = _closure1_slot9;
            var6 = {};
            var9 = var16.container;
            var6['style'] = var9;
            var18 = _closure1_slot22;
            var9 = 39;
            var9 = var17[var9];
            var9 = var12.bind(var5)(var9);
            var11 = var9.VoiceChannelHeader;
            var9 = {};
            var9['channel'] = var19;
            var11 = var18.bind(var5)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var18 = _closure1_slot22;
            var11 = 19;
            var11 = var17[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.FormDivider;
            var11 = {};
            var19 = var16.headerFormDivider;
            var11['style'] = var19;
            var11 = var18.bind(var5)(var12, var11);
            var9[1] = var11;
            var12 = _closure1_slot22;
            var11 = _closure1_slot1;
            var10 = 40;
            var10 = var17[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var17 = true;
            var10['inActionSheet'] = var17;
            var16 = var16.voiceChannelContainer;
            var10['style'] = var16;
            var27 = var10;
            var26 = var14;
            var14 = copyDataProperties(var27, var26);
            var16 = function renderItem(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var5 = arg1;
                    var1 = _closure2_slot8;
                    var1 = var1[var5];
                    var2 = var1.data;
                    var1 = arg2;
                    var4 = var2[var1];
                    var1 = null;
                    if(!(var1 != var4)) { _fun0013_ip = 150; continue _fun0013 }
 32:
                    var3 = _closure2_slot10;
                    var2 = {};
                    var2['item'] = var4;
                    var4 = _closure2_slot8;
                    var4 = var4[var5];
                    var2['section'] = var4;
                    var5 = undefined;
                    var8 = var3.bind(var5)(var2);
                    var4 = _closure1_slot23;
                    var3 = _closure1_slot24;
                    var2 = {};
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot22;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var7 = 19;
                    var7 = var11[var7];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.FormDivider;
                    var7 = {};
                    var10 = _closure2_slot2;
                    var10 = var10.rowFormDivider;
                    var7['style'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
 150:
                    return var1;
                }
            };
            var14 = 'renderItem';
            var10[var14] = var16;
            var16 = function itemSize(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = arg2;
                    var9 = null;
                    if(!(var9 != var2)) { _fun0014_ip = 233; continue _fun0014 }
 12:
                    var4 = _closure2_slot8;
                    var1 = arg1;
                    var1 = var4[var1];
                    var1 = var1.data;
                    var2 = var1[var2];
                    if(!(var9 != var2)) { _fun0014_ip = 229; continue _fun0014 }
 42:
                    var1 = _closure1_slot20;
                    var7 = 32;
                    var8 = var1 + var7;
                    var1 = _closure1_slot11;
                    var5 = var2 instanceof var1;
                    var1 = var8;
                    if(var5) { _fun0014_ip = 227; continue _fun0014 }
 73:
                    var5 = _closure1_slot34;
                    var6 = undefined;
                    var5 = var5.bind(var6)(var2);
                    if(var5) { _fun0014_ip = 192; continue _fun0014 }
 87:
                    var5 = var2.voiceState;
                    var2 = var8;
                    if(!(var9 != var5)) { _fun0014_ip = 190; continue _fun0014 }
 100:
                    var5 = var5.selfStream;
                    var2 = var8;
                    if(!var5) { _fun0014_ip = 190; continue _fun0014 }
 112:
                    var12 = _closure2_slot4;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 33;
                    var10 = var11[var5];
                    var10 = var9.bind(var6)(var10);
                    var13 = var10.STREAM_PREVIEW_MARGIN;
                    var10 = 2;
                    var10 = var10 * var13;
                    var10 = var12 - var10;
                    var5 = var11[var5];
                    var5 = var9.bind(var6)(var5);
                    var9 = var5.STREAM_PREVIEW_MARGIN;
                    var5 = 0.5625;
                    var5 = var5 * var10;
                    var5 = var5 + var9;
                    var2 = var8 + var5;
 190:
                    _fun0014_ip = 224; continue _fun0014;
 192:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.calculateActivityRowHeight;
                    var3 = _closure2_slot4;
                    var2 = var4.bind(var5)(var3);
 224:
                    var1 = var2;
 227:
                    return var1;
 229:
                    var1 = 0;
                    return var1;
 233:
                    var1 = 0;
                    return var1;
                }
            };
            var14 = 'itemSize';
            var10[var14] = var16;
            var14 = var15.map;
            var13 = function(arg1) {
                var1 = arg1;
                var1 = var1.data;
                var1 = var1.length;
                return var1;
            };
            var14 = var14.bind(var15)(var13);
            var13 = 'sections';
            var10[var13] = var14;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1538:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/action_sheet/VoiceMemberList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();