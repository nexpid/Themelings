// discord_common/js/shared/utils/DOMUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var3, var4, var5);
    var4 = /input/i;
    var _closure1_slot0 = var4;
    var4 = /textarea/i;
    var _closure1_slot1 = var4;
    var5 = var1.Set;
    var1 = var5.prototype;
    var4 = Object.create(var1, {constructor: {value: var5}});
    var10 = ['text', 'password', 'number', 'date', 'datetime-local', 'time', 'week', 'month', 'email', 'search', 'tel', 'url'];
    var11 = var4;
    var1 = new var11[var5](var10, var9);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot2 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/utils/DOMUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isElement(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var3.ownerDocument;
            var7 = var1 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = var6.defaultView;
case 4:
            if(!(var1 != var4)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var1 == var2;
            var5 = undefined;
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var2.name;
case 9:
            var6 = var1 != var5;
            var2 = 'Element';
            if(!var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var5;
case 11:
            var2 = var4[var2];
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = var3 instanceof var2;
case 13:
            return var1;
case 7:
            var1 = false;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var3['isElement'] = var4;
    var4 = function cssValueToNumber(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = global;
            var5 = var1.parseInt;
            var3 = undefined;
            var4 = arg1;
            var2 = 10;
            var2 = var5.bind(var3)(var4, var2);
            var1 = var1.isNaN;
            var3 = var1.bind(var3)(var2);
            var1 = 0;
            if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['cssValueToNumber'] = var4;
    var4 = function isInputLikeElement(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            if(!(var3 != var5)) { _fun0003_ip = 17; continue _fun0003 }
case 3:
            var2 = var5.getAttribute;
            var1 = 'contenteditable';
            var2 = var2.bind(var5)(var1);
            var1 = 'true';
            if(!(var1 !== var2)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var6 = _closure1_slot1;
            var4 = var6.test;
            var2 = var5.tagName;
            var2 = var4.bind(var6)(var2);
            if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = _closure1_slot0;
            var4 = var6.test;
            var2 = var5.tagName;
            var2 = var4.bind(var6)(var2);
            if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var4 = var5.getAttribute;
            var2 = 'type';
            var2 = var4.bind(var5)(var2);
            var4 = var3 != var2;
            var3 = 'text';
            if(!var4) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = var2;
case 24:
            var2 = _closure1_slot2;
            var1 = var2.has;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0003_ip = 26; continue _fun0003 }
case 22:
            var1 = false;
            return var1;
case 26:
            var1 = true;
            return var1;
case 20:
            var1 = true;
            return var1;
case 18:
            var1 = true;
            return var1;
case 17:
            var1 = false;
            return var1;
        }
    };
    var3['isInputLikeElement'] = var4;
    var4 = function removeNode(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = var3.parentNode;
            var1 = null;
            if(!(var1 != var2)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var2 = var3.parentNode;
            var1 = var2.removeChild;
            var1 = var1.bind(var2)(var3);
case 27:
            var1 = undefined;
            return var1;
        }
    };
    var3['removeNode'] = var4;
    var4 = function eventOwnerDocument(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.target;
            var2 = null;
            var4 = var2 == var3;
            var1 = null;
            if(var4) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var4 = 'ownerDocument';
            var4 = var4 in var3;
            if(var4) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var4 = 'document';
            var4 = var4 in var3;
            var2 = null;
            if(!var4) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var2 = var3.document;
case 33:
            _fun0005_ip = 35; continue _fun0005;
case 31:
            var2 = var3.ownerDocument;
case 35:
            var1 = var2;
case 29:
            return var1;
        }
    };
    var3['eventOwnerDocument'] = var4;
    var4 = function clickedOnVisibleImage(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var1 = arg3;
            var5 = arg4;
            var4 = var1.width;
            var8 = var1.height;
            var2 = var5.top;
            var9 = var5.left;
            var1 = var5.width;
            var5 = var5.height;
            var7 = global;
            var13 = var7.Math;
            var12 = var13.min;
            var11 = var1 / var4;
            var10 = var5 / var8;
            var7 = 1;
            var7 = var12.bind(var13)(var11, var10, var7);
            var4 = var4 * var7;
            var7 = var8 * var7;
            var5 = var5 - var7;
            var8 = 2;
            var5 = var5 / var8;
            var5 = var5 + var9;
            var1 = var1 - var4;
            var1 = var1 / var8;
            var2 = var1 + var2;
            var1 = var6 >= var5;
            if(!var1) { _fun0006_ip = 36; continue _fun0006 }
case 24:
            var5 = var5 + var7;
            var1 = var6 <= var5;
case 36:
            if(!var1) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var1 = var3 >= var2;
case 37:
            if(!var1) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var2 = var2 + var4;
            var1 = var3 <= var2;
case 39:
            return var1;
        }
    };
    var3['clickedOnVisibleImage'] = var4;
    var2 = function getParentElementByClassName(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg2;
            var1 = arg1;
            var3 = var1.parentElement;
            var2 = null;
            if(!(var2 != var3)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
            var5 = var3.classList;
            var1 = var5.contains;
            var5 = var1.bind(var5)(var4);
            var1 = var3;
            if(var5) { _fun0007_ip = 43; continue _fun0007 }
case 15:
            var3 = var1.parentElement;
            if(var2 != var3) { _fun0007_ip = 42; continue _fun0007 }
case 41:
            return var2;
case 43:
            return var1;
        }
    };
    var3['getParentElementByClassName'] = var2;
    return var1;
})();