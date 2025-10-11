// app/modules/hang_status/HangStatusUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = var4.HangStatusTypes;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot3 = var4;
    var4 = function getTwemojiSystemHangStatuses() {
        var1 = {};
        var2 = _closure1_slot2;
        var6 = var2.BRB;
        var3 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var4 = 2;
        var7 = var9[var4];
        var5 = undefined;
        var7 = var8.bind(var5)(var7);
        var11 = var7.intl;
        var10 = var11.string;
        var7 = var9[var4];
        var7 = var8.bind(var5)(var7);
        var7 = var7.t;
        var7 = var7.fFTJTE;
        var7 = var10.bind(var11)(var7);
        var3['title'] = var7;
        var7 = {};
        var7['id'] = var5;
        var10 = '💨';
        var7['name'] = var10;
        var3['emoji'] = var7;
        var1[var6] = var3;
        var6 = var2.CHILLING;
        var3 = {};
        var7 = var9[var4];
        var7 = var8.bind(var5)(var7);
        var11 = var7.intl;
        var10 = var11.string;
        var7 = var9[var4];
        var7 = var8.bind(var5)(var7);
        var7 = var7.t;
        var7 = var7.vybY9f;
        var7 = var10.bind(var11)(var7);
        var3['title'] = var7;
        var7 = {};
        var7['id'] = var5;
        var10 = '🍨';
        var7['name'] = var10;
        var3['emoji'] = var7;
        var1[var6] = var3;
        var6 = var2.GAMING;
        var3 = {};
        var7 = var9[var4];
        var7 = var8.bind(var5)(var7);
        var11 = var7.intl;
        var10 = var11.string;
        var7 = var9[var4];
        var7 = var8.bind(var5)(var7);
        var7 = var7.t;
        var7 = var7.wvWdTU;
        var7 = var10.bind(var11)(var7);
        var3['title'] = var7;
        var7 = {};
        var7['id'] = var5;
        var10 = '⚔️';
        var7['name'] = var10;
        var3['emoji'] = var7;
        var1[var6] = var3;
        var6 = var2.WATCHING;
        var3 = {};
        var7 = var9[var4];
        var7 = var8.bind(var5)(var7);
        var11 = var7.intl;
        var10 = var11.string;
        var7 = var9[var4];
        var7 = var8.bind(var5)(var7);
        var7 = var7.t;
        var7 = var7.s8xFaG;
        var7 = var10.bind(var11)(var7);
        var3['title'] = var7;
        var7 = {};
        var7['id'] = var5;
        var10 = '🍿';
        var7['name'] = var10;
        var3['emoji'] = var7;
        var1[var6] = var3;
        var3 = var2.FOCUSING;
        var2 = {};
        var6 = var9[var4];
        var6 = var8.bind(var5)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var4 = var9[var4];
        var4 = var8.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.D5eCT0;
        var4 = var6.bind(var7)(var4);
        var2['title'] = var4;
        var4 = {};
        var4['id'] = var5;
        var5 = '🧠';
        var4['name'] = var5;
        var2['emoji'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot4 = var4;
    var5 = function getHangStatusOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'illocons';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'twemoji';
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'twemojimild';
            if(!(var1 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = {};
            var2 = _closure1_slot4;
            var5 = undefined;
            var13 = var2.bind(var5)();
            var14 = var1;
            var2 = copyDataProperties(var14, var13);
            var2 = _closure1_slot2;
            var3 = var2.CHILLING;
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 2;
            var6 = var9[var4];
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.IeolFR;
            var4 = var6.bind(var7)(var4);
            var2['title'] = var4;
            var4 = {};
            var4['id'] = var5;
            var5 = '💭';
            var4['name'] = var5;
            var2['emoji'] = var4;
            var1[var3] = var2;
            return var1;
case 4:
            var2 = _closure1_slot4;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
case 2:
            var1 = {};
            var2 = _closure1_slot2;
            var9 = var2.BRB;
            var3 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var8 = 2;
            var4 = var7[var8];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var11 = var4.intl;
            var10 = var11.string;
            var4 = var7[var8];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.fFTJTE;
            var4 = var10.bind(var11)(var4);
            var3['title'] = var4;
            var4 = 3;
            var10 = var7[var4];
            var10 = var6.bind(var5)(var10);
            var10 = var10.PlaneIllocon;
            var3['icon'] = var10;
            var1[var9] = var3;
            var9 = var2.CHILLING;
            var3 = {};
            var10 = var7[var8];
            var10 = var6.bind(var5)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var7[var8];
            var10 = var6.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.vybY9f;
            var10 = var11.bind(var12)(var10);
            var3['title'] = var10;
            var10 = var7[var4];
            var10 = var6.bind(var5)(var10);
            var10 = var10.ChairIllocon;
            var3['icon'] = var10;
            var1[var9] = var3;
            var9 = var2.GAMING;
            var3 = {};
            var10 = var7[var8];
            var10 = var6.bind(var5)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var7[var8];
            var10 = var6.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.wvWdTU;
            var10 = var11.bind(var12)(var10);
            var3['title'] = var10;
            var10 = var7[var4];
            var10 = var6.bind(var5)(var10);
            var10 = var10.ControllerIllocon;
            var3['icon'] = var10;
            var1[var9] = var3;
            var9 = var2.WATCHING;
            var3 = {};
            var10 = var7[var8];
            var10 = var6.bind(var5)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var7[var8];
            var10 = var6.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.s8xFaG;
            var10 = var11.bind(var12)(var10);
            var3['title'] = var10;
            var10 = var7[var4];
            var10 = var6.bind(var5)(var10);
            var10 = var10.MailboxIllocon;
            var3['icon'] = var10;
            var1[var9] = var3;
            var3 = var2.FOCUSING;
            var2 = {};
            var9 = var7[var8];
            var9 = var6.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var7[var8];
            var8 = var6.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.D5eCT0;
            var8 = var9.bind(var10)(var8);
            var2['title'] = var8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.BookBlueIllocon;
            var2['icon'] = var4;
            var1[var3] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function getHangStatusDetails(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg2;
            var6 = arguments[2];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var6 = 'twemoji';
case 7:
            var1 = null;
            var3 = var1 == var2;
            var7 = undefined;
            if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 5:
            var7 = var2.type;
case 9:
            var4 = _closure1_slot3;
            var4 = var4.HANG_STATUS;
            if(!(var7 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 10:
            var7 = var1 == var2;
            var4 = undefined;
            if(var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var4 = var2.state;
case 11:
            if(!(var1 != var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 4;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.parseHangStatus;
            var4 = var2.state;
            var2 = arg1;
            var8 = var7.bind(var8)(var2, var4);
            var2 = 0;
            var4 = var8[var2];
            var2 = _closure1_slot2;
            var7 = var2.CUSTOM;
            var2 = null;
            if(!(var4 !== var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = _closure1_slot5;
            var9 = var8.length;
            var7 = 1;
            if(!(var9 > var7)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var6 = var8[var7];
case 17:
            var3 = var3.bind(var5)(var6);
            var2 = var3[var4];
case 15:
            return var2;
case 13:
            return var1;
case 4:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/hang_status/HangStatusUtils.native.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getHangStatusOptions'] = var5;
    var3['getHangStatusDetails'] = var4;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var6 = arguments[2];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var6 = 'twemoji';
case 19:
            var5 = null;
            var1 = var5 == var4;
            var9 = undefined;
            if(var1) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var9 = var4.type;
case 21:
            var1 = _closure1_slot3;
            var8 = var1.HANG_STATUS;
            var1 = null;
            if(!(var9 === var8)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = var5 == var4;
            var8 = undefined;
            if(var9) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var8 = var4.state;
case 25:
            var8 = var5 == var8;
            var1 = null;
            if(var8) { _fun0003_ip = 23; continue _fun0003 }
case 27:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var8 = 4;
            var8 = var10[var8];
            var10 = var9.bind(var3)(var8);
            var9 = var10.parseHangStatus;
            var8 = var4.state;
            var9 = var9.bind(var10)(var7, var8);
            var8 = 0;
            var9 = var9[var8];
            var8 = _closure1_slot2;
            var8 = var8.CUSTOM;
            if(!(var9 !== var8)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var2 = _closure1_slot6;
            var6 = var2.bind(var3)(var7, var4, var6);
            var7 = var5 == var6;
            var2 = undefined;
            if(var7) { _fun0003_ip = 4; continue _fun0003 }
case 30:
            var2 = var6.title;
case 4:
            _fun0003_ip = 31; continue _fun0003;
case 28:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var3 = var4.details;
case 32:
            var2 = var3;
case 31:
            var1 = var2;
case 23:
            return var1;
        }
    };
    var3['getHangStatusText'] = var2;
    return var1;
})();