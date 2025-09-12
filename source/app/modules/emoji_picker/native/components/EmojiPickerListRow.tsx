// app/modules/emoji_picker/native/components/EmojiPickerListRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var6;
        var1 = function getEmojiItemUrl(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var7 = arg2;
                var1 = var3.id;
                var2 = null;
                if(!(var2 != var1)) { _fun0002_ip = 88; continue _fun0002 }
 17:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.getEmojiURL;
                var1 = {};
                var8 = var3.id;
                var1['id'] = var8;
                if(!var7) { _fun0002_ip = 68; continue _fun0002 }
 62:
                var7 = var3.animated;
 68:
                var1['animated'] = var7;
                var6 = _closure1_slot5;
                var1['size'] = var6;
                var1 = var4.bind(var5)(var1);
                _fun0002_ip = 110; continue _fun0002;
 88:
                var3 = var3.url;
                var4 = var2 != var3;
                var2 = '';
                if(!var4) { _fun0002_ip = 107; continue _fun0002 }
 104:
                var2 = var3;
 107:
                var1 = var2;
 110:
                return var1;
            }
        };
        var _closure1_slot12 = var1;
        var1 = function EmojiItemLockedOverlay() {
            var1 = _closure1_slot9;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var8.lockContainer;
            var1['style'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 11;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LockIcon;
            var5 = {};
            var8 = var8.lock;
            var5['style'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot13 = var1;
        var1 = function EmojiItem(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var10 = var1.emoji;
                var _closure2_slot0 = var10;
                var2 = var1.category;
                var _closure2_slot1 = var2;
                var6 = var1.disabled;
                var2 = var1.onPressEmoji;
                var _closure2_slot2 = var2;
                var2 = var1.onLongPressEmoji;
                var _closure2_slot3 = var2;
                var3 = var1.animateEmoji;
                var1 = var1.isSectionNitroLocked;
                var2 = _closure1_slot9;
                var4 = undefined;
                var11 = var2.bind(var4)();
                var2 = _closure1_slot12;
                var12 = var2.bind(var4)(var10, var3);
                if(!var6) { _fun0003_ip = 90; continue _fun0003 }
 87:
                var6 = !var1;
 90:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 12;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var8 = 'button';
                var1['accessibilityRole'] = var8;
                var8 = var10.name;
                var1['accessibilityLabel'] = var8;
                var9 = var11.surrogatesFrame;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var6;
                if(!var6) { _fun0003_ip = 165; continue _fun0003 }
 159:
                var9 = var11.disabledOverlay;
 165:
                var8[1] = var9;
                var1['style'] = var8;
                var8 = function onPress() {
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['onPress'] = var8;
                var5 = function onLongPress() {
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onLongPress'] = var5;
                var8 = var10.id;
                var5 = null;
                if(!(var5 == var8)) { _fun0003_ip = 275; continue _fun0003 }
 207:
                var9 = _closure1_slot7;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 17;
                var5 = var13[var5];
                var5 = var8.bind(var4)(var5);
                var8 = var5.LegacyText;
                var5 = {};
                var13 = false;
                var5['allowFontScaling'] = var13;
                var13 = var11.surrogates;
                var5['style'] = var13;
                var10 = var10.surrogates;
                var5['children'] = var10;
                var8 = var9.bind(var4)(var8, var5);
                _fun0003_ip = 422; continue _fun0003;
 275:
                var10 = _closure1_slot7;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 13;
                var5 = var14[var5];
                var9 = var9.bind(var4)(var5);
                var5 = {};
                var13 = 'contain';
                var5['resizeMode'] = var13;
                var11 = var11.image;
                var5['style'] = var11;
                var13 = _closure1_slot0;
                var11 = 14;
                var11 = var14[var11];
                var14 = var13.bind(var4)(var11);
                var13 = var14.isThemeDark;
                var11 = _closure1_slot4;
                var11 = var11.theme;
                var11 = var13.bind(var14)(var11);
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                if(var11) { _fun0003_ip = 382; continue _fun0003 }
 368:
                var11 = 16;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                _fun0003_ip = 394; continue _fun0003;
 382:
                var13 = 15;
                var13 = var15[var13];
                var11 = var14.bind(var4)(var13);
 394:
                var5['placeholder'] = var11;
                var11 = {};
                var11['uri'] = var12;
                var5['source'] = var11;
                var11 = true;
                var5['usesSmallCache'] = var11;
                var8 = var10.bind(var4)(var9, var5);
 422:
                var5 = new Array(2);
                var5[0] = var8;
                if(!var6) { _fun0003_ip = 449; continue _fun0003 }
 433:
                var9 = _closure1_slot7;
                var8 = _closure1_slot13;
                var7 = {};
                var6 = var9.bind(var4)(var8, var7);
 449:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot14 = var1;
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
        var7 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.View;
        var _closure1_slot3 = var8;
        var11 = var4.StyleSheet;
        var4 = 2;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var14 = var4.IMAGE_SIZE;
        var _closure1_slot5 = var14;
        var12 = var4.ROW_HEIGHT;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.PADDING_VERTICAL;
        var _closure1_slot6 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot7 = var8;
        var4 = var4.jsxs;
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var10 = {};
        var10['height'] = var14;
        var10['width'] = var14;
        var4['image'] = var10;
        var10 = {};
        var10['height'] = var14;
        var10['width'] = var14;
        var14 = 'center';
        var10['alignItems'] = var14;
        var10['justifyContent'] = var14;
        var4['surrogatesFrame'] = var10;
        var10 = {};
        var14 = 7;
        var15 = var6[var14];
        var15 = var13.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.sm;
        var10['borderRadius'] = var15;
        var15 = 'hidden';
        var10['overflow'] = var15;
        var4['disabledOverlay'] = var10;
        var10 = {};
        var15 = 8;
        var15 = var6[var15];
        var16 = var5.bind(var1)(var15);
        var15 = var16.isAndroid;
        var16 = var15.bind(var16)();
        var15 = 30;
        if(!var16) { _fun0001_ip = 366; continue _fun0001 }
 363:
        var15 = 26;
 366:
        var10['fontSize'] = var15;
        var14 = var6[var14];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.TEXT_NORMAL;
        var10['color'] = var14;
        var4['surrogates'] = var10;
        var10 = {'height': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
        var10['height'] = var12;
        var4['row'] = var10;
        var10 = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
        var12 = 9;
        var12 = var6[var12];
        var13 = var13.bind(var1)(var12);
        var12 = '#000000';
        var14 = var13.bind(var1)(var12);
        var13 = var14.alpha;
        var12 = 0.2;
        var13 = var13.bind(var14)(var12);
        var12 = var13.hex;
        var12 = var12.bind(var13)();
        var10['backgroundColor'] = var12;
        var18 = var11.absoluteFillObject;
        var19 = var10;
        var11 = copyDataProperties(var19, var18);
        var4['lockContainer'] = var10;
        var10 = {'width': 16, 'height': 16, 'tintColor': 'white'};
        var4['lock'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot9 = var4;
        var8 = var7.memo;
        var4 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var19 = var2.emojis;
                var _closure2_slot0 = var19;
                var18 = var2.emojisDisabled;
                var1 = var2.category;
                var _closure2_slot1 = var1;
                var17 = var2.rowSize;
                var10 = var2.containerWidth;
                var1 = var2.row;
                var3 = var2.onPressEmoji;
                var _closure2_slot2 = var3;
                var3 = var2.onLongPressEmoji;
                var _closure2_slot3 = var3;
                var16 = var2.animateEmoji;
                var7 = var2.isSectionNitroLocked;
                var2 = _closure1_slot9;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var8 = new Array(0);
                var15 = var1 * var17;
                var1 = var15 + var17;
                var14 = null;
                var13 = '';
                var12 = true;
                var11 = undefined;
                var3 = undefined;
                var2 = var15;
                if(!(var2 < var1)) { _fun0004_ip = 312; continue _fun0004 }
 128:
                var24 = var19[var2];
                if(!(var4 !== var24)) { _fun0004_ip = 262; continue _fun0004 }
 139:
                var22 = var8.push;
                var1 = {};
                var21 = var24.id;
                var23 = var14 != var21;
                var20 = null;
                if(!var23) { _fun0004_ip = 163; continue _fun0004 }
 160:
                var20 = var21;
 163:
                var1['id'] = var20;
                var20 = var24.name;
                var25 = var14 != var20;
                var23 = var13;
                if(!var25) { _fun0004_ip = 185; continue _fun0004 }
 182:
                var23 = var20;
 185:
                var1['name'] = var23;
                var23 = _closure1_slot12;
                var23 = var23.bind(var4)(var24, var16);
                var1['url'] = var23;
                var23 = var24.animated;
                var23 = var12 === var23;
                if(!var23) { _fun0004_ip = 219; continue _fun0004 }
 216:
                var23 = var16;
 219:
                var1['animated'] = var23;
                var23 = var24.id;
                var23 = var14 != var23;
                if(!var23) { _fun0004_ip = 251; continue _fun0004 }
 236:
                var25 = var18.has;
                var24 = var24.id;
                var23 = var25.bind(var18)(var24);
 251:
                var1['disabled'] = var23;
                var1 = var22.bind(var8)(var1);
                _fun0004_ip = 292; continue _fun0004;
 262:
                var22 = var8.push;
                var1 = {'id': null, 'name': '', 'url': '', 'animated': false, 'disabled': false};
                var1 = var22.bind(var8)(var1);
                var21 = var11;
                var20 = var3;
 292:
                var2 = var2 + 1;
                var1 = var15 + var17;
                var11 = var21;
                var3 = var20;
                if(var2 < var1) { _fun0004_ip = 128; continue _fun0004 }
 312:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 18;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = var6.row;
                var1['style'] = var6;
                var6 = {};
                var6['rowContentWidth'] = var10;
                var10 = _closure1_slot6;
                var6['rowContentPaddingVertical'] = var10;
                var9 = _closure1_slot5;
                var6['itemSize'] = var9;
                var6['items'] = var8;
                var6['isSectionNitroLocked'] = var7;
                var1['rowData'] = var6;
                var6 = function onPressEmoji(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg1;
                        var _closure3_slot0 = var1;
                        var4 = _closure2_slot0;
                        var3 = var4.find;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.name;
                            var1 = _closure3_slot0;
                            var1 = var1.nativeEvent;
                            var1 = var1.emojiName;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        var2 = null;
                        if(!(var2 != var4)) { _fun0005_ip = 55; continue _fun0005 }
 39:
                        var3 = _closure2_slot2;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var4, var2);
 55:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onPressEmoji'] = var6;
                var5 = function onLongPressEmoji(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        var _closure3_slot0 = var1;
                        var4 = _closure2_slot0;
                        var3 = var4.find;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.name;
                            var1 = _closure3_slot0;
                            var1 = var1.nativeEvent;
                            var1 = var1.emojiName;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 50; continue _fun0006 }
 39:
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onLongPressEmoji'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var4 = var8.bind(var7)(var4);
        var _closure1_slot10 = var4;
        var8 = var7.memo;
        var4 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var16 = var1.emojis;
                var15 = var1.emojisDisabled;
                var14 = var1.category;
                var13 = var1.rowSize;
                var2 = var1.row;
                var12 = var1.onPressEmoji;
                var11 = var1.onLongPressEmoji;
                var10 = var1.animateEmoji;
                var9 = var1.isSectionNitroLocked;
                var3 = _closure1_slot9;
                var4 = undefined;
                var6 = var3.bind(var4)();
                var5 = new Array(0);
                var8 = var2 * var13;
                var2 = var8 + var13;
                var7 = null;
                var3 = var8;
                if(!(var3 < var2)) { _fun0007_ip = 242; continue _fun0007 }
 94:
                var21 = var16[var3];
                if(!(var4 !== var21)) { _fun0007_ip = 191; continue _fun0007 }
 102:
                var17 = var5.push;
                var19 = _closure1_slot7;
                var18 = _closure1_slot14;
                var2 = {};
                var2['emoji'] = var21;
                var2['category'] = var14;
                var2['animateEmoji'] = var10;
                var20 = var21.id;
                var20 = var7 != var20;
                if(!var20) { _fun0007_ip = 158; continue _fun0007 }
 143:
                var22 = var15.has;
                var21 = var21.id;
                var20 = var22.bind(var15)(var21);
 158:
                var2['disabled'] = var20;
                var2['onPressEmoji'] = var12;
                var2['onLongPressEmoji'] = var11;
                var2['isSectionNitroLocked'] = var9;
                var2 = var19.bind(var4)(var18, var2, var3);
                var2 = var17.bind(var5)(var2);
                _fun0007_ip = 228; continue _fun0007;
 191:
                var17 = var5.push;
                var19 = _closure1_slot7;
                var18 = _closure1_slot3;
                var2 = {};
                var20 = var6.image;
                var2['style'] = var20;
                var2 = var19.bind(var4)(var18, var2, var3);
                var2 = var17.bind(var5)(var2);
 228:
                var3 = var3 + 1;
                var2 = var8 + var13;
                if(var3 < var2) { _fun0007_ip = 94; continue _fun0007 }
 242:
                var3 = _closure1_slot7;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var6.row;
                var1['style'] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var4 = var8.bind(var7)(var4);
        var _closure1_slot11 = var4;
        var4 = var7.memo;
        var2 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var5 = arg1;
                var2 = var5.nativeRow;
                var4 = undefined;
                if(!(var2 === var4)) { _fun0008_ip = 47; continue _fun0008 }
 15:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isAndroid;
                var2 = var1.bind(var3)();
 47:
                var1 = null;
                var3 = Object.create(var1);
                var1 = 0;
                var3['nativeRow'] = var1;
                var9 = {};
                var8 = var5;
                var7 = var3;
                var5 = copyDataProperties(var9, var8, var7);
                var3 = _closure1_slot7;
                if(var2) { _fun0008_ip = 87; continue _fun0008 }
 81:
                var2 = _closure1_slot11;
                _fun0008_ip = 91; continue _fun0008;
 87:
                var2 = _closure1_slot10;
 91:
                var1 = {};
                var9 = var1;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 19;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/emoji_picker/native/components/EmojiPickerListRow.tsx';
        var4 = var5.bind(var6)(var4);
        var3['EmojiPickerListRow'] = var2;
        return var1;
    }
})();