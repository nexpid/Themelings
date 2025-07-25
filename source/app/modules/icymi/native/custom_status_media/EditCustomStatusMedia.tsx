// app/modules/icymi/native/custom_status_media/EditCustomStatusMedia.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot21;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot21;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function MediaPreview(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.media;
            var1 = _closure1_slot19;
            var5 = undefined;
            var19 = var1.bind(var5)();
            var7 = var9.item;
            var _closure2_slot0 = var7;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var4 = var6.useTileEntranceAnimatedStyle;
            var3 = var7.id;
            var1 = null;
            if(!(var1 == var3)) { _fun0004_ip = 76; continue _fun0004 }
 70:
            var3 = var7.uri;
 76:
            var14 = var4.bind(var6)(var3);
            var6 = _closure1_slot5;
            var4 = var6.useCallback;
            var8 = var7.id;
            var3 = new Array(2);
            var3[0] = var8;
            var7 = var7.uri;
            var3[1] = var7;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 16;
                    var3 = var7[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.remove;
                    var4 = _closure1_slot0;
                    var3 = 17;
                    var3 = var7[var3];
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var8 = null;
                    if(!(var8 == var3)) { _fun0005_ip = 81; continue _fun0005 }
 71:
                    var7 = _closure2_slot0;
                    var3 = var7.uri;
 81:
                    var2 = _closure1_slot10;
                    var2 = var2.ChannelMessage;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var11 = var4.bind(var6)(var2, var3);
            var2 = var9.item;
            var3 = var2.platform;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 18;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.UploadPlatform;
            var2 = var2.REACT_NATIVE;
            var1 = null;
            if(!(var3 === var2)) { _fun0004_ip = 633; continue _fun0004 }
 178:
            var4 = _closure1_slot15;
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 19;
            var2 = var22[var10];
            var2 = var21.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var7 = var19.mediaPreview;
            var6 = new Array(2);
            var6[0] = var7;
            var6[1] = var14;
            var2['style'] = var6;
            var8 = _closure1_slot14;
            var6 = 20;
            var6 = var22[var6];
            var7 = var21.bind(var5)(var6);
            var6 = {'uri': null, 'isImage': null, 'isVideo': null, 'width': 48, 'height': 48, 'maxFileWidth': 48};
            var12 = var9.item;
            var12 = var12.uri;
            var6['uri'] = var12;
            var12 = var9.isImage;
            var6['isImage'] = var12;
            var12 = var9.isVideo;
            var6['isVideo'] = var12;
            var9 = var9.item;
            var9 = var9.filename;
            var6['fileName'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot14;
            var17 = _closure1_slot0;
            var7 = 21;
            var7 = var22[var7];
            var7 = var17.bind(var5)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var12 = 'button';
            var7['accessibilityRole'] = var12;
            var12 = 22;
            var13 = var22[var12];
            var13 = var17.bind(var5)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var12 = var22[var12];
            var12 = var17.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.kFwAsb;
            var12 = var13.bind(var15)(var12);
            var7['accessibilityLabel'] = var12;
            var12 = var19.closeButton;
            var7['style'] = var12;
            var7['onPress'] = var11;
            var11 = {'top': 4, 'bottom': 4, 'left': 4, 'right': 4};
            var7['hitSlop'] = var11;
            var12 = _closure1_slot14;
            var10 = var22[var10];
            var10 = var21.bind(var5)(var10);
            var11 = var10.View;
            var10 = {};
            var15 = var19.closeContainer;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var10['style'] = var13;
            var15 = _closure1_slot14;
            var14 = _closure1_slot6;
            var13 = {};
            var18 = var19.closeButtonSubcontainer;
            var13['style'] = var18;
            var18 = _closure1_slot14;
            var16 = 23;
            var16 = var22[var16];
            var16 = var17.bind(var5)(var16);
            var17 = var16.XSmallBoldIcon;
            var16 = {};
            var20 = 'xxs';
            var16['size'] = var20;
            var20 = 12;
            var20 = var22[var20];
            var20 = var21.bind(var5)(var20);
            var20 = var20.unsafe_rawColors;
            var20 = var20.PRIMARY_500;
            var16['color'] = var20;
            var19 = var19.closeButtonIcon;
            var16['style'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 633:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function ActionBar(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var1 = var3.media;
            var _closure2_slot0 = var1;
            var2 = var3.onFormFocus;
            var _closure2_slot1 = var2;
            var6 = var3.onSubmit;
            var _closure2_slot2 = var6;
            var16 = var3.submitButtonEnabled;
            var3 = _closure1_slot19;
            var4 = undefined;
            var25 = var3.bind(var4)();
            var21 = _closure1_slot1;
            var24 = _closure1_slot2;
            var3 = 24;
            var3 = var24[var3];
            var3 = var21.bind(var4)(var3);
            var5 = var3.bind(var4)();
            var28 = _closure1_slot0;
            var3 = 25;
            var3 = var24[var3];
            var3 = var28.bind(var4)(var3);
            var3 = var3.KeyboardTypes;
            var3 = var3.MEDIA;
            var18 = var5 === var3;
            var _closure2_slot3 = var18;
            var7 = _closure1_slot5;
            var5 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var18;
            var3[1] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0007_ip = 80; continue _fun0007 }
 10:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 26;
                    var3 = var8[var3];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var3);
                    var4 = var5.showSimpleMediaKeyboard;
                    var3 = 17;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot7;
                    var2 = var3.dismiss;
                    var2 = var2.bind(var3)();
                    _fun0007_ip = 90; continue _fun0007;
 80:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot20;
                    var2 = _closure2_slot0;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0008_ip = 94; continue _fun0008 }
 37:
                    var2 = var3.value;
                    var7 = var1.push;
                    var10 = _closure1_slot14;
                    var9 = _closure1_slot22;
                    var8 = {};
                    var8['media'] = var2;
                    var2 = var2.id;
                    var2 = var10.bind(var5)(var9, var8, var2);
                    var2 = var7.bind(var1)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0008_ip = 37; continue _fun0008 }
 94:
                    return var1;
                }
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var1 = false;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var19 = var2[var1];
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot4 = var1;
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 58; continue _fun0009 }
 7:
                        var5 = _closure2_slot4;
                        var3 = undefined;
                        var2 = true;
                        var2 = var5.bind(var3)(var2);
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=35);
 33:
                        return var2;
 35:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0009_ip = 55; continue _fun0009 }
 41:
                        var5 = _closure2_slot4;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
 55:
                        return var2;
 58:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(1);
            var1[0] = var6;
            var17 = var3.bind(var5)(var2, var1);
            var1 = 27;
            var1 = var24[var1];
            var1 = var21.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.insets;
            var3 = _closure1_slot14;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var25.actionsContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var8 = var7.bottom;
            var7 = 12;
            var7 = var24[var7];
            var7 = var21.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var7 = var8 + var7;
            var6['paddingBottom'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot15;
            var5 = 19;
            var5 = var24[var5];
            var5 = var21.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var10 = _closure1_slot14;
            var9 = _closure1_slot8;
            var8 = {'keyboardShouldPersistTaps': 'always', 'horizontal': true};
            var20 = true;
            var12 = var25.mediaItemsScrollContainer;
            var8['contentContainerStyle'] = var12;
            var12 = var14.map;
            var11 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var11 = var12.bind(var14)(var11);
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot15;
            var10 = _closure1_slot6;
            var9 = {};
            var12 = var25.actionButtonRow;
            var9['style'] = var12;
            var15 = _closure1_slot14;
            var12 = 28;
            var12 = var24[var12];
            var12 = var28.bind(var4)(var12);
            var14 = var12.HeaderActionButton;
            var12 = {};
            var22 = 22;
            var26 = var24[var22];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var24 = var24[var22];
            var24 = var28.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.aDZSu7;
            var24 = var26.bind(var27)(var24);
            var12['accessibilityLabel'] = var24;
            var26 = var25.actionButton;
            var24 = new Array(2);
            var24[0] = var26;
            var25 = var25.mediaButton;
            var24[1] = var25;
            var12['style'] = var24;
            var25 = _closure1_slot2;
            if(var18) { _fun0006_ip = 587; continue _fun0006 }
 578:
            var18 = 30;
            var18 = var25[var18];
            _fun0006_ip = 594; continue _fun0006;
 587:
            var24 = 29;
            var18 = var25[var24];
 594:
            var18 = var21.bind(var4)(var18);
            var12['source'] = var18;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var24 = 31;
            var24 = var18[var24];
            var24 = var21.bind(var4)(var24);
            var24 = var24.IconSizes;
            var24 = var24.SMALL_20;
            var12['iconSize'] = var24;
            var12['onPress'] = var23;
            var12['foregroundRipple'] = var20;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot14;
            var13 = 32;
            var13 = var18[var13];
            var13 = var21.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var13['loading'] = var19;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.R3BPHx;
            var18 = var19.bind(var20)(var18);
            var13['text'] = var18;
            var13['onPress'] = var17;
            var16 = !var16;
            var13['disabled'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var14 = var4.StyleSheet;
    var7 = var4.Keyboard;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot10 = var4;
    var15 = 6;
    var4 = var6[var15];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.ICYMI_MARGIN;
    var10 = 8;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var16 = var4.Fonts;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STATUS_MAX_LENGTH;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var7 = var4.jsxs;
    var _closure1_slot15 = var7;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var11 = 12;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.spacing;
    var7 = var4.PX_4;
    var _closure1_slot17 = var7;
    var4 = 40;
    var4 = var4 + var7;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexGrow': 1, 'padding': 16, 'rowGap': 32};
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start'};
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.INPUT_BACKGROUND;
    var9['backgroundColor'] = var17;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var9['borderRadius'] = var17;
    var9['padding'] = var13;
    var4['statusContainer'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['emoji'] = var9;
    var9 = {'color': null, 'lineHeight': 16, 'flexGrow': 1, 'alignSelf': 'flex-start', 'paddingVertical': 0, 'paddingHorizontal': 0};
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_PRIMARY;
    var9['color'] = var17;
    var4['status'] = var9;
    var9 = {'minHeight': 80, 'fontSize': 24, 'lineHeight': 30, 'fontFamily': null, 'color': null, 'flexGrow': 1, 'height': 'auto'};
    var16 = var16.PRIMARY_MEDIUM;
    var9['fontFamily'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_PRIMARY;
    var9['color'] = var16;
    var4['statusText'] = var9;
    var9 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_MUTED;
    var9['color'] = var16;
    var4['inputPlaceholder'] = var9;
    var9 = {};
    var9['rowGap'] = var10;
    var4['clearAfterSection'] = var9;
    var9 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INPUT_BACKGROUND;
    var9['backgroundColor'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9['borderRadius'] = var16;
    var16 = 'hidden';
    var9['overflow'] = var16;
    var4['clearAfterOptions'] = var9;
    var9 = {'flex': 1, 'width': 48, 'height': 48, 'alignItems': 'center', 'justifyContent': 'center', 'borderColor': null, 'borderRadius': null, 'borderWidth': 1};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_STRONG;
    var9['borderColor'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var9['borderRadius'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var16;
    var4['mediaPreview'] = var9;
    var9 = {'height': 20, 'width': 20, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'borderWidth': 1};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var9['borderRadius'] = var16;
    var16 = 14;
    var16 = var6[var16];
    var19 = var5.bind(var1)(var16);
    var18 = var19.hexWithOpacity;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var17 = var16.BLACK_500;
    var16 = 0.5;
    var16 = var18.bind(var19)(var17, var16);
    var9['backgroundColor'] = var16;
    var4['closeContainer'] = var9;
    var9 = {'height': 18, 'width': 18, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var9['borderRadius'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_NORMAL;
    var9['backgroundColor'] = var16;
    var4['closeButtonSubcontainer'] = var9;
    var9 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_BASE_PRIMARY;
    var9['tintColor'] = var16;
    var4['closeButtonIcon'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967290, 'right': 4294967292};
    var4['closeButton'] = var9;
    var9 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var9['columnGap'] = var16;
    var9['paddingTop'] = var15;
    var9['paddingHorizontal'] = var13;
    var4['mediaItemsScrollContainer'] = var9;
    var9 = {};
    var14 = var14.hairlineWidth;
    var9['borderTopWidth'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_STRONG;
    var9['borderTopColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9['paddingBottom'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9['paddingTop'] = var14;
    var4['actionsContainer'] = var9;
    var9 = {'flexDirection': 'row', 'marginHorizontal': null, 'justifyContent': 'space-between'};
    var9['marginHorizontal'] = var13;
    var4['actionButtonRow'] = var9;
    var9 = {'height': 40, 'minHeight': 40, 'width': 40, 'minWidth': 40, 'maxHeight': 40, 'maxWidth': 40};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_NORMAL;
    var9['color'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var11;
    var4['actionButton'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['mediaButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 47;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/custom_status_media/EditCustomStatusMedia.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditCustomStatusMedia(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var10 = var1.onClose;
            var _closure2_slot0 = var10;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var1 = _closure1_slot19;
            var28 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 33;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var14 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var5 = 34;
            var1 = var9[var5];
            var8 = var2.bind(var4)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var7.bind(var8)(var2, var1);
            var _closure2_slot1 = var8;
            var2 = _closure1_slot5;
            var1 = var2.useState;
            var7 = '';
            var2 = var1.bind(var2)(var7);
            var1 = _closure1_slot4;
            var13 = 2;
            var1 = var1.bind(var4)(var2, var13);
            var2 = 0;
            var30 = var1[var2];
            var _closure2_slot2 = var30;
            var11 = 1;
            var29 = var1[var11];
            var12 = _closure1_slot5;
            var1 = var12.useState;
            var26 = null;
            var12 = var1.bind(var12)(var26);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var12, var13);
            var27 = var1[var2];
            var _closure2_slot3 = var27;
            var1 = var1[var11];
            var _closure2_slot4 = var1;
            var12 = _closure1_slot5;
            var1 = var12.useState;
            var12 = var1.bind(var12)(var14);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var12, var13);
            var21 = var1[var2];
            var _closure2_slot5 = var21;
            var1 = var1[var11];
            var _closure2_slot6 = var1;
            var13 = _closure1_slot5;
            var12 = var13.useCallback;
            var11 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure2_slot4;
                    var2 = {};
                    var4 = var1.id;
                    var2['id'] = var4;
                    var5 = var1.id;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0011_ip = 54; continue _fun0011 }
 32:
                    var5 = var1.surrogates;
                    if(!(var4 != var5)) { _fun0011_ip = 54; continue _fun0011 }
 41:
                    var6 = var1.surrogates;
                    var5 = '';
                    if(!(var5 === var6)) { _fun0011_ip = 75; continue _fun0011 }
 54:
                    var5 = var1.name;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0011_ip = 73; continue _fun0011 }
 70:
                    var4 = var5;
 73:
                    _fun0011_ip = 80; continue _fun0011;
 75:
                    var4 = var1.surrogates;
 80:
                    var2['name'] = var4;
                    var1 = var1.animated;
                    var2['animated'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var12.bind(var13)(var11, var1);
            var _closure2_slot7 = var1;
            var13 = _closure1_slot5;
            var12 = var13.useCallback;
            var11 = new Array(1);
            var11[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 35;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var6 = _closure2_slot7;
                var2['onPressEmoji'] = var6;
                var5 = _closure1_slot13;
                var5 = var5.STATUS;
                var2['pickerIntention'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var18 = var12.bind(var13)(var1, var11);
            var11 = _closure1_slot5;
            var1 = var11.useRef;
            var33 = var1.bind(var11)(var26);
            var _closure2_slot8 = var33;
            var13 = _closure1_slot5;
            var12 = var13.useCallback;
            var11 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 28; continue _fun0012 }
 18:
                    var1 = var2.blur;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var31 = var12.bind(var13)(var11, var1);
            var1 = 36;
            var1 = var9[var1];
            var3 = var3.bind(var4)(var1);
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot2;
                var1['statusText'] = var3;
                var3 = _closure2_slot3;
                var1['statusEmoji'] = var3;
                var2 = _closure2_slot5;
                var1['clearAfter'] = var2;
                return var1;
            };
            var3 = var3.bind(var4)(var1);
            var1 = var30.trim;
            var1 = var1.bind(var30)();
            var9 = var7 === var1;
            if(!var9) { _fun0010_ip = 385; continue _fun0010 }
 381:
            var9 = var26 == var27;
 385:
            if(var9) { _fun0010_ip = 427; continue _fun0010 }
 388:
            var1 = var3.statusText;
            var1 = var30 === var1;
            if(!var1) { _fun0010_ip = 411; continue _fun0010 }
 401:
            var7 = var3.statusEmoji;
            var1 = var27 === var7;
 411:
            if(!var1) { _fun0010_ip = 424; continue _fun0010 }
 414:
            var3 = var3.clearAfter;
            var1 = var21 === var3;
 424:
            var9 = var1;
 427:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var7 = var3.bind(var4)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure1_slot11;
                var3 = var4.getUploads;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 17;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                var1 = _closure1_slot10;
                var1 = var1.ChannelMessage;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var12 = var5.bind(var7)(var3, var1);
            _closure2_slot9 = var12;
            var7 = _closure1_slot5;
            var5 = var7.useCallback;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0013_ip = 347; continue _fun0013 }
 10:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 37;
                        var2 = var5[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var8 = var2.ICYMIAnalytics;
                        var7 = var8.trackItemInteraction;
                        var3 = 'edit_custom_status_modal';
                        var2 = 'press_save_new_custom_status';
                        var2 = var7.bind(var8)(var3, var3, var2);
                        var3 = _closure1_slot1;
                        var2 = 38;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.bind(var4)();
                        var2 = var3.toDate;
                        var3 = var2.bind(var3)();
                        var2 = var3.getTime;
                        var8 = var2.bind(var3)();
                        var2 = _closure2_slot9;
                        var3 = var2.length;
                        var2 = 0;
                        if(!(var3 > var2)) { _fun0013_ip = 178; continue _fun0013 }
 124:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 39;
                        var2 = var7[var2];
                        var9 = var3.bind(var4)(var2);
                        var7 = var9.handleUploadingMedia;
                        var3 = _closure2_slot9;
                        var2 = _closure2_slot1;
                        var2 = var7.bind(var9)(var3, var2, var8);
                        SaveGenerator(address=169);
 167:
                        return var2;
 169:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0013_ip = 344; continue _fun0013 }
 178:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 40;
                        var3 = var9[var3];
                        var7 = var7.bind(var4)(var3);
                        var3 = {};
                        var9 = _closure2_slot2;
                        var3['text'] = var9;
                        var9 = _closure2_slot3;
                        var3['emojiInfo'] = var9;
                        var9 = _closure2_slot5;
                        var3['clearAfter'] = var9;
                        var3['createdAtMs'] = var8;
                        var3 = var7.bind(var4)(var3);
                        SaveGenerator(address=240);
 238:
                        return var3;
 240:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0013_ip = 341; continue _fun0013 }
 246:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var6 = 41;
                        var6 = var12[var6];
                        var6 = var11.bind(var4)(var6);
                        var8 = var6.AccessibilityAnnouncer;
                        var7 = var8.announce;
                        var6 = 22;
                        var9 = var12[var6];
                        var9 = var11.bind(var4)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var6 = var12[var6];
                        var6 = var11.bind(var4)(var6);
                        var6 = var6.t;
                        var6 = var6.Og40Ym;
                        var6 = var9.bind(var10)(var6);
                        var6 = var7.bind(var8)(var6);
                        var5 = _closure2_slot0;
                        var5 = var5.bind(var4)();
                        return var4;
 341:
                        return var3;
 344:
                        return var2;
 347:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var1);
            var1 = new Array(6);
            var1[0] = var30;
            var1[1] = var27;
            var1[2] = var21;
            var1[3] = var12;
            var1[4] = var10;
            var1[5] = var8;
            var10 = var5.bind(var7)(var3, var1);
            var7 = _closure1_slot5;
            var5 = var7.useCallback;
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 42;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideMediaKeyboardActionSheet;
                    var3 = var3.bind(var4)();
                    var3 = _closure2_slot8;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0014_ip = 63; continue _fun0014 }
 53:
                    var3 = var4.focus;
                    var3 = var3.bind(var4)();
 63:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 43;
                    var2 = var7[var2];
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.setKeyboardType;
                    var2 = {};
                    var5 = 25;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.KeyboardTypes;
                    var5 = var5.SYSTEM;
                    var2['type'] = var5;
                    var5 = {};
                    var6 = true;
                    var5['keyboardWillOpen'] = var6;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = new Array(0);
            var11 = var5.bind(var7)(var3, var1);
            var1 = var12.length;
            if(!(!(var1 > var2))) { _fun0010_ip = 578; continue _fun0010 }
 572:
            var15 = _closure1_slot18;
            _fun0010_ip = 597; continue _fun0010;
 578:
            var2 = _closure1_slot17;
            var1 = 54;
            var2 = var1 + var2;
            var1 = _closure1_slot18;
            var15 = var2 + var1;
 597:
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = function() {
                var1 = function() {
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 16;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.clearAll;
                    var6 = _closure1_slot0;
                    var3 = 17;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    var2 = _closure1_slot10;
                    var2 = var2.ChannelMessage;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot16;
            var1 = {};
            var8 = _closure1_slot14;
            var7 = _closure1_slot8;
            var5 = {};
            var13 = {};
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var14 = 12;
            var14 = var22[var14];
            var14 = var16.bind(var4)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_16;
            var14 = var15 + var14;
            var13['bottom'] = var14;
            var5['contentInset'] = var13;
            var13 = 'always';
            var5['keyboardShouldPersistTaps'] = var13;
            var15 = _closure1_slot15;
            var14 = _closure1_slot6;
            var13 = {};
            var16 = var28.container;
            var13['style'] = var16;
            var19 = _closure1_slot15;
            var17 = _closure1_slot6;
            var16 = {};
            var23 = var28.statusContainer;
            var16['style'] = var23;
            var25 = _closure1_slot14;
            var36 = _closure1_slot0;
            var23 = 21;
            var23 = var22[var23];
            var23 = var36.bind(var4)(var23);
            var24 = var23.PressableOpacity;
            var23 = {};
            var32 = 22;
            var34 = var22[var32];
            var34 = var36.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var22 = var22[var32];
            var22 = var36.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.WkfRZG;
            var22 = var34.bind(var35)(var22);
            var23['accessibilityLabel'] = var22;
            var22 = {};
            var34 = var26 == var27;
            var26 = undefined;
            if(var34) { _fun0010_ip = 831; continue _fun0010 }
 826:
            var26 = var27.name;
 831:
            var22['text'] = var26;
            var23['accessibilityValue'] = var22;
            var22 = 'button';
            var23['accessibilityRole'] = var22;
            var23['onPress'] = var18;
            var35 = _closure1_slot14;
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var26 = 44;
            var26 = var22[var26];
            var34 = var18.bind(var4)(var26);
            var26 = {};
            var26['emoji'] = var27;
            var27 = 32;
            var26['size'] = var27;
            var27 = var28.emoji;
            var26['style'] = var27;
            var27 = true;
            var26['withPlaceholder'] = var27;
            var26 = var35.bind(var4)(var34, var26);
            var23['children'] = var26;
            var24 = var25.bind(var4)(var24, var23);
            var23 = new Array(2);
            var23[0] = var24;
            var26 = _closure1_slot14;
            var24 = 45;
            var24 = var22[var24];
            var25 = var18.bind(var4)(var24);
            var24 = {};
            var24['ref'] = var33;
            var33 = _closure1_slot12;
            var24['maxLength'] = var33;
            var35 = _closure1_slot0;
            var33 = var22[var32];
            var33 = var35.bind(var4)(var33);
            var36 = var33.intl;
            var34 = var36.string;
            var33 = var22[var32];
            var33 = var35.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.TM2l8P;
            var33 = var34.bind(var36)(var33);
            var24['placeholder'] = var33;
            var33 = var28.inputPlaceholder;
            var33 = var33.color;
            var24['placeholderTextColor'] = var33;
            var33 = var22[var32];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var22[var32];
            var32 = var35.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.xalUlZ;
            var32 = var33.bind(var34)(var32);
            var24['accessibilityLabel'] = var32;
            var24['onSubmitEditing'] = var31;
            var31 = var28.status;
            var24['style'] = var31;
            var24['value'] = var30;
            var24['onChange'] = var29;
            var24['onFocus'] = var11;
            var24['multiline'] = var27;
            var29 = false;
            var24['autoCorrect'] = var29;
            var24['showBorder'] = var29;
            var24['showTopContainer'] = var29;
            var29 = 'top';
            var24['textAlignVertical'] = var29;
            var29 = 'none';
            var24['autoCapitalize'] = var29;
            var24['showCharactersRemaining'] = var27;
            var28 = var28.statusText;
            var24['inputTextStyle'] = var28;
            var24['autoFocus'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var23[1] = var24;
            var16['children'] = var23;
            var17 = var19.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot14;
            var17 = 46;
            var17 = var22[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['value'] = var21;
            var20 = function onChange(arg1) {
                var3 = _closure2_slot6;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var17['onChange'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var5['children'] = var13;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot14;
            var7 = _closure1_slot23;
            var6 = {};
            var6['media'] = var12;
            var6['onFormFocus'] = var11;
            var6['onSubmit'] = var10;
            var9 = !var9;
            var6['submitButtonEnabled'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();