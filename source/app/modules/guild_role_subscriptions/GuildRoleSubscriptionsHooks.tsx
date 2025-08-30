// app/modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var5 = metroImportAll;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var _closure1_slot3 = var9;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var5 = var9[var4];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot9 = var4;
    var4 = new Array(0);
    var _closure1_slot10 = var4;
    var6 = function useFetchListingsForGuild(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var14 = arg1;
            var2 = arguments[1];
            var _closure2_slot0 = var14;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0004_ip = 20; continue _fun0004 }
 18:
            var2 = {};
 20:
            var12 = var2.refetchOnMount;
            if(!(var12 === var5)) { _fun0004_ip = 32; continue _fun0004 }
 30:
            var12 = false;
 32:
            var _closure2_slot1 = var12;
            var13 = var2.includeSoftDeleted;
            if(!(var13 === var5)) { _fun0004_ip = 48; continue _fun0004 }
 46:
            var13 = true;
 48:
            var _closure2_slot2 = var13;
            var11 = var2.countryCode;
            var _closure2_slot3 = var11;
            var10 = var2.dontFetchWhileTrue;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 5;
            var6 = var7[var3];
            var15 = var4.bind(var5)(var6);
            var9 = var15.useStateFromStores;
            var6 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var9.bind(var15)(var8, var6);
            _closure2_slot5 = var15;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 28; continue _fun0005 }
 13:
                    var1 = _closure1_slot9;
                    var1 = var1.FETCHED;
                    _fun0005_ip = 50; continue _fun0005;
 28:
                    var4 = _closure1_slot8;
                    var3 = var4.getSubscriptionGroupListingsForGuildFetchState;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 50:
                    return var1;
                }
            };
            var3 = var6.bind(var8)(var4, var3);
            var9 = _closure1_slot6;
            var4 = var9.useRef;
            var4 = var4.bind(var9)(var12);
            _closure2_slot6 = var4;
            var8 = var9.useEffect;
            var6 = new Array(6);
            var6[0] = var15;
            var6[1] = var14;
            var6[2] = var13;
            var6[3] = var12;
            var6[4] = var11;
            var6[5] = var10;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 152; continue _fun0006 }
 16:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0006_ip = 152; continue _fun0006 }
 26:
                    var2 = _closure2_slot4;
                    var1 = true;
                    if(!(var1 !== var2)) { _fun0006_ip = 152; continue _fun0006 }
 36:
                    var4 = _closure1_slot8;
                    var3 = var4.getSubscriptionGroupListingsForGuildFetchState;
                    var2 = _closure2_slot0;
                    var4 = var3.bind(var4)(var2);
                    var2 = _closure2_slot1;
                    if(var2) { _fun0006_ip = 79; continue _fun0006 }
 65:
                    var3 = _closure1_slot9;
                    var3 = var3.NOT_FETCHED;
                    var2 = var4 === var3;
 79:
                    if(!var2) { _fun0006_ip = 152; continue _fun0006 }
 82:
                    var3 = _closure2_slot6;
                    var2 = false;
                    var3['current'] = var2;
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.fetchAllSubscriptionListingsDataForGuild;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1['includeSoftDeleted'] = var6;
                    var5 = _closure2_slot3;
                    var1['countryCode'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 152:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var6);
            var6 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var4 = var1.bind(var5)(var4);
            var1 = {};
            var2 = _closure1_slot9;
            var2 = var2.FETCHED;
            var2 = var3 === var2;
            if(!var2) { _fun0004_ip = 286; continue _fun0004 }
 280:
            var3 = true;
            var2 = var3 !== var4;
 286:
            var1['listingsLoaded'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var6;
    var5 = function useSubscriptionListingsForGroup(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var8 = arg1;
            var2 = arguments[1];
            var _closure2_slot0 = var8;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0007_ip = 20; continue _fun0007 }
 18:
            var2 = {};
 20:
            var7 = var2.includeSoftDeleted;
            if(!(var7 === var5)) { _fun0007_ip = 32; continue _fun0007 }
 30:
            var7 = false;
 32:
            var _closure2_slot1 = var7;
            var6 = var2.includeUnpublished;
            if(!(var6 === var5)) { _fun0007_ip = 48; continue _fun0007 }
 46:
            var6 = true;
 48:
            var _closure2_slot2 = var6;
            var4 = _closure1_slot0;
            var9 = _closure1_slot3;
            var3 = 5;
            var3 = var9[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStoresArray;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot0;
                    var7 = null;
                    if(!(var7 != var1)) { _fun0008_ip = 167; continue _fun0008 }
 16:
                    var3 = _closure1_slot8;
                    var2 = var3.getSubscriptionGroupListing;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    if(!(var7 != var2)) { _fun0008_ip = 161; continue _fun0008 }
 42:
                    var1 = new Array(0);
                    var3 = _closure1_slot14;
                    var2 = var2.subscription_listings_ids;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0008_ip = 159; continue _fun0008 }
 75:
                    var10 = var3.value;
                    var9 = _closure1_slot8;
                    var2 = var9.getSubscriptionListing;
                    var9 = var2.bind(var9)(var10);
                    if(!(var7 != var9)) { _fun0008_ip = 144; continue _fun0008 }
 99:
                    var2 = var9.soft_deleted;
                    if(!var2) { _fun0008_ip = 115; continue _fun0008 }
 108:
                    var10 = _closure2_slot1;
                    var2 = !var10;
 115:
                    if(var2) { _fun0008_ip = 144; continue _fun0008 }
 118:
                    var2 = var9.published;
                    if(var2) { _fun0008_ip = 131; continue _fun0008 }
 127:
                    var2 = _closure2_slot2;
 131:
                    if(!var2) { _fun0008_ip = 144; continue _fun0008 }
 134:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var9);
 144:
                    var9 = var4.bind(var5)();
                    var2 = var9.done;
                    var3 = var9;
                    if(!var2) { _fun0008_ip = 75; continue _fun0008 }
 159:
                    return var1;
 161:
                    var1 = new Array(0);
                    return var1;
 167:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function useSubscriptionListingsForGuild(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var2 = arguments[1];
            var _closure2_slot0 = var4;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0009_ip = 28; continue _fun0009 }
 18:
            var2 = {'includeSoftDeleted': false, 'sortDeletedListingsLast': false};
 28:
            var _closure2_slot1 = var2;
            var3 = _closure1_slot11;
            var3 = var3.bind(var5)(var4);
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 5;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useStateFromStoresArray;
            var5 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var6 = new Array(0);
                    var4 = _closure1_slot14;
                    var1 = _closure2_slot0;
                    var9 = null;
                    if(!(var9 == var1)) { _fun0010_ip = 32; continue _fun0010 }
 26:
                    var1 = _closure1_slot10;
                    _fun0010_ip = 51; continue _fun0010;
 32:
                    var8 = _closure1_slot8;
                    var7 = var8.getSubscriptionGroupListingsForGuild;
                    var5 = _closure2_slot0;
                    var1 = var7.bind(var8)(var5);
 51:
                    var8 = undefined;
                    var7 = var4.bind(var8)(var1);
                    var4 = var7.bind(var8)();
                    var1 = var4.done;
                    var5 = var4;
                    var4 = undefined;
                    if(var1) { _fun0010_ip = 208; continue _fun0010 }
 78:
                    var11 = _closure1_slot14;
                    var1 = var5.value;
                    var1 = var1.subscription_listings_ids;
                    var12 = var11.bind(var8)(var1);
                    var11 = var12.bind(var8)();
                    var1 = var11.done;
                    if(var1) { _fun0010_ip = 193; continue _fun0010 }
 110:
                    var14 = var11.value;
                    var13 = _closure1_slot8;
                    var1 = var13.getSubscriptionListing;
                    var13 = var1.bind(var13)(var14);
                    var1 = var9 == var13;
                    if(var1) { _fun0010_ip = 162; continue _fun0010 }
 137:
                    var14 = _closure2_slot1;
                    var14 = var14.includeSoftDeleted;
                    var14 = !var14;
                    if(!var14) { _fun0010_ip = 159; continue _fun0010 }
 153:
                    var14 = var13.soft_deleted;
 159:
                    var1 = var14;
 162:
                    if(var1) { _fun0010_ip = 175; continue _fun0010 }
 165:
                    var1 = var6.push;
                    var1 = var1.bind(var6)(var13);
 175:
                    var14 = var12.bind(var8)();
                    var1 = var14.done;
                    var11 = var14;
                    var4 = var13;
                    if(!var1) { _fun0010_ip = 110; continue _fun0010 }
 193:
                    var11 = var7.bind(var8)();
                    var1 = var11.done;
                    var5 = var11;
                    if(!var1) { _fun0010_ip = 78; continue _fun0010 }
 208:
                    var1 = _closure2_slot1;
                    var4 = var1.includeSoftDeleted;
                    var1 = var6;
                    if(!var4) { _fun0010_ip = 297; continue _fun0010 }
 224:
                    var2 = _closure2_slot1;
                    var2 = var2.sortDeletedListingsLast;
                    var1 = var6;
                    if(!var2) { _fun0010_ip = 297; continue _fun0010 }
 240:
                    var4 = var6.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.soft_deleted;
                        var1 = !var1;
                        return var1;
                    };
                    var17 = var4.bind(var6)(var2);
                    var2 = new Array(0);
                    var16 = 0;
                    var18 = var2;
                    var16 = arraySpread(var18, var17, var16);
                    var5 = var6.filter;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.soft_deleted;
                        return var1;
                    };
                    var17 = var5.bind(var6)(var3);
                    var18 = var2;
                    var3 = arraySpread(var18, var17, var16);
                    var1 = var2;
 297:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx';
    var7 = var8.bind(var9)(var7);
    var3['useFetchListingsForGuild'] = var6;
    var6 = function() {
        var10 = _closure1_slot6;
        var4 = var10.useState;
        var2 = false;
        var2 = var4.bind(var10)(var2);
        var8 = _closure1_slot5;
        var3 = undefined;
        var7 = 2;
        var5 = var8.bind(var3)(var2, var7);
        var2 = 0;
        var4 = var5[var2];
        var6 = 1;
        var5 = var5[var6];
        var _closure2_slot0 = var5;
        var9 = var10.useState;
        var5 = null;
        var5 = var9.bind(var10)(var5);
        var5 = var8.bind(var3)(var5, var7);
        var2 = var5[var2];
        var5 = var5[var6];
        var _closure2_slot1 = var5;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0011_ip = 156; continue _fun0011 }
 10:
                        var4 = arg1;
                        var2 = arg2;
                        var7 = _closure2_slot0;
                        var5 = undefined;
                        var6 = true;
                        var6 = var7.bind(var5)(var6);
                        var7 = _closure2_slot1;
                        var6 = null;
                        var6 = var7.bind(var5)(var6);
 43: // try_start_0 // try_start_1
                        var7 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var6 = 6;
                        var6 = var8[var6];
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.createSubscriptionGroupListing;
                        var2 = var6.bind(var7)(var4, var2);
                        SaveGenerator(address=82);
 80:
                        return var2;
 82:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0011_ip = 102; continue _fun0011 }
 88: // try_end0 // try_end1
                        var6 = _closure2_slot0;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 102:
                        var6 = _closure2_slot0;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 116: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var5)(var4);
 127: // try_end2
                        var4 = _closure2_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
 141: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 156:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var3 = var1.bind(var3)();
        var1 = {};
        var1['loading'] = var4;
        var1['createSubscriptionGroupListing'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['useCreateSubscriptionGroupListing'] = var6;
    var6 = function() {
        var6 = _closure1_slot6;
        var4 = var6.useState;
        var2 = false;
        var2 = var4.bind(var6)(var2);
        var9 = _closure1_slot5;
        var3 = undefined;
        var8 = 2;
        var5 = var9.bind(var3)(var2, var8);
        var2 = 0;
        var4 = var5[var2];
        var7 = 1;
        var5 = var5[var7];
        var _closure2_slot0 = var5;
        var10 = var6.useState;
        var5 = null;
        var5 = var10.bind(var6)(var5);
        var5 = var9.bind(var3)(var5, var8);
        var2 = var5[var2];
        var5 = var5[var7];
        var _closure2_slot1 = var5;
        var5 = var6.useCallback;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0012_ip = 160; continue _fun0012 }
 10:
                        var6 = arg1;
                        var4 = arg2;
                        var2 = arg3;
                        var8 = _closure2_slot0;
                        var5 = undefined;
                        var7 = true;
                        var7 = var8.bind(var5)(var7);
                        var8 = _closure2_slot1;
                        var7 = null;
                        var7 = var8.bind(var5)(var7);
 46: // try_start_0 // try_start_1
                        var8 = _closure1_slot2;
                        var9 = _closure1_slot3;
                        var7 = 6;
                        var7 = var9[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.updateSubscriptionGroupListing;
                        var2 = var7.bind(var8)(var6, var4, var2);
                        SaveGenerator(address=86);
 84:
                        return var2;
 86:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0012_ip = 106; continue _fun0012 }
 92: // try_end0 // try_end1
                        var6 = _closure2_slot0;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 106:
                        var6 = _closure2_slot0;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 120: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var5)(var4);
 131: // try_end2
                        var4 = _closure2_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
 145: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 160:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var3 = var1.bind(var3)();
        var1 = new Array(0);
        var3 = var5.bind(var6)(var3, var1);
        var1 = {};
        var1['loading'] = var4;
        var1['updateSubscriptionGroupListing'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['useUpdateSubscriptionGroupListing'] = var6;
    var3['useSubscriptionListingsForGroup'] = var5;
    var5 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0013_ip = 38; continue _fun0013 }
 16:
                var4 = _closure1_slot8;
                var3 = var4.getSubscriptionListing;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 38:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSubscriptionListing'] = var5;
    var5 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0014_ip = 38; continue _fun0014 }
 16:
                var4 = _closure1_slot8;
                var3 = var4.getSubscriptionGroupListing;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 38:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSubscriptionGroupListing'] = var5;
    var5 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot3;
        var3 = 8;
        var3 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var3);
        var7 = var8.useGroupListingsFetchContext;
        var3 = 'useGroupListingsForGuild';
        var3 = var7.bind(var8)(var3);
        var _closure2_slot1 = var3;
        var3 = 5;
        var3 = var6[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0015_ip = 20; continue _fun0015 }
 13:
                var1 = _closure2_slot1;
                if(var1) { _fun0015_ip = 29; continue _fun0015 }
 20:
                var1 = _closure1_slot10;
                _fun0015_ip = 51; continue _fun0015;
 29:
                var4 = _closure1_slot8;
                var3 = var4.getSubscriptionGroupListingsForGuild;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 51:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useGroupListingsForGuild'] = var5;
    var3['useSubscriptionListingsForGuild'] = var4;
    var4 = function(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var6 = var5.useState;
        var2 = false;
        var7 = var6.bind(var5)(var2);
        var6 = _closure1_slot5;
        var8 = undefined;
        var2 = 2;
        var7 = var6.bind(var8)(var7, var2);
        var2 = 0;
        var2 = var7[var2];
        var _closure2_slot1 = var2;
        var6 = 1;
        var6 = var7[var6];
        var _closure2_slot2 = var6;
        var7 = var5.useMemo;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.getRoleSubscriptionPlanId;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var7.bind(var5)(var3, var6);
        var _closure2_slot3 = var3;
        var7 = _closure1_slot0;
        var9 = _closure1_slot3;
        var6 = 5;
        var6 = var9[var6];
        var8 = var7.bind(var8)(var6);
        var7 = var8.useStateFromStoresArray;
        var4 = _closure1_slot8;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure2_slot3;
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot8;
                var2 = var3.getDidFetchListingForSubscriptionPlanId;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var7.bind(var8)(var6, var3, var4);
        var _closure2_slot4 = var6;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var2;
        var3[1] = var6;
        var1 = function() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var3 = _closure2_slot1;
                var3 = !var3;
                if(!var3) { _fun0016_ip = 30; continue _fun0016 }
 15:
                var4 = _closure2_slot4;
                var5 = var4.length;
                var4 = 0;
                var3 = var5 > var4;
 30:
                if(!var3) { _fun0016_ip = 121; continue _fun0016 }
 33:
                var5 = _closure2_slot2;
                var4 = undefined;
                var3 = true;
                var3 = var5.bind(var4)(var3);
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.all;
                var6 = _closure2_slot4;
                var5 = var6.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchSubscriptionListingForPlan;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                var4 = var3.bind(var4)(var2);
                var3 = var4.catch;
                var2 = function() {
                    var1 = undefined;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.then;
                var1 = function() {
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 121:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1, var3);
        var1 = {};
        var1['loading'] = var2;
        return var1;
    };
    var3['useFetchListingsForSubscriptions'] = var4;
    var4 = function() {
        var10 = _closure1_slot6;
        var4 = var10.useState;
        var3 = false;
        var3 = var4.bind(var10)(var3);
        var8 = _closure1_slot5;
        var2 = undefined;
        var7 = 2;
        var5 = var8.bind(var2)(var3, var7);
        var4 = 0;
        var3 = var5[var4];
        var6 = 1;
        var5 = var5[var6];
        var _closure2_slot0 = var5;
        var9 = var10.useState;
        var5 = null;
        var5 = var9.bind(var10)(var5);
        var5 = var8.bind(var2)(var5, var7);
        var4 = var5[var4];
        var5 = var5[var6];
        var _closure2_slot1 = var5;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0017_ip = 170; continue _fun0017 }
 10:
                        var7 = arg1;
                        var6 = arg2;
                        var2 = arg3;
 19: // try_start_0 // try_start_1
                        var8 = _closure2_slot0;
                        var5 = undefined;
                        var4 = true;
                        var8 = var8.bind(var5)(var4);
                        var9 = _closure2_slot1;
                        var8 = null;
                        var8 = var9.bind(var5)(var8);
                        var9 = _closure1_slot2;
                        var10 = _closure1_slot3;
                        var8 = 6;
                        var8 = var10[var8];
                        var9 = var9.bind(var5)(var8);
                        var8 = var9.deleteSubscriptionListing;
                        var2 = var8.bind(var9)(var7, var6, var2);
                        SaveGenerator(address=86);
 84:
                        return var2;
 86:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0017_ip = 106; continue _fun0017 }
 92: // try_end0 // try_end1
                        var7 = _closure2_slot0;
                        var6 = false;
                        var6 = var7.bind(var5)(var6);
                        return var4;
 106:
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        return var2;
 120: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=4);
                        var4 = _closure2_slot1;
                        var2 = undefined;
                        var4 = var4.bind(var2)(var5);
 136: // try_end2
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        return var2;
 150: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var5 = _closure2_slot0;
                        var4 = undefined;
                        var3 = false;
                        var3 = var5.bind(var4)(var3);
                        throw var2;
 170:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var2 = var1.bind(var2)();
        var1 = {};
        var1['error'] = var4;
        var1['submitting'] = var3;
        var1['deleteSubscriptionListing'] = var2;
        return var1;
    };
    var3['useDeleteSubscriptionListing'] = var4;
    var4 = function() {
        var3 = _closure1_slot1;
        var6 = _closure1_slot3;
        var2 = 10;
        var2 = var6[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var5 = _closure1_slot2;
        var2 = 6;
        var2 = var6[var2];
        var2 = var5.bind(var4)(var2);
        var2 = var2.archiveSubscriptionListing;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot5;
        var1 = 2;
        var3 = var2.bind(var4)(var3, var1);
        var1 = 0;
        var2 = var3[var1];
        var1 = 1;
        var4 = var3[var1];
        var3 = var4.loading;
        var1 = {};
        var4 = var4.error;
        var1['error'] = var4;
        var1['submitting'] = var3;
        var1['archiveSubscriptionListing'] = var2;
        return var1;
    };
    var3['useArchiveSubscriptionListing'] = var4;
    var4 = function() {
        var10 = _closure1_slot6;
        var4 = var10.useState;
        var1 = false;
        var1 = var4.bind(var10)(var1);
        var8 = _closure1_slot5;
        var3 = undefined;
        var7 = 2;
        var1 = var8.bind(var3)(var1, var7);
        var5 = 0;
        var4 = var1[var5];
        var6 = 1;
        var1 = var1[var6];
        var _closure2_slot0 = var1;
        var9 = var10.useState;
        var1 = null;
        var1 = var9.bind(var10)(var1);
        var1 = var8.bind(var3)(var1, var7);
        var5 = var1[var5];
        var1 = var1[var6];
        var _closure2_slot1 = var1;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0018_ip = 218; continue _fun0018 }
 13:
                        var11 = var2.guildId;
                        var10 = var2.groupListingId;
                        var9 = var2.listingId;
                        var6 = undefined;
                        SaveGenerator(address=36);
 34:
                        return var6;
 36:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0018_ip = 215; continue _fun0018 }
 45: // try_start_0 // try_start_1
                        var3 = _closure2_slot0;
                        var5 = true;
                        var3 = var3.bind(var6)(var5);
                        var7 = _closure2_slot1;
                        var3 = null;
                        var3 = var7.bind(var6)(var3);
                        var7 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var3 = 6;
                        var3 = var8[var3];
                        var8 = var7.bind(var6)(var3);
                        var7 = var8.updateSubscriptionListing;
                        var3 = {};
                        var3['guildId'] = var11;
                        var3['groupListingId'] = var10;
                        var3['listingId'] = var9;
                        var9 = {};
                        var9['published'] = var5;
                        var3['data'] = var9;
                        var3 = var7.bind(var8)(var3);
                        SaveGenerator(address=135);
 133:
                        return var3;
 135:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0018_ip = 155; continue _fun0018 }
 141: // try_end0 // try_end1
                        var8 = _closure2_slot0;
                        var7 = false;
                        var7 = var8.bind(var6)(var7);
                        return var5;
 155:
                        var5 = _closure2_slot0;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        return var3;
 169: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=4);
                        var4 = _closure2_slot1;
                        var4 = var4.bind(var6)(var5);
 183: // try_end2
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var6)(var3);
                        return var6;
 197: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot0;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
 215:
                        return var2;
 218:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var3 = var1.bind(var3)();
        var1 = {};
        var1['error'] = var5;
        var1['submitting'] = var4;
        var1['publishSubscriptionListing'] = var3;
        var2 = function clearError() {
            var3 = _closure2_slot1;
            var2 = undefined;
            var1 = null;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1['clearError'] = var2;
        return var1;
    };
    var3['usePublishSubscriptionListing'] = var4;
    var4 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                var1 = undefined;
                if(!var3) { _fun0019_ip = 40; continue _fun0019 }
 18:
                var4 = _closure1_slot8;
                var3 = var4.getSubscriptionSettings;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 40:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSubscriptionsSettings'] = var4;
    var4 = function() {
        var6 = _closure1_slot6;
        var4 = var6.useState;
        var2 = false;
        var2 = var4.bind(var6)(var2);
        var9 = _closure1_slot5;
        var3 = undefined;
        var8 = 2;
        var5 = var9.bind(var3)(var2, var8);
        var2 = 0;
        var4 = var5[var2];
        var7 = 1;
        var5 = var5[var7];
        var _closure2_slot0 = var5;
        var10 = var6.useState;
        var5 = null;
        var5 = var10.bind(var6)(var5);
        var5 = var9.bind(var3)(var5, var8);
        var2 = var5[var2];
        var5 = var5[var7];
        var _closure2_slot1 = var5;
        var5 = var6.useCallback;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0020_ip = 144; continue _fun0020 }
 10:
                        var4 = arg1;
                        var2 = arg2;
                        var7 = _closure2_slot0;
                        var5 = undefined;
                        var6 = true;
                        var6 = var7.bind(var5)(var6);
                        var7 = _closure2_slot1;
                        var6 = null;
                        var6 = var7.bind(var5)(var6);
 43: // try_start_0 // try_start_1
                        var7 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var6 = 6;
                        var6 = var8[var6];
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.updateSubscriptionsSettings;
                        var2 = var6.bind(var7)(var4, var2);
                        SaveGenerator(address=82);
 80:
                        return var2;
 82:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0020_ip = 90; continue _fun0020 }
 88: // try_end0
                        _fun0020_ip = 115; continue _fun0020;
 90: // try_end1
                        var6 = _closure2_slot0;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 104: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var5)(var4);
 115: // try_end2
                        var4 = _closure2_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
 129: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 144:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var3 = var1.bind(var3)();
        var1 = new Array(0);
        var3 = var5.bind(var6)(var3, var1);
        var1 = {};
        var1['loading'] = var4;
        var1['updateSubscriptionsSettings'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['useUpdateSubscriptionsSettings'] = var4;
    var4 = function() {
        var10 = _closure1_slot6;
        var4 = var10.useState;
        var3 = false;
        var3 = var4.bind(var10)(var3);
        var8 = _closure1_slot5;
        var2 = undefined;
        var7 = 2;
        var5 = var8.bind(var2)(var3, var7);
        var4 = 0;
        var3 = var5[var4];
        var6 = 1;
        var5 = var5[var6];
        var _closure2_slot0 = var5;
        var9 = var10.useState;
        var5 = null;
        var5 = var9.bind(var10)(var5);
        var5 = var8.bind(var2)(var5, var7);
        var4 = var5[var4];
        var5 = var5[var6];
        var _closure2_slot1 = var5;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0021_ip = 166; continue _fun0021 }
 10:
                        var4 = arg1;
                        var2 = arg2;
 16: // try_start_0 // try_start_1
                        var7 = _closure2_slot0;
                        var5 = undefined;
                        var6 = true;
                        var6 = var7.bind(var5)(var6);
                        var7 = _closure2_slot1;
                        var6 = null;
                        var6 = var7.bind(var5)(var6);
                        var7 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var6 = 6;
                        var6 = var8[var6];
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.deleteSubscriptionGroupListing;
                        var2 = var6.bind(var7)(var4, var2);
                        SaveGenerator(address=82);
 80:
                        return var2;
 82:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0021_ip = 102; continue _fun0021 }
 88: // try_end0 // try_end1
                        var6 = _closure2_slot0;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 102:
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        return var2;
 116: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=4);
                        var4 = _closure2_slot1;
                        var2 = undefined;
                        var4 = var4.bind(var2)(var5);
 132: // try_end2
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        return var2;
 146: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var5 = _closure2_slot0;
                        var4 = undefined;
                        var3 = false;
                        var3 = var5.bind(var4)(var3);
                        throw var2;
 166:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var2 = var1.bind(var2)();
        var1 = {};
        var1['error'] = var4;
        var1['submitting'] = var3;
        var1['deleteSubscriptionGroupListing'] = var2;
        return var1;
    };
    var3['useDeleteSubscriptionGroupListing'] = var4;
    var4 = function() {
        var6 = _closure1_slot6;
        var4 = var6.useState;
        var2 = false;
        var2 = var4.bind(var6)(var2);
        var9 = _closure1_slot5;
        var3 = undefined;
        var8 = 2;
        var5 = var9.bind(var3)(var2, var8);
        var2 = 0;
        var4 = var5[var2];
        var7 = 1;
        var5 = var5[var7];
        var _closure2_slot0 = var5;
        var10 = var6.useState;
        var5 = null;
        var5 = var10.bind(var6)(var5);
        var5 = var9.bind(var3)(var5, var8);
        var2 = var5[var2];
        var5 = var5[var7];
        var _closure2_slot1 = var5;
        var5 = var6.useCallback;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0022_ip = 140; continue _fun0022 }
 10:
                        var2 = arg1;
                        var6 = _closure2_slot0;
                        var5 = undefined;
                        var4 = true;
                        var4 = var6.bind(var5)(var4);
                        var6 = _closure2_slot1;
                        var4 = null;
                        var4 = var6.bind(var5)(var4);
 40: // try_start_0 // try_start_1
                        var6 = _closure1_slot2;
                        var7 = _closure1_slot3;
                        var4 = 6;
                        var4 = var7[var4];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.fetchSubscriptionsSettings;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=78);
 76:
                        return var2;
 78:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0022_ip = 86; continue _fun0022 }
 84: // try_end0
                        _fun0022_ip = 111; continue _fun0022;
 86: // try_end1
                        var6 = _closure2_slot0;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 100: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var5)(var4);
 111: // try_end2
                        var4 = _closure2_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
 125: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 140:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var3 = var1.bind(var3)();
        var1 = new Array(0);
        var3 = var5.bind(var6)(var3, var1);
        var1 = {};
        var1['loading'] = var4;
        var1['fetchSubscriptionsSettings'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['useFetchSubscriptionsSettings'] = var4;
    var4 = function() {
        var6 = _closure1_slot6;
        var4 = var6.useState;
        var2 = false;
        var2 = var4.bind(var6)(var2);
        var9 = _closure1_slot5;
        var3 = undefined;
        var8 = 2;
        var5 = var9.bind(var3)(var2, var8);
        var2 = 0;
        var4 = var5[var2];
        var7 = 1;
        var5 = var5[var7];
        var _closure2_slot0 = var5;
        var10 = var6.useState;
        var5 = null;
        var5 = var10.bind(var6)(var5);
        var5 = var9.bind(var3)(var5, var8);
        var2 = var5[var2];
        var5 = var5[var7];
        var _closure2_slot1 = var5;
        var5 = var6.useCallback;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0023_ip = 148; continue _fun0023 }
 10:
                        var6 = arg1;
                        var4 = arg2;
                        var2 = arg3;
                        var8 = _closure2_slot0;
                        var5 = undefined;
                        var7 = true;
                        var7 = var8.bind(var5)(var7);
                        var8 = _closure2_slot1;
                        var7 = null;
                        var7 = var8.bind(var5)(var7);
 46: // try_start_0 // try_start_1
                        var8 = _closure1_slot2;
                        var9 = _closure1_slot3;
                        var7 = 6;
                        var7 = var9[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.updateSubscriptionTrial;
                        var2 = var7.bind(var8)(var6, var4, var2);
                        SaveGenerator(address=86);
 84:
                        return var2;
 86:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0023_ip = 94; continue _fun0023 }
 92: // try_end0
                        _fun0023_ip = 119; continue _fun0023;
 94: // try_end1
                        var6 = _closure2_slot0;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 108: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var5)(var4);
 119: // try_end2
                        var4 = _closure2_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
 133: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 148:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var3 = var1.bind(var3)();
        var1 = new Array(0);
        var3 = var5.bind(var6)(var3, var1);
        var1 = {};
        var1['loading'] = var4;
        var1['updateSubscriptionTrial'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['useUpdateSubscriptionsTrial'] = var4;
    var4 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0024_ip = 38; continue _fun0024 }
 16:
                var4 = _closure1_slot8;
                var3 = var4.getSubscriptionTrial;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 38:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSubscriptionTrial'] = var4;
    var4 = function(arg1) {
        var4 = _closure1_slot12;
        var5 = undefined;
        var3 = arg1;
        var6 = var4.bind(var5)(var3);
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var7 = _closure1_slot3;
        var3 = 5;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot8;
                var2 = var3.getSubscriptionTrial;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 11;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useSubscriptionTrialsForGroup'] = var4;
    var2 = function(arg1) {
        var4 = _closure1_slot13;
        var5 = undefined;
        var3 = arg1;
        var6 = var4.bind(var5)(var3);
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var7 = _closure1_slot3;
        var3 = 5;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot8;
                var2 = var3.getSubscriptionTrial;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 11;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useSubscriptionTrialsForGuild'] = var2;
    return var1;
})();