// app/modules/polls/parsePollResultSystemMessageEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
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
            var9 = _closure1_slot1;
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
            var7 = _closure1_slot1;
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
    var _closure1_slot0 = var1;
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
    var _closure1_slot1 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/parsePollResultSystemMessageEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function parsePollResultSystemMessageEmbed(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = var1 == var4;
            var18 = undefined;
            var2 = undefined;
            if(var3) { _fun0004_ip = 22; continue _fun0004 }
 16:
            var2 = var4.fields;
 22:
            if(!(var1 != var2)) { _fun0004_ip = 373; continue _fun0004 }
 29:
            var2 = {};
            var3 = {};
            var5 = _closure1_slot0;
            var4 = var4.fields;
            var17 = var5.bind(var18)(var4);
            var5 = var17.bind(var18)();
            var4 = var5.done;
            var16 = global;
            var15 = 10;
            var14 = 'true';
            var13 = 'victor_answer_emoji_animated';
            var12 = 'victor_answer_emoji_name';
            var11 = 'victor_answer_emoji_id';
            var10 = 'total_votes';
            var9 = 'victor_answer_votes';
            var8 = 'victor_answer_text';
            var7 = 'victor_answer_id';
            var6 = 'poll_question_text';
            if(var4) { _fun0004_ip = 334; continue _fun0004 }
 123:
            var4 = var5.value;
            var19 = var4.rawName;
            if(!(var6 !== var19)) { _fun0004_ip = 304; continue _fun0004 }
 141:
            if(!(var7 !== var19)) { _fun0004_ip = 290; continue _fun0004 }
 148:
            if(!(var8 !== var19)) { _fun0004_ip = 276; continue _fun0004 }
 155:
            if(!(var9 !== var19)) { _fun0004_ip = 250; continue _fun0004 }
 159:
            if(!(var10 !== var19)) { _fun0004_ip = 224; continue _fun0004 }
 163:
            if(!(var11 !== var19)) { _fun0004_ip = 210; continue _fun0004 }
 167:
            if(!(var12 !== var19)) { _fun0004_ip = 196; continue _fun0004 }
 171:
            if(!(var13 === var19)) { _fun0004_ip = 316; continue _fun0004 }
 178:
            var19 = var4.rawValue;
            var19 = var14 === var19;
            var3['animated'] = var19;
            _fun0004_ip = 316; continue _fun0004;
 196:
            var19 = var4.rawValue;
            var3['name'] = var19;
            _fun0004_ip = 316; continue _fun0004;
 210:
            var19 = var4.rawValue;
            var3['id'] = var19;
            _fun0004_ip = 316; continue _fun0004;
 224:
            var20 = var16.parseInt;
            var19 = var4.rawValue;
            var19 = var20.bind(var18)(var19, var15);
            var2['totalVotes'] = var19;
            _fun0004_ip = 316; continue _fun0004;
 250:
            var20 = var16.parseInt;
            var19 = var4.rawValue;
            var19 = var20.bind(var18)(var19, var15);
            var2['victorAnswerVotes'] = var19;
            _fun0004_ip = 316; continue _fun0004;
 276:
            var19 = var4.rawValue;
            var2['victorAnswerText'] = var19;
            _fun0004_ip = 316; continue _fun0004;
 290:
            var19 = var4.rawValue;
            var2['victorAnswerId'] = var19;
            _fun0004_ip = 316; continue _fun0004;
 304:
            var4 = var4.rawValue;
            var2['questionText'] = var4;
 316:
            var19 = var17.bind(var18)();
            var4 = var19.done;
            var5 = var19;
            if(!var4) { _fun0004_ip = 123; continue _fun0004 }
 334:
            var4 = var3.name;
            if(!(var1 != var4)) { _fun0004_ip = 371; continue _fun0004 }
 343:
            var5 = var3.animated;
            var4 = var1 != var5;
            if(!var4) { _fun0004_ip = 359; continue _fun0004 }
 356:
            var4 = var5;
 359:
            var3['animated'] = var4;
            var2['victorEmoji'] = var3;
 371:
            return var2;
 373:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();