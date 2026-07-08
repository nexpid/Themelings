// app/modules/premium/powerups/native/GuildPowerupsModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
            var2 = var3["@@iterator"];
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
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ScrollView;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BoostInfoType;
    var _closure1_slot6 = var7;
    var4 = var4.GuildPowerupType;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['paddingTop'] = var12;
    var4['headerContainer'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'borderWidth': 1, 'borderStyle': 'solid'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['borderColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var4['boostInfoContainer'] = var9;
    var9 = {'width': 1, 'height': '100%'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['backgroundColor'] = var12;
    var4['boostInfoSeparator'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_96;
    var9['paddingBottom'] = var12;
    var4['scrollView'] = var9;
    var9 = {'paddingHorizontal': null, 'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['paddingHorizontal'] = var10;
    var4['boostButtonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsModal(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guildId;
            var _closure2_slot0 = var12;
            var6 = var1.analyticsLocation;
            var8 = var1.autoOpenPerkId;
            var _closure2_slot1 = var8;
            var2 = var1.autoOpenRequestId;
            var _closure2_slot2 = var2;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.useGameServerEnabled;
            var11 = 'GuildPowerupsModal';
            var7 = var1.bind(var7)(var12, var11);
            var9 = _closure1_slot1;
            var1 = 7;
            var1 = var5[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.bind(var4)(var12);
            var1 = 8;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useAutoDismissGuildPowerupsNotifications;
            var1 = var1.bind(var3)(var12);
            var1 = 9;
            var1 = var5[var1];
            var10 = var9.bind(var4)(var1);
            var3 = null;
            var1 = var3 != var8;
            var1 = var10.bind(var4)(var12, var11, var1);
            var1 = 10;
            var1 = var5[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var15 = var1.bottom;
            var1 = _closure1_slot10;
            var10 = var1.bind(var4)();
            var1 = 11;
            var5 = var5[var1];
            var5 = var9.bind(var4)(var5);
            if(!(var3 == var6)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var9 = new Array(0);
            _fun0004_ip = 38; continue _fun0004;
case 36:
            var3 = new Array(1);
            var3[0] = var6;
            var9 = var3;
case 38:
            var3 = new Array(0);
            var27 = 0;
            var29 = var3;
            var28 = var9;
            var6 = arraySpread(var29, var28, var27);
            var29 = var5;
            var28 = var3;
            var27 = undefined;
            var3 = apply(var29, var28, var27);
            var5 = var3.analyticsLocations;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 12;
            var3 = var13[var3];
            var6 = var11.bind(var4)(var3);
            var3 = var6.useBuildGuildPowerupsSections;
            var20 = var3.bind(var6)(var12, var7);
            _closure2_slot3 = var20;
            var7 = _closure1_slot3;
            var3 = var7.useRef;
            var3 = var3.bind(var7)(var4);
            _closure2_slot4 = var3;
            var6 = var7.useEffect;
            var3 = new Array(4);
            var3[0] = var8;
            var3[1] = var2;
            var3[2] = var12;
            var3[3] = var20;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var1 = _closure2_slot2;
                    if(!(var2 != var1)) { _fun0005_ip = 39; continue _fun0005 }
case 41:
                    var1 = _closure2_slot4;
                    var2 = var1.current;
                    var1 = _closure2_slot2;
                    if(!(var2 !== var1)) { _fun0005_ip = 39; continue _fun0005 }
case 5:
                    var2 = _closure1_slot11;
                    var1 = _closure2_slot3;
                    var7 = undefined;
                    var6 = var2.bind(var7)(var1);
                    var2 = var6.bind(var7)();
                    var1 = var2.done;
                    var5 = 'multiPerk';
                    var4 = 'singlePerk';
                    var3 = var2;
                    var2 = undefined;
                    if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 42:
                    var11 = _closure1_slot11;
                    var1 = var3.value;
                    var1 = var1.listings;
                    var13 = var11.bind(var7)(var1);
                    var11 = var13.bind(var7)();
                    var1 = var11.done;
                    if(var1) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var12 = var11.value;
                    var1 = var12.type;
                    if(!(var4 === var1)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var1 = var12.powerup;
                    var14 = var1.skuId;
                    var1 = _closure2_slot1;
                    if(!(var14 !== var1)) { _fun0005_ip = 47; continue _fun0005 }
case 45:
                    var1 = var12.type;
                    if(!(var5 === var1)) { _fun0005_ip = 48; continue _fun0005 }
case 16:
                    var14 = var12.group;
                    var1 = _closure2_slot1;
                    if(!(var14 !== var1)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var15 = var12.powerups;
                    var14 = var15.some;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = _closure2_slot1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var14.bind(var15)(var1);
                    if(var1) { _fun0005_ip = 49; continue _fun0005 }
case 48:
                    var14 = var13.bind(var7)();
                    var1 = var14.done;
                    var11 = var14;
                    var2 = var12;
                    if(var1) { _fun0005_ip = 43; continue _fun0005 }
case 51:
                    _fun0005_ip = 44; continue _fun0005;
case 49:
                    var11 = _closure2_slot4;
                    var1 = _closure2_slot2;
                    var11['current'] = var1;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var1 = 14;
                    var1 = var13[var1];
                    var11 = var11.bind(var7)(var1);
                    var1 = {};
                    var13 = _closure2_slot0;
                    var1['guildId'] = var13;
                    var1['listing'] = var12;
                    var13 = function onDismiss() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1['onDismiss'] = var13;
                    var1 = var11.bind(var7)(var1);
                    var1 = undefined;
                    return var1;
case 47:
                    var11 = _closure2_slot4;
                    var1 = _closure2_slot2;
                    var11['current'] = var1;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var1 = 13;
                    var1 = var13[var1];
                    var11 = var11.bind(var7)(var1);
                    var1 = {};
                    var13 = _closure2_slot0;
                    var1['guildId'] = var13;
                    var12 = var12.powerup;
                    var1['powerup'] = var12;
                    var1 = var11.bind(var7)(var1);
                    var1 = undefined;
                    return var1;
case 43:
                    var11 = var6.bind(var7)();
                    var1 = var11.done;
                    var3 = var11;
                    if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var6 = var7.useCallback;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.pop;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = new Array(0);
            var21 = var6.bind(var7)(var3, var2);
            var18 = _closure1_slot1;
            var2 = 16;
            var2 = var13[var2];
            var2 = var18.bind(var4)(var2);
            var2 = var2.bind(var4)(var12);
            var25 = var2.available;
            var26 = var2.spent;
            var24 = var2.total;
            var3 = _closure1_slot8;
            var1 = var13[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var10.container;
            var5['style'] = var8;
            var8 = {};
            var9 = var10.headerContainer;
            var8['style'] = var9;
            var9 = 17;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var14 = var9.Header;
            var9 = {};
            var16 = 18;
            var16 = var13[var16];
            var16 = var11.bind(var4)(var16);
            var22 = var16.intl;
            var19 = var22.string;
            var16 = 19;
            var16 = var13[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.hjvcLO;
            var16 = var19.bind(var22)(var16);
            var9['title'] = var16;
            var16 = function headerTitle() {
                var4 = _closure1_slot8;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 20;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var2 = var1.GenericHeaderTitle;
                var1 = {};
                var6 = 18;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var8 = _closure1_slot1;
                var5 = 19;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.hjvcLO;
                var5 = var6.bind(var7)(var5);
                var1['title'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9['headerTitle'] = var16;
            var16 = 'center';
            var9['headerTitleAlign'] = var16;
            var16 = 21;
            var16 = var13[var16];
            var19 = var11.bind(var4)(var16);
            var16 = var19.getHeaderCloseButton;
            var16 = var16.bind(var19)(var21);
            var9['headerLeft'] = var16;
            var9 = var3.bind(var4)(var14, var9);
            var8['children'] = var9;
            var9 = var3.bind(var4)(var6, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var14 = _closure1_slot4;
            var9 = {};
            var16 = var10.scrollView;
            var9['contentContainerStyle'] = var16;
            var16 = {};
            var19 = var10.boostInfoContainer;
            var16['style'] = var19;
            var21 = 22;
            var19 = var13[var21];
            var22 = var18.bind(var4)(var19);
            var19 = {};
            var19['count'] = var25;
            var23 = _closure1_slot6;
            var25 = var23.AVAILABLE;
            var19['type'] = var25;
            var22 = var3.bind(var4)(var22, var19);
            var19 = new Array(5);
            var19[0] = var22;
            var22 = {};
            var25 = var10.boostInfoSeparator;
            var22['style'] = var25;
            var22 = var3.bind(var4)(var6, var22);
            var19[1] = var22;
            var22 = var13[var21];
            var25 = var18.bind(var4)(var22);
            var22 = {};
            var22['count'] = var26;
            var26 = var23.SPENT;
            var22['type'] = var26;
            var22 = var3.bind(var4)(var25, var22);
            var19[2] = var22;
            var22 = {};
            var25 = var10.boostInfoSeparator;
            var22['style'] = var25;
            var22 = var3.bind(var4)(var6, var22);
            var19[3] = var22;
            var21 = var13[var21];
            var22 = var18.bind(var4)(var21);
            var21 = {};
            var21['count'] = var24;
            var23 = var23.TOTAL;
            var21['type'] = var23;
            var21 = var3.bind(var4)(var22, var21);
            var19[4] = var21;
            var16['children'] = var19;
            var19 = var7.bind(var4)(var6, var16);
            var16 = new Array(4);
            var16[0] = var19;
            var19 = 23;
            var19 = var13[var19];
            var21 = var18.bind(var4)(var19);
            var19 = {};
            var19['guildId'] = var12;
            var19 = var3.bind(var4)(var21, var19);
            var16[1] = var19;
            var19 = var20.map;
            var17 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var3 = _closure1_slot7;
                    var3 = var3.LEVEL;
                    if(!(var3 !== var4)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var3 = _closure1_slot7;
                    var3 = var3.PERK;
                    if(!(var3 !== var4)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var3 = null;
                    return var3;
case 54:
                    var7 = _closure1_slot8;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 25;
                    var3 = var5[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = {};
                    var3 = _closure2_slot0;
                    var4['guildId'] = var3;
                    var3 = var1.listings;
                    var4['listings'] = var3;
                    var3 = var1.type;
                    var3 = var7.bind(var6)(var5, var4, var3);
                    return var3;
case 52:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['guildId'] = var6;
                    var6 = var1.listings;
                    var2['listings'] = var6;
                    var1 = var1.type;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var17 = var19.bind(var20)(var17);
            var16[2] = var17;
            var17 = 26;
            var17 = var13[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['guildId'] = var12;
            var17 = var3.bind(var4)(var18, var17);
            var16[3] = var17;
            var9['children'] = var16;
            var9 = var7.bind(var4)(var14, var9);
            var8[1] = var9;
            var9 = {};
            var14 = var10.boostButtonContainer;
            var10 = new Array(2);
            var10[0] = var14;
            var14 = {};
            var14['paddingBottom'] = var15;
            var10[1] = var14;
            var9['style'] = var10;
            var10 = 27;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.GuildPowerupsBoostButton;
            var10 = {};
            var10['guildId'] = var12;
            var10 = var3.bind(var4)(var11, var10);
            var9['children'] = var10;
            var9 = var3.bind(var4)(var6, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();