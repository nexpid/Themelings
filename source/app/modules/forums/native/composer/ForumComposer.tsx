// app/modules/forums/native/composer/ForumComposer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot35;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot35;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function Tags(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.tags;
            var1 = _closure1_slot32;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var3 = var9.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = _closure1_slot29;
            var3 = _closure1_slot9;
            var2 = {};
            var7 = var10.tags;
            var2['style'] = var7;
            var8 = _closure1_slot28;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 66;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.TagIcon;
            var6 = {};
            var11 = 'sm';
            var6['size'] = var11;
            var10 = var10.tagIcon;
            var6['style'] = var10;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var8 = var9.map;
            var7 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot29;
                    var3 = _closure1_slot5;
                    var4 = var3.Fragment;
                    var3 = {};
                    var7 = 0;
                    var6 = arg2;
                    var7 = var7 !== var6;
                    if(!var7) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var10 = _closure1_slot28;
                    var9 = _closure1_slot9;
                    var8 = {};
                    var6 = {};
                    var11 = 4;
                    var6['width'] = var11;
                    var8['style'] = var6;
                    var6 = undefined;
                    var7 = var10.bind(var6)(var9, var8);
case 38:
                    var6 = new Array(2);
                    var6[0] = var7;
                    var9 = _closure1_slot28;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 67;
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
case 36:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function ActionBar(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var2 = var1.tags;
            var _closure2_slot1 = var2;
            var2 = var1.onTagsSave;
            var _closure2_slot2 = var2;
            var18 = var1.canPost;
            var _closure2_slot3 = var18;
            var17 = var1.submitting;
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
            var _closure2_slot9 = var4;
            var1 = _closure1_slot32;
            var13 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 22;
            var2 = var7[var1];
            var9 = var6.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot18;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot18;
                var3 = var4.getUploads;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot12;
                var1 = var1.ChannelMessage;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var8.bind(var9)(var3, var2);
            var1 = var7[var1];
            var8 = var6.bind(var4)(var1);
            var3 = var8.useStateFromStores;
            var1 = _closure1_slot14;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var1 = !var1;
                    if(!var1) { _fun0007_ip = 2; continue _fun0007 }
case 40:
                    var5 = _closure1_slot14;
                    var4 = var5.can;
                    var3 = _closure1_slot22;
                    var3 = var3.ATTACH_FILES;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var9 = var3.bind(var8)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 30;
            var1 = var7[var1];
            var3 = var2.bind(var4)(var1);
            var1 = {};
            var15 = true;
            var1['includeKeyboardHeight'] = var15;
            var1 = var3.bind(var4)(var1);
            var8 = var1.insets;
            var1 = 24;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var _closure2_slot7 = var3;
            var1 = var12.isMediaChannel;
            var1 = var1.bind(var12)();
            var2 = 56;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.KeyboardTypes;
            var2 = var2.MEDIA;
            var23 = var3 === var2;
            var _closure2_slot8 = var23;
            var6 = var1;
            if(var6) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var1 = var9;
            if(!var9) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var3 = var14.length;
            var2 = 0;
            var1 = var3 > var2;
case 43:
            var6 = var1;
case 41:
            var1 = var12.availableTags;
            var2 = null;
            var10 = var2 != var1;
            if(!var10) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var1 = var12.availableTags;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var2 = var1.length;
case 47:
            var1 = 0;
            var10 = var2 > var1;
case 45:
            var1 = function maybeFocus() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure2_slot7;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 56;
                    var3 = var1[var7];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.KeyboardTypes;
                    var3 = var3.SYSTEM;
                    var3 = var5 !== var3;
                    if(!var3) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var5 = _closure2_slot7;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.EXPRESSION;
                    var3 = var5 !== var4;
case 49:
                    if(var3) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
case 51:
                    return var1;
                }
            };
            _closure2_slot9 = var1;
            var3 = _closure1_slot29;
            var2 = _closure1_slot9;
            var1 = {};
            var1['onLayout'] = var5;
            var7 = var13.actionsContainer;
            var5 = new Array(2);
            var5[0] = var7;
            var7 = {};
            var8 = var8.bottom;
            var7['marginBottom'] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            if(!var6) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var8 = _closure1_slot28;
            var7 = _closure1_slot1;
            var22 = _closure1_slot2;
            var5 = 68;
            var5 = var22[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['attachments'] = var14;
            var12 = var12.id;
            var5['channelId'] = var12;
            var5['highlightThumbnails'] = var15;
            var6 = var8.bind(var4)(var7, var5);
case 53:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot29;
            var7 = _closure1_slot9;
            var6 = {};
            var12 = var13.actions;
            var6['style'] = var12;
            var12 = var9;
            if(!var12) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var22 = _closure1_slot28;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var9 = 69;
            var9 = var28[var9];
            var9 = var27.bind(var4)(var9);
            var14 = var9.HeaderActionButton;
            var9 = {};
            var24 = 41;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.aDZSuz;
            var24 = var25.bind(var26)(var24);
            var9['accessibilityLabel'] = var24;
            var25 = var13.actionButton;
            var24 = new Array(2);
            var24[0] = var25;
            var25 = var13.mediaButton;
            var24[1] = var25;
            var9['style'] = var24;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            if(var23) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var23 = 71;
            var23 = var26[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.ImageIcon;
            _fun0006_ip = 59; continue _fun0006;
case 57:
            var24 = 70;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var23 = var24.KeyboardIcon;
case 59:
            var9['IconComponent'] = var23;
            var23 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 72;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.showSimpleMediaKeyboard;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot6;
                    var2 = var3.dismiss;
                    var2 = var2.bind(var3)();
                    _fun0009_ip = 62; continue _fun0009;
case 60:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 62:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 73;
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
            var9['foregroundRipple'] = var15;
            var12 = var22.bind(var4)(var14, var9);
case 55:
            var9 = new Array(4);
            var9[0] = var12;
            if(!var10) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var22 = _closure1_slot28;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var12 = 69;
            var12 = var25[var12];
            var12 = var24.bind(var4)(var12);
            var14 = var12.HeaderActionButton;
            var12 = {};
            var23 = 41;
            var26 = var25[var23];
            var26 = var24.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23["112vVE"];
            var23 = var26.bind(var27)(var23);
            var12['accessibilityLabel'] = var23;
            var26 = var13.actionButton;
            var23 = new Array(2);
            var23[0] = var26;
            var26 = var13.mediaButton;
            var23[1] = var26;
            var12['style'] = var23;
            var23 = 66;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.TagIcon;
            var12['IconComponent'] = var23;
            var23 = function onPress() {
                var4 = _closure1_slot6;
                var1 = var4.dismiss;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 74;
                var4 = var12[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var11 = _closure1_slot0;
                var3 = 50;
                var3 = var12[var3];
                var7 = var11.bind(var1)(var3);
                var3 = 75;
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
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3['onSave'] = var8;
                var8 = 41;
                var9 = var12[var8];
                var9 = var11.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.HPu3kq;
                var8 = var9.bind(var10)(var8);
                var3['title'] = var8;
                var7 = _closure2_slot1;
                var3['tags'] = var7;
                var2 = function onClose() {
                    var2 = _closure2_slot9;
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
            var12['foregroundRipple'] = var15;
            var10 = var22.bind(var4)(var14, var12);
case 63:
            var9[1] = var10;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 43;
            var10 = var14[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.PostComposerInputs;
            var10 = var10.CONTENT;
            var10 = var11 === var10;
            if(!var10) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var14 = _closure1_slot28;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var11 = 69;
            var11 = var24[var11];
            var11 = var23.bind(var4)(var11);
            var12 = var11.HeaderActionButton;
            var11 = {};
            var22 = 41;
            var25 = var24[var22];
            var25 = var23.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.iZ7Mz9;
            var22 = var25.bind(var26)(var22);
            var11['accessibilityLabel'] = var22;
            var22 = var13.actionButton;
            var11['style'] = var22;
            var22 = 76;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.ReactionIcon;
            var11['IconComponent'] = var22;
            var11['onPress'] = var21;
            var11['foregroundRipple'] = var15;
            var10 = var14.bind(var4)(var12, var11);
case 65:
            var9[2] = var10;
            var12 = _closure1_slot28;
            var11 = _closure1_slot9;
            var10 = {};
            var13 = var13.postButtonWrapper;
            var10['style'] = var13;
            var15 = _closure1_slot28;
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 77;
            var13 = var21[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 41;
            var22 = var25[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            if(var19) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var19 = var21.pIuQI6;
            var19 = var22.bind(var23)(var19);
            _fun0006_ip = 69; continue _fun0006;
case 67:
            var21 = var21.R3BPH+;
            var19 = var22.bind(var23)(var21);
case 69:
            var13['text'] = var19;
            var13['loading'] = var17;
            if(var17) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var17 = !var18;
case 70:
            var13['disabled'] = var17;
            var19 = _closure1_slot28;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 78;
            var17 = var22[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.ChatIcon;
            var17 = {};
            var21 = 'sm';
            var17['size'] = var21;
            var21 = _closure1_slot1;
            var20 = 20;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.colors;
            var20 = var20.WHITE;
            var17['color'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var13['icon'] = var17;
            var16 = function onPress() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0010_ip = 31; continue _fun0010 }
case 61:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = {};
                    var1 = var3.bind(var2)(var1);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var13['onPress'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
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
    var _closure1_slot37 = var1;
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
    var4 = metroImportAll;
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
    var7 = var4.Text;
    var _closure1_slot8 = var7;
    var4 = var4.View;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var7 = var6[var4];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var10 = 8;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 9;
    var7 = var6[var4];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot16 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SlowmodeType;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var15 = 12;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AbortCodes;
    var _closure1_slot20 = var7;
    var7 = var4.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot21 = var7;
    var4 = var4.Permissions;
    var _closure1_slot22 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot23 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot24 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ExpressionPickerViewType;
    var _closure1_slot25 = var4;
    var16 = 16;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OpenThreadAnalyticsLocations;
    var _closure1_slot26 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = var4.NOOP;
    var _closure1_slot27 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot28 = var7;
    var7 = var4.jsxs;
    var _closure1_slot29 = var7;
    var4 = var4.Fragment;
    var _closure1_slot30 = var4;
    var4 = /(#"[^"]*"|[@#]\S+|:[\w+-]+:)/g;
    var _closure1_slot31 = var4;
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
    var17 = var17.BACKGROUND_BASE_LOW;
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
    var15 = 'auto';
    var13 = var13.DISPLAY_SEMIBOLD;
    var9['fontFamily'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var13;
    var4['titleInputText'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'padding': 0, 'lineHeight': 20, 'color': null, 'textAlignVertical': 'top'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var13;
    var13 = 'top';
    var4['contentInput'] = var9;
    var9 = {};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BRAND_500;
    var9['color'] = var16;
    var4['mentionText'] = var9;
    var9 = {};
    var9['marginLeft'] = var15;
    var4['postButtonWrapper'] = var9;
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
    var9[13] = var15;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var15 = var14.BORDER_SUBTLE;
    var14 = 'borderTopColor';
    var9[13] = var15;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var15 = var14.BACKGROUND_BASE_LOW;
    var14 = 'backgroundColor';
    var9[13] = var15;
    var9[12] = var1;
    var4['actionsContainer'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'padding': 8, 'width': '100%'};
    var4['actions'] = var9;
    var9 = {'height': 40, 'minHeight': 40, 'maxHeight': 40, 'width': 40, 'minWidth': 40, 'maxWidth': 40, 'borderRadius': 20, 'color': null, 'backgroundColor': null, 'marginLeft': 0, 'marginRight': 0, 'overflow': 'hidden'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var9['color'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_NORMAL;
    var9['backgroundColor'] = var13;
    var4['actionButton'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['mediaButton'] = var9;
    var9 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'zIndex': 100};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var11;
    var4['horizontalAutocomplete'] = var9;
    var9 = {'marginBottom': 16, 'marginLeft': 16, 'marginRight': 16};
    var4['nameError'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['messageError'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = 79;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/ForumComposer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumComposer(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var32 = var1.parentChannel;
            var _closure2_slot0 = var32;
            var2 = var1.thread;
            var _closure2_slot1 = var2;
            var38 = var1.threadSettingsDraft;
            var _closure2_slot2 = var38;
            var16 = var1.onClose;
            var _closure2_slot3 = var16;
            var41 = var1.message;
            var _closure2_slot4 = var41;
            var18 = var1.isEdit;
            var _closure2_slot5 = var18;
            var5 = undefined;
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
            var _closure2_slot39 = var5;
            var _closure2_slot40 = var5;
            var _closure2_slot41 = var5;
            var1 = _closure1_slot32;
            var23 = var1.bind(var5)();
            var _closure2_slot6 = var23;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.analyticsLocations;
            var _closure2_slot7 = var1;
            var6 = _closure1_slot5;
            var3 = var6.useRef;
            var1 = null;
            var40 = var3.bind(var6)(var1);
            var6 = _closure1_slot0;
            var3 = 22;
            var7 = var4[var3];
            var12 = var6.bind(var5)(var7);
            var10 = var12.useStateFromStores;
            var7 = _closure1_slot19;
            var9 = new Array(1);
            var9[0] = var7;
            var8 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure1_slot19;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0012_ip = 34; continue _fun0012 }
case 72:
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            var7 = new Array(0);
            var45 = var10.bind(var12)(var9, var8, var7);
            var _closure2_slot8 = var45;
            var7 = var4[var3];
            var10 = var6.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot13;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getSelfMember;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var9.bind(var10)(var8, var7);
            var7 = var4[var3];
            var10 = var6.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var4 = _closure1_slot11;
                var3 = var4.getDraft;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot12;
                var1 = var1.ChannelMessage;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = var9.bind(var10)(var8, var7);
            var4 = var4[var3];
            var8 = var6.bind(var5)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot10;
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
                var1 = _closure1_slot10;
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
            if(var6) { _fun0011_ip = 73; continue _fun0011 }
case 74:
            var49 = var4.PRIMARY_460;
            _fun0011_ip = 75; continue _fun0011;
case 73:
            var49 = var4.PRIMARY_330;
case 75:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var3];
            var10 = var4.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot16;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var4 = _closure1_slot16;
                var3 = var4.getSlowmodeCooldownGuess;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot17;
                var1 = var1.CreateThread;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var27 = var9.bind(var10)(var8, var7);
            _closure2_slot9 = var27;
            var3 = var6[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot18;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure1_slot18;
                var3 = var4.getUploads;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot12;
                var1 = var1.ChannelMessage;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var24 = var7.bind(var8)(var4, var3);
            _closure2_slot10 = var24;
            var4 = _closure1_slot1;
            var3 = 24;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var44 = var3.bind(var5)();
            _closure2_slot11 = var44;
            var3 = 25;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var26 = var3.bind(var5)();
            _closure2_slot12 = var26;
            var3 = 26;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var61 = var3.bind(var5)(var32);
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var51 = false;
            var4 = var3.bind(var4)(var51);
            var3 = _closure1_slot4;
            var12 = 2;
            var3 = var3.bind(var5)(var4, var12);
            var8 = 0;
            var28 = var3[var8];
            var7 = 1;
            var3 = var3[var7];
            _closure2_slot13 = var3;
            var9 = _closure1_slot5;
            var6 = var9.useState;
            if(var18) { _fun0011_ip = 76; continue _fun0011 }
case 77:
            var3 = var1 == var38;
            var10 = undefined;
            if(var3) { _fun0011_ip = 78; continue _fun0011 }
case 79:
            var10 = var38.name;
case 78:
            _fun0011_ip = 80; continue _fun0011;
case 76:
            var4 = var1 == var2;
            var3 = undefined;
            if(var4) { _fun0011_ip = 81; continue _fun0011 }
case 82:
            var3 = var2.name;
case 81:
            var10 = var3;
case 80:
            var15 = var1 != var10;
            var4 = '';
            var3 = var4;
            if(!var15) { _fun0011_ip = 83; continue _fun0011 }
case 84:
            var3 = var10;
case 83:
            var6 = var6.bind(var9)(var3);
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var6, var12);
            var39 = var3[var8];
            _closure2_slot14 = var39;
            var3 = var3[var7];
            _closure2_slot15 = var3;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 27;
            var3 = var3[var15];
            var6 = var6.bind(var5)(var3);
            var3 = var6.useChannelTemplate;
            var17 = var3.bind(var6)(var32);
            var9 = var4;
            if(!var18) { _fun0011_ip = 85; continue _fun0011 }
case 86:
            var3 = var1 != var41;
            var9 = var4;
            if(!var3) { _fun0011_ip = 85; continue _fun0011 }
case 87:
            var3 = var1 != var2;
            var9 = var4;
            if(!var3) { _fun0011_ip = 85; continue _fun0011 }
case 88:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 28;
            var3 = var10[var3];
            var20 = var6.bind(var5)(var3);
            var10 = var20.unparse;
            var6 = var41.content;
            var3 = var2.id;
            var9 = var10.bind(var20)(var6, var3);
case 85:
            var6 = _closure1_slot5;
            var3 = var6.useState;
            if(var18) { _fun0011_ip = 89; continue _fun0011 }
case 90:
            var10 = var17;
            if(!(var1 != var19)) { _fun0011_ip = 91; continue _fun0011 }
case 92:
            var20 = var19.trim;
            var20 = var20.bind(var19)();
            var10 = var17;
            if(!(var4 !== var20)) { _fun0011_ip = 91; continue _fun0011 }
case 93:
            var10 = var19;
case 91:
            var9 = var10;
case 89:
            var3 = var3.bind(var6)(var9);
            var10 = _closure1_slot4;
            var3 = var10.bind(var5)(var3, var12);
            var21 = var3[var8];
            _closure2_slot16 = var21;
            var3 = var3[var7];
            _closure2_slot17 = var3;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var15];
            var9 = var9.bind(var5)(var6);
            var6 = var9.useAppliedTags;
            var9 = var6.bind(var9)(var2);
            _closure2_slot18 = var9;
            var19 = _closure1_slot5;
            var15 = var19.useState;
            var6 = function() {
                var10 = _closure2_slot5;
                var9 = _closure2_slot18;
                var8 = _closure2_slot2;
                var1 = _closure2_slot0;
                var7 = var1.availableTags;
                var2 = function getInitialForumComposerTags(arg1, arg2, arg3, arg4) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = arg3;
                        var7 = arg4;
                        var3 = arg1;
                        if(var3) { _fun0013_ip = 94; continue _fun0013 }
case 95:
                        var3 = null;
                        var5 = var3 == var2;
                        var4 = undefined;
                        if(var5) { _fun0013_ip = 39; continue _fun0013 }
case 34:
                        var4 = var2.appliedTags;
case 39:
                        if(!(var3 != var4)) { _fun0013_ip = 15; continue _fun0013 }
case 96:
                        var5 = var4.size;
                        var2 = 0;
                        if(!(var2 !== var5)) { _fun0013_ip = 15; continue _fun0013 }
case 5:
                        var2 = global;
                        var6 = var2.Map;
                        if(!(var3 == var7)) { _fun0013_ip = 38; continue _fun0013 }
case 7:
                        var7 = new Array(0);
case 38:
                        var5 = var7.map;
                        var3 = function(arg1) {
                            var2 = arg1;
                            var3 = var2.id;
                            var1 = new Array(2);
                            var1[0] = var3;
                            var1[1] = var2;
                            return var1;
                        };
                        var8 = var5.bind(var7)(var3);
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var9 = var5;
                        var3 = new var9[var6](var8, var7);
                        var3 = var3 instanceof Object ? var3 : var5;
                        var _closure4_slot0 = var3;
                        var3 = var2.Array;
                        var2 = var3.from;
                        var4 = var2.bind(var3)(var4);
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = var3.get;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            var2 = null;
                            var1 = arg1;
                            var1 = var2 != var1;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
case 15:
                        var1 = new Array(0);
                        return var1;
case 94:
                        var1 = arg2;
                        return var1;
                    }
                };
                var11 = undefined;
                var1 = var11[var2](var10, var9, var8, var7, var6);
                return var1;
            };
            var6 = var15.bind(var19)(var6);
            var6 = var10.bind(var5)(var6, var12);
            var31 = var6[var8];
            _closure2_slot19 = var31;
            var6 = var6[var7];
            _closure2_slot20 = var6;
            var15 = _closure1_slot5;
            var6 = var15.useState;
            var6 = var6.bind(var15)(var1);
            var6 = var10.bind(var5)(var6, var12);
            var33 = var6[var8];
            var6 = var6[var7];
            _closure2_slot21 = var6;
            var15 = _closure1_slot5;
            var6 = var15.useState;
            var6 = var6.bind(var15)(var1);
            var10 = var10.bind(var5)(var6, var12);
            var6 = var10[var8];
            var10 = var10[var7];
            _closure2_slot22 = var10;
            var15 = var1 == var13;
            var10 = undefined;
            if(var15) { _fun0011_ip = 97; continue _fun0011 }
case 98:
            var10 = var13.colorString;
case 97:
            var15 = var1 != var10;
            var59 = null;
            if(!var15) { _fun0011_ip = 99; continue _fun0011 }
case 100:
            var59 = var10;
case 99:
            var15 = var1 == var13;
            var10 = undefined;
            if(var15) { _fun0011_ip = 101; continue _fun0011 }
case 102:
            var10 = var13.colorStrings;
case 101:
            var15 = var1 != var10;
            var56 = null;
            if(!var15) { _fun0011_ip = 103; continue _fun0011 }
case 104:
            var56 = var10;
case 103:
            var15 = var1 == var13;
            var10 = undefined;
            if(var15) { _fun0011_ip = 105; continue _fun0011 }
case 106:
            var10 = var13.nick;
case 105:
            if(!(var1 == var10)) { _fun0011_ip = 107; continue _fun0011 }
case 108:
            var15 = _closure1_slot1;
            var19 = _closure1_slot2;
            var13 = 29;
            var13 = var19[var13];
            var15 = var15.bind(var5)(var13);
            var13 = var15.getName;
            var10 = var13.bind(var15)(var45);
case 107:
            var13 = var1 != var10;
            var60 = var4;
            if(!var13) { _fun0011_ip = 109; continue _fun0011 }
case 110:
            var60 = var10;
case 109:
            var13 = _closure1_slot5;
            var10 = var13.useRef;
            var53 = var10.bind(var13)(var1);
            _closure2_slot23 = var53;
            var15 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 30;
            var10 = var13[var10];
            var15 = var15.bind(var5)(var10);
            var10 = {};
            var52 = true;
            var10['includeKeyboardHeight'] = var52;
            var10 = var15.bind(var5)(var10);
            var25 = var10.insets;
            var20 = _closure1_slot5;
            var19 = var20.useCallback;
            var15 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot23;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0014_ip = 34; continue _fun0014 }
case 111:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = new Array(0);
            var34 = var19.bind(var20)(var15, var10);
            var15 = _closure1_slot0;
            var10 = 31;
            var19 = var13[var10];
            var20 = var15.bind(var5)(var19);
            var19 = var20.useSharedValue;
            var22 = var19.bind(var20)(var8);
            _closure2_slot24 = var22;
            var13 = var13[var10];
            var19 = var15.bind(var5)(var13);
            var15 = var19.useAnimatedScrollHandler;
            var13 = function W(arg1) {
                var1 = arg1;
                var1 = var1.contentOffset;
                var3 = var1.y;
                var2 = _closure2_slot24;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var20 = {};
            var20['scrollTopValue'] = var22;
            var13['__closure'] = var20;
            var20 = 16880842576840.0;
            var13['__workletHash'] = var20;
            var20 = _closure1_slot33;
            var13['__initData'] = var20;
            var13 = var15.bind(var19)(var13);
            var22 = _closure1_slot5;
            var20 = var22.useCallback;
            var19 = new Array(2);
            var19[0] = var18;
            var15 = var32.id;
            var19[1] = var15;
            var15 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot5;
                    if(var2) { _fun0015_ip = 38; continue _fun0015 }
case 40:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 32;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.changeThreadSettings;
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var2 = {};
                    var2['name'] = var3;
                    var2 = var5.bind(var6)(var4, var2);
case 38:
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var35 = var20.bind(var22)(var15, var19);
            var22 = _closure1_slot5;
            var20 = var22.useCallback;
            var19 = new Array(2);
            var19[0] = var18;
            var15 = var32.id;
            var19[1] = var15;
            var15 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var9 = arg1;
                    var3 = _closure2_slot20;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var9);
                    var3 = _closure2_slot5;
                    if(var3) { _fun0016_ip = 112; continue _fun0016 }
case 113:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 32;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.changeThreadSettings;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = {};
                    var6 = global;
                    var8 = var6.Set;
                    var7 = var9.map;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var11 = var7.bind(var9)(var6);
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var12 = var7;
                    var6 = new var12[var8](var11, var10);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var2['appliedTags'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 112:
                    return var1;
                }
            };
            var30 = var20.bind(var22)(var15, var19);
            var22 = _closure1_slot5;
            var20 = var22.useCallback;
            var19 = new Array(1);
            var19[0] = var16;
            var15 = function(arg1) {
                var2 = _closure2_slot3;
                var1 = undefined;
                var6 = true;
                var2 = var2.bind(var1)(var6);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 33;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.transitionToThread;
                var3 = {};
                var3['navigationReplace'] = var6;
                var2 = _closure1_slot26;
                var2 = var2.FORUM;
                var3['source'] = var2;
                var2 = arg1;
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var22 = var20.bind(var22)(var15, var19);
            _closure2_slot25 = var22;
            var29 = _closure1_slot5;
            var20 = var29.useMemo;
            var19 = new Array(1);
            var19[0] = var31;
            var15 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = _closure2_slot19;
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
            var36 = var20.bind(var29)(var15, var19);
            _closure2_slot26 = var36;
            var20 = _closure1_slot5;
            var19 = var20.useMemo;
            var15 = new Array(1);
            var15[0] = var9;
            var9 = function() {
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
            var20 = var19.bind(var20)(var9, var15);
            _closure2_slot27 = var20;
            var29 = _closure1_slot5;
            var19 = var29.useCallback;
            var9 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            StartGenerator();
                            var8 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0017_ip = 114; continue _fun0017 }
case 40:
                            var2 = _closure2_slot1;
                            var4 = null;
                            if(!(var4 != var2)) { _fun0017_ip = 115; continue _fun0017 }
case 116:
                            var2 = _closure2_slot4;
                            var2 = var4 != var2;
                            if(!var2) { _fun0017_ip = 117; continue _fun0017 }
case 118:
                            var4 = _closure2_slot4;
                            var4 = var4.content;
                            var2 = var4 !== var8;
case 117:
                            if(!var2) { _fun0017_ip = 119; continue _fun0017 }
case 28:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 34;
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
case 119:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 35;
                            var2 = var5[var2];
                            var5 = undefined;
                            var8 = var6.bind(var5)(var2);
                            var7 = var8.isEqual;
                            var6 = _closure2_slot27;
                            var2 = _closure2_slot26;
                            var2 = var7.bind(var8)(var6, var2);
                            if(var2) { _fun0017_ip = 120; continue _fun0017 }
case 121:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 36;
                            var2 = var7[var2];
                            var8 = var6.bind(var5)(var2);
                            var7 = var8.updateForumPostTags;
                            var2 = _closure2_slot1;
                            var6 = var2.id;
                            var2 = global;
                            var10 = var2.Array;
                            var9 = var10.from;
                            var2 = _closure2_slot26;
                            var2 = var9.bind(var10)(var2);
                            var2 = var7.bind(var8)(var6, var2);
                            SaveGenerator(address=233);
case 122:
                            return var2;
case 123:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(!var6) { _fun0017_ip = 120; continue _fun0017 }
case 124:
                            return var2;
case 120:
                            var2 = _closure2_slot1;
                            var6 = var2.name;
                            var2 = _closure2_slot14;
                            if(!(var6 !== var2)) { _fun0017_ip = 125; continue _fun0017 }
case 126:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 37;
                            var2 = var7[var2];
                            var8 = var6.bind(var5)(var2);
                            var7 = var8.saveChannel;
                            var2 = _closure2_slot1;
                            var6 = var2.id;
                            var2 = {};
                            var9 = _closure2_slot14;
                            var2['name'] = var9;
                            var2 = var7.bind(var8)(var6, var2);
                            SaveGenerator(address=314);
case 127:
                            return var2;
case 44:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0017_ip = 128; continue _fun0017 }
case 125:
                            var6 = _closure1_slot15;
                            var4 = var6.getChannelId;
                            var6 = var4.bind(var6)();
                            var4 = _closure2_slot1;
                            var4 = var4.id;
                            if(!(var6 === var4)) { _fun0017_ip = 129; continue _fun0017 }
case 130:
                            var6 = _closure2_slot3;
                            var4 = true;
                            var4 = var6.bind(var5)(var4);
                            _fun0017_ip = 115; continue _fun0017;
case 129:
                            var4 = _closure2_slot25;
                            var3 = _closure2_slot1;
                            var3 = var4.bind(var5)(var3);
case 115:
                            var3 = undefined;
                            return var3;
case 128:
                            return var2;
case 114:
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
            var9[2] = var20;
            var9[3] = var36;
            var9[4] = var39;
            var9[5] = var22;
            var9[6] = var16;
            var37 = var19.bind(var29)(var15, var9);
            _closure2_slot28 = var37;
            var15 = var1 == var38;
            var9 = undefined;
            if(var15) { _fun0011_ip = 131; continue _fun0011 }
case 132:
            var9 = var38.name;
case 131:
            var15 = var1 != var9;
            if(!var15) { _fun0011_ip = 133; continue _fun0011 }
case 134:
            var9 = var38.name;
            var9 = var9.length;
            var15 = var9 > var8;
case 133:
            var9 = var21.trim;
            var19 = var9.bind(var21)();
            var9 = var24.length;
            var29 = var9 > var8;
            var9 = var4 === var17;
            if(var9) { _fun0011_ip = 135; continue _fun0011 }
case 136:
            var9 = var19 !== var17;
case 135:
            if(!var9) { _fun0011_ip = 137; continue _fun0011 }
case 138:
            var17 = var19.length;
            var17 = var17 > var8;
            if(var17) { _fun0011_ip = 139; continue _fun0011 }
case 140:
            var17 = var29;
case 139:
            var9 = var17;
case 137:
            var29 = !var18;
            if(!var29) { _fun0011_ip = 141; continue _fun0011 }
case 142:
            var29 = var15;
case 141:
            if(!var29) { _fun0011_ip = 143; continue _fun0011 }
case 144:
            var29 = var9;
case 143:
            if(var29) { _fun0011_ip = 145; continue _fun0011 }
case 146:
            var9 = var18;
            if(!var9) { _fun0011_ip = 147; continue _fun0011 }
case 148:
            var17 = var1 == var2;
            var15 = undefined;
            if(var17) { _fun0011_ip = 149; continue _fun0011 }
case 150:
            var15 = var2.name;
case 149:
            var15 = var39 !== var15;
            if(var15) { _fun0011_ip = 151; continue _fun0011 }
case 152:
            var42 = var1 == var41;
            var17 = undefined;
            if(var42) { _fun0011_ip = 153; continue _fun0011 }
case 154:
            var17 = var41.content;
case 153:
            var15 = var19 !== var17;
case 151:
            if(var15) { _fun0011_ip = 155; continue _fun0011 }
case 156:
            var19 = _closure1_slot1;
            var41 = _closure1_slot2;
            var17 = 35;
            var17 = var41[var17];
            var19 = var19.bind(var5)(var17);
            var17 = var19.isEqual;
            var17 = var17.bind(var19)(var20, var36);
            var15 = !var17;
case 155:
            var9 = var15;
case 147:
            var29 = var9;
case 145:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 38;
            var9 = var17[var9];
            var20 = var15.bind(var5)(var9);
            var19 = var20.useCreateForumPost;
            var9 = {};
            var9['parentChannel'] = var32;
            var9['threadSettings'] = var38;
            var9['appliedTags'] = var36;
            var9['onThreadCreated'] = var22;
            var36 = var19.bind(var20)(var9);
            _closure2_slot29 = var36;
            var22 = _closure1_slot5;
            var20 = var22.useCallback;
            var9 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0018_ip = 157; continue _fun0018 }
case 61:
                            var2 = arg1;
                            var12 = var2.stickerId;
                            var3 = undefined;
                            var9 = undefined;
                            var13 = undefined;
                            var11 = undefined;
                            var7 = undefined;
                            var8 = undefined;
                            var10 = undefined;
                            SaveGenerator(address=37);
case 37:
                            return var3;
case 158:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0018_ip = 159; continue _fun0018 }
case 2:
                            var16 = _closure2_slot0;
                            var15 = var16.hasFlag;
                            var14 = _closure1_slot23;
                            var14 = var14.REQUIRE_TAG;
                            var14 = var15.bind(var16)(var14);
                            if(!var14) { _fun0018_ip = 160; continue _fun0018 }
case 161:
                            var14 = _closure2_slot19;
                            var15 = var14.length;
                            var14 = 0;
                            if(!(var14 !== var15)) { _fun0018_ip = 82; continue _fun0018 }
case 160:
                            var14 = _closure2_slot5;
                            if(!var14) { _fun0018_ip = 119; continue _fun0018 }
case 162:
                            var15 = _closure2_slot1;
                            var14 = null;
                            if(!(var14 != var15)) { _fun0018_ip = 163; continue _fun0018 }
case 119:
                            var15 = _closure2_slot13;
                            var14 = true;
                            var14 = var15.bind(var3)(var14);
                            var15 = _closure1_slot1;
                            var16 = _closure1_slot2;
                            var14 = 28;
                            var14 = var16[var14];
                            var17 = var15.bind(var3)(var14);
                            var16 = var17.parse;
                            var14 = _closure2_slot5;
                            if(var14) { _fun0018_ip = 164; continue _fun0018 }
case 165:
                            var15 = _closure2_slot0;
                            _fun0018_ip = 166; continue _fun0018;
case 164:
                            var15 = _closure2_slot1;
case 166:
                            var14 = _closure2_slot16;
                            var14 = var16.bind(var17)(var15, var14);
                            var9 = var14.content;
case 19: // try_start_0 // try_start_2
                            var14 = _closure2_slot21;
                            var17 = null;
                            var14 = var14.bind(var3)(var17);
                            var14 = _closure2_slot22;
                            var14 = var14.bind(var3)(var17);
                            var14 = _closure2_slot5;
                            if(var14) { _fun0018_ip = 167; continue _fun0018 }
case 168:
                            var16 = _closure2_slot29;
                            var15 = var9;
                            var14 = var12;
                            var17 = var17 != var14;
                            var14 = undefined;
                            if(!var17) { _fun0018_ip = 23; continue _fun0018 }
case 123:
                            var17 = var12;
                            var12 = new Array(1);
                            var12[0] = var17;
                            var14 = var12;
case 23:
                            var12 = _closure2_slot10;
                            var12 = var16.bind(var3)(var15, var14, var12);
                            SaveGenerator(address=262);
case 169:
                            return var12;
case 170:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=13);
                            if(!var14) { _fun0018_ip = 171; continue _fun0018 }
case 172: // try_end0 // try_end2
                            var15 = _closure2_slot13;
                            var14 = false;
                            var14 = var15.bind(var3)(var14);
                            return var12;
case 167: // try_start_1 // try_start_3
                            var12 = _closure2_slot28;
                            var9 = var12.bind(var3)(var9);
                            SaveGenerator(address=295);
case 173:
                            return var9;
case 174:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                            if(var12) { _fun0018_ip = 175; continue _fun0018 }
case 171: // try_end1
                            _fun0018_ip = 176; continue _fun0018;
case 175: // try_end3
                            var14 = _closure2_slot13;
                            var12 = false;
                            var12 = var14.bind(var3)(var12);
                            return var9;
case 125: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=8);
                            var6 = var9;
                            var12 = var9.body;
                            var13 = var12;
                            var9 = null;
                            var14 = var9 == var12;
                            var12 = undefined;
                            if(var14) { _fun0018_ip = 177; continue _fun0018 }
case 178:
                            var12 = var13.code;
case 177:
                            if(!(var9 != var12)) { _fun0018_ip = 176; continue _fun0018 }
case 179:
                            var12 = var6;
                            var12 = var12.body;
                            var11 = var12;
                            var13 = var9 == var12;
                            var12 = undefined;
                            if(var13) { _fun0018_ip = 114; continue _fun0018 }
case 180:
                            var12 = var11.code;
case 114:
                            var11 = _closure1_slot20;
                            var11 = var11.AUTOMOD_TITLE_BLOCKED;
                            if(!(var12 !== var11)) { _fun0018_ip = 181; continue _fun0018 }
case 182:
                            var11 = var6;
                            var11 = var11.body;
                            var7 = var11;
                            var12 = var9 == var11;
                            var11 = undefined;
                            if(var12) { _fun0018_ip = 183; continue _fun0018 }
case 184:
                            var11 = var7.code;
case 183:
                            var7 = _closure1_slot20;
                            var7 = var7.AUTOMOD_MESSAGE_BLOCKED;
                            if(!(var11 !== var7)) { _fun0018_ip = 185; continue _fun0018 }
case 186:
                            var11 = var6;
                            var11 = var11.body;
                            var8 = var11;
                            var12 = var9 == var11;
                            var11 = undefined;
                            if(var12) { _fun0018_ip = 187; continue _fun0018 }
case 188:
                            var11 = var8.code;
case 187:
                            var8 = _closure1_slot20;
                            var8 = var8.INVALID_FORM_BODY;
                            var8 = var11 === var8;
                            var7 = var8;
                            if(!var8) { _fun0018_ip = 189; continue _fun0018 }
case 190:
                            var8 = var6;
                            var8 = var8.body;
                            var10 = var8;
                            var11 = var9 == var8;
                            var8 = undefined;
                            if(var11) { _fun0018_ip = 191; continue _fun0018 }
case 192:
                            var11 = var10;
                            var11 = var11.errors;
                            var10 = var11;
                            var11 = var9 == var11;
                            var8 = undefined;
                            if(var11) { _fun0018_ip = 191; continue _fun0018 }
case 193:
                            var8 = var10.name;
case 191:
                            var7 = var9 != var8;
case 189:
                            if(!var7) { _fun0018_ip = 176; continue _fun0018 }
case 194:
                            var8 = _closure2_slot21;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 39;
                            var7 = var10[var7];
                            var9 = var9.bind(var3)(var7);
                            var7 = var9.makeApiNameValidationError;
                            var7 = var7.bind(var9)();
                            var7 = var8.bind(var3)(var7);
                            _fun0018_ip = 176; continue _fun0018;
case 185:
                            var8 = _closure2_slot22;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 39;
                            var7 = var10[var7];
                            var11 = var9.bind(var3)(var7);
                            var10 = var11.makeAutomodViolationError;
                            var7 = var6;
                            var9 = var7.body;
                            var7 = _closure2_slot0;
                            var7 = var10.bind(var11)(var9, var7);
                            var7 = var8.bind(var3)(var7);
                            _fun0018_ip = 176; continue _fun0018;
case 181:
                            var7 = _closure2_slot21;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 39;
                            var8 = var10[var8];
                            var10 = var9.bind(var3)(var8);
                            var9 = var10.makeAutomodViolationError;
                            var8 = var6.body;
                            var6 = _closure2_slot0;
                            var6 = var9.bind(var10)(var8, var6);
                            var6 = var7.bind(var3)(var6);
case 176: // try_end4
                            var7 = _closure2_slot13;
                            var6 = false;
                            var6 = var7.bind(var3)(var6);
                            _fun0018_ip = 163; continue _fun0018;
case 195: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=5);
                            var8 = _closure2_slot13;
                            var7 = false;
                            var7 = var8.bind(var3)(var7);
                            throw var6;
case 82:
                            var5 = _closure2_slot22;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 39;
                            var4 = var7[var4];
                            var6 = var6.bind(var3)(var4);
                            var4 = var6.makeEmptyTagsError;
                            var4 = var4.bind(var6)();
                            var4 = var5.bind(var3)(var4);
case 163:
                            return var3;
case 159:
                            return var2;
case 157:
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
            var19 = var9.bind(var5)();
            var9 = new Array(8);
            var9[0] = var32;
            var38 = var31.length;
            var9[1] = var38;
            var9[2] = var18;
            var9[3] = var2;
            var9[4] = var21;
            var9[5] = var37;
            var9[6] = var36;
            var9[7] = var24;
            var9 = var20.bind(var22)(var19, var9);
            _closure2_slot30 = var9;
            var22 = _closure1_slot5;
            var20 = var22.useCallback;
            var19 = new Array(6);
            var19[0] = var32;
            var19[1] = var27;
            var19[2] = var26;
            var19[3] = var24;
            var19[4] = var9;
            var19[5] = var21;
            var9 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.stickerId;
                    var _closure3_slot0 = var4;
                    var1 = _closure2_slot16;
                    var1 = var1.length;
                    var2 = 0;
                    if(!(var2 === var1)) { _fun0019_ip = 4; continue _fun0019 }
case 33:
                    var1 = _closure2_slot10;
                    var1 = var1.length;
                    if(!(var2 === var1)) { _fun0019_ip = 4; continue _fun0019 }
case 2:
                    var1 = null;
                    if(!(var1 != var4)) { _fun0019_ip = 196; continue _fun0019 }
case 4:
                    var1 = _closure2_slot9;
                    if(!(!(var1 > var2))) { _fun0019_ip = 196; continue _fun0019 }
case 60:
                    var1 = _closure2_slot16;
                    var2 = var1.length;
                    var1 = _closure2_slot12;
                    if(!(!(var2 > var1))) { _fun0019_ip = 197; continue _fun0019 }
case 9:
                    var2 = _closure1_slot34;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 42;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.RESTRICTIONS;
                    var11 = var2.bind(var3)(var1);
                    var2 = var11.bind(var3)();
                    var1 = var2.done;
                    var10 = null;
                    var5 = false;
                    if(var1) { _fun0019_ip = 198; continue _fun0019 }
case 199:
                    var1 = var2.value;
                    var13 = var1.check;
                    var12 = _closure2_slot16;
                    var9 = _closure2_slot0;
                    var1 = var9.getGuildId;
                    var1 = var1.bind(var9)();
                    var1 = var10 != var1;
                    var9 = var13.bind(var3)(var12, var9, var1);
                    if(!(var5 === var9)) { _fun0019_ip = 200; continue _fun0019 }
case 201:
                    var12 = var11.bind(var3)();
                    var1 = var12.done;
                    var2 = var12;
                    if(var1) { _fun0019_ip = 198; continue _fun0019 }
case 202:
                    _fun0019_ip = 199; continue _fun0019;
case 200:
                    var2 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var1 = 40;
                    var1 = var11[var1];
                    var5 = var2.bind(var3)(var1);
                    var2 = var5.show;
                    var1 = {};
                    var10 = _closure1_slot0;
                    var6 = 41;
                    var12 = var11[var6];
                    var12 = var10.bind(var3)(var12);
                    var14 = var12.intl;
                    var13 = var14.string;
                    var12 = var11[var6];
                    var12 = var10.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12.mY3Y38;
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
                    var9 = var9.KJnHq3;
                    var9 = var12.bind(var13)(var9);
                    var1['confirmText'] = var9;
                    var7 = function onConfirm() {
                        var3 = _closure2_slot30;
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
                    var6 = var6.fsBWmS;
                    var6 = var7.bind(var9)(var6);
                    var1['cancelText'] = var6;
                    var1 = var2.bind(var5)(var1);
                    var1 = undefined;
                    return var1;
case 198:
                    var2 = _closure2_slot30;
                    var1 = {};
                    var1['stickerId'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0019_ip = 196; continue _fun0019;
case 197:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 40;
                    var1 = var10[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 41;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var11 = var6.intl;
                    var7 = var11.string;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.l8rYLt;
                    var6 = var7.bind(var11)(var6);
                    var1['title'] = var6;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var4 = var10[var4];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.t;
                    var5 = var4.FfjF15;
                    var4 = {};
                    var9 = _closure2_slot16;
                    var9 = var9.length;
                    var4['currentLength'] = var9;
                    var8 = _closure2_slot12;
                    var4['maxLength'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1['body'] = var4;
                    var1 = var2.bind(var3)(var1);
case 196:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var20.bind(var22)(var9, var19);
            var20 = _closure1_slot5;
            var19 = var20.useCallback;
            var9 = new Array(2);
            var9[0] = var3;
            var3 = var32.id;
            var9[1] = var3;
            var3 = function(arg1) {
                var3 = arg1;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var2);
                var6 = var7.changeDraft;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var4 = _closure1_slot12;
                var4 = var4.ChannelMessage;
                var4 = var6.bind(var7)(var5, var3, var4);
                var2 = _closure2_slot17;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var48 = var19.bind(var20)(var3, var9);
            var3 = 43;
            var3 = var17[var3];
            var19 = var15.bind(var5)(var3);
            var9 = var19.useFocusHandlers;
            var3 = {};
            var3['titleInput'] = var40;
            var3['contentInput'] = var53;
            var3 = var9.bind(var19)(var3);
            var9 = var3.setFocusedInput;
            _closure2_slot31 = var9;
            var26 = var3.focusLastInput;
            _closure2_slot32 = var26;
            var9 = var3.blurLastInput;
            _closure2_slot33 = var9;
            var24 = var3.focusedInput;
            var19 = _closure1_slot5;
            var9 = var19.useState;
            var3 = {'start': 0, 'end': null};
            var3 = var9.bind(var19)(var3);
            var9 = _closure1_slot4;
            var3 = var9.bind(var5)(var3, var12);
            var20 = var3[var8];
            var3 = var3[var7];
            _closure2_slot34 = var3;
            var36 = _closure1_slot5;
            var22 = var36.useCallback;
            var19 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var4 = var1.selection;
                var3 = _closure2_slot34;
                var2 = {};
                var5 = var2;
                var1 = copyDataProperties(var5, var4);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var43 = var22.bind(var36)(var19, var3);
            var36 = _closure1_slot5;
            var22 = var36.useCallback;
            var19 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.start;
                    var _closure3_slot0 = var3;
                    var1 = var1.end;
                    var _closure3_slot1 = var1;
                    var1 = undefined;
                    var _closure3_slot2 = var1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 44;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0020_ip = 203; continue _fun0020 }
case 38:
                    var3 = _closure2_slot23;
                    var4 = var3.current;
                    _closure3_slot2 = var4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0020_ip = 203; continue _fun0020 }
case 204:
                    var3 = global;
                    var3 = var3.setTimeout;
                    var2 = function() {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var4 = _closure3_slot2;
                            var3 = var4.setSelection;
                            var2 = _closure3_slot0;
                            var6 = _closure3_slot1;
                            var1 = null;
                            if(!(var1 == var6)) { _fun0021_ip = 33; continue _fun0021 }
case 205:
                            var1 = _closure3_slot0;
                            _fun0021_ip = 158; continue _fun0021;
case 33:
                            var1 = _closure3_slot1;
case 158:
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
case 203:
                    return var1;
                }
            };
            var3 = new Array(0);
            var36 = var22.bind(var36)(var19, var3);
            var3 = 45;
            var19 = var17[var3];
            var37 = var15.bind(var5)(var19);
            var22 = var37.usePressEmojiHandler;
            var19 = {};
            var19['selection'] = var20;
            var19['draftContent'] = var21;
            var19['handleTextChange'] = var48;
            var19['focusTextInput'] = var34;
            var19['setSelection'] = var36;
            var19 = var22.bind(var37)(var19);
            _closure2_slot35 = var19;
            var3 = var17[var3];
            var22 = var15.bind(var5)(var3);
            var19 = var22.usePressGIFHandler;
            var3 = {};
            var3['selection'] = var20;
            var3['draftContent'] = var21;
            var3['handleTextChange'] = var48;
            var3['focusTextInput'] = var34;
            var3['setSelection'] = var36;
            var3 = var19.bind(var22)(var3);
            _closure2_slot36 = var3;
            var3 = 46;
            var3 = var17[var3];
            var22 = var15.bind(var5)(var3);
            var19 = var22.usePressHorizontalAutocompleteItemHandler;
            var3 = {};
            var3['draftContent'] = var21;
            var3['handleTextChange'] = var48;
            var3['setSelection'] = var36;
            var3['channel'] = var32;
            var22 = var19.bind(var22)(var3);
            var3 = 47;
            var3 = var17[var3];
            var17 = var15.bind(var5)(var3);
            var15 = var17.useBackspaceHandler;
            var3 = {};
            var3['selection'] = var20;
            var3['draftContent'] = var21;
            var3['handleTextChange'] = var48;
            var3 = var15.bind(var17)(var3);
            _closure2_slot37 = var3;
            var15 = _closure1_slot5;
            var3 = var15.useState;
            var3 = var3.bind(var15)(var8);
            var3 = var9.bind(var5)(var3, var12);
            var12 = var3[var8];
            var3 = var3[var7];
            _closure2_slot38 = var3;
            var9 = _closure1_slot5;
            var8 = var9.useCallback;
            var7 = function(arg1) {
                var3 = _closure2_slot38;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var17 = var8.bind(var9)(var7, var3);
            var19 = var32;
            if(!var18) { _fun0011_ip = 206; continue _fun0011 }
case 207:
            var19 = var2;
case 206:
            _closure2_slot39 = var19;
            var8 = _closure1_slot5;
            var7 = var8.useMemo;
            var3 = new Array(1);
            var3[0] = var19;
            var2 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = _closure2_slot39;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0022_ip = 28; continue _fun0022 }
case 208:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 28;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.createParserState;
                    var2 = _closure2_slot39;
                    var1 = var3.bind(var4)(var2);
case 28:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            _closure2_slot40 = var2;
            var8 = _closure1_slot5;
            var7 = var8.useMemo;
            var3 = new Array(4);
            var3[0] = var21;
            var3[1] = var19;
            var3[2] = var2;
            var2 = var23.mentionText;
            var3[3] = var2;
            var2 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var3 = var1.length;
                    var1 = 0;
                    if(!(var1 !== var3)) { _fun0023_ip = 209; continue _fun0023 }
case 111:
                    var3 = _closure2_slot39;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0023_ip = 209; continue _fun0023 }
case 34:
                    var3 = _closure2_slot40;
                    if(!(var1 != var3)) { _fun0023_ip = 209; continue _fun0023 }
case 210:
                    var4 = _closure2_slot16;
                    var3 = var4.split;
                    var2 = _closure1_slot31;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.length;
                    var2 = 1;
                    var1 = null;
                    if(!(var2 !== var3)) { _fun0023_ip = 211; continue _fun0023 }
case 212:
                    var3 = var4.map;
                    var2 = function(arg1, arg2) {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                            var6 = arg1;
                            var5 = arg2;
                            var1 = 2;
                            var2 = var5 % var1;
                            var1 = 1;
                            if(!(var2 === var1)) { _fun0024_ip = 213; continue _fun0024 }
case 29:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 28;
                            var2 = var4[var2];
                            var4 = undefined;
                            var9 = var3.bind(var4)(var2);
                            var8 = var9.parse;
                            var3 = _closure2_slot39;
                            var2 = _closure2_slot40;
                            var2 = var8.bind(var9)(var3, var6, var2);
                            var2 = var2.content;
                            if(!(var2 === var6)) { _fun0024_ip = 214; continue _fun0024 }
case 213:
                            var9 = _closure1_slot28;
                            var2 = _closure1_slot5;
                            var8 = var2.Fragment;
                            var3 = {};
                            var3['children'] = var6;
                            var2 = undefined;
                            var2 = var9.bind(var2)(var8, var3, var5);
                            return var2;
case 214:
                            var3 = _closure1_slot28;
                            var2 = _closure1_slot8;
                            var1 = {};
                            var7 = _closure2_slot6;
                            var7 = var7.mentionText;
                            var1['style'] = var7;
                            var1['children'] = var6;
                            var1 = var3.bind(var4)(var2, var1, var5);
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 211:
                    return var1;
case 209:
                    var1 = null;
                    return var1;
                }
            };
            var47 = var7.bind(var8)(var2, var3);
            var3 = var39.replace;
            var2 = /\n/g;
            var9 = var3.bind(var39)(var2, var4);
            if(!(var1 != var19)) { _fun0011_ip = 215; continue _fun0011 }
case 216:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 39;
            var7 = var4[var2];
            var15 = var3.bind(var5)(var7);
            var8 = var15.renderError;
            var7 = {};
            var7['content'] = var39;
            var36 = var8.bind(var15)(var33, var7);
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.renderError;
            var2 = {};
            var2['content'] = var21;
            var2['tags'] = var31;
            var54 = var3.bind(var4)(var6, var2);
            var2 = var19.isMediaChannel;
            var2 = var2.bind(var19)();
            if(var2) { _fun0011_ip = 217; continue _fun0011 }
case 218:
            var15 = new Array(0);
            _fun0011_ip = 219; continue _fun0011;
case 217:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 48;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
            var2 = new Array(1);
            var2[0] = var3;
            var15 = var2;
case 219:
            var2 = function MediaPostMultipleThumbnailActionSheetImporter() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 50;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 49;
                var2 = var1[var2];
                var1 = var1.paths;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            _closure2_slot41 = var2;
            var4 = _closure1_slot29;
            var3 = _closure1_slot9;
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
            var8 = _closure1_slot28;
            var12 = _closure1_slot1;
            var37 = _closure1_slot2;
            var6 = 51;
            var6 = var37[var6];
            var7 = var12.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var32;
            var33 = 44;
            var6['height'] = var33;
            var6['onClose'] = var16;
            var16 = function onGuidelinesPress() {
                var2 = _closure2_slot33;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 52;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openForumGuidelinesActionSheet;
                var2 = {};
                var5 = _closure2_slot0;
                var2['channel'] = var5;
                var5 = function onClose() {
                    var2 = _closure2_slot32;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['onClose'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6['onGuidelinesPress'] = var16;
            var6['submitting'] = var28;
            var6['title'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot29;
            var8 = _closure1_slot30;
            var7 = {};
            var10 = var37[var10];
            var10 = var12.bind(var5)(var10);
            var12 = var10.ScrollView;
            var10 = {'onScroll': null, 'scrollEventThrottle': 16, 'keyboardShouldPersistTaps': 'always', 'nestedScrollEnabled': false, 'contentContainerStyle': null, 'keyboardDismissMode': 'on-drag'};
            var10['onScroll'] = var13;
            var13 = var23.scrollViewContentContainer;
            var10['contentContainerStyle'] = var13;
            var33 = _closure1_slot28;
            var38 = _closure1_slot0;
            var13 = 53;
            var13 = var37[var13];
            var13 = var38.bind(var5)(var13);
            var16 = var13.FormInput;
            var13 = {};
            var13['ref'] = var40;
            var40 = var23.titleInput;
            var13['style'] = var40;
            var40 = var23.titleInputText;
            var13['inputTextStyle'] = var40;
            var13['showTopContainer'] = var51;
            var50 = 41;
            var40 = var37[var50];
            var40 = var38.bind(var5)(var40);
            var42 = var40.intl;
            var41 = var42.string;
            var40 = var37[var50];
            var40 = var38.bind(var5)(var40);
            var40 = var40.t;
            var40 = var40.lU4dDS;
            var40 = var41.bind(var42)(var40);
            var13['placeholder'] = var40;
            var13['placeholderTextColor'] = var49;
            var13['large'] = var52;
            var13['multiline'] = var52;
            var13['value'] = var39;
            var40 = 54;
            var37 = var37[var40];
            var37 = var38.bind(var5)(var37);
            var37 = var37.ClearButtonVisibility;
            var37 = var37.NEVER;
            var13['clearButtonVisibility'] = var37;
            var37 = _closure1_slot21;
            var13['maxLength'] = var37;
            var13['onChange'] = var35;
            var35 = function onBlur() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0025_ip = 220; continue _fun0025 }
case 40:
                    var2 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var2;
                    var3 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0025_ip = 221; continue _fun0025 }
case 3:
                    var4 = _closure2_slot2;
                    var2 = var4.name;
case 221:
                    if(!(var6 != var2)) { _fun0025_ip = 220; continue _fun0025 }
case 2:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 55;
                    var2 = var7[var2];
                    var7 = var5.bind(var3)(var2);
                    var2 = _closure2_slot2;
                    var2 = var6 == var2;
                    var5 = undefined;
                    if(var2) { _fun0025_ip = 52; continue _fun0025 }
case 222:
                    var2 = _closure2_slot2;
                    var5 = var2.name;
case 52:
                    var2 = true;
                    var2 = var7.bind(var3)(var5, var2);
                    var5 = _closure2_slot2;
                    var6 = var6 == var5;
                    var5 = undefined;
                    if(var6) { _fun0025_ip = 223; continue _fun0025 }
case 214:
                    var6 = _closure2_slot2;
                    var5 = var6.name;
case 223:
                    if(!(var2 !== var5)) { _fun0025_ip = 220; continue _fun0025 }
case 224:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 32;
                    var4 = var6[var4];
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.changeThreadSettings;
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = {};
                    var4['name'] = var2;
                    var4 = var6.bind(var7)(var5, var4);
                    var1 = _closure2_slot15;
                    var1 = var1.bind(var3)(var2);
case 220:
                    var1 = undefined;
                    return var1;
                }
            };
            var13['onBlur'] = var35;
            var35 = function onFocus() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var5 = _closure2_slot11;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 56;
                    var4 = var1[var9];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.MEDIA;
                    var4 = var5 !== var4;
                    if(!var4) { _fun0026_ip = 49; continue _fun0026 }
case 50:
                    var6 = _closure2_slot11;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.KeyboardTypes;
                    var5 = var5.EXPRESSION;
                    var4 = var6 !== var5;
case 49:
                    if(var4) { _fun0026_ip = 165; continue _fun0026 }
case 52:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 57;
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
case 165:
                    var3 = _closure2_slot31;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 43;
                    var2 = var5[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.PostComposerInputs;
                    var2 = var2.TITLE;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var13['onFocus'] = var35;
            var13['autoFocus'] = var52;
            var13['autoCorrect'] = var52;
            var35 = 'none';
            var13['textContentType'] = var35;
            var35 = 'next';
            var13['returnKeyType'] = var35;
            var13['onNext'] = var34;
            var16 = var33.bind(var5)(var16, var13);
            var13 = new Array(3);
            var13[0] = var16;
            var33 = var1 != var36;
            var16 = null;
            if(!var33) { _fun0011_ip = 225; continue _fun0011 }
case 226:
            var35 = _closure1_slot28;
            var34 = _closure1_slot1;
            var37 = _closure1_slot2;
            var33 = 58;
            var33 = var37[var33];
            var34 = var34.bind(var5)(var33);
            var33 = {};
            var37 = var23.nameError;
            var33['style'] = var37;
            var33['children'] = var36;
            var16 = var35.bind(var5)(var34, var33);
case 225:
            var13[1] = var16;
            var34 = _closure1_slot29;
            var33 = _closure1_slot9;
            var16 = {};
            var35 = var23.editor;
            var16['style'] = var35;
            var36 = var1 != var45;
            if(!var36) { _fun0011_ip = 227; continue _fun0011 }
case 228:
            var38 = _closure1_slot28;
            var37 = _closure1_slot7;
            var35 = {};
            var39 = var23.avatarContainer;
            var35['style'] = var39;
            var39 = function onPress() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 59;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot8;
                    var5 = var5.id;
                    var1['userId'] = var5;
                    var5 = _closure2_slot39;
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var6 = _closure2_slot4;
                    var5 = null;
                    var6 = var5 == var6;
                    var5 = undefined;
                    if(var6) { _fun0027_ip = 161; continue _fun0027 }
case 212:
                    var6 = _closure2_slot4;
                    var5 = var6.id;
case 161:
                    var1['messageId'] = var5;
                    var4 = _closure2_slot7;
                    var1['sourceAnalyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var35['onPress'] = var39;
            var42 = _closure1_slot28;
            var41 = _closure1_slot0;
            var39 = _closure1_slot2;
            var39 = var39[var40];
            var39 = var41.bind(var5)(var39);
            var41 = var39.Avatar;
            var39 = {};
            var39['animate'] = var52;
            var46 = var23.avatar;
            var39['style'] = var46;
            var39['user'] = var45;
            var46 = var1 == var32;
            var55 = undefined;
            if(var46) { _fun0011_ip = 229; continue _fun0011 }
case 230:
            var46 = var32.getGuildId;
            var55 = var46.bind(var32)();
case 229:
            var57 = var1 != var55;
            var46 = undefined;
            if(!var57) { _fun0011_ip = 231; continue _fun0011 }
case 232:
            var46 = var55;
case 231:
            var39['guildId'] = var46;
            var45 = var45.avatarDecoration;
            var39['avatarDecoration'] = var45;
            var46 = _closure1_slot0;
            var45 = _closure1_slot2;
            var55 = var45[var50];
            var55 = var46.bind(var5)(var55);
            var57 = var55.intl;
            var55 = var57.formatToPlainString;
            var45 = var45[var50];
            var45 = var46.bind(var5)(var45);
            var45 = var45.t;
            var46 = var45.LvU3nj;
            var45 = {};
            var45['nickname'] = var60;
            var45 = var55.bind(var57)(var46, var45);
            var39['accessibilityLabel'] = var45;
            var39 = var42.bind(var5)(var41, var39);
            var35['children'] = var39;
            var36 = var38.bind(var5)(var37, var35);
case 227:
            var35 = new Array(2);
            var35[0] = var36;
            var38 = _closure1_slot29;
            var37 = _closure1_slot9;
            var36 = {};
            var39 = var23.editorBody;
            var36['style'] = var39;
            var42 = _closure1_slot29;
            var41 = _closure1_slot9;
            var39 = {};
            var45 = var23.usernameToChannel;
            var39['style'] = var45;
            var58 = _closure1_slot0;
            var57 = _closure1_slot2;
            var45 = var57[var50];
            var45 = var58.bind(var5)(var45);
            var62 = var45.intl;
            var55 = var62.formatToPlainString;
            var45 = var57[var50];
            var45 = var58.bind(var5)(var45);
            var45 = var45.t;
            var46 = var45.QicUf+;
            var45 = {};
            var45['nickname'] = var60;
            var45['channelName'] = var61;
            var45 = var55.bind(var62)(var46, var45);
            var39['accessibilityLabel'] = var45;
            var55 = _closure1_slot28;
            var45 = 60;
            var45 = var57[var45];
            var45 = var58.bind(var5)(var45);
            var46 = var45.RoleLabel;
            var45 = {};
            var45['name'] = var60;
            var45['color'] = var59;
            var45['colors'] = var56;
            var46 = var55.bind(var5)(var46, var45);
            var45 = new Array(2);
            var45[0] = var46;
            var56 = _closure1_slot29;
            var46 = 61;
            var46 = var57[var46];
            var46 = var58.bind(var5)(var46);
            var55 = var46.Text;
            var46 = {'color': 'text-default', 'variant': 'text-xs/medium', 'style': null, 'lineClamp': 1};
            var59 = var23.channelName;
            var46['style'] = var59;
            var59 = var57[var50];
            var59 = var58.bind(var5)(var59);
            var60 = var59.intl;
            var59 = var60.format;
            var57 = var57[var50];
            var57 = var58.bind(var5)(var57);
            var57 = var57.t;
            var58 = var57["6Y1Kev"];
            var57 = {};
            var57['channelName'] = var61;
            var58 = var59.bind(var60)(var58, var57);
            var57 = [' '];
            var57[1] = var58;
            var46['children'] = var57;
            var46 = var56.bind(var5)(var55, var46);
            var45[1] = var46;
            var39['children'] = var45;
            var41 = var42.bind(var5)(var41, var39);
            var39 = new Array(3);
            var39[0] = var41;
            var42 = var1 != var54;
            var41 = null;
            if(!var42) { _fun0011_ip = 233; continue _fun0011 }
case 234:
            var46 = _closure1_slot28;
            var45 = _closure1_slot1;
            var55 = _closure1_slot2;
            var42 = 58;
            var42 = var55[var42];
            var45 = var45.bind(var5)(var42);
            var42 = {};
            var55 = var23.messageError;
            var42['style'] = var55;
            var42['children'] = var54;
            var41 = var46.bind(var5)(var45, var42);
case 233:
            var39[1] = var41;
            var42 = _closure1_slot28;
            var45 = _closure1_slot0;
            var46 = _closure1_slot2;
            var40 = var46[var40];
            var40 = var45.bind(var5)(var40);
            var41 = var40.TextInput;
            var40 = {};
            var40['ref'] = var53;
            var53 = var23.contentInput;
            var40['style'] = var53;
            var40['multiline'] = var52;
            var40['scrollEnabled'] = var51;
            var51 = var46[var50];
            var51 = var45.bind(var5)(var51);
            var52 = var51.intl;
            var51 = var52.string;
            var50 = var46[var50];
            var50 = var45.bind(var5)(var50);
            var50 = var50.t;
            var50 = var50["8IPnv1"];
            var50 = var51.bind(var52)(var50);
            var40['placeholder'] = var50;
            var40['placeholderTextColor'] = var49;
            var40['onChangeText'] = var48;
            var40['onSelectionChange'] = var43;
            var43 = function onFocus() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var5 = _closure2_slot11;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 56;
                    var4 = var1[var9];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.MEDIA;
                    if(!(var5 === var4)) { _fun0028_ip = 235; continue _fun0028 }
case 236:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 57;
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
case 235:
                    var3 = _closure2_slot31;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 43;
                    var2 = var5[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.PostComposerInputs;
                    var2 = var2.CONTENT;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var40['onFocus'] = var43;
            var43 = 56;
            var43 = var46[var43];
            var43 = var45.bind(var5)(var43);
            var43 = var43.KeyboardTypes;
            var43 = var43.EXPRESSION;
            var43 = var44 !== var43;
            var40['showSoftInputOnFocus'] = var43;
            var43 = var21;
            if(!(var1 != var47)) { _fun0011_ip = 237; continue _fun0011 }
case 238:
            var46 = _closure1_slot28;
            var45 = _closure1_slot8;
            var44 = {};
            var44['children'] = var47;
            var43 = var46.bind(var5)(var45, var44);
case 237:
            var40['children'] = var43;
            var40 = var42.bind(var5)(var41, var40);
            var39[2] = var40;
            var36['children'] = var39;
            var36 = var38.bind(var5)(var37, var36);
            var35[1] = var36;
            var16['children'] = var35;
            var16 = var34.bind(var5)(var33, var16);
            var13[2] = var16;
            var10['children'] = var13;
            var12 = var9.bind(var5)(var12, var10);
            var10 = new Array(5);
            var10[0] = var12;
            var16 = _closure1_slot28;
            var13 = _closure1_slot36;
            var12 = {};
            var12['tags'] = var31;
            var12 = var16.bind(var5)(var13, var12);
            var10[1] = var12;
            var16 = _closure1_slot28;
            var13 = _closure1_slot37;
            var12 = {};
            var12['channel'] = var32;
            var12['tags'] = var31;
            var12['onTagsSave'] = var30;
            var12['canPost'] = var29;
            var12['submitting'] = var28;
            var12['onSubmit'] = var27;
            var27 = function onShowExpressionPicker() {
                var2 = _closure1_slot6;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 62;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openExpressionPickerActionSheet;
                var2 = {};
                var7 = _closure2_slot0;
                var7 = var7.id;
                var2['channelId'] = var7;
                var7 = _closure2_slot35;
                var2['onPressEmoji'] = var7;
                var7 = _closure1_slot27;
                var2['onPressSticker'] = var7;
                var7 = _closure2_slot36;
                var2['onPressGIF'] = var7;
                var6 = _closure2_slot37;
                var2['onBackspace'] = var6;
                var6 = _closure1_slot25;
                var7 = var6.EMOJI;
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.GIF;
                var5[1] = var6;
                var2['visibleTabs'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var12['onShowExpressionPicker'] = var27;
            var12['focusLastInput'] = var26;
            var12['lastInput'] = var24;
            var12['isEdit'] = var18;
            var12['onLayout'] = var17;
            var12 = var16.bind(var5)(var13, var12);
            var10[2] = var12;
            var18 = _closure1_slot28;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 63;
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
            var13 = _closure1_slot28;
            var11 = 64;
            var11 = var16[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['contentTypes'] = var15;
            var14 = function children(arg1) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.visibleContent;
                    var1 = var1.markAsDismissed;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 48;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.DismissibleContent;
                    var3 = var1.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0029_ip = 239; continue _fun0029 }
case 240:
                    var4 = _closure1_slot28;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 65;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.DismissibleActionSheet;
                    var2 = {};
                    var6 = function markAsDismissed() {
                        var3 = _closure3_slot0;
                        var1 = _closure1_slot24;
                        var2 = var1.UNKNOWN;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['markAsDismissed'] = var6;
                    var6 = 'ThumbnailBottomSheet';
                    var2['actionSheetKey'] = var6;
                    var6 = _closure2_slot41;
                    var2['importer'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 239:
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
case 215:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();