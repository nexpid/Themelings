// app/modules/forums/native/composer/ForumComposer.tsx
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
            var9 = _closure1_slot33;
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
            var7 = _closure1_slot33;
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
    var _closure1_slot32 = var1;
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
    var _closure1_slot33 = var1;
    var1 = function Tags(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.tags;
            var1 = _closure1_slot30;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var3 = var9.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0004_ip = 186; continue _fun0004 }
 38:
            var4 = _closure1_slot28;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = var10.tags;
            var2['style'] = var6;
            var8 = _closure1_slot27;
            var15 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 67;
            var6 = var13[var11];
            var7 = var15.bind(var5)(var6);
            var6 = {};
            var14 = 68;
            var14 = var13[var14];
            var14 = var15.bind(var5)(var14);
            var6['source'] = var14;
            var12 = _closure1_slot0;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.IconSizes;
            var11 = var11.SMALL;
            var6['size'] = var11;
            var10 = var10.tagIcon;
            var6['style'] = var10;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var8 = var9.map;
            var7 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot28;
                    var3 = _closure1_slot5;
                    var4 = var3.Fragment;
                    var3 = {};
                    var7 = 0;
                    var6 = arg2;
                    var7 = var7 !== var6;
                    if(!var7) { _fun0005_ip = 65; continue _fun0005 }
 34:
                    var10 = _closure1_slot27;
                    var9 = _closure1_slot8;
                    var8 = {};
                    var6 = {};
                    var11 = 4;
                    var6['width'] = var11;
                    var8['style'] = var6;
                    var6 = undefined;
                    var7 = var10.bind(var6)(var9, var8);
 65:
                    var6 = new Array(2);
                    var6[0] = var7;
                    var9 = _closure1_slot27;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 69;
                    var7 = var7[var2];
                    var2 = undefined;
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.AppliedForumTagPill;
                    var7 = {};
                    var7['tag'] = var1;
                    var7 = var9.bind(var2)(var8, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 186:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function ActionBar(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var2 = var1.tags;
            var _closure2_slot1 = var2;
            var2 = var1.setTags;
            var _closure2_slot2 = var2;
            var15 = var1.canPost;
            var _closure2_slot3 = var15;
            var14 = var1.submitting;
            var2 = var1.onSubmit;
            var _closure2_slot4 = var2;
            var21 = var1.onShowExpressionPicker;
            var2 = var1.focusLastInput;
            var _closure2_slot5 = var2;
            var11 = var1.lastInput;
            var19 = var1.isEdit;
            var _closure2_slot6 = var19;
            var5 = var1.onLayout;
            var4 = undefined;
            var _closure2_slot10 = var4;
            var1 = _closure1_slot30;
            var17 = var1.bind(var4)();
            var _closure2_slot7 = var17;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 22;
            var2 = var7[var1];
            var9 = var6.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot17;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot17;
                var3 = var4.getUploads;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot11;
                var1 = var1.ChannelMessage;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var20 = var8.bind(var9)(var3, var2);
            var1 = var7[var1];
            var8 = var6.bind(var4)(var1);
            var3 = var8.useStateFromStores;
            var1 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot6;
                    var1 = !var1;
                    if(!var1) { _fun0007_ip = 46; continue _fun0007 }
 13:
                    var5 = _closure1_slot13;
                    var4 = var5.can;
                    var3 = _closure1_slot21;
                    var3 = var3.ATTACH_FILES;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 46:
                    return var1;
                }
            };
            var9 = var3.bind(var8)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 29;
            var1 = var7[var1];
            var3 = var2.bind(var4)(var1);
            var16 = true;
            var1 = {'includeKeyboardHeightIOS': true, 'includeCustomKeyboardHeightIOS': false};
            var1 = var3.bind(var4)(var1);
            var8 = var1.insets;
            var1 = 24;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var _closure2_slot8 = var3;
            var1 = var12.isMediaChannel;
            var1 = var1.bind(var12)();
            var2 = 55;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.KeyboardTypes;
            var2 = var2.MEDIA;
            var23 = var3 === var2;
            var _closure2_slot9 = var23;
            var6 = var1;
            if(var6) { _fun0006_ip = 339; continue _fun0006 }
 319:
            var1 = var9;
            if(!var9) { _fun0006_ip = 336; continue _fun0006 }
 325:
            var3 = var20.length;
            var2 = 0;
            var1 = var3 > var2;
 336:
            var6 = var1;
 339:
            var1 = var12.availableTags;
            var2 = null;
            var10 = var2 != var1;
            if(!var10) { _fun0006_ip = 380; continue _fun0006 }
 354:
            var1 = var12.availableTags;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0006_ip = 374; continue _fun0006 }
 369:
            var2 = var1.length;
 374:
            var1 = 0;
            var10 = var2 > var1;
 380:
            var1 = function maybeFocus() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = _closure2_slot8;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 55;
                    var3 = var1[var7];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.KeyboardTypes;
                    var3 = var3.SYSTEM;
                    var3 = var5 !== var3;
                    if(!var3) { _fun0008_ip = 88; continue _fun0008 }
 51:
                    var5 = _closure2_slot8;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.EXPRESSION;
                    var3 = var5 !== var4;
 88:
                    if(var3) { _fun0008_ip = 99; continue _fun0008 }
 91:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
 99:
                    return var1;
                }
            };
            _closure2_slot10 = var1;
            var3 = _closure1_slot28;
            var2 = _closure1_slot8;
            var1 = {};
            var1['onLayout'] = var5;
            var7 = var17.actionsContainer;
            var5 = new Array(2);
            var5[0] = var7;
            var7 = {};
            var8 = var8.bottom;
            var7['marginBottom'] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            if(!var6) { _fun0006_ip = 505; continue _fun0006 }
 442:
            var8 = _closure1_slot27;
            var7 = _closure1_slot1;
            var22 = _closure1_slot2;
            var5 = 70;
            var5 = var22[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['attachments'] = var20;
            var20 = function onRemove(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 71;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.remove;
                var3 = _closure2_slot0;
                var4 = var3.id;
                var2 = _closure1_slot11;
                var3 = var2.ChannelMessage;
                var2 = arg1;
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var5['onRemove'] = var20;
            var12 = var12.id;
            var5['channelId'] = var12;
            var5['highlightThumbnails'] = var16;
            var6 = var8.bind(var4)(var7, var5);
 505:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot28;
            var7 = _closure1_slot8;
            var6 = {};
            var12 = var17.actions;
            var6['style'] = var12;
            var12 = var9;
            if(!var12) { _fun0006_ip = 748; continue _fun0006 }
 542:
            var22 = _closure1_slot27;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var9 = 72;
            var9 = var28[var9];
            var9 = var27.bind(var4)(var9);
            var20 = var9.HeaderActionButton;
            var9 = {};
            var24 = 40;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.aDZSu7;
            var24 = var25.bind(var26)(var24);
            var9['accessibilityLabel'] = var24;
            var25 = var17.actionButton;
            var24 = new Array(2);
            var24[0] = var25;
            var25 = var17.mediaButton;
            var24[1] = var25;
            var9['style'] = var24;
            var24 = _closure1_slot1;
            var26 = _closure1_slot2;
            if(var23) { _fun0006_ip = 673; continue _fun0006 }
 664:
            var23 = 74;
            var23 = var26[var23];
            _fun0006_ip = 680; continue _fun0006;
 673:
            var25 = 73;
            var23 = var26[var25];
 680:
            var23 = var24.bind(var4)(var23);
            var9['source'] = var23;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 67;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.IconSizes;
            var23 = var23.SMALL_20;
            var9['iconSize'] = var23;
            var23 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0009_ip = 66; continue _fun0009 }
 10:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 75;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.showSimpleMediaKeyboard;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot6;
                    var2 = var3.dismiss;
                    var2 = var2.bind(var3)();
                    _fun0009_ip = 76; continue _fun0009;
 66:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 76:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 76;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackForumChannelMediaUploaderClicked;
                    var2 = {};
                    var5 = true;
                    var2['isMobile'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var9['onPress'] = var23;
            var9['foregroundRipple'] = var16;
            var12 = var22.bind(var4)(var20, var9);
 748:
            var9 = new Array(4);
            var9[0] = var12;
            if(!var10) { _fun0006_ip = 944; continue _fun0006 }
 762:
            var22 = _closure1_slot27;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var12 = 72;
            var12 = var25[var12];
            var12 = var24.bind(var4)(var12);
            var20 = var12.HeaderActionButton;
            var12 = {};
            var23 = 40;
            var26 = var25[var23];
            var26 = var24.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.112vVF;
            var23 = var26.bind(var27)(var23);
            var12['accessibilityLabel'] = var23;
            var26 = var17.actionButton;
            var23 = new Array(2);
            var23[0] = var26;
            var26 = var17.mediaButton;
            var23[1] = var26;
            var12['style'] = var23;
            var26 = _closure1_slot1;
            var23 = 68;
            var23 = var25[var23];
            var23 = var26.bind(var4)(var23);
            var12['source'] = var23;
            var23 = 67;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.IconSizes;
            var23 = var23.SMALL_20;
            var12['iconSize'] = var23;
            var23 = function onPress() {
                var4 = _closure1_slot6;
                var1 = var4.dismiss;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 77;
                var4 = var12[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var11 = _closure1_slot0;
                var3 = 49;
                var3 = var12[var3];
                var7 = var11.bind(var1)(var3);
                var3 = 78;
                var4 = var12[var3];
                var3 = var12.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = {};
                var8 = _closure2_slot0;
                var3['parentChannel'] = var8;
                var8 = function onSave(arg1) {
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3['onSave'] = var8;
                var8 = 40;
                var9 = var12[var8];
                var9 = var11.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.HPu3kp;
                var8 = var9.bind(var10)(var8);
                var3['title'] = var8;
                var7 = _closure2_slot1;
                var3['tags'] = var7;
                var2 = function onClose() {
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3['onClose'] = var2;
                var2 = 'ForumPostTagsActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var12['onPress'] = var23;
            var12['foregroundRipple'] = var16;
            var10 = var22.bind(var4)(var20, var12);
 944:
            var9[1] = var10;
            var12 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 42;
            var10 = var20[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.PostComposerInputs;
            var10 = var10.CONTENT;
            var10 = var11 === var10;
            if(!var10) { _fun0006_ip = 1147; continue _fun0006 }
 990:
            var20 = _closure1_slot27;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var11 = 72;
            var11 = var24[var11];
            var11 = var23.bind(var4)(var11);
            var12 = var11.HeaderActionButton;
            var11 = {};
            var22 = 40;
            var25 = var24[var22];
            var25 = var23.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.iZ7Mz8;
            var22 = var25.bind(var26)(var22);
            var11['accessibilityLabel'] = var22;
            var22 = var17.actionButton;
            var11['style'] = var22;
            var25 = _closure1_slot1;
            var22 = 79;
            var22 = var24[var22];
            var22 = var25.bind(var4)(var22);
            var11['source'] = var22;
            var22 = 67;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.IconSizes;
            var22 = var22.SMALL_20;
            var11['iconSize'] = var22;
            var11['onPress'] = var21;
            var11['foregroundRipple'] = var16;
            var10 = var20.bind(var4)(var12, var11);
 1147:
            var9[2] = var10;
            var12 = _closure1_slot27;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var20 = 80;
            var10 = var10[var20];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 40;
            var22 = var25[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            if(var19) { _fun0006_ip = 1239; continue _fun0006 }
 1224:
            var19 = var21.pIuQIy;
            var19 = var22.bind(var23)(var19);
            _fun0006_ip = 1250; continue _fun0006;
 1239:
            var21 = var21.R3BPHx;
            var19 = var22.bind(var23)(var21);
 1250:
            var10['text'] = var19;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var20];
            var18 = var19.bind(var4)(var18);
            var19 = var18.ButtonLooks;
            if(var15) { _fun0006_ip = 1288; continue _fun0006 }
 1280:
            var18 = var19.OUTLINED;
            _fun0006_ip = 1294; continue _fun0006;
 1288:
            var18 = var19.FILLED;
 1294:
            var10['look'] = var18;
            var10['shrink'] = var16;
            var10['foregroundRipple'] = var16;
            var16 = var17.postButton;
            var10['style'] = var16;
            if(var15) { _fun0006_ip = 1330; continue _fun0006 }
 1322:
            var16 = var17.postButtonTextDisabled;
            _fun0006_ip = 1336; continue _fun0006;
 1330:
            var16 = var17.postButtonText;
 1336:
            var10['textStyle'] = var16;
            var10['loading'] = var14;
            if(var14) { _fun0006_ip = 1352; continue _fun0006 }
 1349:
            var14 = !var15;
 1352:
            var10['disabled'] = var14;
            var14 = function renderIcon() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = _closure1_slot27;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var5 = 67;
                    var1 = var1[var5];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var8 = _closure2_slot3;
                    var9 = _closure2_slot7;
                    if(var8) { _fun0010_ip = 58; continue _fun0010 }
 45:
                    var8 = var9.postIconColorDisabled;
                    var8 = var8.color;
                    _fun0010_ip = 69; continue _fun0010;
 58:
                    var9 = var9.postIconColor;
                    var8 = var9.color;
 69:
                    var1['color'] = var8;
                    var6 = _closure2_slot7;
                    var6 = var6.postIcon;
                    var1['style'] = var6;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.Sizes;
                    var5 = var5.SMALL;
                    var1['size'] = var5;
                    var5 = 81;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var1['source'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var10['renderIcon'] = var14;
            var13 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0011_ip = 23; continue _fun0011 }
 10:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = {};
                    var1 = var3.bind(var2)(var1);
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
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
    var7 = var4.Keyboard;
    var _closure1_slot6 = var7;
    var7 = var4.Pressable;
    var _closure1_slot7 = var7;
    var14 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var7 = var6[var4];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var10 = 8;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var7 = var6[var4];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SlowmodeType;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var15 = 12;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AbortCodes;
    var _closure1_slot19 = var7;
    var7 = var4.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot20 = var7;
    var4 = var4.Permissions;
    var _closure1_slot21 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot22 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot23 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ExpressionPickerViewType;
    var _closure1_slot24 = var4;
    var16 = 16;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OpenThreadAnalyticsLocations;
    var _closure1_slot25 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = var4.NOOP;
    var _closure1_slot26 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot27 = var7;
    var7 = var4.jsxs;
    var _closure1_slot28 = var7;
    var4 = var4.Fragment;
    var _closure1_slot29 = var4;
    var4 = 19;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'backgroundColor': null, 'position': 'relative'};
    var11 = 20;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var17;
    var4['container'] = var9;
    var9 = {};
    var9['paddingBottom'] = var16;
    var4['scrollViewContentContainer'] = var9;
    var9 = {};
    var16 = 40;
    var9['height'] = var16;
    var4['avatarContainer'] = var9;
    var9 = {};
    var9['marginRight'] = var15;
    var4['avatar'] = var9;
    var9 = {};
    var9['padding'] = var10;
    var4['titleInput'] = var9;
    var9 = {'minHeight': 40, 'height': 'auto'};
    var13 = var13.DISPLAY_SEMIBOLD;
    var9['fontFamily'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_PRIMARY;
    var9['color'] = var13;
    var4['titleInputText'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'padding': 0, 'lineHeight': 20, 'color': null, 'textAlignVertical': 'top'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_PRIMARY;
    var9['color'] = var13;
    var13 = 'top';
    var4['contentInput'] = var9;
    var9 = {};
    var9['marginEnd'] = var10;
    var4['postIcon'] = var9;
    var9 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var9['color'] = var15;
    var4['postIconColor'] = var9;
    var9 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.HEADER_SECONDARY;
    var9['color'] = var15;
    var4['postIconColorDisabled'] = var9;
    var9 = {'marginLeft': 'auto', 'borderRadius': null, 'paddingHorizontal': 12, 'height': 40, 'overflow': 'hidden'};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var9['borderRadius'] = var15;
    var4['postButton'] = var9;
    var9 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var9['color'] = var15;
    var4['postButtonText'] = var9;
    var9 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.HEADER_SECONDARY;
    var9['color'] = var15;
    var4['postButtonTextDisabled'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'padding': 8};
    var4['tags'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['tagIcon'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'paddingHorizontal': 12, 'paddingTop': 8};
    var4['editor'] = var9;
    var9 = {'width': '100%', 'flex': 1, 'flexDirection': 'column', 'minHeight': 200};
    var4['editorBody'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'flex-end'};
    var4['usernameToChannel'] = var9;
    var9 = {'lineHeight': 20, 'flex': 1};
    var4['channelName'] = var9;
    var9 = {};
    var19 = var14.absoluteFillObject;
    var20 = var9;
    var15 = copyDataProperties(var20, var19);
    var15 = var14.hairlineWidth;
    var14 = 'borderTopWidth';
    var9[var14] = var15;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var15 = var14.BACKGROUND_MODIFIER_ACCENT;
    var14 = 'borderTopColor';
    var9[var14] = var15;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var15 = var14.BACKGROUND_PRIMARY;
    var14 = 'backgroundColor';
    var9[var14] = var15;
    var9[var13] = var1;
    var4['actionsContainer'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'padding': 8, 'width': '100%'};
    var4['actions'] = var9;
    var9 = {'height': 40, 'minHeight': 40, 'maxHeight': 40, 'width': 40, 'minWidth': 40, 'maxWidth': 40, 'borderRadius': 20, 'color': null, 'backgroundColor': null, 'marginLeft': 0, 'marginRight': 0, 'overflow': 'hidden'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_NORMAL;
    var9['color'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var13;
    var4['actionButton'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['mediaButton'] = var9;
    var9 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'zIndex': 100};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var11;
    var4['horizontalAutocomplete'] = var9;
    var9 = {'marginBottom': 16, 'marginLeft': 16, 'marginRight': 16};
    var4['nameError'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['messageError'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = 82;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/ForumComposer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumComposer(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var33 = var1.parentChannel;
            var _closure2_slot0 = var33;
            var2 = var1.thread;
            var _closure2_slot1 = var2;
            var39 = var1.threadSettingsDraft;
            var _closure2_slot2 = var39;
            var16 = var1.onClose;
            var _closure2_slot3 = var16;
            var41 = var1.message;
            var _closure2_slot4 = var41;
            var24 = var1.isEdit;
            var _closure2_slot5 = var24;
            var5 = undefined;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var _closure2_slot25 = var5;
            var _closure2_slot26 = var5;
            var _closure2_slot27 = var5;
            var _closure2_slot28 = var5;
            var _closure2_slot29 = var5;
            var _closure2_slot30 = var5;
            var _closure2_slot31 = var5;
            var _closure2_slot32 = var5;
            var _closure2_slot33 = var5;
            var _closure2_slot34 = var5;
            var _closure2_slot35 = var5;
            var _closure2_slot36 = var5;
            var _closure2_slot37 = var5;
            var _closure2_slot38 = var5;
            var1 = _closure1_slot30;
            var23 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.analyticsLocations;
            var _closure2_slot6 = var1;
            var6 = _closure1_slot5;
            var3 = var6.useRef;
            var1 = null;
            var40 = var3.bind(var6)(var1);
            var6 = _closure1_slot0;
            var3 = 22;
            var7 = var4[var3];
            var12 = var6.bind(var5)(var7);
            var10 = var12.useStateFromStores;
            var7 = _closure1_slot18;
            var9 = new Array(1);
            var9[0] = var7;
            var8 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure1_slot18;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0013_ip = 28; continue _fun0013 }
 25:
                    var1 = var2;
 28:
                    return var1;
                }
            };
            var7 = new Array(0);
            var42 = var10.bind(var12)(var9, var8, var7);
            var _closure2_slot7 = var42;
            var7 = var4[var3];
            var10 = var6.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot12;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getSelfMember;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var8, var7);
            var7 = var4[var3];
            var12 = var6.bind(var5)(var7);
            var9 = var12.useStateFromStores;
            var7 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var4 = _closure1_slot10;
                var3 = var4.getDraft;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot11;
                var1 = var1.ChannelMessage;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var18 = var9.bind(var12)(var8, var7);
            var4 = var4[var3];
            var8 = var6.bind(var5)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 23;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot9;
                var1 = var1.theme;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6, var4);
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 20;
            var4 = var8[var4];
            var4 = var7.bind(var5)(var4);
            var4 = var4.unsafe_rawColors;
            if(var6) { _fun0012_ip = 459; continue _fun0012 }
 451:
            var48 = var4.PRIMARY_460;
            _fun0012_ip = 465; continue _fun0012;
 459:
            var48 = var4.PRIMARY_330;
 465:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var3];
            var12 = var4.bind(var5)(var7);
            var9 = var12.useStateFromStores;
            var7 = _closure1_slot15;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var4 = _closure1_slot15;
                var3 = var4.getSlowmodeCooldownGuess;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot16;
                var1 = var1.CreateThread;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var27 = var9.bind(var12)(var8, var7);
            _closure2_slot8 = var27;
            var3 = var6[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot17;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure1_slot17;
                var3 = var4.getUploads;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot11;
                var1 = var1.ChannelMessage;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var22 = var7.bind(var8)(var4, var3);
            _closure2_slot9 = var22;
            var4 = _closure1_slot1;
            var3 = 24;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var45 = var3.bind(var5)();
            _closure2_slot10 = var45;
            var3 = 25;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var26 = var3.bind(var5)();
            _closure2_slot11 = var26;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var50 = false;
            var4 = var3.bind(var4)(var50);
            var3 = _closure1_slot4;
            var12 = 2;
            var3 = var3.bind(var5)(var4, var12);
            var8 = 0;
            var29 = var3[var8];
            var7 = 1;
            var3 = var3[var7];
            _closure2_slot12 = var3;
            var9 = _closure1_slot5;
            var6 = var9.useState;
            if(var24) { _fun0012_ip = 677; continue _fun0012 }
 661:
            var3 = var1 == var39;
            var13 = undefined;
            if(var3) { _fun0012_ip = 675; continue _fun0012 }
 670:
            var13 = var39.name;
 675:
            _fun0012_ip = 694; continue _fun0012;
 677:
            var4 = var1 == var2;
            var3 = undefined;
            if(var4) { _fun0012_ip = 691; continue _fun0012 }
 686:
            var3 = var2.name;
 691:
            var13 = var3;
 694:
            var15 = var1 != var13;
            var4 = '';
            var3 = var4;
            if(!var15) { _fun0012_ip = 711; continue _fun0012 }
 708:
            var3 = var13;
 711:
            var6 = var6.bind(var9)(var3);
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var6, var12);
            var37 = var3[var8];
            _closure2_slot13 = var37;
            var3 = var3[var7];
            _closure2_slot14 = var3;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var13 = 26;
            var3 = var3[var13];
            var6 = var6.bind(var5)(var3);
            var3 = var6.useChannelTemplate;
            var17 = var3.bind(var6)(var33);
            var9 = var4;
            if(!var24) { _fun0012_ip = 841; continue _fun0012 }
 779:
            var3 = var1 != var41;
            var9 = var4;
            if(!var3) { _fun0012_ip = 841; continue _fun0012 }
 789:
            var3 = var1 != var2;
            var9 = var4;
            if(!var3) { _fun0012_ip = 841; continue _fun0012 }
 799:
            var6 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 27;
            var3 = var15[var3];
            var19 = var6.bind(var5)(var3);
            var15 = var19.unparse;
            var6 = var41.content;
            var3 = var2.id;
            var9 = var15.bind(var19)(var6, var3);
 841:
            var6 = _closure1_slot5;
            var3 = var6.useState;
            if(var24) { _fun0012_ip = 883; continue _fun0012 }
 853:
            var15 = var17;
            if(!(var1 != var18)) { _fun0012_ip = 880; continue _fun0012 }
 860:
            var19 = var18.trim;
            var19 = var19.bind(var18)();
            var15 = var17;
            if(!(var4 !== var19)) { _fun0012_ip = 880; continue _fun0012 }
 877:
            var15 = var18;
 880:
            var9 = var15;
 883:
            var6 = var3.bind(var6)(var9);
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var6, var12);
            var21 = var3[var8];
            _closure2_slot15 = var21;
            var3 = var3[var7];
            _closure2_slot16 = var3;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var15 = var6[var13];
            var18 = var9.bind(var5)(var15);
            var15 = var18.useAvailableTags;
            var18 = var15.bind(var18)(var33);
            var6 = var6[var13];
            var9 = var9.bind(var5)(var6);
            var6 = var9.useAppliedTags;
            var9 = var6.bind(var9)(var2);
            _closure2_slot17 = var9;
            var15 = _closure1_slot5;
            var13 = var15.useState;
            if(!var24) { _fun0012_ip = 985; continue _fun0012 }
 978:
            var6 = var9;
            if(!(var1 == var18)) { _fun0012_ip = 989; continue _fun0012 }
 985:
            var6 = new Array(0);
 989:
            var6 = var13.bind(var15)(var6);
            var13 = _closure1_slot4;
            var6 = var13.bind(var5)(var6, var12);
            var32 = var6[var8];
            _closure2_slot18 = var32;
            var31 = var6[var7];
            var15 = _closure1_slot5;
            var6 = var15.useState;
            var6 = var6.bind(var15)(var1);
            var6 = var13.bind(var5)(var6, var12);
            var36 = var6[var8];
            var6 = var6[var7];
            _closure2_slot19 = var6;
            var15 = _closure1_slot5;
            var6 = var15.useState;
            var6 = var6.bind(var15)(var1);
            var13 = var13.bind(var5)(var6, var12);
            var6 = var13[var8];
            var13 = var13[var7];
            _closure2_slot20 = var13;
            var13 = var1 == var10;
            var57 = undefined;
            if(var13) { _fun0012_ip = 1095; continue _fun0012 }
 1089:
            var57 = var10.colorString;
 1095:
            var13 = var1 == var10;
            var54 = undefined;
            if(var13) { _fun0012_ip = 1110; continue _fun0012 }
 1104:
            var54 = var10.colorStrings;
 1110:
            var13 = var1 == var10;
            var58 = undefined;
            if(var13) { _fun0012_ip = 1125; continue _fun0012 }
 1119:
            var58 = var10.nick;
 1125:
            if(!(var1 == var58)) { _fun0012_ip = 1160; continue _fun0012 }
 1129:
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 28;
            var10 = var15[var10];
            var13 = var13.bind(var5)(var10);
            var10 = var13.getName;
            var58 = var10.bind(var13)(var42);
 1160:
            var13 = _closure1_slot5;
            var10 = var13.useRef;
            var52 = var10.bind(var13)(var1);
            _closure2_slot21 = var52;
            var15 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 29;
            var10 = var13[var10];
            var15 = var15.bind(var5)(var10);
            var51 = true;
            var10 = {'includeKeyboardHeightIOS': true, 'includeCustomKeyboardHeightIOS': false};
            var10 = var15.bind(var5)(var10);
            var25 = var10.insets;
            var19 = _closure1_slot5;
            var18 = var19.useCallback;
            var15 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = _closure2_slot21;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0014_ip = 28; continue _fun0014 }
 18:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = new Array(0);
            var34 = var18.bind(var19)(var15, var10);
            var15 = _closure1_slot0;
            var10 = 30;
            var18 = var13[var10];
            var19 = var15.bind(var5)(var18);
            var18 = var19.useSharedValue;
            var20 = var18.bind(var19)(var8);
            _closure2_slot22 = var20;
            var13 = var13[var10];
            var18 = var15.bind(var5)(var13);
            var15 = var18.useAnimatedScrollHandler;
            var13 = function w(arg1) {
                var1 = arg1;
                var1 = var1.contentOffset;
                var3 = var1.y;
                var2 = _closure2_slot22;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var19 = {};
            var19['scrollTopValue'] = var20;
            var13['__closure'] = var19;
            var19 = 16880842576840.0;
            var13['__workletHash'] = var19;
            var19 = _closure1_slot31;
            var13['__initData'] = var19;
            var13 = var15.bind(var18)(var13);
            var20 = _closure1_slot5;
            var19 = var20.useCallback;
            var18 = new Array(2);
            var18[0] = var24;
            var15 = var33.id;
            var18[1] = var15;
            var15 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot5;
                    if(var2) { _fun0015_ip = 65; continue _fun0015 }
 13:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 31;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.changeThreadSettings;
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var2 = {};
                    var2['name'] = var3;
                    var2 = var5.bind(var6)(var4, var2);
 65:
                    var2 = _closure2_slot14;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var35 = var19.bind(var20)(var15, var18);
            var20 = _closure1_slot5;
            var19 = var20.useCallback;
            var18 = new Array(1);
            var18[0] = var16;
            var15 = function(arg1) {
                var2 = _closure2_slot3;
                var1 = undefined;
                var6 = true;
                var2 = var2.bind(var1)(var6);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 32;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.transitionToThread;
                var3 = {};
                var3['navigationReplace'] = var6;
                var2 = _closure1_slot25;
                var2 = var2.FORUM;
                var3['source'] = var2;
                var2 = arg1;
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var20 = var19.bind(var20)(var15, var18);
            _closure2_slot23 = var20;
            var28 = _closure1_slot5;
            var19 = var28.useMemo;
            var18 = new Array(1);
            var18[0] = var32;
            var15 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = _closure2_slot18;
                var2 = var4.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var28 = var19.bind(var28)(var15, var18);
            _closure2_slot24 = var28;
            var19 = _closure1_slot5;
            var18 = var19.useMemo;
            var15 = new Array(1);
            var15[0] = var9;
            var9 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = _closure2_slot17;
                var2 = var4.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var19 = var18.bind(var19)(var9, var15);
            _closure2_slot25 = var19;
            var30 = _closure1_slot5;
            var18 = var30.useCallback;
            var9 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            StartGenerator();
                            var8 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0016_ip = 381; continue _fun0016 }
 13:
                            var2 = _closure2_slot1;
                            var4 = null;
                            if(!(var4 != var2)) { _fun0016_ip = 373; continue _fun0016 }
 29:
                            var2 = _closure2_slot4;
                            var2 = var4 != var2;
                            if(!var2) { _fun0016_ip = 53; continue _fun0016 }
 40:
                            var4 = _closure2_slot4;
                            var4 = var4.content;
                            var2 = var4 !== var8;
 53:
                            if(!var2) { _fun0016_ip = 118; continue _fun0016 }
 56:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 33;
                            var4 = var4[var2];
                            var2 = undefined;
                            var7 = var5.bind(var2)(var4);
                            var6 = var7.editMessage;
                            var2 = _closure2_slot1;
                            var5 = var2.id;
                            var2 = _closure2_slot4;
                            var4 = var2.id;
                            var2 = {};
                            var2['content'] = var8;
                            var2 = var6.bind(var7)(var5, var4, var2);
 118:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 34;
                            var2 = var5[var2];
                            var5 = undefined;
                            var8 = var6.bind(var5)(var2);
                            var7 = var8.isEqual;
                            var6 = _closure2_slot25;
                            var2 = _closure2_slot24;
                            var2 = var7.bind(var8)(var6, var2);
                            if(var2) { _fun0016_ip = 242; continue _fun0016 }
 166:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 35;
                            var2 = var7[var2];
                            var8 = var6.bind(var5)(var2);
                            var7 = var8.updateForumPostTags;
                            var2 = _closure2_slot1;
                            var6 = var2.id;
                            var2 = global;
                            var10 = var2.Array;
                            var9 = var10.from;
                            var2 = _closure2_slot24;
                            var2 = var9.bind(var10)(var2);
                            var2 = var7.bind(var8)(var6, var2);
                            SaveGenerator(address=233);
 231:
                            return var2;
 233:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(!var6) { _fun0016_ip = 242; continue _fun0016 }
 239:
                            return var2;
 242:
                            var2 = _closure2_slot1;
                            var6 = var2.name;
                            var2 = _closure2_slot13;
                            if(!(var6 !== var2)) { _fun0016_ip = 320; continue _fun0016 }
 259:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 36;
                            var2 = var7[var2];
                            var8 = var6.bind(var5)(var2);
                            var7 = var8.saveChannel;
                            var2 = _closure2_slot1;
                            var6 = var2.id;
                            var2 = {};
                            var9 = _closure2_slot13;
                            var2['name'] = var9;
                            var2 = var7.bind(var8)(var6, var2);
                            SaveGenerator(address=314);
 312:
                            return var2;
 314:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0016_ip = 378; continue _fun0016 }
 320:
                            var6 = _closure1_slot14;
                            var4 = var6.getChannelId;
                            var6 = var4.bind(var6)();
                            var4 = _closure2_slot1;
                            var4 = var4.id;
                            if(!(var6 === var4)) { _fun0016_ip = 360; continue _fun0016 }
 347:
                            var6 = _closure2_slot3;
                            var4 = true;
                            var4 = var6.bind(var5)(var4);
                            _fun0016_ip = 373; continue _fun0016;
 360:
                            var4 = _closure2_slot23;
                            var3 = _closure2_slot1;
                            var3 = var4.bind(var5)(var3);
 373:
                            var3 = undefined;
                            return var3;
 378:
                            return var2;
 381:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var15 = var9.bind(var5)();
            var9 = new Array(7);
            var9[0] = var2;
            var9[1] = var41;
            var9[2] = var19;
            var9[3] = var28;
            var9[4] = var37;
            var9[5] = var20;
            var9[6] = var16;
            var38 = var18.bind(var30)(var15, var9);
            _closure2_slot26 = var38;
            var15 = var1 == var39;
            var9 = undefined;
            if(var15) { _fun0012_ip = 1566; continue _fun0012 }
 1561:
            var9 = var39.name;
 1566:
            var15 = var1 != var9;
            if(!var15) { _fun0012_ip = 1587; continue _fun0012 }
 1573:
            var9 = var39.name;
            var9 = var9.length;
            var15 = var9 > var8;
 1587:
            var9 = var21.trim;
            var18 = var9.bind(var21)();
            var9 = var22.length;
            var30 = var9 > var8;
            var9 = var4 === var17;
            if(var9) { _fun0012_ip = 1617; continue _fun0012 }
 1613:
            var9 = var18 !== var17;
 1617:
            if(!var9) { _fun0012_ip = 1638; continue _fun0012 }
 1620:
            var17 = var18.length;
            var17 = var17 > var8;
            if(var17) { _fun0012_ip = 1635; continue _fun0012 }
 1632:
            var17 = var30;
 1635:
            var9 = var17;
 1638:
            var30 = !var24;
            if(!var30) { _fun0012_ip = 1647; continue _fun0012 }
 1644:
            var30 = var15;
 1647:
            if(!var30) { _fun0012_ip = 1653; continue _fun0012 }
 1650:
            var30 = var9;
 1653:
            if(var30) { _fun0012_ip = 1745; continue _fun0012 }
 1656:
            var9 = var24;
            if(!var9) { _fun0012_ip = 1742; continue _fun0012 }
 1662:
            var17 = var1 == var2;
            var15 = undefined;
            if(var17) { _fun0012_ip = 1676; continue _fun0012 }
 1671:
            var15 = var2.name;
 1676:
            var15 = var37 !== var15;
            if(var15) { _fun0012_ip = 1701; continue _fun0012 }
 1683:
            var43 = var1 == var41;
            var17 = undefined;
            if(var43) { _fun0012_ip = 1697; continue _fun0012 }
 1692:
            var17 = var41.content;
 1697:
            var15 = var18 !== var17;
 1701:
            if(var15) { _fun0012_ip = 1739; continue _fun0012 }
 1704:
            var18 = _closure1_slot1;
            var41 = _closure1_slot2;
            var17 = 34;
            var17 = var41[var17];
            var18 = var18.bind(var5)(var17);
            var17 = var18.isEqual;
            var17 = var17.bind(var18)(var19, var28);
            var15 = !var17;
 1739:
            var9 = var15;
 1742:
            var30 = var9;
 1745:
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 37;
            var9 = var18[var9];
            var19 = var15.bind(var5)(var9);
            var17 = var19.useCreateForumPost;
            var9 = {};
            var9['parentChannel'] = var33;
            var9['threadSettings'] = var39;
            var9['appliedTags'] = var28;
            var9['onThreadCreated'] = var20;
            var28 = var17.bind(var19)(var9);
            _closure2_slot27 = var28;
            var20 = _closure1_slot5;
            var19 = var20.useCallback;
            var9 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0017_ip = 608; continue _fun0017 }
 10:
                            var2 = arg1;
                            var10 = var2.stickerId;
                            var3 = undefined;
                            var9 = undefined;
                            var11 = undefined;
                            var8 = undefined;
                            var7 = undefined;
                            SaveGenerator(address=33);
 31:
                            return var3;
 33:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0017_ip = 605; continue _fun0017 }
 42:
                            var14 = _closure2_slot0;
                            var13 = var14.hasFlag;
                            var12 = _closure1_slot22;
                            var12 = var12.REQUIRE_TAG;
                            var12 = var13.bind(var14)(var12);
                            if(!var12) { _fun0017_ip = 94; continue _fun0017 }
 76:
                            var12 = _closure2_slot18;
                            var13 = var12.length;
                            var12 = 0;
                            if(!(var12 !== var13)) { _fun0017_ip = 563; continue _fun0017 }
 94:
                            var12 = _closure2_slot5;
                            if(!var12) { _fun0017_ip = 114; continue _fun0017 }
 101:
                            var13 = _closure2_slot1;
                            var12 = null;
                            if(!(var12 != var13)) { _fun0017_ip = 602; continue _fun0017 }
 114:
                            var13 = _closure2_slot12;
                            var12 = true;
                            var12 = var13.bind(var3)(var12);
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var12 = 27;
                            var12 = var14[var12];
                            var15 = var13.bind(var3)(var12);
                            var14 = var15.parse;
                            var12 = _closure2_slot5;
                            if(var12) { _fun0017_ip = 164; continue _fun0017 }
 158:
                            var13 = _closure2_slot0;
                            _fun0017_ip = 168; continue _fun0017;
 164:
                            var13 = _closure2_slot1;
 168:
                            var12 = _closure2_slot15;
                            var12 = var14.bind(var15)(var13, var12);
                            var9 = var12.content;
 183: // try_start_0 // try_start_2
                            var12 = _closure2_slot19;
                            var15 = null;
                            var12 = var12.bind(var3)(var15);
                            var12 = _closure2_slot20;
                            var12 = var12.bind(var3)(var15);
                            var12 = _closure2_slot5;
                            if(var12) { _fun0017_ip = 278; continue _fun0017 }
 210:
                            var14 = _closure2_slot27;
                            var13 = var9;
                            var12 = var10;
                            var15 = var15 != var12;
                            var12 = undefined;
                            if(!var15) { _fun0017_ip = 243; continue _fun0017 }
 229:
                            var15 = var10;
                            var10 = new Array(1);
                            var10[0] = var15;
                            var12 = var10;
 243:
                            var10 = _closure2_slot9;
                            var10 = var14.bind(var3)(var13, var12, var10);
                            SaveGenerator(address=258);
 256:
                            return var10;
 258:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                            if(!var12) { _fun0017_ip = 297; continue _fun0017 }
 264: // try_end0 // try_end2
                            var13 = _closure2_slot12;
                            var12 = false;
                            var12 = var13.bind(var3)(var12);
                            return var10;
 278: // try_start_1 // try_start_3
                            var10 = _closure2_slot26;
                            var9 = var10.bind(var3)(var9);
                            SaveGenerator(address=291);
 289:
                            return var9;
 291:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                            if(var10) { _fun0017_ip = 302; continue _fun0017 }
 297: // try_end1
                            _fun0017_ip = 535; continue _fun0017;
 302: // try_end3
                            var12 = _closure2_slot12;
                            var10 = false;
                            var10 = var12.bind(var3)(var10);
                            return var9;
 316: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=8);
                            var6 = var9;
                            var10 = var9.body;
                            var11 = var10;
                            var9 = null;
                            var12 = var9 == var10;
                            var10 = undefined;
                            if(var12) { _fun0017_ip = 345; continue _fun0017 }
 340:
                            var10 = var11.code;
 345:
                            if(!(var9 != var10)) { _fun0017_ip = 535; continue _fun0017 }
 352:
                            var10 = var6;
                            var10 = var10.body;
                            var8 = var10;
                            var11 = var9 == var10;
                            var10 = undefined;
                            if(var11) { _fun0017_ip = 377; continue _fun0017 }
 372:
                            var10 = var8.code;
 377:
                            var8 = _closure1_slot19;
                            var8 = var8.AUTOMOD_TITLE_BLOCKED;
                            if(!(var10 !== var8)) { _fun0017_ip = 485; continue _fun0017 }
 391:
                            var8 = var6;
                            var8 = var8.body;
                            var7 = var8;
                            var9 = var9 == var8;
                            var8 = undefined;
                            if(var9) { _fun0017_ip = 416; continue _fun0017 }
 411:
                            var8 = var7.code;
 416:
                            var7 = _closure1_slot19;
                            var7 = var7.AUTOMOD_MESSAGE_BLOCKED;
                            if(!(var8 === var7)) { _fun0017_ip = 535; continue _fun0017 }
 430:
                            var8 = _closure2_slot20;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 38;
                            var7 = var10[var7];
                            var11 = var9.bind(var3)(var7);
                            var10 = var11.makeAutomodViolationError;
                            var7 = var6;
                            var9 = var7.body;
                            var7 = _closure2_slot0;
                            var7 = var10.bind(var11)(var9, var7);
                            var7 = var8.bind(var3)(var7);
                            _fun0017_ip = 535; continue _fun0017;
 485:
                            var7 = _closure2_slot19;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 38;
                            var8 = var10[var8];
                            var10 = var9.bind(var3)(var8);
                            var9 = var10.makeAutomodViolationError;
                            var8 = var6.body;
                            var6 = _closure2_slot0;
                            var6 = var9.bind(var10)(var8, var6);
                            var6 = var7.bind(var3)(var6);
 535: // try_end4
                            var7 = _closure2_slot12;
                            var6 = false;
                            var6 = var7.bind(var3)(var6);
                            _fun0017_ip = 602; continue _fun0017;
 548: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=5);
                            var8 = _closure2_slot12;
                            var7 = false;
                            var7 = var8.bind(var3)(var7);
                            throw var6;
 563:
                            var5 = _closure2_slot20;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 38;
                            var4 = var7[var4];
                            var6 = var6.bind(var3)(var4);
                            var4 = var6.makeEmptyTagsError;
                            var4 = var4.bind(var6)();
                            var4 = var5.bind(var3)(var4);
 602:
                            return var3;
 605:
                            return var2;
 608:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var17 = var9.bind(var5)();
            var9 = new Array(8);
            var9[0] = var33;
            var39 = var32.length;
            var9[1] = var39;
            var9[2] = var24;
            var9[3] = var2;
            var9[4] = var21;
            var9[5] = var38;
            var9[6] = var28;
            var9[7] = var22;
            var9 = var19.bind(var20)(var17, var9);
            _closure2_slot28 = var9;
            var20 = _closure1_slot5;
            var19 = var20.useCallback;
            var17 = new Array(6);
            var17[0] = var33;
            var17[1] = var27;
            var17[2] = var26;
            var17[3] = var22;
            var17[4] = var9;
            var17[5] = var21;
            var9 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.stickerId;
                    var _closure3_slot0 = var4;
                    var1 = _closure2_slot15;
                    var1 = var1.length;
                    var2 = 0;
                    if(!(var2 === var1)) { _fun0018_ip = 55; continue _fun0018 }
 33:
                    var1 = _closure2_slot9;
                    var1 = var1.length;
                    if(!(var2 === var1)) { _fun0018_ip = 55; continue _fun0018 }
 46:
                    var1 = null;
                    if(!(var1 != var4)) { _fun0018_ip = 608; continue _fun0018 }
 55:
                    var1 = _closure2_slot8;
                    if(!(!(var1 > var2))) { _fun0018_ip = 608; continue _fun0018 }
 66:
                    var1 = _closure2_slot15;
                    var2 = var1.length;
                    var1 = _closure2_slot11;
                    if(!(!(var2 > var1))) { _fun0018_ip = 441; continue _fun0018 }
 86:
                    var2 = _closure1_slot32;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 41;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.RESTRICTIONS;
                    var11 = var2.bind(var3)(var1);
                    var2 = var11.bind(var3)();
                    var1 = var2.done;
                    var10 = null;
                    var5 = false;
                    if(var1) { _fun0018_ip = 420; continue _fun0018 }
 145:
                    var1 = var2.value;
                    var13 = var1.check;
                    var12 = _closure2_slot15;
                    var9 = _closure2_slot0;
                    var1 = var9.getGuildId;
                    var1 = var1.bind(var9)();
                    var1 = var10 != var1;
                    var9 = var13.bind(var3)(var12, var9, var1);
                    if(!(var5 === var9)) { _fun0018_ip = 209; continue _fun0018 }
 189:
                    var12 = var11.bind(var3)();
                    var1 = var12.done;
                    var2 = var12;
                    if(var1) { _fun0018_ip = 420; continue _fun0018 }
 207:
                    _fun0018_ip = 145; continue _fun0018;
 209:
                    var2 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var1 = 39;
                    var1 = var11[var1];
                    var5 = var2.bind(var3)(var1);
                    var2 = var5.show;
                    var1 = {};
                    var10 = _closure1_slot0;
                    var6 = 40;
                    var12 = var11[var6];
                    var12 = var10.bind(var3)(var12);
                    var14 = var12.intl;
                    var13 = var14.string;
                    var12 = var11[var6];
                    var12 = var10.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12.mY3Y39;
                    var12 = var13.bind(var14)(var12);
                    var1['title'] = var12;
                    var9 = var9.body;
                    var1['body'] = var9;
                    var9 = var11[var6];
                    var9 = var10.bind(var3)(var9);
                    var13 = var9.intl;
                    var12 = var13.string;
                    var9 = var11[var6];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.KJnHq6;
                    var9 = var12.bind(var13)(var9);
                    var1['confirmText'] = var9;
                    var7 = function onConfirm() {
                        var3 = _closure2_slot28;
                        var2 = {};
                        var1 = _closure3_slot0;
                        var2['stickerId'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onConfirm'] = var7;
                    var7 = var11[var6];
                    var7 = var10.bind(var3)(var7);
                    var9 = var7.intl;
                    var7 = var9.string;
                    var6 = var11[var6];
                    var6 = var10.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.fsBWmZ;
                    var6 = var7.bind(var9)(var6);
                    var1['cancelText'] = var6;
                    var1 = var2.bind(var5)(var1);
                    var1 = undefined;
                    return var1;
 420:
                    var2 = _closure2_slot28;
                    var1 = {};
                    var1['stickerId'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0018_ip = 608; continue _fun0018;
 441:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 39;
                    var1 = var10[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 40;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var11 = var6.intl;
                    var7 = var11.string;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.l8rYLi;
                    var6 = var7.bind(var11)(var6);
                    var1['title'] = var6;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var4 = var10[var4];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.t;
                    var5 = var4.FfjF19;
                    var4 = {};
                    var9 = _closure2_slot15;
                    var9 = var9.length;
                    var4['currentLength'] = var9;
                    var8 = _closure2_slot11;
                    var4['maxLength'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1['body'] = var4;
                    var1 = var2.bind(var3)(var1);
 608:
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = var19.bind(var20)(var9, var17);
            var19 = _closure1_slot5;
            var17 = var19.useCallback;
            var9 = new Array(2);
            var9[0] = var3;
            var3 = var33.id;
            var9[1] = var3;
            var3 = function(arg1) {
                var3 = arg1;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 31;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var2);
                var6 = var7.changeDraft;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var4 = _closure1_slot11;
                var4 = var4.ChannelMessage;
                var4 = var6.bind(var7)(var5, var3, var4);
                var2 = _closure2_slot16;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var47 = var17.bind(var19)(var3, var9);
            var3 = 42;
            var3 = var18[var3];
            var17 = var15.bind(var5)(var3);
            var9 = var17.useFocusHandlers;
            var3 = {};
            var3['titleInput'] = var40;
            var3['contentInput'] = var52;
            var3 = var9.bind(var17)(var3);
            var9 = var3.setFocusedInput;
            _closure2_slot29 = var9;
            var27 = var3.focusLastInput;
            _closure2_slot30 = var27;
            var9 = var3.blurLastInput;
            _closure2_slot31 = var9;
            var26 = var3.focusedInput;
            var17 = _closure1_slot5;
            var9 = var17.useState;
            var3 = {'start': 0, 'end': null};
            var3 = var9.bind(var17)(var3);
            var9 = _closure1_slot4;
            var3 = var9.bind(var5)(var3, var12);
            var20 = var3[var8];
            var3 = var3[var7];
            _closure2_slot32 = var3;
            var22 = _closure1_slot5;
            var19 = var22.useCallback;
            var17 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var4 = var1.selection;
                var3 = _closure2_slot32;
                var2 = {};
                var5 = var2;
                var1 = copyDataProperties(var5, var4);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var44 = var19.bind(var22)(var17, var3);
            var22 = _closure1_slot5;
            var19 = var22.useCallback;
            var17 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.start;
                    var _closure3_slot0 = var3;
                    var1 = var1.end;
                    var _closure3_slot1 = var1;
                    var1 = undefined;
                    var _closure3_slot2 = var1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 43;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0019_ip = 106; continue _fun0019 }
 64:
                    var3 = _closure2_slot21;
                    var4 = var3.current;
                    _closure3_slot2 = var4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0019_ip = 106; continue _fun0019 }
 86:
                    var3 = global;
                    var3 = var3.setTimeout;
                    var2 = function() {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                            var4 = _closure3_slot2;
                            var3 = var4.setSelection;
                            var2 = _closure3_slot0;
                            var6 = _closure3_slot1;
                            var1 = null;
                            if(!(var1 == var6)) { _fun0020_ip = 33; continue _fun0020 }
 27:
                            var1 = _closure3_slot0;
                            _fun0020_ip = 37; continue _fun0020;
 33:
                            var1 = _closure3_slot1;
 37:
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
 106:
                    return var1;
                }
            };
            var3 = new Array(0);
            var38 = var19.bind(var22)(var17, var3);
            var17 = 44;
            var3 = var18[var17];
            var22 = var15.bind(var5)(var3);
            var19 = var22.usePressEmojiHandler;
            var3 = {};
            var3['selection'] = var20;
            var3['draftContent'] = var21;
            var3['handleTextChange'] = var47;
            var3['focusTextInput'] = var34;
            var3['setSelection'] = var38;
            var3 = var19.bind(var22)(var3);
            _closure2_slot33 = var3;
            var3 = var18[var17];
            var22 = var15.bind(var5)(var3);
            var19 = var22.usePressGIFHandler;
            var3 = {};
            var3['selection'] = var20;
            var3['draftContent'] = var21;
            var3['handleTextChange'] = var47;
            var3['focusTextInput'] = var34;
            var3['setSelection'] = var38;
            var3 = var19.bind(var22)(var3);
            _closure2_slot34 = var3;
            var3 = 45;
            var3 = var18[var3];
            var22 = var15.bind(var5)(var3);
            var19 = var22.usePressHorizontalAutocompleteItemHandler;
            var3 = {};
            var3['draftContent'] = var21;
            var3['handleTextChange'] = var47;
            var3['setSelection'] = var38;
            var22 = var19.bind(var22)(var3);
            var3 = 46;
            var3 = var18[var3];
            var18 = var15.bind(var5)(var3);
            var15 = var18.useBackspaceHandler;
            var3 = {};
            var3['selection'] = var20;
            var3['draftContent'] = var21;
            var3['handleTextChange'] = var47;
            var3 = var15.bind(var18)(var3);
            _closure2_slot35 = var3;
            var15 = _closure1_slot5;
            var3 = var15.useState;
            var3 = var3.bind(var15)(var8);
            var3 = var9.bind(var5)(var3, var12);
            var12 = var3[var8];
            var3 = var3[var7];
            _closure2_slot36 = var3;
            var9 = _closure1_slot5;
            var8 = var9.useCallback;
            var7 = function(arg1) {
                var3 = _closure2_slot36;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var18 = var8.bind(var9)(var7, var3);
            var19 = var33;
            if(!var24) { _fun0012_ip = 2387; continue _fun0012 }
 2384:
            var19 = var2;
 2387:
            _closure2_slot37 = var19;
            var3 = var37.replace;
            var2 = /\n/g;
            var9 = var3.bind(var37)(var2, var4);
            if(!(var1 != var19)) { _fun0012_ip = 4163; continue _fun0012 }
 2423:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 38;
            var7 = var4[var2];
            var15 = var3.bind(var5)(var7);
            var8 = var15.renderError;
            var7 = {};
            var7['content'] = var37;
            var36 = var8.bind(var15)(var36, var7);
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.renderError;
            var2 = {};
            var2['content'] = var21;
            var2['tags'] = var32;
            var46 = var3.bind(var4)(var6, var2);
            var2 = var19.isMediaChannel;
            var2 = var2.bind(var19)();
            if(var2) { _fun0012_ip = 2512; continue _fun0012 }
 2506:
            var15 = new Array(0);
            _fun0012_ip = 2555; continue _fun0012;
 2512:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 47;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
            var2 = new Array(1);
            var2[0] = var3;
            var15 = var2;
 2555:
            var2 = function MediaPostMultipleThumbnailActionSheetImporter() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 49;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 48;
                var2 = var1[var2];
                var1 = var1.paths;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            _closure2_slot38 = var2;
            var4 = _closure1_slot28;
            var3 = _closure1_slot8;
            var2 = {};
            var7 = var23.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var8 = var25.top;
            var7['paddingTop'] = var8;
            var8 = var25.bottom;
            var8 = var8 + var12;
            var7['paddingBottom'] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot27;
            var12 = _closure1_slot1;
            var39 = _closure1_slot2;
            var6 = 50;
            var6 = var39[var6];
            var7 = var12.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var33;
            var6['height'] = var17;
            var6['onClose'] = var16;
            var16 = function onGuidelinesPress() {
                var2 = _closure2_slot31;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 51;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openForumGuidelinesActionSheet;
                var2 = {};
                var5 = _closure2_slot0;
                var2['channel'] = var5;
                var5 = function onClose() {
                    var2 = _closure2_slot30;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['onClose'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6['onGuidelinesPress'] = var16;
            var6['submitting'] = var29;
            var6['title'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot28;
            var8 = _closure1_slot29;
            var7 = {};
            var10 = var39[var10];
            var10 = var12.bind(var5)(var10);
            var12 = var10.ScrollView;
            var10 = {'onScroll': null, 'scrollEventThrottle': 16, 'keyboardShouldPersistTaps': 'always', 'nestedScrollEnabled': false, 'contentContainerStyle': null, 'keyboardDismissMode': 'on-drag'};
            var10['onScroll'] = var13;
            var13 = var23.scrollViewContentContainer;
            var10['contentContainerStyle'] = var13;
            var17 = _closure1_slot27;
            var38 = _closure1_slot0;
            var13 = 52;
            var13 = var39[var13];
            var13 = var38.bind(var5)(var13);
            var16 = var13.FormInput;
            var13 = {};
            var13['ref'] = var40;
            var40 = var23.titleInput;
            var13['style'] = var40;
            var40 = var23.titleInputText;
            var13['inputTextStyle'] = var40;
            var13['showTopContainer'] = var50;
            var49 = 40;
            var40 = var39[var49];
            var40 = var38.bind(var5)(var40);
            var43 = var40.intl;
            var41 = var43.string;
            var40 = var39[var49];
            var40 = var38.bind(var5)(var40);
            var40 = var40.t;
            var40 = var40.lU4dDQ;
            var40 = var41.bind(var43)(var40);
            var13['placeholder'] = var40;
            var13['placeholderTextColor'] = var48;
            var13['large'] = var51;
            var13['multiline'] = var51;
            var13['value'] = var37;
            var37 = 53;
            var37 = var39[var37];
            var37 = var38.bind(var5)(var37);
            var37 = var37.ClearButtonVisibility;
            var37 = var37.NEVER;
            var13['clearButtonVisibility'] = var37;
            var37 = _closure1_slot20;
            var13['maxLength'] = var37;
            var13['onChange'] = var35;
            var35 = function onBlur() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0021_ip = 181; continue _fun0021 }
 13:
                    var2 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var2;
                    var3 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0021_ip = 39; continue _fun0021 }
 30:
                    var4 = _closure2_slot2;
                    var2 = var4.name;
 39:
                    if(!(var6 != var2)) { _fun0021_ip = 181; continue _fun0021 }
 46:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 54;
                    var2 = var7[var2];
                    var7 = var5.bind(var3)(var2);
                    var2 = _closure2_slot2;
                    var2 = var6 == var2;
                    var5 = undefined;
                    if(var2) { _fun0021_ip = 91; continue _fun0021 }
 82:
                    var2 = _closure2_slot2;
                    var5 = var2.name;
 91:
                    var2 = true;
                    var2 = var7.bind(var3)(var5, var2);
                    var5 = _closure2_slot2;
                    var6 = var6 == var5;
                    var5 = undefined;
                    if(var6) { _fun0021_ip = 121; continue _fun0021 }
 112:
                    var6 = _closure2_slot2;
                    var5 = var6.name;
 121:
                    if(!(var2 !== var5)) { _fun0021_ip = 181; continue _fun0021 }
 125:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 31;
                    var4 = var6[var4];
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.changeThreadSettings;
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = {};
                    var4['name'] = var2;
                    var4 = var6.bind(var7)(var5, var4);
                    var1 = _closure2_slot14;
                    var1 = var1.bind(var3)(var2);
 181:
                    var1 = undefined;
                    return var1;
                }
            };
            var13['onBlur'] = var35;
            var35 = function onFocus() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var5 = _closure2_slot10;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 55;
                    var4 = var1[var9];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.MEDIA;
                    var4 = var5 !== var4;
                    if(!var4) { _fun0022_ip = 88; continue _fun0022 }
 51:
                    var6 = _closure2_slot10;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.KeyboardTypes;
                    var5 = var5.EXPRESSION;
                    var4 = var6 !== var5;
 88:
                    if(var4) { _fun0022_ip = 162; continue _fun0022 }
 91:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 56;
                    var4 = var7[var4];
                    var6 = var8.bind(var1)(var4);
                    var5 = var6.setKeyboardType;
                    var4 = {};
                    var7 = var7[var9];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.KeyboardTypes;
                    var7 = var7.SYSTEM;
                    var4['type'] = var7;
                    var7 = {};
                    var8 = true;
                    var7['keyboardWillOpen'] = var8;
                    var4['context'] = var7;
                    var4 = var5.bind(var6)(var4);
 162:
                    var3 = _closure2_slot29;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 42;
                    var2 = var5[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.PostComposerInputs;
                    var2 = var2.TITLE;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var13['onFocus'] = var35;
            var13['autoFocus'] = var51;
            var13['autoCorrect'] = var51;
            var35 = 'none';
            var13['textContentType'] = var35;
            var35 = 'next';
            var13['returnKeyType'] = var35;
            var13['onNext'] = var34;
            var16 = var17.bind(var5)(var16, var13);
            var13 = new Array(3);
            var13[0] = var16;
            var17 = var1 != var36;
            var16 = null;
            if(!var17) { _fun0012_ip = 3054; continue _fun0012 }
 3008:
            var35 = _closure1_slot27;
            var34 = _closure1_slot1;
            var37 = _closure1_slot2;
            var17 = 57;
            var17 = var37[var17];
            var34 = var34.bind(var5)(var17);
            var17 = {};
            var37 = var23.nameError;
            var17['style'] = var37;
            var17['children'] = var36;
            var16 = var35.bind(var5)(var34, var17);
 3054:
            var13[1] = var16;
            var35 = _closure1_slot28;
            var34 = _closure1_slot8;
            var17 = {};
            var16 = var23.editor;
            var17['style'] = var16;
            var16 = var1 != var42;
            if(!var16) { _fun0012_ip = 3292; continue _fun0012 }
 3088:
            var38 = _closure1_slot27;
            var37 = _closure1_slot7;
            var36 = {};
            var39 = var23.avatarContainer;
            var36['style'] = var39;
            var39 = function onPress() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 58;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot7;
                    var5 = var5.id;
                    var1['userId'] = var5;
                    var5 = _closure2_slot37;
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var6 = _closure2_slot4;
                    var5 = null;
                    var6 = var5 == var6;
                    var5 = undefined;
                    if(var6) { _fun0023_ip = 80; continue _fun0023 }
 71:
                    var6 = _closure2_slot4;
                    var5 = var6.id;
 80:
                    var1['messageId'] = var5;
                    var4 = _closure2_slot6;
                    var1['sourceAnalyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var36['onPress'] = var39;
            var41 = _closure1_slot27;
            var40 = _closure1_slot1;
            var43 = _closure1_slot2;
            var39 = 59;
            var39 = var43[var39];
            var40 = var40.bind(var5)(var39);
            var39 = {};
            var39['animate'] = var51;
            var43 = var23.avatar;
            var39['style'] = var43;
            var39['user'] = var42;
            var43 = var1 == var33;
            var53 = undefined;
            if(var43) { _fun0012_ip = 3183; continue _fun0012 }
 3173:
            var43 = var33.getGuildId;
            var53 = var43.bind(var33)();
 3183:
            var55 = var1 != var53;
            var43 = undefined;
            if(!var55) { _fun0012_ip = 3195; continue _fun0012 }
 3192:
            var43 = var53;
 3195:
            var39['guildId'] = var43;
            var42 = var42.avatarDecoration;
            var39['avatarDecoration'] = var42;
            var43 = _closure1_slot0;
            var42 = _closure1_slot2;
            var53 = var42[var49];
            var53 = var43.bind(var5)(var53);
            var55 = var53.intl;
            var53 = var55.formatToPlainString;
            var42 = var42[var49];
            var42 = var43.bind(var5)(var42);
            var42 = var42.t;
            var43 = var42.LvU3np;
            var42 = {};
            var42['nickname'] = var58;
            var42 = var53.bind(var55)(var43, var42);
            var39['accessibilityLabel'] = var42;
            var39 = var41.bind(var5)(var40, var39);
            var36['children'] = var39;
            var16 = var38.bind(var5)(var37, var36);
 3292:
            var36 = new Array(2);
            var36[0] = var16;
            var39 = _closure1_slot28;
            var38 = _closure1_slot8;
            var37 = {};
            var16 = var23.editorBody;
            var37['style'] = var16;
            var41 = _closure1_slot28;
            var40 = _closure1_slot8;
            var16 = {};
            var42 = var23.usernameToChannel;
            var16['style'] = var42;
            var56 = _closure1_slot0;
            var55 = _closure1_slot2;
            var42 = var55[var49];
            var42 = var56.bind(var5)(var42);
            var59 = var42.intl;
            var53 = var59.formatToPlainString;
            var42 = var55[var49];
            var42 = var56.bind(var5)(var42);
            var42 = var42.t;
            var43 = var42.QicUf3;
            var42 = {};
            var42['nickname'] = var58;
            var60 = var33.name;
            var42['channelName'] = var60;
            var42 = var53.bind(var59)(var43, var42);
            var16['accessibilityLabel'] = var42;
            var53 = _closure1_slot27;
            var42 = 60;
            var42 = var55[var42];
            var42 = var56.bind(var5)(var42);
            var43 = var42.RoleLabel;
            var42 = {};
            var42['name'] = var58;
            var42['color'] = var57;
            var42['colors'] = var54;
            var43 = var53.bind(var5)(var43, var42);
            var42 = new Array(2);
            var42[0] = var43;
            var54 = _closure1_slot28;
            var43 = 61;
            var43 = var55[var43];
            var43 = var56.bind(var5)(var43);
            var53 = var43.Text;
            var43 = {'color': 'header-secondary', 'variant': 'text-xs/medium', 'style': null, 'lineClamp': 1};
            var57 = var23.channelName;
            var43['style'] = var57;
            var57 = var55[var49];
            var57 = var56.bind(var5)(var57);
            var58 = var57.intl;
            var57 = var58.format;
            var55 = var55[var49];
            var55 = var56.bind(var5)(var55);
            var55 = var55.t;
            var56 = var55.6Y1Ken;
            var55 = {};
            var59 = var33.name;
            var55['channelName'] = var59;
            var56 = var57.bind(var58)(var56, var55);
            var55 = [' '];
            var55[1] = var56;
            var43['children'] = var55;
            var43 = var54.bind(var5)(var53, var43);
            var42[1] = var43;
            var16['children'] = var42;
            var16 = var41.bind(var5)(var40, var16);
            var40 = new Array(3);
            var40[0] = var16;
            var41 = var1 != var46;
            var16 = null;
            if(!var41) { _fun0012_ip = 3673; continue _fun0012 }
 3627:
            var43 = _closure1_slot27;
            var42 = _closure1_slot1;
            var53 = _closure1_slot2;
            var41 = 57;
            var41 = var53[var41];
            var42 = var42.bind(var5)(var41);
            var41 = {};
            var53 = var23.messageError;
            var41['style'] = var53;
            var41['children'] = var46;
            var16 = var43.bind(var5)(var42, var41);
 3673:
            var40[1] = var16;
            var43 = _closure1_slot27;
            var46 = _closure1_slot0;
            var16 = _closure1_slot2;
            var41 = 62;
            var41 = var16[var41];
            var41 = var46.bind(var5)(var41);
            var42 = var41.TextInput;
            var41 = {};
            var41['ref'] = var52;
            var52 = var23.contentInput;
            var41['style'] = var52;
            var41['multiline'] = var51;
            var41['scrollEnabled'] = var50;
            var50 = var16[var49];
            var50 = var46.bind(var5)(var50);
            var51 = var50.intl;
            var50 = var51.string;
            var49 = var16[var49];
            var49 = var46.bind(var5)(var49);
            var49 = var49.t;
            var49 = var49.8IPnv7;
            var49 = var50.bind(var51)(var49);
            var41['placeholder'] = var49;
            var41['placeholderTextColor'] = var48;
            var41['value'] = var21;
            var41['onChangeText'] = var47;
            var41['onSelectionChange'] = var44;
            var44 = function onFocus() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var5 = _closure2_slot10;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 55;
                    var4 = var1[var9];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.MEDIA;
                    if(!(var5 === var4)) { _fun0024_ip = 119; continue _fun0024 }
 48:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 56;
                    var4 = var7[var4];
                    var6 = var8.bind(var1)(var4);
                    var5 = var6.setKeyboardType;
                    var4 = {};
                    var7 = var7[var9];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.KeyboardTypes;
                    var7 = var7.SYSTEM;
                    var4['type'] = var7;
                    var7 = {};
                    var8 = true;
                    var7['keyboardWillOpen'] = var8;
                    var4['context'] = var7;
                    var4 = var5.bind(var6)(var4);
 119:
                    var3 = _closure2_slot29;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 42;
                    var2 = var5[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.PostComposerInputs;
                    var2 = var2.CONTENT;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var41['onFocus'] = var44;
            var44 = 55;
            var44 = var16[var44];
            var44 = var46.bind(var5)(var44);
            var44 = var44.KeyboardTypes;
            var44 = var44.EXPRESSION;
            var44 = var45 !== var44;
            var41['showSoftInputOnFocus'] = var44;
            var41 = var43.bind(var5)(var42, var41);
            var40[2] = var41;
            var37['children'] = var40;
            var37 = var39.bind(var5)(var38, var37);
            var36[1] = var37;
            var17['children'] = var36;
            var17 = var35.bind(var5)(var34, var17);
            var13[2] = var17;
            var10['children'] = var13;
            var12 = var9.bind(var5)(var12, var10);
            var10 = new Array(5);
            var10[0] = var12;
            var17 = _closure1_slot27;
            var13 = _closure1_slot34;
            var12 = {};
            var12['tags'] = var32;
            var12 = var17.bind(var5)(var13, var12);
            var10[1] = var12;
            var17 = _closure1_slot27;
            var13 = _closure1_slot35;
            var12 = {};
            var12['channel'] = var33;
            var12['tags'] = var32;
            var12['setTags'] = var31;
            var12['canPost'] = var30;
            var12['submitting'] = var29;
            var12['onSubmit'] = var28;
            var28 = function onShowExpressionPicker() {
                var2 = _closure1_slot6;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 63;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openExpressionPickerActionSheet;
                var2 = {};
                var7 = _closure2_slot0;
                var7 = var7.id;
                var2['channelId'] = var7;
                var7 = _closure2_slot33;
                var2['onPressEmoji'] = var7;
                var7 = _closure1_slot26;
                var2['onPressSticker'] = var7;
                var7 = _closure2_slot34;
                var2['onPressGIF'] = var7;
                var6 = _closure2_slot35;
                var2['onBackspace'] = var6;
                var6 = _closure1_slot24;
                var7 = var6.EMOJI;
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.GIF;
                var5[1] = var6;
                var2['visibleTabs'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var12['onShowExpressionPicker'] = var28;
            var12['focusLastInput'] = var27;
            var12['lastInput'] = var26;
            var12['isEdit'] = var24;
            var12['onLayout'] = var18;
            var12 = var17.bind(var5)(var13, var12);
            var10[2] = var12;
            var18 = _closure1_slot27;
            var12 = _closure1_slot1;
            var13 = 64;
            var13 = var16[var13];
            var17 = var12.bind(var5)(var13);
            var13 = {};
            var24 = var23.horizontalAutocomplete;
            var23 = new Array(2);
            var23[0] = var24;
            var24 = {};
            var25 = var25.bottom;
            var24['bottom'] = var25;
            var23[1] = var24;
            var13['style'] = var23;
            var13['onPressAutocompleteItem'] = var22;
            var13['text'] = var21;
            var13['selection'] = var20;
            var13['channel'] = var19;
            var13 = var18.bind(var5)(var17, var13);
            var10[3] = var13;
            var13 = _closure1_slot27;
            var11 = 65;
            var11 = var16[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['contentTypes'] = var15;
            var14 = function children(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.visibleContent;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 47;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.DismissibleContent;
                    var3 = var1.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0025_ip = 137; continue _fun0025 }
 64:
                    var4 = _closure1_slot27;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 66;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.DismissibleActionSheet;
                    var2 = {};
                    var6 = function markAsDismissed() {
                        var3 = _closure3_slot0;
                        var1 = _closure1_slot23;
                        var2 = var1.UNKNOWN;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['markAsDismissed'] = var6;
                    var6 = 'ThumbnailBottomSheet';
                    var2['actionSheetKey'] = var6;
                    var6 = _closure2_slot38;
                    var2['importer'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 137:
                    return var1;
                }
            };
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[4] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 4163:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();