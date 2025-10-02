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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
case 0:
                var1 = false;
                var _closure3_slot0 = var1;
                var1 = 0;
                var _closure3_slot1 = var1;
                var2 = _closure2_slot2;
                var1 = _closure2_slot3;
                var4 = new Array(0);
                var6 = var4.push;
                if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
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
                _fun0004_ip = 38; continue _fun0004;
case 36:
                var2 = {'type': 'icon-normal', 'key': 'connected-video'};
                var7 = _closure1_slot9;
                var7 = var7.video;
                var2['render'] = var7;
                var2 = var6.bind(var4)(var2);
                if(var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                var6 = var4.push;
                var2 = {'type': 'icon-normal', 'key': 'connected-mic'};
                var7 = _closure1_slot9;
                var7 = var7.micConnected;
                var2['render'] = var7;
                var2 = var6.bind(var4)(var2);
case 39:
                var6 = var4.push;
                var2 = {'type': 'icon-normal', 'key': 'connected-chat'};
                var7 = _closure1_slot9;
                var7 = var7.chat;
                var2['render'] = var7;
                var2 = var6.bind(var4)(var2);
                if(!var1) { _fun0004_ip = 41; continue _fun0004 }
case 12:
                var2 = var4.push;
                var1 = {'type': 'icon-large', 'key': 'connected-ptt'};
                var6 = _closure1_slot9;
                var6 = var6.ptt;
                var1['render'] = var6;
                var1 = var2.bind(var4)(var1);
case 41:
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
case 38:
                var2 = var4.map;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3.type;
                        var5 = 'label';
                        if(!(var5 === var1)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                        var1 = true;
                        _closure3_slot0 = var1;
case 42:
                        var2 = _closure1_slot6;
                        var6 = var3.type;
                        var4 = 'icon-large';
                        if(!(var4 === var6)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                        var7 = _closure3_slot1;
                        var4 = 1;
                        var4 = var7 + var4;
                        _closure3_slot1 = var4;
                        var2 = _closure1_slot5;
case 44:
                        var1 = {};
                        var9 = var1;
                        var8 = var3;
                        var4 = copyDataProperties(var9, var8);
                        var4 = 'height';
                        var1[var4] = var2;
                        var4 = var3.type;
                        var3 = -1;
                        if(!(var5 !== var4)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                        var3 = var2;
case 46:
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
                if(var2) { _fun0004_ip = 48; continue _fun0004 }
case 49:
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
case 48:
                var2 = _closure1_slot11;
                var9 = undefined;
                var8 = var2.bind(var9)(var1);
                var3 = var8.bind(var9)();
                var2 = var3.done;
                var7 = 2;
                var6 = 1;
                var5 = 32;
                var4 = -1;
                if(var2) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                var15 = var3.value;
                var2 = var15.width;
                if(!(var4 === var2)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
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
case 52:
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
                if(!var2) { _fun0004_ip = 51; continue _fun0004 }
case 50:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();