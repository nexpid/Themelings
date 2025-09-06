// app/modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ActivityActionOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.action;
            var9 = var1.applicationId;
            var13 = var1.context;
            var2 = var1.activityItem;
            var8 = var1.launchingComponentId;
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 9;
            var3 = var1[var3];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var3['applicationId'] = var9;
            var3['context'] = var13;
            var3['launchingComponentId'] = var8;
            var3 = var5.bind(var4)(var3);
            var9 = var3.submitting;
            var3 = _closure1_slot10;
            var14 = var3.bind(var4)();
            var2 = var2.application;
            var11 = var2.id;
            var10 = var2.name;
            var2 = _closure1_slot0;
            var12 = 10;
            var1 = var1[var12];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ActivityAction;
            var1 = var1.JOIN;
            if(!(var1 !== var7)) { _fun0001_ip = 173; continue _fun0001 }
 136:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var12];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ActivityAction;
            var1 = var1.LEAVE;
            if(!(var1 !== var7)) { _fun0001_ip = 173; continue _fun0001 }
 169:
            var1 = null;
            return var1;
 173:
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var1 = {};
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var12];
            var5 = var8.bind(var4)(var5);
            var5 = var5.ActivityAction;
            var5 = var5.LEAVE;
            var7 = var7 === var5;
            if(!var7) { _fun0001_ip = 261; continue _fun0001 }
 219:
            var12 = _closure1_slot7;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 11;
            var5 = var15[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var14 = var14.ongoingActivityJoinedContainer;
            var5['style'] = var14;
            var7 = var12.bind(var4)(var8, var5);
 261:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 12;
            var6 = var12[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var15 = var13.type;
            var14 = 'channel';
            var12 = undefined;
            if(!(var14 === var15)) { _fun0001_ip = 320; continue _fun0001 }
 310:
            var13 = var13.channel;
            var12 = var13.id;
 320:
            var6['channelId'] = var12;
            var6['applicationId'] = var11;
            var6['applicationName'] = var10;
            var6['submitting'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function ParticipantsText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var12 = var1.action;
            var13 = var1.activityItem;
            var6 = var1.channelId;
            var5 = var1.guildId;
            var1 = _closure1_slot10;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var7 = var2.bind(var4)(var1);
            var1 = var13.application;
            var1 = var1.id;
            var18 = var7.bind(var4)(var1, var6);
            var1 = 25;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getName;
            var10 = null;
            var7 = var10 == var18;
            var1 = undefined;
            if(var7) { _fun0002_ip = 108; continue _fun0002 }
 102:
            var7 = 0;
            var1 = var18[var7];
 108:
            var17 = var2.bind(var3)(var5, var6, var1);
            var3 = _closure1_slot9;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 11;
            var1 = var15[var1];
            var2 = var14.bind(var4)(var1);
            var1 = {};
            var6 = var9.participantsContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var9.overlayBubble;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var8 = 22;
            var5 = var15[var8];
            var6 = var14.bind(var4)(var5);
            var5 = {};
            var16 = 26;
            var16 = var15[var16];
            var16 = var14.bind(var4)(var16);
            var5['source'] = var16;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            var8 = var8.Sizes;
            var8 = var8.EXTRA_SMALL;
            var5['size'] = var8;
            var8 = 'white';
            var5['color'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var14 = _closure1_slot0;
            var6 = 27;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'lineClamp': 1, 'style': null, 'variant': 'text-xxs/medium', 'color': 'always-white'};
            var19 = 1;
            var9 = var9.participantsText;
            var6['style'] = var9;
            var9 = 10;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var9 = var9.ActivityAction;
            var9 = var9.START;
            if(!(var12 !== var9)) { _fun0002_ip = 422; continue _fun0002 }
 332:
            var12 = var18.length;
            var9 = var17;
            if(!(!(var12 <= var19))) { _fun0002_ip = 420; continue _fun0002 }
 344:
            var14 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 29;
            var15 = var20[var12];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var12 = var20[var12];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var14 = var12.cpe6CA;
            var12 = {};
            var18 = var18.length;
            var18 = var18 - var19;
            var12['count'] = var18;
            var12['username'] = var17;
            var9 = var15.bind(var16)(var14, var12);
 420:
            _fun0002_ip = 476; continue _fun0002;
 422:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 28;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.getItemSubtitleForMaxPlayersShort;
            var13 = var13.application;
            var13 = var13.maxParticipants;
            var14 = var10 != var13;
            var10 = 0;
            if(!var14) { _fun0002_ip = 471; continue _fun0002 }
 468:
            var10 = var13;
 471:
            var9 = var11.bind(var12)(var10);
 476:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var12 = 5;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var13 = var4.SIZE_16;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'borderRadius': null, 'overflow': 'hidden', 'height': 120, 'position': 'relative', 'backgroundColor': 'black', 'justifyContent': 'center'};
    var10 = 7;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var9['borderRadius'] = var14;
    var4['container'] = var9;
    var9 = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': 'black'};
    var4['imageInnerContainer'] = var9;
    var9 = {'justifyContent': 'center', 'alignItems': 'center'};
    var4['imageOuterContainer'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'backgroundColor': 'rgba(255,255,255,0.5)', 'zIndex': 1};
    var4['ongoingActivityJoinedContainer'] = var9;
    var9 = {};
    var14 = 8;
    var14 = var6[var14];
    var17 = var5.bind(var1)(var14);
    var16 = var17.hexWithOpacity;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var15 = var14.BLACK_500;
    var14 = 0.5;
    var14 = var16.bind(var17)(var15, var14);
    var9['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var4['overlayBubble'] = var9;
    var14 = 20;
    var9 = {'paddingHorizontal': 8, 'position': 'absolute', 'left': 8, 'bottom': 8, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'height': 20};
    var4['participantsContainer'] = var9;
    var9 = {'marginLeft': 4, 'lineHeight': 20};
    var4['participantsText'] = var9;
    var9 = {};
    var9['height'] = var14;
    var4['participants'] = var9;
    var9 = {};
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.AVATAR_SIZE_MAP;
    var12 = var12[var13];
    var9['height'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var12;
    var4['overflow'] = var9;
    var9 = {'paddingVertical': 2, 'paddingHorizontal': 4, 'position': 'absolute', 'top': 8, 'right': 8};
    var4['premiumLockedActivityIndicator'] = var9;
    var9 = {'position': 'absolute', 'top': 4, 'right': 4, 'width': 22, 'height': 22, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.ACTIVITY_CARD_ICON_OVERLAY;
    var9['backgroundColor'] = var12;
    var4['developerIconContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9['color'] = var10;
    var4['developerIconColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityShelfItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var3 = var2.itemDimensions;
            var10 = var2.activityItem;
            var _closure2_slot0 = var10;
            var27 = var2.context;
            var16 = var2.guildId;
            var15 = var2.locationObject;
            var12 = var2.onActivityItemSelected;
            var2 = var2.disableBadges;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0003_ip = 57; continue _fun0003 }
 55:
            var2 = false;
 57:
            var _closure2_slot1 = var4;
            var5 = _closure1_slot10;
            var22 = var5.bind(var4)();
            var6 = var27.type;
            var11 = null;
            var5 = 'channel';
            var14 = null;
            if(!(var5 === var6)) { _fun0003_ip = 94; continue _fun0003 }
 89:
            var14 = var27.channel;
 94:
            var28 = var3.width;
            var25 = var3.height;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 13;
            var3 = var13[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var8 = var28 * var3;
            var5 = _closure1_slot3;
            var3 = var5.useId;
            var26 = var3.bind(var5)();
            var9 = 10;
            var3 = var13[var9];
            var5 = var6.bind(var4)(var3);
            var3 = {};
            var3['activityItem'] = var10;
            var3['context'] = var27;
            var3['guildId'] = var16;
            var3['locationObject'] = var15;
            var3['onActivityItemSelected'] = var12;
            var12 = 14;
            var12 = var13[var12];
            var12 = var6.bind(var4)(var12);
            var3['embeddedActivitiesManager'] = var12;
            var3['backgroundResolution'] = var8;
            var12 = ['embedded_cover'];
            var3['assetNames'] = var12;
            var3['launchingComponentId'] = var26;
            var15 = _closure1_slot0;
            var12 = 15;
            var12 = var13[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.CommandOrigin;
            var12 = var12.VOICE_UI;
            var3['commandOrigin'] = var12;
            var3 = var5.bind(var4)(var3);
            var30 = var3.imageBackground;
            var12 = var3.activityAction;
            var5 = var3.onActivityItemSelected;
            var21 = var3.labelType;
            var3 = 16;
            var3 = var13[var3];
            var6 = var6.bind(var4)(var3);
            var3 = {};
            var13 = var10.application;
            var13 = var13.id;
            var3['applicationId'] = var13;
            var3['size'] = var8;
            var8 = ['embedded_background'];
            var3['names'] = var8;
            var29 = var6.bind(var4)(var3);
            var18 = !var2;
            if(!var18) { _fun0003_ip = 419; continue _fun0003 }
 344:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var9];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ActivityAction;
            var8 = var3.LEAVE;
            var3 = new Array(2);
            var3[0] = var8;
            var2 = var2[var9];
            var2 = var6.bind(var4)(var2);
            var2 = var2.ActivityAction;
            var2 = var2.JOIN;
            var3[1] = var2;
            var2 = var3.includes;
            var2 = var2.bind(var3)(var12);
            var18 = !var2;
 419:
            _closure2_slot1 = var18;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var2 = 17;
            var2 = var31[var2];
            var8 = var32.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot5;
            var3[1] = var2;
            var2 = var10.application;
            var13 = var2.id;
            var2 = new Array(2);
            var2[0] = var13;
            var2[1] = var18;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0004_ip = 77; continue _fun0004 }
 10:
                    var6 = _closure1_slot4;
                    var5 = var6.inDevModeForApplication;
                    var2 = _closure2_slot0;
                    var2 = var2.application;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var2);
                    if(var2) { _fun0004_ip = 74; continue _fun0004 }
 45:
                    var5 = _closure1_slot5;
                    var4 = var5.inTestModeForApplication;
                    var3 = _closure2_slot0;
                    var3 = var3.application;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
 74:
                    var1 = var2;
 77:
                    return var1;
                }
            };
            var17 = var6.bind(var8)(var3, var1, var2);
            var3 = _closure1_slot9;
            var1 = 18;
            var1 = var31[var1];
            var1 = var32.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var6 = 0.7;
            var1['activeOpacity'] = var6;
            var1['onPress'] = var5;
            var5 = var31[var9];
            var5 = var32.bind(var4)(var5);
            var5 = var5.ActivityAction;
            var5 = var5.LEAVE;
            var5 = var12 === var5;
            var1['disabled'] = var5;
            var5 = _closure1_slot6;
            var1['androidRippleConfig'] = var5;
            var6 = var22.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var6['width'] = var28;
            var6['height'] = var25;
            var5[1] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot9;
            var5 = 19;
            var5 = var31[var5];
            var5 = var32.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var13 = 'dark';
            var5['theme'] = var13;
            var19 = _closure1_slot9;
            var23 = _closure1_slot1;
            var16 = 11;
            var13 = var31[var16];
            var15 = var23.bind(var4)(var13);
            var13 = {};
            var20 = var22.imageOuterContainer;
            var13['style'] = var20;
            var24 = _closure1_slot7;
            var20 = 20;
            var20 = var31[var20];
            var23 = var23.bind(var4)(var20);
            var20 = {};
            var33 = var10.application;
            var33 = var33.name;
            var20['accessibilityLabel'] = var33;
            var31 = var31[var9];
            var31 = var32.bind(var4)(var31);
            var31 = var31.ActivityAction;
            var31 = var31.START;
            if(!(var12 === var31)) { _fun0003_ip = 741; continue _fun0003 }
 738:
            var29 = var30;
 741:
            var20['imageBackground'] = var29;
            var25 = var28 / var25;
            var20['aspectRatio'] = var25;
            var23 = var24.bind(var4)(var23, var20);
            var20 = new Array(2);
            var20[0] = var23;
            var25 = _closure1_slot7;
            var24 = _closure1_slot11;
            var23 = {};
            var23['action'] = var12;
            var28 = var10.application;
            var28 = var28.id;
            var23['applicationId'] = var28;
            var23['context'] = var27;
            var23['activityItem'] = var10;
            var23['launchingComponentId'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var20[1] = var23;
            var13['children'] = var20;
            var15 = var19.bind(var4)(var15, var13);
            var13 = new Array(3);
            var13[0] = var15;
            var15 = null;
            if(!var18) { _fun0003_ip = 881; continue _fun0003 }
 844:
            var20 = _closure1_slot7;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 21;
            var18 = var23[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var18['labelType'] = var21;
            var15 = var20.bind(var4)(var19, var18);
 881:
            var13[1] = var15;
            var15 = null;
            if(!var17) { _fun0003_ip = 1016; continue _fun0003 }
 893:
            var18 = _closure1_slot7;
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var16 = var25[var16];
            var17 = var24.bind(var4)(var16);
            var16 = {};
            var19 = var22.developerIconContainer;
            var16['style'] = var19;
            var21 = _closure1_slot7;
            var23 = 22;
            var19 = var25[var23];
            var20 = var24.bind(var4)(var19);
            var19 = {};
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.Sizes;
            var23 = var23.REFRESH_SMALL_16;
            var19['size'] = var23;
            var23 = 23;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var19['source'] = var23;
            var22 = var22.developerIconColor;
            var22 = var22.color;
            var19['color'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 1016:
            var13[2] = var15;
            var5['children'] = var13;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var4)(var6);
            var6 = var6.ActivityAction;
            var6 = var6.START;
            var6 = var12 === var6;
            if(!var6) { _fun0003_ip = 1152; continue _fun0003 }
 1074:
            var9 = _closure1_slot7;
            var8 = _closure1_slot12;
            var7 = {};
            var7['action'] = var12;
            var13 = var11 == var14;
            var12 = undefined;
            if(var13) { _fun0003_ip = 1102; continue _fun0003 }
 1097:
            var12 = var14.id;
 1102:
            var7['channelId'] = var12;
            var13 = var11 == var14;
            var12 = undefined;
            if(var13) { _fun0003_ip = 1125; continue _fun0003 }
 1115:
            var13 = var14.getGuildId;
            var12 = var13.bind(var14)();
 1125:
            var13 = var11 != var12;
            var11 = undefined;
            if(!var13) { _fun0003_ip = 1137; continue _fun0003 }
 1134:
            var11 = var12;
 1137:
            var7['guildId'] = var11;
            var7['activityItem'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1152:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();