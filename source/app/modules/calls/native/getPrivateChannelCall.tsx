// app/modules/calls/native/getPrivateChannelCall.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP_NULL;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/native/getPrivateChannelCall.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getPrivateChannelCall(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var9 = arguments[1];
            var2 = arguments[2];
            var1 = arguments[3];
            var _closure2_slot0 = var11;
            var6 = undefined;
            if(!(var9 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var _closure2_slot1 = var9;
            if(!(var2 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var6)(var3);
            var2 = var3.handleStartCall;
case 4:
            var _closure2_slot2 = var2;
            if(!(var1 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var2 = var4[var2];
            var2 = var3.bind(var6)(var2);
            var1 = var2.handleJoinCall;
case 6:
            var _closure2_slot3 = var1;
            var4 = _closure1_slot2;
            var3 = var4.isInChannel;
            var2 = var11.id;
            var3 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var5 = var4.bind(var6)(var2);
            var4 = var5.checkIsCallActive;
            var2 = var11.id;
            var2 = var4.bind(var5)(var2);
            var4 = var11.isSystemDM;
            var4 = var4.bind(var11)();
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var12 = 4;
            var5 = var2[var12];
            var5 = var4.bind(var6)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var2 = var2[var12];
            var2 = var4.bind(var6)(var2);
            var2 = var2.t;
            if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var2.EZgS+/;
            var4 = var5.bind(var8)(var4);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var2 = var2.7AWk5+;
            var4 = var5.bind(var8)(var2);
case 16:
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = var2[var12];
            var8 = var5.bind(var6)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var2 = var2[var12];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            if(var9) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = var2.focH1t;
            var5 = var8.bind(var10)(var5);
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var2 = var2.oCqlGB;
            var5 = var8.bind(var10)(var2);
case 19:
            var2 = function C() {
                var4 = _closure2_slot2;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            _fun0001_ip = 20; continue _fun0001;
case 12:
            if(var9) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var8 = 4;
            var10 = var14[var8];
            var10 = var13.bind(var6)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.fdEeb2;
            var10 = var10.bind(var12)(var8);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var12 = null;
            var13 = var12 != var11;
            var8 = null;
            if(!var13) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var14 = _closure1_slot2;
            var13 = var14.hasVideo;
            var11 = var11.id;
            var11 = var13.bind(var14)(var11);
            var8 = null;
            if(!var11) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var11 = 4;
            var12 = var15[var11];
            var12 = var14.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.W68MhI;
            var8 = var12.bind(var13)(var11);
case 24:
            var10 = var8;
case 23:
            var2 = function C() {
                var4 = _closure2_slot3;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var4 = var10;
            var5 = undefined;
            _fun0001_ip = 20; continue _fun0001;
case 10:
            var8 = null;
            if(var9) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var9 = 4;
            var10 = var13[var9];
            var10 = var12.bind(var6)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.4ry6ys;
            var8 = var10.bind(var11)(var9);
case 27:
            var2 = function C() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.handleDisconnect;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var8;
            var5 = undefined;
            _fun0001_ip = 20; continue _fun0001;
case 8:
            var2 = _closure1_slot3;
            var4 = null;
            var5 = undefined;
case 20:
            var1 = {};
            var1['text'] = var4;
            var6 = null;
            if(!(var6 != var5)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var4 = var5;
case 29:
            var1['accessibilityHint'] = var4;
            var1['inCall'] = var3;
            var1['onPress'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();