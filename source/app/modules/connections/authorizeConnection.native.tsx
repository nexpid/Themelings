// app/modules/connections/authorizeConnection.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/authorizeConnection.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function authorizeConnection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 67; continue _fun0002 }
 15:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.subscribe;
                    var2 = function handleModalClose() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = _closure2_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0003_ip = 23; continue _fun0003 }
 13:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 23:
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
 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = _closure1_slot4;
            var3 = var3.LEAGUE_OF_LEGENDS;
            if(!(var8 === var3)) { _fun0001_ip = 74; continue _fun0001 }
 64:
            var3 = _closure1_slot4;
            var8 = var3.RIOT_GAMES;
 74:
            var4 = null;
            if(!(var4 == var6)) { _fun0001_ip = 84; continue _fun0001 }
 80:
            var6 = 'mobile';
 84:
            var3 = _closure1_slot4;
            var3 = var3.XBOX;
            if(!(var8 !== var3)) { _fun0001_ip = 727; continue _fun0001 }
 101:
            var3 = _closure1_slot4;
            var3 = var3.PLAYSTATION;
            if(!(var8 !== var3)) { _fun0001_ip = 657; continue _fun0001 }
 118:
            var3 = _closure1_slot4;
            var3 = var3.PLAYSTATION_STAGING;
            if(!(var8 !== var3)) { _fun0001_ip = 657; continue _fun0001 }
 135:
            var3 = _closure1_slot4;
            var3 = var3.CRUNCHYROLL;
            if(!(var8 !== var3)) { _fun0001_ip = 585; continue _fun0001 }
 152:
            var3 = _closure1_slot4;
            var3 = var3.DOMAIN;
            if(!(var8 !== var3)) { _fun0001_ip = 471; continue _fun0001 }
 169:
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
            if(var12) { _fun0001_ip = 216; continue _fun0001 }
 210:
            var5 = var7.isFederated;
 216:
            var12 = true;
            if(!(var12 !== var5)) { _fun0001_ip = 358; continue _fun0001 }
 225:
            if(!(var4 != var11)) { _fun0001_ip = 237; continue _fun0001 }
 229:
            var4 = _closure1_slot3;
            if(!(var8 !== var4)) { _fun0001_ip = 300; continue _fun0001 }
 237:
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
 0:
                    var1 = arg1;
                    var1 = var1.body;
                    var3 = var1.url;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 125; continue _fun0004 }
 19:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 15;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var6 = var1.ExperimentConnectionFlowRefactor;
                    var4 = var6.getCurrentConfig;
                    var1 = {};
                    var7 = 'authorizeConnection.native:authorizeConnection';
                    var1['location'] = var7;
                    var1 = var4.bind(var6)(var1);
                    var1 = var1.enabled;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 13;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    if(var1) { _fun0004_ip = 114; continue _fun0004 }
 101:
                    var1 = var2.openURL;
                    var1 = var1.bind(var2)(var3);
                    _fun0004_ip = 125; continue _fun0004;
 114:
                    var1 = var2.openURLExternally;
                    var1 = var1.bind(var2)(var3);
 125:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var7)(var4);
            _fun0001_ip = 794; continue _fun0001;
 300:
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
            _fun0001_ip = 794; continue _fun0001;
 358:
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
            _fun0001_ip = 794; continue _fun0001;
 471:
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
            _fun0001_ip = 794; continue _fun0001;
 585:
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
            _fun0001_ip = 794; continue _fun0001;
 657:
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
            _fun0001_ip = 794; continue _fun0001;
 727:
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
 794:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();