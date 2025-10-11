// app/modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx
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
            var9 = _closure1_slot29;
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
            var7 = _closure1_slot29;
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
    var _closure1_slot28 = var1;
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
    var _closure1_slot29 = var1;
    var1 = function getGuildOrFolderLabel(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = var2.type;
            var1 = _closure1_slot8;
            var1 = var1.GUILD;
            if(!(var4 !== var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = var2.type;
            var1 = _closure1_slot8;
            var4 = var1.FOLDER;
            var9 = undefined;
            var1 = undefined;
            if(!(var5 === var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = var2.name;
            var5 = null;
            if(!(var5 == var4)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 11;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.ebAnWF;
            var4 = var6.bind(var7)(var5);
case 40:
            var1 = var4;
case 38:
            _fun0004_ip = 42; continue _fun0004;
case 36:
            var5 = _closure1_slot6;
            var4 = var5.getGuild;
            var2 = var2.id;
            var5 = var4.bind(var5)(var2);
            var4 = null;
            var6 = var4 == var5;
            var7 = undefined;
            var2 = undefined;
            if(var6) { _fun0004_ip = 15; continue _fun0004 }
case 43:
            var2 = var5.name;
case 15:
            if(!(var4 == var2)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 11;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.fKYRlJ;
            var2 = var4.bind(var5)(var3);
case 44:
            var1 = var2;
case 42:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function getDropIndex(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var8 = arg2;
            var3 = arg3;
            var2 = 'self';
            if(!(var2 === var3)) { _fun0005_ip = 29; continue _fun0005 }
case 46:
            var8 = var1;
case 29:
            var2 = _closure1_slot28;
            var4 = _closure1_slot7;
            var1 = var4.getFlattenedGuildFolderList;
            var1 = var1.bind(var4)();
            var7 = undefined;
            var6 = var2.bind(var7)(var1);
            var4 = var6.bind(var7)();
            var1 = var4.done;
            var2 = -1;
            var5 = var4;
            var4 = var2;
            var2 = var4;
            if(var1) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var9 = var4 + 1;
            var1 = var5.value;
            var10 = var1.id;
            var1 = var8.id;
            var2 = var9;
            if(!(var10 !== var1)) { _fun0005_ip = 47; continue _fun0005 }
case 49:
            var10 = var6.bind(var7)();
            var1 = var10.done;
            var5 = var10;
            var4 = var9;
            var2 = var4;
            if(!var1) { _fun0005_ip = 48; continue _fun0005 }
case 47:
            var1 = 'after';
            if(!(var1 !== var3)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var1 = 'convert-after';
            if(!(var1 !== var3)) { _fun0005_ip = 50; continue _fun0005 }
case 52:
            return var2;
case 50:
            var1 = 1;
            var1 = var2 + var1;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function triggerHapticsAndAnnouncementsIfNecessary(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = var2.type;
            var10 = 'drag-start';
            if(!(var10 !== var3)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var6 = 'drag-move';
            if(!(var6 !== var3)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var1 = 'drag-drop';
            if(!(var1 === var3)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var4 = _closure1_slot15;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 9;
            var3 = var11[var3];
            var8 = undefined;
            var3 = var9.bind(var8)(var3);
            var3 = var3.HapticFeedbackTypes;
            var3 = var3.DRAG_AND_DROP_END;
            var3 = var4.bind(var8)(var3);
            var4 = _closure1_slot15;
            var3 = var4.flush;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot16;
            var1 = var3.flush;
            var1 = var1.bind(var3)();
            var1 = 10;
            var1 = var11[var1];
            var1 = var9.bind(var8)(var1);
            var4 = var1.AccessibilityAnnouncer;
            var3 = var4.announce;
            var1 = 11;
            var5 = var11[var1];
            var5 = var9.bind(var8)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var1 = var11[var1];
            var1 = var9.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.lMkmz8;
            var1 = var5.bind(var7)(var1);
            var1 = var3.bind(var4)(var1);
            _fun0006_ip = 57; continue _fun0006;
case 55:
            var7 = _closure1_slot17;
            var5 = null;
            var8 = var5 == var7;
            var4 = undefined;
            var3 = undefined;
            if(var8) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var3 = var7.type;
case 59:
            if(!(var6 === var3)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var3 = _closure1_slot17;
            var3 = var3.overNode;
            var7 = var3.id;
            var3 = var2.overNode;
            var3 = var3.id;
            if(!(var7 === var3)) { _fun0006_ip = 61; continue _fun0006 }
case 63:
            var3 = _closure1_slot17;
            var7 = var3.overState;
            var3 = var2.overState;
            if(!(var7 !== var3)) { _fun0006_ip = 57; continue _fun0006 }
case 61:
            var7 = _closure1_slot17;
            var8 = var5 == var7;
            var3 = undefined;
            if(var8) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var3 = var7.type;
case 64:
            if(!(var6 !== var3)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var8 = _closure1_slot31;
            var7 = var2.dragNode;
            var6 = var2.dragNode;
            var3 = 'self';
            var6 = var8.bind(var4)(var7, var6, var3);
            _fun0006_ip = 68; continue _fun0006;
case 66:
            var9 = _closure1_slot31;
            var3 = _closure1_slot17;
            var8 = var3.dragNode;
            var3 = _closure1_slot17;
            var7 = var3.overNode;
            var3 = _closure1_slot17;
            var3 = var3.overState;
            var6 = var9.bind(var4)(var8, var7, var3);
case 68:
            var9 = _closure1_slot31;
            var8 = var2.dragNode;
            var7 = var2.overNode;
            var3 = var2.overState;
            var3 = var9.bind(var4)(var8, var7, var3);
            var7 = _closure1_slot17;
            var8 = var5 == var7;
            var9 = undefined;
            if(var8) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var9 = var7.type;
case 69:
            var8 = 'self';
            var7 = var8;
            if(!(var10 !== var9)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var10 = _closure1_slot17;
            var11 = var5 == var10;
            var9 = undefined;
            if(var11) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var9 = var10.overState;
case 73:
            var10 = var5 != var9;
            if(!var10) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var8 = var9;
case 75:
            var7 = var8;
case 71:
            if(!(var6 === var3)) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var3 = _closure1_slot33;
            var6 = var2.overState;
            var6 = var3.bind(var4)(var6);
            var3 = var3.bind(var4)(var7);
            if(!(var6 !== var3)) { _fun0006_ip = 57; continue _fun0006 }
case 77:
            var6 = _closure1_slot15;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 9;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.HapticFeedbackTypes;
            var3 = var3.DRAG_AND_DROP_MOVE;
            var3 = var6.bind(var4)(var3);
            var3 = var2.dragNode;
            var11 = var2.overNode;
            var7 = var2.overState;
            var3 = 'convert-before';
            if(!(var3 !== var7)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var3 = 'convert-after';
            if(!(var3 !== var7)) { _fun0006_ip = 79; continue _fun0006 }
case 81:
            var3 = 'drop-into';
            if(!(var3 !== var7)) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var3 = 'before';
            if(!(var3 !== var7)) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var6 = 'after';
            var3 = undefined;
            if(!(var6 === var7)) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 11;
            var8 = var10[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.w8FN9/;
            var6 = {};
            var10 = _closure1_slot30;
            var10 = var10.bind(var4)(var11);
            var6['itemName'] = var10;
            var3 = var8.bind(var9)(var7, var6);
            _fun0006_ip = 86; continue _fun0006;
case 84:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 11;
            var8 = var10[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.A5aDw8;
            var6 = {};
            var10 = _closure1_slot30;
            var10 = var10.bind(var4)(var11);
            var6['itemName'] = var10;
            var3 = var8.bind(var9)(var7, var6);
            _fun0006_ip = 86; continue _fun0006;
case 82:
            var8 = var11.type;
            var6 = _closure1_slot8;
            var7 = var6.FOLDER;
            var6 = undefined;
            if(!(var8 === var7)) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 11;
            var9 = var12[var7];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var8 = var7.uLDoxc;
            var7 = {};
            var12 = var11.name;
            var7['folderName'] = var12;
            var6 = var9.bind(var10)(var8, var7);
case 88:
            var3 = var6;
            _fun0006_ip = 86; continue _fun0006;
case 79:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 11;
            var8 = var10[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.qiQ0QE;
            var6 = {};
            var10 = _closure1_slot30;
            var10 = var10.bind(var4)(var11);
            var6['itemName'] = var10;
            var3 = var8.bind(var9)(var7, var6);
case 86:
            if(!(var5 != var3)) { _fun0006_ip = 57; continue _fun0006 }
case 90:
            var1 = _closure1_slot16;
            var1 = var1.bind(var4)(var3);
            _fun0006_ip = 57; continue _fun0006;
case 53:
            var4 = _closure1_slot30;
            var3 = var2.node;
            var5 = undefined;
            var10 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var10)) { _fun0006_ip = 91; continue _fun0006 }
case 92:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 10;
            var3 = var11[var3];
            var3 = var7.bind(var5)(var3);
            var6 = var3.AccessibilityAnnouncer;
            var4 = var6.announce;
            var3 = 11;
            var8 = var11[var3];
            var8 = var7.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var3 = var11[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var7 = var3.vHD/JS;
            var3 = {};
            var3['itemName'] = var10;
            var3 = var8.bind(var9)(var7, var3);
            var3 = var4.bind(var6)(var3);
case 91:
            var4 = _closure1_slot15;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.HapticFeedbackTypes;
            var3 = var3.DRAG_AND_DROP_START;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot15;
            var1 = var3.flush;
            var1 = var1.bind(var3)();
case 57:
            var5 = var2.type;
            var1 = undefined;
            var4 = 'drag-drop';
            var3 = undefined;
            if(!(var4 !== var5)) { _fun0006_ip = 93; continue _fun0006 }
case 94:
            var3 = var2;
case 93:
            _closure1_slot17 = var3;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function isConvertOverState(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0007_ip = 95; continue _fun0007 }
case 96:
            var3 = var4.startsWith;
            var2 = 'convert';
            var1 = var3.bind(var4)(var2);
case 95:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function getItemAndNodeFromTouchEvent(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot9;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var3 = var1.dragRegion;
            var2 = var1.scrollPosition;
            var1 = var2.get;
            var2 = var1.bind(var2)();
            var1 = arg1;
            var10 = var2 + var1;
            var1 = arg2;
            var2 = var10;
            if(!var1) { _fun0008_ip = 97; continue _fun0008 }
case 98:
            var1 = var3.get;
            var1 = var1.bind(var3)();
            var3 = global;
            var5 = var3.Math;
            var4 = var5.max;
            var9 = var3.Math;
            var8 = var9.min;
            var3 = var1.max;
            var6 = 2;
            var3 = var3 - var6;
            var3 = var8.bind(var9)(var10, var3);
            var1 = var1.min;
            var1 = var1 + var6;
            var2 = var4.bind(var5)(var3, var1);
case 97:
            var1 = arg3;
            var5 = var1.current;
            var8 = null;
            var3 = var8 == var5;
            var6 = undefined;
            var1 = undefined;
            if(var3) { _fun0008_ip = 99; continue _fun0008 }
case 52:
            var4 = var5.getSectionItemFromPosition;
            var3 = arg4;
            var1 = var4.bind(var5)(var2, var3);
case 99:
            if(!(var8 == var1)) { _fun0008_ip = 100; continue _fun0008 }
case 101:
            var3 = {};
            var3['item'] = var6;
            var4 = 0;
            var3['positionPercentage'] = var4;
            var1 = var3;
case 100:
            var5 = var1.item;
            var4 = var1.positionPercentage;
            var1 = var8 != var5;
            var3 = undefined;
            if(!var1) { _fun0008_ip = 102; continue _fun0008 }
case 103:
            var9 = var8 == var5;
            var1 = undefined;
            if(var9) { _fun0008_ip = 104; continue _fun0008 }
case 105:
            var10 = var5.section;
            var9 = _closure1_slot11;
            var9 = var9.GUILDS;
            var9 = var10 < var9;
            var1 = undefined;
            if(var9) { _fun0008_ip = 104; continue _fun0008 }
case 106:
            var10 = _closure1_slot7;
            var9 = var10.getFastListGuildFolders;
            var10 = var9.bind(var10)();
            var11 = var5.section;
            var9 = _closure1_slot11;
            var9 = var9.GUILDS;
            var9 = var11 - var9;
            var9 = var10[var9];
            var10 = var8 != var9;
            var1 = undefined;
            if(!var10) { _fun0008_ip = 104; continue _fun0008 }
case 107:
            var11 = var5.type;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = 12;
            var10 = var10[var13];
            var10 = var12.bind(var6)(var10);
            var10 = var10.FastListItemTypes;
            var10 = var10.SECTION;
            if(!(var10 !== var11)) { _fun0008_ip = 108; continue _fun0008 }
case 109:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var10 = var12.bind(var6)(var10);
            var10 = var10.FastListItemTypes;
            var10 = var10.ITEM;
            var1 = undefined;
            if(!(var10 === var11)) { _fun0008_ip = 104; continue _fun0008 }
case 110:
            var11 = var9.type;
            var10 = _closure1_slot8;
            var10 = var10.ROOT;
            var1 = undefined;
            if(!(var11 !== var10)) { _fun0008_ip = 104; continue _fun0008 }
case 111:
            var12 = var9.type;
            var10 = _closure1_slot8;
            var11 = var10.FOLDER;
            var10 = var9;
            if(!(var12 === var11)) { _fun0008_ip = 112; continue _fun0008 }
case 113:
            var12 = var9.children;
            var11 = var5.item;
            var12 = var12[var11];
            var11 = var8 == var12;
            var10 = var12;
            var1 = undefined;
            if(var11) { _fun0008_ip = 104; continue _fun0008 }
case 112:
            var12 = var10.type;
            var11 = _closure1_slot8;
            var11 = var11.GUILD;
            var1 = undefined;
            if(!(var12 === var11)) { _fun0008_ip = 104; continue _fun0008 }
case 114:
            var1 = var10;
            _fun0008_ip = 104; continue _fun0008;
case 108:
            if(!(var8 != var9)) { _fun0008_ip = 115; continue _fun0008 }
case 71:
            var8 = var9.type;
            var7 = _closure1_slot8;
            var7 = var7.FOLDER;
            var1 = var9;
            if(!(var8 !== var7)) { _fun0008_ip = 104; continue _fun0008 }
case 115:
            var1 = undefined;
case 104:
            var3 = var1;
case 102:
            var1 = {};
            var1['item'] = var5;
            var5 = global;
            var7 = var5.Math;
            var6 = var7.floor;
            var5 = 100;
            var4 = var5 * var4;
            var4 = var6.bind(var7)(var4);
            var4 = var4 / var5;
            var1['overPercentage'] = var4;
            var1['node'] = var3;
            var1['pointerPosition'] = var2;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
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
    var4 = var4.Dimensions;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildsNodeType;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var _closure1_slot9 = var9;
    var4 = 6;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var8 = var10.GUILD_ITEM_MARGIN;
    var4 = var10.GUILD_ITEM_SIZE;
    var _closure1_slot10 = var4;
    var10 = var10.FastListRenderSections;
    var _closure1_slot11 = var10;
    var _closure1_slot12 = var9;
    var4 = var4 + var8;
    var4 = var4 + var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 7;
    var9 = var6[var8];
    var11 = var5.bind(var1)(var9);
    var9 = var11.makeMutable;
    var10 = -1;
    var9 = var9.bind(var11)(var10);
    var4['pan'] = var9;
    var9 = var6[var8];
    var12 = var5.bind(var1)(var9);
    var11 = var12.makeMutable;
    var9 = new Array(0);
    var9 = var11.bind(var12)(var9);
    var4['itemMeasurements'] = var9;
    var8 = var6[var8];
    var9 = var5.bind(var1)(var8);
    var8 = var9.makeMutable;
    var8 = var8.bind(var9)(var10);
    var4['activeIndex'] = var8;
    var _closure1_slot14 = var4;
    var4 = 8;
    var8 = var6[var4];
    var10 = var7.bind(var1)(var8);
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.triggerHapticFeedback;
    var8 = 16;
    var8 = var10.bind(var1)(var9, var8);
    var _closure1_slot15 = var8;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var7 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.AccessibilityAnnouncer;
        var3 = var4.announce;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4 = 500;
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot16 = var4;
    var _closure1_slot17 = var1;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx1({timeSincePreviousFrame:timeSincePreviousFrame}){const{gestureState,pushScroll,scrollTo,scrollerRef,roundToNearestPixel,scrollPosition}=this.__closure;if(timeSincePreviousFrame==null||timeSincePreviousFrame<=0||gestureState.get().mode!=='drag'){return;}const scrollSpeed=1000*pushScroll.get();const timeInSeconds=timeSincePreviousFrame/1000;scrollTo(scrollerRef,0,Math.max(roundToNearestPixel(scrollPosition.get()+timeInSeconds*scrollSpeed),0),false);}";
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx2(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==null||gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}";
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx3(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;console.log('ZZZZZZ - LongPress.onEnd');if(gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}";
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx4({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,runOnJS,handlePress}=this.__closure;if(gestureState.get().mode!=='cancel'){runOnJS(handlePress)(absoluteX,absoluteY);}}";
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx5(event,manager){const{gestureState}=this.__closure;if(gestureState.get().mode==='cancel'){manager.fail();}}";
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx6(event,manager){const{scrollPosition,gestureState,dragRegion,runOnJS,handleTouchesDown}=this.__closure;var _touch$absoluteY;const touch=event.changedTouches[0];const pointerY=((_touch$absoluteY=touch===null||touch===void 0?void 0:touch.absoluteY)!==null&&_touch$absoluteY!==void 0?_touch$absoluteY:0)+scrollPosition.get();if(touch==null||gestureState.get().mode==='cancel'||pointerY<dragRegion.get().min||pointerY>dragRegion.get().max){manager.fail();}else if(event.changedTouches.length===1){runOnJS(handleTouchesDown)(touch.absoluteX,touch.absoluteY);}}";
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx7(){const{runOnJS,handleGestureEnd}=this.__closure;runOnJS(handleGestureEnd)('cancel');}";
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx8(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;console.log('ZZZZZZ - Pan.onEnd');if(gestureState.get().mode==='drag'){runOnJS(handleGestureEnd)('drop');}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleGestureEnd)('contextmenu-open');}else{runOnJS(handleGestureEnd)('cancel');}}";
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx9({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,listInsets,GESTURE_ACCELERATION_RANGE,windowSize,runOnJS,handleGuildDrag,handleContextMenuDrag}=this.__closure;if(gestureState.get().mode==='drag'){if(absoluteX!==gestureState.get().absoluteX||absoluteY!==gestureState.get().absoluteY){let{initialY:initialY}=gestureState.get();const minPushRange=listInsets.get().start+GESTURE_ACCELERATION_RANGE;const maxPushRange=windowSize-listInsets.get().end-GESTURE_ACCELERATION_RANGE;if(initialY<minPushRange&&absoluteY>initialY){initialY=absoluteY;}else if(initialY>maxPushRange&&absoluteY<initialY){initialY=absoluteY;}gestureState.set({...gestureState.get(),absoluteX:absoluteX,absoluteY:absoluteY,initialY:initialY});runOnJS(handleGuildDrag)(absoluteY);}}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleContextMenuDrag)(absoluteX,absoluteY);}}";
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = "function useGuildsBarGestureTsx10(event,manager){const{gestureState,dragDropInProgress,DRAG_GESTURE_MINIMUM_DISTANCE,runOnJS,handleContextMenuDrag,handleGuildDrag}=this.__closure;const touch=event.changedTouches[0];if(gestureState.get().mode!=='pressed'||touch==null){if(gestureState.get().mode==='cancel'||touch==null){manager.fail();dragDropInProgress.set(false);}return;}const diffX=touch.absoluteX-gestureState.get().initialX;const absDiffY=Math.abs(touch.absoluteY-gestureState.get().absoluteY);if(diffX>DRAG_GESTURE_MINIMUM_DISTANCE&&diffX>absDiffY){gestureState.set({...gestureState.get(),mode:'contextmenu',absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});dragDropInProgress.set(false);manager.activate();runOnJS(handleContextMenuDrag)(touch.absoluteX,touch.absoluteY);}else if(absDiffY>DRAG_GESTURE_MINIMUM_DISTANCE){gestureState.set({...gestureState.get(),mode:'drag',initialX:touch.absoluteX,initialY:touch.absoluteY,absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});manager.activate();dragDropInProgress.set(true);runOnJS(handleGuildDrag)(touch.absoluteY);}}";
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildsBarGesture() {
        var10 = _closure1_slot4;
        var4 = var10.useContext;
        var9 = _closure1_slot0;
        var21 = _closure1_slot2;
        var3 = 13;
        var3 = var21[var3];
        var8 = undefined;
        var3 = var9.bind(var8)(var3);
        var3 = var3.HomeDrawerStateContext;
        var3 = var4.bind(var10)(var3);
        var6 = var3.gesture;
        var _closure2_slot0 = var6;
        var17 = 7;
        var3 = var21[var17];
        var4 = var9.bind(var8)(var3);
        var3 = var4.useAnimatedRef;
        var5 = var3.bind(var4)();
        var _closure2_slot1 = var5;
        var4 = var10.useRef;
        var3 = null;
        var4 = var4.bind(var10)(var3);
        var _closure2_slot2 = var4;
        var3 = var21[var17];
        var11 = var9.bind(var8)(var3);
        var7 = var11.useSharedValue;
        var3 = 0;
        var23 = var7.bind(var11)(var3);
        var _closure2_slot3 = var23;
        var14 = _closure1_slot12;
        var3 = 14;
        var7 = var21[var3];
        var7 = var9.bind(var8)(var7);
        var11 = var7.shallow;
        var7 = function(arg1) {
            var1 = arg1;
            var7 = var1.gestureState;
            var6 = var1.scrollPosition;
            var5 = var1.dragRegion;
            var4 = var1.windowSize;
            var3 = var1.listInsets;
            var2 = var1.dragDropInProgress;
            var1 = {};
            var1['gestureState'] = var7;
            var1['scrollPosition'] = var6;
            var1['dragRegion'] = var5;
            var1['windowSize'] = var4;
            var1['listInsets'] = var3;
            var1['dragDropInProgress'] = var2;
            return var1;
        };
        var13 = var14.bind(var8)(var7, var11);
        var18 = var13.gestureState;
        var _closure2_slot4 = var18;
        var7 = var13.scrollPosition;
        var _closure2_slot5 = var7;
        var19 = var13.dragRegion;
        var _closure2_slot6 = var19;
        var11 = var13.windowSize;
        var _closure2_slot7 = var11;
        var12 = var13.listInsets;
        var _closure2_slot8 = var12;
        var20 = var13.dragDropInProgress;
        var _closure2_slot9 = var20;
        var3 = var21[var3];
        var3 = var9.bind(var8)(var3);
        var13 = var3.shallow;
        var3 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = var2.dropSpecs;
                var5 = var2.dragSpecs;
                var2 = global;
                var3 = var2.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var8 = var4;
                var3 = new var8[var3](var7);
                var4 = var3 instanceof Object ? var3 : var4;
                var3 = null;
                if(!(var3 != var5)) { _fun0009_ip = 35; continue _fun0009 }
case 5:
                var6 = var4.add;
                var5 = var5.item;
                var5 = var5.recyclerKey;
                var5 = var6.bind(var4)(var5);
case 35:
                if(!(var3 != var1)) { _fun0009_ip = 116; continue _fun0009 }
case 117:
                var3 = var4.add;
                var1 = var1.dragRecyclerKey;
                var1 = var3.bind(var4)(var1);
case 116:
                var3 = var4.size;
                var1 = 0;
                var3 = var3 > var1;
                var1 = undefined;
                if(!var3) { _fun0009_ip = 118; continue _fun0009 }
case 119:
                var3 = var2.Array;
                var2 = var3.from;
                var1 = var2.bind(var3)(var4);
case 118:
                return var1;
            }
        };
        var3 = var14.bind(var8)(var3, var13);
        var14 = var10.useEffect;
        var13 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = _closure2_slot2;
                var7 = var1.current;
                var3 = null;
                var4 = var3 == var7;
                var1 = undefined;
                var5 = undefined;
                if(var4) { _fun0010_ip = 5; continue _fun0010 }
case 37:
                var6 = var7.computeScrollPosition;
                var4 = _closure1_slot11;
                var4 = var4.GUILDS;
                var5 = var6.bind(var7)(var4);
case 5:
                var4 = _closure2_slot2;
                var6 = var4.current;
                var7 = var3 == var6;
                var4 = undefined;
                if(var7) { _fun0010_ip = 120; continue _fun0010 }
case 30:
                var6 = var6.props;
                var4 = var6.sections;
case 120:
                if(!(var3 == var4)) { _fun0010_ip = 9; continue _fun0010 }
case 121:
                var4 = new Array(0);
case 9:
                var6 = var4.length;
                var7 = 1;
                var9 = var6 - var7;
                var8 = var4[var9];
                var10 = var3 != var8;
                var4 = 0;
                if(!var10) { _fun0010_ip = 122; continue _fun0010 }
case 123:
                var4 = var8;
case 122:
                var8 = var4 - var7;
                var2 = _closure2_slot2;
                var7 = var2.current;
                var4 = var3 == var7;
                var2 = undefined;
                if(var4) { _fun0010_ip = 124; continue _fun0010 }
case 125:
                var4 = var7.computeScrollPosition;
                var2 = var4.bind(var7)(var9, var8);
case 124:
                var7 = var3 == var5;
                var4 = undefined;
                if(var7) { _fun0010_ip = 14; continue _fun0010 }
case 126:
                var4 = var5.scrollPosition;
case 14:
                var5 = var3 != var4;
                var6 = 0;
                if(!var5) { _fun0010_ip = 127; continue _fun0010 }
case 128:
                var6 = var4;
case 127:
                var3 = var3 != var2;
                var5 = inf;
                if(!var3) { _fun0010_ip = 129; continue _fun0010 }
case 130:
                var3 = var2.scrollPosition;
                var2 = var2.size;
                var5 = var3 + var2;
case 129:
                var3 = _closure1_slot9;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var4 = var2.dragRegion;
                var2 = var4.get;
                var3 = var2.bind(var4)();
                var2 = var3.min;
                var2 = var6 === var2;
                if(!var2) { _fun0010_ip = 131; continue _fun0010 }
case 132:
                var3 = var3.max;
                var2 = var5 === var3;
case 131:
                if(var2) { _fun0010_ip = 10; continue _fun0010 }
case 63:
                var3 = var4.set;
                var2 = {};
                var2['min'] = var6;
                var2['max'] = var5;
                var2 = var3.bind(var4)(var2);
case 10:
                return var1;
            }
        };
        var13 = var14.bind(var10)(var13);
        var13 = var21[var17];
        var15 = var9.bind(var8)(var13);
        var14 = var15.useFrameCallback;
        var13 = function J(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var12 = var1.timeSincePreviousFrame;
                var1 = null;
                if(!(var1 != var12)) { _fun0011_ip = 133; continue _fun0011 }
case 134:
                var6 = 0;
                if(!(!(var12 <= var6))) { _fun0011_ip = 133; continue _fun0011 }
case 95:
                var2 = _closure2_slot4;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var2 = var1.mode;
                var1 = 'drag';
                if(!(var1 === var2)) { _fun0011_ip = 133; continue _fun0011 }
case 41:
                var2 = _closure2_slot3;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 1000;
                var11 = var1 * var2;
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 7;
                var2 = var14[var2];
                var9 = undefined;
                var5 = var3.bind(var9)(var2);
                var4 = var5.scrollTo;
                var3 = _closure2_slot1;
                var2 = global;
                var7 = var2.Math;
                var2 = var7.max;
                var13 = _closure1_slot1;
                var8 = 15;
                var8 = var14[var8];
                var8 = var13.bind(var9)(var8);
                var13 = _closure2_slot5;
                var10 = var13.get;
                var10 = var10.bind(var13)();
                var1 = var12 / var1;
                var1 = var1 * var11;
                var1 = var10 + var1;
                var1 = var8.bind(var9)(var1);
                var16 = var2.bind(var7)(var1, var6);
                var15 = false;
                var19 = var5;
                var18 = var3;
                var17 = 0;
                var1 = var19[var4](var18, var17, var16, var15, var14);
case 133:
                var1 = undefined;
                return var1;
            }
        };
        var16 = {};
        var16['gestureState'] = var18;
        var16['pushScroll'] = var23;
        var17 = var21[var17];
        var17 = var9.bind(var8)(var17);
        var17 = var17.scrollTo;
        var16['scrollTo'] = var17;
        var16['scrollerRef'] = var5;
        var22 = _closure1_slot1;
        var17 = 15;
        var17 = var21[var17];
        var17 = var22.bind(var8)(var17);
        var16['roundToNearestPixel'] = var17;
        var16['scrollPosition'] = var7;
        var13['__closure'] = var16;
        var16 = 3892822493921.0;
        var13['__workletHash'] = var16;
        var2 = _closure1_slot18;
        var13['__initData'] = var2;
        var2 = false;
        var2 = var14.bind(var15)(var13, var2);
        var _closure2_slot10 = var2;
        var15 = var10.useCallback;
        var14 = new Array(2);
        var14[0] = var23;
        var14[1] = var2;
        var13 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var6 = arg1;
                var4 = _closure1_slot9;
                var3 = var4.getState;
                var5 = var3.bind(var4)();
                var18 = var5.dragSpecs;
                var _closure3_slot0 = var18;
                var7 = var5.overSpecs;
                var4 = var5.gestureState;
                var3 = var5.dragDropInProgress;
                var5 = var5.setStateShallow;
                var10 = _closure2_slot3;
                var9 = var10.set;
                var14 = 0;
                var9 = var9.bind(var10)(var14);
                var9 = _closure2_slot10;
                var9 = var9.isActive;
                if(!var9) { _fun0012_ip = 135; continue _fun0012 }
case 136:
                var10 = _closure2_slot10;
                var9 = var10.setActive;
                var8 = false;
                var8 = var9.bind(var10)(var8);
case 135:
                var8 = 'drop';
                if(!(var8 === var6)) { _fun0012_ip = 137; continue _fun0012 }
case 40:
                var13 = null;
                if(!(var13 != var7)) { _fun0012_ip = 137; continue _fun0012 }
case 138:
                if(!(var13 != var18)) { _fun0012_ip = 137; continue _fun0012 }
case 139:
                var16 = var18.item;
                var17 = var7.item;
                var11 = var16.type;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var15 = 12;
                var9 = var8[var15];
                var8 = undefined;
                var9 = var10.bind(var8)(var9);
                var9 = var9.FastListItemTypes;
                var9 = var9.SECTION;
                if(!(var9 !== var11)) { _fun0012_ip = 140; continue _fun0012 }
case 141:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var15];
                var9 = var10.bind(var8)(var9);
                var9 = var9.FastListItemTypes;
                var10 = var9.ITEM;
                var9 = undefined;
                if(!(var10 === var11)) { _fun0012_ip = 142; continue _fun0012 }
case 140:
                var11 = var17.type;
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var15];
                var10 = var12.bind(var8)(var10);
                var10 = var10.FastListItemTypes;
                var10 = var10.SECTION;
                if(!(var10 !== var11)) { _fun0012_ip = 143; continue _fun0012 }
case 144:
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var15];
                var10 = var12.bind(var8)(var10);
                var10 = var10.FastListItemTypes;
                var10 = var10.ITEM;
                var9 = undefined;
                if(!(var10 === var11)) { _fun0012_ip = 142; continue _fun0012 }
case 143:
                var11 = var17.section;
                var10 = var16.section;
                var11 = var11 < var10;
                var12 = 'before';
                var10 = var12;
                if(var11) { _fun0012_ip = 145; continue _fun0012 }
case 146:
                var15 = var17.section;
                var11 = var16.section;
                var19 = var15 > var11;
                var15 = 'after';
                var11 = var15;
                if(var19) { _fun0012_ip = 147; continue _fun0012 }
case 148:
                var20 = var17.item;
                var19 = var16.item;
                var19 = var20 < var19;
                if(var19) { _fun0012_ip = 149; continue _fun0012 }
case 150:
                var20 = var17.item;
                var19 = var16.item;
                var19 = var20 > var19;
                if(var19) { _fun0012_ip = 151; continue _fun0012 }
case 68:
                var19 = var17.item;
                var17 = var16.item;
                var16 = undefined;
                if(!(var19 === var17)) { _fun0012_ip = 152; continue _fun0012 }
case 153:
                var16 = 'self';
case 152:
                var15 = var16;
case 151:
                var12 = var15;
case 149:
                var11 = var12;
case 147:
                var10 = var11;
case 145:
                var9 = var10;
case 142:
                var12 = 'after';
                var10 = 0;
                if(!(var12 === var9)) { _fun0012_ip = 154; continue _fun0012 }
case 155:
                var9 = var18.item;
                var10 = var9.layoutSize;
case 154:
                var9 = var7.state;
                if(!(var12 !== var9)) { _fun0012_ip = 156; continue _fun0012 }
case 157:
                var9 = var7.item;
                var9 = var9.layoutStart;
                _fun0012_ip = 158; continue _fun0012;
case 156:
                var11 = var7.item;
                var15 = var11.layoutStart;
                var11 = var18.itemSize;
                var9 = var15 + var11;
case 158:
                var9 = var9 - var10;
                var _closure3_slot1 = var9;
                var11 = var18.node;
                var _closure3_slot2 = var11;
                var10 = var7.node;
                var _closure3_slot3 = var10;
                var9 = var7.state;
                var12 = var12 === var9;
                var _closure3_slot4 = var12;
                var15 = var7.state;
                var9 = 'convert-before';
                var9 = var9 === var15;
                if(var9) { _fun0012_ip = 159; continue _fun0012 }
case 160:
                var16 = var7.state;
                var15 = 'convert-after';
                var9 = var15 === var16;
case 159:
                if(var9) { _fun0012_ip = 161; continue _fun0012 }
case 162:
                var16 = var7.state;
                var15 = 'drop-into';
                var9 = var15 === var16;
case 161:
                var _closure3_slot5 = var9;
                var9 = var7.state;
                var _closure3_slot6 = var9;
                var16 = 'self';
                if(!(var16 !== var9)) { _fun0012_ip = 83; continue _fun0012 }
case 163:
                if(!(var13 == var9)) { _fun0012_ip = 164; continue _fun0012 }
case 83:
                var15 = _closure1_slot9;
                var7 = var15.getState;
                var17 = var7.bind(var15)();
                var15 = var17.dropStart;
                var7 = {};
                var7['dragNode'] = var11;
                var7['overNode'] = var11;
                var19 = var18.itemTop;
                var7['dropPosition'] = var19;
                var19 = var18.itemSize;
                var7['itemSize'] = var19;
                var18 = var18.item;
                var20 = var13 == var18;
                var19 = undefined;
                if(var20) { _fun0012_ip = 165; continue _fun0012 }
case 166:
                var19 = var18.recyclerKey;
case 165:
                var20 = var13 != var19;
                var18 = '';
                if(!var20) { _fun0012_ip = 167; continue _fun0012 }
case 168:
                var18 = var19;
case 167:
                var7['dragRecyclerKey'] = var18;
                var7['overState'] = var16;
                var7 = var15.bind(var17)(var7);
                var15 = _closure1_slot32;
                var7 = {};
                var17 = 'drag-drop';
                var7['type'] = var17;
                var7['dragNode'] = var11;
                var7['overNode'] = var11;
                var7['overState'] = var16;
                var7 = var15.bind(var8)(var7);
                _fun0012_ip = 169; continue _fun0012;
case 164:
                var7 = var10.id;
                var _closure3_slot7 = var7;
                var16 = var11.type;
                var15 = _closure1_slot8;
                var15 = var15.FOLDER;
                if(!(var16 === var15)) { _fun0012_ip = 170; continue _fun0012 }
case 171:
                var16 = var10.type;
                var15 = _closure1_slot8;
                var15 = var15.GUILD;
                if(!(var16 === var15)) { _fun0012_ip = 170; continue _fun0012 }
case 172:
                var15 = var10.parentId;
                if(!(var13 == var15)) { _fun0012_ip = 173; continue _fun0012 }
case 170:
                var16 = var10.type;
                var15 = _closure1_slot8;
                var15 = var15.FOLDER;
                if(!(var16 === var15)) { _fun0012_ip = 174; continue _fun0012 }
case 175:
                var15 = var10.expanded;
                if(!var15) { _fun0012_ip = 174; continue _fun0012 }
case 176:
                if(!var12) { _fun0012_ip = 174; continue _fun0012 }
case 177:
                var12 = false;
                _closure3_slot4 = var12;
                var12 = var10.children;
                var14 = var12[var14];
                var15 = var13 == var14;
                var12 = undefined;
                if(var15) { _fun0012_ip = 178; continue _fun0012 }
case 179:
                var12 = var14.id;
case 178:
                if(!(var13 != var12)) { _fun0012_ip = 180; continue _fun0012 }
case 181:
                var7 = var12;
case 180:
                _closure3_slot7 = var7;
                _fun0012_ip = 174; continue _fun0012;
case 173:
                var7 = var10.parentId;
                _closure3_slot7 = var7;
case 174:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 16;
                var7 = var13[var7];
                var12 = var12.bind(var8)(var7);
                var7 = var12.batchUpdates;
                var2 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = _closure3_slot2;
                        var2 = var1.id;
                        var1 = _closure3_slot7;
                        if(!(var2 !== var1)) { _fun0013_ip = 47; continue _fun0013 }
case 29:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var9 = var4.bind(var2)(var3);
                        var8 = var9.moveById;
                        var3 = _closure3_slot2;
                        var7 = var3.id;
                        var6 = _closure3_slot7;
                        var3 = _closure3_slot5;
                        var4 = !var3;
                        var4 = !var4;
                        if(var3) { _fun0013_ip = 182; continue _fun0013 }
case 48:
                        var4 = _closure3_slot4;
case 182:
                        var10 = _closure3_slot5;
                        var14 = var9;
                        var13 = var7;
                        var12 = var6;
                        var11 = var4;
                        var3 = var14[var8](var13, var12, var11, var10, var9);
                        var3 = _closure1_slot3;
                        var1 = function* () {
                            var1 = function* anon_0_() {
                                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0014_ip = 182; continue _fun0014 }
case 183: // try_start_0
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 18;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var4 = var5.bind(var3)(var4);
                                    var3 = var4.saveGuildFolders;
                                    var5 = _closure1_slot7;
                                    var2 = var5.getCompatibleGuildFolders;
                                    var2 = var2.bind(var5)();
                                    var2 = var3.bind(var4)(var2);
                                    SaveGenerator(address=63);
case 7:
                                    return var2;
case 184:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0014_ip = 185; continue _fun0014 }
case 186: // try_end0
                                    _fun0014_ip = 187; continue _fun0014;
case 185:
                                    return var2;
case 117: // catch_target0
                                    CatchBlockStart(arg_register=1);
case 187:
                                    var2 = undefined;
                                    return var2;
case 182:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.bind(var2)();
case 47:
                        var2 = _closure1_slot9;
                        var1 = var2.getState;
                        var4 = var1.bind(var2)();
                        var3 = var4.dropStart;
                        var2 = {};
                        var1 = _closure3_slot2;
                        var2['dragNode'] = var1;
                        var1 = _closure3_slot3;
                        var2['overNode'] = var1;
                        var1 = _closure3_slot1;
                        var2['dropPosition'] = var1;
                        var1 = _closure3_slot0;
                        var8 = var1.item;
                        var6 = null;
                        var9 = var6 == var8;
                        var1 = undefined;
                        var7 = undefined;
                        if(var9) { _fun0013_ip = 188; continue _fun0013 }
case 189:
                        var7 = var8.recyclerKey;
case 188:
                        var8 = var6 != var7;
                        var6 = '';
                        if(!var8) { _fun0013_ip = 190; continue _fun0013 }
case 191:
                        var6 = var7;
case 190:
                        var2['dragRecyclerKey'] = var6;
                        var6 = _closure3_slot0;
                        var6 = var6.itemSize;
                        var2['itemSize'] = var6;
                        var5 = _closure3_slot6;
                        var2['overState'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var2 = var7.bind(var12)(var2);
                var7 = _closure1_slot32;
                var2 = {};
                var12 = 'drag-drop';
                var2['type'] = var12;
                var2['dragNode'] = var11;
                var2['overNode'] = var10;
                var2['overState'] = var9;
                var2 = var7.bind(var8)(var2);
                _fun0012_ip = 169; continue _fun0012;
case 137:
                var2 = 'contextmenu-open';
                if(!(var2 === var6)) { _fun0012_ip = 192; continue _fun0012 }
case 193:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var2);
                var2 = var1.ContextMenuStore;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var6 = var1.menu;
                var1 = null;
                if(!(var1 != var6)) { _fun0012_ip = 192; continue _fun0012 }
case 194:
                var2 = var6.requestClose;
                var1 = var6.state;
                var7 = var1.activeIndex;
                var1 = var7.get;
                var7 = var1.bind(var7)();
                var1 = -1;
                var1 = var1 === var7;
                var1 = var2.bind(var6)(var1);
case 192:
                var2 = {};
                var1 = undefined;
                var2['dragSpecs'] = var1;
                var2['overSpecs'] = var1;
                var1 = var5.bind(var1)(var2);
                var1 = var4.get;
                var5 = var1.bind(var4)();
                var1 = var5.mode;
                var6 = null;
                if(!(var6 != var1)) { _fun0012_ip = 169; continue _fun0012 }
case 195:
                var2 = var4.set;
                var1 = {};
                var22 = var1;
                var21 = var5;
                var5 = copyDataProperties(var22, var21);
                var5 = 'mode';
                var1[var5] = var6;
                var1 = var2.bind(var4)(var1);
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
case 169:
                var1 = undefined;
                return var1;
            }
        };
        var16 = var15.bind(var10)(var13, var14);
        var _closure2_slot11 = var16;
        var15 = var10.useCallback;
        var14 = function(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var6 = var2.gestureState;
                var4 = var2.dragDropInProgress;
                var7 = _closure1_slot34;
                var5 = _closure2_slot2;
                var1 = undefined;
                var2 = arg2;
                var3 = false;
                var2 = var7.bind(var1)(var2, var3, var5);
                var2 = var2.item;
                var5 = var6.get;
                var7 = var5.bind(var6)();
                var8 = null;
                var2 = var8 == var2;
                if(!var2) { _fun0015_ip = 9; continue _fun0015 }
case 48:
                var5 = var7.mode;
                var2 = var8 == var5;
case 9:
                if(!var2) { _fun0015_ip = 196; continue _fun0015 }
case 197:
                var5 = var6.set;
                var2 = {};
                var11 = var2;
                var10 = var7;
                var7 = copyDataProperties(var11, var10);
                var8 = 'cancel';
                var7 = 'mode';
                var2[var7] = var8;
                var2 = var5.bind(var6)(var2);
                var2 = var4.set;
                var2 = var2.bind(var4)(var3);
case 196:
                return var1;
            }
        };
        var13 = new Array(0);
        var13 = var15.bind(var10)(var14, var13);
        var _closure2_slot12 = var13;
        var17 = var10.useCallback;
        var15 = new Array(1);
        var15[0] = var16;
        var14 = function(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var6 = arg1;
                var7 = arg2;
                var3 = _closure1_slot9;
                var1 = var3.getState;
                var1 = var1.bind(var3)();
                var3 = var1.dragSpecs;
                var17 = var1.scrollPosition;
                var5 = var1.gestureState;
                var9 = var1.dragDropInProgress;
                var4 = var1.setStateShallow;
                var10 = _closure1_slot34;
                var3 = _closure2_slot2;
                var1 = undefined;
                var8 = false;
                var3 = var10.bind(var1)(var7, var8, var3);
                var15 = var3.item;
                var11 = var3.node;
                var12 = null;
                if(!(var12 != var15)) { _fun0016_ip = 198; continue _fun0016 }
case 199:
                if(!(var12 == var11)) { _fun0016_ip = 200; continue _fun0016 }
case 198:
                var10 = var5.set;
                var3 = {};
                var14 = var5.get;
                var22 = var14.bind(var5)();
                var23 = var3;
                var14 = copyDataProperties(var23, var22);
                var14 = 'mode';
                var3[var14] = var12;
                var3 = var10.bind(var5)(var3);
                var3 = var9.set;
                var3 = var3.bind(var9)(var8);
                _fun0016_ip = 201; continue _fun0016;
case 200:
                var9 = {};
                var9['node'] = var11;
                var9['item'] = var15;
                var3 = var15.layoutStart;
                var9['itemTop'] = var3;
                var3 = var15.layoutSize;
                var9['itemSize'] = var3;
                var10 = _closure1_slot5;
                var8 = var10.get;
                var3 = 'window';
                var3 = var8.bind(var10)(var3);
                var10 = var3.height;
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 20;
                var3 = var14[var3];
                var8 = var8.bind(var1)(var3);
                var3 = var8.isAndroid;
                var3 = var3.bind(var8)();
                var8 = var10;
                if(!var3) { _fun0016_ip = 25; continue _fun0016 }
case 202:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var3 = 21;
                var3 = var16[var3];
                var14 = var14.bind(var1)(var3);
                var3 = var14.getSafeAreaInsets;
                var3 = var3.bind(var14)();
                var14 = var3.top;
                var3 = var3.bottom;
                var3 = var14 + var3;
                var8 = var10 + var3;
case 25:
                var3 = _closure1_slot14;
                var14 = var3.activeIndex;
                var10 = var14.set;
                var3 = -1;
                var3 = var10.bind(var14)(var3);
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 22;
                var3 = var14[var3];
                var10 = var10.bind(var1)(var3);
                var3 = var10.getIsScreenReaderEnabled;
                var3 = var3.bind(var10)();
                if(var3) { _fun0016_ip = 203; continue _fun0016 }
case 204:
                var14 = var11.type;
                var3 = _closure1_slot8;
                var3 = var3.GUILD;
                if(!(var3 !== var14)) { _fun0016_ip = 73; continue _fun0016 }
case 205:
                var3 = _closure1_slot8;
                var10 = var3.FOLDER;
                var3 = undefined;
                if(!(var10 === var14)) { _fun0016_ip = 159; continue _fun0016 }
case 206:
                var10 = {};
                var14 = var11.id;
                var10['key'] = var14;
                var14 = var11.name;
                var10['title'] = var14;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 24;
                var14 = var18[var14];
                var18 = var16.bind(var1)(var14);
                var16 = var18.getGuildFolderMenuItems;
                var14 = var11.id;
                var14 = var16.bind(var18)(var14);
                var10['items'] = var14;
                var3 = var10;
                _fun0016_ip = 159; continue _fun0016;
case 73:
                var16 = _closure1_slot6;
                var14 = var16.getGuild;
                var10 = var11.id;
                var14 = var14.bind(var16)(var10);
                var10 = {};
                var16 = var11.id;
                var10['key'] = var16;
                var18 = var12 == var14;
                var16 = undefined;
                if(var18) { _fun0016_ip = 77; continue _fun0016 }
case 207:
                var16 = var14.name;
case 77:
                var10['title'] = var16;
                if(!(var12 == var14)) { _fun0016_ip = 208; continue _fun0016 }
case 209:
                var12 = new Array(0);
                _fun0016_ip = 210; continue _fun0016;
case 208:
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var16 = 23;
                var16 = var19[var16];
                var16 = var18.bind(var1)(var16);
                var14 = var14.id;
                var12 = var16.bind(var1)(var14);
case 210:
                var10['items'] = var12;
                var3 = var10;
case 159:
                var14 = var3.items;
                var _closure3_slot0 = var14;
                var20 = var3.key;
                var16 = var3.title;
                var10 = var14.length;
                var3 = 0;
                if(!(var10 > var3)) { _fun0016_ip = 211; continue _fun0016 }
case 212:
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 19;
                var3 = var12[var3];
                var12 = var10.bind(var1)(var3);
                var10 = var12.showContextMenu;
                var3 = {};
                var18 = global;
                var18 = var18.HermesInternal;
                var19 = var18.concat;
                var18 = '';
                var18 = var19.bind(var18)(var20);
                var3['key'] = var18;
                var3['title'] = var16;
                var3['items'] = var14;
                var14 = _closure1_slot10;
                var18 = 12;
                var16 = var18 + var14;
                var16 = var16 + var18;
                var3['x'] = var16;
                var16 = var15.layoutStart;
                var15 = var17.get;
                var15 = var15.bind(var17)();
                var15 = var16 - var15;
                var3['y'] = var15;
                var15 = 'left';
                var3['positionX'] = var15;
                var15 = 'below';
                var3['positionY'] = var15;
                var3['width'] = var14;
                var3['height'] = var14;
                var14 = _closure1_slot14;
                var3['state'] = var14;
                var14 = new Array(0);
                var3['dividerIndexes'] = var14;
                var14 = 'never';
                var3['keyboardShouldPersistTaps'] = var14;
                var14 = function requestClose(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = arg1;
                        if(var1) { _fun0017_ip = 98; continue _fun0017 }
case 213:
                        var2 = _closure3_slot0;
                        var1 = _closure1_slot14;
                        var3 = var1.activeIndex;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var2 = var2[var1];
                        var1 = null;
                        if(!(var1 != var2)) { _fun0017_ip = 98; continue _fun0017 }
case 214:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
case 98:
                        var2 = _closure1_slot14;
                        var4 = var2.activeIndex;
                        var3 = var4.set;
                        var2 = -1;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideContextMenu;
                        var2 = var2.bind(var3)();
                        var3 = _closure2_slot11;
                        var2 = 'contextmenu-close';
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var3['requestClose'] = var14;
                var13 = function onClose() {
                    var1 = undefined;
                    return var1;
                };
                var3['onClose'] = var13;
                var3 = var10.bind(var12)(var3);
                _fun0016_ip = 211; continue _fun0016;
case 203:
                var10 = _closure1_slot32;
                var3 = {};
                var12 = 'drag-start';
                var3['type'] = var12;
                var3['node'] = var11;
                var3 = var10.bind(var1)(var3);
case 211:
                var3 = {};
                var3['dragSpecs'] = var9;
                var3['overSpecs'] = var1;
                var3['windowSize'] = var8;
                var3 = var4.bind(var1)(var3);
                var4 = var5.set;
                var3 = {};
                var8 = 'pressed';
                var3['mode'] = var8;
                var3['initialY'] = var7;
                var3['initialX'] = var6;
                var3['absoluteY'] = var7;
                var3['absoluteX'] = var6;
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 9;
                var3 = var6[var2];
                var4 = var5.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_MEDIUM;
                var2 = var3.bind(var4)(var2);
case 201:
                return var1;
            }
        };
        var14 = var17.bind(var10)(var14, var15);
        var _closure2_slot13 = var14;
        var22 = var10.useCallback;
        var17 = function(arg1, arg2) {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.updateContextMenuState;
            var4 = _closure1_slot14;
            var3 = arg1;
            var2 = arg2;
            var2 = var5.bind(var6)(var3, var2, var4);
            return var1;
        };
        var15 = new Array(0);
        var17 = var22.bind(var10)(var17, var15);
        var _closure2_slot14 = var17;
        var22 = var10.useCallback;
        var15 = new Array(2);
        var15[0] = var23;
        var15[1] = var2;
        var2 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var13 = arg1;
                var4 = _closure1_slot9;
                var3 = var4.getState;
                var4 = var3.bind(var4)();
                var18 = var4.overSpecs;
                var _closure3_slot0 = var18;
                var3 = var4.dragSpecs;
                var _closure3_slot1 = var3;
                var9 = var4.windowSize;
                var _closure3_slot2 = var9;
                var5 = var4.setStateShallow;
                var _closure3_slot3 = var5;
                var10 = var4.listInsets;
                var4 = var4.gestureState;
                var17 = null;
                if(!(var17 != var3)) { _fun0018_ip = 215; continue _fun0018 }
case 216:
                var3 = var4.get;
                var5 = var3.bind(var4)();
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 22;
                var3 = var4[var3];
                var4 = undefined;
                var6 = var6.bind(var4)(var3);
                var3 = var6.getIsScreenReaderEnabled;
                var3 = var3.bind(var6)();
                if(var3) { _fun0018_ip = 52; continue _fun0018 }
case 217:
                var6 = _closure3_slot1;
                var6 = var6.node;
                var3 = var17 == var6;
case 52:
                if(var3) { _fun0018_ip = 124; continue _fun0018 }
case 218:
                var3 = var17 != var18;
case 124:
                if(var3) { _fun0018_ip = 19; continue _fun0018 }
case 219:
                var6 = _closure1_slot32;
                var3 = {};
                var7 = 'drag-start';
                var3['type'] = var7;
                var7 = _closure3_slot1;
                var7 = var7.node;
                var3['node'] = var7;
                var3 = var6.bind(var4)(var3);
case 19:
                var11 = global;
                var3 = var11.Map;
                var6 = var3.prototype;
                var6 = Object.create(var6, {constructor: {value: var3}});
                var27 = var6;
                var3 = new var27[var3](var26);
                var16 = var3 instanceof Object ? var3 : var6;
                var3 = var17 != var18;
                if(!var3) { _fun0018_ip = 220; continue _fun0018 }
case 42:
                var7 = var18.state;
                var6 = 'self';
                var3 = var6 !== var7;
case 220:
                if(!var3) { _fun0018_ip = 221; continue _fun0018 }
case 106:
                var7 = var16.set;
                var3 = _closure3_slot1;
                var3 = var3.item;
                var6 = var3.recyclerKey;
                var3 = 0;
                var3 = var7.bind(var16)(var6, var3);
                var7 = var16.set;
                var3 = var18.item;
                var6 = var3.recyclerKey;
                var3 = _closure3_slot1;
                var8 = var3.itemSize;
                var3 = 2;
                var3 = var3 * var8;
                var3 = var7.bind(var16)(var6, var3);
case 221:
                var8 = _closure1_slot34;
                var24 = _closure2_slot2;
                var7 = true;
                var27 = undefined;
                var26 = var13;
                var25 = true;
                var23 = var16;
                var8 = var27[var8](var26, var25, var24, var23, var22);
                var6 = var8.item;
                var21 = var8.overPercentage;
                var20 = var8.node;
                var8 = var17 == var18;
                var12 = undefined;
                if(var8) { _fun0018_ip = 110; continue _fun0018 }
case 222:
                var8 = var18.node;
                var12 = var8.id;
case 110:
                var14 = var17 == var20;
                var8 = undefined;
                if(var14) { _fun0018_ip = 223; continue _fun0018 }
case 68:
                var8 = var20.id;
case 223:
                if(!(var12 === var8)) { _fun0018_ip = 224; continue _fun0018 }
case 225:
                var12 = var17 == var18;
                var8 = undefined;
                if(var12) { _fun0018_ip = 226; continue _fun0018 }
case 227:
                var8 = var18.percentage;
case 226:
                if(!(var8 !== var21)) { _fun0018_ip = 228; continue _fun0018 }
case 224:
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var14 = 19;
                var8 = var8[var14];
                var8 = var12.bind(var4)(var8);
                var12 = var8.ContextMenuStore;
                var8 = var12.getState;
                var8 = var8.bind(var12)();
                var8 = var8.menu;
                if(!(var17 != var8)) { _fun0018_ip = 229; continue _fun0018 }
case 73:
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var14];
                var12 = var12.bind(var4)(var8);
                var8 = var12.hideContextMenu;
                var8 = var8.bind(var12)();
case 229:
                var14 = var6;
                var8 = var21;
                var12 = var20;
                if(!(var17 != var6)) { _fun0018_ip = 230; continue _fun0018 }
case 231:
                var15 = var17 == var18;
                var19 = undefined;
                if(var15) { _fun0018_ip = 232; continue _fun0018 }
case 209:
                var15 = var18.item;
                var19 = var15.recyclerKey;
case 232:
                var15 = var6.recyclerKey;
                var14 = var6;
                var8 = var21;
                var12 = var20;
                if(!(var19 !== var15)) { _fun0018_ip = 230; continue _fun0018 }
case 233:
                var15 = var16.clear;
                var15 = var15.bind(var16)();
                var15 = _closure3_slot1;
                var15 = var15.item;
                var19 = var15.recyclerKey;
                var15 = var6.recyclerKey;
                if(!(var19 !== var15)) { _fun0018_ip = 234; continue _fun0018 }
case 235:
                var20 = var16.set;
                var15 = _closure3_slot1;
                var15 = var15.item;
                var15 = var15.recyclerKey;
                var21 = var17 != var15;
                var19 = '';
                if(!var21) { _fun0018_ip = 236; continue _fun0018 }
case 237:
                var19 = var15;
case 236:
                var15 = 0;
                var15 = var20.bind(var16)(var19, var15);
                var19 = var16.set;
                var15 = var6.recyclerKey;
                var20 = _closure1_slot13;
                var6 = 2;
                var6 = var6 * var20;
                var6 = var19.bind(var16)(var15, var6);
case 234:
                var15 = _closure1_slot34;
                var24 = _closure2_slot2;
                var27 = undefined;
                var26 = var13;
                var25 = true;
                var23 = var16;
                var6 = var27[var15](var26, var25, var24, var23, var22);
                var14 = var6.item;
                var8 = var6.overPercentage;
                var12 = var6.node;
case 230:
                var6 = _closure3_slot1;
                var26 = var6.node;
                var6 = _closure3_slot1;
                var24 = var6.item;
                var6 = function getOverState(arg1, arg2, arg3, arg4, arg5) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var6 = arg1;
                        var3 = arg2;
                        var7 = arg3;
                        var9 = arg4;
                        var4 = arg5;
                        var8 = null;
                        if(!(var8 != var7)) { _fun0019_ip = 33; continue _fun0019 }
case 54:
                        if(!(var8 != var9)) { _fun0019_ip = 33; continue _fun0019 }
case 37:
                        if(!(var8 != var6)) { _fun0019_ip = 33; continue _fun0019 }
case 238:
                        if(!(var8 == var3)) { _fun0019_ip = 239; continue _fun0019 }
case 33:
                        var1 = undefined;
                        return var1;
case 239:
                        var2 = var6.id;
                        var1 = var3.id;
                        if(!(var2 !== var1)) { _fun0019_ip = 240; continue _fun0019 }
case 98:
                        var11 = var7.type;
                        var10 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var13 = 12;
                        var2 = var1[var13];
                        var1 = undefined;
                        var2 = var10.bind(var1)(var2);
                        var2 = var2.FastListItemTypes;
                        var2 = var2.SECTION;
                        if(!(var2 !== var11)) { _fun0019_ip = 241; continue _fun0019 }
case 242:
                        var10 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var13];
                        var2 = var10.bind(var1)(var2);
                        var2 = var2.FastListItemTypes;
                        var10 = var2.ITEM;
                        var2 = undefined;
                        if(!(var10 === var11)) { _fun0019_ip = 243; continue _fun0019 }
case 241:
                        var11 = var9.type;
                        var12 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var13];
                        var10 = var12.bind(var1)(var10);
                        var10 = var10.FastListItemTypes;
                        var10 = var10.SECTION;
                        if(!(var10 !== var11)) { _fun0019_ip = 105; continue _fun0019 }
case 100:
                        var12 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var13];
                        var10 = var12.bind(var1)(var10);
                        var10 = var10.FastListItemTypes;
                        var10 = var10.ITEM;
                        var2 = undefined;
                        if(!(var10 === var11)) { _fun0019_ip = 243; continue _fun0019 }
case 105:
                        var10 = var9.recyclerKey;
                        var9 = var7.recyclerKey;
                        var7 = 'self';
                        if(!(var10 !== var9)) { _fun0019_ip = 244; continue _fun0019 }
case 245:
                        var9 = 0.5;
                        var10 = var4 < var9;
                        var9 = 'after';
                        if(!var10) { _fun0019_ip = 246; continue _fun0019 }
case 247:
                        var9 = 'before';
case 246:
                        var7 = var9;
case 244:
                        var2 = var7;
case 243:
                        var10 = var6.type;
                        var7 = _closure1_slot8;
                        var9 = var7.FOLDER;
                        var11 = var3.type;
                        var7 = _closure1_slot8;
                        var7 = var7.FOLDER;
                        var7 = var11 === var7;
                        if(!(var10 === var9)) { _fun0019_ip = 157; continue _fun0019 }
case 248:
                        var9 = 'after';
                        if(!(var9 === var2)) { _fun0019_ip = 70; continue _fun0019 }
case 249:
                        if(!var7) { _fun0019_ip = 27; continue _fun0019 }
case 250:
                        var9 = var3.expanded;
                        if(var9) { _fun0019_ip = 251; continue _fun0019 }
case 27:
                        if(var7) { _fun0019_ip = 70; continue _fun0019 }
case 252:
                        var9 = var3.parentId;
                        if(!(var8 != var9)) { _fun0019_ip = 70; continue _fun0019 }
case 253:
                        var10 = _closure1_slot7;
                        var9 = var10.getGuildsTree;
                        var11 = var9.bind(var10)();
                        var10 = var11.getNode;
                        var9 = var3.parentId;
                        var9 = var10.bind(var11)(var9);
                        if(!(var8 != var9)) { _fun0019_ip = 70; continue _fun0019 }
case 254:
                        var10 = var9.children;
                        var9 = var9.children;
                        var11 = var9.length;
                        var9 = 1;
                        var9 = var11 - var9;
                        var9 = var10[var9];
                        if(!(var8 != var9)) { _fun0019_ip = 70; continue _fun0019 }
case 149:
                        var10 = var9.id;
                        var9 = var3.id;
                        if(!(var10 !== var9)) { _fun0019_ip = 70; continue _fun0019 }
case 255:
                        return var1;
case 70:
                        var9 = 'before';
                        if(!(var9 === var2)) { _fun0019_ip = 157; continue _fun0019 }
case 256:
                        if(var7) { _fun0019_ip = 157; continue _fun0019 }
case 257:
                        var7 = var3.parentId;
                        if(!(var8 != var7)) { _fun0019_ip = 157; continue _fun0019 }
case 258:
                        return var1;
case 157:
                        var7 = 'self';
                        if(!(var7 !== var2)) { _fun0019_ip = 259; continue _fun0019 }
case 260:
                        if(!(var8 != var2)) { _fun0019_ip = 259; continue _fun0019 }
case 261:
                        var9 = var6.type;
                        var7 = _closure1_slot8;
                        var7 = var7.GUILD;
                        if(!(var9 === var7)) { _fun0019_ip = 262; continue _fun0019 }
case 263:
                        var9 = var3.type;
                        var7 = _closure1_slot8;
                        var7 = var7.GUILD;
                        if(!(var9 === var7)) { _fun0019_ip = 262; continue _fun0019 }
case 77:
                        var7 = var3.parentId;
                        if(!(var8 != var7)) { _fun0019_ip = 264; continue _fun0019 }
case 262:
                        var7 = var6.type;
                        var6 = _closure1_slot8;
                        var6 = var6.GUILD;
                        if(!(var7 === var6)) { _fun0019_ip = 265; continue _fun0019 }
case 266:
                        var6 = var3.type;
                        var5 = _closure1_slot8;
                        var5 = var5.FOLDER;
                        if(!(var6 === var5)) { _fun0019_ip = 265; continue _fun0019 }
case 267:
                        var3 = var3.expanded;
                        if(var3) { _fun0019_ip = 265; continue _fun0019 }
case 268:
                        var3 = 0.35;
                        if(!(var4 > var3)) { _fun0019_ip = 265; continue _fun0019 }
case 269:
                        var3 = 0.65;
                        if(!(var4 < var3)) { _fun0019_ip = 265; continue _fun0019 }
case 81:
                        var3 = 'drop-into';
                        return var3;
case 264:
                        var3 = 0.35;
                        if(!(var4 > var3)) { _fun0019_ip = 265; continue _fun0019 }
case 237:
                        var3 = 0.65;
                        if(!(var4 < var3)) { _fun0019_ip = 265; continue _fun0019 }
case 270:
                        var3 = 'before';
                        if(!(var3 !== var2)) { _fun0019_ip = 271; continue _fun0019 }
case 272:
                        var3 = 'after';
                        if(!(var3 !== var2)) { _fun0019_ip = 273; continue _fun0019 }
case 265:
                        return var2;
case 273:
                        var3 = 'convert-after';
                        return var3;
case 271:
                        var3 = 'convert-before';
                        return var3;
case 259:
                        return var2;
case 251:
                        return var1;
case 240:
                        var1 = 'self';
                        return var1;
                    }
                };
                var27 = undefined;
                var25 = var12;
                var23 = var14;
                var22 = var8;
                var6 = var27[var6](var26, var25, var24, var23, var22, var21);
                var15 = var12;
                var12 = var6;
                if(!(var17 == var12)) { _fun0018_ip = 274; continue _fun0018 }
case 275:
                var6 = _closure3_slot1;
                var15 = var6.node;
                var6 = _closure3_slot1;
                var14 = var6.item;
                var12 = 'self';
case 274:
                var6 = var17 != var15;
                if(!var6) { _fun0018_ip = 171; continue _fun0018 }
case 276:
                var6 = var17 != var18;
case 171:
                if(!var6) { _fun0018_ip = 277; continue _fun0018 }
case 278:
                var16 = _closure1_slot32;
                var6 = {};
                var19 = 'drag-move';
                var6['type'] = var19;
                var19 = _closure3_slot1;
                var19 = var19.node;
                var6['dragNode'] = var19;
                var6['overNode'] = var15;
                var6['overState'] = var12;
                var6 = var16.bind(var4)(var6);
case 277:
                var6 = var17 == var15;
                if(var6) { _fun0018_ip = 177; continue _fun0018 }
case 279:
                var6 = var17 == var14;
case 177:
                if(var6) { _fun0018_ip = 280; continue _fun0018 }
case 281:
                var19 = var17 == var18;
                var16 = undefined;
                if(var19) { _fun0018_ip = 282; continue _fun0018 }
case 283:
                var16 = var18.node;
case 282:
                var16 = var16 === var15;
                if(!var16) { _fun0018_ip = 79; continue _fun0018 }
case 284:
                var20 = var17 == var18;
                var19 = undefined;
                if(var20) { _fun0018_ip = 285; continue _fun0018 }
case 286:
                var19 = var18.item;
case 285:
                var16 = var19 === var14;
case 79:
                if(!var16) { _fun0018_ip = 287; continue _fun0018 }
case 288:
                var19 = var17 == var18;
                var17 = undefined;
                if(var19) { _fun0018_ip = 289; continue _fun0018 }
case 290:
                var17 = var18.state;
case 289:
                var16 = var17 === var12;
case 287:
                var6 = var16;
case 280:
                if(var6) { _fun0018_ip = 228; continue _fun0018 }
case 291:
                var6 = {};
                var6['node'] = var15;
                var6['item'] = var14;
                var6['state'] = var12;
                var6['percentage'] = var8;
                _closure3_slot0 = var6;
case 228:
                var6 = var10.get;
                var6 = var6.bind(var10)();
                var6 = var6.start;
                var8 = 160;
                var12 = var6 + var8;
                var6 = var10.get;
                var6 = var6.bind(var10)();
                var6 = var6.end;
                var6 = var9 - var6;
                var16 = var6 - var8;
                if(!(!(var13 < var12))) { _fun0018_ip = 292; continue _fun0018 }
case 193:
                var9 = var13 > var16;
                var15 = 0;
                var6 = 0;
                if(!var9) { _fun0018_ip = 293; continue _fun0018 }
case 294:
                var14 = var11.Math;
                var10 = var14.max;
                var9 = var5.initialY;
                var9 = var10.bind(var14)(var9, var16);
                var14 = var11.Math;
                var10 = var14.max;
                var17 = var11.Math;
                var16 = var17.min;
                var9 = var13 - var9;
                var9 = var16.bind(var17)(var9, var8);
                var9 = var9 / var8;
                var6 = var10.bind(var14)(var9, var15);
                _fun0018_ip = 293; continue _fun0018;
case 292:
                var10 = var11.Math;
                var9 = var10.min;
                var5 = var5.initialY;
                var5 = var9.bind(var10)(var5, var12);
                var10 = var11.Math;
                var9 = var10.max;
                var12 = var11.Math;
                var11 = var12.min;
                var5 = var5 - var13;
                var5 = var11.bind(var12)(var5, var8);
                var8 = var5 / var8;
                var5 = 0;
                var8 = var9.bind(var10)(var8, var5);
                var5 = -1;
                var6 = var5 * var8;
case 293:
                var8 = _closure2_slot3;
                var5 = var8.set;
                var5 = var5.bind(var8)(var6);
                var5 = 0;
                var5 = var5 === var6;
                if(!var5) { _fun0018_ip = 93; continue _fun0018 }
case 295:
                var6 = _closure2_slot10;
                var6 = var6.isActive;
                if(var6) { _fun0018_ip = 296; continue _fun0018 }
case 93:
                if(var5) { _fun0018_ip = 297; continue _fun0018 }
case 298:
                var6 = _closure2_slot10;
                var5 = var6.isActive;
case 297:
                if(var5) { _fun0018_ip = 299; continue _fun0018 }
case 300:
                var6 = _closure2_slot10;
                var5 = var6.setActive;
                var5 = var5.bind(var6)(var7);
                _fun0018_ip = 299; continue _fun0018;
case 296:
                var6 = _closure2_slot10;
                var5 = var6.setActive;
                var3 = false;
                var3 = var5.bind(var6)(var3);
case 299:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 16;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.batchUpdates;
                var1 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var2 = _closure3_slot1;
                        var6 = null;
                        if(!(var6 != var2)) { _fun0020_ip = 220; continue _fun0020 }
case 301:
                        var2 = _closure3_slot1;
                        var2 = var2.node;
                        var4 = var2.type;
                        var2 = _closure1_slot8;
                        var2 = var2.FOLDER;
                        if(!(var4 === var2)) { _fun0020_ip = 220; continue _fun0020 }
case 302:
                        var2 = _closure3_slot1;
                        var2 = var2.node;
                        var2 = var2.expanded;
                        if(!var2) { _fun0020_ip = 220; continue _fun0020 }
case 303:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 17;
                        var2 = var5[var2];
                        var5 = undefined;
                        var7 = var4.bind(var5)(var2);
                        var4 = var7.toggleGuildFolderExpand;
                        var2 = _closure3_slot1;
                        var2 = var2.node;
                        var2 = var2.id;
                        var2 = var4.bind(var7)(var2);
                        var4 = _closure1_slot7;
                        var2 = var4.getGuildsTree;
                        var7 = var2.bind(var4)();
                        var4 = var7.getNode;
                        var2 = _closure3_slot1;
                        var2 = var2.node;
                        var2 = var2.id;
                        var4 = var4.bind(var7)(var2);
                        var2 = _closure3_slot1;
                        var2 = var2.node;
                        var2 = var4 !== var2;
                        if(!var2) { _fun0020_ip = 304; continue _fun0020 }
case 305:
                        var6 = var6 == var4;
                        var5 = undefined;
                        if(var6) { _fun0020_ip = 130; continue _fun0020 }
case 19:
                        var5 = var4.type;
case 130:
                        var3 = _closure1_slot8;
                        var3 = var3.FOLDER;
                        var2 = var5 === var3;
case 304:
                        if(!var2) { _fun0020_ip = 220; continue _fun0020 }
case 306:
                        var2 = {};
                        var8 = _closure3_slot1;
                        var9 = var2;
                        var3 = copyDataProperties(var9, var8);
                        var3 = 'node';
                        var2[var3] = var4;
                        _closure3_slot1 = var2;
case 220:
                        var3 = _closure3_slot3;
                        var2 = {};
                        var4 = _closure3_slot0;
                        var2['overSpecs'] = var4;
                        var4 = _closure3_slot1;
                        var2['dragSpecs'] = var4;
                        var1 = _closure3_slot2;
                        var2['windowSize'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 215:
                var1 = undefined;
                return var1;
            }
        };
        var15 = var22.bind(var10)(var2, var15);
        var _closure2_slot15 = var15;
        var2 = 25;
        var2 = var21[var2];
        var9 = var9.bind(var8)(var2);
        var8 = var9.useExternalScrollEventHandler;
        var2 = {};
        var21 = 'guilds';
        var2['id'] = var21;
        var2 = var8.bind(var9)(var2);
        var _closure2_slot16 = var2;
        var9 = var10.useCallback;
        var8 = new Array(2);
        var8[0] = var15;
        var8[1] = var2;
        var2 = function(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = arg1;
                var6 = _closure2_slot16;
                var2 = var1.nativeEvent;
                var2 = var2.contentOffset;
                var5 = var2.y;
                var2 = var1.nativeEvent;
                var2 = var2.contentSize;
                var4 = var2.height;
                var1 = var1.nativeEvent;
                var1 = var1.layoutMeasurement;
                var2 = var1.height;
                var1 = undefined;
                var2 = var6.bind(var1)(var5, var4, var2);
                var4 = _closure1_slot9;
                var2 = var4.getState;
                var2 = var2.bind(var4)();
                var4 = var2.gestureState;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var5 = var2.mode;
                var4 = 'drag';
                if(!(var4 === var5)) { _fun0021_ip = 217; continue _fun0021 }
case 307:
                var3 = _closure2_slot15;
                var2 = var2.absoluteY;
                var2 = var3.bind(var1)(var2);
case 217:
                return var1;
            }
        };
        var2 = var9.bind(var10)(var2, var8);
        var9 = var10.useMemo;
        var8 = new Array(13);
        var8[0] = var20;
        var8[1] = var19;
        var8[2] = var18;
        var8[3] = var17;
        var8[4] = var16;
        var8[5] = var15;
        var8[6] = var14;
        var8[7] = var13;
        var8[8] = var12;
        var8[9] = var7;
        var8[10] = var5;
        var8[11] = var11;
        var8[12] = var6;
        var6 = function() {
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 26;
            var2 = var13[var5];
            var11 = undefined;
            var2 = var12.bind(var11)(var2);
            var4 = var2.Gesture;
            var3 = var4.Simultaneous;
            var2 = var13[var5];
            var2 = var12.bind(var11)(var2);
            var6 = var2.Gesture;
            var2 = var6.LongPress;
            var8 = var2.bind(var6)();
            var6 = var8.onTouchesDown;
            var2 = function S(arg1, arg2) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var5 = arg1;
                    var3 = arg2;
                    var1 = var5.changedTouches;
                    var8 = 0;
                    var2 = var1[var8];
                    var6 = null;
                    var7 = var6 == var2;
                    var1 = undefined;
                    var4 = undefined;
                    if(var7) { _fun0022_ip = 239; continue _fun0022 }
case 308:
                    var4 = var2.absoluteY;
case 239:
                    var7 = var6 != var4;
                    var8 = 0;
                    if(!var7) { _fun0022_ip = 5; continue _fun0022 }
case 2:
                    var8 = var4;
case 5:
                    var9 = _closure2_slot5;
                    var7 = var9.get;
                    var7 = var7.bind(var9)();
                    var7 = var8 + var7;
                    if(!(var6 != var2)) { _fun0022_ip = 309; continue _fun0022 }
case 187:
                    var8 = _closure2_slot4;
                    var6 = var8.get;
                    var6 = var6.bind(var8)();
                    var8 = var6.mode;
                    var6 = 'cancel';
                    if(!(var6 !== var8)) { _fun0022_ip = 309; continue _fun0022 }
case 49:
                    var8 = _closure2_slot6;
                    var6 = var8.get;
                    var6 = var6.bind(var8)();
                    var6 = var6.min;
                    if(!(!(var7 < var6))) { _fun0022_ip = 309; continue _fun0022 }
case 310:
                    var8 = _closure2_slot6;
                    var6 = var8.get;
                    var6 = var6.bind(var8)();
                    var6 = var6.max;
                    if(!(!(var7 > var6))) { _fun0022_ip = 309; continue _fun0022 }
case 311:
                    var5 = var5.changedTouches;
                    var6 = var5.length;
                    var5 = 1;
                    if(!(var5 === var6)) { _fun0022_ip = 245; continue _fun0022 }
case 312:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 7;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.runOnJS;
                    var4 = _closure2_slot12;
                    var5 = var5.bind(var6)(var4);
                    var4 = var2.absoluteX;
                    var2 = var2.absoluteY;
                    var2 = var5.bind(var1)(var4, var2);
                    _fun0022_ip = 245; continue _fun0022;
case 309:
                    var2 = var3.fail;
                    var2 = var2.bind(var3)();
case 245:
                    return var1;
                }
            };
            var9 = {};
            var10 = _closure2_slot5;
            var9['scrollPosition'] = var10;
            var15 = _closure2_slot4;
            var9['gestureState'] = var15;
            var10 = _closure2_slot6;
            var9['dragRegion'] = var10;
            var10 = 7;
            var14 = var13[var10];
            var14 = var12.bind(var11)(var14);
            var14 = var14.runOnJS;
            var9['runOnJS'] = var14;
            var14 = _closure2_slot12;
            var9['handleTouchesDown'] = var14;
            var2['__closure'] = var9;
            var9 = 5430653816983.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot23;
            var2['__initData'] = var9;
            var8 = var6.bind(var8)(var2);
            var6 = var8.onTouchesMove;
            var2 = function c(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = arg2;
                    var3 = _closure2_slot4;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var1.mode;
                    var1 = 'cancel';
                    if(!(var1 === var3)) { _fun0023_ip = 313; continue _fun0023 }
case 314:
                    var1 = var2.fail;
                    var1 = var1.bind(var2)();
case 313:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = {};
            var9['gestureState'] = var15;
            var2['__closure'] = var9;
            var9 = 8960390413776.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot22;
            var2['__initData'] = var9;
            var8 = var6.bind(var8)(var2);
            var6 = var8.onStart;
            var2 = function s(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.absoluteX;
                    var3 = var1.absoluteY;
                    var5 = _closure2_slot4;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var5 = var2.mode;
                    var2 = 'cancel';
                    if(!(var2 !== var5)) { _fun0024_ip = 197; continue _fun0024 }
case 315:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.runOnJS;
                    var1 = _closure2_slot13;
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.bind(var2)(var4, var3);
case 197:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = {};
            var9['gestureState'] = var15;
            var14 = var13[var10];
            var14 = var12.bind(var11)(var14);
            var14 = var14.runOnJS;
            var9['runOnJS'] = var14;
            var14 = _closure2_slot13;
            var9['handlePress'] = var14;
            var2['__closure'] = var9;
            var9 = 2121892092583.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot21;
            var2['__initData'] = var9;
            var8 = var6.bind(var8)(var2);
            var6 = var8.onEnd;
            var2 = function o() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.mode;
                    var3 = 'cancel';
                    if(!(var3 === var2)) { _fun0025_ip = 303; continue _fun0025 }
case 238:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot11;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 303:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = {};
            var14['gestureState'] = var15;
            var9 = var13[var10];
            var9 = var12.bind(var11)(var9);
            var9 = var9.runOnJS;
            var14['runOnJS'] = var9;
            var9 = _closure2_slot11;
            var14['handleGestureEnd'] = var9;
            var2['__closure'] = var14;
            var14 = 7197137311226.0;
            var2['__workletHash'] = var14;
            var14 = _closure1_slot20;
            var2['__initData'] = var14;
            var8 = var6.bind(var8)(var2);
            var6 = var8.onTouchesCancelled;
            var2 = function a() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var2.mode;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0026_ip = 28; continue _fun0026 }
case 3:
                    var4 = _closure2_slot4;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = var3.mode;
                    var3 = 'cancel';
                    var2 = var3 !== var4;
case 28:
                    if(var2) { _fun0026_ip = 316; continue _fun0026 }
case 41:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot11;
                    var2 = var2.bind(var4)(var1);
                    var1 = 'cancel';
                    var1 = var2.bind(var3)(var1);
case 316:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = {};
            var14['gestureState'] = var15;
            var16 = var13[var10];
            var16 = var12.bind(var11)(var16);
            var16 = var16.runOnJS;
            var14['runOnJS'] = var16;
            var14['handleGestureEnd'] = var9;
            var2['__closure'] = var14;
            var14 = 8240921685123.0;
            var2['__workletHash'] = var14;
            var14 = _closure1_slot19;
            var2['__initData'] = var14;
            var2 = var6.bind(var8)(var2);
            var5 = var13[var5];
            var5 = var12.bind(var11)(var5);
            var6 = var5.Gesture;
            var5 = var6.Pan;
            var8 = var5.bind(var6)();
            var6 = var8.manualActivation;
            var5 = true;
            var14 = var6.bind(var8)(var5);
            var8 = var14.simultaneousWithExternalGesture;
            var6 = _closure2_slot1;
            var5 = _closure2_slot0;
            var8 = var8.bind(var14)(var6, var5);
            var6 = var8.shouldCancelWhenOutside;
            var5 = false;
            var8 = var6.bind(var8)(var5);
            var6 = var8.onTouchesMove;
            var5 = function r(arg1, arg2) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var4 = arg2;
                    var1 = arg1;
                    var2 = var1.changedTouches;
                    var1 = 0;
                    var1 = var2[var1];
                    var5 = _closure2_slot4;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = var3.mode;
                    var3 = 'pressed';
                    if(!(var3 === var5)) { _fun0027_ip = 317; continue _fun0027 }
case 58:
                    var3 = null;
                    if(!(var3 == var1)) { _fun0027_ip = 138; continue _fun0027 }
case 317:
                    var5 = _closure2_slot4;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = var3.mode;
                    var3 = 'cancel';
                    var3 = var3 !== var5;
                    if(!var3) { _fun0027_ip = 136; continue _fun0027 }
case 121:
                    var5 = null;
                    var3 = var5 != var1;
case 136:
                    if(var3) { _fun0027_ip = 318; continue _fun0027 }
case 199:
                    var3 = var4.fail;
                    var3 = var3.bind(var4)();
                    var6 = _closure2_slot9;
                    var5 = var6.set;
                    var3 = false;
                    var3 = var5.bind(var6)(var3);
                    _fun0027_ip = 318; continue _fun0027;
case 138:
                    var5 = var1.absoluteX;
                    var9 = _closure2_slot4;
                    var3 = var9.get;
                    var3 = var3.bind(var9)();
                    var3 = var3.initialX;
                    var6 = var5 - var3;
                    var3 = global;
                    var7 = var3.Math;
                    var5 = var7.abs;
                    var8 = var1.absoluteY;
                    var3 = var9.get;
                    var3 = var3.bind(var9)();
                    var3 = var3.absoluteY;
                    var3 = var8 - var3;
                    var5 = var5.bind(var7)(var3);
                    var3 = 10;
                    if(!(var6 > var3)) { _fun0027_ip = 319; continue _fun0027 }
case 22:
                    if(!(!(var6 > var5))) { _fun0027_ip = 320; continue _fun0027 }
case 319:
                    if(!(var5 > var3)) { _fun0027_ip = 318; continue _fun0027 }
case 44:
                    var6 = _closure2_slot4;
                    var5 = var6.set;
                    var3 = {};
                    var7 = var6.get;
                    var10 = var7.bind(var6)();
                    var11 = var3;
                    var7 = copyDataProperties(var11, var10);
                    var8 = 'drag';
                    var7 = 'mode';
                    var3[var7] = var8;
                    var8 = var1.absoluteX;
                    var7 = 'initialX';
                    var3[var7] = var8;
                    var8 = var1.absoluteY;
                    var7 = 'initialY';
                    var3[var7] = var8;
                    var8 = var1.absoluteX;
                    var7 = 'absoluteX';
                    var3[var7] = var8;
                    var8 = var1.absoluteY;
                    var7 = 'absoluteY';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var3);
                    var3 = var4.activate;
                    var3 = var3.bind(var4)();
                    var6 = _closure2_slot9;
                    var5 = var6.set;
                    var3 = true;
                    var3 = var5.bind(var6)(var3);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var3 = var6[var3];
                    var6 = undefined;
                    var7 = var5.bind(var6)(var3);
                    var5 = var7.runOnJS;
                    var3 = _closure2_slot15;
                    var5 = var5.bind(var7)(var3);
                    var3 = var1.absoluteY;
                    var3 = var5.bind(var6)(var3);
                    _fun0027_ip = 318; continue _fun0027;
case 320:
                    var6 = _closure2_slot4;
                    var5 = var6.set;
                    var3 = {};
                    var7 = var6.get;
                    var10 = var7.bind(var6)();
                    var11 = var3;
                    var7 = copyDataProperties(var11, var10);
                    var8 = 'contextmenu';
                    var7 = 'mode';
                    var3[var7] = var8;
                    var8 = var1.absoluteX;
                    var7 = 'absoluteX';
                    var3[var7] = var8;
                    var8 = var1.absoluteY;
                    var7 = 'absoluteY';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var3);
                    var6 = _closure2_slot9;
                    var5 = var6.set;
                    var3 = false;
                    var3 = var5.bind(var6)(var3);
                    var3 = var4.activate;
                    var3 = var3.bind(var4)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var3 = var4[var3];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot14;
                    var3 = var3.bind(var5)(var2);
                    var2 = var1.absoluteX;
                    var1 = var1.absoluteY;
                    var1 = var3.bind(var4)(var2, var1);
case 318:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = {};
            var14['gestureState'] = var15;
            var16 = _closure2_slot9;
            var14['dragDropInProgress'] = var16;
            var16 = 10;
            var14['DRAG_GESTURE_MINIMUM_DISTANCE'] = var16;
            var16 = var13[var10];
            var16 = var12.bind(var11)(var16);
            var16 = var16.runOnJS;
            var14['runOnJS'] = var16;
            var16 = _closure2_slot14;
            var14['handleContextMenuDrag'] = var16;
            var17 = _closure2_slot15;
            var14['handleGuildDrag'] = var17;
            var5['__closure'] = var14;
            var14 = 15225957003871.0;
            var5['__workletHash'] = var14;
            var14 = _closure1_slot27;
            var5['__initData'] = var14;
            var8 = var6.bind(var8)(var5);
            var6 = var8.onUpdate;
            var5 = function n(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.absoluteX;
                    var3 = var1.absoluteY;
                    var4 = _closure2_slot4;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var4 = var2.mode;
                    var2 = 'drag';
                    if(!(var2 !== var4)) { _fun0028_ip = 138; continue _fun0028 }
case 315:
                    var4 = _closure2_slot4;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var4 = var2.mode;
                    var2 = 'contextmenu';
                    if(!(var2 === var4)) { _fun0028_ip = 321; continue _fun0028 }
case 322:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = undefined;
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot14;
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.bind(var4)(var8, var3);
                    _fun0028_ip = 321; continue _fun0028;
case 138:
                    var4 = _closure2_slot4;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2.absoluteX;
                    if(!(var8 === var2)) { _fun0028_ip = 323; continue _fun0028 }
case 124:
                    var4 = _closure2_slot4;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2.absoluteY;
                    if(!(var3 !== var2)) { _fun0028_ip = 321; continue _fun0028 }
case 323:
                    var4 = _closure2_slot4;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var7 = var2.initialY;
                    var9 = _closure2_slot8;
                    var2 = var9.get;
                    var2 = var2.bind(var9)();
                    var2 = var2.start;
                    var5 = 160;
                    var2 = var2 + var5;
                    var6 = _closure2_slot7;
                    var4 = var9.get;
                    var4 = var4.bind(var9)();
                    var4 = var4.end;
                    var4 = var6 - var4;
                    var4 = var4 - var5;
                    var2 = var7 < var2;
                    if(!var2) { _fun0028_ip = 324; continue _fun0028 }
case 132:
                    var2 = var3 > var7;
case 324:
                    if(var2) { _fun0028_ip = 325; continue _fun0028 }
case 326:
                    var4 = var7 > var4;
                    if(!var4) { _fun0028_ip = 327; continue _fun0028 }
case 24:
                    var4 = var3 < var7;
case 327:
                    var2 = var4;
case 325:
                    if(!var2) { _fun0028_ip = 328; continue _fun0028 }
case 329:
                    var7 = var3;
case 328:
                    var5 = _closure2_slot4;
                    var4 = var5.set;
                    var2 = {};
                    var6 = var5.get;
                    var10 = var6.bind(var5)();
                    var11 = var2;
                    var6 = copyDataProperties(var11, var10);
                    var6 = 'absoluteX';
                    var2[var6] = var8;
                    var6 = 'absoluteY';
                    var2[var6] = var3;
                    var6 = 'initialY';
                    var2[var6] = var7;
                    var2 = var4.bind(var5)(var2);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot15;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 321:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = {};
            var14['gestureState'] = var15;
            var19 = _closure2_slot8;
            var14['listInsets'] = var19;
            var19 = 160;
            var14['GESTURE_ACCELERATION_RANGE'] = var19;
            var18 = _closure2_slot7;
            var14['windowSize'] = var18;
            var18 = var13[var10];
            var18 = var12.bind(var11)(var18);
            var18 = var18.runOnJS;
            var14['runOnJS'] = var18;
            var14['handleGuildDrag'] = var17;
            var14['handleContextMenuDrag'] = var16;
            var5['__closure'] = var14;
            var14 = 14488930469604.0;
            var5['__workletHash'] = var14;
            var14 = _closure1_slot26;
            var5['__initData'] = var14;
            var8 = var6.bind(var8)(var5);
            var6 = var8.onEnd;
            var5 = function t() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var2.mode;
                    var2 = 'drag';
                    if(!(var2 !== var3)) { _fun0029_ip = 45; continue _fun0029 }
case 314:
                    var3 = _closure2_slot4;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var2.mode;
                    var2 = 'contextmenu';
                    if(!(var2 !== var3)) { _fun0029_ip = 13; continue _fun0029 }
case 330:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot11;
                    var3 = var3.bind(var5)(var2);
                    var2 = 'cancel';
                    var2 = var3.bind(var4)(var2);
                    _fun0029_ip = 331; continue _fun0029;
case 13:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot11;
                    var3 = var3.bind(var5)(var2);
                    var2 = 'contextmenu-open';
                    var2 = var3.bind(var4)(var2);
                    _fun0029_ip = 331; continue _fun0029;
case 45:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot11;
                    var2 = var2.bind(var4)(var1);
                    var1 = 'drop';
                    var1 = var2.bind(var3)(var1);
case 331:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = {};
            var14['gestureState'] = var15;
            var15 = var13[var10];
            var15 = var12.bind(var11)(var15);
            var15 = var15.runOnJS;
            var14['runOnJS'] = var15;
            var14['handleGestureEnd'] = var9;
            var5['__closure'] = var14;
            var14 = 3014467498258.0;
            var5['__workletHash'] = var14;
            var14 = _closure1_slot25;
            var5['__initData'] = var14;
            var6 = var6.bind(var8)(var5);
            var5 = var6.onTouchesCancelled;
            var1 = function e() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot11;
                var3 = var3.bind(var4)(var2);
                var2 = 'cancel';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = {};
            var10 = var13[var10];
            var10 = var12.bind(var11)(var10);
            var10 = var10.runOnJS;
            var8['runOnJS'] = var10;
            var8['handleGestureEnd'] = var9;
            var1['__closure'] = var8;
            var8 = 9715999020978.0;
            var1['__workletHash'] = var8;
            var7 = _closure1_slot24;
            var1['__initData'] = var7;
            var1 = var5.bind(var6)(var1);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var9.bind(var10)(var6, var8);
        var9 = var10.useEffect;
        var8 = function() {
            var3 = _closure1_slot9;
            var2 = var3.subscribe;
            var1 = function(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.dragSpecs;
                    var2 = var1.dropSpecs;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0030_ip = 28; continue _fun0030 }
case 54:
                    if(!(var1 == var2)) { _fun0030_ip = 28; continue _fun0030 }
case 37:
                    var2 = _closure2_slot2;
                    var4 = var2.current;
                    if(!(var1 != var4)) { _fun0030_ip = 332; continue _fun0030 }
case 333:
                    var3 = var4.setDisableRecycling;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
                    _fun0030_ip = 332; continue _fun0030;
case 28:
                    var2 = _closure2_slot2;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0030_ip = 332; continue _fun0030 }
case 334:
                    var2 = var3.setDisableRecycling;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 332:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = new Array(0);
        var1 = var9.bind(var10)(var8, var1);
        var1 = {};
        var1['scrollPosition'] = var7;
        var1['gesture'] = var6;
        var1['scrollerRef'] = var5;
        var1['fastListRef'] = var4;
        var1['persistantKeys'] = var3;
        var1['onFastListScroll'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();