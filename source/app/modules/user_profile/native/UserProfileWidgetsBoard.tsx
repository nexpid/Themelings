// app/modules/user_profile/native/UserProfileWidgetsBoard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function useGamePress(arg1, arg2) {
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 7;
        var1 = var6[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var5 = 'UserProfileWidgetsBoard';
        var1['location'] = var5;
        var5 = arg2;
        var1['applicationId'] = var5;
        var5 = _closure1_slot0;
        var4 = 8;
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
    var _closure1_slot19 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var7 = var4.Pressable;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.jsxs;
    var _closure1_slot10 = var7;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var10['gap'] = var14;
    var4['board'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var14;
    var4['coverPlaceholder'] = var10;
    var10 = {};
    var14 = 'row';
    var10['flexDirection'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_12;
    var10['gap'] = var14;
    var4['favoriteRow'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_8;
    var10['gap'] = var14;
    var4['favoriteDetails'] = var10;
    var14 = 0.75;
    var10 = {'width': 104, 'aspectRatio': 0.75};
    var4['favoriteCover'] = var10;
    var10 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var10['gap'] = var15;
    var4['list'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var10['gap'] = var15;
    var4['listRow'] = var10;
    var10 = {'width': 104, 'aspectRatio': 0.75};
    var4['listCover'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_8;
    var10['gap'] = var15;
    var4['listDetails'] = var10;
    var10 = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_8;
    var10['gap'] = var15;
    var4['grid'] = var10;
    var10 = {};
    var10['aspectRatio'] = var14;
    var4['gridCover'] = var10;
    var10 = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var10['gap'] = var14;
    var4['tags'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var10['gap'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_8;
    var10['paddingHorizontal'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var10['paddingVertical'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var10['borderWidth'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var10['borderColor'] = var13;
    var4['tag'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_8;
    var10['marginTop'] = var11;
    var4['viewMore'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.uri;
            var8 = var1.style;
            var1 = _closure1_slot12;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            if(!(var1 == var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot9;
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
            var4 = _closure1_slot9;
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
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.tags;
            var1 = _closure1_slot12;
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
                    var1 = 10;
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
            var4 = _closure1_slot9;
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
                var4 = _closure1_slot10;
                var3 = _closure1_slot7;
                var2 = {};
                var1 = _closure2_slot0;
                var1 = var1.tag;
                var2['style'] = var1;
                var9 = _closure1_slot9;
                var6 = {};
                var1 = 'xs';
                var6['size'] = var1;
                var13 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 6;
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
                var7 = 11;
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
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userId;
            var12 = var1.game;
            var1 = _closure1_slot12;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 12;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var12.applicationId;
            var1 = var2.bind(var4)(var1);
            var7 = var1.coverImageUrl;
            var17 = var1.gameName;
            var2 = _closure1_slot19;
            var1 = var12.applicationId;
            var5 = var2.bind(var4)(var3, var1);
            var _closure2_slot0 = var5;
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var10 = var8.favoriteRow;
            var1['style'] = var10;
            var6 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var2 = _closure2_slot0;
                    var1 = var2.bind(var3)();
case 12:
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var10 = null;
            var5 = var10 == var5;
            var1['disabled'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var1['accessibilityLabel'] = var17;
            var16 = _closure1_slot9;
            var6 = _closure1_slot13;
            var5 = {};
            var5['uri'] = var7;
            var7 = var8.favoriteCover;
            var5['style'] = var7;
            var6 = var16.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot7;
            var6 = {};
            var8 = var8.favoriteDetails;
            var6['style'] = var8;
            var13 = _closure1_slot0;
            var15 = 11;
            var8 = var14[var15];
            var8 = var13.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {'variant': 'text-md/semibold', 'color': 'text-default', 'lineClamp': 2};
            var8['children'] = var17;
            var11 = var16.bind(var4)(var11, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var11 = 13;
            var11 = var14[var11];
            var13 = var13.bind(var4)(var11);
            var11 = var13.isNullOrEmpty;
            var16 = var12.comment;
            var14 = var10 == var16;
            var10 = undefined;
            if(var14) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var14 = var16.trim;
            var10 = var14.bind(var16)();
case 14:
            var10 = var11.bind(var13)(var10);
            var10 = !var10;
            if(!var10) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var14 = _closure1_slot9;
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var15];
            var11 = var13.bind(var4)(var11);
            var13 = var11.Text;
            var11 = {'variant': 'text-sm/normal', 'color': 'text-muted', 'lineClamp': 3};
            var15 = var12.comment;
            var11['children'] = var15;
            var10 = var14.bind(var4)(var13, var11);
case 16:
            var8[1] = var10;
            var11 = _closure1_slot9;
            var10 = _closure1_slot14;
            var9 = {};
            var12 = var12.tags;
            var9['tags'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var12 = var1.game;
        var1 = _closure1_slot12;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var14 = _closure1_slot2;
        var1 = 12;
        var1 = var14[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var12.applicationId;
        var1 = var2.bind(var4)(var1);
        var7 = var1.coverImageUrl;
        var13 = var1.gameName;
        var2 = _closure1_slot19;
        var1 = var12.applicationId;
        var6 = var2.bind(var4)(var3, var1);
        var _closure2_slot0 = var6;
        var3 = _closure1_slot10;
        var2 = _closure1_slot6;
        var1 = {};
        var10 = var8.listRow;
        var1['style'] = var10;
        var5 = function onPress() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var4 = var1 == var3;
                var3 = undefined;
                var1 = undefined;
                if(var4) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                var2 = _closure2_slot0;
                var1 = var2.bind(var3)();
case 12:
                return var1;
            }
        };
        var1['onPress'] = var5;
        var5 = null;
        var5 = var5 == var6;
        var1['disabled'] = var5;
        var5 = 'button';
        var1['accessibilityRole'] = var5;
        var1['accessibilityLabel'] = var13;
        var11 = _closure1_slot9;
        var6 = _closure1_slot13;
        var5 = {};
        var5['uri'] = var7;
        var7 = var8.listCover;
        var5['style'] = var7;
        var6 = var11.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var7 = _closure1_slot7;
        var6 = {};
        var8 = var8.listDetails;
        var6['style'] = var8;
        var10 = _closure1_slot0;
        var8 = 11;
        var8 = var14[var8];
        var8 = var10.bind(var4)(var8);
        var10 = var8.Text;
        var8 = {'variant': 'text-md/medium', 'color': 'text-default', 'lineClamp': 2};
        var8['children'] = var13;
        var10 = var11.bind(var4)(var10, var8);
        var8 = new Array(2);
        var8[0] = var10;
        var10 = _closure1_slot14;
        var9 = {};
        var12 = var12.tags;
        var9['tags'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[1] = var9;
        var6['children'] = var8;
        var6 = var3.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        var2 = arg1;
        var3 = var2.userId;
        var1 = var2.game;
        var9 = var2.coverWidth;
        var2 = _closure1_slot12;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 12;
        var2 = var8[var2];
        var6 = var6.bind(var4)(var2);
        var2 = var1.applicationId;
        var2 = var6.bind(var4)(var2);
        var8 = var2.coverImageUrl;
        var6 = var2.gameName;
        var2 = _closure1_slot19;
        var1 = var1.applicationId;
        var11 = var2.bind(var4)(var3, var1);
        var _closure2_slot0 = var11;
        var3 = _closure1_slot9;
        var2 = _closure1_slot6;
        var1 = {};
        var10 = function onPress() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var4 = var1 == var3;
                var3 = undefined;
                var1 = undefined;
                if(var4) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                var2 = _closure2_slot0;
                var1 = var2.bind(var3)();
case 12:
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
        var6 = _closure1_slot13;
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
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var11 = var1.userId;
            var _closure2_slot0 = var11;
            var8 = var1.widget;
            var _closure2_slot1 = var8;
            var7 = var1.cardStyle;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot12;
            var13 = var1.bind(var4)();
            var9 = _closure1_slot4;
            var2 = var9.useState;
            var1 = false;
            var1 = var2.bind(var9)(var1);
            var5 = _closure1_slot3;
            var3 = 2;
            var1 = var5.bind(var4)(var1, var3);
            var10 = 0;
            var20 = var1[var10];
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot2 = var1;
            var1 = var9.useState;
            var1 = var1.bind(var9)(var10);
            var1 = var5.bind(var4)(var1, var3);
            var17 = var1[var10];
            var1 = var1[var2];
            var _closure2_slot3 = var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'containerWidth': null, 'sidePadding': 0, 'gap': 8, 'minCardSize': 90, 'maxCardSize': 115};
            var5 = var17 > var10;
            var3 = undefined;
            if(!var5) { _fun0008_ip = 18; continue _fun0008 }
case 19:
            var3 = var17;
case 18:
            var1['containerWidth'] = var3;
            var1 = var2.bind(var4)(var1);
            var1 = var1.cardWidth;
            _closure2_slot4 = var1;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var1 = var8.games;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
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
            var9 = var3.bind(var5)(var1, var2);
            var2 = var8.type;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 16;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.WidgetType;
            var1 = var1.FAVORITE_GAMES;
            if(!(var1 !== var2)) { _fun0008_ip = 20; continue _fun0008 }
case 21:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.WidgetType;
            var1 = var1.CURRENT_GAMES;
            if(!(var1 !== var2)) { _fun0008_ip = 22; continue _fun0008 }
case 17:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.WidgetType;
            var1 = var1.WANT_TO_PLAY_GAMES;
            if(!(var1 !== var2)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.WidgetType;
            var1 = var1.PLAYED_GAMES;
            if(!(var1 !== var2)) { _fun0008_ip = 23; continue _fun0008 }
case 25:
            var1 = null;
            return var1;
case 23:
            var1 = var9.length;
            var28 = 6;
            var14 = var1 > var28;
            var21 = var9;
            if(var20) { _fun0008_ip = 26; continue _fun0008 }
case 27:
            var1 = var9.slice;
            var21 = var1.bind(var9)(var10, var28);
case 26:
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var16 = _closure1_slot9;
            var15 = _closure1_slot7;
            var5 = {};
            var18 = var13.grid;
            var5['style'] = var18;
            var18 = function onLayout(arg1) {
                var3 = _closure2_slot3;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onLayout'] = var18;
            var17 = var17 > var10;
            if(!var17) { _fun0008_ip = 28; continue _fun0008 }
case 29:
            var19 = var21.map;
            var18 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot17;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3['userId'] = var2;
                    var3['game'] = var1;
                    var7 = _closure2_slot4;
                    var2 = null;
                    var7 = var2 != var7;
                    var2 = 104;
                    if(!var7) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                    var2 = _closure2_slot4;
case 30:
                    var3['coverWidth'] = var2;
                    var2 = var1.applicationId;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                }
            };
            var17 = var19.bind(var21)(var18);
case 28:
            var5['children'] = var17;
            var15 = var16.bind(var4)(var15, var5);
            var5 = new Array(2);
            var5[0] = var15;
            if(!var14) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var17 = _closure1_slot9;
            var16 = _closure1_slot6;
            var15 = {};
            var18 = var13.viewMore;
            var15['style'] = var18;
            var18 = function onPress() {
                var3 = _closure2_slot2;
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
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 11;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-sm/semibold', 'color': 'text-muted'};
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 17;
            var22 = var25[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            if(var20) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var26 = var23.formatToPlainString;
            var20 = var25[var21];
            var20 = var24.bind(var4)(var20);
            var20 = var20.t;
            var22 = var20.zr0Y5R;
            var20 = {};
            var27 = var9.length;
            var27 = var27 - var28;
            var20['numberOfItems'] = var27;
            var20 = var26.bind(var23)(var22, var20);
            _fun0008_ip = 36; continue _fun0008;
case 34:
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21["6MwJo/"];
            var20 = var22.bind(var23)(var21);
case 36:
            var18['children'] = var20;
            var18 = var17.bind(var4)(var19, var18);
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 32:
            var5[1] = var14;
            var1['children'] = var5;
            var5 = var3.bind(var4)(var2, var1);
            _fun0008_ip = 37; continue _fun0008;
case 22:
            var3 = _closure1_slot9;
            var2 = _closure1_slot7;
            var1 = {};
            var13 = var13.list;
            var1['style'] = var13;
            var13 = var9.map;
            var12 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot9;
                var4 = _closure1_slot16;
                var3 = {};
                var2 = _closure2_slot0;
                var3['userId'] = var2;
                var3['game'] = var1;
                var2 = var1.applicationId;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var12 = var13.bind(var9)(var12);
            var1['children'] = var12;
            var5 = var3.bind(var4)(var2, var1);
            _fun0008_ip = 37; continue _fun0008;
case 20:
            var3 = _closure1_slot9;
            var2 = _closure1_slot15;
            var1 = {};
            var1['userId'] = var11;
            var9 = var9[var10];
            var1['game'] = var9;
            var5 = var3.bind(var4)(var2, var1);
case 37:
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 18;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var7;
            var7 = _closure1_slot0;
            var6 = 19;
            var6 = var9[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.getWidgetTitle;
            var6 = var6.bind(var7)(var8);
            var1['title'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileWidgetsBoard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileWidgetsBoard(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.userId;
            var _closure2_slot0 = var2;
            var8 = var1.gameWidgets;
            var9 = var1.isVisible;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0010_ip = 6; continue _fun0010 }
case 3:
            var9 = true;
case 6:
            var1 = var1.cardStyle;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot12;
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
                var1 = 9;
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
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = _closure3_slot0;
                        if(var2) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                        var3 = _closure3_slot3;
                        var2 = false;
                        var3['current'] = var2;
                        _fun0011_ip = 40; continue _fun0011;
case 38:
                        var2 = _closure3_slot1;
                        if(!var2) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                        var3 = _closure3_slot3;
                        var3 = var3.current;
                        var2 = !var3;
case 41:
                        if(!var2) { _fun0011_ip = 40; continue _fun0011 }
case 43:
                        var4 = _closure3_slot2;
                        var3 = {};
                        var2 = 'VIEW';
                        var3['action'] = var2;
                        var2 = _closure1_slot8;
                        var2 = var2.WIDGETS;
                        var3['section'] = var2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = _closure3_slot3;
                        var1 = true;
                        var2['current'] = var1;
case 40:
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
            if(!(var4 !== var3)) { _fun0010_ip = 44; continue _fun0010 }
case 45:
            var4 = _closure1_slot9;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var7.board;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                var2 = arg1;
                var5 = _closure1_slot9;
                var4 = _closure1_slot18;
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
case 44:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();