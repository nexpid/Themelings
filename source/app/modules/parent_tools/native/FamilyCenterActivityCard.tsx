// app/modules/parent_tools/native/FamilyCenterActivityCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var4 = function FamilyCenterActivityCardHeader() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var6 = undefined;
            var2 = var5.bind(var6)(var1);
            var1 = var2.useActiveLinkUserIds;
            var2 = var1.bind(var2)();
            var4 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var1 = var4.bind(var6)(var1);
            var4 = var1.bind(var6)();
            var1 = 24;
            var1 = var7[var1];
            var5 = var5.bind(var6)(var1);
            var1 = var5.useSelectedTeenUser;
            var9 = var1.bind(var5)();
            var1 = null;
            if(!(var6 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2.length;
            var2 = 1;
            if(!(var2 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var5 = _closure1_slot7;
            var4 = _closure1_slot4;
            var2 = {};
            var8 = _closure1_slot13;
            var7 = {};
            var7['user'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var2['children'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            _fun0001_ip = 7; continue _fun0001;
case 6:
            var2 = _closure1_slot15;
case 7:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var2 = function FamilyCenterActivityCardAccountSelect() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot14;
            var5 = undefined;
            var16 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var2 = var3.bind(var5)(var1);
            var1 = var2.useActiveLinkUsers;
            var1 = var1.bind(var2)();
            var _closure2_slot0 = var1;
            var2 = 24;
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var2 = var6.useSelectedTeenUser;
            var13 = var2.bind(var6)();
            var _closure2_slot1 = var13;
            var2 = 25;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useFamilyCenterActions;
            var2 = {};
            var6 = function onSuccess() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 26;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.hideActionSheet;
                var1 = _closure1_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onSuccess'] = var6;
            var6 = function onError() {
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 27;
                var2 = var8[var2];
                var7 = undefined;
                var3 = var5.bind(var7)(var2);
                var2 = var3.presentFailedToast;
                var4 = 11;
                var4 = var8[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var6 = _closure1_slot1;
                var1 = 12;
                var1 = var8[var1];
                var1 = var6.bind(var7)(var1);
                var1 = var1.Wu8BK2;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onError'] = var6;
            var2 = var3.bind(var4)(var2);
            var2 = var2.selectTeenUser;
            var _closure2_slot2 = var2;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 28;
                    var7 = var6[var3];
                    var4 = undefined;
                    var8 = var5.bind(var4)(var7);
                    var7 = var8.getName;
                    var8 = var7.bind(var8)(var2);
                    var3 = var6[var3];
                    var4 = var5.bind(var4)(var3);
                    var3 = var4.getUserTag;
                    var10 = var3.bind(var4)(var2);
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var13 = '';
                    var11 = ' (';
                    var9 = ')';
                    var12 = var8;
                    var3 = var13[var6](var12, var11, var10, var9, var8);
                    var1['label'] = var3;
                    var2 = var2.id;
                    var1['value'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var _closure2_slot3 = var1;
            var1 = null;
            if(!(var5 !== var13)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = _closure1_slot8;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 16;
            var6 = var15[var6];
            var7 = var14.bind(var5)(var6);
            var6 = {};
            var11 = var16.touch;
            var6['style'] = var11;
            var11 = 'spinbutton';
            var6['accessibilityRole'] = var11;
            var9 = function onPress() {
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 26;
                var3 = var11[var1];
                var1 = undefined;
                var6 = var10.bind(var1)(var3);
                var5 = var6.openLazy;
                var8 = _closure1_slot0;
                var3 = 19;
                var3 = var11[var3];
                var7 = var8.bind(var1)(var3);
                var3 = 29;
                var4 = var11[var3];
                var3 = var11.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = _closure1_slot9;
                var2 = {};
                var7 = 11;
                var7 = var11[var7];
                var7 = var8.bind(var1)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = 12;
                var7 = var11[var7];
                var7 = var10.bind(var1)(var7);
                var7 = var7.vORl9Q;
                var7 = var8.bind(var9)(var7);
                var2['title'] = var7;
                var8 = _closure2_slot3;
                var2['items'] = var8;
                var8 = function onItemSelect(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var3 = _closure2_slot1;
                        var3 = var3.id;
                        var1 = var2 !== var3;
case 10:
                        if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var1 = _closure2_slot2;
                        var3 = undefined;
                        var1 = var1.bind(var3)(var2);
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 30;
                        var1 = var4[var1];
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.track;
                        var1 = _closure1_slot6;
                        var2 = var1.FAMILY_CENTER_ACTION;
                        var1 = {};
                        var5 = _closure1_slot5;
                        var5 = var5.SelectTeen;
                        var1['action'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 12:
                        var1 = global;
                        var3 = var1.setImmediate;
                        var1 = undefined;
                        var2 = function() {
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var2 = _closure1_slot9;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var2['onItemSelect'] = var8;
                var7 = _closure2_slot1;
                var7 = var7.id;
                var2['selectedItem'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var6['onPress'] = var9;
            var12 = _closure1_slot7;
            var11 = _closure1_slot13;
            var9 = {};
            var9['user'] = var13;
            var13 = true;
            var9['inSelector'] = var13;
            var11 = var12.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot7;
            var13 = 13;
            var10 = var15[var13];
            var11 = var14.bind(var5)(var10);
            var10 = {};
            var16 = var16.icon;
            var10['style'] = var16;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.Sizes;
            var13 = var13.MEDIUM;
            var10['size'] = var13;
            var13 = 31;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var10['source'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var7 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var11)(var3, var1, var5);
    var1 = 0;
    var7 = var9[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var13 = var5.bind(var1)(var7);
    var _closure1_slot3 = var13;
    var19 = 1;
    var5 = var9[var19];
    var5 = var8.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var20 = 2;
    var5 = var9[var20];
    var5 = var8.bind(var1)(var5);
    var5 = var5.FamilyCenterAction;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var11 = var5.jsx;
    var _closure1_slot7 = var11;
    var5 = var5.jsxs;
    var _closure1_slot8 = var5;
    var5 = 'FamilyCenterTeenAccountSelect';
    var _closure1_slot9 = var5;
    var7 = 5;
    var5 = var9[var7];
    var14 = var8.bind(var1)(var5);
    var12 = var14.createStyles;
    var5 = {};
    var17 = 'flex';
    var15 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var5['container'] = var15;
    var16 = {};
    var15 = 6;
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.ICON_SUBTLE;
    var16['color'] = var18;
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_16;
    var16['width'] = var18;
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_16;
    var16['height'] = var18;
    var5['icon'] = var16;
    var16 = {};
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_4;
    var16['marginHorizontal'] = var18;
    var5['text'] = var16;
    var5 = var12.bind(var14)(var5);
    var _closure1_slot10 = var5;
    var5 = var9[var7];
    var14 = var8.bind(var1)(var5);
    var12 = var14.createStyles;
    var5 = {};
    var16 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'padding': null, 'flex': 1};
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_12;
    var16['padding'] = var18;
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_SURFACE_HIGHEST;
    var16['backgroundColor'] = var18;
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.md;
    var16['borderTopLeftRadius'] = var18;
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.md;
    var16['borderTopRightRadius'] = var18;
    var5['header'] = var16;
    var16 = {};
    var18 = 21;
    var18 = var9[var18];
    var18 = var8.bind(var1)(var18);
    var21 = var18.AVATAR_SIZE_MAP;
    var18 = 22;
    var18 = var9[var18];
    var18 = var8.bind(var1)(var18);
    var18 = var18.AvatarSizes;
    var18 = var18.NORMAL;
    var18 = var21[var18];
    var18 = var18 / var20;
    var16['borderRadius'] = var18;
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_SURFACE_HIGH;
    var16['backgroundColor'] = var18;
    var5['avatar'] = var16;
    var16 = {};
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_12;
    var16['marginRight'] = var18;
    var18 = 'flex-start';
    var16['alignItems'] = var18;
    var5['avatarContainer'] = var16;
    var18 = {'display': 'flex', 'flexDirection': 'column', 'width': '100%'};
    var16 = '100%';
    var20 = var9[var15];
    var20 = var10.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_16;
    var18['paddingRight'] = var20;
    var5['userHeader'] = var18;
    var18 = {};
    var18['flex'] = var19;
    var19 = var9[var15];
    var19 = var10.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var18['paddingRight'] = var19;
    var5['nonSelectorHeader'] = var18;
    var5 = var12.bind(var14)(var5);
    var _closure1_slot11 = var5;
    var12 = function FamilyCenterHeaderSubText() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.bind(var5)();
            var6 = _closure1_slot0;
            var4 = 8;
            var1 = var8[var4];
            var7 = var6.bind(var5)(var1);
            var1 = var7.useActiveLinkUserIds;
            var1 = var1.bind(var7)();
            var7 = 9;
            var7 = var8[var7];
            var10 = var6.bind(var5)(var7);
            var9 = var10.getActivityWindowTimestampFormatter;
            var7 = !var3;
            var7 = !var7;
            var7 = var9.bind(var10)(var7);
            var4 = var8[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useActivityWindowTimeStamp;
            var6 = var4.bind(var6)(var7);
            if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = var1.length;
            var1 = 1;
            var3 = var3 > var1;
            var1 = null;
            if(var3) { _fun0004_ip = 9; continue _fun0004 }
case 14:
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var5 = {};
    var5 = var11.bind(var1)(var12, var5);
    var _closure1_slot12 = var5;
    var12 = var13.memo;
    var5 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var13 = var1.user;
            var14 = var1.inSelector;
            var1 = _closure1_slot11;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var16 = 22;
            var1 = var1[var16];
            var1 = var2.bind(var4)(var1);
            var1 = var1.AvatarSizes;
            if(var14) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var15 = var1.NORMAL;
            _fun0005_ip = 18; continue _fun0005;
case 16:
            var15 = var1.SMALL;
case 18:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.header;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var12.avatarContainer;
            var5['style'] = var8;
            var11 = _closure1_slot7;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var16];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var16 = var12.avatar;
            var8['avatarStyle'] = var16;
            var8['user'] = var13;
            var8['guildId'] = var4;
            var16 = true;
            var8['disablePlaceholder'] = var16;
            var16 = var13.avatarDecoration;
            var8['avatarDecoration'] = var16;
            var8['size'] = var15;
            var8 = var11.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var6 = {};
            var11 = var12.userHeader;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = undefined;
            if(var14) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var11 = var12.nonSelectorHeader;
case 19:
            var9[1] = var11;
            var6['style'] = var9;
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 23;
            var9 = var14[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['user'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var10 = _closure1_slot12;
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var12.bind(var13)(var5);
    var _closure1_slot13 = var5;
    var12 = 'FamilyCenterActivityCardAccount';
    var5['displayName'] = var12;
    var12 = var9[var7];
    var14 = var8.bind(var1)(var12);
    var13 = var14.createStyles;
    var12 = {};
    var18 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start'};
    var19 = var9[var15];
    var19 = var10.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_SURFACE_HIGHEST;
    var18['backgroundColor'] = var19;
    var19 = var9[var15];
    var19 = var10.bind(var1)(var19);
    var19 = var19.shadows;
    var23 = var19.SHADOW_LOW;
    var24 = var18;
    var19 = copyDataProperties(var24, var23);
    var12['touch'] = var18;
    var18 = {};
    var19 = var9[var15];
    var19 = var10.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.INTERACTIVE_TEXT_DEFAULT;
    var18['color'] = var19;
    var19 = var9[var15];
    var19 = var10.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_24;
    var18['width'] = var19;
    var19 = var9[var15];
    var19 = var10.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_24;
    var18['height'] = var19;
    var20 = {};
    var19 = '90deg';
    var20['rotate'] = var19;
    var19 = new Array(1);
    var19[0] = var20;
    var18['transform'] = var19;
    var19 = var9[var15];
    var19 = var10.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var18['marginHorizontal'] = var19;
    var12['icon'] = var18;
    var12 = var13.bind(var14)(var12);
    var _closure1_slot14 = var12;
    var12 = {};
    var12 = var11.bind(var1)(var2, var12);
    var _closure1_slot15 = var12;
    var7 = var9[var7];
    var13 = var8.bind(var1)(var7);
    var12 = var13.createStyles;
    var7 = {};
    var14 = {};
    var18 = var9[var15];
    var18 = var10.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_16;
    var14['marginTop'] = var18;
    var7['card'] = var14;
    var14 = {};
    var14['display'] = var17;
    var17 = var9[var15];
    var17 = var10.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var14['marginBottom'] = var17;
    var7['preface'] = var14;
    var14 = {};
    var17 = var9[var15];
    var17 = var10.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SURFACE_HIGH;
    var14['backgroundColor'] = var17;
    var17 = var9[var15];
    var17 = var10.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.md;
    var14['borderRadius'] = var17;
    var7['container'] = var14;
    var14 = {'padding': null, 'display': 'flex', 'flexDirection': 'column'};
    var17 = var9[var15];
    var17 = var10.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var14['padding'] = var17;
    var17 = var9[var15];
    var17 = var10.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_32;
    var14['gap'] = var17;
    var7['content'] = var14;
    var14 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'space-between'};
    var17 = var9[var15];
    var17 = var10.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_8;
    var14['gap'] = var17;
    var7['totals'] = var14;
    var14 = {};
    var14['width'] = var16;
    var7['first'] = var14;
    var14 = {};
    var16 = '48.5%';
    var14['width'] = var16;
    var7['other'] = var14;
    var14 = {'display': 'flex', 'flexDirection': 'column'};
    var15 = var9[var15];
    var15 = var10.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_32;
    var14['gap'] = var15;
    var7['activities'] = var14;
    var7 = var12.bind(var13)(var7);
    var _closure1_slot16 = var7;
    var12 = function FamilyCenterActivityCardPrefaceText() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot10;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 7;
            var1 = var14[var1];
            var1 = var8.bind(var4)(var1);
            var13 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var1 = 8;
            var2 = var14[var1];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useActiveLinkUserIds;
            var10 = var2.bind(var3)();
            var2 = 9;
            var2 = var14[var2];
            var5 = var7.bind(var4)(var2);
            var3 = var5.getActivityWindowTimestampFormatter;
            var2 = !var13;
            var2 = !var2;
            var3 = var3.bind(var5)(var2);
            var1 = var14[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.useActivityWindowTimeStamp;
            var11 = var1.bind(var2)(var3);
            var1 = 10;
            var1 = var14[var1];
            var5 = var7.bind(var4)(var1);
            var3 = var5.useAgeSpecificText;
            var6 = 11;
            var1 = var14[var6];
            var1 = var7.bind(var4)(var1);
            var17 = var1.intl;
            var16 = var17.formatToPlainString;
            var1 = 12;
            var2 = var14[var1];
            var2 = var8.bind(var4)(var2);
            var15 = var2.tazvHQ;
            var2 = {};
            var18 = var10.length;
            var2['activeLinks'] = var18;
            var2 = var16.bind(var17)(var15, var2);
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var1 = var14[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.KrLnkE;
            var1 = var6.bind(var7)(var1);
            var14 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.container;
            var1['style'] = var5;
            var6 = null;
            if(var13) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var8 = _closure1_slot7;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 13;
            var5 = var17[var5];
            var7 = var16.bind(var4)(var5);
            var5 = {};
            var15 = var12.icon;
            var15 = var15.color;
            var5['color'] = var15;
            var15 = 14;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var5['source'] = var15;
            var15 = var12.icon;
            var5['style'] = var15;
            var6 = var8.bind(var4)(var7, var5);
case 21:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 15;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'text-subtle'};
            var15 = var12.text;
            var6['style'] = var15;
            var16 = var10.length;
            var15 = 1;
            var10 = var14;
            if(!(var16 > var15)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var10 = var14;
            if(!var13) { _fun0006_ip = 23; continue _fun0006 }
case 25:
            var10 = var11;
case 23:
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot7;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 16;
            var6 = var15[var6];
            var7 = var14.bind(var4)(var6);
            var6 = {};
            var10 = function onPress() {
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var3 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.pushLazy;
                var6 = _closure1_slot0;
                var5 = 19;
                var5 = var2[var5];
                var6 = var6.bind(var1)(var5);
                var5 = 18;
                var5 = var2[var5];
                var2 = var2.paths;
                var2 = var6.bind(var1)(var5, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6['onPress'] = var10;
            var11 = _closure1_slot7;
            var13 = 13;
            var9 = var15[var13];
            var10 = var14.bind(var4)(var9);
            var9 = {};
            var16 = var12.icon;
            var16 = var16.color;
            var9['color'] = var16;
            var16 = 20;
            var16 = var15[var16];
            var16 = var14.bind(var4)(var16);
            var9['source'] = var16;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.Sizes;
            var13 = var13.EXTRA_SMALL;
            var9['size'] = var13;
            var12 = var12.icon;
            var9['style'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = {};
    var7 = var11.bind(var1)(var12, var7);
    var _closure1_slot17 = var7;
    var7 = {};
    var7 = var11.bind(var1)(var4, var7);
    var _closure1_slot18 = var7;
    var7 = 32;
    var7 = var9[var7];
    var12 = var10.bind(var1)(var7);
    var7 = {};
    var7 = var11.bind(var1)(var12, var7);
    var _closure1_slot19 = var7;
    var7 = 33;
    var7 = var9[var7];
    var10 = var10.bind(var1)(var7);
    var7 = {};
    var7 = var11.bind(var1)(var10, var7);
    var _closure1_slot20 = var7;
    var7 = 37;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/parent_tools/native/FamilyCenterActivityCard.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function FamilyCenterActivityCard() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot16;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var _closure2_slot0 = var20;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 24;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useSelectedTeenUser;
            var1 = var1.bind(var2)();
            var2 = 34;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useHasActionForAnyDisplayType;
            var16 = var2.bind(var3)();
            if(!(var4 !== var1)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getSortedActivityTypeConfigs;
            var21 = var1.bind(var2)();
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var20.card;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var20.preface;
            var5['style'] = var8;
            var8 = _closure1_slot17;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var20.container;
            var6['style'] = var9;
            var10 = _closure1_slot18;
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot8;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var20.content;
            var10['style'] = var13;
            var17 = _closure1_slot7;
            var15 = _closure1_slot4;
            var13 = {};
            var18 = var20.totals;
            var13['style'] = var18;
            var22 = var21.map;
            var18 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var7 = var4;
case 28:
                    if(var2) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var3 = var3().value;
                    var3 = var1;
                    var2 = var3 === var5;
case 30:
                    if(var2) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var1.return();
case 32:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var8 = 0;
                    var6 = arg2;
                    if(!(var8 !== var6)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var6 = _closure2_slot0;
                    var6 = var6.other;
                    _fun0008_ip = 36; continue _fun0008;
case 34:
                    var8 = _closure2_slot0;
                    var6 = var8.first;
case 36:
                    var2['style'] = var6;
                    var8 = _closure1_slot7;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 35;
                    var1 = var9[var1];
                    var6 = var6.bind(var5)(var1);
                    var1 = {};
                    var1['displayType'] = var7;
                    var1 = var8.bind(var5)(var6, var1);
                    var2['children'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'total-';
                    var1 = var6.bind(var1)(var7);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var18 = var22.bind(var21)(var18);
            var13['children'] = var18;
            var15 = var17.bind(var4)(var15, var13);
            var13 = new Array(4);
            var13[0] = var15;
            var15 = _closure1_slot19;
            var13[1] = var15;
            var15 = null;
            if(!var16) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var18 = _closure1_slot7;
            var17 = _closure1_slot4;
            var16 = {};
            var20 = var20.activities;
            var16['style'] = var20;
            var20 = var21.map;
            var19 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var7 = undefined;
                    if(var2) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                    var7 = var4;
case 28:
                    if(var2) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                    var3 = var3().value;
                    var3 = var1;
                    var2 = var3 === var5;
case 30:
                    if(var2) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                    var1.return();
case 32:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 36;
                    var1 = var3[var1];
                    var3 = var2.bind(var5)(var1);
                    var2 = {};
                    var2['displayType'] = var7;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'section-';
                    var1 = var6.bind(var1)(var7);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var19 = var20.bind(var21)(var19);
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 37:
            var13[2] = var15;
            var14 = _closure1_slot20;
            var13[3] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 26:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var6;
    var3['FamilyCenterActivityCardAccount'] = var5;
    var3['FamilyCenterActivityCardHeader'] = var4;
    var3['FamilyCenterActivityCardAccountSelect'] = var2;
    return var1;
})();