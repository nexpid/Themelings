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
    var1 = function ItemSeparator() {
        var2 = _closure1_slot24;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot21;
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
    var _closure1_slot28 = var1;
    var1 = function VoiceMemberListSectionHeader(arg1) {
        var1 = arg1;
        var9 = var1.title;
        var1 = _closure1_slot24;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot21;
        var2 = _closure1_slot8;
        var1 = {};
        var6 = var8.sectionContainer;
        var1['style'] = var6;
        var7 = _closure1_slot21;
        var6 = _closure1_slot0;
        var10 = _closure1_slot3;
        var5 = 25;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'style': null, 'variant': 'text-xs/bold', 'color': 'text-default'};
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
    var _closure1_slot29 = var1;
    var1 = function renderSectionHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.section;
            var2 = var1.title;
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot21;
            var4 = _closure1_slot29;
            var3 = {};
            var3['title'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 2:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function extractKey(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot10;
            var3 = var2 instanceof var3;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot32;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2.user;
            var1 = var1.id;
            _fun0002_ip = 2; continue _fun0002;
case 6:
            var1 = var2.applicationId;
case 2:
            _fun0002_ip = 8; continue _fun0002;
case 4:
            var1 = var2.id;
case 8:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function isEmbeddedActivity(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.url;
            var3 = undefined;
            var1 = var3 !== var1;
            if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 5:
            var2 = var2.applicationId;
            var1 = var3 !== var2;
case 9:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function VoiceSectionRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.item;
            var7 = var1.channelId;
            var12 = var1.onPressUser;
            var5 = var1.isActionSheet;
            var _closure2_slot0 = var5;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = function _onItemPress() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot5;
                var2 = function* (arg1, arg2, arg3) {
                    var1 = function* anon_0_(arg1, arg2, arg3) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            var5 = arg1;
                            var4 = arg3;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                            var3 = null;
                            var2 = var3 != var5;
                            if(!var2) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                            var6 = arg2;
                            var2 = var3 != var6;
case 12:
                            if(!var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                            var2 = var3 != var4;
case 14:
                            if(!var2) { _fun0005_ip = 16; continue _fun0005 }
case 17:
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
case 18:
                            return var2;
case 19:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(var7) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var4 = _closure2_slot0;
                            if(!var4) { _fun0005_ip = 16; continue _fun0005 }
case 22:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var3 = 31;
                            var3 = var7[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.hideVoiceChannelActionSheet;
                            var3 = var3.bind(var4)(var5);
case 16:
                            var3 = undefined;
                            return var3;
case 20:
                            return var2;
case 10:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot3 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot3 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 26;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useAnalyticsContext;
            var1 = var1.bind(var2)();
            _closure2_slot1 = var1;
            var2 = _closure1_slot1;
            var1 = 27;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            _closure2_slot2 = var1;
            var1 = _closure1_slot32;
            var1 = var1.bind(var4)(var8);
            var3 = _closure1_slot21;
            var2 = _closure1_slot1;
            var9 = _closure1_slot3;
            if(var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var1 = 33;
            var1 = var9[var1];
            var10 = var2.bind(var4)(var1);
            var1 = {};
            var14 = var1;
            var13 = var8;
            var11 = copyDataProperties(var14, var13);
            var11 = 'onPress';
            var1[10] = var12;
            var11 = 'isActionSheet';
            var1[10] = var5;
            var1 = var3.bind(var4)(var10, var1);
            return var1;
case 22:
            var1 = 32;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['embeddedActivity'] = var8;
            var1['channelId'] = var7;
            var6 = function onItemPress(arg1, arg2, arg3) {
                var1 = undefined;
                var4 = _closure2_slot3;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1['onItemPress'] = var6;
            var1['isActionSheet'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot33 = var1;
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
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsPages;
    var _closure1_slot15 = var8;
    var8 = var4.InstantInviteSources;
    var _closure1_slot16 = var8;
    var4 = var4.Permissions;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FORM_ROW_VERTICAL_PADDING;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot21 = var8;
    var8 = var4.jsxs;
    var _closure1_slot22 = var8;
    var4 = var4.Fragment;
    var _closure1_slot23 = var4;
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
    var _closure1_slot24 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var5 = var1.channel;
        var4 = _closure1_slot21;
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
    var _closure1_slot25 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure1_slot12;
                    var4 = var5.can;
                    var1 = _closure1_slot17;
                    var3 = var1.CREATE_INSTANT_INVITE;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    if(var1) { _fun0007_ip = 24; continue _fun0007 }
case 14:
                    var3 = _closure2_slot0;
                    var2 = var3.isPrivate;
                    var1 = var2.bind(var3)();
case 24:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var3, var1, var2);
            var1 = null;
            if(var4) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var1 = null;
            if(!var2) { _fun0006_ip = 25; continue _fun0006 }
case 27:
            var4 = _closure1_slot22;
            var2 = _closure1_slot6;
            var3 = var2.Fragment;
            var2 = {};
            var8 = _closure1_slot21;
            var7 = _closure1_slot28;
            var6 = {};
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot21;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var7 = 19;
            var7 = var15[var7];
            var7 = var14.bind(var5)(var7);
            var8 = var7.FormRow;
            var7 = {};
            var16 = _closure1_slot21;
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
            var19 = var19["6Qgrev"];
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
            var11 = var11["6Qgrev"];
            var11 = var12.bind(var13)(var11);
            var7['label'] = var11;
            var10 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isPrivate;
                    var3 = var1.bind(var3)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    if(var3) { _fun0008_ip = 28; continue _fun0008 }
case 7:
                    var3 = 24;
                    var6 = var4[var3];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var6);
                    var7 = var8.showInstantInviteActionSheet;
                    var6 = _closure2_slot0;
                    var3 = {};
                    var9 = _closure1_slot16;
                    var9 = var9.VOICE_CHANNEL;
                    var3['source'] = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    _fun0008_ip = 29; continue _fun0008;
case 28:
                    var3 = 23;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.navigateToNewGroupDM;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot15;
                    var1 = var1.CHANNEL_CALL;
                    var1 = var3.bind(var4)(var2, var1);
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onPress'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 25:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot26 = var4;
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
    var _closure1_slot27 = var4;
    var4 = var7.forwardRef;
    var2 = function VoiceMemberList(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var8 = arg1;
            var19 = var8.channel;
            var _closure2_slot0 = var19;
            var1 = var8.isActionSheet;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0009_ip = 30; continue _fun0009 }
case 9:
            var1 = true;
case 30:
            var _closure2_slot1 = var1;
            var6 = var8.disableFooter;
            if(!(var6 === var5)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
            var6 = false;
case 31:
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
            var2 = _closure1_slot24;
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
            var4 = 34;
            var4 = var18[var4];
            var4 = var9.bind(var5)(var4);
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
            var4 = _closure1_slot14;
            var12 = new Array(1);
            var12[0] = var4;
            var11 = new Array(1);
            var11[0] = var19;
            var4 = function() {
                var3 = _closure1_slot14;
                var2 = var3.getVoiceStatesForChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var20.bind(var21)(var12, var4, var11);
            var4 = 35;
            var4 = var18[var4];
            var4 = var9.bind(var5)(var4);
            var11 = var4.bind(var5)(var19);
            _closure2_slot5 = var11;
            var4 = var18[var15];
            var21 = var17.bind(var5)(var4);
            var20 = var21.useStateFromStoresArray;
            var4 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0010_ip = 33; continue _fun0010 }
case 34:
                    var1 = new Array(0);
                    _fun0010_ip = 35; continue _fun0010;
case 33:
                    var4 = _closure1_slot11;
                    var3 = var4.getViewerIds;
                    var2 = _closure2_slot5;
                    var1 = var3.bind(var4)(var2);
case 35:
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
            var15 = _closure1_slot9;
            var17 = new Array(1);
            var17[0] = var15;
            var15 = function() {
                var3 = _closure1_slot9;
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
            if(var8) { _fun0009_ip = 36; continue _fun0009 }
case 37:
            var8 = var21;
            _fun0009_ip = 38; continue _fun0009;
case 36:
            var20 = var19.recipients;
            var18 = var20.reduce;
            var15 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure1_slot13;
                    var3 = var4.getUser;
                    var2 = arg2;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0011_ip = 8; continue _fun0011 }
case 39:
                    var6 = _closure2_slot7;
                    var5 = var6.has;
                    var4 = var3.id;
                    var2 = var5.bind(var6)(var4);
case 8:
                    if(var2) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
case 40:
                    return var1;
                }
            };
            var8 = var18.bind(var20)(var15, var21);
case 38:
            var15 = new Array(0);
            _closure2_slot8 = var15;
            if(!(var3 != var11)) { _fun0009_ip = 42; continue _fun0009 }
case 43:
            if(!(var3 != var9)) { _fun0009_ip = 42; continue _fun0009 }
case 44:
            if(var4) { _fun0009_ip = 45; continue _fun0009 }
case 42:
            var9 = var15.push;
            var4 = {};
            var11 = _closure1_slot27;
            var11 = var11.VOICE;
            var4['type'] = var11;
            var4['title'] = var3;
            var11 = var17.concat;
            var11 = var11.bind(var17)(var12);
            var4['data'] = var11;
            var4 = var9.bind(var15)(var4);
            var4 = var8.length;
            if(!(var4 > var7)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
            var9 = var15.push;
            var4 = {};
            var11 = _closure1_slot27;
            var11 = var11.DISCONNECTED;
            var4['type'] = var11;
            var4['title'] = var3;
            var4['data'] = var8;
            var4 = var9.bind(var15)(var4);
            _fun0009_ip = 46; continue _fun0009;
case 45:
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
            if(var11) { _fun0009_ip = 48; continue _fun0009 }
case 49:
            var4 = var9.nick;
case 48:
            var9 = var3 != var4;
            var23 = '';
            if(!var9) { _fun0009_ip = 50; continue _fun0009 }
case 51:
            var23 = var4;
case 50:
            var9 = _closure1_slot1;
            var11 = _closure1_slot3;
            var4 = 36;
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
            if(!(var4 > var7)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
            var9 = var15.push;
            var4 = {};
            var18 = _closure1_slot27;
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
            var20 = var18.Fb0eT9;
            var18 = {};
            var18['username'] = var23;
            var18 = var21.bind(var22)(var20, var18);
            var4['title'] = var18;
            var4['data'] = var11;
            var4 = var9.bind(var15)(var4);
case 52:
            var4 = var12.length;
            if(!(var4 > var7)) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var9 = var15.push;
            var4 = {};
            var11 = _closure1_slot27;
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
            var11 = var11.C7iIKB;
            var11 = var18.bind(var20)(var11);
            var4['title'] = var11;
            var11 = var17.concat;
            var11 = var11.bind(var17)(var12);
            var4['data'] = var11;
            var4 = var9.bind(var15)(var4);
case 54:
            var4 = var8.length;
            if(!(var4 > var7)) { _fun0009_ip = 46; continue _fun0009 }
case 56:
            var7 = var15.push;
            var4 = {};
            var9 = _closure1_slot27;
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
            var9 = var9.BnSq1I;
            var9 = var11.bind(var12)(var9);
            var4['title'] = var9;
            var4['data'] = var8;
            var4 = var7.bind(var15)(var4);
case 46:
            var8 = _closure1_slot6;
            var7 = var8.useCallback;
            var9 = var19.id;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var2;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 37;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 38;
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
case 0:
                    var1 = arg1;
                    var2 = var1.item;
                    var1 = var1.section;
                    var4 = var1.type;
                    var1 = _closure1_slot27;
                    var1 = var1.VOICE;
                    if(!(var1 !== var4)) { _fun0012_ip = 57; continue _fun0012 }
case 14:
                    var1 = _closure1_slot27;
                    var1 = var1.SPECTATING;
                    if(!(var1 !== var4)) { _fun0012_ip = 58; continue _fun0012 }
case 24:
                    var1 = _closure1_slot27;
                    var1 = var1.DISCONNECTED;
                    if(!(var1 !== var4)) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                    var1 = undefined;
                    return var1;
case 59:
                    var6 = _closure1_slot21;
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
case 58:
                    var6 = _closure1_slot21;
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
                    var1[7] = var9;
                    var9 = true;
                    var8 = 'isSpectating';
                    var1[7] = var9;
                    var8 = _closure2_slot1;
                    var7 = 'isActionSheet';
                    var1[6] = var8;
                    var1 = var6.bind(var5)(var4, var1);
                    return var1;
case 57:
                    var1 = _closure1_slot10;
                    var4 = var2 instanceof var1;
                    var1 = null;
                    if(var4) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                    var5 = _closure1_slot21;
                    var4 = _closure1_slot33;
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
case 61:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var2, var4);
            _closure2_slot10 = var7;
            var4 = _closure1_slot21;
            if(var1) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var2 = _closure1_slot7;
            var1 = {};
            var8 = arg2;
            var1['ref'] = var8;
            var1['sections'] = var15;
            var8 = _closure1_slot30;
            var1['renderSectionHeader'] = var8;
            var1['renderItem'] = var7;
            var7 = _closure1_slot31;
            var1['keyExtractor'] = var7;
            var7 = _closure1_slot28;
            var1['ItemSeparatorComponent'] = var7;
            var3 = null;
            if(var6) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var8 = _closure1_slot21;
            var7 = _closure1_slot26;
            var6 = {};
            var6['channel'] = var19;
            var3 = var8.bind(var5)(var7, var6);
case 65:
            var1['ListFooterComponent'] = var3;
            var7 = _closure1_slot21;
            var6 = _closure1_slot25;
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
            _fun0009_ip = 67; continue _fun0009;
case 63:
            var12 = _closure1_slot0;
            var17 = _closure1_slot3;
            var2 = 39;
            var2 = var17[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var6 = _closure1_slot20;
            var6 = var6.DARK;
            var2['theme'] = var6;
            var8 = _closure1_slot22;
            var7 = _closure1_slot8;
            var6 = {};
            var9 = var16.container;
            var6['style'] = var9;
            var18 = _closure1_slot21;
            var9 = 40;
            var9 = var17[var9];
            var9 = var12.bind(var5)(var9);
            var11 = var9.VoiceChannelHeader;
            var9 = {};
            var9['channel'] = var19;
            var11 = var18.bind(var5)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var18 = _closure1_slot21;
            var11 = 19;
            var11 = var17[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.FormDivider;
            var11 = {};
            var19 = var16.headerFormDivider;
            var11['style'] = var19;
            var11 = var18.bind(var5)(var12, var11);
            var9[1] = var11;
            var12 = _closure1_slot21;
            var11 = _closure1_slot1;
            var10 = 41;
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
            var16 = function renderRow(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var5 = arg1;
                    var1 = _closure2_slot8;
                    var1 = var1[var5];
                    var2 = var1.data;
                    var1 = arg2;
                    var4 = var2[var1];
                    var1 = null;
                    if(!(var1 != var4)) { _fun0013_ip = 68; continue _fun0013 }
case 12:
                    var3 = _closure2_slot10;
                    var2 = {};
                    var2['item'] = var4;
                    var4 = _closure2_slot8;
                    var4 = var4[var5];
                    var2['section'] = var4;
                    var5 = undefined;
                    var8 = var3.bind(var5)(var2);
                    var4 = _closure1_slot22;
                    var3 = _closure1_slot23;
                    var2 = {};
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = _closure1_slot21;
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
case 68:
                    return var1;
                }
            };
            var14 = 'renderItem';
            var10[13] = var16;
            var16 = function getRowHeight(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = arg2;
                    var10 = null;
                    if(!(var10 != var2)) { _fun0014_ip = 69; continue _fun0014 }
case 70:
                    var4 = _closure2_slot8;
                    var1 = arg1;
                    var1 = var4[var1];
                    var1 = var1.data;
                    var2 = var1[var2];
                    if(!(var10 != var2)) { _fun0014_ip = 71; continue _fun0014 }
case 32:
                    var9 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 33;
                    var7 = var8[var1];
                    var6 = undefined;
                    var7 = var5.bind(var6)(var7);
                    var11 = var7.STREAM_PREVIEW_MARGIN;
                    var7 = 2;
                    var7 = var7 * var11;
                    var7 = var9 - var7;
                    var1 = var8[var1];
                    var1 = var5.bind(var6)(var1);
                    var5 = var1.STREAM_PREVIEW_MARGIN;
                    var1 = 0.5625;
                    var1 = var1 * var7;
                    var8 = var1 + var5;
                    var1 = _closure1_slot18;
                    var7 = 32;
                    var5 = var1 + var7;
                    var1 = _closure1_slot10;
                    var9 = var2 instanceof var1;
                    var1 = var5;
                    if(var9) { _fun0014_ip = 16; continue _fun0014 }
case 72:
                    var9 = _closure1_slot32;
                    var9 = var9.bind(var6)(var2);
                    if(var9) { _fun0014_ip = 73; continue _fun0014 }
case 74:
                    var9 = var2.voiceState;
                    var2 = var5;
                    if(!(var10 != var9)) { _fun0014_ip = 75; continue _fun0014 }
case 76:
                    var9 = var9.selfStream;
                    var2 = var5;
                    if(!var9) { _fun0014_ip = 75; continue _fun0014 }
case 77:
                    var2 = var5 + var8;
case 75:
                    _fun0014_ip = 78; continue _fun0014;
case 73:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.calculateActivityRowHeight;
                    var3 = _closure2_slot4;
                    var2 = var4.bind(var5)(var3);
case 78:
                    var1 = var2;
case 16:
                    return var1;
case 71:
                    var1 = 0;
                    return var1;
case 69:
                    var1 = 0;
                    return var1;
                }
            };
            var14 = 'itemSize';
            var10[13] = var16;
            var14 = var15.map;
            var13 = function(arg1) {
                var1 = arg1;
                var1 = var1.data;
                var1 = var1.length;
                return var1;
            };
            var14 = var14.bind(var15)(var13);
            var13 = 'sections';
            var10[12] = var14;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 67:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/action_sheet/VoiceMemberList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();