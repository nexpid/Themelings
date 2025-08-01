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
            var9 = _closure1_slot5;
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
            var7 = _closure1_slot5;
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
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var1;
    var2 = function validateOptionContent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var5 = var1.option;
            var6 = var1.content;
            var12 = var1.guildId;
            var11 = var1.channelId;
            var2 = var1.allowEmptyValues;
            var10 = var1.commandOrigin;
            var7 = undefined;
            if(!(var10 === var7)) { _fun0004_ip = 77; continue _fun0004 }
 42:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var1 = var3.bind(var7)(var1);
            var1 = var1.CommandOrigin;
            var10 = var1.CHAT;
 77:
            var9 = null;
            var1 = var9 != var6;
            var3 = '';
            var4 = var3;
            if(!var1) { _fun0004_ip = 148; continue _fun0004 }
 93:
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
 148:
            var1 = var5.required;
            if(!(var9 != var6)) { _fun0004_ip = 411; continue _fun0004 }
 161:
            if(!(var3 !== var4)) { _fun0004_ip = 297; continue _fun0004 }
 168:
            var8 = var6.length;
            var3 = 1;
            if(!(!(var8 > var3))) { _fun0004_ip = 188; continue _fun0004 }
 180:
            var3 = 0;
            var8 = var6[var3];
            _fun0004_ip = 205; continue _fun0004;
 188:
            var3 = {};
            var6 = 'text';
            var3['type'] = var6;
            var3['text'] = var4;
            var8 = var3;
 205:
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
            if(var6) { _fun0004_ip = 277; continue _fun0004 }
 268:
            var8 = var3.error;
            var6 = var9 != var8;
 277:
            if(var6) { _fun0004_ip = 295; continue _fun0004 }
 280:
            var4 = _closure1_slot3;
            var4 = var4.bind(var7)(var5);
            var3['error'] = var4;
 295:
            return var3;
 297:
            if(var2) { _fun0004_ip = 397; continue _fun0004 }
 300:
            var3 = {};
            var2 = false;
            var3['success'] = var2;
            if(var1) { _fun0004_ip = 333; continue _fun0004 }
 315:
            var2 = _closure1_slot3;
            var2 = var2.bind(var7)(var5);
            var3['error'] = var2;
            var2 = var3;
            _fun0004_ip = 395; continue _fun0004;
 333:
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
 395:
            _fun0004_ip = 409; continue _fun0004;
 397:
            var3 = {};
            var4 = true;
            var3['success'] = var4;
            var2 = var3;
 409:
            return var2;
 411:
            if(var1) { _fun0004_ip = 425; continue _fun0004 }
 414:
            var1 = {};
            var2 = true;
            var1['success'] = var2;
            _fun0004_ip = 499; continue _fun0004;
 425:
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
 499:
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
 0:
            var10 = arg2;
            var9 = arg3;
            var8 = arg4;
            var7 = arg5;
            var1 = {};
            var2 = arg1;
            var3 = var2.options;
            var2 = null;
            if(!(var2 != var3)) { _fun0005_ip = 127; continue _fun0005 }
 28:
            var2 = _closure1_slot4;
            var5 = undefined;
            var4 = var2.bind(var5)(var3);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 125; continue _fun0005 }
 54:
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
            if(!var2) { _fun0005_ip = 54; continue _fun0005 }
 125:
            return var1;
 127:
            return var1;
        }
    };
    var3['getValidationResults'] = var4;
    var3['validateOptionContent'] = var2;
    return var1;
})();