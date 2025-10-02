// app/modules/application_commands/ApplicationCommandValidationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
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
            var9 = _closure1_slot5;
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
            var7 = _closure1_slot5;
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
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var1;
    var2 = function validateOptionContent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = var1.option;
            var6 = var1.content;
            var12 = var1.guildId;
            var11 = var1.channelId;
            var2 = var1.allowEmptyValues;
            var10 = var1.commandOrigin;
            var7 = undefined;
            if(!(var10 === var7)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var1 = var3.bind(var7)(var1);
            var1 = var1.CommandOrigin;
            var10 = var1.CHAT;
case 36:
            var9 = null;
            var1 = var9 != var6;
            var3 = '';
            var4 = var3;
            if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 2;
            var1 = var13[var1];
            var14 = var8.bind(var7)(var1);
            var13 = var14.getString;
            var8 = {};
            var8['content'] = var6;
            var1 = 'content';
            var8 = var13.bind(var14)(var8, var1);
            var1 = var8.trim;
            var4 = var1.bind(var8)();
case 38:
            var1 = var5.required;
            if(!(var9 != var6)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            if(!(var3 !== var4)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var8 = var6.length;
            var3 = 1;
            if(!(!(var8 > var3))) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var3 = 0;
            var8 = var6[var3];
            _fun0004_ip = 22; continue _fun0004;
case 44:
            var3 = {};
            var6 = 'text';
            var3['type'] = var6;
            var3['text'] = var4;
            var8 = var3;
case 22:
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 4;
            var3 = var13[var3];
            var6 = var6.bind(var7)(var3);
            var3 = var5.type;
            var3 = var6[var3];
            var20 = var6;
            var19 = var8;
            var18 = var5;
            var17 = var11;
            var16 = var12;
            var15 = var10;
            var3 = var20[var3](var19, var18, var17, var16, var15, var14);
            var6 = var3.success;
            if(var6) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var8 = var3.error;
            var6 = var9 != var8;
case 46:
            if(var6) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var4 = _closure1_slot3;
            var4 = var4.bind(var7)(var5);
            var3['error'] = var4;
case 48:
            return var3;
case 42:
            if(var2) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var3 = {};
            var2 = false;
            var3['success'] = var2;
            if(var1) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var2 = _closure1_slot3;
            var2 = var2.bind(var7)(var5);
            var3['error'] = var2;
            var2 = var3;
            _fun0004_ip = 54; continue _fun0004;
case 52:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 3;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.JZJQLy;
            var4 = var5.bind(var6)(var4);
            var3['error'] = var4;
            var2 = var3;
case 54:
            _fun0004_ip = 55; continue _fun0004;
case 50:
            var3 = {};
            var4 = true;
            var3['success'] = var4;
            var2 = var3;
case 55:
            return var2;
case 40:
            if(var1) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            _fun0004_ip = 58; continue _fun0004;
case 56:
            var2 = {};
            var3 = false;
            var2['success'] = var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.JZJQLy;
            var3 = var4.bind(var5)(var3);
            var2['error'] = var3;
            var1 = var2;
case 58:
            return var1;
        }
    };
    var _closure1_slot6 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.getValidationErrorText;
    var _closure1_slot3 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/ApplicationCommandValidationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function getValidationResults(arg1, arg2, arg3, arg4, arg5) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var10 = arg2;
            var9 = arg3;
            var8 = arg4;
            var7 = arg5;
            var1 = {};
            var2 = arg1;
            var3 = var2.options;
            var2 = null;
            if(!(var2 != var3)) { _fun0005_ip = 59; continue _fun0005 }
case 34:
            var2 = _closure1_slot4;
            var5 = undefined;
            var4 = var2.bind(var5)(var3);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var14 = var3.value;
            var2 = var14.name;
            var13 = var10[var2];
            var11 = var14.name;
            var12 = _closure1_slot6;
            var2 = {};
            var2['option'] = var14;
            var2['content'] = var13;
            var2['guildId'] = var9;
            var2['channelId'] = var8;
            var2['allowEmptyValues'] = var7;
            var2 = var12.bind(var5)(var2);
            var1[var11] = var2;
            var11 = var4.bind(var5)();
            var2 = var11.done;
            var3 = var11;
            if(!var2) { _fun0005_ip = 61; continue _fun0005 }
case 60:
            return var1;
case 59:
            return var1;
        }
    };
    var3['getValidationResults'] = var4;
    var3['validateOptionContent'] = var2;
    return var1;
})();