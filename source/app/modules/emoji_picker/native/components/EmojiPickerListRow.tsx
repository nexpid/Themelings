// app/modules/emoji_picker/native/components/EmojiPickerListRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var13 = native3;
        var3 = native6;
        var6 = native7;
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
                if(!(var5 == var8)) { _fun0003_ip = 271; continue _fun0003 }
 203:
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
                _fun0003_ip = 419; continue _fun0003;
 271:
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
                if(var11) { _fun0003_ip = 378; continue _fun0003 }
 364:
                var11 = 16;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                _fun0003_ip = 390; continue _fun0003;
 378:
                var13 = 15;
                var13 = var15[var13];
                var11 = var14.bind(var4)(var13);
 390:
                var5['placeholder'] = var11;
                var11 = {};
                var11['uri'] = var12;
                var5['source'] = var11;
                var11 = true;
                var5['usesSmallCache'] = var11;
                var8 = var10.bind(var4)(var9, var5);
 419:
                var5 = new Array(2);
                var5[0] = var8;
                if(!var6) { _fun0003_ip = 446; continue _fun0003 }
 430:
                var9 = _closure1_slot7;
                var8 = _closure1_slot13;
                var7 = {};
                var6 = var9.bind(var4)(var8, var7);
 446:
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
        var4 = native4;
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
        var14 = var6[var14];
        var14 = var13.bind(var1)(var14);
        var14 = var14.radii;
        var14 = var14.sm;
        var10['borderRadius'] = var14;
        var14 = 'hidden';
        var10['overflow'] = var14;
        var4['disabledOverlay'] = var10;
        var10 = {};
        var14 = 8;
        var14 = var6[var14];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isAndroid;
        var15 = var14.bind(var15)();
        var14 = 30;
        if(!var15) { _fun0001_ip = 360; continue _fun0001 }
 357:
        var14 = 26;
 360:
        var10['fontSize'] = var14;
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
        var17 = var11.absoluteFillObject;
        var18 = var10;
        var11 = copyDataProperties(var18, var17);
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
                if(!(var2 < var1)) { _fun0004_ip = 311; continue _fun0004 }
 127:
                var24 = var19[var2];
                if(!(var4 !== var24)) { _fun0004_ip = 261; continue _fun0004 }
 138:
                var22 = var8.push;
                var1 = {};
                var21 = var24.id;
                var23 = var14 != var21;
                var20 = null;
                if(!var23) { _fun0004_ip = 162; continue _fun0004 }
 159:
                var20 = var21;
 162:
                var1['id'] = var20;
                var20 = var24.name;
                var25 = var14 != var20;
                var23 = var13;
                if(!var25) { _fun0004_ip = 184; continue _fun0004 }
 181:
                var23 = var20;
 184:
                var1['name'] = var23;
                var23 = _closure1_slot12;
                var23 = var23.bind(var4)(var24, var16);
                var1['url'] = var23;
                var23 = var24.animated;
                var23 = var12 === var23;
                if(!var23) { _fun0004_ip = 218; continue _fun0004 }
 215:
                var23 = var16;
 218:
                var1['animated'] = var23;
                var23 = var24.id;
                var23 = var14 != var23;
                if(!var23) { _fun0004_ip = 250; continue _fun0004 }
 235:
                var25 = var18.has;
                var24 = var24.id;
                var23 = var25.bind(var18)(var24);
 250:
                var1['disabled'] = var23;
                var1 = var22.bind(var8)(var1);
                _fun0004_ip = 291; continue _fun0004;
 261:
                var22 = var8.push;
                var1 = {'id': null, 'name': '', 'url': '', 'animated': false, 'disabled': false};
                var1 = var22.bind(var8)(var1);
                var21 = var11;
                var20 = var3;
 291:
                var2 = var2 + 1;
                var1 = var15 + var17;
                var11 = var21;
                var3 = var20;
                if(var2 < var1) { _fun0004_ip = 127; continue _fun0004 }
 311:
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
                        if(!(var2 != var4)) { _fun0005_ip = 53; continue _fun0005 }
 37:
                        var3 = _closure2_slot2;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var4, var2);
 53:
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
                        if(!(var2 != var3)) { _fun0006_ip = 48; continue _fun0006 }
 37:
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
 48:
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
                if(!(var3 < var2)) { _fun0007_ip = 241; continue _fun0007 }
 93:
                var21 = var16[var3];
                if(!(var4 !== var21)) { _fun0007_ip = 190; continue _fun0007 }
 101:
                var17 = var5.push;
                var19 = _closure1_slot7;
                var18 = _closure1_slot14;
                var2 = {};
                var2['emoji'] = var21;
                var2['category'] = var14;
                var2['animateEmoji'] = var10;
                var20 = var21.id;
                var20 = var7 != var20;
                if(!var20) { _fun0007_ip = 157; continue _fun0007 }
 142:
                var22 = var15.has;
                var21 = var21.id;
                var20 = var22.bind(var15)(var21);
 157:
                var2['disabled'] = var20;
                var2['onPressEmoji'] = var12;
                var2['onLongPressEmoji'] = var11;
                var2['isSectionNitroLocked'] = var9;
                var2 = var19.bind(var4)(var18, var2, var3);
                var2 = var17.bind(var5)(var2);
                _fun0007_ip = 227; continue _fun0007;
 190:
                var17 = var5.push;
                var19 = _closure1_slot7;
                var18 = _closure1_slot3;
                var2 = {};
                var20 = var6.image;
                var2['style'] = var20;
                var2 = var19.bind(var4)(var18, var2, var3);
                var2 = var17.bind(var5)(var2);
 227:
                var3 = var3 + 1;
                var2 = var8 + var13;
                if(var3 < var2) { _fun0007_ip = 93; continue _fun0007 }
 241:
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