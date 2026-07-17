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
        var1 = arg1;
        var14 = var1.openFilePicker;
        var11 = var1.minValues;
        var10 = var1.maxValues;
        var18 = var1.types;
        var2 = var1.maxSizeBytes;
        var7 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 8;
        var3 = var12[var1];
        var4 = undefined;
        var6 = var7.bind(var4)(var3);
        var3 = var6.formatSize;
        var1 = var12[var1];
        var1 = var7.bind(var4)(var1);
        var1 = var1.BYTE_IN_KB;
        var2 = var2 / var1;
        var5 = true;
        var1 = {'useKibibytes': true, 'useSpace': true};
        var17 = var3.bind(var6)(var2, var1);
        var3 = _closure1_slot9;
        var6 = 9;
        var1 = var12[var6];
        var1 = var7.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['onPress'] = var14;
        var14 = _closure1_slot9;
        var6 = var12[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.TableRow;
        var13 = var6.Icon;
        var6 = {};
        var15 = 10;
        var15 = var12[var15];
        var15 = var7.bind(var4)(var15);
        var15 = var15.FileUpIcon;
        var6['IconComponent'] = var15;
        var6 = var14.bind(var4)(var13, var6);
        var1['icon'] = var6;
        var6 = 11;
        var13 = var12[var6];
        var13 = var7.bind(var4)(var13);
        var15 = var13.intl;
        var14 = var15.format;
        var6 = var12[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.t;
        var13 = var6["/2JwTv"];
        var6 = {};
        var6['maxValues'] = var10;
        var6 = var14.bind(var15)(var13, var6);
        var1['label'] = var6;
        var6 = 12;
        var6 = var12[var6];
        var7 = var7.bind(var4)(var6);
        var6 = var7.getFileUploadComponentSubtitle;
        var21 = var7;
        var20 = var11;
        var19 = var10;
        var6 = var21[var6](var20, var19, var18, var17, var16);
        var1['subLabel'] = var6;
        var1['start'] = var5;
        var1['end'] = var5;
        var1['arrow'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
        var10 = 13;
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
        var6 = var6["0PhgpK"];
        var6 = var7.bind(var10)(var6);
        var1['label'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.HYg2Hn;
        var5 = var6.bind(var7)(var5);
        var1['subLabel'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function File(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            if(!(var6 == var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
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
            var6 = var6.ZMirp0;
            var5 = var7.bind(var10)(var6);
case 36:
            var1['label'] = var5;
            var7 = _closure1_slot9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 15;
            var5 = var12[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {'variant': 'tertiary', 'size': 'sm'};
            var14 = 'sm';
            var13 = _closure1_slot9;
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
            var8 = 11;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.N86XcP;
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
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/FileUploadActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FileUploadActionComponent(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg1;
            var15 = var9.minValues;
            var14 = var9.maxValues;
            var _closure2_slot0 = var14;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 17;
            var3 = var1[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.useComponentStateContext;
            var6 = var3.bind(var4)();
            var3 = _closure1_slot1;
            var22 = 18;
            var4 = var1[var22];
            var10 = var3.bind(var5)(var4);
            var4 = null;
            var8 = var4 != var6;
            var7 = 'FileUploadActionComponent must be used within a ComponentStateContextProvider';
            var7 = var10.bind(var5)(var8, var7);
            var18 = var6.channelId;
            var _closure2_slot1 = var18;
            var1 = var1[var22];
            var7 = var3.bind(var5)(var1);
            var3 = var4 != var18;
            var1 = 'FileUploadActionComponent must be used inside a channel';
            var1 = var7.bind(var5)(var3, var1);
            var1 = var6.modal;
            var3 = var4 == var1;
            var19 = undefined;
            if(var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var19 = var1.customId;
case 38:
            var _closure2_slot2 = var19;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = var7[var22];
            var10 = var8.bind(var5)(var1);
            var3 = var4 != var19;
            var1 = 'FileUploadActionComponent requires modalCustomId from context';
            var1 = var10.bind(var5)(var3, var1);
            var3 = _closure1_slot0;
            var1 = 19;
            var1 = var7[var1];
            var12 = var3.bind(var5)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var11.bind(var12)(var10, var1);
            var _closure2_slot3 = var17;
            var1 = var7[var22];
            var10 = var8.bind(var5)(var1);
            var8 = var4 != var17;
            var1 = 'FileUploadActionComponent requires a valid channel';
            var1 = var10.bind(var5)(var8, var1);
            var1 = 20;
            var1 = var7[var1];
            var10 = var3.bind(var5)(var1);
            var8 = var10.useFileTypeFiltering;
            var1 = var9.fileTypes;
            var1 = var8.bind(var10)(var1);
            var16 = var1.allowedExtensions;
            var _closure2_slot4 = var16;
            var12 = var1.typesFormattedString;
            var21 = var1.validateFilenames;
            var _closure2_slot5 = var21;
            var20 = var1.showInvalidFileTypeAlert;
            var _closure2_slot6 = var20;
            var10 = var1.mediaFilesAllowed;
            var _closure2_slot7 = var10;
            var1 = 21;
            var8 = var7[var1];
            var23 = var3.bind(var5)(var8);
            var11 = var23.getKestrelConfig;
            var8 = {};
            var24 = 'native.FileUploadActionComponent';
            var8['location'] = var24;
            var23 = var11.bind(var23)(var8);
            var1 = var7[var1];
            var11 = var3.bind(var5)(var1);
            var8 = var11.getEffectiveKestrelLimit;
            var1 = 22;
            var1 = var7[var1];
            var25 = var3.bind(var5)(var1);
            var24 = var25.maxFileSize;
            var1 = var17.guild_id;
            var1 = var24.bind(var25)(var1);
            var11 = var8.bind(var11)(var23, var1);
            var _closure2_slot8 = var11;
            var1 = 23;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useFileUploadComponentState;
            var1 = var1.bind(var3)(var9);
            var7 = var1.uploadIds;
            var _closure2_slot9 = var7;
            var3 = var1.setUploadIds;
            var _closure2_slot10 = var3;
            var8 = var1.currentUploads;
            var _closure2_slot11 = var8;
            var1 = var6.getParents;
            var9 = var1.bind(var6)(var9);
            var1 = var4 == var9;
            var6 = undefined;
            if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var1 = 0;
            var6 = var9[var1];
case 40:
            var1 = var4 == var6;
            var23 = undefined;
            if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var23 = var6.type;
case 42:
            var9 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = 24;
            var1 = var24[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.ComponentType;
            var9 = var1.LABEL;
            var1 = undefined;
            if(!(var23 === var9)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var1 = var6;
case 44:
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var22];
            var6 = var9.bind(var5)(var6);
            var4 = var4 != var1;
            var1 = 'FileUploadActionComponent must be used within a label Component';
            var1 = var6.bind(var5)(var4, var1);
            var9 = _closure1_slot4;
            var6 = var9.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                            var3 = var5.length;
                            var6 = 0;
                            if(!(var6 !== var3)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                            var3 = _closure2_slot9;
                            var4 = var3.length;
                            var3 = var5.length;
                            var4 = var4 + var3;
                            var3 = _closure2_slot0;
                            if(!(!(var4 > var3))) { _fun0006_ip = 50; continue _fun0006 }
case 7:
                            var3 = _closure1_slot12;
                            var4 = undefined;
                            var12 = var3.bind(var4)(var5);
                            var8 = var12.bind(var4)();
                            var3 = var8.done;
                            var11 = 26;
                            var10 = var8;
                            if(var3) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                            var3 = var10.value;
                            var13 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var11];
                            var13 = var13.bind(var4)(var8);
                            var8 = var13.getFileSize;
                            var3 = var3.uri;
                            var3 = var8.bind(var13)(var3);
                            SaveGenerator(address=135);
case 53:
                            return var3;
case 54:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                            if(var8) { _fun0006_ip = 22; continue _fun0006 }
case 55:
                            var8 = _closure2_slot8;
                            if(!(!(var3 > var8))) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                            var13 = var12.bind(var4)();
                            var8 = var13.done;
                            var10 = var13;
                            if(var8) { _fun0006_ip = 51; continue _fun0006 }
case 58:
                            _fun0006_ip = 52; continue _fun0006;
case 56:
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 27;
                            var7 = var10[var7];
                            var10 = var8.bind(var4)(var7);
                            var8 = var10.showFileSizeExceededAlert;
                            var7 = _closure2_slot8;
                            var7 = var8.bind(var10)(var7, var3);
                            return var7;
case 22:
                            return var3;
case 51:
                            var3 = _closure2_slot4;
                            var3 = var3.length;
                            if(!(var3 > var6)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                            var6 = _closure2_slot5;
                            var7 = var5.map;
                            var3 = function(arg1) {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 26;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.getFileFromUploadItem;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.filename;
                                return var1;
                            };
                            var3 = var7.bind(var5)(var3);
                            var3 = var6.bind(var4)(var3);
                            if(var3) { _fun0006_ip = 59; continue _fun0006 }
case 61:
                            var3 = _closure2_slot6;
                            var3 = var3.bind(var4)();
                            return var3;
case 59:
                            var3 = var5.map;
                            var2 = function(arg1) {
                                var2 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var1 = 12;
                                var1 = var7[var1];
                                var4 = undefined;
                                var3 = var2.bind(var4)(var1);
                                var2 = var3.makeComponentUploadId;
                                var1 = _closure2_slot2;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure1_slot1;
                                var2 = 28;
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
                                var6[6] = var1;
                                var2['file'] = var6;
                                var5 = _closure1_slot7;
                                var5 = var5.InteractionModal;
                                var2['draftType'] = var5;
                                var5 = false;
                                var2['allowOptimization'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var6 = var3.bind(var5)(var2);
                            var3 = _closure2_slot10;
                            var5 = _closure2_slot9;
                            var2 = var5.concat;
                            var2 = var2.bind(var5)(var6);
                            var2 = var3.bind(var4)(var2);
case 48:
                            var2 = undefined;
                            return var2;
case 50:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 25;
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
                            var7 = var7.wOr6hB;
                            var7 = var8.bind(var12)(var7);
                            var2['title'] = var7;
                            var7 = var11[var5];
                            var7 = var6.bind(var10)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var11[var5];
                            var5 = var6.bind(var10)(var5);
                            var5 = var5.t;
                            var6 = var5.dy6viJ;
                            var5 = {};
                            var9 = _closure2_slot0;
                            var5['maxValues'] = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var2['body'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var2;
case 46:
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
            var1 = new Array(9);
            var1[0] = var7;
            var1[1] = var14;
            var22 = var16.length;
            var1[2] = var22;
            var1[3] = var21;
            var1[4] = var3;
            var1[5] = var11;
            var1[6] = var20;
            var1[7] = var19;
            var1[8] = var18;
            var1 = var6.bind(var9)(var4, var1);
            var _closure2_slot12 = var1;
            var6 = var9.useCallback;
            var4 = new Array(3);
            var4[0] = var18;
            var4[1] = var7;
            var4[2] = var3;
            var3 = function(arg1) {
                var8 = arg1;
                var _closure3_slot0 = var8;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var2);
                var6 = var7.remove;
                var5 = _closure2_slot1;
                var4 = _closure1_slot7;
                var4 = var4.InteractionModal;
                var4 = var6.bind(var7)(var5, var8, var4);
                var5 = _closure2_slot9;
                var4 = var5.filter;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot10;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var6 = var6.bind(var9)(var3, var4);
            var _closure2_slot13 = var6;
            var4 = var9.useCallback;
            var3 = new Array(8);
            var3[0] = var17;
            var3[1] = var16;
            var3[2] = var14;
            var3[3] = var10;
            var3[4] = var1;
            var3[5] = var7;
            var3[6] = var8;
            var3[7] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure1_slot7;
                    var10 = var1.InteractionModal;
                    var _closure3_slot0 = var10;
                    var5 = {};
                    var1 = _closure2_slot3;
                    var5['channel'] = var1;
                    var1 = _closure2_slot4;
                    var5['extensions'] = var1;
                    var1 = _closure2_slot0;
                    var5['uploadLimit'] = var1;
                    var1 = function onDismissKeyboard() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideMediaKeyboardActionSheet;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var5['onDismissKeyboard'] = var1;
                    var1 = _closure1_slot8;
                    var5['onRestoreKeyboard'] = var1;
                    var1 = function onSelectFiles(arg1) {
                        var3 = _closure2_slot12;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onSelectFiles'] = var1;
                    var _closure3_slot1 = var5;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 30;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.dismissGlobalKeyboard;
                    var2 = var2.bind(var4)();
                    var2 = _closure2_slot7;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    if(var2) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var2 = 31;
                    var2 = var7[var2];
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.handleAttachFile;
                    var2 = {};
                    var13 = var2;
                    var12 = var5;
                    var5 = copyDataProperties(var13, var12);
                    var2 = var3.bind(var4)(var2);
                    _fun0007_ip = 64; continue _fun0007;
case 62:
                    var5 = 29;
                    var2 = var7[var5];
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.showMediaKeyboardActionSheet;
                    var2 = {};
                    var11 = _closure2_slot3;
                    var2['channel'] = var11;
                    var2['draftType'] = var10;
                    var10 = _closure2_slot4;
                    var2['extensions'] = var10;
                    var10 = _closure2_slot0;
                    var2['uploadLimit'] = var10;
                    var10 = true;
                    var2['disableWhenReachedLimit'] = var10;
                    var9 = _closure2_slot9;
                    var2['includedUploadIds'] = var9;
                    var9 = function onAttachPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 31;
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
                        var1 = 31;
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
                        var2[4] = var6;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onPressCamera'] = var9;
                    var9 = function onPressItem(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var5 = var1.item;
                            var _closure4_slot0 = var5;
                            var4 = var1.isIncluded;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 29;
                            var6 = var6[var1];
                            var1 = undefined;
                            var7 = var7.bind(var1)(var6);
                            var6 = var7.hideMediaKeyboardActionSheet;
                            var6 = var6.bind(var7)();
                            if(var4) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 31;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.mediaNodeToUploadItem;
                            var5 = var3.bind(var4)(var5);
                            var4 = _closure2_slot12;
                            var3 = new Array(1);
                            var3[0] = var5;
                            var3 = var4.bind(var1)(var3);
                            _fun0008_ip = 67; continue _fun0008;
case 65:
                            var5 = _closure2_slot11;
                            var4 = var5.find;
                            var2 = function(arg1) {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 32;
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
                            if(!(var4 != var2)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                            var3 = _closure2_slot13;
                            var2 = var2.id;
                            var2 = var3.bind(var1)(var2);
case 67:
                            return var1;
                        }
                    };
                    var2['onPressItem'] = var9;
                    var9 = function onViewAll() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 31;
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
                        var2[4] = var6;
                        var6 = _closure2_slot9;
                        var5 = 'includedUploadIds';
                        var2[4] = var6;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onViewAll'] = var9;
                    var8 = function onManageLimited() {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 31;
                        var2 = var8[var1];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var2);
                        var3 = var4.handleLimitedPickerDialog;
                        var2 = {};
                        var6 = 29;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.hideMediaKeyboardActionSheet;
                        var2['onDismissKeyboard'] = var6;
                        var5 = _closure1_slot8;
                        var2['onRestoreKeyboard'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onManageLimited'] = var8;
                    var8 = var7[var5];
                    var8 = var6.bind(var1)(var8);
                    var8 = var8.hideMediaKeyboardActionSheet;
                    var2['onClose'] = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.hideMediaKeyboardActionSheet;
                    var2['onBack'] = var5;
                    var2 = var3.bind(var4)(var2);
case 64:
                    return var1;
                }
            };
            var16 = var4.bind(var9)(var1, var3);
            var3 = 1;
            if(!(var3 === var14)) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var1 = var8.length;
            if(!(var3 !== var1)) { _fun0005_ip = 71; continue _fun0005 }
case 69:
            var4 = _closure1_slot10;
            var3 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 33;
            var1 = var17[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.Stack;
            var1 = {};
            var10 = _closure1_slot1;
            var9 = 34;
            var9 = var17[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.space;
            var9 = var9.PX_12;
            var1['spacing'] = var9;
            var7 = var7.length;
            if(!(!(var7 >= var14))) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var10 = _closure1_slot9;
            var9 = _closure1_slot14;
            var7 = {};
            var7['openFilePicker'] = var16;
            var7['minValues'] = var15;
            var7['maxValues'] = var14;
            var7['types'] = var12;
            var7['maxSizeBytes'] = var11;
            var9 = var10.bind(var5)(var9, var7);
            _fun0005_ip = 74; continue _fun0005;
case 72:
            var11 = _closure1_slot9;
            var10 = _closure1_slot15;
            var7 = {};
            var9 = var11.bind(var5)(var10, var7);
case 74:
            var7 = new Array(2);
            var7[0] = var9;
            var10 = var8.length;
            var9 = 0;
            var9 = var10 > var9;
            if(!var9) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var12 = _closure1_slot9;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 35;
            var10 = var14[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.TableRowGroup;
            var10 = {};
            var14 = true;
            var10['hasIcons'] = var14;
            var14 = var8.map;
            var13 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot9;
                var4 = _closure1_slot16;
                var3 = {};
                var3['upload'] = var1;
                var2 = _closure2_slot13;
                var3['handleRemoveFile'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var13 = var14.bind(var8)(var13);
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 75:
            var7[1] = var9;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0005_ip = 77; continue _fun0005;
case 71:
            var4 = _closure1_slot9;
            var3 = _closure1_slot16;
            var2 = {};
            var7 = 0;
            var7 = var8[var7];
            var2['upload'] = var7;
            var2['handleRemoveFile'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 77:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();