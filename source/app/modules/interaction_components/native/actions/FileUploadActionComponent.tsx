// app/modules/interaction_components/native/actions/FileUploadActionComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var1 = function MainAreaCanUpload(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.openFilePicker;
            var13 = var1.minValues;
            var15 = var1.maxValues;
            var2 = var1.maxSizeBytes;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var3 = var6[var1];
            var4 = undefined;
            var9 = var7.bind(var4)(var3);
            var3 = var9.formatSize;
            var1 = var6[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.BYTE_IN_KB;
            var2 = var2 / var1;
            var5 = true;
            var1 = {'useKibibytes': true, 'useSpace': true};
            var12 = var3.bind(var9)(var2, var1);
            var3 = _closure1_slot9;
            var9 = 9;
            var1 = var6[var9];
            var1 = var7.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['onPress'] = var10;
            var11 = _closure1_slot9;
            var9 = var6[var9];
            var9 = var7.bind(var4)(var9);
            var9 = var9.TableRow;
            var10 = var9.Icon;
            var9 = {};
            var14 = 10;
            var14 = var6[var14];
            var14 = var7.bind(var4)(var14);
            var14 = var14.FileUpIcon;
            var9['IconComponent'] = var14;
            var9 = var11.bind(var4)(var10, var9);
            var1['icon'] = var9;
            var14 = 11;
            var9 = var6[var14];
            var9 = var7.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var6 = var6[var14];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6./2JwTk;
            var6 = {};
            var6['maxValues'] = var15;
            var6 = var9.bind(var10)(var7, var6);
            var1['label'] = var6;
            var6 = 1;
            if(!(!(var13 > var6))) { _fun0004_ip = 27; continue _fun0004 }
case 36:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = var6[var14];
            var9 = var7.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var6 = var6[var14];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.tyxwW1;
            var6 = {};
            var6['maxValues'] = var15;
            var6['maxSize'] = var12;
            var6 = var9.bind(var10)(var7, var6);
            _fun0004_ip = 37; continue _fun0004;
case 27:
            if(!(var13 !== var15)) { _fun0004_ip = 38; continue _fun0004 }
case 26:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = var7[var14];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var7 = var7[var14];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var9 = var7.ZG+3Cg;
            var7 = {};
            var7['minValues'] = var13;
            var7['maxValues'] = var15;
            var7['maxSize'] = var12;
            var7 = var10.bind(var11)(var9, var7);
            _fun0004_ip = 39; continue _fun0004;
case 38:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var14];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var8 = var8[var14];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var9 = var8.SAr319;
            var8 = {};
            var8['minValues'] = var13;
            var8['maxSize'] = var12;
            var7 = var10.bind(var11)(var9, var8);
case 39:
            var6 = var7;
case 37:
            var1['subLabel'] = var6;
            var1['start'] = var5;
            var1['end'] = var5;
            var1['arrow'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function MainAreaLimitReached() {
        var4 = _closure1_slot9;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 9;
        var1 = var9[var5];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {'icon': null, 'label': null, 'subLabel': null, 'disabled': true, 'start': true, 'end': true};
        var7 = _closure1_slot9;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.TableRow;
        var6 = var5.Icon;
        var5 = {};
        var10 = 12;
        var10 = var9[var10];
        var10 = var8.bind(var3)(var10);
        var10 = var10.CircleCheckIcon;
        var5['IconComponent'] = var10;
        var5 = var7.bind(var3)(var6, var5);
        var1['icon'] = var5;
        var5 = 11;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.0PhgpK;
        var6 = var7.bind(var10)(var6);
        var1['label'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.HYg2Hh;
        var5 = var6.bind(var7)(var5);
        var1['subLabel'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function File(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.upload;
            var _closure2_slot0 = var5;
            var1 = var1.handleRemoveFile;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot11;
            var4 = undefined;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 9;
            var1 = var17[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var10 = _closure1_slot9;
            var7 = _closure1_slot1;
            var14 = 13;
            var6 = var17[var14];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var11 = var5.item;
            var11 = var11.uri;
            var6['uri'] = var11;
            var11 = var5.isImage;
            var6['isImage'] = var11;
            var11 = var5.isVideo;
            var6['isVideo'] = var11;
            var11 = 32;
            var6['width'] = var11;
            var6['height'] = var11;
            var13 = _closure1_slot9;
            var12 = _closure1_slot5;
            var11 = {};
            var16 = var16.defaultAttachmentIconWrapper;
            var11['style'] = var16;
            var16 = _closure1_slot9;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.AttachmentIcon;
            var14 = {};
            var17 = var5.filename;
            var14['fileName'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var6['defaultPreview'] = var11;
            var6 = var10.bind(var4)(var7, var6);
            var1['icon'] = var6;
            var5 = var5.filename;
            var6 = null;
            if(!(var6 == var5)) { _fun0005_ip = 40; continue _fun0005 }
case 21:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 11;
            var7 = var12[var6];
            var7 = var11.bind(var4)(var7);
            var10 = var7.intl;
            var7 = var10.string;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.ZMirp6;
            var5 = var7.bind(var10)(var6);
case 40:
            var1['label'] = var5;
            var7 = _closure1_slot9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 14;
            var5 = var12[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {'variant': 'tertiary', 'size': 'sm'};
            var14 = 'sm';
            var13 = _closure1_slot9;
            var9 = 15;
            var9 = var12[var9];
            var9 = var11.bind(var4)(var9);
            var10 = var9.XSmallIcon;
            var9 = {};
            var9['size'] = var14;
            var9 = var13.bind(var4)(var10, var9);
            var5['icon'] = var9;
            var8 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onPress'] = var8;
            var8 = 11;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.N86XcH;
            var8 = var9.bind(var10)(var8);
            var5['accessibilityLabel'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var5 = true;
            var1['start'] = var5;
            var1['end'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': 32, 'alignItems': 'center'};
    var4['defaultAttachmentIconWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/FileUploadActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FileUploadActionComponent(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var10 = arg1;
            var14 = var10.minValues;
            var12 = var10.maxValues;
            var _closure2_slot0 = var12;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.useComponentStateContext;
            var6 = var1.bind(var4)();
            var4 = _closure1_slot1;
            var9 = 17;
            var1 = var3[var9];
            var11 = var4.bind(var5)(var1);
            var1 = null;
            var8 = var1 != var6;
            var7 = 'FileUploadActionComponent must be used within a ComponentStateContextProvider';
            var7 = var11.bind(var5)(var8, var7);
            var16 = var6.channelId;
            var _closure2_slot1 = var16;
            var3 = var3[var9];
            var7 = var4.bind(var5)(var3);
            var4 = var1 != var16;
            var3 = 'FileUploadActionComponent must be used inside a channel';
            var3 = var7.bind(var5)(var4, var3);
            var3 = var6.modal;
            var4 = var1 == var3;
            var17 = undefined;
            if(var4) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var17 = var3.customId;
case 41:
            var _closure2_slot2 = var17;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = var7[var9];
            var11 = var8.bind(var5)(var3);
            var4 = var1 != var17;
            var3 = 'FileUploadActionComponent requires modalCustomId from context';
            var3 = var11.bind(var5)(var4, var3);
            var4 = _closure1_slot0;
            var3 = 18;
            var3 = var7[var3];
            var18 = var4.bind(var5)(var3);
            var15 = var18.useStateFromStores;
            var3 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var15.bind(var18)(var11, var3);
            var _closure2_slot3 = var15;
            var3 = var7[var9];
            var11 = var8.bind(var5)(var3);
            var8 = var1 != var15;
            var3 = 'FileUploadActionComponent requires a valid channel';
            var3 = var11.bind(var5)(var8, var3);
            var3 = 19;
            var3 = var7[var3];
            var11 = var4.bind(var5)(var3);
            var8 = var11.maxFileSize;
            var3 = var15.guild_id;
            var11 = var8.bind(var11)(var3);
            var _closure2_slot4 = var11;
            var3 = 20;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useFileUploadComponentState;
            var4 = var3.bind(var4)(var10);
            var7 = var4.uploadIds;
            var _closure2_slot5 = var7;
            var3 = var4.setUploadIds;
            var _closure2_slot6 = var3;
            var8 = var4.currentUploads;
            var _closure2_slot7 = var8;
            var4 = var6.getParents;
            var10 = var4.bind(var6)(var10);
            var6 = var1 == var10;
            var4 = undefined;
            if(var6) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var6 = 0;
            var4 = var10[var6];
case 43:
            var6 = var1 == var4;
            var18 = undefined;
            if(var6) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var18 = var4.type;
case 45:
            var10 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 21;
            var6 = var19[var6];
            var6 = var10.bind(var5)(var6);
            var6 = var6.ComponentType;
            var6 = var6.LABEL;
            var10 = undefined;
            if(!(var18 === var6)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var10 = var4;
case 47:
            var _closure2_slot8 = var10;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var6 = var6.bind(var5)(var4);
            var4 = var1 != var10;
            var1 = 'FileUploadActionComponent must be used within a label Component';
            var1 = var6.bind(var5)(var4, var1);
            var9 = _closure1_slot4;
            var6 = var9.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                            var3 = var5.length;
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                            var2 = _closure2_slot5;
                            var3 = var2.length;
                            var2 = var5.length;
                            var3 = var3 + var2;
                            var2 = _closure2_slot0;
                            if(!(!(var3 > var2))) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                            var2 = _closure1_slot12;
                            var4 = undefined;
                            var10 = var2.bind(var4)(var5);
                            var6 = var10.bind(var4)();
                            var2 = var6.done;
                            var8 = 23;
                            var7 = var6;
                            if(var2) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                            var2 = var7.value;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var11 = var11.bind(var4)(var6);
                            var6 = var11.getFileSize;
                            var2 = var2.uri;
                            var2 = var6.bind(var11)(var2);
                            SaveGenerator(address=133);
case 57:
                            return var2;
case 58:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0007_ip = 59; continue _fun0007 }
case 42:
                            var6 = _closure2_slot4;
                            if(!(!(var2 > var6))) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                            var11 = var10.bind(var4)();
                            var6 = var11.done;
                            var7 = var11;
                            if(var6) { _fun0007_ip = 55; continue _fun0007 }
case 62:
                            _fun0007_ip = 56; continue _fun0007;
case 60:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 24;
                            var3 = var7[var3];
                            var7 = var6.bind(var4)(var3);
                            var6 = var7.showFileSizeExceededAlert;
                            var3 = _closure2_slot4;
                            var3 = var6.bind(var7)(var3, var2);
                            return var3;
case 59:
                            return var2;
case 55:
                            var3 = var5.map;
                            var2 = function(arg1) {
                                var2 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var1 = 25;
                                var1 = var7[var1];
                                var4 = undefined;
                                var3 = var2.bind(var4)(var1);
                                var2 = var3.makeComponentUploadId;
                                var1 = _closure2_slot2;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure1_slot1;
                                var2 = 26;
                                var2 = var7[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.setFile;
                                var2 = {};
                                var6 = _closure2_slot1;
                                var2['channelId'] = var6;
                                var2['id'] = var1;
                                var6 = {};
                                var8 = arg1;
                                var9 = var6;
                                var7 = copyDataProperties(var9, var8);
                                var7 = 'id';
                                var6[var7] = var1;
                                var2['file'] = var6;
                                var5 = _closure1_slot7;
                                var5 = var5.InteractionModal;
                                var2['draftType'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var6 = var3.bind(var5)(var2);
                            var3 = _closure2_slot6;
                            var5 = _closure2_slot5;
                            var2 = var5.concat;
                            var2 = var2.bind(var5)(var6);
                            var2 = var3.bind(var4)(var2);
case 51:
                            var2 = undefined;
                            return var2;
case 53:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 22;
                            var2 = var11[var2];
                            var10 = undefined;
                            var4 = var3.bind(var10)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var6 = _closure1_slot0;
                            var5 = 11;
                            var7 = var11[var5];
                            var7 = var6.bind(var10)(var7);
                            var12 = var7.intl;
                            var8 = var12.string;
                            var7 = var11[var5];
                            var7 = var6.bind(var10)(var7);
                            var7 = var7.t;
                            var7 = var7.wOr6hI;
                            var7 = var8.bind(var12)(var7);
                            var2['title'] = var7;
                            var7 = var11[var5];
                            var7 = var6.bind(var10)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var11[var5];
                            var5 = var6.bind(var10)(var5);
                            var5 = var5.t;
                            var6 = var5.dy6viI;
                            var5 = {};
                            var9 = _closure2_slot0;
                            var5['maxValues'] = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var2['body'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var2;
case 49:
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
            var4 = var1.bind(var5)();
            var1 = new Array(6);
            var1[0] = var7;
            var1[1] = var12;
            var1[2] = var3;
            var1[3] = var11;
            var1[4] = var17;
            var1[5] = var16;
            var1 = var6.bind(var9)(var4, var1);
            var _closure2_slot9 = var1;
            var6 = var9.useCallback;
            var4 = new Array(3);
            var4[0] = var16;
            var4[1] = var7;
            var4[2] = var3;
            var3 = function(arg1) {
                var8 = arg1;
                var _closure3_slot0 = var8;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var2);
                var6 = var7.remove;
                var5 = _closure2_slot1;
                var4 = _closure1_slot7;
                var4 = var4.InteractionModal;
                var4 = var6.bind(var7)(var5, var8, var4);
                var5 = _closure2_slot5;
                var4 = var5.filter;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var6 = var6.bind(var9)(var3, var4);
            var _closure2_slot10 = var6;
            var4 = var9.useCallback;
            var3 = new Array(7);
            var3[0] = var15;
            var10 = var10.label;
            var3[1] = var10;
            var3[2] = var12;
            var3[3] = var1;
            var3[4] = var7;
            var3[5] = var8;
            var3[6] = var6;
            var1 = function() {
                var2 = _closure1_slot7;
                var11 = var2.InteractionModal;
                var _closure3_slot0 = var11;
                var2 = {};
                var3 = _closure2_slot3;
                var2['channel'] = var3;
                var10 = _closure2_slot0;
                var2['uploadLimit'] = var10;
                var3 = function onDismissKeyboard() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideMediaKeyboardActionSheet;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['onDismissKeyboard'] = var3;
                var3 = _closure1_slot8;
                var2['onRestoreKeyboard'] = var3;
                var3 = function onSelectFiles(arg1) {
                    var3 = _closure2_slot9;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onSelectFiles'] = var3;
                var _closure3_slot1 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 28;
                var2 = var7[var1];
                var1 = undefined;
                var3 = var6.bind(var1)(var2);
                var2 = var3.dismissGlobalKeyboard;
                var2 = var2.bind(var3)();
                var5 = 27;
                var2 = var7[var5];
                var4 = var6.bind(var1)(var2);
                var3 = var4.showMediaKeyboardActionSheet;
                var2 = {};
                var12 = _closure2_slot8;
                var12 = var12.label;
                var2['title'] = var12;
                var12 = _closure2_slot3;
                var2['channel'] = var12;
                var2['draftType'] = var11;
                var2['uploadLimit'] = var10;
                var10 = true;
                var2['disableWhenReachedLimit'] = var10;
                var9 = _closure2_slot5;
                var2['includedUploadIds'] = var9;
                var9 = false;
                var2['showRemixButton'] = var9;
                var9 = function onAttachPress() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleAttachFile;
                    var2 = {};
                    var6 = _closure3_slot1;
                    var7 = var2;
                    var5 = copyDataProperties(var7, var6);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onAttachPress'] = var9;
                var9 = function onPressCamera(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleCameraDialog;
                    var2 = {};
                    var7 = _closure3_slot1;
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var6 = arg1;
                    var5 = 'previewType';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onPressCamera'] = var9;
                var9 = function onSelectItem(arg1, arg2, arg3) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var5 = arg2;
                        var _closure4_slot0 = var5;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 27;
                        var4 = var4[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.hideMediaKeyboardActionSheet;
                        var4 = var4.bind(var6)();
                        var4 = arg3;
                        if(var4) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 29;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.mediaNodeToUploadItem;
                        var5 = var3.bind(var4)(var5);
                        var4 = _closure2_slot9;
                        var3 = new Array(1);
                        var3[0] = var5;
                        var3 = var4.bind(var1)(var3);
                        _fun0008_ip = 65; continue _fun0008;
case 63:
                        var5 = _closure2_slot7;
                        var4 = var5.find;
                        var2 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 30;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.doesImageMatchUpload;
                            var1 = _closure4_slot0;
                            var1 = var1.node;
                            var2 = var1.image;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var2 = var4.bind(var5)(var2);
                        var4 = null;
                        if(!(var4 != var2)) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                        var3 = _closure2_slot10;
                        var2 = var2.id;
                        var2 = var3.bind(var1)(var2);
case 65:
                        return var1;
                    }
                };
                var2['onSelectItem'] = var9;
                var8 = function onViewAll() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleViewAllDialog;
                    var2 = {};
                    var7 = _closure3_slot1;
                    var8 = var2;
                    var6 = copyDataProperties(var8, var7);
                    var6 = _closure3_slot0;
                    var5 = 'draftType';
                    var2[var5] = var6;
                    var6 = _closure2_slot5;
                    var5 = 'includedUploadIds';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onViewAll'] = var8;
                var8 = var7[var5];
                var8 = var6.bind(var1)(var8);
                var8 = var8.hideMediaKeyboardActionSheet;
                var2['onClose'] = var8;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.hideMediaKeyboardActionSheet;
                var2['onBack'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var15 = var4.bind(var9)(var1, var3);
            var3 = 1;
            if(!(var3 === var12)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var1 = var8.length;
            if(!(var3 !== var1)) { _fun0006_ip = 69; continue _fun0006 }
case 67:
            var4 = _closure1_slot10;
            var3 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 31;
            var1 = var16[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.Stack;
            var1 = {};
            var10 = _closure1_slot1;
            var9 = 32;
            var9 = var16[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_12;
            var1['spacing'] = var9;
            var7 = var7.length;
            if(!(!(var7 >= var12))) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var10 = _closure1_slot9;
            var9 = _closure1_slot14;
            var7 = {};
            var7['openFilePicker'] = var15;
            var7['minValues'] = var14;
            var7['maxValues'] = var12;
            var7['maxSizeBytes'] = var11;
            var9 = var10.bind(var5)(var9, var7);
            _fun0006_ip = 72; continue _fun0006;
case 70:
            var11 = _closure1_slot9;
            var10 = _closure1_slot15;
            var7 = {};
            var9 = var11.bind(var5)(var10, var7);
case 72:
            var7 = new Array(2);
            var7[0] = var9;
            var10 = var8.length;
            var9 = 0;
            var9 = var10 > var9;
            if(!var9) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var12 = _closure1_slot9;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 33;
            var10 = var14[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.TableRowGroup;
            var10 = {};
            var14 = var8.map;
            var13 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot9;
                var4 = _closure1_slot16;
                var3 = {};
                var3['upload'] = var1;
                var2 = _closure2_slot10;
                var3['handleRemoveFile'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var13 = var14.bind(var8)(var13);
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 73:
            var7[1] = var9;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 75; continue _fun0006;
case 69:
            var4 = _closure1_slot9;
            var3 = _closure1_slot16;
            var2 = {};
            var7 = 0;
            var7 = var8[var7];
            var2['upload'] = var7;
            var2['handleRemoveFile'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 75:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();