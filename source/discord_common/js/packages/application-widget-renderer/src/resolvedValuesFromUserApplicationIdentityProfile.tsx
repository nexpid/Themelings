// discord_common/js/packages/application-widget-renderer/src/resolvedValuesFromUserApplicationIdentityProfile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot4;
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
            var7 = _closure1_slot4;
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
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var1;
    var1 = function isVisualUnfurledMedia(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.width;
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 36:
            var5 = var2.width;
            var3 = 0;
            var1 = var5 > var3;
case 34:
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var3 = var2.height;
            var1 = var4 != var3;
case 37:
            if(!var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var3 = var2.height;
            var2 = 0;
            var1 = var3 > var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function resolvedValuesFromProfileTopLevel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var4 = var3.username;
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 41; continue _fun0005 }
case 36:
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 1;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.ResolvedValueType;
            var4 = var4.STRING;
            var2['type'] = var4;
            var3 = var3.username;
            var2['value'] = var3;
            var1['username'] = var2;
case 41:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function resolvedValuesFromPrimary(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var1 = var1.data;
            var2 = null;
            var3 = var2 == var1;
            var15 = undefined;
            var4 = undefined;
            if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var4 = var1.primary;
case 42:
            var1 = {};
            if(!(var2 != var4)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.entries;
            var14 = var2.bind(var3)(var4);
            var2 = var14.length;
            var13 = 0;
            var2 = var13 < var2;
            var11 = 1;
            var10 = 'loading_state';
            var9 = 'proxy_url';
            var8 = 'url';
            var7 = 'object';
            var6 = 'number';
            var5 = 2;
            var4 = 'string';
            var3 = 0;
            if(!var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var16 = var14[var3];
            var2 = _closure1_slot2;
            var2 = var2.bind(var15)(var16, var5);
            var16 = var2[var13];
            var17 = var2[var11];
            var2 = typeof var17;
            if(!(var4 !== var2)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            if(!(var6 !== var2)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            if(!(var7 === var2)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var2 = var8 in var17;
            if(!var2) { _fun0006_ip = 52; continue _fun0006 }
case 54:
            var2 = var9 in var17;
            if(!var2) { _fun0006_ip = 52; continue _fun0006 }
case 55:
            var2 = var10 in var17;
            if(!var2) { _fun0006_ip = 52; continue _fun0006 }
case 56:
            var2 = _closure1_slot5;
            var2 = var2.bind(var15)(var17);
            if(!var2) { _fun0006_ip = 52; continue _fun0006 }
case 57:
            var2 = {};
            var19 = _closure1_slot0;
            var18 = _closure1_slot1;
            var18 = var18[var11];
            var18 = var19.bind(var15)(var18);
            var18 = var18.ResolvedValueType;
            var18 = var18.MEDIA;
            var2['type'] = var18;
            var18 = {};
            var19 = var17.proxy_url;
            var18['url'] = var19;
            var19 = var17.width;
            var18['width'] = var19;
            var19 = var17.height;
            var18['height'] = var19;
            var2['media'] = var18;
            var1[var16] = var2;
            _fun0006_ip = 52; continue _fun0006;
case 50:
            var2 = {};
            var19 = _closure1_slot0;
            var18 = _closure1_slot1;
            var18 = var18[var11];
            var18 = var19.bind(var15)(var18);
            var18 = var18.ResolvedValueType;
            var18 = var18.NUMBER;
            var2['type'] = var18;
            var2['value'] = var17;
            var1[var16] = var2;
            _fun0006_ip = 52; continue _fun0006;
case 48:
            var2 = {};
            var19 = _closure1_slot0;
            var18 = _closure1_slot1;
            var18 = var18[var11];
            var18 = var19.bind(var15)(var18);
            var18 = var18.ResolvedValueType;
            var18 = var18.STRING;
            var2['type'] = var18;
            var2['value'] = var17;
            var1[var16] = var2;
case 52:
            var3 = var3 + 1;
            var2 = var14.length;
            if(var3 < var2) { _fun0006_ip = 47; continue _fun0006 }
case 46:
            return var1;
case 44:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function resolvedValuesFromDynamic(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var1 = var1.data;
            var2 = null;
            var4 = var2 == var1;
            var8 = undefined;
            var3 = undefined;
            if(var4) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var3 = var1.dynamic;
case 42:
            var1 = {};
            if(!(var2 != var3)) { _fun0007_ip = 58; continue _fun0007 }
case 45:
            var2 = _closure1_slot3;
            var6 = var2.bind(var8)(var3);
            var3 = var6.bind(var8)();
            var2 = var3.done;
            var5 = 1;
            var4 = 2;
            if(var2) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var10 = var3.value;
            var9 = var10.type;
            var11 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var4];
            var2 = var11.bind(var8)(var2);
            var2 = var2.ProfileDataDynamicType;
            var2 = var2.STRING;
            if(!(var9 !== var2)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var9 = var10.type;
            var11 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var4];
            var2 = var11.bind(var8)(var2);
            var2 = var2.ProfileDataDynamicType;
            var2 = var2.NUMBER;
            if(!(var9 !== var2)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var9 = var10.type;
            var11 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var4];
            var2 = var11.bind(var8)(var2);
            var2 = var2.ProfileDataDynamicType;
            var2 = var2.MEDIA;
            if(!(var9 === var2)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var9 = _closure1_slot5;
            var2 = var10.value;
            var2 = var9.bind(var8)(var2);
            if(!var2) { _fun0007_ip = 65; continue _fun0007 }
case 67:
            var9 = var10.name;
            var2 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var5];
            var11 = var12.bind(var8)(var11);
            var11 = var11.ResolvedValueType;
            var11 = var11.MEDIA;
            var2['type'] = var11;
            var11 = {};
            var12 = var10.value;
            var12 = var12.proxy_url;
            var11['url'] = var12;
            var12 = var10.value;
            var12 = var12.width;
            var11['width'] = var12;
            var12 = var10.value;
            var12 = var12.height;
            var11['height'] = var12;
            var2['media'] = var11;
            var1[var9] = var2;
            _fun0007_ip = 65; continue _fun0007;
case 63:
            var9 = var10.name;
            var2 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var5];
            var11 = var12.bind(var8)(var11);
            var11 = var11.ResolvedValueType;
            var11 = var11.NUMBER;
            var2['type'] = var11;
            var11 = var10.value;
            var2['value'] = var11;
            var1[var9] = var2;
            _fun0007_ip = 65; continue _fun0007;
case 61:
            var9 = var10.name;
            var2 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var5];
            var11 = var12.bind(var8)(var11);
            var11 = var11.ResolvedValueType;
            var11 = var11.STRING;
            var2['type'] = var11;
            var10 = var10.value;
            var2['value'] = var10;
            var1[var9] = var2;
case 65:
            var9 = var6.bind(var8)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0007_ip = 60; continue _fun0007 }
case 59:
            return var1;
case 58:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var8 = 0;
    var5 = var7[var8];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot2 = var2;
    var2 = {};
    var2['UNKNOWN'] = var8;
    var5 = 'UNKNOWN';
    var2[var8] = var5;
    var8 = 1;
    var2['LOADING'] = var8;
    var5 = 'LOADING';
    var2[var8] = var5;
    var8 = 2;
    var2['LOADED_SUCCESS'] = var8;
    var5 = 'LOADED_SUCCESS';
    var2[var8] = var5;
    var5 = 3;
    var2['LOADED_NOT_FOUND'] = var5;
    var8 = 'LOADED_NOT_FOUND';
    var2[var5] = var8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/application-widget-renderer/src/resolvedValuesFromUserApplicationIdentityProfile.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function resolvedValuesFromUserApplicationIdentityProfile(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var1 = {};
            var5 = _closure1_slot6;
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var5 = _closure1_slot7;
            var6 = var5.bind(var3)(var4);
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var2 = _closure1_slot8;
            var6 = var2.bind(var3)(var4);
            var7 = var1;
            var2 = copyDataProperties(var7, var6);
            _fun0008_ip = 70; continue _fun0008;
case 68:
            var1 = {};
case 70:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['UnfurledMediaLoadingState'] = var2;
    return var1;
})();