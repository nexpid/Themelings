// app/modules/hang_status/HangStatusUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var9;
    var6 = function parseHangStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 25; continue _fun0001 }
 9:
            var2 = var3.split;
            var1 = ':';
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 35; continue _fun0001;
 25:
            var1 = [null, null];
 35:
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var4 = var4.HangStatusTypes;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot4 = var4;
    var4 = function getOriginalSystemHangStatuses() {
        var1 = {};
        var2 = _closure1_slot3;
        var8 = var2.CHILLING;
        var3 = {};
        var10 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 2;
        var9 = var7[var4];
        var6 = undefined;
        var9 = var10.bind(var6)(var9);
        var12 = var9.intl;
        var11 = var12.string;
        var9 = var7[var4];
        var9 = var10.bind(var6)(var9);
        var9 = var9.t;
        var9 = var9.vkpn7+;
        var9 = var11.bind(var12)(var9);
        var3['title'] = var9;
        var5 = _closure1_slot1;
        var9 = 3;
        var9 = var7[var9];
        var9 = var5.bind(var6)(var9);
        var3['icon'] = var9;
        var9 = '#567C7E';
        var3['color'] = var9;
        var1[var8] = var3;
        var8 = var2.GAMING;
        var3 = {};
        var9 = var7[var4];
        var9 = var10.bind(var6)(var9);
        var12 = var9.intl;
        var11 = var12.string;
        var9 = var7[var4];
        var9 = var10.bind(var6)(var9);
        var9 = var9.t;
        var9 = var9.lZslwM;
        var9 = var11.bind(var12)(var9);
        var3['title'] = var9;
        var9 = 4;
        var9 = var7[var9];
        var9 = var5.bind(var6)(var9);
        var3['icon'] = var9;
        var9 = '#685F8C';
        var3['color'] = var9;
        var1[var8] = var3;
        var8 = var2.FOCUSING;
        var3 = {};
        var9 = var7[var4];
        var9 = var10.bind(var6)(var9);
        var12 = var9.intl;
        var11 = var12.string;
        var9 = var7[var4];
        var9 = var10.bind(var6)(var9);
        var9 = var9.t;
        var9 = var9.b6AscH;
        var9 = var11.bind(var12)(var9);
        var3['title'] = var9;
        var9 = 5;
        var9 = var7[var9];
        var9 = var5.bind(var6)(var9);
        var3['icon'] = var9;
        var9 = '#7F6956';
        var3['color'] = var9;
        var1[var8] = var3;
        var8 = var2.BRB;
        var3 = {};
        var9 = var7[var4];
        var9 = var10.bind(var6)(var9);
        var12 = var9.intl;
        var11 = var12.string;
        var9 = var7[var4];
        var9 = var10.bind(var6)(var9);
        var9 = var9.t;
        var9 = var9.30yqZW;
        var9 = var11.bind(var12)(var9);
        var3['title'] = var9;
        var9 = 6;
        var9 = var7[var9];
        var9 = var5.bind(var6)(var9);
        var3['icon'] = var9;
        var9 = '#76567E';
        var3['color'] = var9;
        var1[var8] = var3;
        var8 = var2.EATING;
        var3 = {};
        var9 = var7[var4];
        var9 = var10.bind(var6)(var9);
        var12 = var9.intl;
        var11 = var12.string;
        var9 = var7[var4];
        var9 = var10.bind(var6)(var9);
        var9 = var9.t;
        var9 = var9.UVSEhY;
        var9 = var11.bind(var12)(var9);
        var3['title'] = var9;
        var9 = 7;
        var9 = var7[var9];
        var9 = var5.bind(var6)(var9);
        var3['icon'] = var9;
        var9 = '#717B54';
        var3['color'] = var9;
        var1[var8] = var3;
        var3 = var2.WATCHING;
        var2 = {};
        var8 = var7[var4];
        var8 = var10.bind(var6)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var4 = var7[var4];
        var4 = var10.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.di6IFx;
        var4 = var8.bind(var9)(var4);
        var2['title'] = var4;
        var4 = 8;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var2['icon'] = var4;
        var4 = '#7C5571';
        var2['color'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot5 = var4;
    var5 = function getHangStatusOptions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = 'original';
            if(!(var1 !== var2)) { _fun0002_ip = 1346; continue _fun0002 }
 14:
            var1 = 'illocons';
            if(!(var1 !== var2)) { _fun0002_ip = 919; continue _fun0002 }
 27:
            var1 = 'icons';
            if(!(var1 !== var2)) { _fun0002_ip = 480; continue _fun0002 }
 38:
            var1 = 'twemoji';
            if(!(var1 === var2)) { _fun0002_ip = 1346; continue _fun0002 }
 51:
            var1 = {};
            var2 = _closure1_slot3;
            var6 = var2.BRB;
            var3 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
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
 480:
            var1 = {};
            var2 = _closure1_slot3;
            var8 = var2.BRB;
            var3 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 2;
            var9 = var7[var4];
            var5 = undefined;
            var9 = var6.bind(var5)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.fFTJTE;
            var9 = var10.bind(var11)(var9);
            var3['title'] = var9;
            var9 = 10;
            var9 = var7[var9];
            var9 = var6.bind(var5)(var9);
            var9 = var9.MagicDoorIcon;
            var3['icon'] = var9;
            var1[var8] = var3;
            var8 = var2.CHILLING;
            var3 = {};
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.vybY9f;
            var9 = var10.bind(var11)(var9);
            var3['title'] = var9;
            var9 = 11;
            var9 = var7[var9];
            var9 = var6.bind(var5)(var9);
            var9 = var9.FoodIcon;
            var3['icon'] = var9;
            var1[var8] = var3;
            var8 = var2.GAMING;
            var3 = {};
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.wvWdTU;
            var9 = var10.bind(var11)(var9);
            var3['title'] = var9;
            var9 = 12;
            var9 = var7[var9];
            var9 = var6.bind(var5)(var9);
            var9 = var9.GameControllerIcon;
            var3['icon'] = var9;
            var1[var8] = var3;
            var8 = var2.WATCHING;
            var3 = {};
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var7[var4];
            var9 = var6.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.s8xFaG;
            var9 = var10.bind(var11)(var9);
            var3['title'] = var9;
            var9 = 13;
            var9 = var7[var9];
            var9 = var6.bind(var5)(var9);
            var9 = var9.EmbedIcon;
            var3['icon'] = var9;
            var1[var8] = var3;
            var3 = var2.FOCUSING;
            var2 = {};
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.D5eCT0;
            var4 = var8.bind(var9)(var4);
            var2['title'] = var4;
            var4 = 14;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.ObjectIcon;
            var2['icon'] = var4;
            var1[var3] = var2;
            return var1;
 919:
            var1 = {};
            var2 = _closure1_slot3;
            var9 = var2.BRB;
            var3 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
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
            var4 = 9;
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
            var4 = var4.BookIllocon;
            var2['icon'] = var4;
            var1[var3] = var2;
            return var1;
 1346:
            var2 = _closure1_slot5;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function getHangStatusDetails(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 16; continue _fun0003 }
 12:
            var6 = 'original';
 16:
            var1 = null;
            var3 = var1 == var2;
            var7 = undefined;
            if(var3) { _fun0003_ip = 32; continue _fun0003 }
 27:
            var7 = var2.type;
 32:
            var4 = _closure1_slot4;
            var4 = var4.HANG_STATUS;
            if(!(var7 === var4)) { _fun0003_ip = 136; continue _fun0003 }
 49:
            var7 = var1 == var2;
            var4 = undefined;
            if(var7) { _fun0003_ip = 63; continue _fun0003 }
 58:
            var4 = var2.state;
 63:
            if(!(var1 != var4)) { _fun0003_ip = 134; continue _fun0003 }
 67:
            var4 = _closure1_slot8;
            var2 = var2.state;
            var8 = var4.bind(var5)(var2);
            var2 = 0;
            var4 = var8[var2];
            var2 = _closure1_slot3;
            var7 = var2.CUSTOM;
            var2 = null;
            if(!(var4 !== var7)) { _fun0003_ip = 132; continue _fun0003 }
 103:
            var3 = _closure1_slot6;
            var9 = var8.length;
            var7 = 1;
            if(!(var9 > var7)) { _fun0003_ip = 123; continue _fun0003 }
 119:
            var6 = var8[var7];
 123:
            var3 = var3.bind(var5)(var6);
            var2 = var3[var4];
 132:
            return var2;
 134:
            return var1;
 136:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var7 = 15;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/hang_status/HangStatusUtils.native.tsx';
    var7 = var8.bind(var9)(var7);
    var3['parseHangStatus'] = var6;
    var3['getHangStatusOptions'] = var5;
    var3['getHangStatusDetails'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var6 = arguments[1];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0004_ip = 16; continue _fun0004 }
 12:
            var6 = 'original';
 16:
            var5 = null;
            var1 = var5 == var4;
            var8 = undefined;
            if(var1) { _fun0004_ip = 32; continue _fun0004 }
 27:
            var8 = var4.type;
 32:
            var1 = _closure1_slot4;
            var7 = var1.HANG_STATUS;
            var1 = null;
            if(!(var8 === var7)) { _fun0004_ip = 155; continue _fun0004 }
 51:
            var8 = var5 == var4;
            var7 = undefined;
            if(var8) { _fun0004_ip = 65; continue _fun0004 }
 60:
            var7 = var4.state;
 65:
            var7 = var5 == var7;
            var1 = null;
            if(var7) { _fun0004_ip = 155; continue _fun0004 }
 74:
            var8 = _closure1_slot8;
            var7 = var4.state;
            var8 = var8.bind(var3)(var7);
            var7 = 0;
            var8 = var8[var7];
            var7 = _closure1_slot3;
            var7 = var7.CUSTOM;
            if(!(var8 !== var7)) { _fun0004_ip = 134; continue _fun0004 }
 108:
            var2 = _closure1_slot7;
            var6 = var2.bind(var3)(var4, var6);
            var7 = var5 == var6;
            var2 = undefined;
            if(var7) { _fun0004_ip = 132; continue _fun0004 }
 127:
            var2 = var6.title;
 132:
            _fun0004_ip = 152; continue _fun0004;
 134:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0004_ip = 149; continue _fun0004 }
 143:
            var3 = var4.details;
 149:
            var2 = var3;
 152:
            var1 = var2;
 155:
            return var1;
        }
    };
    var3['getHangStatusText'] = var2;
    return var1;
})();