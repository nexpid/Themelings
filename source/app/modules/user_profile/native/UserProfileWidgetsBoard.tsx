// app/modules/user_profile/native/UserProfileWidgetsBoard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function useGamePress(arg1, arg2) {
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 8;
        var1 = var6[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var5 = 'UserProfileWidgetsBoard';
        var1['location'] = var5;
        var5 = arg2;
        var1['applicationId'] = var5;
        var5 = _closure1_slot0;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.GameProfileSources;
        var4 = var4.UserProfile;
        var1['source'] = var4;
        var4 = arg1;
        var1['sourceUserId'] = var4;
        var4 = true;
        var1['trackEntryPointImpression'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var13 = 1;
    var5 = var7[var13];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.Image;
    var _closure1_slot5 = var5;
    var5 = var2.Pressable;
    var _closure1_slot6 = var5;
    var2 = var2.View;
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.UserProfileSections;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot10 = var5;
    var5 = var2.jsxs;
    var _closure1_slot11 = var5;
    var2 = var2.Fragment;
    var _closure1_slot12 = var2;
    var2 = {'top': 8, 'bottom': 8, 'left': 8, 'right': 8};
    var _closure1_slot13 = var2;
    var2 = 6;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {};
    var11 = 7;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var10['gap'] = var14;
    var2['board'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var14;
    var2['coverPlaceholder'] = var10;
    var10 = {};
    var14 = 'row';
    var10['flexDirection'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_12;
    var10['gap'] = var14;
    var2['favoriteRow'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_8;
    var10['gap'] = var14;
    var2['favoriteDetails'] = var10;
    var14 = 0.75;
    var10 = {'width': 104, 'aspectRatio': 0.75};
    var2['favoriteCover'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var10['gap'] = var15;
    var2['list'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var10['gap'] = var15;
    var2['listRow'] = var10;
    var10 = {'width': 104, 'aspectRatio': 0.75};
    var2['listCover'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_8;
    var10['gap'] = var15;
    var2['listDetails'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'flex-start'};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_4;
    var10['gap'] = var15;
    var2['comment'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var2['commentText'] = var10;
    var10 = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_8;
    var10['gap'] = var15;
    var2['grid'] = var10;
    var10 = {};
    var10['aspectRatio'] = var14;
    var2['gridCover'] = var10;
    var10 = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var10['gap'] = var14;
    var2['tags'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var10['gap'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_8;
    var10['paddingHorizontal'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var10['paddingVertical'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var10['borderWidth'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var10['borderColor'] = var13;
    var2['tag'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_12;
    var10['marginTop'] = var11;
    var2['viewMore'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot14 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.uri;
            var8 = var1.style;
            var1 = _closure1_slot14;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            if(!(var1 == var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot10;
            var3 = _closure1_slot7;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var10 = var7.coverPlaceholder;
            var6[1] = var10;
            var1['style'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = {};
            var6['uri'] = var9;
            var2['source'] = var6;
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var7.coverPlaceholder;
            var6[1] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot15 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.tags;
            var1 = _closure1_slot14;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var _closure2_slot0 = var7;
            var1 = null;
            if(!(var1 == var8)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var8 = new Array(0);
case 5:
            var4 = var8.flatMap;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.getWidgetGameTagMetadata;
                    var2 = var1.bind(var2)(var4);
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var1 = new Array(0);
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var3 = {};
                    var3['tag'] = var4;
                    var3['meta'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 9:
                    return var1;
                }
            };
            var8 = var4.bind(var8)(var3);
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot10;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var7.tags;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var5 = var1.tag;
                var11 = var1.meta;
                var8 = var11.icon;
                var4 = _closure1_slot11;
                var3 = _closure1_slot7;
                var2 = {};
                var1 = _closure2_slot0;
                var1 = var1.tag;
                var2['style'] = var1;
                var9 = _closure1_slot10;
                var6 = {};
                var1 = 'xs';
                var6['size'] = var1;
                var13 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 7;
                var12 = var10[var1];
                var1 = undefined;
                var12 = var13.bind(var1)(var12);
                var12 = var12.colors;
                var12 = var12.TEXT_MUTED;
                var6['color'] = var12;
                var8 = var9.bind(var1)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var8 = _closure1_slot0;
                var7 = 12;
                var7 = var10[var7];
                var7 = var8.bind(var1)(var7);
                var8 = var7.Text;
                var7 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
                var10 = var11.getText;
                var10 = var10.bind(var11)();
                var7['children'] = var10;
                var7 = var9.bind(var1)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot16 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var11 = var1.game;
            var2 = var1.disableInteraction;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot14;
            var18 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var11.applicationId;
            var1 = var3.bind(var4)(var1);
            var16 = var1.coverImageUrl;
            var17 = var1.gameName;
            var3 = _closure1_slot21;
            var1 = var11.applicationId;
            var1 = var3.bind(var4)(var5, var1);
            var13 = undefined;
            if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var13 = var1;
case 12:
            _closure2_slot0 = var13;
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var18.favoriteRow;
            var1['style'] = var5;
            var14 = _closure1_slot10;
            var10 = _closure1_slot6;
            var5 = {};
            var6 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var2 = _closure2_slot0;
                    var1 = var2.bind(var3)();
case 14:
                    return var1;
                }
            };
            var5['onPress'] = var6;
            var9 = null;
            var6 = var9 == var13;
            var5['disabled'] = var6;
            var12 = 'button';
            var5['accessibilityRole'] = var12;
            var5['accessibilityLabel'] = var17;
            var7 = _closure1_slot15;
            var6 = {};
            var6['uri'] = var16;
            var16 = var18.favoriteCover;
            var6['style'] = var16;
            var6 = var14.bind(var4)(var7, var6);
            var5['children'] = var6;
            var6 = var14.bind(var4)(var10, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = var18.favoriteDetails;
            var6['style'] = var7;
            var7 = {};
            var15 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                    var2 = _closure2_slot0;
                    var1 = var2.bind(var3)();
case 14:
                    return var1;
                }
            };
            var7['onPress'] = var15;
            var13 = var9 == var13;
            var7['disabled'] = var13;
            var7['accessibilityRole'] = var12;
            var7['accessibilityLabel'] = var17;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var19 = 12;
            var15 = var13[var19];
            var15 = var12.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/semibold', 'color': 'text-default', 'lineClamp': 2};
            var15['children'] = var17;
            var15 = var14.bind(var4)(var16, var15);
            var7['children'] = var15;
            var10 = var14.bind(var4)(var10, var7);
            var7 = new Array(3);
            var7[0] = var10;
            var10 = 14;
            var10 = var13[var10];
            var12 = var12.bind(var4)(var10);
            var10 = var12.isNullOrEmpty;
            var14 = var11.comment;
            var13 = var9 == var14;
            var9 = undefined;
            if(var13) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var13 = var14.trim;
            var9 = var13.bind(var14)();
case 16:
            var9 = var10.bind(var12)(var9);
            var9 = !var9;
            if(!var9) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var13 = _closure1_slot11;
            var12 = _closure1_slot7;
            var10 = {};
            var14 = var18.comment;
            var10['style'] = var14;
            var17 = _closure1_slot10;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var14 = 15;
            var14 = var15[var14];
            var14 = var16.bind(var4)(var14);
            var20 = var14.QuoteIcon;
            var14 = {};
            var21 = 'xxs';
            var14['size'] = var21;
            var22 = _closure1_slot1;
            var21 = 7;
            var21 = var15[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.colors;
            var21 = var21.TEXT_MUTED;
            var14['color'] = var21;
            var20 = var17.bind(var4)(var20, var14);
            var14 = new Array(2);
            var14[0] = var20;
            var15 = var15[var19];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-sm/normal', 'color': 'text-muted', 'lineClamp': 3};
            var18 = var18.commentText;
            var15['style'] = var18;
            var18 = var11.comment;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var10['children'] = var14;
            var9 = var13.bind(var4)(var12, var10);
case 18:
            var7[1] = var9;
            var10 = _closure1_slot10;
            var9 = _closure1_slot16;
            var8 = {};
            var11 = var11.tags;
            var8['tags'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7[2] = var8;
            var6['children'] = var7;
            var6 = var3.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot17 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var11 = var1.game;
            var2 = var1.disableInteraction;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot14;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var11.applicationId;
            var1 = var3.bind(var4)(var1);
            var18 = var1.coverImageUrl;
            var14 = var1.gameName;
            var3 = _closure1_slot21;
            var1 = var11.applicationId;
            var1 = var3.bind(var4)(var5, var1);
            var15 = undefined;
            if(var2) { _fun0007_ip = 12; continue _fun0007 }
case 13:
            var15 = var1;
case 12:
            _closure2_slot0 = var15;
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var7.listRow;
            var1['style'] = var5;
            var10 = _closure1_slot10;
            var9 = _closure1_slot6;
            var5 = {};
            var6 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 14; continue _fun0008 }
case 15:
                    var2 = _closure2_slot0;
                    var1 = var2.bind(var3)();
case 14:
                    return var1;
                }
            };
            var5['onPress'] = var6;
            var13 = null;
            var6 = var13 == var15;
            var5['disabled'] = var6;
            var12 = 'button';
            var5['accessibilityRole'] = var12;
            var5['accessibilityLabel'] = var14;
            var17 = _closure1_slot15;
            var6 = {};
            var6['uri'] = var18;
            var18 = var7.listCover;
            var6['style'] = var18;
            var6 = var10.bind(var4)(var17, var6);
            var5['children'] = var6;
            var6 = var10.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = var7.listDetails;
            var6['style'] = var7;
            var7 = {};
            var16 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0009_ip = 14; continue _fun0009 }
case 15:
                    var2 = _closure2_slot0;
                    var1 = var2.bind(var3)();
case 14:
                    return var1;
                }
            };
            var7['onPress'] = var16;
            var13 = var13 == var15;
            var7['disabled'] = var13;
            var7['accessibilityRole'] = var12;
            var7['accessibilityLabel'] = var14;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 12;
            var12 = var15[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-md/medium', 'color': 'text-default', 'lineClamp': 2};
            var12['children'] = var14;
            var12 = var10.bind(var4)(var13, var12);
            var7['children'] = var12;
            var9 = var10.bind(var4)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var9 = _closure1_slot16;
            var8 = {};
            var11 = var11.tags;
            var8['tags'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7[1] = var8;
            var6['children'] = var7;
            var6 = var3.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot18 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var11 = var2.userId;
            var1 = var2.game;
            var9 = var2.coverWidth;
            var2 = var2.disableInteraction;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot14;
            var7 = var3.bind(var4)();
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var1.applicationId;
            var3 = var6.bind(var4)(var3);
            var8 = var3.coverImageUrl;
            var6 = var3.gameName;
            var3 = _closure1_slot21;
            var1 = var1.applicationId;
            var1 = var3.bind(var4)(var11, var1);
            var11 = undefined;
            if(var2) { _fun0010_ip = 20; continue _fun0010 }
case 21:
            var11 = var1;
case 20:
            _closure2_slot0 = var11;
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var10 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0011_ip = 14; continue _fun0011 }
case 15:
                    var2 = _closure2_slot0;
                    var1 = var2.bind(var3)();
case 14:
                    return var1;
                }
            };
            var1['onPress'] = var10;
            var10 = null;
            var10 = var10 == var11;
            var1['disabled'] = var10;
            var10 = 'button';
            var1['accessibilityRole'] = var10;
            var1['accessibilityLabel'] = var6;
            var6 = _closure1_slot15;
            var5 = {};
            var5['uri'] = var8;
            var8 = var7.gridCover;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var8['width'] = var9;
            var7[1] = var8;
            var5['style'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot19 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var11 = var1.userId;
            var _closure2_slot0 = var11;
            var10 = var1.widget;
            var _closure2_slot1 = var10;
            var9 = var1.cardStyle;
            var8 = var1.disableInteraction;
            var _closure2_slot2 = var8;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot14;
            var20 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var5.bind(var6)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 17;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = 'UserProfileWidgetsBoard';
            var23 = var5.bind(var4)(var1);
            var14 = _closure1_slot4;
            var5 = var14.useState;
            var1 = false;
            var1 = var5.bind(var14)(var1);
            var12 = _closure1_slot3;
            var29 = 2;
            var1 = var12.bind(var4)(var1, var29);
            var13 = 0;
            var21 = var1[var13];
            var5 = 1;
            var1 = var1[var5];
            var _closure2_slot3 = var1;
            var1 = var14.useState;
            var1 = var1.bind(var14)(var13);
            var1 = var12.bind(var4)(var1, var29);
            var17 = var1[var13];
            var1 = var1[var5];
            var _closure2_slot4 = var1;
            var1 = 18;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'containerWidth': null, 'sidePadding': 0, 'gap': 8, 'minCardSize': 90, 'maxCardSize': 115};
            var5 = var17 > var13;
            var3 = undefined;
            if(!var5) { _fun0012_ip = 22; continue _fun0012 }
case 23:
            var3 = var17;
case 22:
            var1['containerWidth'] = var3;
            var1 = var2.bind(var4)(var1);
            var1 = var1.cardWidth;
            _closure2_slot5 = var1;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var1 = var10.games;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.uniqBy;
                var1 = _closure2_slot1;
                var2 = var1.games;
                var1 = 'applicationId';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var12 = var3.bind(var5)(var1, var2);
            var2 = var10.type;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 20;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.WidgetType;
            var1 = var1.FAVORITE_GAMES;
            if(!(var1 !== var2)) { _fun0012_ip = 24; continue _fun0012 }
case 25:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.WidgetType;
            var1 = var1.CURRENT_GAMES;
            if(!(var1 !== var2)) { _fun0012_ip = 26; continue _fun0012 }
case 27:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.WidgetType;
            var1 = var1.WANT_TO_PLAY_GAMES;
            if(!(var1 !== var2)) { _fun0012_ip = 28; continue _fun0012 }
case 29:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.WidgetType;
            var1 = var1.PLAYED_GAMES;
            if(!(var1 !== var2)) { _fun0012_ip = 28; continue _fun0012 }
case 30:
            var1 = null;
            return var1;
case 28:
            var1 = var12.length;
            var33 = 6;
            var14 = var1 > var33;
            var24 = var12;
            if(var21) { _fun0012_ip = 31; continue _fun0012 }
case 32:
            var1 = var12.slice;
            var24 = var1.bind(var12)(var13, var33);
case 31:
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var16 = _closure1_slot10;
            var15 = _closure1_slot7;
            var5 = {};
            var18 = var20.grid;
            var5['style'] = var18;
            var18 = function onLayout(arg1) {
                var3 = _closure2_slot4;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onLayout'] = var18;
            var17 = var17 > var13;
            if(!var17) { _fun0012_ip = 33; continue _fun0012 }
case 34:
            var22 = var24.map;
            var18 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot19;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var3['userId'] = var6;
                    var3['game'] = var1;
                    var7 = _closure2_slot5;
                    var6 = null;
                    var7 = var6 != var7;
                    var6 = 104;
                    if(!var7) { _fun0013_ip = 35; continue _fun0013 }
case 36:
                    var6 = _closure2_slot5;
case 35:
                    var3['coverWidth'] = var6;
                    var2 = _closure2_slot2;
                    var3['disableInteraction'] = var2;
                    var2 = var1.applicationId;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                }
            };
            var17 = var22.bind(var24)(var18);
case 33:
            var5['children'] = var17;
            var15 = var16.bind(var4)(var15, var5);
            var5 = new Array(2);
            var5[0] = var15;
            if(!var14) { _fun0012_ip = 37; continue _fun0012 }
case 38:
            var17 = _closure1_slot10;
            var16 = _closure1_slot6;
            var15 = {};
            var18 = var20.viewMore;
            var15['style'] = var18;
            var18 = _closure1_slot13;
            var15['hitSlop'] = var18;
            var18 = function onPress() {
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var15['onPress'] = var18;
            var18 = 'button';
            var15['accessibilityRole'] = var18;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 12;
            var18 = var24[var18];
            var18 = var22.bind(var4)(var18);
            var22 = var18.Text;
            var18 = {};
            var24 = 'text-sm/semibold';
            if(!var23) { _fun0012_ip = 39; continue _fun0012 }
case 40:
            var24 = 'text-sm/medium';
case 39:
            var18['variant'] = var24;
            var24 = 'text-muted';
            var18['color'] = var24;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var25 = 21;
            var24 = var30[var25];
            var24 = var28.bind(var4)(var24);
            var27 = var24.intl;
            if(var21) { _fun0012_ip = 41; continue _fun0012 }
case 42:
            var31 = var27.formatToPlainString;
            var24 = var30[var25];
            var24 = var28.bind(var4)(var24);
            var24 = var24.t;
            var26 = var24.zr0Y5R;
            var24 = {};
            var32 = var12.length;
            var32 = var32 - var33;
            var24['numberOfItems'] = var32;
            var24 = var31.bind(var27)(var26, var24);
            _fun0012_ip = 43; continue _fun0012;
case 41:
            var26 = var27.string;
            var25 = var30[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25["6MwJo/"];
            var24 = var26.bind(var27)(var25);
case 43:
            var18['children'] = var24;
            var18 = var17.bind(var4)(var22, var18);
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 37:
            var5[1] = var14;
            var1['children'] = var5;
            var5 = var3.bind(var4)(var2, var1);
            _fun0012_ip = 44; continue _fun0012;
case 26:
            var1 = var12.length;
            var15 = var1 > var29;
            var24 = var12;
            if(var21) { _fun0012_ip = 45; continue _fun0012 }
case 46:
            var1 = var12.slice;
            var24 = var1.bind(var12)(var13, var29);
case 45:
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var17 = _closure1_slot10;
            var16 = _closure1_slot7;
            var14 = {};
            var18 = var20.list;
            var14['style'] = var18;
            var22 = var24.map;
            var18 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot10;
                var4 = _closure1_slot18;
                var3 = {};
                var6 = _closure2_slot0;
                var3['userId'] = var6;
                var3['game'] = var1;
                var2 = _closure2_slot2;
                var3['disableInteraction'] = var2;
                var2 = var1.applicationId;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var18 = var22.bind(var24)(var18);
            var14['children'] = var18;
            var16 = var17.bind(var4)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            if(!var15) { _fun0012_ip = 47; continue _fun0012 }
case 48:
            var18 = _closure1_slot10;
            var17 = _closure1_slot6;
            var16 = {};
            var20 = var20.viewMore;
            var16['style'] = var20;
            var20 = _closure1_slot13;
            var16['hitSlop'] = var20;
            var19 = function onPress() {
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var16['onPress'] = var19;
            var19 = 'button';
            var16['accessibilityRole'] = var19;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 12;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {};
            var22 = 'text-sm/semibold';
            if(!var23) { _fun0012_ip = 49; continue _fun0012 }
case 50:
            var22 = 'text-sm/medium';
case 49:
            var19['variant'] = var22;
            var22 = 'text-muted';
            var19['color'] = var22;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 21;
            var23 = var26[var22];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            if(var21) { _fun0012_ip = 51; continue _fun0012 }
case 52:
            var27 = var24.formatToPlainString;
            var21 = var26[var22];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var23 = var21.zr0Y5R;
            var21 = {};
            var28 = var12.length;
            var28 = var28 - var29;
            var21['numberOfItems'] = var28;
            var21 = var27.bind(var24)(var23, var21);
            _fun0012_ip = 53; continue _fun0012;
case 51:
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22["6MwJo/"];
            var21 = var23.bind(var24)(var22);
case 53:
            var19['children'] = var21;
            var19 = var18.bind(var4)(var20, var19);
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 47:
            var14[1] = var15;
            var1['children'] = var14;
            var5 = var3.bind(var4)(var2, var1);
            _fun0012_ip = 44; continue _fun0012;
case 24:
            var3 = _closure1_slot10;
            var2 = _closure1_slot17;
            var1 = {};
            var1['userId'] = var11;
            var12 = var12[var13];
            var1['game'] = var12;
            var1['disableInteraction'] = var8;
            var5 = var3.bind(var4)(var2, var1);
case 44:
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 22;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var9;
            var12 = _closure1_slot0;
            var9 = 23;
            var9 = var13[var9];
            var12 = var12.bind(var4)(var9);
            var9 = var12.getWidgetTitle;
            var9 = var9.bind(var12)(var10);
            var1['title'] = var9;
            var6 = !var6;
            if(!var6) { _fun0012_ip = 54; continue _fun0012 }
case 55:
            var6 = !var8;
case 54:
            if(!var6) { _fun0012_ip = 56; continue _fun0012 }
case 57:
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 24;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['userId'] = var11;
            var7['widget'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 56:
            var1['trailingAction'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot20 = var2;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileWidgetsBoard.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function UserProfileWidgetsBoard(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.userId;
            var _closure2_slot0 = var2;
            var8 = var1.gameWidgets;
            var9 = var1.isVisible;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0014_ip = 6; continue _fun0014 }
case 3:
            var9 = true;
case 6:
            var1 = var1.cardStyle;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot14;
            var7 = var1.bind(var5)();
            var1 = var8.length;
            var4 = 0;
            var3 = var1 > var4;
            var1 = function useTrackUserProfileWidgetsView(arg1, arg2) {
                var8 = arg1;
                var7 = arg2;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var7;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.useUserProfileAnalyticsContext;
                var4 = var4.bind(var5)();
                var6 = var4.trackUserProfileAction;
                var _closure3_slot2 = var6;
                var5 = _closure1_slot4;
                var4 = var5.useRef;
                var3 = false;
                var3 = var4.bind(var5)(var3);
                var _closure3_slot3 = var3;
                var4 = var5.useEffect;
                var3 = new Array(3);
                var3[0] = var8;
                var3[1] = var7;
                var3[2] = var6;
                var2 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var2 = _closure3_slot0;
                        if(var2) { _fun0015_ip = 58; continue _fun0015 }
case 59:
                        var3 = _closure3_slot3;
                        var2 = false;
                        var3['current'] = var2;
                        _fun0015_ip = 60; continue _fun0015;
case 58:
                        var2 = _closure3_slot1;
                        if(!var2) { _fun0015_ip = 61; continue _fun0015 }
case 62:
                        var3 = _closure3_slot3;
                        var3 = var3.current;
                        var2 = !var3;
case 61:
                        if(!var2) { _fun0015_ip = 60; continue _fun0015 }
case 63:
                        var4 = _closure3_slot2;
                        var3 = {};
                        var2 = 'VIEW';
                        var3['action'] = var2;
                        var2 = _closure1_slot9;
                        var2 = var2.WIDGETS;
                        var3['section'] = var2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = _closure3_slot3;
                        var1 = true;
                        var2['current'] = var1;
case 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var1 = var1.bind(var5)(var9, var3);
            var3 = var8.length;
            var1 = null;
            if(!(var4 !== var3)) { _fun0014_ip = 64; continue _fun0014 }
case 65:
            var4 = _closure1_slot10;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var7.board;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                var2 = arg1;
                var5 = _closure1_slot10;
                var4 = _closure1_slot20;
                var3 = {};
                var6 = _closure2_slot0;
                var3['userId'] = var6;
                var3['widget'] = var2;
                var1 = _closure2_slot1;
                var3['cardStyle'] = var1;
                var1 = var2.getUniqueKey;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 64:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['WidgetSection'] = var2;
    return var1;
})();