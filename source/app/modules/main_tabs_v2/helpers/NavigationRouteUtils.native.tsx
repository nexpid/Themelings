// app/modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var15;
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
    var1 = function navigationToRootTabHelper(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var4 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var4.isReady;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var3 = arg2;
            if(var3) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var5 = var4.navigate;
            var3 = 'tabs';
            var3 = var5.bind(var4)(var3, var2);
            _fun0004_ip = 41; continue _fun0004;
case 39:
            var3 = var4.getRootState;
            var8 = var3.bind(var4)();
            var7 = var8.routes;
            var5 = var7.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.name;
                var1 = 'modal';
                var1 = var1 === var2;
                return var1;
            };
            var3 = var5.bind(var7)(var3);
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var7 = 7;
            var7 = var6[var7];
            var9 = var5.bind(var1)(var7);
            var7 = var9.wrapRouteForRootNavigator;
            var10 = {};
            var11 = 'tabs';
            var10['name'] = var11;
            var11 = 5;
            var11 = var6[var11];
            var12 = var5.bind(var1)(var11);
            var11 = var12.v4;
            var13 = var11.bind(var12)();
            var11 = global;
            var11 = var11.HermesInternal;
            var12 = var11.concat;
            var11 = 'tabs-';
            var11 = var12.bind(var11)(var13);
            var10['key'] = var11;
            var10['params'] = var2;
            var2 = new Array(1);
            var2[0] = var10;
            var15 = var7.bind(var9)(var2);
            var7 = new Array(0);
            var14 = 0;
            var16 = var7;
            var14 = arraySpread(var16, var15, var14);
            var16 = var7;
            var15 = var3;
            var2 = arraySpread(var16, var15, var14);
            var3 = var4.dispatch;
            var2 = 6;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var6 = var2.CommonActions;
            var5 = var6.reset;
            var2 = {};
            var16 = var2;
            var15 = var8;
            var8 = copyDataProperties(var16, var15);
            var8 = 'routes';
            var2[var8] = var7;
            var8 = var7.length;
            var7 = 1;
            var8 = var8 - var7;
            var7 = 'index';
            var2[var7] = var8;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
case 41:
            return var1;
case 36:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var12 = function coerceMainRoute(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var3 = var1.name;
            var2 = 'main';
            if(!(var2 !== var3)) { _fun0005_ip = 44; continue _fun0005 }
case 42:
            var2 = undefined;
            return var2;
case 44:
            return var1;
        }
    };
    var _closure1_slot11 = var12;
    var11 = function coerceChannelRoute(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var3 = var1.name;
            var2 = 'channel';
            if(!(var2 !== var3)) { _fun0006_ip = 44; continue _fun0006 }
case 42:
            var2 = undefined;
            return var2;
case 44:
            return var1;
        }
    };
    var _closure1_slot12 = var11;
    var10 = function coerceTabsRoute(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var3 = var1.name;
            var2 = 'tabs';
            if(!(var2 !== var3)) { _fun0007_ip = 44; continue _fun0007 }
case 42:
            var2 = undefined;
            return var2;
case 44:
            return var1;
        }
    };
    var _closure1_slot13 = var10;
    var9 = function coerceGuildsRoute(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0008_ip = 45; continue _fun0008 }
case 43:
            var3 = var1.name;
            var2 = 'guilds';
            if(!(var2 !== var3)) { _fun0008_ip = 46; continue _fun0008 }
case 42:
            var3 = var1.name;
            var2 = 'guilds-root';
            if(!(var2 !== var3)) { _fun0008_ip = 46; continue _fun0008 }
case 45:
            var2 = undefined;
            return var2;
case 46:
            return var1;
        }
    };
    var _closure1_slot14 = var9;
    var8 = function coerceICYMIRoute(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0009_ip = 42; continue _fun0009 }
case 43:
            var3 = var1.name;
            var2 = 'icymi';
            if(!(var2 !== var3)) { _fun0009_ip = 44; continue _fun0009 }
case 42:
            var2 = undefined;
            return var2;
case 44:
            return var1;
        }
    };
    var _closure1_slot15 = var8;
    var7 = function coerceModalRoute(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0010_ip = 42; continue _fun0010 }
case 43:
            var3 = var1.name;
            var2 = 'modal';
            if(!(var2 !== var3)) { _fun0010_ip = 44; continue _fun0010 }
case 42:
            var2 = undefined;
            return var2;
case 44:
            return var1;
        }
    };
    var _closure1_slot16 = var7;
    var6 = function isModalOpen(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getRootNavigationRef;
            var6 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var6)) { _fun0011_ip = 47; continue _fun0011 }
case 37:
            var1 = var6.isReady;
            var1 = var1.bind(var6)();
            if(!var1) { _fun0011_ip = 47; continue _fun0011 }
case 38:
            var1 = var6.getRootState;
            var1 = var1.bind(var6)();
            if(!(var3 != var1)) { _fun0011_ip = 48; continue _fun0011 }
case 49:
            var2 = _closure1_slot16;
            var6 = var1.routes;
            var1 = var1.index;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            if(!(var3 != var5)) { _fun0011_ip = 19; continue _fun0011 }
case 50:
            var6 = 'string';
            var1 = typeof var5;
            if(!(var6 !== var1)) { _fun0011_ip = 51; continue _fun0011 }
case 52:
            var6 = var3 == var2;
            var1 = undefined;
            if(var6) { _fun0011_ip = 53; continue _fun0011 }
case 54:
            var6 = var2.params;
            var7 = var3 == var6;
            var1 = undefined;
            if(var7) { _fun0011_ip = 53; continue _fun0011 }
case 55:
            var6 = var6.modal;
            var7 = var3 == var6;
            var1 = undefined;
            if(var7) { _fun0011_ip = 53; continue _fun0011 }
case 56:
            var1 = var6.modal;
case 53:
            var1 = var1 === var5;
            _fun0011_ip = 57; continue _fun0011;
case 51:
            var6 = var3 == var2;
            var4 = undefined;
            if(var6) { _fun0011_ip = 58; continue _fun0011 }
case 59:
            var4 = var2.key;
case 58:
            var1 = var4 === var5;
case 57:
            _fun0011_ip = 60; continue _fun0011;
case 19:
            var1 = var3 != var2;
case 60:
            return var1;
case 48:
            var1 = false;
            return var1;
case 47:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var5 = function getOpenModalKey() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getRootNavigationRef;
            var5 = var2.bind(var3)();
            var3 = null;
            if(!(var3 != var5)) { _fun0012_ip = 61; continue _fun0012 }
case 46:
            var2 = var5.isReady;
            var2 = var2.bind(var5)();
            if(!var2) { _fun0012_ip = 61; continue _fun0012 }
case 62:
            var2 = var5.getRootState;
            var2 = var2.bind(var5)();
            if(!(var3 == var2)) { _fun0012_ip = 35; continue _fun0012 }
case 61:
            return var1;
case 35:
            var4 = _closure1_slot16;
            var5 = var2.routes;
            var2 = var2.index;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var3 = var3 == var2;
            var1 = undefined;
            if(var3) { _fun0012_ip = 63; continue _fun0012 }
case 64:
            var1 = var2.key;
case 63:
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function getCurrentNavigationRouteName() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getRootNavigationRef;
            var4 = var2.bind(var3)();
            var3 = null;
            if(!(var3 != var4)) { _fun0013_ip = 62; continue _fun0013 }
case 46:
            var2 = var4.isReady;
            var2 = var2.bind(var4)();
            if(var2) { _fun0013_ip = 28; continue _fun0013 }
case 62:
            return var1;
case 28:
            var2 = var4.getCurrentRoute;
            var4 = var2.bind(var4)();
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0013_ip = 65; continue _fun0013 }
case 66:
            var2 = var4.name;
case 65:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0013_ip = 67; continue _fun0013 }
case 68:
            var1 = var2;
case 67:
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var13 = global;
    var18 = var13.Object;
    var17 = var18.defineProperty;
    var16 = {};
    var1 = true;
    var16['value'] = var1;
    var1 = '__esModule';
    var1 = var17.bind(var18)(var3, var1, var16);
    var1 = 0;
    var17 = var15[var1];
    var16 = metroImportDefault;
    var1 = undefined;
    var16 = var16.bind(var1)(var17);
    var _closure1_slot2 = var16;
    var16 = 1;
    var16 = var15[var16];
    var16 = var14.bind(var1)(var16);
    var17 = var16.useLayoutEffect;
    var _closure1_slot3 = var17;
    var16 = var16.useState;
    var _closure1_slot4 = var16;
    var16 = 2;
    var16 = var15[var16];
    var16 = var14.bind(var1)(var16);
    var16 = var16.NativeModules;
    var _closure1_slot5 = var16;
    var16 = 3;
    var16 = var15[var16];
    var16 = var14.bind(var1)(var16);
    var16 = var16.ME;
    var _closure1_slot6 = var16;
    var17 = var13.Set;
    var13 = var17.prototype;
    var16 = Object.create(var13, {constructor: {value: var17}});
    var21 = ['friends', 'sidebar', 'message-requests', 'modal'];
    var22 = var16;
    var13 = new var22[var17](var21, var20);
    var13 = var13 instanceof Object ? var13 : var16;
    var _closure1_slot7 = var13;
    var13 = 10;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx';
    var13 = var14.bind(var15)(var13);
    var13 = function navigateToChannel(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var13 = var1.channelId;
            var15 = var1.guildId;
            var5 = var1.messageId;
            var3 = var1.replaceChannelAndFixRoot;
            var6 = undefined;
            if(!(var3 === var6)) { _fun0014_ip = 69; continue _fun0014 }
case 3:
            var3 = false;
case 69:
            var7 = var1.openChannel;
            if(!(var7 === var6)) { _fun0014_ip = 70; continue _fun0014 }
case 71:
            var7 = false;
case 70:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 4;
            var1 = var8[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.getRootNavigationRef;
            var4 = var1.bind(var4)();
            var17 = null;
            if(!(var17 != var4)) { _fun0014_ip = 72; continue _fun0014 }
case 9:
            var1 = var4.isReady;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0014_ip = 72; continue _fun0014 }
case 73:
            var1 = false;
            if(!(var1 !== var3)) { _fun0014_ip = 74; continue _fun0014 }
case 63:
            if(var7) { _fun0014_ip = 74; continue _fun0014 }
case 75:
            var7 = true;
            return var7;
case 74:
            var7 = var4.getRootState;
            var9 = var7.bind(var4)();
            if(var3) { _fun0014_ip = 76; continue _fun0014 }
case 77:
            var7 = _closure1_slot12;
            var3 = var4.getCurrentRoute;
            var3 = var3.bind(var4)();
            var3 = var7.bind(var6)(var3);
            if(!(var17 != var3)) { _fun0014_ip = 17; continue _fun0014 }
case 78:
            var7 = var3.params;
            var7 = var7.channelId;
            if(!(var7 !== var13)) { _fun0014_ip = 79; continue _fun0014 }
case 17:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 5;
            var7 = var10[var7];
            var8 = var8.bind(var6)(var7);
            var7 = var8.v4;
            var10 = var7.bind(var8)();
            var7 = global;
            var7 = var7.HermesInternal;
            var8 = var7.concat;
            var7 = 'channel-';
            var11 = var8.bind(var7)(var10);
            _fun0014_ip = 80; continue _fun0014;
case 79:
            var11 = var3.key;
case 80:
            var7 = var4.dispatch;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 6;
            var3 = var10[var3];
            var3 = var8.bind(var6)(var3);
            var10 = var3.CommonActions;
            var8 = var10.navigate;
            var3 = {};
            var12 = 'channel';
            var3['name'] = var12;
            var3['key'] = var11;
            var11 = {};
            var11['channelId'] = var13;
            var11['guildId'] = var15;
            var11['messageId'] = var5;
            var3['params'] = var11;
            var3 = var8.bind(var10)(var3);
            var3 = var7.bind(var4)(var3);
            var3 = true;
            return var3;
case 76:
            var7 = _closure1_slot11;
            var3 = var9.routes;
            var8 = 0;
            var3 = var3[var8];
            var11 = var7.bind(var6)(var3);
            if(!(var17 != var11)) { _fun0014_ip = 81; continue _fun0014 }
case 82:
            var3 = var11.state;
            if(!(var17 != var3)) { _fun0014_ip = 81; continue _fun0014 }
case 83:
            var7 = _closure1_slot12;
            var3 = var11.state;
            var10 = var3.routes;
            var3 = var11.state;
            var3 = var3.index;
            var3 = var10[var3];
            var10 = var7.bind(var6)(var3);
            if(!(var17 == var10)) { _fun0014_ip = 84; continue _fun0014 }
case 85:
            var7 = {};
            var3 = 'channel';
            var7['name'] = var3;
            var3 = var13;
            if(!(var17 == var3)) { _fun0014_ip = 86; continue _fun0014 }
case 87:
            var14 = _closure1_slot0;
            var16 = _closure1_slot1;
            var12 = 5;
            var12 = var16[var12];
            var14 = var14.bind(var6)(var12);
            var12 = var14.v4;
            var16 = var12.bind(var14)();
            var12 = global;
            var12 = var12.HermesInternal;
            var14 = var12.concat;
            var12 = 'channel-';
            var3 = var14.bind(var12)(var16);
case 86:
            var7['key'] = var3;
            var3 = {};
            var3['channelId'] = var13;
            var3['guildId'] = var15;
            var3['messageId'] = var5;
            var7['params'] = var3;
            _fun0014_ip = 88; continue _fun0014;
case 84:
            var3 = {};
            var22 = var3;
            var21 = var10;
            var10 = copyDataProperties(var22, var21);
            var10 = {};
            var10['channelId'] = var13;
            var10['guildId'] = var15;
            var10['messageId'] = var5;
            var5 = 'params';
            var3[var5] = var10;
            var7 = var3;
case 88:
            var5 = _closure1_slot8;
            var3 = var11.state;
            var3 = var3.routes;
            var12 = var5.bind(var6)(var3);
            var5 = var12.bind(var6)();
            var3 = var5.done;
            var10 = var5;
            var5 = null;
            if(var3) { _fun0014_ip = 89; continue _fun0014 }
case 90:
            var14 = _closure1_slot13;
            var3 = var10.value;
            var14 = var14.bind(var6)(var3);
            var5 = var14;
            if(!(var17 == var5)) { _fun0014_ip = 89; continue _fun0014 }
case 91:
            var16 = var12.bind(var6)();
            var3 = var16.done;
            var10 = var16;
            var5 = var14;
            if(!var3) { _fun0014_ip = 90; continue _fun0014 }
case 89:
            var3 = var17 == var5;
            var10 = undefined;
            if(var3) { _fun0014_ip = 92; continue _fun0014 }
case 93:
            var10 = var5.state;
case 92:
            if(!(var17 != var5)) { _fun0014_ip = 94; continue _fun0014 }
case 95:
            if(!(var17 != var10)) { _fun0014_ip = 94; continue _fun0014 }
case 96:
            var3 = {};
            var22 = var3;
            var21 = var10;
            var12 = copyDataProperties(var22, var21);
            var21 = var10.routes;
            var12 = new Array(0);
            var22 = var12;
            var20 = 0;
            var10 = arraySpread(var22, var21, var20);
            var10 = 'routes';
            var3[var10] = var12;
            var12 = {};
            var22 = var12;
            var21 = var5;
            var5 = copyDataProperties(var22, var21);
            var5 = 'state';
            var12[var5] = var3;
            var5 = var3.index;
            if(!(var8 !== var5)) { _fun0014_ip = 97; continue _fun0014 }
case 98:
            var3['index'] = var8;
case 97:
            var14 = _closure1_slot14;
            var5 = var3.routes;
            var5 = var5[var8];
            var14 = var14.bind(var6)(var5);
            var5 = var17 == var14;
            if(var5) { _fun0014_ip = 99; continue _fun0014 }
case 100:
            var18 = var14.params;
            var19 = var17 == var18;
            var16 = undefined;
            if(var19) { _fun0014_ip = 101; continue _fun0014 }
case 102:
            var16 = var18.guildId;
case 101:
            var16 = var16 === var15;
            if(!var16) { _fun0014_ip = 103; continue _fun0014 }
case 104:
            var18 = var14.params;
            var19 = var17 == var18;
            var17 = undefined;
            if(var19) { _fun0014_ip = 105; continue _fun0014 }
case 106:
            var17 = var18.channelId;
case 105:
            var16 = var17 === var13;
case 103:
            var5 = var16;
case 99:
            if(var5) { _fun0014_ip = 107; continue _fun0014 }
case 108:
            var5 = var3.routes;
            var3 = {};
            var22 = var3;
            var21 = var14;
            var14 = copyDataProperties(var22, var21);
            var14 = {};
            var14['guildId'] = var15;
            var14['channelId'] = var13;
            var13 = 'params';
            var3[var13] = var14;
            var5[var8] = var3;
case 107:
            var3 = {};
            var21 = var11.state;
            var22 = var3;
            var5 = copyDataProperties(var22, var21);
            var5 = new Array(2);
            var5[0] = var12;
            var5[1] = var7;
            var3[var10] = var5;
            var5 = 1;
            var7 = 'index';
            var3[var7] = var5;
            var11['state'] = var3;
            var3 = var4.dispatch;
            var5 = _closure1_slot0;
            var12 = _closure1_slot1;
            var2 = 6;
            var2 = var12[var2];
            var2 = var5.bind(var6)(var2);
            var6 = var2.CommonActions;
            var5 = var6.reset;
            var2 = {};
            var22 = var2;
            var21 = var9;
            var9 = copyDataProperties(var22, var21);
            var9 = new Array(1);
            var9[0] = var11;
            var2[var10] = var9;
            var2[var7] = var8;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            var2 = true;
            return var2;
case 94:
            return var1;
case 81:
            return var1;
case 72:
            var1 = false;
            return var1;
        }
    };
    var3['navigateToChannel'] = var13;
    var13 = function navigateToMemberVerification(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.getRootNavigationRef;
            var4 = var1.bind(var2)();
            var1 = null;
            var2 = var1 == var4;
            if(var2) { _fun0015_ip = 109; continue _fun0015 }
case 70:
            var1 = var4.isReady;
            var1 = var1.bind(var4)();
            var2 = !var1;
case 109:
            var1 = !var2;
            if(var2) { _fun0015_ip = 110; continue _fun0015 }
case 38:
            var3 = var4.navigate;
            var2 = {};
            var6 = 'member-verification';
            var2['name'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 5;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.v4;
            var7 = var5.bind(var6)();
            var5 = global;
            var5 = var5.HermesInternal;
            var6 = var5.concat;
            var5 = 'member-verification-';
            var5 = var6.bind(var5)(var7);
            var2['key'] = var5;
            var5 = {};
            var6 = arg1;
            var5['guildId'] = var6;
            var6 = arg2;
            var5['inviteCode'] = var6;
            var2['params'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 110:
            return var1;
        }
    };
    var3['navigateToMemberVerification'] = var13;
    var13 = function navigateToRootTab(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.getRootNavigationRef;
            var9 = var2.bind(var3)();
            var5 = var6.screen;
            var3 = var6.resetRoot;
            var2 = var6.forceNavigate;
            var11 = null;
            if(!(var11 != var9)) { _fun0016_ip = 111; continue _fun0016 }
case 40:
            var7 = var9.isReady;
            var7 = var7.bind(var9)();
            if(!var7) { _fun0016_ip = 111; continue _fun0016 }
case 112:
            if(!(var11 != var5)) { _fun0016_ip = 111; continue _fun0016 }
case 67:
            if(var2) { _fun0016_ip = 113; continue _fun0016 }
case 114:
            var7 = var9.getCurrentRoute;
            var10 = var7.bind(var9)();
            var12 = var11 == var10;
            var7 = undefined;
            if(var12) { _fun0016_ip = 115; continue _fun0016 }
case 116:
            var7 = var10.name;
case 115:
            var2 = var7 !== var5;
case 113:
            var10 = 'guilds';
            if(!(var10 !== var5)) { _fun0016_ip = 117; continue _fun0016 }
case 118:
            var7 = 'messages';
            if(!(var7 !== var5)) { _fun0016_ip = 119; continue _fun0016 }
case 120:
            var7 = 'notifications';
            if(!(var7 !== var5)) { _fun0016_ip = 121; continue _fun0016 }
case 122:
            var12 = 'icymi';
            if(!(var12 === var5)) { _fun0016_ip = 123; continue _fun0016 }
case 124:
            if(!var2) { _fun0016_ip = 123; continue _fun0016 }
case 125:
            var14 = var9.navigate;
            var13 = {};
            var13['screen'] = var12;
            var12 = 'tabs';
            var12 = var14.bind(var9)(var12, var13);
            var13 = var6.icymiScreen;
            var _closure2_slot0 = var13;
            var11 = var11 != var13;
            if(!var11) { _fun0016_ip = 126; continue _fun0016 }
case 127:
            var12 = 'icymi-screen';
            var11 = var12 !== var13;
case 126:
            if(!var11) { _fun0016_ip = 123; continue _fun0016 }
case 128:
            var11 = var9.dispatch;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var4 = var1.CommonActions;
                var3 = var4.navigate;
                var2 = {};
                var1 = 'icymi';
                var2['screen'] = var1;
                var1 = {};
                var5 = _closure2_slot0;
                var1['screen'] = var5;
                var2['params'] = var1;
                var1 = 'tabs';
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var8 = var11.bind(var9)(var8);
            _fun0016_ip = 123; continue _fun0016;
case 121:
            if(!var2) { _fun0016_ip = 123; continue _fun0016 }
case 129:
            var11 = var9.navigate;
            var8 = {};
            var8['screen'] = var7;
            var7 = 'tabs';
            var7 = var11.bind(var9)(var7, var8);
            _fun0016_ip = 123; continue _fun0016;
case 119:
            if(!var2) { _fun0016_ip = 123; continue _fun0016 }
case 130:
            var8 = _closure1_slot10;
            var7 = {};
            var7['screen'] = var10;
            var10 = {};
            var11 = _closure1_slot6;
            var10['guildId'] = var11;
            var7['params'] = var10;
            var7 = var8.bind(var4)(var7, var3);
            _fun0016_ip = 123; continue _fun0016;
case 117:
            var7 = var6.guildId;
            var6 = var6.channelId;
            if(var2) { _fun0016_ip = 131; continue _fun0016 }
case 132:
            var8 = var9.setParams;
            var2 = {};
            var2['guildId'] = var7;
            var2['channelId'] = var6;
            var2 = var8.bind(var9)(var2);
            _fun0016_ip = 123; continue _fun0016;
case 131:
            var2 = _closure1_slot10;
            var1 = {};
            var1['screen'] = var5;
            var5 = {};
            var5['guildId'] = var7;
            var5['channelId'] = var6;
            var1['params'] = var5;
            var1 = var2.bind(var4)(var1, var3);
case 123:
            var1 = true;
            return var1;
case 111:
            var1 = false;
            return var1;
        }
    };
    var3['navigateToRootTab'] = var13;
    var13 = function resetToAuthRoute() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getRootNavigationRef;
            var4 = var1.bind(var2)();
            var1 = null;
            var2 = var1 == var4;
            if(var2) { _fun0017_ip = 109; continue _fun0017 }
case 70:
            var1 = var4.isReady;
            var1 = var1.bind(var4)();
            var2 = !var1;
case 109:
            var1 = !var2;
            if(var2) { _fun0017_ip = 133; continue _fun0017 }
case 38:
            var3 = var4.dispatch;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 6;
                var1 = var6[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var3 = var1.CommonActions;
                var2 = var3.reset;
                var1 = 7;
                var1 = var6[var1];
                var4 = var5.bind(var4)(var1);
                var1 = var4.getInitialAuthState;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 133:
            return var1;
        }
    };
    var3['resetToAuthRoute'] = var13;
    var13 = function resetToPanelsUI() {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.getRootNavigationRef;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0018_ip = 134; continue _fun0018 }
case 70:
            var2 = var3.isReady;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0018_ip = 134; continue _fun0018 }
case 135:
            var2 = var3.getRootState;
            var8 = var2.bind(var3)();
            var15 = var8.routes;
            var9 = new Array(0);
            var14 = 0;
            var16 = var9;
            var2 = arraySpread(var16, var15, var14);
            var2 = var9.shift;
            var2 = var2.bind(var9)();
            var10 = var9.unshift;
            var5 = {};
            var2 = 'panels';
            var5['name'] = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var1 = var7[var2];
            var11 = var4.bind(var6)(var1);
            var1 = var11.v4;
            var13 = var1.bind(var11)();
            var1 = global;
            var11 = var1.HermesInternal;
            var12 = var11.concat;
            var11 = 'panels-';
            var11 = var12.bind(var11)(var13);
            var5['key'] = var11;
            var5 = var10.bind(var9)(var5);
            var5 = {};
            var16 = var5;
            var15 = var8;
            var8 = copyDataProperties(var16, var15);
            var8 = 'routes';
            var5[var8] = var9;
            var2 = var7[var2];
            var8 = var4.bind(var6)(var2);
            var2 = var8.v4;
            var8 = var2.bind(var8)();
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'stack-';
            var2 = var2.bind(var1)(var8);
            var1 = 'key';
            var5[var1] = var2;
            var2 = var3.dispatch;
            var1 = 6;
            var1 = var7[var1];
            var1 = var4.bind(var6)(var1);
            var4 = var1.CommonActions;
            var1 = var4.reset;
            var1 = var1.bind(var4)(var5);
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
case 134:
            var1 = false;
            return var1;
        }
    };
    var3['resetToPanelsUI'] = var13;
    var13 = function pushModal(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = arg1;
            var6 = var3.key;
            var8 = null;
            var2 = Object.create(var8);
            var1 = 0;
            var2['key'] = var1;
            var13 = {};
            var12 = var3;
            var11 = var2;
            var5 = copyDataProperties(var13, var12, var11);
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var9 = undefined;
            var4 = var2.bind(var9)(var1);
            var1 = var4.getRootNavigationRef;
            var4 = var1.bind(var4)();
            var1 = 8;
            var1 = var3[var1];
            var2 = var2.bind(var9)(var1);
            var1 = var2.isAndroid;
            var2 = var1.bind(var2)();
            if(!var2) { _fun0019_ip = 13; continue _fun0019 }
case 39:
            var1 = _closure1_slot5;
            var3 = var1.TTIManager;
            var1 = var3.runningTTIAutomation;
            var2 = var1.bind(var3)();
case 13:
            var1 = var8 == var4;
            if(var1) { _fun0019_ip = 136; continue _fun0019 }
case 137:
            var3 = var4.isReady;
            var3 = var3.bind(var4)();
            var1 = !var3;
case 136:
            if(var1) { _fun0019_ip = 138; continue _fun0019 }
case 139:
            var1 = var2;
case 138:
            var1 = !var1;
            if(!var1) { _fun0019_ip = 140; continue _fun0019 }
case 141:
            var3 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 9;
            var2 = var10[var2];
            var3 = var3.bind(var9)(var2);
            var2 = var3.dismissKeyboard;
            var2 = var2.bind(var3)();
            var3 = var4.navigate;
            var2 = {};
            var10 = 'modal';
            var2['name'] = var10;
            if(!(var8 == var6)) { _fun0019_ip = 142; continue _fun0019 }
case 143:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 5;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var9 = var7.v4;
            var7 = global;
            var7 = var7.HermesInternal;
            var8 = var7.concat;
            var7 = 'modal-';
            var6 = var8.bind(var7)(var9);
case 142:
            var2['key'] = var6;
            var2['params'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 140:
            return var1;
        }
    };
    var3['pushModal'] = var13;
    var13 = function popModal(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var15 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var15;
            var _closure2_slot1 = var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var9 = undefined;
            var4 = var4.bind(var9)(var2);
            var2 = var4.getRootNavigationRef;
            var7 = var2.bind(var4)();
            var2 = null;
            if(!(var2 != var7)) { _fun0020_ip = 144; continue _fun0020 }
case 135:
            var4 = var7.isReady;
            var4 = var4.bind(var7)();
            if(!var4) { _fun0020_ip = 144; continue _fun0020 }
case 145:
            var4 = var7.getRootState;
            var10 = var4.bind(var7)();
            var14 = var10.routes;
            var8 = var10.index;
            var6 = -1;
            var11 = var8 > var6;
            var4 = undefined;
            var12 = var14;
            if(!var11) { _fun0020_ip = 146; continue _fun0020 }
case 147:
            var13 = _closure1_slot16;
            var11 = var14[var8];
            var13 = var13.bind(var9)(var11);
            var11 = var8;
            if(!(var2 != var15)) { _fun0020_ip = 148; continue _fun0020 }
case 149:
            var17 = var2 == var13;
            var16 = undefined;
            if(var17) { _fun0020_ip = 150; continue _fun0020 }
case 151:
            var16 = var13.key;
case 150:
            var4 = var13;
            if(!(var16 !== var15)) { _fun0020_ip = 152; continue _fun0020 }
case 148:
            if(!(var2 == var15)) { _fun0020_ip = 51; continue _fun0020 }
case 14:
            if(!(var2 == var13)) { _fun0020_ip = 152; continue _fun0020 }
case 51:
            var8 = var11 - 1;
            var12 = var14;
            if(var8 > var6) { _fun0020_ip = 147; continue _fun0020 }
case 153:
            _fun0020_ip = 146; continue _fun0020;
case 152:
            var8 = var14;
            if(!(var2 != var3)) { _fun0020_ip = 154; continue _fun0020 }
case 143:
            var4 = new Array(0);
            var18 = 0;
            var20 = var4;
            var19 = var14;
            var6 = arraySpread(var20, var19, var18);
            var6 = {};
            var20 = var6;
            var19 = var13;
            var14 = copyDataProperties(var20, var19);
            var14 = {};
            var19 = var13.params;
            var20 = var14;
            var15 = copyDataProperties(var20, var19);
            var15 = {};
            var16 = var13.params;
            var19 = var16.modal;
            var20 = var15;
            var16 = copyDataProperties(var20, var19);
            var16 = {};
            var13 = var13.params;
            var13 = var13.modal;
            var19 = var13.callbacks;
            var20 = var16;
            var13 = copyDataProperties(var20, var19);
            var13 = 'onExited';
            var16[var13] = var3;
            var13 = 'callbacks';
            var15[var13] = var16;
            var13 = 'modal';
            var14[var13] = var15;
            var13 = 'params';
            var6[var13] = var14;
            var4[var11] = var6;
            var13 = var7.dispatch;
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var6 = 6;
            var6 = var15[var6];
            var6 = var14.bind(var9)(var6);
            var15 = var6.CommonActions;
            var14 = var15.reset;
            var6 = {};
            var20 = var6;
            var19 = var10;
            var16 = copyDataProperties(var20, var19);
            var16 = 'routes';
            var6[var16] = var4;
            var17 = var10.index;
            var16 = 'index';
            var6[var16] = var17;
            var6 = var14.bind(var15)(var6);
            var6 = var13.bind(var7)(var6);
            var8 = var4;
case 154:
            var4 = new Array(0);
            var18 = 0;
            var20 = var4;
            var19 = var8;
            var6 = arraySpread(var20, var19, var18);
            var8 = var4.splice;
            var6 = 1;
            var6 = var8.bind(var4)(var11, var6);
            var12 = var4;
case 146:
            var4 = var10.routes;
            if(!(var12 !== var4)) { _fun0020_ip = 155; continue _fun0020 }
case 156:
            if(!(var2 != var3)) { _fun0020_ip = 157; continue _fun0020 }
case 158:
            var4 = global;
            var6 = var4.Promise;
            var4 = var6.resolve;
            var8 = var4.bind(var6)();
            var6 = var8.then;
            var4 = function() {
                var3 = _closure1_slot20;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var6.bind(var8)(var4);
            var4 = true;
            _fun0020_ip = 159; continue _fun0020;
case 157:
            var6 = var7.dispatch;
            var8 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 6;
            var5 = var11[var5];
            var5 = var8.bind(var9)(var5);
            var9 = var5.CommonActions;
            var8 = var9.reset;
            var5 = {};
            var20 = var5;
            var19 = var10;
            var11 = copyDataProperties(var20, var19);
            var11 = 'routes';
            var5[var11] = var12;
            var11 = global;
            var13 = var11.Math;
            var12 = var13.max;
            var11 = var10.index;
            var10 = 1;
            var11 = var11 - var10;
            var10 = 0;
            var11 = var12.bind(var13)(var11, var10);
            var10 = 'index';
            var5[var10] = var11;
            var5 = var8.bind(var9)(var5);
            var5 = var6.bind(var7)(var5);
            var4 = true;
            _fun0020_ip = 159; continue _fun0020;
case 155:
            var6 = var2 != var3;
            var4 = false;
            if(!var6) { _fun0020_ip = 159; continue _fun0020 }
case 160:
            var6 = global;
            var7 = var6.Promise;
            var6 = var7.resolve;
            var8 = var6.bind(var7)();
            var7 = var8.then;
            var6 = function() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var4 = false;
case 159:
            return var4;
case 144:
            if(!(var2 != var3)) { _fun0020_ip = 161; continue _fun0020 }
case 162:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var3 = var2.bind(var3)();
            var2 = var3.then;
            var1 = function() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 161:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot20 = var13;
    var3['popModal'] = var13;
    var13 = function popAllModals() {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.getRootNavigationRef;
            var4 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var4)) { _fun0021_ip = 163; continue _fun0021 }
case 70:
            var1 = var4.isReady;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0021_ip = 163; continue _fun0021 }
case 135:
            var1 = var4.getRootState;
            var8 = var1.bind(var4)();
            var1 = var8.routes;
            var7 = new Array(0);
            var3 = _closure1_slot8;
            var9 = var3.bind(var6)(var1);
            var5 = var9.bind(var6)();
            var3 = var5.done;
            if(var3) { _fun0021_ip = 122; continue _fun0021 }
case 164:
            var10 = var5.value;
            var12 = _closure1_slot7;
            var11 = var12.has;
            var3 = var10.name;
            var3 = var11.bind(var12)(var3);
            if(var3) { _fun0021_ip = 149; continue _fun0021 }
case 165:
            var3 = var7.push;
            var3 = var3.bind(var7)(var10);
case 149:
            var10 = var9.bind(var6)();
            var3 = var10.done;
            var5 = var10;
            if(!var3) { _fun0021_ip = 164; continue _fun0021 }
case 122:
            var3 = var1.length;
            var1 = var7.length;
            var1 = var3 !== var1;
            if(!var1) { _fun0021_ip = 166; continue _fun0021 }
case 125:
            var3 = var4.dispatch;
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 6;
            var2 = var9[var2];
            var2 = var5.bind(var6)(var2);
            var6 = var2.CommonActions;
            var5 = var6.reset;
            var2 = {};
            var14 = var2;
            var13 = var8;
            var8 = copyDataProperties(var14, var13);
            var8 = 'routes';
            var2[var8] = var7;
            var8 = var7.length;
            var7 = 1;
            var8 = var8 - var7;
            var7 = 'index';
            var2[var7] = var8;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 166:
            return var1;
case 163:
            var1 = false;
            return var1;
        }
    };
    var3['popAllModals'] = var13;
    var13 = function getSelectedGuildFromRoute() {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getRootNavigationRef;
            var6 = var1.bind(var2)();
            var4 = null;
            var2 = var4 == var6;
            var1 = undefined;
            if(var2) { _fun0022_ip = 28; continue _fun0022 }
case 2:
            var2 = var6.getRootState;
            var1 = var2.bind(var6)();
case 28:
            if(!(var4 != var1)) { _fun0022_ip = 167; continue _fun0022 }
case 135:
            var2 = _closure1_slot11;
            var6 = var1.routes;
            var1 = var1.index;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            if(!(var4 != var1)) { _fun0022_ip = 167; continue _fun0022 }
case 168:
            var2 = var1.state;
            if(!(var4 != var2)) { _fun0022_ip = 167; continue _fun0022 }
case 169:
            var6 = _closure1_slot12;
            var7 = var2.routes;
            var1 = var2.index;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            if(!(var4 == var1)) { _fun0022_ip = 170; continue _fun0022 }
case 54:
            var6 = _closure1_slot13;
            var7 = var2.routes;
            var2 = var2.index;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            if(!(var4 != var2)) { _fun0022_ip = 167; continue _fun0022 }
case 122:
            var2 = var2.state;
            if(!(var4 == var2)) { _fun0022_ip = 124; continue _fun0022 }
case 167:
            return var5;
case 124:
            var3 = _closure1_slot14;
            var6 = var2.routes;
            var7 = var2.index;
            var8 = var4 != var7;
            var2 = -1;
            if(!var8) { _fun0022_ip = 20; continue _fun0022 }
case 143:
            var2 = var7;
case 20:
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var6 = var4 == var3;
            var2 = undefined;
            if(var6) { _fun0022_ip = 171; continue _fun0022 }
case 172:
            var3 = var3.params;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0022_ip = 171; continue _fun0022 }
case 128:
            var2 = var3.guildId;
case 171:
            return var2;
case 170:
            var1 = var1.params;
            var1 = var1.guildId;
            return var1;
        }
    };
    var3['getSelectedGuildFromRoute'] = var13;
    var13 = function getSelectedChannelFromRoute() {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var1 = var2[var1];
            var2 = undefined;
            var4 = var4.bind(var2)(var1);
            var1 = var4.getRootNavigationRef;
            var6 = var1.bind(var4)();
            var4 = null;
            if(!(var4 != var6)) { _fun0023_ip = 9; continue _fun0023 }
case 46:
            var1 = var4 == var6;
            var5 = undefined;
            if(var1) { _fun0023_ip = 135; continue _fun0023 }
case 173:
            var1 = var6.getCurrentRoute;
            var5 = var1.bind(var6)();
case 135:
            var1 = _closure1_slot12;
            var1 = var1.bind(var2)(var5);
            if(!(var4 == var1)) { _fun0023_ip = 13; continue _fun0023 }
case 174:
            var3 = _closure1_slot14;
            var3 = var3.bind(var2)(var5);
            if(!(var4 == var3)) { _fun0023_ip = 168; continue _fun0023 }
case 9:
            return var2;
case 168:
            var3 = var3.params;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0023_ip = 63; continue _fun0023 }
case 64:
            var2 = var3.channelId;
case 63:
            return var2;
case 13:
            var1 = var1.params;
            var1 = var1.channelId;
            return var1;
        }
    };
    var3['getSelectedChannelFromRoute'] = var13;
    var13 = function navigateToNewGroupDM(arg1, arg2) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getRootNavigationRef;
            var5 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0024_ip = 169; continue _fun0024 }
case 70:
            var4 = var5.navigate;
            var3 = {};
            var2 = 'gdm';
            var3['screen'] = var2;
            var2 = {};
            var6 = arg1;
            var2['channelId'] = var6;
            var6 = arg2;
            var2['locationPage'] = var6;
            var3['params'] = var2;
            var2 = 'friends';
            var2 = var4.bind(var5)(var2, var3);
            var1 = true;
case 169:
            return var1;
        }
    };
    var3['navigateToNewGroupDM'] = var13;
    var13 = function navigateToCreateThread(arg1, arg2) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getRootNavigationRef;
            var5 = var1.bind(var2)();
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0025_ip = 63; continue _fun0025 }
case 70:
            var3 = var2 == var5;
            var2 = true;
            var1 = true;
            if(var3) { _fun0025_ip = 63; continue _fun0025 }
case 4:
            var4 = var5.navigate;
            var3 = {'name': 'channel', 'key': 'new-thread'};
            var6 = {};
            var7 = arg1;
            var6['guildId'] = var7;
            var7 = arg2;
            var6['channelId'] = var7;
            var6['showCreateThread'] = var2;
            var3['params'] = var6;
            var3 = var4.bind(var5)(var3);
            var1 = true;
case 63:
            return var1;
        }
    };
    var3['navigateToCreateThread'] = var13;
    var13 = function popScreens(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.getRootNavigationRef;
            var4 = var1.bind(var3)();
            var _closure2_slot1 = var4;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0026_ip = 175; continue _fun0026 }
case 109:
            var3 = var4.dispatch;
            var2 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = var2.getRootState;
                    var4 = var1.bind(var2)();
                    var8 = var4.routes;
                    var5 = new Array(0);
                    var2 = 0;
                    var9 = var5;
                    var7 = 0;
                    var1 = arraySpread(var9, var8, var7);
                    var1 = _closure2_slot0;
                    if(!(var1 > var2)) { _fun0027_ip = 176; continue _fun0027 }
case 2:
                    var1 = var5.pop;
                    var1 = var1.bind(var5)();
                    var1 = _closure2_slot0;
                    var1 = var1 - 1;
                    _closure2_slot0 = var1;
                    if(var1 > var2) { _fun0027_ip = 2; continue _fun0027 }
case 176:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.CommonActions;
                    var2 = var3.reset;
                    var1 = {};
                    var9 = var1;
                    var8 = var4;
                    var4 = copyDataProperties(var9, var8);
                    var4 = 'routes';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 175:
            return var1;
        }
    };
    var3['popScreens'] = var13;
    var3['coerceMainRoute'] = var12;
    var3['coerceChannelRoute'] = var11;
    var11 = function coerceSidebarRoute(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0028_ip = 177; continue _fun0028 }
case 43:
            var3 = var1.name;
            var2 = 'sidebar';
            if(!(var2 !== var3)) { _fun0028_ip = 34; continue _fun0028 }
case 177:
            var2 = undefined;
            return var2;
case 34:
            return var1;
        }
    };
    var3['coerceSidebarRoute'] = var11;
    var3['coerceTabsRoute'] = var10;
    var3['coerceGuildsRoute'] = var9;
    var9 = function coerceMessagesRoute(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0029_ip = 42; continue _fun0029 }
case 43:
            var3 = var1.name;
            var2 = 'messages';
            if(!(var2 !== var3)) { _fun0029_ip = 44; continue _fun0029 }
case 42:
            var2 = undefined;
            return var2;
case 44:
            return var1;
        }
    };
    var3['coerceMessagesRoute'] = var9;
    var3['coerceICYMIRoute'] = var8;
    var3['coerceModalRoute'] = var7;
    var3['isModalOpen'] = var6;
    var6 = function useIsModalOpen(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot4;
        var5 = undefined;
        var1 = function() {
            var3 = _closure1_slot17;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var7 = var4.bind(var5)(var1);
        var4 = _closure1_slot2;
        var1 = 2;
        var7 = var4.bind(var5)(var7, var1);
        var1 = 0;
        var1 = var7[var1];
        var4 = 1;
        var4 = var7[var4];
        var _closure2_slot1 = var4;
        var4 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 == var4)) { _fun0030_ip = 178; continue _fun0030 }
case 46:
                return var1;
case 178:
                var3 = var4.addListener;
                var2 = 'state';
                var1 = function() {
                    var3 = _closure2_slot1;
                    var4 = _closure1_slot17;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useIsModalOpen'] = var6;
    var3['getOpenModalKey'] = var5;
    var5 = function useOpenModalKey() {
        var4 = _closure1_slot4;
        var5 = undefined;
        var1 = function() {
            var2 = _closure1_slot18;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var6 = var4.bind(var5)(var1);
        var4 = _closure1_slot2;
        var1 = 2;
        var6 = var4.bind(var5)(var6, var1);
        var1 = 0;
        var1 = var6[var1];
        var4 = 1;
        var4 = var6[var4];
        var _closure2_slot0 = var4;
        var4 = _closure1_slot3;
        var3 = function() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 == var4)) { _fun0031_ip = 178; continue _fun0031 }
case 46:
                return var1;
case 178:
                var3 = var4.addListener;
                var2 = 'state';
                var1 = function() {
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot18;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useOpenModalKey'] = var5;
    var3['getCurrentNavigationRouteName'] = var4;
    var4 = function useCurrentNavigationRouteName() {
        var4 = _closure1_slot4;
        var5 = undefined;
        var1 = function() {
            var2 = _closure1_slot19;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var6 = var4.bind(var5)(var1);
        var4 = _closure1_slot2;
        var1 = 2;
        var6 = var4.bind(var5)(var6, var1);
        var1 = 0;
        var1 = var6[var1];
        var4 = 1;
        var4 = var6[var4];
        var _closure2_slot0 = var4;
        var4 = _closure1_slot3;
        var3 = function() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 == var4)) { _fun0032_ip = 178; continue _fun0032 }
case 46:
                return var1;
case 178:
                var3 = var4.addListener;
                var2 = 'state';
                var1 = function() {
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot19;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useCurrentNavigationRouteName'] = var4;
    var4 = function getCurrentRouteParents() {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var8 = undefined;
            var2 = var2.bind(var8)(var1);
            var1 = var2.getRootNavigationRef;
            var4 = var1.bind(var2)();
            var2 = null;
            if(!(var2 != var4)) { _fun0033_ip = 142; continue _fun0033 }
case 70:
            var1 = var4.isReady;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0033_ip = 142; continue _fun0033 }
case 135:
            var1 = new Array(0);
            var3 = var4.getRootState;
            var3 = var3.bind(var4)();
            var5 = var2 == var3;
            var7 = undefined;
            var4 = undefined;
            if(var5) { _fun0033_ip = 179; continue _fun0033 }
case 112:
            var9 = var3.routes;
            var6 = var3.index;
            var10 = var2 != var6;
            var5 = 0;
            if(!var10) { _fun0033_ip = 63; continue _fun0033 }
case 50:
            var5 = var6;
case 63:
            var5 = var9[var5];
            var4 = var5.state;
            var7 = var6;
case 179:
            var5 = var3;
            var3 = var5;
            if(!(var2 != var4)) { _fun0033_ip = 180; continue _fun0033 }
case 136:
            var4 = var1.push;
            var4 = var4.bind(var1)(var5);
            var9 = var5.routes;
            var10 = var5.index;
            var11 = var2 != var10;
            var4 = 0;
            if(!var11) { _fun0033_ip = 14; continue _fun0033 }
case 181:
            var4 = var10;
case 14:
            var4 = var9[var4];
            var9 = var4.state;
            var10 = var2 == var9;
            var4 = undefined;
            if(var10) { _fun0033_ip = 182; continue _fun0033 }
case 58:
            var12 = var9.routes;
            var11 = var9.index;
            var13 = var2 != var11;
            var10 = 0;
            if(!var13) { _fun0033_ip = 183; continue _fun0033 }
case 184:
            var10 = var11;
case 183:
            var10 = var12[var10];
            var4 = var10.state;
            var7 = var11;
case 182:
            var5 = var9;
            var3 = var5;
            if(var2 != var4) { _fun0033_ip = 136; continue _fun0033 }
case 180:
            if(!(var2 != var3)) { _fun0033_ip = 185; continue _fun0033 }
case 80:
            var2 = var1.push;
            var2 = var2.bind(var1)(var3);
case 185:
            return var1;
case 142:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['getCurrentRouteParents'] = var4;
    var4 = function getTabsRouteIfActive(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot11;
            var3 = var1.routes;
            var1 = var1.index;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var4.bind(var3)(var1);
            var1 = null;
            var6 = var1 == var5;
            var4 = undefined;
            if(var6) { _fun0034_ip = 186; continue _fun0034 }
case 178:
            var4 = var5.state;
case 186:
            if(!(var1 == var4)) { _fun0034_ip = 62; continue _fun0034 }
case 187:
            return var3;
case 62:
            var2 = _closure1_slot13;
            var4 = var5.state;
            var4 = var4.routes;
            var5 = var5.state;
            var5 = var5.index;
            var6 = var1 != var5;
            var1 = 0;
            if(!var6) { _fun0034_ip = 188; continue _fun0034 }
case 168:
            var1 = var5;
case 188:
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getTabsRouteIfActive'] = var4;
    var2 = function getICYMIRouteIfActive(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot11;
            var5 = null;
            var6 = var5 == var8;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0035_ip = 37; continue _fun0035 }
case 31:
            var7 = var8.routes;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0035_ip = 178; continue _fun0035 }
case 189:
            var6 = var8.index;
case 178:
            var1 = var7[var6];
case 37:
            var1 = var4.bind(var3)(var1);
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0035_ip = 190; continue _fun0035 }
case 7:
            var4 = var1.state;
case 190:
            if(!(var5 != var4)) { _fun0035_ip = 116; continue _fun0035 }
case 35:
            var4 = _closure1_slot13;
            var1 = var1.state;
            var6 = var1.routes;
            var1 = 0;
            var1 = var6[var1];
            var1 = var4.bind(var3)(var1);
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0035_ip = 13; continue _fun0035 }
case 50:
            var4 = var1.state;
case 13:
            if(!(var5 == var4)) { _fun0035_ip = 52; continue _fun0035 }
case 116:
            return var3;
case 52:
            var2 = _closure1_slot15;
            var4 = var1.state;
            var4 = var4.routes;
            var1 = var1.state;
            var1 = var1.index;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getICYMIRouteIfActive'] = var2;
    return var1;
})();