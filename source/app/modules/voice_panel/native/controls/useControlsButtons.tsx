// app/modules/voice_panel/native/controls/useControlsButtons.tsx
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CONTROLS_BUTTON_SIZE_LARGE;
    var _closure1_slot5 = var7;
    var4 = var4.CONTROLS_BUTTON_SIZE_NORMAL;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InputModes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = function mic(arg1, arg2) {
        var5 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var3 = var1.MicButton;
        var2 = {};
        var7 = arg2;
        var8 = var2;
        var1 = copyDataProperties(var8, var7);
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var4['mic'] = var7;
    var7 = function ptt(arg1, arg2) {
        var5 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var3 = var1.PTTButton;
        var2 = {};
        var7 = arg2;
        var8 = var2;
        var1 = copyDataProperties(var8, var7);
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var4['ptt'] = var7;
    var7 = function micConnected(arg1, arg2) {
        var5 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var3 = var1.MicButton;
        var2 = {};
        var7 = arg2;
        var8 = var2;
        var1 = copyDataProperties(var8, var7);
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var4['micConnected'] = var7;
    var7 = function connect(arg1, arg2) {
        var5 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = {};
        var7 = arg2;
        var8 = var2;
        var1 = copyDataProperties(var8, var7);
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var4['connect'] = var7;
    var7 = function chat(arg1, arg2) {
        var5 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 7;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = {};
        var7 = arg2;
        var8 = var2;
        var1 = copyDataProperties(var8, var7);
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var4['chat'] = var7;
    var7 = function disconnectCancel(arg1, arg2) {
        var5 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = {};
        var7 = arg2;
        var8 = var2;
        var1 = copyDataProperties(var8, var7);
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var4['disconnectCancel'] = var7;
    var7 = function video(arg1, arg2) {
        var5 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 9;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = {};
        var7 = arg2;
        var8 = var2;
        var1 = copyDataProperties(var8, var7);
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var4['video'] = var7;
    var7 = function activities(arg1, arg2) {
        var5 = _closure1_slot8;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var2 = {};
        var7 = arg2;
        var8 = var2;
        var1 = copyDataProperties(var8, var7);
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var4['activities'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/useControlsButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useControlsButtons() {
        var4 = _closure1_slot3;
        var3 = var4.useContext;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 11;
        var2 = var9[var2];
        var5 = undefined;
        var2 = var8.bind(var5)(var2);
        var2 = var3.bind(var4)(var2);
        var3 = var2.channelId;
        var14 = var2.windowDimensions;
        var _closure2_slot0 = var14;
        var13 = var2.safeArea;
        var _closure2_slot1 = var13;
        var2 = 12;
        var2 = var9[var2];
        var2 = var8.bind(var5)(var2);
        var7 = var2.bind(var5)(var3);
        var _closure2_slot2 = var7;
        var16 = _closure1_slot0;
        var2 = 13;
        var2 = var9[var2];
        var10 = var16.bind(var5)(var2);
        var6 = var10.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getMode;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot7;
            var1 = var1.PUSH_TO_TALK;
            var1 = var2 === var1;
            return var1;
        };
        var6 = var6.bind(var10)(var3, var2);
        var _closure2_slot3 = var6;
        var2 = 14;
        var2 = var9[var2];
        var10 = var16.bind(var5)(var2);
        var3 = var10.useDerivedValue;
        var2 = function n() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.getControlsDefaultWidth;
            var3 = _closure2_slot0;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var3 = var2.width;
            var6 = _closure2_slot1;
            var1 = var6.get;
            var1 = var1.bind(var6)();
            var2 = var1.left;
            var1 = var6.get;
            var1 = var1.bind(var6)();
            var1 = var1.right;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var12 = {};
        var15 = 15;
        var15 = var9[var15];
        var15 = var16.bind(var5)(var15);
        var15 = var15.getControlsDefaultWidth;
        var12['getControlsDefaultWidth'] = var15;
        var12['windowDimensions'] = var14;
        var12['safeArea'] = var13;
        var2['__closure'] = var12;
        var12 = 16456936876254.0;
        var2['__workletHash'] = var12;
        var11 = _closure1_slot10;
        var2['__initData'] = var11;
        var3 = var3.bind(var10)(var2);
        var2 = 16;
        var2 = var9[var2];
        var2 = var8.bind(var5)(var2);
        var5 = var2.bind(var5)(var3);
        var _closure2_slot4 = var5;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = false;
                var _closure3_slot0 = var1;
                var1 = 0;
                var _closure3_slot1 = var1;
                var2 = _closure2_slot2;
                var1 = _closure2_slot3;
                var4 = new Array(0);
                var6 = var4.push;
                if(var2) { _fun0004_ip = 149; continue _fun0004 }
 37:
                var2 = {'type': 'icon-normal', 'key': 'disconnected-mute'};
                var7 = _closure1_slot9;
                var5 = var7.mic;
                var2['render'] = var5;
                var2 = var6.bind(var4)(var2);
                var5 = var4.push;
                var2 = {'type': 'label', 'key': 'disconnected-connect'};
                var8 = var7.connect;
                var2['render'] = var8;
                var2 = var5.bind(var4)(var2);
                var5 = var4.push;
                var2 = {'type': 'icon-normal', 'key': 'disconnected-chat'};
                var7 = var7.chat;
                var2['render'] = var7;
                var2 = var5.bind(var4)(var2);
                _fun0004_ip = 383; continue _fun0004;
 149:
                var2 = {'type': 'icon-normal', 'key': 'connected-video'};
                var7 = _closure1_slot9;
                var7 = var7.video;
                var2['render'] = var7;
                var2 = var6.bind(var4)(var2);
                if(var1) { _fun0004_ip = 228; continue _fun0004 }
 189:
                var6 = var4.push;
                var2 = {'type': 'icon-normal', 'key': 'connected-mic'};
                var7 = _closure1_slot9;
                var7 = var7.micConnected;
                var2['render'] = var7;
                var2 = var6.bind(var4)(var2);
 228:
                var6 = var4.push;
                var2 = {'type': 'icon-normal', 'key': 'connected-chat'};
                var7 = _closure1_slot9;
                var7 = var7.chat;
                var2['render'] = var7;
                var2 = var6.bind(var4)(var2);
                if(!var1) { _fun0004_ip = 309; continue _fun0004 }
 270:
                var2 = var4.push;
                var1 = {'type': 'icon-large', 'key': 'connected-ptt'};
                var6 = _closure1_slot9;
                var6 = var6.ptt;
                var1['render'] = var6;
                var1 = var2.bind(var4)(var1);
 309:
                var2 = var4.push;
                var1 = {'type': 'icon-normal', 'key': 'connected-activities'};
                var5 = _closure1_slot9;
                var6 = var5.activities;
                var1['render'] = var6;
                var1 = var2.bind(var4)(var1);
                var2 = var4.push;
                var1 = {'type': 'icon-normal', 'key': 'connected-disconnect'};
                var5 = var5.disconnectCancel;
                var1['render'] = var5;
                var1 = var2.bind(var4)(var1);
 383:
                var2 = var4.map;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = arg1;
                        var1 = var3.type;
                        var5 = 'label';
                        if(!(var5 === var1)) { _fun0005_ip = 25; continue _fun0005 }
 16:
                        var1 = true;
                        _closure3_slot0 = var1;
 25:
                        var2 = _closure1_slot6;
                        var6 = var3.type;
                        var4 = 'icon-large';
                        if(!(var4 === var6)) { _fun0005_ip = 69; continue _fun0005 }
 47:
                        var7 = _closure3_slot1;
                        var4 = 1;
                        var4 = var7 + var4;
                        _closure3_slot1 = var4;
                        var2 = _closure1_slot5;
 69:
                        var1 = {};
                        var9 = var1;
                        var8 = var3;
                        var4 = copyDataProperties(var9, var8);
                        var4 = 'height';
                        var1[var4] = var2;
                        var4 = var3.type;
                        var3 = -1;
                        if(!(var5 !== var4)) { _fun0005_ip = 108; continue _fun0005 }
 105:
                        var3 = var2;
 108:
                        var2 = 'width';
                        var1[var2] = var3;
                        var3 = 0;
                        var2 = 'x';
                        var1[var2] = var3;
                        var2 = 'y';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var1 = var2.bind(var4)(var1);
                var2 = _closure3_slot0;
                var12 = 16;
                var11 = var12;
                if(var2) { _fun0004_ip = 484; continue _fun0004 }
 413:
                var5 = _closure2_slot4;
                var6 = _closure3_slot1;
                var4 = _closure1_slot5;
                var4 = var6 * var4;
                var4 = var5 - var4;
                var5 = var1.length;
                var3 = _closure3_slot1;
                var3 = var5 - var3;
                var2 = _closure1_slot6;
                var2 = var3 * var2;
                var5 = var1.length;
                var3 = 1;
                var3 = var5 - var3;
                var4 = var4 - var2;
                var2 = 32;
                var2 = var4 - var2;
                var11 = var2 / var3;
 484:
                var2 = _closure1_slot11;
                var9 = undefined;
                var8 = var2.bind(var9)(var1);
                var3 = var8.bind(var9)();
                var2 = var3.done;
                var7 = 2;
                var6 = 1;
                var5 = 32;
                var4 = -1;
                if(var2) { _fun0004_ip = 643; continue _fun0004 }
 525:
                var15 = var3.value;
                var2 = var15.width;
                if(!(var4 === var2)) { _fun0004_ip = 594; continue _fun0004 }
 539:
                var14 = var1.length;
                var16 = var14 - var6;
                var14 = _closure1_slot6;
                var17 = var16 * var14;
                var14 = var1.length;
                var14 = var14 - var6;
                var16 = _closure2_slot4;
                var17 = var5 + var17;
                var14 = var14 * var11;
                var14 = var17 + var14;
                var14 = var16 - var14;
                var15['width'] = var14;
                var2 = var14;
 594:
                var14 = _closure2_slot4;
                var14 = var14 / var7;
                var16 = var2 / var7;
                var14 = var12 - var14;
                var14 = var14 + var16;
                var15['x'] = var14;
                var2 = var2 + var11;
                var12 = var12 + var2;
                var14 = var8.bind(var9)();
                var2 = var14.done;
                var3 = var14;
                if(!var2) { _fun0004_ip = 525; continue _fun0004 }
 643:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();