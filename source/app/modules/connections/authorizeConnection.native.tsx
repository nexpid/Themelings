// app/modules/connections/authorizeConnection.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot4 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/authorizeConnection.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function authorizeConnection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.platformType;
            var6 = var1.location;
            var2 = var1.onClose;
            var _closure2_slot0 = var2;
            var11 = var1.overrideUrl;
            var _closure2_slot1 = var11;
            var10 = var1.successRedirect;
            var2 = function registerHandleModalClose() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.subscribe;
                    var2 = function handleModalClose() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure2_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 4:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 2;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.unsubscribe;
                            var3 = _closure3_slot0;
                            var2 = 'MODAL_POP';
                            var2 = var4.bind(var5)(var2, var3);
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var2;
                    var1 = 'MODAL_POP';
                    var1 = var3.bind(var4)(var1, var2);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = _closure1_slot4;
            var3 = var3.LEAGUE_OF_LEGENDS;
            if(!(var8 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot4;
            var8 = var3.RIOT_GAMES;
case 6:
            var4 = null;
            if(!(var4 == var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = 'mobile';
case 8:
            var3 = _closure1_slot4;
            var3 = var3.XBOX;
            if(!(var8 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot4;
            var3 = var3.PLAYSTATION;
            if(!(var8 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = _closure1_slot4;
            var3 = var3.PLAYSTATION_STAGING;
            if(!(var8 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var3 = _closure1_slot4;
            var3 = var3.CRUNCHYROLL;
            if(!(var8 !== var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = _closure1_slot4;
            var3 = var3.DOMAIN;
            if(!(var8 !== var3)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var7.bind(var3)(var5);
            var5 = var7.get;
            var7 = var5.bind(var7)(var8);
            var12 = var4 == var7;
            var5 = undefined;
            if(var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var5 = var7.isFederated;
case 19:
            var12 = true;
            if(!(var12 !== var5)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            if(!(var4 != var11)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var4 = _closure1_slot3;
            if(!(var8 !== var4)) { _fun0001_ip = 25; continue _fun0001 }
case 23:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 14;
            var4 = var7[var4];
            var7 = var5.bind(var3)(var4);
            var5 = var7.authorize;
            var4 = {};
            var4['location'] = var6;
            var4['successRedirect'] = var10;
            var7 = var5.bind(var7)(var8, var4);
            var5 = var7.then;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.body;
                    var3 = var1.url;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.openURL;
                    var1 = var1.bind(var2)(var3);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var7)(var4);
            _fun0001_ip = 28; continue _fun0001;
case 25:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var4 = var7[var4];
            var7 = var5.bind(var3)(var4);
            var5 = var7.handleClick;
            var4 = {};
            var4['shouldConfirm'] = var12;
            var4['href'] = var11;
            var9 = function onConfirm() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openURL;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4['onConfirm'] = var9;
            var4 = var5.bind(var7)(var4);
            _fun0001_ip = 28; continue _fun0001;
case 21:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var5 = 3;
            var5 = var4[var5];
            var9 = var7.bind(var3)(var5);
            var5 = var9.hideActionSheet;
            var5 = var5.bind(var9)();
            var5 = 7;
            var5 = var4[var5];
            var9 = var7.bind(var3)(var5);
            var7 = var9.pushLazy;
            var11 = _closure1_slot0;
            var5 = 9;
            var5 = var4[var5];
            var11 = var11.bind(var3)(var5);
            var5 = 11;
            var5 = var4[var5];
            var4 = var4.paths;
            var5 = var11.bind(var3)(var5, var4);
            var4 = {};
            var4['platformType'] = var8;
            var4['location'] = var6;
            var4['successRedirect'] = var10;
            var4 = var7.bind(var9)(var5, var4);
            var3 = var2.bind(var3)();
            _fun0001_ip = 28; continue _fun0001;
case 17:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 3;
            var5 = var4[var3];
            var3 = undefined;
            var9 = var7.bind(var3)(var5);
            var5 = var9.hideActionSheet;
            var5 = var5.bind(var9)();
            var5 = 7;
            var5 = var4[var5];
            var9 = var7.bind(var3)(var5);
            var7 = var9.pushLazy;
            var10 = _closure1_slot0;
            var5 = 9;
            var5 = var4[var5];
            var10 = var10.bind(var3)(var5);
            var5 = 8;
            var5 = var4[var5];
            var4 = var4.paths;
            var5 = var10.bind(var3)(var5, var4);
            var4 = {};
            var10 = new Array(1);
            var10[0] = var6;
            var4['locationStack'] = var10;
            var4 = var7.bind(var9)(var5, var4);
            var3 = var2.bind(var3)();
            _fun0001_ip = 28; continue _fun0001;
case 15:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 3;
            var4 = var7[var3];
            var3 = undefined;
            var9 = var5.bind(var3)(var4);
            var4 = var9.hideActionSheet;
            var4 = var4.bind(var9)();
            var4 = 6;
            var4 = var7[var4];
            var7 = var5.bind(var3)(var4);
            var5 = var7.showModal;
            var4 = new Array(1);
            var4[0] = var6;
            var4 = var5.bind(var7)(var4);
            var3 = var2.bind(var3)();
            _fun0001_ip = 28; continue _fun0001;
case 12:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 3;
            var4 = var7[var3];
            var3 = undefined;
            var9 = var5.bind(var3)(var4);
            var4 = var9.hideActionSheet;
            var4 = var4.bind(var9)();
            var4 = 5;
            var4 = var7[var4];
            var7 = var5.bind(var3)(var4);
            var5 = var7.showModal;
            var4 = new Array(1);
            var4[0] = var6;
            var4 = var5.bind(var7)(var4, var8);
            var3 = var2.bind(var3)();
            _fun0001_ip = 28; continue _fun0001;
case 10:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 3;
            var3 = var5[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var3 = var7.hideActionSheet;
            var3 = var3.bind(var7)();
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.showModal;
            var3 = new Array(1);
            var3[0] = var6;
            var3 = var4.bind(var5)(var3);
            var1 = var2.bind(var1)();
case 28:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();