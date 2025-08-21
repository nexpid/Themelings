// app/components_native/common/UserSummaryItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['container'] = var9;
    var9 = {'marginStart': 4, 'paddingRight': 1};
    var4['names'] = var9;
    var9 = {'marginStart': 4, 'paddingRight': 1};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_SECONDARY;
    var9['color'] = var12;
    var4['namesLegacy'] = var9;
    var9 = {'backgroundColor': null, 'marginStart': 2, 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var10;
    var4['plusCountContainer'] = var9;
    var9 = {};
    var10 = -4;
    var9['marginRight'] = var10;
    var4['cutout'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.CutoutDirection;
    var7 = var7.RIGHT;
    var4['direction'] = var7;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/UserSummaryItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSummaryItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.style;
            var18 = var1.namesStyle;
            var17 = var1.namesVariant;
            var9 = var1.max;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 38; continue _fun0001 }
 35:
            var9 = 3;
 38:
            var12 = var1.users;
            var _closure2_slot0 = var12;
            var2 = var1.renderedUsers;
            if(!(var2 === var4)) { _fun0001_ip = 62; continue _fun0001 }
 58:
            var2 = new Array(0);
 62:
            var _closure2_slot1 = var2;
            var13 = var1.withNames;
            var20 = var1.channelId;
            var19 = var1.guildId;
            var _closure2_slot2 = var19;
            var6 = var1.avatarSize;
            if(!(var6 === var4)) { _fun0001_ip = 131; continue _fun0001 }
 96:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.AvatarSizes;
            var6 = var3.XXSMALL;
 131:
            var _closure2_slot3 = var6;
            var3 = var1.withPlusCount;
            var5 = var1.cutout;
            if(!(var5 === var4)) { _fun0001_ip = 158; continue _fun0001 }
 151:
            var5 = _closure1_slot7;
 158:
            var _closure2_slot4 = var5;
            var1 = var1.cutoutStyle;
            var _closure2_slot5 = var1;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var5 = _closure1_slot6;
            var7 = var5.bind(var4)();
            _closure2_slot6 = var7;
            var5 = var2.length;
            var11 = 0;
            if(!(!(var5 > var11))) { _fun0001_ip = 227; continue _fun0001 }
 220:
            var5 = var12.length;
            _fun0001_ip = 232; continue _fun0001;
 227:
            var5 = var2.length;
 232:
            var2 = global;
            var14 = var2.Math;
            var10 = var14.min;
            var16 = var10.bind(var14)(var5, var9);
            _closure2_slot7 = var16;
            var10 = {};
            _closure2_slot8 = var10;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 7;
            var10 = var15[var10];
            var22 = var14.bind(var4)(var10);
            var15 = var22.useStateFromStores;
            var10 = _closure1_slot4;
            var14 = new Array(1);
            var14[0] = var10;
            var10 = function() {
                var3 = _closure2_slot0;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = arg1;
                        var2 = _closure2_slot2;
                        var3 = null;
                        var2 = var3 != var2;
                        if(!var2) { _fun0002_ip = 23; continue _fun0002 }
 19:
                        var2 = var3 != var1;
 23:
                        if(!var2) { _fun0002_ip = 67; continue _fun0002 }
 26:
                        var3 = _closure2_slot8;
                        var2 = var1.id;
                        var6 = _closure1_slot4;
                        var5 = var6.getMember;
                        var4 = _closure2_slot2;
                        var1 = var1.id;
                        var1 = var5.bind(var6)(var4, var1);
                        var3[var2] = var1;
 67:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var15.bind(var22)(var14, var10);
            var10 = var5;
            if(!(var11 !== var16)) { _fun0001_ip = 984; continue _fun0001 }
 321:
            var5 = new Array(0);
            _closure2_slot9 = var5;
            var15 = function _loop() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot10;
                    var4 = _closure2_slot7;
                    var1 = 1;
                    var1 = var4 - var1;
                    var1 = var3 < var1;
                    var3 = _closure2_slot1;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0003_ip = 70; continue _fun0003 }
 39:
                    var5 = _closure2_slot9;
                    var4 = var5.push;
                    var6 = _closure2_slot1;
                    var3 = _closure2_slot10;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    _fun0003_ip = 325; continue _fun0003;
 70:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot10;
                    var3 = var4[var3];
                    var _closure3_slot0 = var3;
                    var5 = null;
                    var4 = var5 == var3;
                    var7 = undefined;
                    var6 = undefined;
                    if(var4) { _fun0003_ip = 104; continue _fun0003 }
 99:
                    var6 = var3.id;
 104:
                    if(!(var5 == var6)) { _fun0003_ip = 134; continue _fun0003 }
 108:
                    var10 = _closure2_slot10;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var9 = var4.concat;
                    var4 = '@';
                    var6 = var9.bind(var4)(var10);
 134:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 8;
                    var9 = var11[var9];
                    var10 = var10.bind(var7)(var9);
                    var9 = var10.makeSource;
                    var9 = var9.bind(var10)(var5);
                    if(!(var5 != var3)) { _fun0003_ip = 196; continue _fun0003 }
 172:
                    var5 = _closure2_slot8;
                    var3 = var3.id;
                    var3 = var5[var3];
                    var _closure3_slot1 = var3;
                    var9 = function o() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var7 = arguments[0];
                            var4 = undefined;
                            if(!(var7 === var4)) { _fun0004_ip = 11; continue _fun0004 }
 9:
                            var7 = false;
 11:
                            var8 = _closure3_slot0;
                            var6 = var8.getAvatarURL;
                            var3 = _closure2_slot2;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 6;
                            var9 = var11[var9];
                            var9 = var10.bind(var4)(var9);
                            var9 = var9.AVATAR_SIZE_MAP;
                            var2 = _closure2_slot3;
                            var2 = var9[var2];
                            var2 = var6.bind(var8)(var3, var2, var7);
                            var3 = _closure3_slot1;
                            var6 = null;
                            var3 = var6 == var3;
                            var9 = var7;
                            var7 = undefined;
                            if(var3) { _fun0004_ip = 103; continue _fun0004 }
 93:
                            var3 = _closure3_slot1;
                            var7 = var3.avatar;
 103:
                            var3 = var2;
                            if(!(var6 != var7)) { _fun0004_ip = 156; continue _fun0004 }
 110:
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var7 = 8;
                            var7 = var10[var7];
                            var8 = var8.bind(var4)(var7);
                            var7 = var8.getGuildMemberAvatarURL;
                            var5 = _closure3_slot1;
                            var5 = var7.bind(var8)(var5, var9);
                            if(!(var6 != var5)) { _fun0004_ip = 153; continue _fun0004 }
 150:
                            var2 = var5;
 153:
                            var3 = var2;
 156:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 8;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.makeSource;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        }
                    };
 196:
                    var3 = _closure2_slot9;
                    var2 = var3.push;
                    var5 = _closure1_slot5;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = 6;
                    var4 = var11[var4];
                    var4 = var10.bind(var7)(var4);
                    if(var1) { _fun0003_ip = 260; continue _fun0003 }
 232:
                    var1 = {};
                    var10 = _closure2_slot3;
                    var1['size'] = var10;
                    var1['source'] = var9;
                    var1 = var5.bind(var7)(var4, var1, var6);
                    var1 = var2.bind(var3)(var1);
                    _fun0003_ip = 325; continue _fun0003;
 260:
                    var1 = {};
                    var10 = _closure2_slot3;
                    var1['size'] = var10;
                    var1['source'] = var9;
                    var9 = _closure2_slot6;
                    var10 = var9.cutout;
                    var9 = new Array(2);
                    var9[0] = var10;
                    var10 = _closure2_slot5;
                    var9[1] = var10;
                    var1['style'] = var9;
                    var8 = _closure2_slot4;
                    var1['cutout'] = var8;
                    var1 = var5.bind(var7)(var4, var1, var6);
                    var1 = var2.bind(var3)(var1);
 325:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot10 = var11;
            var22 = var11 < var16;
            var14 = 0;
            if(!var22) { _fun0001_ip = 364; continue _fun0001 }
 349:
            var22 = var15.bind(var4)();
            var14 = var14 + 1;
            _closure2_slot10 = var14;
            if(var14 < var16) { _fun0001_ip = 349; continue _fun0001 }
 364:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 9;
            var14 = var16[var14];
            var16 = var15.bind(var4)(var14);
            var15 = var16.getName;
            var14 = var12[var11];
            var21 = var15.bind(var16)(var19, var20, var14);
            var14 = var13;
            if(!var14) { _fun0001_ip = 419; continue _fun0001 }
 407:
            var16 = var12.length;
            var15 = 1;
            var14 = var16 > var15;
 419:
            var16 = var21;
            if(!var14) { _fun0001_ip = 503; continue _fun0001 }
 425:
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = 10;
            var19 = var22[var14];
            var19 = var15.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var14 = var22[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.GhkJ29;
            var14 = {};
            var14['name'] = var21;
            var22 = var12.length;
            var21 = 1;
            var21 = var22 - var21;
            var14['count'] = var21;
            var16 = var19.bind(var20)(var15, var14);
 503:
            if(!var13) { _fun0001_ip = 728; continue _fun0001 }
 509:
            var12 = var12[var11];
            var11 = null;
            if(!(var11 != var12)) { _fun0001_ip = 728; continue _fun0001 }
 522:
            var12 = var2.HermesInternal;
            var13 = var12.concat;
            var12 = 'username-';
            var15 = var13.bind(var12)(var16);
            if(!(var11 == var17)) { _fun0001_ip = 633; continue _fun0001 }
 548:
            var12 = var5.push;
            var14 = _closure1_slot5;
            var13 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 12;
            var11 = var19[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.LegacyText;
            var11 = {};
            var20 = var7.namesLegacy;
            var19 = new Array(2);
            var19[0] = var20;
            var19[1] = var18;
            var11['style'] = var19;
            var19 = 1;
            var11['numberOfLines'] = var19;
            var11['children'] = var16;
            var11 = var14.bind(var4)(var13, var11, var15);
            var11 = var12.bind(var5)(var11);
            _fun0001_ip = 728; continue _fun0001;
 633:
            var12 = var5.push;
            var14 = _closure1_slot5;
            var13 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 11;
            var11 = var19[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.Text;
            var11 = {};
            var11['variant'] = var17;
            var17 = 'redesign-channel-name-muted-text';
            var11['color'] = var17;
            var19 = var7.names;
            var17 = new Array(2);
            var17[0] = var19;
            var17[1] = var18;
            var11['style'] = var17;
            var17 = 1;
            var11['lineClamp'] = var17;
            var11['children'] = var16;
            var11 = var14.bind(var4)(var13, var11, var15);
            var11 = var12.bind(var5)(var11);
 728:
            if(!(var10 > var9)) { _fun0001_ip = 941; continue _fun0001 }
 735:
            if(!var3) { _fun0001_ip = 941; continue _fun0001 }
 741:
            var3 = var5.pop;
            var3 = var3.bind(var5)();
            var3 = 1;
            var3 = var10 + var3;
            var9 = var3 - var9;
            var3 = '+';
            var12 = var3 + var9;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 6;
            var3 = var14[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.AVATAR_SIZE_MAP;
            var17 = var3[var6];
            var3 = var5.push;
            var10 = _closure1_slot5;
            var9 = _closure1_slot3;
            var6 = {};
            var15 = var7.plusCountContainer;
            var11 = new Array(2);
            var11[0] = var15;
            var15 = {};
            var15['borderRadius'] = var17;
            var15['width'] = var17;
            var15['height'] = var17;
            var16 = 8;
            var16 = var17 / var16;
            var15['padding'] = var16;
            var11[1] = var15;
            var6['style'] = var11;
            var11 = 11;
            var11 = var14[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.Text;
            var11 = {'variant': 'text-xs/normal', 'color': 'header-primary'};
            var11['children'] = var12;
            var11 = var10.bind(var4)(var13, var11);
            var6['children'] = var11;
            var2 = var2.HermesInternal;
            var11 = var2.concat;
            var2 = 'plus-';
            var2 = var11.bind(var2)(var12);
            var2 = var10.bind(var4)(var9, var6, var2);
            var2 = var3.bind(var5)(var2);
 941:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var7.container;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 984:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();