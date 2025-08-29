// app/modules/parent_tools/native/FamilyCenterActivityCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var9;
    var1 = function FamilyCenterActivityCardPrefaceText() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot11;
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
            var5 = var7.bind(var4)(var2);
            var3 = var5.useUserForLinkStatus;
            var2 = _closure1_slot6;
            var2 = var2.ACTIVE;
            var10 = var3.bind(var5)(var2);
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
            var15 = var2.7hqFl5;
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
            var1 = var1.Q/D/0d;
            var1 = var6.bind(var7)(var1);
            var14 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.container;
            var1['style'] = var5;
            var6 = null;
            if(var13) { _fun0001_ip = 345; continue _fun0001 }
 274:
            var8 = _closure1_slot8;
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
 345:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 15;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var15 = var12.text;
            var6['style'] = var15;
            var15 = 'eyebrow';
            var6['variant'] = var15;
            var16 = var10.length;
            var15 = 1;
            var10 = var14;
            if(!(var16 > var15)) { _fun0001_ip = 427; continue _fun0001 }
 418:
            var10 = var14;
            if(!var13) { _fun0001_ip = 427; continue _fun0001 }
 424:
            var10 = var11;
 427:
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot8;
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
            var11 = _closure1_slot8;
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
    var _closure1_slot15 = var1;
    var1 = function FamilyCenterHeaderSubText() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            var9 = var6.bind(var5)(var1);
            var7 = var9.useUserForLinkStatus;
            var1 = _closure1_slot6;
            var1 = var1.ACTIVE;
            var1 = var7.bind(var9)(var1);
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
            if(!var3) { _fun0002_ip = 135; continue _fun0002 }
 118:
            var3 = var1.length;
            var1 = 1;
            var3 = var3 > var1;
            var1 = null;
            if(var3) { _fun0002_ip = 188; continue _fun0002 }
 135:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 188:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var5 = function FamilyCenterActivityCardAccount(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var13 = var1.user;
            var14 = var1.inSelector;
            var1 = _closure1_slot12;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var16 = 23;
            var1 = var1[var16];
            var1 = var2.bind(var4)(var1);
            var1 = var1.AvatarSizes;
            if(var14) { _fun0003_ip = 64; continue _fun0003 }
 56:
            var15 = var1.NORMAL;
            _fun0003_ip = 70; continue _fun0003;
 64:
            var15 = var1.SMALL;
 70:
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.header;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var12.avatarContainer;
            var5['style'] = var8;
            var11 = _closure1_slot8;
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
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var11 = var12.userHeader;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = undefined;
            if(var14) { _fun0003_ip = 232; continue _fun0003 }
 226:
            var11 = var12.nonSelectorHeader;
 232:
            var9[1] = var11;
            var6['style'] = var9;
            var12 = _closure1_slot8;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 24;
            var9 = var14[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['user'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot8;
            var11 = _closure1_slot16;
            var10 = {};
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var4 = function FamilyCenterActivityCardHeader() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var6 = undefined;
            var4 = var5.bind(var6)(var1);
            var2 = var4.useUserForLinkStatus;
            var1 = _closure1_slot6;
            var1 = var1.ACTIVE;
            var2 = var2.bind(var4)(var1);
            var4 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var1 = var4.bind(var6)(var1);
            var4 = var1.bind(var6)();
            var1 = 25;
            var1 = var7[var1];
            var5 = var5.bind(var6)(var1);
            var1 = var5.useSelectedTeenUser;
            var9 = var1.bind(var5)();
            var1 = null;
            if(!(var6 !== var9)) { _fun0004_ip = 166; continue _fun0004 }
 94:
            if(!var4) { _fun0004_ip = 109; continue _fun0004 }
 97:
            var4 = var2.length;
            var2 = 1;
            if(!(var2 === var4)) { _fun0004_ip = 147; continue _fun0004 }
 109:
            var5 = _closure1_slot8;
            var4 = _closure1_slot4;
            var2 = {};
            var8 = _closure1_slot17;
            var7 = {};
            var7['user'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var2['children'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            _fun0004_ip = 163; continue _fun0004;
 147:
            var5 = _closure1_slot8;
            var4 = _closure1_slot19;
            var3 = {};
            var2 = var5.bind(var6)(var4, var3);
 163:
            var1 = var2;
 166:
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var2 = function FamilyCenterActivityCardAccountSelect() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = _closure1_slot13;
            var5 = undefined;
            var16 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var2 = var6.useUserForLinkStatus;
            var1 = _closure1_slot6;
            var1 = var1.ACTIVE;
            var1 = var2.bind(var6)(var1);
            var _closure2_slot0 = var1;
            var2 = 25;
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var2 = var6.useSelectedTeenUser;
            var13 = var2.bind(var6)();
            var _closure2_slot1 = var13;
            var2 = 26;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useFamilyCenterActions;
            var2 = {};
            var6 = function onSuccess() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 27;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.hideActionSheet;
                var1 = _closure1_slot10;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onSuccess'] = var6;
            var6 = function onError() {
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 28;
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
                var1 = var1.Wu8BKy;
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
                    var3 = 29;
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
            if(!(var5 !== var13)) { _fun0005_ip = 423; continue _fun0005 }
 188:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var16.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = var16.containerShadow;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot9;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 16;
            var6 = var15[var6];
            var7 = var14.bind(var5)(var6);
            var6 = {};
            var12 = var16.touch;
            var11 = new Array(1);
            var11[0] = var12;
            var6['style'] = var11;
            var11 = 'spinbutton';
            var6['accessibilityRole'] = var11;
            var9 = function onPress() {
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 27;
                var3 = var11[var1];
                var1 = undefined;
                var6 = var10.bind(var1)(var3);
                var5 = var6.openLazy;
                var8 = _closure1_slot0;
                var3 = 19;
                var3 = var11[var3];
                var7 = var8.bind(var1)(var3);
                var3 = 30;
                var4 = var11[var3];
                var3 = var11.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = _closure1_slot10;
                var2 = {};
                var7 = 11;
                var7 = var11[var7];
                var7 = var8.bind(var1)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = 12;
                var7 = var11[var7];
                var7 = var10.bind(var1)(var7);
                var7 = var7.vORl9f;
                var7 = var8.bind(var9)(var7);
                var2['title'] = var7;
                var8 = _closure2_slot3;
                var2['items'] = var8;
                var8 = function onItemSelect(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = arg1;
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0006_ip = 28; continue _fun0006 }
 12:
                        var3 = _closure2_slot1;
                        var3 = var3.id;
                        var1 = var2 !== var3;
 28:
                        if(!var1) { _fun0006_ip = 105; continue _fun0006 }
 31:
                        var1 = _closure2_slot2;
                        var3 = undefined;
                        var1 = var1.bind(var3)(var2);
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 31;
                        var1 = var4[var1];
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.track;
                        var1 = _closure1_slot7;
                        var2 = var1.FAMILY_CENTER_ACTION;
                        var1 = {};
                        var5 = _closure1_slot5;
                        var5 = var5.SelectTeen;
                        var1['action'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
 105:
                        var1 = global;
                        var3 = var1.setImmediate;
                        var1 = undefined;
                        var2 = function() {
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 27;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var2 = _closure1_slot10;
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
            var12 = _closure1_slot8;
            var11 = _closure1_slot17;
            var9 = {};
            var9['user'] = var13;
            var13 = true;
            var9['inSelector'] = var13;
            var11 = var12.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot8;
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
            var13 = 32;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var10['source'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 423:
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var10 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot3 = var7;
    var20 = 1;
    var7 = var9[var20];
    var7 = var8.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var21 = 2;
    var7 = var9[var21];
    var7 = var8.bind(var1)(var7);
    var10 = var7.FamilyCenterAction;
    var _closure1_slot5 = var10;
    var7 = var7.UserLinkStatus;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot7 = var7;
    var19 = 4;
    var7 = var9[var19];
    var7 = var8.bind(var1)(var7);
    var10 = var7.jsx;
    var _closure1_slot8 = var10;
    var7 = var7.jsxs;
    var _closure1_slot9 = var7;
    var7 = 'FamilyCenterTeenAccountSelect';
    var _closure1_slot10 = var7;
    var7 = 5;
    var10 = var9[var7];
    var12 = var8.bind(var1)(var10);
    var11 = var12.createStyles;
    var10 = {};
    var18 = 'flex';
    var14 = 'row';
    var13 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var10['container'] = var13;
    var13 = {'color': null, 'width': 16, 'height': 16};
    var15 = 6;
    var17 = var9[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_NORMAL;
    var13['color'] = var17;
    var17 = 16;
    var10['icon'] = var13;
    var13 = {};
    var13['marginHorizontal'] = var19;
    var10['text'] = var13;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot11 = var10;
    var10 = var9[var7];
    var13 = var8.bind(var1)(var10);
    var11 = var13.createStyles;
    var10 = {};
    var12 = {};
    var19 = var9[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_PRIMARY;
    var12['backgroundColor'] = var19;
    var19 = var9[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.md;
    var12['borderRadius'] = var19;
    var12['display'] = var18;
    var12['flexDirection'] = var14;
    var10['container'] = var12;
    var12 = 21;
    var14 = var9[var12];
    var19 = var8.bind(var1)(var14);
    var18 = var19.generateBoxShadowStyle;
    var14 = var9[var12];
    var14 = var8.bind(var1)(var14);
    var14 = var14.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
    var14 = var18.bind(var19)(var14);
    var10['headerShadow'] = var14;
    var19 = 12;
    var14 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'padding': 12, 'flex': 1};
    var10['header'] = var14;
    var14 = {};
    var18 = 22;
    var18 = var9[var18];
    var18 = var8.bind(var1)(var18);
    var22 = var18.AVATAR_SIZE_MAP;
    var18 = 23;
    var18 = var9[var18];
    var18 = var8.bind(var1)(var18);
    var18 = var18.AvatarSizes;
    var18 = var18.NORMAL;
    var18 = var22[var18];
    var18 = var18 / var21;
    var14['borderRadius'] = var18;
    var18 = var9[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_SECONDARY;
    var14['backgroundColor'] = var18;
    var10['avatar'] = var14;
    var14 = {'marginRight': 12, 'alignItems': 'flex-start'};
    var10['avatarContainer'] = var14;
    var18 = {'display': 'flex', 'flexDirection': 'column', 'width': '100%'};
    var14 = '100%';
    var21 = var9[var15];
    var21 = var16.bind(var1)(var21);
    var21 = var21.spacing;
    var21 = var21.PX_16;
    var18['paddingRight'] = var21;
    var10['userHeader'] = var18;
    var18 = {};
    var18['flex'] = var20;
    var20 = var9[var15];
    var20 = var16.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_16;
    var18['paddingRight'] = var20;
    var10['nonSelectorHeader'] = var18;
    var10 = var11.bind(var13)(var10);
    var _closure1_slot12 = var10;
    var10 = var9[var7];
    var13 = var8.bind(var1)(var10);
    var11 = var13.createStyles;
    var10 = {};
    var18 = {};
    var18['padding'] = var19;
    var10['container'] = var18;
    var18 = var9[var12];
    var20 = var8.bind(var1)(var18);
    var19 = var20.generateBoxShadowStyle;
    var18 = var9[var12];
    var18 = var8.bind(var1)(var18);
    var18 = var18.FOUR_DP_ELEVATION_SHADOW_PARAMS;
    var18 = var19.bind(var20)(var18);
    var10['containerShadow'] = var18;
    var18 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start'};
    var19 = var9[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.INPUT_BACKGROUND;
    var18['backgroundColor'] = var19;
    var10['touch'] = var18;
    var18 = {'color': null, 'width': 24, 'height': 24, 'transform': null, 'marginHorizontal': 8};
    var19 = var9[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.INTERACTIVE_NORMAL;
    var18['color'] = var19;
    var20 = {};
    var19 = '90deg';
    var20['rotate'] = var19;
    var19 = new Array(1);
    var19[0] = var20;
    var18['transform'] = var19;
    var10['icon'] = var18;
    var10 = var11.bind(var13)(var10);
    var _closure1_slot13 = var10;
    var7 = var9[var7];
    var11 = var8.bind(var1)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var13 = {};
    var13['marginTop'] = var17;
    var7['card'] = var13;
    var13 = {'display': 'flex', 'marginBottom': 12};
    var7['preface'] = var13;
    var13 = var9[var12];
    var17 = var8.bind(var1)(var13);
    var13 = var17.generateBoxShadowStyle;
    var12 = var9[var12];
    var12 = var8.bind(var1)(var12);
    var12 = var12.FOUR_DP_ELEVATION_SHADOW_PARAMS;
    var12 = var13.bind(var17)(var12);
    var7['shadow'] = var12;
    var12 = {};
    var13 = var9[var15];
    var13 = var16.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var12['backgroundColor'] = var13;
    var13 = var9[var15];
    var13 = var16.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var12['borderRadius'] = var13;
    var7['container'] = var12;
    var12 = {};
    var13 = 20;
    var12['padding'] = var13;
    var7['content'] = var12;
    var12 = {};
    var15 = var9[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_FLOATING;
    var12['borderBottomColor'] = var15;
    var15 = 0.5;
    var12['borderBottomWidth'] = var15;
    var7['header'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'space-between'};
    var7['totals'] = var12;
    var12 = {};
    var15 = 10;
    var12['marginBottom'] = var15;
    var7['box'] = var12;
    var12 = {};
    var12['width'] = var14;
    var7['first'] = var12;
    var12 = {};
    var14 = '48.5%';
    var12['width'] = var14;
    var7['other'] = var12;
    var12 = {};
    var12['paddingTop'] = var13;
    var7['activities'] = var12;
    var12 = {};
    var13 = 30;
    var12['marginTop'] = var13;
    var7['empty'] = var12;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot14 = var7;
    var7 = 39;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/parent_tools/native/FamilyCenterActivityCard.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function FamilyCenterActivityCard() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = _closure1_slot14;
            var4 = undefined;
            var19 = var1.bind(var4)();
            var _closure2_slot0 = var19;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 25;
            var1 = var6[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useSelectedTeenUser;
            var1 = var1.bind(var2)();
            var2 = 33;
            var2 = var6[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useHasActionForAnyDisplayType;
            var17 = var2.bind(var3)();
            var3 = 9;
            var2 = var6[var3];
            var7 = var5.bind(var4)(var2);
            var2 = var7.getEmptyActivityFormatter;
            var8 = var2.bind(var7)();
            var2 = 8;
            var2 = var6[var2];
            var7 = var5.bind(var4)(var2);
            var2 = var7.useActivityWindowTimeStamp;
            var23 = var2.bind(var7)(var8);
            var2 = 34;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.useIsFamilyCenterV2Enabled;
            var2 = 'family_center_activity_card';
            var16 = var5.bind(var6)(var2);
            if(!(var4 !== var1)) { _fun0007_ip = 646; continue _fun0007 }
 152:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getSortedActivityTypeConfigs;
            var26 = var1.bind(var2)(var16);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var19.card;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var19.preface;
            var5['style'] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot15;
            var8 = {};
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var19.container;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var19.shadow;
            var9[1] = var10;
            var6['style'] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var19.header;
            var9['style'] = var12;
            var15 = _closure1_slot8;
            var13 = _closure1_slot18;
            var12 = {};
            var12 = var15.bind(var4)(var13, var12);
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot9;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var19.content;
            var10['style'] = var13;
            var18 = _closure1_slot8;
            var15 = _closure1_slot4;
            var13 = {};
            var20 = var19.totals;
            var13['style'] = var20;
            var21 = var26.map;
            var20 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var7 = undefined;
                    if(var2) { _fun0008_ip = 27; continue _fun0008 }
 24:
                    var7 = var4;
 27:
                    if(var2) { _fun0008_ip = 41; continue _fun0008 }
 30:
                    var3 = var3().value;
                    var3 = var1;
                    var2 = var3 === var5;
 41:
                    if(var2) { _fun0008_ip = 47; continue _fun0008 }
 44:
                    var1.return();
 47:
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var8 = var6.box;
                    var6 = new Array(2);
                    var6[0] = var8;
                    var10 = 0;
                    var8 = arg2;
                    if(!(var10 !== var8)) { _fun0008_ip = 102; continue _fun0008 }
 90:
                    var8 = _closure2_slot0;
                    var8 = var8.other;
                    _fun0008_ip = 112; continue _fun0008;
 102:
                    var9 = _closure2_slot0;
                    var8 = var9.first;
 112:
                    var6[1] = var8;
                    var2['style'] = var6;
                    var8 = _closure1_slot8;
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
            var20 = var21.bind(var26)(var20);
            var13['children'] = var20;
            var15 = var18.bind(var4)(var15, var13);
            var13 = new Array(4);
            var13[0] = var15;
            var22 = null;
            var15 = null;
            if(!var17) { _fun0007_ip = 472; continue _fun0007 }
 425:
            var21 = _closure1_slot8;
            var20 = _closure1_slot4;
            var18 = {};
            var25 = var19.activities;
            var18['style'] = var25;
            var25 = var26.map;
            var24 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var7 = undefined;
                    if(var2) { _fun0009_ip = 27; continue _fun0009 }
 24:
                    var7 = var4;
 27:
                    if(var2) { _fun0009_ip = 41; continue _fun0009 }
 30:
                    var3 = var3().value;
                    var3 = var1;
                    var2 = var3 === var5;
 41:
                    if(var2) { _fun0009_ip = 47; continue _fun0009 }
 44:
                    var1.return();
 47:
                    var4 = _closure1_slot8;
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
            var24 = var25.bind(var26)(var24);
            var18['children'] = var24;
            var15 = var21.bind(var4)(var20, var18);
 472:
            var13[1] = var15;
            var15 = null;
            if(var17) { _fun0007_ip = 566; continue _fun0007 }
 481:
            var15 = null;
            if(var16) { _fun0007_ip = 566; continue _fun0007 }
 486:
            var18 = _closure1_slot8;
            var17 = _closure1_slot4;
            var16 = {};
            var19 = var19.empty;
            var16['style'] = var19;
            var21 = _closure1_slot8;
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var19 = 37;
            var19 = var24[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var24 = var22 != var23;
            var22 = '';
            if(!var24) { _fun0007_ip = 546; continue _fun0007 }
 543:
            var22 = var23;
 546:
            var19['text'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 566:
            var13[2] = var15;
            var16 = _closure1_slot8;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 38;
            var14 = var17[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var14 = var16.bind(var4)(var15, var14);
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
 646:
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