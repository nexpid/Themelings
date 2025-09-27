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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var1 = function MainAreaCanUpload(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var10 = var1.openFilePicker;
            var13 = var1.minValues;
            var15 = var1.maxValues;
            var2 = var1.maxSizeBytes;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 9;
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
            var3 = _closure1_slot10;
            var9 = 10;
            var1 = var6[var9];
            var1 = var7.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['onPress'] = var10;
            var11 = _closure1_slot10;
            var9 = var6[var9];
            var9 = var7.bind(var4)(var9);
            var9 = var9.TableRow;
            var10 = var9.Icon;
            var9 = {};
            var14 = 11;
            var14 = var6[var14];
            var14 = var7.bind(var4)(var14);
            var14 = var14.FileUpIcon;
            var9['IconComponent'] = var14;
            var9 = var11.bind(var4)(var10, var9);
            var1['icon'] = var9;
            var14 = 12;
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
            if(!(!(var13 > var6))) { _fun0004_ip = 326; continue _fun0004 }
 254:
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
            _fun0004_ip = 474; continue _fun0004;
 326:
            if(!(var13 !== var15)) { _fun0004_ip = 404; continue _fun0004 }
 330:
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
            _fun0004_ip = 471; continue _fun0004;
 404:
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
 471:
            var6 = var7;
 474:
            var1['subLabel'] = var6;
            var1['start'] = var5;
            var1['end'] = var5;
            var1['arrow'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function MainAreaLimitReached() {
        var4 = _closure1_slot10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 10;
        var1 = var9[var5];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {'icon': null, 'label': null, 'subLabel': null, 'disabled': true, 'start': true, 'end': true};
        var7 = _closure1_slot10;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.TableRow;
        var6 = var5.Icon;
        var5 = {};
        var10 = 13;
        var10 = var9[var10];
        var10 = var8.bind(var3)(var10);
        var10 = var10.CircleCheckIcon;
        var5['IconComponent'] = var10;
        var5 = var7.bind(var3)(var6, var5);
        var1['icon'] = var5;
        var5 = 12;
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
    var _closure1_slot16 = var1;
    var1 = function File(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = var1.upload;
            var _closure2_slot0 = var5;
            var1 = var1.handleRemoveFile;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot12;
            var4 = undefined;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 10;
            var1 = var17[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var10 = _closure1_slot10;
            var7 = _closure1_slot1;
            var14 = 14;
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
            var13 = _closure1_slot10;
            var12 = _closure1_slot5;
            var11 = {};
            var16 = var16.defaultAttachmentIconWrapper;
            var11['style'] = var16;
            var16 = _closure1_slot10;
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
            if(!(var6 == var5)) { _fun0005_ip = 291; continue _fun0005 }
 234:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 12;
            var7 = var12[var6];
            var7 = var11.bind(var4)(var7);
            var10 = var7.intl;
            var7 = var10.string;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.ZMirp6;
            var5 = var7.bind(var10)(var6);
 291:
            var1['label'] = var5;
            var7 = _closure1_slot10;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 15;
            var5 = var12[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {'variant': 'tertiary', 'size': 'sm'};
            var14 = 'sm';
            var13 = _closure1_slot10;
            var9 = 16;
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
            var8 = 12;
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
    var _closure1_slot17 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': 32, 'alignItems': 'center'};
    var4['defaultAttachmentIconWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/FileUploadActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FileUploadActionComponent(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var10 = arg1;
            var3 = var10.type;
            var _closure2_slot0 = var3;
            var14 = var10.minValues;
            var12 = var10.maxValues;
            var _closure2_slot1 = var12;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 17;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var6.bind(var5)(var1);
            var1 = var6.useComponentStateContext;
            var6 = var1.bind(var6)();
            var7 = _closure1_slot1;
            var9 = 18;
            var1 = var4[var9];
            var15 = var7.bind(var5)(var1);
            var1 = null;
            var11 = var1 != var6;
            var8 = 'FileUploadActionComponent must be used within a ComponentStateContextProvider';
            var8 = var15.bind(var5)(var11, var8);
            var16 = var6.channelId;
            var _closure2_slot2 = var16;
            var4 = var4[var9];
            var8 = var7.bind(var5)(var4);
            var7 = var1 != var16;
            var4 = 'FileUploadActionComponent must be used inside a channel';
            var4 = var8.bind(var5)(var7, var4);
            var4 = var6.modal;
            var7 = var1 == var4;
            var17 = undefined;
            if(var7) { _fun0006_ip = 154; continue _fun0006 }
 148:
            var17 = var4.customId;
 154:
            var _closure2_slot3 = var17;
            var11 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = var8[var9];
            var15 = var11.bind(var5)(var4);
            var7 = var1 != var17;
            var4 = 'FileUploadActionComponent requires modalCustomId from context';
            var4 = var15.bind(var5)(var7, var4);
            var7 = _closure1_slot0;
            var4 = 19;
            var4 = var8[var4];
            var19 = var7.bind(var5)(var4);
            var18 = var19.useStateFromStores;
            var4 = _closure1_slot6;
            var15 = new Array(1);
            var15[0] = var4;
            var4 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var18.bind(var19)(var15, var4);
            var _closure2_slot4 = var15;
            var4 = var8[var9];
            var18 = var11.bind(var5)(var4);
            var11 = var1 != var15;
            var4 = 'FileUploadActionComponent requires a valid channel';
            var4 = var18.bind(var5)(var11, var4);
            var4 = 20;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.maxFileSize;
            var4 = var15.guild_id;
            var11 = var7.bind(var8)(var4);
            var _closure2_slot5 = var11;
            var4 = var6.useComponentState;
            var7 = var4.bind(var6)(var10, var5);
            var4 = var7.state;
            var _closure2_slot6 = var4;
            var8 = var7.executeStateUpdate;
            var _closure2_slot7 = var8;
            var19 = _closure1_slot4;
            var18 = var19.useMemo;
            var7 = new Array(2);
            var7[0] = var4;
            var7[1] = var3;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    var1 = var1 == var3;
                    var3 = undefined;
                    if(var1) { _fun0007_ip = 27; continue _fun0007 }
 18:
                    var1 = _closure2_slot6;
                    var3 = var1.type;
 27:
                    var1 = _closure2_slot0;
                    if(!(var3 !== var1)) { _fun0007_ip = 41; continue _fun0007 }
 35:
                    var1 = new Array(0);
                    _fun0007_ip = 51; continue _fun0007;
 41:
                    var2 = _closure2_slot6;
                    var1 = var2.uploadIds;
 51:
                    return var1;
                }
            };
            var7 = var18.bind(var19)(var4, var7);
            var _closure2_slot8 = var7;
            var4 = var6.getParents;
            var10 = var4.bind(var6)(var10);
            var6 = var1 == var10;
            var4 = undefined;
            if(var6) { _fun0006_ip = 393; continue _fun0006 }
 387:
            var6 = 0;
            var4 = var10[var6];
 393:
            var6 = var1 == var4;
            var18 = undefined;
            if(var6) { _fun0006_ip = 407; continue _fun0006 }
 402:
            var18 = var4.type;
 407:
            var10 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 21;
            var6 = var19[var6];
            var6 = var10.bind(var5)(var6);
            var6 = var6.ComponentType;
            var6 = var6.LABEL;
            var10 = undefined;
            if(!(var18 === var6)) { _fun0006_ip = 448; continue _fun0006 }
 445:
            var10 = var4;
 448:
            var _closure2_slot9 = var10;
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
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 424; continue _fun0008 }
 13:
                            var3 = var5.length;
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0008_ip = 263; continue _fun0008 }
 27:
                            var2 = _closure2_slot8;
                            var3 = var2.length;
                            var2 = var5.length;
                            var3 = var3 + var2;
                            var2 = _closure2_slot1;
                            if(!(!(var3 > var2))) { _fun0008_ip = 268; continue _fun0008 }
 59:
                            var2 = _closure1_slot13;
                            var4 = undefined;
                            var10 = var2.bind(var4)(var5);
                            var6 = var10.bind(var4)();
                            var2 = var6.done;
                            var8 = 23;
                            var7 = var6;
                            if(var2) { _fun0008_ip = 206; continue _fun0008 }
 91:
                            var2 = var7.value;
                            var11 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var11 = var11.bind(var4)(var6);
                            var6 = var11.getFileSize;
                            var2 = var2.uri;
                            var2 = var6.bind(var11)(var2);
                            SaveGenerator(address=133);
 131:
                            return var2;
 133:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0008_ip = 203; continue _fun0008 }
 139:
                            var6 = _closure2_slot5;
                            if(!(!(var2 > var6))) { _fun0008_ip = 164; continue _fun0008 }
 147:
                            var11 = var10.bind(var4)();
                            var6 = var11.done;
                            var7 = var11;
                            if(var6) { _fun0008_ip = 206; continue _fun0008 }
 162:
                            _fun0008_ip = 91; continue _fun0008;
 164:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 24;
                            var3 = var7[var3];
                            var7 = var6.bind(var4)(var3);
                            var6 = var7.showFileSizeExceededAlert;
                            var3 = _closure2_slot5;
                            var3 = var6.bind(var7)(var3, var2);
                            return var3;
 203:
                            return var2;
 206:
                            var3 = var5.map;
                            var2 = function(arg1) {
                                var2 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var1 = 25;
                                var1 = var7[var1];
                                var4 = undefined;
                                var3 = var2.bind(var4)(var1);
                                var2 = var3.makeComponentUploadId;
                                var1 = _closure2_slot3;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure1_slot1;
                                var2 = 26;
                                var2 = var7[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.setFile;
                                var2 = {};
                                var6 = _closure2_slot2;
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
                            var7 = var3.bind(var5)(var2);
                            var3 = _closure2_slot7;
                            var2 = {};
                            var5 = _closure2_slot0;
                            var2['type'] = var5;
                            var6 = _closure2_slot8;
                            var5 = var6.concat;
                            var5 = var5.bind(var6)(var7);
                            var2['uploadIds'] = var5;
                            var2 = var3.bind(var4)(var2);
 263:
                            var2 = undefined;
                            return var2;
 268:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 22;
                            var2 = var11[var2];
                            var10 = undefined;
                            var4 = var3.bind(var10)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var6 = _closure1_slot0;
                            var5 = 12;
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
                            var9 = _closure2_slot1;
                            var5['maxValues'] = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var2['body'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var2;
 424:
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
            var1 = new Array(7);
            var1[0] = var7;
            var1[1] = var12;
            var1[2] = var8;
            var1[3] = var3;
            var1[4] = var11;
            var1[5] = var17;
            var1[6] = var16;
            var1 = var6.bind(var9)(var4, var1);
            var _closure2_slot10 = var1;
            var6 = var9.useCallback;
            var4 = new Array(4);
            var4[0] = var16;
            var4[1] = var7;
            var4[2] = var8;
            var4[3] = var3;
            var3 = function(arg1) {
                var8 = arg1;
                var _closure3_slot0 = var8;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 26;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.remove;
                var4 = _closure2_slot2;
                var3 = _closure1_slot7;
                var3 = var3.InteractionModal;
                var3 = var6.bind(var7)(var4, var8, var3);
                var4 = _closure2_slot8;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = _closure2_slot7;
                var2 = {};
                var5 = _closure2_slot0;
                var2['type'] = var5;
                var2['uploadIds'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var6.bind(var9)(var3, var4);
            var _closure2_slot11 = var6;
            var4 = var7.map;
            var3 = function(arg1) {
                var5 = _closure1_slot8;
                var4 = var5.getUpload;
                var3 = _closure2_slot2;
                var1 = _closure1_slot7;
                var2 = var1.InteractionModal;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var8 = var4.bind(var7)(var3);
            var4 = var8.filter;
            var3 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var8 = var4.bind(var8)(var3);
            var _closure2_slot12 = var8;
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
                var3 = _closure2_slot4;
                var2['channel'] = var3;
                var10 = _closure2_slot1;
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
                var3 = _closure1_slot9;
                var2['onRestoreKeyboard'] = var3;
                var3 = function onSelectFiles(arg1) {
                    var3 = _closure2_slot10;
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
                var12 = _closure2_slot9;
                var12 = var12.label;
                var2['title'] = var12;
                var12 = _closure2_slot4;
                var2['channel'] = var12;
                var2['draftType'] = var11;
                var2['uploadLimit'] = var10;
                var10 = true;
                var2['disableWhenReachedLimit'] = var10;
                var9 = _closure2_slot8;
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
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
                        if(var4) { _fun0009_ip = 103; continue _fun0009 }
 50:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 29;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.mediaNodeToUploadItem;
                        var5 = var3.bind(var4)(var5);
                        var4 = _closure2_slot10;
                        var3 = new Array(1);
                        var3[0] = var5;
                        var3 = var4.bind(var1)(var3);
                        _fun0009_ip = 148; continue _fun0009;
 103:
                        var5 = _closure2_slot12;
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
                        if(!(var4 != var2)) { _fun0009_ip = 148; continue _fun0009 }
 134:
                        var3 = _closure2_slot11;
                        var2 = var2.id;
                        var2 = var3.bind(var1)(var2);
 148:
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
                    var6 = _closure2_slot8;
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
            if(!(var3 === var12)) { _fun0006_ip = 701; continue _fun0006 }
 689:
            var1 = var8.length;
            if(!(var3 !== var1)) { _fun0006_ip = 924; continue _fun0006 }
 701:
            var4 = _closure1_slot11;
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
            if(!(!(var7 >= var12))) { _fun0006_ip = 811; continue _fun0006 }
 773:
            var10 = _closure1_slot10;
            var9 = _closure1_slot15;
            var7 = {};
            var7['openFilePicker'] = var15;
            var7['minValues'] = var14;
            var7['maxValues'] = var12;
            var7['maxSizeBytes'] = var11;
            var9 = var10.bind(var5)(var9, var7);
            _fun0006_ip = 827; continue _fun0006;
 811:
            var11 = _closure1_slot10;
            var10 = _closure1_slot16;
            var7 = {};
            var9 = var11.bind(var5)(var10, var7);
 827:
            var7 = new Array(2);
            var7[0] = var9;
            var10 = var8.length;
            var9 = 0;
            var9 = var10 > var9;
            if(!var9) { _fun0006_ip = 908; continue _fun0006 }
 849:
            var12 = _closure1_slot10;
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
                var5 = _closure1_slot10;
                var4 = _closure1_slot17;
                var3 = {};
                var3['upload'] = var1;
                var2 = _closure2_slot11;
                var3['handleRemoveFile'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var13 = var14.bind(var8)(var13);
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
 908:
            var7[1] = var9;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 956; continue _fun0006;
 924:
            var4 = _closure1_slot10;
            var3 = _closure1_slot17;
            var2 = {};
            var7 = 0;
            var7 = var8[var7];
            var2['upload'] = var7;
            var2['handleRemoveFile'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 956:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();