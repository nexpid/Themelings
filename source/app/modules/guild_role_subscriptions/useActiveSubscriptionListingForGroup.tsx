// app/modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SubscriptionTypes;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActiveSubscriptionListingForGroup(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var10 = 5;
            var4 = var2[var10];
            var7 = undefined;
            var9 = var3.bind(var7)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getSubscriptions;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var8.bind(var9)(var6, var4);
            var _closure2_slot1 = var4;
            var9 = _closure1_slot2;
            var8 = var9.useMemo;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 128; continue _fun0005 }
 13:
                    var1 = {};
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure2_slot1;
                    var7 = var3.bind(var4)(var2);
                    var2 = var7.length;
                    var6 = 0;
                    var2 = var6 < var2;
                    var4 = 6;
                    var3 = undefined;
                    if(!var2) { _fun0005_ip = 126; continue _fun0005 }
 59:
                    var8 = var7[var6];
                    var9 = var8.type;
                    var2 = _closure1_slot6;
                    var2 = var2.GUILD;
                    if(!(var9 === var2)) { _fun0005_ip = 114; continue _fun0005 }
 82:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var4];
                    var9 = var9.bind(var3)(var2);
                    var2 = var9.getRoleSubscriptionPlanId;
                    var2 = var2.bind(var9)(var8);
                    var1[var2] = var8;
 114:
                    var6 = var6 + 1;
                    var2 = var7.length;
                    if(var6 < var2) { _fun0005_ip = 59; continue _fun0005 }
 126:
                    return var1;
 128:
                    var1 = {};
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var6);
            var _closure2_slot2 = var4;
            var2 = var2[var10];
            var6 = var3.bind(var7)(var2);
            var4 = var6.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot0;
                    var10 = null;
                    var1 = var10 != var1;
                    var3 = null;
                    if(!var1) { _fun0006_ip = 40; continue _fun0006 }
 18:
                    var4 = _closure1_slot5;
                    var2 = var4.getSubscriptionGroupListing;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var4)(var1);
 40:
                    var2 = _closure1_slot7;
                    var4 = var10 == var3;
                    var8 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 64; continue _fun0006 }
 58:
                    var1 = var3.subscription_listings_ids;
 64:
                    if(!(var10 == var1)) { _fun0006_ip = 72; continue _fun0006 }
 68:
                    var1 = new Array(0);
 72:
                    var7 = var2.bind(var8)(var1);
                    var2 = var7.bind(var8)();
                    var1 = var2.done;
                    var6 = 0;
                    var5 = var2;
                    var4 = undefined;
                    var2 = undefined;
                    var3 = null;
                    if(var1) { _fun0006_ip = 185; continue _fun0006 }
 100:
                    var13 = var5.value;
                    var12 = _closure1_slot5;
                    var1 = var12.getSubscriptionListing;
                    var12 = var1.bind(var12)(var13);
                    var1 = var10 == var12;
                    var13 = undefined;
                    if(var1) { _fun0006_ip = 144; continue _fun0006 }
 129:
                    var1 = var12.subscription_plans;
                    var1 = var1[var6];
                    var13 = var1.id;
 144:
                    if(!(var10 != var13)) { _fun0006_ip = 166; continue _fun0006 }
 148:
                    var1 = _closure2_slot2;
                    var4 = var1[var13];
                    var2 = var12;
                    var3 = var4;
                    if(!(var10 == var3)) { _fun0006_ip = 185; continue _fun0006 }
 166:
                    var12 = var7.bind(var8)();
                    var1 = var12.done;
                    var5 = var12;
                    var2 = undefined;
                    var3 = null;
                    if(!var1) { _fun0006_ip = 100; continue _fun0006 }
 185:
                    var1 = {};
                    var1['activeSubscription'] = var3;
                    var1['activeSubscriptionListing'] = var2;
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var3, var2);
            var4 = var2.activeSubscription;
            var3 = var2.activeSubscriptionListing;
            var6 = null;
            var8 = var6 == var3;
            var2 = undefined;
            if(var8) { _fun0004_ip = 177; continue _fun0004 }
 165:
            var9 = var3.subscription_plans;
            var8 = 0;
            var2 = var9[var8];
 177:
            var9 = var6 == var2;
            var8 = undefined;
            if(var9) { _fun0004_ip = 191; continue _fun0004 }
 186:
            var8 = var2.id;
 191:
            var _closure2_slot3 = var8;
            var8 = var6 == var2;
            var9 = undefined;
            if(var8) { _fun0004_ip = 210; continue _fun0004 }
 204:
            var9 = var2.sku_id;
 210:
            var _closure2_slot4 = var9;
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var10];
            var11 = var8.bind(var7)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 37; continue _fun0007 }
 16:
                    var4 = _closure1_slot3;
                    var3 = var4.get;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var8, var2);
            var _closure2_slot5 = var2;
            var6 = var6 == var3;
            var8 = undefined;
            if(var6) { _fun0004_ip = 280; continue _fun0004 }
 274:
            var8 = var3.soft_deleted;
 280:
            var _closure2_slot6 = var8;
            var7 = _closure1_slot2;
            var6 = var7.useEffect;
            var5 = new Array(3);
            var5[0] = var2;
            var5[1] = var9;
            var5[2] = var8;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot5;
                    var4 = null;
                    var2 = var4 != var2;
                    if(var2) { _fun0008_ip = 24; continue _fun0008 }
 16:
                    var3 = _closure2_slot4;
                    var2 = var4 == var3;
 24:
                    if(var2) { _fun0008_ip = 49; continue _fun0008 }
 27:
                    var5 = _closure1_slot3;
                    var4 = var5.isFetchingForSKU;
                    var3 = _closure2_slot4;
                    var2 = var4.bind(var5)(var3);
 49:
                    if(var2) { _fun0008_ip = 102; continue _fun0008 }
 52:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 7;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.fetchSubscriptionPlansForSKU;
                    var9 = _closure2_slot4;
                    var6 = _closure2_slot6;
                    var10 = var4;
                    var8 = undefined;
                    var7 = undefined;
                    var1 = var10[var3](var9, var8, var7, var6, var5);
 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['activeSubscription'] = var4;
            var1['activeSubscriptionListing'] = var3;
            var1['activeSubscriptionPlanFromStore'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();