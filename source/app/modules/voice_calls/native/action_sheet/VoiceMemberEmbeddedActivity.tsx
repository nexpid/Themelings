// app/modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function calculateActivityPreviewImageDimensions(arg1) {
        var2 = arg1;
        var1 = 32;
        var3 = var2 - var1;
        var1 = {};
        var1['width'] = var3;
        var2 = _closure1_slot14;
        var2 = var3 / var2;
        var1['height'] = var2;
        return var1;
    };
    var _closure1_slot16 = var1;
    var2 = function calculateActivityRowHeight(arg1) {
        var3 = _closure1_slot16;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var2 = var1.height;
        var1 = 40;
        var2 = var1 + var2;
        var1 = 12;
        var2 = var2 + var1;
        var1 = 16;
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot17 = var2;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var9 = true;
    var5['value'] = var9;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Image;
    var _closure1_slot4 = var8;
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.getThemedRippleConfig;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.jsx;
    var _closure1_slot10 = var10;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AvatarSizes;
    var14 = var5.XSMALL;
    var _closure1_slot12 = var14;
    var5 = {};
    var5['foreground'] = var9;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var11 = {'width': 32, 'height': 32, 'marginRight': 16, 'borderRadius': 4};
    var5 = 1.7777777777777777;
    var _closure1_slot14 = var5;
    var5 = 10;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var15 = 'center';
    var10 = {'justifyContent': 'center', 'alignItems': 'center'};
    var5['pressableOpacity'] = var10;
    var13 = 12;
    var10 = {'paddingTop': 12, 'paddingBottom': 16, 'flexDirection': 'column', 'display': 'flex', 'justifyContent': 'flex-start'};
    var5['voiceMemberItemRow'] = var10;
    var10 = {'paddingHorizontal': 16, 'alignItems': 'center'};
    var5['innerRow'] = var10;
    var10 = {'marginBottom': 8, 'flexDirection': 'row', 'display': 'flex'};
    var5['activityDetails'] = var10;
    var5['appIcon'] = var11;
    var10 = {};
    var20 = var10;
    var19 = var11;
    var11 = copyDataProperties(var20, var19);
    var11 = 11;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var17 = var16.INTERACTIVE_NORMAL;
    var16 = 'tintColor';
    var10[var16] = var17;
    var5['appIconPlaceholder'] = var10;
    var10 = {'flex': 1, 'paddingRight': 4};
    var5['centerGroup'] = var10;
    var10 = {};
    var16 = 20;
    var10['lineHeight'] = var16;
    var5['applicationName'] = var10;
    var10 = {'borderRadius': 100, 'paddingHorizontal': 24, 'alignSelf': 'center'};
    var5['joinButton'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'display': 'flex', 'width': '100%', 'paddingHorizontal': 16};
    var5['joinButtonContainer'] = var10;
    var10 = {};
    var10['justifyContent'] = var15;
    var5['backgroundImageContainer'] = var10;
    var10 = {};
    var13 = var7[var13];
    var13 = var6.bind(var1)(var13);
    var13 = var13.AVATAR_SIZE_MAP;
    var13 = var13[var14];
    var10['height'] = var13;
    var5['overflow'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY_ALT;
    var10['backgroundColor'] = var13;
    var5['overflowBackgroundColor'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var11;
    var5['overflowBackgroundColorActionSheet'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot15 = var5;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function VoiceMemberEmbeddedActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.embeddedActivity;
            var8 = var1.channelId;
            var _closure2_slot0 = var8;
            var2 = var1.onItemPress;
            var _closure2_slot1 = var2;
            var17 = var1.isActionSheet;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var1 = function handleCanJoin() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure2_slot1;
                    var4 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var7 = null;
                    var2 = var7 != var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(!var2) { _fun0002_ip = 32; continue _fun0002 }
 28:
                    var3 = _closure2_slot2;
 32:
                    var2 = _closure2_slot4;
                    var7 = var7 != var2;
                    var2 = undefined;
                    if(!var7) { _fun0002_ip = 49; continue _fun0002 }
 45:
                    var2 = _closure2_slot4;
 49:
                    var2 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                }
            };
            var _closure2_slot8 = var1;
            var1 = _closure1_slot15;
            var25 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 13;
            var2 = var1[var2];
            var3 = var3.bind(var5)(var2);
            var4 = var6.applicationId;
            var2 = new Array(1);
            var2[0] = var4;
            var4 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 1;
            var3 = var3.bind(var5)(var4, var2);
            var2 = 0;
            var20 = var3[var2];
            _closure2_slot2 = var20;
            var3 = global;
            var7 = var3.Array;
            var4 = var7.from;
            var2 = var6.userIds;
            var7 = var4.bind(var7)(var2);
            var4 = var7.map;
            var2 = function(arg1) {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var4.bind(var7)(var2);
            var7 = var9.filter;
            var4 = _closure1_slot0;
            var2 = 14;
            var2 = var1[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.isNotNullish;
            var14 = var7.bind(var9)(var2);
            var2 = 15;
            var7 = var1[var2];
            var11 = var4.bind(var5)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var10.bind(var11)(var9, var7);
            _closure2_slot3 = var7;
            var2 = var1[var2];
            var10 = var4.bind(var5)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0003_ip = 60; continue _fun0003 }
 16:
                    var4 = _closure1_slot6;
                    var3 = var4.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.find;
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = _closure2_slot2;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if(var4) { _fun0004_ip = 35; continue _fun0004 }
 26:
                            var3 = _closure2_slot2;
                            var1 = var3.id;
 35:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
 60:
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var7, var2);
            _closure2_slot4 = var2;
            var7 = 16;
            var7 = var1[var7];
            var9 = var4.bind(var5)(var7);
            var7 = var9.getEmbeddedActivityLocationGuildId;
            var6 = var6.location;
            var6 = var7.bind(var9)(var6);
            var _closure2_slot5 = var6;
            var19 = 17;
            var1 = var1[var19];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useEmbeddedActivityJoinability;
            var4 = {};
            var9 = _closure1_slot8;
            var1 = var9.getCurrentUser;
            var10 = var1.bind(var9)();
            var1 = null;
            var11 = var1 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 376; continue _fun0001 }
 371:
            var9 = var10.id;
 376:
            var4['userId'] = var9;
            var4['channelId'] = var8;
            var4['application'] = var20;
            var18 = var6.bind(var7)(var4);
            _closure2_slot6 = var18;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 18;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var7 = var4.width;
            var6 = var3.Math;
            var4 = var6.min;
            var3 = _closure1_slot9;
            var3 = var4.bind(var6)(var3, var7);
            var4 = _closure1_slot17;
            var11 = var4.bind(var5)(var3);
            if(!(var1 != var20)) { _fun0001_ip = 1395; continue _fun0001 }
 463:
            if(!(var1 != var2)) { _fun0001_ip = 1395; continue _fun0001 }
 470:
            var4 = var20.getIconSource;
            var2 = 32;
            var12 = var4.bind(var20)(var2);
            if(!(var1 == var12)) { _fun0001_ip = 508; continue _fun0001 }
 488:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var12 = var4.bind(var5)(var2);
 508:
            var27 = var20.name;
            var2 = function onEmbeddedActivityItemPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot6;
                var2['embeddedActivityJoinability'] = var5;
                var4 = _closure2_slot8;
                var2['handleCanJoin'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            _closure2_slot7 = var2;
            var2 = _closure1_slot16;
            var21 = var2.bind(var5)(var3);
            var4 = _closure1_slot10;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 21;
            var2 = var16[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            var23 = 22;
            var6 = var16[var23];
            var6 = var7.bind(var5)(var6);
            var9 = var6.intl;
            var8 = var9.formatToPlainString;
            var6 = var16[var23];
            var6 = var7.bind(var5)(var6);
            var6 = var6.t;
            var7 = var6.Yw5Hr6;
            var6 = {};
            var6['applicationName'] = var27;
            var6 = var8.bind(var9)(var7, var6);
            var2['accessibilityLabel'] = var6;
            var6 = _closure1_slot13;
            var2['androidRippleConfig'] = var6;
            var6 = function onPress() {
                var2 = _closure2_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2['onPress'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var25.voiceMemberItemRow;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var10['height'] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var9 = {};
            var11 = var25.innerRow;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var25.activityDetails;
            var10[1] = var11;
            var9['style'] = var10;
            var11 = _closure1_slot4;
            var10 = {};
            var15 = _closure1_slot1;
            var13 = 19;
            var13 = var16[var13];
            var13 = var15.bind(var5)(var13);
            if(!(var12 !== var13)) { _fun0001_ip = 750; continue _fun0001 }
 742:
            var13 = var25.appIcon;
            _fun0001_ip = 756; continue _fun0001;
 750:
            var13 = var25.appIconPlaceholder;
 756:
            var10['style'] = var13;
            var10['source'] = var12;
            var11 = var4.bind(var5)(var11, var10);
            var10 = new Array(3);
            var10[0] = var11;
            var13 = _closure1_slot10;
            var15 = _closure1_slot5;
            var12 = {};
            var11 = var25.centerGroup;
            var12['style'] = var11;
            var22 = _closure1_slot0;
            var11 = _closure1_slot2;
            var16 = 23;
            var16 = var11[var16];
            var16 = var22.bind(var5)(var16);
            var22 = var16.Text;
            var16 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var28 = var25.applicationName;
            var16['style'] = var28;
            var16['children'] = var27;
            var16 = var13.bind(var5)(var22, var16);
            var12['children'] = var16;
            var12 = var13.bind(var5)(var15, var12);
            var10[1] = var12;
            var12 = _closure1_slot1;
            var15 = 24;
            var11 = var11[var15];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var16 = -6;
            var11['offsetAmount'] = var16;
            var22 = var25.overflow;
            var16 = new Array(2);
            var16[0] = var22;
            if(var17) { _fun0001_ip = 927; continue _fun0001 }
 919:
            var17 = var25.overflowBackgroundColor;
            _fun0001_ip = 933; continue _fun0001;
 927:
            var17 = var25.overflowBackgroundColorActionSheet;
 933:
            var16[1] = var17;
            var11['overflowStyle'] = var16;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var15 = var16[var15];
            var15 = var17.bind(var5)(var15);
            var15 = var15.OverflowText;
            var11['overflowComponent'] = var15;
            var11['items'] = var14;
            var14 = 5;
            var11['max'] = var14;
            var14 = function renderItem(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var9 = 12;
                    var1 = var1[var9];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = arg1;
                    var1['user'] = var5;
                    var5 = _closure2_slot5;
                    var1['guildId'] = var5;
                    var5 = _closure1_slot12;
                    var1['size'] = var5;
                    var6 = arg2;
                    var5 = undefined;
                    if(var6) { _fun0005_ip = 157; continue _fun0005 }
 65:
                    var6 = {};
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var11 = var7[var9];
                    var11 = var8.bind(var3)(var11);
                    var11 = var11.AVATAR_SIZE_MAP;
                    var10 = _closure1_slot12;
                    var11 = var11[var10];
                    var10 = 2;
                    var11 = var11 / var10;
                    var10 = 3;
                    var10 = var11 + var10;
                    var6['radius'] = var10;
                    var7 = var7[var9];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.CutoutDirection;
                    var7 = var7.RIGHT;
                    var6['direction'] = var7;
                    var7 = -6;
                    var6['inset'] = var7;
                    var5 = var6;
 157:
                    var1['cutout'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var11['renderItem'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[2] = var11;
            var9['children'] = var10;
            var10 = var8.bind(var5)(var7, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot5;
            var10 = {};
            var14 = var25.innerRow;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var15 = var21.height;
            var14['height'] = var15;
            var15 = 'center';
            var14['justifyContent'] = var15;
            var13[1] = var14;
            var10['style'] = var13;
            var15 = _closure1_slot10;
            var14 = _closure1_slot1;
            var13 = 25;
            var13 = var16[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['application'] = var20;
            var20 = {};
            var22 = 'absolute';
            var20['position'] = var22;
            var22 = var21.width;
            var20['width'] = var22;
            var21 = var21.height;
            var20['height'] = var21;
            var13['dimensionsStyle'] = var20;
            var20 = 8;
            var13['borderRadius'] = var20;
            var20 = 'contain';
            var13['resizeMode'] = var20;
            var14 = var15.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var20 = var25.joinButtonContainer;
            var14['style'] = var20;
            var16 = var16[var19];
            var16 = var17.bind(var5)(var16);
            var16 = var16.EmbeddedActivityJoinability;
            var17 = var16.CAN_JOIN;
            var16 = null;
            if(!(var18 === var17)) { _fun0001_ip = 1345; continue _fun0001 }
 1202:
            var19 = _closure1_slot10;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 26;
            var17 = var22[var20];
            var18 = var21.bind(var5)(var17);
            var17 = {};
            var26 = function onPress() {
                var2 = _closure2_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var17['onPress'] = var26;
            var25 = var25.joinButton;
            var17['style'] = var25;
            var26 = _closure1_slot0;
            var24 = var22[var23];
            var24 = var26.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var22[var23];
            var23 = var26.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.4i2vj4;
            var23 = var24.bind(var25)(var23);
            var17['text'] = var23;
            var20 = var22[var20];
            var20 = var21.bind(var5)(var20);
            var20 = var20.Colors;
            var20 = var20.GREY;
            var17['color'] = var20;
            var20 = true;
            var17['shrink'] = var20;
            var20 = 100;
            var17['cornerRadius'] = var20;
            var16 = var19.bind(var5)(var18, var17);
 1345:
            var14['children'] = var16;
            var14 = var15.bind(var5)(var11, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1395:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['calculateActivityRowHeight'] = var2;
    return var1;
})();