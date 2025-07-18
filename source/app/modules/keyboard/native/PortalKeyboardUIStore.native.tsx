// app/modules/keyboard/native/PortalKeyboardUIStore.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function closePortalKeyboard() {
        var4 = _closure1_slot2;
        var3 = var4.setState;
        var2 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 1;
        var5 = var5[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var5 = var5.PortalKeyboardState;
        var5 = var5.CLOSED;
        var2['state'] = var5;
        var5 = null;
        var2['keyboard'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var6 = var5.createZustandStore;
    var5 = function() {
        var1 = {};
        var2 = null;
        var1['keyboard'] = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.PortalKeyboardState;
        var2 = var2.EMPTY;
        var1['state'] = var2;
        var2 = new Array(0);
        var1['renderers'] = var2;
        return var1;
    };
    var6 = var6.bind(var1)(var5);
    var _closure1_slot2 = var6;
    var5 = {};
    var9 = var6.getField;
    var5['getField'] = var9;
    var6 = var6.useField;
    var5['useField'] = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/keyboard/native/PortalKeyboardUIStore.native.tsx';
    var6 = var7.bind(var8)(var6);
    var3['PortalKeyboardUIStore'] = var5;
    var5 = function openPortalKeyboard(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var9 = arg2;
            var2 = _closure1_slot2;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var6 = var1.state;
            var4 = var1.keyboard;
            var3 = null;
            var7 = var3 == var4;
            var1 = undefined;
            var2 = undefined;
            if(var7) { _fun0001_ip = 52; continue _fun0001 }
 47:
            var2 = var4.type;
 52:
            var2 = var2 === var10;
            if(!var2) { _fun0001_ip = 77; continue _fun0001 }
 59:
            var7 = var3 == var4;
            var3 = undefined;
            if(var7) { _fun0001_ip = 73; continue _fun0001 }
 68:
            var3 = var4.channelId;
 73:
            var2 = var3 === var9;
 77:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = 1;
            var3 = var3[var7];
            var3 = var4.bind(var1)(var3);
            var3 = var3.PortalKeyboardState;
            var3 = var3.REQUEST_OPEN;
            var3 = var6 === var3;
            if(var3) { _fun0001_ip = 149; continue _fun0001 }
 116:
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var8.bind(var1)(var4);
            var4 = var4.PortalKeyboardState;
            var4 = var4.OPENING;
            var3 = var6 === var4;
 149:
            if(var3) { _fun0001_ip = 185; continue _fun0001 }
 152:
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var8.bind(var1)(var4);
            var4 = var4.PortalKeyboardState;
            var4 = var4.OPEN;
            var3 = var6 === var4;
 185:
            if(!var2) { _fun0001_ip = 191; continue _fun0001 }
 188:
            var2 = var3;
 191:
            if(var2) { _fun0001_ip = 293; continue _fun0001 }
 194:
            var4 = _closure1_slot2;
            var3 = var4.setState;
            var2 = {};
            var8 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var11 = 2;
            var11 = var5[var11];
            var12 = var6.bind(var1)(var11);
            var11 = var12.v4;
            var11 = var11.bind(var12)();
            var8['id'] = var11;
            var8['type'] = var10;
            var8['channelId'] = var9;
            var9 = arg3;
            var8['chatInputRef'] = var9;
            var2['keyboard'] = var8;
            var5 = var5[var7];
            var5 = var6.bind(var1)(var5);
            var5 = var5.PortalKeyboardState;
            var5 = var5.REQUEST_OPEN;
            var2['state'] = var5;
            var2 = var3.bind(var4)(var2);
 293:
            return var1;
        }
    };
    var3['openPortalKeyboard'] = var5;
    var5 = function registerPortalKeyboardRenderer(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot2;
        var3 = var4.setState;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var5 = var3.renderers;
                var2 = var5.includes;
                var1 = _closure2_slot0;
                var2 = var2.bind(var5)(var1);
                var1 = var3;
                if(var2) { _fun0002_ip = 77; continue _fun0002 }
 32:
                var2 = {};
                var8 = var3.renderers;
                var3 = new Array(1);
                var7 = 0;
                var9 = var3;
                var5 = arraySpread(var9, var8, var7);
                var4 = _closure2_slot0;
                var3[var5] = var4;
                var4 = 1;
                var4 = var5 + var4;
                var2['renderers'] = var3;
                var1 = var2;
 77:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = function() {
            var3 = _closure1_slot2;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var4 = var2.renderers;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['renderers'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        return var1;
    };
    var3['registerPortalKeyboardRenderer'] = var5;
    var5 = function handlePortalKeyboardOpen(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot2;
        var2 = var3.setState;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = arg1;
                var3 = var5.keyboard;
                var2 = null;
                var1 = var5;
                if(!(var2 != var3)) { _fun0003_ip = 123; continue _fun0003 }
 18:
                var2 = var5.keyboard;
                var3 = var2.handlerId;
                var2 = _closure2_slot0;
                var1 = var5;
                if(!(var3 !== var2)) { _fun0003_ip = 123; continue _fun0003 }
 44:
                var2 = {};
                var3 = {};
                var6 = var5.keyboard;
                var7 = var3;
                var5 = copyDataProperties(var7, var6);
                var5 = _closure2_slot0;
                var4 = 'handlerId';
                var3[var4] = var5;
                var2['keyboard'] = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.PortalKeyboardState;
                var3 = var3.OPEN;
                var2['state'] = var3;
                var1 = var2;
 123:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['handlePortalKeyboardOpen'] = var5;
    var3['closePortalKeyboard'] = var4;
    var4 = function closePortalKeyboardIfUnhandled() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var5 = var2.keyboard;
            var6 = var2.state;
            var4 = null;
            var2 = var4 == var5;
            if(!var2) { _fun0004_ip = 75; continue _fun0004 }
 37:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var7 = var7[var3];
            var3 = undefined;
            var3 = var8.bind(var3)(var7);
            var3 = var3.PortalKeyboardState;
            var3 = var3.CLOSED;
            var2 = var6 === var3;
 75:
            if(var2) { _fun0004_ip = 107; continue _fun0004 }
 78:
            var6 = var4 == var5;
            var2 = undefined;
            var3 = undefined;
            if(var6) { _fun0004_ip = 95; continue _fun0004 }
 89:
            var3 = var5.handlerId;
 95:
            if(!(var4 == var3)) { _fun0004_ip = 107; continue _fun0004 }
 99:
            var1 = _closure1_slot3;
            var1 = var1.bind(var2)();
 107:
            var1 = undefined;
            return var1;
        }
    };
    var3['closePortalKeyboardIfUnhandled'] = var4;
    var2 = function closePortalKeyboardRequest() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getField;
            var1 = 'state';
            var4 = var2.bind(var3)(var1);
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 1;
            var2 = var1[var7];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.PortalKeyboardState;
            var2 = var2.CLOSED;
            var2 = var4 !== var2;
            if(!var2) { _fun0005_ip = 96; continue _fun0005 }
 63:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var1)(var3);
            var3 = var3.PortalKeyboardState;
            var3 = var3.REQUEST_CLOSE;
            var2 = var4 !== var3;
 96:
            if(!var2) { _fun0005_ip = 149; continue _fun0005 }
 99:
            var4 = _closure1_slot2;
            var3 = var4.setState;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var7];
            var5 = var6.bind(var1)(var5);
            var5 = var5.PortalKeyboardState;
            var5 = var5.REQUEST_CLOSE;
            var2['state'] = var5;
            var2 = var3.bind(var4)(var2);
 149:
            return var1;
        }
    };
    var3['closePortalKeyboardRequest'] = var2;
    return var1;
})();